(function() {
var exports = {};
exports.id = "pages/admin/dashboard";
exports.ids = ["pages/admin/dashboard"];
exports.modules = {

/***/ "./components/Dashboard/Charts/MonthlyRevenue.js":
/*!*******************************************************!*\
  !*** ./components/Dashboard/Charts/MonthlyRevenue.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\work\\webtech\\store\\dashboard-source-code\\components\\Dashboard\\Charts\\MonthlyRevenue.js";


const Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-apexcharts */ "react-apexcharts", 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-apexcharts */ "react-apexcharts")],
    modules: ["..\\components\\Dashboard\\Charts\\MonthlyRevenue.js -> " + 'react-apexcharts']
  }
});

class MonthlyRevenue extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 75, 80]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 110, 96]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 55, 45, 60]
      }],
      options: {
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '35%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['transparent']
        },
        colors: ['#6a4ffc', '#2962ff', '#a64edd'],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          labels: {
            style: {
              colors: '#686c71',
              fontSize: '12px'
            }
          }
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          offsetY: 6
        },
        grid: {
          show: true,
          borderColor: '#f6f6f7'
        },
        yaxis: {
          labels: {
            style: {
              color: '#686c71',
              fontSize: '12px'
            }
          },
          axisBorder: {
            show: false,
            color: '#f6f6f7'
          }
        }
      }
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "chart-box",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "header",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Monthly Revenue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {
        options: this.state.options,
        series: this.state.series,
        type: "bar",
        height: 450
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MonthlyRevenue);

/***/ }),

/***/ "./components/Dashboard/Charts/ProductTrendsByMonth.js":
/*!*************************************************************!*\
  !*** ./components/Dashboard/Charts/ProductTrendsByMonth.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\work\\webtech\\store\\dashboard-source-code\\components\\Dashboard\\Charts\\ProductTrendsByMonth.js";


const Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-apexcharts */ "react-apexcharts", 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-apexcharts */ "react-apexcharts")],
    modules: ["..\\components\\Dashboard\\Charts\\ProductTrendsByMonth.js -> " + 'react-apexcharts']
  }
});

class ProductTrendsByMonth extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 100, 150, 180]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      }
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "chart-box",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "header",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Product Trends By Month"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {
        options: this.state.options,
        series: this.state.series,
        type: "line",
        height: 450
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProductTrendsByMonth);

/***/ }),

/***/ "./components/_App/AdminSidebar.js":
/*!*****************************************!*\
  !*** ./components/_App/AdminSidebar.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");


var _jsxFileName = "D:\\work\\webtech\\store\\dashboard-source-code\\components\\_App\\AdminSidebar.js";





const AdminSidebar = ({
  children,
  user
}) => {
  const {
    0: visible,
    1: setVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const isRoot = user && user.role == 'root';
  const isAdmin = user && user.role == 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

  const isActive = route => {
    return route == router.pathname;
  };

  const handleVisible = () => {
    setVisible(prevState => !prevState);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Sidebar.Pushable, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu,
      animation: "push",
      icon: "labeled",
      vertical: true,
      visible: visible,
      width: "thin",
      children: isRootOrAdmin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          as: "a",
          onClick: () => router.push('/admin/dashboard'),
          active: isActive('/admin/dashboard'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "dashboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 29
          }, undefined), "Dashboard"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          as: "a",
          onClick: () => router.push('/admin/add-product'),
          active: isActive('/admin/add-product'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "add square"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }, undefined), "Create Product"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          as: "a",
          onClick: () => router.push('/admin/orders'),
          active: isActive('/admin/orders'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "ordered list"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, undefined), "Orders"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          as: "a",
          onClick: () => router.push('/admin/customers'),
          active: isActive('/admin/customers'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "users"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 29
          }, undefined), "Customers"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          as: "a",
          onClick: () => router.push('/admin/categories'),
          active: isActive('/admin/categories'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "users"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 29
          }, undefined), "Categories"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }, undefined), isRoot && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
            as: "a",
            onClick: () => router.push('/admin/users'),
            active: isActive('/admin/users'),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              name: "users"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 37
            }, undefined), "Admin/Users"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 33
          }, undefined)
        }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          as: "a",
          onClick: _utils_auth__WEBPACK_IMPORTED_MODULE_4__.handleLogout,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "sign-out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 29
          }, undefined), "Logout"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }, undefined)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Sidebar.Pusher, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
        toggle: true,
        label: visible ? 'Hide Sidebar' : 'Show Sidebar',
        onClick: handleVisible
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
        basic: true,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AdminSidebar);

/***/ }),

