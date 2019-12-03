package com.spring.travel.dto;

public class PageDTO {
	public static final int PAGE_CUT = 10; // 한번에 보여줄 갯수
	public static final int BLOCK_CUT = 5; // 한번에 보여줄 블록 갯수

	private int nowPage; // 현재 페이지
	private int prevPage; // 이전 페이지
	private int nextPage; // 다음 페이지
	private int totPage = 0; // 총 페이지 갯수
	private int totBlock = 0; // 총 블록 수

	private int nowBlock; // 현재 블록
	private int prevBlock; // 이전 페이지 블록
	private int nextBlock; // 다음 페이지 블록

	private int pageBegin; // 시작 페이지
	private int pageEnd; // 마지막 페이지

	private int blockBegin; // 현재 페이지 블록의 시작 번호
	private int blockEnd; // 현제 페이지 블록의 끝 번호

	// 생성자
	public PageDTO(int count, int page) {
		nowBlock = 1; // 현재 페이지 블록 번호
		nowPage = page; // 현재 페이지 설정
		setTotPage(count); // 전체 페이지 갯수 계산
		setPageRange(); //
		setTotBlock(); // 전체 페이지 블록 갯수 계산
		setBlockRange(); // 페이지 블록의 시작, 끝 번호 계산
	}

	private void setPageRange() {
		// 현재 페이지가 몇번째 페이지 블록에 속하는지 계산
		nowBlock = ((nowPage - 1) / BLOCK_CUT) + 1;
		// 현재 페이지 블록의 시작 번호 계산
		blockBegin = (nowBlock - 1) * BLOCK_CUT + 1;
		// 현재 페이지 블록의 끝 번호 계산
		blockEnd = blockBegin + BLOCK_CUT - 1;
		// 마지막 블록이 범위를 초과하지 않도록 계산
		if (blockEnd > totPage)
			blockEnd = totPage;
		// 이전을 눌렀을 때 이동할 페이지 번호
		prevPage = (nowPage == 1) ? 1 : (nowBlock - 1) * BLOCK_CUT;
		// 다음을 눌렀을 때 이동할 페이지 번호
		nextPage = nowBlock == totBlock ? (nowBlock * BLOCK_CUT) : (nowBlock * BLOCK_CUT) + 1;
		// 마지막 페이지가 범위를 초과하지 않도록 처리
		if (nextPage >= totPage)
			nextPage = totPage;

	}

	private void setBlockRange() {
		// 시작번호 = (현재페이지-1)*페이지당 게시물수 +1
        pageBegin = (nowPage-1)*PAGE_CUT+1;
        // 끝번호 = 시작번호+페이지당 게시물수 -1
        pageEnd = pageBegin+PAGE_CUT-1;
	}

	public int getNowPage() {
		return nowPage;
	}

	public void setNowPage(int nowPage) {
		this.nowPage = nowPage;
	}

	public int getPrevPage() {
		return prevPage;
	}

	public void setPrevPage(int prevPage) {
		this.prevPage = prevPage;
	}

	public int getNextPage() {
		return nextPage;
	}

	public void setNextPage(int nextPage) {
		this.nextPage = nextPage;
	}

	public int getTotPage() {
		return totPage;
	}

	public void setTotPage(int count) {
		// 전체 페이지 계산
		totPage = count / PAGE_CUT;
	}

	public int getTotBlock() {
		return totBlock;
	}

	public void setTotBlock() {
		 // 페이지 블록의 갯수 계산
        totBlock = totPage/BLOCK_CUT;
	}

	public int getNowBlock() {
		return nowBlock;
	}

	public void setNowBlock(int nowBlock) {
		this.nowBlock = nowBlock;
	}

	public int getPrevBlock() {
		return prevBlock;
	}

	public void setPrevBlock(int prevBlock) {
		this.prevBlock = prevBlock;
	}

	public int getNextBlock() {
		return nextBlock;
	}

	public void setNextBlock(int nextBlock) {
		this.nextBlock = nextBlock;
	}

	public int getPageBegin() {
		return pageBegin;
	}

	public void setPageBegin(int pageBegin) {
		this.pageBegin = pageBegin;
	}

	public int getPageEnd() {
		return pageEnd;
	}

	public void setPageEnd(int pageEnd) {
		this.pageEnd = pageEnd;
	}

	public int getBlockBegin() {
		return blockBegin;
	}

	public void setBlockBegin(int blockBegin) {
		this.blockBegin = blockBegin;
	}

	public int getBlockEnd() {
		return blockEnd;
	}

	public void setBlockEnd(int blockEnd) {
		this.blockEnd = blockEnd;
	}

	public static int getPageCut() {
		return PAGE_CUT;
	}

	public static int getBlockCut() {
		return BLOCK_CUT;
	}
}
