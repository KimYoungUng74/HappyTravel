package com.spring.travel.dao;

import java.sql.Date;

import javax.servlet.http.HttpSession;

import com.spring.travel.dto.UserDTO;

// [DB연결 사용법] 2. Dao인터페이스 생성
public interface IUserDAO {
	
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
    // 총 회원 수 
    public int totalPerson();
    
    // 로그인 유지 처리
    void keepLogin(String userId, String sessionId, Date sessionLimit) throws Exception;

    // 세션키 검증
    UserDTO checkUserWithSessionKey(String value) throws Exception;
    
    // 쿠키 비밀번호 확인
	boolean loginCheckCookie(UserDTO dto);
    
}
