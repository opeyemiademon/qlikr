"use strict";
(() => {
var exports = {};
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 2121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/components/Includes.tsx
var Includes = __webpack_require__(591);
// EXTERNAL MODULE: ./src/components/Seo.tsx
var Seo = __webpack_require__(6875);
// EXTERNAL MODULE: ./src/components/loader.tsx
var loader = __webpack_require__(3117);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/globalFunction.tsx
var globalFunction = __webpack_require__(7801);
;// CONCATENATED MODULE: ./src/sections/replyPost.tsx






const ReplyPost = ({ slug , postId  })=>{
    const { 0: notice , 1: setNotice  } = (0,external_react_.useState)({
        isLoading: false
    });
    const { 0: comment , 1: setComment  } = (0,external_react_.useState)({
        message: "",
        senderName: "",
        senderEmail: "",
        commentParent: postId,
        saveData: "false",
        num1: "",
        num2: "",
        answer: "",
        puzzle: ""
    });
    const handleReset = ()=>{
        var num1 = Math.floor(Math.random() * 9);
        var num2 = Math.floor(Math.random() * 9);
        var answer = num1 + num2;
        setComment({
            message: "",
            senderName: "",
            senderEmail: "",
            commentParent: postId,
            saveData: "false",
            num1: String(num1),
            num2: String(num2),
            answer: answer.toString(),
            puzzle: ""
        });
    };
    const { 0: errors , 1: setErrors  } = (0,external_react_.useState)({
        message: "",
        senderName: "",
        senderEmail: "",
        puzzle: "",
        errorMessage: "",
        successMessage: ""
    });
    const handleChange = (event)=>{
        let { name , value  } = event.target;
        if (name === "saveData") {
            value = value === "true" ? "false" : "true";
        }
        setComment({
            ...comment,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ""
        });
    };
    const generatePuzzle = ()=>{
        var num1 = Math.floor(Math.random() * 9);
        var num2 = Math.floor(Math.random() * 9);
        var answer = num1 + num2;
        setComment({
            ...comment,
            num1: String(num1),
            num2: String(num2),
            answer: answer.toString()
        });
    };
    const handleChangeArea = (event)=>{
        let { name , value  } = event.target;
        setComment({
            ...comment,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ""
        });
    };
    const submit = (event)=>{
        event.preventDefault();
        let formIsValid = true;
        let errorLog = {
            ...errors
        };
        let msg = "This field is required";
        let email = comment.senderEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (!email) {
            formIsValid = false;
            errorLog.senderEmail = "Please enter valid email address";
        }
        if (!comment.senderName) {
            formIsValid = false;
            errorLog.senderName = msg;
        }
        if (!comment.message) {
            formIsValid = false;
            errorLog.message = msg;
        }
        if (!comment.puzzle) {
            formIsValid = false;
            errorLog.puzzle = msg;
            setErrors({
                ...errors,
                puzzle: msg
            });
        } else if (Number(comment.puzzle) !== Number(comment.answer)) {
            formIsValid = false;
            errorLog.puzzle = "Answer provided to puzzle is not correct";
        }
        if (!formIsValid) {
            setErrors(errorLog);
        }
        if (formIsValid) {
            setNotice({
                ...notice,
                isLoading: true
            });
            const fd = new FormData();
            Object.entries(comment).forEach(([key, value])=>{
                fd.append(key, String(value));
            });
            fd.append("comment_date", (0,globalFunction/* getDateTime */.Fc)());
            fd.append("jwt", "String(Token)");
            fd.append("postID", slug.code);
            let url = Includes/* serverUrl */.KB + "/save_controller/tbl_new_comment";
            external_axios_default().post(url, fd, Includes/* config */.vc).then((response)=>{
                if (response.data.type === "success") {
                    setErrors({
                        ...errors,
                        successMessage: response.data.message
                    });
                    setTimeout(()=>{
                        window.location.reload();
                    }, 2000);
                } else {
                    setErrors({
                        ...errors,
                        errorMessage: response.data
                    });
                }
            }).catch((error)=>{
                setErrors({
                    ...errors,
                    errorMessage: error.message
                });
            }).finally(()=>{
                setNotice({
                    ...notice,
                    isLoading: false
                });
                handleReset();
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        generatePuzzle();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "post-comments",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "sub-headings",
                children: " Post New Comment"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: "list contact-us-form",
                id: "comment",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "item-content item-input",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item-inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item-input-wrap",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                id: "senderName",
                                                name: "senderName",
                                                placeholder: "Name",
                                                className: errors.senderName ? "  formerror" : "",
                                                value: comment.senderName,
                                                onChange: handleChange,
                                                required: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "spanerror",
                                                children: errors.senderName !== "" ? errors.senderName : ""
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "item-content item-input",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item-inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item-input-wrap",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "email",
                                                role: "presentation",
                                                autoComplete: "off",
                                                placeholder: "Email",
                                                id: "senderEmail",
                                                name: "senderEmail",
                                                className: errors.senderEmail ? " formerror" : "",
                                                value: comment.senderEmail,
                                                onChange: handleChange,
                                                required: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "spanerror",
                                                children: errors.senderEmail && errors.senderEmail
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "item-content item-input",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item-inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item-input-wrap",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                name: "message",
                                                id: "message",
                                                value: comment.message,
                                                onChange: handleChangeArea,
                                                className: errors.message ? " formerror" : "",
                                                rows: 4,
                                                cols: 50,
                                                placeholder: "Comment",
                                                maxLength: 65525,
                                                required: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "spanerror",
                                                children: errors.message && errors.message
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "item-content item-input",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item-inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item-input-wrap",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                id: "puzzle",
                                                name: "puzzle",
                                                role: "presentation",
                                                autoComplete: "off",
                                                value: comment.puzzle,
                                                placeholder: comment.num1 + " + " + comment.num2 + "  =?",
                                                onChange: handleChange
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "spanerror",
                                                children: errors.puzzle && errors.puzzle
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    errors.successMessage !== "" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "success-messages alert alert-success",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: errors.successMessage && errors.successMessage
                        })
                    }) : "",
                    errors.errorMessage !== "" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "success-messages alert alert-danger",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: errors.errorMessage && errors.errorMessage
                        })
                    }) : "",
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "signup form-submit",
                        children: notice.isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(loader/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            onClick: submit,
                            className: "btn btn-common list-button",
                            id: "form-submit",
                            children: "Post Comment"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const replyPost = (ReplyPost);

;// CONCATENATED MODULE: ./src/sections/comment.tsx






const Comment = ({ slug  })=>{
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)({
        isDatafetching: false,
        isLoading: false
    });
    const { 0: postId , 1: setPostId  } = (0,external_react_.useState)("");
    const { 0: content , 1: setContent  } = (0,external_react_.useState)([]);
    const getSubcomment = (code)=>{
        const res = content && content.filter((item)=>item.comment_parent === code);
        return res.length !== 0 ? res : [];
    };
    const fetchComment = async ()=>{
        setLoading({
            ...loading,
            isDatafetching: true
        });
        var sql = "Select  comment_post_ID, comment_author, comment_author_email, comment_author_IP, comment_date, comment_content, comment_approved,comment_agent, comment_type, comment_parent, user_id, code from tbl_comments where comment_post_ID = '" + slug.code + "' order by ID DESC";
        var fd = {
            sql: sql
        };
        let url = Includes/* serverUrl */.KB + "/carelessfetch";
        await external_axios_default().post(url, fd, Includes/* config */.vc).then((response)=>{
            if (response.data.length !== 0 && Array.isArray(response.data)) {
                setContent(response.data);
            } else {
                setContent([]);
            }
        }).finally(()=>{
            setLoading({
                ...loading,
                isDatafetching: false
            });
        });
    };
    (0,external_react_.useEffect)(()=>{
        fetchComment();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "comments",
                id: "comment-id",
                children: [
                    content.length !== 0 ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "sub-headings",
                        children: " Comments"
                    }) : "",
                    content.length !== 0 ? content.filter((item)=>item.comment_type === "comment").map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "post-wraper all-post",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "author-area clark",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: Includes/* imagesUrl */._3 + "/logo.png",
                                            alt: "",
                                            title: "",
                                            className: "img-profile",
                                            onError: (e)=>{
                                                e.target.onerror = null;
                                                e.target.src = Includes/* imagesUrl */._3 + "/no.jpg";
                                            }
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "post-text-outer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "auth-life-txt",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "life-icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "art-content",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "auth-details",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "auhtor-content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "auth-name",
                                                                    children: item.comment_author
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    className: "auth-art",
                                                                    children: (0,globalFunction/* timeSince */.VG)(new Date(item.comment_date))
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: item.comment_content
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }, index)) : ""
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(replyPost, {
                slug: slug,
                postId: postId
            })
        ]
    });
};
/* harmony default export */ const comment = (Comment);

