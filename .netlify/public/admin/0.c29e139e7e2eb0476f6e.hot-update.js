webpackHotUpdate(0,{

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony import */ var _BlogSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(604);
/* harmony import */ var _PostCategoriesNav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(605);
/* harmony import */ var _PostCategoriesNav_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PostCategoriesNav_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/vincentweltje/Coolsites/Portfolio/src/components/PostCategoriesNav.js";

(function () {
  var enterModule = __webpack_require__(50).enterModule;

  enterModule && enterModule(module);
})();






var PostCategoriesNav = function PostCategoriesNav(_ref) {
  var categories = _ref.categories,
      enableSearch = _ref.enableSearch;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PostCategoriesNav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "NavLink",
    exact: "true",
    to: "/travels/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "All"), categories.map(function (category, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      exact: "true",
      className: "NavLink",
      key: category.title + index,
      to: category.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, category.title);
  }), enableSearch && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlogSearch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
};

var _default = PostCategoriesNav;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(50).default;

  var leaveModule = __webpack_require__(50).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PostCategoriesNav, "PostCategoriesNav", "/Users/vincentweltje/Coolsites/Portfolio/src/components/PostCategoriesNav.js");
  reactHotLoader.register(_default, "default", "/Users/vincentweltje/Coolsites/Portfolio/src/components/PostCategoriesNav.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49)(module)))

/***/ })

})
//# sourceMappingURL=0.c29e139e7e2eb0476f6e.hot-update.js.map