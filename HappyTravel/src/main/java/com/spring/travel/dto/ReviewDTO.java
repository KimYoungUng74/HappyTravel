package com.spring.travel.dto;

import java.sql.Date;

public class ReviewDTO {
	private int review_num;		// 게시물 번호
	private String user_id;		// 작성자 아이디
	private String user_name;	// 작성자 이름
	private String title;		// 게시물 제목
	private String contents;	// 게시물 내용
	private String country;		// 리뷰 나라
	private int hits;			// 조회 수 
	private int rating;			// 별점
	private Date reg_date;		// 등록 일
	
	
	public int getReview_num() {
		return review_num;
	}
	public void setReview_num(int review_num) {
		this.review_num = review_num;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getHits() {
		return hits;
	}
	public void setHits(int hits) {
		this.hits = hits;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public Date getReg_date() {
		return reg_date;
	}
	public void setReg_date(Date reg_date) {
		this.reg_date = reg_date;
	}
	@Override
	public String toString() {
		return "ReviewDTO [board_num=" + review_num + ", user_id=" + user_id + ", user_name=" + user_name + ", title="
				+ title + ", contents=" + contents + ", country=" + country + ", hits=" + hits + ", rating=" + rating
				+ ", reg_date=" + reg_date + "]";
	}
	
	
	
}
