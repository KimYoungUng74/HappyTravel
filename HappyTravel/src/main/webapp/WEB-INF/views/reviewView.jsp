<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="true"%>
<!DOCTYPE html>
<html>
<head>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"
	language="java"%>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title>Ready Bootstrap Dashboard</title>
<meta
	content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'
	name='viewport' />
<link rel="stylesheet"
	href="<c:url value='resources/Ready/assets/css/bootstrap.min.css'/>">
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i">
<link rel="stylesheet"
	href="<c:url value='resources/Ready/assets/css/ready.css'/>">
<link rel="stylesheet"
	href="<c:url value='resources/Ready/assets/css/demo.css'/>">
</head>
<body>
	<c:if test="${msg == 'logout'}">
		<script>
			alert("로그아웃 되었습니다.");
		</script>
	</c:if>
	<div class="wrapper">
		<div class="main-header">
			<div class="logo-header">

				<a href="home.do" class="logo" id="logo"> <img
					src="resources/Ready/assets/img/logo.png" alt="user-img" width="36"
					class="img-circle"> HappyTravel
				</a>

				<button class="navbar-toggler sidenav-toggler ml-auto" type="button"
					data-toggle="collapse" data-target="collapse"
					aria-controls="sidebar" aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<button class="topbar-toggler more">
					<i class="la la-ellipsis-v"></i>
				</button>
			</div>
			<nav class="navbar navbar-header navbar-expand-lg">
				<div class="container-fluid">

					<form
						class="navbar-left navbar-form nav-search mr-md-3 align-items-center"
						action="">
						<div class="input-group">
							<input type="text" placeholder="여행지 검색" class="form-control">
							<div class="input-group-append">
								<span class="input-group-text"> <i
									class="la la-search search-icon"></i>
								</span>
							</div>
						</div>
					</form>
					<ul class="navbar-nav topbar-nav ml-md-auto align-items-center">
						<c:choose>
							<c:when test="${sessionScope.userId == null}">
								<button class="btn btn btn-default loginButton"
									onclick="location.href='login.do'">로그인</button>
							</c:when>
							<c:otherwise>
								<li class="nav-item dropdown"><a
									class="dropdown-toggle profile-pic" data-toggle="dropdown"
									href="#" aria-expanded="false"><span>${sessionScope.userId}님
											환영합니다. </span></span> </a>
									<ul class="dropdown-menu dropdown-user">
										<li>
											<div class="user-box">
												<div class="u-text">
													<h4>${sessionScope.userName}</h4>
													<p class="text-muted">${sessionScope.userEmail}</p>
												</div>
											</div>
										</li>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="passworldCheck.do"><i
											class="ti-user"></i>내정보</a>

										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="logout.do"><i
											class="fa fa-power-off"></i> Logout</a>
									</ul> <!-- /.dropdown-user --></li>
							</c:otherwise>
						</c:choose>
					</ul>

				</div>
			</nav>
		</div>
		<div class="sidebar">
			<div class="scrollbar-inner sidebar-wrapper">
				<c:choose>
					<c:when test="${sessionScope.userId == null}">
						<button class="btn btn btn-default"
							style="width: 80%; height: 60px; margin: 20px;"
							onclick="location.href='login.do'">로그인</button>
					</c:when>
					<c:otherwise>
						<div class="user">
							<div class="photo">
								<img src="resources/Ready/assets/img/logo.png">
							</div>
							<div class="info">
								<a class="" data-toggle="collapse" href="#collapseExample"
									aria-expanded="true"> <span>${sessionScope.userName}
										<span class="user-level">${sessionScope.userEmail} </span> <span
										class="caret"></span>
								</span>
								</a>
								<div class="clearfix"></div>

								<div class="collapse in" id="collapseExample"
									aria-expanded="true" style="">
									<ul class="nav">
										<li><a href="passworldCheck.do"> <span
												class="link-collapse">내정보</span>
										</a></li>
										<li><a href="logout.do"> <span class="link-collapse">로그아웃</span>
										</a></li>
									</ul>
								</div>
							</div>
						</div>
					</c:otherwise>
				</c:choose>
				<ul class="nav">
					<li class="nav-item"><a href="inform.do?country=all&page=1">
							<p>여행정보</p> <span class="badge"> <i
								class="la la-newspaper-o"></i></span>
					</a></li>
					<li class="nav-item active"><a
						href="review.do?country=all&page=1">
							<p>여행후기</p> <span class="badge"> <i
								class="la la-pencil-square-o"></i></span>
					</a></li>
				</ul>
			</div>
		</div>
		<div class="main-panel">
			<div class="content">
				<div class="container-fluid">
					<h4 class="page-title">여행 후기</h4>
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<div class="card-title">
										리뷰 보기
										<button type="button" class="btn" style="float: right;"
											onclick='history.back(1)'>뒤로 가기</button>
									</div>

								</div>
								<div class="card-body">
									<div class="form-group">
										<div class="row">
											<div class="col-md-6">
												<label for="email">리뷰 제목</label>
											</div>
											<div class="col-md-3">
												<label for="email">나라</label>
											</div>
											<div class="col-md-3">
												<label for="email">작성자</label>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<div class="card">
													<div class="card-body">
														<p>${dto.title}</p>
													</div>
												</div>

											</div>
											<div class="col-md-3">
												<div class="card">
													<div class="card-body">
														<p>${dto.country}</p>
													</div>
												</div>
											</div>
											<div class="col-md-3">
												<div class="card">
													<div class="card-body">
														<p>${dto.user_name}</p>
													</div>
												</div>

											</div>

										</div>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-md-9">
												<label for="comment">내용</label>
											</div>
											<div class="col-md-1">
												<label for="comment">별점</label>
											</div>
											<div class="col-md-2">
												<div id="star"></div>
											</div>
										</div>
										<div class="card">
											<div class="card-body">
												<p>${dto.contents}</p>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-8"></div>
										<c:if test="${sessionScope.userId eq dto.user_id}">
											<div class="col-md-4">
												<button onClick="deleteAction()" class="btn btn-danger"
													style="float: right; margin-right: 5px">삭제 하기</button>
												<button
													onClick="location.href='reviewUpdatePage.do?review_num=${dto.review_num}'"
													class="btn btn-success"
													style="float: right; margin-right: 5px">수정 하기</button>


											</div>
										</c:if>
									</div>
								</div>

								<div class="card-action">
									<form id="commentInsertForm">
										<label for="comment">댓글</label>

										<c:choose>
											<c:when test="${sessionScope.userId == null}">

												<div class="card">
													<input type="text" class="form-control" id="content"
														name="content" disabled="disabled"
														value="로그인 후 댓글 작성이 가능합니다.">
												</div>

											</c:when>
											<c:otherwise>
												<div class="row">
													<div class="col-md-11">
														<div class="card">
															<input type="hidden" id="bno" value="${review_num}" /> <input
																type="text" class="form-control" id="content"
																name="content" placeholder="댓글을 입력하세요.">
														</div>
													</div>
													<div class="col-md-1">
														<button class="btn btn-primary" type="button"
															onClick="commentGo();" class="btn">댓글 달기</button>
													</div>
												</div>
											</c:otherwise>
										</c:choose>

									</form>
								</div>
								<div class="card-action">
									<c:forEach var="row" items="${commentList}">
										<div class="row">
											<div class="col-md-2">
												<label for="comment">작성자 : ${row.writer}</label>
											</div>
											<div class="col-md-10">
												<label> 작성일 : ${row.reg_date}</label>
											</div>
										</div>

										<div class="row">
											<c:choose>
												<c:when test="${sessionScope.userId eq row.writer}">
													<div class="col-md-10">
														<div class="card">
															<p>${row.content}</p>
														</div>
													</div>
													<div class="col-md-2">
														<a href="#modalUpdate" role="button"
															class="btn btn-warning" data-toggle="modal"
															onClick="isModify('${row.content}',${row.cno});">댓글수정</a>

														<button class="btn  btn-danger" type="button"
															onClick="commentDelete(${row.cno});" class="btn">댓글삭제</button>
													</div>
												</c:when>
												<c:otherwise>
													<div class="col-md-12">
														<div class="card">
															<p>${row.content}</p>
														</div>
													</div>
												</c:otherwise>
											</c:choose>

										</div>

									</c:forEach>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer class="footer">
			<div class="container-fluid">
				<nav class="pull-left">
					<ul class="nav">

					</ul>
				</nav>
				<div class="copyright ml-auto">
					2019, made in <i class="la la-heart heart text-danger"></i> Hero
				</div>
			</div>

		</footer>


	</div>

	<!-- Modal -->
	<div class="modal fade" id="modalUpdate" tabindex="-1" role="dialog"
		aria-labelledby="modalUpdatePro" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header bg-primary">
					<h6 class="modal-title">
						<i class="la la-comment"></i> 댓글 수정
					</h6>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body text-center">
				<input type="hidden" id="ModifyCno">
					<div class="card">
						<input type="text" class="form-control" id="contentModify"
							name="content" placeholder="댓글을 입력하세요.">
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-warning"
						data-dismiss="modal" onclick="ModifyComment();">수정</button>
					<button type="button" class="btn btn-danger"
						data-dismiss="modal">취소</button>
				</div>
			</div>
		</div>
	</div>

	<div id=Modifydialog " title="댓글 수정">
		<p>꾸꾸까까?</p>
	</div>
