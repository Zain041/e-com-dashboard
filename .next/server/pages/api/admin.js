(function() {
var exports = {};
exports.id = "pages/api/admin";
exports.ids = ["pages/api/admin"];
exports.modules = {

/***/ "./models/Admin.js":
/*!*************************!*\
  !*** ./models/Admin.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// Product Model

const {
  String
} = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types);
const AdminSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["default"] = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Admin) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Admin', AdminSchema));

/***/ }),

/***/ "./pages/api/admin.js":
/*!****************************!*\
  !*** ./pages/api/admin.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Admin */ "./models/Admin.js");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validator/lib/isEmail */ "validator/lib/isEmail");
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! validator/lib/isLength */ "validator/lib/isLength");
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isLength__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/connectDb */ "./utils/connectDb.js");






(0,_utils_connectDb__WEBPACK_IMPORTED_MODULE_5__.default)();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;

    case "POST":
      await handlePostRequest(req, res);
      break;

    case "PUT":
      await handlePutRequest(req, res);
      break;

    case "DELETE":
      await handleDeleteRequest(req, res);
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
});

const handleGetRequest = async (req, res) => {
  const {
    id
  } = req.query;
  const admin = await _models_Admin__WEBPACK_IMPORTED_MODULE_0__.default.find({
    _id: id
  });
  res.status(200).json({
    admin,
    admin
  });
};

const handlePostRequest = async (req, res) => {
  const {
    fullname,
    email,
    password,
    mediaUrl
  } = req.body;

  try {
    // check email, name, password format
    if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_4___default()(fullname, {
      min: 3,
      max: 15
    })) {
      return res.status(422).send("Name must be 3-10 characters long");
    } else if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_4___default()(password, {
      min: 5,
      max: 15
    })) {
      return res.status(422).send("Password must be 5-15 characters long");
    } else if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3___default()(email)) {
      return res.status(422).send("Email must be valid");
    }

    const user = await _models_Admin__WEBPACK_IMPORTED_MODULE_0__.default.findOne({
      email
    });

    if (user) {
      return res.status(422).send(`User already exist with that ${email}`);
    }

    const passwordHash = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 10);
    const newUser = await new _models_Admin__WEBPACK_IMPORTED_MODULE_0__.default({
      fullname,
      email,
      password: passwordHash,
      mediaUrl
    }).save(); // console.log({newUser});
    // create a cart for the new user
    // await new Cart({ user: newUser._id }).save();

    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({
      userId: newUser._id
    }, "hjdfhuiklnlkbfcagdahsakjsdjdqw", {
      expiresIn: '7d'
    });
    res.status(201).json({
      user: newUser,
      token: token
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in signup. Please try again.");
  }
};

const handlePutRequest = async (req, res) => {
  // console.log(req.body)
  try {
    const {
      _id
    } = req.query;
    const {
      fullname,
      email,
      password,
      mediaUrl
    } = req.body;
    await _models_Admin__WEBPACK_IMPORTED_MODULE_0__.default.updateOne({
      _id
    }, {
      $set: {
        fullname,
        email,
        password,
        mediaUrl
      },
      $currentDate: {
        updatedAt: true
      }
    }); // console.log(up)

    res.status(203).send('Admin Updated');
  } catch (error) {
    res.status(500).send('Admin was not Updated');
  }
};

const handleDeleteRequest = async (req, res) => {
  const {
    _id
  } = req.query;
  console.log(_id);

  try {
    await _models_Admin__WEBPACK_IMPORTED_MODULE_0__.default.findByIdAndDelete({
      _id
    });
    res.status(204).json({
      msg: "Admin has been deleted"
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Admin was not deleted');
  }
};

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


  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb+srv://zaini:235896@cluster0.q48lj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }); // console.log("DB Connected");

  connection.isConnected = db.connections[0].isReadyState;
};

/* harmony default export */ __webpack_exports__["default"] = (connectDb);

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("bcrypt");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ "validator/lib/isEmail":
/*!****************************************!*\
  !*** external "validator/lib/isEmail" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("validator/lib/isEmail");;

/***/ }),

