package com.spring.travel.controller;

import java.text.DateFormat;
import java.util.ArrayList;
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

import com.spring.travel.dto.PageDTO;
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
	public ModelAndView reviewpage(@RequestParam String country, @RequestParam int page, Locale locale, Model model)
			throws Exception {

		// 나라 선택 부분
		List<ReviewDTO> list = null;
		if (country.equals("all")) {
			list = reviewSer.listAll();
		} else {
			list = reviewSer.listPick(country);
		}

		PageDTO pageDTO = new PageDTO(list.size(), page);

		int start = pageDTO.getPageBegin();
		int end = pageDTO.getPageEnd();

		/*
		 * page--; // page; if(list.size()%PAGE_CUT == 0) {
		 * totBlock=list.size()/PAGE_CUT; // 총 페이지 갯수 } else {
		 * totBlock=list.size()/PAGE_CUT+1; // 총 페이지 갯수 }
		 * 
		 */
		List<ReviewDTO> nowList = new ArrayList<ReviewDTO>();

		for (int i = 0; i < PageDTO.PAGE_CUT; i++) {
			try {
				nowList.add(list.get(PageDTO.PAGE_CUT * page + i));
			} catch (IndexOutOfBoundsException e) {
			}
		}

		// ModelAndView - 모델과 뷰
		ModelAndView mav = new ModelAndView();
		mav.addObject("country", country);
		mav.setViewName("reviewPage"); // 뷰를 list.jsp로 설정
		mav.addObject("list", nowList); // 데이터를 저장
		mav.addObject("pageDTO", pageDTO);
		mav.addObject("nowPage", page);
		// mav.addObject("totCount", totBlock);
		return mav; // reviewPage.jsp로 List가 전달된다.
	}

	// 리뷰 게시글 작성 화면
	@RequestMapping(value = "/reviewWrite.do", method = RequestMethod.GET)
	public String reviewwrite(Locale locale, Model model) {
		return "reviewWrite";
	}

	// 리뷰 게시글 작성처리
	@RequestMapping(value = "reviewInsert.do", method = RequestMethod.POST)
	public String insert(@ModelAttribute ReviewDTO dto) throws Exception {
		System.out.println(dto.toString());

		String title = dto.getTitle();
		String content = dto.getContents();
		String writer = dto.getUser_name();
		// *태그문자 처리 (< ==> &lt; > ==> &gt;)
		// replace(A, B) A를 B로 변경
		title = title.replace("<", "&lt;");
		title = title.replace("<", "&gt;");
		writer = writer.replace("<", "&lt;");
		writer = writer.replace("<", "&gt;");
		// *공백문자 처리
		title = title.replace("  ", "&nbsp;&nbsp;");
		writer = writer.replace("  ", "&nbsp;&nbsp;");
		// *줄바꿈 문자처리
		content = content.replace("\n", "<br>");

		dto.setTitle(title);
		dto.setContents(content);
		dto.setUser_name(writer);

		reviewSer.create(dto);
		return "redirect:review.do?country=all&page=1";
	}

	// 리뷰 게시글 상세내용 조회, 게시글 조회수 증가 처리
	@RequestMapping(value = "reviewView.do", method = RequestMethod.GET)
	public ModelAndView view(@RequestParam int review_num, HttpSession session) throws Exception {
		// 조회수 증가 처리
		reviewSer.increaseViewcnt(review_num, session);
		// 모델(데이터)+뷰(화면)를 함께 전달하는 객체
		ModelAndView mav = new ModelAndView();
		// 뷰의 이름
		mav.setViewName("reviewView");
		// 뷰에 전달할 데이터
		mav.addObject("dto", reviewSer.read(review_num));
		return mav;
	}

	// 리뷰 게시글 수정페이지
	@RequestMapping(value = "reviewUpdatePage.do", method = RequestMethod.GET)
	public ModelAndView updatePage(@RequestParam int review_num, HttpSession session) throws Exception {
		// 모델(데이터)+뷰(화면)를 함께 전달하는 객체
		ModelAndView mav = new ModelAndView();
		// 뷰의 이름
		mav.setViewName("reviewModify");
		// 뷰에 전달할 데이터
		ReviewDTO dto = reviewSer.read(review_num);
		String content = dto.getContents();
		// DB에 들어간 <br>태그 없애주기
		content = content.replace("<br>", "");
		dto.setContents(content);
		mav.addObject("dto", dto);
		return mav;
	}

	// 리뷰 게시글 수정
	@RequestMapping(value = "reviewUpdate.do", method = RequestMethod.POST)
	public String update(@ModelAttribute ReviewDTO dto) throws Exception {
		String title = dto.getTitle();
		String content = dto.getContents();
		String writer = dto.getUser_name();
		// *태그문자 처리 (< ==> &lt; > ==> &gt;)
		// replace(A, B) A를 B로 변경
		title = title.replace("<", "&lt;");
		title = title.replace("<", "&gt;");
		writer = writer.replace("<", "&lt;");
		writer = writer.replace("<", "&gt;");
		// *공백문자 처리
		title = title.replace("  ", "&nbsp;&nbsp;");
		writer = writer.replace("  ", "&nbsp;&nbsp;");
		// *줄바꿈 문자처리
		content = content.replace("\n", "<br>");

		dto.setTitle(title);
		dto.setContents(content);
		dto.setUser_name(writer);

		reviewSer.update(dto);
		return "redirect:review.do?country=all";
	}

	// 리뷰 게시글 삭제
	@RequestMapping("reviewDelete.do")
	public String delete(@RequestParam int review_num) throws Exception {
		reviewSer.delete(review_num);
		return "redirect:review.do?country=all&page=1";
	}
}
