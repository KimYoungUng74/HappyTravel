package com.spring.travel.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.spring.travel.dto.CommentDTO;

@Repository
public class CommentDAO implements ICommentDAO {

	@Autowired
	public SqlSessionTemplate mybatis;
	
	//댓글 수 
	@Override
	public int commentCount() throws Exception {
		// TODO Auto-generated method stub
		return mybatis.selectOne("CommentMapper.commentCount");
	}

	// 해당 글 댓글
	@Override
	public List<CommentDTO> commentList(int bno) throws Exception {
		// TODO Auto-generated method stub
		return  mybatis.selectList("CommentMapper.commentList", bno);
	}

	// 댓글 작성
	@Override
	public int commentInsert(CommentDTO dto) throws Exception {

		return mybatis.insert("CommentMapper.commentInsert", dto);
	}

	// 댓글 수정
	@Override
	public int commentUpdate(CommentDTO dto) throws Exception {
		// TODO Auto-generated method stub
		return mybatis.update("CommentMapper.commentUpdate", dto);
	}

	// 선택 댓글 삭제
	@Override
	public int commentDelete(int cno) throws Exception {
		// TODO Auto-generated method stubcommentDelete
		return mybatis.delete("CommentMapper.commentDelete",cno);
	}

	@Override
	public int commentDeleteAll(int bno) throws Exception {
		// TODO Auto-generated method stub
		return mybatis.delete("CommentMapper.commentDeleteAll",bno);
	}

}
