package com.spring.travel.dao;

import java.util.List;

import com.spring.travel.dto.InformDTO;
import com.spring.travel.dto.ReviewDTO;

public interface IInformDao {
	// 리뷰 게시글 작성
    public void create(InformDTO dto) throws Exception;
    // 리뷰 게시글 상세보기
    public InformDTO read(int board_num) throws Exception;
    // 리뷰 게시글 수정
    public void update(InformDTO dto) throws Exception;
    // 리뷰 게시글 삭제
    public void delete(int board_num) throws Exception;
    // 리뷰 게시글 전체 목록
    public List<InformDTO> listAll() throws Exception;
    // 선택 리뷰 게시글 보기
    public List<InformDTO> listPick(String country) throws Exception;
    // 리뷰 게시글 조회 증가
    public void increaseViewcnt(int board_num) throws Exception;
    
    public List<InformDTO> firstView();
}
