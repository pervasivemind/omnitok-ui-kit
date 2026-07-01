import { c as p } from "./index-B14wxdPg.js";
import Ie from "react";
function Pe(a, t) {
  for (var s = 0; s < t.length; s++) {
    const o = t[s];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const l in o)
        if (l !== "default" && !(l in a)) {
          const k = Object.getOwnPropertyDescriptor(o, l);
          k && Object.defineProperty(a, l, k.get ? k : {
            enumerable: !0,
            get: () => o[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var W = {}, f = p && p.__assign || function() {
  return f = Object.assign || function(a) {
    for (var t, s = 1, o = arguments.length; s < o; s++) {
      t = arguments[s];
      for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (a[l] = t[l]);
    }
    return a;
  }, f.apply(this, arguments);
}, Me = p && p.__createBinding || (Object.create ? function(a, t, s, o) {
  o === void 0 && (o = s);
  var l = Object.getOwnPropertyDescriptor(t, s);
  (!l || ("get" in l ? !t.__esModule : l.writable || l.configurable)) && (l = { enumerable: !0, get: function() {
    return t[s];
  } }), Object.defineProperty(a, o, l);
} : function(a, t, s, o) {
  o === void 0 && (o = s), a[o] = t[s];
}), Re = p && p.__setModuleDefault || (Object.create ? function(a, t) {
  Object.defineProperty(a, "default", { enumerable: !0, value: t });
} : function(a, t) {
  a.default = t;
}), ze = p && p.__importStar || function(a) {
  if (a && a.__esModule) return a;
  var t = {};
  if (a != null) for (var s in a) s !== "default" && Object.prototype.hasOwnProperty.call(a, s) && Me(t, a, s);
  return Re(t, a), t;
}, Fe = p && p.__rest || function(a, t) {
  var s = {};
  for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && t.indexOf(o) < 0 && (s[o] = a[o]);
  if (a != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(a); l < o.length; l++)
      t.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(a, o[l]) && (s[o[l]] = a[o[l]]);
  return s;
};
Object.defineProperty(W, "__esModule", { value: !0 });
var h = ze(Ie), Be = 89, R = 90, Ne = 77, ne = 57, re = 219, ae = 222, ie = 192, oe = 100, Le = 3e3, We = typeof window < "u" && "navigator" in window && /Win/i.test(navigator.platform), L = typeof window < "u" && "navigator" in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), z = "npm__react-simple-code-editor__textarea", Ye = (
  /* CSS */
  `
/**
 * Reset the text fill color so that placeholder is visible
 */
.`.concat(z, `:empty {
  -webkit-text-fill-color: inherit !important;
}

/**
 * Hack to apply on some CSS on IE10 and IE11
 */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  /**
    * IE doesn't support '-webkit-text-fill-color'
    * So we use 'color: transparent' to make the text transparent on IE
    * Unlike other browsers, it doesn't affect caret color in IE
    */
  .`).concat(z, ` {
    color: transparent !important;
  }

  .`).concat(z, `::selection {
    background-color: #accef7 !important;
    color: transparent !important;
  }
}
`)
), Ae = h.forwardRef(function(t, s) {
  var o = t.autoFocus, l = t.disabled, k = t.form, le = t.highlight, Y = t.ignoreTabKey, se = Y === void 0 ? !1 : Y, A = t.insertSpaces, ce = A === void 0 ? !0 : A, ue = t.maxLength, fe = t.minLength, de = t.name, ve = t.onBlur, ge = t.onClick, he = t.onFocus, H = t.onKeyDown, ye = t.onKeyUp, T = t.onValueChange, U = t.padding, g = U === void 0 ? 0 : U, pe = t.placeholder, me = t.preClassName, be = t.readOnly, _e = t.required, Ee = t.style, q = t.tabSize, Se = q === void 0 ? 2 : q, G = t.textareaClassName, Ce = t.textareaId, Q = t.value, ke = Fe(t, ["autoFocus", "disabled", "form", "highlight", "ignoreTabKey", "insertSpaces", "maxLength", "minLength", "name", "onBlur", "onClick", "onFocus", "onKeyDown", "onKeyUp", "onValueChange", "padding", "placeholder", "preClassName", "readOnly", "required", "style", "tabSize", "textareaClassName", "textareaId", "value"]), c = h.useRef({
    stack: [],
    offset: -1
  }), I = h.useRef(null), V = h.useState(!0), Oe = V[0], Ke = V[1], Z = {
    paddingTop: typeof g == "object" ? g.top : g,
    paddingRight: typeof g == "object" ? g.right : g,
    paddingBottom: typeof g == "object" ? g.bottom : g,
    paddingLeft: typeof g == "object" ? g.left : g
  }, F = le(Q), E = function(e, i) {
    return e.substring(0, i).split(`
`);
  }, P = h.useCallback(function(e, i) {
    var n, r, u;
    i === void 0 && (i = !1);
    var d = c.current, m = d.stack, O = d.offset;
    if (m.length && O > -1) {
      c.current.stack = m.slice(0, O + 1);
      var K = c.current.stack.length;
      if (K > oe) {
        var C = K - oe;
        c.current.stack = m.slice(C, K), c.current.offset = Math.max(c.current.offset - C, 0);
      }
    }
    var y = Date.now();
    if (i) {
      var _ = c.current.stack[c.current.offset];
      if (_ && y - _.timestamp < Le) {
        var w = /[^a-z0-9]([a-z0-9]+)$/i, v = (n = E(_.value, _.selectionStart).pop()) === null || n === void 0 ? void 0 : n.match(w), x = (r = E(e.value, e.selectionStart).pop()) === null || r === void 0 ? void 0 : r.match(w);
        if (v != null && v[1] && (!((u = x == null ? void 0 : x[1]) === null || u === void 0) && u.startsWith(v[1]))) {
          c.current.stack[c.current.offset] = f(f({}, e), { timestamp: y });
          return;
        }
      }
    }
    c.current.stack.push(f(f({}, e), { timestamp: y })), c.current.offset++;
  }, []), $ = h.useCallback(function() {
    var e = I.current;
    if (e) {
      var i = e.value, n = e.selectionStart, r = e.selectionEnd;
      P({
        value: i,
        selectionStart: n,
        selectionEnd: r
      });
    }
  }, [P]), B = function(e) {
    var i = I.current;
    i && (i.value = e.value, i.selectionStart = e.selectionStart, i.selectionEnd = e.selectionEnd, T == null || T(e.value));
  }, S = function(e) {
    var i = I.current, n = c.current.stack[c.current.offset];
    n && i && (c.current.stack[c.current.offset] = f(f({}, n), { selectionStart: i.selectionStart, selectionEnd: i.selectionEnd })), P(e), B(e);
  }, we = function() {
    var e = c.current, i = e.stack, n = e.offset, r = i[n - 1];
    r && (B(r), c.current.offset = Math.max(n - 1, 0));
  }, xe = function() {
    var e = c.current, i = e.stack, n = e.offset, r = i[n + 1];
    r && (B(r), c.current.offset = Math.min(n + 1, i.length - 1));
  }, je = function(e) {
    if (!(H && (H(e), e.defaultPrevented))) {
      e.key === "Escape" && e.currentTarget.blur();
      var i = e.currentTarget, n = i.value, r = i.selectionStart, u = i.selectionEnd, d = (ce ? " " : "	").repeat(Se);
      if (e.key === "Tab" && !se && Oe)
        if (e.preventDefault(), e.shiftKey) {
          var m = E(n, r), O = m.length - 1, K = E(n, u).length - 1, C = n.split(`
`).map(function(j, X) {
            return X >= O && X <= K && j.startsWith(d) ? j.substring(d.length) : j;
          }).join(`
`);
          if (n !== C) {
            var y = m[O];
            S({
              value: C,
              // Move the start cursor if first line in selection was modified
              // It was modified only if it started with a tab
              selectionStart: y != null && y.startsWith(d) ? r - d.length : r,
              // Move the end cursor by total number of characters removed
              selectionEnd: u - (n.length - C.length)
            });
          }
        } else if (r !== u) {
          var m = E(n, r), _ = m.length - 1, w = E(n, u).length - 1, y = m[_];
          S({
            value: n.split(`
`).map(function(ee, te) {
              return te >= _ && te <= w ? d + ee : ee;
            }).join(`
`),
            // Move the start cursor by number of characters added in first line of selection
            // Don't move it if it there was no text before cursor
            selectionStart: y && /\S/.test(y) ? r + d.length : r,
            // Move the end cursor by total number of characters added
            selectionEnd: u + d.length * (w - _ + 1)
          });
        } else {
          var v = r + d.length;
          S({
            // Insert tab character at caret
            value: n.substring(0, r) + d + n.substring(u),
            // Update caret position
            selectionStart: v,
            selectionEnd: v
          });
        }
      else if (e.key === "Backspace") {
        var x = r !== u, Te = n.substring(0, r);
        if (Te.endsWith(d) && !x) {
          e.preventDefault();
          var v = r - d.length;
          S({
            // Remove tab character at caret
            value: n.substring(0, r - d.length) + n.substring(u),
            // Update caret position
            selectionStart: v,
            selectionEnd: v
          });
        }
      } else if (e.key === "Enter") {
        if (r === u) {
          var N = E(n, r).pop(), M = N == null ? void 0 : N.match(/^\s+/);
          if (M != null && M[0]) {
            e.preventDefault();
            var J = `
` + M[0], v = r + J.length;
            S({
              // Insert indentation character at caret
              value: n.substring(0, r) + J + n.substring(u),
              // Update caret position
              selectionStart: v,
              selectionEnd: v
            });
          }
        }
      } else if (e.keyCode === ne || e.keyCode === re || e.keyCode === ae || e.keyCode === ie) {
        var b = void 0;
        e.keyCode === ne && e.shiftKey ? b = ["(", ")"] : e.keyCode === re ? e.shiftKey ? b = ["{", "}"] : b = ["[", "]"] : e.keyCode === ae ? e.shiftKey ? b = ['"', '"'] : b = ["'", "'"] : e.keyCode === ie && !e.shiftKey && (b = ["`", "`"]), r !== u && b && (e.preventDefault(), S({
          value: n.substring(0, r) + b[0] + n.substring(r, u) + b[1] + n.substring(u),
          // Update caret position
          selectionStart: r,
          selectionEnd: u + 2
        }));
      } else (L ? (
        // Trigger undo with ⌘+Z on Mac
        e.metaKey && e.keyCode === R
      ) : (
        // Trigger undo with Ctrl+Z on other platforms
        e.ctrlKey && e.keyCode === R
      )) && !e.shiftKey && !e.altKey ? (e.preventDefault(), we()) : (L ? (
        // Trigger redo with ⌘+Shift+Z on Mac
        e.metaKey && e.keyCode === R && e.shiftKey
      ) : We ? (
        // Trigger redo with Ctrl+Y on Windows
        e.ctrlKey && e.keyCode === Be
      ) : (
        // Trigger redo with Ctrl+Shift+Z on other platforms
        e.ctrlKey && e.keyCode === R && e.shiftKey
      )) && !e.altKey ? (e.preventDefault(), xe()) : e.keyCode === Ne && e.ctrlKey && (!L || e.shiftKey) && (e.preventDefault(), Ke(function(j) {
        return !j;
      }));
    }
  }, De = function(e) {
    var i = e.currentTarget, n = i.value, r = i.selectionStart, u = i.selectionEnd;
    P({
      value: n,
      selectionStart: r,
      selectionEnd: u
    }, !0), T(n);
  };
  return h.useEffect(function() {
    $();
  }, [$]), h.useImperativeHandle(s, function() {
    return {
      get session() {
        return {
          history: c.current
        };
      },
      set session(e) {
        c.current = e.history;
      }
    };
  }, []), h.createElement(
    "div",
    f({}, ke, { style: f(f({}, D.container), Ee) }),
    h.createElement("pre", f({ className: me, "aria-hidden": "true", style: f(f(f({}, D.editor), D.highlight), Z) }, typeof F == "string" ? { dangerouslySetInnerHTML: { __html: F + "<br />" } } : { children: F })),
    h.createElement("textarea", { ref: function(e) {
      return I.current = e;
    }, style: f(f(f({}, D.editor), D.textarea), Z), className: z + (G ? " ".concat(G) : ""), id: Ce, value: Q, onChange: De, onKeyDown: je, onClick: ge, onKeyUp: ye, onFocus: he, onBlur: ve, disabled: l, form: k, maxLength: ue, minLength: fe, name: de, placeholder: pe, readOnly: be, required: _e, autoFocus: o, autoCapitalize: "off", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "data-gramm": !1 }),
    h.createElement("style", { dangerouslySetInnerHTML: { __html: Ye } })
  );
}), D = {
  container: {
    position: "relative",
    textAlign: "left",
    boxSizing: "border-box",
    padding: 0,
    overflow: "hidden"
  },
  textarea: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    resize: "none",
    color: "inherit",
    overflow: "hidden",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    WebkitTextFillColor: "transparent"
  },
  highlight: {
    position: "relative",
    pointerEvents: "none"
  },
  editor: {
    margin: 0,
    border: 0,
    background: "none",
    boxSizing: "inherit",
    display: "inherit",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontStyle: "inherit",
    fontVariantLigatures: "inherit",
    fontWeight: "inherit",
    letterSpacing: "inherit",
    lineHeight: "inherit",
    tabSize: "inherit",
    textIndent: "inherit",
    textRendering: "inherit",
    textTransform: "inherit",
    whiteSpace: "pre-wrap",
    wordBreak: "keep-all",
    overflowWrap: "break-word"
  }
}, He = W.default = Ae;
const Ge = /* @__PURE__ */ Pe({
  __proto__: null,
  default: He
}, [W]);
export {
  Ge as i
};
//# sourceMappingURL=index-BjM9QVRt.js.map