;// CONCATENATED MODULE: ./src/sections/similarPost.tsx






const SimilarPost = ({ ID  })=>{
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)({
        isDatafetching: false,
        isLoading: false
    });
    const { 0: content , 1: setContent  } = (0,external_react_.useState)([]);
    let { 0: limit , 1: setLimit  } = (0,external_react_.useState)(6);
    const fetchPost = async ()=>{
        let prev = Number(ID) + 1;
        let next = Number(ID - 1);
        var sql = "Select distinct p.post_slug, p.code, p.post_title, p.view_count, p.post_date,  p.post_image, u.display_name as post_autor, u.user_url, c.name as post_category from tbl_posts p, tbl_users u, tbl_category c where u.user_code = p.post_author and c.code=p.post_category and p.post_status ='Published' and p.ID IN ('" + prev + "','" + next + "') and p.ID !='" + ID + "' limit 2";
        var fd = {
            sql: sql
        };
        setLoading({
            ...loading,
            isDatafetching: true
        });
        let url = Includes/* serverUrl */.KB + "/carelessfetch";
        await external_axios_default().post(url, fd, Includes/* config */.vc).then((response)=>{
            if (response.data.length !== 0 && Array.isArray(response.data)) {
                setContent(response.data);
            } else {
                setContent([]);
            }
        }).finally(()=>{
            setLoading({
                ...loading,
                isDatafetching: false
            });
        });
    };
    (0,external_react_.useEffect)(()=>{
        fetchPost();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "story-block play-music",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "sub-headings",
                    children: " You might also like"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        content.length !== 0 ? content.slice(0, 1).map((item, id)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: Includes/* siteUrl */.or + "/articles/" + item.post_slug,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-6 col-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "vd-icon-txt",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "wrap-vdo",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "play-vd-pop videoPop",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: Includes/* imagesUrl */._3 + "/post/" + item.post_image,
                                                            className: "img-fluid full-size",
                                                            alt: "",
                                                            title: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: Includes/* imagesUrl */._3 + "/video1.svg",
                                                            className: "play-pop-icon",
                                                            alt: "",
                                                            title: ""
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "post-text post-area-main",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: Includes/* siteUrl */.or + "/articles/" + item.post_slug,
                                                            children: (0,globalFunction/* shortText */.$e)(item.post_title, 50)
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "life-icon",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                            className: "time-content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "author-area",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: Includes/* imagesUrl */._3 + "/users/" + item.user_url,
                                                                        className: "img-profile",
                                                                        alt: "",
                                                                        title: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: item.post_autor
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "lifetime",
                                                                    children: [
                                                                        " ",
                                                                        (0,globalFunction/* timeSince */.VG)(new Date(item.post_date))
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }, id)) : "",
                        content.length !== 0 ? content.slice(1, 2).map((item, id)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: Includes/* siteUrl */.or + "/articles/" + item.post_slug,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-6 col-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "vd-icon-txt",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "wrap-vdo",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "play-vd-pop videoPop",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: Includes/* imagesUrl */._3 + "/post/" + item.post_image,
                                                            className: "img-fluid full-size",
                                                            alt: "",
                                                            title: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: Includes/* imagesUrl */._3 + "/video1.svg",
                                                            className: "play-pop-icon",
                                                            alt: "",
                                                            title: ""
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "post-text post-area-main",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: Includes/* siteUrl */.or + "/articles/" + item.post_slug,
                                                            children: (0,globalFunction/* shortText */.$e)(item.post_title, 50)
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "life-icon",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                            className: "time-content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "author-area",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: Includes/* imagesUrl */._3 + "/users/" + item.user_url,
                                                                        className: "img-profile",
                                                                        alt: "",
                                                                        title: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: item.post_autor
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "lifetime",
                                                                    children: [
                                                                        " ",
                                                                        (0,globalFunction/* timeSince */.VG)(new Date(item.post_date))
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }, id)) : ""
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const similarPost = (SimilarPost);

