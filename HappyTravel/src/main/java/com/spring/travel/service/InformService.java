package com.spring.travel.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.travel.dao.InformDAO;
import com.spring.travel.dto.InformDTO;

@Service("IInformService")
public class InformService implements IInformService{

	@Autowired
	InformDAO InformDao;
    
    // 01. 게시글쓰기
    @Override
    public void create(InformDTO dto) throws Exception {
        String title = dto.getTitle();
        String content = dto.getContents();
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
        InformDao.create(dto);
    }
    // 02. 게시글 상세보기
    @Override
    public InformDTO read(int Inform_num) throws Exception {
        return InformDao.read(Inform_num);
    }
    // 03. 게시글 수정
    @Override
    public void update(InformDTO dto) throws Exception {
    	InformDao.update(dto);
    }
    // 04. 게시글 삭제
    @Override
    public void delete(int Inform_num) throws Exception {
    	InformDao.delete(Inform_num);
    }
    // 05. 게시글 전체 목록
    @Override
    public List<InformDTO> listAll() throws Exception {
        return InformDao.listAll();
    }
    // 06. 선택 게시글 전체 목록
    @Override
	public List<InformDTO> listPick(String country) throws Exception {
		// TODO Auto-generated method stub
		return InformDao.listPick(country);
	}
    
    // 07. 게시글 조회수 증가
    @Override
    public void increaseViewcnt(int Inform_num, HttpSession session) throws Exception {
        long update_time = 0;
        // 세션에 저장된 조회시간 검색
        // 최초로 조회할 경우 세션에 저장된 값이 없기 때문에 if문은 실행X
        if(session.getAttribute("update_time_"+Inform_num) != null){
                                // 세션에서 읽어오기
            update_time = (long)session.getAttribute("update_time_"+Inform_num);
        }
        // 시스템의 현재시간을 current_time에 저장
        long current_time = System.currentTimeMillis();
        // 일정시간이 경과 후 조회수 증가 처리 24*60*60*1000(24시간)
        // 시스템현재시간 - 열람시간 > 일정시간(조회수 증가가 가능하도록 지정한 시간)
        if(current_time - update_time > 5*1000){
        	InformDao.increaseViewcnt(Inform_num);
            // 세션에 시간을 저장 : "update_time_"+board_num는 다른변수와 중복되지 않게 명명한 것
            session.setAttribute("update_time_"+Inform_num, current_time);
            
        }
    }
	@Override
	public List<InformDTO> firstView() {
		return InformDao.firstView();
	}
	

}
