exports.id = "utils_auth_js-utils_baseUrl_js";
exports.ids = ["utils_auth_js-utils_baseUrl_js"];
exports.modules = {

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleLogin": function() { return /* binding */ handleLogin; },
/* harmony export */   "redirectUser": function() { return /* binding */ redirectUser; },
/* harmony export */   "handleLogout": function() { return /* binding */ handleLogout; }
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const handleLogin = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set('token', token);
  localStorage.setItem('authToken', token);
  next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/admin/dashboard');
};
const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push(location);
  }
};
const handleLogout = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default().remove('token');
  localStorage.removeItem('authToken');
  window.localStorage.setItem('logout', Date.now());
  next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/auth/login');
};

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const baseUrl = process.env.NODE_ENV === "production" 
// ? 'https://shoponix.envytheme.com' 
// : 'http://localhost:3000';
// const baseUrl='https://admin-next.herokuapp.com';
const baseUrl = 'http://localhost:3000';
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL3V0aWxzL2F1dGguanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2lnbm9yZWR8RDpcXHdvcmtcXHdlYnRlY2hcXHN0b3JlXFxkYXNoYm9hcmQtc291cmNlLWNvZGVcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJoYW5kbGVMb2dpbiIsInRva2VuIiwiY29va2llIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIlJvdXRlciIsInJlZGlyZWN0VXNlciIsImN0eCIsImxvY2F0aW9uIiwicmVxIiwicmVzIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwid2luZG93IiwiRGF0ZSIsIm5vdyIsImJhc2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLEdBQUlDLEtBQUQsSUFBVztBQUNsQ0Msc0RBQUEsQ0FBVyxPQUFYLEVBQW9CRCxLQUFwQjtBQUNBRSxjQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsRUFBaUNILEtBQWpDO0FBQ0FJLHlEQUFBLENBQVksa0JBQVo7QUFDSCxDQUpNO0FBTUEsTUFBTUMsWUFBWSxHQUFHLENBQUNDLEdBQUQsRUFBTUMsUUFBTixLQUFtQjtBQUMzQyxNQUFHRCxHQUFHLENBQUNFLEdBQVAsRUFBVztBQUNQRixPQUFHLENBQUNHLEdBQUosQ0FBUUMsU0FBUixDQUFrQixHQUFsQixFQUF1QjtBQUFFQyxjQUFRLEVBQUVKO0FBQVosS0FBdkI7QUFDQUQsT0FBRyxDQUFDRyxHQUFKLENBQVFHLEdBQVI7QUFDSCxHQUhELE1BR087QUFDSFIsMkRBQUEsQ0FBWUcsUUFBWjtBQUNIO0FBQ0osQ0FQTTtBQVNBLE1BQU1NLFlBQVksR0FBRyxNQUFNO0FBQzlCWix5REFBQSxDQUFjLE9BQWQ7QUFDQUMsY0FBWSxDQUFDWSxVQUFiLENBQXdCLFdBQXhCO0FBQ0FDLFFBQU0sQ0FBQ2IsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsUUFBNUIsRUFBc0NhLElBQUksQ0FBQ0MsR0FBTCxFQUF0QztBQUNBYix5REFBQSxDQUFZLGFBQVo7QUFDSCxDQUxNLEM7Ozs7Ozs7Ozs7OztBQ2xCUDtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1jLE9BQU8sR0FBQyx1QkFBZDtBQUlBLCtEQUFlQSxPQUFmLEU7Ozs7Ozs7Ozs7QUNWQSxlIiwiZmlsZSI6InV0aWxzX2F1dGhfanMtdXRpbHNfYmFzZVVybF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTG9naW4gPSAodG9rZW4pID0+IHtcbiAgICBjb29raWUuc2V0KCd0b2tlbicsIHRva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aFRva2VuJyx0b2tlbilcbiAgICBSb3V0ZXIucHVzaCgnL2FkbWluL2Rhc2hib2FyZCcpO1xufVxuXG5leHBvcnQgY29uc3QgcmVkaXJlY3RVc2VyID0gKGN0eCwgbG9jYXRpb24pID0+IHtcbiAgICBpZihjdHgucmVxKXtcbiAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgY3R4LnJlcy5lbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBSb3V0ZXIucHVzaChsb2NhdGlvbik7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhUb2tlbicpXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dvdXQnLCBEYXRlLm5vdygpKTtcbiAgICBSb3V0ZXIucHVzaCgnL2F1dGgvbG9naW4nKTtcbn0iLCIvLyBjb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiIFxyXG4vLyA/ICdodHRwczovL3Nob3Bvbml4LmVudnl0aGVtZS5jb20nIFxyXG4vLyA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xyXG5cclxuLy8gY29uc3QgYmFzZVVybD0naHR0cHM6Ly9hZG1pbi1uZXh0Lmhlcm9rdWFwcC5jb20nO1xyXG5cclxuY29uc3QgYmFzZVVybD0naHR0cDovL2xvY2FsaG9zdDozMDAwJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZVVybDsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9