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
<title>HappyTravel 회원가입</title>
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
								<a href="home" class="logo" id="logo"> <img src="resources/Ready/assets/img/loginLogo.png" alt="logo"></a>
							</div>
							<h4>회원가입</h4>
							<h6 class="font-weight-light">간단한 정보를 입력하고 회원가입을 완료하세요.</h6>
							<form class="pt-3" action="signupOk.do" method="post" name="signupform">
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
									<select name="region" class="form-control form-control-lg"
										onChange="populateCountry(document.signupform,document.signupform.region.options[document.signupform.region.selectedIndex].value)">
										<option selected value=''>Select Region</option>
										<option value='asia'>Asia</option>
										<option value='africa'>Africa</option>
										<option value='australia'>Australia</option>
										<option value='europe'>Europe</option>
										<option value='middleeast'>Middle East</option>
										<option value='lamerica'>Latin America</option>
										<option value='namerica'>North America</option>
										<option value='samerica'>South America</option>
									</select> 
									<select name="user_country" class="form-control form-control-lg"
										onChange="populateUSstate(document.signupform,document.signupform.user_country.options[document.signupform.user_country.selectedIndex].text)">
										<option value=''>↑ First Select Region</option>
									</select>
								</div>
								<div class="form-group">
									<!-- 글자수 제한 알아보기 -->
									<h6>생일</h6>
									<input type="text" class="form-control form-control-lg"
										name="user_birth" placeholder="1995">
								</div>
								<input type="submit" class="btn btn-block btn-primary btn-lg"
									value="회원가입">
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

	<script type="text/javascript">
		var africaArray = new Array("('Select country','',true,true)",
				"('Algeria')", "('Angola')", "('Burundi')", "('Cameroon')",
				"('Congo')", "('Eritrea')", "('Ethiopia')", "('Gambia')",
				"('Ghana')", "('Guinea')", "('Kenya')", "('Libya')",
				"('Madagascar')", "('Morocco')", "('Mozambique')",
				"('Namibia')", "('Nigeria')", "('Rwanda')", "('Senegal')",
				"('Sierra Leone')", "('Somalia')", "('South Africa')",
				"('Sudan')", "('Tanzania')", "('Tunisia')", "('Uganda')",
				"('Zaire')", "('Zambia')", "('Zimbabwe')", "('Other')");
		var middleeastArray = new Array("('Select country','',true,true)",
				"('Egypt')", "('Iran')", "('Iraq')", "('Israel')",
				"('Jordan')", "('Kuwait')", "('Lebanon')", "('Oman')",
				"('Saudi Arabia')", "('Syria')", "('Turkey')",
				"('U. A. Emirates')", "('Other')");
		var asiaArray = new Array("('Select country','',true,true)",
				"('Armenia')", "('Bangladesh')", "('Cambodia')", "('China')",
				"('India')", "('Indonesia')", "('Japan')", "('Malaysia')",
				"('Myanmar')", "('Nepal')", "('Pakistan')", "('Philippines')",
				"('Singapore')", "('South Korea')", "('Sri Lanka')",
				"('Taiwan')", "('Thailand')", "('Uzbekistan')", "('Vietnam')",
				"('Other')");
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
				"('Costa Rica')", "('Cuba')", "('El Salvador')",
				"('Guatemala')", "('Haiti')", "('Jamaica')", "('Mexico')",
				"('Panama')", "('Other')");
		var namericaArray = new Array("('Select country','',true,true)",
				"('Canada')", "('USA')", "('Other')");
		var samericaArray = new Array("('Select country','',true,true)",
				"('Argentina')", "('Bolivia')", "('Brazil')", "('Chile')",
				"('Colombia')", "('Ecuador')", "('Paraguay')", "('Peru')",
				"('Suriname')", "('Uruguay')", "('Venezuela')", "('Other')");
		function populateCountry(inForm, selected) {
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
		function populateUSstate(inForm, selected) {
			var stateArray = new Array("('Select state','',true,true)",
					"('Alabama')", "('Alaska')", "('Arizona')", "('Arkansas')",
					"('California')", "('Colorado')", "('Connecticut')",
					"('Delaware')", "('Columbia')", "('Florida')",
					"('Georgia')", "('Hawaii')", "('Idaho')", "('Illinois')",
					"('Indiana')", "('Iowa')", "('Kansas')", "('Kentucky')",
					"('Louisiana')", "('Maine')", "('Maryland')",
					"('Massachusetts')", "('Michigan')", "('Minnesota')",
					"('Mississippi')", "('Missouri')", "('Montana')",
					"('Nebraska')", "('Nevada')", "('New Hampshire')",
					"('New Jersey')", "('New Mexico')", "('New York')",
					"('North Carolina')", "('North Dakota')", "('Ohio')",
					"('Oklahoma')", "('Oregon')", "('Pennsylvania')",
					"('Rhode Island')", "('South Carolina')",
					"('South Dakota')", "('Tennessee')", "('Texas')",
					"('Utah')", "('Vermont')", "('Virginia')",
					"('Washington')", "('West Virginia')", "('Wisconsin')",
					"('Wyoming')");
			if (selected == 'USA') {
				for (var i = 0; i < stateArray.length; i++) {
					eval("inForm.user_country.options[i]=" + "new Option"
							+ stateArray[i]);
				}
			} else {
			}
			if (selected == 'Other') {
				newCountry = "";
				while (newCountry == "") {
					newCountry = prompt(
							"Please enter the name of the country.", "");
				}
				if (newCountry != null) {
					inForm.user_country.options[(inForm.user_country.options.length - 1)] = new Option(
							newCountry, newCountry, true, true);
					inForm.user_country.options[inForm.user_country.options.length] = new Option(
							'Other, not listed', 'Other');
				}
			}
			if (inForm.user_country.options[0].text == 'Select country') {
				inForm.user_country.options[0] = null;
			}
		}
	</script>
</body>

</html>
