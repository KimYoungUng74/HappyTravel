package com.spring.travel.controller;

import java.io.PrintWriter;
import java.util.Locale;

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

import com.spring.travel.dto.UserDTO;
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

	// 회원 가입 처리
	@RequestMapping(value = "signupOk.do", method = RequestMethod.POST)
	public String signupOk(Locale locale, UserDTO dto) {
		userSer.signupUser(dto);
		System.out.println("회원가입 되었음");

		return "home";
	}

	// 로그인 화면
	@RequestMapping(value = "login.do")
	public String login(Locale locale, Model model) {
		return "login";
	}

	// 로그인 처리
	@RequestMapping(value = "loginCheck.do")
	public ModelAndView loginCheck(@ModelAttribute UserDTO dto, HttpSession sessison) {
		boolean result = userSer.loginCheck(dto, sessison);
		ModelAndView mav = new ModelAndView();
		if (result) { // 로그인 성공
			// main.jsp로 이동
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
	public ModelAndView logOut(HttpSession session) {
		userSer.logout(session);
		ModelAndView mav = new ModelAndView();
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
		public String userModifyOk(Locale locale, UserDTO dto) {
			userSer.modify(dto);
			System.out.println("회원정보 수정 되었음");

			return "home";
		}

	/*
	 * // login.jsp에서 form태그의 action을 통해 loginOk.do로 들어오게되면
	 * 
	 * @RequestMapping(value = "loginOk.do", method = RequestMethod.POST) public
	 * String loginOk(HttpServletRequest request,HttpServletResponse response)
	 * throws Exception { UserDTO dto = new UserDTO(); // 매개변수로 가져오게되면 마이바티스가 자동으로
	 * DTO에 넣는바람에 후처리가 불가능해서 안에서 따로 생성하게 했음
	 * 
	 * // 이전 form에서 입력받은 ID와 Password 가져옴 int userID = 0; try { userID =
	 * Integer.parseInt(request.getParameter("userID")); }catch(Exception e) {
	 * //변환과정에서 오류가 있다면 형식이 맞지않는것이기에 PrintWriter out = response.getWriter();
	 * out.println("<script>alert('id형식이 맞지않습니다. 숫자만 입력가능합니다.');</script>");
	 * out.flush(); System.out.println("id형식오류"); return "login"; } String
	 * userPassword = request.getParameter("userPassword"); dto.setUserID(userID);
	 * 
	 * dto.setUserPassword(SHA256.getSHA256(userPassword)); UserDTO userSelected_dto
	 * = new UserDTO();
	 * 
	 * userSelected_dto = userSer.selectUser(dto); // 셀렉트문 만들어서 값가져오고 판별 한뒤에 비번맞으면
	 * 아래에 try { // 아이디는 존재할 때 (id와 일치하는 데이터가 없어서 null이 나올경우 또는 비밀번호가 아예 존재하지않는
	 * 아이디였을 경우 ) if
	 * (userSelected_dto.getUserPassword().equals(dto.getUserPassword())) { // 패스워드도
	 * 맞을 때 HttpSession session = request.getSession();
	 * session.setAttribute("userID", userSelected_dto.getUserID()); // 세션에 이름 넣음
	 * session.setAttribute("userName", userSelected_dto.getUserName()); // 세션에 이름
	 * 넣음 session.setAttribute("is_root", userSelected_dto.getIs_root()); // 세션에
	 * 권한코드 넣음 System.out.println("id:"+userSelected_dto.getUserID()+"\nname:"+
	 * userSelected_dto.getUserName()+"\nroot:"+userSelected_dto.getIs_root());
	 * PrintWriter out = response.getWriter();
	 * out.println("<script>alert('"+userSelected_dto.getUserName()
	 * +"님이 로그인 되었습니다');</script>"); out.flush();
	 * System.out.println(userSelected_dto.getUserName()+"님 log in"); } else { //
	 * 패스워드는 틀렷을 때 PrintWriter out = response.getWriter();
	 * out.println("<script>alert('패스워드가 맞지않습니다.');</script>"); out.flush();
	 * 
	 * return "login"; } } catch(Exception e){ PrintWriter out =
	 * response.getWriter();
	 * out.println("<script>alert('존재하지않는 id입니다.');</script>"); out.flush(); return
	 * "login"; }
	 * 
	 * 
	 * PrintWriter out = response.getWriter();
	 * out.println("<script>location.href='index.do'</script>"); out.flush(); return
	 * "index"; }
	 */

}