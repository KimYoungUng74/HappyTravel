package com.spring.travel.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.travel.dao.ReviewDao;
import com.spring.travel.dto.ReviewDTO;

@Service("IReviewService")
public class ReviewService implements IReviewService{

	@Autowired
	ReviewDao reviewDao;
    
    // 01. 게시글쓰기
    @Override
    public void create(ReviewDTO dto) throws Exception {
        String title = dto.getTitle();
        String content = dto.getContents();
        String writer = dto.getUser_name();
        // *태그문자 처리 (< ==> &lt; > ==> &gt;)
        // replace(A, B) A를 B로 변경
        title = title.replace("<", "&lt;");
        title = title.replace("<", "&gt;");
        // *공백문자 처리
        title = title.replace("  ",    "&nbsp;&nbsp;");
		/*
		 * // *줄바꿈 문자처리 content = content.replace("\n", "<br>");
		 */
        dto.setTitle(title);
        dto.setContents(content);
        reviewDao.create(dto);
    }
    // 02. 게시글 상세보기
    @Override
    public ReviewDTO read(int review_num) throws Exception {
        return reviewDao.read(review_num);
    }
    // 03. 게시글 수정
    @Override
    public void update(ReviewDTO dto) throws Exception {
    	reviewDao.update(dto);
    }
    // 04. 게시글 삭제
    @Override
    public void delete(int review_num) throws Exception {
    	reviewDao.delete(review_num);
    }
    // 05. 게시글 전체 목록
    @Override
    public List<ReviewDTO> listAll() throws Exception {
        return reviewDao.listAll();
    }
    // 06. 선택 게시글 전체 목록
    @Override
	public List<ReviewDTO> listPick(String country) throws Exception {
		// TODO Auto-generated method stub
		return reviewDao.listPick(country);
	}
    
    // 07. 게시글 조회수 증가
    @Override
    public void increaseViewcnt(int review_num, HttpSession session) throws Exception {
        long update_time = 0;
        // 세션에 저장된 조회시간 검색
        // 최초로 조회할 경우 세션에 저장된 값이 없기 때문에 if문은 실행X
        if(session.getAttribute("update_time_"+review_num) != null){
                                // 세션에서 읽어오기
            update_time = (long)session.getAttribute("update_time_"+review_num);
        }
        // 시스템의 현재시간을 current_time에 저장
        long current_time = System.currentTimeMillis();
        // 일정시간이 경과 후 조회수 증가 처리 24*60*60*1000(24시간)
        // 시스템현재시간 - 열람시간 > 일정시간(조회수 증가가 가능하도록 지정한 시간)
        if(current_time - update_time > 5*1000){
        	reviewDao.increaseViewcnt(review_num);
            // 세션에 시간을 저장 : "update_time_"+board_num는 다른변수와 중복되지 않게 명명한 것
            session.setAttribute("update_time_"+review_num, current_time);
            
        }
    }
	

}
