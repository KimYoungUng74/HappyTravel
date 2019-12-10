package com.spring.travel.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.spring.travel.dto.PageDTO;
import com.spring.travel.dto.InformDTO;
import com.spring.travel.service.IInformService;
import com.spring.travel.service.InformService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class InformController {

	@Autowired
	IInformService informSer;

	// 리뷰 게시글 게시판 목록 화면
	@RequestMapping(value = "inform.do", method = RequestMethod.GET)
	public ModelAndView informpage(@RequestParam String country, @RequestParam int page, Locale locale, Model model)
			throws Exception {

		// 나라 선택 부분
		List<InformDTO> list = null;
		if (country.equals("all")) {
			list = informSer.listAll();
		} else {
			list = informSer.listPick(country);
		}
		PageDTO pageDTO = new PageDTO(list.size(), page);


		/*
		 * page--; // page; if(list.size()%PAGE_CUT == 0) {
		 * totBlock=list.size()/PAGE_CUT; // 총 페이지 갯수 } else {
		 * totBlock=list.size()/PAGE_CUT+1; // 총 페이지 갯수 }
		 * 
		 */
		List<InformDTO> nowList = new ArrayList<InformDTO>();

		for (int i = 0; i < PageDTO.PAGE_CUT; i++) {
			try {
				nowList.add(list.get(PageDTO.PAGE_CUT * (page-1) + i));
			} catch (IndexOutOfBoundsException e) {
			}
		}
		// ModelAndView - 모델과 뷰
		ModelAndView mav = new ModelAndView();
		mav.addObject("country", country);
		mav.setViewName("informPage"); // 뷰를 list.jsp로 설정
		mav.addObject("list", nowList); // 데이터를 저장
		mav.addObject("pageDTO", pageDTO);
		mav.addObject("nowPage", page);
		// mav.addObject("totCount", totBlock);
		return mav; // informPage.jsp로 List가 전달된다.
	}

	// 리뷰 게시글 작성 화면
	@RequestMapping(value = "/informWrite.do", method = RequestMethod.GET)
	public String informwrite(Locale locale, Model model) {
		return "informWrite";
	}

	// 리뷰 게시글 작성처리
	@RequestMapping(value = "informInsert.do", method = RequestMethod.POST)
	public String insert(@ModelAttribute InformDTO dto) throws Exception {
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

		informSer.create(dto);
		return "redirect:inform.do?country=all&page=1";
	}

	// 리뷰 게시글 상세내용 조회, 게시글 조회수 증가 처리
	@RequestMapping(value = "informView.do", method = RequestMethod.GET)
	public ModelAndView view(@RequestParam int inform_num, HttpSession session) throws Exception {
		// 조회수 증가 처리
		informSer.increaseViewcnt(inform_num, session);
		// 모델(데이터)+뷰(화면)를 함께 전달하는 객체
		ModelAndView mav = new ModelAndView();
		// 뷰의 이름
		mav.setViewName("informView");
		// 뷰에 전달할 데이터
		mav.addObject("dto", informSer.read(inform_num));
		return mav;
	}

	// 리뷰 게시글 수정페이지
	@RequestMapping(value = "informUpdatePage.do", method = RequestMethod.GET)
	public ModelAndView updatePage(@RequestParam int inform_num, HttpSession session) throws Exception {
		// 모델(데이터)+뷰(화면)를 함께 전달하는 객체
		ModelAndView mav = new ModelAndView();
		// 뷰의 이름
		mav.setViewName("informModify");
		// 뷰에 전달할 데이터
		InformDTO dto = informSer.read(inform_num);
		String content = dto.getContents();
		// DB에 들어간 <br>태그 없애주기
		content = content.replace("<br>", "");
		dto.setContents(content);
		mav.addObject("dto", dto);
		return mav;
	}

	// 리뷰 게시글 수정
	@RequestMapping(value = "informUpdate.do", method = RequestMethod.POST)
	public String update(@ModelAttribute InformDTO dto) throws Exception {
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

		informSer.update(dto);
		return "redirect:inform.do?country=all&page=1";
	}

	// 리뷰 게시글 삭제
	@RequestMapping("informDelete.do")
	public String delete(@RequestParam int inform_num) throws Exception {
		informSer.delete(inform_num);
		return "redirect:inform.do?country=all&page=1";
	}
}
