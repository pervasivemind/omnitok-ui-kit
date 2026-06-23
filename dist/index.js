import { jsxs as k, jsx as m, Fragment as Ve } from "react/jsx-runtime";
import * as re from "react";
import ve, { forwardRef as ie, createElement as Bn, useState as fe, useRef as Z, useCallback as J, useMemo as Me, useEffect as be, useContext as wt, createContext as rr, useLayoutEffect as as, useReducer as ss, useImperativeHandle as cs, Fragment as ls } from "react";
import ds, { flushSync as ii } from "react-dom";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ai = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = (e) => {
  const t = us(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var fs = {
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
const ms = (e) => {
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
const gs = ie(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, c) => Bn(
    "svg",
    {
      ref: c,
      ...fs,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: ai("lucide", o),
      ...!i && !ms(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([l, p]) => Bn(l, p)),
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
const ae = (e, t) => {
  const n = ie(
    ({ className: r, ...o }, i) => Bn(gs, {
      ref: i,
      iconNode: t,
      className: ai(
        `lucide-${ps(zr(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = zr(e), n;
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], hs = ae("arrow-down", vs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], xs = ae("arrow-up-down", bs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], ws = ae("arrow-up", ys);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], Ns = ae("bell", Es);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Os = ae("check", Ds);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Mt = ae("chevron-down", Ss);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Cs = ae("chevron-left", Is);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], or = ae("chevron-right", ks);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], _s = ae("chevrons-left", As);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], Rs = ae("chevrons-right", Ps);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], si = ae("circle-alert", Ts);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], ci = ae("circle-check-big", $s);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
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
], Ls = ae("eye-off", Ms);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Bs = ae("eye", js);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [
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
], Fs = ae("file-text", Vs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], Gs = ae("file", zs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Xe = ae("grip-vertical", Ws);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Us = ae("house", qs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Ys = ae("image", Hs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], li = ae("info", Ks);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Js = ae("loader-circle", Xs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Zs = ae("lock", Qs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], tc = ae("mail", ec);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], di = ae("menu", nc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = [["path", { d: "M5 12h14", key: "1ays0h" }]], oc = ae("minus", rc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], ac = ae("music", ic);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
], cc = ae("panel-left-close", sc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], pi = ae("search", lc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dc = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], ui = ae("triangle-alert", dc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], uc = ae("upload", pc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], mc = ae("video", fc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], tt = ae("x", gc);
function fi(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = fi(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function vc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = fi(e)) && (r && (r += " "), r += t);
  return r;
}
function S(...e) {
  return vc(e);
}
const hc = {
  primary: "bg-primary text-white hover:bg-primary-dark active:bg-primary-dark focus:ring-primary",
  accent: "bg-accent text-white hover:bg-accent-dark active:bg-accent-dark focus:ring-accent",
  neutral: "bg-neutral-200 text-neutral-800 hover:bg-neutral-300 active:bg-neutral-400 focus:ring-neutral-400",
  accept: "bg-success text-white hover:bg-success-dark active:bg-success-dark focus:ring-success",
  danger: "bg-error text-white hover:bg-error-dark active:bg-error-dark focus:ring-error",
  info: "bg-info text-white hover:bg-info-dark active:bg-info-dark focus:ring-info",
  violet: "bg-violet text-white hover:bg-violet-dark active:bg-violet-dark focus:ring-violet",
  rose: "bg-rose text-white hover:bg-rose-dark active:bg-rose-dark focus:ring-rose",
  teal: "bg-teal text-white hover:bg-teal-dark active:bg-teal-dark focus:ring-teal",
  outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary"
}, Gr = {
  primary: "bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 focus:ring-primary",
  accent: "bg-transparent text-accent hover:bg-accent/10 active:bg-accent/20 focus:ring-accent",
  neutral: "bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 focus:ring-neutral-300",
  accept: "bg-transparent text-success hover:bg-success/10 active:bg-success/20 focus:ring-success",
  danger: "bg-transparent text-error hover:bg-error/10 active:bg-error/20 focus:ring-error",
  info: "bg-transparent text-info hover:bg-info/10 active:bg-info/20 focus:ring-info",
  violet: "bg-transparent text-violet hover:bg-violet/10 active:bg-violet/20 focus:ring-violet",
  rose: "bg-transparent text-rose hover:bg-rose/10 active:bg-rose/20 focus:ring-rose",
  teal: "bg-transparent text-teal hover:bg-teal/10 active:bg-teal/20 focus:ring-teal"
}, bc = {
  xs: "px-2 py-0.5 text-xs gap-1",
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-4 py-2 text-base gap-2",
  lg: "px-6 py-3 text-lg gap-2.5"
}, xc = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20
}, Lt = ie(
  ({
    variant: e = "primary",
    size: t = "md",
    loading: n = !1,
    ghost: r = !1,
    leftIcon: o,
    rightIcon: i,
    fullWidth: a = !1,
    disabled: s,
    className: c,
    children: l,
    ...p
  }, d) => {
    const u = s || n;
    return /* @__PURE__ */ k(
      "button",
      {
        ref: d,
        disabled: u,
        className: S(
          // Base styles
          "inline-flex items-center justify-center font-medium rounded-md",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          // Variant styles
          r && Gr[e] ? Gr[e] : hc[e],
          // Size styles
          bc[t],
          // Full width
          a && "w-full",
          // Disabled state
          u && "opacity-50 cursor-not-allowed",
          c
        ),
        ...p,
        children: [
          n ? /* @__PURE__ */ m(Js, { className: "animate-spin", size: xc[t] }) : o,
          l,
          !n && i
        ]
      }
    );
  }
);
Lt.displayName = "Button";
const yc = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-4 py-3 text-lg"
}, wc = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, Ec = {
  sm: "pr-8",
  md: "pr-10",
  lg: "pr-12"
}, jt = ie(
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
    ...p
  }, d) => {
    const u = l || `input-${Math.random().toString(36).slice(2, 9)}`, f = !!r;
    return /* @__PURE__ */ k("div", { className: S("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ m(
        "label",
        {
          htmlFor: u,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ k("div", { className: "relative", children: [
        o && /* @__PURE__ */ m("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400", children: o }),
        /* @__PURE__ */ m(
          "input",
          {
            ref: d,
            id: u,
            disabled: s,
            className: S(
              // Base styles
              "w-full rounded-md border bg-white",
              "transition-colors duration-200",
              "placeholder:text-neutral-400",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              yc[e],
              // Icon padding
              o && wc[e],
              i && Ec[e],
              // Border color
              f ? "border-error focus:ring-error focus:border-error" : "border-neutral-300",
              // Disabled state
              s && "bg-neutral-100 cursor-not-allowed opacity-60",
              c
            ),
            "aria-invalid": f,
            "aria-describedby": f ? `${u}-error` : n ? `${u}-helper` : void 0,
            ...p
          }
        ),
        i && /* @__PURE__ */ m("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400", children: i })
      ] }),
      f && /* @__PURE__ */ m("p", { id: `${u}-error`, className: "text-sm text-error", children: r }),
      !f && n && /* @__PURE__ */ m("p", { id: `${u}-helper`, className: "text-sm text-neutral-500", children: n })
    ] });
  }
);
jt.displayName = "Input";
const Nc = {
  sm: "px-3 py-1.5 text-sm pr-8",
  md: "px-4 py-2 text-base pr-10",
  lg: "px-4 py-3 text-lg pr-12"
}, Dc = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, Oc = {
  sm: "min-h-[34px] px-3 py-1 text-sm",
  md: "min-h-[42px] px-4 py-1.5 text-base",
  lg: "min-h-[50px] px-4 py-2 text-lg"
}, Sc = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, Ic = {
  sm: 14,
  md: 16,
  lg: 20
}, Cc = ie(
  ({
    size: e = "md",
    label: t,
    helperText: n,
    error: r,
    options: o,
    placeholder: i,
    fullWidth: a = !1,
    searchable: s = !1,
    disabled: c,
    leftIcon: l,
    className: p,
    id: d,
    value: u,
    defaultValue: f,
    onChange: v,
    name: h,
    ...b
  }, E) => {
    var _;
    const w = d || `select-${Math.random().toString(36).slice(2, 9)}`, N = !!r, y = u !== void 0, [x, I] = fe(
      f !== void 0 ? String(f) : ""
    ), P = y ? String(u ?? "") : x, L = ((_ = o.find((D) => D.value === P)) == null ? void 0 : _.label) ?? "", [j, O] = fe(""), [R, B] = fe(!1), [G, V] = fe(-1), X = Z(null), Q = Z(null), te = Z(null), de = Z(null), oe = J(
      (D) => {
        de.current = D, typeof E == "function" ? E(D) : E && (E.current = D);
      },
      [E]
    ), C = Me(() => o.filter(
      (D) => !j || D.label.toLowerCase().includes(j.toLowerCase())
    ), [o, j]), $ = J((D) => {
      var A;
      const T = de.current;
      if (!T) return;
      const ee = (A = Object.getOwnPropertyDescriptor(
        HTMLSelectElement.prototype,
        "value"
      )) == null ? void 0 : A.set;
      ee == null || ee.call(T, D), T.dispatchEvent(new Event("change", { bubbles: !0 }));
    }, []), H = J(
      (D) => {
        y || I(D.target.value), v == null || v(D), B(!1), O(""), V(-1);
      },
      [y, v]
    ), W = J(
      (D) => {
        if (c) return;
        const T = o.find((ee) => ee.value === D);
        T != null && T.disabled || $(D);
      },
      [c, o, $]
    ), F = J(
      (D, T) => {
        const ee = C.length;
        if (ee === 0) return -1;
        for (let A = 0; A < ee; A++) {
          const pe = (D + T * (A + 1) + ee) % ee;
          if (!C[pe].disabled) return pe;
        }
        return -1;
      },
      [C]
    ), Y = J(() => C.findIndex((D) => !D.disabled), [C]), K = J(
      (D) => {
        if (!c)
          switch (D.key) {
            case "ArrowDown": {
              D.preventDefault(), R ? V((T) => F(T, 1)) : (B(!0), V(Y()));
              break;
            }
            case "ArrowUp": {
              D.preventDefault(), R && V((T) => F(T, -1));
              break;
            }
            case "Enter": {
              if (D.preventDefault(), R && G >= 0 && G < C.length) {
                const T = C[G];
                T.disabled || W(T.value);
              } else R || B(!0);
              break;
            }
            case "Escape": {
              D.preventDefault(), B(!1), V(-1);
              break;
            }
          }
      },
      [
        c,
        R,
        G,
        C,
        W,
        F,
        Y
      ]
    );
    be(() => {
      if (!s) return;
      const D = (T) => {
        X.current && !X.current.contains(T.target) && (B(!1), V(-1), O(""));
      };
      return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
    }, [s]), be(() => {
      var D;
      G >= 0 && te.current && ((D = te.current.querySelectorAll('[role="option"]')[G]) == null || D.scrollIntoView({ block: "nearest" }));
    }, [G]);
    const q = () => {
      var D;
      c || ((D = Q.current) == null || D.focus(), B(!0));
    };
    return s ? /* @__PURE__ */ k("div", { className: S("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ m(
        "label",
        {
          htmlFor: `${w}-input`,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ k("div", { ref: X, className: "relative", children: [
        l && /* @__PURE__ */ m("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10", children: l }),
        /* @__PURE__ */ m(
          "div",
          {
            onClick: q,
            className: S(
              // Base styles
              "flex items-center gap-1.5 w-full rounded-md border bg-white cursor-text",
              "transition-colors duration-200",
              // Size styles
              Oc[e],
              // Left icon padding
              l && Sc[e],
              // Right padding for chevron
              "pr-8",
              // Focus ring (applied when dropdown is open)
              R && !N && "ring-2 ring-primary border-primary",
              R && N && "ring-2 ring-error border-error",
              // Border color
              N ? "border-error" : "border-neutral-300",
              // Disabled state
              c && "bg-neutral-100 cursor-not-allowed opacity-60",
              p
            ),
            "aria-invalid": N,
            "aria-describedby": N ? `${w}-error` : n ? `${w}-helper` : void 0,
            children: /* @__PURE__ */ m(
              "input",
              {
                ref: Q,
                id: `${w}-input`,
                type: "text",
                value: R ? j : L,
                onChange: (D) => {
                  O(D.target.value), R || B(!0), V(0);
                },
                onFocus: () => {
                  c || B(!0);
                },
                onKeyDown: K,
                placeholder: L || i,
                disabled: c,
                className: S(
                  "flex-1 min-w-[60px] outline-none bg-transparent",
                  "placeholder:text-neutral-400",
                  c && "cursor-not-allowed"
                ),
                role: "combobox",
                "aria-expanded": R,
                "aria-controls": `${w}-listbox`,
                "aria-activedescendant": G >= 0 ? `${w}-option-${G}` : void 0,
                "aria-autocomplete": "list",
                autoComplete: "off"
              }
            )
          }
        ),
        /* @__PURE__ */ m(
          Mt,
          {
            className: S(
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-200",
              R && "rotate-180"
            ),
            size: Ic[e]
          }
        ),
        R && /* @__PURE__ */ m(
          "ul",
          {
            ref: te,
            id: `${w}-listbox`,
            role: "listbox",
            className: S(
              "absolute z-50 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: C.length === 0 ? /* @__PURE__ */ m("li", { className: "px-4 py-2 text-sm text-neutral-400", children: j ? "No matching options" : "No options available" }) : C.map((D, T) => /* @__PURE__ */ m(
              "li",
              {
                id: `${w}-option-${T}`,
                role: "option",
                "aria-selected": D.value === P,
                "aria-disabled": D.disabled,
                onClick: () => {
                  D.disabled || W(D.value);
                },
                className: S(
                  "px-4 py-2 text-sm transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  D.disabled ? "text-neutral-300 cursor-not-allowed opacity-50 select-none" : S(
                    "cursor-pointer",
                    T === G ? "bg-primary/10 text-primary" : "text-neutral-700 hover:bg-neutral-50"
                  )
                ),
                children: D.label
              },
              D.value
            ))
          }
        ),
        /* @__PURE__ */ k(
          "select",
          {
            ref: oe,
            id: w,
            name: h,
            disabled: c,
            ...y ? { value: u } : { defaultValue: f },
            onChange: H,
            className: "sr-only",
            tabIndex: -1,
            "aria-hidden": "true",
            ...b,
            children: [
              i && /* @__PURE__ */ m("option", { value: "", disabled: !0, children: i }),
              o.map((D) => /* @__PURE__ */ m("option", { value: D.value, disabled: D.disabled, children: D.label }, D.value))
            ]
          }
        )
      ] }),
      N && /* @__PURE__ */ m("p", { id: `${w}-error`, className: "text-sm text-error", children: r }),
      !N && n && /* @__PURE__ */ m("p", { id: `${w}-helper`, className: "text-sm text-neutral-500", children: n })
    ] }) : /* @__PURE__ */ k("div", { className: S("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ m(
        "label",
        {
          htmlFor: w,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ k("div", { className: "relative", children: [
        l && /* @__PURE__ */ m("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none", children: l }),
        /* @__PURE__ */ k(
          "select",
          {
            ref: E,
            id: w,
            name: h,
            disabled: c,
            value: u,
            defaultValue: f,
            onChange: v,
            className: S(
              // Base styles
              "w-full rounded-md border bg-white appearance-none cursor-pointer",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              Nc[e],
              // Icon padding
              l && Dc[e],
              // Border color
              N ? "border-error focus:ring-error focus:border-error" : "border-neutral-300",
              // Disabled state
              c && "bg-neutral-100 cursor-not-allowed opacity-60",
              p
            ),
            "aria-invalid": N,
            "aria-describedby": N ? `${w}-error` : n ? `${w}-helper` : void 0,
            ...b,
            children: [
              i && /* @__PURE__ */ m("option", { value: "", disabled: !0, children: i }),
              o.map((D) => /* @__PURE__ */ m("option", { value: D.value, disabled: D.disabled, children: D.label }, D.value))
            ]
          }
        ),
        /* @__PURE__ */ m(
          Mt,
          {
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none",
            size: e === "sm" ? 14 : e === "lg" ? 20 : 16
          }
        )
      ] }),
      N && /* @__PURE__ */ m("p", { id: `${w}-error`, className: "text-sm text-error", children: r }),
      !N && n && /* @__PURE__ */ m("p", { id: `${w}-helper`, className: "text-sm text-neutral-500", children: n })
    ] });
  }
);
Cc.displayName = "Select";
const kc = {
  sm: "min-h-[34px] px-3 py-1 text-sm",
  md: "min-h-[42px] px-4 py-1.5 text-base",
  lg: "min-h-[50px] px-4 py-2 text-lg"
}, Ac = {
  sm: "px-1.5 py-0.5 text-xs gap-0.5",
  md: "px-2 py-0.5 text-sm gap-1",
  lg: "px-2.5 py-1 text-sm gap-1"
}, _c = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, Pc = {
  sm: 12,
  md: 14,
  lg: 14
}, Rc = {
  sm: 14,
  md: 16,
  lg: 20
}, Tc = {
  primary: { base: "bg-primary/10 text-primary", hover: "hover:bg-primary/20" },
  accent: { base: "bg-accent/10 text-accent", hover: "hover:bg-accent/20" },
  neutral: { base: "bg-neutral-100 text-neutral-700", hover: "hover:bg-neutral-200" },
  success: { base: "bg-success/10 text-success", hover: "hover:bg-success/20" },
  warning: { base: "bg-warning/10 text-warning", hover: "hover:bg-warning/20" },
  error: { base: "bg-error/10 text-error", hover: "hover:bg-error/20" },
  info: { base: "bg-info/10 text-info", hover: "hover:bg-info/20" },
  violet: { base: "bg-violet/10 text-violet", hover: "hover:bg-violet/20" },
  rose: { base: "bg-rose/10 text-rose", hover: "hover:bg-rose/20" },
  teal: { base: "bg-teal/10 text-teal", hover: "hover:bg-teal/20" }
}, $c = ie(
  ({
    options: e,
    value: t,
    defaultValue: n = [],
    onChange: r,
    size: o = "md",
    label: i,
    helperText: a,
    error: s,
    placeholder: c = "Select...",
    fullWidth: l = !1,
    disabled: p = !1,
    maxItems: d,
    searchable: u = !0,
    leftIcon: f,
    tagColor: v = "primary",
    className: h,
    id: b
  }, E) => {
    const w = b || `multiselect-${Math.random().toString(36).slice(2, 9)}`, N = !!s, y = t !== void 0, [x, I] = fe(n), P = y ? t : x, [L, j] = fe(""), [O, R] = fe(!1), [B, G] = fe(-1), V = Z(null), X = Z(null), Q = Z(null), te = J(
      (_) => {
        y || I(_), r == null || r(_);
      },
      [y, r]
    ), de = Me(() => e.filter((_) => {
      const D = P.includes(_.value), T = !L || _.label.toLowerCase().includes(L.toLowerCase());
      return !D && T;
    }), [e, P, L]), oe = d === void 0 || P.length < d, C = J(
      (_) => {
        var ee;
        if (!oe || p) return;
        const D = e.find((A) => A.value === _);
        if (D != null && D.disabled) return;
        const T = [...P, _];
        te(T), j(""), G(-1), (ee = X.current) == null || ee.focus();
      },
      [oe, p, e, P, te]
    ), $ = J(
      (_, D) => {
        var ee;
        if (D == null || D.stopPropagation(), p) return;
        const T = P.filter((A) => A !== _);
        te(T), (ee = X.current) == null || ee.focus();
      },
      [p, P, te]
    ), H = J(
      (_, D) => {
        const T = de.length;
        if (T === 0) return -1;
        for (let ee = 0; ee < T; ee++) {
          const A = (_ + D * (ee + 1) + T) % T;
          if (!de[A].disabled) return A;
        }
        return -1;
      },
      [de]
    ), W = J(() => de.findIndex((_) => !_.disabled), [de]), F = J(
      (_) => {
        if (!p)
          switch (_.key) {
            case "ArrowDown": {
              _.preventDefault(), O ? G((D) => H(D, 1)) : (R(!0), G(W()));
              break;
            }
            case "ArrowUp": {
              _.preventDefault(), O && G((D) => H(D, -1));
              break;
            }
            case "Enter": {
              if (_.preventDefault(), O && B >= 0 && B < de.length) {
                const D = de[B];
                D.disabled || C(D.value);
              } else O || R(!0);
              break;
            }
            case "Backspace": {
              if (L === "" && P.length > 0) {
                const D = P[P.length - 1];
                $(D);
              }
              break;
            }
            case "Escape": {
              _.preventDefault(), R(!1), G(-1);
              break;
            }
          }
      },
      [
        p,
        O,
        B,
        C,
        L,
        P,
        $,
        H,
        W
      ]
    );
    be(() => {
      const _ = (D) => {
        V.current && !V.current.contains(D.target) && (R(!1), G(-1), j(""));
      };
      return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
    }, []), be(() => {
      var _;
      B >= 0 && Q.current && ((_ = Q.current.querySelectorAll('[role="option"]')[B]) == null || _.scrollIntoView({ block: "nearest" }));
    }, [B]);
    const Y = () => {
      var _;
      p || ((_ = X.current) == null || _.focus(), R(!0));
    }, K = (_) => {
      var D;
      return ((D = e.find((T) => T.value === _)) == null ? void 0 : D.label) ?? _;
    }, q = (_) => {
      var D;
      return ((D = e.find((T) => T.value === _)) == null ? void 0 : D.color) ?? v;
    };
    return /* @__PURE__ */ k("div", { ref: E, className: S("flex flex-col gap-1.5", l && "w-full"), children: [
      i && /* @__PURE__ */ m("label", { htmlFor: `${w}-input`, className: "text-sm font-medium text-neutral-700", children: i }),
      /* @__PURE__ */ k("div", { ref: V, className: "relative", children: [
        f && /* @__PURE__ */ m("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10", children: f }),
        /* @__PURE__ */ k(
          "div",
          {
            onClick: Y,
            className: S(
              // Base styles
              "flex flex-wrap items-center gap-1.5 w-full rounded-md border bg-white cursor-text",
              "transition-colors duration-200",
              // Size styles
              kc[o],
              // Left icon padding
              f && _c[o],
              // Right padding for chevron
              "pr-8",
              // Focus ring (applied when dropdown is open)
              O && !N && "ring-2 ring-primary border-primary",
              O && N && "ring-2 ring-error border-error",
              // Border color
              N ? "border-error" : "border-neutral-300",
              // Disabled state
              p && "bg-neutral-100 cursor-not-allowed opacity-60",
              h
            ),
            "aria-invalid": N,
            "aria-describedby": N ? `${w}-error` : a ? `${w}-helper` : void 0,
            children: [
              P.map((_) => {
                const D = Tc[q(_)];
                return /* @__PURE__ */ k(
                  "span",
                  {
                    className: S(
                      "inline-flex items-center rounded-md font-medium",
                      "transition-colors duration-150",
                      D.base,
                      !p && D.hover,
                      Ac[o]
                    ),
                    children: [
                      K(_),
                      !p && /* @__PURE__ */ m(
                        "button",
                        {
                          type: "button",
                          onClick: (T) => $(_, T),
                          className: S(
                            "inline-flex items-center justify-center rounded-sm transition-colors",
                            D.hover
                          ),
                          "aria-label": `Remove ${K(_)}`,
                          tabIndex: -1,
                          children: /* @__PURE__ */ m(tt, { size: Pc[o] })
                        }
                      )
                    ]
                  },
                  _
                );
              }),
              u ? /* @__PURE__ */ m(
                "input",
                {
                  ref: X,
                  id: `${w}-input`,
                  type: "text",
                  value: L,
                  onChange: (_) => {
                    j(_.target.value), O || R(!0), G(0);
                  },
                  onFocus: () => {
                    p || R(!0);
                  },
                  onKeyDown: F,
                  placeholder: P.length === 0 ? c : "",
                  disabled: p,
                  className: S(
                    "flex-1 min-w-[60px] outline-none bg-transparent",
                    "placeholder:text-neutral-400",
                    p && "cursor-not-allowed"
                  ),
                  role: "combobox",
                  "aria-expanded": O,
                  "aria-controls": `${w}-listbox`,
                  "aria-activedescendant": B >= 0 ? `${w}-option-${B}` : void 0,
                  "aria-autocomplete": "list",
                  autoComplete: "off"
                }
              ) : /* @__PURE__ */ k(Ve, { children: [
                P.length === 0 && /* @__PURE__ */ m("span", { className: "text-neutral-400", children: c }),
                /* @__PURE__ */ m(
                  "input",
                  {
                    ref: X,
                    id: `${w}-input`,
                    className: "absolute opacity-0 w-0 h-0",
                    onFocus: () => {
                      p || R(!0);
                    },
                    onKeyDown: F,
                    disabled: p,
                    tabIndex: 0,
                    role: "combobox",
                    "aria-expanded": O,
                    "aria-controls": `${w}-listbox`,
                    "aria-activedescendant": B >= 0 ? `${w}-option-${B}` : void 0,
                    readOnly: !0
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ m(
          Mt,
          {
            className: S(
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-200",
              O && "rotate-180"
            ),
            size: Rc[o]
          }
        ),
        O && /* @__PURE__ */ m(
          "ul",
          {
            ref: Q,
            id: `${w}-listbox`,
            role: "listbox",
            "aria-multiselectable": "true",
            className: S(
              "absolute z-50 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: de.length === 0 ? /* @__PURE__ */ m("li", { className: "px-4 py-2 text-sm text-neutral-400", children: L ? "No matching options" : "No options available" }) : de.map((_, D) => /* @__PURE__ */ m(
              "li",
              {
                id: `${w}-option-${D}`,
                role: "option",
                "aria-selected": P.includes(_.value),
                "aria-disabled": _.disabled || !oe,
                onClick: () => {
                  !_.disabled && oe && C(_.value);
                },
                className: S(
                  "px-4 py-2 text-sm transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  _.disabled || !oe ? "text-neutral-300 cursor-not-allowed opacity-50 select-none" : S(
                    "cursor-pointer",
                    D === B ? "bg-primary/10 text-primary" : "text-neutral-700 hover:bg-neutral-50"
                  )
                ),
                children: _.label
              },
              _.value
            ))
          }
        )
      ] }),
      N && /* @__PURE__ */ m("p", { id: `${w}-error`, className: "text-sm text-error", children: s }),
      !N && a && /* @__PURE__ */ m("p", { id: `${w}-helper`, className: "text-sm text-neutral-500", children: a })
    ] });
  }
);
$c.displayName = "MultiSelect";
const Mc = {
  "bottom-start": "top-full left-0",
  bottom: "top-full left-1/2 -translate-x-1/2",
  "bottom-end": "top-full right-0",
  "top-start": "bottom-full left-0",
  top: "bottom-full left-1/2 -translate-x-1/2",
  "top-end": "bottom-full right-0",
  "left-start": "right-full top-0",
  left: "right-full top-1/2 -translate-y-1/2",
  "left-end": "right-full bottom-0",
  "right-start": "left-full top-0",
  right: "left-full top-1/2 -translate-y-1/2",
  "right-end": "left-full bottom-0"
};
function Lc(e, t) {
  return e.startsWith("bottom") ? { marginTop: t } : e.startsWith("top") ? { marginBottom: t } : e.startsWith("left") ? { marginRight: t } : e.startsWith("right") ? { marginLeft: t } : {};
}
const mi = ie(
  ({
    trigger: e,
    children: t,
    placement: n = "bottom-start",
    offset: r = 4,
    disabled: o = !1,
    open: i,
    onOpenChange: a,
    triggerClassName: s,
    contentClassName: c,
    className: l,
    ...p
  }, d) => {
    const u = i !== void 0, [f, v] = fe(!1), h = u ? i : f, b = Z(null), E = Z(null), w = Z(null), N = J(
      (L) => {
        u || v(L), a == null || a(L);
      },
      [u, a]
    ), y = J(() => N(!1), [N]), x = J(() => {
      o || N(!h);
    }, [o, h, N]), I = J(
      (L) => {
        var j;
        L.key === "Escape" && (L.preventDefault(), y(), (j = w.current) == null || j.focus()), L.key === "Tab" && y();
      },
      [y]
    );
    be(() => {
      const L = (j) => {
        b.current && !b.current.contains(j.target) && y();
      };
      return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
    }, [y]);
    const P = `dropdown-${Z(Math.random().toString(36).slice(2, 9)).current}`;
    return /* @__PURE__ */ k(
      "div",
      {
        ref: b,
        className: S("relative inline-flex items-center", l),
        ...p,
        children: [
          /* @__PURE__ */ m(
            "div",
            {
              ref: w,
              role: "button",
              tabIndex: o ? -1 : 0,
              "aria-haspopup": "true",
              "aria-expanded": h,
              "aria-controls": h ? `${P}-panel` : void 0,
              "aria-disabled": o,
              onClick: x,
              onKeyDown: I,
              className: S(
                "inline-flex",
                s,
                o && "opacity-50 cursor-not-allowed pointer-events-none"
              ),
              children: e
            }
          ),
          h && /* @__PURE__ */ m(
            "div",
            {
              ref: (L) => {
                E.current = L, typeof d == "function" ? d(L) : d && (d.current = L);
              },
              id: `${P}-panel`,
              onKeyDown: I,
              style: Lc(n, r),
              className: S(
                "absolute z-50 w-max",
                "rounded-md border border-neutral-200 bg-white shadow-lg",
                "animate-fade-in",
                Mc[n],
                c
              ),
              children: t
            }
          )
        ]
      }
    );
  }
);
mi.displayName = "Dropdown";
const jc = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-4 py-2.5 text-base"
}, Bc = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5"
}, ir = ie(
  ({
    card: e,
    items: t,
    onSelect: n,
    trigger: r,
    placement: o = "bottom-start",
    offset: i = 4,
    size: a = "md",
    disabled: s = !1,
    className: c,
    ...l
  }, p) => {
    const [d, u] = fe(!1), [f, v] = fe(-1), h = Z(null), b = t.filter((O) => !O.disabled), E = J(
      (O, R) => {
        const B = t.length;
        if (B === 0) return -1;
        for (let G = 0; G < B; G++) {
          const V = (O + R * (G + 1) + B) % B;
          if (!t[V].disabled) return V;
        }
        return -1;
      },
      [t]
    ), w = J(() => t.findIndex((O) => !O.disabled), [t]), N = J(() => {
      for (let O = t.length - 1; O >= 0; O--)
        if (!t[O].disabled) return O;
      return -1;
    }, [t]), y = J(() => {
      s || b.length === 0 || (u(!0), v(-1));
    }, [s, b.length]), x = J(() => {
      u(!1), v(-1);
    }, []), I = J(
      (O) => {
        var R;
        O.disabled || ((R = O.onClick) == null || R.call(O), n == null || n(O.value), x());
      },
      [n, x]
    ), P = J(
      (O) => {
        O ? y() : x();
      },
      [y, x]
    ), L = J(
      (O) => {
        if (!s)
          switch (O.key) {
            case "ArrowDown": {
              O.preventDefault(), d ? v(
                (R) => R === -1 ? w() : E(R, 1)
              ) : y();
              break;
            }
            case "ArrowUp": {
              O.preventDefault(), d ? v(
                (R) => R === -1 ? N() : E(R, -1)
              ) : y();
              break;
            }
            case "Enter":
            case " ": {
              if (O.preventDefault(), d && f >= 0 && f < t.length) {
                const R = t[f];
                R.href && !R.disabled && (window.location.href = R.href), I(R);
              } else d || y();
              break;
            }
          }
      },
      [
        s,
        d,
        f,
        t,
        y,
        I,
        E,
        w,
        N
      ]
    );
    be(() => {
      var O;
      f >= 0 && h.current && ((O = h.current.querySelectorAll('[role="menuitem"]')[f]) == null || O.scrollIntoView({ block: "nearest" }));
    }, [f]);
    const j = (O, R) => {
      const B = R === f, G = /* @__PURE__ */ k(Ve, { children: [
        O.icon && /* @__PURE__ */ m(
          "span",
          {
            className: S(
              "flex-shrink-0",
              Bc[a],
              O.danger && !O.disabled ? "text-error" : "text-neutral-400",
              B && !O.danger && "text-primary"
            ),
            children: O.icon
          }
        ),
        /* @__PURE__ */ m("span", { className: "flex-1 truncate", children: O.label }),
        O.badge && /* @__PURE__ */ m("span", { className: "text-xs text-neutral-500", children: O.badge })
      ] }), V = S(
        "flex items-center gap-2 w-full rounded-md",
        "transition-colors duration-100",
        jc[a],
        O.disabled ? "text-neutral-300 cursor-not-allowed opacity-50" : S(
          "cursor-pointer",
          O.danger ? S("text-error", B ? "bg-error/10" : "hover:bg-error/10") : S(
            "text-neutral-700",
            B ? "bg-primary/10 text-primary" : "hover:bg-neutral-50"
          )
        )
      ), X = () => {
        var Q;
        O.disabled || ((Q = O.onClick) == null || Q.call(O), n == null || n(O.value), x());
      };
      return /* @__PURE__ */ k("div", { children: [
        O.dividerBefore && /* @__PURE__ */ m("div", { className: "my-1 border-t border-neutral-200", role: "separator" }),
        O.href && !O.disabled ? /* @__PURE__ */ m(
          "a",
          {
            href: O.href,
            role: "menuitem",
            tabIndex: -1,
            className: V,
            onClick: (Q) => {
              var te;
              (te = O.onClick) == null || te.call(O), n == null || n(O.value), x(), O.onClick && Q.preventDefault();
            },
            onMouseEnter: () => v(R),
            onMouseLeave: () => v(-1),
            "aria-disabled": O.disabled,
            children: G
          }
        ) : /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            role: "menuitem",
            tabIndex: -1,
            className: S(V, "text-left"),
            onClick: X,
            onMouseEnter: () => v(R),
            onMouseLeave: () => v(-1),
            disabled: O.disabled,
            "aria-disabled": O.disabled,
            children: G
          }
        )
      ] }, O.value);
    };
    return /* @__PURE__ */ m(
      mi,
      {
        ref: p,
        trigger: r,
        placement: o,
        offset: i,
        disabled: s,
        open: d,
        onOpenChange: P,
        onKeyDown: L,
        contentClassName: "min-w-[180px] py-1 px-1 max-h-80 overflow-auto",
        className: c,
        ...l,
        children: /* @__PURE__ */ k("div", { ref: h, role: "menu", "aria-orientation": "vertical", children: [
          e && /* @__PURE__ */ k("div", { children: [
            e,
            /* @__PURE__ */ m("div", { className: "my-1 border-t border-neutral-200", role: "separator" })
          ] }),
          t.map((O, R) => j(O, R))
        ] })
      }
    );
  }
);
ir.displayName = "DropdownMenu";
const Vc = ie(
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
    ...p
  }, d) => {
    const u = c || `textarea-${Math.random().toString(36).slice(2, 9)}`, f = !!n, v = typeof l == "string" ? l.length : 0;
    return /* @__PURE__ */ k("div", { className: S("flex flex-col gap-1.5", r && "w-full"), children: [
      e && /* @__PURE__ */ m(
        "label",
        {
          htmlFor: u,
          className: "text-sm font-medium text-neutral-700",
          children: e
        }
      ),
      /* @__PURE__ */ m(
        "textarea",
        {
          ref: d,
          id: u,
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
          "aria-describedby": f ? `${u}-error` : t ? `${u}-helper` : void 0,
          ...p
        }
      ),
      /* @__PURE__ */ k("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ k("div", { children: [
          f && /* @__PURE__ */ m("p", { id: `${u}-error`, className: "text-sm text-error", children: n }),
          !f && t && /* @__PURE__ */ m("p", { id: `${u}-helper`, className: "text-sm text-neutral-500", children: t })
        ] }),
        o && i && /* @__PURE__ */ k("span", { className: "text-sm text-neutral-500", children: [
          v,
          "/",
          i
        ] })
      ] })
    ] });
  }
);
Vc.displayName = "Textarea";
const Fc = {
  primary: { checked: "peer-checked:bg-primary peer-checked:border-primary", ring: "peer-focus:ring-primary" },
  accent: { checked: "peer-checked:bg-accent peer-checked:border-accent", ring: "peer-focus:ring-accent" },
  neutral: { checked: "peer-checked:bg-neutral-600 peer-checked:border-neutral-600", ring: "peer-focus:ring-neutral-400" },
  success: { checked: "peer-checked:bg-success peer-checked:border-success", ring: "peer-focus:ring-success" },
  info: { checked: "peer-checked:bg-info peer-checked:border-info", ring: "peer-focus:ring-info" },
  violet: { checked: "peer-checked:bg-violet peer-checked:border-violet", ring: "peer-focus:ring-violet" },
  rose: { checked: "peer-checked:bg-rose peer-checked:border-rose", ring: "peer-focus:ring-rose" },
  teal: { checked: "peer-checked:bg-teal peer-checked:border-teal", ring: "peer-focus:ring-teal" }
}, zc = {
  primary: { checked: "peer-checked:bg-primary", ring: "peer-focus:ring-primary" },
  accent: { checked: "peer-checked:bg-accent", ring: "peer-focus:ring-accent" },
  neutral: { checked: "peer-checked:bg-neutral-600", ring: "peer-focus:ring-neutral-400" },
  success: { checked: "peer-checked:bg-success", ring: "peer-focus:ring-success" },
  info: { checked: "peer-checked:bg-info", ring: "peer-focus:ring-info" },
  violet: { checked: "peer-checked:bg-violet", ring: "peer-focus:ring-violet" },
  rose: { checked: "peer-checked:bg-rose", ring: "peer-focus:ring-rose" },
  teal: { checked: "peer-checked:bg-teal", ring: "peer-focus:ring-teal" }
}, gi = ie(
  ({
    label: e,
    description: t,
    error: n,
    indeterminate: r,
    variant: o = "primary",
    toggle: i = !1,
    onCheckedChange: a,
    disabled: s,
    className: c,
    id: l,
    onChange: p,
    ...d
  }, u) => {
    const f = l || `checkbox-${Math.random().toString(36).slice(2, 9)}`, v = !!n, h = (w) => {
      p == null || p(w), a == null || a(w.target.checked);
    }, b = () => {
      const w = Fc[o];
      return /* @__PURE__ */ m(
        "div",
        {
          className: S(
            "w-5 h-5 rounded border-2 transition-colors",
            "flex items-center justify-center",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "[&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100",
            w.ring,
            w.checked,
            v ? "border-error" : "border-neutral-300 peer-hover:border-neutral-400"
          ),
          children: r ? /* @__PURE__ */ m(oc, { className: "w-3 h-3 text-white transition-opacity" }) : /* @__PURE__ */ m(Os, { className: "w-3 h-3 text-white transition-opacity" })
        }
      );
    }, E = () => {
      const w = zc[o];
      return /* @__PURE__ */ m(
        "div",
        {
          className: S(
            "relative w-11 h-6 rounded-full transition-colors",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "peer-checked:[&>div]:translate-x-5",
            w.ring,
            w.checked,
            v ? "bg-error/30" : "bg-neutral-300"
          ),
          children: /* @__PURE__ */ m(
            "div",
            {
              className: S(
                "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white",
                "shadow-sm transition-transform duration-200"
              )
            }
          )
        }
      );
    };
    return /* @__PURE__ */ k("div", { className: S("flex flex-col gap-1", c), children: [
      /* @__PURE__ */ k(
        "label",
        {
          htmlFor: f,
          className: S(
            "flex items-start gap-3 cursor-pointer",
            s && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ k("div", { className: S("relative flex items-center", i ? "justify-start" : "justify-center"), children: [
              /* @__PURE__ */ m(
                "input",
                {
                  ref: u,
                  type: "checkbox",
                  id: f,
                  disabled: s,
                  className: "peer sr-only",
                  "aria-invalid": v,
                  onChange: h,
                  ...d
                }
              ),
              i ? E() : b()
            ] }),
            (e || t) && /* @__PURE__ */ k("div", { className: "flex flex-col", children: [
              e && /* @__PURE__ */ m("span", { className: "text-sm font-medium text-neutral-700", children: e }),
              t && /* @__PURE__ */ m("span", { className: "text-sm text-neutral-500", children: t })
            ] })
          ]
        }
      ),
      v && /* @__PURE__ */ m("p", { className: S("text-sm text-error", i ? "ml-14" : "ml-8"), children: n })
    ] });
  }
);
gi.displayName = "Checkbox";
const Gc = ie(
  ({ label: e, description: t, error: n, disabled: r, className: o, id: i, ...a }, s) => {
    const c = i || `radio-${Math.random().toString(36).slice(2, 9)}`, l = !!n;
    return /* @__PURE__ */ k("div", { className: S("flex flex-col gap-1", o), children: [
      /* @__PURE__ */ k(
        "label",
        {
          htmlFor: c,
          className: S(
            "flex items-start gap-3 cursor-pointer",
            r && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ k("div", { className: "relative flex items-center justify-center", children: [
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
            (e || t) && /* @__PURE__ */ k("div", { className: "flex flex-col", children: [
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
Gc.displayName = "Radio";
const Wc = {
  default: "bg-white border border-neutral-200 rounded-lg",
  bordered: "bg-white border-2 border-neutral-300 rounded-lg",
  elevated: "bg-white border border-neutral-200 shadow-card rounded-lg"
}, qc = ie(
  ({ children: e, noPadding: t = !1, hoverable: n = !1, variant: r = "default", className: o, ...i }, a) => /* @__PURE__ */ m(
    "div",
    {
      ref: a,
      className: S(
        Wc[r],
        !t && "p-4",
        n && "transition-shadow transition-colors duration-200 hover:shadow-card-hover hover:border-primary/30 cursor-pointer",
        o
      ),
      ...i,
      children: e
    }
  )
);
qc.displayName = "Card";
const Uc = ie(
  ({ children: e, action: t, className: n, ...r }, o) => /* @__PURE__ */ k(
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
Uc.displayName = "CardHeader";
const Hc = ie(
  ({ children: e, className: t, ...n }, r) => /* @__PURE__ */ m("div", { ref: r, className: S("p-4", t), ...n, children: e })
);
Hc.displayName = "CardBody";
const Yc = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
  between: "justify-between"
}, Kc = ie(
  ({ children: e, align: t = "right", className: n, ...r }, o) => /* @__PURE__ */ m(
    "div",
    {
      ref: o,
      className: S(
        "flex items-center gap-3 px-4 py-3 bg-neutral-50 border-t border-neutral-200",
        Yc[t],
        n
      ),
      ...r,
      children: e
    }
  )
);
Kc.displayName = "CardFooter";
const Xc = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  neutral: "bg-neutral-100 text-neutral-700",
  success: "bg-success/10 text-success-dark",
  warning: "bg-warning/10 text-warning-dark",
  error: "bg-error/10 text-error-dark",
  info: "bg-info/10 text-info-dark",
  violet: "bg-violet/10 text-violet-dark",
  rose: "bg-rose/10 text-rose-dark",
  teal: "bg-teal/10 text-teal-dark"
}, Jc = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base"
}, Qc = {
  primary: "bg-primary",
  accent: "bg-accent",
  neutral: "bg-neutral-400",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  info: "bg-info",
  violet: "bg-violet",
  rose: "bg-rose",
  teal: "bg-teal"
}, Zc = ie(
  ({
    children: e,
    variant: t = "primary",
    size: n = "md",
    pill: r = !1,
    dot: o = !1,
    className: i,
    ...a
  }, s) => o ? /* @__PURE__ */ m(
    "span",
    {
      ref: s,
      className: S(
        "inline-block rounded-full",
        n === "sm" && "w-2 h-2",
        n === "md" && "w-2.5 h-2.5",
        n === "lg" && "w-3 h-3",
        Qc[t],
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
        Xc[t],
        Jc[n],
        i
      ),
      ...a,
      children: e
    }
  )
);
Zc.displayName = "Badge";
const Wr = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl"
}, el = {
  xs: "w-1.5 h-1.5 border",
  sm: "w-2 h-2 border",
  md: "w-2.5 h-2.5 border-2",
  lg: "w-3 h-3 border-2",
  xl: "w-4 h-4 border-2"
}, tl = {
  online: "bg-success",
  offline: "bg-neutral-400",
  busy: "bg-error",
  away: "bg-warning"
}, Vn = ie(
  ({ size: e = "md", src: t, alt: n = "", initials: r, status: o, className: i, ...a }, s) => {
    const c = (l) => l ? l.split(" ").map((p) => p[0]).join("").toUpperCase().slice(0, 2) : "?";
    return /* @__PURE__ */ k("div", { ref: s, className: S("relative inline-block", i), children: [
      t ? /* @__PURE__ */ m(
        "img",
        {
          src: t,
          alt: n,
          className: S(
            "rounded-full object-cover",
            Wr[e]
          ),
          ...a
        }
      ) : /* @__PURE__ */ m(
        "div",
        {
          className: S(
            "rounded-full flex items-center justify-center font-medium",
            "bg-primary text-white",
            Wr[e]
          ),
          children: c(r || n)
        }
      ),
      o && /* @__PURE__ */ m(
        "span",
        {
          className: S(
            "absolute bottom-0 right-0 rounded-full border-white",
            el[e],
            tl[o]
          )
        }
      )
    ] });
  }
);
Vn.displayName = "Avatar";
const nl = {
  info: "bg-info/10 border-info/30 text-info-dark",
  success: "bg-success/10 border-success/30 text-success-dark",
  warning: "bg-warning/10 border-warning/30 text-warning-dark",
  error: "bg-error/10 border-error/30 text-error-dark"
}, rl = {
  info: li,
  success: ci,
  warning: ui,
  error: si
}, ol = ie(
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
    const l = rl[e];
    return /* @__PURE__ */ k(
      "div",
      {
        ref: c,
        role: "alert",
        className: S(
          "flex gap-3 p-4 rounded-lg border",
          nl[e],
          a
        ),
        ...s,
        children: [
          !i && /* @__PURE__ */ m(l, { className: "flex-shrink-0 w-5 h-5 mt-0.5" }),
          /* @__PURE__ */ k("div", { className: "flex-1 min-w-0", children: [
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
              children: /* @__PURE__ */ m(tt, { className: "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
ol.displayName = "Alert";
const vi = ({
  item: e,
  collapsed: t,
  level: n = 0,
  activeId: r,
  onItemClick: o,
  onCollapsedChange: i
}) => {
  const a = e.children && e.children.length > 0, s = e.active || e.id === r, c = a && e.children.some((h) => h.id === r), [l, p] = fe(c);
  be(() => {
    c && p(!0);
  }, [c]);
  const d = (h) => {
    var E;
    h.ctrlKey || h.metaKey || h.shiftKey || h.button !== 0 || (h.preventDefault(), o == null || o(e), (E = e.onClick) == null || E.call(e));
  }, u = () => {
    var h;
    a ? t ? (i == null || i(!1), p(!0)) : p(!l) : (o == null || o(e), (h = e.onClick) == null || h.call(e));
  }, f = /* @__PURE__ */ k(Ve, { children: [
    /* @__PURE__ */ k("span", { className: "relative flex-shrink-0 w-4 h-4 flex items-center justify-center text-[16px]", children: [
      e.icon || /* @__PURE__ */ m("span", { className: "w-1" }),
      t && a && /* @__PURE__ */ m(or, { className: "absolute -right-2.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 text-white/50" })
    ] }),
    !t && /* @__PURE__ */ k(Ve, { children: [
      /* @__PURE__ */ m("span", { className: "flex-1 truncate text-[13px]", children: e.label }),
      e.badge && /* @__PURE__ */ m("span", { className: "px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-accent text-white", children: e.badge }),
      a && /* @__PURE__ */ m(
        Mt,
        {
          className: S("w-3.5 h-3.5 transition-transform", l && "rotate-180")
        }
      )
    ] })
  ] }), v = S(
    "flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg",
    "transition-all duration-200 cursor-pointer",
    "text-white/80 hover:text-white hover:bg-white/10",
    s && ["gradient-active", "!text-white", "mx-2", "font-medium"],
    n > 0 && "ml-4",
    t && "justify-center px-2"
  );
  return /* @__PURE__ */ k("div", { children: [
    e.dividerBefore && /* @__PURE__ */ m("div", { className: "my-2 border-t border-white/10", role: "separator" }),
    e.href ? /* @__PURE__ */ m(
      "a",
      {
        href: e.href,
        id: e.elementId,
        className: v,
        onClick: d,
        title: t ? e.label : void 0,
        children: f
      }
    ) : /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        id: e.elementId,
        className: S(v, "w-full text-left"),
        onClick: u,
        title: t ? e.label : void 0,
        children: f
      }
    ),
    a && l && !t && /* @__PURE__ */ m("div", { className: "mt-1 space-y-1", children: e.children.map((h) => /* @__PURE__ */ m(
      vi,
      {
        item: h,
        collapsed: t,
        level: n + 1,
        activeId: r,
        onItemClick: o,
        onCollapsedChange: i
      },
      h.id
    )) })
  ] });
}, hi = ie(
  ({
    items: e,
    logo: t,
    logoCollapsed: n,
    systemName: r,
    footer: o,
    collapsed: i = !1,
    onCollapsedChange: a,
    collapsible: s = !1,
    activeId: c,
    onItemClick: l,
    className: p,
    ...d
  }, u) => {
    const f = t, v = n ?? t;
    return /* @__PURE__ */ k(
      "aside",
      {
        ref: u,
        className: S(
          "flex flex-col h-screen bg-sidebar text-white overflow-hidden flex-shrink-0",
          "transition-all duration-300",
          i ? "w-16" : "w-64",
          p
        ),
        ...d,
        children: [
          /* @__PURE__ */ m(
            "div",
            {
              className: S(
                "flex items-center h-16 border-b border-white/10 px-3",
                i && "justify-center px-2"
              ),
              children: i ? /* @__PURE__ */ m(
                "button",
                {
                  type: "button",
                  onClick: () => a == null ? void 0 : a(!1),
                  className: "w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors",
                  "aria-label": "Expand sidebar",
                  children: v || /* @__PURE__ */ m("span", { className: "text-xs text-white", children: "Logo" })
                }
              ) : /* @__PURE__ */ k(Ve, { children: [
                /* @__PURE__ */ k("div", { className: "flex flex-col flex-1 min-w-0", children: [
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
                    children: /* @__PURE__ */ m(cc, { className: "w-4 h-4" })
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ m("nav", { className: "flex-1 overflow-y-auto overflow-x-hidden py-3 space-y-0.5 scrollbar-thin", children: e.map((h) => /* @__PURE__ */ m(
            vi,
            {
              item: h,
              collapsed: i,
              activeId: c,
              onItemClick: l,
              onCollapsedChange: a
            },
            h.id
          )) }),
          o && /* @__PURE__ */ m("div", { className: "p-3 border-t border-white/10", children: o })
        ]
      }
    );
  }
);
hi.displayName = "Sidebar";
const bi = ie(
  ({ items: e, count: t, searchValue: n, searchPlaceholder: r, filterLabel: o, onSearchChange: i, onFilterChange: a }) => /* @__PURE__ */ m(
    ir,
    {
      offset: 14,
      card: /* @__PURE__ */ k("div", { className: "flex flex-col gap-4 p-4", children: [
        /* @__PURE__ */ m(
          jt,
          {
            size: "sm",
            leftIcon: /* @__PURE__ */ m(pi, { size: 14 }),
            value: n,
            onChange: (s) => i == null ? void 0 : i(s.target.value),
            placeholder: r ?? "Search notifications..."
          }
        ),
        /* @__PURE__ */ m(gi, { label: o ?? "Unread only", onCheckedChange: a })
      ] }),
      items: e ?? [],
      placement: "bottom-end",
      trigger: /* @__PURE__ */ k(
        "button",
        {
          type: "button",
          className: "relative p-2 rounded-lg hover:bg-neutral-100 transition-colors",
          "aria-label": "Notifications",
          children: [
            /* @__PURE__ */ m(Ns, { className: "w-5 h-5 text-neutral-600" }),
            t !== void 0 && t > 0 && /* @__PURE__ */ m("span", { className: "absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-4 h-4 text-xs font-medium text-white bg-accent rounded-full flex items-center justify-center", children: t > 9 ? "9+" : t })
          ]
        }
      )
    }
  )
);
bi.displayName = "NotificationMenu";
const xi = ie(
  ({
    title: e,
    searchPlaceholder: t = "Search...",
    showSearch: n = !1,
    searchValue: r,
    onSearchChange: o,
    showNotifications: i = !1,
    notificationMenu: a = {
      items: [],
      count: 0,
      searchValue: "",
      onSearchChange: () => {
      },
      onFilterChange: () => {
      },
      onItemClick: () => {
      }
    },
    user: s,
    userMenuItems: c,
    onUserClick: l,
    onMenuToggle: p,
    showMenuToggle: d = !1,
    actions: u,
    className: f,
    ...v
  }, h) => /* @__PURE__ */ k(
    "header",
    {
      ref: h,
      className: S(
        "flex items-center justify-between h-16 px-6 bg-white border-b border-neutral-200",
        f
      ),
      ...v,
      children: [
        /* @__PURE__ */ k("div", { className: "flex items-center gap-4", children: [
          d && /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              onClick: p,
              className: "p-2 rounded-lg hover:bg-neutral-100 lg:hidden",
              "aria-label": "Toggle menu",
              children: /* @__PURE__ */ m(di, { className: "w-5 h-5 text-neutral-600" })
            }
          ),
          /* @__PURE__ */ m("div", { className: "flex flex-col", children: e && /* @__PURE__ */ m("h1", { className: "text-lg font-semibold text-neutral-900", children: e }) })
        ] }),
        /* @__PURE__ */ k("div", { className: "flex items-center gap-4", children: [
          n && /* @__PURE__ */ k("div", { className: "relative hidden md:block", children: [
            /* @__PURE__ */ m(pi, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" }),
            /* @__PURE__ */ m(
              "input",
              {
                type: "search",
                placeholder: t,
                value: r,
                onChange: (b) => o == null ? void 0 : o(b.target.value),
                className: S(
                  "w-64 pl-10 pr-4 py-2 text-sm rounded-lg",
                  "bg-neutral-100 border-none",
                  "placeholder:text-neutral-400",
                  "focus:outline-none focus:ring-2 focus:ring-primary"
                )
              }
            )
          ] }),
          u,
          i && /* @__PURE__ */ m(bi, { ...a }),
          s && /* @__PURE__ */ m(
            ir,
            {
              className: "-mr-2",
              offset: 16,
              card: /* @__PURE__ */ k("div", { className: "px-4 py-2 flex items-center gap-4", children: [
                /* @__PURE__ */ m(Vn, { src: s.avatar, alt: s.name, size: "xl" }),
                /* @__PURE__ */ k("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ m("span", { className: "text-md font-medium text-neutral-900", children: s.name }),
                  s.email && /* @__PURE__ */ m("span", { className: "text-xs text-neutral-500", children: s.email }),
                  s.role && /* @__PURE__ */ m("span", { className: "text-xs text-neutral-500", children: s.role })
                ] })
              ] }),
              items: c ?? [],
              trigger: /* @__PURE__ */ m("div", { className: "pr-2 flex items-center", children: /* @__PURE__ */ m(
                Vn,
                {
                  className: "rounded-full hover:ring-2 hover:ring-offset-2 hover:ring-neutral-200",
                  src: s.avatar,
                  alt: s.name,
                  size: "sm",
                  status: s.status
                }
              ) }),
              placement: "bottom-end"
            }
          )
        ] })
      ]
    }
  )
);
xi.displayName = "Header";
const il = ie(
  ({
    children: e,
    sidebar: t,
    sidebarItems: n = [],
    collapsibleSidebar: r = !0,
    logo: o,
    logoCollapsed: i,
    systemName: a,
    sidebarFooter: s,
    activeSidebarId: c,
    onSidebarItemClick: l,
    headerTitle: p,
    user: d,
    userMenuItems: u,
    onUserClick: f,
    showNotifications: v = !0,
    notificationMenu: h,
    showSearch: b = !0,
    searchValue: E,
    onSearchChange: w,
    headerActions: N,
    header: y,
    hideSidebar: x = !1,
    hideHeader: I = !1,
    rightPanel: P,
    rightPanelWidth: L = "360px",
    className: j,
    ...O
  }, R) => {
    const [B, G] = fe(!1), [V, X] = fe(!1), Q = !!t, te = !!y;
    return /* @__PURE__ */ k("div", { ref: R, className: S("flex h-screen bg-neutral-50", j), ...O, children: [
      !x && /* @__PURE__ */ k(Ve, { children: [
        !Q && V && /* @__PURE__ */ m(
          "div",
          {
            className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
            onClick: () => X(!1)
          }
        ),
        /* @__PURE__ */ m(
          "div",
          {
            className: S(
              "fixed lg:static inset-y-0 left-0 z-50 lg:z-auto",
              "transform lg:transform-none transition-transform duration-300",
              !Q && V ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
              Q && "translate-x-0"
            ),
            children: Q ? t : /* @__PURE__ */ m(
              hi,
              {
                items: n,
                logo: o,
                logoCollapsed: i,
                systemName: a,
                footer: s,
                collapsible: r,
                collapsed: B,
                onCollapsedChange: G,
                activeId: c,
                onItemClick: (de) => {
                  l == null || l(de), X(!1);
                }
              }
            )
          }
        )
      ] }),
      !x && I && !te && /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          onClick: () => X(!V),
          className: "fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md border border-neutral-200 lg:hidden",
          "aria-label": "Toggle menu",
          children: /* @__PURE__ */ m(di, { className: "w-5 h-5 text-neutral-600" })
        }
      ),
      /* @__PURE__ */ k("div", { className: "flex-1 flex flex-col min-w-0", children: [
        !I && (te ? y : /* @__PURE__ */ m(
          xi,
          {
            title: p,
            showSearch: b,
            searchValue: E,
            onSearchChange: w,
            showNotifications: v,
            notificationMenu: h,
            user: d,
            userMenuItems: u,
            onUserClick: f,
            showMenuToggle: !x,
            onMenuToggle: () => X(!V),
            actions: N
          }
        )),
        /* @__PURE__ */ k("div", { className: "flex-1 flex overflow-hidden", children: [
          /* @__PURE__ */ m(
            "main",
            {
              className: S(
                "flex-1 overflow-y-auto p-6",
                P && "hidden md:block"
              ),
              children: e
            }
          ),
          P && /* @__PURE__ */ m(
            "aside",
            {
              className: "w-full md:w-[var(--panel-width)] border-l border-neutral-200 bg-white overflow-y-auto flex-shrink-0",
              style: { "--panel-width": L },
              children: P
            }
          )
        ] })
      ] })
    ] });
  }
);
il.displayName = "Layout";
const al = ie(
  ({
    items: e,
    showHomeIcon: t = !1,
    separator: n,
    maxItems: r,
    className: o,
    ...i
  }, a) => {
    const s = () => n || /* @__PURE__ */ m(or, { className: "w-4 h-4 text-neutral-400 mx-2" }), c = (d, u, f) => {
      const v = /* @__PURE__ */ k(Ve, { children: [
        u === 0 && t && /* @__PURE__ */ m(Us, { className: "w-4 h-4 mr-1" }),
        d.icon && /* @__PURE__ */ m("span", { className: "mr-1", children: d.icon }),
        d.label
      ] }), h = S(
        "inline-flex items-center text-sm",
        f ? "font-medium text-neutral-900" : "text-neutral-500 hover:text-neutral-700 transition-colors"
      );
      return d.href && !f ? /* @__PURE__ */ m("a", { href: d.href, className: h, children: v }) : /* @__PURE__ */ m("span", { className: h, children: v });
    };
    let l = e;
    if (r && e.length > r && r) {
      const d = e.slice(0, 1), u = e.slice(-(r - 2));
      l = [
        ...d,
        { label: "..." },
        ...u
      ];
    }
    return /* @__PURE__ */ m("nav", { ref: a, "aria-label": "Breadcrumb", className: o, ...i, children: /* @__PURE__ */ m("ol", { className: "flex items-center flex-wrap", children: l.map((d, u) => {
      const f = u === l.length - 1;
      return /* @__PURE__ */ k("li", { className: "inline-flex items-center", children: [
        c(d, u, f),
        !f && s()
      ] }, u);
    }) }) });
  }
);
al.displayName = "Breadcrumb";
const sl = ie(
  ({ onClose: e, title: t, description: n, children: r, footer: o, className: i, ...a }, s) => /* @__PURE__ */ k(
    "div",
    {
      ref: s,
      className: S("flex flex-col h-full animate-slide-in-right", i),
      ...a,
      children: [
        /* @__PURE__ */ k("div", { className: "flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark flex-shrink-0", children: [
          /* @__PURE__ */ k("div", { className: "min-w-0 flex-1", children: [
            t && /* @__PURE__ */ m("h2", { className: "text-lg font-semibold text-white truncate", children: t }),
            n && /* @__PURE__ */ m("p", { className: "mt-1 text-sm text-white/80", children: n })
          ] }),
          /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              onClick: e,
              className: "p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0 ml-3",
              "aria-label": "Close",
              children: /* @__PURE__ */ m(tt, { className: "w-5 h-5" })
            }
          )
        ] }),
        /* @__PURE__ */ m("div", { className: "flex-1 overflow-y-auto p-4", children: r }),
        o && /* @__PURE__ */ m("div", { className: "flex items-center justify-end gap-3 p-4 border-t border-neutral-200 flex-shrink-0", children: o })
      ]
    }
  )
);
sl.displayName = "SidePanel";
function cl({
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
  hoverable: p = !0,
  compact: d = !1,
  className: u,
  ...f
}, v) {
  const h = (y, x) => typeof n == "function" ? n(y) : String(y[n] ?? x), b = (y, x, I) => x.render ? x.render(y, I) : x.accessor ? String(y[x.accessor] ?? "") : "", E = (y) => {
    if (!y.sortable || !i) return;
    let x = "asc";
    r === y.key && (o === "asc" ? x = "desc" : o === "desc" && (x = null)), i(y.key, x);
  }, w = (y) => {
    if (!y.sortable) return null;
    const x = r === y.key, I = S(
      "w-4 h-4 ml-1",
      x ? "text-white" : "text-white/60"
    );
    return x && o === "asc" ? /* @__PURE__ */ m(ws, { className: I }) : x && o === "desc" ? /* @__PURE__ */ m(hs, { className: I }) : /* @__PURE__ */ m(xs, { className: I });
  }, N = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  return /* @__PURE__ */ m("div", { className: "overflow-x-auto", children: /* @__PURE__ */ k(
    "table",
    {
      ref: v,
      className: S("w-full border-collapse", u),
      ...f,
      children: [
        /* @__PURE__ */ m("thead", { className: "bg-primary text-white", children: /* @__PURE__ */ m("tr", { children: e.map((y) => /* @__PURE__ */ m(
          "th",
          {
            className: S(
              "font-semibold text-white text-sm",
              d ? "px-3 py-2" : "px-4 py-3",
              N[y.align || "left"],
              y.sortable && "cursor-pointer select-none hover:bg-primary-dark"
            ),
            style: { width: y.width },
            onClick: () => E(y),
            children: /* @__PURE__ */ k("div", { className: S(
              "flex items-center",
              y.align === "center" && "justify-center",
              y.align === "right" && "justify-end"
            ), children: [
              y.header,
              w(y)
            ] })
          },
          y.key
        )) }) }),
        /* @__PURE__ */ m("tbody", { className: "bg-white divide-y divide-neutral-200", children: s ? /* @__PURE__ */ m("tr", { children: /* @__PURE__ */ m(
          "td",
          {
            colSpan: e.length,
            className: "px-4 py-8 text-center text-neutral-500",
            children: /* @__PURE__ */ k("div", { className: "flex items-center justify-center gap-2", children: [
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
        ) }) : t.map((y, x) => /* @__PURE__ */ m(
          "tr",
          {
            className: S(
              "transition-colors",
              l && x % 2 === 1 && "bg-neutral-50",
              p && "hover:bg-neutral-50",
              a && "cursor-pointer"
            ),
            onClick: () => a == null ? void 0 : a(y, x),
            children: e.map((I) => /* @__PURE__ */ m(
              "td",
              {
                className: S(
                  "text-neutral-700 text-sm",
                  d ? "px-3 py-2" : "px-4 py-3",
                  N[I.align || "left"]
                ),
                children: b(y, I, x)
              },
              I.key
            ))
          },
          h(y, x)
        )) })
      ]
    }
  ) });
}
const bv = ie(cl), yi = rr(null), ll = {
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
}, dl = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg"
}, pl = ie(
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
  }, p) => {
    var b;
    const [d, u] = fe(
      n || ((b = e[0]) == null ? void 0 : b.id) || ""
    ), f = t ?? d, v = ll[o], h = (E) => {
      t === void 0 && u(E), r == null || r(E);
    };
    return /* @__PURE__ */ m(yi.Provider, { value: { activeId: f }, children: /* @__PURE__ */ k("div", { ref: p, className: s, ...l, children: [
      /* @__PURE__ */ m(
        "div",
        {
          role: "tablist",
          className: S(
            "flex",
            v.list,
            i && "w-full"
          ),
          children: e.map((E) => /* @__PURE__ */ k(
            "button",
            {
              role: "tab",
              type: "button",
              "aria-selected": f === E.id,
              "aria-controls": `tabpanel-${E.id}`,
              disabled: E.disabled,
              onClick: () => h(E.id),
              className: S(
                "flex items-center justify-center gap-2 font-medium transition-all min-w-0",
                v.tab,
                dl[a],
                f === E.id ? v.active : v.inactive,
                i && "flex-1",
                E.disabled && "opacity-50 cursor-not-allowed"
              ),
              children: [
                E.icon,
                /* @__PURE__ */ m("span", { className: "truncate", children: E.label }),
                E.badge !== void 0 && /* @__PURE__ */ m(
                  "span",
                  {
                    className: S(
                      "px-1.5 py-0.5 text-xs font-medium rounded-full shrink-0",
                      f === E.id ? "bg-white/20" : "bg-neutral-200 text-neutral-600"
                    ),
                    children: E.badge
                  }
                )
              ]
            },
            E.id
          ))
        }
      ),
      c
    ] }) });
  }
);
pl.displayName = "Tabs";
const ul = ie(
  ({ id: e, children: t, className: n, ...r }, o) => {
    const i = wt(yi);
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
ul.displayName = "TabPanel";
const fl = {
  es: {
    // LoginPage
    "login.title": "Iniciar Sesión",
    "login.subtitle": "Ingresa tus credenciales para continuar",
    "login.emailLabel": "Correo electrónico",
    "login.emailPlaceholder": "tu@email.com",
    "login.passwordLabel": "Contraseña",
    "login.passwordPlaceholder": "••••••••",
    "login.rememberMe": "Recordarme",
    "login.forgotPassword": "¿Olvidaste tu contraseña?",
    "login.submit": "Iniciar Sesión",
    "login.split.heroTitle": "Bienvenido de vuelta",
    "login.split.heroDescription": "Accede a tu panel de administración y gestiona tu plataforma de manera eficiente.",
    "login.split.copyright": "© {year} Omnitok. Todos los derechos reservados.",
    // Pagination
    "pagination.ariaLabel": "Paginación",
    "pagination.firstPage": "Primera página",
    "pagination.lastPage": "Última página",
    "pagination.previousPage": "Página anterior",
    "pagination.nextPage": "Página siguiente",
    "pagination.info": "{start}-{end} de {total}"
  },
  en: {
    // LoginPage
    "login.title": "Sign in",
    "login.subtitle": "Enter your credentials to continue",
    "login.emailLabel": "Email",
    "login.emailPlaceholder": "you@email.com",
    "login.passwordLabel": "Password",
    "login.passwordPlaceholder": "••••••••",
    "login.rememberMe": "Remember me",
    "login.forgotPassword": "Forgot your password?",
    "login.submit": "Sign in",
    "login.split.heroTitle": "Welcome back",
    "login.split.heroDescription": "Access your admin dashboard and manage your platform efficiently.",
    "login.split.copyright": "© {year} Omnitok. All rights reserved.",
    // Pagination
    "pagination.ariaLabel": "Pagination",
    "pagination.firstPage": "First page",
    "pagination.lastPage": "Last page",
    "pagination.previousPage": "Previous page",
    "pagination.nextPage": "Next page",
    "pagination.info": "{start}-{end} of {total}"
  }
}, ml = /\{(\w+)\}/g;
function gl(e, t) {
  if (!t) return e;
  const n = { ...e };
  for (const [r, o] of Object.entries(t))
    n[r] = { ...n[r] ?? {}, ...o };
  return n;
}
function Kt({
  language: e,
  messagesByLanguage: t,
  fallbackLanguage: n = "en"
}) {
  const r = gl(fl, t);
  return {
    language: e,
    messagesByLanguage: r,
    t: (i, a) => {
      const s = r[e] ?? {}, c = r[n] ?? {}, l = s[i] ?? c[i] ?? i;
      return a ? l.replace(ml, (p, d) => {
        const u = String(d), f = a[u];
        return f == null ? p : String(f);
      }) : l;
    }
  };
}
const vl = Kt({ language: "es" }), wi = rr(vl);
function xv({
  children: e,
  language: t,
  messages: n,
  fallbackLanguage: r = "es"
}) {
  const o = Me(
    () => Kt({ language: t, messagesByLanguage: n, fallbackLanguage: r }),
    [t, n, r]
  );
  return /* @__PURE__ */ m(wi.Provider, { value: o, children: e });
}
function Ei() {
  return wt(wi);
}
const qr = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg"
}, hl = {
  sm: 14,
  md: 16,
  lg: 20
}, bl = {
  primary: "bg-primary text-white",
  accent: "bg-accent text-white",
  neutral: "bg-neutral-700 text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-error text-white",
  info: "bg-info text-white",
  violet: "bg-violet text-white",
  rose: "bg-rose text-white",
  teal: "bg-teal text-white"
}, xl = {
  primary: "focus:ring-primary",
  accent: "focus:ring-accent",
  neutral: "focus:ring-neutral-700",
  success: "focus:ring-success",
  warning: "focus:ring-warning",
  error: "focus:ring-error",
  info: "focus:ring-info",
  violet: "focus:ring-violet",
  rose: "focus:ring-rose",
  teal: "focus:ring-teal"
}, yl = ie(
  ({
    currentPage: e,
    totalPages: t,
    onChange: n,
    siblingCount: r = 1,
    showFirstLast: o = !0,
    showInfo: i = !1,
    language: a,
    totalItems: s,
    itemsPerPage: c,
    disabled: l = !1,
    size: p = "md",
    variant: d = "primary",
    className: u,
    ...f
  }, v) => {
    const h = Ei(), { t: b } = a ? Kt({
      language: a,
      messagesByLanguage: h.messagesByLanguage
    }) : h, w = (() => {
      const j = [], R = r * 2 + 3 + 2;
      if (t <= R)
        return Array.from({ length: t }, (Q, te) => te + 1);
      const B = Math.max(e - r, 1), G = Math.min(e + r, t), V = B > 2, X = G < t - 1;
      if (!V && X) {
        const Q = 1 + 2 * r + 1;
        for (let te = 1; te <= Q; te++) j.push(te);
        j.push("ellipsis"), j.push(t);
      } else if (V && !X) {
        j.push(1), j.push("ellipsis");
        const Q = t - (2 * r + 1);
        for (let te = Q; te <= t; te++) j.push(te);
      } else {
        j.push(1), j.push("ellipsis");
        for (let Q = B; Q <= G; Q++) j.push(Q);
        j.push("ellipsis"), j.push(t);
      }
      return j;
    })(), N = hl[p], y = S(
      "flex items-center justify-center rounded-full transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      xl[d],
      qr[p],
      l && "opacity-50 cursor-not-allowed"
    ), x = ({ page: j, isActive: O }) => /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        onClick: () => !l && n(j),
        disabled: l,
        "aria-current": O ? "page" : void 0,
        className: S(
          y,
          "px-3",
          O ? bl[d] : "text-neutral-600 hover:bg-neutral-100"
        ),
        children: j
      }
    ), I = ({ direction: j, double: O }) => {
      const R = j === "prev", B = O ? R ? 1 : t : R ? e - 1 : e + 1, G = l || (R ? e === 1 : e === t), V = O ? R ? _s : Rs : R ? Cs : or;
      return /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          onClick: () => !G && n(B),
          disabled: G,
          "aria-label": b(O ? R ? "pagination.firstPage" : "pagination.lastPage" : R ? "pagination.previousPage" : "pagination.nextPage"),
          className: S(
            y,
            G ? "text-neutral-300 cursor-not-allowed" : "text-neutral-600 hover:bg-neutral-100"
          ),
          children: /* @__PURE__ */ m(V, { size: N })
        }
      );
    }, P = s && c ? (e - 1) * c + 1 : void 0, L = s && c ? Math.min(e * c, s) : void 0;
    return /* @__PURE__ */ k(
      "nav",
      {
        ref: v,
        role: "navigation",
        "aria-label": b("pagination.ariaLabel"),
        className: S("flex items-center gap-2", u),
        ...f,
        children: [
          i && s !== void 0 && /* @__PURE__ */ m("span", { className: "text-sm text-neutral-500 mr-4", children: b("pagination.info", {
            start: P ?? "",
            end: L ?? "",
            total: s
          }) }),
          o && /* @__PURE__ */ m(I, { direction: "prev", double: !0 }),
          /* @__PURE__ */ m(I, { direction: "prev" }),
          /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: w.map(
            (j, O) => j === "ellipsis" ? /* @__PURE__ */ m(
              "span",
              {
                className: S("px-2 text-neutral-400", qr[p]),
                children: "..."
              },
              `ellipsis-${O}`
            ) : /* @__PURE__ */ m(x, { page: j, isActive: j === e }, j)
          ) }),
          /* @__PURE__ */ m(I, { direction: "next" }),
          o && /* @__PURE__ */ m(I, { direction: "next", double: !0 })
        ]
      }
    );
  }
);
yl.displayName = "Pagination";
const wl = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-4xl"
}, Ni = ie(
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
    centered: p = !0,
    className: d,
    ...u
  }, f) => {
    const v = J(
      (h) => {
        h.key === "Escape" && c && t();
      },
      [c, t]
    );
    return be(() => (e && (document.addEventListener("keydown", v), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), [e, v]), e ? /* @__PURE__ */ k(
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
                p ? "items-center justify-center" : "items-start justify-center pt-16"
              ),
              children: /* @__PURE__ */ k(
                "div",
                {
                  ref: f,
                  className: S(
                    "relative w-full bg-white rounded-lg shadow-modal",
                    "animate-fade-in",
                    wl[a],
                    d
                  ),
                  onClick: (h) => h.stopPropagation(),
                  ...u,
                  children: [
                    (n || l) && /* @__PURE__ */ k("div", { className: "flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark rounded-t-lg", children: [
                      /* @__PURE__ */ k("div", { children: [
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
                          children: /* @__PURE__ */ m(tt, { className: "w-5 h-5" })
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
Ni.displayName = "Modal";
const El = ({
  message: e,
  confirmText: t = "Confirm",
  cancelText: n = "Cancel",
  confirmVariant: r = "primary",
  onConfirm: o,
  onClose: i,
  loading: a,
  ...s
}) => /* @__PURE__ */ m(
  Ni,
  {
    ...s,
    onClose: i,
    size: "sm",
    footer: /* @__PURE__ */ k(Ve, { children: [
      /* @__PURE__ */ m(Lt, { variant: "neutral", ghost: !0, onClick: i, disabled: a, children: n }),
      /* @__PURE__ */ m(Lt, { variant: r, onClick: o, loading: a, children: t })
    ] }),
    children: /* @__PURE__ */ m("p", { className: "text-neutral-700", children: e })
  }
);
El.displayName = "ConfirmModal";
const Nl = {
  info: "bg-info text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-error text-white"
}, Dl = {
  info: li,
  success: ci,
  warning: ui,
  error: si
}, Di = ie(
  ({ toast: e, onClose: t, className: n, ...r }, o) => {
    const [i, a] = fe(!1), s = Dl[e.variant];
    be(() => {
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
    return /* @__PURE__ */ k(
      "div",
      {
        ref: o,
        role: "alert",
        className: S(
          "flex items-start gap-3 p-4 rounded-lg shadow-lg min-w-[320px] max-w-md",
          "transition-all duration-200",
          i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          Nl[e.variant],
          n
        ),
        ...r,
        children: [
          /* @__PURE__ */ m(s, { className: "flex-shrink-0 w-5 h-5 mt-0.5" }),
          /* @__PURE__ */ k("div", { className: "flex-1 min-w-0", children: [
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
              children: /* @__PURE__ */ m(tt, { className: "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
Di.displayName = "Toast";
const Ol = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Sl = ({
  position: e = "top-right",
  toasts: t,
  onClose: n
}) => /* @__PURE__ */ m(
  "div",
  {
    className: S(
      "fixed z-50 flex flex-col gap-2",
      Ol[e]
    ),
    children: t.map((r) => /* @__PURE__ */ m(Di, { toast: r, onClose: n }, r.id))
  }
), Oi = rr(null), yv = ({ children: e, position: t = "top-right" }) => {
  const [n, r] = fe([]), o = J((p) => {
    const d = Math.random().toString(36).slice(2, 9);
    return r((u) => [...u, { ...p, id: d }]), d;
  }, []), i = J((p) => {
    r((d) => d.filter((u) => u.id !== p));
  }, []), a = J(
    (p, d) => o({ variant: "success", message: p, title: d }),
    [o]
  ), s = J(
    (p, d) => o({ variant: "error", message: p, title: d }),
    [o]
  ), c = J(
    (p, d) => o({ variant: "warning", message: p, title: d }),
    [o]
  ), l = J(
    (p, d) => o({ variant: "info", message: p, title: d }),
    [o]
  );
  return /* @__PURE__ */ k(Oi.Provider, { value: { toasts: n, addToast: o, removeToast: i, success: a, error: s, warning: c, info: l }, children: [
    e,
    /* @__PURE__ */ m(Sl, { position: t, toasts: n, onClose: i })
  ] });
}, wv = () => {
  const e = wt(Oi);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, Il = ie(
  ({
    language: e,
    logo: t,
    logoWide: n,
    splitLogo: r,
    onLoginSubmit: o,
    loading: i = !1,
    error: a,
    onForgotPassword: s,
    showRememberMe: c = !0,
    showForgotPassword: l = !0,
    footer: p,
    variant: d = "gradient",
    className: u,
    ...f
  }, v) => {
    const h = Ei(), { t: b } = e ? Kt({
      language: e,
      messagesByLanguage: h.messagesByLanguage
    }) : h, [E, w] = fe(""), [N, y] = fe(""), [x, I] = fe(!1), [P, L] = fe(!1), O = /* @__PURE__ */ k("form", { onSubmit: (R) => {
      R.preventDefault(), o == null || o(E, N);
    }, className: "space-y-6", children: [
      /* @__PURE__ */ k("div", { className: "text-center mb-8", children: [
        (t || n) && /* @__PURE__ */ k("div", { className: "flex justify-center mb-6", children: [
          /* @__PURE__ */ m("div", { className: "md:hidden", children: t }),
          /* @__PURE__ */ m("div", { className: "hidden md:block", children: n || t })
        ] }),
        /* @__PURE__ */ m("h1", { className: "text-2xl font-bold text-neutral-900", children: b("login.title") }),
        /* @__PURE__ */ m("p", { className: "mt-2 text-neutral-500", children: b("login.subtitle") })
      ] }),
      a && /* @__PURE__ */ m("div", { className: "p-3 rounded-lg bg-error/10 border border-error/20 text-error text-sm", children: a }),
      /* @__PURE__ */ k("div", { children: [
        /* @__PURE__ */ m("label", { htmlFor: "email", className: "block text-sm font-medium text-neutral-700 mb-1", children: b("login.emailLabel") }),
        /* @__PURE__ */ m(
          jt,
          {
            id: "email",
            type: "email",
            value: E,
            onChange: (R) => w(R.target.value),
            placeholder: b("login.emailPlaceholder"),
            leftIcon: /* @__PURE__ */ m(tc, { className: "w-5 h-5" }),
            required: !0,
            disabled: i
          }
        )
      ] }),
      /* @__PURE__ */ k("div", { children: [
        /* @__PURE__ */ m("label", { htmlFor: "password", className: "block text-sm font-medium text-neutral-700 mb-1", children: b("login.passwordLabel") }),
        /* @__PURE__ */ m(
          jt,
          {
            id: "password",
            type: x ? "text" : "password",
            value: N,
            onChange: (R) => y(R.target.value),
            placeholder: b("login.passwordPlaceholder"),
            leftIcon: /* @__PURE__ */ m(Zs, { className: "w-5 h-5" }),
            rightIcon: /* @__PURE__ */ m(
              "button",
              {
                type: "button",
                onClick: () => I(!x),
                className: "text-neutral-400 hover:text-neutral-600",
                children: x ? /* @__PURE__ */ m(Ls, { className: "w-5 h-5" }) : /* @__PURE__ */ m(Bs, { className: "w-5 h-5" })
              }
            ),
            required: !0,
            disabled: i
          }
        )
      ] }),
      /* @__PURE__ */ k("div", { className: "flex items-center justify-between", children: [
        c && /* @__PURE__ */ k("label", { className: "flex items-center gap-2 cursor-pointer", children: [
          /* @__PURE__ */ m(
            "input",
            {
              type: "checkbox",
              checked: P,
              onChange: (R) => L(R.target.checked),
              className: "w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary"
            }
          ),
          /* @__PURE__ */ m("span", { className: "text-sm text-neutral-600", children: b("login.rememberMe") })
        ] }),
        l && s && /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            onClick: s,
            className: "text-sm text-primary hover:text-primary-dark font-medium",
            children: b("login.forgotPassword")
          }
        )
      ] }),
      /* @__PURE__ */ m(Lt, { type: "submit", variant: "accent", fullWidth: !0, loading: i, className: "py-3", children: b("login.submit") }),
      p && /* @__PURE__ */ m("div", { className: "text-center", children: p })
    ] });
    return d === "split" ? /* @__PURE__ */ k("div", { ref: v, className: S("min-h-screen flex", u), ...f, children: [
      /* @__PURE__ */ k("div", { className: "hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sidebar via-primary to-accent p-12 flex-col justify-between", children: [
        /* @__PURE__ */ m("div", { children: (r || n || t) && /* @__PURE__ */ m("div", { className: "mb-8", children: r || n || t }) }),
        /* @__PURE__ */ k("div", { className: "text-white", children: [
          /* @__PURE__ */ m("h2", { className: "text-4xl font-bold mb-4", children: b("login.split.heroTitle") }),
          /* @__PURE__ */ m("p", { className: "text-white/80 text-lg", children: b("login.split.heroDescription") })
        ] }),
        /* @__PURE__ */ m("div", { className: "text-white/50 text-sm", children: b("login.split.copyright", { year: (/* @__PURE__ */ new Date()).getFullYear() }) })
      ] }),
      /* @__PURE__ */ m("div", { className: "w-full lg:w-1/2 flex items-center justify-center p-8 bg-white", children: /* @__PURE__ */ m("div", { className: "w-full max-w-md", children: O }) })
    ] }) : d === "centered" ? /* @__PURE__ */ m(
      "div",
      {
        ref: v,
        className: S(
          "min-h-screen flex items-center justify-center p-4 bg-neutral-100",
          u
        ),
        ...f,
        children: /* @__PURE__ */ m("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-xl p-8", children: O })
      }
    ) : /* @__PURE__ */ m(
      "div",
      {
        ref: v,
        className: S(
          "min-h-screen flex items-center justify-center p-4",
          "bg-gradient-to-br from-sidebar via-primary to-accent",
          u
        ),
        ...f,
        children: /* @__PURE__ */ m("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-2xl p-8", children: O })
      }
    );
  }
);
Il.displayName = "LoginPage";
function Oe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Cl = typeof Symbol == "function" && Symbol.observable || "@@observable", Ur = Cl, Hr = () => Math.random().toString(36).substring(7).split("").join("."), kl = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Hr()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Hr()}`
}, Yr = kl;
function Al(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function _l(e) {
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
  if (Tl(e))
    return "date";
  if (Rl(e))
    return "error";
  const n = Pl(e);
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
function Pl(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Rl(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Tl(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Le(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = _l(e)), t;
}
function Si(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(2) : `Expected the root reducer to be a function. Instead, received: '${Le(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(1) : `Expected the enhancer to be a function. Instead, received: '${Le(n)}'`);
    return n(Si)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function l() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((b, E) => {
      a.set(E, b);
    }));
  }
  function p() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function d(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(4) : `Expected the listener to be a function. Instead, received: '${Le(b)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let E = !0;
    l();
    const w = s++;
    return a.set(w, b), function() {
      if (E) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Oe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        E = !1, l(), a.delete(w), i = null;
      }
    };
  }
  function u(b) {
    if (!Al(b))
      throw new Error(process.env.NODE_ENV === "production" ? Oe(7) : `Actions must be plain objects. Instead, the actual type was: '${Le(b)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof b.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(17) : `Action "type" property must be a string. Instead, the actual type was: '${Le(b.type)}'. Value was: '${b.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = r(o, b);
    } finally {
      c = !1;
    }
    return (i = a).forEach((w) => {
      w();
    }), b;
  }
  function f(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(10) : `Expected the nextReducer to be a function. Instead, received: '${Le(b)}`);
    r = b, u({
      type: Yr.REPLACE
    });
  }
  function v() {
    const b = d;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(E) {
        if (typeof E != "object" || E === null)
          throw new Error(process.env.NODE_ENV === "production" ? Oe(11) : `Expected the observer to be an object. Instead, received: '${Le(E)}'`);
        function w() {
          const y = E;
          y.next && y.next(p());
        }
        return w(), {
          unsubscribe: b(w)
        };
      },
      [Ur]() {
        return this;
      }
    };
  }
  return u({
    type: Yr.INIT
  }), {
    dispatch: u,
    subscribe: d,
    getState: p,
    replaceReducer: f,
    [Ur]: v
  };
}
function Kr(e, t) {
  return function(...n) {
    return t(e.apply(this, n));
  };
}
function Xr(e, t) {
  if (typeof e == "function")
    return Kr(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Oe(16) : `bindActionCreators expected an object or a function, but instead received: '${Le(e)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = Kr(o, t));
  }
  return n;
}
function Ii(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function $l(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Oe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, s = e.map((c) => c(a));
    return i = Ii(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function Ml(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var un = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function Ll() {
  if (Jr) return un;
  Jr = 1;
  var e = ve;
  function t(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return un.useSyncExternalStoreWithSelector = function(c, l, p, d, u) {
    var f = o(null);
    if (f.current === null) {
      var v = { hasValue: !1, value: null };
      f.current = v;
    } else v = f.current;
    f = a(
      function() {
        function b(x) {
          if (!E) {
            if (E = !0, w = x, x = d(x), u !== void 0 && v.hasValue) {
              var I = v.value;
              if (u(I, x))
                return N = I;
            }
            return N = x;
          }
          if (I = N, n(w, x)) return I;
          var P = d(x);
          return u !== void 0 && u(I, P) ? (w = x, I) : (w = x, N = P);
        }
        var E = !1, w, N, y = p === void 0 ? null : p;
        return [
          function() {
            return b(l());
          },
          y === null ? void 0 : function() {
            return b(y());
          }
        ];
      },
      [l, p, d, u]
    );
    var h = r(c, f[0], f[1]);
    return i(
      function() {
        v.hasValue = !0, v.value = h;
      },
      [h]
    ), s(h), h;
  }, un;
}
var fn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function jl() {
  return Qr || (Qr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, l) {
      return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = ve, n = typeof Object.is == "function" ? Object.is : e, r = t.useSyncExternalStore, o = t.useRef, i = t.useEffect, a = t.useMemo, s = t.useDebugValue;
    fn.useSyncExternalStoreWithSelector = function(c, l, p, d, u) {
      var f = o(null);
      if (f.current === null) {
        var v = { hasValue: !1, value: null };
        f.current = v;
      } else v = f.current;
      f = a(
        function() {
          function b(x) {
            if (!E) {
              if (E = !0, w = x, x = d(x), u !== void 0 && v.hasValue) {
                var I = v.value;
                if (u(I, x))
                  return N = I;
              }
              return N = x;
            }
            if (I = N, n(w, x))
              return I;
            var P = d(x);
            return u !== void 0 && u(I, P) ? (w = x, I) : (w = x, N = P);
          }
          var E = !1, w, N, y = p === void 0 ? null : p;
          return [
            function() {
              return b(l());
            },
            y === null ? void 0 : function() {
              return b(y());
            }
          ];
        },
        [l, p, d, u]
      );
      var h = r(c, f[0], f[1]);
      return i(
        function() {
          v.hasValue = !0, v.value = h;
        },
        [h]
      ), s(h), h;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), fn;
}
process.env.NODE_ENV === "production" ? Ll() : jl();
var Ci = /* @__PURE__ */ re.version.startsWith("19"), Bl = /* @__PURE__ */ Symbol.for(
  Ci ? "react.transitional.element" : "react.element"
), Vl = /* @__PURE__ */ Symbol.for("react.portal"), ki = /* @__PURE__ */ Symbol.for("react.fragment"), Ai = /* @__PURE__ */ Symbol.for("react.strict_mode"), _i = /* @__PURE__ */ Symbol.for("react.profiler"), ar = /* @__PURE__ */ Symbol.for("react.consumer"), sr = /* @__PURE__ */ Symbol.for("react.context"), cr = /* @__PURE__ */ Symbol.for("react.forward_ref"), Pi = /* @__PURE__ */ Symbol.for("react.suspense"), Ri = /* @__PURE__ */ Symbol.for(
  "react.suspense_list"
), Xt = /* @__PURE__ */ Symbol.for("react.memo"), Ti = /* @__PURE__ */ Symbol.for("react.lazy"), Fl = /* @__PURE__ */ Symbol.for("react.offscreen"), zl = /* @__PURE__ */ Symbol.for(
  "react.client.reference"
), Gl = cr, Wl = Xt;
function ql(e) {
  return typeof e == "string" || typeof e == "function" || e === ki || e === _i || e === Ai || e === Pi || e === Ri || e === Fl || typeof e == "object" && e !== null && (e.$$typeof === Ti || e.$$typeof === Xt || e.$$typeof === sr || e.$$typeof === ar || e.$$typeof === cr || e.$$typeof === zl || e.getModuleId !== void 0);
}
function Fn(e) {
  if (typeof e == "object" && e !== null) {
    const { $$typeof: t } = e;
    switch (t) {
      case Bl:
        switch (e = e.type, e) {
          case ki:
          case _i:
          case Ai:
          case Pi:
          case Ri:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case sr:
              case cr:
              case Ti:
              case Xt:
                return e;
              case ar:
                return e;
              default:
                return t;
            }
        }
      case Vl:
        return t;
    }
  }
}
function Ul(e) {
  return Ci ? Fn(e) === ar : Fn(e) === sr;
}
function Hl(e) {
  return Fn(e) === Xt;
}
function lr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function mn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || lr(
      `The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`
    ));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Yl(e, t, n) {
  mn(e, "mapStateToProps"), mn(t, "mapDispatchToProps"), mn(n, "mergeProps");
}
function Kl(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, l, p, d, u;
  function f(w, N) {
    return c = w, l = N, p = e(c, l), d = t(r, l), u = n(p, d, l), s = !0, u;
  }
  function v() {
    return p = e(c, l), t.dependsOnOwnProps && (d = t(r, l)), u = n(p, d, l), u;
  }
  function h() {
    return e.dependsOnOwnProps && (p = e(c, l)), t.dependsOnOwnProps && (d = t(r, l)), u = n(p, d, l), u;
  }
  function b() {
    const w = e(c, l), N = !a(w, p);
    return p = w, N && (u = n(p, d, l)), u;
  }
  function E(w, N) {
    const y = !i(N, l), x = !o(
      w,
      c,
      N,
      l
    );
    return c = w, l = N, y && x ? v() : y ? h() : x ? b() : u;
  }
  return function(N, y) {
    return s ? E(N, y) : f(N, y);
  };
}
function Xl(e, {
  initMapStateToProps: t,
  initMapDispatchToProps: n,
  initMergeProps: r,
  ...o
}) {
  const i = t(e, o), a = n(e, o), s = r(e, o);
  return process.env.NODE_ENV !== "production" && Yl(i, a, s), Kl(i, a, s, e, o);
}
function Jl(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function Ql(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function $i(e, t, n) {
  Ql(e) || lr(
    `${n}() in ${t} must return a plain object. Instead received ${e}.`
  );
}
function zn(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Zr(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Mi(e, t) {
  return function(r, { displayName: o }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Zr(e);
      let l = i(s, c);
      return typeof l == "function" && (i.mapToProps = l, i.dependsOnOwnProps = Zr(l), l = i(s, c)), process.env.NODE_ENV !== "production" && $i(l, o, t), l;
    }, i;
  };
}
function dr(e, t) {
  return (n, r) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`
    );
  };
}
function Zl(e) {
  return e && typeof e == "object" ? zn(
    (t) => (
      // @ts-ignore
      Jl(e, t)
    )
  ) : e ? typeof e == "function" ? (
    // @ts-ignore
    Mi(e, "mapDispatchToProps")
  ) : dr(e, "mapDispatchToProps") : zn((t) => ({
    dispatch: t
  }));
}
function ed(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Mi(e, "mapStateToProps")
  ) : dr(e, "mapStateToProps") : zn(() => ({}));
}
function td(e, t, n) {
  return { ...n, ...e, ...t };
}
function nd(e) {
  return function(n, { displayName: r, areMergedPropsEqual: o }) {
    let i = !1, a;
    return function(c, l, p) {
      const d = e(c, l, p);
      return i ? o(d, a) || (a = d) : (i = !0, a = d, process.env.NODE_ENV !== "production" && $i(a, r, "mergeProps")), a;
    };
  };
}
function rd(e) {
  return e ? typeof e == "function" ? nd(e) : dr(e, "mergeProps") : () => td;
}
function od(e) {
  e();
}
function id() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      od(() => {
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
var eo = {
  notify() {
  },
  get: () => []
};
function Li(e, t) {
  let n, r = eo, o = 0, i = !1;
  function a(h) {
    p();
    const b = r.subscribe(h);
    let E = !1;
    return () => {
      E || (E = !0, b(), d());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    v.onStateChange && v.onStateChange();
  }
  function l() {
    return i;
  }
  function p() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = id());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = eo);
  }
  function u() {
    i || (i = !0, p());
  }
  function f() {
    i && (i = !1, d());
  }
  const v = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: u,
    tryUnsubscribe: f,
    getListeners: () => r
  };
  return v;
}
var ad = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", sd = /* @__PURE__ */ ad(), cd = () => typeof navigator < "u" && navigator.product === "ReactNative", ld = /* @__PURE__ */ cd(), dd = () => sd || ld ? re.useLayoutEffect : re.useEffect, Bt = /* @__PURE__ */ dd();
function to(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function gn(e, t) {
  if (to(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !to(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
var pd = {
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
}, ud = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, fd = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ji = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, md = {
  [Gl]: fd,
  [Wl]: ji
};
function no(e) {
  return Hl(e) ? ji : md[e.$$typeof] || pd;
}
var gd = Object.defineProperty, vd = Object.getOwnPropertyNames, ro = Object.getOwnPropertySymbols, hd = Object.getOwnPropertyDescriptor, bd = Object.getPrototypeOf, oo = Object.prototype;
function Gn(e, t) {
  if (typeof t != "string") {
    if (oo) {
      const i = bd(t);
      i && i !== oo && Gn(e, i);
    }
    let n = vd(t);
    ro && (n = n.concat(ro(t)));
    const r = no(e), o = no(t);
    for (let i = 0; i < n.length; ++i) {
      const a = n[i];
      if (!ud[a] && !(o && o[a]) && !(r && r[a])) {
        const s = hd(t, a);
        try {
          gd(e, a, s);
        } catch {
        }
      }
    }
  }
  return e;
}
var vn = /* @__PURE__ */ Symbol.for("react-redux-context"), hn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function xd() {
  if (!re.createContext) return {};
  const e = hn[vn] ?? (hn[vn] = /* @__PURE__ */ new Map());
  let t = e.get(re.createContext);
  return t || (t = re.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(re.createContext, t)), t;
}
var Bi = /* @__PURE__ */ xd(), yd = [null, null], wd = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Ed(e, t, n) {
  Bt(() => e(...t), n);
}
function Nd(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function Dd(e, t, n, r, o, i, a, s, c, l, p) {
  if (!e) return () => {
  };
  let d = !1, u = null;
  const f = () => {
    if (d || !s.current)
      return;
    const h = t.getState();
    let b, E;
    try {
      b = r(
        h,
        o.current
      );
    } catch (w) {
      E = w, u = w;
    }
    E || (u = null), b === i.current ? a.current || l() : (i.current = b, c.current = b, a.current = !0, p());
  };
  return n.onStateChange = f, n.trySubscribe(), f(), () => {
    if (d = !0, n.tryUnsubscribe(), n.onStateChange = null, u)
      throw u;
  };
}
function Od(e, t) {
  return e === t;
}
var io = !1;
function Sd(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = Od,
  areOwnPropsEqual: i = gn,
  areStatePropsEqual: a = gn,
  areMergedPropsEqual: s = gn,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = Bi
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !io && (io = !0, lr(
    'The `pure` option has been removed. `connect` is now always a "pure/memoized" component'
  ));
  const p = l, d = ed(e), u = Zl(t), f = rd(n), v = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !/* @__PURE__ */ ql(b))
      throw new Error(
        `You must pass a component to the function returned by connect. Instead received ${wd(
          b
        )}`
      );
    const E = b.displayName || b.name || "Component", w = `Connect(${E})`, N = {
      shouldHandleStateChanges: v,
      displayName: w,
      wrappedComponentName: E,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: d,
      initMapDispatchToProps: u,
      initMergeProps: f,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function y(P) {
      const [L, j, O] = re.useMemo(() => {
        const { reactReduxForwardedRef: A, ...pe } = P;
        return [P.context, A, pe];
      }, [P]), R = re.useMemo(() => {
        let A = p;
        if (L != null && L.Consumer && process.env.NODE_ENV !== "production") {
          if (!/* @__PURE__ */ Ul(
            // @ts-ignore
            /* @__PURE__ */ re.createElement(L.Consumer, null)
          ))
            throw new Error(
              "You must pass a valid React context consumer as `props.context`"
            );
          A = L;
        }
        return A;
      }, [L, p]), B = re.useContext(R), G = !!P.store && !!P.store.getState && !!P.store.dispatch, V = !!B && !!B.store;
      if (process.env.NODE_ENV !== "production" && !G && !V)
        throw new Error(
          `Could not find "store" in the context of "${w}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${w} in connect options.`
        );
      const X = G ? P.store : B.store, Q = V ? B.getServerState : X.getState, te = re.useMemo(() => Xl(X.dispatch, N), [X]), [de, oe] = re.useMemo(() => {
        if (!v) return yd;
        const A = Li(
          X,
          G ? void 0 : B.subscription
        ), pe = A.notifyNestedSubs.bind(A);
        return [A, pe];
      }, [X, G, B]), C = re.useMemo(() => G ? B : {
        ...B,
        subscription: de
      }, [G, B, de]), $ = re.useRef(void 0), H = re.useRef(O), W = re.useRef(void 0), F = re.useRef(!1), Y = re.useRef(!1), K = re.useRef(
        void 0
      );
      Bt(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const q = re.useMemo(() => () => W.current && O === H.current ? W.current : te(X.getState(), O), [X, O]), _ = re.useMemo(() => (pe) => de ? Dd(
        v,
        X,
        de,
        // @ts-ignore
        te,
        H,
        $,
        F,
        Y,
        W,
        oe,
        pe
      ) : () => {
      }, [de]);
      Ed(Nd, [
        H,
        $,
        F,
        O,
        W,
        oe
      ]);
      let D;
      try {
        D = re.useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          _,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          q,
          Q ? () => te(Q(), O) : q
        );
      } catch (A) {
        throw K.current && (A.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), A;
      }
      Bt(() => {
        K.current = void 0, W.current = void 0, $.current = D;
      });
      const T = re.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ re.createElement(
          b,
          {
            ...D,
            ref: j
          }
        )
      ), [j, b, D]);
      return re.useMemo(() => v ? /* @__PURE__ */ re.createElement(R.Provider, { value: C }, T) : T, [R, T, C]);
    }
    const I = re.memo(y);
    if (I.WrappedComponent = b, I.displayName = y.displayName = w, c) {
      const L = re.forwardRef(
        function(O, R) {
          return /* @__PURE__ */ re.createElement(I, { ...O, reactReduxForwardedRef: R });
        }
      );
      return L.displayName = w, L.WrappedComponent = b, /* @__PURE__ */ Gn(L, b);
    }
    return /* @__PURE__ */ Gn(I, b);
  };
}
var Vi = Sd;
function Id(e) {
  const { children: t, context: n, serverState: r, store: o } = e, i = re.useMemo(() => {
    const c = Li(o), l = {
      store: o,
      subscription: c,
      getServerState: r ? () => r : void 0
    };
    if (process.env.NODE_ENV === "production")
      return l;
    {
      const { identityFunctionCheck: p = "once", stabilityCheck: d = "once" } = e;
      return /* @__PURE__ */ Object.assign(l, {
        stabilityCheck: d,
        identityFunctionCheck: p
      });
    }
  }, [o, r]), a = re.useMemo(() => o.getState(), [o]);
  Bt(() => {
    const { subscription: c } = i;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [i, a]);
  const s = n || Bi;
  return /* @__PURE__ */ re.createElement(s.Provider, { value: i }, t);
}
var Cd = Id, kd = process.env.NODE_ENV === "production", bn = "Invariant failed";
function ao(e, t) {
  if (kd)
    throw new Error(bn);
  var n = typeof t == "function" ? t() : t, r = n ? "".concat(bn, ": ").concat(n) : bn;
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
}, pr = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, so = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, Ad = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, xn = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, ur = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? xn : r, i = t.border, a = i === void 0 ? xn : i, s = t.padding, c = s === void 0 ? xn : s, l = Pe(pr(n, o)), p = Pe(so(n, a)), d = Pe(so(p, c));
  return {
    marginBox: l,
    borderBox: Pe(n),
    paddingBox: p,
    contentBox: d,
    margin: o,
    border: a,
    padding: c
  };
}, ke = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? ao(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : ao()), o;
}, _d = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Vt = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = Ad(r, n);
  return ur({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Ft = function(t, n) {
  return n === void 0 && (n = _d()), Vt(t, n);
}, Fi = function(t, n) {
  var r = {
    top: ke(n.marginTop),
    right: ke(n.marginRight),
    bottom: ke(n.marginBottom),
    left: ke(n.marginLeft)
  }, o = {
    top: ke(n.paddingTop),
    right: ke(n.paddingRight),
    bottom: ke(n.paddingBottom),
    left: ke(n.paddingLeft)
  }, i = {
    top: ke(n.borderTopWidth),
    right: ke(n.borderRightWidth),
    bottom: ke(n.borderBottomWidth),
    left: ke(n.borderLeftWidth)
  };
  return ur({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, zi = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Fi(n, r);
}, pt = function(t) {
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
function zt() {
  return zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, zt.apply(null, arguments);
}
const Pd = process.env.NODE_ENV === "production", Rd = /[ \t]{2,}/g, Td = /^[ \t]*/gm, co = (e) => e.replace(Rd, " ").replace(Td, "").trim(), $d = (e) => co(`
  %c@hello-pangea/dnd

  %c${co(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Md = (e) => [$d(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Ld = "__@hello-pangea/dnd-disable-dev-warnings";
function Gi(e, t) {
  Pd || typeof window < "u" && window[Ld] || console[e](...Md(t));
}
const me = Gi.bind(null, "warn"), Wn = Gi.bind(null, "error");
function je() {
}
function jd(e, t) {
  return {
    ...e,
    ...t
  };
}
function Ae(e, t, n) {
  const r = t.map((o) => {
    const i = jd(n, o.options);
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
const Bd = process.env.NODE_ENV === "production", lo = "Invariant failed";
class ut extends Error {
}
ut.prototype.toString = function() {
  return this.message;
};
function g(e, t) {
  throw Bd ? new ut(lo) : new ut(`${lo}: ${t || ""}`);
}
class Vd extends ve.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = je, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && me(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof ut && (n.preventDefault(), process.env.NODE_ENV !== "production" && Wn(o.message));
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
    if (t instanceof ut) {
      process.env.NODE_ENV !== "production" && Wn(t.message), this.setState({});
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
const Fd = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Gt = (e) => e + 1, zd = (e) => `
  You have lifted an item in position ${Gt(e.source.index)}
`, Wi = (e, t) => {
  const n = e.droppableId === t.droppableId, r = Gt(e.index), o = Gt(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, qi = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, Gd = (e) => {
  const t = e.destination;
  if (t)
    return Wi(e.source, t);
  const n = e.combine;
  return n ? qi(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, po = (e) => `
  The item has returned to its starting position
  of ${Gt(e.index)}
`, Wd = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${po(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Wi(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${qi(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${po(e.source)}
  `;
}, $t = {
  dragHandleUsageInstructions: Fd,
  onDragStart: zd,
  onDragUpdate: Gd,
  onDragEnd: Wd
};
function qd(e, t) {
  return !!(e === t || Number.isNaN(e) && Number.isNaN(t));
}
function Ui(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (!qd(e[n], t[n]))
      return !1;
  return !0;
}
function ne(e, t) {
  const n = fe(() => ({
    inputs: t,
    result: e()
  }))[0], r = Z(!0), o = Z(n), a = r.current || !!(t && o.current.inputs && Ui(t, o.current.inputs)) ? o.current : {
    inputs: t,
    result: e()
  };
  return be(() => {
    r.current = !1, o.current = a;
  }, [a]), a.result;
}
function z(e, t) {
  return ne(() => e, t);
}
const we = {
  x: 0,
  y: 0
}, Ne = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Se = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Be = (e, t) => e.x === t.x && e.y === t.y, nt = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Ue = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, ft = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), uo = (e, t) => Math.min(...t.map((n) => ft(e, n))), Hi = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Ud = (e, t) => {
  const n = Pe({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const Et = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), fo = (e) => [{
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
}], Hd = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Yd = (e, t) => t ? Et(e, t.scroll.diff.displacement) : e, Kd = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, Xd = (e, t) => t && t.shouldClipSubject ? Ud(t.pageMarginBox, e) : Pe(e);
var Je = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = Yd(e.marginBox, r), i = Kd(o, n, t), a = Xd(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, fr = (e, t) => {
  e.frame || (process.env.NODE_ENV, g());
  const n = e.frame, r = Se(t, n.scroll.initial), o = nt(r), i = {
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
function ye(e, t = Ui) {
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
const Yi = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Ki = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Jt = ye((e) => Object.values(e)), Jd = ye((e) => Object.values(e));
var He = ye((e, t) => Jd(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function mr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Qt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Zt = ye((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), Qd = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !mr(o))
    return null;
  function a(f) {
    const v = {
      type: "COMBINE",
      combine: {
        draggableId: f,
        droppableId: n.descriptor.id
      }
    };
    return {
      ...o,
      at: v
    };
  }
  const s = o.displaced.all, c = s.length ? s[0] : null;
  if (e)
    return c ? a(c) : null;
  const l = Zt(t, r);
  if (!c) {
    if (!l.length)
      return null;
    const f = l[l.length - 1];
    return a(f.descriptor.id);
  }
  const p = l.findIndex((f) => f.descriptor.id === c);
  p === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Could not find displaced item in set") : g());
  const d = p - 1;
  if (d < 0)
    return null;
  const u = l[d];
  return a(u.descriptor.id);
}, rt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Xi = {
  point: we,
  value: 0
}, mt = {
  invisible: {},
  visible: {},
  all: []
}, Zd = {
  displaced: mt,
  displacedBy: Xi,
  at: null
};
var _e = (e, t) => (n) => e <= n && n <= t, Ji = (e) => {
  const t = _e(e.top, e.bottom), n = _e(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), a = n(r.left) || n(r.right);
    if (i && a)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, l = r.left < e.left && r.right > e.right;
    return c && l ? !0 : c && a || l && i;
  };
}, ep = (e) => {
  const t = _e(e.top, e.bottom), n = _e(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const gr = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Qi = {
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
var tp = (e) => (t) => {
  const n = _e(t.top, t.bottom), r = _e(t.left, t.right);
  return (o) => e === gr ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const np = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : we;
  return Et(e, n);
}, rp = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, op = (e, t, n) => n(t)(e), vr = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? np(e, t) : e;
  return rp(i, t, o) && op(i, n, o);
}, ip = (e) => vr({
  ...e,
  isVisibleThroughFrameFn: Ji
}), Zi = (e) => vr({
  ...e,
  isVisibleThroughFrameFn: ep
}), ap = (e) => vr({
  ...e,
  isVisibleThroughFrameFn: tp(e.destination.axis)
}), sp = (e, t, n) => {
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
function cp(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Pe(pr(n, r));
}
function gt({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, c) {
    const l = cp(c, n), p = c.descriptor.id;
    if (s.all.push(p), !ip({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const u = sp(p, i, o), f = {
      draggableId: p,
      shouldAnimate: u
    };
    return s.visible[p] = f, s;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function lp(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function mo({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = lp(e, {
    inHomeList: t
  });
  return {
    displaced: mt,
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
function Wt({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const c = rt(e, n);
  if (a == null)
    return mo({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const l = t.find((v) => v.descriptor.index === a);
  if (!l)
    return mo({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const p = Zt(e, t), d = t.indexOf(l), u = p.slice(d);
  return {
    displaced: gt({
      afterDragging: u,
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
function Fe(e, t) {
  return !!t.effected[e];
}
var dp = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = r.draggableId, s = n[i].descriptor.index;
  return Fe(i, o) ? e ? s : s - 1 : e ? s + 1 : s;
}, pp = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, a = n[0].descriptor.index, s = n[n.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, up = ({
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
    const d = pp({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: i
    });
    return d == null ? null : Wt({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: d
    });
  }
  const p = dp({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: c
  });
  return p == null ? null : Wt({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: p
  });
}, fp = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Fe(n, t) ? o ? we : nt(r.point) : o ? r.point : we;
}, mp = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = Qt(t);
  r || (process.env.NODE_ENV, g());
  const o = r.draggableId, i = n[o].page.borderBox.center, a = fp({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Ne(i, a);
};
const ea = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, gp = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, hr = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, go = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.end] + ea(e, n), hr(e, t.marginBox, n)), vo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.start] - gp(e, n), hr(e, t.marginBox, n)), vp = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => Ue(e.line, t.contentBox[e.start] + ea(e, n), hr(e, t.contentBox, n));
var hp = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = He(r.descriptor.id, n), a = t.page, s = r.axis;
  if (!i.length)
    return vp({
      axis: s,
      moveInto: r.page,
      isMoving: a
    });
  const {
    displaced: c,
    displacedBy: l
  } = e, p = c.all[0];
  if (p) {
    const u = n[p];
    if (Fe(p, o))
      return vo({
        axis: s,
        moveRelativeTo: u.page,
        isMoving: a
      });
    const f = Vt(u.page, l.point);
    return vo({
      axis: s,
      moveRelativeTo: f,
      isMoving: a
    });
  }
  const d = i[i.length - 1];
  if (d.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Fe(d.descriptor.id, o)) {
    const u = Vt(d.page, nt(o.displacedBy.point));
    return go({
      axis: s,
      moveRelativeTo: u,
      isMoving: a
    });
  }
  return go({
    axis: s,
    moveRelativeTo: d.page,
    isMoving: a
  });
}, qn = (e, t) => {
  const n = e.frame;
  return n ? Ne(t, n.scroll.diff.displacement) : t;
};
const bp = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !n || !a ? i : a.type === "REORDER" ? hp({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : mp({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var en = (e) => {
  const t = bp(e), n = e.droppable;
  return n ? qn(n, t) : t;
}, ta = (e, t) => {
  const n = Se(t, e.scroll.initial), r = nt(n);
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
function ho(e, t) {
  return e.map((n) => t[n]);
}
function xp(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var yp = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = ta(t, Ne(t.scroll.current, o)), a = n.frame ? fr(n, Ne(n.frame.scroll.current, o)) : n, s = e.displaced, c = gt({
    afterDragging: ho(s.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), l = gt({
    afterDragging: ho(s.all, r),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), p = {}, d = {}, u = [s, c, l];
  return s.all.forEach((v) => {
    const h = xp(v, u);
    if (h) {
      d[v] = h;
      return;
    }
    p[v] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: p,
      visible: d
    }
  };
}, wp = (e, t) => Ne(e.scroll.diff.displacement, t), br = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = wp(n, e), o = Se(r, t.page.borderBox.center);
  return Ne(t.client.borderBox.center, o);
}, na = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = Se(n, e.page.borderBox.center), c = {
    target: Et(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? ap(c) : Zi(c);
}, Ep = ({
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
  const l = He(n.descriptor.id, r), p = rt(t, n), d = Qd({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || up({
    isMovingForward: e,
    isInHomeList: p,
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
  const u = en({
    impact: d,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (na({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: u,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: br({
        pageBorderBoxCenter: u,
        draggable: t,
        viewport: i
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const v = Se(u, a), h = yp({
    impact: d,
    viewport: i,
    destination: n,
    draggables: r,
    maxScrollChange: v
  });
  return {
    clientSelection: s,
    impact: h,
    scrollJumpRequest: v
  };
};
const De = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get clipped area from droppable") : g()), t;
};
var Np = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const a = n.axis, s = _e(i[a.start], i[a.end]), c = Jt(r).filter((p) => p !== n).filter((p) => p.isEnabled).filter((p) => !!p.subject.active).filter((p) => Ji(o.frame)(De(p))).filter((p) => {
    const d = De(p);
    return e ? i[a.crossAxisEnd] < d[a.crossAxisEnd] : d[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((p) => {
    const d = De(p), u = _e(d[a.start], d[a.end]);
    return s(d[a.start]) || s(d[a.end]) || u(i[a.start]) || u(i[a.end]);
  }).sort((p, d) => {
    const u = De(p)[a.crossAxisStart], f = De(d)[a.crossAxisStart];
    return e ? u - f : f - u;
  }).filter((p, d, u) => De(p)[a.crossAxisStart] === De(u[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const l = c.filter((p) => _e(De(p)[a.start], De(p)[a.end])(t[a.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((p, d) => De(p)[a.start] - De(d)[a.start])[0] : c.sort((p, d) => {
    const u = uo(t, fo(De(p))), f = uo(t, fo(De(d)));
    return u !== f ? u - f : De(p)[a.start] - De(d)[a.start];
  })[0];
};
const bo = (e, t) => {
  const n = e.page.borderBox.center;
  return Fe(e.descriptor.id, t) ? Se(n, t.displacedBy.point) : n;
}, Dp = (e, t) => {
  const n = e.page.borderBox;
  return Fe(e.descriptor.id, t) ? Et(n, nt(t.displacedBy.point)) : n;
};
var Op = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((a) => Zi({
  target: Dp(a, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = ft(e, qn(n, bo(a, o))), l = ft(e, qn(n, bo(s, o)));
  return c < l ? -1 : l < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Nt = ye(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: Ue(t.line, r)
  };
});
const Sp = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return Ue(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = He(e.descriptor.id, n).reduce((l, p) => l + p.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : Ue(r.line, c);
}, ra = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), oa = (e, t, n) => {
  const r = e.frame;
  rt(t, e) && (process.env.NODE_ENV !== "production" ? g(!1, "Should not add placeholder space to home list") : g()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot add placeholder size to a subject when it already has one") : g());
  const o = Nt(e.axis, t.displaceBy).point, i = Sp(e, o, n), a = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const p = Je({
      page: e.subject.page,
      withPlaceholder: a,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: p
    };
  }
  const s = i ? Ne(r.scroll.max, i) : r.scroll.max, c = ra(r, s), l = Je({
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
}, Ip = (e) => {
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
  const o = ra(n, r), i = Je({
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
var Cp = ({
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
      displaced: mt,
      displacedBy: Xi,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, u = en({
      impact: d,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), f = rt(r, i) ? i : oa(i, r, o);
    return na({
      draggable: r,
      destination: f,
      newPageBorderBoxCenter: u,
      viewport: a.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? d : null;
  }
  const c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], l = (() => {
    const d = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || c ? d : d + 1;
  })(), p = Nt(i.axis, r.displaceBy);
  return Wt({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: a,
    displacedBy: p,
    last: mt,
    index: l
  });
}, kp = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = Np({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const l = He(c.descriptor.id, o), p = Op({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: l,
    afterCritical: s
  }), d = Cp({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: n,
    draggables: o,
    moveRelativeTo: p,
    insideDestination: l,
    viewport: a,
    afterCritical: s
  });
  if (!d)
    return null;
  const u = en({
    impact: d,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: br({
      pageBorderBoxCenter: u,
      draggable: n,
      viewport: a
    }),
    impact: d,
    scrollJumpRequest: null
  };
}, Ie = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Ap = (e, t) => {
  const n = Ie(e);
  return n ? t[n] : null;
};
var _p = ({
  state: e,
  type: t
}) => {
  const n = Ap(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], p = e.current.page.borderBoxCenter, {
    draggables: d,
    droppables: u
  } = e.dimensions;
  return s ? Ep({
    isMovingForward: c,
    previousPageBorderBoxCenter: p,
    draggable: l,
    destination: i,
    draggables: d,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : kp({
    isMovingForward: c,
    previousPageBorderBoxCenter: p,
    draggable: l,
    isOver: i,
    draggables: d,
    droppables: u,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function We(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function ia(e) {
  const t = _e(e.top, e.bottom), n = _e(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function Pp(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Rp({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const a = i.axis, s = Ue(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: ft(r, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function Tp({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = Jt(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !Pp(e, i))
      return !1;
    if (ia(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], l = e[a.crossAxisEnd], p = _e(i[a.crossAxisStart], i[a.crossAxisEnd]), d = p(c), u = p(l);
    return !d && !u ? !0 : d ? c < s : l > s;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : Rp({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const aa = (e, t) => Pe(Et(e, t));
var $p = (e, t) => {
  const n = e.frame;
  return n ? aa(t, n.scroll.diff.value) : t;
};
function sa({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Mp({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Lp = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = n.axis, c = Nt(n.axis, t.displaceBy), l = c.value, p = e[s.start], d = e[s.end], f = Zt(t, r).find((h) => {
    const b = h.descriptor.id, E = h.page.borderBox.center[s.line], w = Fe(b, a), N = sa({
      displaced: o,
      id: b
    });
    return w ? N ? d <= E : p < E - l : N ? d <= E + l : p < E;
  }) || null, v = Mp({
    draggable: t,
    closest: f,
    inHomeList: rt(t, n)
  });
  return Wt({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: c,
    index: v
  });
};
const jp = 4;
var Bp = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const a = r.axis, s = Nt(r.axis, e.displaceBy), c = s.value, l = t[a.start], p = t[a.end], u = Zt(e, o).find((v) => {
    const h = v.descriptor.id, b = v.page.borderBox, w = b[a.size] / jp, N = Fe(h, i), y = sa({
      displaced: n.displaced,
      id: h
    });
    return N ? y ? p > b[a.start] + w && p < b[a.end] - w : l > b[a.start] - c + w && l < b[a.end] - c - w : y ? p > b[a.start] + c + w && p < b[a.end] + c - w : l > b[a.start] + w && l < b[a.end] - w;
  });
  return u ? {
    displacedBy: s,
    displaced: n.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: u.descriptor.id,
        droppableId: r.descriptor.id
      }
    }
  } : null;
}, ca = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = aa(t.page.borderBox, e), c = Tp({
    pageBorderBox: s,
    draggable: t,
    droppables: r
  });
  if (!c)
    return Zd;
  const l = r[c], p = He(l.descriptor.id, n), d = $p(l, s);
  return Bp({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: p,
    afterCritical: a
  }) || Lp({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    destination: l,
    insideDestination: p,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, xr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Vp = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = Ie(e), o = Ie(t);
  if (!r || r === o)
    return n;
  const i = n[r];
  if (!i.subject.withPlaceholder)
    return n;
  const a = Ip(i);
  return xr(n, a);
};
var Fp = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = Vp({
    previousImpact: r,
    impact: o,
    droppables: n
  }), a = Ie(o);
  if (!a)
    return i;
  const s = n[a];
  if (rt(e, s) || s.subject.withPlaceholder)
    return i;
  const c = oa(s, e, t);
  return xr(i, c);
}, lt = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = r || e.viewport, s = n || e.dimensions, c = t || e.current.client.selection, l = Se(c, e.initial.client.selection), p = {
    offset: l,
    selection: c,
    borderBoxCenter: Ne(e.initial.client.borderBoxCenter, l)
  }, d = {
    selection: Ne(p.selection, a.scroll.current),
    borderBoxCenter: Ne(p.borderBoxCenter, a.scroll.current),
    offset: Ne(p.offset, a.scroll.diff.value)
  }, u = {
    client: p,
    page: d
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: s,
      viewport: a,
      current: u
    };
  const f = s.draggables[e.critical.draggable.id], v = o || ca({
    pageOffset: d.offset,
    draggable: f,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), h = Fp({
    draggable: f,
    impact: v,
    previousImpact: e.impact,
    draggables: s.draggables,
    droppables: s.droppables
  });
  return {
    ...e,
    current: u,
    dimensions: {
      draggables: s.draggables,
      droppables: h
    },
    impact: v,
    viewport: a,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function zp(e, t) {
  return e.map((n) => t[n]);
}
var la = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = zp(i.all, n), s = gt({
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
}, da = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const a = en({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return br({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, pa = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, g());
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, c = a[e.critical.draggable.id], l = Ie(r);
  l || (process.env.NODE_ENV !== "production" ? g(!1, "Must be over a destination in SNAP movement mode") : g());
  const p = s[l], d = la({
    impact: r,
    viewport: o,
    destination: p,
    draggables: a
  }), u = da({
    impact: d,
    draggable: c,
    droppable: p,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return lt({
    impact: d,
    clientSelection: u,
    state: e,
    dimensions: i,
    viewport: o
  });
}, Gp = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), ua = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = Nt(t.axis, e.displaceBy), i = He(t.descriptor.id, n), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Expected draggable to be inside home list") : g());
  const s = i.slice(a + 1), c = s.reduce((u, f) => (u[f.descriptor.id] = !0, u), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: gt({
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
        destination: Gp(e.descriptor)
      }
    },
    afterCritical: l
  };
}, Wp = (e, t) => ({
  draggables: e.draggables,
  droppables: xr(e.droppables, t)
});
const Dt = (e) => {
  process.env.NODE_ENV;
}, Ot = (e) => {
  process.env.NODE_ENV;
};
var qp = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = Vt(e.client, t), o = Ft(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, Up = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Expected Droppable to have a frame") : g()), t;
}, Hp = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = Up(a).scroll.diff.value, l = Ne(r, c);
    return qp({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, Yp = ({
  state: e,
  published: t
}) => {
  Dt();
  const n = t.modified.map((E) => {
    const w = e.dimensions.droppables[E.droppableId];
    return fr(w, E.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Yi(n)
  }, o = Ki(Hp({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((E) => {
    delete i[E];
  });
  const a = {
    droppables: r,
    draggables: i
  }, s = Ie(e.impact), c = s ? a.droppables[s] : null, l = a.draggables[e.critical.draggable.id], p = a.droppables[e.critical.droppable.id], {
    impact: d,
    afterCritical: u
  } = ua({
    draggable: l,
    home: p,
    draggables: i,
    viewport: e.viewport
  }), f = c && c.isCombineEnabled ? e.impact : d, v = ca({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: f,
    viewport: e.viewport,
    afterCritical: u
  });
  Ot();
  const h = {
    ...e,
    phase: "DRAGGING",
    impact: v,
    onLiftImpact: d,
    dimensions: a,
    afterCritical: u,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? h : {
    ...h,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const Un = (e) => e.movementMode === "SNAP", yn = (e, t, n) => {
  const r = Wp(e.dimensions, t);
  return !Un(e) || n ? lt({
    state: e,
    dimensions: r
  }) : pa({
    state: e,
    dimensions: r
  });
};
function wn(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const xo = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Kp = (e = xo, t) => {
  if (t.type === "FLUSH")
    return {
      ...xo,
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
      offset: we
    }, p = {
      client: l,
      page: {
        selection: Ne(l.selection, o.scroll.initial),
        borderBoxCenter: Ne(l.selection, o.scroll.initial),
        offset: Ne(l.selection, o.scroll.diff.value)
      }
    }, d = Jt(i.droppables).every((h) => !h.isFixedOnPage), {
      impact: u,
      afterCritical: f
    } = ua({
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
      initial: p,
      current: p,
      isWindowScrollAllowed: d,
      impact: u,
      afterCritical: f,
      onLiftImpact: u,
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : g()), Yp({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} not permitted in phase ${e.phase}`) : g());
    const {
      client: n
    } = t.payload;
    return Be(n, e.current.client.selection) ? e : lt({
      state: e,
      clientSelection: n,
      impact: Un(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return wn(e);
    We(e) || (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} not permitted in phase ${e.phase}`) : g());
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = fr(o, r);
    return yn(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Attempting to move in an unsupported phase ${e.phase}`) : g());
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
    return yn(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Attempting to move in an unsupported phase ${e.phase}`) : g());
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
    return yn(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot move by window in phase ${e.phase}`) : g()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? g(!1, "Window scrolling is currently not supported for fixed lists") : g());
    const n = t.payload.newScroll;
    if (Be(e.viewport.scroll.current, n))
      return wn(e);
    const r = ta(e.viewport, n);
    return Un(e) ? pa({
      state: e,
      viewport: r
    }) : lt({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!We(e))
      return e;
    const n = t.payload.maxScroll;
    if (Be(n, e.viewport.scroll.max))
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
    const n = _p({
      state: e,
      type: t.type
    });
    return n ? lt({
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
function le(e, t) {
  return e instanceof Object && "type" in e && e.type === t;
}
const Xp = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Jp = (e) => ({
  type: "LIFT",
  payload: e
}), Qp = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Zp = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), eu = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), tu = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), nu = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), ru = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), fa = (e) => ({
  type: "MOVE",
  payload: e
}), ou = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), iu = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), au = () => ({
  type: "MOVE_UP",
  payload: null
}), su = () => ({
  type: "MOVE_DOWN",
  payload: null
}), cu = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), lu = () => ({
  type: "MOVE_LEFT",
  payload: null
}), yr = () => ({
  type: "FLUSH",
  payload: null
}), du = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), wr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), ma = (e) => ({
  type: "DROP",
  payload: e
}), pu = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ga = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function uu(e) {
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
  process.env.NODE_ENV !== "production" && me(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${r}
  `);
}
function fu(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = He(e.droppable.id, t.draggables);
    uu(n);
  }
}
var mu = (e) => ({
  getState: t,
  dispatch: n
}) => (r) => (o) => {
  if (!le(o, "LIFT")) {
    r(o);
    return;
  }
  const {
    id: i,
    clientSelection: a,
    movementMode: s
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && n(wr({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Unexpected phase to start a drag") : g()), n(yr()), n(Xp({
    draggableId: i,
    movementMode: s
  }));
  const p = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: s === "SNAP"
    }
  }, {
    critical: d,
    dimensions: u,
    viewport: f
  } = e.startPublishing(p);
  fu(d, u), n(Qp({
    critical: d,
    dimensions: u,
    clientSelection: a,
    movementMode: s,
    viewport: f
  }));
}, gu = (e) => () => (t) => (n) => {
  le(n, "INITIAL_PUBLISH") && e.dragging(), le(n, "DROP_ANIMATE") && e.dropping(n.payload.completed.result.reason), (le(n, "FLUSH") || le(n, "DROP_COMPLETE")) && e.resting(), t(n);
};
const Er = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, vt = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, va = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ge = `${va.outOfTheWay}s ${Er.outOfTheWay}`, dt = {
  fluid: `opacity ${Ge}`,
  snap: `transform ${Ge}, opacity ${Ge}`,
  drop: (e) => {
    const t = `${e}s ${Er.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ge}`,
  placeholder: `height ${Ge}, width ${Ge}, margin ${Ge}`
}, yo = (e) => Be(e, we) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Hn = {
  moveTo: yo,
  drop: (e, t) => {
    const n = yo(e);
    if (n)
      return t ? `${n} scale(${vt.scale.drop})` : n;
  }
}, {
  minDropTime: Yn,
  maxDropTime: ha
} = va, vu = ha - Yn, wo = 1500, hu = 0.6;
var bu = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = ft(e, t);
  if (r <= 0)
    return Yn;
  if (r >= wo)
    return ha;
  const o = r / wo, i = Yn + vu * o, a = n === "CANCEL" ? i * hu : i;
  return Number(a.toFixed(2));
}, xu = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = n, s = Ie(e), c = s ? a[s] : null, l = a[t.descriptor.droppableId], p = da({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || l,
    viewport: r
  });
  return Se(p, t.client.borderBox.center);
}, yu = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: la({
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
    displaced: mt
  },
  didDropInsideDroppable: !0
};
const wu = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (!le(r, "DROP")) {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(pu({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? g(!1, "A DROP action occurred while DROP_PENDING and still waiting") : g()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot drop in phase: ${o.phase}`) : g());
  const s = o.critical, c = o.dimensions, l = c.draggables[o.critical.draggable.id], {
    impact: p,
    didDropInsideDroppable: d
  } = yu({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), u = d ? mr(p) : null, f = d ? Qt(p) : null, v = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, h = {
    draggableId: l.descriptor.id,
    type: l.descriptor.type,
    source: v,
    reason: i,
    mode: o.movementMode,
    destination: u,
    combine: f
  }, b = xu({
    impact: p,
    draggable: l,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), E = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: h,
    impact: p
  };
  if (!(!Be(o.current.client.offset, b) || !!h.combine)) {
    t(wr({
      completed: E
    }));
    return;
  }
  const N = bu({
    current: o.current.client.offset,
    destination: b,
    reason: i
  });
  t(du({
    newHomeClientOffset: b,
    dropDuration: N,
    completed: E
  }));
};
var ba = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Eu(e) {
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
function Nu({
  onWindowScroll: e
}) {
  function t() {
    e(ba());
  }
  const n = pt(t), r = Eu(n);
  let o = je;
  function i() {
    return o !== je;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start scroll listener when already active") : g()), o = Ae(window, [r]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop scroll listener when not active") : g()), n.cancel(), o(), o = je;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const Du = (e) => le(e, "DROP_COMPLETE") || le(e, "DROP_ANIMATE") || le(e, "FLUSH"), Ou = (e) => {
  const t = Nu({
    onWindowScroll: (n) => {
      e.dispatch(ou({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && le(r, "INITIAL_PUBLISH") && t.start(), t.isActive() && Du(r) && t.stop(), n(r);
  };
};
var Su = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && me("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && me(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(r);
  };
  return o.wasCalled = () => t, o;
}, Iu = () => {
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
const Cu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, ku = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Au = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, it = (e, t) => {
  Dt(), t(), Ot();
}, _t = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function En(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = Su(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var _u = (e, t) => {
  const n = Iu();
  let r = null;
  const o = (d, u) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : g()), it("onBeforeCapture", () => {
      const f = e().onBeforeCapture;
      f && f({
        draggableId: d,
        mode: u
      });
    });
  }, i = (d, u) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g()), it("onBeforeDragStart", () => {
      const f = e().onBeforeDragStart;
      f && f(_t(d, u));
    });
  }, a = (d, u) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g());
    const f = _t(d, u);
    r = {
      mode: u,
      lastCritical: d,
      lastLocation: f.source,
      lastCombine: null
    }, n.add(() => {
      it("onDragStart", () => En(e().onDragStart, f, t, $t.onDragStart));
    });
  }, s = (d, u) => {
    const f = mr(u), v = Qt(u);
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragMove when onDragStart has not been called") : g());
    const h = !Au(d, r.lastCritical);
    h && (r.lastCritical = d);
    const b = !Cu(r.lastLocation, f);
    b && (r.lastLocation = f);
    const E = !ku(r.lastCombine, v);
    if (E && (r.lastCombine = v), !h && !b && !E)
      return;
    const w = {
      ..._t(d, r.mode),
      combine: v,
      destination: f
    };
    n.add(() => {
      it("onDragUpdate", () => En(e().onDragUpdate, w, t, $t.onDragUpdate));
    });
  }, c = () => {
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Can only flush responders while dragging") : g()), n.flush();
  }, l = (d) => {
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : g()), r = null, it("onDragEnd", () => En(e().onDragEnd, d, t, $t.onDragEnd));
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
}, Pu = (e, t) => {
  const n = _u(e, t);
  return (r) => (o) => (i) => {
    if (le(i, "BEFORE_INITIAL_CAPTURE")) {
      n.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (le(i, "INITIAL_PUBLISH")) {
      const s = i.payload.critical;
      n.beforeStart(s, i.payload.movementMode), o(i), n.start(s, i.payload.movementMode);
      return;
    }
    if (le(i, "DROP_COMPLETE")) {
      const s = i.payload.completed.result;
      n.flush(), o(i), n.drop(s);
      return;
    }
    if (o(i), le(i, "FLUSH")) {
      n.abort();
      return;
    }
    const a = r.getState();
    a.phase === "DRAGGING" && n.update(a.critical, a.impact);
  };
};
const Ru = (e) => (t) => (n) => {
  if (!le(n, "DROP_ANIMATION_FINISHED")) {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot finish a drop animating when no drop is occurring") : g()), e.dispatch(wr({
    completed: r.completed
  }));
}, Tu = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((le(i, "FLUSH") || le(i, "DROP_COMPLETE") || le(i, "DROP_ANIMATION_FINISHED")) && r(), o(i), !le(i, "DROP_ANIMATE"))
      return;
    const a = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(ga());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = Ae(window, [a]);
    });
  };
};
var $u = (e) => () => (t) => (n) => {
  (le(n, "DROP_COMPLETE") || le(n, "FLUSH") || le(n, "DROP_ANIMATE")) && e.stopPublishing(), t(n);
}, Mu = (e) => {
  let t = !1;
  return () => (n) => (r) => {
    if (le(r, "INITIAL_PUBLISH")) {
      t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
      return;
    }
    if (n(r), !!t) {
      if (le(r, "FLUSH")) {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (le(r, "DROP_COMPLETE")) {
        t = !1;
        const o = r.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const Lu = (e) => le(e, "DROP_COMPLETE") || le(e, "DROP_ANIMATE") || le(e, "FLUSH");
var ju = (e) => (t) => (n) => (r) => {
  if (Lu(r)) {
    e.stop(), n(r);
    return;
  }
  if (le(r, "INITIAL_PUBLISH")) {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : g()), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const Bu = (e) => (t) => (n) => {
  if (t(n), !le(n, "PUBLISH_WHILE_DRAGGING"))
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(ma({
    reason: r.reason
  })));
}, Vu = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Ii;
var Fu = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => Si(Kp, Vu($l(gu(n), $u(e), mu(e), wu, Ru, Tu, Bu, ju(i), Ou, Mu(t), Pu(r, o))));
const Nn = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function zu({
  registry: e,
  callbacks: t
}) {
  let n = Nn(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, Dt();
      const {
        additions: c,
        removals: l,
        modified: p
      } = n, d = Object.keys(c).map((v) => e.draggable.getById(v).getDimension(we)).sort((v, h) => v.descriptor.index - h.descriptor.index), u = Object.keys(p).map((v) => {
        const b = e.droppable.getById(v).callbacks.getScrollWhileDragging();
        return {
          droppableId: v,
          scroll: b
        };
      }), f = {
        additions: d,
        removals: Object.keys(l),
        modified: u
      };
      n = Nn(), Ot(), t.publish(f);
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
      r && (cancelAnimationFrame(r), r = null, n = Nn());
    }
  };
}
var xa = ({
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
}, ya = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.documentElement") : g()), e;
}, wa = () => {
  const e = ya();
  return xa({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Gu = () => {
  const e = ba(), t = wa(), n = e.y, r = e.x, o = ya(), i = o.clientWidth, a = o.clientHeight, s = r + i, c = n + a;
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
        value: we,
        displacement: we
      }
    }
  };
}, Wu = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  Dt();
  const r = Gu(), o = r.scroll.current, i = e.droppable, a = n.droppable.getAllByType(i.type).map((p) => p.callbacks.getDimensionAndWatchScroll(o, t)), s = n.draggable.getAllByType(e.draggable.type).map((p) => p.getDimension(o)), c = {
    draggables: Ki(s),
    droppables: Yi(a)
  };
  return Ot(), {
    dimensions: c,
    critical: e,
    viewport: r
  };
};
function Eo(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && me(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var qu = (e, t) => {
  let n = null;
  const r = zu({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (u, f) => {
    e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot update is enabled flag of Droppable ${u} as it is not registered`) : g()), n && t.updateDroppableIsEnabled({
      id: u,
      isEnabled: f
    });
  }, i = (u, f) => {
    n && (e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot update isCombineEnabled flag of Droppable ${u} as it is not registered`) : g()), t.updateDroppableIsCombineEnabled({
      id: u,
      isCombineEnabled: f
    }));
  }, a = (u, f) => {
    n && (e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot update the scroll on Droppable ${u} as it is not registered`) : g()), t.updateDroppableScroll({
      id: u,
      newScroll: f
    }));
  }, s = (u, f) => {
    n && e.droppable.getById(u).callbacks.scroll(f);
  }, c = () => {
    if (!n)
      return;
    r.stop();
    const u = n.critical.droppable;
    e.droppable.getAllByType(u.type).forEach((f) => f.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, l = (u) => {
    n || (process.env.NODE_ENV !== "production" ? g(!1, "Should only be subscribed when a collection is occurring") : g());
    const f = n.critical.draggable;
    u.type === "ADDITION" && Eo(e, f, u.value) && r.add(u.value), u.type === "REMOVAL" && Eo(e, f, u.value) && r.remove(u.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (u) => {
      n && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start capturing critical dimensions as there is already a collection") : g());
      const f = e.draggable.getById(u.draggableId), v = e.droppable.getById(f.descriptor.droppableId), h = {
        draggable: f.descriptor,
        droppable: v.descriptor
      }, b = e.subscribe(l);
      return n = {
        critical: h,
        unsubscribe: b
      }, Wu({
        critical: h,
        registry: e,
        scrollOptions: u.scrollOptions
      });
    },
    stopPublishing: c
  };
}, Ea = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Uu = (e) => {
  window.scrollBy(e.x, e.y);
};
const Hu = ye((e) => Jt(e).filter((t) => !(!t.isEnabled || !t.frame))), Yu = (e, t) => Hu(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? g(!1, "Invalid result") : g()), ia(r.frame.pageMarginBox)(e))) || null;
var Ku = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return Yu(e, n);
};
const ht = {
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
var Xu = (e, t, n = () => ht) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Na = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? (process.env.NODE_ENV !== "production" && me(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (n - e) / r;
}, Nr = 1, Ju = (e, t, n = () => ht) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Nr;
  const i = 1 - Na({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = r.maxPixelScroll * r.ease(i);
  return Math.ceil(a);
}, Qu = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, a = t, s = i, l = Date.now() - a;
  if (l >= i)
    return e;
  if (l < o)
    return Nr;
  const p = Na({
    startOfRange: o,
    endOfRange: s,
    current: l
  }), d = e * r.ease(p);
  return Math.ceil(d);
}, No = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = Ju(e, t, o);
  return i === 0 ? 0 : r ? Math.max(Qu(i, n, o), Nr) : i;
}, Do = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Xu(e, r, i);
  return t[r.end] < t[r.start] ? No({
    distanceToEdge: t[r.end],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * No({
    distanceToEdge: t[r.start],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, Zu = ({
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
const ef = Hi((e) => e === 0 ? 0 : e);
var Da = ({
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
  }, s = Do({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: gr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = Do({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Qi,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = ef({
    x: c,
    y: s
  });
  if (Be(l, we))
    return null;
  const p = Zu({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return p ? Be(p, we) ? null : p : null;
};
const tf = Hi((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Dr = /* @__PURE__ */ (() => {
  const e = (t, n) => t < 0 ? t : t > n ? t - n : 0;
  return ({
    current: t,
    max: n,
    change: r
  }) => {
    const o = Ne(t, r), i = {
      x: e(o.x, n.x),
      y: e(o.y, n.y)
    };
    return Be(i, we) ? null : i;
  };
})(), Oa = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = tf(n), i = Dr({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Or = (e, t) => Oa({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), nf = (e, t) => {
  if (!Or(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return Dr({
    current: r,
    max: n,
    change: t
  });
}, Sr = (e, t) => {
  const n = e.frame;
  return n ? Oa({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, rf = (e, t) => {
  const n = e.frame;
  return !n || !Sr(e, t) ? null : Dr({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var of = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Da({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Or(e, a) ? a : null;
}, af = ({
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
  const s = Da({
    dragStartTime: r,
    container: a.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && Sr(e, s) ? s : null;
}, Oo = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const d = e.viewport, u = of({
      dragStartTime: t,
      viewport: d,
      subject: c,
      center: a,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: i
    });
    if (u) {
      r(u);
      return;
    }
  }
  const l = Ku({
    center: a,
    destination: Ie(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const p = af({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: a,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  p && o(l.descriptor.id, p);
}, sf = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => ht
}) => {
  const r = pt(e), o = pt(t);
  let i = null;
  const a = (l) => {
    i || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fluid scroll if not dragging") : g());
    const {
      shouldUseTimeDampening: p,
      dragStartTime: d
    } = i;
    Oo({
      state: l,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: d,
      shouldUseTimeDampening: p,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (l) => {
      Dt(), i && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start auto scrolling when already started") : g());
      const p = Date.now();
      let d = !1;
      const u = () => {
        d = !0;
      };
      Oo({
        state: l,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: u,
        scrollDroppable: u,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: p,
        shouldUseTimeDampening: d
      }, Ot(), d && a(l);
    },
    stop: () => {
      i && (r.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, cf = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: n
}) => {
  const r = (s, c) => {
    const l = Ne(s.current.client.selection, c);
    e({
      client: l
    });
  }, o = (s, c) => {
    if (!Sr(s, c))
      return c;
    const l = rf(s, c);
    if (!l)
      return t(s.descriptor.id, c), null;
    const p = Se(c, l);
    return t(s.descriptor.id, p), Se(c, p);
  }, i = (s, c, l) => {
    if (!s || !Or(c, l))
      return l;
    const p = nf(c, l);
    if (!p)
      return n(l), null;
    const d = Se(l, p);
    return n(d), Se(l, d);
  };
  return (s) => {
    const c = s.scrollJumpRequest;
    if (!c)
      return;
    const l = Ie(s.impact);
    l || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot perform a jump scroll when there is no destination") : g());
    const p = o(s.dimensions.droppables[l], c);
    if (!p)
      return;
    const d = s.viewport, u = i(s.isWindowScrollAllowed, d, p);
    u && r(s, u);
  };
}, lf = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = sf({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = cf({
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
const Qe = "data-rfd", Ze = (() => {
  const e = `${Qe}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Kn = (() => {
  const e = `${Qe}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), df = (() => {
  const e = `${Qe}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), So = {
  contextId: `${Qe}-scroll-container-context-id`
}, pf = (e) => (t) => `[${t}="${e}"]`, at = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), uf = "pointer-events: none;";
var ff = (e) => {
  const t = pf(e), n = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Ze.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: uf,
        dropAnimating: s
      }
    };
  })(), r = (() => {
    const s = `
      transition: ${dt.outOfTheWay};
    `;
    return {
      selector: t(Kn.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(df.contextId),
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
    always: at(a, "always"),
    resting: at(a, "resting"),
    dragging: at(a, "dragging"),
    dropAnimating: at(a, "dropAnimating"),
    userCancel: at(a, "userCancel")
  };
};
const Ce = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? as : be, Dn = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find the head to append a style to") : g()), e;
}, Io = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function mf(e, t) {
  const n = ne(() => ff(e), [e]), r = Z(null), o = Z(null), i = z(ye((d) => {
    const u = o.current;
    u || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), u.textContent = d;
  }), []), a = z((d) => {
    const u = r.current;
    u || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), u.textContent = d;
  }, []);
  Ce(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? g(!1, "style elements already mounted") : g());
    const d = Io(t), u = Io(t);
    return r.current = d, o.current = u, d.setAttribute(`${Qe}-always`, e), u.setAttribute(`${Qe}-dynamic`, e), Dn().appendChild(d), Dn().appendChild(u), a(n.always), i(n.resting), () => {
      const f = (v) => {
        const h = v.current;
        h || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot unmount ref as it is not set") : g()), Dn().removeChild(h), v.current = null;
      };
      f(r), f(o);
    };
  }, [t, a, i, n.always, n.resting, e]);
  const s = z(() => i(n.dragging), [i, n.dragging]), c = z((d) => {
    if (d === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), l = z(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return ne(() => ({
    dragging: s,
    dropping: c,
    resting: l
  }), [s, c, l]);
}
function Sa(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Ia = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function St(e) {
  return e instanceof Ia(e).HTMLElement;
}
function Ca(e, t) {
  const n = `[${Ze.contextId}="${e}"]`, r = Sa(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && me(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(Ze.draggableId) === t);
  return o ? St(o) ? o : (process.env.NODE_ENV !== "production" && me("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && me(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function gf(e) {
  const t = Z({}), n = Z(null), r = Z(null), o = Z(!1), i = z(function(u, f) {
    const v = {
      id: u,
      focus: f
    };
    return t.current[u] = v, function() {
      const b = t.current;
      b[u] !== v && delete b[u];
    };
  }, []), a = z(function(u) {
    const f = Ca(e, u);
    f && f !== document.activeElement && f.focus();
  }, [e]), s = z(function(u, f) {
    n.current === u && (n.current = f);
  }, []), c = z(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const u = n.current;
      u && a(u);
    }));
  }, [a]), l = z(function(u) {
    n.current = null;
    const f = document.activeElement;
    f && f.getAttribute(Ze.draggableId) === u && (n.current = u);
  }, []);
  return Ce(() => (o.current = !0, function() {
    o.current = !1;
    const u = r.current;
    u && cancelAnimationFrame(u);
  }), []), ne(() => ({
    register: i,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, l, c, s]);
}
function vf() {
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
    t.length && t.forEach((u) => u(d));
  }
  function o(d) {
    return e.draggables[d] || null;
  }
  function i(d) {
    const u = o(d);
    return u || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find draggable entry with id [${d}]`) : g()), u;
  }
  const a = {
    register: (d) => {
      e.draggables[d.descriptor.id] = d, r({
        type: "ADDITION",
        value: d
      });
    },
    update: (d, u) => {
      const f = e.draggables[u.descriptor.id];
      f && f.uniqueId === d.uniqueId && (delete e.draggables[u.descriptor.id], e.draggables[d.descriptor.id] = d);
    },
    unregister: (d) => {
      const u = d.descriptor.id, f = o(u);
      f && d.uniqueId === f.uniqueId && (delete e.draggables[u], e.droppables[d.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: d
      }));
    },
    getById: i,
    findById: o,
    exists: (d) => !!o(d),
    getAllByType: (d) => Object.values(e.draggables).filter((u) => u.descriptor.type === d)
  };
  function s(d) {
    return e.droppables[d] || null;
  }
  function c(d) {
    const u = s(d);
    return u || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find droppable entry with id [${d}]`) : g()), u;
  }
  const l = {
    register: (d) => {
      e.droppables[d.descriptor.id] = d;
    },
    unregister: (d) => {
      const u = s(d.descriptor.id);
      u && d.uniqueId === u.uniqueId && delete e.droppables[d.descriptor.id];
    },
    getById: c,
    findById: s,
    exists: (d) => !!s(d),
    getAllByType: (d) => Object.values(e.droppables).filter((u) => u.descriptor.type === d)
  };
  function p() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: a,
    droppable: l,
    subscribe: n,
    clean: p
  };
}
function hf() {
  const e = ne(vf, []);
  return be(() => function() {
    e.clean();
  }, [e]), e;
}
var Ir = ve.createContext(null), bt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.body") : g()), e;
};
const bf = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
}, xf = (e) => `rfd-announcement-${e}`;
function yf(e) {
  const t = ne(() => xf(e), [e]), n = Z(null);
  return be(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), zt(i.style, bf), bt().appendChild(i), function() {
      setTimeout(function() {
        const c = bt();
        c.contains(i) && c.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), z((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && me(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
const wf = {
  separator: "::"
};
function Cr(e, t = wf) {
  const n = ve.useId();
  return ne(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
function Ef({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Nf({
  contextId: e,
  text: t
}) {
  const n = Cr("hidden-text", {
    separator: "-"
  }), r = ne(() => Ef({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return be(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", bt().appendChild(i), function() {
      const s = bt();
      s.contains(i) && s.removeChild(i);
    };
  }, [r, t]), r;
}
var tn = ve.createContext(null), Df = {
  react: "^18.0.0 || ^19.0.0"
};
const Of = /(\d+)\.(\d+)\.(\d+)/, Co = (e) => {
  const t = Of.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? g(!1, `Unable to parse React version ${e}`) : g());
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, Sf = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var If = (e, t) => {
  const n = Co(e), r = Co(t);
  Sf(n, r) || process.env.NODE_ENV !== "production" && me(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const On = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Cf = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && me(`
      No <!doctype html> found.

      ${On}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && me(`
      Unexpected <!doctype> found: (${t.name})

      ${On}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && me(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${On}
    `);
};
function kr(e) {
  process.env.NODE_ENV !== "production" && e();
}
function It(e, t) {
  kr(() => {
    be(() => {
      try {
        e();
      } catch (n) {
        Wn(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function kf() {
  It(() => {
    If(Df.react, ve.version), Cf(document);
  }, []);
}
function Ar(e) {
  const t = Z(e);
  return be(() => {
    t.current = e;
  }), t;
}
function Af() {
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
function xt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const _f = 9, Pf = 13, _r = 27, ka = 32, Rf = 33, Tf = 34, $f = 35, Mf = 36, Lf = 37, jf = 38, Bf = 39, Vf = 40, Ff = {
  [Pf]: !0,
  [_f]: !0
};
var Aa = (e) => {
  Ff[e.keyCode] && e.preventDefault();
};
const nn = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})(), _a = 0, ko = 5;
function zf(e, t) {
  return Math.abs(t.x - e.x) >= ko || Math.abs(t.y - e.y) >= ko;
}
const Ao = {
  type: "IDLE"
};
function Gf({
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
      if (i !== _a)
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
      const p = l.point;
      if (!zf(p, c))
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
      if (o.keyCode === _r) {
        o.preventDefault(), e();
        return;
      }
      Aa(o);
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
    eventName: nn,
    fn: e
  }];
}
function Wf(e) {
  const t = Z(Ao), n = Z(je), r = ne(() => ({
    eventName: "mousedown",
    fn: function(d) {
      if (d.defaultPrevented || d.button !== _a || d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
        return;
      const u = e.findClosestDraggableId(d);
      if (!u)
        return;
      const f = e.tryGetLock(u, a, {
        sourceEvent: d
      });
      if (!f)
        return;
      d.preventDefault();
      const v = {
        x: d.clientX,
        y: d.clientY
      };
      n.current(), l(f, v);
    }
  }), [e]), o = ne(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (p) => {
      if (p.defaultPrevented)
        return;
      const d = e.findClosestDraggableId(p);
      if (!d)
        return;
      const u = e.findOptionsForDraggable(d);
      u && (u.shouldRespectForcePress || e.canGetLock(d) && p.preventDefault());
    }
  }), [e]), i = z(function() {
    const d = {
      passive: !1,
      capture: !0
    };
    n.current = Ae(window, [o, r], d);
  }, [o, r]), a = z(() => {
    t.current.type !== "IDLE" && (t.current = Ao, n.current(), i());
  }, [i]), s = z(() => {
    const p = t.current;
    a(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [a]), c = z(function() {
    const d = {
      capture: !0,
      passive: !1
    }, u = Gf({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (f) => {
        t.current = f;
      }
    });
    n.current = Ae(window, u, d);
  }, [s, a]), l = z(function(d, u) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g()), t.current = {
      type: "PENDING",
      point: u,
      actions: d
    }, c();
  }, [c]);
  Ce(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function qf() {
}
const Uf = {
  [Tf]: !0,
  [Rf]: !0,
  [Mf]: !0,
  [$f]: !0
};
function Hf(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === _r) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === ka) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === Vf) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === jf) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Bf) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Lf) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Uf[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Aa(o);
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
    eventName: nn,
    fn: n
  }];
}
function Yf(e) {
  const t = Z(qf), n = ne(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== ka)
        return;
      const a = e.findClosestDraggableId(i);
      if (!a)
        return;
      const s = e.tryGetLock(a, p, {
        sourceEvent: i
      });
      if (!s)
        return;
      i.preventDefault();
      let c = !0;
      const l = s.snapLift();
      t.current();
      function p() {
        c || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop capturing a keyboard drag when not capturing") : g()), c = !1, t.current(), r();
      }
      t.current = Ae(window, Hf(l, p), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = z(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = Ae(window, [n], i);
  }, [n]);
  Ce(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const Sn = {
  type: "IDLE"
}, Kf = 120, Xf = 0.15;
function Jf({
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
      n.keyCode === _r && n.preventDefault(), e();
    }
  }, {
    eventName: nn,
    fn: e
  }];
}
function Qf({
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
      if (!i || !(i.force >= Xf))
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
    eventName: nn,
    fn: e
  }];
}
function Zf(e) {
  const t = Z(Sn), n = Z(je), r = z(function() {
    return t.current;
  }, []), o = z(function(f) {
    t.current = f;
  }, []), i = ne(() => ({
    eventName: "touchstart",
    fn: function(f) {
      if (f.defaultPrevented)
        return;
      const v = e.findClosestDraggableId(f);
      if (!v)
        return;
      const h = e.tryGetLock(v, s, {
        sourceEvent: f
      });
      if (!h)
        return;
      const b = f.touches[0], {
        clientX: E,
        clientY: w
      } = b, N = {
        x: E,
        y: w
      };
      n.current(), d(h, N);
    }
  }), [e]), a = z(function() {
    const f = {
      capture: !0,
      passive: !1
    };
    n.current = Ae(window, [i], f);
  }, [i]), s = z(() => {
    const u = t.current;
    u.type !== "IDLE" && (u.type === "PENDING" && clearTimeout(u.longPressTimerId), o(Sn), n.current(), a());
  }, [a, o]), c = z(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), l = z(function() {
    const f = {
      capture: !0,
      passive: !1
    }, v = {
      cancel: c,
      completed: s,
      getPhase: r
    }, h = Ae(window, Qf(v), f), b = Ae(window, Jf(v), f);
    n.current = function() {
      h(), b();
    };
  }, [c, r, s]), p = z(function() {
    const f = r();
    f.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? g(!1, `Cannot start dragging from phase ${f.type}`) : g());
    const v = f.actions.fluidLift(f.point);
    o({
      type: "DRAGGING",
      actions: v,
      hasMoved: !1
    });
  }, [r, o]), d = z(function(f, v) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g());
    const h = setTimeout(p, Kf);
    o({
      type: "PENDING",
      point: v,
      actions: f,
      longPressTimerId: h
    }), l();
  }, [l, r, o, p]);
  Ce(function() {
    return a(), function() {
      n.current();
      const v = r();
      v.type === "PENDING" && (clearTimeout(v.longPressTimerId), o(Sn));
    };
  }, [r, a, o]), Ce(function() {
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
function em(e) {
  kr(() => {
    const t = Ar(e);
    It(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot change the amount of sensor hooks after mounting") : g(!1));
    });
  });
}
const tm = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Pa(e, t) {
  if (t == null)
    return !1;
  if (tm.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Pa(e, t.parentElement);
}
function nm(e, t) {
  const n = t.target;
  return St(n) ? Pa(e, n) : !1;
}
var rm = (e) => Pe(e.getBoundingClientRect()).center;
function om(e) {
  return e instanceof Ia(e).Element;
}
const im = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function Ra(e, t) {
  return e == null ? null : e[im](t) ? e : Ra(e.parentElement, t);
}
function am(e, t) {
  return e.closest ? e.closest(t) : Ra(e, t);
}
function sm(e) {
  return `[${Ze.contextId}="${e}"]`;
}
function cm(e, t) {
  const n = t.target;
  if (!om(n))
    return process.env.NODE_ENV !== "production" && me("event.target must be a Element"), null;
  const r = sm(e), o = am(n, r);
  return o ? St(o) ? o : (process.env.NODE_ENV !== "production" && me("drag handle must be a HTMLElement"), null) : null;
}
function lm(e, t) {
  const n = cm(e, t);
  return n ? n.getAttribute(Ze.draggableId) : null;
}
function dm(e, t) {
  const n = `[${Kn.contextId}="${e}"]`, o = Sa(document, n).find((i) => i.getAttribute(Kn.id) === t);
  return o ? St(o) ? o : (process.env.NODE_ENV !== "production" && me("Draggable element is not a HTMLElement"), null) : null;
}
function pm(e) {
  e.preventDefault();
}
function Pt({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return n() ? e !== t ? (r && process.env.NODE_ENV !== "production" && me(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (r && process.env.NODE_ENV !== "production" && me(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Ta({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !Ea(t.getState(), r)) : (process.env.NODE_ENV !== "production" && me(`Unable to find draggable with id: ${r}`), !1);
}
function um({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Ta({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), l = dm(t, c.descriptor.id);
  if (!l)
    return process.env.NODE_ENV !== "production" && me(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && nm(l, a))
    return null;
  const p = e.claim(i || je);
  let d = "PRE_DRAG";
  function u() {
    return c.options.shouldRespectForcePress;
  }
  function f() {
    return e.isActive(p);
  }
  function v(x, I) {
    Pt({
      expected: x,
      phase: d,
      isLockActive: f,
      shouldWarn: !0
    }) && n.dispatch(I());
  }
  const h = v.bind(null, "DRAGGING");
  function b(x) {
    function I() {
      e.release(), d = "COMPLETED";
    }
    d !== "PRE_DRAG" && (I(), process.env.NODE_ENV !== "production" ? g(!1, `Cannot lift in phase ${d}`) : g()), n.dispatch(Jp(x.liftActionArgs)), d = "DRAGGING";
    function P(L, j = {
      shouldBlockNextClick: !1
    }) {
      if (x.cleanup(), j.shouldBlockNextClick) {
        const O = Ae(window, [{
          eventName: "click",
          fn: pm,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(O);
      }
      I(), n.dispatch(ma({
        reason: L
      }));
    }
    return {
      isActive: () => Pt({
        expected: "DRAGGING",
        phase: d,
        isLockActive: f,
        shouldWarn: !1
      }),
      shouldRespectForcePress: u,
      drop: (L) => P("DROP", L),
      cancel: (L) => P("CANCEL", L),
      ...x.actions
    };
  }
  function E(x) {
    const I = pt((L) => {
      h(() => fa({
        client: L
      }));
    });
    return {
      ...b({
        liftActionArgs: {
          id: o,
          clientSelection: x,
          movementMode: "FLUID"
        },
        cleanup: () => I.cancel(),
        actions: {
          move: I
        }
      }),
      move: I
    };
  }
  function w() {
    const x = {
      moveUp: () => h(au),
      moveRight: () => h(cu),
      moveDown: () => h(su),
      moveLeft: () => h(lu)
    };
    return b({
      liftActionArgs: {
        id: o,
        clientSelection: rm(l),
        movementMode: "SNAP"
      },
      cleanup: je,
      actions: x
    });
  }
  function N() {
    Pt({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: f,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Pt({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: f,
      shouldWarn: !1
    }),
    shouldRespectForcePress: u,
    fluidLift: E,
    snapLift: w,
    abort: N
  };
}
const fm = [Wf, Yf, Zf];
function mm({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? fm : [], ...r || []], a = fe(() => Af())[0], s = z(function(b, E) {
    xt(b) && !xt(E) && a.tryAbandon();
  }, [a]);
  Ce(function() {
    let b = t.getState();
    return t.subscribe(() => {
      const w = t.getState();
      s(b, w), b = w;
    });
  }, [a, t, s]), Ce(() => a.tryAbandon, [a.tryAbandon]);
  const c = z((h) => Ta({
    lockAPI: a,
    registry: n,
    store: t,
    draggableId: h
  }), [a, n, t]), l = z((h, b, E) => um({
    lockAPI: a,
    registry: n,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: b || null,
    sourceEvent: E && E.sourceEvent ? E.sourceEvent : null
  }), [e, a, n, t]), p = z((h) => lm(e, h), [e]), d = z((h) => {
    const b = n.draggable.findById(h);
    return b ? b.options : null;
  }, [n.draggable]), u = z(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(yr()));
  }, [a, t]), f = z(() => a.isClaimed(), [a]), v = ne(() => ({
    canGetLock: c,
    tryGetLock: l,
    findClosestDraggableId: p,
    findOptionsForDraggable: d,
    tryReleaseLock: u,
    isLockClaimed: f
  }), [c, l, p, d, u, f]);
  em(i);
  for (let h = 0; h < i.length; h++)
    i[h](v);
}
const gm = (e) => ({
  onBeforeCapture: (t) => {
    ii(() => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    });
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), vm = (e) => ({
  ...ht,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...ht.durationDampening,
    ...e.autoScrollerOptions
  }
});
function st(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find store from lazy ref") : g()), e.current;
}
function hm(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = Z(null);
  kf();
  const s = Ar(e), c = z(() => gm(s.current), [s]), l = z(() => vm(s.current), [s]), p = yf(t), d = Nf({
    contextId: t,
    text: i
  }), u = mf(t, o), f = z((O) => {
    st(a).dispatch(O);
  }, []), v = ne(() => Xr({
    publishWhileDragging: Zp,
    updateDroppableScroll: tu,
    updateDroppableIsEnabled: nu,
    updateDroppableIsCombineEnabled: ru,
    collectionStarting: eu
  }, f), [f]), h = hf(), b = ne(() => qu(h, v), [h, v]), E = ne(() => lf({
    scrollWindow: Uu,
    scrollDroppable: b.scrollDroppable,
    getAutoScrollerOptions: l,
    ...Xr({
      move: fa
    }, f)
  }), [b.scrollDroppable, f, l]), w = gf(t), N = ne(() => Fu({
    announce: p,
    autoScroller: E,
    dimensionMarshal: b,
    focusMarshal: w,
    getResponders: c,
    styleMarshal: u
  }), [p, E, b, w, c, u]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== N && process.env.NODE_ENV !== "production" && me("unexpected store change"), a.current = N;
  const y = z(() => {
    const O = st(a);
    O.getState().phase !== "IDLE" && O.dispatch(yr());
  }, []), x = z(() => {
    const O = st(a).getState();
    return O.phase === "DROP_ANIMATING" ? !0 : O.phase === "IDLE" ? !1 : O.isDragging;
  }, []), I = ne(() => ({
    isDragging: x,
    tryAbort: y
  }), [x, y]);
  n(I);
  const P = z((O) => Ea(st(a).getState(), O), []), L = z(() => We(st(a).getState()), []), j = ne(() => ({
    marshal: b,
    focus: w,
    contextId: t,
    canLift: P,
    isMovementAllowed: L,
    dragHandleUsageInstructionsId: d,
    registry: h
  }), [t, b, d, w, P, L, h]);
  return mm({
    contextId: t,
    store: N,
    registry: h,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), be(() => y, [y]), ve.createElement(tn.Provider, {
    value: j
  }, ve.createElement(Cd, {
    context: Ir,
    store: N
  }, e.children));
}
function bm() {
  return ve.useId();
}
function Pr(e) {
  const t = bm(), n = e.dragHandleUsageInstructions || $t.dragHandleUsageInstructions;
  return ve.createElement(Vd, null, (r) => ve.createElement(hm, {
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
const _o = {
  dragging: 5e3,
  dropAnimating: 4500
}, xm = (e, t) => t ? dt.drop(t.duration) : e ? dt.snap : dt.fluid, ym = (e, t) => {
  if (e)
    return t ? vt.opacity.drop : vt.opacity.combining;
}, wm = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Em(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = wm(e), c = !!i, l = c ? Hn.drop(r, a) : Hn.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: xm(s, i),
    transform: l,
    opacity: ym(a, c),
    zIndex: c ? _o.dropAnimating : _o.dragging,
    pointerEvents: "none"
  };
}
function Nm(e) {
  return {
    transform: Hn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Dm(e) {
  return e.type === "DRAGGING" ? Em(e) : Nm(e);
}
function Om(e, t, n = we) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Fi(o, r), a = Ft(i, n), s = {
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
function Sm(e) {
  const t = Cr("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = ne(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), l = z((f) => {
    const v = o();
    return v || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get dimension when no ref is set") : g()), Om(n, v, f);
  }, [n, o]), p = ne(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: l
  }), [n, l, c, t]), d = Z(p), u = Z(!0);
  Ce(() => (r.draggable.register(d.current), () => r.draggable.unregister(d.current)), [r.draggable]), Ce(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    const f = d.current;
    d.current = p, r.draggable.update(p, f);
  }, [p, r.draggable]);
}
var Rr = ve.createContext(null);
function $a(e) {
  e && St(e) || (process.env.NODE_ENV !== "production" ? g(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : g());
}
function Im(e, t, n) {
  It(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? g(!1, "Draggable requires a draggableId") : g(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? g(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : g(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? g(!1, `${r(o)} requires an integer index prop`) : g(!1)), e.mapped.type !== "DRAGGING" && ($a(n()), e.isEnabled && (Ca(t, o) || (process.env.NODE_ENV !== "production" ? g(!1, `${r(o)} Unable to find drag handle`) : g(!1))));
  });
}
function Cm(e) {
  kr(() => {
    const t = Z(e);
    It(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Draggable isClone prop value changed during component life") : g(!1));
    }, [e]);
  });
}
function qt(e) {
  const t = wt(e);
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find required context") : g()), t;
}
function km(e) {
  e.preventDefault();
}
const Am = (e) => {
  const t = Z(null), n = z((I = null) => {
    t.current = I;
  }, []), r = z(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = qt(tn), {
    type: s,
    droppableId: c
  } = qt(Rr), l = ne(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: p,
    draggableId: d,
    isEnabled: u,
    shouldRespectForcePress: f,
    canDragInteractiveElements: v,
    isClone: h,
    mapped: b,
    dropAnimationFinished: E
  } = e;
  if (Im(e, o, r), Cm(h), !h) {
    const I = ne(() => ({
      descriptor: l,
      registry: a,
      getDraggableRef: r,
      canDragInteractiveElements: v,
      shouldRespectForcePress: f,
      isEnabled: u
    }), [l, a, r, v, f, u]);
    Sm(I);
  }
  const w = ne(() => u ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": d,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: km
  } : null, [o, i, d, u]), N = z((I) => {
    b.type === "DRAGGING" && b.dropping && I.propertyName === "transform" && ii(E);
  }, [E, b]), y = ne(() => {
    const I = Dm(b), P = b.type === "DRAGGING" && b.dropping ? N : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": d,
        style: I,
        onTransitionEnd: P
      },
      dragHandleProps: w
    };
  }, [o, w, d, b, N, n]), x = ne(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return ve.createElement(ve.Fragment, null, p(y, b.snapshot, x));
};
var Ma = (e, t) => e === t, La = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const _m = (e) => e.combine ? e.combine.draggableId : null, Pm = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Rm() {
  const e = ye((o, i) => ({
    x: o,
    y: i
  })), t = ye((o, i, a = null, s = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), n = ye((o, i, a, s, c = null, l = null, p = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: l,
      mode: i,
      offset: o,
      dimension: a,
      forceShouldAnimate: p,
      snapshot: t(i, s, c, l, null)
    }
  }));
  return (o, i) => {
    if (xt(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = Ie(o.impact), l = Pm(o.impact), p = o.forceShouldAnimate;
      return n(e(a.x, a.y), o.movementMode, s, i.isClone, c, l, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], l = a.result, p = l.mode, d = La(l), u = _m(l), v = {
        duration: o.dropDuration,
        curve: Er.drop,
        moveTo: o.newHomeClientOffset,
        opacity: u ? vt.opacity.drop : null,
        scale: u ? vt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: v,
          draggingOver: d,
          combineWith: u,
          mode: p,
          forceShouldAnimate: null,
          snapshot: t(p, s, d, u, v)
        }
      };
    }
    return null;
  };
}
function ja(e = null) {
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
const Tm = {
  mapped: {
    type: "SECONDARY",
    offset: we,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: ja(null)
  }
};
function $m() {
  const e = ye((a, s) => ({
    x: a,
    y: s
  })), t = ye(ja), n = ye((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), r = (a) => a ? n(we, a, !0) : null, o = (a, s, c, l) => {
    const p = c.displaced.visible[a], d = !!(l.inVirtualList && l.effected[a]), u = Qt(c), f = u && u.draggableId === a ? s : null;
    if (!p) {
      if (!d)
        return r(f);
      if (c.displaced.invisible[a])
        return null;
      const b = nt(l.displacedBy.point), E = e(b.x, b.y);
      return n(E, f, !0);
    }
    if (d)
      return r(f);
    const v = c.displacedBy.point, h = e(v.x, v.y);
    return n(h, f, p.shouldAnimate);
  };
  return (a, s) => {
    if (xt(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const c = a.completed;
      return c.result.draggableId === s.draggableId ? null : o(s.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const Mm = () => {
  const e = Rm(), t = $m();
  return (r, o) => e(r, o) || t(r, o) || Tm;
}, Lm = {
  dropAnimationFinished: ga
}, jm = Vi(Mm, Lm, null, {
  context: Ir,
  areStatePropsEqual: Ma
})(Am);
function Ba(e) {
  return qt(Rr).isUsingCloneFor === e.draggableId && !e.isClone ? null : ve.createElement(jm, e);
}
function Tr(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return ve.createElement(Ba, zt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const $r = (e) => (t) => e === t, Bm = $r("scroll"), Vm = $r("auto"), Fm = $r("visible"), Po = (e, t) => t(e.overflowX) || t(e.overflowY), zm = (e, t) => t(e.overflowX) && t(e.overflowY), Va = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Po(n, Bm) || Po(n, Vm);
}, Gm = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = bt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, g()), !Va(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return zm(r, Fm) || process.env.NODE_ENV !== "production" && me(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Mr = (e) => e == null ? null : e === document.body ? Gm() ? e : null : e === document.documentElement ? null : Va(e) ? e : Mr(e.parentElement);
var Wm = (e) => {
  !e || !Mr(e.parentElement) || process.env.NODE_ENV !== "production" && me(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Xn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Fa = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Fa(e.parentElement) : !1;
var qm = (e) => {
  const t = Mr(e), n = Fa(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, Um = ({
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
      scrollSize: u,
      client: f
    } = s, v = xa({
      scrollHeight: u.scrollHeight,
      scrollWidth: u.scrollWidth,
      height: f.paddingBox.height,
      width: f.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: f,
      scrollSize: u,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: v,
        diff: {
          value: we,
          displacement: we
        }
      }
    };
  })(), l = o === "vertical" ? gr : Qi, p = Je({
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
    subject: p
  };
};
const Hm = (e, t) => {
  const n = zi(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, a = o + t.scrollWidth, c = pr({
    top: r,
    right: a,
    bottom: i,
    left: o
  }, n.border);
  return ur({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var Ym = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = n.closestScrollable, l = Hm(e, c), p = Ft(l, r), d = (() => {
    if (!c)
      return null;
    const f = zi(c), v = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: f,
      page: Ft(f, r),
      scroll: Xn(c),
      scrollSize: v,
      shouldClipSubject: s
    };
  })();
  return Um({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: l,
    page: p,
    closest: d
  });
};
const Km = {
  passive: !1
}, Xm = {
  passive: !0
};
var Ro = (e) => e.shouldPublishImmediately ? Km : Xm;
const Rt = (e) => e && e.env.closestScrollable || null;
function Jm(e) {
  const t = Z(null), n = qt(tn), r = Cr("droppable"), {
    registry: o,
    marshal: i
  } = n, a = Ar(e), s = ne(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = Z(s), l = ne(() => ye((y, x) => {
    t.current || (process.env.NODE_ENV !== "production" ? g(!1, "Can only update scroll when dragging") : g());
    const I = {
      x: y,
      y: x
    };
    i.updateDroppableScroll(s.id, I);
  }), [s.id, i]), p = z(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? we : Xn(y.env.closestScrollable);
  }, []), d = z(() => {
    const y = p();
    l(y.x, y.y);
  }, [p, l]), u = ne(() => pt(d), [d]), f = z(() => {
    const y = t.current, x = Rt(y);
    if (y && x || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find scroll options while scrolling") : g()), y.scrollOptions.shouldPublishImmediately) {
      d();
      return;
    }
    u();
  }, [u, d]), v = z((y, x) => {
    t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect a droppable while a drag is occurring") : g());
    const I = a.current, P = I.getDroppableRef();
    P || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect without a droppable ref") : g());
    const L = qm(P), j = {
      ref: P,
      descriptor: s,
      env: L,
      scrollOptions: x
    };
    t.current = j;
    const O = Ym({
      ref: P,
      descriptor: s,
      env: L,
      windowScroll: y,
      direction: I.direction,
      isDropDisabled: I.isDropDisabled,
      isCombineEnabled: I.isCombineEnabled,
      shouldClipSubject: !I.ignoreContainerClipping
    }), R = L.closestScrollable;
    return R && (R.setAttribute(So.contextId, n.contextId), R.addEventListener("scroll", f, Ro(j.scrollOptions)), process.env.NODE_ENV !== "production" && Wm(R)), O;
  }, [n.contextId, s, f, a]), h = z(() => {
    const y = t.current, x = Rt(y);
    return y && x || (process.env.NODE_ENV !== "production" ? g(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : g()), Xn(x);
  }, []), b = z(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop drag when no active drag") : g());
    const x = Rt(y);
    t.current = null, x && (u.cancel(), x.removeAttribute(So.contextId), x.removeEventListener("scroll", f, Ro(y.scrollOptions)));
  }, [f, u]), E = z((y) => {
    const x = t.current;
    x || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll when there is no drag") : g());
    const I = Rt(x);
    I || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll a droppable with no closest scrollable") : g()), I.scrollTop += y.y, I.scrollLeft += y.x;
  }, []), w = ne(() => ({
    getDimensionAndWatchScroll: v,
    getScrollWhileDragging: h,
    dragStopped: b,
    scroll: E
  }), [b, v, h, E]), N = ne(() => ({
    uniqueId: r,
    descriptor: s,
    callbacks: w
  }), [w, s, r]);
  Ce(() => (c.current = N.descriptor, o.droppable.register(N), () => {
    t.current && (process.env.NODE_ENV !== "production" && me("Unsupported: changing the droppableId or type of a Droppable during a drag"), b()), o.droppable.unregister(N);
  }), [w, s, b, N, i, o.droppable]), Ce(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ce(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function In() {
}
const To = {
  width: 0,
  height: 0,
  margin: Hd
}, Qm = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? To : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Zm = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = Qm({
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
    transition: n !== "none" ? dt.placeholder : null
  };
}, eg = (e) => {
  const t = Z(null), n = z(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = fe(e.animate === "open");
  be(() => s ? r !== "open" ? (n(), c(!1), In) : t.current ? In : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : In, [r, s, n]);
  const l = z((d) => {
    d.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), p = Zm({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return ve.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: l,
    ref: e.innerRef
  });
};
var tg = ve.memo(eg);
function Cn(e) {
  return typeof e == "boolean";
}
function kn(e, t) {
  t.forEach((n) => n(e));
}
const ng = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? g(!1, "A Droppable requires a droppableId prop") : g()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? g(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : g());
}, function({
  props: t
}) {
  Cn(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? g(!1, "isDropDisabled must be a boolean") : g()), Cn(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? g(!1, "isCombineEnabled must be a boolean") : g()), Cn(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? g(!1, "ignoreContainerClipping must be a boolean") : g());
}, function({
  getDroppableRef: t
}) {
  $a(t());
}], rg = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && me(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], og = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? g(!1, "Must provide a clone render function (renderClone) for virtual lists") : g());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? g(!1, "Expected virtual list to not have a placeholder") : g());
}];
function ig(e) {
  It(() => {
    kn(e, ng), e.props.mode === "standard" && kn(e, rg), e.props.mode === "virtual" && kn(e, og);
  });
}
class ag extends ve.PureComponent {
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
const sg = (e) => {
  const t = wt(tn);
  t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find app context") : g());
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = Z(null), i = Z(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: l,
    direction: p,
    ignoreContainerClipping: d,
    isDropDisabled: u,
    isCombineEnabled: f,
    snapshot: v,
    useClone: h,
    updateViewportMaxScroll: b,
    getContainerForClone: E
  } = e, w = z(() => o.current, []), N = z((B = null) => {
    o.current = B;
  }, []), y = z(() => i.current, []), x = z((B = null) => {
    i.current = B;
  }, []);
  ig({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const I = z(() => {
    r() && b({
      maxScroll: wa()
    });
  }, [r, b]);
  Jm({
    droppableId: s,
    type: c,
    mode: l,
    direction: p,
    isDropDisabled: u,
    isCombineEnabled: f,
    ignoreContainerClipping: d,
    getDroppableRef: w
  });
  const P = ne(() => ve.createElement(ag, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: B,
    data: G,
    animate: V
  }) => ve.createElement(tg, {
    placeholder: G,
    onClose: B,
    innerRef: x,
    animate: V,
    contextId: n,
    onTransitionEnd: I
  })), [n, I, e.placeholder, e.shouldAnimatePlaceholder, x]), L = ne(() => ({
    innerRef: N,
    placeholder: P,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": n
    }
  }), [n, s, P, N]), j = h ? h.dragging.draggableId : null, O = ne(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: j
  }), [s, j, c]);
  function R() {
    if (!h)
      return null;
    const {
      dragging: B,
      render: G
    } = h, V = ve.createElement(Ba, {
      draggableId: B.draggableId,
      index: B.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (X, Q) => G(X, Q, B));
    return ds.createPortal(V, E());
  }
  return ve.createElement(Rr.Provider, {
    value: O
  }, a(L, v), R());
};
function cg() {
  return document.body || (process.env.NODE_ENV !== "production" ? g(!1, "document.body is not ready") : g()), document.body;
}
const $o = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: cg
}, za = (e) => {
  let t = {
    ...e
  }, n;
  for (n in $o)
    e[n] === void 0 && (t = {
      ...t,
      [n]: $o[n]
    });
  return t;
}, An = (e, t) => e === t.droppable.type, Mo = (e, t) => t.draggables[e.draggable.id], lg = () => {
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
  }, n = ye((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), r = ye((i, a, s, c, l, p) => {
    const d = l.descriptor.id;
    if (l.descriptor.droppableId === i) {
      const v = p ? {
        render: p,
        dragging: n(l.descriptor)
      } : null, h = {
        isDraggingOver: s,
        draggingOverWith: s ? d : null,
        draggingFromThisWith: d,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: h,
        useClone: v
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
    const s = za(a), c = s.droppableId, l = s.type, p = !s.isDropDisabled, d = s.renderClone;
    if (xt(i)) {
      const u = i.critical;
      if (!An(l, u))
        return t;
      const f = Mo(u, i.dimensions), v = Ie(i.impact) === c;
      return r(c, p, v, v, f, d);
    }
    if (i.phase === "DROP_ANIMATING") {
      const u = i.completed;
      if (!An(l, u.critical))
        return t;
      const f = Mo(u.critical, i.dimensions);
      return r(c, p, La(u.result) === c, Ie(u.impact) === c, f, d);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const u = i.completed;
      if (!An(l, u.critical))
        return t;
      const f = Ie(u.impact) === c, v = !!(u.impact.at && u.impact.at.type === "COMBINE"), h = u.critical.droppable.id === c;
      return f ? v ? e : t : h ? e : t;
    }
    return t;
  };
}, dg = {
  updateViewportMaxScroll: iu
}, Lr = Vi(lg, dg, (e, t, n) => ({
  ...za(n),
  ...e,
  ...t
}), {
  context: Ir,
  areStatePropsEqual: Ma
})(sg);
function Ev({
  items: e,
  onReorder: t,
  className: n,
  itemClassName: r,
  droppableId: o = "sortable-list"
}) {
  return /* @__PURE__ */ m(Pr, { onDragEnd: (a) => {
    if (!a.destination) return;
    const s = Array.from(e), [c] = s.splice(a.source.index, 1);
    s.splice(a.destination.index, 0, c), t(s);
  }, children: /* @__PURE__ */ m(Lr, { droppableId: o, children: (a) => /* @__PURE__ */ k(
    "ul",
    {
      ref: a.innerRef,
      ...a.droppableProps,
      className: S("space-y-2", n),
      children: [
        e.map((s, c) => /* @__PURE__ */ m(Tr, { draggableId: s.id, index: c, children: (l, p) => /* @__PURE__ */ k(
          "li",
          {
            ref: l.innerRef,
            ...l.draggableProps,
            className: S(
              "group relative flex items-center gap-3 p-4 bg-white border border-neutral-200 rounded-xl",
              "transition-all duration-200 ease-out",
              "hover:shadow-md hover:border-primary/40",
              p.isDragging && "shadow-xl ring-2 ring-primary/30 rotate-1 scale-[1.02]",
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
                    p.isDragging ? "opacity-100" : "opacity-0 group-hover:opacity-50"
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
                    p.isDragging && "text-primary"
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
                    p.isDragging && "bg-primary text-white"
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
var Jn = { exports: {} }, Tt = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function pg() {
  if (Lo) return se;
  Lo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function N(x) {
    if (typeof x == "object" && x !== null) {
      var I = x.$$typeof;
      switch (I) {
        case t:
          switch (x = x.type, x) {
            case c:
            case l:
            case r:
            case i:
            case o:
            case d:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case s:
                case p:
                case v:
                case f:
                case a:
                  return x;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  function y(x) {
    return N(x) === l;
  }
  return se.AsyncMode = c, se.ConcurrentMode = l, se.ContextConsumer = s, se.ContextProvider = a, se.Element = t, se.ForwardRef = p, se.Fragment = r, se.Lazy = v, se.Memo = f, se.Portal = n, se.Profiler = i, se.StrictMode = o, se.Suspense = d, se.isAsyncMode = function(x) {
    return y(x) || N(x) === c;
  }, se.isConcurrentMode = y, se.isContextConsumer = function(x) {
    return N(x) === s;
  }, se.isContextProvider = function(x) {
    return N(x) === a;
  }, se.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, se.isForwardRef = function(x) {
    return N(x) === p;
  }, se.isFragment = function(x) {
    return N(x) === r;
  }, se.isLazy = function(x) {
    return N(x) === v;
  }, se.isMemo = function(x) {
    return N(x) === f;
  }, se.isPortal = function(x) {
    return N(x) === n;
  }, se.isProfiler = function(x) {
    return N(x) === i;
  }, se.isStrictMode = function(x) {
    return N(x) === o;
  }, se.isSuspense = function(x) {
    return N(x) === d;
  }, se.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === l || x === i || x === o || x === d || x === u || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === f || x.$$typeof === a || x.$$typeof === s || x.$$typeof === p || x.$$typeof === b || x.$$typeof === E || x.$$typeof === w || x.$$typeof === h);
  }, se.typeOf = N, se;
}
var ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function ug() {
  return jo || (jo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function N(A) {
      return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      A === r || A === l || A === i || A === o || A === d || A === u || typeof A == "object" && A !== null && (A.$$typeof === v || A.$$typeof === f || A.$$typeof === a || A.$$typeof === s || A.$$typeof === p || A.$$typeof === b || A.$$typeof === E || A.$$typeof === w || A.$$typeof === h);
    }
    function y(A) {
      if (typeof A == "object" && A !== null) {
        var pe = A.$$typeof;
        switch (pe) {
          case t:
            var ze = A.type;
            switch (ze) {
              case c:
              case l:
              case r:
              case i:
              case o:
              case d:
                return ze;
              default:
                var ot = ze && ze.$$typeof;
                switch (ot) {
                  case s:
                  case p:
                  case v:
                  case f:
                  case a:
                    return ot;
                  default:
                    return pe;
                }
            }
          case n:
            return pe;
        }
      }
    }
    var x = c, I = l, P = s, L = a, j = t, O = p, R = r, B = v, G = f, V = n, X = i, Q = o, te = d, de = !1;
    function oe(A) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(A) || y(A) === c;
    }
    function C(A) {
      return y(A) === l;
    }
    function $(A) {
      return y(A) === s;
    }
    function H(A) {
      return y(A) === a;
    }
    function W(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function F(A) {
      return y(A) === p;
    }
    function Y(A) {
      return y(A) === r;
    }
    function K(A) {
      return y(A) === v;
    }
    function q(A) {
      return y(A) === f;
    }
    function _(A) {
      return y(A) === n;
    }
    function D(A) {
      return y(A) === i;
    }
    function T(A) {
      return y(A) === o;
    }
    function ee(A) {
      return y(A) === d;
    }
    ce.AsyncMode = x, ce.ConcurrentMode = I, ce.ContextConsumer = P, ce.ContextProvider = L, ce.Element = j, ce.ForwardRef = O, ce.Fragment = R, ce.Lazy = B, ce.Memo = G, ce.Portal = V, ce.Profiler = X, ce.StrictMode = Q, ce.Suspense = te, ce.isAsyncMode = oe, ce.isConcurrentMode = C, ce.isContextConsumer = $, ce.isContextProvider = H, ce.isElement = W, ce.isForwardRef = F, ce.isFragment = Y, ce.isLazy = K, ce.isMemo = q, ce.isPortal = _, ce.isProfiler = D, ce.isStrictMode = T, ce.isSuspense = ee, ce.isValidElementType = N, ce.typeOf = y;
  }()), ce;
}
var Bo;
function Ga() {
  return Bo || (Bo = 1, process.env.NODE_ENV === "production" ? Tt.exports = pg() : Tt.exports = ug()), Tt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var _n, Vo;
function fg() {
  if (Vo) return _n;
  Vo = 1;
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
      var c = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        l[p] = p;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return _n = o() ? Object.assign : function(i, a) {
    for (var s, c = r(i), l, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var d in s)
        t.call(s, d) && (c[d] = s[d]);
      if (e) {
        l = e(s);
        for (var u = 0; u < l.length; u++)
          n.call(s, l[u]) && (c[l[u]] = s[l[u]]);
      }
    }
    return c;
  }, _n;
}
var Pn, Fo;
function jr() {
  if (Fo) return Pn;
  Fo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pn = e, Pn;
}
var Rn, zo;
function Wa() {
  return zo || (zo = 1, Rn = Function.call.bind(Object.prototype.hasOwnProperty)), Rn;
}
var Tn, Go;
function mg() {
  if (Go) return Tn;
  Go = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = jr(), n = {}, r = Wa();
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
      for (var p in i)
        if (r(i, p)) {
          var d;
          try {
            if (typeof i[p] != "function") {
              var u = Error(
                (c || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw u.name = "Invariant Violation", u;
            }
            d = i[p](a, p, c, s, null, t);
          } catch (v) {
            d = v;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
  }, Tn = o, Tn;
}
var $n, Wo;
function gg() {
  if (Wo) return $n;
  Wo = 1;
  var e = Ga(), t = fg(), n = jr(), r = Wa(), o = mg(), i = function() {
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
  return $n = function(s, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function d(C) {
      var $ = C && (l && C[l] || C[p]);
      if (typeof $ == "function")
        return $;
    }
    var u = "<<anonymous>>", f = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: w(),
      arrayOf: N,
      element: y(),
      elementType: x(),
      instanceOf: I,
      node: O(),
      objectOf: L,
      oneOf: P,
      oneOfType: j,
      shape: B,
      exact: G
    };
    function v(C, $) {
      return C === $ ? C !== 0 || 1 / C === 1 / $ : C !== C && $ !== $;
    }
    function h(C, $) {
      this.message = C, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function b(C) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, H = 0;
      function W(Y, K, q, _, D, T, ee) {
        if (_ = _ || u, T = T || q, ee !== n) {
          if (c) {
            var A = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw A.name = "Invariant Violation", A;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = _ + ":" + q;
            !$[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            H < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + _ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[pe] = !0, H++);
          }
        }
        return K[q] == null ? Y ? K[q] === null ? new h("The " + D + " `" + T + "` is marked as required " + ("in `" + _ + "`, but its value is `null`.")) : new h("The " + D + " `" + T + "` is marked as required in " + ("`" + _ + "`, but its value is `undefined`.")) : null : C(K, q, _, D, T);
      }
      var F = W.bind(null, !1);
      return F.isRequired = W.bind(null, !0), F;
    }
    function E(C) {
      function $(H, W, F, Y, K, q) {
        var _ = H[W], D = Q(_);
        if (D !== C) {
          var T = te(_);
          return new h(
            "Invalid " + Y + " `" + K + "` of type " + ("`" + T + "` supplied to `" + F + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return b($);
    }
    function w() {
      return b(a);
    }
    function N(C) {
      function $(H, W, F, Y, K) {
        if (typeof C != "function")
          return new h("Property `" + K + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var q = H[W];
        if (!Array.isArray(q)) {
          var _ = Q(q);
          return new h("Invalid " + Y + " `" + K + "` of type " + ("`" + _ + "` supplied to `" + F + "`, expected an array."));
        }
        for (var D = 0; D < q.length; D++) {
          var T = C(q, D, F, Y, K + "[" + D + "]", n);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return b($);
    }
    function y() {
      function C($, H, W, F, Y) {
        var K = $[H];
        if (!s(K)) {
          var q = Q(K);
          return new h("Invalid " + F + " `" + Y + "` of type " + ("`" + q + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(C);
    }
    function x() {
      function C($, H, W, F, Y) {
        var K = $[H];
        if (!e.isValidElementType(K)) {
          var q = Q(K);
          return new h("Invalid " + F + " `" + Y + "` of type " + ("`" + q + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(C);
    }
    function I(C) {
      function $(H, W, F, Y, K) {
        if (!(H[W] instanceof C)) {
          var q = C.name || u, _ = oe(H[W]);
          return new h("Invalid " + Y + " `" + K + "` of type " + ("`" + _ + "` supplied to `" + F + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return b($);
    }
    function P(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function $(H, W, F, Y, K) {
        for (var q = H[W], _ = 0; _ < C.length; _++)
          if (v(q, C[_]))
            return null;
        var D = JSON.stringify(C, function(ee, A) {
          var pe = te(A);
          return pe === "symbol" ? String(A) : A;
        });
        return new h("Invalid " + Y + " `" + K + "` of value `" + String(q) + "` " + ("supplied to `" + F + "`, expected one of " + D + "."));
      }
      return b($);
    }
    function L(C) {
      function $(H, W, F, Y, K) {
        if (typeof C != "function")
          return new h("Property `" + K + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var q = H[W], _ = Q(q);
        if (_ !== "object")
          return new h("Invalid " + Y + " `" + K + "` of type " + ("`" + _ + "` supplied to `" + F + "`, expected an object."));
        for (var D in q)
          if (r(q, D)) {
            var T = C(q, D, F, Y, K + "." + D, n);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return b($);
    }
    function j(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var $ = 0; $ < C.length; $++) {
        var H = C[$];
        if (typeof H != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + de(H) + " at index " + $ + "."
          ), a;
      }
      function W(F, Y, K, q, _) {
        for (var D = [], T = 0; T < C.length; T++) {
          var ee = C[T], A = ee(F, Y, K, q, _, n);
          if (A == null)
            return null;
          A.data && r(A.data, "expectedType") && D.push(A.data.expectedType);
        }
        var pe = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new h("Invalid " + q + " `" + _ + "` supplied to " + ("`" + K + "`" + pe + "."));
      }
      return b(W);
    }
    function O() {
      function C($, H, W, F, Y) {
        return V($[H]) ? null : new h("Invalid " + F + " `" + Y + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return b(C);
    }
    function R(C, $, H, W, F) {
      return new h(
        (C || "React class") + ": " + $ + " type `" + H + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function B(C) {
      function $(H, W, F, Y, K) {
        var q = H[W], _ = Q(q);
        if (_ !== "object")
          return new h("Invalid " + Y + " `" + K + "` of type `" + _ + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var D in C) {
          var T = C[D];
          if (typeof T != "function")
            return R(F, Y, K, D, te(T));
          var ee = T(q, D, F, Y, K + "." + D, n);
          if (ee)
            return ee;
        }
        return null;
      }
      return b($);
    }
    function G(C) {
      function $(H, W, F, Y, K) {
        var q = H[W], _ = Q(q);
        if (_ !== "object")
          return new h("Invalid " + Y + " `" + K + "` of type `" + _ + "` " + ("supplied to `" + F + "`, expected `object`."));
        var D = t({}, H[W], C);
        for (var T in D) {
          var ee = C[T];
          if (r(C, T) && typeof ee != "function")
            return R(F, Y, K, T, te(ee));
          if (!ee)
            return new h(
              "Invalid " + Y + " `" + K + "` key `" + T + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(H[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var A = ee(q, T, F, Y, K + "." + T, n);
          if (A)
            return A;
        }
        return null;
      }
      return b($);
    }
    function V(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(V);
          if (C === null || s(C))
            return !0;
          var $ = d(C);
          if ($) {
            var H = $.call(C), W;
            if ($ !== C.entries) {
              for (; !(W = H.next()).done; )
                if (!V(W.value))
                  return !1;
            } else
              for (; !(W = H.next()).done; ) {
                var F = W.value;
                if (F && !V(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function X(C, $) {
      return C === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function Q(C) {
      var $ = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : X($, C) ? "symbol" : $;
    }
    function te(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var $ = Q(C);
      if ($ === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function de(C) {
      var $ = te(C);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function oe(C) {
      return !C.constructor || !C.constructor.name ? u : C.constructor.name;
    }
    return f.checkPropTypes = o, f.resetWarningCache = o.resetWarningCache, f.PropTypes = f, f;
  }, $n;
}
var Mn, qo;
function vg() {
  if (qo) return Mn;
  qo = 1;
  var e = jr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Mn = function() {
    function r(a, s, c, l, p, d) {
      if (d !== e) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw u.name = "Invariant Violation", u;
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
  }, Mn;
}
if (process.env.NODE_ENV !== "production") {
  var hg = Ga(), bg = !0;
  Jn.exports = gg()(hg.isElement, bg);
} else
  Jn.exports = vg()();
var xg = Jn.exports;
const ue = /* @__PURE__ */ Ml(xg);
function Ye(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function s(p) {
      try {
        l(r.next(p));
      } catch (d) {
        a(d);
      }
    }
    function c(p) {
      try {
        l(r.throw(p));
      } catch (d) {
        a(d);
      }
    }
    function l(p) {
      p.done ? i(p.value) : o(p.value).then(s, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}
const yg = /* @__PURE__ */ new Map([
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
  const r = wg(e), { webkitRelativePath: o } = e, i = typeof t == "string" ? t : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && Uo(r, "path", i), Uo(r, "relativePath", i), r;
}
function wg(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), o = yg.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Uo(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const Eg = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function Ng(e) {
  return Ye(this, void 0, void 0, function* () {
    return Ut(e) && Dg(e.dataTransfer) ? Cg(e.dataTransfer, e.type) : Og(e) ? Sg(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? Ig(e) : [];
  });
}
function Dg(e) {
  return Ut(e);
}
function Og(e) {
  return Ut(e) && Ut(e.target);
}
function Ut(e) {
  return typeof e == "object" && e !== null;
}
function Sg(e) {
  return Qn(e.target.files).map((t) => et(t));
}
function Ig(e) {
  return Ye(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => et(n));
  });
}
function Cg(e, t) {
  return Ye(this, void 0, void 0, function* () {
    if (e.items) {
      const n = Qn(e.items).filter((o) => o.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(kg));
      return Ho(qa(r));
    }
    return Ho(Qn(e.files).map((n) => et(n)));
  });
}
function Ho(e) {
  return e.filter((t) => Eg.indexOf(t.name) === -1);
}
function Qn(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function kg(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Yo(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Ua(t) : Yo(e, t);
}
function qa(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? qa(n) : [n]
  ], []);
}
function Yo(e, t) {
  return Ye(this, void 0, void 0, function* () {
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
function Ag(e) {
  return Ye(this, void 0, void 0, function* () {
    return e.isDirectory ? Ua(e) : _g(e);
  });
}
function Ua(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const o = [];
    function i() {
      t.readEntries((a) => Ye(this, void 0, void 0, function* () {
        if (a.length) {
          const s = Promise.all(a.map(Ag));
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
function _g(e) {
  return Ye(this, void 0, void 0, function* () {
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
var Ln = function(e, t) {
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
function Ko(e) {
  return Tg(e) || Rg(e) || Ya(e) || Pg();
}
function Pg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rg(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Tg(e) {
  if (Array.isArray(e)) return Zn(e);
}
function Xo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Jo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xo(Object(n), !0).forEach(function(r) {
      Ha(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ha(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function yt(e, t) {
  return Lg(e) || Mg(e, t) || Ya(e, t) || $g();
}
function $g() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ya(e, t) {
  if (e) {
    if (typeof e == "string") return Zn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zn(e, t);
  }
}
function Zn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Mg(e, t) {
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
function Lg(e) {
  if (Array.isArray(e)) return e;
}
var jg = typeof Ln == "function" ? Ln : Ln.default, Bg = "file-invalid-type", Vg = "file-too-large", Fg = "file-too-small", zg = "too-many-files", Gg = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: Bg,
    message: "File type must be ".concat(r)
  };
}, Qo = function(t) {
  return {
    code: Vg,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Zo = function(t) {
  return {
    code: Fg,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Wg = {
  code: zg,
  message: "Too many files"
};
function qg(e) {
  return e.type === "" && typeof e.getAsFile == "function";
}
function Ka(e, t) {
  var n = e.type === "application/x-moz-file" || jg(e, t) || qg(e);
  return [n, n ? null : Gg(t)];
}
function Xa(e, t, n) {
  if (qe(e.size))
    if (qe(t) && qe(n)) {
      if (e.size > n) return [!1, Qo(n)];
      if (e.size < t) return [!1, Zo(t)];
    } else {
      if (qe(t) && e.size < t) return [!1, Zo(t)];
      if (qe(n) && e.size > n) return [!1, Qo(n)];
    }
  return [!0, null];
}
function qe(e) {
  return e != null;
}
function Ug(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, i = e.multiple, a = e.maxFiles, s = e.validator;
  return !i && t.length > 1 || i && a >= 1 && t.length > a ? !1 : t.every(function(c) {
    var l = Ka(c, n), p = yt(l, 1), d = p[0], u = Xa(c, r, o), f = yt(u, 1), v = f[0], h = s ? s(c) : null;
    return d && v && !h;
  });
}
function Ht(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function ct(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function ei(e) {
  e.preventDefault();
}
function Hg(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Yg(e) {
  return e.indexOf("Edge/") !== -1;
}
function Kg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Hg(e) || Yg(e);
}
function Te() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return t.some(function(s) {
      return !Ht(r) && s && s.apply(void 0, [r].concat(i)), Ht(r);
    });
  };
}
function Xg() {
  return "showOpenFilePicker" in window;
}
function Jg(e) {
  if (qe(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = yt(n, 2), o = r[0], i = r[1], a = !0;
      return Ja(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(Qa)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(n, r) {
      var o = yt(r, 2), i = o[0], a = o[1];
      return Jo(Jo({}, n), {}, Ha({}, i, a));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function Qg(e) {
  if (qe(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = yt(n, 2), o = r[0], i = r[1];
      return [].concat(Ko(t), [o], Ko(i));
    }, []).filter(function(t) {
      return Ja(t) || Qa(t);
    }).join(",");
}
function Zg(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function ev(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Ja(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Qa(e) {
  return /^.*\.[\w]+$/.test(e);
}
var tv = ["children"], nv = ["open"], rv = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], ov = ["refKey", "onChange", "onClick"];
function ti(e) {
  return sv(e) || av(e) || Za(e) || iv();
}
function iv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function av(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function sv(e) {
  if (Array.isArray(e)) return er(e);
}
function jn(e, t) {
  return dv(e) || lv(e, t) || Za(e, t) || cv();
}
function cv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Za(e, t) {
  if (e) {
    if (typeof e == "string") return er(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return er(e, t);
  }
}
function er(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function lv(e, t) {
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
function dv(e) {
  if (Array.isArray(e)) return e;
}
function ni(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ni(Object(n), !0).forEach(function(r) {
      tr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ni(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function tr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Yt(e, t) {
  if (e == null) return {};
  var n = pv(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function pv(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Br = /* @__PURE__ */ ie(function(e, t) {
  var n = e.children, r = Yt(e, tv), o = ts(r), i = o.open, a = Yt(o, nv);
  return cs(t, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ ve.createElement(ls, null, n(ge(ge({}, a), {}, {
    open: i
  })));
});
Br.displayName = "Dropzone";
var es = {
  disabled: !1,
  getFilesFromEvent: Ng,
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
Br.defaultProps = es;
Br.propTypes = {
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
  children: ue.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: ue.objectOf(ue.arrayOf(ue.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: ue.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: ue.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: ue.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: ue.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: ue.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: ue.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: ue.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: ue.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: ue.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: ue.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: ue.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: ue.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: ue.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: ue.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: ue.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: ue.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: ue.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: ue.func,
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
  onDrop: ue.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: ue.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: ue.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: ue.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: ue.func
};
var nr = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  isDragGlobal: !1,
  acceptedFiles: [],
  fileRejections: []
};
function ts() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = ge(ge({}, es), e), n = t.accept, r = t.disabled, o = t.getFilesFromEvent, i = t.maxSize, a = t.minSize, s = t.multiple, c = t.maxFiles, l = t.onDragEnter, p = t.onDragLeave, d = t.onDragOver, u = t.onDrop, f = t.onDropAccepted, v = t.onDropRejected, h = t.onFileDialogCancel, b = t.onFileDialogOpen, E = t.useFsAccessApi, w = t.autoFocus, N = t.preventDropOnDocument, y = t.noClick, x = t.noKeyboard, I = t.noDrag, P = t.noDragEventsBubbling, L = t.onError, j = t.validator, O = Me(function() {
    return Qg(n);
  }, [n]), R = Me(function() {
    return Jg(n);
  }, [n]), B = Me(function() {
    return typeof b == "function" ? b : ri;
  }, [b]), G = Me(function() {
    return typeof h == "function" ? h : ri;
  }, [h]), V = Z(null), X = Z(null), Q = ss(uv, nr), te = jn(Q, 2), de = te[0], oe = te[1], C = de.isFocused, $ = de.isFileDialogActive, H = Z(typeof window < "u" && window.isSecureContext && E && Xg()), W = function() {
    !H.current && $ && setTimeout(function() {
      if (X.current) {
        var U = X.current.files;
        U.length || (oe({
          type: "closeDialog"
        }), G());
      }
    }, 300);
  };
  be(function() {
    return window.addEventListener("focus", W, !1), function() {
      window.removeEventListener("focus", W, !1);
    };
  }, [X, $, G, H]);
  var F = Z([]), Y = Z([]), K = function(U) {
    V.current && V.current.contains(U.target) || (U.preventDefault(), F.current = []);
  };
  be(function() {
    return N && (document.addEventListener("dragover", ei, !1), document.addEventListener("drop", K, !1)), function() {
      N && (document.removeEventListener("dragover", ei), document.removeEventListener("drop", K));
    };
  }, [V, N]), be(function() {
    var M = function(Re) {
      Y.current = [].concat(ti(Y.current), [Re.target]), ct(Re) && oe({
        isDragGlobal: !0,
        type: "setDragGlobal"
      });
    }, U = function(Re) {
      Y.current = Y.current.filter(function($e) {
        return $e !== Re.target && $e !== null;
      }), !(Y.current.length > 0) && oe({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, he = function() {
      Y.current = [], oe({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, xe = function() {
      Y.current = [], oe({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    };
    return document.addEventListener("dragenter", M, !1), document.addEventListener("dragleave", U, !1), document.addEventListener("dragend", he, !1), document.addEventListener("drop", xe, !1), function() {
      document.removeEventListener("dragenter", M), document.removeEventListener("dragleave", U), document.removeEventListener("dragend", he), document.removeEventListener("drop", xe);
    };
  }, [V]), be(function() {
    return !r && w && V.current && V.current.focus(), function() {
    };
  }, [V, w, r]);
  var q = J(function(M) {
    L ? L(M) : console.error(M);
  }, [L]), _ = J(function(M) {
    M.preventDefault(), M.persist(), kt(M), F.current = [].concat(ti(F.current), [M.target]), ct(M) && Promise.resolve(o(M)).then(function(U) {
      if (!(Ht(M) && !P)) {
        var he = U.length, xe = he > 0 && Ug({
          files: U,
          accept: O,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: c,
          validator: j
        }), Ee = he > 0 && !xe;
        oe({
          isDragAccept: xe,
          isDragReject: Ee,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), l && l(M);
      }
    }).catch(function(U) {
      return q(U);
    });
  }, [o, l, q, P, O, a, i, s, c, j]), D = J(function(M) {
    M.preventDefault(), M.persist(), kt(M);
    var U = ct(M);
    if (U && M.dataTransfer)
      try {
        M.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return U && d && d(M), !1;
  }, [d, P]), T = J(function(M) {
    M.preventDefault(), M.persist(), kt(M);
    var U = F.current.filter(function(xe) {
      return V.current && V.current.contains(xe);
    }), he = U.indexOf(M.target);
    he !== -1 && U.splice(he, 1), F.current = U, !(U.length > 0) && (oe({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), ct(M) && p && p(M));
  }, [V, p, P]), ee = J(function(M, U) {
    var he = [], xe = [];
    M.forEach(function(Ee) {
      var Re = Ka(Ee, O), $e = jn(Re, 2), on = $e[0], an = $e[1], sn = Xa(Ee, a, i), At = jn(sn, 2), cn = At[0], ln = At[1], dn = j ? j(Ee) : null;
      if (on && cn && !dn)
        he.push(Ee);
      else {
        var pn = [an, ln];
        dn && (pn = pn.concat(dn)), xe.push({
          file: Ee,
          errors: pn.filter(function(is) {
            return is;
          })
        });
      }
    }), (!s && he.length > 1 || s && c >= 1 && he.length > c) && (he.forEach(function(Ee) {
      xe.push({
        file: Ee,
        errors: [Wg]
      });
    }), he.splice(0)), oe({
      acceptedFiles: he,
      fileRejections: xe,
      isDragReject: xe.length > 0,
      type: "setFiles"
    }), u && u(he, xe, U), xe.length > 0 && v && v(xe, U), he.length > 0 && f && f(he, U);
  }, [oe, s, O, a, i, c, u, f, v, j]), A = J(function(M) {
    M.preventDefault(), M.persist(), kt(M), F.current = [], ct(M) && Promise.resolve(o(M)).then(function(U) {
      Ht(M) && !P || ee(U, M);
    }).catch(function(U) {
      return q(U);
    }), oe({
      type: "reset"
    });
  }, [o, ee, q, P]), pe = J(function() {
    if (H.current) {
      oe({
        type: "openDialog"
      }), B();
      var M = {
        multiple: s,
        types: R
      };
      window.showOpenFilePicker(M).then(function(U) {
        return o(U);
      }).then(function(U) {
        ee(U, null), oe({
          type: "closeDialog"
        });
      }).catch(function(U) {
        Zg(U) ? (G(U), oe({
          type: "closeDialog"
        })) : ev(U) ? (H.current = !1, X.current ? (X.current.value = null, X.current.click()) : q(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : q(U);
      });
      return;
    }
    X.current && (oe({
      type: "openDialog"
    }), B(), X.current.value = null, X.current.click());
  }, [oe, B, G, E, ee, q, R, s]), ze = J(function(M) {
    !V.current || !V.current.isEqualNode(M.target) || (M.key === " " || M.key === "Enter" || M.keyCode === 32 || M.keyCode === 13) && (M.preventDefault(), pe());
  }, [V, pe]), ot = J(function() {
    oe({
      type: "focus"
    });
  }, []), Vr = J(function() {
    oe({
      type: "blur"
    });
  }, []), Fr = J(function() {
    y || (Kg() ? setTimeout(pe, 0) : pe());
  }, [y, pe]), Ke = function(U) {
    return r ? null : U;
  }, rn = function(U) {
    return x ? null : Ke(U);
  }, Ct = function(U) {
    return I ? null : Ke(U);
  }, kt = function(U) {
    P && U.stopPropagation();
  }, ns = Me(function() {
    return function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, U = M.refKey, he = U === void 0 ? "ref" : U, xe = M.role, Ee = M.onKeyDown, Re = M.onFocus, $e = M.onBlur, on = M.onClick, an = M.onDragEnter, sn = M.onDragOver, At = M.onDragLeave, cn = M.onDrop, ln = Yt(M, rv);
      return ge(ge(tr({
        onKeyDown: rn(Te(Ee, ze)),
        onFocus: rn(Te(Re, ot)),
        onBlur: rn(Te($e, Vr)),
        onClick: Ke(Te(on, Fr)),
        onDragEnter: Ct(Te(an, _)),
        onDragOver: Ct(Te(sn, D)),
        onDragLeave: Ct(Te(At, T)),
        onDrop: Ct(Te(cn, A)),
        role: typeof xe == "string" && xe !== "" ? xe : "presentation"
      }, he, V), !r && !x ? {
        tabIndex: 0
      } : {}), ln);
    };
  }, [V, ze, ot, Vr, Fr, _, D, T, A, x, I, r]), rs = J(function(M) {
    M.stopPropagation();
  }, []), os = Me(function() {
    return function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, U = M.refKey, he = U === void 0 ? "ref" : U, xe = M.onChange, Ee = M.onClick, Re = Yt(M, ov), $e = tr({
        accept: O,
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
        onChange: Ke(Te(xe, A)),
        onClick: Ke(Te(Ee, rs)),
        tabIndex: -1
      }, he, X);
      return ge(ge({}, $e), Re);
    };
  }, [X, n, s, A, r]);
  return ge(ge({}, de), {}, {
    isFocused: C && !r,
    getRootProps: ns,
    getInputProps: os,
    rootRef: V,
    inputRef: X,
    open: Ke(pe)
  });
}
function uv(e, t) {
  switch (t.type) {
    case "focus":
      return ge(ge({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return ge(ge({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return ge(ge({}, nr), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return ge(ge({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return ge(ge({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return ge(ge({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "setDragGlobal":
      return ge(ge({}, e), {}, {
        isDragGlobal: t.isDragGlobal
      });
    case "reset":
      return ge({}, nr);
    default:
      return e;
  }
}
function ri() {
}
const fv = (e) => e.startsWith("image/") ? Ys : e.startsWith("video/") ? mc : e.startsWith("audio/") ? ac : e.includes("pdf") || e.includes("document") ? Fs : Gs, oi = (e) => {
  if (e === 0) return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB", "GB"], r = Math.floor(Math.log(e) / Math.log(t));
  return parseFloat((e / Math.pow(t, r)).toFixed(2)) + " " + n[r];
};
function Nv({
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
  const [l, p] = fe([]), [d, u] = fe([]), f = J(
    (N, y) => {
      if (N.length > 0) {
        const x = i ? [...l, ...N] : N;
        if (p(x), e(x), c) {
          const I = N.filter((P) => P.type.startsWith("image/")).map((P) => ({
            file: P,
            url: URL.createObjectURL(P)
          }));
          u((P) => i ? [...P, ...I] : I);
        }
      }
      y.length > 0 && t && t(y);
    },
    [l, i, e, t, c]
  ), v = (N) => {
    const y = l.filter((I) => I !== N);
    p(y), e(y);
    const x = d.find((I) => I.file === N);
    x && (URL.revokeObjectURL(x.url), u((I) => I.filter((P) => P.file !== N)));
  }, { getRootProps: h, getInputProps: b, isDragActive: E, isDragReject: w } = ts({
    onDrop: f,
    accept: n,
    maxFiles: r,
    maxSize: o,
    multiple: i,
    disabled: a
  });
  return /* @__PURE__ */ k("div", { className: S("space-y-4", s), children: [
    /* @__PURE__ */ k(
      "div",
      {
        ...h(),
        className: S(
          "flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl cursor-pointer",
          "transition-all duration-200 ease-out",
          "bg-gradient-to-b from-neutral-50 to-white",
          "border-primary/60 hover:border-primary",
          E && !w && "border-primary bg-gradient-to-b from-primary/5 to-accent/5 scale-[1.01]",
          w && "border-red-400 bg-red-50",
          a && "opacity-50 cursor-not-allowed"
        ),
        children: [
          /* @__PURE__ */ m("input", { ...b() }),
          /* @__PURE__ */ m(
            "div",
            {
              className: S(
                "w-16 h-16 mb-4 rounded-2xl flex items-center justify-center",
                "bg-gradient-to-br from-primary/10 to-accent/10",
                "transition-transform duration-200",
                E && "scale-110"
              ),
              children: /* @__PURE__ */ m(
                uc,
                {
                  className: S(
                    "w-8 h-8 text-primary",
                    E && "animate-bounce"
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ m("p", { className: "text-lg font-medium text-neutral-700 mb-1", children: E ? w ? "Archivo no permitido" : "Suelta los archivos aquí" : "Arrastra archivos aquí" }),
          /* @__PURE__ */ m("p", { className: "text-sm text-neutral-500 mb-3", children: "o haz clic para seleccionar" }),
          /* @__PURE__ */ k("p", { className: "text-xs text-neutral-400", children: [
            "PNG, JPG hasta ",
            oi(o)
          ] })
        ]
      }
    ),
    l.length > 0 && /* @__PURE__ */ k("div", { className: "space-y-2", children: [
      /* @__PURE__ */ k("p", { className: "text-sm font-medium text-neutral-700", children: [
        "Archivos seleccionados (",
        l.length,
        ")"
      ] }),
      /* @__PURE__ */ m("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: l.map((N, y) => {
        const x = fv(N.type), I = d.find((P) => P.file === N);
        return /* @__PURE__ */ k(
          "div",
          {
            className: S(
              "group flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-xl",
              "transition-all duration-200",
              "hover:shadow-md hover:border-primary/30"
            ),
            children: [
              I ? /* @__PURE__ */ m("div", { className: "w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100", children: /* @__PURE__ */ m(
                "img",
                {
                  src: I.url,
                  alt: N.name,
                  className: "w-full h-full object-cover"
                }
              ) }) : /* @__PURE__ */ m(
                "div",
                {
                  className: S(
                    "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
                    "bg-gradient-to-br from-primary/10 to-accent/10"
                  ),
                  children: /* @__PURE__ */ m(x, { className: "w-6 h-6 text-primary" })
                }
              ),
              /* @__PURE__ */ k("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ m("p", { className: "text-sm font-medium text-neutral-800 truncate", children: N.name }),
                /* @__PURE__ */ m("p", { className: "text-xs text-neutral-500", children: oi(N.size) })
              ] }),
              /* @__PURE__ */ m(
                "button",
                {
                  type: "button",
                  onClick: (P) => {
                    P.stopPropagation(), v(N);
                  },
                  className: S(
                    "p-1.5 rounded-lg opacity-0 group-hover:opacity-100",
                    "text-neutral-400 hover:text-red-500 hover:bg-red-50",
                    "transition-all duration-200"
                  ),
                  children: /* @__PURE__ */ m(tt, { className: "w-4 h-4" })
                }
              )
            ]
          },
          `${N.name}-${y}`
        );
      }) })
    ] })
  ] });
}
const mv = {
  default: "bg-neutral-100 text-neutral-700",
  primary: "bg-primary/10 text-primary",
  success: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700"
};
function Dv({ columns: e, onCardMove: t, className: n }) {
  return /* @__PURE__ */ m(Pr, { onDragEnd: (o) => {
    const { source: i, destination: a, draggableId: s } = o;
    a && (i.droppableId === a.droppableId && i.index === a.index || t(
      s,
      i.droppableId,
      a.droppableId,
      i.index,
      a.index
    ));
  }, children: /* @__PURE__ */ m("div", { className: S("flex gap-4 overflow-x-auto pb-4", n), children: e.map((o) => /* @__PURE__ */ k(
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
            children: /* @__PURE__ */ k("div", { className: "flex items-center justify-between", children: [
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
        /* @__PURE__ */ m(Lr, { droppableId: o.id, children: (i, a) => /* @__PURE__ */ k(
          "div",
          {
            ref: i.innerRef,
            ...i.droppableProps,
            className: S(
              "p-3 min-h-[200px] space-y-3 transition-colors duration-200",
              a.isDraggingOver && "bg-primary/5"
            ),
            children: [
              o.cards.map((s, c) => /* @__PURE__ */ m(Tr, { draggableId: s.id, index: c, children: (l, p) => /* @__PURE__ */ k(
                "div",
                {
                  ref: l.innerRef,
                  ...l.draggableProps,
                  className: S(
                    "group bg-white rounded-lg border border-neutral-200 overflow-hidden",
                    "transition-all duration-200",
                    "hover:shadow-md hover:border-primary/30",
                    p.isDragging && "shadow-xl ring-2 ring-primary/30 rotate-2"
                  ),
                  style: {
                    ...l.draggableProps.style
                  },
                  children: [
                    /* @__PURE__ */ k(
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
                                p.isDragging && "text-primary"
                              )
                            }
                          ),
                          /* @__PURE__ */ m("span", { className: "font-medium text-sm text-neutral-800 truncate", children: s.title })
                        ]
                      }
                    ),
                    /* @__PURE__ */ k("div", { className: "p-3", children: [
                      s.description && /* @__PURE__ */ m("p", { className: "text-sm text-neutral-600 mb-2 line-clamp-2", children: s.description }),
                      s.tags && s.tags.length > 0 && /* @__PURE__ */ m("div", { className: "flex flex-wrap gap-1", children: s.tags.map((d, u) => /* @__PURE__ */ m(
                        "span",
                        {
                          className: S(
                            "px-2 py-0.5 text-xs font-medium rounded-full",
                            mv[d.variant || "default"]
                          ),
                          children: d.label
                        },
                        u
                      )) })
                    ] }),
                    /* @__PURE__ */ m(
                      "div",
                      {
                        className: S(
                          "absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-200",
                          "bg-gradient-to-r from-accent via-primary to-primary",
                          p.isDragging ? "opacity-100" : "opacity-0 group-hover:opacity-50"
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
function Ov({
  items: e,
  onReorder: t,
  className: n,
  cardClassName: r,
  droppableId: o = "draggable-cards",
  direction: i = "vertical"
}) {
  return /* @__PURE__ */ m(Pr, { onDragEnd: (s) => {
    if (!s.destination) return;
    const c = Array.from(e), [l] = c.splice(s.source.index, 1);
    c.splice(s.destination.index, 0, l), t(c);
  }, children: /* @__PURE__ */ m(Lr, { droppableId: o, direction: i, children: (s) => /* @__PURE__ */ k(
    "div",
    {
      ref: s.innerRef,
      ...s.droppableProps,
      className: S(
        i === "horizontal" ? "flex gap-4" : "space-y-4",
        n
      ),
      children: [
        e.map((c, l) => /* @__PURE__ */ m(Tr, { draggableId: c.id, index: l, children: (p, d) => /* @__PURE__ */ k(
          "div",
          {
            ref: p.innerRef,
            ...p.draggableProps,
            className: S(
              "group relative bg-white border border-neutral-200 rounded-xl overflow-hidden",
              "transition-all duration-200 ease-out",
              "hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5",
              d.isDragging && "shadow-2xl ring-2 ring-primary/30 scale-[1.02] rotate-1",
              r
            ),
            style: {
              ...p.draggableProps.style
            },
            children: [
              c.title ? /* @__PURE__ */ k(
                "div",
                {
                  ...p.dragHandleProps,
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
                /* @__PURE__ */ k(
                  "div",
                  {
                    ...p.dragHandleProps,
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
function Sv({
  title: e,
  children: t,
  className: n,
  isDragging: r = !1,
  dragHandleProps: o
}) {
  return /* @__PURE__ */ k(
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
        e ? /* @__PURE__ */ k(
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
          /* @__PURE__ */ k(
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
  ol as Alert,
  Vn as Avatar,
  Zc as Badge,
  al as Breadcrumb,
  Lt as Button,
  qc as Card,
  Hc as CardBody,
  Kc as CardFooter,
  Uc as CardHeader,
  gi as Checkbox,
  El as ConfirmModal,
  Ov as DraggableCard,
  mi as Dropdown,
  ir as DropdownMenu,
  Nv as FileDropzone,
  xi as Header,
  xv as I18nProvider,
  jt as Input,
  Dv as KanbanBoard,
  il as Layout,
  Il as LoginPage,
  Ni as Modal,
  $c as MultiSelect,
  bi as NotificationMenu,
  yl as Pagination,
  Gc as Radio,
  Cc as Select,
  sl as SidePanel,
  hi as Sidebar,
  Sv as SingleDraggableCard,
  Ev as SortableList,
  ul as TabPanel,
  bv as Table,
  pl as Tabs,
  Vc as Textarea,
  Di as Toast,
  Sl as ToastContainer,
  yv as ToastProvider,
  S as cn,
  Kt as createTranslator,
  fl as defaultMessages,
  Ei as useI18n,
  wv as useToast
};
//# sourceMappingURL=index.js.map
