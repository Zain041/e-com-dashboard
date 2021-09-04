(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/_App/Footer.js":
/*!***********************************!*\
  !*** ./components/_App/Footer.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);





const Footer = ({
  user
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // console.log(user)

  const isRoot = user && user.role == 'root';
  const isAdmin = user && user.role == 'admin'; // const isRootOrAdmin = isRoot || isAdmin;

  const isActive = route => {
    return route == router.pathname;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/_App/GoTop.js":
/*!**********************************!*\
  !*** ./components/_App/GoTop.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\work\\webtech\\store\\dashboard-source-code\\components\\_App\\GoTop.js";


const GoTop = props => {
  const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }

    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, props.delayInMs);
  };

  const renderGoTopIcon = () => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `go-top ${thePosition ? 'active' : ''}`,
      onClick: scrollToTop,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "arrow alternate circle up outline icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: renderGoTopIcon()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/_App/Footer.js");
/* harmony import */ var _GoTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GoTop */ "./components/_App/GoTop.js");
/* harmony import */ var _StaticHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StaticHeader */ "./components/_App/StaticHeader.js");

var _jsxFileName = "D:\\work\\webtech\\store\\dashboard-source-code\\components\\_App\\Layout.js";







const Layout = ({
  children,
  user
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Apna Store Admin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Buy high-quality bicycle parts and save money while riding through Nevada."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "og:title",
        property: "og:title",
        content: "Shoponix - MERN Next eCommerce Store"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "Shoponix - MERN Next eCommerce Store"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "canonical",
        href: "https://shoponix.envytheme.com/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: "https://res.cloudinary.com/dev-empty/image/upload/v1590078952/qlm6qb1hzxd6iccmaf82.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StaticHeader__WEBPACK_IMPORTED_MODULE_6__.default, {
      user: user
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
      fluid: true,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {
      user: user
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoTop__WEBPACK_IMPORTED_MODULE_5__.default, {
      scrollStepInPx: "100",
      delayInMs: "10.50"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/_App/StaticHeader.js":
/*!*****************************************!*\
  !*** ./components/_App/StaticHeader.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");


var _jsxFileName = "D:\\work\\webtech\\store\\dashboard-source-code\\components\\_App\\StaticHeader.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







(next_router__WEBPACK_IMPORTED_MODULE_3___default().onRouteChangeStart) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();

(next_router__WEBPACK_IMPORTED_MODULE_3___default().onRouteChangeComplete) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();

(next_router__WEBPACK_IMPORTED_MODULE_3___default().onRouteChangeError) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();

const StaticHeader = ({
  user
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const [menuActive, setMenuActive] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [search, setSearch] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
    search: ''
  }); // console.log(user)

  const isRoot = user && user.role == 'root';
  const isAdmin = user && user.role == 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

  const isActive = route => {
    return route == router.pathname;
  };

  const handleOnChange = e => {
    const {
      name,
      value
    } = e.target;
    setSearch(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: value
    }));
  };

  const handleSearch = e => {
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push({
      pathname: '/products',
      query: {
        term: search.search
      }
    });
  };

  const menuToggle = () => {
    setMenuActive(!menuActive);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "ui grid navbar-area",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "computer tablet only row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ui inverted fixed menu navbar page grid",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/admin/dashboard",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: `item ${isActive('//admin/dashboard') ? 'active' : null}`,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "dashboard icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 25
            }, undefined), "Dashboard"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "right menu",
          children: [user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ui simple dropdown item",
              children: [user.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "dropdown icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "menu",
                children: [isRootOrAdmin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/admin/dashboard",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: `item ${isActive('/admin/dashboard') ? 'active' : null}`,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "dashboard icon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 53
                    }, undefined), "Dashboard"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 49
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 45
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/profile",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: `item ${isActive('/profile') ? 'active' : null}`,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "user icon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 164,
                      columnNumber: 49
                    }, undefined), "My Profile"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 45
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "divider"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: `item`,
                    onClick: e => {
                      e.preventDefault();
                      (0,_utils_auth__WEBPACK_IMPORTED_MODULE_5__.handleLogout)();
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "sign-out icon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 49
                    }, undefined), "Logout"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 45
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 33
            }, undefined)
          }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/auth/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: `item ${isActive('/auth/login') ? 'active' : null}`,
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/auth/signup",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: `item ${isActive('/auth/signup') ? 'active' : null}`,
                children: "Signup"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            className: "ui form",
            onSubmit: e => {
              e.preventDefault();
              handleSearch();
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ui transparent icon input",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                className: "prompt",
                type: "text",
                placeholder: "Search...",
                name: "search",
                value: search.search,
                onChange: handleOnChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                onClick: e => {
                  e.preventDefault();
                  handleSearch();
                },
                className: "search link icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mobile only row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ui fixed inverted navbar menu",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "brand item",
            children: "Apna Store"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "right menu open",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "#",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              onClick: e => {
                e.preventDefault();
                menuToggle();
              },
              className: "menu item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "align justify icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `ui vertical navbar menu ${menuActive ? 'mobile-active-show' : 'mobile-active-hide'}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "menu root-user",
          children: [user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ui simple dropdown item",
              children: [user.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "dropdown icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 331,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "menu",
                children: [isRootOrAdmin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/admin/dashboard",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: `item ${isActive('/admin/dashboard') ? 'active' : null}`,
                    onClick: menuToggle,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "dashboard icon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 336,
                      columnNumber: 53
                    }, undefined), "Dashboard"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 335,
                    columnNumber: 49
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 334,
                  columnNumber: 45
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/profile",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: `item ${isActive('/profile') ? 'active' : null}`,
                    onClick: menuToggle,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "user icon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 344,
                      columnNumber: 49
                    }, undefined), "My Profile"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 343,
                    columnNumber: 45
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 342,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/my-orders-history",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: `item ${isActive('/my-orders-history') ? 'active' : null}`,
                    onClick: menuToggle,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "history icon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 350,
                      columnNumber: 49
                    }, undefined), "My Orders History"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 349,
                    columnNumber: 45
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 348,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "divider"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 354,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: `item`,
                    onClick: _utils_auth__WEBPACK_IMPORTED_MODULE_5__.handleLogout,
                    onClick: menuToggle,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "sign-out icon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 357,
                      columnNumber: 49
                    }, undefined), "Logout"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 356,
                    columnNumber: 45
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 355,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 332,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 33
            }, undefined)
          }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/auth/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: `item ${isActive('/auth/login') ? 'active' : null}`,
                onClick: menuToggle,
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 367,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/auth/signup",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: `item ${isActive('/auth/signup') ? 'active' : null}`,
                onClick: menuToggle,
                children: "Signup"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 373,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            className: "ui form",
            onSubmit: e => {
              e.preventDefault();
              handleSearch();
              menuToggle();
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ui transparent icon input",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                className: "prompt",
                type: "text",
                placeholder: "Search...",
                name: "search",
                value: search.search,
                onChange: handleOnChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 381,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                onClick: e => {
                  e.preventDefault();
                  handleSearch();
                  menuToggle();
                },
                className: "search link icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 389,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 380,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 379,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StaticHeader);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/semantic.min.css */ "./public/semantic.min.css");
/* harmony import */ var _public_semantic_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_nprogress_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/nprogress.css */ "./public/nprogress.css");
/* harmony import */ var _public_nprogress_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_nprogress_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/styles.css */ "./public/styles.css");
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_responsive_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/responsive.css */ "./public/responsive.css");
/* harmony import */ var _public_responsive_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_responsive_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/_App/Layout */ "./components/_App/Layout.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");

