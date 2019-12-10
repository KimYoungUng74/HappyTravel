<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html lang="en">

<head>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>HappyTravel 로그인</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="<c:url value='resources/Ready/assets/css/vendor.bundle.base.css'/>">
  <!-- endinject -->
  <!-- plugin css for this page -->
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="<c:url value='resources/Ready/assets/css/style.css'/>">
</head>

<body>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <a href="home" class="logo" id="logo"> <img src="resources/Ready/assets/img/loginLogo.png"  alt="logo"></a>
              </div>
              <h4>Hello! Let's go Happy Travel!!</h4>
              <h5 class="font-weight-light">로그인하세요.</h5>
              <form class="pt-3" action="loginOk.do" method="post" name="loginform">
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" name="user_id" placeholder="UserID">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" name="user_pw" placeholder="Password">
                </div>
                <div class="mt-3">
                <input type="submit" class="btn btn-block btn-primary btn-lg" id="btnLogin" value="로그인"></input>
                <!-- <button  type="button"  class="btn btn-block btn-primary btn-lg" id="btnLogin">로그인</button> -->
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" name="useCookie">
                      	로그인 유지
                    </label>
                  </div>
                  <a href="#" class="auth-link text-black">Forgot password?</a>
                </div>
                <div class="mb-2">
                </div>
                <div class="text-center mt-4 font-weight-light">
                  계정이 없으신가요? <a href="signup.do" class="text-primary">회원가입</a>
                </div>
                 <c:if test="${msg == 'failure'}">
                    <div style="color: red">
                        <script> alert("아이디 또는 비밀번호가 일치하지 않습니다.");</script> 
                    </div>
                </c:if>
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
  <script src="<c:url value='resources/Ready/assets/js/vendor.bundle.base.js'/>"></script>
  <!-- endinject -->
  <!-- inject:js -->
  <script src="<c:url value='resources/Ready/assets/js/off-canvas.js'/>"></script>
  <script src="<c:url value='resources/Ready/assets/js/hoverable-collapse.js'/>"></script>
  <script src="<c:url value='resources/Ready/assets/js/template.js'/>"></script>
  <script src="<c:url value='resources/Ready/assets/js/todolist.js'/>"></script>
  <!-- endinject -->
  
  <script>
    $(document).ready(function(){
        $("#btnLogin").click(function(){
            // 태크.val() : 태그에 입력된 값
            // 태크.val("값") : 태그의 값을 변경 
            var userId = $("#user_id").val();
            var userPw = $("#user_pw").val();
            if(userId == ""){
                alert("아이디를 입력하세요.","아이디 공백");
                $("#user_id").focus(); // 입력포커스 이동
                return; // 함수 종료
            }
            if(userPw == ""){
                alert("비밀번호를 입력하세요.","비밀번호 공백");
                $("#user_pw").focus();
                return;
            }
            // 폼 내부의 데이터를 전송할 주소
            document.loginform.action="${path}/travel/loginCheck.do";
            // 제출
            document.loginform.submit();
        });
    });
</script>
  
</body>

</html>
