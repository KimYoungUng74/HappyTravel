package com.spring.travel.dao;

import com.spring.travel.dto.UserDTO;

// [DB연결 사용법] 2. Dao인터페이스 생성
public interface IUserDao {
	public void signupUser (UserDTO dto);	// 사용할 추상메소드 정의
	public UserDTO selectUser(UserDTO dto);
}
