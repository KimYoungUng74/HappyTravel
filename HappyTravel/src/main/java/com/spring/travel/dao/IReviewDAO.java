package com.spring.travel.dao;

import java.util.List;

import com.spring.travel.dto.ReviewDTO;

public interface IReviewDAO {
	// 리뷰 게시글 작성
    public void create(ReviewDTO dto) throws Exception;
    // 리뷰 게시글 상세보기
    public ReviewDTO read(int board_num) throws Exception;
    // 리뷰 게시글 수정
    public void update(ReviewDTO dto) throws Exception;
    // 리뷰 게시글 삭제
    public void delete(int board_num) throws Exception;
    // 리뷰 게시글 전체 목록
    public List<ReviewDTO> listAll() throws Exception;
    // 선택 리뷰 게시글 보기
    public List<ReviewDTO> listPick(String country) throws Exception;
    // 리뷰 게시글 조회 증가
    public void increaseViewcnt(int board_num) throws Exception;
 // 인기 게시물
 	public List<ReviewDTO> popCountry();
 	
 	public List<ReviewDTO> firstView();
}