</body>


<script type="text/javascript">
	function deleteAction() {
		if(confirm("삭제하시겠습니까?")){

			location.href='reviewDelete.do?review_num=${dto.review_num}';
        }else {
        	alert("삭제를 취소 하셨습니다.");
        }
		
		
	}
</script>
<script>
	function commentGo() {
		var comment = $('#content').val();
		location.href='commentInsert.do?review_num='+${dto.review_num}+'&content='+encodeURI(comment)+'&writer='+encodeURI('${sessionScope.userId}');
	}
	function commentDelete(cno) {
		if(confirm("해당 댓글을 삭제하시겠습니까?")){
			location.href='commentDelete.do?review_num=${dto.review_num}&cno='+cno;
        }else {
        	alert("삭제를 취소 하셨습니다.");
        }
	}
	function isModify(comment, ModifyCno) {
		
		$("#contentModify").val(comment);
		$("#ModifyCno").val(ModifyCno);
	}
	function ModifyComment(comment, ModifyCno) {
		var comment = $('#contentModify').val(); 
		var cno = $('#ModifyCno').val(); 
		location.href="commentUpdate.do?review_num=${dto.review_num}&cno="+cno+"&content="+comment;
	}
</script>
<script
	src="<c:url value='resources/Ready/assets/js/core/jquery.3.2.1.min.js'/>"></script>
