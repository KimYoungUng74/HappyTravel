package com.spring.travel.dao;

import javax.servlet.http.HttpSession;

import com.spring.travel.dto.UserDTO;

// [DB연결 사용법] 2. Dao인터페이스 생성
public interface IUserDao {
	
	// 회원 가입
	public void signupUser (UserDTO dto);	// 사용할 추상메소드 정의
	// 회원 로그인 체크
    public boolean loginCheck(UserDTO dto);
    // 회원 로그인 정보
    public UserDTO viewUser(UserDTO dto);
    // 회원 로그아웃
    public void logout(HttpSession session);
    // 회원 수정
    public void modify(UserDTO dto);
}
