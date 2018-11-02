global.webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2534b16c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(101)
}
var normalizeComponent = __webpack_require__(10)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2534b16c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/home/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2534b16c", Component.options)
  } else {
    hotAPI.reload("data-v-2534b16c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        // 选项 数据
        return {};
    },

    components: {// 定义组件

    },
    methods: {
        // 事件处理方法
        gotoGame: function gotoGame(path) {
            this.reLaunchPageTo(this.router + path);
        }
    },
    created: function created() {// 生命周期函数
        // console.log('homeroot', this.$root, this.$root.$mp)
    },
    mounted: function mounted() {
        // console.log('home999', this.$root, this.$root.$mp)
    }
});

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "homePage"
  }, [_c('img', {
    staticClass: "bg",
    attrs: {
      "src": "../../../static/img/bg.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "wraps"
  }, [_c('a', {
    staticClass: "enter_btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.gotoGame('pages/game/main?path=four')
      }
    }
  }, [_c('img', {
    attrs: {
      "mode": "widthFix",
      "src": "../../../static/img/enter_4.png"
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "enter_btn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.gotoGame('pages/game/main?path=six')
      }
    }
  }, [_c('img', {
    attrs: {
      "mode": "widthFix",
      "src": "../../../static/img/enter_6.png"
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "enter_btn",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.gotoGame('pages/game/main?path=nine')
      }
    }
  }, [_c('img', {
    attrs: {
      "mode": "widthFix",
      "src": "../../../static/img/enter_9.png"
    }
  })])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2534b16c", esExports)
  }
}

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(100);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ })

},[99]);
//# sourceMappingURL=main.js.map