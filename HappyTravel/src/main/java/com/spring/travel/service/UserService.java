package com.spring.travel.service;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.spring.travel.dao.IUserDao;
import com.spring.travel.dto.UserDTO;


@Service("IUserService")
public class UserService implements IUserService {
	
	// 인터페이스로 생성해야함
	@Autowired
	public IUserDao dao;

	// 회원 가입
	@Override
	public void signupUser(UserDTO dto) {
		dao.signupUser(dto);
	}

	// 회원 로그인 체크
	@Override
	public boolean loginCheck(UserDTO dto, HttpSession session) {
		 boolean result = dao.loginCheck(dto);
	        if (result) { // true일 경우 세션에 등록
	        	UserDTO dto2 = viewUser(dto);
	            // 세션 변수 등록
	            session.setAttribute("userId", dto2.getUser_id());
	            session.setAttribute("userName", dto2.getUser_name());
	            session.setAttribute("userEmail", dto2.getUser_email());
	        } 
	        return result;
	}

	// 회원 로그인 정보
	@Override
	public UserDTO viewUser(UserDTO dto) {
		return  dao.viewUser(dto);
	}

	// 회원 로그아웃
	@Override
	public void logout(HttpSession session) {
		// 세션 변수 개별 삭제
        // session.removeAttribute("userId");
        // 세션 정보를 초기화 시킴
        session.invalidate();
	}

	@Override
	public void modify(UserDTO dto) {
		// TODO Auto-generated method stub
		dao.modify(dto);
	}
	
}
