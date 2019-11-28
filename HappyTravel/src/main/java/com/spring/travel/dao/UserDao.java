package com.spring.travel.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.spring.travel.dto.UserDTO;
import com.spring.travel.util.SHA256;


//[DB연결 사용법] 3. 인터페이스 받아서 클래스 생성
@Repository
public class UserDao implements IUserDao {
	// 컨테이너가 객체를 자동으로 생성 Autowired
	@Autowired
	public SqlSessionTemplate mybatis;
	
	@Override
	public void signupUser(UserDTO dto) {
		// TODO Auto-generated method stub
		// 비밀 번호 암호화
		dto.setUser_pw(SHA256.getSHA256(dto.getUser_pw()));
		mybatis.insert("UserMapper.Signup", dto);
	}
	
	
	@Override
	public UserDTO selectUser(UserDTO dto) {
		return mybatis.selectOne("UserMapper.SelectUser",dto);
	}
}
