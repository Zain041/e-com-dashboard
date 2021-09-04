(function() {
var exports = {};
exports.id = "pages/auth/signup";
exports.ids = ["pages/auth/signup"];
exports.modules = {

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");

var _jsxFileName = "D:\\work\\webtech\\store\\dashboard-source-code\\pages\\auth\\signup.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const INITIAL_USER = {
  fullName: '',
  email: '',
  password: ''
};

const Signup = () => {
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
      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default}/api/admin`;

      const payload = _objectSpread({}, user);

      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(url, payload);
      (0,_utils_auth__WEBPACK_IMPORTED_MODULE_7__.handleLogin)(response.data);
    } catch (error) {
      (0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_5__.default)(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "signup-area",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Message, {
      attached: true,
      icon: "settings",
      header: "Get Started",
      content: "Create a new account",
      color: "green"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form, {
      error: Boolean(error),
      loading: loading,
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Message, {
        error: true,
        header: "Oops!",
        content: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Segment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {
          fluid: true,
          icon: "user",
          iconPosition: "left",
          label: "Name",
          placeholder: "Name",
          name: "fullName",
          value: user.fullName,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {
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
          lineNumber: 73,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {
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
          lineNumber: 84,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
          icon: "signup",
          type: "submit",
          content: "Signup Now",
          color: "green",
          disabled: disabled || loading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Message, {
      attached: "bottom",
      warning: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        name: "help"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, undefined), "Existing user?", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/auth/login",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Login here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, undefined), " ", "instead."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_auth_js-utils_baseUrl_js"], function() { return __webpack_exec__("./pages/auth/signup.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL3BhZ2VzL2F1dGgvc2lnbnVwLmpzIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0Ly4vdXRpbHMvY2F0Y2hFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiSU5JVElBTF9VU0VSIiwiZnVsbE5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiU2lnbnVwIiwidXNlciIsInNldFVzZXIiLCJSZWFjdCIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJpc1VzZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJldmVyeSIsImVsIiwiQm9vbGVhbiIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsImJhc2VVcmwiLCJwYXlsb2FkIiwicmVzcG9uc2UiLCJheGlvcyIsImhhbmRsZUxvZ2luIiwiZGF0YSIsImNhdGNoRXJyb3JzIiwiZGlzcGxheUVycm9yIiwiZXJyb3JNc2ciLCJjb25zb2xlIiwibWVzc2FnZSIsInJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxVQUFRLEVBQUUsRUFETztBQUVqQkMsT0FBSyxFQUFFLEVBRlU7QUFHakJDLFVBQVEsRUFBRTtBQUhPLENBQXJCOztBQU1BLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCQyxxREFBQSxDQUFlUCxZQUFmLENBQXhCO0FBQ0EsUUFBTSxDQUFDUSxRQUFELEVBQVdDLFdBQVgsSUFBMEJGLHFEQUFBLENBQWUsSUFBZixDQUFoQztBQUNBLFFBQU0sQ0FBQ0csT0FBRCxFQUFVQyxVQUFWLElBQXdCSixxREFBQSxDQUFlLEtBQWYsQ0FBOUI7QUFDQSxRQUFNLENBQUNLLEtBQUQsRUFBUUMsUUFBUixJQUFvQk4scURBQUEsQ0FBZSxFQUFmLENBQTFCO0FBRUFBLHdEQUFBLENBQWdCLE1BQU07QUFDbEIsVUFBTU8sTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsSUFBZCxFQUFvQlksS0FBcEIsQ0FBMEJDLEVBQUUsSUFBSUMsT0FBTyxDQUFDRCxFQUFELENBQXZDLENBQWY7QUFDQUosVUFBTSxHQUFHTCxXQUFXLENBQUMsS0FBRCxDQUFkLEdBQXdCQSxXQUFXLENBQUMsSUFBRCxDQUF6QztBQUNILEdBSEQsRUFHRyxDQUFDSixJQUFELENBSEg7O0FBS0EsUUFBTWUsWUFB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LEdBQUd6QixLQUFLLENBQUM0QixPQUFqQjtBQUNBRixXQUFPLENBQUMxQixLQUFSLENBQWMsZUFBZCxFQUErQnlCLFFBQS9CO0FBQ0gsR0FKTSxNQUlDO0FBQ0pDLFdBQU8sQ0FBQzFCLEtBQVIsQ0FBYyxlQUFkLEVBQStCeUIsUUFBL0I7QUFDSDs7QUFFREQsY0FBWSxDQUFDQyxRQUFELENBQVo7QUFDSCxDQW5CRDs7QUFxQkEsK0RBQWVGLFdBQWYsRTs7Ozs7Ozs7Ozs7QUNyQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvYXV0aC9zaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEljb24sIE1lc3NhZ2UsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSAnLi4vLi4vdXRpbHMvY2F0Y2hFcnJvcnMnO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi4vLi4vdXRpbHMvYmFzZVVybCc7XG5pbXBvcnQgeyBoYW5kbGVMb2dpbiB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xuXG5jb25zdCBJTklUSUFMX1VTRVIgPSB7XG4gICAgZnVsbE5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJydcbn07XG5cbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSBSZWFjdC51c2VTdGF0ZShJTklUSUFMX1VTRVIpO1xuICAgIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaXNVc2VyID0gT2JqZWN0LnZhbHVlcyh1c2VyKS5ldmVyeShlbCA9PiBCb29sZWFuKGVsKSk7XG4gICAgICAgIGlzVXNlciA/IHNldERpc2FibGVkKGZhbHNlKSA6IHNldERpc2FibGVkKHRydWUpXG4gICAgfSwgW3VzZXJdKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRVc2VyKHByZXZTdGF0ZSA9PiAoeyAuLi5wcmV2U3RhdGUsIFtuYW1lXTogdmFsdWUgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgc2V0RXJyb3IoJycpO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vYXBpL2FkbWluYDtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7Li4udXNlcn07XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBwYXlsb2FkKTtcbiAgICAgICAgICAgIGhhbmRsZUxvZ2luKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY2F0Y2hFcnJvcnMoZXJyb3IsIHNldEVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtYXJlYVwiPlxuICAgICAgICAgICAgPE1lc3NhZ2VcbiAgICAgICAgICAgICAgICBhdHRhY2hlZFxuICAgICAgICAgICAgICAgIGljb249XCJzZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwiR2V0IFN0YXJ0ZWRcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgYSBuZXcgYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm0gZXJyb3I9e0Jvb2xlYW4oZXJyb3IpfSBsb2FkaW5nPXtsb2FkaW5nfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtlcnJvcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZ1bGxOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyLmZ1bGxOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImVudmVsb3BlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXIuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJzaWdudXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiU2lnbnVwIE5vd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCBsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkPVwiYm90dG9tXCIgd2FybmluZz5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaGVscFwiIC8+XG4gICAgICAgICAgICAgICAgRXhpc3RpbmcgdXNlcj97XCIgXCJ9XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPkxvZ2luIGhlcmU8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1pbnN0ZWFkLlxuICAgICAgICAgICAgPC9NZXNzYWdlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IChlcnJvciwgZGlzcGxheUVycm9yKSA9PiB7XG4gICAgbGV0IGVycm9yTXNnO1xuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZXNwb25zZVwiLCBlcnJvck1zZyk7XG5cbiAgICAgICAgLy8gZm9yIGltYWdlIHVwbG9hZFxuICAgICAgICBpZihlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKXtcbiAgICAgICAgICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvci5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAgIC8vIFJlcXVlc3QgbWFkZSBidXQgbm8gcmVzcG9uc2UgcmVjaWV2ZWRcbiAgICAgICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVxdWVzdFwiLCBlcnJvck1zZyk7XG4gICAgfSBlbHNlICB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtZXNzYWdlXCIsIGVycm9yTXNnKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5RXJyb3IoZXJyb3JNc2cpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYXRjaEVycm9yczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9