self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Index_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Index/Banner */ "./components/Index/Banner.js");
/* harmony import */ var _components_Index_CategoryBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Index/CategoryBanner */ "./components/Index/CategoryBanner.js");
/* harmony import */ var _components_Index_HotProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Index/HotProducts */ "./components/Index/HotProducts.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\work\\webtech\\store\\dashboard-source-code\\pages\\index.js",
    _s = $RefreshSig$();








const Fashion = ({
  products
}) => {
  _s();

  React.useEffect(() => {
    next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/admin/dashboard');
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Index_Banner__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Index_CategoryBanner__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Index_HotProducts__WEBPACK_IMPORTED_MODULE_4__.default, {
      products: products
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_s(Fashion, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Fashion;

Fashion.getInitialProps = async ctx => {
  // console.log(ctx.query)
  const page = ctx.query.page ? ctx.query.page : "1";
  const size = 8;
  const searchTerm = "grocery"; // fetch data on server

  const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__.default}/api/products`;
  const payload = {
    params: {
      page,
      size,
      searchTerm
    }
  };
  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(url, payload); // return response data as an object

  return response.data; // note: this object will be merge with existing props
};

/* harmony default export */ __webpack_exports__["default"] = (Fashion);

var _c;

$RefreshReg$(_c, "Fashion");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRmFzaGlvbiIsInByb2R1Y3RzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYWdlIiwicXVlcnkiLCJzaXplIiwic2VhcmNoVGVybSIsInVybCIsImJhc2VVcmwiLCJwYXlsb2FkIiwicGFyYW1zIiwicmVzcG9uc2UiLCJheGlvcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxNQUFNQSxPQUFPLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBZ0I7QUFBQTs7QUFFNUJDLE9BQUssQ0FBQ0MsU0FBTixDQUFnQixNQUFNO0FBQ25CQywyREFBQSxDQUFZLGtCQUFaO0FBQ0YsR0FGRCxFQUVHLEVBRkg7QUFHQSxzQkFFSTtBQUFBLDRCQUNJLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSw4REFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0ksOERBQUMsa0VBQUQ7QUFBYSxjQUFRLEVBQUVIO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQSxrQkFGSjtBQVFILENBYkQ7O0dBQU1ELE87O0tBQUFBLE87O0FBZU5BLE9BQU8sQ0FBQ0ssZUFBUixHQUEwQixNQUFPQyxHQUFQLElBQWU7QUFDckM7QUFDQSxRQUFNQyxJQUFJLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxJQUFWLEdBQWlCRCxHQUFHLENBQUNFLEtBQUosQ0FBVUQsSUFBM0IsR0FBa0MsR0FBL0M7QUFDQSxRQUFNRSxJQUFJLEdBQUcsQ0FBYjtBQUNBLFFBQU1DLFVBQVUsR0FBRyxTQUFuQixDQUpxQyxDQUtyQzs7QUFDQSxRQUFNQyxHQUFHLEdBQUksR0FBRUMsbURBQVEsZUFBdkI7QUFDQSxRQUFNQyxPQUFPLEdBQUc7QUFBRUMsVUFBTSxFQUFFO0FBQUNQLFVBQUQ7QUFBT0UsVUFBUDtBQUFhQztBQUFiO0FBQVYsR0FBaEI7QUFDQSxRQUFNSyxRQUFRLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVUwsR0FBVixFQUFlRSxPQUFmLENBQXZCLENBUnFDLENBU3JDOztBQUNBLFNBQU9FLFFBQVEsQ0FBQ0UsSUFBaEIsQ0FWcUMsQ0FXckM7QUFDSCxDQVpEOztBQWNBLCtEQUFlakIsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jOTRiZWU5YTgyODZjZGUxOWIwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5kZXgvQmFubmVyXCI7XG5pbXBvcnQgQ2F0ZWdvcnlCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5kZXgvQ2F0ZWdvcnlCYW5uZXJcIjtcbmltcG9ydCBIb3RQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmRleC9Ib3RQcm9kdWN0c1wiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi4vdXRpbHMvYmFzZVVybCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuXG5cbmNvbnN0IEZhc2hpb24gPSAoe3Byb2R1Y3RzfSkgPT4ge1xuICAgXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL2Rhc2hib2FyZCcpXG4gICAgfSwgW10pO1xuICAgIHJldHVybihcbiAgICAgICBcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxCYW5uZXIgLz5cbiAgICAgICAgICAgIDxDYXRlZ29yeUJhbm5lciAvPlxuICAgICAgICAgICAgPEhvdFByb2R1Y3RzIHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuRmFzaGlvbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coY3R4LnF1ZXJ5KVxuICAgIGNvbnN0IHBhZ2UgPSBjdHgucXVlcnkucGFnZSA/IGN0eC5xdWVyeS5wYWdlIDogXCIxXCI7XG4gICAgY29uc3Qgc2l6ZSA9IDg7XG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IFwiZ3JvY2VyeVwiO1xuICAgIC8vIGZldGNoIGRhdGEgb24gc2VydmVyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vYXBpL3Byb2R1Y3RzYDtcbiAgICBjb25zdCBwYXlsb2FkID0geyBwYXJhbXM6IHtwYWdlLCBzaXplLCBzZWFyY2hUZXJtfX1cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHBheWxvYWQpO1xuICAgIC8vIHJldHVybiByZXNwb25zZSBkYXRhIGFzIGFuIG9iamVjdFxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gICAgLy8gbm90ZTogdGhpcyBvYmplY3Qgd2lsbCBiZSBtZXJnZSB3aXRoIGV4aXN0aW5nIHByb3BzXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhc2hpb247Il0sInNvdXJjZVJvb3QiOiIifQ==