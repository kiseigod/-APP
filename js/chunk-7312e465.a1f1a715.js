(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-7312e465"],
  {
    7368: function (t, s, a) {
      "use strict";
      a.r(s);
      var e = function () {
          var t = this,
            s = t._self._c;
          return s(
            "div",
            { staticClass: "user-container" },
            [
              s(
                "div",
                { staticClass: "user-card" },
                [
                  s("van-cell", {
                    scopedSlots: t._u([
                      {
                        key: "icon",
                        fn: function () {
                          return [
                            s("img", {
                              staticClass: "avatar",
                              attrs: { src: t.$store.state.userPhoto, alt: "" },
                            }),
                          ];
                        },
                        proxy: !0,
                      },
                      {
                        key: "title",
                        fn: function () {
                          return [
                            s("span", { staticClass: "username" }, [
                              t._v(t._s(t.$store.state.userName)),
                            ]),
                          ];
                        },
                        proxy: !0,
                      },
                      {
                        key: "label",
                        fn: function () {
                          return [
                            s(
                              "van-tag",
                              {
                                attrs: {
                                  color: "#fff",
                                  "text-color": "#007bff",
                                },
                              },
                              [t._v("申请认证")]
                            ),
                          ];
                        },
                        proxy: !0,
                      },
                    ]),
                  }),
                  s("div", { staticClass: "user-data" }, [
                    s("div", { staticClass: "user-data-item" }, [
                      s("span", [t._v(t._s(t.userObj.art_count))]),
                      s("span", [t._v("动态")]),
                    ]),
                    s("div", { staticClass: "user-data-item" }, [
                      s("span", [t._v(t._s(t.userObj.follow_count))]),
                      s("span", [t._v("关注")]),
                    ]),
                    s("div", { staticClass: "user-data-item" }, [
                      s("span", [t._v(t._s(t.userObj.fans_count))]),
                      s("span", [t._v("粉丝")]),
                    ]),
                  ]),
                ],
                1
              ),
              s(
                "van-cell-group",
                { staticClass: "action-card" },
                [
                  s("van-cell", {
                    attrs: {
                      icon: "edit",
                      title: "编辑资料",
                      "is-link": "",
                      to: "/user_edit",
                    },
                  }),
                  s("van-cell", {
                    attrs: {
                      icon: "chat-o",
                      title: "小思同学",
                      "is-link": "",
                      to: "/chat",
                    },
                  }),
                  s("van-cell", {
                    attrs: {
                      icon: "warning-o",
                      title: "退出登录",
                      "is-link": "",
                    },
                    on: { click: t.quitFn },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        n = [],
        c = (a("47e2"), a("2241")),
        i = a("365c"),
        r = a("cc33"),
        o = a("2f62"),
        l = {
          name: "User",
          data() {
            return { userObj: {} };
          },
          async created() {
            const t = await Object(i["l"])();
            (this.userObj = t.data.data),
              this.SET_USERPHOTO(this.userObj.photo),
              this.SET_USERNAME(this.userObj.name);
          },
          methods: {
            ...Object(o["b"])(["SET_USERPHOTO"]),
            ...Object(o["b"])(["SET_USERNAME"]),
            quitFn() {
              c["a"]
                .confirm({ title: "退出登录" })
                .then(() => {
                  Object(r["b"])(), this.$router.replace("/login");
                })
                .catch(() => {});
            },
          },
        },
        u = l,
        d = (a("fcee"), a("2877")),
        f = Object(d["a"])(u, e, n, !1, null, "7ba53a23", null);
      s["default"] = f.exports;
    },
    "8e9c": function (t, s, a) {},
    fcee: function (t, s, a) {
      "use strict";
      a("8e9c");
    },
  },
]);
//# sourceMappingURL=chunk-7312e465.a1f1a715.js.map