/***/ "validator/lib/isLength":
/*!*****************************************!*\
  !*** external "validator/lib/isLength" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("validator/lib/isLength");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/admin.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL21vZGVscy9BZG1pbi5qcyIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL3BhZ2VzL2FwaS9hZG1pbi5qcyIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL3V0aWxzL2Nvbm5lY3REYi5qcyIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcImJjcnlwdFwiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwidmFsaWRhdG9yL2xpYi9pc0VtYWlsXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJ2YWxpZGF0b3IvbGliL2lzTGVuZ3RoXCIiXSwibmFtZXMiOlsiU3RyaW5nIiwibW9uZ29vc2UiLCJBZG1pblNjaGVtYSIsImZ1bGxuYW1lIiwidHlwZSIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsIm1lZGlhVXJsIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJjb25uZWN0RGIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJoYW5kbGVHZXRSZXF1ZXN0IiwiaGFuZGxlUG9zdFJlcXVlc3QiLCJoYW5kbGVQdXRSZXF1ZXN0IiwiaGFuZGxlRGVsZXRlUmVxdWVzdCIsInN0YXR1cyIsInNlbmQiLCJpZCIsInF1ZXJ5IiwiYWRtaW4iLCJBZG1pbiIsIl9pZCIsImpzb24iLCJib2R5IiwiaXNMZW5ndGgiLCJtaW4iLCJtYXgiLCJpc0VtYWlsIiwidXNlciIsInBhc3N3b3JkSGFzaCIsImJjcnlwdCIsIm5ld1VzZXIiLCJzYXZlIiwidG9rZW4iLCJqd3QiLCJ1c2VySWQiLCJwcm9jZXNzIiwiZXhwaXJlc0luIiwiZXJyb3IiLCJjb25zb2xlIiwiJHNldCIsIiRjdXJyZW50RGF0ZSIsInVwZGF0ZWRBdCIsImxvZyIsIm1zZyIsImNvbm5lY3Rpb24iLCJpc0Nvbm5lY3RlZCIsImRiIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJpc1JlYWR5U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTTtBQUFFQTtBQUFGLElBQVlDLDhEQUFsQjtBQUVBLE1BQU1DLFdBQVcsR0FBRyxJQUFJRCx3REFBSixDQUFvQjtBQUNwQ0UsVUFBUSxFQUFFO0FBQ05DLFFBQUksRUFBRUosTUFEQTtBQUVOSyxZQUFRLEVBQUU7QUFGSixHQUQwQjtBQUtwQ0MsT0FBSyxFQUFFO0FBQ0hGLFFBQUksRUFBRUosTUFESDtBQUVISyxZQUFRLEVBQUUsSUFGUDtBQUdIRSxVQUFNLEVBQUM7QUFISixHQUw2QjtBQVVwQ0MsVUFBUSxFQUFFO0FBQ05KLFFBQUksRUFBRUosTUFEQTtBQUVOSyxZQUFRLEVBQUU7QUFGSixHQVYwQjtBQWVwQ0ksVUFBUSxFQUFFO0FBQ05MLFFBQUksRUFBRUosTUFEQTtBQUVOVSxXQUFPLEVBQUM7QUFGRjtBQWYwQixDQUFwQixFQW9CbEI7QUFDRUMsWUFBVSxFQUFFO0FBRGQsQ0FwQmtCLENBQXBCO0FBd0JBLCtEQUFlViw4REFBQSxJQUF5QkEscURBQUEsQ0FBZSxPQUFmLEVBQXdCQyxXQUF4QixDQUF4QyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBVSx5REFBUztBQUNULCtEQUFlLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixVQUFRRCxHQUFHLENBQUNFLE1BQVo7QUFDSSxTQUFLLEtBQUw7QUFDSSxZQUFNQyxnQkFBZ0IsQ0FBQ0gsR0FBRCxFQUFNQyxHQUFOLENBQXRCO0FBQ0E7O0FBQ0osU0FBSyxNQUFMO0FB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QVgsRUFBZ0JPLElBQWhCLENBQXFCO0FBQUNzQixTQUFHLEVBQUM7QUFBTCxLQUFyQjtBQUNILEdBSkQsQ0FJRSxPQUFPTixLQUFQLEVBQWM7QUFDWkMsV0FBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDQTdCLE9BQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLHVCQUFyQjtBQUNIO0FBQ0osQ0FYRCxDOzs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBLE1BQU02QixVQUFVLEdBQUcsRUFBbkI7O0FBRUEsTUFBTXRDLFNBQVMsR0FBRyxZQUFZO0FBQzFCLE1BQUdzQyxVQUFVLENBQUNDLFdBQWQsRUFBMEI7QUFDdEI7QUFDQTtBQUNBO0FBQ0gsR0FMeUIsQ0FNMUI7OztBQUNBLFFBQU1DLEVBQUUsR0FBRyxNQUFNbkQsdURBQUEsQ0FBaUJ3QyxtR0FBakIsRUFBd0M7QUFDckRZLGtCQUFjLEVBQUUsSUFEcUM7QUFFckRDLG9CQUFnQixFQUFFLEtBRm1DO0FBR3JEQyxtQkFBZSxFQUFFLElBSG9DO0FBSXJEQyxzQkFBa0IsRUFBRTtBQUppQyxHQUF4QyxDQUFqQixDQVAwQixDQWMxQjs7QUFFQU4sWUFBVSxDQUFDQyxXQUFYLEdBQXlCQyxFQUFFLENBQUNLLFdBQUgsQ0FBZSxDQUFmLEVBQWtCQyxZQUEzQztBQUNILENBakJEOztBQW1CQSwrREFBZTlDLFNBQWYsRTs7Ozs7Ozs7Ozs7QUN0QkEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoicGFnZXMvYXBpL2FkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJvZHVjdCBNb2RlbFxyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgeyBTdHJpbmd9ID0gbW9uZ29vc2UuU2NoZW1hLlR5cGVzO1xyXG5cclxuY29uc3QgQWRtaW5TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIGZ1bGxuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWVcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgXHJcbiAgICBtZWRpYVVybDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0Om51bGxcclxuICAgIH0sXHJcbiAgICBcclxufSx7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkFkbWluIHx8IG1vbmdvb3NlLm1vZGVsKCdBZG1pbicsIEFkbWluU2NoZW1hKTsiLCJpbXBvcnQgQWRtaW4gZnJvbSBcIi4uLy4uL21vZGVscy9BZG1pblwiO1xyXG5cclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBpc0VtYWlsIGZyb20gJ3ZhbGlkYXRvci9saWIvaXNFbWFpbCc7XHJcbmltcG9ydCBpc0xlbmd0aCBmcm9tICd2YWxpZGF0b3IvbGliL2lzTGVuZ3RoJztcclxuaW1wb3J0IGNvbm5lY3REYiBmcm9tICcuLi8uLi91dGlscy9jb25uZWN0RGInO1xyXG5cclxuY29ubmVjdERiKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgc3dpdGNoIChyZXEubWV0aG9kKXtcclxuICAgICAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZUdldFJlcXVlc3QocmVxLCByZXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgICAgICBhd2FpdCBoYW5kbGVQb3N0UmVxdWVzdChyZXEsIHJlcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJQVVRcIjpcclxuICAgICAgICAgICAgYXdhaXQgaGFuZGxlUHV0UmVxdWVzdChyZXEsIHJlcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgICAgICAgYXdhaXQgaGFuZGxlRGVsZXRlUmVxdWVzdChyZXEsIHJlcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA1KS5zZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGhhbmRsZUdldFJlcXVlc3QgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuICAgXHJcbiAgICBjb25zdCBhZG1pbiA9IGF3YWl0IEFkbWluLmZpbmQoe1xyXG4gICAgICAgIF9pZDogaWRcclxuICAgIH0pXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7YWRtaW4sIGFkbWlufSk7XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgaGFuZGxlUG9zdFJlcXVlc3QgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgZnVsbG5hbWUsIGVtYWlsLCBwYXNzd29yZCxtZWRpYVVybCB9ID0gcmVxLmJvZHk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNoZWNrIGVtYWlsLCBuYW1lLCBwYXNzd29yZCBmb3JtYXRcclxuICAgICAgICBpZiAoIWlzTGVuZ3RoKGZ1bGxuYW1lLCB7bWluOiAzLCBtYXg6IDE1fSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5zZW5kKFwiTmFtZSBtdXN0IGJlIDMtMTAgY2hhcmFjdGVycyBsb25nXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTGVuZ3RoKHBhc3N3b3JkLCB7bWluOiA1LCBtYXg6IDE1fSkpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLnNlbmQoXCJQYXNzd29yZCBtdXN0IGJlIDUtMTUgY2hhcmFjdGVycyBsb25nXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWlzRW1haWwoZW1haWwpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5zZW5kKFwiRW1haWwgbXVzdCBiZSB2YWxpZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBBZG1pbi5maW5kT25lKHsgZW1haWwgfSk7XHJcbiAgICAgICAgaWYgKHVzZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLnNlbmQoYFVzZXIgYWxyZWFkeSBleGlzdCB3aXRoIHRoYXQgJHtlbWFpbH1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XHJcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IG5ldyBBZG1pbih7XHJcbiAgICAgICAgICAgIGZ1bGxuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkSGFzaCxcclxuICAgICAgICAgICAgbWVkaWFVcmxcclxuICAgICAgICB9KS5zYXZlKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coe25ld1VzZXJ9KTtcclxuICAgICAgICAvLyBjcmVhdGUgYSBjYXJ0IGZvciB0aGUgbmV3IHVzZXJcclxuICAgICAgICAvLyBhd2FpdCBuZXcgQ2FydCh7IHVzZXI6IG5ld1VzZXIuX2lkIH0pLnNhdmUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IHVzZXJJZDogbmV3VXNlci5faWQgfSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwge2V4cGlyZXNJbjogJzdkJ30pO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHt1c2VyOm5ld1VzZXIsdG9rZW46dG9rZW59KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJFcnJvciBpbiBzaWdudXAuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVQdXRSZXF1ZXN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keSlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBfaWQgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IHsgZnVsbG5hbWUsIGVtYWlsLCBwYXNzd29yZCxtZWRpYVVybCB9ID0gcmVxLmJvZHk7XHJcbiAgICBhd2FpdCBBZG1pbi51cGRhdGVPbmUoXHJcbiAgICAgICAge19pZH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkc2V0OiB7IGZ1bGxuYW1lLCBlbWFpbCwgcGFzc3dvcmQsbWVkaWFVcmwgfSxcclxuICAgICAgICAgICAgJGN1cnJlbnREYXRlOiB7IHVwZGF0ZWRBdDogdHJ1ZSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG4gICAgLy8gY29uc29sZS5sb2codXApXHJcbiAgICByZXMuc3RhdHVzKDIwMykuc2VuZCgnQWRtaW4gVXBkYXRlZCcpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0FkbWluIHdhcyBub3QgVXBkYXRlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgaGFuZGxlRGVsZXRlUmVxdWVzdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBfaWQgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKF9pZClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgQWRtaW4uZmluZEJ5SWRBbmREZWxldGUoeyBfaWQgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDQpLmpzb24oe21zZzpcIkFkbWluIGhhcyBiZWVuIGRlbGV0ZWRcIn0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCgnQWRtaW4gd2FzIG5vdCBkZWxldGVkJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgY29ubmVjdGlvbiA9IHt9XG5cbmNvbnN0IGNvbm5lY3REYiA9IGFzeW5jICgpID0+IHtcbiAgICBpZihjb25uZWN0aW9uLmlzQ29ubmVjdGVkKXtcbiAgICAgICAgLy8gVXNpbmcgZXhpc3RpbmcgZGF0YWJhc2UgY29ubmVjdGlvblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlVzaW5nIGV4aXN0aW5nIGNvbm5lY3Rpb25cIilcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvL1VzZSBuZXcgZGF0YWJhc2UgY29ubmVjdGlvblxuICAgIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19TUlYsIHtcbiAgICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJEQiBDb25uZWN0ZWRcIik7XG5cbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0uaXNSZWFkeVN0YXRlO1xufSBcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmFsaWRhdG9yL2xpYi9pc0VtYWlsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2YWxpZGF0b3IvbGliL2lzTGVuZ3RoXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9