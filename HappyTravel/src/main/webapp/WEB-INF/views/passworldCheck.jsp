<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="true"%>
<!DOCTYPE html>
<html lang="en">

<head>
<!-- Required meta tags -->
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"
	language="java"%>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>비밀번호 확인</title>
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
<c:if test="${sessionScope.userId == null}">
		<script>
		location.href='/travel/needLogin.do';
		</script>
	</c:if>
<c:if test="${msg == 'failure'}">
 	 <script> alert("비밀번호가 일치하지 않습니다.");</script> 
 </c:if>
	<div class="container-scroller">
		<div class="container-fluid page-body-wrapper full-page-wrapper">
			<div class="content-wrapper d-flex align-items-center auth px-0">
				<div class="row w-100 mx-0">
					<div class="col-lg-4 mx-auto">
						<div class="auth-form-light text-left py-5 px-4 px-sm-5">
							<div class="brand-logo">
								<a href="home" class="logo" id="logo"> <img src="resources/Ready/assets/img/loginLogo.png" alt="logo"></a>
							</div>
							<h4>비밀번호 확인</h4>
							<h6 class="font-weight-light">회원 정보를 수정하려면 비번을 입력하세요!</h6>
							<form class="pt-3" action="passworldCheck.ing" method="post" name="signupform">
								<div class="form-group">
									<input type="hidden" name="user_id" value="${sessionScope.userId}">
									<h6>비밀번호</h6>
									<input type="password" class="form-control form-control-lg"
										name="user_pw" placeholder="Password">
								</div>

								<input type="submit" class="btn btn-block btn-primary btn-lg"
									value="비밀번호 확인">
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
