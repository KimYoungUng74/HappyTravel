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
										<a class="dropdown-item" href="#"></i>내 게시물</a>
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
										<li><a href="#edit"> <span class="link-collapse">내
													게시물</span>
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
					<li class="nav-item"><a href="index.html">
							<p>여행정보</p> <span class="badge badge-count">5</span>
					</a></li>
					<li class="nav-item active"><a href="review.do">
							<p>여행후기</p> <span class="badge badge-count">5</span>
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
												<div class="card-title">글쓰기</div>
											</div>
											<div class="card-body">
												<div class="form-group">
													<label for="email">Email Address</label> <input
														type="email" class="form-control" id="email"
														placeholder="Enter Email"> <small id="emailHelp"
														class="form-text text-muted">We'll never share
														your email with anyone else.</small>
												</div>
												<div class="form-group">
													<label for="password">Password</label> <input
														type="password" class="form-control" id="password"
														placeholder="Password">
												</div>
												<div class="form-group form-inline">
													<label for="inlineinput" class="col-md-3 col-form-label">Inline
														Input</label>
													<div class="col-md-9 p-0">
														<input type="text" class="form-control input-full"
															id="inlineinput" placeholder="Enter Input">
													</div>
												</div>
												<div class="form-group has-success">
													<label for="successInput">Success Input</label> <input
														type="text" id="successInput" value="Success"
														class="form-control">
												</div>
												<div class="form-group has-error has-feedback">
													<label for="errorInput">Error Input</label> <input
														type="text" id="errorInput" value="Error"
														class="form-control"> <small id="emailHelp"
														class="form-text text-muted">Please provide a
														valid informations.</small>
												</div>
												<div class="form-group">
													<label for="disableinput">Disable Input</label> <input
														type="text" class="form-control" id="disableinput"
														placeholder="Enter Input" disabled="">
												</div>
												<div class="form-check">
													<label>Gender</label><br> <label
														class="form-radio-label"> <input
														class="form-radio-input" type="radio" name="optionsRadios"
														value="" checked=""> <span class="form-radio-sign">Male</span>
													</label> <label class="form-radio-label ml-3"> <input
														class="form-radio-input" type="radio" name="optionsRadios"
														value=""> <span class="form-radio-sign">Female</span>
													</label>
												</div>
												<div class="form-group">
													<label class="control-label"> Static </label>
													<!---->
													<p class="form-control-static">hello@themekita.com</p>
													<!---->
													<!---->
												</div>
												<div class="form-group">
													<label for="exampleFormControlSelect1">Example
														select</label> <select class="form-control"
														id="exampleFormControlSelect1">
														<option>1</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
													</select>
												</div>
												<div class="form-group">
													<label for="exampleFormControlSelect2">Example
														multiple select</label> <select multiple="" class="form-control"
														id="exampleFormControlSelect2">
														<option>1</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
													</select>
												</div>
												<div class="form-group">
													<label for="exampleFormControlFile1">Example file
														input</label> <input type="file" class="form-control-file"
														id="exampleFormControlFile1">
												</div>
												<div class="form-group">
													<label for="comment">Comment</label>
													<textarea class="form-control" id="comment" rows="5">
												</textarea>
												</div>
												<div class="form-check">
													<label class="form-check-label"> <input
														class="form-check-input" type="checkbox" value="">
														<span class="form-check-sign">Agree with terms and
															conditions</span>
													</label>
												</div>
											</div>
											<div class="card-action">
												<button class="btn btn-success">Submit</button>
												<button class="btn btn-danger">Cancel</button>
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
		</div>
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
	String
	user_id = (String)
	session.getAttribute("user_id");
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

<script type="text/javascript">
	var africaArray = new Array("('Select country','',true,true)",
			"('Algeria')", "('Angola')", "('Burundi')", "('Cameroon')",
			"('Congo')", "('Eritrea')", "('Ethiopia')", "('Gambia')",
			"('Ghana')", "('Guinea')", "('Kenya')", "('Libya')",
			"('Madagascar')", "('Morocco')", "('Mozambique')", "('Namibia')",
			"('Nigeria')", "('Rwanda')", "('Senegal')", "('Sierra Leone')",
			"('Somalia')", "('South Africa')", "('Sudan')", "('Tanzania')",
			"('Tunisia')", "('Uganda')", "('Zaire')", "('Zambia')",
			"('Zimbabwe')", "('Other')");
	var middleeastArray = new Array("('Select country','',true,true)",
			"('Egypt')", "('Iran')", "('Iraq')", "('Israel')", "('Jordan')",
			"('Kuwait')", "('Lebanon')", "('Oman')", "('Saudi Arabia')",
			"('Syria')", "('Turkey')", "('U. A. Emirates')", "('Other')");
	var asiaArray = new Array("('Select country','',true,true)", "('Armenia')",
			"('Bangladesh')", "('Cambodia')", "('China')", "('India')",
			"('Indonesia')", "('Japan')", "('Malaysia')", "('Myanmar')",
			"('Nepal')", "('Pakistan')", "('Philippines')", "('Singapore')",
			"('South Korea')", "('Sri Lanka')", "('Taiwan')", "('Thailand')",
			"('Uzbekistan')", "('Vietnam')", "('Other')");
	var europeArray = new Array("('Select country','',true,true)",
			"('Albania')", "('Austria')", "('Belarus')", "('Belgium')",
			"('Bosnia')", "('Bulgaria')", "('Croatia')", "('Cyprus')",
			"('Czech Rep.')", "('Denmark')", "('Estonia')", "('Finland')",
			"('France')", "('Germany')", "('Greece')", "('Hungary')",
			"('Iceland')", "('Ireland')", "('Italy')", "('Latvia')",
			"('Liechtenstein')", "('Lithuania')", "('Luxembourg')",
			"('Macedonia')", "('Malta')", "('Monaco')", "('Netherlands')",
			"('Norway')", "('Poland')", "('Portugal')", "('Romania')",
			"('Russia')", "('Slovakia')", "('Slovenia')", "('Spain')",
			"('Sweden')", "('Switzerland')", "('Ukraine')",
			"('United Kingdom')", "('Other')");
	var australiaArray = new Array("('Select country','',true,true)",
			"('Australia')", "('New Zealand')", "('Other')");
	var lamericaArray = new Array("('Select country','',true,true)",
			"('Costa Rica')", "('Cuba')", "('El Salvador')", "('Guatemala')",
			"('Haiti')", "('Jamaica')", "('Mexico')", "('Panama')", "('Other')");
	var namericaArray = new Array("('Select country','',true,true)",
			"('Canada')", "('USA')", "('Other')");
	var samericaArray = new Array("('Select country','',true,true)",
			"('Argentina')", "('Bolivia')", "('Brazil')", "('Chile')",
			"('Colombia')", "('Ecuador')", "('Paraguay')", "('Peru')",
			"('Suriname')", "('Uruguay')", "('Venezuela')", "('Other')");
	function populateCountry(inForm, selected) {

		if (selected == "all") {
			alert("꾸꾸까까");
		}

		var selectedArray = eval(selected + "Array");
		while (selectedArray.length < inForm.user_country.options.length) {
			inForm.user_country.options[(inForm.user_country.options.length - 1)] = null;
		}
		for (var i = 0; i < selectedArray.length; i++) {
			eval("inForm.user_country.options[i]=" + "new Option"
					+ selectedArray[i]);
		}
		if (inForm.region.options[0].value == '') {
			inForm.region.options[0] = null;
		}
	}
</script>
</html>