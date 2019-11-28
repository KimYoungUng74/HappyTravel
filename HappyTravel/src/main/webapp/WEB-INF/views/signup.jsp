<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<!DOCTYPE html>
<html lang="en">

<head>
<!-- Required meta tags -->
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"
	language="java"%>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>RoyalUI Admin</title>
<!-- plugins:css -->
<link rel="stylesheet"
	href="<c:url value='resources/Ready/assets/css/vendor.bundle.base.css'/>">
<!-- endinject -->
<!-- plugin css for this page -->
<!-- End plugin css for this page -->
<!-- inject:css -->
<link rel="stylesheet"
	href="<c:url value='resources/Ready/assets/css/style.css'/>">
<!-- endinject -->
</head>

<body>
	<div class="container-scroller">
		<div class="container-fluid page-body-wrapper full-page-wrapper">
			<div class="content-wrapper d-flex align-items-center auth px-0">
				<div class="row w-100 mx-0">
					<div class="col-lg-4 mx-auto">
						<div class="auth-form-light text-left py-5 px-4 px-sm-5">
							<div class="brand-logo">
								<img src="resources/Ready/assets/img/loginLogo.png" alt="logo">
							</div>
							<h4>회원가입</h4>
							<h6 class="font-weight-light">간단한 정보를 입력하고 회원가입을 완료하세요.</h6>
							<form class="pt-3" action="signupOk.do" method="post">
								<div class="form-group">
									<h6>아이디</h6>
									<input type="text" class="form-control form-control-lg"
										name="user_id" placeholder="ID">
								</div>
								<div class="form-group">
									<h6>비밀번호</h6>
									<input type="password" class="form-control form-control-lg"
										name="user_pw" placeholder="Password">
								</div>

								<div class="form-group">
									<h6>이름</h6>
									<input type="text" class="form-control form-control-lg"
										name="user_name" placeholder="Name">
								</div>
								<div class="form-group">
									<h6>이메일</h6>
									<input type="email" class="form-control form-control-lg"
										name="user_email" placeholder="E-Mail">
								</div>
								<div class="form-group">
									<!--이거 뺄 수 있나 알아보자-->
									<h6>거주 국가</h6>
									<select class="form-control form-control-lg" name="user_country">
										<option>Country</option>
										<option>United States of America</option>
										<option>United Kingdom</option>
										<option>India</option>
										<option>Germany</option>
										<option>Argentina</option>
									</select>
								</div>
								<div class="form-group">
									<!-- 글자수 제한 알아보기 -->
									<h6>생일</h6>
									<input type="text" class="form-control form-control-lg"
										name="user_birth" placeholder="1995">
								</div>
								<input type="submit" class="btn btn-block btn-primary btn-lg" value="회원가입">
								<div class="text-center mt-4 font-weight-light">
									이미 계정이 있나요? <a href="login.html" class="text-primary">Login</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- content-wrapper ends -->
		</div>
		<!-- page-body-wrapper ends -->
	</div>
	<!-- container-scroller -->
	<!-- plugins:js -->
	<script
		src="<c:url value='resources/Ready/assets/js/vendor.bundle.base.js'/>"></script>
	<!-- endinject -->
	<!-- inject:js -->
	<script src="<c:url value='resources/Ready/assets/js/off-canvas.js'/>"></script>
	<script
		src="<c:url value='resources/Ready/assets/js/hoverable-collapse.js'/>"></script>
	<script src="<c:url value='resources/Ready/assets/js/template.js'/>"></script>
	<script src="<c:url value='resources/Ready/assets/js/todolist.js'/>"></script>
	<!-- endinject -->

	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script type="text/javascript"
		src="./resources/Ready/assets/js/jquery.raty.js"></script>
</body>

</html>
