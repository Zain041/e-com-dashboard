(function() {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// Product Model

const {
  String,
  Number
} = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types);
const ProductSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  productType: {
    type: String,
    required: true
  },
  sku: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: true
  },
  viewCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["default"] = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Product', ProductSchema));

/***/ }),

/***/ "./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Product */ "./models/Product.js");
/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/connectDb */ "./utils/connectDb.js");


(0,_utils_connectDb__WEBPACK_IMPORTED_MODULE_1__.default)();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    page,
    size,
    searchTerm
  } = req.query; // console.log(searchTerm)
  // string to number

  const pageNum = Number(page);
  const pageSize = Number(size);
  let products = [];
  let totalDocts;

  if (searchTerm) {
    totalDocts = await _models_Product__WEBPACK_IMPORTED_MODULE_0__.default.countDocuments({
      $or: [{
        productType: {
          $regex: `^${searchTerm}`
        }
      }, {
        name: new RegExp(searchTerm, 'i')
      }]
    });
  } else {
    totalDocts = await _models_Product__WEBPACK_IMPORTED_MODULE_0__.default.countDocuments();
  }

  const totalPages = Math.ceil(totalDocts / pageSize);

  if (searchTerm) {
    if (pageNum === 1) {
      products = await _models_Product__WEBPACK_IMPORTED_MODULE_0__.default.find({
        $or: [{
          productType: {
            $regex: `^${searchTerm}`
          }
        }, {
          name: new RegExp(searchTerm, 'i')
        }]
      }).collation({
        locale: 'en',
        strength: 1
      }).sort({
        viewCount: 'desc'
      }).limit(pageSize);
    } else {
      const skips = pageSize * (pageNum - 1);
      products = await _models_Product__WEBPACK_IMPORTED_MODULE_0__.default.find({
        $or: [{
          productType: {
            $regex: `^${searchTerm}`
          }
        }, {
          name: new RegExp(searchTerm, 'i')
        }]
      }).collation({
        locale: 'en',
        strength: 1
      }).sort({
        viewCount: 'desc'
      }).skip(skips).limit(pageSize);
    }
  } else {
    if (pageNum === 1) {
      products = await _models_Product__WEBPACK_IMPORTED_MODULE_0__.default.find().sort({
        name: 'desc'
      }).limit(pageSize);
    } else {
      const skips = pageSize * (pageNum - 1);
      products = await _models_Product__WEBPACK_IMPORTED_MODULE_0__.default.find().sort({
        name: 'desc'
      }).skip(skips).limit(pageSize);
    }
  } // const products = await Product.find();


  res.status(200).json({
    products,
    totalPages
  });
});

/***/ }),

