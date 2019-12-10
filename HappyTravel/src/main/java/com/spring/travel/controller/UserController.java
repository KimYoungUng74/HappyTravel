package com.spring.travel.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.util.List;
import java.util.Locale;

import javax.inject.Inject;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.WebUtils;

import com.spring.travel.dto.ReviewDTO;
import com.spring.travel.dto.UserDTO;
import com.spring.travel.service.IReviewService;
import com.spring.travel.service.IUserService;
import com.spring.travel.service.UserService;

@Controller
public class UserController {

	// 회원가입 화면
	@RequestMapping(value = "signup.do")
	public String signup(Locale locale, Model model) {
		return "signup";
	}

	@Autowired
	IUserService userSer;
	@Inject
	IReviewService reviewSer;
	String popCountry="";


	// 회원 가입 처리
	@RequestMapping(value = "signupOk.do", method = RequestMethod.POST)
	public ModelAndView signupOk(Locale locale, UserDTO dto) {
		userSer.signupUser(dto);
		System.out.println("회원가입 되었음");
		
		ModelAndView mav = new ModelAndView();
		mav=setHome();
		mav.setViewName("home");
		
		return mav;
	}
	
	// 로그인 화면
	@RequestMapping(value = "login.do")
	public String login(Locale locale, Model model) {
		return "login";
	}
	
	// 로그인 화면
		@RequestMapping(value = "/needLogin.do")
		public ModelAndView needLogin(Locale locale, Model model) {
			ModelAndView mav = new ModelAndView("loginWarning");
			mav.addObject("msg", "로그인 후 이용가능한 페이지에 접근하였습니다.");
			return mav;
		}

	// 로그인 처리
	@RequestMapping(value = "loginCheck.do")
	public ModelAndView loginCheck(@ModelAttribute UserDTO dto, HttpSession sessison, HttpServletRequest request, HttpServletResponse response) throws Exception {
		boolean result = userSer.loginCheck(dto, sessison);
		ModelAndView mav = new ModelAndView();
		

		if (result) { // 로그인 성공
			// main.jsp로 이동
			mav=setHome();
			if (request.getParameter("useCookie") != null) {
				int amount = 60 * 60 * 24 * 7;  // 7일
		        Date sessionLimit = new Date(System.currentTimeMillis() + (1000 * amount)); // 로그인 유지기간 설정
		        userSer.keepLogin(dto.getUser_id(), sessison.getId() , sessionLimit);
	            // 쿠키 생성
	            Cookie loginCookie = new Cookie("loginCookie", sessison.getId());
	            loginCookie.setPath("/");
	            loginCookie.setMaxAge(60*60*24*7);
	            // 전송
	            response.addCookie(loginCookie);
	            response.sendRedirect("/travel/home");
	        }
			mav.setViewName("home");
			mav.addObject("msg", "success");
		} else { // 로그인 실패
			// login.jsp로 이동
			mav.setViewName("login");
			mav.addObject("msg", "failure");
		}
		return mav;
	}

	// 로그아웃
	@RequestMapping(value = "logout.do")
	public ModelAndView logOut(HttpSession session,HttpServletRequest request,
            HttpServletResponse response) throws Exception {
		
		
		Object object = session.getAttribute("userinfo");
	    if (object != null) {
	        UserDTO userDTO = (UserDTO) object;
	        session.removeAttribute("login");
	        userSer.logout(session);
	        Cookie loginCookie = WebUtils.getCookie(request, "loginCookie");
	        if (loginCookie != null) {
	            loginCookie.setPath("/");	// 모든결로에서 접근가능
	            loginCookie.setMaxAge(0);
	            response.addCookie(loginCookie);
	            java.util.Date utilDate = new java.util.Date();
	            userSer.keepLogin(userDTO.getUser_id(), "none", null);
	        }
	    }

		ModelAndView mav = new ModelAndView();
		mav=setHome();
		mav.setViewName("home");
		mav.addObject("msg", "logout");
		return mav;
	}

	// 비밀번호 확인 페이지
	@RequestMapping(value = "passworldCheck.do")
	public String passworldCheck(Locale locale, Model model) {
		return "passworldCheck";
	}

	// 비밀번호 확인
	@RequestMapping(value = "passworldCheck.ing")
	public ModelAndView passworldCheck(@ModelAttribute UserDTO dto, HttpSession sessison) {
		boolean result = userSer.loginCheck(dto, sessison);
		ModelAndView mav = new ModelAndView();
		if (result) { // 비밀번호 확인
			UserDTO dto2 = userSer.viewUser(dto);
			mav.setViewName("userModify");
			mav.addObject("msg", "success");
			mav.addObject("user_country", dto2.getUser_country());
			mav.addObject("user_birth", dto2.getUser_birth());
		} else { // 비밀번호 불일치
			mav.setViewName("passworldCheck");
			mav.addObject("msg", "failure");
		}
		return mav;
	}

	// 회원 정보 수정
	@RequestMapping(value = "userModify.do")
	public String userModify(Locale locale, Model model) {
		return "userModify";
	}
	
	// 회원 정보 수정 처리
		@RequestMapping(value = "userModifyOk.do", method = RequestMethod.POST)
		public ModelAndView userModifyOk(Locale locale, UserDTO dto) {
			
			
			ModelAndView mav = new ModelAndView();
			mav=setHome();
			mav.setViewName("home");
			userSer.modify(dto);
			System.out.println("회원정보 수정 되었음");

			return mav;
		}


		public ModelAndView setHome() {
			int totPerson = userSer.totalPerson();
			int totReview = 0;
			List<ReviewDTO> list = null;
			try {
				list = reviewSer.listAll();
				totReview= list.size();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			
			try {
				list	= reviewSer.popCountry();
				popCountry = list.get(0).getCountry();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			ModelAndView mav = new ModelAndView();
			mav.addObject("popCountry", popCountry);
			mav.addObject("totReview", totReview);
			mav.addObject("totPerson", totPerson);
			
			return mav;
		}

}
