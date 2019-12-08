package com.spring.travel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.travel.dao.CommentDAO;
import com.spring.travel.dto.CommentDTO;

@Service("ICommentService")
public class CommentService implements ICommentService {

	@Autowired
	CommentDAO commentDao;
	
	@Override
	public List<CommentDTO> commentList(int bno) throws Exception {
		// TODO Auto-generated method stub
		return commentDao.commentList(bno);
	}

	@Override
	public void commentInsert(CommentDTO dto) throws Exception {
		commentDao.commentInsert(dto);
	}

	@Override
	public int commentUpdate(CommentDTO dto) throws Exception {
		// TODO Auto-generated method stub
		return commentDao.commentUpdate(dto);
	}

	@Override
	public int commentDelete(int cno) throws Exception {
		// TODO Auto-generated method stub
		return commentDao.commentDelete(cno);
	}

	@Override
	public int commentDeleteAll(int bno) throws Exception {
		// TODO Auto-generated method stub
		return commentDao.commentDeleteAll(bno);
	}

}
