!(function (t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (i) {
        t(i, window, document);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = t(require("jquery"), window, document))
    : t(jQuery, window, document);
})(function (t, i, e, n) {
  "use strict";
  function o(i, e) {
    (this.telInput = t(i)),
      (this.options = t.extend({}, r, e)),
      (this.ns = "." + a + s++),
      (this.isGoodBrowser = Boolean(i.setSelectionRange)),
      (this.hadInitialPlaceholder = Boolean(t(i).attr("placeholder")));
  }
  var a = "intlTelInput",
    s = 1,
    r = {
      allowDropdown: !0,
      autoHideDialCode: !0,
      autoPlaceholder: "polite",
      customPlaceholder: null,
      dropdownContainer: "",
      excludeCountries: [],
      formatOnDisplay: !0,
      geoIpLookup: null,
      hiddenInput: "",
      initialCountry: "",
      nationalMode: !0,
      onlyCountries: [],
      placeholderNumberType: "MOBILE",
      preferredCountries: ["us", "gb"],
      separateDialCode: !1,
      utilsScript: "",
    },
    l = {
      UP: 38,
      DOWN: 40,
      ENTER: 13,
      ESC: 27,
      PLUS: 43,
      A: 65,
      Z: 90,
      SPACE: 32,
      TAB: 9,
    },
    u = [
      "800",
      "822",
      "833",
      "844",
      "855",
      "866",
      "877",
      "880",
      "881",
      "882",
      "883",
      "884",
      "885",
      "886",
      "887",
      "888",
      "889",
    ];
  t(i).on("load", function () {
    t.fn[a].windowLoaded = !0;
  }),
    (o.prototype = {
      _init: function () {
        return (
          this.options.nationalMode && (this.options.autoHideDialCode = !1),
          this.options.separateDialCode &&
            (this.options.autoHideDialCode = this.options.nationalMode = !1),
          (this.isMobile =
            /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            )),
          this.isMobile &&
            (t("body").addClass("iti-mobile"),
            this.options.dropdownContainer ||
              (this.options.dropdownContainer = "body")),
          (this.autoCountryDeferred = new t.Deferred()),
          (this.utilsScriptDeferred = new t.Deferred()),
          (this.selectedCountryData = {}),
          this._processCountryData(),
          this._generateMarkup(),
          this._setInitialState(),
          this._initListeners(),
          this._initRequests(),
          [this.autoCountryDeferred, this.utilsScriptDeferred]
        );
      },
      _processCountryData: function () {
        this._processAllCountries(),
          this._processCountryCodes(),
          this._processPreferredCountries();
      },
      _addCountryCode: function (t, i, e) {
        i in this.countryCodes || (this.countryCodes[i] = []);
        var n = e || 0;
        this.countryCodes[i][n] = t;
      },
      _processAllCountries: function () {
        if (this.options.onlyCountries.length) {
          var t = this.options.onlyCountries.map(function (t) {
            return t.toLowerCase();
          });
          this.countries = h.filter(function (i) {
            return t.indexOf(i.iso2) > -1;
          });
        } else if (this.options.excludeCountries.length) {
          var i = this.options.excludeCountries.map(function (t) {
            return t.toLowerCase();
          });
          this.countries = h.filter(function (t) {
            return -1 === i.indexOf(t.iso2);
          });
        } else this.countries = h;
      },
      _processCountryCodes: function () {
        this.countryCodes = {};
        for (var t = 0; t < this.countries.length; t++) {
          var i = this.countries[t];
          if (
            (this._addCountryCode(i.iso2, i.dialCode, i.priority), i.areaCodes)
          )
            for (var e = 0; e < i.areaCodes.length; e++)
              this._addCountryCode(i.iso2, i.dialCode + i.areaCodes[e]);
        }
      },
      _processPreferredCountries: function () {
        this.preferredCountries = [];
        for (var t = 0; t < this.options.preferredCountries.length; t++) {
          var i = this.options.preferredCountries[t].toLowerCase(),
            e = this._getCountryData(i, !1, !0);
          e && this.preferredCountries.push(e);
        }
      },
      _generateMarkup: function () {
        this.telInput.attr("autocomplete", "off");
        var i = "intl-tel-input";
        this.options.allowDropdown && (i += " allow-dropdown"),
          this.options.separateDialCode && (i += " separate-dial-code"),
          this.telInput.wrap(t("<div>", { class: i })),
          (this.flagsContainer = t("<div>", {
            class: "flag-container",
          }).insertBefore(this.telInput));
        var e = t("<div>", { class: "selected-flag" });
        e.appendTo(this.flagsContainer),
          (this.selectedFlagInner = t("<div>", { class: "iti-flag" }).appendTo(
            e
          )),
          this.options.separateDialCode &&
            (this.selectedDialCode = t("<div>", {
              class: "selected-dial-code",
            }).appendTo(e)),
          this.options.allowDropdown
            ? (e.attr("tabindex", "0"),
              t("<div>", { class: "iti-arrow" }).appendTo(e),
              (this.countryList = t("<ul>", { class: "country-list hide" })),
              this.preferredCountries.length &&
                (this._appendListItems(this.preferredCountries, "preferred"),
                t("<li>", { class: "divider" }).appendTo(this.countryList)),
              this._appendListItems(this.countries, ""),
              (this.countryListItems = this.countryList.children(".country")),
              this.options.dropdownContainer
                ? (this.dropdown = t("<div>", {
                    class: "intl-tel-input iti-container",
                  }).append(this.countryList))
                : this.countryList.appendTo(this.flagsContainer))
            : (this.countryListItems = t()),
          this.options.hiddenInput &&
            (this.hiddenInput = t("<input>", {
              type: "hidden",
              name: this.options.hiddenInput,
            }).insertBefore(this.telInput));
      },
      _appendListItems: function (t, i) {
        for (var e = "", n = 0; n < t.length; n++) {
          var o = t[n];
          (e +=
            "<li class='country " +
            i +
            "' data-dial-code='" +
            o.dialCode +
            "' data-country-code='" +
            o.iso2 +
            "'>"),
            (e +=
              "<div class='flag-box'><div class='iti-flag " +
              o.iso2 +
              "'></div></div>"),
            (e += "<span class='country-name'>" + o.name + "</span>"),
            (e += "<span class='dial-code'>+" + o.dialCode + "</span>"),
            (e += "</li>");
        }
        this.countryList.append(e);
      },
      _setInitialState: function () {
        var t = this.telInput.val();
        this._getDialCode(t) &&
        (!this._isRegionlessNanp(t) ||
          (this.options.nationalMode && !this.options.initialCountry))
          ? this._updateFlagFromNumber(t)
          : "auto" !== this.options.initialCountry &&
            (this.options.initialCountry
              ? this._setFlag(this.options.initialCountry.toLowerCase())
              : ((this.defaultCountry = this.preferredCountries.length
                  ? this.preferredCountries[0].iso2
                  : this.countries[0].iso2),
                t || this._setFlag(this.defaultCountry)),
            t ||
              this.options.nationalMode ||
              this.options.autoHideDialCode ||
              this.options.separateDialCode ||
              this.telInput.val("+" + this.selectedCountryData.dialCode)),
          t && this._updateValFromNumber(t);
      },
      _initListeners: function () {
        this._initKeyListeners(),
          this.options.autoHideDialCode && this._initFocusListeners(),
          this.options.allowDropdown && this._initDropdownListeners(),
          this.hiddenInput && this._initHiddenInputListener();
      },
      _initHiddenInputListener: function () {
        var t = this,
          i = this.telInput.closest("form");
        i.length &&
          i.submit(function () {
            t.hiddenInput.val(t.getNumber());
          });
      },
      _initDropdownListeners: function () {
        var t = this,
          i = this.telInput.closest("label");
        i.length &&
          i.on("click" + this.ns, function (i) {
            t.countryList.hasClass("hide")
              ? t.telInput.focus()
              : i.preventDefault();
          }),
          this.selectedFlagInner.parent().on("click" + this.ns, function (i) {
            !t.countryList.hasClass("hide") ||
              t.telInput.prop("disabled") ||
              t.telInput.prop("readonly") ||
              t._showDropdown();
          }),
          this.flagsContainer.on("keydown" + t.ns, function (i) {
            !t.countryList.hasClass("hide") ||
              (i.which != l.UP &&
                i.which != l.DOWN &&
                i.which != l.SPACE &&
                i.which != l.ENTER) ||
              (i.preventDefault(), i.stopPropagation(), t._showDropdown()),
              i.which == l.TAB && t._closeDropdown();
          });
      },
      _initRequests: function () {
        var e = this;
        this.options.utilsScript
          ? t.fn[a].windowLoaded
            ? t.fn[a].loadUtils(
                this.options.utilsScript,
                this.utilsScriptDeferred
              )
            : t(i).on("load", function () {
                t.fn[a].loadUtils(e.options.utilsScript, e.utilsScriptDeferred);
              })
          : this.utilsScriptDeferred.resolve(),
          "auto" === this.options.initialCountry
            ? this._loadAutoCountry()
            : this.autoCountryDeferred.resolve();
      },
      _loadAutoCountry: function () {
        t.fn[a].autoCountry
          ? this.handleAutoCountry()
          : t.fn[a].startedLoadingAutoCountry ||
            ((t.fn[a].startedLoadingAutoCountry = !0),
            "function" == typeof this.options.geoIpLookup &&
              this.options.geoIpLookup(function (i) {
                (t.fn[a].autoCountry = i.toLowerCase()),
                  setTimeout(function () {
                    t(".intl-tel-input input").intlTelInput(
                      "handleAutoCountry"
                    );
                  });
              }));
      },
      _initKeyListeners: function () {
        var t = this;
        this.telInput.on("keyup" + this.ns, function () {
          t._updateFlagFromNumber(t.telInput.val()) &&
            t._triggerCountryChange();
        }),
          this.telInput.on("cut" + this.ns + " paste" + this.ns, function () {
            setTimeout(function () {
              t._updateFlagFromNumber(t.telInput.val()) &&
                t._triggerCountryChange();
            });
          });
      },
      _cap: function (t) {
        var i = this.telInput.attr("maxlength");
        return i && t.length > i ? t.substr(0, i) : t;
      },
      _initFocusListeners: function () {
        var i = this;
        this.telInput.on("mousedown" + this.ns, function (t) {
          i.telInput.is(":focus") ||
            i.telInput.val() ||
            (t.preventDefault(), i.telInput.focus());
        }),
          this.telInput.on("focus" + this.ns, function (t) {
            i.telInput.val() ||
              i.telInput.prop("readonly") ||
              !i.selectedCountryData.dialCode ||
              (i.telInput.val("+" + i.selectedCountryData.dialCode),
              i.telInput.one("keypress.plus" + i.ns, function (t) {
                t.which == l.PLUS && i.telInput.val("");
              }),
              setTimeout(function () {
                var t = i.telInput[0];
                if (i.isGoodBrowser) {
                  var e = i.telInput.val().length;
                  t.setSelectionRange(e, e);
                }
              }));
          });
        var e = this.telInput.prop("form");
        e &&
          t(e).on("submit" + this.ns, function () {
            i._removeEmptyDialCode();
          }),
          this.telInput.on("blur" + this.ns, function () {
            i._removeEmptyDialCode();
          });
      },
      _removeEmptyDialCode: function () {
        var t = this.telInput.val();
        if ("+" == t.charAt(0)) {
          var i = this._getNumeric(t);
          (i && this.selectedCountryData.dialCode != i) ||
            this.telInput.val("");
        }
        this.telInput.off("keypress.plus" + this.ns);
      },
      _getNumeric: function (t) {
        return t.replace(/\D/g, "");
      },
      _showDropdown: function () {
        this._setDropdownPosition();
        var t = this.countryList.children(".active");
        t.length && (this._highlightListItem(t), this._scrollTo(t)),
          this._bindDropdownListeners(),
          this.selectedFlagInner.children(".iti-arrow").addClass("up"),
          this.telInput.trigger("open:countrydropdown");
      },
      _setDropdownPosition: function () {
        var e = this;
        if (
          (this.options.dropdownContainer &&
            this.dropdown.appendTo(this.options.dropdownContainer),
          (this.dropdownHeight = this.countryList
            .removeClass("hide")
            .outerHeight()),
          !this.isMobile)
        ) {
          var n = this.telInput.offset(),
            o = n.top,
            a = t(i).scrollTop(),
            s =
              o + this.telInput.outerHeight() + this.dropdownHeight <
              a + t(i).height(),
            r = o - this.dropdownHeight > a;
          if (
            (this.countryList.toggleClass("dropup", !s && r),
            this.options.dropdownContainer)
          ) {
            var l = !s && r ? 0 : this.telInput.innerHeight();
            this.dropdown.css({ top: o + l, left: n.left }),
              t(i).on("scroll" + this.ns, function () {
                e._closeDropdown();
              });
          }
        }
      },
      _bindDropdownListeners: function () {
        var i = this;
        this.countryList.on("mouseover" + this.ns, ".country", function (e) {
          i._highlightListItem(t(this));
        }),
          this.countryList.on("click" + this.ns, ".country", function (e) {
            i._selectListItem(t(this));
          });
        var n = !0;
        t("html").on("click" + this.ns, function (t) {
          n || i._closeDropdown(), (n = !1);
        });
        var o = "",
          a = null;
        t(e).on("keydown" + this.ns, function (t) {
          t.preventDefault(),
            t.which == l.UP || t.which == l.DOWN
              ? i._handleUpDownKey(t.which)
              : t.which == l.ENTER
              ? i._handleEnterKey()
              : t.which == l.ESC
              ? i._closeDropdown()
              : ((t.which >= l.A && t.which <= l.Z) || t.which == l.SPACE) &&
                (a && clearTimeout(a),
                (o += String.fromCharCode(t.which)),
                i._searchForCountry(o),
                (a = setTimeout(function () {
                  o = "";
                }, 1e3)));
        });
      },
      _handleUpDownKey: function (t) {
        var i = this.countryList.children(".highlight").first(),
          e = t == l.UP ? i.prev() : i.next();
        e.length &&
          (e.hasClass("divider") && (e = t == l.UP ? e.prev() : e.next()),
          this._highlightListItem(e),
          this._scrollTo(e));
      },
      _handleEnterKey: function () {
        var t = this.countryList.children(".highlight").first();
        t.length && this._selectListItem(t);
      },
      _searchForCountry: function (t) {
        for (var i = 0; i < this.countries.length; i++)
          if (this._startsWith(this.countries[i].name, t)) {
            var e = this.countryList
              .children("[data-country-code=" + this.countries[i].iso2 + "]")
              .not(".preferred");
            this._highlightListItem(e), this._scrollTo(e, !0);
            break;
          }
      },
      _startsWith: function (t, i) {
        return t.substr(0, i.length).toUpperCase() == i;
      },
      _updateValFromNumber: function (t) {
        if (
          this.options.formatOnDisplay &&
          i.intlTelInputUtils &&
          this.selectedCountryData
        ) {
          var e =
            this.options.separateDialCode ||
            (!this.options.nationalMode && "+" == t.charAt(0))
              ? intlTelInputUtils.numberFormat.INTERNATIONAL
              : intlTelInputUtils.numberFormat.NATIONAL;
          t = intlTelInputUtils.formatNumber(
            t,
            this.selectedCountryData.iso2,
            e
          );
        }
        (t = this._beforeSetNumber(t)), this.telInput.val(t);
      },
      _updateFlagFromNumber: function (i) {
        i &&
          this.options.nationalMode &&
          "1" == this.selectedCountryData.dialCode &&
          "+" != i.charAt(0) &&
          ("1" != i.charAt(0) && (i = "1" + i), (i = "+" + i));
        var e = this._getDialCode(i),
          n = null,
          o = this._getNumeric(i);
        if (e) {
          var a = this.countryCodes[this._getNumeric(e)],
            s = t.inArray(this.selectedCountryData.iso2, a) > -1,
            r = "+1" == e && o.length >= 4;
          if (
            (!("1" == this.selectedCountryData.dialCode) ||
              !this._isRegionlessNanp(o)) &&
            (!s || r)
          )
            for (var l = 0; l < a.length; l++)
              if (a[l]) {
                n = a[l];
                break;
              }
        } else
          "+" == i.charAt(0) && o.length
            ? (n = "")
            : (i && "+" != i) || (n = this.defaultCountry);
        return null !== n && this._setFlag(n);
      },
      _isRegionlessNanp: function (i) {
        var e = this._getNumeric(i);
        if ("1" == e.charAt(0)) {
          var n = e.substr(1, 3);
          return t.inArray(n, u) > -1;
        }
        return !1;
      },
      _highlightListItem: function (t) {
        this.countryListItems.removeClass("highlight"), t.addClass("highlight");
      },
      _getCountryData: function (t, i, e) {
        for (var n = i ? h : this.countries, o = 0; o < n.length; o++)
          if (n[o].iso2 == t) return n[o];
        if (e) return null;
        throw new Error("No country data for '" + t + "'");
      },
      _setFlag: function (t) {
        var i = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
        (this.selectedCountryData = t ? this._getCountryData(t, !1, !1) : {}),
          this.selectedCountryData.iso2 &&
            (this.defaultCountry = this.selectedCountryData.iso2),
          this.selectedFlagInner.attr("class", "iti-flag " + t);
        var e = t
          ? this.selectedCountryData.name +
            ": +" +
            this.selectedCountryData.dialCode
          : "Unknown";
        if (
          (this.selectedFlagInner.parent().attr("title", e),
          this.options.separateDialCode)
        ) {
          var n = this.selectedCountryData.dialCode
              ? "+" + this.selectedCountryData.dialCode
              : "",
            o = this.telInput.parent();
          i.dialCode && o.removeClass("iti-sdc-" + (i.dialCode.length + 1)),
            n && o.addClass("iti-sdc-" + n.length),
            this.selectedDialCode.text(n);
        }
        return (
          this._updatePlaceholder(),
          this.countryListItems.removeClass("active"),
          t &&
            this.countryListItems
              .find(".iti-flag." + t)
              .first()
              .closest(".country")
              .addClass("active"),
          i.iso2 !== t
        );
      },
      _updatePlaceholder: function () {
        var t =
          "aggressive" === this.options.autoPlaceholder ||
          (!this.hadInitialPlaceholder &&
            (!0 === this.options.autoPlaceholder ||
              "polite" === this.options.autoPlaceholder));
        if (i.intlTelInputUtils && t) {
          var e =
              intlTelInputUtils.numberType[this.options.placeholderNumberType],
            n = this.selectedCountryData.iso2
              ? intlTelInputUtils.getExampleNumber(
                  this.selectedCountryData.iso2,
                  this.options.nationalMode,
                  e
                )
              : "";
          (n = this._beforeSetNumber(n)),
            "function" == typeof this.options.customPlaceholder &&
              (n = this.options.customPlaceholder(n, this.selectedCountryData)),
            this.telInput.attr("placeholder", n);
        }
      },
      _selectListItem: function (t) {
        var i = this._setFlag(t.attr("data-country-code"));
        if (
          (this._closeDropdown(),
          this._updateDialCode(t.attr("data-dial-code"), !0),
          this.telInput.focus(),
          this.isGoodBrowser)
        ) {
          var e = this.telInput.val().length;
          this.telInput[0].setSelectionRange(e, e);
        }
        i && this._triggerCountryChange();
      },
      _closeDropdown: function () {
        this.countryList.addClass("hide"),
          this.selectedFlagInner.children(".iti-arrow").removeClass("up"),
          t(e).off(this.ns),
          t("html").off(this.ns),
          this.countryList.off(this.ns),
          this.options.dropdownContainer &&
            (this.isMobile || t(i).off("scroll" + this.ns),
            this.dropdown.detach()),
          this.telInput.trigger("close:countrydropdown");
      },
      _scrollTo: function (t, i) {
        var e = this.countryList,
          n = e.height(),
          o = e.offset().top,
          a = o + n,
          s = t.outerHeight(),
          r = t.offset().top,
          l = r + s,
          u = r - o + e.scrollTop(),
          h = n / 2 - s / 2;
        if (r < o) i && (u -= h), e.scrollTop(u);
        else if (l > a) {
          i && (u += h);
          var d = n - s;
          e.scrollTop(u - d);
        }
      },
      _updateDialCode: function (t, i) {
        var e,
          n = this.telInput.val();
        if (((t = "+" + t), "+" == n.charAt(0))) {
          var o = this._getDialCode(n);
          e = o ? n.replace(o, t) : t;
        } else {
          if (this.options.nationalMode || this.options.separateDialCode)
            return;
          if (n) e = t + n;
          else {
            if (!i && this.options.autoHideDialCode) return;
            e = t;
          }
        }
        this.telInput.val(e);
      },
      _getDialCode: function (i) {
        var e = "";
        if ("+" == i.charAt(0))
          for (var n = "", o = 0; o < i.length; o++) {
            var a = i.charAt(o);
            if (
              t.isNumeric(a) &&
              ((n += a),
              this.countryCodes[n] && (e = i.substr(0, o + 1)),
              4 == n.length)
            )
              break;
          }
        return e;
      },
      _getFullNumber: function () {
        var i = t.trim(this.telInput.val()),
          e = this.selectedCountryData.dialCode,
          n = this._getNumeric(i),
          o = "1" == n.charAt(0) ? n : "1" + n;
        return (
          (this.options.separateDialCode
            ? "+" + e
            : "+" != i.charAt(0) &&
              "1" != i.charAt(0) &&
              e &&
              "1" == e.charAt(0) &&
              4 == e.length &&
              e != o.substr(0, 4)
            ? e.substr(1)
            : "") + i
        );
      },
      _beforeSetNumber: function (t) {
        if (this.options.separateDialCode) {
          var i = this._getDialCode(t);
          if (i) {
            null !== this.selectedCountryData.areaCodes &&
              (i = "+" + this.selectedCountryData.dialCode);
            var e =
              " " === t[i.length] || "-" === t[i.length]
                ? i.length + 1
                : i.length;
            t = t.substr(e);
          }
        }
        return this._cap(t);
      },
      _triggerCountryChange: function () {
        this.telInput.trigger("countrychange", this.selectedCountryData);
      },
      handleAutoCountry: function () {
        "auto" === this.options.initialCountry &&
          ((this.defaultCountry = t.fn[a].autoCountry),
          this.telInput.val() || this.setCountry(this.defaultCountry),
          this.autoCountryDeferred.resolve());
      },
      handleUtils: function () {
        i.intlTelInputUtils &&
          (this.telInput.val() &&
            this._updateValFromNumber(this.telInput.val()),
          this._updatePlaceholder()),
          this.utilsScriptDeferred.resolve();
      },
      destroy: function () {
        if (
          (this.allowDropdown &&
            (this._closeDropdown(),
            this.selectedFlagInner.parent().off(this.ns),
            this.telInput.closest("label").off(this.ns)),
          this.options.autoHideDialCode)
        ) {
          var i = this.telInput.prop("form");
          i && t(i).off(this.ns);
        }
        this.telInput.off(this.ns),
          this.telInput.parent().before(this.telInput).remove();
      },
      getExtension: function () {
        return i.intlTelInputUtils
          ? intlTelInputUtils.getExtension(
              this._getFullNumber(),
              this.selectedCountryData.iso2
            )
          : "";
      },
      getNumber: function (t) {
        return i.intlTelInputUtils
          ? intlTelInputUtils.formatNumber(
              this._getFullNumber(),
              this.selectedCountryData.iso2,
              t
            )
          : "";
      },
      getNumberType: function () {
        return i.intlTelInputUtils
          ? intlTelInputUtils.getNumberType(
              this._getFullNumber(),
              this.selectedCountryData.iso2
            )
          : -99;
      },
      getSelectedCountryData: function () {
        return this.selectedCountryData;
      },
      getValidationError: function () {
        return i.intlTelInputUtils
          ? intlTelInputUtils.getValidationError(
              this._getFullNumber(),
              this.selectedCountryData.iso2
            )
          : -99;
      },
      isValidNumber: function () {
        var e = t.trim(this._getFullNumber()),
          n = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
        return i.intlTelInputUtils
          ? intlTelInputUtils.isValidNumber(e, n)
          : null;
      },
      setCountry: function (t) {
        (t = t.toLowerCase()),
          this.selectedFlagInner.hasClass(t) ||
            (this._setFlag(t),
            this._updateDialCode(this.selectedCountryData.dialCode, !1),
            this._triggerCountryChange());
      },
      setNumber: function (t) {
        var i = this._updateFlagFromNumber(t);
        this._updateValFromNumber(t), i && this._triggerCountryChange();
      },
      setPlaceholderNumberType: function (t) {
        (this.options.placeholderNumberType = t), this._updatePlaceholder();
      },
    }),
    (t.fn[a] = function (i) {
      var e = arguments;
      if (i === n || "object" == typeof i) {
        var s = [];
        return (
          this.each(function () {
            if (!t.data(this, "plugin_" + a)) {
              var e = new o(this, i),
                n = e._init();
              s.push(n[0]), s.push(n[1]), t.data(this, "plugin_" + a, e);
            }
          }),
          t.when.apply(null, s)
        );
      }
      if ("string" == typeof i && "_" !== i[0]) {
        var r;
        return (
          this.each(function () {
            var n = t.data(this, "plugin_" + a);
            n instanceof o &&
              "function" == typeof n[i] &&
              (r = n[i].apply(n, Array.prototype.slice.call(e, 1))),
              "destroy" === i && t.data(this, "plugin_" + a, null);
          }),
          r !== n ? r : this
        );
      }
    }),
    (t.fn[a].getCountryData = function () {
      return h;
    }),
    (t.fn[a].loadUtils = function (i, e) {
      t.fn[a].loadedUtilsScript
        ? e && e.resolve()
        : ((t.fn[a].loadedUtilsScript = !0),
          t.ajax({
            type: "GET",
            url: i,
            complete: function () {
              t(".intl-tel-input input").intlTelInput("handleUtils");
            },
            dataType: "script",
            cache: !0,
          }));
    }),
    (t.fn[a].defaults = r),
    (t.fn[a].version = "12.1.10");
  for (
    var h = [
        ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
        ["Albania (Shqipëri)", "al", "355"],
        ["Algeria (‫الجزائر‬‎)", "dz", "213"],
        ["American Samoa", "as", "1684"],
        ["Andorra", "ad", "376"],
        ["Angola", "ao", "244"],
        ["Anguilla", "ai", "1264"],
        ["Antigua and Barbuda", "ag", "1268"],
        ["Argentina", "ar", "54"],
        ["Armenia (Հայաստան)", "am", "374"],
        ["Aruba", "aw", "297"],
        ["Australia", "au", "61", 0],
        ["Austria (Österreich)", "at", "43"],
        ["Azerbaijan (Azərbaycan)", "az", "994"],
        ["Bahamas", "bs", "1242"],
        ["Bahrain (‫البحرين‬‎)", "bh", "973"],
        ["Bangladesh (বাংলাদেশ)", "bd", "880"],
        ["Barbados", "bb", "1246"],
        ["Belarus (Беларусь)", "by", "375"],
        ["Belgium (België)", "be", "32"],
        ["Belize", "bz", "501"],
        ["Benin (Bénin)", "bj", "229"],
        ["Bermuda", "bm", "1441"],
        ["Bhutan (འབྲུག)", "bt", "975"],
        ["Bolivia", "bo", "591"],
        ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
        ["Botswana", "bw", "267"],
        ["Brazil (Brasil)", "br", "55"],
        ["British Indian Ocean Territory", "io", "246"],
        ["British Virgin Islands", "vg", "1284"],
        ["Brunei", "bn", "673"],
        ["Bulgaria (България)", "bg", "359"],
        ["Burkina Faso", "bf", "226"],
        ["Burundi (Uburundi)", "bi", "257"],
        ["Cambodia (កម្ពុជា)", "kh", "855"],
        ["Cameroon (Cameroun)", "cm", "237"],
        [
          "Canada",
          "ca",
          "1",
          1,
          [
            "204",
            "226",
            "236",
            "249",
            "250",
            "289",
            "306",
            "343",
            "365",
            "387",
            "403",
            "416",
            "418",
            "431",
            "437",
            "438",
            "450",
            "506",
            "514",
            "519",
            "548",
            "579",
            "581",
            "587",
            "604",
            "613",
            "639",
            "647",
            "672",
            "705",
            "709",
            "742",
            "778",
            "780",
            "782",
            "807",
            "819",
            "825",
            "867",
            "873",
            "902",
            "905",
          ],
        ],
        ["Cape Verde (Kabu Verdi)", "cv", "238"],
        ["Caribbean Netherlands", "bq", "599", 1],
        ["Cayman Islands", "ky", "1345"],
        ["Central African Republic (République centrafricaine)", "cf", "236"],
        ["Chad (Tchad)", "td", "235"],
        ["Chile", "cl", "56"],
        ["China (中国)", "cn", "86"],
        ["Christmas Island", "cx", "61", 2],
        ["Cocos (Keeling) Islands", "cc", "61", 1],
        ["Colombia", "co", "57"],
        ["Comoros (‫جزر القمر‬‎)", "km", "269"],
        ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
        ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
        ["Cook Islands", "ck", "682"],
        ["Costa Rica", "cr", "506"],
        ["Côte d’Ivoire", "ci", "225"],
        ["Croatia (Hrvatska)", "hr", "385"],
        ["Cuba", "cu", "53"],
        ["Curaçao", "cw", "599", 0],
        ["Cyprus (Κύπρος)", "cy", "357"],
        ["Czech Republic (Česká republika)", "cz", "420"],
        ["Denmark (Danmark)", "dk", "45"],
        ["Djibouti", "dj", "253"],
        ["Dominica", "dm", "1767"],
        [
          "Dominican Republic (República Dominicana)",
          "do",
          "1",
          2,
          ["809", "829", "849"],
        ],
        ["Ecuador", "ec", "593"],
        ["Egypt (‫مصر‬‎)", "eg", "20"],
        ["El Salvador", "sv", "503"],
        ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
        ["Eritrea", "er", "291"],
        ["Estonia (Eesti)", "ee", "372"],
        ["Ethiopia", "et", "251"],
        ["Falkland Islands (Islas Malvinas)", "fk", "500"],
        ["Faroe Islands (Føroyar)", "fo", "298"],
        ["Fiji", "fj", "679"],
        ["Finland (Suomi)", "fi", "358", 0],
        ["France", "fr", "33"],
        ["French Guiana (Guyane française)", "gf", "594"],
        ["French Polynesia (Polynésie française)", "pf", "689"],
        ["Gabon", "ga", "241"],
        ["Gambia", "gm", "220"],
        ["Georgia (საქართველო)", "ge", "995"],
        ["Germany (Deutschland)", "de", "49"],
        ["Ghana (Gaana)", "gh", "233"],
        ["Gibraltar", "gi", "350"],
        ["Greece (Ελλάδα)", "gr", "30"],
        ["Greenland (Kalaallit Nunaat)", "gl", "299"],
        ["Grenada", "gd", "1473"],
        ["Guadeloupe", "gp", "590", 0],
        ["Guam", "gu", "1671"],
        ["Guatemala", "gt", "502"],
        ["Guernsey", "gg", "44", 1],
        ["Guinea (Guinée)", "gn", "224"],
        ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
        ["Guyana", "gy", "592"],
        ["Haiti", "ht", "509"],
        ["Honduras", "hn", "504"],
        ["Hong Kong (香港)", "hk", "852"],
        ["Hungary (Magyarország)", "hu", "36"],
        ["Iceland (Ísland)", "is", "354"],
        ["India (भारत)", "in", "91"],
        ["Indonesia", "id", "62"],
        ["Iran (‫ایران‬‎)", "ir", "98"],
        ["Iraq (‫العراق‬‎)", "iq", "964"],
        ["Ireland", "ie", "353"],
        ["Isle of Man", "im", "44", 2],
        ["Israel (‫ישראל‬‎)", "il", "972"],
        ["Italy (Italia)", "it", "39", 0],
        ["Jamaica", "jm", "1876"],
        ["Japan (日本)", "jp", "81"],
        ["Jersey", "je", "44", 3],
        ["Jordan (‫الأردن‬‎)", "jo", "962"],
        ["Kazakhstan (Казахстан)", "kz", "7", 1],
        ["Kenya", "ke", "254"],
        ["Kiribati", "ki", "686"],
        ["Kosovo", "xk", "383"],
        ["Kuwait (‫الكويت‬‎)", "kw", "965"],
        ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
        ["Laos (ລາວ)", "la", "856"],
        ["Latvia (Latvija)", "lv", "371"],
        ["Lebanon (‫لبنان‬‎)", "lb", "961"],
        ["Lesotho", "ls", "266"],
        ["Liberia", "lr", "231"],
        ["Libya (‫ليبيا‬‎)", "ly", "218"],
        ["Liechtenstein", "li", "423"],
        ["Lithuania (Lietuva)", "lt", "370"],
        ["Luxembourg", "lu", "352"],
        ["Macau (澳門)", "mo", "853"],
        ["Macedonia (FYROM) (Македонија)", "mk", "389"],
        ["Madagascar (Madagasikara)", "mg", "261"],
        ["Malawi", "mw", "265"],
        ["Malaysia", "my", "60"],
        ["Maldives", "mv", "960"],
        ["Mali", "ml", "223"],
        ["Malta", "mt", "356"],
        ["Marshall Islands", "mh", "692"],
        ["Martinique", "mq", "596"],
        ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
        ["Mauritius (Moris)", "mu", "230"],
        ["Mayotte", "yt", "262", 1],
        ["Mexico (México)", "mx", "52"],
        ["Micronesia", "fm", "691"],
        ["Moldova (Republica Moldova)", "md", "373"],
        ["Monaco", "mc", "377"],
        ["Mongolia (Монгол)", "mn", "976"],
        ["Montenegro (Crna Gora)", "me", "382"],
        ["Montserrat", "ms", "1664"],
        ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
        ["Mozambique (Moçambique)", "mz", "258"],
        ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
        ["Namibia (Namibië)", "na", "264"],
        ["Nauru", "nr", "674"],
        ["Nepal (नेपाल)", "np", "977"],
        ["Netherlands (Nederland)", "nl", "31"],
        ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
        ["New Zealand", "nz", "64"],
        ["Nicaragua", "ni", "505"],
        ["Niger (Nijar)", "ne", "227"],
        ["Nigeria", "ng", "234"],
        ["Niue", "nu", "683"],
        ["Norfolk Island", "nf", "672"],
        ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
        ["Northern Mariana Islands", "mp", "1670"],
        ["Norway (Norge)", "no", "47", 0],
        ["Oman (‫عُمان‬‎)", "om", "968"],
        ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
        ["Palau", "pw", "680"],
        ["Palestine (‫فلسطين‬‎)", "ps", "970"],
        ["Panama (Panamá)", "pa", "507"],
        ["Papua New Guinea", "pg", "675"],
        ["Paraguay", "py", "595"],
        ["Peru (Perú)", "pe", "51"],
        ["Philippines", "ph", "63"],
        ["Poland (Polska)", "pl", "48"],
        ["Portugal", "pt", "351"],
        ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
        ["Qatar (‫قطر‬‎)", "qa", "974"],
        ["Réunion (La Réunion)", "re", "262", 0],
        ["Romania (România)", "ro", "40"],
        ["Russia (Россия)", "ru", "7", 0],
        ["Rwanda", "rw", "250"],
        ["Saint Barthélemy", "bl", "590", 1],
        ["Saint Helena", "sh", "290"],
        ["Saint Kitts and Nevis", "kn", "1869"],
        ["Saint Lucia", "lc", "1758"],
        ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
        ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
        ["Saint Vincent and the Grenadines", "vc", "1784"],
        ["Samoa", "ws", "685"],
        ["San Marino", "sm", "378"],
        ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
        ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
        ["Senegal (Sénégal)", "sn", "221"],
        ["Serbia (Србија)", "rs", "381"],
        ["Seychelles", "sc", "248"],
        ["Sierra Leone", "sl", "232"],
        ["Singapore", "sg", "65"],
        ["Sint Maarten", "sx", "1721"],
        ["Slovakia (Slovensko)", "sk", "421"],
        ["Slovenia (Slovenija)", "si", "386"],
        ["Solomon Islands", "sb", "677"],
        ["Somalia (Soomaaliya)", "so", "252"],
        ["South Africa", "za", "27"],
        ["South Korea (대한민국)", "kr", "82"],
        ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
        ["Spain (España)", "es", "34"],
        ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
        ["Sudan (‫السودان‬‎)", "sd", "249"],
        ["Suriname", "sr", "597"],
        ["Svalbard and Jan Mayen", "sj", "47", 1],
        ["Swaziland", "sz", "268"],
        ["Sweden (Sverige)", "se", "46"],
        ["Switzerland (Schweiz)", "ch", "41"],
        ["Syria (‫سوريا‬‎)", "sy", "963"],
        ["Taiwan (台灣)", "tw", "886"],
        ["Tajikistan", "tj", "992"],
        ["Tanzania", "tz", "255"],
        ["Thailand (ไทย)", "th", "66"],
        ["Timor-Leste", "tl", "670"],
        ["Togo", "tg", "228"],
        ["Tokelau", "tk", "690"],
        ["Tonga", "to", "676"],
        ["Trinidad and Tobago", "tt", "1868"],
        ["Tunisia (‫تونس‬‎)", "tn", "216"],
        ["Turkey (Türkiye)", "tr", "90"],
        ["Turkmenistan", "tm", "993"],
        ["Turks and Caicos Islands", "tc", "1649"],
        ["Tuvalu", "tv", "688"],
        ["U.S. Virgin Islands", "vi", "1340"],
        ["Uganda", "ug", "256"],
        ["Ukraine (Україна)", "ua", "380"],
        ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
        ["United Kingdom", "gb", "44", 0],
        ["United States", "us", "1", 0],
        ["Uruguay", "uy", "598"],
        ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
        ["Vanuatu", "vu", "678"],
        ["Vatican City (Città del Vaticano)", "va", "39", 1],
        ["Venezuela", "ve", "58"],
        ["Vietnam (Việt Nam)", "vn", "84"],
        ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
        ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1],
        ["Yemen (‫اليمن‬‎)", "ye", "967"],
        ["Zambia", "zm", "260"],
        ["Zimbabwe", "zw", "263"],
        ["Åland Islands", "ax", "358", 1],
      ],
      d = 0;
    d < h.length;
    d++
  ) {
    var c = h[d];
    h[d] = {
      name: c[0],
      iso2: c[1],
      dialCode: c[2],
      priority: c[3] || 0,
      areaCodes: c[4] || null,
    };
  }
});
