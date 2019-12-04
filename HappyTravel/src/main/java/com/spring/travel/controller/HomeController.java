package com.spring.travel.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.spring.travel.dto.ReviewDTO;
import com.spring.travel.service.IReviewService;
import com.spring.travel.service.IUserService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@Autowired
	IUserService userSer;
	

	@Autowired
	IReviewService reviewSer;

	
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView home(Locale locale, Model model) {
		int totPerson = userSer.totalPerson();

		List<ReviewDTO> list = null;
		try {
			list = reviewSer.listAll();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		int totReview = list.size();
		
		ModelAndView mav = new ModelAndView();
		mav.setViewName("home"); // 뷰를 list.jsp로 설정
		mav.addObject("totReview", totReview);
		mav.addObject("totPerson", totPerson);
		return mav; // reviewPage.jsp로 List가 전달된다.
	}

	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public ModelAndView gohome(Locale locale, Model model) {
		int totPerson = userSer.totalPerson();
		List<ReviewDTO> list = null;
		try {
			list = reviewSer.listAll();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		int totReview = list.size();
		ModelAndView mav = new ModelAndView();
		mav.setViewName("home"); // 뷰를 list.jsp로 설정
		mav.addObject("totReview", totReview);
		mav.addObject("totPerson", totPerson);
		return mav; // reviewPage.jsp로 List가 전달된다.
	}

}