;// CONCATENATED MODULE: ./pages/articles/[slug]/index.tsx











const Index = ({ content  })=>{
    const router = (0,router_.useRouter)();
    const { slug  } = router.query;
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)({
        isDatafetching: false,
        isLoading: false
    });
    const embededQuote = ()=>{
        const subsEl = `<div className="description-cont story-con">
    <div className="review-story">
        <div className="review-text">
            <h5>RELATED QUOTE</h5>
            <h1>Trust yourself, you know more than you think you do.</h1>
        </div>
    </div>
    <p>This is just a quote, a very nice quote/p>
  
</div>`;
        const pTags = document.querySelectorAll("p");
        for(let i = 0; i < pTags.length - 1; i++){
            pTags[i].prepend(document.createElement(subsEl));
        }
    };
    const property = {
        title: content.length !== 0 ? content[0].post_title : "Qlikr news and analysis from across the globe",
        description: content[0].post_excerpt.length !== 0 ? content[0].post_excerpt : content[0].post_title,
        keywords: content.length !== 0 ? content[0].post_title : ""
    };
    const fetchCountView = async ()=>{
        setLoading({
            ...loading,
            isDatafetching: true
        });
        var fd = {
            post_slug: slug
        };
        let url = Includes/* serverUrl */.KB + "/update_controller/tbl_count_view";
        await external_axios_default().post(url, fd, Includes/* config */.vc).then(()=>{
            setLoading({
                ...loading,
                isDatafetching: false
            });
        });
    };
    (0,external_react_.useEffect)(()=>{
        fetchCountView();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seo/* default */.Z, {
                description: property.description,
                title: property.title,
                keywords: property.keywords,
                siteUrl: Includes/* siteUrl */.or + "/articles/" + slug,
                imageLink: content.length !== 0 ? Includes/* imagesUrl */._3 + "/post/" + content[0].post_image : Includes/* imagesUrl */._3 + "/post/default.jpg"
            }),
            loading.isDatafetching ? /*#__PURE__*/ jsx_runtime_.jsx(loader/* default */.Z, {}) : "",
            content && content.map((item, id)=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "home",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mobile-area articles-details-page",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "header-wrapper details-head",
                                style: {
                                    backgroundImage: `url(${Includes/* imagesUrl */._3 + "/post/" + item.post_image})`
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "close-bar",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon-close-white"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "head-content",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "nws",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/articles-list?s=" + item.slug,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: item.post_category
                                                })
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bookmark-block",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "main-page",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "travel-story all-auth-wraper",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "all-box-area",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "follow-us",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "News-story-info",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "color-theamb",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "News-title",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                className: "news-date",
                                                                                children: [
                                                                                    new Date(item.post_date).toLocaleDateString("en-US", {
                                                                                        year: "numeric",
                                                                                        month: "long",
                                                                                        day: "2-digit"
                                                                                    }),
                                                                                    " "
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "follow-bookmark",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            className: "like-icon",
                                                                            title: "",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "icon-heart-big-3"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#comment-id",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "icon-bookmark"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "short-story",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                children: item.post_title
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "follow-area article-follow-inner",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "all-box-area",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "post-wraper all-post",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "author-area",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: Includes/* imagesUrl */._3 + "/users/" + item.user_url,
                                                                    className: "img-profile",
                                                                    alt: "",
                                                                    title: ""
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "post-text-outer",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "life-icon",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "art-content",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "auth-details",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "auhtor-content",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                                            className: "auth-name",
                                                                                            children: item.post_autor
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                            className: "auth-art",
                                                                                            children: (0,globalFunction/* timeSince */.VG)(new Date(item.post_date))
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "lifetime button-btn auth-btn",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    className: "follow-btn-auth follow-btn",
                                                                                    title: "",
                                                                                    children: "FOLLOW"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "story-social-icon",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://www.facebook.com/sharer/sharer.php?u=" + Includes/* siteUrl */.or + "/articles/" + item.post_slug,
                                                                rel: "noreferrer",
                                                                target: "_blank",
                                                                title: "facebook",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "icon-facebook2",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path1"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path2"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "http://www.twitter.com/intent/tweet?text=" + Includes/* siteUrl */.or + "/articles/" + item.post_slug,
                                                                rel: "noreferrer",
                                                                target: "_blank",
                                                                title: "twitter",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "icon-twitter2",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path1"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path2"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://www.linkedin.com/sharing/share-offsite/?url=" + Includes/* siteUrl */.or + "/articles/" + item.post_slug,
                                                                rel: "noreferrer",
                                                                target: "_blank",
                                                                title: "linkedin",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "icon-linkedin",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path1"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path2"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path3"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path4"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path5"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://wa.me/?text=" + Includes/* siteUrl */.or + "/articles/" + item.post_slug,
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                title: "whatsapp",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "icon-whatsapp",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path1"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path2"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path3"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path4"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path5"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://telegram.me/share/url?url=" + Includes/* siteUrl */.or + "/articles/" + item.post_slug,
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                title: "mail",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "icon-mail",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path1"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "path2"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "description-cont",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: item.post_content
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "all-box-area",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(similarPost, {
                                                        ID: item.ID
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(comment, {
                                                        slug: item
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                }, id)),
            " "
        ]
    });
};
/* harmony default export */ const _slug_ = (Index);
const getServerSideProps = async (context)=>{
    var ref;
    var sql = "Select p.ID, p.code, p.post_title, p.subtitle, p.post_image, c.slug, p.post_excerpt, p.post_content, p.view_count, p.post_date, p.post_slug, p.quote, u.description, u.user_url, u.display_name as post_autor, c.name as post_category from tbl_posts p, tbl_users u, tbl_category c where u.user_code = p.post_author and c.code=p.post_category and p.post_status ='Published' and p.post_slug='" + ((ref = context.params) === null || ref === void 0 ? void 0 : ref.slug) + "' limit 1";
    var fd = {
        sql: sql
    };
    let url = Includes/* serverUrl */.KB + "/carelessfetch";
    const response = await external_axios_default().post(url, fd, Includes/* config */.vc);
    const content = response.data;
    return {
        props: {
            content
        }
    };
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,591,693,875], () => (__webpack_exec__(2121)));
module.exports = __webpack_exports__;

})();