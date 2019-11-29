package com.spring.travel.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.spring.travel.dto.ReviewDTO;
import com.spring.travel.service.IReviewService;
import com.spring.travel.service.ReviewService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class ReviewController {
	
	@Autowired
    IReviewService reviewSer;
	
	// 리뷰 게시글 게시판 목록 화면
	@RequestMapping(value = "/review.do", method = RequestMethod.GET)
	public ModelAndView  reviewpage(Locale locale, Model model) throws Exception {
		List<ReviewDTO> list = reviewSer.listAll();
        // ModelAndView - 모델과 뷰
        ModelAndView mav = new ModelAndView();
        mav.setViewName("reviewPage"); // 뷰를 list.jsp로 설정
        mav.addObject("list", list); // 데이터를 저장
        return mav; // reviewPage.jsp로 List가 전달된다.
	}
	
	// 리뷰 게시글 작성 화면
	@RequestMapping(value = "/reviewWrite.do", method = RequestMethod.GET)
	public String reviewwrite(Locale locale, Model model) {
		return "reviewWrite";
	}
	
	// 리뷰 게시글 작성처리
    @RequestMapping(value="insert.do", method=RequestMethod.POST)
    public String insert(@ModelAttribute ReviewDTO dto) throws Exception{
    	reviewSer.create(dto);
        return "redirect:list.do";
    }
    
    // 리뷰 게시글 상세내용 조회, 게시글 조회수 증가 처리
    @RequestMapping(value="view.do", method=RequestMethod.GET)
    public ModelAndView view(@RequestParam int board_num, HttpSession session) throws Exception{
        // 조회수 증가 처리
    	reviewSer.increaseViewcnt(board_num, session);
        // 모델(데이터)+뷰(화면)를 함께 전달하는 객체
        ModelAndView mav = new ModelAndView();
        // 뷰의 이름
        mav.setViewName("board/view");
        // 뷰에 전달할 데이터
        mav.addObject("dto", reviewSer.read(board_num));
        return mav;
    }
	
    // 리뷰 게시글 수정
    @RequestMapping(value="update.do", method=RequestMethod.POST)
    public String update(@ModelAttribute ReviewDTO dto) throws Exception{
    	reviewSer.update(dto);
        return "redirect:list.do";
    }
    
    // 리뷰 게시글 삭제
    @RequestMapping("delete.do")
    public String delete(@RequestParam int review_num) throws Exception{
    	reviewSer.delete(review_num);
        return "redirect:list.do";
    }
}