/***/ "./pages/admin/dashboard.js":
/*!**********************************!*\
  !*** ./pages/admin/dashboard.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App_AdminSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/_App/AdminSidebar */ "./components/_App/AdminSidebar.js");
/* harmony import */ var _components_Dashboard_Charts_MonthlyRevenue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Dashboard/Charts/MonthlyRevenue */ "./components/Dashboard/Charts/MonthlyRevenue.js");
/* harmony import */ var _components_Dashboard_Charts_ProductTrendsByMonth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Dashboard/Charts/ProductTrendsByMonth */ "./components/Dashboard/Charts/ProductTrendsByMonth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");

var _jsxFileName = "D:\\work\\webtech\\store\\dashboard-source-code\\pages\\admin\\dashboard.js";






const Dashboard = ({
  user
}) => {
  // console.log(user)
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_AdminSidebar__WEBPACK_IMPORTED_MODULE_1__.default, {
    user: user,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "create-new-products-area",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard_Charts_MonthlyRevenue__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard_Charts_ProductTrendsByMonth__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

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

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

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

/***/ "react-apexcharts":
/*!***********************************!*\
  !*** external "react-apexcharts" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-apexcharts");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["utils_auth_js-utils_baseUrl_js"], function() { return __webpack_exec__("./pages/admin/dashboard.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NoYXJ0cy9Nb250aGx5UmV2ZW51ZS5qcyIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NoYXJ0cy9Qcm9kdWN0VHJlbmRzQnlNb250aC5qcyIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL2NvbXBvbmVudHMvX0FwcC9BZG1pblNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvLi9wYWdlcy9hZG1pbi9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwicmVhY3QtYXBleGNoYXJ0c1wiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZHluYW1pYyIsInNzciIsIk1vbnRobHlSZXZlbnVlIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJvcHRpb25zIiwicGxvdE9wdGlvbnMiLCJiYXIiLCJob3Jpem9udGFsIiwiY29sdW1uV2lkdGgiLCJlbmRpbmdTaGFwZSIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwic3Ryb2tlIiwic2hvdyIsIndpZHRoIiwiY29sb3JzIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwibGFiZWxzIiwic3R5bGUiLCJmb250U2l6ZSIsInlheGlzIiwidGl0bGUiLCJ0ZXh0IiwiZmlsbCIsIm9wYWNpdHkiLCJsZWdlbmQiLCJvZmZzZXRZIiwiZ3JpZCIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJheGlzQm9yZGVyIiwicmVuZGVyIiwiUHJvZHVjdFRyZW5kc0J5TW9udGgiLCJjaGFydCIsImhlaWdodCIsInR5cGUiLCJ6b29tIiwiY3VydmUiLCJyb3ciLCJBZG1pblNpZGViYXIiLCJjaGlsZHJlbiIsInVzZXIiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNSb290Iiwicm9sZSIsImlzQWRtaW4iLCJpc1Jvb3RPckFkbWluIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInBhdGhuYW1lIiwiaGFuZGxlVmlzaWJsZSIsInByZXZTdGF0ZSIsIk1lbnUiLCJwdXNoIiwiaGFuZGxlTG9nb3V0IiwiRGFzaGJvYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE1BQU1BLEtBQUssR0FBR0MsbURBQU8sQ0FBQyxNQUFNLHNJQUFQLEVBQW1DO0FBQUNDLEtBQUcsRUFBQyxLQUFMO0FBQUE7QUFBQSx3Q0FBckIsMENBQXFCO0FBQUEsMkVBQXJCLGtCQUFxQjtBQUFBO0FBQUEsQ0FBbkMsQ0FBckI7O0FBRUEsTUFBTUMsY0FBTixTQUE2QkMsNENBQTdCLENBQXVDO0FBQ25DQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDVEMsWUFBTSxFQUFFLENBQUM7QUFDTEMsWUFBSSxFQUFFLFlBREQ7QUFFTEMsWUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixF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OztBQ3JCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9hZG1pbi9kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmNvbnN0IENoYXJ0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWFwZXhjaGFydHMnKSwge3NzcjpmYWxzZX0pO1xuXG5jbGFzcyBNb250aGx5UmV2ZW51ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs0NCwgNTUsIDU3LCA1NiwgNjEsIDU4LCA2MywgNjAsIDY2LCA3MCwgNzUsIDgwXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdSZXZlbnVlJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbNzYsIDg1LCAxMDEsIDk4LCA4NywgMTA1LCA5MSwgMTE0LCA5NCwgMTAwLCAxMTAsIDk2XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdGcmVlIENhc2ggRmxvdycsXG4gICAgICAgICAgICAgICAgZGF0YTogWzM1LCA0MSwgMzYsIDI2LCA0NSwgNDgsIDUyLCA1MywgNDEsIDU1LCA0NSwgNjBdXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICczNSUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kaW5nU2hhcGU6ICdyb3VuZGVkJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsndHJhbnNwYXJlbnQnXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJyM2YTRmZmMnLCAnIzI5NjJmZicsICcjYTY0ZWRkJ10sXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiAnIzY4NmM3MScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJyQgKHRob3VzYW5kcyknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2Y2ZjZmNycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjNjg2YzcxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmNmY2ZjcnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQtYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPk1vbnRobHkgUmV2ZW51ZTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Q2hhcnQgb3B0aW9ucz17dGhpcy5zdGF0ZS5vcHRpb25zfSBzZXJpZXM9e3RoaXMuc3RhdGUuc2VyaWVzfSB0eXBlPVwiYmFyXCIgaGVpZ2h0PXs0NTB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlSZXZlbnVlOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1hcGV4Y2hhcnRzJyksIHtzc3I6ZmFsc2V9KTtcblxuY2xhc3MgUHJvZHVjdFRyZW5kc0J5TW9udGggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJEZXNrdG9wc1wiLFxuICAgICAgICAgICAgICAgIGRhdGE6IFsxMCwgNDEsIDM1LCA1MSwgNDksIDYyLCA2OSwgOTEsIDE0OCwgMTAwLCAxNTAsIDE4MCxdXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlOiAnc3RyYWlnaHQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmM2YzZjMnLCAndHJhbnNwYXJlbnQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC1ib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+UHJvZHVjdCBUcmVuZHMgQnkgTW9udGg8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPENoYXJ0IG9wdGlvbnM9e3RoaXMuc3RhdGUub3B0aW9uc30gc2VyaWVzPXt0aGlzLnN0YXRlLnNlcmllc30gdHlwZT1cImxpbmVcIiBoZWlnaHQ9ezQ1MH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFRyZW5kc0J5TW9udGg7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvbiwgTWVudSwgU2VnbWVudCwgU2lkZWJhciwgQ2hlY2tib3ggfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBoYW5kbGVMb2dvdXQgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoJztcblxuY29uc3QgQWRtaW5TaWRlYmFyID0gKHtjaGlsZHJlbiwgdXNlcn0pID0+IHtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGlzUm9vdCA9IHVzZXIgJiYgdXNlci5yb2xlID09ICdyb290JztcbiAgICBjb25zdCBpc0FkbWluID0gdXNlciAmJiB1c2VyLnJvbGUgPT0gJ2FkbWluJztcbiAgICBjb25zdCBpc1Jvb3RPckFkbWluID0gaXNSb290IHx8IGlzQWRtaW47XG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9IChyb3V0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gcm91dGUgPT0gcm91dGVyLnBhdGhuYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVZpc2libGUgPSAoKSA9PiB7XG4gICAgICAgIHNldFZpc2libGUocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxTaWRlYmFyLlB1c2hhYmxlPlxuICAgICAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICAgICAgICBhcz17TWVudX1cbiAgICAgICAgICAgICAgICBhbmltYXRpb249J3B1c2gnXG4gICAgICAgICAgICAgICAgaWNvbj0nbGFiZWxlZCdcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgICAgICAgICAgd2lkdGg9J3RoaW4nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2lzUm9vdE9yQWRtaW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYScgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9hZG1pbi9kYXNoYm9hcmQnKX0gYWN0aXZlPXtpc0FjdGl2ZSgnL2FkbWluL2Rhc2hib2FyZCcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdkYXNoYm9hcmQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvYWRtaW4vYWRkLXByb2R1Y3QnKX0gYWN0aXZlPXtpc0FjdGl2ZSgnL2FkbWluL2FkZC1wcm9kdWN0Jyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J2FkZCBzcXVhcmUnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIFByb2R1Y3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYScgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9hZG1pbi9vcmRlcnMnKX0gYWN0aXZlPXtpc0FjdGl2ZSgnL2FkbWluL29yZGVycycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdvcmRlcmVkIGxpc3QnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JkZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvYWRtaW4vY3VzdG9tZXJzJyl9IGFjdGl2ZT17aXNBY3RpdmUoJy9hZG1pbi9jdXN0b21lcnMnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ndXNlcnMnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvYWRtaW4vY2F0ZWdvcmllcycpfSBhY3RpdmU9e2lzQWN0aXZlKCcvYWRtaW4vY2F0ZWdvcmllcycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSd1c2VycycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1Jvb3QgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvYWRtaW4vdXNlcnMnKX0gYWN0aXZlPXtpc0FjdGl2ZSgnL2FkbWluL3VzZXJzJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ndXNlcnMnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZG1pbi9Vc2Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJyBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdzaWduLW91dCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TaWRlYmFyPlxuICAgICAgICAgICAgPFNpZGViYXIuUHVzaGVyPlxuICAgICAgICAgICAgICAgIDxDaGVja2JveCB0b2dnbGUgbGFiZWw9e3Zpc2libGUgPyAnSGlkZSBTaWRlYmFyJyA6ICdTaG93IFNpZGViYXInfSBvbkNsaWNrPXtoYW5kbGVWaXNpYmxlfS8+XG4gICAgICAgICAgICAgICAgPFNlZ21lbnQgYmFzaWM+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L1NpZGViYXIuUHVzaGVyPlxuICAgICAgICA8L1NpZGViYXIuUHVzaGFibGU+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZG1pblNpZGViYXJcbiIsImltcG9ydCBBZG1pblNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0FwcC9BZG1pblNpZGViYXJcIjtcbmltcG9ydCBNb250aGx5UmV2ZW51ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9EYXNoYm9hcmQvQ2hhcnRzL01vbnRobHlSZXZlbnVlXCI7XG5pbXBvcnQgUHJvZHVjdFRyZW5kc0J5TW9udGggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NoYXJ0cy9Qcm9kdWN0VHJlbmRzQnlNb250aFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi4vLi4vdXRpbHMvYmFzZVVybCc7XG5cbmNvbnN0IERhc2hib2FyZCA9ICh7dXNlcn0pID0+IHtcblxuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgcmV0dXJuKFxuICAgICAgICA8QWRtaW5TaWRlYmFyIHVzZXI9e3VzZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtbmV3LXByb2R1Y3RzLWFyZWFcIj5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8TW9udGhseVJldmVudWUgLz5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdFRyZW5kc0J5TW9udGggLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0FkbWluU2lkZWJhcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwZXhjaGFydHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=