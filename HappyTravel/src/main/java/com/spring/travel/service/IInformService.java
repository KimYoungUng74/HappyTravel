package com.spring.travel.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import com.spring.travel.dto.InformDTO;

public interface IInformService {
	// 리뷰 게시글 작성
	public void create(InformDTO dto) throws Exception;

	// 리뷰 게시글 상세보기
	public InformDTO read(int Inform_num) throws Exception;

	// 리뷰 게시글 수정
	public void update(InformDTO dto) throws Exception;

	// 리뷰 게시글 삭제
	public void delete(int Inform_num) throws Exception;

	// 리뷰 게시글 전체 목록
	public List<InformDTO> listAll() throws Exception;

	// 선택 리뷰 게시글 전체 목록
	public List<InformDTO> listPick(String country) throws Exception;

	// 리뷰 게시글 조회
	public void increaseViewcnt(int Inform_num, HttpSession session) throws Exception;
}
