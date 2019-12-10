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
					<li class="nav-item active"><a href="inform.do?country=all&page=1">
							<p>여행정보</p> <span class="badge"> <i class="la la-newspaper-o"></i></span>
					</a></li>
					<li class="nav-item "><a href="review.do?country=all&page=1">
							<p>여행후기</p> <span class="badge"> <i class="la la-pencil-square-o"></i></span>
					</a></li>
				</ul>
			</div>
		</div>
		<div class="main-panel">
			<div class="content">
				<div class="container-fluid">
					<h4 class="page-title">여행 정보</h4>
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<div class="card-title">정보 보기 <button type="button" class="btn"
													style="float: right;" onclick='history.back(1)'>뒤로 가기</button></div>
									
								</div>
								<div class="card-body">
									<div class="form-group">
										<div class="row">
											<div class="col-md-6">
												<label for="email">제목</label>
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
										<div class="row">
										<div class="col-md-8"></div>
										<c:if test="${sessionScope.userId eq dto.user_id}">
											<div class="col-md-4">
												<button onClick="deleteAction()" class="btn btn-danger"
													style="float: right; margin-right: 5px">삭제 하기</button>
												<button
													onClick="location.href='informUpdatePage.do?inform_num=${dto.inform_num}'"
													class="btn btn-success"
													style="float: right; margin-right: 5px">수정 하기</button>	
											</div>
										</c:if>
									</div>
									</div>
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
						<i class="la la-frown-o"></i> Under Development
					</h6>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body text-center">
					<p>
						Currently the pro version of the <b>Ready Dashboard</b> Bootstrap
						is in progress development
					</p>
					<p>
						<b>We'll let you know when it's done</b>
					</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary"
						data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</body>


<script type="text/javascript">
	function deleteAction() {
		if(confirm("삭제하시겠습니까?")){

			location.href='informDelete.do?inform_num=${dto.inform_num}';
        }else {
        	alert("삭제를 취소 하셨습니다.");
        }
		
		
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
</html>