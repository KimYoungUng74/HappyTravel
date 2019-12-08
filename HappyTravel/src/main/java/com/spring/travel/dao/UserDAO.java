package com.spring.travel.dao;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.spring.travel.dto.UserDTO;
import com.spring.travel.util.SHA256;


//[DB연결 사용법] 3. 인터페이스 받아서 클래스 생성
@Repository
public class UserDAO implements IUserDAO {
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
	public boolean loginCheck(UserDTO dto) {
		dto.setUser_pw(SHA256.getSHA256(dto.getUser_pw()));
		String name = mybatis.selectOne("UserMapper.loginCheck", dto);
        return (name == null) ? false : true;
	}

	@Override
	public UserDTO viewUser(UserDTO dto) {
		// TODO Auto-generated method stub
		return mybatis.selectOne("UserMapper.viewUser", dto);
	}

	@Override
	public void logout(HttpSession session) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void modify(UserDTO dto) {
		// TODO Auto-generated method stub
		dto.setUser_pw(SHA256.getSHA256(dto.getUser_pw()));
		mybatis.update("UserMapper.modify", dto);
	}

	@Override
	public int totalPerson() {
		return mybatis.selectOne("UserMapper.AllPerson");
	}
	
	
	
}
