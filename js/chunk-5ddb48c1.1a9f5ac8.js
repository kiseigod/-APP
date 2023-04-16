(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-5ddb48c1"],
  {
    "0680": function (t, e, n) {},
    "0979": function (t, e, n) {},
    "16c0": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              e(
                "div",
                [
                  e("van-nav-bar", {
                    attrs: { fixed: "" },
                    scopedSlots: t._u([
                      {
                        key: "left",
                        fn: function () {
                          return [
                            e("img", {
                              staticClass: "logo",
                              attrs: { src: t.imgObj },
                            }),
                          ];
                        },
                        proxy: !0,
                      },
                      {
                        key: "right",
                        fn: function () {
                          return [
                            e("van-icon", {
                              attrs: {
                                name: "search",
                                size: "0.48rem",
                                color: "#fff",
                              },
                              on: { click: t.moveSearchPageFn },
                            }),
                          ];
                        },
                        proxy: !0,
                      },
                    ]),
                  }),
                ],
                1
              ),
              e(
                "div",
                { staticClass: "main" },
                [
                  e(
                    "van-tabs",
                    {
                      attrs: {
                        sticky: "",
                        animated: "",
                        "offset-top": "1.226667rem",
                      },
                      on: { change: t.channelChangeFn },
                      model: {
                        value: t.channelId,
                        callback: function (e) {
                          t.channelId = e;
                        },
                        expression: "channelId",
                      },
                    },
                    t._l(t.userChannelList, function (n) {
                      return e(
                        "van-tab",
                        { key: n.id, attrs: { title: n.name, name: n.id } },
                        [
                          e("ArticleList", {
                            attrs: { channelId: t.channelId },
                          }),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                  e("van-icon", {
                    staticClass: "moreChannels",
                    attrs: { name: "plus", size: "0.37333334rem" },
                    on: { click: t.plusClickFn },
                  }),
                ],
                1
              ),
              e(
                "van-popup",
                {
                  staticClass: "channel_popup",
                  attrs: { "get-container": "body" },
                  model: {
                    value: t.show,
                    callback: function (e) {
                      t.show = e;
                    },
                    expression: "show",
                  },
                },
                [
                  e("ChannelEdit", {
                    ref: "editRef",
                    attrs: {
                      userList: t.userChannelList,
                      unCheckList: t.unCheckChannelList,
                    },
                    on: {
                      addChannelEV: t.addChannelFn,
                      removeChannelEV: t.removeChannelFn,
                      closeEV: t.closeFn,
                    },
                    model: {
                      value: t.channelId,
                      callback: function (e) {
                        t.channelId = e;
                      },
                      expression: "channelId",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        s = [],
        a = n("802c"),
        r = n.n(a),
        o = n("365c"),
        c = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              e(
                "van-pull-refresh",
                {
                  on: { refresh: t.onRefresh },
                  model: {
                    value: t.isLoading,
                    callback: function (e) {
                      t.isLoading = e;
                    },
                    expression: "isLoading",
                  },
                },
                [
                  e(
                    "van-list",
                    {
                      attrs: {
                        finished: t.finished,
                        "immediate-check": !1,
                        offset: "50",
                        "finished-text": "没有更多了",
                      },
                      on: { load: t.onLoad },
                      model: {
                        value: t.loading,
                        callback: function (e) {
                          t.loading = e;
                        },
                        expression: "loading",
                      },
                    },
                    t._l(t.list, function (n) {
                      return e("ArticleItem", {
                        key: n.art_id,
                        attrs: { artObj: n },
                        on: { disLikeEV: t.disLikeFn, reportEV: t.reportFn },
                        nativeOn: {
                          click: function (e) {
                            return t.itemClickFn(n.art_id);
                          },
                        },
                      });
                    }),
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        l = [],
        u = (n("9889"), n("f564")),
        h = n("d10e"),
        d = {
          name: "ArticleList",
          components: { ArticleItem: h["a"] },
          props: { channelId: Number },
          data() {
            return {
              list: [],
              loading: !1,
              finished: !1,
              theTime: new Date().getTime(),
              isLoading: !1,
            };
          },
          async created() {
            this.getArticleListFn();
          },
          methods: {
            async getArticleListFn() {
              const t = await Object(o["h"])({
                channel_id: this.channelId,
                timestamp: this.theTime,
              });
              (this.list = [...this.list, ...t.data.data.results]),
                (this.theTime = t.data.data.pre_timestamp),
                (this.loading = !1),
                null !== t.data.data.pre_timestamp
                  ? (this.isLoading = !1)
                  : (this.finished = !0);
            },
            async onLoad() {
              0 !== this.list.length && this.getArticleListFn();
            },
            async onRefresh() {
              (this.list = []),
                (this.theTime = new Date().getTime()),
                this.getArticleListFn();
            },
            async disLikeFn(t) {
              const e = await Object(o["g"])({ artId: t });
              console.log(e),
                Object(u["a"])({ type: "success", message: "反馈成功" });
            },
            async reportFn(t, e) {
              const n = Object(o["p"])({ artId: t, type: e });
              console.log(n),
                Object(u["a"])({ type: "success", message: "举报成功" });
            },
            itemClickFn(t) {
              this.$router.push({ path: "/detail?art_id=" + t });
            },
          },
        },
        f = d,
        m = n("2877"),
        v = Object(m["a"])(f, c, l, !1, null, null, null),
        p = v.exports,
        y = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              e("van-nav-bar", {
                attrs: { title: "频道管理" },
                scopedSlots: t._u([
                  {
                    key: "right",
                    fn: function () {
                      return [
                        e("van-icon", {
                          attrs: {
                            name: "cross",
                            size: "0.37333334rem",
                            color: "white",
                          },
                          on: { click: t.closeFn },
                        }),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
              }),
              e(
                "div",
                { staticClass: "my-channel-box" },
                [
                  e("div", { staticClass: "channel-title" }, [
                    e("span", [
                      t._v("我的频道 "),
                      e("span", { staticClass: "small-title" }, [
                        t._v(
                          " 点击" + t._s(t.isEdit ? "删除" : "成功") + "频道 "
                        ),
                      ]),
                    ]),
                    e("span", { on: { click: t.editFn } }, [
                      t._v(t._s(t.isEdit ? "完成" : "编辑")),
                    ]),
                  ]),
                  e(
                    "van-row",
                    { attrs: { type: "flex" } },
                    t._l(t.userList, function (n) {
                      return e(
                        "van-col",
                        {
                          key: n.id,
                          attrs: { span: "6" },
                          on: {
                            click: function (e) {
                              return t.userChannelClickFn(n);
                            },
                          },
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass:
                                "channel-item van-hairline--surround",
                            },
                            [
                              t._v(" " + t._s(n.name) + " "),
                              e("van-badge", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.isEdit && 0 !== n.id,
                                    expression: "isEdit && obj.id !== 0",
                                  },
                                ],
                                staticClass: "cross-badge",
                                attrs: { color: "transparent" },
                                scopedSlots: t._u(
                                  [
                                    {
                                      key: "content",
                                      fn: function () {
                                        return [
                                          e("van-icon", {
                                            staticClass: "badge-icon",
                                            attrs: {
                                              name: "cross",
                                              color: "#cfcfcf",
                                              size: "0.32rem",
                                            },
                                          }),
                                        ];
                                      },
                                      proxy: !0,
                                    },
                                  ],
                                  null,
                                  !0
                                ),
                              }),
                            ],
                            1
                          ),
                        ]
                      );
                    }),
                    1
                  ),
                ],
                1
              ),
              e(
                "div",
                { staticClass: "more-channel-box" },
                [
                  t._m(0),
                  e(
                    "van-row",
                    { attrs: { type: "flex" } },
                    t._l(t.unCheckList, function (n) {
                      return e(
                        "van-col",
                        {
                          key: n.id,
                          attrs: { span: "6" },
                          on: {
                            click: function (e) {
                              return t.moreFn(n);
                            },
                          },
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass:
                                "channel-item van-hairline--surround",
                            },
                            [t._v(t._s(n.name))]
                          ),
                        ]
                      );
                    }),
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        g = [
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "channel-title" }, [
              e("span", [t._v("点击更多频道")]),
            ]);
          },
        ],
        _ = {
          props: { userList: Array, unCheckList: Array },
          data() {
            return { isEdit: !1 };
          },
          methods: {
            editFn() {
              this.isEdit = !this.isEdit;
            },
            moreFn(t) {
              !0 === this.isEdit && this.$emit("addChannelEV", t);
            },
            userChannelClickFn(t) {
              !0 === this.isEdit
                ? 0 !== t.id && this.$emit("removeChannelEV", t)
                : (this.$emit("closeEV"), this.$emit("input", t.id));
            },
            closeFn() {
              this.$emit("closeEV");
            },
          },
        },
        b = _,
        C = (n("e48c"), Object(m["a"])(b, y, g, !1, null, "0a61c16c", null)),
        M = C.exports,
        $ = {
          name: "Home",
          components: { ArticleList: p, ChannelEdit: M },
          data() {
            return {
              imgObj: r.a,
              channelId: 0,
              userChannelList: [],
              allChannelList: [],
              show: !1,
              channelScrollTObj: {},
            };
          },
          async created() {
            const t = await Object(o["k"])();
            this.userChannelList = t.data.data.channels;
            const e = await Object(o["i"])();
            this.allChannelList = e.data.data.channels;
          },
          methods: {
            channelChangeFn() {
              this.$nextTick(() => {
                document.documentElement.scrollTop =
                  this.channelScrollTObj[this.channelId];
              });
            },
            plusClickFn() {
              this.show = !0;
            },
            async addChannelFn(t) {
              this.userChannelList.push(t);
              const e = this.userChannelList.filter((t) => 0 !== t.id);
              let n = e.map((t, e) => {
                const n = { ...t };
                return delete n.name, (n.seq = e), n;
              });
              const i = await Object(o["s"])({ channels: n });
              console.log(i);
            },
            async removeChannelFn(t) {
              const e = this.userChannelList.findIndex((e) => e.id === t.id);
              this.userChannelList.splice(e, 1);
              const n = await Object(o["o"])({ channelId: t.id });
              console.log(n);
            },
            closeFn() {
              (this.show = !1), (this.$refs.editRef.isEdit = !1);
            },
            moveSearchPageFn() {
              this.$router.push("/search");
            },
            scrollFn() {
              (this.$route.meta.scrollT = document.documentElement.scrollTop),
                (this.channelScrollTObj[this.channelId] =
                  document.documentElement.scrollTop);
            },
          },
          computed: {
            unCheckChannelList() {
              return this.allChannelList.filter(
                (t) =>
                  -1 === this.userChannelList.findIndex((e) => e.id === t.id)
              );
            },
          },
          activated() {
            window.addEventListener("scroll", this.scrollFn),
              (document.documentElement.scrollTop = this.$route.meta.scrollT);
          },
          deactivated() {
            window.removeEventListener("scroll", this.scrollFn);
          },
        },
        w = $,
        L = (n("382c"), Object(m["a"])(w, i, s, !1, null, "4831e0b9", null));
      e["default"] = L.exports;
    },
    "2a36": function (t, e, n) {
      !(function (e, i) {
        t.exports = i(n("5a0c"));
      })(0, function (t) {
        "use strict";
        function e(t) {
          return t && "object" == typeof t && "default" in t
            ? t
            : { default: t };
        }
        var n = e(t),
          i = {
            name: "zh",
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
              "_"
            ),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            ordinal: function (t, e) {
              return "W" === e ? t + "周" : t + "日";
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日Ah点mm分",
              LLLL: "YYYY年M月D日ddddAh点mm分",
              l: "YYYY/M/D",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            relativeTime: {
              future: "%s后",
              past: "%s前",
              s: "几秒",
              m: "1 分钟",
              mm: "%d 分钟",
              h: "1 小时",
              hh: "%d 小时",
              d: "1 天",
              dd: "%d 天",
              M: "1 个月",
              MM: "%d 个月",
              y: "1 年",
              yy: "%d 年",
            },
            meridiem: function (t, e) {
              var n = 100 * t + e;
              return n < 600
                ? "凌晨"
                : n < 900
                ? "早上"
                : n < 1100
                ? "上午"
                : n < 1300
                ? "中午"
                : n < 1800
                ? "下午"
                : "晚上";
            },
          };
        return n.default.locale(i, null, !0), i;
      });
    },
    "382c": function (t, e, n) {
      "use strict";
      n("0979");
    },
    4208: function (t, e, n) {
      !(function (e, n) {
        t.exports = n();
      })(0, function () {
        "use strict";
        return function (t, e, n) {
          t = t || {};
          var i = e.prototype,
            s = {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            };
          function a(t, e, n, s) {
            return i.fromToBase(t, e, n, s);
          }
          (n.en.relativeTime = s),
            (i.fromToBase = function (e, i, a, r, o) {
              for (
                var c,
                  l,
                  u,
                  h = a.$locale().relativeTime || s,
                  d = t.thresholds || [
                    { l: "s", r: 44, d: "second" },
                    { l: "m", r: 89 },
                    { l: "mm", r: 44, d: "minute" },
                    { l: "h", r: 89 },
                    { l: "hh", r: 21, d: "hour" },
                    { l: "d", r: 35 },
                    { l: "dd", r: 25, d: "day" },
                    { l: "M", r: 45 },
                    { l: "MM", r: 10, d: "month" },
                    { l: "y", r: 17 },
                    { l: "yy", d: "year" },
                  ],
                  f = d.length,
                  m = 0;
                m < f;
                m += 1
              ) {
                var v = d[m];
                v.d && (c = r ? n(e).diff(a, v.d, !0) : a.diff(e, v.d, !0));
                var p = (t.rounding || Math.round)(Math.abs(c));
                if (((u = c > 0), p <= v.r || !v.r)) {
                  p <= 1 && m > 0 && (v = d[m - 1]);
                  var y = h[v.l];
                  o && (p = o("" + p)),
                    (l =
                      "string" == typeof y
                        ? y.replace("%d", p)
                        : y(p, i, v.l, u));
                  break;
                }
              }
              if (i) return l;
              var g = u ? h.future : h.past;
              return "function" == typeof g ? g(l) : g.replace("%s", l);
            }),
            (i.to = function (t, e) {
              return a(t, e, this, !0);
            }),
            (i.from = function (t, e) {
              return a(t, e, this);
            });
          var r = function (t) {
            return t.$u ? n.utc() : n();
          };
          (i.toNow = function (t) {
            return this.to(r(this), t);
          }),
            (i.fromNow = function (t) {
              return this.from(r(this), t);
            });
        };
      });
    },
    "5a0c": function (t, e, n) {
      !(function (e, n) {
        t.exports = n();
      })(0, function () {
        "use strict";
        var t = 1e3,
          e = 6e4,
          n = 36e5,
          i = "millisecond",
          s = "second",
          a = "minute",
          r = "hour",
          o = "day",
          c = "week",
          l = "month",
          u = "quarter",
          h = "year",
          d = "date",
          f = "Invalid Date",
          m =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          v =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          p = {
            name: "en",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
          },
          y = function (t, e, n) {
            var i = String(t);
            return !i || i.length >= e
              ? t
              : "" + Array(e + 1 - i.length).join(n) + t;
          },
          g = {
            s: y,
            z: function (t) {
              var e = -t.utcOffset(),
                n = Math.abs(e),
                i = Math.floor(n / 60),
                s = n % 60;
              return (e <= 0 ? "+" : "-") + y(i, 2, "0") + ":" + y(s, 2, "0");
            },
            m: function t(e, n) {
              if (e.date() < n.date()) return -t(n, e);
              var i = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                s = e.clone().add(i, l),
                a = n - s < 0,
                r = e.clone().add(i + (a ? -1 : 1), l);
              return +(-(i + (n - s) / (a ? s - r : r - s)) || 0);
            },
            a: function (t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            },
            p: function (t) {
              return (
                { M: l, y: h, w: c, d: o, D: d, h: r, m: a, s: s, ms: i, Q: u }[
                  t
                ] ||
                String(t || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (t) {
              return void 0 === t;
            },
          },
          _ = "en",
          b = {};
        b[_] = p;
        var C = function (t) {
            return t instanceof L;
          },
          M = function t(e, n, i) {
            var s;
            if (!e) return _;
            if ("string" == typeof e) {
              var a = e.toLowerCase();
              b[a] && (s = a), n && ((b[a] = n), (s = a));
              var r = e.split("-");
              if (!s && r.length > 1) return t(r[0]);
            } else {
              var o = e.name;
              (b[o] = e), (s = o);
            }
            return !i && s && (_ = s), s || (!i && _);
          },
          $ = function (t, e) {
            if (C(t)) return t.clone();
            var n = "object" == typeof e ? e : {};
            return (n.date = t), (n.args = arguments), new L(n);
          },
          w = g;
        (w.l = M),
          (w.i = C),
          (w.w = function (t, e) {
            return $(t, {
              locale: e.$L,
              utc: e.$u,
              x: e.$x,
              $offset: e.$offset,
            });
          });
        var L = (function () {
            function p(t) {
              (this.$L = M(t.locale, null, !0)), this.parse(t);
            }
            var y = p.prototype;
            return (
              (y.parse = function (t) {
                (this.$d = (function (t) {
                  var e = t.date,
                    n = t.utc;
                  if (null === e) return new Date(NaN);
                  if (w.u(e)) return new Date();
                  if (e instanceof Date) return new Date(e);
                  if ("string" == typeof e && !/Z$/i.test(e)) {
                    var i = e.match(m);
                    if (i) {
                      var s = i[2] - 1 || 0,
                        a = (i[7] || "0").substring(0, 3);
                      return n
                        ? new Date(
                            Date.UTC(
                              i[1],
                              s,
                              i[3] || 1,
                              i[4] || 0,
                              i[5] || 0,
                              i[6] || 0,
                              a
                            )
                          )
                        : new Date(
                            i[1],
                            s,
                            i[3] || 1,
                            i[4] || 0,
                            i[5] || 0,
                            i[6] || 0,
                            a
                          );
                    }
                  }
                  return new Date(e);
                })(t)),
                  (this.$x = t.x || {}),
                  this.init();
              }),
              (y.init = function () {
                var t = this.$d;
                (this.$y = t.getFullYear()),
                  (this.$M = t.getMonth()),
                  (this.$D = t.getDate()),
                  (this.$W = t.getDay()),
                  (this.$H = t.getHours()),
                  (this.$m = t.getMinutes()),
                  (this.$s = t.getSeconds()),
                  (this.$ms = t.getMilliseconds());
              }),
              (y.$utils = function () {
                return w;
              }),
              (y.isValid = function () {
                return !(this.$d.toString() === f);
              }),
              (y.isSame = function (t, e) {
                var n = $(t);
                return this.startOf(e) <= n && n <= this.endOf(e);
              }),
              (y.isAfter = function (t, e) {
                return $(t) < this.startOf(e);
              }),
              (y.isBefore = function (t, e) {
                return this.endOf(e) < $(t);
              }),
              (y.$g = function (t, e, n) {
                return w.u(t) ? this[e] : this.set(n, t);
              }),
              (y.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (y.valueOf = function () {
                return this.$d.getTime();
              }),
              (y.startOf = function (t, e) {
                var n = this,
                  i = !!w.u(e) || e,
                  u = w.p(t),
                  f = function (t, e) {
                    var s = w.w(
                      n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t),
                      n
                    );
                    return i ? s : s.endOf(o);
                  },
                  m = function (t, e) {
                    return w.w(
                      n
                        .toDate()
                        [t].apply(
                          n.toDate("s"),
                          (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                        ),
                      n
                    );
                  },
                  v = this.$W,
                  p = this.$M,
                  y = this.$D,
                  g = "set" + (this.$u ? "UTC" : "");
                switch (u) {
                  case h:
                    return i ? f(1, 0) : f(31, 11);
                  case l:
                    return i ? f(1, p) : f(0, p + 1);
                  case c:
                    var _ = this.$locale().weekStart || 0,
                      b = (v < _ ? v + 7 : v) - _;
                    return f(i ? y - b : y + (6 - b), p);
                  case o:
                  case d:
                    return m(g + "Hours", 0);
                  case r:
                    return m(g + "Minutes", 1);
                  case a:
                    return m(g + "Seconds", 2);
                  case s:
                    return m(g + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (y.endOf = function (t) {
                return this.startOf(t, !1);
              }),
              (y.$set = function (t, e) {
                var n,
                  c = w.p(t),
                  u = "set" + (this.$u ? "UTC" : ""),
                  f = ((n = {}),
                  (n[o] = u + "Date"),
                  (n[d] = u + "Date"),
                  (n[l] = u + "Month"),
                  (n[h] = u + "FullYear"),
                  (n[r] = u + "Hours"),
                  (n[a] = u + "Minutes"),
                  (n[s] = u + "Seconds"),
                  (n[i] = u + "Milliseconds"),
                  n)[c],
                  m = c === o ? this.$D + (e - this.$W) : e;
                if (c === l || c === h) {
                  var v = this.clone().set(d, 1);
                  v.$d[f](m),
                    v.init(),
                    (this.$d = v.set(d, Math.min(this.$D, v.daysInMonth())).$d);
                } else f && this.$d[f](m);
                return this.init(), this;
              }),
              (y.set = function (t, e) {
                return this.clone().$set(t, e);
              }),
              (y.get = function (t) {
                return this[w.p(t)]();
              }),
              (y.add = function (i, u) {
                var d,
                  f = this;
                i = Number(i);
                var m = w.p(u),
                  v = function (t) {
                    var e = $(f);
                    return w.w(e.date(e.date() + Math.round(t * i)), f);
                  };
                if (m === l) return this.set(l, this.$M + i);
                if (m === h) return this.set(h, this.$y + i);
                if (m === o) return v(1);
                if (m === c) return v(7);
                var p =
                    ((d = {}), (d[a] = e), (d[r] = n), (d[s] = t), d)[m] || 1,
                  y = this.$d.getTime() + i * p;
                return w.w(y, this);
              }),
              (y.subtract = function (t, e) {
                return this.add(-1 * t, e);
              }),
              (y.format = function (t) {
                var e = this,
                  n = this.$locale();
                if (!this.isValid()) return n.invalidDate || f;
                var i = t || "YYYY-MM-DDTHH:mm:ssZ",
                  s = w.z(this),
                  a = this.$H,
                  r = this.$m,
                  o = this.$M,
                  c = n.weekdays,
                  l = n.months,
                  u = function (t, n, s, a) {
                    return (t && (t[n] || t(e, i))) || s[n].slice(0, a);
                  },
                  h = function (t) {
                    return w.s(a % 12 || 12, t, "0");
                  },
                  d =
                    n.meridiem ||
                    function (t, e, n) {
                      var i = t < 12 ? "AM" : "PM";
                      return n ? i.toLowerCase() : i;
                    },
                  m = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: o + 1,
                    MM: w.s(o + 1, 2, "0"),
                    MMM: u(n.monthsShort, o, l, 3),
                    MMMM: u(l, o),
                    D: this.$D,
                    DD: w.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: u(n.weekdaysMin, this.$W, c, 2),
                    ddd: u(n.weekdaysShort, this.$W, c, 3),
                    dddd: c[this.$W],
                    H: String(a),
                    HH: w.s(a, 2, "0"),
                    h: h(1),
                    hh: h(2),
                    a: d(a, r, !0),
                    A: d(a, r, !1),
                    m: String(r),
                    mm: w.s(r, 2, "0"),
                    s: String(this.$s),
                    ss: w.s(this.$s, 2, "0"),
                    SSS: w.s(this.$ms, 3, "0"),
                    Z: s,
                  };
                return i.replace(v, function (t, e) {
                  return e || m[t] || s.replace(":", "");
                });
              }),
              (y.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (y.diff = function (i, d, f) {
                var m,
                  v = w.p(d),
                  p = $(i),
                  y = (p.utcOffset() - this.utcOffset()) * e,
                  g = this - p,
                  _ = w.m(this, p);
                return (
                  (_ =
                    ((m = {}),
                    (m[h] = _ / 12),
                    (m[l] = _),
                    (m[u] = _ / 3),
                    (m[c] = (g - y) / 6048e5),
                    (m[o] = (g - y) / 864e5),
                    (m[r] = g / n),
                    (m[a] = g / e),
                    (m[s] = g / t),
                    m)[v] || g),
                  f ? _ : w.a(_)
                );
              }),
              (y.daysInMonth = function () {
                return this.endOf(l).$D;
              }),
              (y.$locale = function () {
                return b[this.$L];
              }),
              (y.locale = function (t, e) {
                if (!t) return this.$L;
                var n = this.clone(),
                  i = M(t, e, !0);
                return i && (n.$L = i), n;
              }),
              (y.clone = function () {
                return w.w(this.$d, this);
              }),
              (y.toDate = function () {
                return new Date(this.valueOf());
              }),
              (y.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (y.toISOString = function () {
                return this.$d.toISOString();
              }),
              (y.toString = function () {
                return this.$d.toUTCString();
              }),
              p
            );
          })(),
          k = L.prototype;
        return (
          ($.prototype = k),
          [
            ["$ms", i],
            ["$s", s],
            ["$m", a],
            ["$H", r],
            ["$W", o],
            ["$M", l],
            ["$y", h],
            ["$D", d],
          ].forEach(function (t) {
            k[t[1]] = function (e) {
              return this.$g(e, t[0], t[1]);
            };
          }),
          ($.extend = function (t, e) {
            return t.$i || (t(e, L, $), (t.$i = !0)), $;
          }),
          ($.locale = M),
          ($.isDayjs = C),
          ($.unix = function (t) {
            return $(1e3 * t);
          }),
          ($.en = b[_]),
          ($.Ls = b),
          ($.p = {}),
          $
        );
      });
    },
    "802c": function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAclBMVEUAAADl5eXn5+fl5eXq6uro6Ojm5ubj4+Pk5OTt7e3p6enj4+Pn5+ff39/i4uL/////Nzzr6+v/zc7/UFT/5uf/aWz/tLb/m53/goX/REj/XGD/8vP/qKr/jpH/2tr/dXn/wML/goTx8fH19fX/m57/tLW8xwRAAAAAD3RSTlMAXyCf78+/QKDv34B/EFBAdW3pAAADr0lEQVRo3u2a7XaiMBCGg59tt3Ykk5DwTdW9/1vcatARBjFVck737D7/2oPvE5JJnELFFZtovlzET/K6nEczMcR6Fe9hEvbxfM3iZ6sdTMhu3ruLaLGHaXmLrvPfdzA5u3eWH8wQUf60ho92fd8gEAu30i8Qiv3qVP87CMZuTTcQhpUQsxgCEm9EtIeA7COaoTDMxRKCshSvEJSFiCEo8dSCXCkpk6QwxtpaZ4hPCVQ/bcshgXdaeTvNX6BUJZs2TWscTPMXtGnmnJZuJ0RQWhhE7+f/gskEaKmwgggUQKJ7Tsx0/flZmgL9BenpQ3ywxu2W0pgiSaRUSsEVelzAgyybIGBMK1CPCiqZFOZTZzguMPCogK7JK4m3BAjPCIijoBgSSDjCz7CsageH/oLkMiLCQkuC3YnL2/xs+5wAKxhQaAUOhdsHBcSBLmpqFy+hRaajOznNdF2a49YZEBCoSKESXV7i89L/qEhpPd2kspvgSPzuWSTbyeJgAgwa/jMCUkjWs8ii1qNrAHlvL7u5HppAXVTg4JrGZONVRNvFlTYLL2UOo1jfMnV10rmGh1fqYQG62uDLQqjD16RntlEPCbTbTExA6bRFsDZS3RNUqiso4YgZFshDdvmqzC7LU5tG5l0B28vW7WU8H6Y1F6iibstRO1k/hQk4tzayrApLnx8UpOgpSOHWNugL1LGZSJJGVkqxNbiNZaM7VoxrTaiZYHgLUDrBOS0HSFiZ+gvSU9tkKI3znMBCl58lyCvZsD+vHhV0mwkqBIafoJOGKS/Tbwjyy9istdV5yGOkV4LsuAdyyPGGYLg7VOmNCnY7Sl3fQQNDNyPG8t1wCrc/O61FcjkPSYBtZdceAnNdbSXdTG+9ii0J6MI8vSv4DY5D54AuaOqVUyIJ2IUjgrSh/BNZv2k2dH8kuJokPSrAivK7gVW3fa94mfLZ5AJULN9NCX21tXeITMAniQsynu9SKNPSBUyA7XMZvCWw+XAXWABVo+pMQ3banAf6MhttHUtw5Nb9zOrm6/e1OziyrR9iqPxz/mlkT3keENTtMaRZlC9/08OQf0eQTipARK2PXZO59GCxeDqNOjqOr8B10Pc6On8B4v0ezF/A0n7403cuWEBQXoO/Ygn+kij8a65N2Bd1MyFWEJB54Jel8Vp8sQq3CnP3wjrYVnibiRMfoV65R6LlVxDD7pcQZAiTT0RvMC37xYfoMHuJJx3+aib6rF+m++eZ1VoMMYtelq/xkyyW82gjiD8U9zbr32NaBwAAAABJRU5ErkJggg==";
    },
    8507: function (t, e, n) {},
    b044: function (t, e, n) {
      "use strict";
      n("8507");
    },
    c466: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return c;
        });
      var i = n("5a0c"),
        s = n.n(i),
        a = n("4208"),
        r = n.n(a);
      n("2a36");
      const o = (t) => {
          s.a.extend(r.a), s.a.locale("zh");
          var e = s()(),
            n = s()(t);
          return e.to(n);
        },
        c = (t) => s()(t).format("YYYY-MM-DD");
    },
    d10e: function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              e("van-cell", {
                scopedSlots: t._u([
                  {
                    key: "title",
                    fn: function () {
                      return [
                        e("div", { staticClass: "title-box" }, [
                          e("span", [t._v(t._s(t.artObj.title))]),
                          1 === t.artObj.cover.type
                            ? e("img", {
                                directives: [
                                  {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: t.artObj.cover.images[0],
                                    expression: "artObj.cover.images[0]",
                                  },
                                ],
                                staticClass: "thumb",
                              })
                            : t._e(),
                        ]),
                        t.artObj.cover.type > 1
                          ? e(
                              "div",
                              { staticClass: "thumb-box" },
                              t._l(t.artObj.cover.images, function (t, n) {
                                return e("img", {
                                  directives: [
                                    {
                                      name: "lazy",
                                      rawName: "v-lazy",
                                      value: t,
                                      expression: "imgUrl",
                                    },
                                  ],
                                  key: n,
                                  staticClass: "thumb",
                                });
                              }),
                              0
                            )
                          : t._e(),
                      ];
                    },
                    proxy: !0,
                  },
                  {
                    key: "label",
                    fn: function () {
                      return [
                        e(
                          "div",
                          { staticClass: "label-box" },
                          [
                            e("div", [
                              e("span", [t._v(t._s(t.artObj.aut_name))]),
                              e("span", [
                                t._v(t._s(t.artObj.comm_count) + "评论"),
                              ]),
                              e("span", [
                                t._v(t._s(t.formatTime(t.artObj.pubdate))),
                              ]),
                            ]),
                            t.isShow
                              ? e("van-icon", {
                                  attrs: { name: "cross" },
                                  on: {
                                    click: function (e) {
                                      e.stopPropagation(), (t.show = !0);
                                    },
                                  },
                                })
                              : t._e(),
                          ],
                          1
                        ),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
              }),
              e("van-action-sheet", {
                attrs: {
                  actions: t.actions,
                  "get-container": "body",
                  "cancel-text": t.bottomText,
                },
                on: {
                  select: t.onSelect,
                  cancel: t.cancelFn,
                  close: t.closeFn,
                },
                model: {
                  value: t.show,
                  callback: function (e) {
                    t.show = e;
                  },
                  expression: "show",
                },
              }),
            ],
            1
          );
        },
        s = [],
        a = n("c466");
      const r = [{ name: "不感兴趣" }, { name: "反馈垃圾内容" }],
        o = [
          { value: 0, name: "其他问题" },
          { value: 1, name: "标题夸张" },
          { value: 2, name: "低俗色情" },
          { value: 3, name: "错别字多" },
          { value: 4, name: "旧闻重复" },
          { value: 5, name: "内容不实" },
          { value: 6, name: "侵权" },
          { value: 7, name: "广告软文" },
          { value: 8, name: "涉嫌违法犯罪" },
        ];
      var c = {
          name: "ArticleItem",
          props: { artObj: Object, isShow: { type: Boolean, default: !0 } },
          data() {
            return { show: !1, actions: r, bottomText: "取消" };
          },
          methods: {
            formatTime: a["b"],
            onSelect(t, e) {
              "反馈垃圾内容" === t.name
                ? ((this.actions = o), (this.bottomText = "返回"))
                : "不感兴趣" === t.name
                ? (this.$emit("disLikeEV", this.artObj.art_id),
                  (this.show = !1))
                : (this.$emit("reportEV", this.artObj.art_id, t.value),
                  (this.show = !1));
            },
            cancelFn() {
              "返回" === this.bottomText &&
                ((this.show = !0),
                (this.actions = r),
                (this.bottomText = "取消"));
            },
            closeFn() {
              (this.actions = r), (this.bottomText = "取消");
            },
          },
        },
        l = c,
        u = (n("b044"), n("2877")),
        h = Object(u["a"])(l, i, s, !1, null, "001db05c", null);
      e["a"] = h.exports;
    },
    e48c: function (t, e, n) {
      "use strict";
      n("0680");
    },
  },
]);
//# sourceMappingURL=chunk-5ddb48c1.1a9f5ac8.js.map
