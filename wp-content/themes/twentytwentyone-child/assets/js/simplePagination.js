!(function (e) {
  var a = {
    init: function (t) {
      var s = e.extend(
          {
            items: 1,
            itemsOnPage: 1,
            pages: 0,
            displayedPages: 5,
            edges: 2,
            currentPage: 1,
            hrefTextPrefix: "#page-",
            hrefTextSuffix: "",
            prevText: " ",
            nextText: " ",
            ellipseText: "&hellip;",
            cssStyle: "light-theme",
            selectOnClick: !0,
            onPageClick: function (e, a) {},
            onInit: function () {},
          },
          t || {}
        ),
        i = this;
      return (
        (s.pages = s.pages
          ? s.pages
          : Math.ceil(s.items / s.itemsOnPage)
          ? Math.ceil(s.items / s.itemsOnPage)
          : 1),
        (s.currentPage = s.currentPage - 1),
        (s.halfDisplayed = s.displayedPages / 2),
        this.each(function () {
          i.addClass(s.cssStyle + " simple-pagination").data("pagination", s),
            a._draw.call(i);
        }),
        s.onInit(),
        this
      );
    },
    selectPage: function (e) {
      return a._selectPage.call(this, e - 1), this;
    },
    prevPage: function () {
      var e = this.data("pagination");
      return (
        e.currentPage > 0 && a._selectPage.call(this, e.currentPage - 1), this
      );
    },
    nextPage: function () {
      var e = this.data("pagination");
      return (
        e.currentPage < e.pages - 1 &&
          a._selectPage.call(this, e.currentPage + 1),
        this
      );
    },
    getPagesCount: function () {
      return this.data("pagination").pages;
    },
    getCurrentPage: function () {
      return this.data("pagination").currentPage + 1;
    },
    destroy: function () {
      return this.empty(), this;
    },
    redraw: function () {
      return a._draw.call(this), this;
    },
    disable: function () {
      var e = this.data("pagination");
      return (
        (e.disabled = !0), this.data("pagination", e), a._draw.call(this), this
      );
    },
    enable: function () {
      var e = this.data("pagination");
      return (
        (e.disabled = !1), this.data("pagination", e), a._draw.call(this), this
      );
    },
    updateItems: function (e) {
      var t = this.data("pagination");
      (t.items = e),
        (t.pages = Math.ceil(t.items / t.itemsOnPage)
          ? Math.ceil(t.items / t.itemsOnPage)
          : 1),
        this.data("pagination", t),
        a._draw.call(this);
    },
    _draw: function () {
      var t,
        s = this.data("pagination"),
        i = a._getInterval(s);
      a.destroy.call(this);
      var n =
        "UL" === this.prop("tagName") ? this : e("<ul></ul>").appendTo(this);
      if (
        (s.prevText &&
          a._appendItem.call(this, s.currentPage - 1, {
            text: "",
            classes: "prev",
          }),
        i.start > 0 && s.edges > 0)
      ) {
        var l = Math.min(s.edges, i.start);
        for (t = 0; t < l; t++) a._appendItem.call(this, t);
        s.edges < i.start && i.start - s.edges != 1
          ? n.append(
              '<li class="disabled"><span class="ellipse">' +
                s.ellipseText +
                "</span></li>"
            )
          : i.start - s.edges == 1 && a._appendItem.call(this, s.edges);
      }
      for (t = i.start; t < i.end; t++) a._appendItem.call(this, t);
      if (i.end < s.pages && s.edges > 0)
        for (
          s.pages - s.edges > i.end && s.pages - s.edges - i.end != 1
            ? n.append(
                '<li class="disabled"><span class="ellipse">' +
                  s.ellipseText +
                  "</span></li>"
              )
            : s.pages - s.edges - i.end == 1 &&
              a._appendItem.call(this, i.end++),
            t = Math.max(s.pages - s.edges, i.end);
          t < s.pages;
          t++
        )
          a._appendItem.call(this, t);
      s.nextText &&
        a._appendItem.call(this, s.currentPage + 1, {
          text: s.nextText,
          classes: "next",
        });
    },
    _getInterval: function (e) {
      return {
        start: Math.ceil(
          e.currentPage > e.halfDisplayed
            ? Math.max(
                Math.min(
                  e.currentPage - e.halfDisplayed,
                  e.pages - e.displayedPages
                ),
                0
              )
            : 0
        ),
        end: Math.ceil(
          e.currentPage > e.halfDisplayed
            ? Math.min(e.currentPage + e.halfDisplayed, e.pages)
            : Math.min(e.displayedPages, e.pages)
        ),
      };
    },
    _appendItem: function (t, s) {
      var i,
        n,
        l = this,
        r = l.data("pagination"),
        p = e("<li></li>"),
        d = l.find("ul");
      (t = t < 0 ? 0 : t < r.pages ? t : r.pages - 1),
        (i = e.extend({ text: t + 1, classes: "" }, s || {})),
        t == r.currentPage || r.disabled
          ? (r.disabled ? p.addClass("disabled") : p.addClass("active"),
            (n = e('<span class="current">' + i.text + "</span>")))
          : (n = e(
              '<a href="' +
                r.hrefTextPrefix +
                (t + 1) +
                r.hrefTextSuffix +
                '" class="page-link">' +
                i.text +
                "</a>"
            )).click(function (e) {
              return a._selectPage.call(l, t, e);
            }),
        i.classes && n.addClass(i.classes),
        p.append(n),
        d.length ? d.append(p) : l.append(p);
    },
    _selectPage: function (e, t) {
      var s = this.data("pagination");
      return (
        (s.currentPage = e),
        s.selectOnClick && a._draw.call(this),
        s.onPageClick(e + 1, t)
      );
    },
  };
  e.fn.pagination = function (t) {
    return a[t] && "_" != t.charAt(0)
      ? a[t].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof t && t
      ? void e.error("Method " + t + " does not exist on jQuery.pagination")
      : a.init.apply(this, arguments);
  };
})(jQuery);
