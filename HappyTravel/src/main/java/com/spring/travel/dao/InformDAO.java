package com.spring.travel.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.spring.travel.dto.InformDTO;

@Repository
public class InformDAO implements IInformDAO {

	@Autowired
	public SqlSessionTemplate mybatis;
    // 리뷰 게시글 작성
    @Override
    public void create(InformDTO dto) throws Exception {
    	mybatis.insert("InformMapper.insert", dto);
    }
    // 리뷰 게시글 상세보기
    @Override
    public InformDTO read(int board_num) throws Exception {
        return mybatis.selectOne("InformMapper.view", board_num);
    }
    // 리뷰 게시글 수정
    @Override
    public void update(InformDTO dto) throws Exception {
    	mybatis.update("InformMapper.updateInform", dto);
 
    }
    // 리뷰 게시글 삭제
    @Override
    public void delete(int board_num) throws Exception {
    	mybatis.delete("InformMapper.deleteArticle",board_num);
 
    }
    // 리뷰 게시글 전체 목록
    @Override
    public List<InformDTO> listAll() throws Exception {
        return mybatis.selectList("InformMapper.listAll");
    }
    // 선택 나라리뷰 게시글 목록
    @Override
	public List<InformDTO> listPick(String country) throws Exception {
		// TODO Auto-generated method stub
		return mybatis.selectList("InformMapper.listPick",country);
	}
    // 리뷰 게시글 조회수 증가
    @Override
    public void increaseViewcnt(int board_num) throws Exception {
    	mybatis.update("InformMapper.increaseViewcnt", board_num);
    }
	@Override
	public List<InformDTO> firstView() {
		// TODO Auto-generated method stub
		return mybatis.selectList("InformMapper.FirstView");
	}
	

}
