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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Index_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Index/Banner */ "./components/Index/Banner.js");
/* harmony import */ var _components_Index_CategoryBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Index/CategoryBanner */ "./components/Index/CategoryBanner.js");
/* harmony import */ var _components_Index_HotProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Index/HotProducts */ "./components/Index/HotProducts.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\work\\webtech\\store\\dashboard-source-code\\pages\\index.js",
    _s = $RefreshSig$();









const Fashion = ({
  products
}) => {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    next_router__WEBPACK_IMPORTED_MODULE_7___default().push('/admin/dashboard');
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Welcome Apna Store Admin"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

_s(Fashion, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Fashion;

Fashion.getInitialProps = async ctx => {
  // console.log(ctx.query)
  const page = ctx.query.page ? ctx.query.page : "1";
  const size = 8;
  const searchTerm = "grocery"; // fetch data on server

  const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default}/api/products`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRmFzaGlvbiIsInByb2R1Y3RzIiwidXNlRWZmZWN0IiwiUm91dGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicGFnZSIsInF1ZXJ5Iiwic2l6ZSIsInNlYXJjaFRlcm0iLCJ1cmwiLCJiYXNlVXJsIiwicGF5bG9hZCIsInBhcmFtcyIsInJlc3BvbnNlIiwiYXhpb3MiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFnQjtBQUFBOztBQUU1QkMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2JDLDJEQUFBLENBQVksa0JBQVo7QUFDRixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0Esc0JBRUk7QUFBQSwyQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQUZKO0FBTUgsQ0FYRDs7R0FBTUgsTzs7S0FBQUEsTzs7QUFhTkEsT0FBTyxDQUFDSSxlQUFSLEdBQTBCLE1BQU9DLEdBQVAsSUFBZTtBQUNyQztBQUNBLFFBQU1DLElBQUksR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVVELElBQVYsR0FBaUJELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxJQUEzQixHQUFrQyxHQUEvQztBQUNBLFFBQU1FLElBQUksR0FBRyxDQUFiO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLFNBQW5CLENBSnFDLENBS3JDOztBQUNBLFFBQU1DLEdBQUcsR0FBSSxHQUFFQyxtREFBUSxlQUF2QjtBQUNBLFFBQU1DLE9BQU8sR0FBRztBQUFFQyxVQUFNLEVBQUU7QUFBQ1AsVUFBRDtBQUFPRSxVQUFQO0FBQWFDO0FBQWI7QUFBVixHQUFoQjtBQUNBLFFBQU1LLFFBQVEsR0FBRyxNQUFNQyxnREFBQSxDQUFVTCxHQUFWLEVBQWVFLE9BQWYsQ0FBdkIsQ0FScUMsQ0FTckM7O0FBQ0EsU0FBT0UsUUFBUSxDQUFDRSxJQUFoQixDQVZxQyxDQVdyQztBQUNILENBWkQ7O0FBY0EsK0RBQWVoQixPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQyZjQ1ZmFiZjcyODkxYTBkZTIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmRleC9CYW5uZXJcIjtcbmltcG9ydCBDYXRlZ29yeUJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmRleC9DYXRlZ29yeUJhbm5lclwiO1xuaW1wb3J0IEhvdFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL0luZGV4L0hvdFByb2R1Y3RzXCI7XG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi91dGlscy9iYXNlVXJsJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5cblxuY29uc3QgRmFzaGlvbiA9ICh7cHJvZHVjdHN9KSA9PiB7XG4gICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vZGFzaGJvYXJkJylcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuKFxuICAgICAgIFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPldlbGNvbWUgQXBuYSBTdG9yZSBBZG1pbjwvaDE+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbkZhc2hpb24uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGN0eC5xdWVyeSlcbiAgICBjb25zdCBwYWdlID0gY3R4LnF1ZXJ5LnBhZ2UgPyBjdHgucXVlcnkucGFnZSA6IFwiMVwiO1xuICAgIGNvbnN0IHNpemUgPSA4O1xuICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBcImdyb2NlcnlcIjtcbiAgICAvLyBmZXRjaCBkYXRhIG9uIHNlcnZlclxuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9L2FwaS9wcm9kdWN0c2A7XG4gICAgY29uc3QgcGF5bG9hZCA9IHsgcGFyYW1zOiB7cGFnZSwgc2l6ZSwgc2VhcmNoVGVybX19XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsLCBwYXlsb2FkKTtcbiAgICAvLyByZXR1cm4gcmVzcG9uc2UgZGF0YSBhcyBhbiBvYmplY3RcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICAgIC8vIG5vdGU6IHRoaXMgb2JqZWN0IHdpbGwgYmUgbWVyZ2Ugd2l0aCBleGlzdGluZyBwcm9wc1xufVxuXG5leHBvcnQgZGVmYXVsdCBGYXNoaW9uOyJdLCJzb3VyY2VSb290IjoiIn0=