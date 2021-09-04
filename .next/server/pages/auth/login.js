(function() {
var exports = {};
exports.id = "pages/auth/login";
exports.ids = ["pages/auth/login"];
exports.modules = {

/***/ "./pages/auth/login.js":
/*!*****************************!*\
  !*** ./pages/auth/login.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");

var _jsxFileName = "D:\\work\\webtech\\store\\dashboard-source-code\\pages\\auth\\login.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const INITIAL_USER = {
  email: '',
  password: ''
};

const Login = () => {
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(INITIAL_USER);
  const [disabled, setDisabled] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setUser(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');
      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__.default}/api/login`;

      const payload = _objectSpread({}, user);

      const response = await axios__WEBPACK_IMPORTED_MODULE_6___default().post(url, payload);
      (0,_utils_auth__WEBPACK_IMPORTED_MODULE_7__.handleLogin)(response.data);
    } catch (error) {
      (0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__.default)(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "login-area",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
      attached: true,
      icon: "privacy",
      header: "Welcome Back!",
      content: "Login with email and password",
      color: "green"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      error: Boolean(error),
      loading: loading,
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        error: true,
        header: "Oops!",
        content: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
          fluid: true,
          icon: "envelope",
          iconPosition: "left",
          label: "Email",
          placeholder: "Email",
          name: "email",
          type: "email",
          value: user.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
          fluid: true,
          icon: "lock",
          iconPosition: "left",
          label: "Password",
          placeholder: "Password",
          name: "password",
          type: "password",
          value: user.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          icon: "sign-in",
          type: "submit",
          content: "Login Now",
          color: "green",
          disabled: disabled || loading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
      attached: "bottom",
      warning: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "help"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, undefined), "Not an account?", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/auth/signup",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Signup here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, undefined), " ", "instead."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = (error, displayError) => {
  let errorMsg;

  if (error.response) {
    errorMsg = error.response.data;
    console.error("Error response", errorMsg); // for image upload

    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    // Request made but no response recieved
    errorMsg = error.request;
    console.error("Error request", errorMsg);
  } else {
    console.error("Error message", errorMsg);
  }

  displayError(errorMsg);
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_auth_js-utils_baseUrl_js"], function() { return __webpack_exec__("./pages/auth/login.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL3BhZ2VzL2F1dGgvbG9naW4uanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvLi91dGlscy9jYXRjaEVycm9ycy5qcyIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJJTklUSUFMX1VTRVIiLCJlbWFpbCIsInBhc3N3b3JkIiwiTG9naW4iLCJ1c2VyIiwic2V0VXNlciIsIlJlYWN0IiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzVXNlciIsIk9iamVjdCIsInZhbHVlcyIsImV2ZXJ5IiwiZWwiLCJCb29sZWFuIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZTdGF0ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXJsIiwiYmFzZVVybCIsInBheWxvYWQiLCJyZXNwb25zZSIsImF4aW9zIiwiaGFuZGxlTG9naW4iLCJkYXRhIiwiY2F0Y2hFcnJvcnMiLCJkaXNwbGF5RXJyb3IiLCJlcnJvck1zZyIsImNvbnNvbGUiLCJtZXNzYWdlIiwicmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxZQUFZLEdBQUc7QUFDakJDLE9BQUssRUFBRSxFQURVO0FBRWpCQyxVQUFRLEVBQUU7QUFGTyxDQUFyQjs7QUFLQSxNQUFNQyxLQUFLLEdBQUcsTUFBTTtBQUNoQixRQUFNLENBQUNDLElBQUQsRUFBT0MsT0FBUCxJQUFrQkMscURBQUEsQ0FBZU4sWUFBZixDQUF4QjtBQUNBLFFBQU0sQ0FBQ08sUUFBRCxFQUFXQyxXQUFYLElBQTBCRixxREFBQSxDQUFlLElBQWYsQ0FBaEM7QUFDQSxRQUFNLENBQUNHLE9BQUQsRUFBVUMsVUFBVixJQUF3QkoscURBQUEsQ0FBZSxLQUFmLENBQTlCO0FBQ0EsUUFBTSxDQUFDSyxLQUFELEVBQVFDLFFBQVIsSUFBb0JOLHFEQUFBLENBQWUsRUFBZixDQUExQjtBQUVBQSx3REFBQSxDQUFnQixNQUFNO0FBQ2xCLFVBQU1PLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNYLElBQWQsRUFBb0JZLEtBQXBCLENBQTBCQyxFQUFFLElBQUlDLE9BQU8sQ0FBQ0QsRUFBRCxDQUF2QyxDQUFmO0FBQ0FKLFVBQU0sR0FBR0wsV0FBVyxDQUFDLEtBQUQsQ0FBZCxHQUF3QkEsV0FBVyxDQUFDLElBQUQsQ0FBekM7QUFDSCxHQUhELEVBR0csQ0FBQ0osSUFBRCxDQUhIOztBQUtBLFFBQU1lLFlBQVksR0FBSUMsQ0FBRCxJQUFPO0FBQ3hCLFVBQU07QUFBRUMs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Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvYXV0aC9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEljb24sIE1lc3NhZ2UsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gJy4uLy4uL3V0aWxzL2NhdGNoRXJyb3JzJztcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4uLy4uL3V0aWxzL2Jhc2VVcmwnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGhhbmRsZUxvZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aCc7XG5cbmNvbnN0IElOSVRJQUxfVVNFUiA9IHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnXG59O1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSBSZWFjdC51c2VTdGF0ZShJTklUSUFMX1VTRVIpO1xuICAgIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaXNVc2VyID0gT2JqZWN0LnZhbHVlcyh1c2VyKS5ldmVyeShlbCA9PiBCb29sZWFuKGVsKSk7XG4gICAgICAgIGlzVXNlciA/IHNldERpc2FibGVkKGZhbHNlKSA6IHNldERpc2FibGVkKHRydWUpXG4gICAgfSwgW3VzZXJdKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRVc2VyKHByZXZTdGF0ZSA9PiAoeyAuLi5wcmV2U3RhdGUsIFtuYW1lXTogdmFsdWUgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgc2V0RXJyb3IoJycpO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vYXBpL2xvZ2luYDtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7Li4udXNlcn07XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBwYXlsb2FkKTtcbiAgICAgICAgICAgIGhhbmRsZUxvZ2luKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY2F0Y2hFcnJvcnMoZXJyb3IsIHNldEVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1hcmVhXCI+XG4gICAgICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgICAgICAgIGF0dGFjaGVkXG4gICAgICAgICAgICAgICAgaWNvbj1cInByaXZhY3lcIlxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIldlbGNvbWUgQmFjayFcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJMb2dpbiB3aXRoIGVtYWlsIGFuZCBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm0gZXJyb3I9e0Jvb2xlYW4oZXJyb3IpfSBsb2FkaW5nPXtsb2FkaW5nfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtlcnJvcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZW52ZWxvcGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlci5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXIucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwic2lnbi1pblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJMb2dpbiBOb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgbG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIHdhcm5pbmc+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImhlbHBcIiAvPlxuICAgICAgICAgICAgICAgIE5vdCBhbiBhY2NvdW50P3tcIiBcIn1cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvc2lnbnVwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPlNpZ251cCBoZXJlPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz57XCIgXCJ9aW5zdGVhZC5cbiAgICAgICAgICAgIDwvTWVzc2FnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IChlcnJvciwgZGlzcGxheUVycm9yKSA9PiB7XG4gICAgbGV0IGVycm9yTXNnO1xuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZXNwb25zZVwiLCBlcnJvck1zZyk7XG5cbiAgICAgICAgLy8gZm9yIGltYWdlIHVwbG9hZFxuICAgICAgICBpZihlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKXtcbiAgICAgICAgICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvci5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAgIC8vIFJlcXVlc3QgbWFkZSBidXQgbm8gcmVzcG9uc2UgcmVjaWV2ZWRcbiAgICAgICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVxdWVzdFwiLCBlcnJvck1zZyk7XG4gICAgfSBlbHNlICB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtZXNzYWdlXCIsIGVycm9yTXNnKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5RXJyb3IoZXJyb3JNc2cpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYXRjaEVycm9yczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9