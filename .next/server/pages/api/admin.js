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
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL21vZGVscy9BZG1pbi5qcyIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL3BhZ2VzL2FwaS9hZG1pbi5qcyIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC8uL3V0aWxzL2Nvbm5lY3REYi5qcyIsIndlYnBhY2s6Ly9zaG9wb25peC1yZWFjdC9leHRlcm5hbCBcImJjcnlwdFwiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL3Nob3Bvbml4LXJlYWN0L2V4dGVybmFsIFwidmFsaWRhdG9yL2xpYi9pc0VtYWlsXCIiLCJ3ZWJwYWNrOi8vc2hvcG9uaXgtcmVhY3QvZXh0ZXJuYWwgXCJ2YWxpZGF0b3IvbGliL2lzTGVuZ3RoXCIiXSwibmFtZXMiOlsiU3RyaW5nIiwibW9uZ29vc2UiLCJBZG1pblNjaGVtYSIsImZ1bGxuYW1lIiwidHlwZSIsInJlcXVpcmVkIiwiZW1haWwiLCJwYXNzd29yZCIsIm1lZGlhVXJsIiwidGltZXN0YW1wcyIsImNvbm5lY3REYiIsInJlcSIsInJlcyIsIm1ldGhvZCIsImhhbmRsZUdldFJlcXVlc3QiLCJoYW5kbGVQb3N0UmVxdWVzdCIsImhhbmRsZVB1dFJlcXVlc3QiLCJoYW5kbGVEZWxldGVSZXF1ZXN0Iiwic3RhdHVzIiwic2VuZCIsImlkIiwicXVlcnkiLCJhZG1pbiIsIkFkbWluIiwiX2lkIiwianNvbiIsImJvZHkiLCJpc0xlbmd0aCIsIm1pbiIsIm1heCIsImlzRW1haWwiLCJ1c2VyIiwicGFzc3dvcmRIYXNoIiwiYmNyeXB0IiwibmV3VXNlciIsInNhdmUiLCJ0b2tlbiIsImp3dCIsInVzZXJJZCIsInByb2Nlc3MiLCJleHBpcmVzSW4iLCJlcnJvciIsImNvbnNvbGUiLCIkc2V0IiwiJGN1cnJlbnREYXRlIiwidXBkYXRlZEF0IiwibG9nIiwibXNnIiwiY29ubmVjdGlvbiIsImlzQ29ubmVjdGVkIiwiZGIiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsImlzUmVhZHlTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBWUMsOERBQWxCO0FBRUEsTUFBTUMsV0FBVyxHQUFHLElBQUlELHdEQUFKLENBQW9CO0FBQ3BDRSxVQUFRLEVBQUU7QUFDTkMsUUFBSSxFQUFFSixNQURBO0FBRU5LLFlBQVEsRUFBRTtBQUZKLEdBRDBCO0FBS3BDQyxPQUFLLEVBQUU7QUFDSEYsUUFBSSxFQUFFSixNQURIO0FBRUhLLFlBQVEsRUFBRTtBQUZQLEdBTDZCO0FBU3BDRSxVQUFRLEVBQUU7QUFDTkgsUUFBSSxFQUFFSixNQURBO0FBRU5LLFlBQVEsRUFBRTtBQUZKLEdBVDBCO0FBY3BDRyxVQUFRLEVBQUU7QUFDTkosUUFBSSxFQUFFSixNQURBO0FBRU5LLFlBQVEsRUFBRTtBQUZKO0FBZDBCLENBQXBCLEVBbUJsQjtBQUNFSSxZQUFVLEVBQUU7QUFEZCxDQW5Ca0IsQ0FBcEI7QUF1QkEsK0RBQWVSLDhEQUFBLElBQXlCQSxxREFBQSxDQUFlLE9BQWYsRUFBd0JDLFdBQXhCLENBQXhDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFRLHlEQUFTO0FBQ1QsK0RBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLFVBQVFELEdBQUcsQ0FBQ0UsTUFBWjtBQUNJLFNBQUssS0FBTDtBQUNJLFlBQU1DLGdCQUFnQixDQUFDSCxHQUFELEVBQU1DLEdBQU4sQ0FBdEI7QUFDQTs7QUFDSixTQUFLLE1BQUw7QUFDSSxZQUFNRyxpQkFBaUIsQ0FBQ0osR0FBRCxFQUFNQyxHQUFOLENB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QUFMLEtBQXJCO0FBQ0gsR0FKRCxDQUlFLE9BQU9OLEtBQVAsRUFBYztBQUNaQyxXQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNBN0IsT0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsdUJBQXJCO0FBQ0g7QUFDSixDQVhELEM7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0EsTUFBTTZCLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxNQUFNdEMsU0FBUyxHQUFHLFlBQVk7QUFDMUIsTUFBR3NDLFVBQVUsQ0FBQ0MsV0FBZCxFQUEwQjtBQUN0QjtBQUNBO0FBQ0E7QUFDSCxHQUx5QixDQU0xQjs7O0FBQ0EsUUFBTUMsRUFBRSxHQUFHLE1BQU1qRCx1REFBQSxDQUFpQnNDLDhGQUFqQixFQUF3QztBQUNyRFksa0JBQWMsRUFBRSxJQURxQztBQUVyREMsb0JBQWdCLEVBQUUsS0FGbUM7QUFHckRDLG1CQUFlLEVBQUUsSUFIb0M7QUFJckRDLHNCQUFrQixFQUFFO0FBSmlDLEdBQXhDLENBQWpCLENBUDBCLENBYzFCOztBQUVBTixZQUFVLENBQUNDLFdBQVgsR0FBeUJDLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlLENBQWYsRUFBa0JDLFlBQTNDO0FBQ0gsQ0FqQkQ7O0FBbUJBLCtEQUFlOUMsU0FBZixFOzs7Ozs7Ozs7OztBQ3RCQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJwYWdlcy9hcGkvYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQcm9kdWN0IE1vZGVsXHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCB7IFN0cmluZ30gPSBtb25nb29zZS5TY2hlbWEuVHlwZXM7XHJcblxyXG5jb25zdCBBZG1pblNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgZnVsbG5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICBcclxuICAgIG1lZGlhVXJsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgXHJcbn0se1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5BZG1pbiB8fCBtb25nb29zZS5tb2RlbCgnQWRtaW4nLCBBZG1pblNjaGVtYSk7IiwiaW1wb3J0IEFkbWluIGZyb20gXCIuLi8uLi9tb2RlbHMvQWRtaW5cIjtcclxuXHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgaXNFbWFpbCBmcm9tICd2YWxpZGF0b3IvbGliL2lzRW1haWwnO1xyXG5pbXBvcnQgaXNMZW5ndGggZnJvbSAndmFsaWRhdG9yL2xpYi9pc0xlbmd0aCc7XHJcbmltcG9ydCBjb25uZWN0RGIgZnJvbSAnLi4vLi4vdXRpbHMvY29ubmVjdERiJztcclxuXHJcbmNvbm5lY3REYigpO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHN3aXRjaCAocmVxLm1ldGhvZCl7XHJcbiAgICAgICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICAgICAgICBhd2FpdCBoYW5kbGVHZXRSZXF1ZXN0KHJlcSwgcmVzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgICAgICAgYXdhaXQgaGFuZGxlUG9zdFJlcXVlc3QocmVxLCByZXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZVB1dFJlcXVlc3QocmVxLCByZXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZURlbGV0ZVJlcXVlc3QocmVxLCByZXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNSkuc2VuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBoYW5kbGVHZXRSZXF1ZXN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XHJcbiAgIFxyXG4gICAgY29uc3QgYWRtaW4gPSBhd2FpdCBBZG1pbi5maW5kKHtcclxuICAgICAgICBfaWQ6IGlkXHJcbiAgICB9KVxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2FkbWluLCBhZG1pbn0pO1xyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IGhhbmRsZVBvc3RSZXF1ZXN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGZ1bGxuYW1lLCBlbWFpbCwgcGFzc3dvcmQsbWVkaWFVcmwgfSA9IHJlcS5ib2R5O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjaGVjayBlbWFpbCwgbmFtZSwgcGFzc3dvcmQgZm9ybWF0XHJcbiAgICAgICAgaWYgKCFpc0xlbmd0aChmdWxsbmFtZSwge21pbjogMywgbWF4OiAxNX0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuc2VuZChcIk5hbWUgbXVzdCBiZSAzLTEwIGNoYXJhY3RlcnMgbG9uZ1wiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFpc0xlbmd0aChwYXNzd29yZCwge21pbjogNSwgbWF4OiAxNX0pKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5zZW5kKFwiUGFzc3dvcmQgbXVzdCBiZSA1LTE1IGNoYXJhY3RlcnMgbG9uZ1wiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFpc0VtYWlsKGVtYWlsKSl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuc2VuZChcIkVtYWlsIG11c3QgYmUgdmFsaWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgQWRtaW4uZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgICAgIGlmICh1c2VyKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5zZW5kKGBVc2VyIGFscmVhZHkgZXhpc3Qgd2l0aCB0aGF0ICR7ZW1haWx9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xyXG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBuZXcgQWRtaW4oe1xyXG4gICAgICAgICAgICBmdWxsbmFtZSxcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZEhhc2gsXHJcbiAgICAgICAgICAgIG1lZGlhVXJsXHJcbiAgICAgICAgfSkuc2F2ZSgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHtuZXdVc2VyfSk7XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgY2FydCBmb3IgdGhlIG5ldyB1c2VyXHJcbiAgICAgICAgLy8gYXdhaXQgbmV3IENhcnQoeyB1c2VyOiBuZXdVc2VyLl9pZCB9KS5zYXZlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oeyB1c2VySWQ6IG5ld1VzZXIuX2lkIH0sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIHtleHBpcmVzSW46ICc3ZCd9KTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7dXNlcjpuZXdVc2VyLHRva2VuOnRva2VufSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiRXJyb3IgaW4gc2lnbnVwLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlUHV0UmVxdWVzdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVxLmJvZHkpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgX2lkIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCB7IGZ1bGxuYW1lLCBlbWFpbCwgcGFzc3dvcmQsbWVkaWFVcmwgfSA9IHJlcS5ib2R5O1xyXG4gICAgYXdhaXQgQWRtaW4udXBkYXRlT25lKFxyXG4gICAgICAgIHtfaWR9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJHNldDogeyBmdWxsbmFtZSwgZW1haWwsIHBhc3N3b3JkLG1lZGlhVXJsIH0sXHJcbiAgICAgICAgICAgICRjdXJyZW50RGF0ZTogeyB1cGRhdGVkQXQ6IHRydWUgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxuICAgIC8vIGNvbnNvbGUubG9nKHVwKVxyXG4gICAgcmVzLnN0YXR1cygyMDMpLnNlbmQoJ0FkbWluIFVwZGF0ZWQnKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdBZG1pbiB3YXMgbm90IFVwZGF0ZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGhhbmRsZURlbGV0ZVJlcXVlc3QgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgX2lkIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhfaWQpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IEFkbWluLmZpbmRCeUlkQW5kRGVsZXRlKHsgX2lkIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjA0KS5qc29uKHttc2c6XCJBZG1pbiBoYXMgYmVlbiBkZWxldGVkXCJ9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0FkbWluIHdhcyBub3QgZGVsZXRlZCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuY29uc3QgY29ubmVjdGlvbiA9IHt9XHJcblxyXG5jb25zdCBjb25uZWN0RGIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZihjb25uZWN0aW9uLmlzQ29ubmVjdGVkKXtcclxuICAgICAgICAvLyBVc2luZyBleGlzdGluZyBkYXRhYmFzZSBjb25uZWN0aW9uXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJVc2luZyBleGlzdGluZyBjb25uZWN0aW9uXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy9Vc2UgbmV3IGRhdGFiYXNlIGNvbm5lY3Rpb25cclxuICAgIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19TUlYsIHtcclxuICAgICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkRCIENvbm5lY3RlZFwiKTtcclxuXHJcbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0uaXNSZWFkeVN0YXRlO1xyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmFsaWRhdG9yL2xpYi9pc0VtYWlsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2YWxpZGF0b3IvbGliL2lzTGVuZ3RoXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9