"use strict";
exports.id = 693;
exports.ids = [693];
exports.modules = {

/***/ 7801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$A": () => (/* binding */ abbreviate),
/* harmony export */   "$e": () => (/* binding */ shortText),
/* harmony export */   "Fc": () => (/* binding */ getDateTime),
/* harmony export */   "VG": () => (/* binding */ timeSince)
/* harmony export */ });
/* unused harmony exports htmlEntities, getTime, convertDateTime, getBritishDate, getRank, getDateDifference, getDays */
const config = {
    headers: {
        "content-type": "application/json"
    }
};
const getDateTime = ()=>{
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    var today = year + "-" + month + "-" + day;
    return (today + " " + new Date().toLocaleTimeString()).slice(0, 19);
};
const timeSince = (date)=>{
    var tdate = new Date();
    var seconds = Math.floor((tdate - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 1) {
        // return date.toISOString().slice(0,10)
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        //return date.toISOString().slice(0,10)
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        //return date.toISOString().slice(0,10)
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
};
function htmlEntities(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
const abbreviate = (n, d)=>{
    var x = ("" + n).length, p = Math.pow, d = p(10, d);
    x -= x % 3;
    return Math.round(n * d / p(10, x)) / d + " kMGTPE"[x / 3];
};
const getTime = (value)=>{
    var timeString = String(value);
    var hourEnd = timeString.indexOf(":");
    var H = Number(timeString.substr(0, 2));
    var h = Number(H) % 12 || 12;
    var ampm = Number(H) < 12 || Number(H) === 24 ? "AM" : "PM";
    if (h < 10) h = "0" + h;
    var result = h + timeString.substr(hourEnd, 3) + " " + ampm;
    return result;
};
const convertDateTime = (date)=>{
    let result = "";
    if (date !== "0000-00-00 00:00:00") {
        result = new Date(date).toISOString().slice(0, 19);
    } else {
        result = "";
    }
    return result;
};
const getBritishDate = (dateString)=>{
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    var splitDate = dateString.split("-");
    var month = Number(splitDate[1]) - 1; //Javascript months are 0-11
    var surfix = getRank(splitDate[2]).toLowerCase();
    let newDate = parseInt(splitDate[2]) + surfix + " " + months[month] + ", " + splitDate[0];
    return newDate;
};
const getRank = (i)=>{
    var j = i % 10, k = i % 100;
    if (j == 1 && k != 11) {
        return "st";
    }
    if (j == 2 && k != 12) {
        return "nd";
    }
    if (j == 3 && k != 13) {
        return "rd";
    }
    return "th";
};
const shortText = function(text, limit) {
    if (text.length > limit) {
        for(let i = limit; i > 0; i--){
            if (text.charAt(i) === " " && (text.charAt(i - 1) !== "," || text.charAt(i - 1) !== "." || text.charAt(i - 1) !== ";")) {
                return text.substring(0, i) + "...";
            }
        }
        return text.substring(0, limit) + "...";
    } else return text;
};
const getDateDifference = (from)=>{
    var fromDate = new Date(from);
    var toDate = new Date();
    var diff_time = toDate.getTime() - fromDate.getTime();
    var differ = diff_time / (1000 * 3600 * 24);
    return Number(differ);
};
const getDays = (date)=>{
    let day;
    switch(new Date(date).getDay()){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednessday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Sunday";
    }
    return day;
};


/***/ }),

/***/ 3117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Loader() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "se-pre-con1",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "load-area",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "loading-bar",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "progress-bar"
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ })

};
;