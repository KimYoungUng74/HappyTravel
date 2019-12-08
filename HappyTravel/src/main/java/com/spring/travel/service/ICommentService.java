package com.spring.travel.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import com.spring.travel.dto.CommentDTO;
import com.spring.travel.dto.InformDTO;
import com.spring.travel.dto.ReviewDTO;

public interface ICommentService {

    public List<CommentDTO> commentList(int bno) throws Exception;
    
    public void commentInsert(CommentDTO dto) throws Exception;
    
    public int commentUpdate(CommentDTO dto) throws Exception;
    
    public int commentDelete(int cno) throws Exception;
    
    public int commentDeleteAll(int bno) throws Exception;
}
