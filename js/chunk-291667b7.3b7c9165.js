(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-291667b7"],
  {
    "79ce": function (t, s, e) {
      "use strict";
      e.r(s);
      var i = function () {
          var t = this,
            s = t._self._c;
          return s("div", [
            s(
              "div",
              { staticClass: "search-header" },
              [
                s("van-icon", {
                  staticClass: "goback",
                  attrs: {
                    name: "arrow-left",
                    color: "white",
                    size: "0.48rem",
                  },
                  on: {
                    click: function (s) {
                      return t.$router.back();
                    },
                  },
                }),
                s("van-search", {
                  directives: [{ name: "fofo", rawName: "v-fofo" }],
                  attrs: {
                    placeholder: "请输入搜索关键词",
                    background: "#007BFF",
                    shape: "round",
                  },
                  on: { input: t.inputFn, search: t.searchFn },
                  model: {
                    value: t.kw,
                    callback: function (s) {
                      t.kw = "string" === typeof s ? s.trim() : s;
                    },
                    expression: "kw",
                  },
                }),
              ],
              1
            ),
            0 !== t.kw.length
              ? s(
                  "div",
                  { staticClass: "sugg-list" },
                  t._l(t.suggestList, function (e, i) {
                    return s("div", {
                      key: i,
                      staticClass: "sugg-item",
                      domProps: { innerHTML: t._s(t.lightFn(e, t.kw)) },
                      on: {
                        click: function (s) {
                          return t.suggestClickFn(e);
                        },
                      },
                    });
                  }),
                  0
                )
              : s(
                  "div",
                  { staticClass: "search-history" },
                  [
                    s("van-cell", {
                      attrs: { title: "搜索历史" },
                      scopedSlots: t._u([
                        {
                          key: "right-icon",
                          fn: function () {
                            return [
                              s("van-icon", {
                                staticClass: "search-icon",
                                attrs: { name: "delete" },
                                on: { click: t.clearFn },
                              }),
                            ];
                          },
                          proxy: !0,
                        },
                      ]),
                    }),
                    s(
                      "div",
                      { staticClass: "history-list" },
                      t._l(t.history, function (e, i) {
                        return s(
                          "span",
                          {
                            key: i,
                            staticClass: "history-item",
                            on: {
                              click: function (s) {
                                return t.historyClickFn(e);
                              },
                            },
                          },
                          [t._v(t._s(e))]
                        );
                      }),
                      0
                    ),
                  ],
                  1
                ),
          ]);
        },
        n = [],
        r = e("365c"),
        a = {
          name: "Search",
          data() {
            return {
              kw: "",
              timer: null,
              suggestList: [],
              history: JSON.parse(localStorage.getItem("his")) || [],
            };
          },
          methods: {
            inputFn() {
              clearTimeout(this.timer),
                (this.timer = setTimeout(async () => {
                  if (0 === this.kw.length) return;
                  const t = await Object(r["q"])({ keywords: this.kw });
                  1 === t.data.data.options.length
                    ? (this.suggestList = "")
                    : (this.suggestList = t.data.data.options);
                }, 300));
            },
            lightFn(t, s) {
              const e = new RegExp(s, "ig");
              return t.replace(
                e,
                (t) => `<span style="color:red;">${t}</span>`
              );
            },
            moveFn(t) {
              setTimeout(() => {
                this.$router.push({ path: "/search_result/" + t });
              });
            },
            searchFn() {
              this.kw.length > 0 &&
                (this.history.push(this.kw), this.moveFn(this.kw));
            },
            suggestClickFn(t) {
              this.history.push(t), this.moveFn(t);
            },
            historyClickFn(t) {
              this.moveFn(t);
            },
            clearFn() {
              this.history = [];
            },
          },
          watch: {
            history: {
              deep: !0,
              handler() {
                let t = [...new Set(this.history)];
                localStorage.setItem("his", JSON.stringify(t));
              },
            },
          },
        },
        c = a,
        o = (e("e36c"), e("2877")),
        h = Object(o["a"])(c, i, n, !1, null, "522fd9ee", null);
      s["default"] = h.exports;
    },
    c1ba: function (t, s, e) {},
    e36c: function (t, s, e) {
      "use strict";
      e("c1ba");
    },
  },
]);
//# sourceMappingURL=chunk-291667b7.3b7c9165.js.map
