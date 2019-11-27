<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html lang="en">

<head>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>RoyalUI Admin</title>
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
                <img src="resources/Ready/assets/img/loginLogo.png" alt="logo">
              </div>
              <h4>Hello! let's go Happy Travel!!</h4>
              <h5 class="font-weight-light">로그인하세요.</h5>
              <form class="pt-3">
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" id="user_id" placeholder="UserID">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" id="user_pw" placeholder="Password">
                </div>
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN IN</a>
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input">
                      Keep me signed in
                    </label>
                  </div>
                  <a href="#" class="auth-link text-black">Forgot password?</a>
                </div>
                <div class="mb-2">
                </div>
                <div class="text-center mt-4 font-weight-light">
                  계정이 없으신가요? <a href="register.html" class="text-primary">회원가입</a>
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
  <script src="<c:url value='resources/Ready/assets/js/vendor.bundle.base.js'/>"></script>
  <!-- endinject -->
  <!-- inject:js -->
  <script src="<c:url value='resources/Ready/assets/js/off-canvas.js'/>"></script>
  <script src="<c:url value='resources/Ready/assets/js/hoverable-collapse.js'/>"></script>
  <script src="<c:url value='resources/Ready/assets/js/template.js'/>"></script>
  <script src="<c:url value='resources/Ready/assets/js/todolist.js'/>"></script>
  <!-- endinject -->
</body>

</html>
