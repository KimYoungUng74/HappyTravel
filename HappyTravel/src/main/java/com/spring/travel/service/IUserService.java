package com.spring.travel.service;

import javax.servlet.http.HttpSession;

import com.spring.travel.dto.UserDTO;

// [DB연결 사용법] 5. 서비스 인터페이스 작성
public interface IUserService {
	
	// 회원 가입
	public void signupUser( UserDTO dto);
	
	// 회원 로그인 체크
    public boolean loginCheck(UserDTO dto, HttpSession session);
    
    //  회원 로그인 정보
    public UserDTO viewUser(UserDTO dto);
    
    // 회원 로그아웃
    public void logout(HttpSession session);
    
}