var _jsxFileName = "D:\\work\\webtech\\store\\dashboard-source-code\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_5___default()) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "syncLogout", e => {
      if (e.key === 'logout') {
        next_router__WEBPACK_IMPORTED_MODULE_7___default().push('/auth/login');
      }
    });
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_8__.parseCookies)(ctx);
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (!token) {
      const isProtectedRoute = ctx.pathname === '/profile' || ctx.pathname === '/admin/add-product' || ctx.pathname === '/my-orders-history' || ctx.pathname === '/admin/users' || ctx.pathname === '/admin/dashboard';

      if (isProtectedRoute) {
        (0,_utils_auth__WEBPACK_IMPORTED_MODULE_10__.redirectUser)(ctx, '/auth/login');
      }
    } else {
      try {
        const payload = {
          headers: {
            Authorization: token
          }
        };
        const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_11__.default}/api/account`;
        const response = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(url, payload);
        const user = response.data;
        const isRoot = user.role == 'root';
        const isAdmin = user.role == 'admin'; // if authenticated but not root or admin

        const isNotPermitted = !(isRoot || isAdmin) && (ctx.pathname === '/admin/add-product' || ctx.pathname === '/admin/customers' || ctx.pathname === '/admin/orders' || ctx.pathname === '/admin/dashboard');

        if (isNotPermitted) {
          (0,_utils_auth__WEBPACK_IMPORTED_MODULE_10__.redirectUser)(ctx, '/products');
        }

        pageProps.user = user;
      } catch (error) {
        // console.error("Error getting current user", error);
        //invalid token
        (0,nookies__WEBPACK_IMPORTED_MODULE_8__.destroyCookie)(ctx, "token");
        (0,_utils_auth__WEBPACK_IMPORTED_MODULE_10__.redirectUser)(ctx, '/auth/login');
      }
    }

    return {
      pageProps
    };
  }

  componentDidMount() {
    window.addEventListener('storage', this.syncLogout);
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_Layout__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread(_objectSpread({}, pageProps), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./public/nprogress.css":
/*!******************************!*\
  !*** ./public/nprogress.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "./public/responsive.css":
/*!*******************************!*\
  !*** ./public/responsive.css ***!
  \*******************************/
/***/ (function() {



/***/ }),

/***/ "./public/semantic.min.css":
/*!*********************************!*\
  !*** ./public/semantic.min.css ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "./public/styles.css":
/*!***************************!*\
  !*** ./public/styles.css ***!
  \***************************/
/***/ (function() {



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

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_app_js","utils_auth_js-utils_baseUrl_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL2NvbXBvbmVudHMvX0FwcC9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvLi9jb21wb25lbnRzL19BcHAvR29Ub3AuanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvLi9jb21wb25lbnRzL19BcHAvTGF5b3V0LmpzIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0Ly4vY29tcG9uZW50cy9fQXBwL1N0YXRpY0hlYWRlci5qcyIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkZvb3RlciIsInVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc1Jvb3QiLCJyb2xlIiwiaXNBZG1pbiIsImlzQWN0aXZlIiwicm91dGUiLCJwYXRobmFtZSIsIkdvVG9wIiwicHJvcHMiLCJ0aGVQb3NpdGlvbiIsInNldFRoZVBvc2l0aW9uIiwiUmVhY3QiLCJ0aW1lb3V0UmVmIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsIm9uU2Nyb2xsU3RlcCIsInBhZ2VZT2Zmc2V0IiwiY2xlYXJJbnRlcnZhbCIsImN1cnJlbnQiLCJzY3JvbGwiLCJzY3JvbGxTdGVwSW5QeCIsInNjcm9sbFRvVG9wIiwic2V0SW50ZXJ2YWwiLCJkZWxheUluTXMiLCJyZW5kZXJHb1RvcEljb24iLCJMYXlvdXQiLCJjaGlsZHJlbiIsIlJvdXRlciIsIk5Qcm9ncmVzcyIsIlN0YXRpY0hlYWRlciIsIm1lbnVBY3RpdmUiLCJzZXRNZW51QWN0aXZlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiaXNSb290T3JBZG1pbiIsImhhbmRsZU9uQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZTdGF0ZSIsImhhbmRsZVNlYXJjaCIsInF1ZXJ5IiwidGVybSIsIm1lbnVUb2dnbGUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUxvZ291dCIsIk15QXBwIiwiQXBwIiwia2V5IiwiZ2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50IiwiY3R4IiwidG9rZW4iLCJwYXJzZUNvb2tpZXMiLCJwYWdlUHJvcHMiLCJpc1Byb3RlY3RlZFJvdXRlIiwicmVkaXJlY3RVc2VyIiwicGF5bG9hZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXJsIiwiYmFzZVVybCIsInJlc3BvbnNlIiwiYXhpb3MiLCJkYXRhIiwiaXNOb3RQZXJtaXR0ZWQiLCJlcnJvciIsImRlc3Ryb3lDb29raWUiLCJjb21wb25lbnREaWRNb3VudCIsInN5bmNMb2dvdXQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEIsQ0FEeUIsQ0FFekI7O0FBQ0EsUUFBTUMsTUFBTSxHQUFHSCxJQUFJLElBQUlBLElBQUksQ0FBQ0ksSUFBTCxJQUFhLE1BQXBDO0FBQ0EsUUFBTUMsT0FBTyxHQUFHTCxJQUFJLElBQUlBLElBQUksQ0FBQ0ksSUFBTCxJQUFhLE9BQXJDLENBSnlCLENBS3pCOztBQUVBLFFBQU1FLFFBQVEsR0FBSUMsS0FBRCxJQUFXO0FBQ3hCLFdBQU9BLEtBQUssSUFBSU4sTUFBTSxDQUFDTyxRQUF2QjtBQUNILEdBRkQ7O0FBR0Esc0JBQ0ksNklBREo7QUFvR0gsQ0E5R0Q7O0FBZ0hBLCtEQUFlVCxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25IQTs7QUFFQSxNQUFNVSxLQUFLLEdBQUlDLEtBQUQsSUFBVztBQUVyQixRQUFNLENBQUNDLFdBQUQsRUFBY0MsY0FBZCxJQUFnQ0MscURBQUEsQ0FBZSxLQUFmLENBQXRDO0FBQ0EsUUFBTUMsVUFBVSxHQUFHRCxtREFBQSxDQUFhLElBQWIsQ0FBbkI7QUFFQUEsd0RBQUEsQ0FBZ0IsTUFBTTtBQUNsQkUsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxNQUFNO0FBQ3RDLFVBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixHQUFyQixFQUEwQjtBQUN0Qk4sc0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDSCxPQUZELE1BRU87QUFDSEEsc0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDSDtBQUNKLEtBTkQ7QUFPSCxHQVJELEVBUUcsRUFSSDs7QUFVQSxRQUFNTyxZQUFZLEdBQUcsTUFBTTtBQUN2QixRQUFJRixNQUFNLENBQUNHLFdBQVAsS0FBdUIsQ0FBM0IsRUFBNkI7QUFDekJDLG1CQUFhLENBQUNQLFVBQVUsQ0FBQ1EsT0FBWixDQUFiO0FBQ0g7O0FBQ0RMLFVBQU0sQ0FBQ00sTUFBUCxDQUFjLENBQWQsRUFBaUJOLE1BQU0sQ0FBQ0csV0FBUCxHQUFxQlYsS0FBSyxDQUFDYyxjQUE1QztBQUNILEdBTEQ7O0FBT0EsUUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDdEJYLGNBQVUsQ0FBQ1EsT0FBWCxHQUFxQkksV0FBVyxDQUFDUCxZQUFELEVBQWVULEtBQUssQ0FBQ2lCLFNBQXJCLENBQWhDO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUMxQix3QkFDSTtBQUFLLGVBQVMsRUFBRyxVQUFTakIsV0FBVyxHQUFHLFFBQUgsR0FBYyxFQUFHLEVBQXREO0FBQXlELGFBQU8sRUFBRWMsV0FBbEU7QUFBQSw2QkFDSTtBQUFHLGlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUtILEdBTkQ7O0FBUUEsc0JBQ0ksOERBQUMsdURBQUQ7QUFBQSxjQUNLRyxlQUFlO0FBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILENBdkNEOztBQXlDQSwrREFBZW5CLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTW9CLE1BQU0sR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWTlCO0FBQVosQ0FBRCxLQUF3QjtBQUVyQyxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0k7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZ0JBQVEsRUFBQyxVQUEvQjtBQUEwQyxlQUFPLEVBQUM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQU1JO0FBQU0sWUFBSSxFQUFDLGNBQVg7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosZUFPSTtBQUFNLFdBQUcsRUFBQyxXQUFWO0FBQXNCLFlBQUksRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKLGVBUUk7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBWUksOERBQUMsa0RBQUQ7QUFBYyxVQUFJLEVBQUVBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkosZUFhUSw4REFBQyx3REFBRDtBQUFXLFdBQUssTUFBaEI7QUFBQSxnQkFDSzhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiUixlQWdCSSw4REFBQyw0Q0FBRDtBQUFRLFVBQUksRUFBRTlCO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkosZUFpQkksOERBQUMsMkNBQUQ7QUFBTyxvQkFBYyxFQUFDLEtBQXRCO0FBQTRCLGVBQVMsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXFCRCxDQXZCRDs7QUF5QkEsK0RBQWU2QixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBRSx1RUFBQSxHQUE0QixNQUFNQyxzREFBQSxFQUFsQzs7QUFDQUQsMEVBQUEsR0FBK0IsTUFBTUMscURBQUEsRUFBckM7O0FBQ0FELHVFQUFBLEdBQTRCLE1BQU1DLHFEQUFBLEVBQWxDOztBQUVBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVqQztBQUFGLENBQUQsS0FBYztBQUMvQixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTSxDQUFDZ0MsVUFBRCxFQUFhQyxhQUFiLElBQThCdEIscURBQUEsQ0FBZSxLQUFmLENBQXBDO0FBQ0EsUUFBTSxDQUFDdUIsTUFBRCxFQUFTQyxTQUFULElBQXNCeEIscURBQUEsQ0FBZTtBQUFDdUIsVUFBTSxFQUFFO0FBQVQsR0FBZixDQUE1QixDQUgrQixDQUkvQjs7QUFDQSxRQUFNakMsTUFBTSxHQUFHSCxJQUFJLElBQUlBLElBQUksQ0FBQ0ksSUFBTCxJQUFhLE1BQXBDO0FBQ0EsUUFBTUMsT0FBTyxHQUFHTCxJQUFJLElBQUlBLElBQUksQ0FBQ0ksSUFBTCxJQUFhLE9BQXJDO0FBQ0EsUUFBTWtDLGFBQWEsR0FBR25DLE1BQU0sSUFBSUUsT0FBaEM7O0FBRUEsUUFBTUMsUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDeEIsV0FBT0EsS0FBSyxJQUFJTixNQUFNLENBQUNPLFFBQXZCO0FBQ0gsR0FGRDs7QUFJQSxRQUFNK0IsY0FBYyxHQUFJQyxDQUFELElBQU87QUFDMUIsVUFBTTtBQUFFQyxVQUFGO0FBQVFDO0FBQVIsUUFBa0JGLENBQUMsQ0FBQ0csTUFBMUI7QUFDQU4sYUFBUyxDQUFDTyxTQUFTLG9DQUFTQSxTQUFUO0FBQW9CLE9BQUNILElBQUQsR0FBUUM7QUFBNUIsTUFBVixDQUFUO0FBQ0gsR0FIRDs7QUFLQSxRQUFNRyxZQUFZLEdBQUlMLENBQUQsSUFBTztBQUN4QlQsMkRBQUEsQ0FBWTtBQUNSdkIsY0FBUSxFQUFFLFdBREY7QUFFUnNDLFdBQUssRUFBRTtBQUFDQyxZQUFJLEVBQUVYLE1BQU0sQ0FBQ0E7QUFBZDtBQUZDLEtBQVo7QUFJSCxHQUxEOztBQU9BLFFBQU1ZLFVBQVUsR0FBRyxNQUFNO0FBQ3JCYixpQkFBYSxDQUFDLENBQUNELFVBQUYsQ0FBYjtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyx5Q0FBZjtBQUFBLGdDQUNBLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLGtCQUFYO0FBQUEsaUNBQ1E7QUFBRyxxQkFBUyxFQUFHLFFBQU81QixRQUFRLENBQUMsbUJBQUQsQ0FBUixHQUFnQyxRQUFoQyxHQUEyQyxJQUFLLEVBQXRFO0FBQUEsb0NBQ0E7QUFBRyx1QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBLGVBdUdJO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEscUJBQ0tOLElBQUksZ0JBQ0Q7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMseUJBQWY7QUFBQSx5QkFDS0EsSUFBSSxDQUFDeUMsSUFEVixlQUVJO0FBQUcseUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkosZUFHSTtBQUFLLHlCQUFTLEVBQUMsTUFBZjtBQUFBLDJCQUNLSCxhQUFhLGlCQUNWLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyxrQkFBWDtBQUFBLHlDQUNJO0FBQUcsNkJBQVMsRUFBRyxRQUFPaEMsUUFBUSxDQUFDLGtCQUFELENBQVIsR0FBK0IsUUFBL0IsR0FBMEMsSUFBSyxFQUFyRTtBQUFBLDRDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGUixlQVVJLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyxVQUFYO0FBQUEseUNBQ0k7QUFBRyw2QkFBUyxFQUFHLFFBQU9BLFFBQVEsQ0FBQyxVQUFELENBQVIsR0FBdUIsUUFBdkIsR0FBa0MsSUFBSyxFQUE3RDtBQUFBLDRDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFWSixlQXNCSTtBQUFLLDJCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQXRCSixlQXVCSSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLEVBQUMsR0FBWDtBQUFBLHlDQUNJO0FBQUcsNkJBQVMsRUFBRyxNQUFmO0FBQXNCLDJCQUFPLEVBQUVrQyxDQUFDLElBQUk7QUFBQ0EsdUJBQUMsQ0FBQ1MsY0FBRjtBQUFvQkMsK0VBQVk7QUFBRyxxQkFBeEU7QUFBQSw0Q0FDSTtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESiwyQkFEQyxnQkFzQ0QsOERBQUMsdURBQUQ7QUFBQSxvQ0FDSSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsYUFBWDtBQUFBLHFDQUNJO0FBQUcseUJBQVMsRUFBRyxRQUFPNUMsUUFBUSxDQUFDLGFBQUQsQ0FBUixHQUEwQixRQUExQixHQUFxQyxJQUFLLEVBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQU9JLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxjQUFYO0FBQUEscUNBQ0k7QUFBRyx5QkFBUyxFQUFHLFFBQU9BLFFBQVEsQ0FBQyxjQUFELENBQVIsR0FBMkIsUUFBM0IsR0FBc0MsSUFBSyxFQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXZDUixlQXFESTtBQUFNLHFCQUFTLEVBQUMsU0FBaEI7QUFBMEIsb0JBQVEsRUFBRWtDLENBQUMsSUFBSTtBQUFDQSxlQUFDLENBQUNTLGNBQUY7QUFBbUJKLDBCQUFZO0FBQUcsYUFBNUU7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsMkJBQWY7QUFBQSxzQ0FDSTtBQUNJLHlCQUFTLEVBQUMsUUFEZDtBQUVJLG9CQUFJLEVBQUMsTUFGVDtBQUdJLDJCQUFXLEVBQUMsV0FIaEI7QUFJSSxvQkFBSSxFQUFDLFFBSlQ7QUFLSSxxQkFBSyxFQUFFVCxNQUFNLENBQUNBLE1BTGxCO0FBTUksd0JBQVEsRUFBRUc7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBU0k7QUFBRyx1QkFBTyxFQUFFQyxDQUFDLElBQUk7QUFBQ0EsbUJBQUMsQ0FBQ1MsY0FBRjtBQUFtQkosOEJBQVk7QUFBRyxpQkFBcEQ7QUFBc0QseUJBQVMsRUFBQztBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBckRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF2R0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQStLSTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBLGdDQUNJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDSTtBQUFHLHFCQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFJSTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxpQ0FDSSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNJO0FBQUcscUJBQU8sRUFBRUwsQ0FBQyxJQUFJO0FBQUNBLGlCQUFDLENBQUNTLGNBQUY7QUFBb0JELDBCQUFVO0FBQUcsZUFBbkQ7QUFBcUQsdUJBQVMsRUFBQyxXQUEvRDtBQUFBLHFDQUNJO0FBQUcseUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBYUk7QUFBSyxpQkFBUyxFQUFHLDJCQUEwQmQsVUFBVSxHQUFHLG9CQUFILEdBQTBCLG9CQUFxQixFQUFwRztBQUFBLCtCQWlHSTtBQUFLLG1CQUFTLEVBQUMsZ0JBQWY7QUFBQSxxQkFDS2xDLElBQUksZ0JBQ0Q7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMseUJBQWY7QUFBQSx5QkFDS0EsSUFBSSxDQUFDeUMsSUFEVixlQUVJO0FBQUcseUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkosZUFHSTtBQUFLLHlCQUFTLEVBQUMsTUFBZjtBQUFBLDJCQUNLSCxhQUFhLGlCQUNWLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyxrQkFBWDtBQUFBLHlDQUNJO0FBQUcsNkJBQVMsRUFBRyxRQUFPaEMsUUFBUSxDQUFDLGtCQUFELENBQVIsR0FBK0IsUUFBL0IsR0FBMEMsSUFBSyxFQUFyRTtBQUF3RSwyQkFBTyxFQUFFMEMsVUFBakY7QUFBQSw0Q0FDSTtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRlIsZUFVSSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLEVBQUMsVUFBWDtBQUFBLHlDQUNJO0FBQUcsNkJBQVMsRUFBRyxRQUFPMUMsUUFBUSxDQUFDLFVBQUQsQ0FBUixHQUF1QixRQUF2QixHQUFrQyxJQUFLLEVBQTdEO0FBQWdFLDJCQUFPLEVBQUUwQyxVQUF6RTtBQUFBLDRDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFWSixlQWdCSSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLEVBQUMsb0JBQVg7QUFBQSx5Q0FDSTtBQUFHLDZCQUFTLEVBQUcsUUFBTzFDLFFBQVEsQ0FBQyxvQkFBRCxDQUFSLEdBQWlDLFFBQWpDLEdBQTRDLElBQUssRUFBdkU7QUFBMEUsMkJBQU8sRUFBRTBDLFVBQW5GO0FBQUEsNENBQ0k7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWhCSixlQXNCSTtBQUFLLDJCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQXRCSixlQXVCSSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLEVBQUMsR0FBWDtBQUFBLHlDQUNJO0FBQUcsNkJBQVMsRUFBRyxNQUFmO0FBQXNCLDJCQUFPLEVBQUVFLHFEQUEvQjtBQUE2QywyQkFBTyxFQUFFRixVQUF0RDtBQUFBLDRDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLDJCQURDLGdCQXNDRCw4REFBQyx1REFBRDtBQUFBLG9DQUNJLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxhQUFYO0FBQUEscUNBQ0k7QUFBRyx5QkFBUyxFQUFHLFFBQU8xQyxRQUFRLENBQUMsYUFBRCxDQUFSLEdBQTBCLFFBQTFCLEdBQXFDLElBQUssRUFBaEU7QUFBbUUsdUJBQU8sRUFBRTBDLFVBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQU9JLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxjQUFYO0FBQUEscUNBQ0k7QUFBRyx5QkFBUyxFQUFHLFFBQU8xQyxRQUFRLENBQUMsY0FBRCxDQUFSLEdBQTJCLFFBQTNCLEdBQXNDLElBQUssRUFBakU7QUFBb0UsdUJBQU8sRUFBRTBDLFVBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBdkNSLGVBcURJO0FBQU0scUJBQVMsRUFBQyxTQUFoQjtBQUEwQixvQkFBUSxFQUFFUixDQUFDLElBQUk7QUFBQ0EsZUFBQyxDQUFDUyxjQUFGO0FBQW9CSiwwQkFBWTtBQUFJRyx3QkFBVTtBQUFHLGFBQTNGO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLDJCQUFmO0FBQUEsc0NBQ0k7QUFDSSx5QkFBUyxFQUFDLFFBRGQ7QUFFSSxvQkFBSSxFQUFDLE1BRlQ7QUFHSSwyQkFBVyxFQUFDLFdBSGhCO0FBSUksb0JBQUksRUFBQyxRQUpUO0FBS0kscUJBQUssRUFBRVosTUFBTSxDQUFDQSxNQUxsQjtBQU1JLHdCQUFRLEVBQUVHO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQVNJO0FBQUcsdUJBQU8sRUFBRUMsQ0FBQyxJQUFJO0FBQUNBLG1CQUFDLENBQUNTLGNBQUY7QUFBbUJKLDhCQUFZO0FBQUlHLDRCQUFVO0FBQUcsaUJBQWxFO0FBQW9FLHlCQUFTLEVBQUM7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXJESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqR0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0tKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBcVdILENBbFlEOztBQW9ZQSwrREFBZWYsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNa0IsS0FBTixTQUFvQkMsaURBQXBCLENBQXdCO0FBQUE7QUFBQTs7QUFBQSx3Q0FnRFBaLENBQUMsSUFBSTtBQUNkLFVBQUdBLENBQUMsQ0FBQ2EsR0FBRixLQUFVLFFBQWIsRUFBc0I7QUFDbEJ0QiwrREFBQSxDQUFZLGFBQVo7QUFDSDtBQUNKLEtBcERtQjtBQUFBOztBQUNwQixlQUFhdUIsZUFBYixDQUE2QjtBQUFFQyxhQUFGO0FBQWFDO0FBQWIsR0FBN0IsRUFBZ0Q7QUFDNUMsVUFBTTtBQUFFQztBQUFGLFFBQVlDLHFEQUFZLENBQUNGLEdBQUQsQ0FBOUI7QUFFQSxRQUFJRyxTQUFTLEdBQUcsRUFBaEI7O0FBRUEsUUFBR0osU0FBUyxDQUFDRCxlQUFiLEVBQTZCO0FBQ3pCSyxlQUFTLEdBQUcsTUFBTUosU0FBUyxDQUFDRCxlQUFWLENBQTBCRSxHQUExQixDQUFsQjtBQUNIOztBQUVELFFBQUcsQ0FBQ0MsS0FBSixFQUFVO0FBQ04sWUFBTUcsZ0JBQWdCLEdBQUdKLEdBQUcsQ0FBQ2hELFFBQUosS0FBaUIsVUFBakIsSUFDdEJnRCxHQUFHLENBQUNoRCxRQUFKLEtBQWlCLG9CQURLLElBRXRCZ0QsR0FBRyxDQUFDaEQsUUFBSixLQUFpQixvQkFGSyxJQUd0QmdELEdBQUcsQ0FBQ2hELFFBQUosS0FBaUIsY0FISyxJQUl0QmdELEdBQUcsQ0FBQ2hELFFBQUosS0FBaUIsa0JBSnBCOztBQUtBLFVBQUdvRCxnQkFBSCxFQUFvQjtBQUNoQkMsa0VBQVksQ0FBQ0wsR0FBRCxFQUFNLGFBQU4sQ0FBWjtBQUNIO0FBQ0osS0FURCxNQVNPO0FBQ0gsVUFBSTtBQUNBLGNBQU1NLE9BQU8sR0FBRztBQUFFQyxpQkFBTyxFQUFFO0FBQUVDLHlCQUFhLEVBQUVQO0FBQWpCO0FBQVgsU0FBaEI7QUFDQSxjQUFNUSxHQUFHLEdBQUksR0FBRUMsb0RBQVEsY0FBdkI7QUFDQSxjQUFNQyxRQUFRLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVUgsR0FBVixFQUFlSCxPQUFmLENBQXZCO0FBQ0EsY0FBTTlELElBQUksR0FBR21FLFFBQVEsQ0FBQ0UsSUFBdEI7QUFDQSxjQUFNbEUsTUFBTSxHQUFHSCxJQUFJLENBQUNJLElBQUwsSUFBYSxNQUE1QjtBQUNBLGNBQU1DLE9BQU8sR0FBR0wsSUFBSSxDQUFDSSxJQUFMLElBQWEsT0FBN0IsQ0FOQSxDQU9BOztBQUNBLGNBQU1rRSxjQUFjLEdBQUcsRUFBRW5FLE1BQU0sSUFBSUUsT0FBWixNQUF5Qm1ELEdBQUcsQ0FBQ2hELFFBQUosS0FBaUIsb0JBQWpCLElBQXlDZ0QsR0FBRyxDQUFDaEQsUUFBSixLQUFpQixrQkFBMUQsSUFBZ0ZnRCxHQUFHLENBQUNoRCxRQUFKLEtBQWlCLGVBQWpHLElBQW9IZ0QsR0FBRyxDQUFDaEQsUUFBSixLQUFpQixrQkFBOUosQ0FBdkI7O0FBQ0EsWUFBRzhELGNBQUgsRUFBa0I7QUFDZFQsb0VBQVksQ0FBQ0wsR0FBRCxFQUFNLFdBQU4sQ0FBWjtBQUNIOztBQUNERyxpQkFBUyxDQUFDM0QsSUFBVixHQUFpQkEsSUFBakI7QUFDSCxPQWJELENBYUUsT0FBT3VFLEtBQVAsRUFBYztBQUNaO0FBQ0E7QUFDQUMsOERBQWEsQ0FBQ2hCLEdBQUQsRUFBTSxPQUFOLENBQWI7QUFDQUssa0VBQVksQ0FBQ0wsR0FBRCxFQUFNLGFBQU4sQ0FBWjtBQUNIO0FBQ0o7O0FBRUQsV0FBTztBQUFFRztBQUFGLEtBQVA7QUFDSDs7QUFFRGMsbUJBQWlCLEdBQUU7QUFDZnhELFVBQU0sQ0FBQ0QsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsS0FBSzBELFVBQXhDO0FBQ0g7O0FBUURDLFFBQU0sR0FBRztBQUNMLFVBQU07QUFBRXBCLGVBQUY7QUFBYUk7QUFBYixRQUEyQixLQUFLakQsS0FBdEM7QUFDQSx3QkFDSSw4REFBQywyREFBRCxrQ0FBWWlELFNBQVo7QUFBQSw2QkFDSSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFLSDs7QUE3RG1COztBQWdFeEIsK0RBQWVSLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBGb290ZXIgPSAoeyB1c2VyIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxuICAgIGNvbnN0IGlzUm9vdCA9IHVzZXIgJiYgdXNlci5yb2xlID09ICdyb290JztcbiAgICBjb25zdCBpc0FkbWluID0gdXNlciAmJiB1c2VyLnJvbGUgPT0gJ2FkbWluJztcbiAgICAvLyBjb25zdCBpc1Jvb3RPckFkbWluID0gaXNSb290IHx8IGlzQWRtaW47XG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9IChyb3V0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gcm91dGUgPT0gcm91dGVyLnBhdGhuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgey8qIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyLWFyZWFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3VyIHdpZGUgY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFib3V0IFRoZSBTdG9yZTwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXRoZS1zdG9yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgU3RvcmUgYXQgU2hvcG9uaXggaXMgYW4gb3JpZ2luYWwgdm9pY2UsIGFuZCBvbmUgb2YgdGhlIGxlYWRpbmcgc2hvcHBpbmcgZGVzdGluYXRpb25zIGluIE5ldyBZb3JrIENpdHksIG9mZmVyaW5nIGEgY3VyYXRlZCBzZWxlY3Rpb24gb2Ygd2VsbC1leGVjdXRlZCBjb250ZW1wb3JhcnkgYXJ0aXN0LW1hZGUgb2JqZWN0cyBhbmQgamV3ZWxyeS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdXIgd2lkZSBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZvb3Rlci13aWRnZXQgcGwtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5RdWljayBMaW5rczwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicXVpY2stbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFib3V0IFVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2hvcCBOb3chPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q2FydDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm91ciB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZm9vdGVyLXdpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TdXBwb3J0IExpbmtzPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b21lci1zdXBwb3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TXkgUHJvZmlsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215LW9yZGVycy1oaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5NeSBPcmRlcnMgSGlzdG9yeTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3NpZ251cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TaWdudXA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TG9naW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdXIgd2lkZSBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZvb3Rlci13aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q29udGFjdCBJbmZvPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItY29udGFjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiPldvbmRlciBTdHJlZXQsIFVTQSwgTmV3IFlvcms8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJ0ZWw6KzAxMzIxNjU0MjE0XCI+KzAxIDMyMSA2NTQgMjE0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwibWFpbHRvOmhlbGxvQHNob3Bvbml4LmNvbVwiPmhlbGxvQHNob3Bvbml4LmNvbTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ib3R0b20tYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Db3B5cmlnaHQgJmNvcHk7IDIwMjAgPGEgaHJlZj1cIi9cIj5TaG9wb25peDwvYT4gRGVzaWduZWQgQnkgPGEgaHJlZj1cImh0dHBzOi8vZW52eXRoZW1lLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5FbnZ5VGhlbWU8L2E+IHwgQWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICovfVxuICAgICAgICA8Lz5cbiAgICBcbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgR29Ub3AgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IFt0aGVQb3NpdGlvbiwgc2V0VGhlUG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHRpbWVvdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDE3MCkge1xuICAgICAgICAgICAgICAgIHNldFRoZVBvc2l0aW9uKHRydWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRoZVBvc2l0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW10pXG4gICAgXG4gICAgY29uc3Qgb25TY3JvbGxTdGVwID0gKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSAwKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZW91dFJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHdpbmRvdy5wYWdlWU9mZnNldCAtIHByb3BzLnNjcm9sbFN0ZXBJblB4KTtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwob25TY3JvbGxTdGVwLCBwcm9wcy5kZWxheUluTXMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckdvVG9wSWNvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ28tdG9wICR7dGhlUG9zaXRpb24gPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJhcnJvdyBhbHRlcm5hdGUgY2lyY2xlIHVwIG91dGxpbmUgaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge3JlbmRlckdvVG9wSWNvbigpfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR29Ub3A7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBHb1RvcCBmcm9tICcuL0dvVG9wJztcbmltcG9ydCBTdGF0aWNIZWFkZXIgZnJvbSAnLi9TdGF0aWNIZWFkZXInO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdXNlciB9KSA9PiB7XG4gICAgXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1pbmltdW0tc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xXCIgLz5cbiAgICAgICAgICAgIDx0aXRsZT5BcG5hIFN0b3JlIEFkbWluPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJCdXkgaGlnaC1xdWFsaXR5IGJpY3ljbGUgcGFydHMgYW5kIHNhdmUgbW9uZXkgd2hpbGUgcmlkaW5nIHRocm91Z2ggTmV2YWRhLlwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlNob3Bvbml4IC0gTUVSTiBOZXh0IGVDb21tZXJjZSBTdG9yZVwiPjwvbWV0YT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwiU2hvcG9uaXggLSBNRVJOIE5leHQgZUNvbW1lcmNlIFN0b3JlXCI+PC9tZXRhPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vc2hvcG9uaXguZW52eXRoZW1lLmNvbS9cIj48L2xpbms+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2Rldi1lbXB0eS9pbWFnZS91cGxvYWQvdjE1OTAwNzg5NTIvcWxtNnFiMWh6eGQ2aWNjbWFmODIuanBnXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICBcbiAgICAgICAgPFN0YXRpY0hlYWRlciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPEZvb3RlciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8R29Ub3Agc2Nyb2xsU3RlcEluUHg9XCIxMDBcIiBkZWxheUluTXM9XCIxMC41MFwiIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcbmltcG9ydCB7IGhhbmRsZUxvZ291dCB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuXG5jb25zdCBTdGF0aWNIZWFkZXIgPSAoeyB1c2VyIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IFJlYWN0LnVzZVN0YXRlKHtzZWFyY2g6ICcnfSlcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxuICAgIGNvbnN0IGlzUm9vdCA9IHVzZXIgJiYgdXNlci5yb2xlID09ICdyb290JztcbiAgICBjb25zdCBpc0FkbWluID0gdXNlciAmJiB1c2VyLnJvbGUgPT0gJ2FkbWluJztcbiAgICBjb25zdCBpc1Jvb3RPckFkbWluID0gaXNSb290IHx8IGlzQWRtaW47XG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9IChyb3V0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gcm91dGUgPT0gcm91dGVyLnBhdGhuYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgICAgIHNldFNlYXJjaChwcmV2U3RhdGUgPT4gKHsuLi5wcmV2U3RhdGUsIFtuYW1lXTogdmFsdWV9KSApXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJvZHVjdHMnLFxuICAgICAgICAgICAgcXVlcnk6IHt0ZXJtOiBzZWFyY2guc2VhcmNofVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IG1lbnVUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHNldE1lbnVBY3RpdmUoIW1lbnVBY3RpdmUpXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGdyaWQgbmF2YmFyLWFyZWFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcHV0ZXIgdGFibGV0IG9ubHkgcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBmaXhlZCBtZW51IG5hdmJhciBwYWdlIGdyaWRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL2Rhc2hib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvL2FkbWluL2Rhc2hib2FyZCcpID8gJ2FjdGl2ZScgOiBudWxsfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGFzaGJvYXJkIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy8nKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJob21lIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2ltcGxlIGRyb3Bkb3duIGl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgUGFnZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy8nKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNob3BwaW5nIGJhc2tldCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JvY2VyeSBMYW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb3ZpZDE5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2NvdmlkMTknKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1lZHJ0IGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3ZpZC0xOSBMYW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mdXJuaXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvZnVybml0dXJlJykgPyAnYWN0aXZlJyA6IG51bGx9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ3b24gaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1cm5pdHVyZSBMYW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9lbGVjdHJvbmljc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9lbGVjdHJvbmljcycpID8gJ2FjdGl2ZScgOiBudWxsfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGVsZXZpc2lvbiBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxlY3Ryb25pY3MgTGFuZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmFzaGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9mYXNoaW9uJykgPyAnYWN0aXZlJyA6IG51bGx9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJicmFpbGxlIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYXNoaW9uIExhbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2pld2VscnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvamV3ZWxyeScpID8gJ2FjdGl2ZScgOiBudWxsfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY2VydGlmaWNhdGUgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpld2VscnkgTGFuZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNpbXBsZSBkcm9wZG93biBpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dGVybT1ncm9jZXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyb2Nlcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dGVybT1tZWRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdmlkLTE5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90ZXJtPWZ1cm5pdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGdXJuaXR1cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90ZXJtPWVsZWN0cm9uaWNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsZWN0cm9uaWNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90ZXJtPWZhc2hpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmFzaGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP3Rlcm09amV3ZWxyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKZXdlbHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGwgUHJvZHVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9jYXJ0JykgPyAnYWN0aXZlJyA6IG51bGx9YH0+Q2FydDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9hYm91dCcpID8gJ2FjdGl2ZScgOiBudWxsfWB9PkFib3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzaW1wbGUgZHJvcGRvd24gaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNSb290T3JBZG1pbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9hZG1pbi9kYXNoYm9hcmQnKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkYXNoYm9hcmQgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL3Byb2ZpbGUnKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVzZXIgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IFByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9teS1vcmRlcnMtaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9teS1vcmRlcnMtaGlzdG9yeScpID8gJ2FjdGl2ZScgOiBudWxsfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGlzdG9yeSBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgT3JkZXJzIEhpc3RvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbWB9IG9uQ2xpY2s9e2UgPT4ge2UucHJldmVudERlZmF1bHQoKTsgaGFuZGxlTG9nb3V0KCl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNpZ24tb3V0IGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2F1dGgvbG9naW4nKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3NpZ251cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvYXV0aC9zaWdudXAnKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWdudXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidWkgZm9ybVwiIG9uU3VibWl0PXtlID0+IHtlLnByZXZlbnREZWZhdWx0KCk7aGFuZGxlU2VhcmNoKCl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHRyYW5zcGFyZW50IGljb24gaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvbXB0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3NlYXJjaCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2guc2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXtlID0+IHtlLnByZXZlbnREZWZhdWx0KCk7aGFuZGxlU2VhcmNoKCl9fSBjbGFzc05hbWU9XCJzZWFyY2ggbGluayBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIE1vYmlsZSBOYXYgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZSBvbmx5IHJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZml4ZWQgaW52ZXJ0ZWQgbmF2YmFyIG1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJyYW5kIGl0ZW1cIj5BcG5hIFN0b3JlPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgbWVudSBvcGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2UgPT4ge2UucHJldmVudERlZmF1bHQoKTsgbWVudVRvZ2dsZSgpfX0gY2xhc3NOYW1lPVwibWVudSBpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFsaWduIGp1c3RpZnkgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdWkgdmVydGljYWwgbmF2YmFyIG1lbnUgJHttZW51QWN0aXZlID8gJ21vYmlsZS1hY3RpdmUtc2hvdycgOiAnbW9iaWxlLWFjdGl2ZS1oaWRlJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy8nKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJob21lIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2ltcGxlIHBvaW50aW5nIGxlZnQgZHJvcGRvd24gaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSG9tZSBQYWdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnLycpID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic2hvcHBpbmcgYmFza2V0IGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcm9jZXJ5IExhbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvdmlkMTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvY292aWQxOScpID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWVkcnQgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdmlkLTE5IExhbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Z1cm5pdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9mdXJuaXR1cmUnKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIndvbiBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVybml0dXJlIExhbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2VsZWN0cm9uaWNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2VsZWN0cm9uaWNzJykgPyAnYWN0aXZlJyA6IG51bGx9YH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZWxldmlzaW9uIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGVjdHJvbmljcyBMYW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXNoaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2Zhc2hpb24nKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJyYWlsbGUgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhc2hpb24gTGFuZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvamV3ZWxyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9qZXdlbHJ5JykgPyAnYWN0aXZlJyA6IG51bGx9YH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJjZXJ0aWZpY2F0ZSBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSmV3ZWxyeSBMYW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2ltcGxlIHBvaW50aW5nIGxlZnQgZHJvcGRvd24gaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP3Rlcm09Z3JvY2VyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcm9jZXJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP3Rlcm09bWVkaWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3ZpZC0xOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dGVybT1mdXJuaXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVybml0dXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dGVybT1lbGVjdHJvbmljc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGVjdHJvbmljc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dGVybT1mYXNoaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhc2hpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90ZXJtPWpld2VscnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSmV3ZWxyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxsIFByb2R1Y3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvY2FydCcpID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PkNhcnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvYWJvdXQnKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5BYm91dDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgcm9vdC11c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNpbXBsZSBkcm9wZG93biBpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1Jvb3RPckFkbWluICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9kYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2FkbWluL2Rhc2hib2FyZCcpID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRhc2hib2FyZCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvcHJvZmlsZScpID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidXNlciBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgUHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXktb3JkZXJzLWhpc3RvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvbXktb3JkZXJzLWhpc3RvcnknKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhpc3RvcnkgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IE9yZGVycyBIaXN0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbWB9IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzaWduLW91dCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9hdXRoL2xvZ2luJykgPyAnYWN0aXZlJyA6IG51bGx9YH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9zaWdudXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2F1dGgvc2lnbnVwJykgPyAnYWN0aXZlJyA6IG51bGx9YH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbnVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInVpIGZvcm1cIiBvblN1Ym1pdD17ZSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpOyBoYW5kbGVTZWFyY2goKTsgbWVudVRvZ2dsZSgpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB0cmFuc3BhcmVudCBpY29uIGlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb21wdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzZWFyY2gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoLnNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17ZSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpO2hhbmRsZVNlYXJjaCgpOyBtZW51VG9nZ2xlKCl9fSBjbGFzc05hbWU9XCJzZWFyY2ggbGluayBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0aWNIZWFkZXI7IiwiaW1wb3J0ICcuLi9wdWJsaWMvc2VtYW50aWMubWluLmNzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9ucHJvZ3Jlc3MuY3NzJztcbmltcG9ydCAnLi4vcHVibGljL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvcmVzcG9uc2l2ZS5jc3MnO1xuaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHBhcnNlQ29va2llcywgZGVzdHJveUNvb2tpZSB9IGZyb20gJ25vb2tpZXMnO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9fQXBwL0xheW91dFwiO1xuaW1wb3J0IHsgcmVkaXJlY3RVc2VyIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi91dGlscy9iYXNlVXJsJztcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9KXtcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcGFnZVByb3BzID0ge307XG5cbiAgICAgICAgaWYoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyl7XG4gICAgICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0b2tlbil7XG4gICAgICAgICAgICBjb25zdCBpc1Byb3RlY3RlZFJvdXRlID0gY3R4LnBhdGhuYW1lID09PSAnL3Byb2ZpbGUnIFxuICAgICAgICAgICAgfHwgY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL2FkZC1wcm9kdWN0J1xuICAgICAgICAgICAgfHwgY3R4LnBhdGhuYW1lID09PSAnL215LW9yZGVycy1oaXN0b3J5J1xuICAgICAgICAgICAgfHwgY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL3VzZXJzJ1xuICAgICAgICAgICAgfHwgY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL2Rhc2hib2FyZCdcbiAgICAgICAgICAgIGlmKGlzUHJvdGVjdGVkUm91dGUpe1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXNlcihjdHgsICcvYXV0aC9sb2dpbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0geyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0gfTtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvYWNjb3VudGA7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsLCBwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1Jvb3QgPSB1c2VyLnJvbGUgPT0gJ3Jvb3QnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzQWRtaW4gPSB1c2VyLnJvbGUgPT0gJ2FkbWluJztcbiAgICAgICAgICAgICAgICAvLyBpZiBhdXRoZW50aWNhdGVkIGJ1dCBub3Qgcm9vdCBvciBhZG1pblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzTm90UGVybWl0dGVkID0gIShpc1Jvb3QgfHwgaXNBZG1pbikgJiYgKGN0eC5wYXRobmFtZSA9PT0gJy9hZG1pbi9hZGQtcHJvZHVjdCcgfHwgY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL2N1c3RvbWVycycgfHwgY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL29yZGVycycgfHwgY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL2Rhc2hib2FyZCcpO1xuICAgICAgICAgICAgICAgIGlmKGlzTm90UGVybWl0dGVkKXtcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RVc2VyKGN0eCwgJy9wcm9kdWN0cycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYWdlUHJvcHMudXNlciA9IHVzZXI7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIGN1cnJlbnQgdXNlclwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgLy9pbnZhbGlkIHRva2VuXG4gICAgICAgICAgICAgICAgZGVzdHJveUNvb2tpZShjdHgsIFwidG9rZW5cIik7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVc2VyKGN0eCwgJy9hdXRoL2xvZ2luJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgdGhpcy5zeW5jTG9nb3V0KTtcbiAgICB9XG5cbiAgICBzeW5jTG9nb3V0ID0gZSA9PiB7XG4gICAgICAgIGlmKGUua2V5ID09PSAnbG9nb3V0Jyl7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2F1dGgvbG9naW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQgey4uLnBhZ2VQcm9wc30+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=