package com.spring.travel.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.spring.travel.dto.ReviewDTO;

@Repository
public class ReviewDao implements IReviewDao {

	@Autowired
	public SqlSessionTemplate mybatis;
    // 리뷰 게시글 작성
    @Override
    public void create(ReviewDTO dto) throws Exception {
    	mybatis.insert("ReviewMapper.insert", dto);
    }
    // 리뷰 게시글 상세보기
    @Override
    public ReviewDTO read(int board_num) throws Exception {
        return mybatis.selectOne("ReviewMapper.view", board_num);
    }
    // 리뷰 게시글 수정
    @Override
    public void update(ReviewDTO dto) throws Exception {
    	mybatis.update("ReviewMapper.updateReview", dto);
 
    }
    // 리뷰 게시글 삭제
    @Override
    public void delete(int board_num) throws Exception {
    	mybatis.delete("ReviewMapper.deleteArticle",board_num);
 
    }
    // 리뷰 게시글 전체 목록
    @Override
    public List<ReviewDTO> listAll() throws Exception {
        return mybatis.selectList("ReviewMapper.listAll");
    }
    // 선택 나라리뷰 게시글 목록
    @Override
	public List<ReviewDTO> listPick(String country) throws Exception {
		// TODO Auto-generated method stub
		return mybatis.selectList("ReviewMapper.listPick",country);
	}
    // 리뷰 게시글 조회수 증가
    @Override
    public void increaseViewcnt(int board_num) throws Exception {
    	mybatis.update("ReviewMapper.increaseViewcnt", board_num);
    }
	@Override
	public List<ReviewDTO> popCountry() {
		return mybatis.selectList("ReviewMapper.popPick");
	}
	@Override
	public List<ReviewDTO> firstView() {
		// TODO Auto-generated method stub
		return mybatis.selectList("ReviewMapper.FirstView");
	}
	

}
