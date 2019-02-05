webpackHotUpdate(0,{

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byDate", function() { return byDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byCategory", function() { return byCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelsPageTemplate", function() { return TravelsPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(598);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(557);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_PostSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(599);
/* harmony import */ var _components_PostCategoriesNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(603);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(156);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(172);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(445);





var _jsxFileName = "/Users/vincentweltje/Coolsites/Portfolio/src/templates/TravelsPage.js";

(function () {
  var enterModule = __webpack_require__(50).enterModule;

  enterModule && enterModule(module);
})();









/**
 * Filter posts by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {posts} object
 */

var byDate = function byDate(posts) {
  var now = Date.now();
  return posts.filter(function (post) {
    return Date.parse(post.date) <= now;
  });
};
/**
 * filter posts by category.
 *
 * @param {posts} object
 * @param {title} string
 * @param {contentType} string
 */

var byCategory = function byCategory(posts, title, contentType) {
  var isCategory = contentType === 'travelCountries';

  var byCategory = function byCategory(post) {
    return post.categories && post.categories.filter(function (cat) {
      return cat.category === title;
    }).length;
  };

  return isCategory ? posts.filter(byCategory) : posts;
}; // Export Template for use in CMS preview

var TravelsPageTemplate = function TravelsPageTemplate(_ref) {
  var title = _ref.title,
      _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts,
      _ref$travelCountries = _ref.travelCountries,
      travelCountries = _ref$travelCountries === void 0 ? [] : _ref$travelCountries,
      _ref$enableSearch = _ref.enableSearch,
      enableSearch = _ref$enableSearch === void 0 ? true : _ref$enableSearch,
      contentType = _ref.contentType;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_6__["Location"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, function (_ref2) {
    var location = _ref2.location;
    var filteredPosts = posts && !!posts.length ? byCategory(byDate(posts), title, contentType) : [];
    var queryObj = location.search.replace('?', '');
    queryObj = qs__WEBPACK_IMPORTED_MODULE_7___default.a.parse(queryObj);

    if (enableSearch && queryObj.s) {
      var searchTerm = queryObj.s.toLowerCase();
      filteredPosts = filteredPosts.filter(function (post) {
        return post.frontmatter.title.toLowerCase().includes(searchTerm);
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
      className: "Blog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "Container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "Container--Left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "Overlay",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_12__["default"], {
      background: true,
      src: "https://ucarecdn.com/e3c21782-456f-47cd-a1a0-e43926590771/",
      resolutions: "large",
      alt: "Home - Vincent is happy at a temple in Mexico",
      className: "Align--Bottom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      className: "Caption",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Hierve El Agua - Mexico")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "Container--Right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "Content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Travel"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Eat, sleap, travel repeat"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Travel is my greates passion, backpacking road triping or just a ride around town. I love beeing on the move, and seeing new things."), !!travelCountries.length && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PostCategoriesNav__WEBPACK_IMPORTED_MODULE_9__["default"], {
      enableSearch: true,
      categories: travelCountries,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), !!posts.length && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PostSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      posts: filteredPosts,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    })))));
  });
}; // Export Default TravelsPage for front-end

var TravelsPage = function TravelsPage(_ref3) {
  var _ref3$data = _ref3.data,
      page = _ref3$data.page,
      posts = _ref3$data.posts,
      travelCountries = _ref3$data.travelCountries;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    meta: page.frontmatter.meta || false,
    title: page.frontmatter.title || false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TravelsPageTemplate, Object.assign({}, page, page.fields, page.frontmatter, {
    posts: posts.edges.map(function (post) {
      return Object.assign({}, post.node, post.node.frontmatter, post.node.fields);
    }),
    travelCountries: travelCountries.edges.map(function (post) {
      return Object.assign({}, post.node, post.node.frontmatter, post.node.fields);
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })));
};

var _default = TravelsPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "3832227450";
;

(function () {
  var reactHotLoader = __webpack_require__(50).default;

  var leaveModule = __webpack_require__(50).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(byDate, "byDate", "/Users/vincentweltje/Coolsites/Portfolio/src/templates/TravelsPage.js");
  reactHotLoader.register(byCategory, "byCategory", "/Users/vincentweltje/Coolsites/Portfolio/src/templates/TravelsPage.js");
  reactHotLoader.register(TravelsPageTemplate, "TravelsPageTemplate", "/Users/vincentweltje/Coolsites/Portfolio/src/templates/TravelsPage.js");
  reactHotLoader.register(TravelsPage, "TravelsPage", "/Users/vincentweltje/Coolsites/Portfolio/src/templates/TravelsPage.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/Users/vincentweltje/Coolsites/Portfolio/src/templates/TravelsPage.js");
  reactHotLoader.register(_default, "default", "/Users/vincentweltje/Coolsites/Portfolio/src/templates/TravelsPage.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49)(module)))

/***/ })

})
//# sourceMappingURL=0.5ddb9842ce1c6ba9407a.hot-update.js.map