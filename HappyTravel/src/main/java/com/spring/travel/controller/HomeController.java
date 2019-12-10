package com.spring.travel.controller;

import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.spring.travel.dto.InformDTO;
import com.spring.travel.dto.ReviewDTO;
import com.spring.travel.service.IInformService;
import com.spring.travel.service.IReviewService;
import com.spring.travel.service.IUserService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {

	@Autowired
	IUserService userSer;
	

	@Autowired
	IReviewService reviewSer;
	@Autowired
	IInformService informSer;
	
	String popCountry="";
	
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView home(Locale locale, Model model) {
		
		return  setHome(); // reviewPage.jsp로 List가 전달된다.
	}

	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public ModelAndView gohome(Locale locale, Model model) {
		
		return setHome();
	}
	
	public ModelAndView setHome() {
		int totPerson = userSer.totalPerson();
		int totReview = 0;
		List<ReviewDTO> list = null;
		List<ReviewDTO> reviewList = null;
		List<InformDTO> informList = null;
		try {
			list = reviewSer.listAll();
			totReview = list.size();
			reviewList = reviewSer.firstView();
			informList = informSer.firstView();
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
		mav.setViewName("home"); // 뷰를 list.jsp로 설정
		mav.addObject("reviewList", reviewList);
		mav.addObject("informList", informList);
		mav.addObject("popCountry", popCountry);
		mav.addObject("totReview", totReview);
		mav.addObject("totPerson", totPerson);
		
		return mav;
	}

}
