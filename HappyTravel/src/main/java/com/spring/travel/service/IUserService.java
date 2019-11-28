package com.spring.travel.service;

import com.spring.travel.dto.UserDTO;

// [DB연결 사용법] 5. 서비스 인터페이스 작성
public interface IUserService {
	public void signupUser( UserDTO dto);
	
	public UserDTO selectUser(UserDTO dto);
}
