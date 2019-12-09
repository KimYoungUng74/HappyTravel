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
					<li class="nav-item" ><a href="review.do?country=all&page=1">
							<p>여행후기</p> <span class="badge"> <i class="la la-pencil-square-o"></i></span>
					</a></li>
				</ul>
			</div>
		</div>
		<div class="main-panel">
			<div class="content">
				<div class="container-fluid">
					<h4 class="page-title">여행 정보</h4>


					<div class="col-md-12">
						<div class="card card-tasks">
							<div class="card-header ">
								<div class="row">
									<div class="col-md-6">
										<h4 class="card-title">여행 정보 - ${country}</h4>
										<p class="card-category">다양한 나라의 정보를 확인해 보세요!</p>
									</div>

									<div class="col-md-6">
										<form name="informform">
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<select name="region" class="form-control"
															onChange="populateCountry(document.informform,document.informform.region.options[document.informform.region.selectedIndex].value)">
															<option selected value=''>Select Region</option>
															<option value='all'>All</option>
															<option value='asia'>Asia</option>
															<option value='africa'>Africa</option>
															<option value='australia'>Australia</option>
															<option value='europe'>Europe</option>
															<option value='middleeast'>Middle East</option>
															<option value='lamerica'>Latin America</option>
															<option value='namerica'>North America</option>
															<option value='samerica'>South America</option>
														</select>
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<select name="user_country" class="form-control"
															onChange="selectCountry(document.informform.user_country.options[document.informform.user_country.selectedIndex].value)">
															<option value=''>← Select Region</option>
														</select>
													</div>
												</div>
											</div>
										</form>
									</div>


								</div>
							</div>
							<div class="card-body">
								<table class="table table-striped  table-striped table-hover">
									<thead>
										<tr>
											<th>글번호</th>
											<th>글제목</th>
											<th>나라</th>
											<th>글쓴이</th>
											<th>글쓴 날짜</th>
											<th>조회수</th>
											<th>별점</th>
										</tr>
									</thead>
									<tbody>
										<c:forEach var="row" items="${list}">
											<tr>
												<td>${row.inform_num}</td>
												<td><a
													href="informView.do?inform_num=${row.inform_num}">${row.title}</a></td>
												<td>${row.country}</td>
												<td>${row.user_name}</td>
												<td>${row.reg_date}</td>
												<td>${row.hits}</td>
												<td><div>
														<c:forEach var="i" begin="1" end="5">
															<c:if test="${i le row.rating  }">
																<img src="resources/Ready/assets/img/star/star-on.png">&nbsp;
															</c:if>
															<c:if test="${i gt row.rating }">
																<img src="resources/Ready/assets/img/star/star-off.png">&nbsp;
															</c:if>
														</c:forEach>
													</div></td>
											</tr>
										</c:forEach>
									</tbody>
								</table>
							</div>
							<div class="card-footer ">
								<div class="col-md-12">
									<div class="row">

										<div class="col-md-10">
										
											<!-- 처음 페이지로 이동 -->
											<c:if test="${pageDTO.nowBlock > 1}">
												<button class="btn btn btn-primary" onclick="location.href='inform.do?country=${country}&page=1'"><<</button>
											</c:if>
											
											<!-- 이전 블록으로 이동 -->
											<c:if test="${pageDTO.nowBlock > 1}">
												<button class="btn btn btn-primary" onclick="location.href='inform.do?country=${country}&page=${pageDTO.prevPage}'"><</button>
											</c:if>
											
											<!-- **하나의 블럭에서 반복문 수행 시작페이지부터 끝페이지까지 -->
                							<c:forEach var="num" begin="${pageDTO.blockBegin}" end="${pageDTO.blockEnd}">
                							<!-- **현재페이지이면 하이퍼링크 제거 -->
							                    <c:choose>
							                        <c:when test="${num == pageDTO.nowPage}">
							                            <button class="btn btn btn-danger" disabled="disabled">${num}</button>
							                        </c:when>
							                        <c:otherwise>
							                            <button class="btn btn btn-primary" onclick="location.href='inform.do?country=${country}&page=${num}'">${num}</button>
							                        </c:otherwise>
							                    </c:choose>
                							</c:forEach>
											
											<!-- 다음페이지 블록으로 이동 : 현재 페이지 블럭이 전체 페이지 블럭보다 작거나 같으면 [>]버튼 화면에 출력 -->
								                <c:if test="${pageDTO.nowBlock <= pageDTO.totBlock}">
								                    <button class="btn btn btn-primary" onclick="location.href='inform.do?country=${country}&page=${pageDTO.nextPage}'">></button>
								                </c:if>
								                
								                <!-- 끝페이지로 이동 : 현재 페이지가 전체 페이지보다 작거나 같으면 [>>] 버튼 화면에 출력 -->
								                <c:if test="${pageDTO.nowPage < pageDTO.totPage}">
								                    <button class="btn btn btn-primary" onclick="location.href='inform.do?country=${country}&page=${pageDTO.totPage}'">>></button>
								                </c:if>
										</div>

										<div class="col-md-2">
											<c:if test="${sessionScope.userId eq 'root'}">
												<button class="btn btn btn-default" style="float: right;"
													onclick="location.href='informWrite.do'">글쓰기</button>
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
			location.href = 'inform.do?country=all&page=1';
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

	function selectCountry(selected) {
		location.href = 'inform.do?country=' + selected + '&page=1';
	}
</script>

</html>