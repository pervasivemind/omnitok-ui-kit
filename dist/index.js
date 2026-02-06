import { jsxs as C, jsx as m, Fragment as Ke } from "react/jsx-runtime";
import * as X from "react";
import ce, { forwardRef as oe, createElement as Mn, useState as De, useContext as qt, createContext as Zo, useCallback as me, useEffect as Ne, useRef as te, useLayoutEffect as Xa, useMemo as Ye, useReducer as Ja, useImperativeHandle as Za, Fragment as Qa } from "react";
import es, { flushSync as Qo } from "react-dom";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ei = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mr = (e) => {
  const t = ns(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rs = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = oe(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, c) => Mn(
    "svg",
    {
      ref: c,
      ...rs,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: ei("lucide", o),
      ...!i && !os(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([l, u]) => Mn(l, u)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z = (e, t) => {
  const n = oe(
    ({ className: r, ...o }, i) => Mn(is, {
      ref: i,
      iconNode: t,
      className: ei(
        `lucide-${ts(Mr(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Mr(e), n;
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], ss = Z("arrow-down", as);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], ls = Z("arrow-up-down", cs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], ps = Z("arrow-up", ds);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], fs = Z("bell", us);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], gs = Z("check", ms);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ti = Z("chevron-down", vs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], bs = Z("chevron-left", hs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ni = Z("chevron-right", xs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], ws = Z("chevrons-left", ys);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], Ds = Z("chevrons-right", Es);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], ri = Z("circle-alert", Ns);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], oi = Z("circle-check-big", Os);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], Cs = Z("eye-off", Ss);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], _s = Z("eye", Is);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ks = Z("file-text", As);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], Ts = Z("file", Ps);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Xe = Z("grip-vertical", Rs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Ms = Z("house", js);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Ls = Z("image", $s);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], ii = Z("info", Bs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Fs = Z("loader-circle", Vs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Gs = Z("lock", zs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], qs = Z("mail", Ws);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], Hs = Z("menu", Us);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [["path", { d: "M5 12h14", key: "1ays0h" }]], Ks = Z("minus", Ys);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], Js = Z("music", Xs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
], Qs = Z("panel-left-close", Zs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], tc = Z("search", ec);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], ai = Z("triangle-alert", nc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], oc = Z("upload", rc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], ac = Z("video", ic);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ut = Z("x", sc);
function si(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = si(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function cc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = si(e)) && (r && (r += " "), r += t);
  return r;
}
function S(...e) {
  return cc(e);
}
const lc = {
  primary: "bg-primary text-white hover:bg-primary-dark active:bg-primary-dark focus:ring-primary",
  secondary: "bg-neutral-200 text-neutral-800 hover:bg-neutral-300 active:bg-neutral-400 focus:ring-neutral-400",
  ghost: "bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 focus:ring-neutral-300",
  danger: "bg-error text-white hover:bg-error-dark active:bg-error-dark focus:ring-error",
  accent: "bg-accent text-white hover:bg-accent-dark active:bg-accent-dark focus:ring-accent",
  outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary"
}, dc = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-4 py-2 text-base gap-2",
  lg: "px-6 py-3 text-lg gap-2.5"
}, Rt = oe(
  ({
    variant: e = "primary",
    size: t = "md",
    loading: n = !1,
    leftIcon: r,
    rightIcon: o,
    fullWidth: i = !1,
    disabled: a,
    className: s,
    children: c,
    ...l
  }, u) => {
    const d = a || n;
    return /* @__PURE__ */ C(
      "button",
      {
        ref: u,
        disabled: d,
        className: S(
          // Base styles
          "inline-flex items-center justify-center font-medium rounded-md",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          // Variant styles
          lc[e],
          // Size styles
          dc[t],
          // Full width
          i && "w-full",
          // Disabled state
          d && "opacity-50 cursor-not-allowed",
          s
        ),
        ...l,
        children: [
          n ? /* @__PURE__ */ m(Fs, { className: "animate-spin", size: t === "sm" ? 14 : t === "lg" ? 20 : 16 }) : r,
          c,
          !n && o
        ]
      }
    );
  }
);
Rt.displayName = "Button";
const pc = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-4 py-3 text-lg"
}, uc = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, fc = {
  sm: "pr-8",
  md: "pr-10",
  lg: "pr-12"
}, $n = oe(
  ({
    size: e = "md",
    label: t,
    helperText: n,
    error: r,
    leftIcon: o,
    rightIcon: i,
    fullWidth: a = !1,
    disabled: s,
    className: c,
    id: l,
    ...u
  }, d) => {
    const p = l || `input-${Math.random().toString(36).slice(2, 9)}`, f = !!r;
    return /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ m(
        "label",
        {
          htmlFor: p,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ C("div", { className: "relative", children: [
        o && /* @__PURE__ */ m("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400", children: o }),
        /* @__PURE__ */ m(
          "input",
          {
            ref: d,
            id: p,
            disabled: s,
            className: S(
              // Base styles
              "w-full rounded-md border bg-white",
              "transition-colors duration-200",
              "placeholder:text-neutral-400",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              pc[e],
              // Icon padding
              o && uc[e],
              i && fc[e],
              // Border color
              f ? "border-error focus:ring-error focus:border-error" : "border-neutral-300",
              // Disabled state
              s && "bg-neutral-100 cursor-not-allowed opacity-60",
              c
            ),
            "aria-invalid": f,
            "aria-describedby": f ? `${p}-error` : n ? `${p}-helper` : void 0,
            ...u
          }
        ),
        i && /* @__PURE__ */ m("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400", children: i })
      ] }),
      f && /* @__PURE__ */ m("p", { id: `${p}-error`, className: "text-sm text-error", children: r }),
      !f && n && /* @__PURE__ */ m("p", { id: `${p}-helper`, className: "text-sm text-neutral-500", children: n })
    ] });
  }
);
$n.displayName = "Input";
const mc = {
  sm: "px-3 py-1.5 text-sm pr-8",
  md: "px-4 py-2 text-base pr-10",
  lg: "px-4 py-3 text-lg pr-12"
}, gc = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, vc = oe(
  ({
    size: e = "md",
    label: t,
    helperText: n,
    error: r,
    options: o,
    placeholder: i,
    fullWidth: a = !1,
    disabled: s,
    leftIcon: c,
    className: l,
    id: u,
    ...d
  }, p) => {
    const f = u || `select-${Math.random().toString(36).slice(2, 9)}`, h = !!r;
    return /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ m(
        "label",
        {
          htmlFor: f,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ C("div", { className: "relative", children: [
        c && /* @__PURE__ */ m("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none", children: c }),
        /* @__PURE__ */ C(
          "select",
          {
            ref: p,
            id: f,
            disabled: s,
            className: S(
              // Base styles
              "w-full rounded-md border bg-white appearance-none cursor-pointer",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              mc[e],
              // Icon padding
              c && gc[e],
              // Border color
              h ? "border-error focus:ring-error focus:border-error" : "border-neutral-300",
              // Disabled state
              s && "bg-neutral-100 cursor-not-allowed opacity-60",
              l
            ),
            "aria-invalid": h,
            "aria-describedby": h ? `${f}-error` : n ? `${f}-helper` : void 0,
            ...d,
            children: [
              i && /* @__PURE__ */ m("option", { value: "", disabled: !0, children: i }),
              o.map((b) => /* @__PURE__ */ m("option", { value: b.value, disabled: b.disabled, children: b.label }, b.value))
            ]
          }
        ),
        /* @__PURE__ */ m(
          ti,
          {
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none",
            size: e === "sm" ? 14 : e === "lg" ? 20 : 16
          }
        )
      ] }),
      h && /* @__PURE__ */ m("p", { id: `${f}-error`, className: "text-sm text-error", children: r }),
      !h && n && /* @__PURE__ */ m("p", { id: `${f}-helper`, className: "text-sm text-neutral-500", children: n })
    ] });
  }
);
vc.displayName = "Select";
const hc = oe(
  ({
    label: e,
    helperText: t,
    error: n,
    fullWidth: r = !1,
    showCount: o = !1,
    maxLength: i,
    disabled: a,
    className: s,
    id: c,
    value: l,
    ...u
  }, d) => {
    const p = c || `textarea-${Math.random().toString(36).slice(2, 9)}`, f = !!n, h = typeof l == "string" ? l.length : 0;
    return /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1.5", r && "w-full"), children: [
      e && /* @__PURE__ */ m(
        "label",
        {
          htmlFor: p,
          className: "text-sm font-medium text-neutral-700",
          children: e
        }
      ),
      /* @__PURE__ */ m(
        "textarea",
        {
          ref: d,
          id: p,
          disabled: a,
          maxLength: i,
          value: l,
          className: S(
            // Base styles
            "w-full rounded-md border bg-white px-4 py-3",
            "transition-colors duration-200",
            "placeholder:text-neutral-400",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
            "resize-y min-h-[100px]",
            // Border color
            f ? "border-error focus:ring-error focus:border-error" : "border-neutral-300",
            // Disabled state
            a && "bg-neutral-100 cursor-not-allowed opacity-60",
            s
          ),
          "aria-invalid": f,
          "aria-describedby": f ? `${p}-error` : t ? `${p}-helper` : void 0,
          ...u
        }
      ),
      /* @__PURE__ */ C("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ C("div", { children: [
          f && /* @__PURE__ */ m("p", { id: `${p}-error`, className: "text-sm text-error", children: n }),
          !f && t && /* @__PURE__ */ m("p", { id: `${p}-helper`, className: "text-sm text-neutral-500", children: t })
        ] }),
        o && i && /* @__PURE__ */ C("span", { className: "text-sm text-neutral-500", children: [
          h,
          "/",
          i
        ] })
      ] })
    ] });
  }
);
hc.displayName = "Textarea";
const bc = oe(
  ({ label: e, description: t, error: n, indeterminate: r, disabled: o, className: i, id: a, ...s }, c) => {
    const l = a || `checkbox-${Math.random().toString(36).slice(2, 9)}`, u = !!n;
    return /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1", i), children: [
      /* @__PURE__ */ C(
        "label",
        {
          htmlFor: l,
          className: S(
            "flex items-start gap-3 cursor-pointer",
            o && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ C("div", { className: "relative flex items-center justify-center", children: [
              /* @__PURE__ */ m(
                "input",
                {
                  ref: c,
                  type: "checkbox",
                  id: l,
                  disabled: o,
                  className: "peer sr-only",
                  "aria-invalid": u,
                  ...s
                }
              ),
              /* @__PURE__ */ m(
                "div",
                {
                  className: S(
                    "w-5 h-5 rounded border-2 transition-colors",
                    "flex items-center justify-center",
                    "peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2",
                    "peer-checked:bg-primary peer-checked:border-primary",
                    u ? "border-error" : "border-neutral-300 peer-hover:border-neutral-400"
                  ),
                  children: r ? /* @__PURE__ */ m(Ks, { className: "w-3 h-3 text-white opacity-0 peer-checked:opacity-100" }) : /* @__PURE__ */ m(gs, { className: "w-3 h-3 text-white opacity-0 peer-checked:opacity-100" })
                }
              )
            ] }),
            (e || t) && /* @__PURE__ */ C("div", { className: "flex flex-col", children: [
              e && /* @__PURE__ */ m("span", { className: "text-sm font-medium text-neutral-700", children: e }),
              t && /* @__PURE__ */ m("span", { className: "text-sm text-neutral-500", children: t })
            ] })
          ]
        }
      ),
      u && /* @__PURE__ */ m("p", { className: "text-sm text-error ml-8", children: n })
    ] });
  }
);
bc.displayName = "Checkbox";
const xc = oe(
  ({ label: e, description: t, error: n, disabled: r, className: o, id: i, ...a }, s) => {
    const c = i || `radio-${Math.random().toString(36).slice(2, 9)}`, l = !!n;
    return /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1", o), children: [
      /* @__PURE__ */ C(
        "label",
        {
          htmlFor: c,
          className: S(
            "flex items-start gap-3 cursor-pointer",
            r && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ C("div", { className: "relative flex items-center justify-center", children: [
              /* @__PURE__ */ m(
                "input",
                {
                  ref: s,
                  type: "radio",
                  id: c,
                  disabled: r,
                  className: "peer sr-only",
                  "aria-invalid": l,
                  ...a
                }
              ),
              /* @__PURE__ */ m(
                "div",
                {
                  className: S(
                    "w-5 h-5 rounded-full border-2 transition-colors",
                    "flex items-center justify-center",
                    "peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2",
                    "peer-checked:border-primary",
                    l ? "border-error" : "border-neutral-300 peer-hover:border-neutral-400"
                  ),
                  children: /* @__PURE__ */ m("div", { className: "w-2.5 h-2.5 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform" })
                }
              )
            ] }),
            (e || t) && /* @__PURE__ */ C("div", { className: "flex flex-col", children: [
              e && /* @__PURE__ */ m("span", { className: "text-sm font-medium text-neutral-700", children: e }),
              t && /* @__PURE__ */ m("span", { className: "text-sm text-neutral-500", children: t })
            ] })
          ]
        }
      ),
      l && /* @__PURE__ */ m("p", { className: "text-sm text-error ml-8", children: n })
    ] });
  }
);
xc.displayName = "Radio";
const yc = {
  default: "bg-white border border-neutral-200 rounded-lg",
  bordered: "bg-white border-2 border-neutral-300 rounded-lg",
  elevated: "bg-white border border-neutral-200 shadow-card rounded-lg"
}, wc = oe(
  ({ children: e, noPadding: t = !1, hoverable: n = !1, variant: r = "default", className: o, ...i }, a) => /* @__PURE__ */ m(
    "div",
    {
      ref: a,
      className: S(
        yc[r],
        !t && "p-4",
        n && "transition-shadow transition-colors duration-200 hover:shadow-card-hover hover:border-primary/30 cursor-pointer",
        o
      ),
      ...i,
      children: e
    }
  )
);
wc.displayName = "Card";
const Ec = oe(
  ({ children: e, action: t, className: n, ...r }, o) => /* @__PURE__ */ C(
    "div",
    {
      ref: o,
      className: S(
        "flex items-center justify-between px-4 py-3",
        "bg-gradient-to-r from-primary to-primary-dark text-white border-b border-white/15",
        n
      ),
      ...r,
      children: [
        /* @__PURE__ */ m("div", { className: "font-semibold text-lg", children: e }),
        t && /* @__PURE__ */ m("div", { children: t })
      ]
    }
  )
);
Ec.displayName = "CardHeader";
const Dc = oe(
  ({ children: e, className: t, ...n }, r) => /* @__PURE__ */ m("div", { ref: r, className: S("p-4", t), ...n, children: e })
);
Dc.displayName = "CardBody";
const Nc = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
  between: "justify-between"
}, Oc = oe(
  ({ children: e, align: t = "right", className: n, ...r }, o) => /* @__PURE__ */ m(
    "div",
    {
      ref: o,
      className: S(
        "flex items-center gap-3 px-4 py-3 bg-neutral-50 border-t border-neutral-200",
        Nc[t],
        n
      ),
      ...r,
      children: e
    }
  )
);
Oc.displayName = "CardFooter";
const Sc = {
  default: "bg-neutral-100 text-neutral-700",
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  success: "bg-success/10 text-success-dark",
  warning: "bg-warning/10 text-warning-dark",
  error: "bg-error/10 text-error-dark",
  info: "bg-info/10 text-info-dark"
}, Cc = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base"
}, Ic = {
  default: "bg-neutral-400",
  primary: "bg-primary",
  accent: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  info: "bg-info"
}, _c = oe(
  ({ children: e, variant: t = "default", size: n = "md", pill: r = !1, dot: o = !1, className: i, ...a }, s) => o ? /* @__PURE__ */ m(
    "span",
    {
      ref: s,
      className: S(
        "inline-block rounded-full",
        n === "sm" && "w-2 h-2",
        n === "md" && "w-2.5 h-2.5",
        n === "lg" && "w-3 h-3",
        Ic[t],
        i
      ),
      ...a
    }
  ) : /* @__PURE__ */ m(
    "span",
    {
      ref: s,
      className: S(
        "inline-flex items-center font-medium",
        r ? "rounded-full" : "rounded-md",
        Sc[t],
        Cc[n],
        i
      ),
      ...a,
      children: e
    }
  )
);
_c.displayName = "Badge";
const $r = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl"
}, Ac = {
  xs: "w-1.5 h-1.5 border",
  sm: "w-2 h-2 border",
  md: "w-2.5 h-2.5 border-2",
  lg: "w-3 h-3 border-2",
  xl: "w-4 h-4 border-2"
}, kc = {
  online: "bg-success",
  offline: "bg-neutral-400",
  busy: "bg-error",
  away: "bg-warning"
}, ci = oe(
  ({ size: e = "md", src: t, alt: n = "", initials: r, status: o, className: i, ...a }, s) => {
    const c = (l) => l ? l.split(" ").map((u) => u[0]).join("").toUpperCase().slice(0, 2) : "?";
    return /* @__PURE__ */ C("div", { ref: s, className: S("relative inline-block", i), children: [
      t ? /* @__PURE__ */ m(
        "img",
        {
          src: t,
          alt: n,
          className: S(
            "rounded-full object-cover",
            $r[e]
          ),
          ...a
        }
      ) : /* @__PURE__ */ m(
        "div",
        {
          className: S(
            "rounded-full flex items-center justify-center font-medium",
            "bg-primary text-white",
            $r[e]
          ),
          children: c(r || n)
        }
      ),
      o && /* @__PURE__ */ m(
        "span",
        {
          className: S(
            "absolute bottom-0 right-0 rounded-full border-white",
            Ac[e],
            kc[o]
          )
        }
      )
    ] });
  }
);
ci.displayName = "Avatar";
const Pc = {
  info: "bg-info/10 border-info/30 text-info-dark",
  success: "bg-success/10 border-success/30 text-success-dark",
  warning: "bg-warning/10 border-warning/30 text-warning-dark",
  error: "bg-error/10 border-error/30 text-error-dark"
}, Tc = {
  info: ii,
  success: oi,
  warning: ai,
  error: ri
}, Rc = oe(
  ({
    variant: e = "info",
    title: t,
    children: n,
    dismissible: r = !1,
    onDismiss: o,
    hideIcon: i = !1,
    className: a,
    ...s
  }, c) => {
    const l = Tc[e];
    return /* @__PURE__ */ C(
      "div",
      {
        ref: c,
        role: "alert",
        className: S(
          "flex gap-3 p-4 rounded-lg border",
          Pc[e],
          a
        ),
        ...s,
        children: [
          !i && /* @__PURE__ */ m(l, { className: "flex-shrink-0 w-5 h-5 mt-0.5" }),
          /* @__PURE__ */ C("div", { className: "flex-1 min-w-0", children: [
            t && /* @__PURE__ */ m("h5", { className: "font-semibold mb-1", children: t }),
            /* @__PURE__ */ m("div", { className: "text-sm", children: n })
          ] }),
          r && /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              onClick: o,
              className: "flex-shrink-0 p-1 rounded hover:bg-black/5 transition-colors",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ m(Ut, { className: "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
Rc.displayName = "Alert";
const li = ({
  item: e,
  collapsed: t,
  level: n = 0,
  activeId: r,
  onItemClick: o
}) => {
  const [i, a] = De(!1), s = e.children && e.children.length > 0, c = e.active || e.id === r, l = () => {
    var p;
    s ? a(!i) : (o == null || o(e), (p = e.onClick) == null || p.call(e));
  }, u = /* @__PURE__ */ C(Ke, { children: [
    /* @__PURE__ */ m("span", { className: "flex-shrink-0 w-4 h-4 flex items-center justify-center text-[16px]", children: e.icon || /* @__PURE__ */ m("span", { className: "w-1" }) }),
    !t && /* @__PURE__ */ C(Ke, { children: [
      /* @__PURE__ */ m("span", { className: "flex-1 truncate text-[13px]", children: e.label }),
      e.badge && /* @__PURE__ */ m("span", { className: "px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-accent text-white", children: e.badge }),
      s && /* @__PURE__ */ m(
        ti,
        {
          className: S(
            "w-3.5 h-3.5 transition-transform",
            i && "rotate-180"
          )
        }
      )
    ] })
  ] }), d = S(
    "flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg",
    "transition-all duration-200 cursor-pointer",
    "text-white/80 hover:text-white hover:bg-white/10",
    c && [
      "gradient-active",
      "!text-white",
      "mx-2",
      "font-medium"
    ],
    n > 0 && "ml-4",
    t && "justify-center px-2"
  );
  return /* @__PURE__ */ C("div", { children: [
    e.href ? /* @__PURE__ */ m("a", { href: e.href, className: d, onClick: l, children: u }) : /* @__PURE__ */ m("button", { type: "button", className: S(d, "w-full text-left"), onClick: l, children: u }),
    s && i && !t && /* @__PURE__ */ m("div", { className: "mt-1 space-y-1", children: e.children.map((p) => /* @__PURE__ */ m(
      li,
      {
        item: p,
        collapsed: t,
        level: n + 1,
        activeId: r,
        onItemClick: o
      },
      p.id
    )) })
  ] });
}, di = oe(
  ({
    items: e,
    logo: t,
    logoCollapsed: n,
    systemName: r,
    footer: o,
    collapsed: i = !1,
    onCollapsedChange: a,
    collapsible: s = !0,
    activeId: c,
    onItemClick: l,
    className: u,
    ...d
  }, p) => {
    const f = t, h = n ?? t;
    return /* @__PURE__ */ C(
      "aside",
      {
        ref: p,
        className: S(
          "flex flex-col h-screen bg-sidebar text-white overflow-hidden flex-shrink-0",
          "transition-all duration-300",
          i ? "w-16" : "w-64",
          u
        ),
        ...d,
        children: [
          /* @__PURE__ */ m(
            "div",
            {
              className: S(
                "flex items-center h-14 border-b border-white/10 px-3",
                i && "justify-center px-2"
              ),
              children: i ? /* @__PURE__ */ m(
                "button",
                {
                  type: "button",
                  onClick: () => a == null ? void 0 : a(!1),
                  className: "w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors",
                  "aria-label": "Expand sidebar",
                  children: h || /* @__PURE__ */ m("span", { className: "text-xs text-white", children: "Logo" })
                }
              ) : /* @__PURE__ */ C(Ke, { children: [
                /* @__PURE__ */ C("div", { className: "flex flex-col flex-1 min-w-0", children: [
                  /* @__PURE__ */ m("div", { className: "flex items-center justify-center", children: f || /* @__PURE__ */ m("span", { className: "text-lg font-bold text-white", children: "Omnitok" }) }),
                  r && /* @__PURE__ */ m("span", { className: "text-[10px] text-white/50 uppercase tracking-wider mt-0.5 text-center leading-tight", children: r })
                ] }),
                s && /* @__PURE__ */ m(
                  "button",
                  {
                    type: "button",
                    onClick: () => a == null ? void 0 : a(!0),
                    className: "p-1.5 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0 ml-2",
                    "aria-label": "Collapse sidebar",
                    children: /* @__PURE__ */ m(Qs, { className: "w-4 h-4" })
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ m("nav", { className: "flex-1 overflow-y-auto overflow-x-hidden py-3 space-y-0.5 scrollbar-thin", children: e.map((b) => /* @__PURE__ */ m(
            li,
            {
              item: b,
              collapsed: i,
              activeId: c,
              onItemClick: l
            },
            b.id
          )) }),
          o && /* @__PURE__ */ m("div", { className: "p-3 border-t border-white/10", children: o })
        ]
      }
    );
  }
);
di.displayName = "Sidebar";
const pi = oe(
  ({
    title: e,
    breadcrumb: t,
    searchPlaceholder: n = "Search...",
    showSearch: r = !0,
    searchValue: o,
    onSearchChange: i,
    showNotifications: a = !0,
    notificationCount: s,
    onNotificationClick: c,
    user: l,
    onUserClick: u,
    onMenuToggle: d,
    showMenuToggle: p = !1,
    actions: f,
    className: h,
    ...b
  }, x) => /* @__PURE__ */ C(
    "header",
    {
      ref: x,
      className: S(
        "flex items-center justify-between h-16 px-6 bg-white border-b border-neutral-200",
        h
      ),
      ...b,
      children: [
        /* @__PURE__ */ C("div", { className: "flex items-center gap-4", children: [
          p && /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              onClick: d,
              className: "p-2 rounded-lg hover:bg-neutral-100 lg:hidden",
              "aria-label": "Toggle menu",
              children: /* @__PURE__ */ m(Hs, { className: "w-5 h-5 text-neutral-600" })
            }
          ),
          /* @__PURE__ */ C("div", { className: "flex flex-col", children: [
            t,
            e && /* @__PURE__ */ m("h1", { className: "text-lg font-semibold text-neutral-900", children: e })
          ] })
        ] }),
        /* @__PURE__ */ C("div", { className: "flex items-center gap-4", children: [
          r && /* @__PURE__ */ C("div", { className: "relative hidden md:block", children: [
            /* @__PURE__ */ m(tc, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" }),
            /* @__PURE__ */ m(
              "input",
              {
                type: "search",
                placeholder: n,
                value: o,
                onChange: (w) => i == null ? void 0 : i(w.target.value),
                className: S(
                  "w-64 pl-10 pr-4 py-2 text-sm rounded-lg",
                  "bg-neutral-100 border-none",
                  "placeholder:text-neutral-400",
                  "focus:outline-none focus:ring-2 focus:ring-primary"
                )
              }
            )
          ] }),
          f,
          a && /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              onClick: c,
              className: "relative p-2 rounded-lg hover:bg-neutral-100 transition-colors",
              "aria-label": "Notifications",
              children: [
                /* @__PURE__ */ m(fs, { className: "w-5 h-5 text-neutral-600" }),
                s !== void 0 && s > 0 && /* @__PURE__ */ m("span", { className: "absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-4 h-4 text-xs font-medium text-white bg-accent rounded-full flex items-center justify-center", children: s > 9 ? "9+" : s })
              ]
            }
          ),
          l && /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              onClick: u,
              className: "flex items-center gap-3 p-1 rounded-lg hover:bg-neutral-100 transition-colors",
              children: [
                /* @__PURE__ */ m(
                  ci,
                  {
                    src: l.avatar,
                    alt: l.name,
                    initials: l.name,
                    size: "sm"
                  }
                ),
                /* @__PURE__ */ C("div", { className: "hidden lg:flex flex-col items-start", children: [
                  /* @__PURE__ */ m("span", { className: "text-sm font-medium text-neutral-900", children: l.name }),
                  l.role && /* @__PURE__ */ m("span", { className: "text-xs text-neutral-500", children: l.role })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  )
);
pi.displayName = "Header";
const jc = oe(
  ({
    children: e,
    sidebar: t,
    sidebarItems: n = [],
    logo: r,
    logoCollapsed: o,
    systemName: i,
    sidebarFooter: a,
    activeSidebarId: s,
    onSidebarItemClick: c,
    headerTitle: l,
    headerBreadcrumb: u,
    user: d,
    onUserClick: p,
    notificationCount: f,
    onNotificationClick: h,
    showSearch: b = !0,
    searchValue: x,
    onSearchChange: w,
    headerActions: N,
    header: E,
    hideSidebar: y = !1,
    hideHeader: v = !1,
    rightPanel: D,
    rightPanelWidth: A = "360px",
    className: j,
    ...z
  }, F) => {
    const [ie, W] = De(!1), [K, H] = De(!1), J = !!t, ge = !!E;
    return /* @__PURE__ */ C("div", { ref: F, className: S("flex h-screen bg-neutral-50", j), ...z, children: [
      !y && /* @__PURE__ */ C(Ke, { children: [
        !J && K && /* @__PURE__ */ m(
          "div",
          {
            className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
            onClick: () => H(!1)
          }
        ),
        /* @__PURE__ */ m(
          "div",
          {
            className: S(
              "fixed lg:static inset-y-0 left-0 z-50 lg:z-auto",
              "transform lg:transform-none transition-transform duration-300",
              !J && K ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
              J && "translate-x-0"
            ),
            children: J ? t : /* @__PURE__ */ m(
              di,
              {
                items: n,
                logo: r,
                logoCollapsed: o,
                systemName: i,
                footer: a,
                collapsed: ie,
                onCollapsedChange: W,
                activeId: s,
                onItemClick: (ye) => {
                  c == null || c(ye), H(!1);
                }
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ C("div", { className: "flex-1 flex flex-col min-w-0", children: [
        !v && (ge ? E : /* @__PURE__ */ m(
          pi,
          {
            title: l,
            breadcrumb: u,
            showSearch: b,
            searchValue: x,
            onSearchChange: w,
            showNotifications: !0,
            notificationCount: f,
            onNotificationClick: h,
            user: d,
            onUserClick: p,
            showMenuToggle: !y,
            onMenuToggle: () => H(!K),
            actions: N
          }
        )),
        /* @__PURE__ */ C("div", { className: "flex-1 flex overflow-hidden", children: [
          /* @__PURE__ */ m("main", { className: "flex-1 overflow-y-auto p-6", children: e }),
          D && /* @__PURE__ */ m(
            "aside",
            {
              className: "hidden xl:block border-l border-neutral-200 bg-white overflow-y-auto",
              style: { width: A },
              children: D
            }
          )
        ] })
      ] })
    ] });
  }
);
jc.displayName = "Layout";
const Mc = oe(
  ({
    items: e,
    showHomeIcon: t = !1,
    separator: n,
    maxItems: r,
    className: o,
    ...i
  }, a) => {
    const s = () => n || /* @__PURE__ */ m(ni, { className: "w-4 h-4 text-neutral-400 mx-2" }), c = (d, p, f) => {
      const h = /* @__PURE__ */ C(Ke, { children: [
        p === 0 && t && /* @__PURE__ */ m(Ms, { className: "w-4 h-4 mr-1" }),
        d.icon && /* @__PURE__ */ m("span", { className: "mr-1", children: d.icon }),
        d.label
      ] }), b = S(
        "inline-flex items-center text-sm",
        f ? "font-medium text-neutral-900" : "text-neutral-500 hover:text-neutral-700 transition-colors"
      );
      return d.href && !f ? /* @__PURE__ */ m("a", { href: d.href, className: b, children: h }) : /* @__PURE__ */ m("span", { className: b, children: h });
    };
    let l = e;
    if (r && e.length > r && r) {
      const d = e.slice(0, 1), p = e.slice(-(r - 2));
      l = [
        ...d,
        { label: "..." },
        ...p
      ];
    }
    return /* @__PURE__ */ m("nav", { ref: a, "aria-label": "Breadcrumb", className: o, ...i, children: /* @__PURE__ */ m("ol", { className: "flex items-center flex-wrap", children: l.map((d, p) => {
      const f = p === l.length - 1;
      return /* @__PURE__ */ C("li", { className: "inline-flex items-center", children: [
        c(d, p, f),
        !f && s()
      ] }, p);
    }) }) });
  }
);
Mc.displayName = "Breadcrumb";
function $c({
  columns: e,
  data: t,
  rowKey: n,
  sortColumn: r,
  sortDirection: o,
  onSort: i,
  onRowClick: a,
  loading: s = !1,
  emptyMessage: c = "No data available",
  striped: l = !1,
  hoverable: u = !0,
  compact: d = !1,
  className: p,
  ...f
}, h) {
  const b = (y, v) => typeof n == "function" ? n(y) : String(y[n] ?? v), x = (y, v, D) => v.render ? v.render(y, D) : v.accessor ? String(y[v.accessor] ?? "") : "", w = (y) => {
    if (!y.sortable || !i) return;
    let v = "asc";
    r === y.key && (o === "asc" ? v = "desc" : o === "desc" && (v = null)), i(y.key, v);
  }, N = (y) => {
    if (!y.sortable) return null;
    const v = r === y.key, D = S(
      "w-4 h-4 ml-1",
      v ? "text-white" : "text-white/60"
    );
    return v && o === "asc" ? /* @__PURE__ */ m(ps, { className: D }) : v && o === "desc" ? /* @__PURE__ */ m(ss, { className: D }) : /* @__PURE__ */ m(ls, { className: D });
  }, E = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  return /* @__PURE__ */ m("div", { className: "overflow-x-auto", children: /* @__PURE__ */ C(
    "table",
    {
      ref: h,
      className: S("w-full border-collapse", p),
      ...f,
      children: [
        /* @__PURE__ */ m("thead", { className: "bg-primary text-white", children: /* @__PURE__ */ m("tr", { children: e.map((y) => /* @__PURE__ */ m(
          "th",
          {
            className: S(
              "font-semibold text-white text-sm",
              d ? "px-3 py-2" : "px-4 py-3",
              E[y.align || "left"],
              y.sortable && "cursor-pointer select-none hover:bg-primary-dark"
            ),
            style: { width: y.width },
            onClick: () => w(y),
            children: /* @__PURE__ */ C("div", { className: S(
              "flex items-center",
              y.align === "center" && "justify-center",
              y.align === "right" && "justify-end"
            ), children: [
              y.header,
              N(y)
            ] })
          },
          y.key
        )) }) }),
        /* @__PURE__ */ m("tbody", { className: "bg-white divide-y divide-neutral-200", children: s ? /* @__PURE__ */ m("tr", { children: /* @__PURE__ */ m(
          "td",
          {
            colSpan: e.length,
            className: "px-4 py-8 text-center text-neutral-500",
            children: /* @__PURE__ */ C("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ m("div", { className: "w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" }),
              "Loading..."
            ] })
          }
        ) }) : t.length === 0 ? /* @__PURE__ */ m("tr", { children: /* @__PURE__ */ m(
          "td",
          {
            colSpan: e.length,
            className: "px-4 py-8 text-center text-neutral-500",
            children: c
          }
        ) }) : t.map((y, v) => /* @__PURE__ */ m(
          "tr",
          {
            className: S(
              "transition-colors",
              l && v % 2 === 1 && "bg-neutral-50",
              u && "hover:bg-neutral-50",
              a && "cursor-pointer"
            ),
            onClick: () => a == null ? void 0 : a(y, v),
            children: e.map((D) => /* @__PURE__ */ m(
              "td",
              {
                className: S(
                  "text-neutral-700 text-sm",
                  d ? "px-3 py-2" : "px-4 py-3",
                  E[D.align || "left"]
                ),
                children: x(y, D, v)
              },
              D.key
            ))
          },
          b(y, v)
        )) })
      ]
    }
  ) });
}
const Fg = oe($c), ui = Zo(null), Lc = {
  default: {
    list: "bg-primary/10 p-1 rounded-lg",
    tab: "rounded-md",
    active: "bg-white shadow-sm text-primary font-semibold",
    inactive: "text-primary/70 hover:text-primary hover:bg-white/50"
  },
  pills: {
    list: "gap-2",
    tab: "rounded-full",
    active: "bg-gradient-to-r from-accent to-primary text-white shadow-md",
    inactive: "text-neutral-600 hover:bg-primary/10 hover:text-primary"
  },
  underline: {
    list: "border-b border-primary/20",
    tab: "border-b-2 -mb-px rounded-none",
    active: "border-accent text-primary font-semibold",
    inactive: "border-transparent text-neutral-500 hover:text-primary hover:border-primary/30"
  }
}, Bc = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg"
}, Vc = oe(
  ({
    items: e,
    activeId: t,
    defaultActiveId: n,
    onChange: r,
    variant: o = "default",
    fullWidth: i = !1,
    size: a = "md",
    className: s,
    children: c,
    ...l
  }, u) => {
    var x;
    const [d, p] = De(
      n || ((x = e[0]) == null ? void 0 : x.id) || ""
    ), f = t ?? d, h = Lc[o], b = (w) => {
      t === void 0 && p(w), r == null || r(w);
    };
    return /* @__PURE__ */ m(ui.Provider, { value: { activeId: f }, children: /* @__PURE__ */ C("div", { ref: u, className: s, ...l, children: [
      /* @__PURE__ */ m(
        "div",
        {
          role: "tablist",
          className: S(
            "flex",
            h.list,
            i && "w-full"
          ),
          children: e.map((w) => /* @__PURE__ */ C(
            "button",
            {
              role: "tab",
              type: "button",
              "aria-selected": f === w.id,
              "aria-controls": `tabpanel-${w.id}`,
              disabled: w.disabled,
              onClick: () => b(w.id),
              className: S(
                "flex items-center justify-center gap-2 font-medium transition-all min-w-0",
                h.tab,
                Bc[a],
                f === w.id ? h.active : h.inactive,
                i && "flex-1",
                w.disabled && "opacity-50 cursor-not-allowed"
              ),
              children: [
                w.icon,
                /* @__PURE__ */ m("span", { className: "truncate", children: w.label }),
                w.badge !== void 0 && /* @__PURE__ */ m(
                  "span",
                  {
                    className: S(
                      "px-1.5 py-0.5 text-xs font-medium rounded-full shrink-0",
                      f === w.id ? "bg-white/20" : "bg-neutral-200 text-neutral-600"
                    ),
                    children: w.badge
                  }
                )
              ]
            },
            w.id
          ))
        }
      ),
      c
    ] }) });
  }
);
Vc.displayName = "Tabs";
const Fc = oe(
  ({ id: e, children: t, className: n, ...r }, o) => {
    const i = qt(ui);
    if (!i)
      throw new Error("TabPanel must be used within Tabs");
    return i.activeId !== e ? null : /* @__PURE__ */ m(
      "div",
      {
        ref: o,
        role: "tabpanel",
        id: `tabpanel-${e}`,
        "aria-labelledby": e,
        className: S("pt-4", n),
        ...r,
        children: t
      }
    );
  }
);
Fc.displayName = "TabPanel";
const Lr = {
  sm: "h-8 min-w-8 text-sm",
  md: "h-10 min-w-10 text-base",
  lg: "h-12 min-w-12 text-lg"
}, zc = {
  sm: 14,
  md: 16,
  lg: 20
}, Gc = oe(
  ({
    currentPage: e,
    totalPages: t,
    onChange: n,
    siblingCount: r = 1,
    showFirstLast: o = !0,
    showInfo: i = !1,
    totalItems: a,
    itemsPerPage: s,
    disabled: c = !1,
    size: l = "md",
    className: u,
    ...d
  }, p) => {
    const h = (() => {
      const v = [], A = r * 2 + 3 + 2;
      if (t <= A)
        return Array.from({ length: t }, (W, K) => K + 1);
      const j = Math.max(e - r, 1), z = Math.min(e + r, t), F = j > 2, ie = z < t - 1;
      if (!F && ie) {
        const W = 1 + 2 * r + 1;
        for (let K = 1; K <= W; K++) v.push(K);
        v.push("ellipsis"), v.push(t);
      } else if (F && !ie) {
        v.push(1), v.push("ellipsis");
        const W = t - (2 * r + 1);
        for (let K = W; K <= t; K++) v.push(K);
      } else {
        v.push(1), v.push("ellipsis");
        for (let W = j; W <= z; W++) v.push(W);
        v.push("ellipsis"), v.push(t);
      }
      return v;
    })(), b = zc[l], x = S(
      "flex items-center justify-center rounded-md transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
      Lr[l],
      c && "opacity-50 cursor-not-allowed"
    ), w = ({
      page: v,
      isActive: D
    }) => /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        onClick: () => !c && n(v),
        disabled: c,
        "aria-current": D ? "page" : void 0,
        className: S(
          x,
          "px-3",
          D ? "bg-primary text-white" : "text-neutral-600 hover:bg-neutral-100"
        ),
        children: v
      }
    ), N = ({
      direction: v,
      double: D
    }) => {
      const A = v === "prev", j = D ? A ? 1 : t : A ? e - 1 : e + 1, z = c || (A ? e === 1 : e === t), F = D ? A ? ws : Ds : A ? bs : ni;
      return /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          onClick: () => !z && n(j),
          disabled: z,
          "aria-label": D ? A ? "First page" : "Last page" : A ? "Previous page" : "Next page",
          className: S(
            x,
            z ? "text-neutral-300 cursor-not-allowed" : "text-neutral-600 hover:bg-neutral-100"
          ),
          children: /* @__PURE__ */ m(F, { size: b })
        }
      );
    }, E = a && s ? (e - 1) * s + 1 : void 0, y = a && s ? Math.min(e * s, a) : void 0;
    return /* @__PURE__ */ C(
      "nav",
      {
        ref: p,
        role: "navigation",
        "aria-label": "Pagination",
        className: S("flex items-center gap-2", u),
        ...d,
        children: [
          i && a !== void 0 && /* @__PURE__ */ C("span", { className: "text-sm text-neutral-500 mr-4", children: [
            E,
            "-",
            y,
            " of ",
            a
          ] }),
          o && /* @__PURE__ */ m(N, { direction: "prev", double: !0 }),
          /* @__PURE__ */ m(N, { direction: "prev" }),
          /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: h.map(
            (v, D) => v === "ellipsis" ? /* @__PURE__ */ m(
              "span",
              {
                className: S("px-2 text-neutral-400", Lr[l]),
                children: "..."
              },
              `ellipsis-${D}`
            ) : /* @__PURE__ */ m(
              w,
              {
                page: v,
                isActive: v === e
              },
              v
            )
          ) }),
          /* @__PURE__ */ m(N, { direction: "next" }),
          o && /* @__PURE__ */ m(N, { direction: "next", double: !0 })
        ]
      }
    );
  }
);
Gc.displayName = "Pagination";
const Wc = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-4xl"
}, fi = oe(
  ({
    open: e,
    onClose: t,
    title: n,
    description: r,
    children: o,
    footer: i,
    size: a = "md",
    closeOnOverlay: s = !0,
    closeOnEscape: c = !0,
    showCloseButton: l = !0,
    centered: u = !0,
    className: d,
    ...p
  }, f) => {
    const h = me(
      (b) => {
        b.key === "Escape" && c && t();
      },
      [c, t]
    );
    return Ne(() => (e && (document.addEventListener("keydown", h), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", h), document.body.style.overflow = "";
    }), [e, h]), e ? /* @__PURE__ */ C(
      "div",
      {
        className: "fixed inset-0 z-50 flex overflow-y-auto",
        role: "dialog",
        "aria-modal": "true",
        children: [
          /* @__PURE__ */ m(
            "div",
            {
              className: "fixed inset-0 bg-black/50 animate-fade-in",
              onClick: s ? t : void 0
            }
          ),
          /* @__PURE__ */ m(
            "div",
            {
              className: S(
                "relative flex min-h-full w-full p-4",
                u ? "items-center justify-center" : "items-start justify-center pt-16"
              ),
              children: /* @__PURE__ */ C(
                "div",
                {
                  ref: f,
                  className: S(
                    "relative w-full bg-white rounded-lg shadow-modal",
                    "animate-fade-in",
                    Wc[a],
                    d
                  ),
                  onClick: (b) => b.stopPropagation(),
                  ...p,
                  children: [
                    (n || l) && /* @__PURE__ */ C("div", { className: "flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark rounded-t-lg", children: [
                      /* @__PURE__ */ C("div", { children: [
                        n && /* @__PURE__ */ m("h2", { className: "text-lg font-semibold text-white", children: n }),
                        r && /* @__PURE__ */ m("p", { className: "mt-1 text-sm text-white/80", children: r })
                      ] }),
                      l && /* @__PURE__ */ m(
                        "button",
                        {
                          type: "button",
                          onClick: t,
                          className: "p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors",
                          "aria-label": "Close",
                          children: /* @__PURE__ */ m(Ut, { className: "w-5 h-5" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ m("div", { className: "p-4", children: o }),
                    i && /* @__PURE__ */ m("div", { className: "flex items-center justify-end gap-3 p-4 border-t border-neutral-200", children: i })
                  ]
                }
              )
            }
          )
        ]
      }
    ) : null;
  }
);
fi.displayName = "Modal";
const qc = ({
  message: e,
  confirmText: t = "Confirm",
  cancelText: n = "Cancel",
  confirmVariant: r = "primary",
  onConfirm: o,
  onClose: i,
  loading: a,
  ...s
}) => /* @__PURE__ */ m(
  fi,
  {
    ...s,
    onClose: i,
    size: "sm",
    footer: /* @__PURE__ */ C(Ke, { children: [
      /* @__PURE__ */ m(Rt, { variant: "ghost", onClick: i, disabled: a, children: n }),
      /* @__PURE__ */ m(Rt, { variant: r, onClick: o, loading: a, children: t })
    ] }),
    children: /* @__PURE__ */ m("p", { className: "text-neutral-700", children: e })
  }
);
qc.displayName = "ConfirmModal";
const Uc = {
  info: "bg-info text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-error text-white"
}, Hc = {
  info: ii,
  success: oi,
  warning: ai,
  error: ri
}, mi = oe(
  ({ toast: e, onClose: t, className: n, ...r }, o) => {
    const [i, a] = De(!1), s = Hc[e.variant];
    Ne(() => {
      if (requestAnimationFrame(() => a(!0)), e.duration !== 0) {
        const l = setTimeout(() => {
          a(!1), setTimeout(() => t(e.id), 200);
        }, e.duration || 5e3);
        return () => clearTimeout(l);
      }
    }, [e, t]);
    const c = () => {
      a(!1), setTimeout(() => t(e.id), 200);
    };
    return /* @__PURE__ */ C(
      "div",
      {
        ref: o,
        role: "alert",
        className: S(
          "flex items-start gap-3 p-4 rounded-lg shadow-lg min-w-[320px] max-w-md",
          "transition-all duration-200",
          i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          Uc[e.variant],
          n
        ),
        ...r,
        children: [
          /* @__PURE__ */ m(s, { className: "flex-shrink-0 w-5 h-5 mt-0.5" }),
          /* @__PURE__ */ C("div", { className: "flex-1 min-w-0", children: [
            e.title && /* @__PURE__ */ m("h5", { className: "font-semibold mb-0.5", children: e.title }),
            /* @__PURE__ */ m("p", { className: "text-sm opacity-90", children: e.message })
          ] }),
          /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              onClick: c,
              className: "flex-shrink-0 p-1 rounded hover:bg-white/20 transition-colors",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ m(Ut, { className: "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
mi.displayName = "Toast";
const Yc = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Kc = ({
  position: e = "top-right",
  toasts: t,
  onClose: n
}) => /* @__PURE__ */ m(
  "div",
  {
    className: S(
      "fixed z-50 flex flex-col gap-2",
      Yc[e]
    ),
    children: t.map((r) => /* @__PURE__ */ m(mi, { toast: r, onClose: n }, r.id))
  }
), gi = Zo(null), zg = ({ children: e, position: t = "top-right" }) => {
  const [n, r] = De([]), o = me((u) => {
    const d = Math.random().toString(36).slice(2, 9);
    return r((p) => [...p, { ...u, id: d }]), d;
  }, []), i = me((u) => {
    r((d) => d.filter((p) => p.id !== u));
  }, []), a = me(
    (u, d) => o({ variant: "success", message: u, title: d }),
    [o]
  ), s = me(
    (u, d) => o({ variant: "error", message: u, title: d }),
    [o]
  ), c = me(
    (u, d) => o({ variant: "warning", message: u, title: d }),
    [o]
  ), l = me(
    (u, d) => o({ variant: "info", message: u, title: d }),
    [o]
  );
  return /* @__PURE__ */ C(gi.Provider, { value: { toasts: n, addToast: o, removeToast: i, success: a, error: s, warning: c, info: l }, children: [
    e,
    /* @__PURE__ */ m(Kc, { position: t, toasts: n, onClose: i })
  ] });
}, Gg = () => {
  const e = qt(gi);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, Xc = oe(
  ({
    logo: e,
    logoWide: t,
    splitLogo: n,
    title: r = "Iniciar Sesión",
    subtitle: o = "Ingresa tus credenciales para continuar",
    onLoginSubmit: i,
    loading: a = !1,
    error: s,
    onForgotPassword: c,
    showRememberMe: l = !0,
    footer: u,
    variant: d = "gradient",
    className: p,
    ...f
  }, h) => {
    const [b, x] = De(""), [w, N] = De(""), [E, y] = De(!1), [v, D] = De(!1), j = /* @__PURE__ */ C("form", { onSubmit: (z) => {
      z.preventDefault(), i == null || i(b, w);
    }, className: "space-y-6", children: [
      /* @__PURE__ */ C("div", { className: "text-center mb-8", children: [
        (e || t) && /* @__PURE__ */ C("div", { className: "flex justify-center mb-6", children: [
          /* @__PURE__ */ m("div", { className: "md:hidden", children: e }),
          /* @__PURE__ */ m("div", { className: "hidden md:block", children: t || e })
        ] }),
        /* @__PURE__ */ m("h1", { className: "text-2xl font-bold text-neutral-900", children: r }),
        /* @__PURE__ */ m("p", { className: "mt-2 text-neutral-500", children: o })
      ] }),
      s && /* @__PURE__ */ m("div", { className: "p-3 rounded-lg bg-error/10 border border-error/20 text-error text-sm", children: s }),
      /* @__PURE__ */ C("div", { children: [
        /* @__PURE__ */ m("label", { htmlFor: "email", className: "block text-sm font-medium text-neutral-700 mb-1", children: "Correo electrónico" }),
        /* @__PURE__ */ m(
          $n,
          {
            id: "email",
            type: "email",
            value: b,
            onChange: (z) => x(z.target.value),
            placeholder: "tu@email.com",
            leftIcon: /* @__PURE__ */ m(qs, { className: "w-5 h-5" }),
            required: !0,
            disabled: a
          }
        )
      ] }),
      /* @__PURE__ */ C("div", { children: [
        /* @__PURE__ */ m("label", { htmlFor: "password", className: "block text-sm font-medium text-neutral-700 mb-1", children: "Contraseña" }),
        /* @__PURE__ */ m(
          $n,
          {
            id: "password",
            type: E ? "text" : "password",
            value: w,
            onChange: (z) => N(z.target.value),
            placeholder: "••••••••",
            leftIcon: /* @__PURE__ */ m(Gs, { className: "w-5 h-5" }),
            rightIcon: /* @__PURE__ */ m(
              "button",
              {
                type: "button",
                onClick: () => y(!E),
                className: "text-neutral-400 hover:text-neutral-600",
                children: E ? /* @__PURE__ */ m(Cs, { className: "w-5 h-5" }) : /* @__PURE__ */ m(_s, { className: "w-5 h-5" })
              }
            ),
            required: !0,
            disabled: a
          }
        )
      ] }),
      /* @__PURE__ */ C("div", { className: "flex items-center justify-between", children: [
        l && /* @__PURE__ */ C("label", { className: "flex items-center gap-2 cursor-pointer", children: [
          /* @__PURE__ */ m(
            "input",
            {
              type: "checkbox",
              checked: v,
              onChange: (z) => D(z.target.checked),
              className: "w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary"
            }
          ),
          /* @__PURE__ */ m("span", { className: "text-sm text-neutral-600", children: "Recordarme" })
        ] }),
        c && /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            onClick: c,
            className: "text-sm text-primary hover:text-primary-dark font-medium",
            children: "¿Olvidaste tu contraseña?"
          }
        )
      ] }),
      /* @__PURE__ */ m(
        Rt,
        {
          type: "submit",
          variant: "accent",
          fullWidth: !0,
          loading: a,
          className: "py-3",
          children: "Iniciar Sesión"
        }
      ),
      u && /* @__PURE__ */ m("div", { className: "text-center", children: u })
    ] });
    return d === "split" ? /* @__PURE__ */ C(
      "div",
      {
        ref: h,
        className: S("min-h-screen flex", p),
        ...f,
        children: [
          /* @__PURE__ */ C("div", { className: "hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sidebar via-primary to-accent p-12 flex-col justify-between", children: [
            /* @__PURE__ */ m("div", { children: (n || t || e) && /* @__PURE__ */ m("div", { className: "mb-8", children: n || t || e }) }),
            /* @__PURE__ */ C("div", { className: "text-white", children: [
              /* @__PURE__ */ m("h2", { className: "text-4xl font-bold mb-4", children: "Bienvenido de vuelta" }),
              /* @__PURE__ */ m("p", { className: "text-white/80 text-lg", children: "Accede a tu panel de administración y gestiona tu plataforma de manera eficiente." })
            ] }),
            /* @__PURE__ */ m("div", { className: "text-white/50 text-sm", children: "© 2024 Omnitok. Todos los derechos reservados." })
          ] }),
          /* @__PURE__ */ m("div", { className: "w-full lg:w-1/2 flex items-center justify-center p-8 bg-white", children: /* @__PURE__ */ m("div", { className: "w-full max-w-md", children: j }) })
        ]
      }
    ) : d === "centered" ? /* @__PURE__ */ m(
      "div",
      {
        ref: h,
        className: S(
          "min-h-screen flex items-center justify-center p-4 bg-neutral-100",
          p
        ),
        ...f,
        children: /* @__PURE__ */ m("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-xl p-8", children: j })
      }
    ) : /* @__PURE__ */ m(
      "div",
      {
        ref: h,
        className: S(
          "min-h-screen flex items-center justify-center p-4",
          "bg-gradient-to-br from-sidebar via-primary to-accent",
          p
        ),
        ...f,
        children: /* @__PURE__ */ m("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-2xl p-8", children: j })
      }
    );
  }
);
Xc.displayName = "LoginPage";
function Ee(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Jc = typeof Symbol == "function" && Symbol.observable || "@@observable", Br = Jc, Vr = () => Math.random().toString(36).substring(7).split("").join("."), Zc = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Vr()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Vr()}`
}, Fr = Zc;
function Qc(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function el(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (rl(e))
    return "date";
  if (nl(e))
    return "error";
  const n = tl(e);
  switch (n) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return n;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function tl(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function nl(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function rl(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Me(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = el(e)), t;
}
function vi(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ee(2) : `Expected the root reducer to be a function. Instead, received: '${Me(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ee(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ee(1) : `Expected the enhancer to be a function. Instead, received: '${Me(n)}'`);
    return n(vi)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function l() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((x, w) => {
      a.set(w, x);
    }));
  }
  function u() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Ee(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function d(x) {
    if (typeof x != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ee(4) : `Expected the listener to be a function. Instead, received: '${Me(x)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Ee(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let w = !0;
    l();
    const N = s++;
    return a.set(N, x), function() {
      if (w) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Ee(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        w = !1, l(), a.delete(N), i = null;
      }
    };
  }
  function p(x) {
    if (!Qc(x))
      throw new Error(process.env.NODE_ENV === "production" ? Ee(7) : `Actions must be plain objects. Instead, the actual type was: '${Me(x)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof x.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ee(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof x.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Ee(17) : `Action "type" property must be a string. Instead, the actual type was: '${Me(x.type)}'. Value was: '${x.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Ee(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = r(o, x);
    } finally {
      c = !1;
    }
    return (i = a).forEach((N) => {
      N();
    }), x;
  }
  function f(x) {
    if (typeof x != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ee(10) : `Expected the nextReducer to be a function. Instead, received: '${Me(x)}`);
    r = x, p({
      type: Fr.REPLACE
    });
  }
  function h() {
    const x = d;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(w) {
        if (typeof w != "object" || w === null)
          throw new Error(process.env.NODE_ENV === "production" ? Ee(11) : `Expected the observer to be an object. Instead, received: '${Me(w)}'`);
        function N() {
          const y = w;
          y.next && y.next(u());
        }
        return N(), {
          unsubscribe: x(N)
        };
      },
      [Br]() {
        return this;
      }
    };
  }
  return p({
    type: Fr.INIT
  }), {
    dispatch: p,
    subscribe: d,
    getState: u,
    replaceReducer: f,
    [Br]: h
  };
}
function zr(e, t) {
  return function(...n) {
    return t(e.apply(this, n));
  };
}
function Gr(e, t) {
  if (typeof e == "function")
    return zr(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Ee(16) : `bindActionCreators expected an object or a function, but instead received: '${Me(e)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = zr(o, t));
  }
  return n;
}
function hi(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function ol(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Ee(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, s = e.map((c) => c(a));
    return i = hi(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function il(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ln = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function al() {
  if (Wr) return ln;
  Wr = 1;
  var e = ce;
  function t(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return ln.useSyncExternalStoreWithSelector = function(c, l, u, d, p) {
    var f = o(null);
    if (f.current === null) {
      var h = { hasValue: !1, value: null };
      f.current = h;
    } else h = f.current;
    f = a(
      function() {
        function x(v) {
          if (!w) {
            if (w = !0, N = v, v = d(v), p !== void 0 && h.hasValue) {
              var D = h.value;
              if (p(D, v))
                return E = D;
            }
            return E = v;
          }
          if (D = E, n(N, v)) return D;
          var A = d(v);
          return p !== void 0 && p(D, A) ? (N = v, D) : (N = v, E = A);
        }
        var w = !1, N, E, y = u === void 0 ? null : u;
        return [
          function() {
            return x(l());
          },
          y === null ? void 0 : function() {
            return x(y());
          }
        ];
      },
      [l, u, d, p]
    );
    var b = r(c, f[0], f[1]);
    return i(
      function() {
        h.hasValue = !0, h.value = b;
      },
      [b]
    ), s(b), b;
  }, ln;
}
var dn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function sl() {
  return qr || (qr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, l) {
      return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = ce, n = typeof Object.is == "function" ? Object.is : e, r = t.useSyncExternalStore, o = t.useRef, i = t.useEffect, a = t.useMemo, s = t.useDebugValue;
    dn.useSyncExternalStoreWithSelector = function(c, l, u, d, p) {
      var f = o(null);
      if (f.current === null) {
        var h = { hasValue: !1, value: null };
        f.current = h;
      } else h = f.current;
      f = a(
        function() {
          function x(v) {
            if (!w) {
              if (w = !0, N = v, v = d(v), p !== void 0 && h.hasValue) {
                var D = h.value;
                if (p(D, v))
                  return E = D;
              }
              return E = v;
            }
            if (D = E, n(N, v))
              return D;
            var A = d(v);
            return p !== void 0 && p(D, A) ? (N = v, D) : (N = v, E = A);
          }
          var w = !1, N, E, y = u === void 0 ? null : u;
          return [
            function() {
              return x(l());
            },
            y === null ? void 0 : function() {
              return x(y());
            }
          ];
        },
        [l, u, d, p]
      );
      var b = r(c, f[0], f[1]);
      return i(
        function() {
          h.hasValue = !0, h.value = b;
        },
        [b]
      ), s(b), b;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), dn;
}
process.env.NODE_ENV === "production" ? al() : sl();
var bi = /* @__PURE__ */ X.version.startsWith("19"), cl = /* @__PURE__ */ Symbol.for(
  bi ? "react.transitional.element" : "react.element"
), ll = /* @__PURE__ */ Symbol.for("react.portal"), xi = /* @__PURE__ */ Symbol.for("react.fragment"), yi = /* @__PURE__ */ Symbol.for("react.strict_mode"), wi = /* @__PURE__ */ Symbol.for("react.profiler"), er = /* @__PURE__ */ Symbol.for("react.consumer"), tr = /* @__PURE__ */ Symbol.for("react.context"), nr = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ei = /* @__PURE__ */ Symbol.for("react.suspense"), Di = /* @__PURE__ */ Symbol.for(
  "react.suspense_list"
), Ht = /* @__PURE__ */ Symbol.for("react.memo"), Ni = /* @__PURE__ */ Symbol.for("react.lazy"), dl = /* @__PURE__ */ Symbol.for("react.offscreen"), pl = /* @__PURE__ */ Symbol.for(
  "react.client.reference"
), ul = nr, fl = Ht;
function ml(e) {
  return typeof e == "string" || typeof e == "function" || e === xi || e === wi || e === yi || e === Ei || e === Di || e === dl || typeof e == "object" && e !== null && (e.$$typeof === Ni || e.$$typeof === Ht || e.$$typeof === tr || e.$$typeof === er || e.$$typeof === nr || e.$$typeof === pl || e.getModuleId !== void 0);
}
function Ln(e) {
  if (typeof e == "object" && e !== null) {
    const { $$typeof: t } = e;
    switch (t) {
      case cl:
        switch (e = e.type, e) {
          case xi:
          case wi:
          case yi:
          case Ei:
          case Di:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case tr:
              case nr:
              case Ni:
              case Ht:
                return e;
              case er:
                return e;
              default:
                return t;
            }
        }
      case ll:
        return t;
    }
  }
}
function gl(e) {
  return bi ? Ln(e) === er : Ln(e) === tr;
}
function vl(e) {
  return Ln(e) === Ht;
}
function rr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function pn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || rr(
      `The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`
    ));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function hl(e, t, n) {
  pn(e, "mapStateToProps"), pn(t, "mapDispatchToProps"), pn(n, "mergeProps");
}
function bl(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, l, u, d, p;
  function f(N, E) {
    return c = N, l = E, u = e(c, l), d = t(r, l), p = n(u, d, l), s = !0, p;
  }
  function h() {
    return u = e(c, l), t.dependsOnOwnProps && (d = t(r, l)), p = n(u, d, l), p;
  }
  function b() {
    return e.dependsOnOwnProps && (u = e(c, l)), t.dependsOnOwnProps && (d = t(r, l)), p = n(u, d, l), p;
  }
  function x() {
    const N = e(c, l), E = !a(N, u);
    return u = N, E && (p = n(u, d, l)), p;
  }
  function w(N, E) {
    const y = !i(E, l), v = !o(
      N,
      c,
      E,
      l
    );
    return c = N, l = E, y && v ? h() : y ? b() : v ? x() : p;
  }
  return function(E, y) {
    return s ? w(E, y) : f(E, y);
  };
}
function xl(e, {
  initMapStateToProps: t,
  initMapDispatchToProps: n,
  initMergeProps: r,
  ...o
}) {
  const i = t(e, o), a = n(e, o), s = r(e, o);
  return process.env.NODE_ENV !== "production" && hl(i, a, s), bl(i, a, s, e, o);
}
function yl(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function wl(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function Oi(e, t, n) {
  wl(e) || rr(
    `${n}() in ${t} must return a plain object. Instead received ${e}.`
  );
}
function Bn(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Ur(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Si(e, t) {
  return function(r, { displayName: o }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Ur(e);
      let l = i(s, c);
      return typeof l == "function" && (i.mapToProps = l, i.dependsOnOwnProps = Ur(l), l = i(s, c)), process.env.NODE_ENV !== "production" && Oi(l, o, t), l;
    }, i;
  };
}
function or(e, t) {
  return (n, r) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`
    );
  };
}
function El(e) {
  return e && typeof e == "object" ? Bn(
    (t) => (
      // @ts-ignore
      yl(e, t)
    )
  ) : e ? typeof e == "function" ? (
    // @ts-ignore
    Si(e, "mapDispatchToProps")
  ) : or(e, "mapDispatchToProps") : Bn((t) => ({
    dispatch: t
  }));
}
function Dl(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Si(e, "mapStateToProps")
  ) : or(e, "mapStateToProps") : Bn(() => ({}));
}
function Nl(e, t, n) {
  return { ...n, ...e, ...t };
}
function Ol(e) {
  return function(n, { displayName: r, areMergedPropsEqual: o }) {
    let i = !1, a;
    return function(c, l, u) {
      const d = e(c, l, u);
      return i ? o(d, a) || (a = d) : (i = !0, a = d, process.env.NODE_ENV !== "production" && Oi(a, r, "mergeProps")), a;
    };
  };
}
function Sl(e) {
  return e ? typeof e == "function" ? Ol(e) : or(e, "mergeProps") : () => Nl;
}
function Cl(e) {
  e();
}
function Il() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Cl(() => {
        let n = e;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; )
        n.push(r), r = r.next;
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = t = {
        callback: n,
        next: null,
        prev: t
      };
      return o.prev ? o.prev.next = o : e = o, function() {
        !r || e === null || (r = !1, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : e = o.next);
      };
    }
  };
}
var Hr = {
  notify() {
  },
  get: () => []
};
function Ci(e, t) {
  let n, r = Hr, o = 0, i = !1;
  function a(b) {
    u();
    const x = r.subscribe(b);
    let w = !1;
    return () => {
      w || (w = !0, x(), d());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function l() {
    return i;
  }
  function u() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = Il());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Hr);
  }
  function p() {
    i || (i = !0, u());
  }
  function f() {
    i && (i = !1, d());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: p,
    tryUnsubscribe: f,
    getListeners: () => r
  };
  return h;
}
var _l = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Al = /* @__PURE__ */ _l(), kl = () => typeof navigator < "u" && navigator.product === "ReactNative", Pl = /* @__PURE__ */ kl(), Tl = () => Al || Pl ? X.useLayoutEffect : X.useEffect, jt = /* @__PURE__ */ Tl();
function Yr(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function un(e, t) {
  if (Yr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Yr(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
var Rl = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, jl = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ml = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ii = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, $l = {
  [ul]: Ml,
  [fl]: Ii
};
function Kr(e) {
  return vl(e) ? Ii : $l[e.$$typeof] || Rl;
}
var Ll = Object.defineProperty, Bl = Object.getOwnPropertyNames, Xr = Object.getOwnPropertySymbols, Vl = Object.getOwnPropertyDescriptor, Fl = Object.getPrototypeOf, Jr = Object.prototype;
function Vn(e, t) {
  if (typeof t != "string") {
    if (Jr) {
      const i = Fl(t);
      i && i !== Jr && Vn(e, i);
    }
    let n = Bl(t);
    Xr && (n = n.concat(Xr(t)));
    const r = Kr(e), o = Kr(t);
    for (let i = 0; i < n.length; ++i) {
      const a = n[i];
      if (!jl[a] && !(o && o[a]) && !(r && r[a])) {
        const s = Vl(t, a);
        try {
          Ll(e, a, s);
        } catch {
        }
      }
    }
  }
  return e;
}
var fn = /* @__PURE__ */ Symbol.for("react-redux-context"), mn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function zl() {
  if (!X.createContext) return {};
  const e = mn[fn] ?? (mn[fn] = /* @__PURE__ */ new Map());
  let t = e.get(X.createContext);
  return t || (t = X.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(X.createContext, t)), t;
}
var _i = /* @__PURE__ */ zl(), Gl = [null, null], Wl = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function ql(e, t, n) {
  jt(() => e(...t), n);
}
function Ul(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function Hl(e, t, n, r, o, i, a, s, c, l, u) {
  if (!e) return () => {
  };
  let d = !1, p = null;
  const f = () => {
    if (d || !s.current)
      return;
    const b = t.getState();
    let x, w;
    try {
      x = r(
        b,
        o.current
      );
    } catch (N) {
      w = N, p = N;
    }
    w || (p = null), x === i.current ? a.current || l() : (i.current = x, c.current = x, a.current = !0, u());
  };
  return n.onStateChange = f, n.trySubscribe(), f(), () => {
    if (d = !0, n.tryUnsubscribe(), n.onStateChange = null, p)
      throw p;
  };
}
function Yl(e, t) {
  return e === t;
}
var Zr = !1;
function Kl(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = Yl,
  areOwnPropsEqual: i = un,
  areStatePropsEqual: a = un,
  areMergedPropsEqual: s = un,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = _i
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !Zr && (Zr = !0, rr(
    'The `pure` option has been removed. `connect` is now always a "pure/memoized" component'
  ));
  const u = l, d = Dl(e), p = El(t), f = Sl(n), h = !!e;
  return (x) => {
    if (process.env.NODE_ENV !== "production" && !/* @__PURE__ */ ml(x))
      throw new Error(
        `You must pass a component to the function returned by connect. Instead received ${Wl(
          x
        )}`
      );
    const w = x.displayName || x.name || "Component", N = `Connect(${w})`, E = {
      shouldHandleStateChanges: h,
      displayName: N,
      wrappedComponentName: w,
      WrappedComponent: x,
      // @ts-ignore
      initMapStateToProps: d,
      initMapDispatchToProps: p,
      initMergeProps: f,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function y(A) {
      const [j, z, F] = X.useMemo(() => {
        const { reactReduxForwardedRef: I, ...de } = A;
        return [A.context, I, de];
      }, [A]), ie = X.useMemo(() => {
        let I = u;
        if (j != null && j.Consumer && process.env.NODE_ENV !== "production") {
          if (!/* @__PURE__ */ gl(
            // @ts-ignore
            /* @__PURE__ */ X.createElement(j.Consumer, null)
          ))
            throw new Error(
              "You must pass a valid React context consumer as `props.context`"
            );
          I = j;
        }
        return I;
      }, [j, u]), W = X.useContext(ie), K = !!A.store && !!A.store.getState && !!A.store.dispatch, H = !!W && !!W.store;
      if (process.env.NODE_ENV !== "production" && !K && !H)
        throw new Error(
          `Could not find "store" in the context of "${N}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${N} in connect options.`
        );
      const J = K ? A.store : W.store, ge = H ? W.getServerState : J.getState, ye = X.useMemo(() => xl(J.dispatch, E), [J]), [Oe, le] = X.useMemo(() => {
        if (!h) return Gl;
        const I = Ci(
          J,
          K ? void 0 : W.subscription
        ), de = I.notifyNestedSubs.bind(I);
        return [I, de];
      }, [J, K, W]), O = X.useMemo(() => K ? W : {
        ...W,
        subscription: Oe
      }, [K, W, Oe]), k = X.useRef(void 0), L = X.useRef(F), $ = X.useRef(void 0), R = X.useRef(!1), B = X.useRef(!1), V = X.useRef(
        void 0
      );
      jt(() => (B.current = !0, () => {
        B.current = !1;
      }), []);
      const M = X.useMemo(() => () => $.current && F === L.current ? $.current : ye(J.getState(), F), [J, F]), q = X.useMemo(() => (de) => Oe ? Hl(
        h,
        J,
        Oe,
        // @ts-ignore
        ye,
        L,
        k,
        R,
        B,
        $,
        le,
        de
      ) : () => {
      }, [Oe]);
      ql(Ul, [
        L,
        k,
        R,
        F,
        $,
        le
      ]);
      let U;
      try {
        U = X.useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          q,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          M,
          ge ? () => ye(ge(), F) : M
        );
      } catch (I) {
        throw V.current && (I.message += `
The error may be correlated with this previous error:
${V.current.stack}

`), I;
      }
      jt(() => {
        V.current = void 0, $.current = void 0, k.current = U;
      });
      const G = X.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ X.createElement(
          x,
          {
            ...U,
            ref: z
          }
        )
      ), [z, x, U]);
      return X.useMemo(() => h ? /* @__PURE__ */ X.createElement(ie.Provider, { value: O }, G) : G, [ie, G, O]);
    }
    const D = X.memo(y);
    if (D.WrappedComponent = x, D.displayName = y.displayName = N, c) {
      const j = X.forwardRef(
        function(F, ie) {
          return /* @__PURE__ */ X.createElement(D, { ...F, reactReduxForwardedRef: ie });
        }
      );
      return j.displayName = N, j.WrappedComponent = x, /* @__PURE__ */ Vn(j, x);
    }
    return /* @__PURE__ */ Vn(D, x);
  };
}
var Ai = Kl;
function Xl(e) {
  const { children: t, context: n, serverState: r, store: o } = e, i = X.useMemo(() => {
    const c = Ci(o), l = {
      store: o,
      subscription: c,
      getServerState: r ? () => r : void 0
    };
    if (process.env.NODE_ENV === "production")
      return l;
    {
      const { identityFunctionCheck: u = "once", stabilityCheck: d = "once" } = e;
      return /* @__PURE__ */ Object.assign(l, {
        stabilityCheck: d,
        identityFunctionCheck: u
      });
    }
  }, [o, r]), a = X.useMemo(() => o.getState(), [o]);
  jt(() => {
    const { subscription: c } = i;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [i, a]);
  const s = n || _i;
  return /* @__PURE__ */ X.createElement(s.Provider, { value: i }, t);
}
var Jl = Xl, Zl = process.env.NODE_ENV === "production", gn = "Invariant failed";
function Qr(e, t) {
  if (Zl)
    throw new Error(gn);
  var n = typeof t == "function" ? t() : t, r = n ? "".concat(gn, ": ").concat(n) : gn;
  throw new Error(r);
}
var Pe = function(t) {
  var n = t.top, r = t.right, o = t.bottom, i = t.left, a = r - i, s = o - n, c = {
    top: n,
    right: r,
    bottom: o,
    left: i,
    width: a,
    height: s,
    x: i,
    y: n,
    center: {
      x: (r + i) / 2,
      y: (o + n) / 2
    }
  };
  return c;
}, ir = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, eo = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, Ql = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, vn = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, ar = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? vn : r, i = t.border, a = i === void 0 ? vn : i, s = t.padding, c = s === void 0 ? vn : s, l = Pe(ir(n, o)), u = Pe(eo(n, a)), d = Pe(eo(u, c));
  return {
    marginBox: l,
    borderBox: Pe(n),
    paddingBox: u,
    contentBox: d,
    margin: o,
    border: a,
    padding: c
  };
}, _e = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Qr(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : Qr()), o;
}, ed = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Mt = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = Ql(r, n);
  return ar({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, $t = function(t, n) {
  return n === void 0 && (n = ed()), Mt(t, n);
}, ki = function(t, n) {
  var r = {
    top: _e(n.marginTop),
    right: _e(n.marginRight),
    bottom: _e(n.marginBottom),
    left: _e(n.marginLeft)
  }, o = {
    top: _e(n.paddingTop),
    right: _e(n.paddingRight),
    bottom: _e(n.paddingBottom),
    left: _e(n.paddingLeft)
  }, i = {
    top: _e(n.borderTopWidth),
    right: _e(n.borderRightWidth),
    bottom: _e(n.borderBottomWidth),
    left: _e(n.borderLeftWidth)
  };
  return ar({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, Pi = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return ki(n, r);
}, dt = function(t) {
  var n = [], r = null, o = function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    n = s, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, n);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Lt.apply(null, arguments);
}
const td = process.env.NODE_ENV === "production", nd = /[ \t]{2,}/g, rd = /^[ \t]*/gm, to = (e) => e.replace(nd, " ").replace(rd, "").trim(), od = (e) => to(`
  %c@hello-pangea/dnd

  %c${to(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), id = (e) => [od(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], ad = "__@hello-pangea/dnd-disable-dev-warnings";
function Ti(e, t) {
  td || typeof window < "u" && window[ad] || console[e](...id(t));
}
const ae = Ti.bind(null, "warn"), Fn = Ti.bind(null, "error");
function $e() {
}
function sd(e, t) {
  return {
    ...e,
    ...t
  };
}
function Ae(e, t, n) {
  const r = t.map((o) => {
    const i = sd(n, o.options);
    return e.addEventListener(o.eventName, o.fn, i), function() {
      e.removeEventListener(o.eventName, o.fn, i);
    };
  });
  return function() {
    r.forEach((i) => {
      i();
    });
  };
}
const cd = process.env.NODE_ENV === "production", no = "Invariant failed";
class pt extends Error {
}
pt.prototype.toString = function() {
  return this.message;
};
function g(e, t) {
  throw cd ? new pt(no) : new pt(`${no}: ${t || ""}`);
}
class ld extends ce.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = $e, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && ae(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof pt && (n.preventDefault(), process.env.NODE_ENV !== "production" && Fn(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = Ae(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof pt) {
      process.env.NODE_ENV !== "production" && Fn(t.message), this.setState({});
      return;
    }
    throw t;
  }
  componentWillUnmount() {
    this.unbind();
  }
  render() {
    return this.props.children(this.setCallbacks);
  }
}
const dd = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Bt = (e) => e + 1, pd = (e) => `
  You have lifted an item in position ${Bt(e.source.index)}
`, Ri = (e, t) => {
  const n = e.droppableId === t.droppableId, r = Bt(e.index), o = Bt(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, ji = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, ud = (e) => {
  const t = e.destination;
  if (t)
    return Ri(e.source, t);
  const n = e.combine;
  return n ? ji(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, ro = (e) => `
  The item has returned to its starting position
  of ${Bt(e.index)}
`, fd = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${ro(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Ri(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${ji(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${ro(e.source)}
  `;
}, Tt = {
  dragHandleUsageInstructions: dd,
  onDragStart: pd,
  onDragUpdate: ud,
  onDragEnd: fd
};
function md(e, t) {
  return !!(e === t || Number.isNaN(e) && Number.isNaN(t));
}
function Mi(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (!md(e[n], t[n]))
      return !1;
  return !0;
}
function Y(e, t) {
  const n = De(() => ({
    inputs: t,
    result: e()
  }))[0], r = te(!0), o = te(n), a = r.current || !!(t && o.current.inputs && Mi(t, o.current.inputs)) ? o.current : {
    inputs: t,
    result: e()
  };
  return Ne(() => {
    r.current = !1, o.current = a;
  }, [a]), a.result;
}
function P(e, t) {
  return Y(() => e, t);
}
const he = {
  x: 0,
  y: 0
}, xe = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Se = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Le = (e, t) => e.x === t.x && e.y === t.y, tt = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), We = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, ut = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), oo = (e, t) => Math.min(...t.map((n) => ut(e, n))), $i = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var gd = (e, t) => {
  const n = Pe({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const yt = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), io = (e) => [{
  x: e.left,
  y: e.top
}, {
  x: e.right,
  y: e.top
}, {
  x: e.left,
  y: e.bottom
}, {
  x: e.right,
  y: e.bottom
}], vd = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, hd = (e, t) => t ? yt(e, t.scroll.diff.displacement) : e, bd = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, xd = (e, t) => t && t.shouldClipSubject ? gd(t.pageMarginBox, e) : Pe(e);
var Je = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = hd(e.marginBox, r), i = bd(o, n, t), a = xd(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, sr = (e, t) => {
  e.frame || (process.env.NODE_ENV, g());
  const n = e.frame, r = Se(t, n.scroll.initial), o = tt(r), i = {
    ...n,
    scroll: {
      initial: n.scroll.initial,
      current: t,
      diff: {
        value: r,
        displacement: o
      },
      max: n.scroll.max
    }
  }, a = Je({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: i
  });
  return {
    ...e,
    frame: i,
    subject: a
  };
};
function ve(e, t = Mi) {
  let n = null;
  function r(...o) {
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    const i = e.apply(this, o);
    return n = {
      lastResult: i,
      lastArgs: o,
      lastThis: this
    }, i;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
const Li = ve((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Bi = ve((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Yt = ve((e) => Object.values(e)), yd = ve((e) => Object.values(e));
var qe = ve((e, t) => yd(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function cr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Kt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Xt = ve((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), wd = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !cr(o))
    return null;
  function a(f) {
    const h = {
      type: "COMBINE",
      combine: {
        draggableId: f,
        droppableId: n.descriptor.id
      }
    };
    return {
      ...o,
      at: h
    };
  }
  const s = o.displaced.all, c = s.length ? s[0] : null;
  if (e)
    return c ? a(c) : null;
  const l = Xt(t, r);
  if (!c) {
    if (!l.length)
      return null;
    const f = l[l.length - 1];
    return a(f.descriptor.id);
  }
  const u = l.findIndex((f) => f.descriptor.id === c);
  u === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Could not find displaced item in set") : g());
  const d = u - 1;
  if (d < 0)
    return null;
  const p = l[d];
  return a(p.descriptor.id);
}, nt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Vi = {
  point: he,
  value: 0
}, ft = {
  invisible: {},
  visible: {},
  all: []
}, Ed = {
  displaced: ft,
  displacedBy: Vi,
  at: null
};
var ke = (e, t) => (n) => e <= n && n <= t, Fi = (e) => {
  const t = ke(e.top, e.bottom), n = ke(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), a = n(r.left) || n(r.right);
    if (i && a)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, l = r.left < e.left && r.right > e.right;
    return c && l ? !0 : c && a || l && i;
  };
}, Dd = (e) => {
  const t = ke(e.top, e.bottom), n = ke(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const lr = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, zi = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var Nd = (e) => (t) => {
  const n = ke(t.top, t.bottom), r = ke(t.left, t.right);
  return (o) => e === lr ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const Od = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : he;
  return yt(e, n);
}, Sd = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, Cd = (e, t, n) => n(t)(e), dr = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? Od(e, t) : e;
  return Sd(i, t, o) && Cd(i, n, o);
}, Id = (e) => dr({
  ...e,
  isVisibleThroughFrameFn: Fi
}), Gi = (e) => dr({
  ...e,
  isVisibleThroughFrameFn: Dd
}), _d = (e) => dr({
  ...e,
  isVisibleThroughFrameFn: Nd(e.destination.axis)
}), Ad = (e, t, n) => {
  if (typeof n == "boolean")
    return n;
  if (!t)
    return !0;
  const {
    invisible: r,
    visible: o
  } = t;
  if (r[e])
    return !1;
  const i = o[e];
  return i ? i.shouldAnimate : !0;
};
function kd(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Pe(ir(n, r));
}
function mt({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, c) {
    const l = kd(c, n), u = c.descriptor.id;
    if (s.all.push(u), !Id({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const p = Ad(u, i, o), f = {
      draggableId: u,
      shouldAnimate: p
    };
    return s.visible[u] = f, s;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function Pd(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function ao({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = Pd(e, {
    inHomeList: t
  });
  return {
    displaced: ft,
    displacedBy: n,
    at: {
      type: "REORDER",
      destination: {
        droppableId: r.descriptor.id,
        index: o
      }
    }
  };
}
function Vt({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const c = nt(e, n);
  if (a == null)
    return ao({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const l = t.find((h) => h.descriptor.index === a);
  if (!l)
    return ao({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const u = Xt(e, t), d = t.indexOf(l), p = u.slice(d);
  return {
    displaced: mt({
      afterDragging: p,
      destination: n,
      displacedBy: o,
      last: i,
      viewport: r.frame,
      forceShouldAnimate: s
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: {
        droppableId: n.descriptor.id,
        index: a
      }
    }
  };
}
function Be(e, t) {
  return !!t.effected[e];
}
var Td = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = r.draggableId, s = n[i].descriptor.index;
  return Be(i, o) ? e ? s : s - 1 : e ? s + 1 : s;
}, Rd = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, a = n[0].descriptor.index, s = n[n.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, jd = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: n,
  draggables: r,
  destination: o,
  insideDestination: i,
  previousImpact: a,
  viewport: s,
  afterCritical: c
}) => {
  const l = a.at;
  if (l || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot move in direction without previous impact location") : g()), l.type === "REORDER") {
    const d = Rd({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: i
    });
    return d == null ? null : Vt({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: d
    });
  }
  const u = Td({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: c
  });
  return u == null ? null : Vt({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: u
  });
}, Md = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Be(n, t) ? o ? he : tt(r.point) : o ? r.point : he;
}, $d = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = Kt(t);
  r || (process.env.NODE_ENV, g());
  const o = r.draggableId, i = n[o].page.borderBox.center, a = Md({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return xe(i, a);
};
const Wi = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, Ld = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, pr = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, so = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => We(e.line, t.marginBox[e.end] + Wi(e, n), pr(e, t.marginBox, n)), co = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => We(e.line, t.marginBox[e.start] - Ld(e, n), pr(e, t.marginBox, n)), Bd = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => We(e.line, t.contentBox[e.start] + Wi(e, n), pr(e, t.contentBox, n));
var Vd = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = qe(r.descriptor.id, n), a = t.page, s = r.axis;
  if (!i.length)
    return Bd({
      axis: s,
      moveInto: r.page,
      isMoving: a
    });
  const {
    displaced: c,
    displacedBy: l
  } = e, u = c.all[0];
  if (u) {
    const p = n[u];
    if (Be(u, o))
      return co({
        axis: s,
        moveRelativeTo: p.page,
        isMoving: a
      });
    const f = Mt(p.page, l.point);
    return co({
      axis: s,
      moveRelativeTo: f,
      isMoving: a
    });
  }
  const d = i[i.length - 1];
  if (d.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Be(d.descriptor.id, o)) {
    const p = Mt(d.page, tt(o.displacedBy.point));
    return so({
      axis: s,
      moveRelativeTo: p,
      isMoving: a
    });
  }
  return so({
    axis: s,
    moveRelativeTo: d.page,
    isMoving: a
  });
}, zn = (e, t) => {
  const n = e.frame;
  return n ? xe(t, n.scroll.diff.displacement) : t;
};
const Fd = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !n || !a ? i : a.type === "REORDER" ? Vd({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : $d({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var Jt = (e) => {
  const t = Fd(e), n = e.droppable;
  return n ? zn(n, t) : t;
}, qi = (e, t) => {
  const n = Se(t, e.scroll.initial), r = tt(n);
  return {
    frame: Pe({
      top: t.y,
      bottom: t.y + e.frame.height,
      left: t.x,
      right: t.x + e.frame.width
    }),
    scroll: {
      initial: e.scroll.initial,
      max: e.scroll.max,
      current: t,
      diff: {
        value: n,
        displacement: r
      }
    }
  };
};
function lo(e, t) {
  return e.map((n) => t[n]);
}
function zd(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var Gd = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = qi(t, xe(t.scroll.current, o)), a = n.frame ? sr(n, xe(n.frame.scroll.current, o)) : n, s = e.displaced, c = mt({
    afterDragging: lo(s.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), l = mt({
    afterDragging: lo(s.all, r),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = {}, d = {}, p = [s, c, l];
  return s.all.forEach((h) => {
    const b = zd(h, p);
    if (b) {
      d[h] = b;
      return;
    }
    u[h] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: u,
      visible: d
    }
  };
}, Wd = (e, t) => xe(e.scroll.diff.displacement, t), ur = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = Wd(n, e), o = Se(r, t.page.borderBox.center);
  return xe(t.client.borderBox.center, o);
}, Ui = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = Se(n, e.page.borderBox.center), c = {
    target: yt(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? _d(c) : Gi(c);
}, qd = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  draggables: r,
  previousImpact: o,
  viewport: i,
  previousPageBorderBoxCenter: a,
  previousClientSelection: s,
  afterCritical: c
}) => {
  if (!n.isEnabled)
    return null;
  const l = qe(n.descriptor.id, r), u = nt(t, n), d = wd({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || jd({
    isMovingForward: e,
    isInHomeList: u,
    draggable: t,
    draggables: r,
    destination: n,
    insideDestination: l,
    previousImpact: o,
    viewport: i,
    afterCritical: c
  });
  if (!d)
    return null;
  const p = Jt({
    impact: d,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (Ui({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: p,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: ur({
        pageBorderBoxCenter: p,
        draggable: t,
        viewport: i
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const h = Se(p, a), b = Gd({
    impact: d,
    viewport: i,
    destination: n,
    draggables: r,
    maxScrollChange: h
  });
  return {
    clientSelection: s,
    impact: b,
    scrollJumpRequest: h
  };
};
const we = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get clipped area from droppable") : g()), t;
};
var Ud = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const a = n.axis, s = ke(i[a.start], i[a.end]), c = Yt(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => Fi(o.frame)(we(u))).filter((u) => {
    const d = we(u);
    return e ? i[a.crossAxisEnd] < d[a.crossAxisEnd] : d[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((u) => {
    const d = we(u), p = ke(d[a.start], d[a.end]);
    return s(d[a.start]) || s(d[a.end]) || p(i[a.start]) || p(i[a.end]);
  }).sort((u, d) => {
    const p = we(u)[a.crossAxisStart], f = we(d)[a.crossAxisStart];
    return e ? p - f : f - p;
  }).filter((u, d, p) => we(u)[a.crossAxisStart] === we(p[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const l = c.filter((u) => ke(we(u)[a.start], we(u)[a.end])(t[a.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((u, d) => we(u)[a.start] - we(d)[a.start])[0] : c.sort((u, d) => {
    const p = oo(t, io(we(u))), f = oo(t, io(we(d)));
    return p !== f ? p - f : we(u)[a.start] - we(d)[a.start];
  })[0];
};
const po = (e, t) => {
  const n = e.page.borderBox.center;
  return Be(e.descriptor.id, t) ? Se(n, t.displacedBy.point) : n;
}, Hd = (e, t) => {
  const n = e.page.borderBox;
  return Be(e.descriptor.id, t) ? yt(n, tt(t.displacedBy.point)) : n;
};
var Yd = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((a) => Gi({
  target: Hd(a, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = ut(e, zn(n, po(a, o))), l = ut(e, zn(n, po(s, o)));
  return c < l ? -1 : l < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, wt = ve(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: We(t.line, r)
  };
});
const Kd = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return We(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = qe(e.descriptor.id, n).reduce((l, u) => l + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : We(r.line, c);
}, Hi = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Yi = (e, t, n) => {
  const r = e.frame;
  nt(t, e) && (process.env.NODE_ENV !== "production" ? g(!1, "Should not add placeholder space to home list") : g()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot add placeholder size to a subject when it already has one") : g());
  const o = wt(e.axis, t.displaceBy).point, i = Kd(e, o, n), a = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const u = Je({
      page: e.subject.page,
      withPlaceholder: a,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: u
    };
  }
  const s = i ? xe(r.scroll.max, i) : r.scroll.max, c = Hi(r, s), l = Je({
    page: e.subject.page,
    withPlaceholder: a,
    axis: e.axis,
    frame: c
  });
  return {
    ...e,
    subject: l,
    frame: c
  };
}, Xd = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot remove placeholder form subject when there was none") : g());
  const n = e.frame;
  if (!n) {
    const a = Je({
      page: e.subject.page,
      axis: e.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...e,
      subject: a
    };
  }
  const r = t.oldFrameMaxScroll;
  r || (process.env.NODE_ENV !== "production" ? g(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : g());
  const o = Hi(n, r), i = Je({
    page: e.subject.page,
    axis: e.axis,
    frame: o,
    withPlaceholder: null
  });
  return {
    ...e,
    subject: i,
    frame: o
  };
};
var Jd = ({
  previousPageBorderBoxCenter: e,
  moveRelativeTo: t,
  insideDestination: n,
  draggable: r,
  draggables: o,
  destination: i,
  viewport: a,
  afterCritical: s
}) => {
  if (!t) {
    if (n.length)
      return null;
    const d = {
      displaced: ft,
      displacedBy: Vi,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, p = Jt({
      impact: d,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), f = nt(r, i) ? i : Yi(i, r, o);
    return Ui({
      draggable: r,
      destination: f,
      newPageBorderBoxCenter: p,
      viewport: a.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? d : null;
  }
  const c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], l = (() => {
    const d = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || c ? d : d + 1;
  })(), u = wt(i.axis, r.displaceBy);
  return Vt({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: a,
    displacedBy: u,
    last: ft,
    index: l
  });
}, Zd = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = Ud({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const l = qe(c.descriptor.id, o), u = Yd({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: l,
    afterCritical: s
  }), d = Jd({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: n,
    draggables: o,
    moveRelativeTo: u,
    insideDestination: l,
    viewport: a,
    afterCritical: s
  });
  if (!d)
    return null;
  const p = Jt({
    impact: d,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: ur({
      pageBorderBoxCenter: p,
      draggable: n,
      viewport: a
    }),
    impact: d,
    scrollJumpRequest: null
  };
}, Ce = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Qd = (e, t) => {
  const n = Ce(e);
  return n ? t[n] : null;
};
var ep = ({
  state: e,
  type: t
}) => {
  const n = Qd(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: d,
    droppables: p
  } = e.dimensions;
  return s ? qd({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: l,
    destination: i,
    draggables: d,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Zd({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: l,
    isOver: i,
    draggables: d,
    droppables: p,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function ze(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Ki(e) {
  const t = ke(e.top, e.bottom), n = ke(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function tp(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function np({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const a = i.axis, s = We(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: ut(r, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function rp({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = Yt(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !tp(e, i))
      return !1;
    if (Ki(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], l = e[a.crossAxisEnd], u = ke(i[a.crossAxisStart], i[a.crossAxisEnd]), d = u(c), p = u(l);
    return !d && !p ? !0 : d ? c < s : l > s;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : np({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const Xi = (e, t) => Pe(yt(e, t));
var op = (e, t) => {
  const n = e.frame;
  return n ? Xi(t, n.scroll.diff.value) : t;
};
function Ji({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function ip({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var ap = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = n.axis, c = wt(n.axis, t.displaceBy), l = c.value, u = e[s.start], d = e[s.end], f = Xt(t, r).find((b) => {
    const x = b.descriptor.id, w = b.page.borderBox.center[s.line], N = Be(x, a), E = Ji({
      displaced: o,
      id: x
    });
    return N ? E ? d <= w : u < w - l : E ? d <= w + l : u < w;
  }) || null, h = ip({
    draggable: t,
    closest: f,
    inHomeList: nt(t, n)
  });
  return Vt({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: c,
    index: h
  });
};
const sp = 4;
var cp = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const a = r.axis, s = wt(r.axis, e.displaceBy), c = s.value, l = t[a.start], u = t[a.end], p = Xt(e, o).find((h) => {
    const b = h.descriptor.id, x = h.page.borderBox, N = x[a.size] / sp, E = Be(b, i), y = Ji({
      displaced: n.displaced,
      id: b
    });
    return E ? y ? u > x[a.start] + N && u < x[a.end] - N : l > x[a.start] - c + N && l < x[a.end] - c - N : y ? u > x[a.start] + c + N && u < x[a.end] + c - N : l > x[a.start] + N && l < x[a.end] - N;
  });
  return p ? {
    displacedBy: s,
    displaced: n.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: p.descriptor.id,
        droppableId: r.descriptor.id
      }
    }
  } : null;
}, Zi = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = Xi(t.page.borderBox, e), c = rp({
    pageBorderBox: s,
    draggable: t,
    droppables: r
  });
  if (!c)
    return Ed;
  const l = r[c], u = qe(l.descriptor.id, n), d = op(l, s);
  return cp({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: u,
    afterCritical: a
  }) || ap({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    destination: l,
    insideDestination: u,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, fr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const lp = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = Ce(e), o = Ce(t);
  if (!r || r === o)
    return n;
  const i = n[r];
  if (!i.subject.withPlaceholder)
    return n;
  const a = Xd(i);
  return fr(n, a);
};
var dp = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = lp({
    previousImpact: r,
    impact: o,
    droppables: n
  }), a = Ce(o);
  if (!a)
    return i;
  const s = n[a];
  if (nt(e, s) || s.subject.withPlaceholder)
    return i;
  const c = Yi(s, e, t);
  return fr(i, c);
}, ct = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = r || e.viewport, s = n || e.dimensions, c = t || e.current.client.selection, l = Se(c, e.initial.client.selection), u = {
    offset: l,
    selection: c,
    borderBoxCenter: xe(e.initial.client.borderBoxCenter, l)
  }, d = {
    selection: xe(u.selection, a.scroll.current),
    borderBoxCenter: xe(u.borderBoxCenter, a.scroll.current),
    offset: xe(u.offset, a.scroll.diff.value)
  }, p = {
    client: u,
    page: d
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: s,
      viewport: a,
      current: p
    };
  const f = s.draggables[e.critical.draggable.id], h = o || Zi({
    pageOffset: d.offset,
    draggable: f,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), b = dp({
    draggable: f,
    impact: h,
    previousImpact: e.impact,
    draggables: s.draggables,
    droppables: s.droppables
  });
  return {
    ...e,
    current: p,
    dimensions: {
      draggables: s.draggables,
      droppables: b
    },
    impact: h,
    viewport: a,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function pp(e, t) {
  return e.map((n) => t[n]);
}
var Qi = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = pp(i.all, n), s = mt({
    afterDragging: a,
    destination: r,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: o,
    last: i
  });
  return {
    ...e,
    displaced: s
  };
}, ea = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const a = Jt({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return ur({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, ta = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, g());
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, c = a[e.critical.draggable.id], l = Ce(r);
  l || (process.env.NODE_ENV !== "production" ? g(!1, "Must be over a destination in SNAP movement mode") : g());
  const u = s[l], d = Qi({
    impact: r,
    viewport: o,
    destination: u,
    draggables: a
  }), p = ea({
    impact: d,
    draggable: c,
    droppable: u,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return ct({
    impact: d,
    clientSelection: p,
    state: e,
    dimensions: i,
    viewport: o
  });
}, up = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), na = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = wt(t.axis, e.displaceBy), i = qe(t.descriptor.id, n), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Expected draggable to be inside home list") : g());
  const s = i.slice(a + 1), c = s.reduce((p, f) => (p[f.descriptor.id] = !0, p), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: mt({
        afterDragging: s,
        destination: t,
        displacedBy: o,
        last: null,
        viewport: r.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: o,
      at: {
        type: "REORDER",
        destination: up(e.descriptor)
      }
    },
    afterCritical: l
  };
}, fp = (e, t) => ({
  draggables: e.draggables,
  droppables: fr(e.droppables, t)
});
const Et = (e) => {
  process.env.NODE_ENV;
}, Dt = (e) => {
  process.env.NODE_ENV;
};
var mp = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = Mt(e.client, t), o = $t(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, gp = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Expected Droppable to have a frame") : g()), t;
}, vp = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = gp(a).scroll.diff.value, l = xe(r, c);
    return mp({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, hp = ({
  state: e,
  published: t
}) => {
  Et();
  const n = t.modified.map((w) => {
    const N = e.dimensions.droppables[w.droppableId];
    return sr(N, w.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Li(n)
  }, o = Bi(vp({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((w) => {
    delete i[w];
  });
  const a = {
    droppables: r,
    draggables: i
  }, s = Ce(e.impact), c = s ? a.droppables[s] : null, l = a.draggables[e.critical.draggable.id], u = a.droppables[e.critical.droppable.id], {
    impact: d,
    afterCritical: p
  } = na({
    draggable: l,
    home: u,
    draggables: i,
    viewport: e.viewport
  }), f = c && c.isCombineEnabled ? e.impact : d, h = Zi({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: f,
    viewport: e.viewport,
    afterCritical: p
  });
  Dt();
  const b = {
    ...e,
    phase: "DRAGGING",
    impact: h,
    onLiftImpact: d,
    dimensions: a,
    afterCritical: p,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? b : {
    ...b,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const Gn = (e) => e.movementMode === "SNAP", hn = (e, t, n) => {
  const r = fp(e.dimensions, t);
  return !Gn(e) || n ? ct({
    state: e,
    dimensions: r
  }) : ta({
    state: e,
    dimensions: r
  });
};
function bn(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const uo = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var bp = (e = uo, t) => {
  if (t.type === "FLUSH")
    return {
      ...uo,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "INITIAL_PUBLISH must come after a IDLE phase") : g());
    const {
      critical: n,
      clientSelection: r,
      viewport: o,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[n.draggable.id], c = i.droppables[n.droppable.id], l = {
      selection: r,
      borderBoxCenter: s.client.borderBox.center,
      offset: he
    }, u = {
      client: l,
      page: {
        selection: xe(l.selection, o.scroll.initial),
        borderBoxCenter: xe(l.selection, o.scroll.initial),
        offset: xe(l.selection, o.scroll.diff.value)
      }
    }, d = Yt(i.droppables).every((b) => !b.isFixedOnPage), {
      impact: p,
      afterCritical: f
    } = na({
      draggable: s,
      home: c,
      draggables: i.draggables,
      viewport: o
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: n,
      movementMode: a,
      dimensions: i,
      initial: u,
      current: u,
      isWindowScrollAllowed: d,
      impact: p,
      afterCritical: f,
      onLiftImpact: p,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, `Collection cannot start from phase ${e.phase}`) : g()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : g()), hp({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    ze(e) || (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} not permitted in phase ${e.phase}`) : g());
    const {
      client: n
    } = t.payload;
    return Le(n, e.current.client.selection) ? e : ct({
      state: e,
      clientSelection: n,
      impact: Gn(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return bn(e);
    ze(e) || (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} not permitted in phase ${e.phase}`) : g());
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = sr(o, r);
    return hn(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    ze(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Attempting to move in an unsupported phase ${e.phase}`) : g());
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find Droppable[id: ${n}] to toggle its enabled state`) : g()), o.isEnabled === r && (process.env.NODE_ENV !== "production" ? g(!1, `Trying to set droppable isEnabled to ${String(r)}
      but it is already ${String(o.isEnabled)}`) : g());
    const i = {
      ...o,
      isEnabled: r
    };
    return hn(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    ze(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Attempting to move in an unsupported phase ${e.phase}`) : g());
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find Droppable[id: ${n}] to toggle its isCombineEnabled state`) : g()), o.isCombineEnabled === r && (process.env.NODE_ENV !== "production" ? g(!1, `Trying to set droppable isCombineEnabled to ${String(r)}
      but it is already ${String(o.isCombineEnabled)}`) : g());
    const i = {
      ...o,
      isCombineEnabled: r
    };
    return hn(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    ze(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot move by window in phase ${e.phase}`) : g()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? g(!1, "Window scrolling is currently not supported for fixed lists") : g());
    const n = t.payload.newScroll;
    if (Le(e.viewport.scroll.current, n))
      return bn(e);
    const r = qi(e.viewport, n);
    return Gn(e) ? ta({
      state: e,
      viewport: r
    }) : ct({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!ze(e))
      return e;
    const n = t.payload.maxScroll;
    if (Le(n, e.viewport.scroll.max))
      return e;
    const r = {
      ...e.viewport,
      scroll: {
        ...e.viewport.scroll,
        max: n
      }
    };
    return {
      ...e,
      viewport: r
    };
  }
  if (t.type === "MOVE_UP" || t.type === "MOVE_DOWN" || t.type === "MOVE_LEFT" || t.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} received while not in DRAGGING phase`) : g());
    const n = ep({
      state: e,
      type: t.type
    });
    return n ? ct({
      state: e,
      impact: n.impact,
      clientSelection: n.clientSelection,
      scrollJumpRequest: n.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const n = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? g(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : g()), {
      ...e,
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: n
    };
  }
  if (t.type === "DROP_ANIMATE") {
    const {
      completed: n,
      dropDuration: r,
      newHomeClientOffset: o
    } = t.payload;
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot animate drop from phase ${e.phase}`) : g()), {
      phase: "DROP_ANIMATING",
      completed: n,
      dropDuration: r,
      newHomeClientOffset: o,
      dimensions: e.dimensions
    };
  }
  if (t.type === "DROP_COMPLETE") {
    const {
      completed: n
    } = t.payload;
    return {
      phase: "IDLE",
      completed: n,
      shouldFlush: !1
    };
  }
  return e;
};
function ne(e, t) {
  return e instanceof Object && "type" in e && e.type === t;
}
const xp = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), yp = (e) => ({
  type: "LIFT",
  payload: e
}), wp = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Ep = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), Dp = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Np = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), Op = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), Sp = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), ra = (e) => ({
  type: "MOVE",
  payload: e
}), Cp = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), Ip = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), _p = () => ({
  type: "MOVE_UP",
  payload: null
}), Ap = () => ({
  type: "MOVE_DOWN",
  payload: null
}), kp = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Pp = () => ({
  type: "MOVE_LEFT",
  payload: null
}), mr = () => ({
  type: "FLUSH",
  payload: null
}), Tp = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), gr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), oa = (e) => ({
  type: "DROP",
  payload: e
}), Rp = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ia = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function jp(e) {
  if (e.length <= 1)
    return;
  const t = e.map((o) => o.descriptor.index), n = {};
  for (let o = 1; o < t.length; o++) {
    const i = t[o], a = t[o - 1];
    i !== a + 1 && (n[i] = !0);
  }
  if (!Object.keys(n).length)
    return;
  const r = t.map((o) => !!n[o] ? `[🔥${o}]` : `${o}`).join(", ");
  process.env.NODE_ENV !== "production" && ae(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${r}
  `);
}
function Mp(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = qe(e.droppable.id, t.draggables);
    jp(n);
  }
}
var $p = (e) => ({
  getState: t,
  dispatch: n
}) => (r) => (o) => {
  if (!ne(o, "LIFT")) {
    r(o);
    return;
  }
  const {
    id: i,
    clientSelection: a,
    movementMode: s
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && n(gr({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Unexpected phase to start a drag") : g()), n(mr()), n(xp({
    draggableId: i,
    movementMode: s
  }));
  const u = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: s === "SNAP"
    }
  }, {
    critical: d,
    dimensions: p,
    viewport: f
  } = e.startPublishing(u);
  Mp(d, p), n(wp({
    critical: d,
    dimensions: p,
    clientSelection: a,
    movementMode: s,
    viewport: f
  }));
}, Lp = (e) => () => (t) => (n) => {
  ne(n, "INITIAL_PUBLISH") && e.dragging(), ne(n, "DROP_ANIMATE") && e.dropping(n.payload.completed.result.reason), (ne(n, "FLUSH") || ne(n, "DROP_COMPLETE")) && e.resting(), t(n);
};
const vr = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, gt = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, aa = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Fe = `${aa.outOfTheWay}s ${vr.outOfTheWay}`, lt = {
  fluid: `opacity ${Fe}`,
  snap: `transform ${Fe}, opacity ${Fe}`,
  drop: (e) => {
    const t = `${e}s ${vr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Fe}`,
  placeholder: `height ${Fe}, width ${Fe}, margin ${Fe}`
}, fo = (e) => Le(e, he) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Wn = {
  moveTo: fo,
  drop: (e, t) => {
    const n = fo(e);
    if (n)
      return t ? `${n} scale(${gt.scale.drop})` : n;
  }
}, {
  minDropTime: qn,
  maxDropTime: sa
} = aa, Bp = sa - qn, mo = 1500, Vp = 0.6;
var Fp = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = ut(e, t);
  if (r <= 0)
    return qn;
  if (r >= mo)
    return sa;
  const o = r / mo, i = qn + Bp * o, a = n === "CANCEL" ? i * Vp : i;
  return Number(a.toFixed(2));
}, zp = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = n, s = Ce(e), c = s ? a[s] : null, l = a[t.descriptor.droppableId], u = ea({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || l,
    viewport: r
  });
  return Se(u, t.client.borderBox.center);
}, Gp = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: Qi({
    draggables: e,
    impact: i,
    destination: r,
    viewport: o,
    forceShouldAnimate: !0
  }),
  didDropInsideDroppable: !1
} : n.at.type === "REORDER" ? {
  impact: n,
  didDropInsideDroppable: !0
} : {
  impact: {
    ...n,
    displaced: ft
  },
  didDropInsideDroppable: !0
};
const Wp = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (!ne(r, "DROP")) {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Rp({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? g(!1, "A DROP action occurred while DROP_PENDING and still waiting") : g()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot drop in phase: ${o.phase}`) : g());
  const s = o.critical, c = o.dimensions, l = c.draggables[o.critical.draggable.id], {
    impact: u,
    didDropInsideDroppable: d
  } = Gp({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), p = d ? cr(u) : null, f = d ? Kt(u) : null, h = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, b = {
    draggableId: l.descriptor.id,
    type: l.descriptor.type,
    source: h,
    reason: i,
    mode: o.movementMode,
    destination: p,
    combine: f
  }, x = zp({
    impact: u,
    draggable: l,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), w = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: b,
    impact: u
  };
  if (!(!Le(o.current.client.offset, x) || !!b.combine)) {
    t(gr({
      completed: w
    }));
    return;
  }
  const E = Fp({
    current: o.current.client.offset,
    destination: x,
    reason: i
  });
  t(Tp({
    newHomeClientOffset: x,
    dropDuration: E,
    completed: w
  }));
};
var ca = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function qp(e) {
  return {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: (t) => {
      t.target !== window && t.target !== window.document || e();
    }
  };
}
function Up({
  onWindowScroll: e
}) {
  function t() {
    e(ca());
  }
  const n = dt(t), r = qp(n);
  let o = $e;
  function i() {
    return o !== $e;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start scroll listener when already active") : g()), o = Ae(window, [r]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop scroll listener when not active") : g()), n.cancel(), o(), o = $e;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const Hp = (e) => ne(e, "DROP_COMPLETE") || ne(e, "DROP_ANIMATE") || ne(e, "FLUSH"), Yp = (e) => {
  const t = Up({
    onWindowScroll: (n) => {
      e.dispatch(Cp({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && ne(r, "INITIAL_PUBLISH") && t.start(), t.isActive() && Hp(r) && t.stop(), n(r);
  };
};
var Kp = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && ae("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && ae(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(r);
  };
  return o.wasCalled = () => t, o;
}, Xp = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((s) => s.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Could not find timer") : g());
    const [a] = e.splice(i, 1);
    a.callback();
  };
  return {
    add: (o) => {
      const i = setTimeout(() => t(i)), a = {
        timerId: i,
        callback: o
      };
      e.push(a);
    },
    flush: () => {
      if (!e.length)
        return;
      const o = [...e];
      e.length = 0, o.forEach((i) => {
        clearTimeout(i.timerId), i.callback();
      });
    }
  };
};
const Jp = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Zp = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Qp = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, ot = (e, t) => {
  Et(), t(), Dt();
}, _t = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function xn(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = Kp(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var eu = (e, t) => {
  const n = Xp();
  let r = null;
  const o = (d, p) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : g()), ot("onBeforeCapture", () => {
      const f = e().onBeforeCapture;
      f && f({
        draggableId: d,
        mode: p
      });
    });
  }, i = (d, p) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g()), ot("onBeforeDragStart", () => {
      const f = e().onBeforeDragStart;
      f && f(_t(d, p));
    });
  }, a = (d, p) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g());
    const f = _t(d, p);
    r = {
      mode: p,
      lastCritical: d,
      lastLocation: f.source,
      lastCombine: null
    }, n.add(() => {
      ot("onDragStart", () => xn(e().onDragStart, f, t, Tt.onDragStart));
    });
  }, s = (d, p) => {
    const f = cr(p), h = Kt(p);
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragMove when onDragStart has not been called") : g());
    const b = !Qp(d, r.lastCritical);
    b && (r.lastCritical = d);
    const x = !Jp(r.lastLocation, f);
    x && (r.lastLocation = f);
    const w = !Zp(r.lastCombine, h);
    if (w && (r.lastCombine = h), !b && !x && !w)
      return;
    const N = {
      ..._t(d, r.mode),
      combine: h,
      destination: f
    };
    n.add(() => {
      ot("onDragUpdate", () => xn(e().onDragUpdate, N, t, Tt.onDragUpdate));
    });
  }, c = () => {
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Can only flush responders while dragging") : g()), n.flush();
  }, l = (d) => {
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : g()), r = null, ot("onDragEnd", () => xn(e().onDragEnd, d, t, Tt.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: a,
    update: s,
    flush: c,
    drop: l,
    abort: () => {
      if (!r)
        return;
      const d = {
        ..._t(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(d);
    }
  };
}, tu = (e, t) => {
  const n = eu(e, t);
  return (r) => (o) => (i) => {
    if (ne(i, "BEFORE_INITIAL_CAPTURE")) {
      n.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (ne(i, "INITIAL_PUBLISH")) {
      const s = i.payload.critical;
      n.beforeStart(s, i.payload.movementMode), o(i), n.start(s, i.payload.movementMode);
      return;
    }
    if (ne(i, "DROP_COMPLETE")) {
      const s = i.payload.completed.result;
      n.flush(), o(i), n.drop(s);
      return;
    }
    if (o(i), ne(i, "FLUSH")) {
      n.abort();
      return;
    }
    const a = r.getState();
    a.phase === "DRAGGING" && n.update(a.critical, a.impact);
  };
};
const nu = (e) => (t) => (n) => {
  if (!ne(n, "DROP_ANIMATION_FINISHED")) {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot finish a drop animating when no drop is occurring") : g()), e.dispatch(gr({
    completed: r.completed
  }));
}, ru = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((ne(i, "FLUSH") || ne(i, "DROP_COMPLETE") || ne(i, "DROP_ANIMATION_FINISHED")) && r(), o(i), !ne(i, "DROP_ANIMATE"))
      return;
    const a = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(ia());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = Ae(window, [a]);
    });
  };
};
var ou = (e) => () => (t) => (n) => {
  (ne(n, "DROP_COMPLETE") || ne(n, "FLUSH") || ne(n, "DROP_ANIMATE")) && e.stopPublishing(), t(n);
}, iu = (e) => {
  let t = !1;
  return () => (n) => (r) => {
    if (ne(r, "INITIAL_PUBLISH")) {
      t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
      return;
    }
    if (n(r), !!t) {
      if (ne(r, "FLUSH")) {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (ne(r, "DROP_COMPLETE")) {
        t = !1;
        const o = r.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const au = (e) => ne(e, "DROP_COMPLETE") || ne(e, "DROP_ANIMATE") || ne(e, "FLUSH");
var su = (e) => (t) => (n) => (r) => {
  if (au(r)) {
    e.stop(), n(r);
    return;
  }
  if (ne(r, "INITIAL_PUBLISH")) {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : g()), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const cu = (e) => (t) => (n) => {
  if (t(n), !ne(n, "PUBLISH_WHILE_DRAGGING"))
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(oa({
    reason: r.reason
  })));
}, lu = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : hi;
var du = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => vi(bp, lu(ol(Lp(n), ou(e), $p(e), Wp, nu, ru, cu, su(i), Yp, iu(t), tu(r, o))));
const yn = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function pu({
  registry: e,
  callbacks: t
}) {
  let n = yn(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, Et();
      const {
        additions: c,
        removals: l,
        modified: u
      } = n, d = Object.keys(c).map((h) => e.draggable.getById(h).getDimension(he)).sort((h, b) => h.descriptor.index - b.descriptor.index), p = Object.keys(u).map((h) => {
        const x = e.droppable.getById(h).callbacks.getScrollWhileDragging();
        return {
          droppableId: h,
          scroll: x
        };
      }), f = {
        additions: d,
        removals: Object.keys(l),
        modified: p
      };
      n = yn(), Dt(), t.publish(f);
    }));
  };
  return {
    add: (c) => {
      const l = c.descriptor.id;
      n.additions[l] = c, n.modified[c.descriptor.droppableId] = !0, n.removals[l] && delete n.removals[l], o();
    },
    remove: (c) => {
      const l = c.descriptor;
      n.removals[l.id] = !0, n.modified[l.droppableId] = !0, n.additions[l.id] && delete n.additions[l.id], o();
    },
    stop: () => {
      r && (cancelAnimationFrame(r), r = null, n = yn());
    }
  };
}
var la = ({
  scrollHeight: e,
  scrollWidth: t,
  height: n,
  width: r
}) => {
  const o = Se({
    x: t,
    y: e
  }, {
    x: r,
    y: n
  });
  return {
    x: Math.max(0, o.x),
    y: Math.max(0, o.y)
  };
}, da = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.documentElement") : g()), e;
}, pa = () => {
  const e = da();
  return la({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, uu = () => {
  const e = ca(), t = pa(), n = e.y, r = e.x, o = da(), i = o.clientWidth, a = o.clientHeight, s = r + i, c = n + a;
  return {
    frame: Pe({
      top: n,
      left: r,
      right: s,
      bottom: c
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: he,
        displacement: he
      }
    }
  };
}, fu = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  Et();
  const r = uu(), o = r.scroll.current, i = e.droppable, a = n.droppable.getAllByType(i.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), s = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o)), c = {
    draggables: Bi(s),
    droppables: Li(a)
  };
  return Dt(), {
    dimensions: c,
    critical: e,
    viewport: r
  };
};
function go(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && ae(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var mu = (e, t) => {
  let n = null;
  const r = pu({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (p, f) => {
    e.droppable.exists(p) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot update is enabled flag of Droppable ${p} as it is not registered`) : g()), n && t.updateDroppableIsEnabled({
      id: p,
      isEnabled: f
    });
  }, i = (p, f) => {
    n && (e.droppable.exists(p) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot update isCombineEnabled flag of Droppable ${p} as it is not registered`) : g()), t.updateDroppableIsCombineEnabled({
      id: p,
      isCombineEnabled: f
    }));
  }, a = (p, f) => {
    n && (e.droppable.exists(p) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot update the scroll on Droppable ${p} as it is not registered`) : g()), t.updateDroppableScroll({
      id: p,
      newScroll: f
    }));
  }, s = (p, f) => {
    n && e.droppable.getById(p).callbacks.scroll(f);
  }, c = () => {
    if (!n)
      return;
    r.stop();
    const p = n.critical.droppable;
    e.droppable.getAllByType(p.type).forEach((f) => f.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, l = (p) => {
    n || (process.env.NODE_ENV !== "production" ? g(!1, "Should only be subscribed when a collection is occurring") : g());
    const f = n.critical.draggable;
    p.type === "ADDITION" && go(e, f, p.value) && r.add(p.value), p.type === "REMOVAL" && go(e, f, p.value) && r.remove(p.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (p) => {
      n && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start capturing critical dimensions as there is already a collection") : g());
      const f = e.draggable.getById(p.draggableId), h = e.droppable.getById(f.descriptor.droppableId), b = {
        draggable: f.descriptor,
        droppable: h.descriptor
      }, x = e.subscribe(l);
      return n = {
        critical: b,
        unsubscribe: x
      }, fu({
        critical: b,
        registry: e,
        scrollOptions: p.scrollOptions
      });
    },
    stopPublishing: c
  };
}, ua = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", gu = (e) => {
  window.scrollBy(e.x, e.y);
};
const vu = ve((e) => Yt(e).filter((t) => !(!t.isEnabled || !t.frame))), hu = (e, t) => vu(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? g(!1, "Invalid result") : g()), Ki(r.frame.pageMarginBox)(e))) || null;
var bu = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return hu(e, n);
};
const vt = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: (e) => e ** 2,
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  },
  disabled: !1
};
var xu = (e, t, n = () => vt) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, fa = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? (process.env.NODE_ENV !== "production" && ae(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (n - e) / r;
}, hr = 1, yu = (e, t, n = () => vt) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return hr;
  const i = 1 - fa({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = r.maxPixelScroll * r.ease(i);
  return Math.ceil(a);
}, wu = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, a = t, s = i, l = Date.now() - a;
  if (l >= i)
    return e;
  if (l < o)
    return hr;
  const u = fa({
    startOfRange: o,
    endOfRange: s,
    current: l
  }), d = e * r.ease(u);
  return Math.ceil(d);
}, vo = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = yu(e, t, o);
  return i === 0 ? 0 : r ? Math.max(wu(i, n, o), hr) : i;
}, ho = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = xu(e, r, i);
  return t[r.end] < t[r.start] ? vo({
    distanceToEdge: t[r.end],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * vo({
    distanceToEdge: t[r.start],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, Eu = ({
  container: e,
  subject: t,
  proposedScroll: n
}) => {
  const r = t.height > e.height, o = t.width > e.width;
  return !o && !r ? n : o && r ? null : {
    x: o ? 0 : n.x,
    y: r ? 0 : n.y
  };
};
const Du = $i((e) => e === 0 ? 0 : e);
var ma = ({
  dragStartTime: e,
  container: t,
  subject: n,
  center: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = {
    top: r.y - t.top,
    right: t.right - r.x,
    bottom: t.bottom - r.y,
    left: r.x - t.left
  }, s = ho({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: lr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = ho({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: zi,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = Du({
    x: c,
    y: s
  });
  if (Le(l, he))
    return null;
  const u = Eu({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return u ? Le(u, he) ? null : u : null;
};
const Nu = $i((e) => e === 0 ? 0 : e > 0 ? 1 : -1), br = /* @__PURE__ */ (() => {
  const e = (t, n) => t < 0 ? t : t > n ? t - n : 0;
  return ({
    current: t,
    max: n,
    change: r
  }) => {
    const o = xe(t, r), i = {
      x: e(o.x, n.x),
      y: e(o.y, n.y)
    };
    return Le(i, he) ? null : i;
  };
})(), ga = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Nu(n), i = br({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, xr = (e, t) => ga({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Ou = (e, t) => {
  if (!xr(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return br({
    current: r,
    max: n,
    change: t
  });
}, yr = (e, t) => {
  const n = e.frame;
  return n ? ga({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, Su = (e, t) => {
  const n = e.frame;
  return !n || !yr(e, t) ? null : br({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var Cu = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = ma({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && xr(e, a) ? a : null;
}, Iu = ({
  droppable: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.frame;
  if (!a)
    return null;
  const s = ma({
    dragStartTime: r,
    container: a.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && yr(e, s) ? s : null;
}, bo = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const d = e.viewport, p = Cu({
      dragStartTime: t,
      viewport: d,
      subject: c,
      center: a,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: i
    });
    if (p) {
      r(p);
      return;
    }
  }
  const l = bu({
    center: a,
    destination: Ce(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const u = Iu({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: a,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  u && o(l.descriptor.id, u);
}, _u = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => vt
}) => {
  const r = dt(e), o = dt(t);
  let i = null;
  const a = (l) => {
    i || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fluid scroll if not dragging") : g());
    const {
      shouldUseTimeDampening: u,
      dragStartTime: d
    } = i;
    bo({
      state: l,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: d,
      shouldUseTimeDampening: u,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (l) => {
      Et(), i && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start auto scrolling when already started") : g());
      const u = Date.now();
      let d = !1;
      const p = () => {
        d = !0;
      };
      bo({
        state: l,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: p,
        scrollDroppable: p,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: u,
        shouldUseTimeDampening: d
      }, Dt(), d && a(l);
    },
    stop: () => {
      i && (r.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, Au = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: n
}) => {
  const r = (s, c) => {
    const l = xe(s.current.client.selection, c);
    e({
      client: l
    });
  }, o = (s, c) => {
    if (!yr(s, c))
      return c;
    const l = Su(s, c);
    if (!l)
      return t(s.descriptor.id, c), null;
    const u = Se(c, l);
    return t(s.descriptor.id, u), Se(c, u);
  }, i = (s, c, l) => {
    if (!s || !xr(c, l))
      return l;
    const u = Ou(c, l);
    if (!u)
      return n(l), null;
    const d = Se(l, u);
    return n(d), Se(l, d);
  };
  return (s) => {
    const c = s.scrollJumpRequest;
    if (!c)
      return;
    const l = Ce(s.impact);
    l || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot perform a jump scroll when there is no destination") : g());
    const u = o(s.dimensions.droppables[l], c);
    if (!u)
      return;
    const d = s.viewport, p = i(s.isWindowScrollAllowed, d, u);
    p && r(s, p);
  };
}, ku = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = _u({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = Au({
    move: n,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (c) => {
      if (!(r().disabled || c.phase !== "DRAGGING")) {
        if (c.movementMode === "FLUID") {
          o.scroll(c);
          return;
        }
        c.scrollJumpRequest && i(c);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const Ze = "data-rfd", Qe = (() => {
  const e = `${Ze}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Un = (() => {
  const e = `${Ze}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Pu = (() => {
  const e = `${Ze}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), xo = {
  contextId: `${Ze}-scroll-container-context-id`
}, Tu = (e) => (t) => `[${t}="${e}"]`, it = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), Ru = "pointer-events: none;";
var ju = (e) => {
  const t = Tu(e), n = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Qe.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: Ru,
        dropAnimating: s
      }
    };
  })(), r = (() => {
    const s = `
      transition: ${lt.outOfTheWay};
    `;
    return {
      selector: t(Un.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(Pu.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, a = [r, n, o, {
    selector: "body",
    styles: {
      dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
    }
  }];
  return {
    always: it(a, "always"),
    resting: it(a, "resting"),
    dragging: it(a, "dragging"),
    dropAnimating: it(a, "dropAnimating"),
    userCancel: it(a, "userCancel")
  };
};
const Ie = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Xa : Ne, wn = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find the head to append a style to") : g()), e;
}, yo = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Mu(e, t) {
  const n = Y(() => ju(e), [e]), r = te(null), o = te(null), i = P(ve((d) => {
    const p = o.current;
    p || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), p.textContent = d;
  }), []), a = P((d) => {
    const p = r.current;
    p || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), p.textContent = d;
  }, []);
  Ie(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? g(!1, "style elements already mounted") : g());
    const d = yo(t), p = yo(t);
    return r.current = d, o.current = p, d.setAttribute(`${Ze}-always`, e), p.setAttribute(`${Ze}-dynamic`, e), wn().appendChild(d), wn().appendChild(p), a(n.always), i(n.resting), () => {
      const f = (h) => {
        const b = h.current;
        b || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot unmount ref as it is not set") : g()), wn().removeChild(b), h.current = null;
      };
      f(r), f(o);
    };
  }, [t, a, i, n.always, n.resting, e]);
  const s = P(() => i(n.dragging), [i, n.dragging]), c = P((d) => {
    if (d === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), l = P(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return Y(() => ({
    dragging: s,
    dropping: c,
    resting: l
  }), [s, c, l]);
}
function va(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var ha = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Nt(e) {
  return e instanceof ha(e).HTMLElement;
}
function ba(e, t) {
  const n = `[${Qe.contextId}="${e}"]`, r = va(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && ae(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(Qe.draggableId) === t);
  return o ? Nt(o) ? o : (process.env.NODE_ENV !== "production" && ae("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ae(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function $u(e) {
  const t = te({}), n = te(null), r = te(null), o = te(!1), i = P(function(p, f) {
    const h = {
      id: p,
      focus: f
    };
    return t.current[p] = h, function() {
      const x = t.current;
      x[p] !== h && delete x[p];
    };
  }, []), a = P(function(p) {
    const f = ba(e, p);
    f && f !== document.activeElement && f.focus();
  }, [e]), s = P(function(p, f) {
    n.current === p && (n.current = f);
  }, []), c = P(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const p = n.current;
      p && a(p);
    }));
  }, [a]), l = P(function(p) {
    n.current = null;
    const f = document.activeElement;
    f && f.getAttribute(Qe.draggableId) === p && (n.current = p);
  }, []);
  return Ie(() => (o.current = !0, function() {
    o.current = !1;
    const p = r.current;
    p && cancelAnimationFrame(p);
  }), []), Y(() => ({
    register: i,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, l, c, s]);
}
function Lu() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function n(d) {
    return t.push(d), function() {
      const f = t.indexOf(d);
      f !== -1 && t.splice(f, 1);
    };
  }
  function r(d) {
    t.length && t.forEach((p) => p(d));
  }
  function o(d) {
    return e.draggables[d] || null;
  }
  function i(d) {
    const p = o(d);
    return p || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find draggable entry with id [${d}]`) : g()), p;
  }
  const a = {
    register: (d) => {
      e.draggables[d.descriptor.id] = d, r({
        type: "ADDITION",
        value: d
      });
    },
    update: (d, p) => {
      const f = e.draggables[p.descriptor.id];
      f && f.uniqueId === d.uniqueId && (delete e.draggables[p.descriptor.id], e.draggables[d.descriptor.id] = d);
    },
    unregister: (d) => {
      const p = d.descriptor.id, f = o(p);
      f && d.uniqueId === f.uniqueId && (delete e.draggables[p], e.droppables[d.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: d
      }));
    },
    getById: i,
    findById: o,
    exists: (d) => !!o(d),
    getAllByType: (d) => Object.values(e.draggables).filter((p) => p.descriptor.type === d)
  };
  function s(d) {
    return e.droppables[d] || null;
  }
  function c(d) {
    const p = s(d);
    return p || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find droppable entry with id [${d}]`) : g()), p;
  }
  const l = {
    register: (d) => {
      e.droppables[d.descriptor.id] = d;
    },
    unregister: (d) => {
      const p = s(d.descriptor.id);
      p && d.uniqueId === p.uniqueId && delete e.droppables[d.descriptor.id];
    },
    getById: c,
    findById: s,
    exists: (d) => !!s(d),
    getAllByType: (d) => Object.values(e.droppables).filter((p) => p.descriptor.type === d)
  };
  function u() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: a,
    droppable: l,
    subscribe: n,
    clean: u
  };
}
function Bu() {
  const e = Y(Lu, []);
  return Ne(() => function() {
    e.clean();
  }, [e]), e;
}
var wr = ce.createContext(null), ht = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.body") : g()), e;
};
const Vu = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
}, Fu = (e) => `rfd-announcement-${e}`;
function zu(e) {
  const t = Y(() => Fu(e), [e]), n = te(null);
  return Ne(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Lt(i.style, Vu), ht().appendChild(i), function() {
      setTimeout(function() {
        const c = ht();
        c.contains(i) && c.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), P((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && ae(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
const Gu = {
  separator: "::"
};
function Er(e, t = Gu) {
  const n = ce.useId();
  return Y(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
function Wu({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function qu({
  contextId: e,
  text: t
}) {
  const n = Er("hidden-text", {
    separator: "-"
  }), r = Y(() => Wu({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return Ne(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", ht().appendChild(i), function() {
      const s = ht();
      s.contains(i) && s.removeChild(i);
    };
  }, [r, t]), r;
}
var Zt = ce.createContext(null), Uu = {
  react: "^18.0.0 || ^19.0.0"
};
const Hu = /(\d+)\.(\d+)\.(\d+)/, wo = (e) => {
  const t = Hu.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? g(!1, `Unable to parse React version ${e}`) : g());
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, Yu = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Ku = (e, t) => {
  const n = wo(e), r = wo(t);
  Yu(n, r) || process.env.NODE_ENV !== "production" && ae(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const En = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Xu = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && ae(`
      No <!doctype html> found.

      ${En}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && ae(`
      Unexpected <!doctype> found: (${t.name})

      ${En}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && ae(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${En}
    `);
};
function Dr(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Ot(e, t) {
  Dr(() => {
    Ne(() => {
      try {
        e();
      } catch (n) {
        Fn(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function Ju() {
  Ot(() => {
    Ku(Uu.react, ce.version), Xu(document);
  }, []);
}
function Nr(e) {
  const t = te(e);
  return Ne(() => {
    t.current = e;
  }), t;
}
function Zu() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(a) {
    return a === e;
  }
  function r(a) {
    e && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot claim lock as it is already claimed") : g());
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot release lock when there is no lock") : g()), e = null;
  }
  function i() {
    e && (e.abandon(), o());
  }
  return {
    isClaimed: t,
    isActive: n,
    claim: r,
    release: o,
    tryAbandon: i
  };
}
function bt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Qu = 9, ef = 13, Or = 27, xa = 32, tf = 33, nf = 34, rf = 35, of = 36, af = 37, sf = 38, cf = 39, lf = 40, df = {
  [ef]: !0,
  [Qu]: !0
};
var ya = (e) => {
  df[e.keyCode] && e.preventDefault();
};
const Qt = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})(), wa = 0, Eo = 5;
function pf(e, t) {
  return Math.abs(t.x - e.x) >= Eo || Math.abs(t.y - e.y) >= Eo;
}
const Do = {
  type: "IDLE"
};
function uf({
  cancel: e,
  completed: t,
  getPhase: n,
  setPhase: r
}) {
  return [{
    eventName: "mousemove",
    fn: (o) => {
      const {
        button: i,
        clientX: a,
        clientY: s
      } = o;
      if (i !== wa)
        return;
      const c = {
        x: a,
        y: s
      }, l = n();
      if (l.type === "DRAGGING") {
        o.preventDefault(), l.actions.move(c);
        return;
      }
      l.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot be IDLE") : g());
      const u = l.point;
      if (!pf(u, c))
        return;
      o.preventDefault();
      const d = l.actions.fluidLift(c);
      r({
        type: "DRAGGING",
        actions: d
      });
    }
  }, {
    eventName: "mouseup",
    fn: (o) => {
      const i = n();
      if (i.type !== "DRAGGING") {
        e();
        return;
      }
      o.preventDefault(), i.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "mousedown",
    fn: (o) => {
      n().type === "DRAGGING" && o.preventDefault(), e();
    }
  }, {
    eventName: "keydown",
    fn: (o) => {
      if (n().type === "PENDING") {
        e();
        return;
      }
      if (o.keyCode === Or) {
        o.preventDefault(), e();
        return;
      }
      ya(o);
    }
  }, {
    eventName: "resize",
    fn: e
  }, {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: () => {
      n().type === "PENDING" && e();
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: (o) => {
      const i = n();
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Unexpected phase") : g()), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: Qt,
    fn: e
  }];
}
function ff(e) {
  const t = te(Do), n = te($e), r = Y(() => ({
    eventName: "mousedown",
    fn: function(d) {
      if (d.defaultPrevented || d.button !== wa || d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
        return;
      const p = e.findClosestDraggableId(d);
      if (!p)
        return;
      const f = e.tryGetLock(p, a, {
        sourceEvent: d
      });
      if (!f)
        return;
      d.preventDefault();
      const h = {
        x: d.clientX,
        y: d.clientY
      };
      n.current(), l(f, h);
    }
  }), [e]), o = Y(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (u) => {
      if (u.defaultPrevented)
        return;
      const d = e.findClosestDraggableId(u);
      if (!d)
        return;
      const p = e.findOptionsForDraggable(d);
      p && (p.shouldRespectForcePress || e.canGetLock(d) && u.preventDefault());
    }
  }), [e]), i = P(function() {
    const d = {
      passive: !1,
      capture: !0
    };
    n.current = Ae(window, [o, r], d);
  }, [o, r]), a = P(() => {
    t.current.type !== "IDLE" && (t.current = Do, n.current(), i());
  }, [i]), s = P(() => {
    const u = t.current;
    a(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [a]), c = P(function() {
    const d = {
      capture: !0,
      passive: !1
    }, p = uf({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (f) => {
        t.current = f;
      }
    });
    n.current = Ae(window, p, d);
  }, [s, a]), l = P(function(d, p) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g()), t.current = {
      type: "PENDING",
      point: p,
      actions: d
    }, c();
  }, [c]);
  Ie(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function mf() {
}
const gf = {
  [nf]: !0,
  [tf]: !0,
  [of]: !0,
  [rf]: !0
};
function vf(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Or) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === xa) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === lf) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === sf) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === cf) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === af) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (gf[o.keyCode]) {
        o.preventDefault();
        return;
      }
      ya(o);
    }
  }, {
    eventName: "mousedown",
    fn: n
  }, {
    eventName: "mouseup",
    fn: n
  }, {
    eventName: "click",
    fn: n
  }, {
    eventName: "touchstart",
    fn: n
  }, {
    eventName: "resize",
    fn: n
  }, {
    eventName: "wheel",
    fn: n,
    options: {
      passive: !0
    }
  }, {
    eventName: Qt,
    fn: n
  }];
}
function hf(e) {
  const t = te(mf), n = Y(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== xa)
        return;
      const a = e.findClosestDraggableId(i);
      if (!a)
        return;
      const s = e.tryGetLock(a, u, {
        sourceEvent: i
      });
      if (!s)
        return;
      i.preventDefault();
      let c = !0;
      const l = s.snapLift();
      t.current();
      function u() {
        c || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop capturing a keyboard drag when not capturing") : g()), c = !1, t.current(), r();
      }
      t.current = Ae(window, vf(l, u), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = P(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = Ae(window, [n], i);
  }, [n]);
  Ie(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const Dn = {
  type: "IDLE"
}, bf = 120, xf = 0.15;
function yf({
  cancel: e,
  getPhase: t
}) {
  return [{
    eventName: "orientationchange",
    fn: e
  }, {
    eventName: "resize",
    fn: e
  }, {
    eventName: "contextmenu",
    fn: (n) => {
      n.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: (n) => {
      if (t().type !== "DRAGGING") {
        e();
        return;
      }
      n.keyCode === Or && n.preventDefault(), e();
    }
  }, {
    eventName: Qt,
    fn: e
  }];
}
function wf({
  cancel: e,
  completed: t,
  getPhase: n
}) {
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: (r) => {
      const o = n();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      o.hasMoved = !0;
      const {
        clientX: i,
        clientY: a
      } = r.touches[0], s = {
        x: i,
        y: a
      };
      r.preventDefault(), o.actions.move(s);
    }
  }, {
    eventName: "touchend",
    fn: (r) => {
      const o = n();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      r.preventDefault(), o.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "touchcancel",
    fn: (r) => {
      if (n().type !== "DRAGGING") {
        e();
        return;
      }
      r.preventDefault(), e();
    }
  }, {
    eventName: "touchforcechange",
    fn: (r) => {
      const o = n();
      o.type === "IDLE" && (process.env.NODE_ENV, g());
      const i = r.touches[0];
      if (!i || !(i.force >= xf))
        return;
      const s = o.actions.shouldRespectForcePress();
      if (o.type === "PENDING") {
        s && e();
        return;
      }
      if (s) {
        if (o.hasMoved) {
          r.preventDefault();
          return;
        }
        e();
        return;
      }
      r.preventDefault();
    }
  }, {
    eventName: Qt,
    fn: e
  }];
}
function Ef(e) {
  const t = te(Dn), n = te($e), r = P(function() {
    return t.current;
  }, []), o = P(function(f) {
    t.current = f;
  }, []), i = Y(() => ({
    eventName: "touchstart",
    fn: function(f) {
      if (f.defaultPrevented)
        return;
      const h = e.findClosestDraggableId(f);
      if (!h)
        return;
      const b = e.tryGetLock(h, s, {
        sourceEvent: f
      });
      if (!b)
        return;
      const x = f.touches[0], {
        clientX: w,
        clientY: N
      } = x, E = {
        x: w,
        y: N
      };
      n.current(), d(b, E);
    }
  }), [e]), a = P(function() {
    const f = {
      capture: !0,
      passive: !1
    };
    n.current = Ae(window, [i], f);
  }, [i]), s = P(() => {
    const p = t.current;
    p.type !== "IDLE" && (p.type === "PENDING" && clearTimeout(p.longPressTimerId), o(Dn), n.current(), a());
  }, [a, o]), c = P(() => {
    const p = t.current;
    s(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [s]), l = P(function() {
    const f = {
      capture: !0,
      passive: !1
    }, h = {
      cancel: c,
      completed: s,
      getPhase: r
    }, b = Ae(window, wf(h), f), x = Ae(window, yf(h), f);
    n.current = function() {
      b(), x();
    };
  }, [c, r, s]), u = P(function() {
    const f = r();
    f.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? g(!1, `Cannot start dragging from phase ${f.type}`) : g());
    const h = f.actions.fluidLift(f.point);
    o({
      type: "DRAGGING",
      actions: h,
      hasMoved: !1
    });
  }, [r, o]), d = P(function(f, h) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g());
    const b = setTimeout(u, bf);
    o({
      type: "PENDING",
      point: h,
      actions: f,
      longPressTimerId: b
    }), l();
  }, [l, r, o, u]);
  Ie(function() {
    return a(), function() {
      n.current();
      const h = r();
      h.type === "PENDING" && (clearTimeout(h.longPressTimerId), o(Dn));
    };
  }, [r, a, o]), Ie(function() {
    return Ae(window, [{
      eventName: "touchmove",
      fn: () => {
      },
      options: {
        capture: !1,
        passive: !1
      }
    }]);
  }, []);
}
function Df(e) {
  Dr(() => {
    const t = Nr(e);
    Ot(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot change the amount of sensor hooks after mounting") : g(!1));
    });
  });
}
const Nf = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Ea(e, t) {
  if (t == null)
    return !1;
  if (Nf.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Ea(e, t.parentElement);
}
function Of(e, t) {
  const n = t.target;
  return Nt(n) ? Ea(e, n) : !1;
}
var Sf = (e) => Pe(e.getBoundingClientRect()).center;
function Cf(e) {
  return e instanceof ha(e).Element;
}
const If = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function Da(e, t) {
  return e == null ? null : e[If](t) ? e : Da(e.parentElement, t);
}
function _f(e, t) {
  return e.closest ? e.closest(t) : Da(e, t);
}
function Af(e) {
  return `[${Qe.contextId}="${e}"]`;
}
function kf(e, t) {
  const n = t.target;
  if (!Cf(n))
    return process.env.NODE_ENV !== "production" && ae("event.target must be a Element"), null;
  const r = Af(e), o = _f(n, r);
  return o ? Nt(o) ? o : (process.env.NODE_ENV !== "production" && ae("drag handle must be a HTMLElement"), null) : null;
}
function Pf(e, t) {
  const n = kf(e, t);
  return n ? n.getAttribute(Qe.draggableId) : null;
}
function Tf(e, t) {
  const n = `[${Un.contextId}="${e}"]`, o = va(document, n).find((i) => i.getAttribute(Un.id) === t);
  return o ? Nt(o) ? o : (process.env.NODE_ENV !== "production" && ae("Draggable element is not a HTMLElement"), null) : null;
}
function Rf(e) {
  e.preventDefault();
}
function At({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return n() ? e !== t ? (r && process.env.NODE_ENV !== "production" && ae(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (r && process.env.NODE_ENV !== "production" && ae(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Na({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !ua(t.getState(), r)) : (process.env.NODE_ENV !== "production" && ae(`Unable to find draggable with id: ${r}`), !1);
}
function jf({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Na({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), l = Tf(t, c.descriptor.id);
  if (!l)
    return process.env.NODE_ENV !== "production" && ae(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && Of(l, a))
    return null;
  const u = e.claim(i || $e);
  let d = "PRE_DRAG";
  function p() {
    return c.options.shouldRespectForcePress;
  }
  function f() {
    return e.isActive(u);
  }
  function h(v, D) {
    At({
      expected: v,
      phase: d,
      isLockActive: f,
      shouldWarn: !0
    }) && n.dispatch(D());
  }
  const b = h.bind(null, "DRAGGING");
  function x(v) {
    function D() {
      e.release(), d = "COMPLETED";
    }
    d !== "PRE_DRAG" && (D(), process.env.NODE_ENV !== "production" ? g(!1, `Cannot lift in phase ${d}`) : g()), n.dispatch(yp(v.liftActionArgs)), d = "DRAGGING";
    function A(j, z = {
      shouldBlockNextClick: !1
    }) {
      if (v.cleanup(), z.shouldBlockNextClick) {
        const F = Ae(window, [{
          eventName: "click",
          fn: Rf,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(F);
      }
      D(), n.dispatch(oa({
        reason: j
      }));
    }
    return {
      isActive: () => At({
        expected: "DRAGGING",
        phase: d,
        isLockActive: f,
        shouldWarn: !1
      }),
      shouldRespectForcePress: p,
      drop: (j) => A("DROP", j),
      cancel: (j) => A("CANCEL", j),
      ...v.actions
    };
  }
  function w(v) {
    const D = dt((j) => {
      b(() => ra({
        client: j
      }));
    });
    return {
      ...x({
        liftActionArgs: {
          id: o,
          clientSelection: v,
          movementMode: "FLUID"
        },
        cleanup: () => D.cancel(),
        actions: {
          move: D
        }
      }),
      move: D
    };
  }
  function N() {
    const v = {
      moveUp: () => b(_p),
      moveRight: () => b(kp),
      moveDown: () => b(Ap),
      moveLeft: () => b(Pp)
    };
    return x({
      liftActionArgs: {
        id: o,
        clientSelection: Sf(l),
        movementMode: "SNAP"
      },
      cleanup: $e,
      actions: v
    });
  }
  function E() {
    At({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: f,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => At({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: f,
      shouldWarn: !1
    }),
    shouldRespectForcePress: p,
    fluidLift: w,
    snapLift: N,
    abort: E
  };
}
const Mf = [ff, hf, Ef];
function $f({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? Mf : [], ...r || []], a = De(() => Zu())[0], s = P(function(x, w) {
    bt(x) && !bt(w) && a.tryAbandon();
  }, [a]);
  Ie(function() {
    let x = t.getState();
    return t.subscribe(() => {
      const N = t.getState();
      s(x, N), x = N;
    });
  }, [a, t, s]), Ie(() => a.tryAbandon, [a.tryAbandon]);
  const c = P((b) => Na({
    lockAPI: a,
    registry: n,
    store: t,
    draggableId: b
  }), [a, n, t]), l = P((b, x, w) => jf({
    lockAPI: a,
    registry: n,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: x || null,
    sourceEvent: w && w.sourceEvent ? w.sourceEvent : null
  }), [e, a, n, t]), u = P((b) => Pf(e, b), [e]), d = P((b) => {
    const x = n.draggable.findById(b);
    return x ? x.options : null;
  }, [n.draggable]), p = P(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(mr()));
  }, [a, t]), f = P(() => a.isClaimed(), [a]), h = Y(() => ({
    canGetLock: c,
    tryGetLock: l,
    findClosestDraggableId: u,
    findOptionsForDraggable: d,
    tryReleaseLock: p,
    isLockClaimed: f
  }), [c, l, u, d, p, f]);
  Df(i);
  for (let b = 0; b < i.length; b++)
    i[b](h);
}
const Lf = (e) => ({
  onBeforeCapture: (t) => {
    Qo(() => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    });
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Bf = (e) => ({
  ...vt,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...vt.durationDampening,
    ...e.autoScrollerOptions
  }
});
function at(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find store from lazy ref") : g()), e.current;
}
function Vf(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = te(null);
  Ju();
  const s = Nr(e), c = P(() => Lf(s.current), [s]), l = P(() => Bf(s.current), [s]), u = zu(t), d = qu({
    contextId: t,
    text: i
  }), p = Mu(t, o), f = P((F) => {
    at(a).dispatch(F);
  }, []), h = Y(() => Gr({
    publishWhileDragging: Ep,
    updateDroppableScroll: Np,
    updateDroppableIsEnabled: Op,
    updateDroppableIsCombineEnabled: Sp,
    collectionStarting: Dp
  }, f), [f]), b = Bu(), x = Y(() => mu(b, h), [b, h]), w = Y(() => ku({
    scrollWindow: gu,
    scrollDroppable: x.scrollDroppable,
    getAutoScrollerOptions: l,
    ...Gr({
      move: ra
    }, f)
  }), [x.scrollDroppable, f, l]), N = $u(t), E = Y(() => du({
    announce: u,
    autoScroller: w,
    dimensionMarshal: x,
    focusMarshal: N,
    getResponders: c,
    styleMarshal: p
  }), [u, w, x, N, c, p]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== E && process.env.NODE_ENV !== "production" && ae("unexpected store change"), a.current = E;
  const y = P(() => {
    const F = at(a);
    F.getState().phase !== "IDLE" && F.dispatch(mr());
  }, []), v = P(() => {
    const F = at(a).getState();
    return F.phase === "DROP_ANIMATING" ? !0 : F.phase === "IDLE" ? !1 : F.isDragging;
  }, []), D = Y(() => ({
    isDragging: v,
    tryAbort: y
  }), [v, y]);
  n(D);
  const A = P((F) => ua(at(a).getState(), F), []), j = P(() => ze(at(a).getState()), []), z = Y(() => ({
    marshal: x,
    focus: N,
    contextId: t,
    canLift: A,
    isMovementAllowed: j,
    dragHandleUsageInstructionsId: d,
    registry: b
  }), [t, x, d, N, A, j, b]);
  return $f({
    contextId: t,
    store: E,
    registry: b,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), Ne(() => y, [y]), ce.createElement(Zt.Provider, {
    value: z
  }, ce.createElement(Jl, {
    context: wr,
    store: E
  }, e.children));
}
function Ff() {
  return ce.useId();
}
function Sr(e) {
  const t = Ff(), n = e.dragHandleUsageInstructions || Tt.dragHandleUsageInstructions;
  return ce.createElement(ld, null, (r) => ce.createElement(Vf, {
    nonce: e.nonce,
    contextId: t,
    setCallbacks: r,
    dragHandleUsageInstructions: n,
    enableDefaultSensors: e.enableDefaultSensors,
    sensors: e.sensors,
    onBeforeCapture: e.onBeforeCapture,
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragUpdate: e.onDragUpdate,
    onDragEnd: e.onDragEnd,
    autoScrollerOptions: e.autoScrollerOptions
  }, e.children));
}
const No = {
  dragging: 5e3,
  dropAnimating: 4500
}, zf = (e, t) => t ? lt.drop(t.duration) : e ? lt.snap : lt.fluid, Gf = (e, t) => {
  if (e)
    return t ? gt.opacity.drop : gt.opacity.combining;
}, Wf = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function qf(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = Wf(e), c = !!i, l = c ? Wn.drop(r, a) : Wn.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: zf(s, i),
    transform: l,
    opacity: Gf(a, c),
    zIndex: c ? No.dropAnimating : No.dragging,
    pointerEvents: "none"
  };
}
function Uf(e) {
  return {
    transform: Wn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Hf(e) {
  return e.type === "DRAGGING" ? qf(e) : Uf(e);
}
function Yf(e, t, n = he) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = ki(o, r), a = $t(i, n), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: r.display
  }, c = {
    x: i.marginBox.width,
    y: i.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: s,
    displaceBy: c,
    client: i,
    page: a
  };
}
function Kf(e) {
  const t = Er("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = Y(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), l = P((f) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get dimension when no ref is set") : g()), Yf(n, h, f);
  }, [n, o]), u = Y(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: l
  }), [n, l, c, t]), d = te(u), p = te(!0);
  Ie(() => (r.draggable.register(d.current), () => r.draggable.unregister(d.current)), [r.draggable]), Ie(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const f = d.current;
    d.current = u, r.draggable.update(u, f);
  }, [u, r.draggable]);
}
var Cr = ce.createContext(null);
function Oa(e) {
  e && Nt(e) || (process.env.NODE_ENV !== "production" ? g(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : g());
}
function Xf(e, t, n) {
  Ot(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? g(!1, "Draggable requires a draggableId") : g(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? g(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : g(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? g(!1, `${r(o)} requires an integer index prop`) : g(!1)), e.mapped.type !== "DRAGGING" && (Oa(n()), e.isEnabled && (ba(t, o) || (process.env.NODE_ENV !== "production" ? g(!1, `${r(o)} Unable to find drag handle`) : g(!1))));
  });
}
function Jf(e) {
  Dr(() => {
    const t = te(e);
    Ot(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Draggable isClone prop value changed during component life") : g(!1));
    }, [e]);
  });
}
function Ft(e) {
  const t = qt(e);
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find required context") : g()), t;
}
function Zf(e) {
  e.preventDefault();
}
const Qf = (e) => {
  const t = te(null), n = P((D = null) => {
    t.current = D;
  }, []), r = P(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Ft(Zt), {
    type: s,
    droppableId: c
  } = Ft(Cr), l = Y(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: u,
    draggableId: d,
    isEnabled: p,
    shouldRespectForcePress: f,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: x,
    dropAnimationFinished: w
  } = e;
  if (Xf(e, o, r), Jf(b), !b) {
    const D = Y(() => ({
      descriptor: l,
      registry: a,
      getDraggableRef: r,
      canDragInteractiveElements: h,
      shouldRespectForcePress: f,
      isEnabled: p
    }), [l, a, r, h, f, p]);
    Kf(D);
  }
  const N = Y(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": d,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Zf
  } : null, [o, i, d, p]), E = P((D) => {
    x.type === "DRAGGING" && x.dropping && D.propertyName === "transform" && Qo(w);
  }, [w, x]), y = Y(() => {
    const D = Hf(x), A = x.type === "DRAGGING" && x.dropping ? E : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": d,
        style: D,
        onTransitionEnd: A
      },
      dragHandleProps: N
    };
  }, [o, N, d, x, E, n]), v = Y(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return ce.createElement(ce.Fragment, null, u(y, x.snapshot, v));
};
var Sa = (e, t) => e === t, Ca = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const em = (e) => e.combine ? e.combine.draggableId : null, tm = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function nm() {
  const e = ve((o, i) => ({
    x: o,
    y: i
  })), t = ve((o, i, a = null, s = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), n = ve((o, i, a, s, c = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: l,
      mode: i,
      offset: o,
      dimension: a,
      forceShouldAnimate: u,
      snapshot: t(i, s, c, l, null)
    }
  }));
  return (o, i) => {
    if (bt(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = Ce(o.impact), l = tm(o.impact), u = o.forceShouldAnimate;
      return n(e(a.x, a.y), o.movementMode, s, i.isClone, c, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], l = a.result, u = l.mode, d = Ca(l), p = em(l), h = {
        duration: o.dropDuration,
        curve: vr.drop,
        moveTo: o.newHomeClientOffset,
        opacity: p ? gt.opacity.drop : null,
        scale: p ? gt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: h,
          draggingOver: d,
          combineWith: p,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, s, d, p, h)
        }
      };
    }
    return null;
  };
}
function Ia(e = null) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null
  };
}
const rm = {
  mapped: {
    type: "SECONDARY",
    offset: he,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Ia(null)
  }
};
function om() {
  const e = ve((a, s) => ({
    x: a,
    y: s
  })), t = ve(Ia), n = ve((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), r = (a) => a ? n(he, a, !0) : null, o = (a, s, c, l) => {
    const u = c.displaced.visible[a], d = !!(l.inVirtualList && l.effected[a]), p = Kt(c), f = p && p.draggableId === a ? s : null;
    if (!u) {
      if (!d)
        return r(f);
      if (c.displaced.invisible[a])
        return null;
      const x = tt(l.displacedBy.point), w = e(x.x, x.y);
      return n(w, f, !0);
    }
    if (d)
      return r(f);
    const h = c.displacedBy.point, b = e(h.x, h.y);
    return n(b, f, u.shouldAnimate);
  };
  return (a, s) => {
    if (bt(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const c = a.completed;
      return c.result.draggableId === s.draggableId ? null : o(s.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const im = () => {
  const e = nm(), t = om();
  return (r, o) => e(r, o) || t(r, o) || rm;
}, am = {
  dropAnimationFinished: ia
}, sm = Ai(im, am, null, {
  context: wr,
  areStatePropsEqual: Sa
})(Qf);
function _a(e) {
  return Ft(Cr).isUsingCloneFor === e.draggableId && !e.isClone ? null : ce.createElement(sm, e);
}
function Ir(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return ce.createElement(_a, Lt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const _r = (e) => (t) => e === t, cm = _r("scroll"), lm = _r("auto"), dm = _r("visible"), Oo = (e, t) => t(e.overflowX) || t(e.overflowY), pm = (e, t) => t(e.overflowX) && t(e.overflowY), Aa = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Oo(n, cm) || Oo(n, lm);
}, um = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = ht(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, g()), !Aa(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return pm(r, dm) || process.env.NODE_ENV !== "production" && ae(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Ar = (e) => e == null ? null : e === document.body ? um() ? e : null : e === document.documentElement ? null : Aa(e) ? e : Ar(e.parentElement);
var fm = (e) => {
  !e || !Ar(e.parentElement) || process.env.NODE_ENV !== "production" && ae(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Hn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const ka = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : ka(e.parentElement) : !1;
var mm = (e) => {
  const t = Ar(e), n = ka(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, gm = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: n,
  isFixedOnPage: r,
  direction: o,
  client: i,
  page: a,
  closest: s
}) => {
  const c = (() => {
    if (!s)
      return null;
    const {
      scrollSize: p,
      client: f
    } = s, h = la({
      scrollHeight: p.scrollHeight,
      scrollWidth: p.scrollWidth,
      height: f.paddingBox.height,
      width: f.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: f,
      scrollSize: p,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: h,
        diff: {
          value: he,
          displacement: he
        }
      }
    };
  })(), l = o === "vertical" ? lr : zi, u = Je({
    page: a,
    withPlaceholder: null,
    axis: l,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: n,
    isFixedOnPage: r,
    axis: l,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: u
  };
};
const vm = (e, t) => {
  const n = Pi(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, a = o + t.scrollWidth, c = ir({
    top: r,
    right: a,
    bottom: i,
    left: o
  }, n.border);
  return ar({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var hm = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = n.closestScrollable, l = vm(e, c), u = $t(l, r), d = (() => {
    if (!c)
      return null;
    const f = Pi(c), h = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: f,
      page: $t(f, r),
      scroll: Hn(c),
      scrollSize: h,
      shouldClipSubject: s
    };
  })();
  return gm({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: l,
    page: u,
    closest: d
  });
};
const bm = {
  passive: !1
}, xm = {
  passive: !0
};
var So = (e) => e.shouldPublishImmediately ? bm : xm;
const kt = (e) => e && e.env.closestScrollable || null;
function ym(e) {
  const t = te(null), n = Ft(Zt), r = Er("droppable"), {
    registry: o,
    marshal: i
  } = n, a = Nr(e), s = Y(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = te(s), l = Y(() => ve((y, v) => {
    t.current || (process.env.NODE_ENV !== "production" ? g(!1, "Can only update scroll when dragging") : g());
    const D = {
      x: y,
      y: v
    };
    i.updateDroppableScroll(s.id, D);
  }), [s.id, i]), u = P(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? he : Hn(y.env.closestScrollable);
  }, []), d = P(() => {
    const y = u();
    l(y.x, y.y);
  }, [u, l]), p = Y(() => dt(d), [d]), f = P(() => {
    const y = t.current, v = kt(y);
    if (y && v || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find scroll options while scrolling") : g()), y.scrollOptions.shouldPublishImmediately) {
      d();
      return;
    }
    p();
  }, [p, d]), h = P((y, v) => {
    t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect a droppable while a drag is occurring") : g());
    const D = a.current, A = D.getDroppableRef();
    A || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect without a droppable ref") : g());
    const j = mm(A), z = {
      ref: A,
      descriptor: s,
      env: j,
      scrollOptions: v
    };
    t.current = z;
    const F = hm({
      ref: A,
      descriptor: s,
      env: j,
      windowScroll: y,
      direction: D.direction,
      isDropDisabled: D.isDropDisabled,
      isCombineEnabled: D.isCombineEnabled,
      shouldClipSubject: !D.ignoreContainerClipping
    }), ie = j.closestScrollable;
    return ie && (ie.setAttribute(xo.contextId, n.contextId), ie.addEventListener("scroll", f, So(z.scrollOptions)), process.env.NODE_ENV !== "production" && fm(ie)), F;
  }, [n.contextId, s, f, a]), b = P(() => {
    const y = t.current, v = kt(y);
    return y && v || (process.env.NODE_ENV !== "production" ? g(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : g()), Hn(v);
  }, []), x = P(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop drag when no active drag") : g());
    const v = kt(y);
    t.current = null, v && (p.cancel(), v.removeAttribute(xo.contextId), v.removeEventListener("scroll", f, So(y.scrollOptions)));
  }, [f, p]), w = P((y) => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll when there is no drag") : g());
    const D = kt(v);
    D || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll a droppable with no closest scrollable") : g()), D.scrollTop += y.y, D.scrollLeft += y.x;
  }, []), N = Y(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: x,
    scroll: w
  }), [x, h, b, w]), E = Y(() => ({
    uniqueId: r,
    descriptor: s,
    callbacks: N
  }), [N, s, r]);
  Ie(() => (c.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && ae("Unsupported: changing the droppableId or type of a Droppable during a drag"), x()), o.droppable.unregister(E);
  }), [N, s, x, E, i, o.droppable]), Ie(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ie(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Nn() {
}
const Co = {
  width: 0,
  height: 0,
  margin: vd
}, wm = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? Co : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Em = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = wm({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: n
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: r.width,
    height: r.height,
    marginTop: r.margin.top,
    marginRight: r.margin.right,
    marginBottom: r.margin.bottom,
    marginLeft: r.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: n !== "none" ? lt.placeholder : null
  };
}, Dm = (e) => {
  const t = te(null), n = P(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = De(e.animate === "open");
  Ne(() => s ? r !== "open" ? (n(), c(!1), Nn) : t.current ? Nn : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : Nn, [r, s, n]);
  const l = P((d) => {
    d.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), u = Em({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return ce.createElement(e.placeholder.tagName, {
    style: u,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: l,
    ref: e.innerRef
  });
};
var Nm = ce.memo(Dm);
function On(e) {
  return typeof e == "boolean";
}
function Sn(e, t) {
  t.forEach((n) => n(e));
}
const Om = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? g(!1, "A Droppable requires a droppableId prop") : g()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? g(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : g());
}, function({
  props: t
}) {
  On(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? g(!1, "isDropDisabled must be a boolean") : g()), On(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? g(!1, "isCombineEnabled must be a boolean") : g()), On(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? g(!1, "ignoreContainerClipping must be a boolean") : g());
}, function({
  getDroppableRef: t
}) {
  Oa(t());
}], Sm = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && ae(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Cm = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? g(!1, "Must provide a clone render function (renderClone) for virtual lists") : g());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? g(!1, "Expected virtual list to not have a placeholder") : g());
}];
function Im(e) {
  Ot(() => {
    Sn(e, Om), e.props.mode === "standard" && Sn(e, Sm), e.props.mode === "virtual" && Sn(e, Cm);
  });
}
class _m extends ce.PureComponent {
  constructor(...t) {
    super(...t), this.state = {
      isVisible: !!this.props.on,
      data: this.props.on,
      animate: this.props.shouldAnimate && this.props.on ? "open" : "none"
    }, this.onClose = () => {
      this.state.animate === "close" && this.setState({
        isVisible: !1
      });
    };
  }
  static getDerivedStateFromProps(t, n) {
    return t.shouldAnimate ? t.on ? {
      isVisible: !0,
      data: t.on,
      animate: "open"
    } : n.isVisible ? {
      isVisible: !0,
      data: n.data,
      animate: "close"
    } : {
      isVisible: !1,
      animate: "close",
      data: null
    } : {
      isVisible: !!t.on,
      data: t.on,
      animate: "none"
    };
  }
  render() {
    if (!this.state.isVisible)
      return null;
    const t = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(t);
  }
}
const Am = (e) => {
  const t = qt(Zt);
  t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find app context") : g());
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = te(null), i = te(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: l,
    direction: u,
    ignoreContainerClipping: d,
    isDropDisabled: p,
    isCombineEnabled: f,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: x,
    getContainerForClone: w
  } = e, N = P(() => o.current, []), E = P((W = null) => {
    o.current = W;
  }, []), y = P(() => i.current, []), v = P((W = null) => {
    i.current = W;
  }, []);
  Im({
    props: e,
    getDroppableRef: N,
    getPlaceholderRef: y
  });
  const D = P(() => {
    r() && x({
      maxScroll: pa()
    });
  }, [r, x]);
  ym({
    droppableId: s,
    type: c,
    mode: l,
    direction: u,
    isDropDisabled: p,
    isCombineEnabled: f,
    ignoreContainerClipping: d,
    getDroppableRef: N
  });
  const A = Y(() => ce.createElement(_m, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: W,
    data: K,
    animate: H
  }) => ce.createElement(Nm, {
    placeholder: K,
    onClose: W,
    innerRef: v,
    animate: H,
    contextId: n,
    onTransitionEnd: D
  })), [n, D, e.placeholder, e.shouldAnimatePlaceholder, v]), j = Y(() => ({
    innerRef: E,
    placeholder: A,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": n
    }
  }), [n, s, A, E]), z = b ? b.dragging.draggableId : null, F = Y(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: z
  }), [s, z, c]);
  function ie() {
    if (!b)
      return null;
    const {
      dragging: W,
      render: K
    } = b, H = ce.createElement(_a, {
      draggableId: W.draggableId,
      index: W.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (J, ge) => K(J, ge, W));
    return es.createPortal(H, w());
  }
  return ce.createElement(Cr.Provider, {
    value: F
  }, a(j, h), ie());
};
function km() {
  return document.body || (process.env.NODE_ENV !== "production" ? g(!1, "document.body is not ready") : g()), document.body;
}
const Io = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: km
}, Pa = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Io)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Io[n]
    });
  return t;
}, Cn = (e, t) => e === t.droppable.type, _o = (e, t) => t.draggables[e.draggable.id], Pm = () => {
  const e = {
    placeholder: null,
    shouldAnimatePlaceholder: !0,
    snapshot: {
      isDraggingOver: !1,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: !1
    },
    useClone: null
  }, t = {
    ...e,
    shouldAnimatePlaceholder: !1
  }, n = ve((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), r = ve((i, a, s, c, l, u) => {
    const d = l.descriptor.id;
    if (l.descriptor.droppableId === i) {
      const h = u ? {
        render: u,
        dragging: n(l.descriptor)
      } : null, b = {
        isDraggingOver: s,
        draggingOverWith: s ? d : null,
        draggingFromThisWith: d,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: b,
        useClone: h
      };
    }
    if (!a)
      return t;
    if (!c)
      return e;
    const f = {
      isDraggingOver: s,
      draggingOverWith: d,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: l.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: f,
      useClone: null
    };
  });
  return (i, a) => {
    const s = Pa(a), c = s.droppableId, l = s.type, u = !s.isDropDisabled, d = s.renderClone;
    if (bt(i)) {
      const p = i.critical;
      if (!Cn(l, p))
        return t;
      const f = _o(p, i.dimensions), h = Ce(i.impact) === c;
      return r(c, u, h, h, f, d);
    }
    if (i.phase === "DROP_ANIMATING") {
      const p = i.completed;
      if (!Cn(l, p.critical))
        return t;
      const f = _o(p.critical, i.dimensions);
      return r(c, u, Ca(p.result) === c, Ce(p.impact) === c, f, d);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const p = i.completed;
      if (!Cn(l, p.critical))
        return t;
      const f = Ce(p.impact) === c, h = !!(p.impact.at && p.impact.at.type === "COMBINE"), b = p.critical.droppable.id === c;
      return f ? h ? e : t : b ? e : t;
    }
    return t;
  };
}, Tm = {
  updateViewportMaxScroll: Ip
}, kr = Ai(Pm, Tm, (e, t, n) => ({
  ...Pa(n),
  ...e,
  ...t
}), {
  context: wr,
  areStatePropsEqual: Sa
})(Am);
function Wg({
  items: e,
  onReorder: t,
  className: n,
  itemClassName: r,
  droppableId: o = "sortable-list"
}) {
  return /* @__PURE__ */ m(Sr, { onDragEnd: (a) => {
    if (!a.destination) return;
    const s = Array.from(e), [c] = s.splice(a.source.index, 1);
    s.splice(a.destination.index, 0, c), t(s);
  }, children: /* @__PURE__ */ m(kr, { droppableId: o, children: (a) => /* @__PURE__ */ C(
    "ul",
    {
      ref: a.innerRef,
      ...a.droppableProps,
      className: S("space-y-2", n),
      children: [
        e.map((s, c) => /* @__PURE__ */ m(Ir, { draggableId: s.id, index: c, children: (l, u) => /* @__PURE__ */ C(
          "li",
          {
            ref: l.innerRef,
            ...l.draggableProps,
            className: S(
              "group relative flex items-center gap-3 p-4 bg-white border border-neutral-200 rounded-xl",
              "transition-all duration-200 ease-out",
              "hover:shadow-md hover:border-primary/40",
              u.isDragging && "shadow-xl ring-2 ring-primary/30 rotate-1 scale-[1.02]",
              r
            ),
            style: {
              ...l.draggableProps.style
            },
            children: [
              /* @__PURE__ */ m(
                "div",
                {
                  className: S(
                    "absolute top-0 left-0 right-0 h-1 rounded-t-xl transition-opacity duration-200",
                    "bg-gradient-to-r from-accent via-primary to-primary",
                    u.isDragging ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  )
                }
              ),
              /* @__PURE__ */ m(
                "div",
                {
                  ...l.dragHandleProps,
                  className: S(
                    "flex-shrink-0 p-1 rounded-lg cursor-grab active:cursor-grabbing",
                    "text-neutral-300 hover:text-neutral-500 hover:bg-neutral-100",
                    "transition-colors duration-150",
                    u.isDragging && "text-primary"
                  ),
                  children: /* @__PURE__ */ m(Xe, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ m("div", { className: "flex-1 min-w-0", children: s.content }),
              /* @__PURE__ */ m(
                "span",
                {
                  className: S(
                    "flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium",
                    "bg-neutral-100 text-neutral-500",
                    "transition-colors duration-200",
                    u.isDragging && "bg-primary text-white"
                  ),
                  children: c + 1
                }
              )
            ]
          }
        ) }, s.id)),
        a.placeholder
      ]
    }
  ) }) });
}
var Yn = { exports: {} }, Pt = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ao;
function Rm() {
  if (Ao) return Q;
  Ao = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function E(v) {
    if (typeof v == "object" && v !== null) {
      var D = v.$$typeof;
      switch (D) {
        case t:
          switch (v = v.type, v) {
            case c:
            case l:
            case r:
            case i:
            case o:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case u:
                case h:
                case f:
                case a:
                  return v;
                default:
                  return D;
              }
          }
        case n:
          return D;
      }
    }
  }
  function y(v) {
    return E(v) === l;
  }
  return Q.AsyncMode = c, Q.ConcurrentMode = l, Q.ContextConsumer = s, Q.ContextProvider = a, Q.Element = t, Q.ForwardRef = u, Q.Fragment = r, Q.Lazy = h, Q.Memo = f, Q.Portal = n, Q.Profiler = i, Q.StrictMode = o, Q.Suspense = d, Q.isAsyncMode = function(v) {
    return y(v) || E(v) === c;
  }, Q.isConcurrentMode = y, Q.isContextConsumer = function(v) {
    return E(v) === s;
  }, Q.isContextProvider = function(v) {
    return E(v) === a;
  }, Q.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, Q.isForwardRef = function(v) {
    return E(v) === u;
  }, Q.isFragment = function(v) {
    return E(v) === r;
  }, Q.isLazy = function(v) {
    return E(v) === h;
  }, Q.isMemo = function(v) {
    return E(v) === f;
  }, Q.isPortal = function(v) {
    return E(v) === n;
  }, Q.isProfiler = function(v) {
    return E(v) === i;
  }, Q.isStrictMode = function(v) {
    return E(v) === o;
  }, Q.isSuspense = function(v) {
    return E(v) === d;
  }, Q.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === l || v === i || v === o || v === d || v === p || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === f || v.$$typeof === a || v.$$typeof === s || v.$$typeof === u || v.$$typeof === x || v.$$typeof === w || v.$$typeof === N || v.$$typeof === b);
  }, Q.typeOf = E, Q;
}
var ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko;
function jm() {
  return ko || (ko = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
    function E(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === r || I === l || I === i || I === o || I === d || I === p || typeof I == "object" && I !== null && (I.$$typeof === h || I.$$typeof === f || I.$$typeof === a || I.$$typeof === s || I.$$typeof === u || I.$$typeof === x || I.$$typeof === w || I.$$typeof === N || I.$$typeof === b);
    }
    function y(I) {
      if (typeof I == "object" && I !== null) {
        var de = I.$$typeof;
        switch (de) {
          case t:
            var Ve = I.type;
            switch (Ve) {
              case c:
              case l:
              case r:
              case i:
              case o:
              case d:
                return Ve;
              default:
                var rt = Ve && Ve.$$typeof;
                switch (rt) {
                  case s:
                  case u:
                  case h:
                  case f:
                  case a:
                    return rt;
                  default:
                    return de;
                }
            }
          case n:
            return de;
        }
      }
    }
    var v = c, D = l, A = s, j = a, z = t, F = u, ie = r, W = h, K = f, H = n, J = i, ge = o, ye = d, Oe = !1;
    function le(I) {
      return Oe || (Oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(I) || y(I) === c;
    }
    function O(I) {
      return y(I) === l;
    }
    function k(I) {
      return y(I) === s;
    }
    function L(I) {
      return y(I) === a;
    }
    function $(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function R(I) {
      return y(I) === u;
    }
    function B(I) {
      return y(I) === r;
    }
    function V(I) {
      return y(I) === h;
    }
    function M(I) {
      return y(I) === f;
    }
    function q(I) {
      return y(I) === n;
    }
    function U(I) {
      return y(I) === i;
    }
    function G(I) {
      return y(I) === o;
    }
    function fe(I) {
      return y(I) === d;
    }
    ee.AsyncMode = v, ee.ConcurrentMode = D, ee.ContextConsumer = A, ee.ContextProvider = j, ee.Element = z, ee.ForwardRef = F, ee.Fragment = ie, ee.Lazy = W, ee.Memo = K, ee.Portal = H, ee.Profiler = J, ee.StrictMode = ge, ee.Suspense = ye, ee.isAsyncMode = le, ee.isConcurrentMode = O, ee.isContextConsumer = k, ee.isContextProvider = L, ee.isElement = $, ee.isForwardRef = R, ee.isFragment = B, ee.isLazy = V, ee.isMemo = M, ee.isPortal = q, ee.isProfiler = U, ee.isStrictMode = G, ee.isSuspense = fe, ee.isValidElementType = E, ee.typeOf = y;
  }()), ee;
}
var Po;
function Ta() {
  return Po || (Po = 1, process.env.NODE_ENV === "production" ? Pt.exports = Rm() : Pt.exports = jm()), Pt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var In, To;
function Mm() {
  if (To) return In;
  To = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(a).map(function(u) {
        return a[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        l[u] = u;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return In = o() ? Object.assign : function(i, a) {
    for (var s, c = r(i), l, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var d in s)
        t.call(s, d) && (c[d] = s[d]);
      if (e) {
        l = e(s);
        for (var p = 0; p < l.length; p++)
          n.call(s, l[p]) && (c[l[p]] = s[l[p]]);
      }
    }
    return c;
  }, In;
}
var _n, Ro;
function Pr() {
  if (Ro) return _n;
  Ro = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _n = e, _n;
}
var An, jo;
function Ra() {
  return jo || (jo = 1, An = Function.call.bind(Object.prototype.hasOwnProperty)), An;
}
var kn, Mo;
function $m() {
  if (Mo) return kn;
  Mo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Pr(), n = {}, r = Ra();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in i)
        if (r(i, u)) {
          var d;
          try {
            if (typeof i[u] != "function") {
              var p = Error(
                (c || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = i[u](a, u, c, s, null, t);
          } catch (h) {
            d = h;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var f = l ? l() : "";
            e(
              "Failed " + s + " type: " + d.message + (f ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, kn = o, kn;
}
var Pn, $o;
function Lm() {
  if ($o) return Pn;
  $o = 1;
  var e = Ta(), t = Mm(), n = Pr(), r = Ra(), o = $m(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Pn = function(s, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(O) {
      var k = O && (l && O[l] || O[u]);
      if (typeof k == "function")
        return k;
    }
    var p = "<<anonymous>>", f = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: N(),
      arrayOf: E,
      element: y(),
      elementType: v(),
      instanceOf: D,
      node: F(),
      objectOf: j,
      oneOf: A,
      oneOfType: z,
      shape: W,
      exact: K
    };
    function h(O, k) {
      return O === k ? O !== 0 || 1 / O === 1 / k : O !== O && k !== k;
    }
    function b(O, k) {
      this.message = O, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function x(O) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, L = 0;
      function $(B, V, M, q, U, G, fe) {
        if (q = q || p, G = G || M, fe !== n) {
          if (c) {
            var I = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw I.name = "Invariant Violation", I;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var de = q + ":" + M;
            !k[de] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[de] = !0, L++);
          }
        }
        return V[M] == null ? B ? V[M] === null ? new b("The " + U + " `" + G + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new b("The " + U + " `" + G + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : O(V, M, q, U, G);
      }
      var R = $.bind(null, !1);
      return R.isRequired = $.bind(null, !0), R;
    }
    function w(O) {
      function k(L, $, R, B, V, M) {
        var q = L[$], U = ge(q);
        if (U !== O) {
          var G = ye(q);
          return new b(
            "Invalid " + B + " `" + V + "` of type " + ("`" + G + "` supplied to `" + R + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return x(k);
    }
    function N() {
      return x(a);
    }
    function E(O) {
      function k(L, $, R, B, V) {
        if (typeof O != "function")
          return new b("Property `" + V + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var M = L[$];
        if (!Array.isArray(M)) {
          var q = ge(M);
          return new b("Invalid " + B + " `" + V + "` of type " + ("`" + q + "` supplied to `" + R + "`, expected an array."));
        }
        for (var U = 0; U < M.length; U++) {
          var G = O(M, U, R, B, V + "[" + U + "]", n);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return x(k);
    }
    function y() {
      function O(k, L, $, R, B) {
        var V = k[L];
        if (!s(V)) {
          var M = ge(V);
          return new b("Invalid " + R + " `" + B + "` of type " + ("`" + M + "` supplied to `" + $ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(O);
    }
    function v() {
      function O(k, L, $, R, B) {
        var V = k[L];
        if (!e.isValidElementType(V)) {
          var M = ge(V);
          return new b("Invalid " + R + " `" + B + "` of type " + ("`" + M + "` supplied to `" + $ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(O);
    }
    function D(O) {
      function k(L, $, R, B, V) {
        if (!(L[$] instanceof O)) {
          var M = O.name || p, q = le(L[$]);
          return new b("Invalid " + B + " `" + V + "` of type " + ("`" + q + "` supplied to `" + R + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return x(k);
    }
    function A(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function k(L, $, R, B, V) {
        for (var M = L[$], q = 0; q < O.length; q++)
          if (h(M, O[q]))
            return null;
        var U = JSON.stringify(O, function(fe, I) {
          var de = ye(I);
          return de === "symbol" ? String(I) : I;
        });
        return new b("Invalid " + B + " `" + V + "` of value `" + String(M) + "` " + ("supplied to `" + R + "`, expected one of " + U + "."));
      }
      return x(k);
    }
    function j(O) {
      function k(L, $, R, B, V) {
        if (typeof O != "function")
          return new b("Property `" + V + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var M = L[$], q = ge(M);
        if (q !== "object")
          return new b("Invalid " + B + " `" + V + "` of type " + ("`" + q + "` supplied to `" + R + "`, expected an object."));
        for (var U in M)
          if (r(M, U)) {
            var G = O(M, U, R, B, V + "." + U, n);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return x(k);
    }
    function z(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var k = 0; k < O.length; k++) {
        var L = O[k];
        if (typeof L != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Oe(L) + " at index " + k + "."
          ), a;
      }
      function $(R, B, V, M, q) {
        for (var U = [], G = 0; G < O.length; G++) {
          var fe = O[G], I = fe(R, B, V, M, q, n);
          if (I == null)
            return null;
          I.data && r(I.data, "expectedType") && U.push(I.data.expectedType);
        }
        var de = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new b("Invalid " + M + " `" + q + "` supplied to " + ("`" + V + "`" + de + "."));
      }
      return x($);
    }
    function F() {
      function O(k, L, $, R, B) {
        return H(k[L]) ? null : new b("Invalid " + R + " `" + B + "` supplied to " + ("`" + $ + "`, expected a ReactNode."));
      }
      return x(O);
    }
    function ie(O, k, L, $, R) {
      return new b(
        (O || "React class") + ": " + k + " type `" + L + "." + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function W(O) {
      function k(L, $, R, B, V) {
        var M = L[$], q = ge(M);
        if (q !== "object")
          return new b("Invalid " + B + " `" + V + "` of type `" + q + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var U in O) {
          var G = O[U];
          if (typeof G != "function")
            return ie(R, B, V, U, ye(G));
          var fe = G(M, U, R, B, V + "." + U, n);
          if (fe)
            return fe;
        }
        return null;
      }
      return x(k);
    }
    function K(O) {
      function k(L, $, R, B, V) {
        var M = L[$], q = ge(M);
        if (q !== "object")
          return new b("Invalid " + B + " `" + V + "` of type `" + q + "` " + ("supplied to `" + R + "`, expected `object`."));
        var U = t({}, L[$], O);
        for (var G in U) {
          var fe = O[G];
          if (r(O, G) && typeof fe != "function")
            return ie(R, B, V, G, ye(fe));
          if (!fe)
            return new b(
              "Invalid " + B + " `" + V + "` key `" + G + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(L[$], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var I = fe(M, G, R, B, V + "." + G, n);
          if (I)
            return I;
        }
        return null;
      }
      return x(k);
    }
    function H(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(H);
          if (O === null || s(O))
            return !0;
          var k = d(O);
          if (k) {
            var L = k.call(O), $;
            if (k !== O.entries) {
              for (; !($ = L.next()).done; )
                if (!H($.value))
                  return !1;
            } else
              for (; !($ = L.next()).done; ) {
                var R = $.value;
                if (R && !H(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(O, k) {
      return O === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function ge(O) {
      var k = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : J(k, O) ? "symbol" : k;
    }
    function ye(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var k = ge(O);
      if (k === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function Oe(O) {
      var k = ye(O);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function le(O) {
      return !O.constructor || !O.constructor.name ? p : O.constructor.name;
    }
    return f.checkPropTypes = o, f.resetWarningCache = o.resetWarningCache, f.PropTypes = f, f;
  }, Pn;
}
var Tn, Lo;
function Bm() {
  if (Lo) return Tn;
  Lo = 1;
  var e = Pr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Tn = function() {
    function r(a, s, c, l, u, d) {
      if (d !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Tn;
}
if (process.env.NODE_ENV !== "production") {
  var Vm = Ta(), Fm = !0;
  Yn.exports = Lm()(Vm.isElement, Fm);
} else
  Yn.exports = Bm()();
var zm = Yn.exports;
const re = /* @__PURE__ */ il(zm);
function Ue(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function s(u) {
      try {
        l(r.next(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      u.done ? i(u.value) : o(u.value).then(s, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}
const Gm = /* @__PURE__ */ new Map([
  // https://github.com/guzzle/psr7/blob/2d9260799e713f1c475d3c5fdc3d6561ff7441b2/src/MimeType.php
  ["1km", "application/vnd.1000minds.decision-model+xml"],
  ["3dml", "text/vnd.in3d.3dml"],
  ["3ds", "image/x-3ds"],
  ["3g2", "video/3gpp2"],
  ["3gp", "video/3gp"],
  ["3gpp", "video/3gpp"],
  ["3mf", "model/3mf"],
  ["7z", "application/x-7z-compressed"],
  ["7zip", "application/x-7z-compressed"],
  ["123", "application/vnd.lotus-1-2-3"],
  ["aab", "application/x-authorware-bin"],
  ["aac", "audio/x-acc"],
  ["aam", "application/x-authorware-map"],
  ["aas", "application/x-authorware-seg"],
  ["abw", "application/x-abiword"],
  ["ac", "application/vnd.nokia.n-gage.ac+xml"],
  ["ac3", "audio/ac3"],
  ["acc", "application/vnd.americandynamics.acc"],
  ["ace", "application/x-ace-compressed"],
  ["acu", "application/vnd.acucobol"],
  ["acutc", "application/vnd.acucorp"],
  ["adp", "audio/adpcm"],
  ["aep", "application/vnd.audiograph"],
  ["afm", "application/x-font-type1"],
  ["afp", "application/vnd.ibm.modcap"],
  ["ahead", "application/vnd.ahead.space"],
  ["ai", "application/pdf"],
  ["aif", "audio/x-aiff"],
  ["aifc", "audio/x-aiff"],
  ["aiff", "audio/x-aiff"],
  ["air", "application/vnd.adobe.air-application-installer-package+zip"],
  ["ait", "application/vnd.dvb.ait"],
  ["ami", "application/vnd.amiga.ami"],
  ["amr", "audio/amr"],
  ["apk", "application/vnd.android.package-archive"],
  ["apng", "image/apng"],
  ["appcache", "text/cache-manifest"],
  ["application", "application/x-ms-application"],
  ["apr", "application/vnd.lotus-approach"],
  ["arc", "application/x-freearc"],
  ["arj", "application/x-arj"],
  ["asc", "application/pgp-signature"],
  ["asf", "video/x-ms-asf"],
  ["asm", "text/x-asm"],
  ["aso", "application/vnd.accpac.simply.aso"],
  ["asx", "video/x-ms-asf"],
  ["atc", "application/vnd.acucorp"],
  ["atom", "application/atom+xml"],
  ["atomcat", "application/atomcat+xml"],
  ["atomdeleted", "application/atomdeleted+xml"],
  ["atomsvc", "application/atomsvc+xml"],
  ["atx", "application/vnd.antix.game-component"],
  ["au", "audio/x-au"],
  ["avi", "video/x-msvideo"],
  ["avif", "image/avif"],
  ["aw", "application/applixware"],
  ["azf", "application/vnd.airzip.filesecure.azf"],
  ["azs", "application/vnd.airzip.filesecure.azs"],
  ["azv", "image/vnd.airzip.accelerator.azv"],
  ["azw", "application/vnd.amazon.ebook"],
  ["b16", "image/vnd.pco.b16"],
  ["bat", "application/x-msdownload"],
  ["bcpio", "application/x-bcpio"],
  ["bdf", "application/x-font-bdf"],
  ["bdm", "application/vnd.syncml.dm+wbxml"],
  ["bdoc", "application/x-bdoc"],
  ["bed", "application/vnd.realvnc.bed"],
  ["bh2", "application/vnd.fujitsu.oasysprs"],
  ["bin", "application/octet-stream"],
  ["blb", "application/x-blorb"],
  ["blorb", "application/x-blorb"],
  ["bmi", "application/vnd.bmi"],
  ["bmml", "application/vnd.balsamiq.bmml+xml"],
  ["bmp", "image/bmp"],
  ["book", "application/vnd.framemaker"],
  ["box", "application/vnd.previewsystems.box"],
  ["boz", "application/x-bzip2"],
  ["bpk", "application/octet-stream"],
  ["bpmn", "application/octet-stream"],
  ["bsp", "model/vnd.valve.source.compiled-map"],
  ["btif", "image/prs.btif"],
  ["buffer", "application/octet-stream"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["c", "text/x-c"],
  ["c4d", "application/vnd.clonk.c4group"],
  ["c4f", "application/vnd.clonk.c4group"],
  ["c4g", "application/vnd.clonk.c4group"],
  ["c4p", "application/vnd.clonk.c4group"],
  ["c4u", "application/vnd.clonk.c4group"],
  ["c11amc", "application/vnd.cluetrust.cartomobile-config"],
  ["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
  ["cab", "application/vnd.ms-cab-compressed"],
  ["caf", "audio/x-caf"],
  ["cap", "application/vnd.tcpdump.pcap"],
  ["car", "application/vnd.curl.car"],
  ["cat", "application/vnd.ms-pki.seccat"],
  ["cb7", "application/x-cbr"],
  ["cba", "application/x-cbr"],
  ["cbr", "application/x-cbr"],
  ["cbt", "application/x-cbr"],
  ["cbz", "application/x-cbr"],
  ["cc", "text/x-c"],
  ["cco", "application/x-cocoa"],
  ["cct", "application/x-director"],
  ["ccxml", "application/ccxml+xml"],
  ["cdbcmsg", "application/vnd.contact.cmsg"],
  ["cda", "application/x-cdf"],
  ["cdf", "application/x-netcdf"],
  ["cdfx", "application/cdfx+xml"],
  ["cdkey", "application/vnd.mediastation.cdkey"],
  ["cdmia", "application/cdmi-capability"],
  ["cdmic", "application/cdmi-container"],
  ["cdmid", "application/cdmi-domain"],
  ["cdmio", "application/cdmi-object"],
  ["cdmiq", "application/cdmi-queue"],
  ["cdr", "application/cdr"],
  ["cdx", "chemical/x-cdx"],
  ["cdxml", "application/vnd.chemdraw+xml"],
  ["cdy", "application/vnd.cinderella"],
  ["cer", "application/pkix-cert"],
  ["cfs", "application/x-cfs-compressed"],
  ["cgm", "image/cgm"],
  ["chat", "application/x-chat"],
  ["chm", "application/vnd.ms-htmlhelp"],
  ["chrt", "application/vnd.kde.kchart"],
  ["cif", "chemical/x-cif"],
  ["cii", "application/vnd.anser-web-certificate-issue-initiation"],
  ["cil", "application/vnd.ms-artgalry"],
  ["cjs", "application/node"],
  ["cla", "application/vnd.claymore"],
  ["class", "application/octet-stream"],
  ["clkk", "application/vnd.crick.clicker.keyboard"],
  ["clkp", "application/vnd.crick.clicker.palette"],
  ["clkt", "application/vnd.crick.clicker.template"],
  ["clkw", "application/vnd.crick.clicker.wordbank"],
  ["clkx", "application/vnd.crick.clicker"],
  ["clp", "application/x-msclip"],
  ["cmc", "application/vnd.cosmocaller"],
  ["cmdf", "chemical/x-cmdf"],
  ["cml", "chemical/x-cml"],
  ["cmp", "application/vnd.yellowriver-custom-menu"],
  ["cmx", "image/x-cmx"],
  ["cod", "application/vnd.rim.cod"],
  ["coffee", "text/coffeescript"],
  ["com", "application/x-msdownload"],
  ["conf", "text/plain"],
  ["cpio", "application/x-cpio"],
  ["cpp", "text/x-c"],
  ["cpt", "application/mac-compactpro"],
  ["crd", "application/x-mscardfile"],
  ["crl", "application/pkix-crl"],
  ["crt", "application/x-x509-ca-cert"],
  ["crx", "application/x-chrome-extension"],
  ["cryptonote", "application/vnd.rig.cryptonote"],
  ["csh", "application/x-csh"],
  ["csl", "application/vnd.citationstyles.style+xml"],
  ["csml", "chemical/x-csml"],
  ["csp", "application/vnd.commonspace"],
  ["csr", "application/octet-stream"],
  ["css", "text/css"],
  ["cst", "application/x-director"],
  ["csv", "text/csv"],
  ["cu", "application/cu-seeme"],
  ["curl", "text/vnd.curl"],
  ["cww", "application/prs.cww"],
  ["cxt", "application/x-director"],
  ["cxx", "text/x-c"],
  ["dae", "model/vnd.collada+xml"],
  ["daf", "application/vnd.mobius.daf"],
  ["dart", "application/vnd.dart"],
  ["dataless", "application/vnd.fdsn.seed"],
  ["davmount", "application/davmount+xml"],
  ["dbf", "application/vnd.dbf"],
  ["dbk", "application/docbook+xml"],
  ["dcr", "application/x-director"],
  ["dcurl", "text/vnd.curl.dcurl"],
  ["dd2", "application/vnd.oma.dd2+xml"],
  ["ddd", "application/vnd.fujixerox.ddd"],
  ["ddf", "application/vnd.syncml.dmddf+xml"],
  ["dds", "image/vnd.ms-dds"],
  ["deb", "application/x-debian-package"],
  ["def", "text/plain"],
  ["deploy", "application/octet-stream"],
  ["der", "application/x-x509-ca-cert"],
  ["dfac", "application/vnd.dreamfactory"],
  ["dgc", "application/x-dgc-compressed"],
  ["dic", "text/x-c"],
  ["dir", "application/x-director"],
  ["dis", "application/vnd.mobius.dis"],
  ["disposition-notification", "message/disposition-notification"],
  ["dist", "application/octet-stream"],
  ["distz", "application/octet-stream"],
  ["djv", "image/vnd.djvu"],
  ["djvu", "image/vnd.djvu"],
  ["dll", "application/octet-stream"],
  ["dmg", "application/x-apple-diskimage"],
  ["dmn", "application/octet-stream"],
  ["dmp", "application/vnd.tcpdump.pcap"],
  ["dms", "application/octet-stream"],
  ["dna", "application/vnd.dna"],
  ["doc", "application/msword"],
  ["docm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["dot", "application/msword"],
  ["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
  ["dp", "application/vnd.osgi.dp"],
  ["dpg", "application/vnd.dpgraph"],
  ["dra", "audio/vnd.dra"],
  ["drle", "image/dicom-rle"],
  ["dsc", "text/prs.lines.tag"],
  ["dssc", "application/dssc+der"],
  ["dtb", "application/x-dtbook+xml"],
  ["dtd", "application/xml-dtd"],
  ["dts", "audio/vnd.dts"],
  ["dtshd", "audio/vnd.dts.hd"],
  ["dump", "application/octet-stream"],
  ["dvb", "video/vnd.dvb.file"],
  ["dvi", "application/x-dvi"],
  ["dwd", "application/atsc-dwd+xml"],
  ["dwf", "model/vnd.dwf"],
  ["dwg", "image/vnd.dwg"],
  ["dxf", "image/vnd.dxf"],
  ["dxp", "application/vnd.spotfire.dxp"],
  ["dxr", "application/x-director"],
  ["ear", "application/java-archive"],
  ["ecelp4800", "audio/vnd.nuera.ecelp4800"],
  ["ecelp7470", "audio/vnd.nuera.ecelp7470"],
  ["ecelp9600", "audio/vnd.nuera.ecelp9600"],
  ["ecma", "application/ecmascript"],
  ["edm", "application/vnd.novadigm.edm"],
  ["edx", "application/vnd.novadigm.edx"],
  ["efif", "application/vnd.picsel"],
  ["ei6", "application/vnd.pg.osasli"],
  ["elc", "application/octet-stream"],
  ["emf", "image/emf"],
  ["eml", "message/rfc822"],
  ["emma", "application/emma+xml"],
  ["emotionml", "application/emotionml+xml"],
  ["emz", "application/x-msmetafile"],
  ["eol", "audio/vnd.digital-winds"],
  ["eot", "application/vnd.ms-fontobject"],
  ["eps", "application/postscript"],
  ["epub", "application/epub+zip"],
  ["es", "application/ecmascript"],
  ["es3", "application/vnd.eszigno3+xml"],
  ["esa", "application/vnd.osgi.subsystem"],
  ["esf", "application/vnd.epson.esf"],
  ["et3", "application/vnd.eszigno3+xml"],
  ["etx", "text/x-setext"],
  ["eva", "application/x-eva"],
  ["evy", "application/x-envoy"],
  ["exe", "application/octet-stream"],
  ["exi", "application/exi"],
  ["exp", "application/express"],
  ["exr", "image/aces"],
  ["ext", "application/vnd.novadigm.ext"],
  ["ez", "application/andrew-inset"],
  ["ez2", "application/vnd.ezpix-album"],
  ["ez3", "application/vnd.ezpix-package"],
  ["f", "text/x-fortran"],
  ["f4v", "video/mp4"],
  ["f77", "text/x-fortran"],
  ["f90", "text/x-fortran"],
  ["fbs", "image/vnd.fastbidsheet"],
  ["fcdt", "application/vnd.adobe.formscentral.fcdt"],
  ["fcs", "application/vnd.isac.fcs"],
  ["fdf", "application/vnd.fdf"],
  ["fdt", "application/fdt+xml"],
  ["fe_launch", "application/vnd.denovo.fcselayout-link"],
  ["fg5", "application/vnd.fujitsu.oasysgp"],
  ["fgd", "application/x-director"],
  ["fh", "image/x-freehand"],
  ["fh4", "image/x-freehand"],
  ["fh5", "image/x-freehand"],
  ["fh7", "image/x-freehand"],
  ["fhc", "image/x-freehand"],
  ["fig", "application/x-xfig"],
  ["fits", "image/fits"],
  ["flac", "audio/x-flac"],
  ["fli", "video/x-fli"],
  ["flo", "application/vnd.micrografx.flo"],
  ["flv", "video/x-flv"],
  ["flw", "application/vnd.kde.kivio"],
  ["flx", "text/vnd.fmi.flexstor"],
  ["fly", "text/vnd.fly"],
  ["fm", "application/vnd.framemaker"],
  ["fnc", "application/vnd.frogans.fnc"],
  ["fo", "application/vnd.software602.filler.form+xml"],
  ["for", "text/x-fortran"],
  ["fpx", "image/vnd.fpx"],
  ["frame", "application/vnd.framemaker"],
  ["fsc", "application/vnd.fsc.weblaunch"],
  ["fst", "image/vnd.fst"],
  ["ftc", "application/vnd.fluxtime.clip"],
  ["fti", "application/vnd.anser-web-funds-transfer-initiation"],
  ["fvt", "video/vnd.fvt"],
  ["fxp", "application/vnd.adobe.fxp"],
  ["fxpl", "application/vnd.adobe.fxp"],
  ["fzs", "application/vnd.fuzzysheet"],
  ["g2w", "application/vnd.geoplan"],
  ["g3", "image/g3fax"],
  ["g3w", "application/vnd.geospace"],
  ["gac", "application/vnd.groove-account"],
  ["gam", "application/x-tads"],
  ["gbr", "application/rpki-ghostbusters"],
  ["gca", "application/x-gca-compressed"],
  ["gdl", "model/vnd.gdl"],
  ["gdoc", "application/vnd.google-apps.document"],
  ["geo", "application/vnd.dynageo"],
  ["geojson", "application/geo+json"],
  ["gex", "application/vnd.geometry-explorer"],
  ["ggb", "application/vnd.geogebra.file"],
  ["ggt", "application/vnd.geogebra.tool"],
  ["ghf", "application/vnd.groove-help"],
  ["gif", "image/gif"],
  ["gim", "application/vnd.groove-identity-message"],
  ["glb", "model/gltf-binary"],
  ["gltf", "model/gltf+json"],
  ["gml", "application/gml+xml"],
  ["gmx", "application/vnd.gmx"],
  ["gnumeric", "application/x-gnumeric"],
  ["gpg", "application/gpg-keys"],
  ["gph", "application/vnd.flographit"],
  ["gpx", "application/gpx+xml"],
  ["gqf", "application/vnd.grafeq"],
  ["gqs", "application/vnd.grafeq"],
  ["gram", "application/srgs"],
  ["gramps", "application/x-gramps-xml"],
  ["gre", "application/vnd.geometry-explorer"],
  ["grv", "application/vnd.groove-injector"],
  ["grxml", "application/srgs+xml"],
  ["gsf", "application/x-font-ghostscript"],
  ["gsheet", "application/vnd.google-apps.spreadsheet"],
  ["gslides", "application/vnd.google-apps.presentation"],
  ["gtar", "application/x-gtar"],
  ["gtm", "application/vnd.groove-tool-message"],
  ["gtw", "model/vnd.gtw"],
  ["gv", "text/vnd.graphviz"],
  ["gxf", "application/gxf"],
  ["gxt", "application/vnd.geonext"],
  ["gz", "application/gzip"],
  ["gzip", "application/gzip"],
  ["h", "text/x-c"],
  ["h261", "video/h261"],
  ["h263", "video/h263"],
  ["h264", "video/h264"],
  ["hal", "application/vnd.hal+xml"],
  ["hbci", "application/vnd.hbci"],
  ["hbs", "text/x-handlebars-template"],
  ["hdd", "application/x-virtualbox-hdd"],
  ["hdf", "application/x-hdf"],
  ["heic", "image/heic"],
  ["heics", "image/heic-sequence"],
  ["heif", "image/heif"],
  ["heifs", "image/heif-sequence"],
  ["hej2", "image/hej2k"],
  ["held", "application/atsc-held+xml"],
  ["hh", "text/x-c"],
  ["hjson", "application/hjson"],
  ["hlp", "application/winhlp"],
  ["hpgl", "application/vnd.hp-hpgl"],
  ["hpid", "application/vnd.hp-hpid"],
  ["hps", "application/vnd.hp-hps"],
  ["hqx", "application/mac-binhex40"],
  ["hsj2", "image/hsj2"],
  ["htc", "text/x-component"],
  ["htke", "application/vnd.kenameaapp"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["hvd", "application/vnd.yamaha.hv-dic"],
  ["hvp", "application/vnd.yamaha.hv-voice"],
  ["hvs", "application/vnd.yamaha.hv-script"],
  ["i2g", "application/vnd.intergeo"],
  ["icc", "application/vnd.iccprofile"],
  ["ice", "x-conference/x-cooltalk"],
  ["icm", "application/vnd.iccprofile"],
  ["ico", "image/x-icon"],
  ["ics", "text/calendar"],
  ["ief", "image/ief"],
  ["ifb", "text/calendar"],
  ["ifm", "application/vnd.shana.informed.formdata"],
  ["iges", "model/iges"],
  ["igl", "application/vnd.igloader"],
  ["igm", "application/vnd.insors.igm"],
  ["igs", "model/iges"],
  ["igx", "application/vnd.micrografx.igx"],
  ["iif", "application/vnd.shana.informed.interchange"],
  ["img", "application/octet-stream"],
  ["imp", "application/vnd.accpac.simply.imp"],
  ["ims", "application/vnd.ms-ims"],
  ["in", "text/plain"],
  ["ini", "text/plain"],
  ["ink", "application/inkml+xml"],
  ["inkml", "application/inkml+xml"],
  ["install", "application/x-install-instructions"],
  ["iota", "application/vnd.astraea-software.iota"],
  ["ipfix", "application/ipfix"],
  ["ipk", "application/vnd.shana.informed.package"],
  ["irm", "application/vnd.ibm.rights-management"],
  ["irp", "application/vnd.irepository.package+xml"],
  ["iso", "application/x-iso9660-image"],
  ["itp", "application/vnd.shana.informed.formtemplate"],
  ["its", "application/its+xml"],
  ["ivp", "application/vnd.immervision-ivp"],
  ["ivu", "application/vnd.immervision-ivu"],
  ["jad", "text/vnd.sun.j2me.app-descriptor"],
  ["jade", "text/jade"],
  ["jam", "application/vnd.jam"],
  ["jar", "application/java-archive"],
  ["jardiff", "application/x-java-archive-diff"],
  ["java", "text/x-java-source"],
  ["jhc", "image/jphc"],
  ["jisp", "application/vnd.jisp"],
  ["jls", "image/jls"],
  ["jlt", "application/vnd.hp-jlyt"],
  ["jng", "image/x-jng"],
  ["jnlp", "application/x-java-jnlp-file"],
  ["joda", "application/vnd.joost.joda-archive"],
  ["jp2", "image/jp2"],
  ["jpe", "image/jpeg"],
  ["jpeg", "image/jpeg"],
  ["jpf", "image/jpx"],
  ["jpg", "image/jpeg"],
  ["jpg2", "image/jp2"],
  ["jpgm", "video/jpm"],
  ["jpgv", "video/jpeg"],
  ["jph", "image/jph"],
  ["jpm", "video/jpm"],
  ["jpx", "image/jpx"],
  ["js", "application/javascript"],
  ["json", "application/json"],
  ["json5", "application/json5"],
  ["jsonld", "application/ld+json"],
  // https://jsonlines.org/
  ["jsonl", "application/jsonl"],
  ["jsonml", "application/jsonml+json"],
  ["jsx", "text/jsx"],
  ["jxr", "image/jxr"],
  ["jxra", "image/jxra"],
  ["jxrs", "image/jxrs"],
  ["jxs", "image/jxs"],
  ["jxsc", "image/jxsc"],
  ["jxsi", "image/jxsi"],
  ["jxss", "image/jxss"],
  ["kar", "audio/midi"],
  ["karbon", "application/vnd.kde.karbon"],
  ["kdb", "application/octet-stream"],
  ["kdbx", "application/x-keepass2"],
  ["key", "application/x-iwork-keynote-sffkey"],
  ["kfo", "application/vnd.kde.kformula"],
  ["kia", "application/vnd.kidspiration"],
  ["kml", "application/vnd.google-earth.kml+xml"],
  ["kmz", "application/vnd.google-earth.kmz"],
  ["kne", "application/vnd.kinar"],
  ["knp", "application/vnd.kinar"],
  ["kon", "application/vnd.kde.kontour"],
  ["kpr", "application/vnd.kde.kpresenter"],
  ["kpt", "application/vnd.kde.kpresenter"],
  ["kpxx", "application/vnd.ds-keypoint"],
  ["ksp", "application/vnd.kde.kspread"],
  ["ktr", "application/vnd.kahootz"],
  ["ktx", "image/ktx"],
  ["ktx2", "image/ktx2"],
  ["ktz", "application/vnd.kahootz"],
  ["kwd", "application/vnd.kde.kword"],
  ["kwt", "application/vnd.kde.kword"],
  ["lasxml", "application/vnd.las.las+xml"],
  ["latex", "application/x-latex"],
  ["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
  ["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
  ["les", "application/vnd.hhe.lesson-player"],
  ["less", "text/less"],
  ["lgr", "application/lgr+xml"],
  ["lha", "application/octet-stream"],
  ["link66", "application/vnd.route66.link66+xml"],
  ["list", "text/plain"],
  ["list3820", "application/vnd.ibm.modcap"],
  ["listafp", "application/vnd.ibm.modcap"],
  ["litcoffee", "text/coffeescript"],
  ["lnk", "application/x-ms-shortcut"],
  ["log", "text/plain"],
  ["lostxml", "application/lost+xml"],
  ["lrf", "application/octet-stream"],
  ["lrm", "application/vnd.ms-lrm"],
  ["ltf", "application/vnd.frogans.ltf"],
  ["lua", "text/x-lua"],
  ["luac", "application/x-lua-bytecode"],
  ["lvp", "audio/vnd.lucent.voice"],
  ["lwp", "application/vnd.lotus-wordpro"],
  ["lzh", "application/octet-stream"],
  ["m1v", "video/mpeg"],
  ["m2a", "audio/mpeg"],
  ["m2v", "video/mpeg"],
  ["m3a", "audio/mpeg"],
  ["m3u", "text/plain"],
  ["m3u8", "application/vnd.apple.mpegurl"],
  ["m4a", "audio/x-m4a"],
  ["m4p", "application/mp4"],
  ["m4s", "video/iso.segment"],
  ["m4u", "application/vnd.mpegurl"],
  ["m4v", "video/x-m4v"],
  ["m13", "application/x-msmediaview"],
  ["m14", "application/x-msmediaview"],
  ["m21", "application/mp21"],
  ["ma", "application/mathematica"],
  ["mads", "application/mads+xml"],
  ["maei", "application/mmt-aei+xml"],
  ["mag", "application/vnd.ecowin.chart"],
  ["maker", "application/vnd.framemaker"],
  ["man", "text/troff"],
  ["manifest", "text/cache-manifest"],
  ["map", "application/json"],
  ["mar", "application/octet-stream"],
  ["markdown", "text/markdown"],
  ["mathml", "application/mathml+xml"],
  ["mb", "application/mathematica"],
  ["mbk", "application/vnd.mobius.mbk"],
  ["mbox", "application/mbox"],
  ["mc1", "application/vnd.medcalcdata"],
  ["mcd", "application/vnd.mcd"],
  ["mcurl", "text/vnd.curl.mcurl"],
  ["md", "text/markdown"],
  ["mdb", "application/x-msaccess"],
  ["mdi", "image/vnd.ms-modi"],
  ["mdx", "text/mdx"],
  ["me", "text/troff"],
  ["mesh", "model/mesh"],
  ["meta4", "application/metalink4+xml"],
  ["metalink", "application/metalink+xml"],
  ["mets", "application/mets+xml"],
  ["mfm", "application/vnd.mfmp"],
  ["mft", "application/rpki-manifest"],
  ["mgp", "application/vnd.osgeo.mapguide.package"],
  ["mgz", "application/vnd.proteus.magazine"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mie", "application/x-mie"],
  ["mif", "application/vnd.mif"],
  ["mime", "message/rfc822"],
  ["mj2", "video/mj2"],
  ["mjp2", "video/mj2"],
  ["mjs", "application/javascript"],
  ["mk3d", "video/x-matroska"],
  ["mka", "audio/x-matroska"],
  ["mkd", "text/x-markdown"],
  ["mks", "video/x-matroska"],
  ["mkv", "video/x-matroska"],
  ["mlp", "application/vnd.dolby.mlp"],
  ["mmd", "application/vnd.chipnuts.karaoke-mmd"],
  ["mmf", "application/vnd.smaf"],
  ["mml", "text/mathml"],
  ["mmr", "image/vnd.fujixerox.edmics-mmr"],
  ["mng", "video/x-mng"],
  ["mny", "application/x-msmoney"],
  ["mobi", "application/x-mobipocket-ebook"],
  ["mods", "application/mods+xml"],
  ["mov", "video/quicktime"],
  ["movie", "video/x-sgi-movie"],
  ["mp2", "audio/mpeg"],
  ["mp2a", "audio/mpeg"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mp4a", "audio/mp4"],
  ["mp4s", "application/mp4"],
  ["mp4v", "video/mp4"],
  ["mp21", "application/mp21"],
  ["mpc", "application/vnd.mophun.certificate"],
  ["mpd", "application/dash+xml"],
  ["mpe", "video/mpeg"],
  ["mpeg", "video/mpeg"],
  ["mpg", "video/mpeg"],
  ["mpg4", "video/mp4"],
  ["mpga", "audio/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["mpm", "application/vnd.blueice.multipass"],
  ["mpn", "application/vnd.mophun.application"],
  ["mpp", "application/vnd.ms-project"],
  ["mpt", "application/vnd.ms-project"],
  ["mpy", "application/vnd.ibm.minipay"],
  ["mqy", "application/vnd.mobius.mqy"],
  ["mrc", "application/marc"],
  ["mrcx", "application/marcxml+xml"],
  ["ms", "text/troff"],
  ["mscml", "application/mediaservercontrol+xml"],
  ["mseed", "application/vnd.fdsn.mseed"],
  ["mseq", "application/vnd.mseq"],
  ["msf", "application/vnd.epson.msf"],
  ["msg", "application/vnd.ms-outlook"],
  ["msh", "model/mesh"],
  ["msi", "application/x-msdownload"],
  ["msl", "application/vnd.mobius.msl"],
  ["msm", "application/octet-stream"],
  ["msp", "application/octet-stream"],
  ["msty", "application/vnd.muvee.style"],
  ["mtl", "model/mtl"],
  ["mts", "model/vnd.mts"],
  ["mus", "application/vnd.musician"],
  ["musd", "application/mmt-usd+xml"],
  ["musicxml", "application/vnd.recordare.musicxml+xml"],
  ["mvb", "application/x-msmediaview"],
  ["mvt", "application/vnd.mapbox-vector-tile"],
  ["mwf", "application/vnd.mfer"],
  ["mxf", "application/mxf"],
  ["mxl", "application/vnd.recordare.musicxml"],
  ["mxmf", "audio/mobile-xmf"],
  ["mxml", "application/xv+xml"],
  ["mxs", "application/vnd.triscape.mxs"],
  ["mxu", "video/vnd.mpegurl"],
  ["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
  ["n3", "text/n3"],
  ["nb", "application/mathematica"],
  ["nbp", "application/vnd.wolfram.player"],
  ["nc", "application/x-netcdf"],
  ["ncx", "application/x-dtbncx+xml"],
  ["nfo", "text/x-nfo"],
  ["ngdat", "application/vnd.nokia.n-gage.data"],
  ["nitf", "application/vnd.nitf"],
  ["nlu", "application/vnd.neurolanguage.nlu"],
  ["nml", "application/vnd.enliven"],
  ["nnd", "application/vnd.noblenet-directory"],
  ["nns", "application/vnd.noblenet-sealer"],
  ["nnw", "application/vnd.noblenet-web"],
  ["npx", "image/vnd.net-fpx"],
  ["nq", "application/n-quads"],
  ["nsc", "application/x-conference"],
  ["nsf", "application/vnd.lotus-notes"],
  ["nt", "application/n-triples"],
  ["ntf", "application/vnd.nitf"],
  ["numbers", "application/x-iwork-numbers-sffnumbers"],
  ["nzb", "application/x-nzb"],
  ["oa2", "application/vnd.fujitsu.oasys2"],
  ["oa3", "application/vnd.fujitsu.oasys3"],
  ["oas", "application/vnd.fujitsu.oasys"],
  ["obd", "application/x-msbinder"],
  ["obgx", "application/vnd.openblox.game+xml"],
  ["obj", "model/obj"],
  ["oda", "application/oda"],
  ["odb", "application/vnd.oasis.opendocument.database"],
  ["odc", "application/vnd.oasis.opendocument.chart"],
  ["odf", "application/vnd.oasis.opendocument.formula"],
  ["odft", "application/vnd.oasis.opendocument.formula-template"],
  ["odg", "application/vnd.oasis.opendocument.graphics"],
  ["odi", "application/vnd.oasis.opendocument.image"],
  ["odm", "application/vnd.oasis.opendocument.text-master"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogex", "model/vnd.opengex"],
  ["ogg", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["omdoc", "application/omdoc+xml"],
  ["onepkg", "application/onenote"],
  ["onetmp", "application/onenote"],
  ["onetoc", "application/onenote"],
  ["onetoc2", "application/onenote"],
  ["opf", "application/oebps-package+xml"],
  ["opml", "text/x-opml"],
  ["oprc", "application/vnd.palm"],
  ["opus", "audio/ogg"],
  ["org", "text/x-org"],
  ["osf", "application/vnd.yamaha.openscoreformat"],
  ["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
  ["osm", "application/vnd.openstreetmap.data+xml"],
  ["otc", "application/vnd.oasis.opendocument.chart-template"],
  ["otf", "font/otf"],
  ["otg", "application/vnd.oasis.opendocument.graphics-template"],
  ["oth", "application/vnd.oasis.opendocument.text-web"],
  ["oti", "application/vnd.oasis.opendocument.image-template"],
  ["otp", "application/vnd.oasis.opendocument.presentation-template"],
  ["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
  ["ott", "application/vnd.oasis.opendocument.text-template"],
  ["ova", "application/x-virtualbox-ova"],
  ["ovf", "application/x-virtualbox-ovf"],
  ["owl", "application/rdf+xml"],
  ["oxps", "application/oxps"],
  ["oxt", "application/vnd.openofficeorg.extension"],
  ["p", "text/x-pascal"],
  ["p7a", "application/x-pkcs7-signature"],
  ["p7b", "application/x-pkcs7-certificates"],
  ["p7c", "application/pkcs7-mime"],
  ["p7m", "application/pkcs7-mime"],
  ["p7r", "application/x-pkcs7-certreqresp"],
  ["p7s", "application/pkcs7-signature"],
  ["p8", "application/pkcs8"],
  ["p10", "application/x-pkcs10"],
  ["p12", "application/x-pkcs12"],
  ["pac", "application/x-ns-proxy-autoconfig"],
  ["pages", "application/x-iwork-pages-sffpages"],
  ["pas", "text/x-pascal"],
  ["paw", "application/vnd.pawaafile"],
  ["pbd", "application/vnd.powerbuilder6"],
  ["pbm", "image/x-portable-bitmap"],
  ["pcap", "application/vnd.tcpdump.pcap"],
  ["pcf", "application/x-font-pcf"],
  ["pcl", "application/vnd.hp-pcl"],
  ["pclxl", "application/vnd.hp-pclxl"],
  ["pct", "image/x-pict"],
  ["pcurl", "application/vnd.curl.pcurl"],
  ["pcx", "image/x-pcx"],
  ["pdb", "application/x-pilot"],
  ["pde", "text/x-processing"],
  ["pdf", "application/pdf"],
  ["pem", "application/x-x509-user-cert"],
  ["pfa", "application/x-font-type1"],
  ["pfb", "application/x-font-type1"],
  ["pfm", "application/x-font-type1"],
  ["pfr", "application/font-tdpfr"],
  ["pfx", "application/x-pkcs12"],
  ["pgm", "image/x-portable-graymap"],
  ["pgn", "application/x-chess-pgn"],
  ["pgp", "application/pgp"],
  ["php", "application/x-httpd-php"],
  ["php3", "application/x-httpd-php"],
  ["php4", "application/x-httpd-php"],
  ["phps", "application/x-httpd-php-source"],
  ["phtml", "application/x-httpd-php"],
  ["pic", "image/x-pict"],
  ["pkg", "application/octet-stream"],
  ["pki", "application/pkixcmp"],
  ["pkipath", "application/pkix-pkipath"],
  ["pkpass", "application/vnd.apple.pkpass"],
  ["pl", "application/x-perl"],
  ["plb", "application/vnd.3gpp.pic-bw-large"],
  ["plc", "application/vnd.mobius.plc"],
  ["plf", "application/vnd.pocketlearn"],
  ["pls", "application/pls+xml"],
  ["pm", "application/x-perl"],
  ["pml", "application/vnd.ctc-posml"],
  ["png", "image/png"],
  ["pnm", "image/x-portable-anymap"],
  ["portpkg", "application/vnd.macports.portpkg"],
  ["pot", "application/vnd.ms-powerpoint"],
  ["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
  ["ppa", "application/vnd.ms-powerpoint"],
  ["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
  ["ppd", "application/vnd.cups-ppd"],
  ["ppm", "image/x-portable-pixmap"],
  ["pps", "application/vnd.ms-powerpoint"],
  ["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
  ["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
  ["ppt", "application/powerpoint"],
  ["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["pqa", "application/vnd.palm"],
  ["prc", "application/x-pilot"],
  ["pre", "application/vnd.lotus-freelance"],
  ["prf", "application/pics-rules"],
  ["provx", "application/provenance+xml"],
  ["ps", "application/postscript"],
  ["psb", "application/vnd.3gpp.pic-bw-small"],
  ["psd", "application/x-photoshop"],
  ["psf", "application/x-font-linux-psf"],
  ["pskcxml", "application/pskc+xml"],
  ["pti", "image/prs.pti"],
  ["ptid", "application/vnd.pvi.ptid1"],
  ["pub", "application/x-mspublisher"],
  ["pvb", "application/vnd.3gpp.pic-bw-var"],
  ["pwn", "application/vnd.3m.post-it-notes"],
  ["pya", "audio/vnd.ms-playready.media.pya"],
  ["pyv", "video/vnd.ms-playready.media.pyv"],
  ["qam", "application/vnd.epson.quickanime"],
  ["qbo", "application/vnd.intu.qbo"],
  ["qfx", "application/vnd.intu.qfx"],
  ["qps", "application/vnd.publishare-delta-tree"],
  ["qt", "video/quicktime"],
  ["qwd", "application/vnd.quark.quarkxpress"],
  ["qwt", "application/vnd.quark.quarkxpress"],
  ["qxb", "application/vnd.quark.quarkxpress"],
  ["qxd", "application/vnd.quark.quarkxpress"],
  ["qxl", "application/vnd.quark.quarkxpress"],
  ["qxt", "application/vnd.quark.quarkxpress"],
  ["ra", "audio/x-realaudio"],
  ["ram", "audio/x-pn-realaudio"],
  ["raml", "application/raml+yaml"],
  ["rapd", "application/route-apd+xml"],
  ["rar", "application/x-rar"],
  ["ras", "image/x-cmu-raster"],
  ["rcprofile", "application/vnd.ipunplugged.rcprofile"],
  ["rdf", "application/rdf+xml"],
  ["rdz", "application/vnd.data-vision.rdz"],
  ["relo", "application/p2p-overlay+xml"],
  ["rep", "application/vnd.businessobjects"],
  ["res", "application/x-dtbresource+xml"],
  ["rgb", "image/x-rgb"],
  ["rif", "application/reginfo+xml"],
  ["rip", "audio/vnd.rip"],
  ["ris", "application/x-research-info-systems"],
  ["rl", "application/resource-lists+xml"],
  ["rlc", "image/vnd.fujixerox.edmics-rlc"],
  ["rld", "application/resource-lists-diff+xml"],
  ["rm", "audio/x-pn-realaudio"],
  ["rmi", "audio/midi"],
  ["rmp", "audio/x-pn-realaudio-plugin"],
  ["rms", "application/vnd.jcp.javame.midlet-rms"],
  ["rmvb", "application/vnd.rn-realmedia-vbr"],
  ["rnc", "application/relax-ng-compact-syntax"],
  ["rng", "application/xml"],
  ["roa", "application/rpki-roa"],
  ["roff", "text/troff"],
  ["rp9", "application/vnd.cloanto.rp9"],
  ["rpm", "audio/x-pn-realaudio-plugin"],
  ["rpss", "application/vnd.nokia.radio-presets"],
  ["rpst", "application/vnd.nokia.radio-preset"],
  ["rq", "application/sparql-query"],
  ["rs", "application/rls-services+xml"],
  ["rsa", "application/x-pkcs7"],
  ["rsat", "application/atsc-rsat+xml"],
  ["rsd", "application/rsd+xml"],
  ["rsheet", "application/urc-ressheet+xml"],
  ["rss", "application/rss+xml"],
  ["rtf", "text/rtf"],
  ["rtx", "text/richtext"],
  ["run", "application/x-makeself"],
  ["rusd", "application/route-usd+xml"],
  ["rv", "video/vnd.rn-realvideo"],
  ["s", "text/x-asm"],
  ["s3m", "audio/s3m"],
  ["saf", "application/vnd.yamaha.smaf-audio"],
  ["sass", "text/x-sass"],
  ["sbml", "application/sbml+xml"],
  ["sc", "application/vnd.ibm.secure-container"],
  ["scd", "application/x-msschedule"],
  ["scm", "application/vnd.lotus-screencam"],
  ["scq", "application/scvp-cv-request"],
  ["scs", "application/scvp-cv-response"],
  ["scss", "text/x-scss"],
  ["scurl", "text/vnd.curl.scurl"],
  ["sda", "application/vnd.stardivision.draw"],
  ["sdc", "application/vnd.stardivision.calc"],
  ["sdd", "application/vnd.stardivision.impress"],
  ["sdkd", "application/vnd.solent.sdkm+xml"],
  ["sdkm", "application/vnd.solent.sdkm+xml"],
  ["sdp", "application/sdp"],
  ["sdw", "application/vnd.stardivision.writer"],
  ["sea", "application/octet-stream"],
  ["see", "application/vnd.seemail"],
  ["seed", "application/vnd.fdsn.seed"],
  ["sema", "application/vnd.sema"],
  ["semd", "application/vnd.semd"],
  ["semf", "application/vnd.semf"],
  ["senmlx", "application/senml+xml"],
  ["sensmlx", "application/sensml+xml"],
  ["ser", "application/java-serialized-object"],
  ["setpay", "application/set-payment-initiation"],
  ["setreg", "application/set-registration-initiation"],
  ["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
  ["sfs", "application/vnd.spotfire.sfs"],
  ["sfv", "text/x-sfv"],
  ["sgi", "image/sgi"],
  ["sgl", "application/vnd.stardivision.writer-global"],
  ["sgm", "text/sgml"],
  ["sgml", "text/sgml"],
  ["sh", "application/x-sh"],
  ["shar", "application/x-shar"],
  ["shex", "text/shex"],
  ["shf", "application/shf+xml"],
  ["shtml", "text/html"],
  ["sid", "image/x-mrsid-image"],
  ["sieve", "application/sieve"],
  ["sig", "application/pgp-signature"],
  ["sil", "audio/silk"],
  ["silo", "model/mesh"],
  ["sis", "application/vnd.symbian.install"],
  ["sisx", "application/vnd.symbian.install"],
  ["sit", "application/x-stuffit"],
  ["sitx", "application/x-stuffitx"],
  ["siv", "application/sieve"],
  ["skd", "application/vnd.koan"],
  ["skm", "application/vnd.koan"],
  ["skp", "application/vnd.koan"],
  ["skt", "application/vnd.koan"],
  ["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
  ["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
  ["slim", "text/slim"],
  ["slm", "text/slim"],
  ["sls", "application/route-s-tsid+xml"],
  ["slt", "application/vnd.epson.salt"],
  ["sm", "application/vnd.stepmania.stepchart"],
  ["smf", "application/vnd.stardivision.math"],
  ["smi", "application/smil"],
  ["smil", "application/smil"],
  ["smv", "video/x-smv"],
  ["smzip", "application/vnd.stepmania.package"],
  ["snd", "audio/basic"],
  ["snf", "application/x-font-snf"],
  ["so", "application/octet-stream"],
  ["spc", "application/x-pkcs7-certificates"],
  ["spdx", "text/spdx"],
  ["spf", "application/vnd.yamaha.smaf-phrase"],
  ["spl", "application/x-futuresplash"],
  ["spot", "text/vnd.in3d.spot"],
  ["spp", "application/scvp-vp-response"],
  ["spq", "application/scvp-vp-request"],
  ["spx", "audio/ogg"],
  ["sql", "application/x-sql"],
  ["src", "application/x-wais-source"],
  ["srt", "application/x-subrip"],
  ["sru", "application/sru+xml"],
  ["srx", "application/sparql-results+xml"],
  ["ssdl", "application/ssdl+xml"],
  ["sse", "application/vnd.kodak-descriptor"],
  ["ssf", "application/vnd.epson.ssf"],
  ["ssml", "application/ssml+xml"],
  ["sst", "application/octet-stream"],
  ["st", "application/vnd.sailingtracker.track"],
  ["stc", "application/vnd.sun.xml.calc.template"],
  ["std", "application/vnd.sun.xml.draw.template"],
  ["stf", "application/vnd.wt.stf"],
  ["sti", "application/vnd.sun.xml.impress.template"],
  ["stk", "application/hyperstudio"],
  ["stl", "model/stl"],
  ["stpx", "model/step+xml"],
  ["stpxz", "model/step-xml+zip"],
  ["stpz", "model/step+zip"],
  ["str", "application/vnd.pg.format"],
  ["stw", "application/vnd.sun.xml.writer.template"],
  ["styl", "text/stylus"],
  ["stylus", "text/stylus"],
  ["sub", "text/vnd.dvb.subtitle"],
  ["sus", "application/vnd.sus-calendar"],
  ["susp", "application/vnd.sus-calendar"],
  ["sv4cpio", "application/x-sv4cpio"],
  ["sv4crc", "application/x-sv4crc"],
  ["svc", "application/vnd.dvb.service"],
  ["svd", "application/vnd.svd"],
  ["svg", "image/svg+xml"],
  ["svgz", "image/svg+xml"],
  ["swa", "application/x-director"],
  ["swf", "application/x-shockwave-flash"],
  ["swi", "application/vnd.aristanetworks.swi"],
  ["swidtag", "application/swid+xml"],
  ["sxc", "application/vnd.sun.xml.calc"],
  ["sxd", "application/vnd.sun.xml.draw"],
  ["sxg", "application/vnd.sun.xml.writer.global"],
  ["sxi", "application/vnd.sun.xml.impress"],
  ["sxm", "application/vnd.sun.xml.math"],
  ["sxw", "application/vnd.sun.xml.writer"],
  ["t", "text/troff"],
  ["t3", "application/x-t3vm-image"],
  ["t38", "image/t38"],
  ["taglet", "application/vnd.mynfc"],
  ["tao", "application/vnd.tao.intent-module-archive"],
  ["tap", "image/vnd.tencent.tap"],
  ["tar", "application/x-tar"],
  ["tcap", "application/vnd.3gpp2.tcap"],
  ["tcl", "application/x-tcl"],
  ["td", "application/urc-targetdesc+xml"],
  ["teacher", "application/vnd.smart.teacher"],
  ["tei", "application/tei+xml"],
  ["teicorpus", "application/tei+xml"],
  ["tex", "application/x-tex"],
  ["texi", "application/x-texinfo"],
  ["texinfo", "application/x-texinfo"],
  ["text", "text/plain"],
  ["tfi", "application/thraud+xml"],
  ["tfm", "application/x-tex-tfm"],
  ["tfx", "image/tiff-fx"],
  ["tga", "image/x-tga"],
  ["tgz", "application/x-tar"],
  ["thmx", "application/vnd.ms-officetheme"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["tk", "application/x-tcl"],
  ["tmo", "application/vnd.tmobile-livetv"],
  ["toml", "application/toml"],
  ["torrent", "application/x-bittorrent"],
  ["tpl", "application/vnd.groove-tool-template"],
  ["tpt", "application/vnd.trid.tpt"],
  ["tr", "text/troff"],
  ["tra", "application/vnd.trueapp"],
  ["trig", "application/trig"],
  ["trm", "application/x-msterminal"],
  ["ts", "video/mp2t"],
  ["tsd", "application/timestamped-data"],
  ["tsv", "text/tab-separated-values"],
  ["ttc", "font/collection"],
  ["ttf", "font/ttf"],
  ["ttl", "text/turtle"],
  ["ttml", "application/ttml+xml"],
  ["twd", "application/vnd.simtech-mindmapper"],
  ["twds", "application/vnd.simtech-mindmapper"],
  ["txd", "application/vnd.genomatix.tuxedo"],
  ["txf", "application/vnd.mobius.txf"],
  ["txt", "text/plain"],
  ["u8dsn", "message/global-delivery-status"],
  ["u8hdr", "message/global-headers"],
  ["u8mdn", "message/global-disposition-notification"],
  ["u8msg", "message/global"],
  ["u32", "application/x-authorware-bin"],
  ["ubj", "application/ubjson"],
  ["udeb", "application/x-debian-package"],
  ["ufd", "application/vnd.ufdl"],
  ["ufdl", "application/vnd.ufdl"],
  ["ulx", "application/x-glulx"],
  ["umj", "application/vnd.umajin"],
  ["unityweb", "application/vnd.unity"],
  ["uoml", "application/vnd.uoml+xml"],
  ["uri", "text/uri-list"],
  ["uris", "text/uri-list"],
  ["urls", "text/uri-list"],
  ["usdz", "model/vnd.usdz+zip"],
  ["ustar", "application/x-ustar"],
  ["utz", "application/vnd.uiq.theme"],
  ["uu", "text/x-uuencode"],
  ["uva", "audio/vnd.dece.audio"],
  ["uvd", "application/vnd.dece.data"],
  ["uvf", "application/vnd.dece.data"],
  ["uvg", "image/vnd.dece.graphic"],
  ["uvh", "video/vnd.dece.hd"],
  ["uvi", "image/vnd.dece.graphic"],
  ["uvm", "video/vnd.dece.mobile"],
  ["uvp", "video/vnd.dece.pd"],
  ["uvs", "video/vnd.dece.sd"],
  ["uvt", "application/vnd.dece.ttml+xml"],
  ["uvu", "video/vnd.uvvu.mp4"],
  ["uvv", "video/vnd.dece.video"],
  ["uvva", "audio/vnd.dece.audio"],
  ["uvvd", "application/vnd.dece.data"],
  ["uvvf", "application/vnd.dece.data"],
  ["uvvg", "image/vnd.dece.graphic"],
  ["uvvh", "video/vnd.dece.hd"],
  ["uvvi", "image/vnd.dece.graphic"],
  ["uvvm", "video/vnd.dece.mobile"],
  ["uvvp", "video/vnd.dece.pd"],
  ["uvvs", "video/vnd.dece.sd"],
  ["uvvt", "application/vnd.dece.ttml+xml"],
  ["uvvu", "video/vnd.uvvu.mp4"],
  ["uvvv", "video/vnd.dece.video"],
  ["uvvx", "application/vnd.dece.unspecified"],
  ["uvvz", "application/vnd.dece.zip"],
  ["uvx", "application/vnd.dece.unspecified"],
  ["uvz", "application/vnd.dece.zip"],
  ["vbox", "application/x-virtualbox-vbox"],
  ["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
  ["vcard", "text/vcard"],
  ["vcd", "application/x-cdlink"],
  ["vcf", "text/x-vcard"],
  ["vcg", "application/vnd.groove-vcard"],
  ["vcs", "text/x-vcalendar"],
  ["vcx", "application/vnd.vcx"],
  ["vdi", "application/x-virtualbox-vdi"],
  ["vds", "model/vnd.sap.vds"],
  ["vhd", "application/x-virtualbox-vhd"],
  ["vis", "application/vnd.visionary"],
  ["viv", "video/vnd.vivo"],
  ["vlc", "application/videolan"],
  ["vmdk", "application/x-virtualbox-vmdk"],
  ["vob", "video/x-ms-vob"],
  ["vor", "application/vnd.stardivision.writer"],
  ["vox", "application/x-authorware-bin"],
  ["vrml", "model/vrml"],
  ["vsd", "application/vnd.visio"],
  ["vsf", "application/vnd.vsf"],
  ["vss", "application/vnd.visio"],
  ["vst", "application/vnd.visio"],
  ["vsw", "application/vnd.visio"],
  ["vtf", "image/vnd.valve.source.texture"],
  ["vtt", "text/vtt"],
  ["vtu", "model/vnd.vtu"],
  ["vxml", "application/voicexml+xml"],
  ["w3d", "application/x-director"],
  ["wad", "application/x-doom"],
  ["wadl", "application/vnd.sun.wadl+xml"],
  ["war", "application/java-archive"],
  ["wasm", "application/wasm"],
  ["wav", "audio/x-wav"],
  ["wax", "audio/x-ms-wax"],
  ["wbmp", "image/vnd.wap.wbmp"],
  ["wbs", "application/vnd.criticaltools.wbs+xml"],
  ["wbxml", "application/wbxml"],
  ["wcm", "application/vnd.ms-works"],
  ["wdb", "application/vnd.ms-works"],
  ["wdp", "image/vnd.ms-photo"],
  ["weba", "audio/webm"],
  ["webapp", "application/x-web-app-manifest+json"],
  ["webm", "video/webm"],
  ["webmanifest", "application/manifest+json"],
  ["webp", "image/webp"],
  ["wg", "application/vnd.pmi.widget"],
  ["wgt", "application/widget"],
  ["wks", "application/vnd.ms-works"],
  ["wm", "video/x-ms-wm"],
  ["wma", "audio/x-ms-wma"],
  ["wmd", "application/x-ms-wmd"],
  ["wmf", "image/wmf"],
  ["wml", "text/vnd.wap.wml"],
  ["wmlc", "application/wmlc"],
  ["wmls", "text/vnd.wap.wmlscript"],
  ["wmlsc", "application/vnd.wap.wmlscriptc"],
  ["wmv", "video/x-ms-wmv"],
  ["wmx", "video/x-ms-wmx"],
  ["wmz", "application/x-msmetafile"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["word", "application/msword"],
  ["wpd", "application/vnd.wordperfect"],
  ["wpl", "application/vnd.ms-wpl"],
  ["wps", "application/vnd.ms-works"],
  ["wqd", "application/vnd.wqd"],
  ["wri", "application/x-mswrite"],
  ["wrl", "model/vrml"],
  ["wsc", "message/vnd.wfa.wsc"],
  ["wsdl", "application/wsdl+xml"],
  ["wspolicy", "application/wspolicy+xml"],
  ["wtb", "application/vnd.webturbo"],
  ["wvx", "video/x-ms-wvx"],
  ["x3d", "model/x3d+xml"],
  ["x3db", "model/x3d+fastinfoset"],
  ["x3dbz", "model/x3d+binary"],
  ["x3dv", "model/x3d-vrml"],
  ["x3dvz", "model/x3d+vrml"],
  ["x3dz", "model/x3d+xml"],
  ["x32", "application/x-authorware-bin"],
  ["x_b", "model/vnd.parasolid.transmit.binary"],
  ["x_t", "model/vnd.parasolid.transmit.text"],
  ["xaml", "application/xaml+xml"],
  ["xap", "application/x-silverlight-app"],
  ["xar", "application/vnd.xara"],
  ["xav", "application/xcap-att+xml"],
  ["xbap", "application/x-ms-xbap"],
  ["xbd", "application/vnd.fujixerox.docuworks.binder"],
  ["xbm", "image/x-xbitmap"],
  ["xca", "application/xcap-caps+xml"],
  ["xcs", "application/calendar+xml"],
  ["xdf", "application/xcap-diff+xml"],
  ["xdm", "application/vnd.syncml.dm+xml"],
  ["xdp", "application/vnd.adobe.xdp+xml"],
  ["xdssc", "application/dssc+xml"],
  ["xdw", "application/vnd.fujixerox.docuworks"],
  ["xel", "application/xcap-el+xml"],
  ["xenc", "application/xenc+xml"],
  ["xer", "application/patch-ops-error+xml"],
  ["xfdf", "application/vnd.adobe.xfdf"],
  ["xfdl", "application/vnd.xfdl"],
  ["xht", "application/xhtml+xml"],
  ["xhtml", "application/xhtml+xml"],
  ["xhvml", "application/xv+xml"],
  ["xif", "image/vnd.xiff"],
  ["xl", "application/excel"],
  ["xla", "application/vnd.ms-excel"],
  ["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
  ["xlc", "application/vnd.ms-excel"],
  ["xlf", "application/xliff+xml"],
  ["xlm", "application/vnd.ms-excel"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
  ["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xlt", "application/vnd.ms-excel"],
  ["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
  ["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
  ["xlw", "application/vnd.ms-excel"],
  ["xm", "audio/xm"],
  ["xml", "application/xml"],
  ["xns", "application/xcap-ns+xml"],
  ["xo", "application/vnd.olpc-sugar"],
  ["xop", "application/xop+xml"],
  ["xpi", "application/x-xpinstall"],
  ["xpl", "application/xproc+xml"],
  ["xpm", "image/x-xpixmap"],
  ["xpr", "application/vnd.is-xpr"],
  ["xps", "application/vnd.ms-xpsdocument"],
  ["xpw", "application/vnd.intercon.formnet"],
  ["xpx", "application/vnd.intercon.formnet"],
  ["xsd", "application/xml"],
  ["xsl", "application/xml"],
  ["xslt", "application/xslt+xml"],
  ["xsm", "application/vnd.syncml+xml"],
  ["xspf", "application/xspf+xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["xvm", "application/xv+xml"],
  ["xvml", "application/xv+xml"],
  ["xwd", "image/x-xwindowdump"],
  ["xyz", "chemical/x-xyz"],
  ["xz", "application/x-xz"],
  ["yaml", "text/yaml"],
  ["yang", "application/yang"],
  ["yin", "application/yin+xml"],
  ["yml", "text/yaml"],
  ["ymp", "text/x-suse-ymp"],
  ["z", "application/x-compress"],
  ["z1", "application/x-zmachine"],
  ["z2", "application/x-zmachine"],
  ["z3", "application/x-zmachine"],
  ["z4", "application/x-zmachine"],
  ["z5", "application/x-zmachine"],
  ["z6", "application/x-zmachine"],
  ["z7", "application/x-zmachine"],
  ["z8", "application/x-zmachine"],
  ["zaz", "application/vnd.zzazz.deck+xml"],
  ["zip", "application/zip"],
  ["zir", "application/vnd.zul"],
  ["zirz", "application/vnd.zul"],
  ["zmm", "application/vnd.handheld-entertainment+xml"],
  ["zsh", "text/x-scriptzsh"]
]);
function et(e, t, n) {
  const r = Wm(e), { webkitRelativePath: o } = e, i = typeof t == "string" ? t : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && Bo(r, "path", i), Bo(r, "relativePath", i), r;
}
function Wm(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), o = Gm.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Bo(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const qm = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function Um(e) {
  return Ue(this, void 0, void 0, function* () {
    return zt(e) && Hm(e.dataTransfer) ? Jm(e.dataTransfer, e.type) : Ym(e) ? Km(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? Xm(e) : [];
  });
}
function Hm(e) {
  return zt(e);
}
function Ym(e) {
  return zt(e) && zt(e.target);
}
function zt(e) {
  return typeof e == "object" && e !== null;
}
function Km(e) {
  return Kn(e.target.files).map((t) => et(t));
}
function Xm(e) {
  return Ue(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => et(n));
  });
}
function Jm(e, t) {
  return Ue(this, void 0, void 0, function* () {
    if (e.items) {
      const n = Kn(e.items).filter((o) => o.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(Zm));
      return Vo(ja(r));
    }
    return Vo(Kn(e.files).map((n) => et(n)));
  });
}
function Vo(e) {
  return e.filter((t) => qm.indexOf(t.name) === -1);
}
function Kn(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function Zm(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Fo(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Ma(t) : Fo(e, t);
}
function ja(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? ja(n) : [n]
  ], []);
}
function Fo(e, t) {
  return Ue(this, void 0, void 0, function* () {
    var n;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const i = yield e.getAsFileSystemHandle();
      if (i === null)
        throw new Error(`${e} is not a File`);
      if (i !== void 0) {
        const a = yield i.getFile();
        return a.handle = i, et(a);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return et(r, (n = t == null ? void 0 : t.fullPath) !== null && n !== void 0 ? n : void 0);
  });
}
function Qm(e) {
  return Ue(this, void 0, void 0, function* () {
    return e.isDirectory ? Ma(e) : eg(e);
  });
}
function Ma(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const o = [];
    function i() {
      t.readEntries((a) => Ue(this, void 0, void 0, function* () {
        if (a.length) {
          const s = Promise.all(a.map(Qm));
          o.push(s), i();
        } else
          try {
            const s = yield Promise.all(o);
            n(s);
          } catch (s) {
            r(s);
          }
      }), (a) => {
        r(a);
      });
    }
    i();
  });
}
function eg(e) {
  return Ue(this, void 0, void 0, function* () {
    return new Promise((t, n) => {
      e.file((r) => {
        const o = et(r, e.fullPath);
        t(o);
      }, (r) => {
        n(r);
      });
    });
  });
}
var Rn = function(e, t) {
  if (e && t) {
    var n = Array.isArray(t) ? t : t.split(",");
    if (n.length === 0)
      return !0;
    var r = e.name || "", o = (e.type || "").toLowerCase(), i = o.replace(/\/.*$/, "");
    return n.some(function(a) {
      var s = a.trim().toLowerCase();
      return s.charAt(0) === "." ? r.toLowerCase().endsWith(s) : s.endsWith("/*") ? i === s.replace(/\/.*$/, "") : o === s;
    });
  }
  return !0;
};
function zo(e) {
  return rg(e) || ng(e) || La(e) || tg();
}
function tg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ng(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function rg(e) {
  if (Array.isArray(e)) return Xn(e);
}
function Go(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Wo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Go(Object(n), !0).forEach(function(r) {
      $a(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Go(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function xt(e, t) {
  return ag(e) || ig(e, t) || La(e, t) || og();
}
function og() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function La(e, t) {
  if (e) {
    if (typeof e == "string") return Xn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xn(e, t);
  }
}
function Xn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ig(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, s;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, s = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw s;
      }
    }
    return r;
  }
}
function ag(e) {
  if (Array.isArray(e)) return e;
}
var sg = typeof Rn == "function" ? Rn : Rn.default, cg = "file-invalid-type", lg = "file-too-large", dg = "file-too-small", pg = "too-many-files", ug = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: cg,
    message: "File type must be ".concat(r)
  };
}, qo = function(t) {
  return {
    code: lg,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Uo = function(t) {
  return {
    code: dg,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, fg = {
  code: pg,
  message: "Too many files"
};
function mg(e) {
  return e.type === "" && typeof e.getAsFile == "function";
}
function Ba(e, t) {
  var n = e.type === "application/x-moz-file" || sg(e, t) || mg(e);
  return [n, n ? null : ug(t)];
}
function Va(e, t, n) {
  if (Ge(e.size))
    if (Ge(t) && Ge(n)) {
      if (e.size > n) return [!1, qo(n)];
      if (e.size < t) return [!1, Uo(t)];
    } else {
      if (Ge(t) && e.size < t) return [!1, Uo(t)];
      if (Ge(n) && e.size > n) return [!1, qo(n)];
    }
  return [!0, null];
}
function Ge(e) {
  return e != null;
}
function gg(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, i = e.multiple, a = e.maxFiles, s = e.validator;
  return !i && t.length > 1 || i && a >= 1 && t.length > a ? !1 : t.every(function(c) {
    var l = Ba(c, n), u = xt(l, 1), d = u[0], p = Va(c, r, o), f = xt(p, 1), h = f[0], b = s ? s(c) : null;
    return d && h && !b;
  });
}
function Gt(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function st(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Ho(e) {
  e.preventDefault();
}
function vg(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function hg(e) {
  return e.indexOf("Edge/") !== -1;
}
function bg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return vg(e) || hg(e);
}
function Re() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return t.some(function(s) {
      return !Gt(r) && s && s.apply(void 0, [r].concat(i)), Gt(r);
    });
  };
}
function xg() {
  return "showOpenFilePicker" in window;
}
function yg(e) {
  if (Ge(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = xt(n, 2), o = r[0], i = r[1], a = !0;
      return Fa(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(za)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(n, r) {
      var o = xt(r, 2), i = o[0], a = o[1];
      return Wo(Wo({}, n), {}, $a({}, i, a));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function wg(e) {
  if (Ge(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = xt(n, 2), o = r[0], i = r[1];
      return [].concat(zo(t), [o], zo(i));
    }, []).filter(function(t) {
      return Fa(t) || za(t);
    }).join(",");
}
function Eg(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Dg(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Fa(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function za(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Ng = ["children"], Og = ["open"], Sg = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Cg = ["refKey", "onChange", "onClick"];
function Yo(e) {
  return Ag(e) || _g(e) || Ga(e) || Ig();
}
function Ig() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _g(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ag(e) {
  if (Array.isArray(e)) return Jn(e);
}
function jn(e, t) {
  return Tg(e) || Pg(e, t) || Ga(e, t) || kg();
}
function kg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ga(e, t) {
  if (e) {
    if (typeof e == "string") return Jn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Jn(e, t);
  }
}
function Jn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Pg(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, s;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, s = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw s;
      }
    }
    return r;
  }
}
function Tg(e) {
  if (Array.isArray(e)) return e;
}
function Ko(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ko(Object(n), !0).forEach(function(r) {
      Zn(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ko(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Zn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Wt(e, t) {
  if (e == null) return {};
  var n = Rg(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Rg(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Tr = /* @__PURE__ */ oe(function(e, t) {
  var n = e.children, r = Wt(e, Ng), o = qa(r), i = o.open, a = Wt(o, Og);
  return Za(t, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ ce.createElement(Qa, null, n(se(se({}, a), {}, {
    open: i
  })));
});
Tr.displayName = "Dropzone";
var Wa = {
  disabled: !1,
  getFilesFromEvent: Um,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !1,
  autoFocus: !1
};
Tr.defaultProps = Wa;
Tr.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {boolean} params.isDragGlobal Files are being dragged anywhere on the document
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: re.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: re.objectOf(re.arrayOf(re.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: re.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: re.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: re.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: re.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: re.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: re.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: re.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: re.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: re.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: re.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: re.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: re.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: re.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: re.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: re.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: re.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: re.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: re.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: re.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: re.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: re.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: re.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: re.func
};
var Qn = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  isDragGlobal: !1,
  acceptedFiles: [],
  fileRejections: []
};
function qa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = se(se({}, Wa), e), n = t.accept, r = t.disabled, o = t.getFilesFromEvent, i = t.maxSize, a = t.minSize, s = t.multiple, c = t.maxFiles, l = t.onDragEnter, u = t.onDragLeave, d = t.onDragOver, p = t.onDrop, f = t.onDropAccepted, h = t.onDropRejected, b = t.onFileDialogCancel, x = t.onFileDialogOpen, w = t.useFsAccessApi, N = t.autoFocus, E = t.preventDropOnDocument, y = t.noClick, v = t.noKeyboard, D = t.noDrag, A = t.noDragEventsBubbling, j = t.onError, z = t.validator, F = Ye(function() {
    return wg(n);
  }, [n]), ie = Ye(function() {
    return yg(n);
  }, [n]), W = Ye(function() {
    return typeof x == "function" ? x : Xo;
  }, [x]), K = Ye(function() {
    return typeof b == "function" ? b : Xo;
  }, [b]), H = te(null), J = te(null), ge = Ja(jg, Qn), ye = jn(ge, 2), Oe = ye[0], le = ye[1], O = Oe.isFocused, k = Oe.isFileDialogActive, L = te(typeof window < "u" && window.isSecureContext && w && xg()), $ = function() {
    !L.current && k && setTimeout(function() {
      if (J.current) {
        var T = J.current.files;
        T.length || (le({
          type: "closeDialog"
        }), K());
      }
    }, 300);
  };
  Ne(function() {
    return window.addEventListener("focus", $, !1), function() {
      window.removeEventListener("focus", $, !1);
    };
  }, [J, k, K, L]);
  var R = te([]), B = te([]), V = function(T) {
    H.current && H.current.contains(T.target) || (T.preventDefault(), R.current = []);
  };
  Ne(function() {
    return E && (document.addEventListener("dragover", Ho, !1), document.addEventListener("drop", V, !1)), function() {
      E && (document.removeEventListener("dragover", Ho), document.removeEventListener("drop", V));
    };
  }, [H, E]), Ne(function() {
    var _ = function(Te) {
      B.current = [].concat(Yo(B.current), [Te.target]), st(Te) && le({
        isDragGlobal: !0,
        type: "setDragGlobal"
      });
    }, T = function(Te) {
      B.current = B.current.filter(function(je) {
        return je !== Te.target && je !== null;
      }), !(B.current.length > 0) && le({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, pe = function() {
      B.current = [], le({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, ue = function() {
      B.current = [], le({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    };
    return document.addEventListener("dragenter", _, !1), document.addEventListener("dragleave", T, !1), document.addEventListener("dragend", pe, !1), document.addEventListener("drop", ue, !1), function() {
      document.removeEventListener("dragenter", _), document.removeEventListener("dragleave", T), document.removeEventListener("dragend", pe), document.removeEventListener("drop", ue);
    };
  }, [H]), Ne(function() {
    return !r && N && H.current && H.current.focus(), function() {
    };
  }, [H, N, r]);
  var M = me(function(_) {
    j ? j(_) : console.error(_);
  }, [j]), q = me(function(_) {
    _.preventDefault(), _.persist(), Ct(_), R.current = [].concat(Yo(R.current), [_.target]), st(_) && Promise.resolve(o(_)).then(function(T) {
      if (!(Gt(_) && !A)) {
        var pe = T.length, ue = pe > 0 && gg({
          files: T,
          accept: F,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: c,
          validator: z
        }), be = pe > 0 && !ue;
        le({
          isDragAccept: ue,
          isDragReject: be,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), l && l(_);
      }
    }).catch(function(T) {
      return M(T);
    });
  }, [o, l, M, A, F, a, i, s, c, z]), U = me(function(_) {
    _.preventDefault(), _.persist(), Ct(_);
    var T = st(_);
    if (T && _.dataTransfer)
      try {
        _.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return T && d && d(_), !1;
  }, [d, A]), G = me(function(_) {
    _.preventDefault(), _.persist(), Ct(_);
    var T = R.current.filter(function(ue) {
      return H.current && H.current.contains(ue);
    }), pe = T.indexOf(_.target);
    pe !== -1 && T.splice(pe, 1), R.current = T, !(T.length > 0) && (le({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), st(_) && u && u(_));
  }, [H, u, A]), fe = me(function(_, T) {
    var pe = [], ue = [];
    _.forEach(function(be) {
      var Te = Ba(be, F), je = jn(Te, 2), tn = je[0], nn = je[1], rn = Va(be, a, i), It = jn(rn, 2), on = It[0], an = It[1], sn = z ? z(be) : null;
      if (tn && on && !sn)
        pe.push(be);
      else {
        var cn = [nn, an];
        sn && (cn = cn.concat(sn)), ue.push({
          file: be,
          errors: cn.filter(function(Ka) {
            return Ka;
          })
        });
      }
    }), (!s && pe.length > 1 || s && c >= 1 && pe.length > c) && (pe.forEach(function(be) {
      ue.push({
        file: be,
        errors: [fg]
      });
    }), pe.splice(0)), le({
      acceptedFiles: pe,
      fileRejections: ue,
      isDragReject: ue.length > 0,
      type: "setFiles"
    }), p && p(pe, ue, T), ue.length > 0 && h && h(ue, T), pe.length > 0 && f && f(pe, T);
  }, [le, s, F, a, i, c, p, f, h, z]), I = me(function(_) {
    _.preventDefault(), _.persist(), Ct(_), R.current = [], st(_) && Promise.resolve(o(_)).then(function(T) {
      Gt(_) && !A || fe(T, _);
    }).catch(function(T) {
      return M(T);
    }), le({
      type: "reset"
    });
  }, [o, fe, M, A]), de = me(function() {
    if (L.current) {
      le({
        type: "openDialog"
      }), W();
      var _ = {
        multiple: s,
        types: ie
      };
      window.showOpenFilePicker(_).then(function(T) {
        return o(T);
      }).then(function(T) {
        fe(T, null), le({
          type: "closeDialog"
        });
      }).catch(function(T) {
        Eg(T) ? (K(T), le({
          type: "closeDialog"
        })) : Dg(T) ? (L.current = !1, J.current ? (J.current.value = null, J.current.click()) : M(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : M(T);
      });
      return;
    }
    J.current && (le({
      type: "openDialog"
    }), W(), J.current.value = null, J.current.click());
  }, [le, W, K, w, fe, M, ie, s]), Ve = me(function(_) {
    !H.current || !H.current.isEqualNode(_.target) || (_.key === " " || _.key === "Enter" || _.keyCode === 32 || _.keyCode === 13) && (_.preventDefault(), de());
  }, [H, de]), rt = me(function() {
    le({
      type: "focus"
    });
  }, []), Rr = me(function() {
    le({
      type: "blur"
    });
  }, []), jr = me(function() {
    y || (bg() ? setTimeout(de, 0) : de());
  }, [y, de]), He = function(T) {
    return r ? null : T;
  }, en = function(T) {
    return v ? null : He(T);
  }, St = function(T) {
    return D ? null : He(T);
  }, Ct = function(T) {
    A && T.stopPropagation();
  }, Ua = Ye(function() {
    return function() {
      var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, T = _.refKey, pe = T === void 0 ? "ref" : T, ue = _.role, be = _.onKeyDown, Te = _.onFocus, je = _.onBlur, tn = _.onClick, nn = _.onDragEnter, rn = _.onDragOver, It = _.onDragLeave, on = _.onDrop, an = Wt(_, Sg);
      return se(se(Zn({
        onKeyDown: en(Re(be, Ve)),
        onFocus: en(Re(Te, rt)),
        onBlur: en(Re(je, Rr)),
        onClick: He(Re(tn, jr)),
        onDragEnter: St(Re(nn, q)),
        onDragOver: St(Re(rn, U)),
        onDragLeave: St(Re(It, G)),
        onDrop: St(Re(on, I)),
        role: typeof ue == "string" && ue !== "" ? ue : "presentation"
      }, pe, H), !r && !v ? {
        tabIndex: 0
      } : {}), an);
    };
  }, [H, Ve, rt, Rr, jr, q, U, G, I, v, D, r]), Ha = me(function(_) {
    _.stopPropagation();
  }, []), Ya = Ye(function() {
    return function() {
      var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, T = _.refKey, pe = T === void 0 ? "ref" : T, ue = _.onChange, be = _.onClick, Te = Wt(_, Cg), je = Zn({
        accept: F,
        multiple: s,
        type: "file",
        style: {
          border: 0,
          clip: "rect(0, 0, 0, 0)",
          clipPath: "inset(50%)",
          height: "1px",
          margin: "0 -1px -1px 0",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: "1px",
          whiteSpace: "nowrap"
        },
        onChange: He(Re(ue, I)),
        onClick: He(Re(be, Ha)),
        tabIndex: -1
      }, pe, J);
      return se(se({}, je), Te);
    };
  }, [J, n, s, I, r]);
  return se(se({}, Oe), {}, {
    isFocused: O && !r,
    getRootProps: Ua,
    getInputProps: Ya,
    rootRef: H,
    inputRef: J,
    open: He(de)
  });
}
function jg(e, t) {
  switch (t.type) {
    case "focus":
      return se(se({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return se(se({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return se(se({}, Qn), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return se(se({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return se(se({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return se(se({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "setDragGlobal":
      return se(se({}, e), {}, {
        isDragGlobal: t.isDragGlobal
      });
    case "reset":
      return se({}, Qn);
    default:
      return e;
  }
}
function Xo() {
}
const Mg = (e) => e.startsWith("image/") ? Ls : e.startsWith("video/") ? ac : e.startsWith("audio/") ? Js : e.includes("pdf") || e.includes("document") ? ks : Ts, Jo = (e) => {
  if (e === 0) return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB", "GB"], r = Math.floor(Math.log(e) / Math.log(t));
  return parseFloat((e / Math.pow(t, r)).toFixed(2)) + " " + n[r];
};
function qg({
  onFilesAccepted: e,
  onFilesRejected: t,
  accept: n = { "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"] },
  maxFiles: r = 5,
  maxSize: o = 5 * 1024 * 1024,
  // 5MB
  multiple: i = !0,
  disabled: a = !1,
  className: s,
  showPreview: c = !0
}) {
  const [l, u] = De([]), [d, p] = De([]), f = me(
    (E, y) => {
      if (E.length > 0) {
        const v = i ? [...l, ...E] : E;
        if (u(v), e(v), c) {
          const D = E.filter((A) => A.type.startsWith("image/")).map((A) => ({
            file: A,
            url: URL.createObjectURL(A)
          }));
          p((A) => i ? [...A, ...D] : D);
        }
      }
      y.length > 0 && t && t(y);
    },
    [l, i, e, t, c]
  ), h = (E) => {
    const y = l.filter((D) => D !== E);
    u(y), e(y);
    const v = d.find((D) => D.file === E);
    v && (URL.revokeObjectURL(v.url), p((D) => D.filter((A) => A.file !== E)));
  }, { getRootProps: b, getInputProps: x, isDragActive: w, isDragReject: N } = qa({
    onDrop: f,
    accept: n,
    maxFiles: r,
    maxSize: o,
    multiple: i,
    disabled: a
  });
  return /* @__PURE__ */ C("div", { className: S("space-y-4", s), children: [
    /* @__PURE__ */ C(
      "div",
      {
        ...b(),
        className: S(
          "flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl cursor-pointer",
          "transition-all duration-200 ease-out",
          "bg-gradient-to-b from-neutral-50 to-white",
          "border-primary/60 hover:border-primary",
          w && !N && "border-primary bg-gradient-to-b from-primary/5 to-accent/5 scale-[1.01]",
          N && "border-red-400 bg-red-50",
          a && "opacity-50 cursor-not-allowed"
        ),
        children: [
          /* @__PURE__ */ m("input", { ...x() }),
          /* @__PURE__ */ m(
            "div",
            {
              className: S(
                "w-16 h-16 mb-4 rounded-2xl flex items-center justify-center",
                "bg-gradient-to-br from-primary/10 to-accent/10",
                "transition-transform duration-200",
                w && "scale-110"
              ),
              children: /* @__PURE__ */ m(
                oc,
                {
                  className: S(
                    "w-8 h-8 text-primary",
                    w && "animate-bounce"
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ m("p", { className: "text-lg font-medium text-neutral-700 mb-1", children: w ? N ? "Archivo no permitido" : "Suelta los archivos aquí" : "Arrastra archivos aquí" }),
          /* @__PURE__ */ m("p", { className: "text-sm text-neutral-500 mb-3", children: "o haz clic para seleccionar" }),
          /* @__PURE__ */ C("p", { className: "text-xs text-neutral-400", children: [
            "PNG, JPG hasta ",
            Jo(o)
          ] })
        ]
      }
    ),
    l.length > 0 && /* @__PURE__ */ C("div", { className: "space-y-2", children: [
      /* @__PURE__ */ C("p", { className: "text-sm font-medium text-neutral-700", children: [
        "Archivos seleccionados (",
        l.length,
        ")"
      ] }),
      /* @__PURE__ */ m("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: l.map((E, y) => {
        const v = Mg(E.type), D = d.find((A) => A.file === E);
        return /* @__PURE__ */ C(
          "div",
          {
            className: S(
              "group flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-xl",
              "transition-all duration-200",
              "hover:shadow-md hover:border-primary/30"
            ),
            children: [
              D ? /* @__PURE__ */ m("div", { className: "w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100", children: /* @__PURE__ */ m(
                "img",
                {
                  src: D.url,
                  alt: E.name,
                  className: "w-full h-full object-cover"
                }
              ) }) : /* @__PURE__ */ m(
                "div",
                {
                  className: S(
                    "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
                    "bg-gradient-to-br from-primary/10 to-accent/10"
                  ),
                  children: /* @__PURE__ */ m(v, { className: "w-6 h-6 text-primary" })
                }
              ),
              /* @__PURE__ */ C("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ m("p", { className: "text-sm font-medium text-neutral-800 truncate", children: E.name }),
                /* @__PURE__ */ m("p", { className: "text-xs text-neutral-500", children: Jo(E.size) })
              ] }),
              /* @__PURE__ */ m(
                "button",
                {
                  type: "button",
                  onClick: (A) => {
                    A.stopPropagation(), h(E);
                  },
                  className: S(
                    "p-1.5 rounded-lg opacity-0 group-hover:opacity-100",
                    "text-neutral-400 hover:text-red-500 hover:bg-red-50",
                    "transition-all duration-200"
                  ),
                  children: /* @__PURE__ */ m(Ut, { className: "w-4 h-4" })
                }
              )
            ]
          },
          `${E.name}-${y}`
        );
      }) })
    ] })
  ] });
}
const $g = {
  default: "bg-neutral-100 text-neutral-700",
  primary: "bg-primary/10 text-primary",
  success: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700"
};
function Ug({ columns: e, onCardMove: t, className: n }) {
  return /* @__PURE__ */ m(Sr, { onDragEnd: (o) => {
    const { source: i, destination: a, draggableId: s } = o;
    a && (i.droppableId === a.droppableId && i.index === a.index || t(
      s,
      i.droppableId,
      a.droppableId,
      i.index,
      a.index
    ));
  }, children: /* @__PURE__ */ m("div", { className: S("flex gap-4 overflow-x-auto pb-4", n), children: e.map((o) => /* @__PURE__ */ C(
    "div",
    {
      className: "flex-shrink-0 w-72 bg-neutral-50 rounded-xl border border-neutral-200",
      children: [
        /* @__PURE__ */ m(
          "div",
          {
            className: S(
              "px-4 py-3 border-b border-neutral-200 rounded-t-xl",
              "bg-gradient-to-r from-neutral-100 to-neutral-50"
            ),
            children: /* @__PURE__ */ C("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ m("h3", { className: "font-semibold text-neutral-800", children: o.title }),
              /* @__PURE__ */ m(
                "span",
                {
                  className: S(
                    "px-2 py-0.5 text-xs font-medium rounded-full",
                    "bg-primary/10 text-primary"
                  ),
                  children: o.cards.length
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ m(kr, { droppableId: o.id, children: (i, a) => /* @__PURE__ */ C(
          "div",
          {
            ref: i.innerRef,
            ...i.droppableProps,
            className: S(
              "p-3 min-h-[200px] space-y-3 transition-colors duration-200",
              a.isDraggingOver && "bg-primary/5"
            ),
            children: [
              o.cards.map((s, c) => /* @__PURE__ */ m(Ir, { draggableId: s.id, index: c, children: (l, u) => /* @__PURE__ */ C(
                "div",
                {
                  ref: l.innerRef,
                  ...l.draggableProps,
                  className: S(
                    "group bg-white rounded-lg border border-neutral-200 overflow-hidden",
                    "transition-all duration-200",
                    "hover:shadow-md hover:border-primary/30",
                    u.isDragging && "shadow-xl ring-2 ring-primary/30 rotate-2"
                  ),
                  style: {
                    ...l.draggableProps.style
                  },
                  children: [
                    /* @__PURE__ */ C(
                      "div",
                      {
                        ...l.dragHandleProps,
                        className: S(
                          "flex items-center gap-2 px-3 py-2 border-b border-neutral-100",
                          "cursor-grab active:cursor-grabbing",
                          "bg-gradient-to-r from-neutral-50 to-white"
                        ),
                        children: [
                          /* @__PURE__ */ m(
                            Xe,
                            {
                              className: S(
                                "w-4 h-4 text-neutral-300",
                                "group-hover:text-neutral-400",
                                u.isDragging && "text-primary"
                              )
                            }
                          ),
                          /* @__PURE__ */ m("span", { className: "font-medium text-sm text-neutral-800 truncate", children: s.title })
                        ]
                      }
                    ),
                    /* @__PURE__ */ C("div", { className: "p-3", children: [
                      s.description && /* @__PURE__ */ m("p", { className: "text-sm text-neutral-600 mb-2 line-clamp-2", children: s.description }),
                      s.tags && s.tags.length > 0 && /* @__PURE__ */ m("div", { className: "flex flex-wrap gap-1", children: s.tags.map((d, p) => /* @__PURE__ */ m(
                        "span",
                        {
                          className: S(
                            "px-2 py-0.5 text-xs font-medium rounded-full",
                            $g[d.variant || "default"]
                          ),
                          children: d.label
                        },
                        p
                      )) })
                    ] }),
                    /* @__PURE__ */ m(
                      "div",
                      {
                        className: S(
                          "absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-200",
                          "bg-gradient-to-r from-accent via-primary to-primary",
                          u.isDragging ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                        )
                      }
                    )
                  ]
                }
              ) }, s.id)),
              i.placeholder,
              o.cards.length === 0 && !a.isDraggingOver && /* @__PURE__ */ m("div", { className: "flex items-center justify-center h-24 text-neutral-400 text-sm", children: "Sin tarjetas" })
            ]
          }
        ) })
      ]
    },
    o.id
  )) }) });
}
function Hg({
  items: e,
  onReorder: t,
  className: n,
  cardClassName: r,
  droppableId: o = "draggable-cards",
  direction: i = "vertical"
}) {
  return /* @__PURE__ */ m(Sr, { onDragEnd: (s) => {
    if (!s.destination) return;
    const c = Array.from(e), [l] = c.splice(s.source.index, 1);
    c.splice(s.destination.index, 0, l), t(c);
  }, children: /* @__PURE__ */ m(kr, { droppableId: o, direction: i, children: (s) => /* @__PURE__ */ C(
    "div",
    {
      ref: s.innerRef,
      ...s.droppableProps,
      className: S(
        i === "horizontal" ? "flex gap-4" : "space-y-4",
        n
      ),
      children: [
        e.map((c, l) => /* @__PURE__ */ m(Ir, { draggableId: c.id, index: l, children: (u, d) => /* @__PURE__ */ C(
          "div",
          {
            ref: u.innerRef,
            ...u.draggableProps,
            className: S(
              "group relative bg-white border border-neutral-200 rounded-xl overflow-hidden",
              "transition-all duration-200 ease-out",
              "hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5",
              d.isDragging && "shadow-2xl ring-2 ring-primary/30 scale-[1.02] rotate-1",
              r
            ),
            style: {
              ...u.draggableProps.style
            },
            children: [
              c.title ? /* @__PURE__ */ C(
                "div",
                {
                  ...u.dragHandleProps,
                  className: S(
                    "flex items-center justify-between px-4 py-3",
                    "bg-gradient-to-r from-primary to-primary-dark text-white",
                    "cursor-grab active:cursor-grabbing"
                  ),
                  children: [
                    /* @__PURE__ */ m("h3", { className: "font-semibold", children: c.title }),
                    /* @__PURE__ */ m(Xe, { className: "w-5 h-5 opacity-70" })
                  ]
                }
              ) : (
                /* Handle sin título */
                /* @__PURE__ */ C(
                  "div",
                  {
                    ...u.dragHandleProps,
                    className: S(
                      "flex items-center gap-3 px-4 pt-4 pb-2",
                      "cursor-grab active:cursor-grabbing"
                    ),
                    children: [
                      /* @__PURE__ */ m(
                        Xe,
                        {
                          className: S(
                            "w-5 h-5 flex-shrink-0 text-neutral-300",
                            "group-hover:text-neutral-400 transition-colors",
                            d.isDragging && "text-primary"
                          )
                        }
                      ),
                      /* @__PURE__ */ m("div", { className: "flex-1 h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-transparent" })
                    ]
                  }
                )
              ),
              /* @__PURE__ */ m("div", { className: S(c.title ? "p-4" : "px-4 pb-4"), children: c.children }),
              !c.title && /* @__PURE__ */ m(
                "div",
                {
                  className: S(
                    "absolute top-0 left-0 right-0 h-1 transition-opacity duration-200",
                    "bg-gradient-to-r from-accent via-primary to-primary",
                    d.isDragging ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  )
                }
              )
            ]
          }
        ) }, c.id)),
        s.placeholder
      ]
    }
  ) }) });
}
function Yg({
  title: e,
  children: t,
  className: n,
  isDragging: r = !1,
  dragHandleProps: o
}) {
  return /* @__PURE__ */ C(
    "div",
    {
      className: S(
        "group relative bg-white border border-neutral-200 rounded-xl overflow-hidden",
        "transition-all duration-200 ease-out",
        "hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5",
        r && "shadow-2xl ring-2 ring-primary/30 scale-[1.02] rotate-1",
        n
      ),
      children: [
        e ? /* @__PURE__ */ C(
          "div",
          {
            ...o,
            className: S(
              "flex items-center justify-between px-4 py-3",
              "bg-gradient-to-r from-primary to-primary-dark text-white",
              "cursor-grab active:cursor-grabbing"
            ),
            children: [
              /* @__PURE__ */ m("h3", { className: "font-semibold", children: e }),
              /* @__PURE__ */ m(Xe, { className: "w-5 h-5 opacity-70" })
            ]
          }
        ) : (
          /* Handle sin título */
          /* @__PURE__ */ C(
            "div",
            {
              ...o,
              className: S(
                "flex items-center gap-3 px-4 pt-4 pb-2",
                "cursor-grab active:cursor-grabbing"
              ),
              children: [
                /* @__PURE__ */ m(
                  Xe,
                  {
                    className: S(
                      "w-5 h-5 flex-shrink-0 text-neutral-300",
                      "group-hover:text-neutral-400 transition-colors",
                      r && "text-primary"
                    )
                  }
                ),
                /* @__PURE__ */ m("div", { className: "flex-1 h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-transparent" })
              ]
            }
          )
        ),
        /* @__PURE__ */ m("div", { className: S(e ? "p-4" : "px-4 pb-4"), children: t }),
        !e && /* @__PURE__ */ m(
          "div",
          {
            className: S(
              "absolute top-0 left-0 right-0 h-1 transition-opacity duration-200",
              "bg-gradient-to-r from-accent via-primary to-primary",
              r ? "opacity-100" : "opacity-0 group-hover:opacity-50"
            )
          }
        )
      ]
    }
  );
}
export {
  Rc as Alert,
  ci as Avatar,
  _c as Badge,
  Mc as Breadcrumb,
  Rt as Button,
  wc as Card,
  Dc as CardBody,
  Oc as CardFooter,
  Ec as CardHeader,
  bc as Checkbox,
  qc as ConfirmModal,
  Hg as DraggableCard,
  qg as FileDropzone,
  pi as Header,
  $n as Input,
  Ug as KanbanBoard,
  jc as Layout,
  Xc as LoginPage,
  fi as Modal,
  Gc as Pagination,
  xc as Radio,
  vc as Select,
  di as Sidebar,
  Yg as SingleDraggableCard,
  Wg as SortableList,
  Fc as TabPanel,
  Fg as Table,
  Vc as Tabs,
  hc as Textarea,
  mi as Toast,
  Kc as ToastContainer,
  zg as ToastProvider,
  S as cn,
  Gg as useToast
};
//# sourceMappingURL=index.js.map
