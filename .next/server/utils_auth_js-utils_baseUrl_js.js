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
const baseUrl = 'https://admin-next.herokuapp.com';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL3V0aWxzL2F1dGguanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2lnbm9yZWR8RDpcXHdvcmtcXHdlYnRlY2hcXHN0b3JlXFxkYXNoYm9hcmQtc291cmNlLWNvZGVcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJoYW5kbGVMb2dpbiIsInRva2VuIiwiY29va2llIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIlJvdXRlciIsInJlZGlyZWN0VXNlciIsImN0eCIsImxvY2F0aW9uIiwicmVxIiwicmVzIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwid2luZG93IiwiRGF0ZSIsIm5vdyIsImJhc2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLEdBQUlDLEtBQUQsSUFBVztBQUNsQ0Msc0RBQUEsQ0FBVyxPQUFYLEVBQW9CRCxLQUFwQjtBQUNBRSxjQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsRUFBaUNILEtBQWpDO0FBQ0FJLHlEQUFBLENBQVksa0JBQVo7QUFDSCxDQUpNO0FBTUEsTUFBTUMsWUFBWSxHQUFHLENBQUNDLEdBQUQsRUFBTUMsUUFBTixLQUFtQjtBQUMzQyxNQUFHRCxHQUFHLENBQUNFLEdBQVAsRUFBVztBQUNQRixPQUFHLENBQUNHLEdBQUosQ0FBUUMsU0FBUixDQUFrQixHQUFsQixFQUF1QjtBQUFFQyxjQUFRLEVBQUVKO0FBQVosS0FBdkI7QUFDQUQsT0FBRyxDQUFDRyxHQUFKLENBQVFHLEdBQVI7QUFDSCxHQUhELE1BR087QUFDSFIsMkRBQUEsQ0FBWUcsUUFBWjtBQUNIO0FBQ0osQ0FQTTtBQVNBLE1BQU1NLFlBQVksR0FBRyxNQUFNO0FBQzlCWix5REFBQSxDQUFjLE9BQWQ7QUFDQUMsY0FBWSxDQUFDWSxVQUFiLENBQXdCLFdBQXhCO0FBQ0FDLFFBQU0sQ0FBQ2IsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsUUFBNUIsRUFBc0NhLElBQUksQ0FBQ0MsR0FBTCxFQUF0QztBQUNBYix5REFBQSxDQUFZLGFBQVo7QUFDSCxDQUxNLEM7Ozs7Ozs7Ozs7OztBQ2xCUDtBQUNBO0FBQ0E7QUFFQSxNQUFNYyxPQUFPLEdBQUMsa0NBQWQ7QUFFQSwrREFBZUEsT0FBZixFOzs7Ozs7Ozs7O0FDTkEsZSIsImZpbGUiOiJ1dGlsc19hdXRoX2pzLXV0aWxzX2Jhc2VVcmxfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUxvZ2luID0gKHRva2VuKSA9PiB7XG4gICAgY29va2llLnNldCgndG9rZW4nLCB0b2tlbik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhUb2tlbicsdG9rZW4pXG4gICAgUm91dGVyLnB1c2goJy9hZG1pbi9kYXNoYm9hcmQnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0VXNlciA9IChjdHgsIGxvY2F0aW9uKSA9PiB7XG4gICAgaWYoY3R4LnJlcSl7XG4gICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIGN0eC5yZXMuZW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUm91dGVyLnB1c2gobG9jYXRpb24pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBjb29raWUucmVtb3ZlKCd0b2tlbicpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoVG9rZW4nKVxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nb3V0JywgRGF0ZS5ub3coKSk7XG4gICAgUm91dGVyLnB1c2goJy9hdXRoL2xvZ2luJyk7XG59IiwiLy8gY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiBcbi8vID8gJ2h0dHBzOi8vc2hvcG9uaXguZW52eXRoZW1lLmNvbScgXG4vLyA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuXG5jb25zdCBiYXNlVXJsPSdodHRwczovL2FkbWluLW5leHQuaGVyb2t1YXBwLmNvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==