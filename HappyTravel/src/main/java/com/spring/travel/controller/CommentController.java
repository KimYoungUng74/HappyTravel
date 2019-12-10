package com.spring.travel.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.spring.travel.dto.CommentDTO;
import com.spring.travel.service.ICommentService;
import com.spring.travel.service.IReviewService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class CommentController {

	@Autowired
	ICommentService commentSer;
	@Autowired
	IReviewService reviewSer;

	@RequestMapping("/commentInsert.do") // 댓글 작성
	private ModelAndView CommentInsert(@RequestParam int review_num, @RequestParam String content,
			@RequestParam String writer) throws Exception {

		CommentDTO comment = new CommentDTO();
		comment.setBno(review_num);
		comment.setContent(content);
		comment.setWriter(writer);

		commentSer.commentInsert(comment);

		// 모델(데이터)+뷰(화면)를 함께 전달하는 객체
		ModelAndView mav = new ModelAndView();
		// 리뷰 가져오기
		mav = CommentSet(review_num);

		return mav;
	}

	@RequestMapping("/commentUpdate.do") // 댓글 수정
	private ModelAndView CommentUpdateProc(@RequestParam int review_num, @RequestParam int cno, @RequestParam String content) throws Exception {

		CommentDTO comment = new CommentDTO();
		comment.setCno(cno);
		comment.setContent(content);
		commentSer.commentUpdate(comment);
		// 모델(데이터)+뷰(화면)를 함께 전달하는 객체
		ModelAndView mav = new ModelAndView();
		// 리뷰 가져오기
		mav = CommentSet(review_num);

		return mav;
	}

	@RequestMapping("/commentDelete.do") // 댓글 삭제
	private ModelAndView CommentDelete(@RequestParam int review_num, @RequestParam int cno) throws Exception {

		// 댓글 삭제
		commentSer.commentDelete(cno);
		// 모델(데이터)+뷰(화면)를 함께 전달하는 객체
		ModelAndView mav = new ModelAndView();
		// 리뷰 가져오기
		mav = CommentSet(review_num);
		return mav;
	}

	private ModelAndView CommentSet(int review_num) throws Exception {
		ModelAndView mav = new ModelAndView();
		List<CommentDTO> commentList = new ArrayList<CommentDTO>();
		commentList = commentSer.commentList(review_num);
		mav.addObject("commentList", commentList);
		// 뷰의 이름
		mav.setViewName("reviewView");
		// 뷰에 전달할 데이터
		mav.addObject("dto", reviewSer.read(review_num));
		mav.addObject("review_num", review_num);
		return mav;
	}

}
