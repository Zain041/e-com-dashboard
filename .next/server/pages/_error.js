(function() {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\work\\webtech\\store\\dashboard-source-code\\pages\\_error.js";

function Error({
  statusCode
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "error-area",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

Error.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_error.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL3BhZ2VzL19lcnJvci5qcyIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkVycm9yIiwic3RhdHVzQ29kZSIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQztBQUFGLENBQWYsRUFBK0I7QUFDM0Isc0JBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDJCQUNJO0FBQUEsZ0JBQ0tBLFVBQVUsR0FDUixZQUFXQSxVQUFXLHFCQURkLEdBRVQ7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O0FBRURELEtBQUssQ0FBQ0UsZUFBTixHQUF3QixDQUFDO0FBQUVDLEtBQUY7QUFBT0M7QUFBUCxDQUFELEtBQWtCO0FBQ3RDLFFBQU1ILFVBQVUsR0FBR0UsR0FBRyxHQUFHQSxHQUFHLENBQUNGLFVBQVAsR0FBb0JHLEdBQUcsR0FBR0EsR0FBRyxDQUFDSCxVQUFQLEdBQW9CLEdBQWpFO0FBQ0EsU0FBTztBQUFFQTtBQUFGLEdBQVA7QUFDSCxDQUhEOztBQUtBLCtEQUFlRCxLQUFmLEU7Ozs7Ozs7Ozs7O0FDakJBLG1EIiwiZmlsZSI6InBhZ2VzL19lcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEVycm9yKHsgc3RhdHVzQ29kZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1hcmVhXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICB7c3RhdHVzQ29kZVxuICAgICAgICAgICAgICAgID8gYEFuIGVycm9yICR7c3RhdHVzQ29kZX0gb2NjdXJyZWQgb24gc2VydmVyYFxuICAgICAgICAgICAgICAgIDogJ0FuIGVycm9yIG9jY3VycmVkIG9uIGNsaWVudCd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuRXJyb3IuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVzLCBlcnIgfSkgPT4ge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0XG4gICAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9