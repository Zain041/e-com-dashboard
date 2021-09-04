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

var _jsxFileName = "D:\\CloneProjects\\e-com-dashboard\\components\\_App\\GoTop.js";


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

var _jsxFileName = "D:\\CloneProjects\\e-com-dashboard\\components\\_App\\Layout.js";







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


var _jsxFileName = "D:\\CloneProjects\\e-com-dashboard\\components\\_App\\StaticHeader.js";

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

var _jsxFileName = "D:\\CloneProjects\\e-com-dashboard\\pages\\_app.js";

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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL2NvbXBvbmVudHMvX0FwcC9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvLi9jb21wb25lbnRzL19BcHAvR29Ub3AuanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvLi9jb21wb25lbnRzL19BcHAvTGF5b3V0LmpzIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0Ly4vY29tcG9uZW50cy9fQXBwL1N0YXRpY0hlYWRlci5qcyIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkZvb3RlciIsInVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc1Jvb3QiLCJyb2xlIiwiaXNBZG1pbiIsImlzQWN0aXZlIiwicm91dGUiLCJwYXRobmFtZSIsIkdvVG9wIiwicHJvcHMiLCJ0aGVQb3NpdGlvbiIsInNldFRoZVBvc2l0aW9uIiwiUmVhY3QiLCJ0aW1lb3V0UmVmIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsIm9uU2Nyb2xsU3RlcCIsInBhZ2VZT2Zmc2V0IiwiY2xlYXJJbnRlcnZhbCIsImN1cnJlbnQiLCJzY3JvbGwiLCJzY3JvbGxTdGVwSW5QeCIsInNjcm9sbFRvVG9wIiwic2V0SW50ZXJ2YWwiLCJkZWxheUluTXMiLCJyZW5kZXJHb1RvcEljb24iLCJMYXlvdXQiLCJjaGlsZHJlbiIsIlJvdXRlciIsIk5Qcm9ncmVzcyIsIlN0YXRpY0hlYWRlciIsIm1lbnVBY3RpdmUiLCJzZXRNZW51QWN0aXZlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiaXNSb290T3JBZG1pbiIsImhhbmRsZU9uQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZTdGF0ZSIsImhhbmRsZVNlYXJjaCIsInF1ZXJ5IiwidGVybSIsIm1lbnVUb2dnbGUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUxvZ291dCIsIk15QXBwIiwiQXBwIiwia2V5IiwiZ2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50IiwiY3R4IiwidG9rZW4iLCJwYXJzZUNvb2tpZXMiLCJwYWdlUHJvcHMiLCJpc1Byb3RlY3RlZFJvdXRlIiwicmVkaXJlY3RVc2VyIiwicGF5bG9hZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXJsIiwiYmFzZVVybCIsInJlc3BvbnNlIiwiYXhpb3MiLCJkYXRhIiwiaXNOb3RQZXJtaXR0ZWQiLCJlcnJvciIsImRlc3Ryb3lDb29raWUiLCJjb21wb25lbnREaWRNb3VudCIsInN5bmNMb2dvdXQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEIsQ0FEeUIsQ0FFekI7O0FBQ0EsUUFBTUMsTUFBTSxHQUFHSCxJQUFJLElBQUlBLElBQUksQ0FBQ0ksSUFBTCxJQUFhLE1BQXBDO0FBQ0EsUUFBTUMsT0FBTyxHQUFHTCxJQUFJLElBQUlBLElBQUksQ0FBQ0ksSUFBTCxJQUFhLE9BQXJDLENBSnlCLENBS3pCOztBQUVBLFFBQU1FLFFBQVEsR0FBSUMsS0FBRCxJQUFXO0FBQ3hCLFdBQU9BLEtBQUssSUFBSU4sTUFBTSxDQUFDTyxRQUF2QjtBQUNILEdBRkQ7O0FBR0Esc0JBQ0ksNklBREo7QUFvR0gsQ0E5R0Q7O0FBZ0hBLCtEQUFlVCxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25IQTs7QUFFQSxNQUFNVSxLQUFLLEdBQUlDLEtBQUQsSUFBVztBQUVyQixRQUFNLENBQUNDLFdBQUQsRUFBY0MsY0FBZCxJQUFnQ0MscURBQUEsQ0FBZSxLQUFmLENBQXRDO0FBQ0EsUUFBTUMsVUFBVSxHQUFHRCxtREFBQSxDQUFhLElBQWIsQ0FBbkI7QUFFQUEsd0RBQUEsQ0FBZ0IsTUFBTTtBQUNsQkUsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxNQUFNO0FBQ3RDLFVBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixHQUFyQixFQUEwQjtBQUN0Qk4sc0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDSCxPQUZELE1BRU87QUFD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QUFDQUssa0VBQVksQ0FBQ0wsR0FBRCxFQUFNLGFBQU4sQ0FBWjtBQUNIO0FBQ0o7O0FBRUQsV0FBTztBQUFFRztBQUFGLEtBQVA7QUFDSDs7QUFFRGMsbUJBQWlCLEdBQUU7QUFDZnhELFVBQU0sQ0FBQ0QsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsS0FBSzBELFVBQXhDO0FBQ0g7O0FBUURDLFFBQU0sR0FBRztBQUNMLFVBQU07QUFBRXBCLGVBQUY7QUFBYUk7QUFBYixRQUEyQixLQUFLakQsS0FBdEM7QUFDQSx3QkFDSSw4REFBQywyREFBRCxrQ0FBWWlELFNBQVo7QUFBQSw2QkFDSSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFLSDs7QUE3RG1COztBQWdFeEIsK0RBQWVSLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBGb290ZXIgPSAoeyB1c2VyIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxuICAgIGNvbnN0IGlzUm9vdCA9IHVzZXIgJiYgdXNlci5yb2xlID09ICdyb290JztcbiAgICBjb25zdCBpc0FkbWluID0gdXNlciAmJiB1c2VyLnJvbGUgPT0gJ2FkbWluJztcbiAgICAvLyBjb25zdCBpc1Jvb3RPckFkbWluID0gaXNSb290IHx8IGlzQWRtaW47XG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9IChyb3V0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gcm91dGUgPT0gcm91dGVyLnBhdGhuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgey8qIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyLWFyZWFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3VyIHdpZGUgY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFib3V0IFRoZSBTdG9yZTwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXRoZS1zdG9yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgU3RvcmUgYXQgU2hvcG9uaXggaXMgYW4gb3JpZ2luYWwgdm9pY2UsIGFuZCBvbmUgb2YgdGhlIGxlYWRpbmcgc2hvcHBpbmcgZGVzdGluYXRpb25zIGluIE5ldyBZb3JrIENpdHksIG9mZmVyaW5nIGEgY3VyYXRlZCBzZWxlY3Rpb24gb2Ygd2VsbC1leGVjdXRlZCBjb250ZW1wb3JhcnkgYXJ0aXN0LW1hZGUgb2JqZWN0cyBhbmQgamV3ZWxyeS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdXIgd2lkZSBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZvb3Rlci13aWRnZXQgcGwtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5RdWljayBMaW5rczwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicXVpY2stbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFib3V0IFVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2hvcCBOb3chPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q2FydDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm91ciB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZm9vdGVyLXdpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TdXBwb3J0IExpbmtzPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b21lci1zdXBwb3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TXkgUHJvZmlsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215LW9yZGVycy1oaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5NeSBPcmRlcnMgSGlzdG9yeTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3NpZ251cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TaWdudXA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TG9naW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdXIgd2lkZSBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZvb3Rlci13aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q29udGFjdCBJbmZvPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItY29udGFjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiPldvbmRlciBTdHJlZXQsIFVTQSwgTmV3IFlvcms8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJ0ZWw6KzAxMzIxNjU0MjE0XCI+KzAxIDMyMSA2NTQgMjE0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwibWFpbHRvOmhlbGxvQHNob3Bvbml4LmNvbVwiPmhlbGxvQHNob3Bvbml4LmNvbTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ib3R0b20tYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Db3B5cmlnaHQgJmNvcHk7IDIwMjAgPGEgaHJlZj1cIi9cIj5TaG9wb25peDwvYT4gRGVzaWduZWQgQnkgPGEgaHJlZj1cImh0dHBzOi8vZW52eXRoZW1lLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5FbnZ5VGhlbWU8L2E+IHwgQWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICovfVxuICAgICAgICA8Lz5cbiAgICBcbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgR29Ub3AgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IFt0aGVQb3NpdGlvbiwgc2V0VGhlUG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHRpbWVvdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDE3MCkge1xuICAgICAgICAgICAgICAgIHNldFRoZVBvc2l0aW9uKHRydWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRoZVBvc2l0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW10pXG4gICAgXG4gICAgY29uc3Qgb25TY3JvbGxTdGVwID0gKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSAwKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZW91dFJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHdpbmRvdy5wYWdlWU9mZnNldCAtIHByb3BzLnNjcm9sbFN0ZXBJblB4KTtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwob25TY3JvbGxTdGVwLCBwcm9wcy5kZWxheUluTXMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckdvVG9wSWNvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ28tdG9wICR7dGhlUG9zaXRpb24gPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJhcnJvdyBhbHRlcm5hdGUgY2lyY2xlIHVwIG91dGxpbmUgaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge3JlbmRlckdvVG9wSWNvbigpfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR29Ub3A7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBHb1RvcCBmcm9tICcuL0dvVG9wJztcbmltcG9ydCBTdGF0aWNIZWFkZXIgZnJvbSAnLi9TdGF0aWNIZWFkZXInO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdXNlciB9KSA9PiB7XG4gICAgXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1pbmltdW0tc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xXCIgLz5cbiAgICAgICAgICAgIDx0aXRsZT5BcG5hIFN0b3JlIEFkbWluPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJCdXkgaGlnaC1xdWFsaXR5IGJpY3ljbGUgcGFydHMgYW5kIHNhdmUgbW9uZXkgd2hpbGUgcmlkaW5nIHRocm91Z2ggTmV2YWRhLlwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlNob3Bvbml4IC0gTUVSTiBOZXh0IGVDb21tZXJjZSBTdG9yZVwiPjwvbWV0YT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwiU2hvcG9uaXggLSBNRVJOIE5leHQgZUNvbW1lcmNlIFN0b3JlXCI+PC9tZXRhPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vc2hvcG9uaXguZW52eXRoZW1lLmNvbS9cIj48L2xpbms+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2Rldi1lbXB0eS9pbWFnZS91cGxvYWQvdjE1OTAwNzg5NTIvcWxtNnFiMWh6eGQ2aWNjbWFmODIuanBnXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICBcbiAgICAgICAgPFN0YXRpY0hlYWRlciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPEZvb3RlciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8R29Ub3Agc2Nyb2xsU3RlcEluUHg9XCIxMDBcIiBkZWxheUluTXM9XCIxMC41MFwiIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcbmltcG9ydCB7IGhhbmRsZUxvZ291dCB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuXG5jb25zdCBTdGF0aWNIZWFkZXIgPSAoeyB1c2VyIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IFJlYWN0LnVzZVN0YXRlKHtzZWFyY2g6ICcnfSlcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxuICAgIGNvbnN0IGlzUm9vdCA9IHVzZXIgJiYgdXNlci5yb2xlID09ICdyb290JztcbiAgICBjb25zdCBpc0FkbWluID0gdXNlciAmJiB1c2VyLnJvbGUgPT0gJ2FkbWluJztcbiAgICBjb25zdCBpc1Jvb3RPckFkbWluID0gaXNSb290IHx8IGlzQWRtaW47XG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9IChyb3V0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gcm91dGUgPT0gcm91dGVyLnBhdGhuYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgICAgIHNldFNlYXJjaChwcmV2U3RhdGUgPT4gKHsuLi5wcmV2U3RhdGUsIFtuYW1lXTogdmFsdWV9KSApXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJvZHVjdHMnLFxuICAgICAgICAgICAgcXVlcnk6IHt0ZXJtOiBzZWFyY2guc2VhcmNofVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IG1lbnVUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHNldE1lbnVBY3RpdmUoIW1lbnVBY3RpdmUpXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGdyaWQgbmF2YmFyLWFyZWFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcHV0ZXIgdGFibGV0IG9ubHkgcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBmaXhlZCBtZW51IG5hdmJhciBwYWdlIGdyaWRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL2Rhc2hib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvL2FkbWluL2Rhc2hib2FyZCcpID8gJ2FjdGl2ZScgOiBudWxsfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGFzaGJvYXJkIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy8nKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJob21lIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2ltcGxlIGRyb3Bkb3duIGl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgUGFnZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy8nKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNob3BwaW5nIGJhc2tldCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JvY2VyeSBMYW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb3ZpZDE5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2NvdmlkMTknKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1lZHJ0IGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3ZpZC0xOSBMYW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mdXJuaXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvZnVybml0dXJlJykgPyAnYWN0aXZlJyA6IG51bGx9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ3b24gaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1cm5pdHVyZSBMYW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9lbGVjdHJvbmljc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9lbGVjdHJvbmljcycpID8gJ2FjdGl2ZScgOiBudWxsfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGVsZXZpc2lvbiBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxlY3Ryb25pY3MgTGFuZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmFzaGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9mYXNoaW9uJykgPyAnYWN0aXZlJyA6IG51bGx9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJicmFpbGxlIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYXNoaW9uIExhbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2pld2VscnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvamV3ZWxyeScpID8gJ2FjdGl2ZScgOiBudWxsfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY2VydGlmaWNhdGUgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpld2VscnkgTGFuZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNpbXBsZSBkcm9wZG93biBpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dGVybT1ncm9jZXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyb2Nlcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dGVybT1tZWRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdmlkLTE5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90ZXJtPWZ1cm5pdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGdXJuaXR1cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90ZXJtPWVsZWN0cm9uaWNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsZWN0cm9uaWNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90ZXJtPWZhc2hpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmFzaGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP3Rlcm09amV3ZWxyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKZXdlbHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGwgUHJvZHVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9jYXJ0JykgPyAnYWN0aXZlJyA6IG51bGx9YH0+Q2FydDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9hYm91dCcpID8gJ2FjdGl2ZScgOiBudWxsfWB9PkFib3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzaW1wbGUgZHJvcGRvd24gaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNSb290T3JBZG1pbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9hZG1pbi9kYXNoYm9hcmQnKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkYXNoYm9hcmQgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL3Byb2ZpbGUnKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVzZXIgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IFByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9teS1vcmRlcnMtaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9teS1vcmRlcnMtaGlzdG9yeScpID8gJ2FjdGl2ZScgOiBudWxsfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGlzdG9yeSBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgT3JkZXJzIEhpc3RvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbWB9IG9uQ2xpY2s9e2UgPT4ge2UucHJldmVudERlZmF1bHQoKTsgaGFuZGxlTG9nb3V0KCl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNpZ24tb3V0IGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2F1dGgvbG9naW4nKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3NpZ251cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvYXV0aC9zaWdudXAnKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWdudXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidWkgZm9ybVwiIG9uU3VibWl0PXtlID0+IHtlLnByZXZlbnREZWZhdWx0KCk7aGFuZGxlU2VhcmNoKCl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHRyYW5zcGFyZW50IGljb24gaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvbXB0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3NlYXJjaCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2guc2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXtlID0+IHtlLnByZXZlbnREZWZhdWx0KCk7aGFuZGxlU2VhcmNoKCl9fSBjbGFzc05hbWU9XCJzZWFyY2ggbGluayBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIE1vYmlsZSBOYXYgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZSBvbmx5IHJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZml4ZWQgaW52ZXJ0ZWQgbmF2YmFyIG1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJyYW5kIGl0ZW1cIj5BcG5hIFN0b3JlPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgbWVudSBvcGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2UgPT4ge2UucHJldmVudERlZmF1bHQoKTsgbWVudVRvZ2dsZSgpfX0gY2xhc3NOYW1lPVwibWVudSBpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFsaWduIGp1c3RpZnkgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdWkgdmVydGljYWwgbmF2YmFyIG1lbnUgJHttZW51QWN0aXZlID8gJ21vYmlsZS1hY3RpdmUtc2hvdycgOiAnbW9iaWxlLWFjdGl2ZS1oaWRlJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy8nKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJob21lIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2ltcGxlIHBvaW50aW5nIGxlZnQgZHJvcGRvd24gaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSG9tZSBQYWdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnLycpID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic2hvcHBpbmcgYmFza2V0IGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcm9jZXJ5IExhbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvdmlkMTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvY292aWQxOScpID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWVkcnQgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdmlkLTE5IExhbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Z1cm5pdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9mdXJuaXR1cmUnKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIndvbiBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVybml0dXJlIExhbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2VsZWN0cm9uaWNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2VsZWN0cm9uaWNzJykgPyAnYWN0aXZlJyA6IG51bGx9YH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZWxldmlzaW9uIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGVjdHJvbmljcyBMYW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXNoaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2Zhc2hpb24nKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJyYWlsbGUgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhc2hpb24gTGFuZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvamV3ZWxyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9qZXdlbHJ5JykgPyAnYWN0aXZlJyA6IG51bGx9YH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJjZXJ0aWZpY2F0ZSBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSmV3ZWxyeSBMYW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2ltcGxlIHBvaW50aW5nIGxlZnQgZHJvcGRvd24gaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP3Rlcm09Z3JvY2VyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcm9jZXJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP3Rlcm09bWVkaWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3ZpZC0xOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dGVybT1mdXJuaXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVybml0dXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dGVybT1lbGVjdHJvbmljc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGVjdHJvbmljc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dGVybT1mYXNoaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhc2hpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90ZXJtPWpld2VscnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSmV3ZWxyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxsIFByb2R1Y3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvY2FydCcpID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PkNhcnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvYWJvdXQnKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5BYm91dDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgcm9vdC11c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNpbXBsZSBkcm9wZG93biBpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1Jvb3RPckFkbWluICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9kYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2FkbWluL2Rhc2hib2FyZCcpID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRhc2hib2FyZCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvcHJvZmlsZScpID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidXNlciBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgUHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXktb3JkZXJzLWhpc3RvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvbXktb3JkZXJzLWhpc3RvcnknKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhpc3RvcnkgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IE9yZGVycyBIaXN0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbWB9IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzaWduLW91dCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9hdXRoL2xvZ2luJykgPyAnYWN0aXZlJyA6IG51bGx9YH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9zaWdudXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2F1dGgvc2lnbnVwJykgPyAnYWN0aXZlJyA6IG51bGx9YH0gb25DbGljaz17bWVudVRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbnVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInVpIGZvcm1cIiBvblN1Ym1pdD17ZSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpOyBoYW5kbGVTZWFyY2goKTsgbWVudVRvZ2dsZSgpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB0cmFuc3BhcmVudCBpY29uIGlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb21wdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzZWFyY2gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoLnNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17ZSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpO2hhbmRsZVNlYXJjaCgpOyBtZW51VG9nZ2xlKCl9fSBjbGFzc05hbWU9XCJzZWFyY2ggbGluayBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0aWNIZWFkZXI7IiwiaW1wb3J0ICcuLi9wdWJsaWMvc2VtYW50aWMubWluLmNzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9ucHJvZ3Jlc3MuY3NzJztcbmltcG9ydCAnLi4vcHVibGljL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvcmVzcG9uc2l2ZS5jc3MnO1xuaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHBhcnNlQ29va2llcywgZGVzdHJveUNvb2tpZSB9IGZyb20gJ25vb2tpZXMnO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9fQXBwL0xheW91dFwiO1xuaW1wb3J0IHsgcmVkaXJlY3RVc2VyIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi91dGlscy9iYXNlVXJsJztcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9KXtcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcGFnZVByb3BzID0ge307XG5cbiAgICAgICAgaWYoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyl7XG4gICAgICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0b2tlbil7XG4gICAgICAgICAgICBjb25zdCBpc1Byb3RlY3RlZFJvdXRlID0gY3R4LnBhdGhuYW1lID09PSAnL3Byb2ZpbGUnIFxuICAgICAgICAgICAgfHwgY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL2FkZC1wcm9kdWN0J1xuICAgICAgICAgICAgfHwgY3R4LnBhdGhuYW1lID09PSAnL215LW9yZGVycy1oaXN0b3J5J1xuICAgICAgICAgICAgfHwgY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL3VzZXJzJ1xuICAgICAgICAgICAgfHwgY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL2Rhc2hib2FyZCdcbiAgICAgICAgICAgIGlmKGlzUHJvdGVjdGVkUm91dGUpe1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXNlcihjdHgsICcvYXV0aC9sb2dpbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0geyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0gfTtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvYWNjb3VudGA7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsLCBwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1Jvb3QgPSB1c2VyLnJvbGUgPT0gJ3Jvb3QnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzQWRtaW4gPSB1c2VyLnJvbGUgPT0gJ2FkbWluJztcbiAgICAgICAgICAgICAgICAvLyBpZiBhdXRoZW50aWNhdGVkIGJ1dCBub3Qgcm9vdCBvciBhZG1pblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzTm90UGVybWl0dGVkID0gIShpc1Jvb3QgfHwgaXNBZG1pbikgJiYgKGN0eC5wYXRobmFtZSA9PT0gJy9hZG1pbi9hZGQtcHJvZHVjdCcgfHwgY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL2N1c3RvbWVycycgfHwgY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL29yZGVycycgfHwgY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL2Rhc2hib2FyZCcpO1xuICAgICAgICAgICAgICAgIGlmKGlzTm90UGVybWl0dGVkKXtcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RVc2VyKGN0eCwgJy9wcm9kdWN0cycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYWdlUHJvcHMudXNlciA9IHVzZXI7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIGN1cnJlbnQgdXNlclwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgLy9pbnZhbGlkIHRva2VuXG4gICAgICAgICAgICAgICAgZGVzdHJveUNvb2tpZShjdHgsIFwidG9rZW5cIik7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVc2VyKGN0eCwgJy9hdXRoL2xvZ2luJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgdGhpcy5zeW5jTG9nb3V0KTtcbiAgICB9XG5cbiAgICBzeW5jTG9nb3V0ID0gZSA9PiB7XG4gICAgICAgIGlmKGUua2V5ID09PSAnbG9nb3V0Jyl7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2F1dGgvbG9naW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQgey4uLnBhZ2VQcm9wc30+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL2NvbXBvbmVudHMvX0FwcC9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvLi9jb21wb25lbnRzL19BcHAvR29Ub3AuanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvLi9jb21wb25lbnRzL19BcHAvTGF5b3V0LmpzIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0Ly4vY29tcG9uZW50cy9fQXBwL1N0YXRpY0hlYWRlci5qcyIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvLi91dGlscy9hdXRoLmpzIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0Ly4vdXRpbHMvYmFzZVVybC5qcyIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvaWdub3JlZHxEOlxcQ2xvbmVQcm9qZWN0c1xcZS1jb20tZGFzaGJvYXJkXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiRm9vdGVyIiwidXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsImlzUm9vdCIsInJvbGUiLCJpc0FkbWluIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInBhdGhuYW1lIiwiR29Ub3AiLCJwcm9wcyIsInRoZVBvc2l0aW9uIiwic2V0VGhlUG9zaXRpb24iLCJSZWFjdCIsInRpbWVvdXRSZWYiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib25TY3JvbGxTdGVwIiwicGFnZVlPZmZzZXQiLCJjbGVhckludGVydmFsIiwiY3VycmVudCIsInNjcm9sbCIsInNjcm9sbFN0ZXBJblB4Iiwic2Nyb2xsVG9Ub3AiLCJzZXRJbnRlcnZhbCIsImRlbGF5SW5NcyIsInJlbmRlckdvVG9wSWNvbiIsIkxheW91dCIsImNoaWxkcmVuIiwiUm91dGVyIiwiTlByb2dyZXNzIiwiU3RhdGljSGVhZGVyIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJpc1Jvb3RPckFkbWluIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldlN0YXRlIiwiaGFuZGxlU2VhcmNoIiwicXVlcnkiLCJ0ZXJtIiwibWVudVRvZ2dsZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlTG9nb3V0IiwiTXlBcHAiLCJBcHAiLCJrZXkiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJ0b2tlbiIsInBhcnNlQ29va2llcyIsInBhZ2VQcm9wcyIsImlzUHJvdGVjdGVkUm91dGUiLCJyZWRpcmVjdFVzZXIiLCJwYXlsb2FkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ1cmwiLCJiYXNlVXJsIiwicmVzcG9uc2UiLCJheGlvcyIsImRhdGEiLCJpc05vdFBlcm1pdHRlZCIsImVycm9yIiwiZGVzdHJveUNvb2tpZSIsImNvbXBvbmVudERpZE1vdW50Iiwic3luY0xvZ291dCIsInJlbmRlciIsImhhbmRsZUxvZ2luIiwiY29va2llIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImxvY2F0aW9uIiwicmVxIiwicmVzIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJyZW1vdmVJdGVtIiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDekIsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QixDQUR5QixDQUV6Qjs7QUFDQSxRQUFNQyxNQUFNLEdBQUdILElBQUksSUFBSUEsSUFBSSxDQUFDSSxJQUFMLElBQWEsTUFBcEM7QUFDQSxRQUFNQyxPQUFPLEdBQUdMLElBQUksSUFBSUEsSUFBSSxDQUFDSSxJQUFMLElBQWEsT0FBckMsQ0FKeUIsQ0FLekI7O0FBRUEsUUFBTUUsUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDeEIsV0FBT0EsS0FBSyxJQUFJTixNQUFNLENBQUNPLFFBQXZCO0FBQ0gsR0FGRDs7QUFHQSxzQkFDSSw2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LHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICBjb25zdCBpc1Jvb3QgPSB1c2VyICYmIHVzZXIucm9sZSA9PSAncm9vdCc7XHJcbiAgICBjb25zdCBpc0FkbWluID0gdXNlciAmJiB1c2VyLnJvbGUgPT0gJ2FkbWluJztcclxuICAgIC8vIGNvbnN0IGlzUm9vdE9yQWRtaW4gPSBpc1Jvb3QgfHwgaXNBZG1pbjtcclxuXHJcbiAgICBjb25zdCBpc0FjdGl2ZSA9IChyb3V0ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByb3V0ZSA9PSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3Rlci1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdXIgd2lkZSBjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZm9vdGVyLXdpZGdldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFib3V0IFRoZSBTdG9yZTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC10aGUtc3RvcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgU3RvcmUgYXQgU2hvcG9uaXggaXMgYW4gb3JpZ2luYWwgdm9pY2UsIGFuZCBvbmUgb2YgdGhlIGxlYWRpbmcgc2hvcHBpbmcgZGVzdGluYXRpb25zIGluIE5ldyBZb3JrIENpdHksIG9mZmVyaW5nIGEgY3VyYXRlZCBzZWxlY3Rpb24gb2Ygd2VsbC1leGVjdXRlZCBjb250ZW1wb3JhcnkgYXJ0aXN0LW1hZGUgb2JqZWN0cyBhbmQgamV3ZWxyeS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3VyIHdpZGUgY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZvb3Rlci13aWRnZXQgcGwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlF1aWNrIExpbmtzPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicXVpY2stbGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFib3V0IFVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlNob3AgTm93ITwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5DYXJ0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdXIgd2lkZSBjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZm9vdGVyLXdpZGdldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlN1cHBvcnQgTGlua3M8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b21lci1zdXBwb3J0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPk15IFByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215LW9yZGVycy1oaXN0b3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPk15IE9yZGVycyBIaXN0b3J5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TaWdudXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm91ciB3aWRlIGNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q29udGFjdCBJbmZvPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRhY3QtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiPldvbmRlciBTdHJlZXQsIFVTQSwgTmV3IFlvcms8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cInRlbDorMDEzMjE2NTQyMTRcIj4rMDEgMzIxIDY1NCAyMTQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIm1haWx0bzpoZWxsb0BzaG9wb25peC5jb21cIj5oZWxsb0BzaG9wb25peC5jb208L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYm90dG9tLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Db3B5cmlnaHQgJmNvcHk7IDIwMjAgPGEgaHJlZj1cIi9cIj5TaG9wb25peDwvYT4gRGVzaWduZWQgQnkgPGEgaHJlZj1cImh0dHBzOi8vZW52eXRoZW1lLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5FbnZ5VGhlbWU8L2E+IHwgQWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICovfVxyXG4gICAgICAgIDwvPlxyXG4gICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEdvVG9wID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3RoZVBvc2l0aW9uLCBzZXRUaGVQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0aW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDE3MCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGhlUG9zaXRpb24odHJ1ZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRoZVBvc2l0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pXHJcbiAgICBcclxuICAgIGNvbnN0IG9uU2Nyb2xsU3RlcCA9ICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSAwKXtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHdpbmRvdy5wYWdlWU9mZnNldCAtIHByb3BzLnNjcm9sbFN0ZXBJblB4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbChvblNjcm9sbFN0ZXAsIHByb3BzLmRlbGF5SW5Ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyR29Ub3BJY29uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ28tdG9wICR7dGhlUG9zaXRpb24gPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFycm93IGFsdGVybmF0ZSBjaXJjbGUgdXAgb3V0bGluZSBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHtyZW5kZXJHb1RvcEljb24oKX1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb1RvcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgR29Ub3AgZnJvbSAnLi9Hb1RvcCc7XHJcbmltcG9ydCBTdGF0aWNIZWFkZXIgZnJvbSAnLi9TdGF0aWNIZWFkZXInO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHVzZXIgfSkgPT4ge1xyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtaW5pbXVtLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT5BcG5hIFN0b3JlIEFkbWluPC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkJ1eSBoaWdoLXF1YWxpdHkgYmljeWNsZSBwYXJ0cyBhbmQgc2F2ZSBtb25leSB3aGlsZSByaWRpbmcgdGhyb3VnaCBOZXZhZGEuXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJTaG9wb25peCAtIE1FUk4gTmV4dCBlQ29tbWVyY2UgU3RvcmVcIj48L21ldGE+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwiU2hvcG9uaXggLSBNRVJOIE5leHQgZUNvbW1lcmNlIFN0b3JlXCI+PC9tZXRhPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9zaG9wb25peC5lbnZ5dGhlbWUuY29tL1wiPjwvbGluaz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZXYtZW1wdHkvaW1hZ2UvdXBsb2FkL3YxNTkwMDc4OTUyL3FsbTZxYjFoenhkNmljY21hZjgyLmpwZ1wiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxTdGF0aWNIZWFkZXIgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPEZvb3RlciB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDxHb1RvcCBzY3JvbGxTdGVwSW5QeD1cIjEwMFwiIGRlbGF5SW5Ncz1cIjEwLjUwXCIgLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IHsgaGFuZGxlTG9nb3V0IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuXHJcbmNvbnN0IFN0YXRpY0hlYWRlciA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGUoe3NlYXJjaDogJyd9KVxyXG4gICAgLy8gY29uc29sZS5sb2codXNlcilcclxuICAgIGNvbnN0IGlzUm9vdCA9IHVzZXIgJiYgdXNlci5yb2xlID09ICdyb290JztcclxuICAgIGNvbnN0IGlzQWRtaW4gPSB1c2VyICYmIHVzZXIucm9sZSA9PSAnYWRtaW4nO1xyXG4gICAgY29uc3QgaXNSb290T3JBZG1pbiA9IGlzUm9vdCB8fCBpc0FkbWluO1xyXG5cclxuICAgIGNvbnN0IGlzQWN0aXZlID0gKHJvdXRlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlID09IHJvdXRlci5wYXRobmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc2V0U2VhcmNoKHByZXZTdGF0ZSA9PiAoey4uLnByZXZTdGF0ZSwgW25hbWVdOiB2YWx1ZX0pIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICBxdWVyeToge3Rlcm06IHNlYXJjaC5zZWFyY2h9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZW51VG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1lbnVBY3RpdmUoIW1lbnVBY3RpdmUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZ3JpZCBuYXZiYXItYXJlYVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXB1dGVyIHRhYmxldCBvbmx5IHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBmaXhlZCBtZW51IG5hdmJhciBwYWdlIGdyaWRcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnLy9hZG1pbi9kYXNoYm9hcmQnKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGFzaGJvYXJkIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvJykgPyAnYWN0aXZlJyA6IG51bGx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJob21lIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzaW1wbGUgZHJvcGRvd24gaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIb21lIFBhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy8nKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic2hvcHBpbmcgYmFza2V0IGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyb2NlcnkgTGFuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY292aWQxOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2NvdmlkMTknKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWVkcnQgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ292aWQtMTkgTGFuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZnVybml0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvZnVybml0dXJlJykgPyAnYWN0aXZlJyA6IG51bGx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIndvbiBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGdXJuaXR1cmUgTGFuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZWxlY3Ryb25pY3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9lbGVjdHJvbmljcycpID8gJ2FjdGl2ZScgOiBudWxsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZWxldmlzaW9uIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsZWN0cm9uaWNzIExhbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Zhc2hpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9mYXNoaW9uJykgPyAnYWN0aXZlJyA6IG51bGx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJyYWlsbGUgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmFzaGlvbiBMYW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9qZXdlbHJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvamV3ZWxyeScpID8gJ2FjdGl2ZScgOiBudWxsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJjZXJ0aWZpY2F0ZSBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKZXdlbHJ5IExhbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2ltcGxlIGRyb3Bkb3duIGl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP3Rlcm09Z3JvY2VyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JvY2VyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90ZXJtPW1lZGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdmlkLTE5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90ZXJtPWZ1cm5pdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVybml0dXJlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dGVybT1lbGVjdHJvbmljc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxlY3Ryb25pY3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP3Rlcm09ZmFzaGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmFzaGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP3Rlcm09amV3ZWxyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSmV3ZWxyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbCBQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2NhcnQnKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5DYXJ0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2Fib3V0JykgPyAnYWN0aXZlJyA6IG51bGx9YH0+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNpbXBsZSBkcm9wZG93biBpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzUm9vdE9yQWRtaW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2FkbWluL2Rhc2hib2FyZCcpID8gJ2FjdGl2ZScgOiBudWxsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZGFzaGJvYXJkIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL3Byb2ZpbGUnKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidXNlciBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvbXktb3JkZXJzLWhpc3RvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9teS1vcmRlcnMtaGlzdG9yeScpID8gJ2FjdGl2ZScgOiBudWxsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoaXN0b3J5IGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IE9yZGVycyBIaXN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0gb25DbGljaz17ZSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpOyBoYW5kbGVMb2dvdXQoKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzaWduLW91dCBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2F1dGgvbG9naW4nKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvYXV0aC9zaWdudXAnKSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ251cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidWkgZm9ybVwiIG9uU3VibWl0PXtlID0+IHtlLnByZXZlbnREZWZhdWx0KCk7aGFuZGxlU2VhcmNoKCl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgdHJhbnNwYXJlbnQgaWNvbiBpbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvbXB0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaC5zZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9e2UgPT4ge2UucHJldmVudERlZmF1bHQoKTtoYW5kbGVTZWFyY2goKX19IGNsYXNzTmFtZT1cInNlYXJjaCBsaW5rIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogTW9iaWxlIE5hdiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUgb25seSByb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZml4ZWQgaW52ZXJ0ZWQgbmF2YmFyIG1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJicmFuZCBpdGVtXCI+U2hvcG9uaXg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgbWVudSBvcGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtlID0+IHtlLnByZXZlbnREZWZhdWx0KCk7IG1lbnVUb2dnbGUoKX19IGNsYXNzTmFtZT1cIm1lbnUgaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFsaWduIGp1c3RpZnkgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHVpIHZlcnRpY2FsIG5hdmJhciBtZW51ICR7bWVudUFjdGl2ZSA/ICdtb2JpbGUtYWN0aXZlLXNob3cnIDogJ21vYmlsZS1hY3RpdmUtaGlkZSd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvJykgPyAnYWN0aXZlJyA6IG51bGx9YH0gb25DbGljaz17bWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJob21lIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzaW1wbGUgcG9pbnRpbmcgbGVmdCBkcm9wZG93biBpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgUGFnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnLycpID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzaG9wcGluZyBiYXNrZXQgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JvY2VyeSBMYW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb3ZpZDE5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvY292aWQxOScpID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtZWRydCBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3ZpZC0xOSBMYW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mdXJuaXR1cmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9mdXJuaXR1cmUnKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwid29uIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1cm5pdHVyZSBMYW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9lbGVjdHJvbmljc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2VsZWN0cm9uaWNzJykgPyAnYWN0aXZlJyA6IG51bGx9YH0gb25DbGljaz17bWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRlbGV2aXNpb24gaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxlY3Ryb25pY3MgTGFuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmFzaGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2Zhc2hpb24nKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnJhaWxsZSBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYXNoaW9uIExhbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2pld2VscnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9qZXdlbHJ5JykgPyAnYWN0aXZlJyA6IG51bGx9YH0gb25DbGljaz17bWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNlcnRpZmljYXRlIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpld2VscnkgTGFuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzaW1wbGUgcG9pbnRpbmcgbGVmdCBkcm9wZG93biBpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90ZXJtPWdyb2NlcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0gb25DbGljaz17bWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyb2Nlcmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dGVybT1tZWRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3ZpZC0xOVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHM/dGVybT1mdXJuaXR1cmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0gb25DbGljaz17bWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1cm5pdHVyZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP3Rlcm09ZWxlY3Ryb25pY3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0gb25DbGljaz17bWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsZWN0cm9uaWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90ZXJtPWZhc2hpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0gb25DbGljaz17bWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhc2hpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz90ZXJtPWpld2VscnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtYH0gb25DbGljaz17bWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpld2VscnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGwgUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9jYXJ0JykgPyAnYWN0aXZlJyA6IG51bGx9YH0gb25DbGljaz17bWVudVRvZ2dsZX0+Q2FydDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9hYm91dCcpID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PkFib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51IHJvb3QtdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzaW1wbGUgZHJvcGRvd24gaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkcm9wZG93biBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1Jvb3RPckFkbWluICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL2Rhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9hZG1pbi9kYXNoYm9hcmQnKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRhc2hib2FyZCBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9wcm9maWxlJykgPyAnYWN0aXZlJyA6IG51bGx9YH0gb25DbGljaz17bWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVzZXIgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXktb3JkZXJzLWhpc3RvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpdGVtICR7aXNBY3RpdmUoJy9teS1vcmRlcnMtaGlzdG9yeScpID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoaXN0b3J5IGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IE9yZGVycyBIaXN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW1gfSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IG9uQ2xpY2s9e21lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzaWduLW91dCBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGl0ZW0gJHtpc0FjdGl2ZSgnL2F1dGgvbG9naW4nKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaXRlbSAke2lzQWN0aXZlKCcvYXV0aC9zaWdudXAnKSA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXttZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ251cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidWkgZm9ybVwiIG9uU3VibWl0PXtlID0+IHtlLnByZXZlbnREZWZhdWx0KCk7IGhhbmRsZVNlYXJjaCgpOyBtZW51VG9nZ2xlKCl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgdHJhbnNwYXJlbnQgaWNvbiBpbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvbXB0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaC5zZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9e2UgPT4ge2UucHJldmVudERlZmF1bHQoKTtoYW5kbGVTZWFyY2goKTsgbWVudVRvZ2dsZSgpfX0gY2xhc3NOYW1lPVwic2VhcmNoIGxpbmsgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0aWNIZWFkZXI7IiwiaW1wb3J0ICcuLi9wdWJsaWMvc2VtYW50aWMubWluLmNzcyc7XHJcbmltcG9ydCAnLi4vcHVibGljL25wcm9ncmVzcy5jc3MnO1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuLi9wdWJsaWMvcmVzcG9uc2l2ZS5jc3MnO1xyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llIH0gZnJvbSAnbm9va2llcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvX0FwcC9MYXlvdXRcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3RVc2VyIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4uL3V0aWxzL2Jhc2VVcmwnO1xyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pe1xyXG4gICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyl7XHJcbiAgICAgICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXRva2VuKXtcclxuICAgICAgICAgICAgY29uc3QgaXNQcm90ZWN0ZWRSb3V0ZSA9IGN0eC5wYXRobmFtZSA9PT0gJy9wcm9maWxlJyBcclxuICAgICAgICAgICAgfHwgY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL2FkZC1wcm9kdWN0J1xyXG4gICAgICAgICAgICB8fCBjdHgucGF0aG5hbWUgPT09ICcvbXktb3JkZXJzLWhpc3RvcnknXHJcbiAgICAgICAgICAgIHx8IGN0eC5wYXRobmFtZSA9PT0gJy9hZG1pbi91c2VycydcclxuICAgICAgICAgICAgfHwgY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL2Rhc2hib2FyZCdcclxuICAgICAgICAgICAgaWYoaXNQcm90ZWN0ZWRSb3V0ZSl7XHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdFVzZXIoY3R4LCAnL2F1dGgvbG9naW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0geyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0gfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9L2FwaS9hY2NvdW50YDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwgcGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzUm9vdCA9IHVzZXIucm9sZSA9PSAncm9vdCc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0FkbWluID0gdXNlci5yb2xlID09ICdhZG1pbic7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBhdXRoZW50aWNhdGVkIGJ1dCBub3Qgcm9vdCBvciBhZG1pblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNOb3RQZXJtaXR0ZWQgPSAhKGlzUm9vdCB8fCBpc0FkbWluKSAmJiAoY3R4LnBhdGhuYW1lID09PSAnL2FkbWluL2FkZC1wcm9kdWN0JyB8fCBjdHgucGF0aG5hbWUgPT09ICcvYWRtaW4vY3VzdG9tZXJzJyB8fCBjdHgucGF0aG5hbWUgPT09ICcvYWRtaW4vb3JkZXJzJyB8fCBjdHgucGF0aG5hbWUgPT09ICcvYWRtaW4vZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgICAgICAgICBpZihpc05vdFBlcm1pdHRlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RVc2VyKGN0eCwgJy9wcm9kdWN0cycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFnZVByb3BzLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgY3VycmVudCB1c2VyXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIC8vaW52YWxpZCB0b2tlblxyXG4gICAgICAgICAgICAgICAgZGVzdHJveUNvb2tpZShjdHgsIFwidG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdFVzZXIoY3R4LCAnL2F1dGgvbG9naW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgdGhpcy5zeW5jTG9nb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBzeW5jTG9nb3V0ID0gZSA9PiB7XHJcbiAgICAgICAgaWYoZS5rZXkgPT09ICdsb2dvdXQnKXtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dCB7Li4ucGFnZVByb3BzfT5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVMb2dpbiA9ICh0b2tlbikgPT4ge1xyXG4gICAgY29va2llLnNldCgndG9rZW4nLCB0b2tlbik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aFRva2VuJyx0b2tlbilcclxuICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vZGFzaGJvYXJkJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWRpcmVjdFVzZXIgPSAoY3R4LCBsb2NhdGlvbikgPT4ge1xyXG4gICAgaWYoY3R4LnJlcSl7XHJcbiAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiBsb2NhdGlvbiB9KTtcclxuICAgICAgICBjdHgucmVzLmVuZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChsb2NhdGlvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBjb29raWUucmVtb3ZlKCd0b2tlbicpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhUb2tlbicpXHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ291dCcsIERhdGUubm93KCkpO1xyXG4gICAgUm91dGVyLnB1c2goJy9hdXRoL2xvZ2luJyk7XHJcbn0iLCIvLyBjb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiIFxyXG4vLyA/ICdodHRwczovL3Nob3Bvbml4LmVudnl0aGVtZS5jb20nIFxyXG4vLyA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xyXG5cclxuY29uc3QgYmFzZVVybD0naHR0cDovL2xvY2FsaG9zdDozMDAwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> 81f8d6557bd81a2386728aebfa413841f3b05830