/***/ "./utils/connectDb.js":
/*!****************************!*\
  !*** ./utils/connectDb.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};

const connectDb = async () => {
  if (connection.isConnected) {
    // Using existing database connection
    // console.log("Using existing connection")
    return;
  } //Use new database connection


  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb+srv://Shoponix:EnvyTheme@shoponix-vr5vl.mongodb.net/test?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }); // console.log("DB Connected");

  connection.isConnected = db.connections[0].isReadyState;
};

/* harmony default export */ __webpack_exports__["default"] = (connectDb);

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/products.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL21vZGVscy9Qcm9kdWN0LmpzIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0Ly4vcGFnZXMvYXBpL3Byb2R1Y3RzLmpzIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0Ly4vdXRpbHMvY29ubmVjdERiLmpzIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6WyJTdHJpbmciLCJOdW1iZXIiLCJtb25nb29zZSIsIlByb2R1Y3RTY2hlbWEiLCJuYW1lIiwidHlwZSIsInJlcXVpcmVkIiwicHJpY2UiLCJwcm9kdWN0VHlwZSIsInNrdSIsInVuaXF1ZSIsImRlc2NyaXB0aW9uIiwibWVkaWFVcmwiLCJ2aWV3Q291bnQiLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsImNvbm5lY3REYiIsInJlcSIsInJlcyIsInBhZ2UiLCJzaXplIiwic2VhcmNoVGVybSIsInF1ZXJ5IiwicGFnZU51bSIsInBhZ2VTaXplIiwicHJvZHVjdHMiLCJ0b3RhbERvY3RzIiwiUHJvZHVjdCIsIiRvciIsIiRyZWdleCIsIlJlZ0V4cCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImNvbGxhdGlvbiIsImxvY2FsZSIsInN0cmVuZ3RoIiwic29ydCIsImxpbWl0Iiwic2tpcHMiLCJza2lwIiwic3RhdHVzIiwianNvbiIsImNvbm5lY3Rpb24iLCJpc0Nvbm5lY3RlZCIsImRiIiwicHJvY2VzcyIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3Rpb25zIiwiaXNSZWFkeVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU07QUFBRUEsUUFBRjtBQUFVQztBQUFWLElBQXFCQyw4REFBM0I7QUFFQSxNQUFNQyxhQUFhLEdBQUcsSUFBSUQsd0RB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M0MsdURBQUEsQ0FBaUI0Qyw4RkFBakIsRUFBd0M7QUFDckRDLGtCQUFjLEVBQUUsSUFEcUM7QUFFckRDLG9CQUFnQixFQUFFLEtBRm1DO0FBR3JEQyxtQkFBZSxFQUFFLElBSG9DO0FBSXJEQyxzQkFBa0IsRUFBRTtBQUppQyxHQUF4QyxDQUFqQixDQVAwQixDQWMxQjs7QUFFQVAsWUFBVSxDQUFDQyxXQUFYLEdBQXlCQyxFQUFFLENBQUNNLFdBQUgsQ0FBZSxDQUFmLEVBQWtCQyxZQUEzQztBQUNILENBakJEOztBQW1CQSwrREFBZXBDLFNBQWYsRTs7Ozs7Ozs7Ozs7QUN0QkEsc0MiLCJmaWxlIjoicGFnZXMvYXBpL3Byb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJvZHVjdCBNb2RlbFxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgeyBTdHJpbmcsIE51bWJlciB9ID0gbW9uZ29vc2UuU2NoZW1hLlR5cGVzO1xuXG5jb25zdCBQcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwcmljZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwcm9kdWN0VHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBza3U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG1lZGlhVXJsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHZpZXdDb3VudDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICB9XG59LHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoJ1Byb2R1Y3QnLCBQcm9kdWN0U2NoZW1hKTsiLCJpbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi9tb2RlbHMvUHJvZHVjdCc7XG5pbXBvcnQgY29ubmVjdERiIGZyb20gJy4uLy4uL3V0aWxzL2Nvbm5lY3REYic7XG5cbmNvbm5lY3REYigpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHtwYWdlLCBzaXplLCBzZWFyY2hUZXJtfSA9IHJlcS5xdWVyeTtcbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hUZXJtKVxuICAgIC8vIHN0cmluZyB0byBudW1iZXJcbiAgICBjb25zdCBwYWdlTnVtID0gTnVtYmVyKHBhZ2UpO1xuICAgIGNvbnN0IHBhZ2VTaXplID0gTnVtYmVyKHNpemUpO1xuICAgIGxldCBwcm9kdWN0cyA9IFtdO1xuICAgIGxldCB0b3RhbERvY3RzO1xuICAgIGlmKHNlYXJjaFRlcm0pe1xuICAgICAgICB0b3RhbERvY3RzID0gYXdhaXQgUHJvZHVjdC5jb3VudERvY3VtZW50cyhcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgJG9yOiBbIFxuICAgICAgICAgICAgICAgICAgICB7IHByb2R1Y3RUeXBlOiB7ICRyZWdleDogYF4ke3NlYXJjaFRlcm19YCAgfSB9LCBcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBuZXcgUmVnRXhwKHNlYXJjaFRlcm0sICdpJykgfSBcbiAgICAgICAgICAgICAgICBdIFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvdGFsRG9jdHMgPSBhd2FpdCBQcm9kdWN0LmNvdW50RG9jdW1lbnRzKCk7XG4gICAgfVxuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodG90YWxEb2N0cyAvIHBhZ2VTaXplKTtcbiAgICBpZiAoc2VhcmNoVGVybSl7XG4gICAgICAgIGlmKHBhZ2VOdW0gPT09IDEpe1xuICAgICAgICAgICAgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoXG4gICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgJG9yOiBbIFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9kdWN0VHlwZTogeyAkcmVnZXg6IGBeJHtzZWFyY2hUZXJtfWAgIH0gfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IG5ldyBSZWdFeHAoc2VhcmNoVGVybSwgJ2knKSB9IFxuICAgICAgICAgICAgICAgICAgICBdIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jb2xsYXRpb24oIHsgbG9jYWxlOiAnZW4nLCBzdHJlbmd0aDogMSB9IClcbiAgICAgICAgICAgIC5zb3J0KHt2aWV3Q291bnQ6ICdkZXNjJ30pLmxpbWl0KHBhZ2VTaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNraXBzID0gcGFnZVNpemUgKiAocGFnZU51bSAtIDEpXG4gICAgICAgICAgICBwcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZChcbiAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAkb3I6IFsgXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb2R1Y3RUeXBlOiB7ICRyZWdleDogYF4ke3NlYXJjaFRlcm19YCAgfSB9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogbmV3IFJlZ0V4cChzZWFyY2hUZXJtLCAnaScpIH0gXG4gICAgICAgICAgICAgICAgICAgIF0gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNvbGxhdGlvbiggeyBsb2NhbGU6ICdlbicsIHN0cmVuZ3RoOiAxIH0gKVxuICAgICAgICAgICAgLnNvcnQoe3ZpZXdDb3VudDogJ2Rlc2MnfSkuc2tpcChza2lwcykubGltaXQocGFnZVNpemUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYocGFnZU51bSA9PT0gMSl7XG4gICAgICAgICAgICBwcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZCgpLnNvcnQoe25hbWU6ICdkZXNjJ30pLmxpbWl0KHBhZ2VTaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNraXBzID0gcGFnZVNpemUgKiAocGFnZU51bSAtIDEpXG4gICAgICAgICAgICBwcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZCgpLnNvcnQoe25hbWU6ICdkZXNjJ30pLnNraXAoc2tpcHMpLmxpbWl0KHBhZ2VTaXplKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKCk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3Byb2R1Y3RzLCB0b3RhbFBhZ2VzfSlcbn0iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgY29ubmVjdGlvbiA9IHt9XG5cbmNvbnN0IGNvbm5lY3REYiA9IGFzeW5jICgpID0+IHtcbiAgICBpZihjb25uZWN0aW9uLmlzQ29ubmVjdGVkKXtcbiAgICAgICAgLy8gVXNpbmcgZXhpc3RpbmcgZGF0YWJhc2UgY29ubmVjdGlvblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlVzaW5nIGV4aXN0aW5nIGNvbm5lY3Rpb25cIilcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvL1VzZSBuZXcgZGF0YWJhc2UgY29ubmVjdGlvblxuICAgIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19TUlYsIHtcbiAgICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJEQiBDb25uZWN0ZWRcIik7XG5cbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0uaXNSZWFkeVN0YXRlO1xufSBcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9