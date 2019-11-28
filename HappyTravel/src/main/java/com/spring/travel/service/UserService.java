package com.spring.travel.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.spring.travel.dao.IUserDao;
import com.spring.travel.dto.UserDTO;


@Service("IUserService")
public class UserService implements IUserService {
	// 인터페이스로 생성해야함
	@Autowired
	public IUserDao dao;

	@Override
	public void signupUser(UserDTO dto) {
		dao.signupUser(dto);
	}
	@Override
	public UserDTO selectUser(UserDTO dto) {
		return dao.selectUser(dto);
	}
	
}