<script
	src="<c:url value='resources/Ready/assets/js/plugin/jquery-ui-1.12.1.custom/jquery-ui.min.js'/>"></script>
<script
	src="<c:url value='resources/Ready/assets/js/core/popper.min.js'/>"></script>
<script
	src="<c:url value='resources/Ready/assets/js/core/bootstrap.min.js'/>"></script>
<script
	src="<c:url value='resources/Ready/assets/js/plugin/chartist/chartist.min.js'/>"></script>
<script
	src="<c:url value='resources/Ready/assets/js/plugin/bootstrap-toggle/bootstrap-toggle.min.js'/>"></script>
<script
	src="<c:url value='resources/Ready/assets/js/plugin/jquery-mapael/jquery.mapael.min.js'/>"></script>
<script
	src="<c:url value='resources/Ready/assets/js/plugin/jquery-mapael/maps/world_countries.min.js'/>"></script>
<script
	src="<c:url value='resources/Ready/assets/js/plugin/chart-circle/circles.min.js'/>"></script>
<script
	src="<c:url value='resources/Ready/assets/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js'/>"></script>
<script src="<c:url value='resources/Ready/assets/js/ready.min.js'/>"></script>
<script src="<c:url value='resources/Ready/assets/js/demo.js'/>"></script>

<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script
	src="<c:url value='resources/Ready/assets/js/plugin/jquery.raty.js'/>"></script>

<script type="text/javascript">
	$(function() {
		$('div#star').raty({
			readOnly : true,
			score : ${dto.rating},
			path : "resources/Ready/assets/img/star",
			width : 200,
			click : function(score, evt) {

			}
		});
	});
</script>

<!-- <script>
var bno = '${review_num}'; //게시글 번호

function commentBtn() {
	
	var insertData = $("#commentInsertForm").serialize(); //commentInsertForm의 내용을 가져옴
	
    commentInsert(insertData); //Insert 함수호출(아래)
}
 
 
 
//댓글 목록 
function commentList(){
    $.ajax({
        url : '/commentList',
        type : 'get',
        data : {'bno':bno},
        success : function(data){
            var a =''; 
            $.each(data, function(key, value){ 
                a += '<div class="commentArea" style="border-bottom:1px solid darkgray; margin-bottom: 15px;">';
                a += '<div class="commentInfo'+value.cno+'">'+'댓글번호 : '+value.cno+' / 작성자 : '+value.writer;
                a += '<a onclick="commentUpdate('+value.cno+',\''+value.content+'\');"> 수정 </a>';
                a += '<a onclick="commentDelete('+value.cno+');"> 삭제 </a> </div>';
                a += '<div class="commentContent'+value.cno+'"> <p> 내용 : '+value.content +'</p>';
                a += '</div></div>';
            });
            
            $("#commentList").html(a);
        }
    });
}
 
//댓글 등록
function commentInsert(insertData){
    $.ajax({
        url : 'commentInsert',
        type : 'post',
        data : insertData,
        success : function(data){
            if(data == 1) {
                commentList(); //댓글 작성 후 댓글 목록 reload
                $('#content').val('');
            }
        }
    });
}
 
//댓글 수정 - 댓글 내용 출력을 input 폼으로 변경 
function commentUpdate(cno, content){
    var a ='';
    
    a += '<div class="input-group">';
    a += '<input type="text" class="form-control" name="content_'+cno+'" value="'+content+'"/>';
    a += '<span class="input-group-btn"><button class="btn btn-default" type="button" onclick="commentUpdateProc('+cno+');">수정</button> </span>';
    a += '</div>';
    
    $('#commentContent'+cno).html(a);
    
}
 
//댓글 수정
function commentUpdateProc(cno){
    var updateContent = $('[name=content_'+cno+']').val();
    
    $.ajax({
        url : '/commentUpdate',
        type : 'post',
        data : {'content' : updateContent, 'cno' : cno},
        success : function(data){
            if(data == 1) commentList(bno); //댓글 수정후 목록 출력 
        }
    });
}
 
//댓글 삭제 
function commentDelete(cno){
    $.ajax({
        url : '/commentDelete/'+cno,
        type : 'post',
        success : function(data){
            if(data == 1) commentList(bno); //댓글 삭제후 목록 출력 
        }
    });
}
 
 
 
 
$(document).ready(function(){
    commentList(); //페이지 로딩시 댓글 목록 출력 
}); -->



</script>


</html>