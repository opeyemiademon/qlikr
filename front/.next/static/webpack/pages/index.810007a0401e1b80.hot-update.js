"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/sections/slider.tsx":
/*!*********************************!*\
  !*** ./src/sections/slider.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Includes */ \"./src/components/Includes.tsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n\n\nvar _this = undefined;\n\n\n\n\n//https://react-slick.neostack.com/\n\nvar _s = $RefreshSig$();\nvar HeroSection = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), content = ref[0], setContent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        isDatafetching: false,\n        isLoading: false\n    }), loading = ref1[0], setLoading = ref1[1];\n    var settings = {\n        speed: 750,\n        autoplay: true,\n        infinite: true,\n        autoplaySpeed: 5000,\n        cssEase: \"linear\",\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        pauseOnHover: true,\n        arrows: false,\n        initialSlide: 0,\n        responsive: [\n            {\n                breakpoint: 1024,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 3,\n                    infinite: false\n                }\n            },\n            {\n                breakpoint: 768,\n                settings: {\n                    slidesToShow: 2,\n                    slidesToScroll: 2,\n                    initialSlide: 2\n                }\n            },\n            {\n                breakpoint: 480,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1\n                }\n            }\n        ]\n    };\n    var fetchPosts = function() {\n        var sql = \"Select  distinct p.code, p.post_title, p.view_count, u.user_url, p.post_date, p.post_image, p.post_slug, u.display_name as post_autor, c.name as post_category from tbl_posts p, tbl_users u, tbl_category c where u.user_code = p.post_author and c.code=p.post_category and p.post_status ='Published' order by p.ID DESC limit 5\";\n        var fd = {\n            sql: sql\n        };\n        var url = _components_Includes__WEBPACK_IMPORTED_MODULE_3__.serverUrl + \"/carelessfetch\";\n        setLoading((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, loading), {\n            isDatafetching: true\n        }));\n        axios__WEBPACK_IMPORTED_MODULE_2___default().post(url, fd, _components_Includes__WEBPACK_IMPORTED_MODULE_3__.config).then(function(response) {\n            console.log(response.data);\n            if (response.data.length !== 0 && Array.isArray(response.data)) {\n                setContent(response.data);\n            }\n        }).catch(function(error) {\n        //   setErrors({...errors, errorMessage:error.message})\n        }).finally(function() {\n            setLoading((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, loading), {\n                isDatafetching: false\n            }));\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetchPosts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"banner\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"banner-area\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"banner-carousel\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, settings), {\n                            children: content && content.map(function(item, id) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"carousel-cell\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"author-area\",\n                                        children: [\n                                            console.log(_components_Includes__WEBPACK_IMPORTED_MODULE_3__.imagesUrl + \"/post/\" + item.post_image),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: _components_Includes__WEBPACK_IMPORTED_MODULE_3__.imagesUrl + \"/post/\" + item.post_image,\n                                                alt: \"\",\n                                                title: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/admin/Documents/pikyproject/qlikr/front/src/sections/slider.tsx\",\n                                                lineNumber: 113,\n                                                columnNumber: 15\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/admin/Documents/pikyproject/qlikr/front/src/sections/slider.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 8\n                                    }, _this1)\n                                }, id, false, {\n                                    fileName: \"/Users/admin/Documents/pikyproject/qlikr/front/src/sections/slider.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 56\n                                }, _this1);\n                            })\n                        }), void 0, false, {\n                            fileName: \"/Users/admin/Documents/pikyproject/qlikr/front/src/sections/slider.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 8\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Documents/pikyproject/qlikr/front/src/sections/slider.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 8\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Documents/pikyproject/qlikr/front/src/sections/slider.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Documents/pikyproject/qlikr/front/src/sections/slider.tsx\",\n                lineNumber: 104,\n                columnNumber: 6\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/admin/Documents/pikyproject/qlikr/front/src/sections/slider.tsx\",\n            lineNumber: 103,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(HeroSection, \"VJ2LC+65943U3GjUarI3nI6DX7U=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dCQUFDQyxTQUFTLEVBQUMsUUFBUTswQkFDdEIsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxhQUFhOzhCQUMzQiw0RUFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjtrQ0FJaEMsNEVBQUN0QyxtREFBTSwwS0FBS1EsUUFBUTtzQ0FDbkJOLE9BQU8sSUFBRUEsT0FBTyxDQUFDcUMsR0FBRyxDQUFDLFNBQUNDLElBQVcsRUFBRUMsRUFBUztxREFBRyw4REFBQ0osS0FBRztvQ0FBVUMsU0FBUyxFQUFDLGVBQWU7OENBQ3ZGLDRFQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsYUFBYTs7NENBQUVWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDL0IsMkRBQVMsR0FBQyxRQUFRLEdBQUMwQyxJQUFJLENBQUNFLFVBQVUsQ0FBQzswREFDdEUsOERBQUNDLEtBQUc7Z0RBQUNDLEdBQUcsRUFBRTlDLDJEQUFTLEdBQUMsUUFBUSxHQUFDMEMsSUFBSSxDQUFDRSxVQUFVO2dEQUFHRyxHQUFHLEVBQUMsRUFBRTtnREFBQ0MsS0FBSyxFQUFDLEVBQUU7Ozs7O3NEQUFHOzs7Ozs7OENBQzVEO21DQUg4Q0wsRUFBRTs7OzswQ0FvQ3JEOzZCQUFBLENBQUM7Ozs7O2lDQUNBOzs7Ozs2QkFLRjs7Ozs7eUJBQ0Q7Ozs7O3FCQUNEOzs7OztpQkFDRDtxQkFDSCxDQUNKO0NBQ0Y7R0F0Skt4QyxXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUF3SmpCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9zbGlkZXIudHN4PzdlNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBjb25maWcsIGltYWdlc1VybCwgc2VydmVyVXJsLCBzaXRlVXJsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9JbmNsdWRlcyc7XG4vL2h0dHBzOi8vcmVhY3Qtc2xpY2submVvc3RhY2suY29tL1xuXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHNob3J0VGV4dCwgdGltZVNpbmNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9nbG9iYWxGdW5jdGlvbic7XG5jb25zdCBIZXJvU2VjdGlvbiA9KCk9PiB7XG5cbmNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKFtdIGFzIGFueSk7XG5cbmNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHtcblx0aXNEYXRhZmV0Y2hpbmc6ZmFsc2UsXG5cdGlzTG9hZGluZzpmYWxzZVxufSk7XG5pbnRlcmZhY2Ugc2xpZGVzIHtcbnBvc3RfdGl0bGU6IHN0cmluZyxcbnBvc3RfYXV0b3I6c3RyaW5nLCBcbnBvc3RfZGF0ZTpzdHJpbmcsIFxucG9zdF9pbWFnZTpzdHJpbmcsXG5wb3N0X3NsdWc6c3RyaW5nLFxucG9zdF9jYXRlZ29yeTpzdHJpbmcsXG52aWV3X2NvdW50OnN0cmluZyxcbnVzZXJfdXJsOnN0cmluZyxcbn1cblx0Y29uc3QgIHNldHRpbmdzID0ge1xuXG5cdFx0c3BlZWQ6IDc1MCxcblx0ICBhdXRvcGxheTogdHJ1ZSxcblx0ICBpbmZpbml0ZTogdHJ1ZSxcblx0ICBhdXRvcGxheVNwZWVkOiA1MDAwLFxuXHQgIGNzc0Vhc2U6ICdsaW5lYXInLFxuXHQgIHNsaWRlc1RvU2hvdzogMSxcblx0ICBzbGlkZXNUb1Njcm9sbDogMSxcblx0ICBwYXVzZU9uSG92ZXI6IHRydWUsIFxuYXJyb3dzOiBmYWxzZSxcbmluaXRpYWxTbGlkZTogMCxcbnJlc3BvbnNpdmU6IFtcbntcbiAgYnJlYWtwb2ludDogMTAyNCxcbiAgc2V0dGluZ3M6IHtcblx0c2xpZGVzVG9TaG93OiAxLFxuXHRzbGlkZXNUb1Njcm9sbDogMyxcblx0aW5maW5pdGU6IGZhbHNlLFxuICB9XG59LFxue1xuICBicmVha3BvaW50OiA3NjgsXG4gIHNldHRpbmdzOiB7XG5cdHNsaWRlc1RvU2hvdzogMixcblx0c2xpZGVzVG9TY3JvbGw6IDIsXG5cdGluaXRpYWxTbGlkZTogMlxuICB9XG59LFxue1xuICBicmVha3BvaW50OiA0ODAsXG4gIHNldHRpbmdzOiB7XG5cdHNsaWRlc1RvU2hvdzogMSxcblx0c2xpZGVzVG9TY3JvbGw6IDFcbiAgfVxufVxuXVxufTtcblxuXG5jb25zdCBmZXRjaFBvc3RzID0gICgpPT57XG5cbnZhciBzcWwgPVwiU2VsZWN0ICBkaXN0aW5jdCBwLmNvZGUsIHAucG9zdF90aXRsZSwgcC52aWV3X2NvdW50LCB1LnVzZXJfdXJsLCBwLnBvc3RfZGF0ZSwgcC5wb3N0X2ltYWdlLCBwLnBvc3Rfc2x1ZywgdS5kaXNwbGF5X25hbWUgYXMgcG9zdF9hdXRvciwgYy5uYW1lIGFzIHBvc3RfY2F0ZWdvcnkgZnJvbSB0YmxfcG9zdHMgcCwgdGJsX3VzZXJzIHUsIHRibF9jYXRlZ29yeSBjIHdoZXJlIHUudXNlcl9jb2RlID0gcC5wb3N0X2F1dGhvciBhbmQgYy5jb2RlPXAucG9zdF9jYXRlZ29yeSBhbmQgcC5wb3N0X3N0YXR1cyA9J1B1Ymxpc2hlZCcgb3JkZXIgYnkgcC5JRCBERVNDIGxpbWl0IDVcIjtcblxuXG52YXIgZmQgPSB7ICAgIFxuc3FsOnNxbFxufVxuXG5sZXQgdXJsID0gc2VydmVyVXJsKycvY2FyZWxlc3NmZXRjaCdcbnNldExvYWRpbmcoey4uLmxvYWRpbmcsIGlzRGF0YWZldGNoaW5nOnRydWV9KVxuYXhpb3MucG9zdCh1cmwsIGZkLCBjb25maWcpXG4udGhlbihyZXNwb25zZSA9Pntcblx0Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbmlmKHJlc3BvbnNlLmRhdGEubGVuZ3RoIT09MCAmJiBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmRhdGEpKXtcbiBzZXRDb250ZW50KHJlc3BvbnNlLmRhdGEpXG5cbn1cbn0pXG4uY2F0Y2goKGVycm9yKT0+e1xuICAvLyAgIHNldEVycm9ycyh7Li4uZXJyb3JzLCBlcnJvck1lc3NhZ2U6ZXJyb3IubWVzc2FnZX0pXG4gIH0pLmZpbmFsbHkoKCk9Pntcblxuc2V0TG9hZGluZyh7Li4ubG9hZGluZywgaXNEYXRhZmV0Y2hpbmc6ZmFsc2V9KVxuXHQgfSkgXG5cblx0fVxuXG5cbnVzZUVmZmVjdCgoKT0+e1xuZmV0Y2hQb3N0cygpXG59LCBbXSlcdFx0XHRcblxuICByZXR1cm4gKFxuICAgIDw+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctMTIgY29sLXhsLTEyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWFyZWFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY2Fyb3VzZWxcIj5cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0PFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuXHRcdFx0XHRcdFx0XHR7Y29udGVudCYmY29udGVudC5tYXAoKGl0ZW06c2xpZGVzLCBpZDpudW1iZXIpPT48ZGl2IGtleT17aWR9IGNsYXNzTmFtZT1cImNhcm91c2VsLWNlbGxcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRob3ItYXJlYVwiPntjb25zb2xlLmxvZyhpbWFnZXNVcmwrXCIvcG9zdC9cIitpdGVtLnBvc3RfaW1hZ2UpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtpbWFnZXNVcmwrXCIvcG9zdC9cIitpdGVtLnBvc3RfaW1hZ2V9ICBhbHQ9XCJcIiB0aXRsZT1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0ey8qIFx0PExpbmsgaHJlZj17c2l0ZVVybCtcIi9hcnRpY2xlcy9cIitpdGVtLnBvc3Rfc2x1Z30+PGEgdGl0bGU9XCJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVybGF5LWJnXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17aW1hZ2VzVXJsK1wiL3VzZXJzL1wiK2l0ZW0udXNlcl91cmx9ICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiQmFubmVyIFNsaWRlXCIgdGl0bGU9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1ibG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhcnQtYmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImljb24taGVhcnRcIj48L3NwYW4+IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zNTcxXCI+MzU3MTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzPntzaG9ydFRleHQoaXRlbS5wb3N0X3RpdGxlLCA1MCl9PC9oMz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWctY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGhvci1hcmVhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2ltYWdlc1VybCtcIi9wb3N0L1wiK2l0ZW0ucG9zdF9pbWFnZX0gIGFsdD1cIlwiIHRpdGxlPVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdC10ZXh0LW91dGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0LXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPntpdGVtLnBvc3RfYXV0b3J9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdC11c2VyLWluZm9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1pbi1yZWFkXCI+e2l0ZW0udmlld19jb3VudH08L3NwYW4+XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBvc3QtdGltZVwiPnt0aW1lU2luY2UobmV3IERhdGUoaXRlbS5wb3N0X2RhdGUpKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPjwvTGluaz4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+KX1cblx0XHRcdFx0XHRcdDwvU2xpZGVyPlxuXG5cblxuXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsImNvbmZpZyIsImltYWdlc1VybCIsInNlcnZlclVybCIsIlNsaWRlciIsIkhlcm9TZWN0aW9uIiwiY29udGVudCIsInNldENvbnRlbnQiLCJpc0RhdGFmZXRjaGluZyIsImlzTG9hZGluZyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0dGluZ3MiLCJzcGVlZCIsImF1dG9wbGF5IiwiaW5maW5pdGUiLCJhdXRvcGxheVNwZWVkIiwiY3NzRWFzZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicGF1c2VPbkhvdmVyIiwiYXJyb3dzIiwiaW5pdGlhbFNsaWRlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJmZXRjaFBvc3RzIiwic3FsIiwiZmQiLCJ1cmwiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJsZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJjYXRjaCIsImVycm9yIiwiZmluYWxseSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpZCIsInBvc3RfaW1hZ2UiLCJpbWciLCJzcmMiLCJhbHQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/slider.tsx\n"));

/***/ })

});