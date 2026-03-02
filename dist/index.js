import { jsxs as I, jsx as m, Fragment as Ve } from "react/jsx-runtime";
import * as ne from "react";
import me, { forwardRef as re, createElement as Ln, useState as he, useRef as Q, useCallback as Z, useMemo as je, useEffect as xe, useContext as wt, createContext as nr, useLayoutEffect as as, useReducer as ss, useImperativeHandle as cs, Fragment as ls } from "react";
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
const gs = re(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, c) => Ln(
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
      ...a.map(([d, p]) => Ln(d, p)),
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
const oe = (e, t) => {
  const n = re(
    ({ className: r, ...o }, i) => Ln(gs, {
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
], hs = oe("arrow-down", vs);
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
], xs = oe("arrow-up-down", bs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], ws = oe("arrow-up", ys);
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
], Ns = oe("bell", Es);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Os = oe("check", Ds);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], rr = oe("chevron-down", Ss);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Cs = oe("chevron-left", Is);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], or = oe("chevron-right", ks);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], As = oe("chevrons-left", _s);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], Rs = oe("chevrons-right", Ps);
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
], si = oe("circle-alert", Ts);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], ci = oe("circle-check-big", $s);
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
], js = oe("eye-off", Ms);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Bs = oe("eye", Ls);
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
], Fs = oe("file-text", Vs);
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
], Gs = oe("file", zs);
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
], Xe = oe("grip-vertical", Ws);
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
], Us = oe("house", qs);
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
], Ys = oe("image", Hs);
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
], li = oe("info", Ks);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Js = oe("loader-circle", Xs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Qs = oe("lock", Zs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], tc = oe("mail", ec);
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
], di = oe("menu", nc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = [["path", { d: "M5 12h14", key: "1ays0h" }]], oc = oe("minus", rc);
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
], ac = oe("music", ic);
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
], cc = oe("panel-left-close", sc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], pi = oe("search", lc);
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
], ui = oe("triangle-alert", dc);
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
], uc = oe("upload", pc);
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
], mc = oe("video", fc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], tt = oe("x", gc);
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
function O(...e) {
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
}, Mt = re(
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
    children: d,
    ...p
  }, l) => {
    const u = s || n;
    return /* @__PURE__ */ I(
      "button",
      {
        ref: l,
        disabled: u,
        className: O(
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
          d,
          !n && i
        ]
      }
    );
  }
);
Mt.displayName = "Button";
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
}, jt = re(
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
    id: d,
    ...p
  }, l) => {
    const u = d || `input-${Math.random().toString(36).slice(2, 9)}`, f = !!r;
    return /* @__PURE__ */ I("div", { className: O("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ m(
        "label",
        {
          htmlFor: u,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ I("div", { className: "relative", children: [
        o && /* @__PURE__ */ m("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400", children: o }),
        /* @__PURE__ */ m(
          "input",
          {
            ref: l,
            id: u,
            disabled: s,
            className: O(
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
}, Oc = re(
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
    className: d,
    id: p,
    ...l
  }, u) => {
    const f = p || `select-${Math.random().toString(36).slice(2, 9)}`, v = !!r;
    return /* @__PURE__ */ I("div", { className: O("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ m(
        "label",
        {
          htmlFor: f,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ I("div", { className: "relative", children: [
        c && /* @__PURE__ */ m("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none", children: c }),
        /* @__PURE__ */ I(
          "select",
          {
            ref: u,
            id: f,
            disabled: s,
            className: O(
              // Base styles
              "w-full rounded-md border bg-white appearance-none cursor-pointer",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              Nc[e],
              // Icon padding
              c && Dc[e],
              // Border color
              v ? "border-error focus:ring-error focus:border-error" : "border-neutral-300",
              // Disabled state
              s && "bg-neutral-100 cursor-not-allowed opacity-60",
              d
            ),
            "aria-invalid": v,
            "aria-describedby": v ? `${f}-error` : n ? `${f}-helper` : void 0,
            ...l,
            children: [
              i && /* @__PURE__ */ m("option", { value: "", disabled: !0, children: i }),
              o.map((h) => /* @__PURE__ */ m("option", { value: h.value, disabled: h.disabled, children: h.label }, h.value))
            ]
          }
        ),
        /* @__PURE__ */ m(
          rr,
          {
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none",
            size: e === "sm" ? 14 : e === "lg" ? 20 : 16
          }
        )
      ] }),
      v && /* @__PURE__ */ m("p", { id: `${f}-error`, className: "text-sm text-error", children: r }),
      !v && n && /* @__PURE__ */ m("p", { id: `${f}-helper`, className: "text-sm text-neutral-500", children: n })
    ] });
  }
);
Oc.displayName = "Select";
const Sc = {
  sm: "min-h-[34px] px-3 py-1 text-sm",
  md: "min-h-[42px] px-4 py-1.5 text-base",
  lg: "min-h-[50px] px-4 py-2 text-lg"
}, Ic = {
  sm: "px-1.5 py-0.5 text-xs gap-0.5",
  md: "px-2 py-0.5 text-sm gap-1",
  lg: "px-2.5 py-1 text-sm gap-1"
}, Cc = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, kc = {
  sm: 12,
  md: 14,
  lg: 14
}, _c = {
  sm: 14,
  md: 16,
  lg: 20
}, Ac = {
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
}, Pc = re(
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
    fullWidth: d = !1,
    disabled: p = !1,
    maxItems: l,
    searchable: u = !0,
    leftIcon: f,
    tagColor: v = "primary",
    className: h,
    id: x
  }, E) => {
    const N = x || `multiselect-${Math.random().toString(36).slice(2, 9)}`, D = !!s, y = t !== void 0, [b, S] = he(n), A = y ? t : b, [$, j] = he(""), [w, M] = he(!1), [B, K] = he(-1), G = Q(null), X = Q(null), J = Q(null), ee = Z(
      (_) => {
        y || S(_), r == null || r(_);
      },
      [y, r]
    ), pe = je(() => e.filter((_) => {
      const P = A.includes(_.value), V = !$ || _.label.toLowerCase().includes($.toLowerCase());
      return !P && V;
    }), [e, A, $]), ie = l === void 0 || A.length < l, C = Z(
      (_) => {
        var ae;
        if (!ie || p) return;
        const P = e.find((k) => k.value === _);
        if (P != null && P.disabled) return;
        const V = [...A, _];
        ee(V), j(""), K(-1), (ae = X.current) == null || ae.focus();
      },
      [ie, p, e, A, ee]
    ), R = Z(
      (_, P) => {
        var ae;
        if (P == null || P.stopPropagation(), p) return;
        const V = A.filter((k) => k !== _);
        ee(V), (ae = X.current) == null || ae.focus();
      },
      [p, A, ee]
    ), q = Z(
      (_, P) => {
        const V = pe.length;
        if (V === 0) return -1;
        for (let ae = 0; ae < V; ae++) {
          const k = (_ + P * (ae + 1) + V) % V;
          if (!pe[k].disabled) return k;
        }
        return -1;
      },
      [pe]
    ), U = Z(() => pe.findIndex((_) => !_.disabled), [pe]), F = Z(
      (_) => {
        if (!p)
          switch (_.key) {
            case "ArrowDown": {
              _.preventDefault(), w ? K((P) => q(P, 1)) : (M(!0), K(U()));
              break;
            }
            case "ArrowUp": {
              _.preventDefault(), w && K((P) => q(P, -1));
              break;
            }
            case "Enter": {
              if (_.preventDefault(), w && B >= 0 && B < pe.length) {
                const P = pe[B];
                P.disabled || C(P.value);
              } else w || M(!0);
              break;
            }
            case "Backspace": {
              if ($ === "" && A.length > 0) {
                const P = A[A.length - 1];
                R(P);
              }
              break;
            }
            case "Escape": {
              _.preventDefault(), M(!1), K(-1);
              break;
            }
          }
      },
      [
        p,
        w,
        B,
        C,
        $,
        A,
        R,
        q,
        U
      ]
    );
    xe(() => {
      const _ = (P) => {
        G.current && !G.current.contains(P.target) && (M(!1), K(-1), j(""));
      };
      return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
    }, []), xe(() => {
      var _;
      B >= 0 && J.current && ((_ = J.current.querySelectorAll('[role="option"]')[B]) == null || _.scrollIntoView({ block: "nearest" }));
    }, [B]);
    const Y = () => {
      var _;
      p || ((_ = X.current) == null || _.focus(), M(!0));
    }, H = (_) => {
      var P;
      return ((P = e.find((V) => V.value === _)) == null ? void 0 : P.label) ?? _;
    }, W = (_) => {
      var P;
      return ((P = e.find((V) => V.value === _)) == null ? void 0 : P.color) ?? v;
    };
    return /* @__PURE__ */ I("div", { ref: E, className: O("flex flex-col gap-1.5", d && "w-full"), children: [
      i && /* @__PURE__ */ m("label", { htmlFor: `${N}-input`, className: "text-sm font-medium text-neutral-700", children: i }),
      /* @__PURE__ */ I("div", { ref: G, className: "relative", children: [
        f && /* @__PURE__ */ m("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10", children: f }),
        /* @__PURE__ */ I(
          "div",
          {
            onClick: Y,
            className: O(
              // Base styles
              "flex flex-wrap items-center gap-1.5 w-full rounded-md border bg-white cursor-text",
              "transition-colors duration-200",
              // Size styles
              Sc[o],
              // Left icon padding
              f && Cc[o],
              // Right padding for chevron
              "pr-8",
              // Focus ring (applied when dropdown is open)
              w && !D && "ring-2 ring-primary border-primary",
              w && D && "ring-2 ring-error border-error",
              // Border color
              D ? "border-error" : "border-neutral-300",
              // Disabled state
              p && "bg-neutral-100 cursor-not-allowed opacity-60",
              h
            ),
            "aria-invalid": D,
            "aria-describedby": D ? `${N}-error` : a ? `${N}-helper` : void 0,
            children: [
              A.map((_) => {
                const P = Ac[W(_)];
                return /* @__PURE__ */ I(
                  "span",
                  {
                    className: O(
                      "inline-flex items-center rounded-md font-medium",
                      "transition-colors duration-150",
                      P.base,
                      !p && P.hover,
                      Ic[o]
                    ),
                    children: [
                      H(_),
                      !p && /* @__PURE__ */ m(
                        "button",
                        {
                          type: "button",
                          onClick: (V) => R(_, V),
                          className: O(
                            "inline-flex items-center justify-center rounded-sm transition-colors",
                            P.hover
                          ),
                          "aria-label": `Remove ${H(_)}`,
                          tabIndex: -1,
                          children: /* @__PURE__ */ m(tt, { size: kc[o] })
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
                  id: `${N}-input`,
                  type: "text",
                  value: $,
                  onChange: (_) => {
                    j(_.target.value), w || M(!0), K(0);
                  },
                  onFocus: () => {
                    p || M(!0);
                  },
                  onKeyDown: F,
                  placeholder: A.length === 0 ? c : "",
                  disabled: p,
                  className: O(
                    "flex-1 min-w-[60px] outline-none bg-transparent",
                    "placeholder:text-neutral-400",
                    p && "cursor-not-allowed"
                  ),
                  role: "combobox",
                  "aria-expanded": w,
                  "aria-controls": `${N}-listbox`,
                  "aria-activedescendant": B >= 0 ? `${N}-option-${B}` : void 0,
                  "aria-autocomplete": "list",
                  autoComplete: "off"
                }
              ) : /* @__PURE__ */ I(Ve, { children: [
                A.length === 0 && /* @__PURE__ */ m("span", { className: "text-neutral-400", children: c }),
                /* @__PURE__ */ m(
                  "input",
                  {
                    ref: X,
                    id: `${N}-input`,
                    className: "absolute opacity-0 w-0 h-0",
                    onFocus: () => {
                      p || M(!0);
                    },
                    onKeyDown: F,
                    disabled: p,
                    tabIndex: 0,
                    role: "combobox",
                    "aria-expanded": w,
                    "aria-controls": `${N}-listbox`,
                    "aria-activedescendant": B >= 0 ? `${N}-option-${B}` : void 0,
                    readOnly: !0
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ m(
          rr,
          {
            className: O(
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-200",
              w && "rotate-180"
            ),
            size: _c[o]
          }
        ),
        w && /* @__PURE__ */ m(
          "ul",
          {
            ref: J,
            id: `${N}-listbox`,
            role: "listbox",
            "aria-multiselectable": "true",
            className: O(
              "absolute z-50 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: pe.length === 0 ? /* @__PURE__ */ m("li", { className: "px-4 py-2 text-sm text-neutral-400", children: $ ? "No matching options" : "No options available" }) : pe.map((_, P) => /* @__PURE__ */ m(
              "li",
              {
                id: `${N}-option-${P}`,
                role: "option",
                "aria-selected": A.includes(_.value),
                "aria-disabled": _.disabled || !ie,
                onClick: () => {
                  !_.disabled && ie && C(_.value);
                },
                className: O(
                  "px-4 py-2 text-sm transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  _.disabled || !ie ? "text-neutral-300 cursor-not-allowed opacity-50 select-none" : O(
                    "cursor-pointer",
                    P === B ? "bg-primary/10 text-primary" : "text-neutral-700 hover:bg-neutral-50"
                  )
                ),
                children: _.label
              },
              _.value
            ))
          }
        )
      ] }),
      D && /* @__PURE__ */ m("p", { id: `${N}-error`, className: "text-sm text-error", children: s }),
      !D && a && /* @__PURE__ */ m("p", { id: `${N}-helper`, className: "text-sm text-neutral-500", children: a })
    ] });
  }
);
Pc.displayName = "MultiSelect";
const Rc = {
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
function Tc(e, t) {
  return e.startsWith("bottom") ? { marginTop: t } : e.startsWith("top") ? { marginBottom: t } : e.startsWith("left") ? { marginRight: t } : e.startsWith("right") ? { marginLeft: t } : {};
}
const mi = re(
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
    className: d,
    ...p
  }, l) => {
    const u = i !== void 0, [f, v] = he(!1), h = u ? i : f, x = Q(null), E = Q(null), N = Q(null), D = Z(
      ($) => {
        u || v($), a == null || a($);
      },
      [u, a]
    ), y = Z(() => D(!1), [D]), b = Z(() => {
      o || D(!h);
    }, [o, h, D]), S = Z(
      ($) => {
        var j;
        $.key === "Escape" && ($.preventDefault(), y(), (j = N.current) == null || j.focus()), $.key === "Tab" && y();
      },
      [y]
    );
    xe(() => {
      const $ = (j) => {
        x.current && !x.current.contains(j.target) && y();
      };
      return document.addEventListener("mousedown", $), () => document.removeEventListener("mousedown", $);
    }, [y]);
    const A = `dropdown-${Q(Math.random().toString(36).slice(2, 9)).current}`;
    return /* @__PURE__ */ I(
      "div",
      {
        ref: x,
        className: O("relative inline-flex items-center", d),
        ...p,
        children: [
          /* @__PURE__ */ m(
            "div",
            {
              ref: N,
              role: "button",
              tabIndex: o ? -1 : 0,
              "aria-haspopup": "true",
              "aria-expanded": h,
              "aria-controls": h ? `${A}-panel` : void 0,
              "aria-disabled": o,
              onClick: b,
              onKeyDown: S,
              className: O(
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
              ref: ($) => {
                E.current = $, typeof l == "function" ? l($) : l && (l.current = $);
              },
              id: `${A}-panel`,
              onKeyDown: S,
              style: Tc(n, r),
              className: O(
                "absolute z-50 w-max",
                "rounded-md border border-neutral-200 bg-white shadow-lg",
                "animate-fade-in",
                Rc[n],
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
const $c = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-4 py-2.5 text-base"
}, Mc = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5"
}, ir = re(
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
    ...d
  }, p) => {
    const [l, u] = he(!1), [f, v] = he(-1), h = Q(null), x = t.filter((w) => !w.disabled), E = Z(
      (w, M) => {
        const B = t.length;
        if (B === 0) return -1;
        for (let K = 0; K < B; K++) {
          const G = (w + M * (K + 1) + B) % B;
          if (!t[G].disabled) return G;
        }
        return -1;
      },
      [t]
    ), N = Z(() => t.findIndex((w) => !w.disabled), [t]), D = Z(() => {
      for (let w = t.length - 1; w >= 0; w--)
        if (!t[w].disabled) return w;
      return -1;
    }, [t]), y = Z(() => {
      s || x.length === 0 || (u(!0), v(-1));
    }, [s, x.length]), b = Z(() => {
      u(!1), v(-1);
    }, []), S = Z(
      (w) => {
        var M;
        w.disabled || ((M = w.onClick) == null || M.call(w), n == null || n(w.value), b());
      },
      [n, b]
    ), A = Z(
      (w) => {
        w ? y() : b();
      },
      [y, b]
    ), $ = Z(
      (w) => {
        if (!s)
          switch (w.key) {
            case "ArrowDown": {
              w.preventDefault(), l ? v(
                (M) => M === -1 ? N() : E(M, 1)
              ) : y();
              break;
            }
            case "ArrowUp": {
              w.preventDefault(), l ? v(
                (M) => M === -1 ? D() : E(M, -1)
              ) : y();
              break;
            }
            case "Enter":
            case " ": {
              if (w.preventDefault(), l && f >= 0 && f < t.length) {
                const M = t[f];
                M.href && !M.disabled && (window.location.href = M.href), S(M);
              } else l || y();
              break;
            }
          }
      },
      [
        s,
        l,
        f,
        t,
        y,
        S,
        E,
        N,
        D
      ]
    );
    xe(() => {
      var w;
      f >= 0 && h.current && ((w = h.current.querySelectorAll('[role="menuitem"]')[f]) == null || w.scrollIntoView({ block: "nearest" }));
    }, [f]);
    const j = (w, M) => {
      const B = M === f, K = /* @__PURE__ */ I(Ve, { children: [
        w.icon && /* @__PURE__ */ m(
          "span",
          {
            className: O(
              "flex-shrink-0",
              Mc[a],
              w.danger && !w.disabled ? "text-error" : "text-neutral-400",
              B && !w.danger && "text-primary"
            ),
            children: w.icon
          }
        ),
        /* @__PURE__ */ m("span", { className: "flex-1 truncate", children: w.label }),
        w.badge && /* @__PURE__ */ m("span", { className: "text-xs text-neutral-500", children: w.badge })
      ] }), G = O(
        "flex items-center gap-2 w-full rounded-md",
        "transition-colors duration-100",
        $c[a],
        w.disabled ? "text-neutral-300 cursor-not-allowed opacity-50" : O(
          "cursor-pointer",
          w.danger ? O("text-error", B ? "bg-error/10" : "hover:bg-error/10") : O(
            "text-neutral-700",
            B ? "bg-primary/10 text-primary" : "hover:bg-neutral-50"
          )
        )
      ), X = () => {
        var J;
        w.disabled || ((J = w.onClick) == null || J.call(w), n == null || n(w.value), b());
      };
      return /* @__PURE__ */ I("div", { children: [
        w.dividerBefore && /* @__PURE__ */ m("div", { className: "my-1 border-t border-neutral-200", role: "separator" }),
        w.href && !w.disabled ? /* @__PURE__ */ m(
          "a",
          {
            href: w.href,
            role: "menuitem",
            tabIndex: -1,
            className: G,
            onClick: (J) => {
              var ee;
              (ee = w.onClick) == null || ee.call(w), n == null || n(w.value), b(), w.onClick && J.preventDefault();
            },
            onMouseEnter: () => v(M),
            onMouseLeave: () => v(-1),
            "aria-disabled": w.disabled,
            children: K
          }
        ) : /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            role: "menuitem",
            tabIndex: -1,
            className: O(G, "text-left"),
            onClick: X,
            onMouseEnter: () => v(M),
            onMouseLeave: () => v(-1),
            disabled: w.disabled,
            "aria-disabled": w.disabled,
            children: K
          }
        )
      ] }, w.value);
    };
    return /* @__PURE__ */ m(
      mi,
      {
        ref: p,
        trigger: r,
        placement: o,
        offset: i,
        disabled: s,
        open: l,
        onOpenChange: A,
        onKeyDown: $,
        contentClassName: "min-w-[180px] py-1 px-1 max-h-80 overflow-auto",
        className: c,
        ...d,
        children: /* @__PURE__ */ I("div", { ref: h, role: "menu", "aria-orientation": "vertical", children: [
          e && /* @__PURE__ */ I("div", { children: [
            e,
            /* @__PURE__ */ m("div", { className: "my-1 border-t border-neutral-200", role: "separator" })
          ] }),
          t.map((w, M) => j(w, M))
        ] })
      }
    );
  }
);
ir.displayName = "DropdownMenu";
const jc = re(
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
    value: d,
    ...p
  }, l) => {
    const u = c || `textarea-${Math.random().toString(36).slice(2, 9)}`, f = !!n, v = typeof d == "string" ? d.length : 0;
    return /* @__PURE__ */ I("div", { className: O("flex flex-col gap-1.5", r && "w-full"), children: [
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
          ref: l,
          id: u,
          disabled: a,
          maxLength: i,
          value: d,
          className: O(
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
      /* @__PURE__ */ I("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ I("div", { children: [
          f && /* @__PURE__ */ m("p", { id: `${u}-error`, className: "text-sm text-error", children: n }),
          !f && t && /* @__PURE__ */ m("p", { id: `${u}-helper`, className: "text-sm text-neutral-500", children: t })
        ] }),
        o && i && /* @__PURE__ */ I("span", { className: "text-sm text-neutral-500", children: [
          v,
          "/",
          i
        ] })
      ] })
    ] });
  }
);
jc.displayName = "Textarea";
const Lc = {
  primary: { checked: "peer-checked:bg-primary peer-checked:border-primary", ring: "peer-focus:ring-primary" },
  accent: { checked: "peer-checked:bg-accent peer-checked:border-accent", ring: "peer-focus:ring-accent" },
  neutral: { checked: "peer-checked:bg-neutral-600 peer-checked:border-neutral-600", ring: "peer-focus:ring-neutral-400" },
  success: { checked: "peer-checked:bg-success peer-checked:border-success", ring: "peer-focus:ring-success" },
  info: { checked: "peer-checked:bg-info peer-checked:border-info", ring: "peer-focus:ring-info" },
  violet: { checked: "peer-checked:bg-violet peer-checked:border-violet", ring: "peer-focus:ring-violet" },
  rose: { checked: "peer-checked:bg-rose peer-checked:border-rose", ring: "peer-focus:ring-rose" },
  teal: { checked: "peer-checked:bg-teal peer-checked:border-teal", ring: "peer-focus:ring-teal" }
}, Bc = {
  primary: { checked: "peer-checked:bg-primary", ring: "peer-focus:ring-primary" },
  accent: { checked: "peer-checked:bg-accent", ring: "peer-focus:ring-accent" },
  neutral: { checked: "peer-checked:bg-neutral-600", ring: "peer-focus:ring-neutral-400" },
  success: { checked: "peer-checked:bg-success", ring: "peer-focus:ring-success" },
  info: { checked: "peer-checked:bg-info", ring: "peer-focus:ring-info" },
  violet: { checked: "peer-checked:bg-violet", ring: "peer-focus:ring-violet" },
  rose: { checked: "peer-checked:bg-rose", ring: "peer-focus:ring-rose" },
  teal: { checked: "peer-checked:bg-teal", ring: "peer-focus:ring-teal" }
}, gi = re(
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
    id: d,
    onChange: p,
    ...l
  }, u) => {
    const f = d || `checkbox-${Math.random().toString(36).slice(2, 9)}`, v = !!n, h = (N) => {
      p == null || p(N), a == null || a(N.target.checked);
    }, x = () => {
      const N = Lc[o];
      return /* @__PURE__ */ m(
        "div",
        {
          className: O(
            "w-5 h-5 rounded border-2 transition-colors",
            "flex items-center justify-center",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "[&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100",
            N.ring,
            N.checked,
            v ? "border-error" : "border-neutral-300 peer-hover:border-neutral-400"
          ),
          children: r ? /* @__PURE__ */ m(oc, { className: "w-3 h-3 text-white transition-opacity" }) : /* @__PURE__ */ m(Os, { className: "w-3 h-3 text-white transition-opacity" })
        }
      );
    }, E = () => {
      const N = Bc[o];
      return /* @__PURE__ */ m(
        "div",
        {
          className: O(
            "relative w-11 h-6 rounded-full transition-colors",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "peer-checked:[&>div]:translate-x-5",
            N.ring,
            N.checked,
            v ? "bg-error/30" : "bg-neutral-300"
          ),
          children: /* @__PURE__ */ m(
            "div",
            {
              className: O(
                "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white",
                "shadow-sm transition-transform duration-200"
              )
            }
          )
        }
      );
    };
    return /* @__PURE__ */ I("div", { className: O("flex flex-col gap-1", c), children: [
      /* @__PURE__ */ I(
        "label",
        {
          htmlFor: f,
          className: O(
            "flex items-start gap-3 cursor-pointer",
            s && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ I("div", { className: O("relative flex items-center", i ? "justify-start" : "justify-center"), children: [
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
                  ...l
                }
              ),
              i ? E() : x()
            ] }),
            (e || t) && /* @__PURE__ */ I("div", { className: "flex flex-col", children: [
              e && /* @__PURE__ */ m("span", { className: "text-sm font-medium text-neutral-700", children: e }),
              t && /* @__PURE__ */ m("span", { className: "text-sm text-neutral-500", children: t })
            ] })
          ]
        }
      ),
      v && /* @__PURE__ */ m("p", { className: O("text-sm text-error", i ? "ml-14" : "ml-8"), children: n })
    ] });
  }
);
gi.displayName = "Checkbox";
const Vc = re(
  ({ label: e, description: t, error: n, disabled: r, className: o, id: i, ...a }, s) => {
    const c = i || `radio-${Math.random().toString(36).slice(2, 9)}`, d = !!n;
    return /* @__PURE__ */ I("div", { className: O("flex flex-col gap-1", o), children: [
      /* @__PURE__ */ I(
        "label",
        {
          htmlFor: c,
          className: O(
            "flex items-start gap-3 cursor-pointer",
            r && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ I("div", { className: "relative flex items-center justify-center", children: [
              /* @__PURE__ */ m(
                "input",
                {
                  ref: s,
                  type: "radio",
                  id: c,
                  disabled: r,
                  className: "peer sr-only",
                  "aria-invalid": d,
                  ...a
                }
              ),
              /* @__PURE__ */ m(
                "div",
                {
                  className: O(
                    "w-5 h-5 rounded-full border-2 transition-colors",
                    "flex items-center justify-center",
                    "peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2",
                    "peer-checked:border-primary",
                    d ? "border-error" : "border-neutral-300 peer-hover:border-neutral-400"
                  ),
                  children: /* @__PURE__ */ m("div", { className: "w-2.5 h-2.5 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform" })
                }
              )
            ] }),
            (e || t) && /* @__PURE__ */ I("div", { className: "flex flex-col", children: [
              e && /* @__PURE__ */ m("span", { className: "text-sm font-medium text-neutral-700", children: e }),
              t && /* @__PURE__ */ m("span", { className: "text-sm text-neutral-500", children: t })
            ] })
          ]
        }
      ),
      d && /* @__PURE__ */ m("p", { className: "text-sm text-error ml-8", children: n })
    ] });
  }
);
Vc.displayName = "Radio";
const Fc = {
  default: "bg-white border border-neutral-200 rounded-lg",
  bordered: "bg-white border-2 border-neutral-300 rounded-lg",
  elevated: "bg-white border border-neutral-200 shadow-card rounded-lg"
}, zc = re(
  ({ children: e, noPadding: t = !1, hoverable: n = !1, variant: r = "default", className: o, ...i }, a) => /* @__PURE__ */ m(
    "div",
    {
      ref: a,
      className: O(
        Fc[r],
        !t && "p-4",
        n && "transition-shadow transition-colors duration-200 hover:shadow-card-hover hover:border-primary/30 cursor-pointer",
        o
      ),
      ...i,
      children: e
    }
  )
);
zc.displayName = "Card";
const Gc = re(
  ({ children: e, action: t, className: n, ...r }, o) => /* @__PURE__ */ I(
    "div",
    {
      ref: o,
      className: O(
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
Gc.displayName = "CardHeader";
const Wc = re(
  ({ children: e, className: t, ...n }, r) => /* @__PURE__ */ m("div", { ref: r, className: O("p-4", t), ...n, children: e })
);
Wc.displayName = "CardBody";
const qc = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
  between: "justify-between"
}, Uc = re(
  ({ children: e, align: t = "right", className: n, ...r }, o) => /* @__PURE__ */ m(
    "div",
    {
      ref: o,
      className: O(
        "flex items-center gap-3 px-4 py-3 bg-neutral-50 border-t border-neutral-200",
        qc[t],
        n
      ),
      ...r,
      children: e
    }
  )
);
Uc.displayName = "CardFooter";
const Hc = {
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
}, Yc = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base"
}, Kc = {
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
}, Xc = re(
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
      className: O(
        "inline-block rounded-full",
        n === "sm" && "w-2 h-2",
        n === "md" && "w-2.5 h-2.5",
        n === "lg" && "w-3 h-3",
        Kc[t],
        i
      ),
      ...a
    }
  ) : /* @__PURE__ */ m(
    "span",
    {
      ref: s,
      className: O(
        "inline-flex items-center font-medium",
        r ? "rounded-full" : "rounded-md",
        Hc[t],
        Yc[n],
        i
      ),
      ...a,
      children: e
    }
  )
);
Xc.displayName = "Badge";
const Wr = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl"
}, Jc = {
  xs: "w-1.5 h-1.5 border",
  sm: "w-2 h-2 border",
  md: "w-2.5 h-2.5 border-2",
  lg: "w-3 h-3 border-2",
  xl: "w-4 h-4 border-2"
}, Zc = {
  online: "bg-success",
  offline: "bg-neutral-400",
  busy: "bg-error",
  away: "bg-warning"
}, Bn = re(
  ({ size: e = "md", src: t, alt: n = "", initials: r, status: o, className: i, ...a }, s) => {
    const c = (d) => d ? d.split(" ").map((p) => p[0]).join("").toUpperCase().slice(0, 2) : "?";
    return /* @__PURE__ */ I("div", { ref: s, className: O("relative inline-block", i), children: [
      t ? /* @__PURE__ */ m(
        "img",
        {
          src: t,
          alt: n,
          className: O(
            "rounded-full object-cover",
            Wr[e]
          ),
          ...a
        }
      ) : /* @__PURE__ */ m(
        "div",
        {
          className: O(
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
          className: O(
            "absolute bottom-0 right-0 rounded-full border-white",
            Jc[e],
            Zc[o]
          )
        }
      )
    ] });
  }
);
Bn.displayName = "Avatar";
const Qc = {
  info: "bg-info/10 border-info/30 text-info-dark",
  success: "bg-success/10 border-success/30 text-success-dark",
  warning: "bg-warning/10 border-warning/30 text-warning-dark",
  error: "bg-error/10 border-error/30 text-error-dark"
}, el = {
  info: li,
  success: ci,
  warning: ui,
  error: si
}, tl = re(
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
    const d = el[e];
    return /* @__PURE__ */ I(
      "div",
      {
        ref: c,
        role: "alert",
        className: O(
          "flex gap-3 p-4 rounded-lg border",
          Qc[e],
          a
        ),
        ...s,
        children: [
          !i && /* @__PURE__ */ m(d, { className: "flex-shrink-0 w-5 h-5 mt-0.5" }),
          /* @__PURE__ */ I("div", { className: "flex-1 min-w-0", children: [
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
tl.displayName = "Alert";
const vi = ({
  item: e,
  collapsed: t,
  level: n = 0,
  activeId: r,
  onItemClick: o,
  onCollapsedChange: i
}) => {
  const [a, s] = he(!1), c = e.children && e.children.length > 0, d = e.active || e.id === r, p = () => {
    var f;
    c ? t ? (i == null || i(!1), s(!0)) : s(!a) : (o == null || o(e), (f = e.onClick) == null || f.call(e));
  }, l = /* @__PURE__ */ I(Ve, { children: [
    /* @__PURE__ */ I("span", { className: "relative flex-shrink-0 w-4 h-4 flex items-center justify-center text-[16px]", children: [
      e.icon || /* @__PURE__ */ m("span", { className: "w-1" }),
      t && c && /* @__PURE__ */ m(or, { className: "absolute -right-2.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 text-white/50" })
    ] }),
    !t && /* @__PURE__ */ I(Ve, { children: [
      /* @__PURE__ */ m("span", { className: "flex-1 truncate text-[13px]", children: e.label }),
      e.badge && /* @__PURE__ */ m("span", { className: "px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-accent text-white", children: e.badge }),
      c && /* @__PURE__ */ m(
        rr,
        {
          className: O(
            "w-3.5 h-3.5 transition-transform",
            a && "rotate-180"
          )
        }
      )
    ] })
  ] }), u = O(
    "flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg",
    "transition-all duration-200 cursor-pointer",
    "text-white/80 hover:text-white hover:bg-white/10",
    d && [
      "gradient-active",
      "!text-white",
      "mx-2",
      "font-medium"
    ],
    n > 0 && "ml-4",
    t && "justify-center px-2"
  );
  return /* @__PURE__ */ I("div", { children: [
    e.dividerBefore && /* @__PURE__ */ m("div", { className: "my-2 border-t border-white/10", role: "separator" }),
    e.href ? /* @__PURE__ */ m("a", { href: e.href, className: u, onClick: p, title: t ? e.label : void 0, children: l }) : /* @__PURE__ */ m("button", { type: "button", className: O(u, "w-full text-left"), onClick: p, title: t ? e.label : void 0, children: l }),
    c && a && !t && /* @__PURE__ */ m("div", { className: "mt-1 space-y-1", children: e.children.map((f) => /* @__PURE__ */ m(
      vi,
      {
        item: f,
        collapsed: t,
        level: n + 1,
        activeId: r,
        onItemClick: o,
        onCollapsedChange: i
      },
      f.id
    )) })
  ] });
}, hi = re(
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
    onItemClick: d,
    className: p,
    ...l
  }, u) => {
    const f = t, v = n ?? t;
    return /* @__PURE__ */ I(
      "aside",
      {
        ref: u,
        className: O(
          "flex flex-col h-screen bg-sidebar text-white overflow-hidden flex-shrink-0",
          "transition-all duration-300",
          i ? "w-16" : "w-64",
          p
        ),
        ...l,
        children: [
          /* @__PURE__ */ m(
            "div",
            {
              className: O(
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
              ) : /* @__PURE__ */ I(Ve, { children: [
                /* @__PURE__ */ I("div", { className: "flex flex-col flex-1 min-w-0", children: [
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
              onItemClick: d,
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
const bi = re(
  ({ items: e, count: t, searchValue: n, searchPlaceholder: r, filterLabel: o, onSearchChange: i, onFilterChange: a }) => /* @__PURE__ */ m(
    ir,
    {
      offset: 14,
      card: /* @__PURE__ */ I("div", { className: "flex flex-col gap-4 p-4", children: [
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
      trigger: /* @__PURE__ */ I(
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
const xi = re(
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
    onUserClick: d,
    onMenuToggle: p,
    showMenuToggle: l = !1,
    actions: u,
    className: f,
    ...v
  }, h) => /* @__PURE__ */ I(
    "header",
    {
      ref: h,
      className: O(
        "flex items-center justify-between h-16 px-6 bg-white border-b border-neutral-200",
        f
      ),
      ...v,
      children: [
        /* @__PURE__ */ I("div", { className: "flex items-center gap-4", children: [
          l && /* @__PURE__ */ m(
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
        /* @__PURE__ */ I("div", { className: "flex items-center gap-4", children: [
          n && /* @__PURE__ */ I("div", { className: "relative hidden md:block", children: [
            /* @__PURE__ */ m(pi, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" }),
            /* @__PURE__ */ m(
              "input",
              {
                type: "search",
                placeholder: t,
                value: r,
                onChange: (x) => o == null ? void 0 : o(x.target.value),
                className: O(
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
              card: /* @__PURE__ */ I("div", { className: "px-4 py-2 flex items-center gap-4", children: [
                /* @__PURE__ */ m(Bn, { src: s.avatar, alt: s.name, size: "xl" }),
                /* @__PURE__ */ I("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ m("span", { className: "text-md font-medium text-neutral-900", children: s.name }),
                  s.email && /* @__PURE__ */ m("span", { className: "text-xs text-neutral-500", children: s.email }),
                  s.role && /* @__PURE__ */ m("span", { className: "text-xs text-neutral-500", children: s.role })
                ] })
              ] }),
              items: c ?? [],
              trigger: /* @__PURE__ */ m("div", { className: "pr-2 flex items-center", children: /* @__PURE__ */ m(
                Bn,
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
const nl = re(
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
    onSidebarItemClick: d,
    headerTitle: p,
    user: l,
    userMenuItems: u,
    onUserClick: f,
    showNotifications: v = !0,
    notificationMenu: h,
    showSearch: x = !0,
    searchValue: E,
    onSearchChange: N,
    headerActions: D,
    header: y,
    hideSidebar: b = !1,
    hideHeader: S = !1,
    rightPanel: A,
    rightPanelWidth: $ = "360px",
    className: j,
    ...w
  }, M) => {
    const [B, K] = he(!1), [G, X] = he(!1), J = !!t, ee = !!y;
    return /* @__PURE__ */ I("div", { ref: M, className: O("flex h-screen bg-neutral-50", j), ...w, children: [
      !b && /* @__PURE__ */ I(Ve, { children: [
        !J && G && /* @__PURE__ */ m(
          "div",
          {
            className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
            onClick: () => X(!1)
          }
        ),
        /* @__PURE__ */ m(
          "div",
          {
            className: O(
              "fixed lg:static inset-y-0 left-0 z-50 lg:z-auto",
              "transform lg:transform-none transition-transform duration-300",
              !J && G ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
              J && "translate-x-0"
            ),
            children: J ? t : /* @__PURE__ */ m(
              hi,
              {
                items: n,
                logo: o,
                logoCollapsed: i,
                systemName: a,
                footer: s,
                collapsible: r,
                collapsed: B,
                onCollapsedChange: K,
                activeId: c,
                onItemClick: (pe) => {
                  d == null || d(pe), X(!1);
                }
              }
            )
          }
        )
      ] }),
      !b && S && !ee && /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          onClick: () => X(!G),
          className: "fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md border border-neutral-200 lg:hidden",
          "aria-label": "Toggle menu",
          children: /* @__PURE__ */ m(di, { className: "w-5 h-5 text-neutral-600" })
        }
      ),
      /* @__PURE__ */ I("div", { className: "flex-1 flex flex-col min-w-0", children: [
        !S && (ee ? y : /* @__PURE__ */ m(
          xi,
          {
            title: p,
            showSearch: x,
            searchValue: E,
            onSearchChange: N,
            showNotifications: v,
            notificationMenu: h,
            user: l,
            userMenuItems: u,
            onUserClick: f,
            showMenuToggle: !b,
            onMenuToggle: () => X(!G),
            actions: D
          }
        )),
        /* @__PURE__ */ I("div", { className: "flex-1 flex overflow-hidden", children: [
          /* @__PURE__ */ m(
            "main",
            {
              className: O(
                "flex-1 overflow-y-auto p-6",
                A && "hidden md:block"
              ),
              children: e
            }
          ),
          A && /* @__PURE__ */ m(
            "aside",
            {
              className: "w-full md:w-[var(--panel-width)] border-l border-neutral-200 bg-white overflow-y-auto flex-shrink-0",
              style: { "--panel-width": $ },
              children: A
            }
          )
        ] })
      ] })
    ] });
  }
);
nl.displayName = "Layout";
const rl = re(
  ({
    items: e,
    showHomeIcon: t = !1,
    separator: n,
    maxItems: r,
    className: o,
    ...i
  }, a) => {
    const s = () => n || /* @__PURE__ */ m(or, { className: "w-4 h-4 text-neutral-400 mx-2" }), c = (l, u, f) => {
      const v = /* @__PURE__ */ I(Ve, { children: [
        u === 0 && t && /* @__PURE__ */ m(Us, { className: "w-4 h-4 mr-1" }),
        l.icon && /* @__PURE__ */ m("span", { className: "mr-1", children: l.icon }),
        l.label
      ] }), h = O(
        "inline-flex items-center text-sm",
        f ? "font-medium text-neutral-900" : "text-neutral-500 hover:text-neutral-700 transition-colors"
      );
      return l.href && !f ? /* @__PURE__ */ m("a", { href: l.href, className: h, children: v }) : /* @__PURE__ */ m("span", { className: h, children: v });
    };
    let d = e;
    if (r && e.length > r && r) {
      const l = e.slice(0, 1), u = e.slice(-(r - 2));
      d = [
        ...l,
        { label: "..." },
        ...u
      ];
    }
    return /* @__PURE__ */ m("nav", { ref: a, "aria-label": "Breadcrumb", className: o, ...i, children: /* @__PURE__ */ m("ol", { className: "flex items-center flex-wrap", children: d.map((l, u) => {
      const f = u === d.length - 1;
      return /* @__PURE__ */ I("li", { className: "inline-flex items-center", children: [
        c(l, u, f),
        !f && s()
      ] }, u);
    }) }) });
  }
);
rl.displayName = "Breadcrumb";
const ol = re(
  ({ onClose: e, title: t, description: n, children: r, footer: o, className: i, ...a }, s) => /* @__PURE__ */ I(
    "div",
    {
      ref: s,
      className: O("flex flex-col h-full animate-slide-in-right", i),
      ...a,
      children: [
        /* @__PURE__ */ I("div", { className: "flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark flex-shrink-0", children: [
          /* @__PURE__ */ I("div", { className: "min-w-0 flex-1", children: [
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
ol.displayName = "SidePanel";
function il({
  columns: e,
  data: t,
  rowKey: n,
  sortColumn: r,
  sortDirection: o,
  onSort: i,
  onRowClick: a,
  loading: s = !1,
  emptyMessage: c = "No data available",
  striped: d = !1,
  hoverable: p = !0,
  compact: l = !1,
  className: u,
  ...f
}, v) {
  const h = (y, b) => typeof n == "function" ? n(y) : String(y[n] ?? b), x = (y, b, S) => b.render ? b.render(y, S) : b.accessor ? String(y[b.accessor] ?? "") : "", E = (y) => {
    if (!y.sortable || !i) return;
    let b = "asc";
    r === y.key && (o === "asc" ? b = "desc" : o === "desc" && (b = null)), i(y.key, b);
  }, N = (y) => {
    if (!y.sortable) return null;
    const b = r === y.key, S = O(
      "w-4 h-4 ml-1",
      b ? "text-white" : "text-white/60"
    );
    return b && o === "asc" ? /* @__PURE__ */ m(ws, { className: S }) : b && o === "desc" ? /* @__PURE__ */ m(hs, { className: S }) : /* @__PURE__ */ m(xs, { className: S });
  }, D = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  return /* @__PURE__ */ m("div", { className: "overflow-x-auto", children: /* @__PURE__ */ I(
    "table",
    {
      ref: v,
      className: O("w-full border-collapse", u),
      ...f,
      children: [
        /* @__PURE__ */ m("thead", { className: "bg-primary text-white", children: /* @__PURE__ */ m("tr", { children: e.map((y) => /* @__PURE__ */ m(
          "th",
          {
            className: O(
              "font-semibold text-white text-sm",
              l ? "px-3 py-2" : "px-4 py-3",
              D[y.align || "left"],
              y.sortable && "cursor-pointer select-none hover:bg-primary-dark"
            ),
            style: { width: y.width },
            onClick: () => E(y),
            children: /* @__PURE__ */ I("div", { className: O(
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
            children: /* @__PURE__ */ I("div", { className: "flex items-center justify-center gap-2", children: [
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
        ) }) : t.map((y, b) => /* @__PURE__ */ m(
          "tr",
          {
            className: O(
              "transition-colors",
              d && b % 2 === 1 && "bg-neutral-50",
              p && "hover:bg-neutral-50",
              a && "cursor-pointer"
            ),
            onClick: () => a == null ? void 0 : a(y, b),
            children: e.map((S) => /* @__PURE__ */ m(
              "td",
              {
                className: O(
                  "text-neutral-700 text-sm",
                  l ? "px-3 py-2" : "px-4 py-3",
                  D[S.align || "left"]
                ),
                children: x(y, S, b)
              },
              S.key
            ))
          },
          h(y, b)
        )) })
      ]
    }
  ) });
}
const gv = re(il), yi = nr(null), al = {
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
}, sl = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg"
}, cl = re(
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
    ...d
  }, p) => {
    var x;
    const [l, u] = he(
      n || ((x = e[0]) == null ? void 0 : x.id) || ""
    ), f = t ?? l, v = al[o], h = (E) => {
      t === void 0 && u(E), r == null || r(E);
    };
    return /* @__PURE__ */ m(yi.Provider, { value: { activeId: f }, children: /* @__PURE__ */ I("div", { ref: p, className: s, ...d, children: [
      /* @__PURE__ */ m(
        "div",
        {
          role: "tablist",
          className: O(
            "flex",
            v.list,
            i && "w-full"
          ),
          children: e.map((E) => /* @__PURE__ */ I(
            "button",
            {
              role: "tab",
              type: "button",
              "aria-selected": f === E.id,
              "aria-controls": `tabpanel-${E.id}`,
              disabled: E.disabled,
              onClick: () => h(E.id),
              className: O(
                "flex items-center justify-center gap-2 font-medium transition-all min-w-0",
                v.tab,
                sl[a],
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
                    className: O(
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
cl.displayName = "Tabs";
const ll = re(
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
        className: O("pt-4", n),
        ...r,
        children: t
      }
    );
  }
);
ll.displayName = "TabPanel";
const dl = {
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
}, pl = /\{(\w+)\}/g;
function ul(e, t) {
  if (!t) return e;
  const n = { ...e };
  for (const [r, o] of Object.entries(t))
    n[r] = { ...n[r] ?? {}, ...o };
  return n;
}
function Yt({
  language: e,
  messagesByLanguage: t,
  fallbackLanguage: n = "en"
}) {
  const r = ul(dl, t);
  return {
    language: e,
    messagesByLanguage: r,
    t: (i, a) => {
      const s = r[e] ?? {}, c = r[n] ?? {}, d = s[i] ?? c[i] ?? i;
      return a ? d.replace(pl, (p, l) => {
        const u = String(l), f = a[u];
        return f == null ? p : String(f);
      }) : d;
    }
  };
}
const fl = Yt({ language: "es" }), wi = nr(fl);
function vv({
  children: e,
  language: t,
  messages: n,
  fallbackLanguage: r = "es"
}) {
  const o = je(
    () => Yt({ language: t, messagesByLanguage: n, fallbackLanguage: r }),
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
}, ml = {
  sm: 14,
  md: 16,
  lg: 20
}, gl = {
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
}, vl = {
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
}, hl = re(
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
    disabled: d = !1,
    size: p = "md",
    variant: l = "primary",
    className: u,
    ...f
  }, v) => {
    const h = Ei(), { t: x } = a ? Yt({
      language: a,
      messagesByLanguage: h.messagesByLanguage
    }) : h, N = (() => {
      const j = [], M = r * 2 + 3 + 2;
      if (t <= M)
        return Array.from({ length: t }, (J, ee) => ee + 1);
      const B = Math.max(e - r, 1), K = Math.min(e + r, t), G = B > 2, X = K < t - 1;
      if (!G && X) {
        const J = 1 + 2 * r + 1;
        for (let ee = 1; ee <= J; ee++) j.push(ee);
        j.push("ellipsis"), j.push(t);
      } else if (G && !X) {
        j.push(1), j.push("ellipsis");
        const J = t - (2 * r + 1);
        for (let ee = J; ee <= t; ee++) j.push(ee);
      } else {
        j.push(1), j.push("ellipsis");
        for (let J = B; J <= K; J++) j.push(J);
        j.push("ellipsis"), j.push(t);
      }
      return j;
    })(), D = ml[p], y = O(
      "flex items-center justify-center rounded-full transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      vl[l],
      qr[p],
      d && "opacity-50 cursor-not-allowed"
    ), b = ({ page: j, isActive: w }) => /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        onClick: () => !d && n(j),
        disabled: d,
        "aria-current": w ? "page" : void 0,
        className: O(
          y,
          "px-3",
          w ? gl[l] : "text-neutral-600 hover:bg-neutral-100"
        ),
        children: j
      }
    ), S = ({ direction: j, double: w }) => {
      const M = j === "prev", B = w ? M ? 1 : t : M ? e - 1 : e + 1, K = d || (M ? e === 1 : e === t), G = w ? M ? As : Rs : M ? Cs : or;
      return /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          onClick: () => !K && n(B),
          disabled: K,
          "aria-label": x(w ? M ? "pagination.firstPage" : "pagination.lastPage" : M ? "pagination.previousPage" : "pagination.nextPage"),
          className: O(
            y,
            K ? "text-neutral-300 cursor-not-allowed" : "text-neutral-600 hover:bg-neutral-100"
          ),
          children: /* @__PURE__ */ m(G, { size: D })
        }
      );
    }, A = s && c ? (e - 1) * c + 1 : void 0, $ = s && c ? Math.min(e * c, s) : void 0;
    return /* @__PURE__ */ I(
      "nav",
      {
        ref: v,
        role: "navigation",
        "aria-label": x("pagination.ariaLabel"),
        className: O("flex items-center gap-2", u),
        ...f,
        children: [
          i && s !== void 0 && /* @__PURE__ */ m("span", { className: "text-sm text-neutral-500 mr-4", children: x("pagination.info", {
            start: A ?? "",
            end: $ ?? "",
            total: s
          }) }),
          o && /* @__PURE__ */ m(S, { direction: "prev", double: !0 }),
          /* @__PURE__ */ m(S, { direction: "prev" }),
          /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: N.map(
            (j, w) => j === "ellipsis" ? /* @__PURE__ */ m(
              "span",
              {
                className: O("px-2 text-neutral-400", qr[p]),
                children: "..."
              },
              `ellipsis-${w}`
            ) : /* @__PURE__ */ m(b, { page: j, isActive: j === e }, j)
          ) }),
          /* @__PURE__ */ m(S, { direction: "next" }),
          o && /* @__PURE__ */ m(S, { direction: "next", double: !0 })
        ]
      }
    );
  }
);
hl.displayName = "Pagination";
const bl = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-4xl"
}, Ni = re(
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
    showCloseButton: d = !0,
    centered: p = !0,
    className: l,
    ...u
  }, f) => {
    const v = Z(
      (h) => {
        h.key === "Escape" && c && t();
      },
      [c, t]
    );
    return xe(() => (e && (document.addEventListener("keydown", v), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), [e, v]), e ? /* @__PURE__ */ I(
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
              className: O(
                "relative flex min-h-full w-full p-4",
                p ? "items-center justify-center" : "items-start justify-center pt-16"
              ),
              children: /* @__PURE__ */ I(
                "div",
                {
                  ref: f,
                  className: O(
                    "relative w-full bg-white rounded-lg shadow-modal",
                    "animate-fade-in",
                    bl[a],
                    l
                  ),
                  onClick: (h) => h.stopPropagation(),
                  ...u,
                  children: [
                    (n || d) && /* @__PURE__ */ I("div", { className: "flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark rounded-t-lg", children: [
                      /* @__PURE__ */ I("div", { children: [
                        n && /* @__PURE__ */ m("h2", { className: "text-lg font-semibold text-white", children: n }),
                        r && /* @__PURE__ */ m("p", { className: "mt-1 text-sm text-white/80", children: r })
                      ] }),
                      d && /* @__PURE__ */ m(
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
const xl = ({
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
    footer: /* @__PURE__ */ I(Ve, { children: [
      /* @__PURE__ */ m(Mt, { variant: "neutral", ghost: !0, onClick: i, disabled: a, children: n }),
      /* @__PURE__ */ m(Mt, { variant: r, onClick: o, loading: a, children: t })
    ] }),
    children: /* @__PURE__ */ m("p", { className: "text-neutral-700", children: e })
  }
);
xl.displayName = "ConfirmModal";
const yl = {
  info: "bg-info text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-error text-white"
}, wl = {
  info: li,
  success: ci,
  warning: ui,
  error: si
}, Di = re(
  ({ toast: e, onClose: t, className: n, ...r }, o) => {
    const [i, a] = he(!1), s = wl[e.variant];
    xe(() => {
      if (requestAnimationFrame(() => a(!0)), e.duration !== 0) {
        const d = setTimeout(() => {
          a(!1), setTimeout(() => t(e.id), 200);
        }, e.duration || 5e3);
        return () => clearTimeout(d);
      }
    }, [e, t]);
    const c = () => {
      a(!1), setTimeout(() => t(e.id), 200);
    };
    return /* @__PURE__ */ I(
      "div",
      {
        ref: o,
        role: "alert",
        className: O(
          "flex items-start gap-3 p-4 rounded-lg shadow-lg min-w-[320px] max-w-md",
          "transition-all duration-200",
          i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          yl[e.variant],
          n
        ),
        ...r,
        children: [
          /* @__PURE__ */ m(s, { className: "flex-shrink-0 w-5 h-5 mt-0.5" }),
          /* @__PURE__ */ I("div", { className: "flex-1 min-w-0", children: [
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
const El = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Nl = ({
  position: e = "top-right",
  toasts: t,
  onClose: n
}) => /* @__PURE__ */ m(
  "div",
  {
    className: O(
      "fixed z-50 flex flex-col gap-2",
      El[e]
    ),
    children: t.map((r) => /* @__PURE__ */ m(Di, { toast: r, onClose: n }, r.id))
  }
), Oi = nr(null), hv = ({ children: e, position: t = "top-right" }) => {
  const [n, r] = he([]), o = Z((p) => {
    const l = Math.random().toString(36).slice(2, 9);
    return r((u) => [...u, { ...p, id: l }]), l;
  }, []), i = Z((p) => {
    r((l) => l.filter((u) => u.id !== p));
  }, []), a = Z(
    (p, l) => o({ variant: "success", message: p, title: l }),
    [o]
  ), s = Z(
    (p, l) => o({ variant: "error", message: p, title: l }),
    [o]
  ), c = Z(
    (p, l) => o({ variant: "warning", message: p, title: l }),
    [o]
  ), d = Z(
    (p, l) => o({ variant: "info", message: p, title: l }),
    [o]
  );
  return /* @__PURE__ */ I(Oi.Provider, { value: { toasts: n, addToast: o, removeToast: i, success: a, error: s, warning: c, info: d }, children: [
    e,
    /* @__PURE__ */ m(Nl, { position: t, toasts: n, onClose: i })
  ] });
}, bv = () => {
  const e = wt(Oi);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, Dl = re(
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
    footer: d,
    variant: p = "gradient",
    className: l,
    ...u
  }, f) => {
    const v = Ei(), { t: h } = e ? Yt({
      language: e,
      messagesByLanguage: v.messagesByLanguage
    }) : v, [x, E] = he(""), [N, D] = he(""), [y, b] = he(!1), [S, A] = he(!1), j = /* @__PURE__ */ I("form", { onSubmit: (w) => {
      w.preventDefault(), o == null || o(x, N);
    }, className: "space-y-6", children: [
      /* @__PURE__ */ I("div", { className: "text-center mb-8", children: [
        (t || n) && /* @__PURE__ */ I("div", { className: "flex justify-center mb-6", children: [
          /* @__PURE__ */ m("div", { className: "md:hidden", children: t }),
          /* @__PURE__ */ m("div", { className: "hidden md:block", children: n || t })
        ] }),
        /* @__PURE__ */ m("h1", { className: "text-2xl font-bold text-neutral-900", children: h("login.title") }),
        /* @__PURE__ */ m("p", { className: "mt-2 text-neutral-500", children: h("login.subtitle") })
      ] }),
      a && /* @__PURE__ */ m("div", { className: "p-3 rounded-lg bg-error/10 border border-error/20 text-error text-sm", children: a }),
      /* @__PURE__ */ I("div", { children: [
        /* @__PURE__ */ m("label", { htmlFor: "email", className: "block text-sm font-medium text-neutral-700 mb-1", children: h("login.emailLabel") }),
        /* @__PURE__ */ m(
          jt,
          {
            id: "email",
            type: "email",
            value: x,
            onChange: (w) => E(w.target.value),
            placeholder: h("login.emailPlaceholder"),
            leftIcon: /* @__PURE__ */ m(tc, { className: "w-5 h-5" }),
            required: !0,
            disabled: i
          }
        )
      ] }),
      /* @__PURE__ */ I("div", { children: [
        /* @__PURE__ */ m("label", { htmlFor: "password", className: "block text-sm font-medium text-neutral-700 mb-1", children: h("login.passwordLabel") }),
        /* @__PURE__ */ m(
          jt,
          {
            id: "password",
            type: y ? "text" : "password",
            value: N,
            onChange: (w) => D(w.target.value),
            placeholder: h("login.passwordPlaceholder"),
            leftIcon: /* @__PURE__ */ m(Qs, { className: "w-5 h-5" }),
            rightIcon: /* @__PURE__ */ m(
              "button",
              {
                type: "button",
                onClick: () => b(!y),
                className: "text-neutral-400 hover:text-neutral-600",
                children: y ? /* @__PURE__ */ m(js, { className: "w-5 h-5" }) : /* @__PURE__ */ m(Bs, { className: "w-5 h-5" })
              }
            ),
            required: !0,
            disabled: i
          }
        )
      ] }),
      /* @__PURE__ */ I("div", { className: "flex items-center justify-between", children: [
        c && /* @__PURE__ */ I("label", { className: "flex items-center gap-2 cursor-pointer", children: [
          /* @__PURE__ */ m(
            "input",
            {
              type: "checkbox",
              checked: S,
              onChange: (w) => A(w.target.checked),
              className: "w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary"
            }
          ),
          /* @__PURE__ */ m("span", { className: "text-sm text-neutral-600", children: h("login.rememberMe") })
        ] }),
        s && /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            onClick: s,
            className: "text-sm text-primary hover:text-primary-dark font-medium",
            children: h("login.forgotPassword")
          }
        )
      ] }),
      /* @__PURE__ */ m(Mt, { type: "submit", variant: "accent", fullWidth: !0, loading: i, className: "py-3", children: h("login.submit") }),
      d && /* @__PURE__ */ m("div", { className: "text-center", children: d })
    ] });
    return p === "split" ? /* @__PURE__ */ I("div", { ref: f, className: O("min-h-screen flex", l), ...u, children: [
      /* @__PURE__ */ I("div", { className: "hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sidebar via-primary to-accent p-12 flex-col justify-between", children: [
        /* @__PURE__ */ m("div", { children: (r || n || t) && /* @__PURE__ */ m("div", { className: "mb-8", children: r || n || t }) }),
        /* @__PURE__ */ I("div", { className: "text-white", children: [
          /* @__PURE__ */ m("h2", { className: "text-4xl font-bold mb-4", children: h("login.split.heroTitle") }),
          /* @__PURE__ */ m("p", { className: "text-white/80 text-lg", children: h("login.split.heroDescription") })
        ] }),
        /* @__PURE__ */ m("div", { className: "text-white/50 text-sm", children: h("login.split.copyright", { year: (/* @__PURE__ */ new Date()).getFullYear() }) })
      ] }),
      /* @__PURE__ */ m("div", { className: "w-full lg:w-1/2 flex items-center justify-center p-8 bg-white", children: /* @__PURE__ */ m("div", { className: "w-full max-w-md", children: j }) })
    ] }) : p === "centered" ? /* @__PURE__ */ m(
      "div",
      {
        ref: f,
        className: O(
          "min-h-screen flex items-center justify-center p-4 bg-neutral-100",
          l
        ),
        ...u,
        children: /* @__PURE__ */ m("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-xl p-8", children: j })
      }
    ) : /* @__PURE__ */ m(
      "div",
      {
        ref: f,
        className: O(
          "min-h-screen flex items-center justify-center p-4",
          "bg-gradient-to-br from-sidebar via-primary to-accent",
          l
        ),
        ...u,
        children: /* @__PURE__ */ m("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-2xl p-8", children: j })
      }
    );
  }
);
Dl.displayName = "LoginPage";
function Oe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ol = typeof Symbol == "function" && Symbol.observable || "@@observable", Ur = Ol, Hr = () => Math.random().toString(36).substring(7).split("").join("."), Sl = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Hr()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Hr()}`
}, Yr = Sl;
function Il(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Cl(e) {
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
  if (Al(e))
    return "date";
  if (_l(e))
    return "error";
  const n = kl(e);
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
function kl(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function _l(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Al(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Me(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Cl(e)), t;
}
function Si(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(2) : `Expected the root reducer to be a function. Instead, received: '${Me(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(1) : `Expected the enhancer to be a function. Instead, received: '${Me(n)}'`);
    return n(Si)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function d() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((x, E) => {
      a.set(E, x);
    }));
  }
  function p() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function l(x) {
    if (typeof x != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(4) : `Expected the listener to be a function. Instead, received: '${Me(x)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let E = !0;
    d();
    const N = s++;
    return a.set(N, x), function() {
      if (E) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Oe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        E = !1, d(), a.delete(N), i = null;
      }
    };
  }
  function u(x) {
    if (!Il(x))
      throw new Error(process.env.NODE_ENV === "production" ? Oe(7) : `Actions must be plain objects. Instead, the actual type was: '${Me(x)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof x.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof x.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(17) : `Action "type" property must be a string. Instead, the actual type was: '${Me(x.type)}'. Value was: '${x.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(9) : "Reducers may not dispatch actions.");
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
      throw new Error(process.env.NODE_ENV === "production" ? Oe(10) : `Expected the nextReducer to be a function. Instead, received: '${Me(x)}`);
    r = x, u({
      type: Yr.REPLACE
    });
  }
  function v() {
    const x = l;
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
          throw new Error(process.env.NODE_ENV === "production" ? Oe(11) : `Expected the observer to be an object. Instead, received: '${Me(E)}'`);
        function N() {
          const y = E;
          y.next && y.next(p());
        }
        return N(), {
          unsubscribe: x(N)
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
    subscribe: l,
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
    throw new Error(process.env.NODE_ENV === "production" ? Oe(16) : `bindActionCreators expected an object or a function, but instead received: '${Me(e)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
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
function Pl(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Oe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...d) => i(c, ...d)
    }, s = e.map((c) => c(a));
    return i = Ii(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function Rl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pn = {};
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
function Tl() {
  if (Jr) return pn;
  Jr = 1;
  var e = me;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return pn.useSyncExternalStoreWithSelector = function(c, d, p, l, u) {
    var f = o(null);
    if (f.current === null) {
      var v = { hasValue: !1, value: null };
      f.current = v;
    } else v = f.current;
    f = a(
      function() {
        function x(b) {
          if (!E) {
            if (E = !0, N = b, b = l(b), u !== void 0 && v.hasValue) {
              var S = v.value;
              if (u(S, b))
                return D = S;
            }
            return D = b;
          }
          if (S = D, n(N, b)) return S;
          var A = l(b);
          return u !== void 0 && u(S, A) ? (N = b, S) : (N = b, D = A);
        }
        var E = !1, N, D, y = p === void 0 ? null : p;
        return [
          function() {
            return x(d());
          },
          y === null ? void 0 : function() {
            return x(y());
          }
        ];
      },
      [d, p, l, u]
    );
    var h = r(c, f[0], f[1]);
    return i(
      function() {
        v.hasValue = !0, v.value = h;
      },
      [h]
    ), s(h), h;
  }, pn;
}
var un = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function $l() {
  return Zr || (Zr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, d) {
      return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = me, n = typeof Object.is == "function" ? Object.is : e, r = t.useSyncExternalStore, o = t.useRef, i = t.useEffect, a = t.useMemo, s = t.useDebugValue;
    un.useSyncExternalStoreWithSelector = function(c, d, p, l, u) {
      var f = o(null);
      if (f.current === null) {
        var v = { hasValue: !1, value: null };
        f.current = v;
      } else v = f.current;
      f = a(
        function() {
          function x(b) {
            if (!E) {
              if (E = !0, N = b, b = l(b), u !== void 0 && v.hasValue) {
                var S = v.value;
                if (u(S, b))
                  return D = S;
              }
              return D = b;
            }
            if (S = D, n(N, b))
              return S;
            var A = l(b);
            return u !== void 0 && u(S, A) ? (N = b, S) : (N = b, D = A);
          }
          var E = !1, N, D, y = p === void 0 ? null : p;
          return [
            function() {
              return x(d());
            },
            y === null ? void 0 : function() {
              return x(y());
            }
          ];
        },
        [d, p, l, u]
      );
      var h = r(c, f[0], f[1]);
      return i(
        function() {
          v.hasValue = !0, v.value = h;
        },
        [h]
      ), s(h), h;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), un;
}
process.env.NODE_ENV === "production" ? Tl() : $l();
var Ci = /* @__PURE__ */ ne.version.startsWith("19"), Ml = /* @__PURE__ */ Symbol.for(
  Ci ? "react.transitional.element" : "react.element"
), jl = /* @__PURE__ */ Symbol.for("react.portal"), ki = /* @__PURE__ */ Symbol.for("react.fragment"), _i = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ai = /* @__PURE__ */ Symbol.for("react.profiler"), ar = /* @__PURE__ */ Symbol.for("react.consumer"), sr = /* @__PURE__ */ Symbol.for("react.context"), cr = /* @__PURE__ */ Symbol.for("react.forward_ref"), Pi = /* @__PURE__ */ Symbol.for("react.suspense"), Ri = /* @__PURE__ */ Symbol.for(
  "react.suspense_list"
), Kt = /* @__PURE__ */ Symbol.for("react.memo"), Ti = /* @__PURE__ */ Symbol.for("react.lazy"), Ll = /* @__PURE__ */ Symbol.for("react.offscreen"), Bl = /* @__PURE__ */ Symbol.for(
  "react.client.reference"
), Vl = cr, Fl = Kt;
function zl(e) {
  return typeof e == "string" || typeof e == "function" || e === ki || e === Ai || e === _i || e === Pi || e === Ri || e === Ll || typeof e == "object" && e !== null && (e.$$typeof === Ti || e.$$typeof === Kt || e.$$typeof === sr || e.$$typeof === ar || e.$$typeof === cr || e.$$typeof === Bl || e.getModuleId !== void 0);
}
function Vn(e) {
  if (typeof e == "object" && e !== null) {
    const { $$typeof: t } = e;
    switch (t) {
      case Ml:
        switch (e = e.type, e) {
          case ki:
          case Ai:
          case _i:
          case Pi:
          case Ri:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case sr:
              case cr:
              case Ti:
              case Kt:
                return e;
              case ar:
                return e;
              default:
                return t;
            }
        }
      case jl:
        return t;
    }
  }
}
function Gl(e) {
  return Ci ? Vn(e) === ar : Vn(e) === sr;
}
function Wl(e) {
  return Vn(e) === Kt;
}
function lr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function fn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || lr(
      `The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`
    ));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function ql(e, t, n) {
  fn(e, "mapStateToProps"), fn(t, "mapDispatchToProps"), fn(n, "mergeProps");
}
function Ul(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, d, p, l, u;
  function f(N, D) {
    return c = N, d = D, p = e(c, d), l = t(r, d), u = n(p, l, d), s = !0, u;
  }
  function v() {
    return p = e(c, d), t.dependsOnOwnProps && (l = t(r, d)), u = n(p, l, d), u;
  }
  function h() {
    return e.dependsOnOwnProps && (p = e(c, d)), t.dependsOnOwnProps && (l = t(r, d)), u = n(p, l, d), u;
  }
  function x() {
    const N = e(c, d), D = !a(N, p);
    return p = N, D && (u = n(p, l, d)), u;
  }
  function E(N, D) {
    const y = !i(D, d), b = !o(
      N,
      c,
      D,
      d
    );
    return c = N, d = D, y && b ? v() : y ? h() : b ? x() : u;
  }
  return function(D, y) {
    return s ? E(D, y) : f(D, y);
  };
}
function Hl(e, {
  initMapStateToProps: t,
  initMapDispatchToProps: n,
  initMergeProps: r,
  ...o
}) {
  const i = t(e, o), a = n(e, o), s = r(e, o);
  return process.env.NODE_ENV !== "production" && ql(i, a, s), Ul(i, a, s, e, o);
}
function Yl(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function Kl(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function $i(e, t, n) {
  Kl(e) || lr(
    `${n}() in ${t} must return a plain object. Instead received ${e}.`
  );
}
function Fn(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Qr(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Mi(e, t) {
  return function(r, { displayName: o }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Qr(e);
      let d = i(s, c);
      return typeof d == "function" && (i.mapToProps = d, i.dependsOnOwnProps = Qr(d), d = i(s, c)), process.env.NODE_ENV !== "production" && $i(d, o, t), d;
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
function Xl(e) {
  return e && typeof e == "object" ? Fn(
    (t) => (
      // @ts-ignore
      Yl(e, t)
    )
  ) : e ? typeof e == "function" ? (
    // @ts-ignore
    Mi(e, "mapDispatchToProps")
  ) : dr(e, "mapDispatchToProps") : Fn((t) => ({
    dispatch: t
  }));
}
function Jl(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Mi(e, "mapStateToProps")
  ) : dr(e, "mapStateToProps") : Fn(() => ({}));
}
function Zl(e, t, n) {
  return { ...n, ...e, ...t };
}
function Ql(e) {
  return function(n, { displayName: r, areMergedPropsEqual: o }) {
    let i = !1, a;
    return function(c, d, p) {
      const l = e(c, d, p);
      return i ? o(l, a) || (a = l) : (i = !0, a = l, process.env.NODE_ENV !== "production" && $i(a, r, "mergeProps")), a;
    };
  };
}
function ed(e) {
  return e ? typeof e == "function" ? Ql(e) : dr(e, "mergeProps") : () => Zl;
}
function td(e) {
  e();
}
function nd() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      td(() => {
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
function ji(e, t) {
  let n, r = eo, o = 0, i = !1;
  function a(h) {
    p();
    const x = r.subscribe(h);
    let E = !1;
    return () => {
      E || (E = !0, x(), l());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    v.onStateChange && v.onStateChange();
  }
  function d() {
    return i;
  }
  function p() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = nd());
  }
  function l() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = eo);
  }
  function u() {
    i || (i = !0, p());
  }
  function f() {
    i && (i = !1, l());
  }
  const v = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: d,
    trySubscribe: u,
    tryUnsubscribe: f,
    getListeners: () => r
  };
  return v;
}
var rd = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", od = /* @__PURE__ */ rd(), id = () => typeof navigator < "u" && navigator.product === "ReactNative", ad = /* @__PURE__ */ id(), sd = () => od || ad ? ne.useLayoutEffect : ne.useEffect, Lt = /* @__PURE__ */ sd();
function to(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function mn(e, t) {
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
var cd = {
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
}, ld = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, dd = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Li = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, pd = {
  [Vl]: dd,
  [Fl]: Li
};
function no(e) {
  return Wl(e) ? Li : pd[e.$$typeof] || cd;
}
var ud = Object.defineProperty, fd = Object.getOwnPropertyNames, ro = Object.getOwnPropertySymbols, md = Object.getOwnPropertyDescriptor, gd = Object.getPrototypeOf, oo = Object.prototype;
function zn(e, t) {
  if (typeof t != "string") {
    if (oo) {
      const i = gd(t);
      i && i !== oo && zn(e, i);
    }
    let n = fd(t);
    ro && (n = n.concat(ro(t)));
    const r = no(e), o = no(t);
    for (let i = 0; i < n.length; ++i) {
      const a = n[i];
      if (!ld[a] && !(o && o[a]) && !(r && r[a])) {
        const s = md(t, a);
        try {
          ud(e, a, s);
        } catch {
        }
      }
    }
  }
  return e;
}
var gn = /* @__PURE__ */ Symbol.for("react-redux-context"), vn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function vd() {
  if (!ne.createContext) return {};
  const e = vn[gn] ?? (vn[gn] = /* @__PURE__ */ new Map());
  let t = e.get(ne.createContext);
  return t || (t = ne.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(ne.createContext, t)), t;
}
var Bi = /* @__PURE__ */ vd(), hd = [null, null], bd = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function xd(e, t, n) {
  Lt(() => e(...t), n);
}
function yd(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function wd(e, t, n, r, o, i, a, s, c, d, p) {
  if (!e) return () => {
  };
  let l = !1, u = null;
  const f = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let x, E;
    try {
      x = r(
        h,
        o.current
      );
    } catch (N) {
      E = N, u = N;
    }
    E || (u = null), x === i.current ? a.current || d() : (i.current = x, c.current = x, a.current = !0, p());
  };
  return n.onStateChange = f, n.trySubscribe(), f(), () => {
    if (l = !0, n.tryUnsubscribe(), n.onStateChange = null, u)
      throw u;
  };
}
function Ed(e, t) {
  return e === t;
}
var io = !1;
function Nd(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = Ed,
  areOwnPropsEqual: i = mn,
  areStatePropsEqual: a = mn,
  areMergedPropsEqual: s = mn,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: d = Bi
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !io && (io = !0, lr(
    'The `pure` option has been removed. `connect` is now always a "pure/memoized" component'
  ));
  const p = d, l = Jl(e), u = Xl(t), f = ed(n), v = !!e;
  return (x) => {
    if (process.env.NODE_ENV !== "production" && !/* @__PURE__ */ zl(x))
      throw new Error(
        `You must pass a component to the function returned by connect. Instead received ${bd(
          x
        )}`
      );
    const E = x.displayName || x.name || "Component", N = `Connect(${E})`, D = {
      shouldHandleStateChanges: v,
      displayName: N,
      wrappedComponentName: E,
      WrappedComponent: x,
      // @ts-ignore
      initMapStateToProps: l,
      initMapDispatchToProps: u,
      initMergeProps: f,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function y(A) {
      const [$, j, w] = ne.useMemo(() => {
        const { reactReduxForwardedRef: k, ...ge } = A;
        return [A.context, k, ge];
      }, [A]), M = ne.useMemo(() => {
        let k = p;
        if ($ != null && $.Consumer && process.env.NODE_ENV !== "production") {
          if (!/* @__PURE__ */ Gl(
            // @ts-ignore
            /* @__PURE__ */ ne.createElement($.Consumer, null)
          ))
            throw new Error(
              "You must pass a valid React context consumer as `props.context`"
            );
          k = $;
        }
        return k;
      }, [$, p]), B = ne.useContext(M), K = !!A.store && !!A.store.getState && !!A.store.dispatch, G = !!B && !!B.store;
      if (process.env.NODE_ENV !== "production" && !K && !G)
        throw new Error(
          `Could not find "store" in the context of "${N}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${N} in connect options.`
        );
      const X = K ? A.store : B.store, J = G ? B.getServerState : X.getState, ee = ne.useMemo(() => Hl(X.dispatch, D), [X]), [pe, ie] = ne.useMemo(() => {
        if (!v) return hd;
        const k = ji(
          X,
          K ? void 0 : B.subscription
        ), ge = k.notifyNestedSubs.bind(k);
        return [k, ge];
      }, [X, K, B]), C = ne.useMemo(() => K ? B : {
        ...B,
        subscription: pe
      }, [K, B, pe]), R = ne.useRef(void 0), q = ne.useRef(w), U = ne.useRef(void 0), F = ne.useRef(!1), Y = ne.useRef(!1), H = ne.useRef(
        void 0
      );
      Lt(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const W = ne.useMemo(() => () => U.current && w === q.current ? U.current : ee(X.getState(), w), [X, w]), _ = ne.useMemo(() => (ge) => pe ? wd(
        v,
        X,
        pe,
        // @ts-ignore
        ee,
        q,
        R,
        F,
        Y,
        U,
        ie,
        ge
      ) : () => {
      }, [pe]);
      xd(yd, [
        q,
        R,
        F,
        w,
        U,
        ie
      ]);
      let P;
      try {
        P = ne.useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          _,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          W,
          J ? () => ee(J(), w) : W
        );
      } catch (k) {
        throw H.current && (k.message += `
The error may be correlated with this previous error:
${H.current.stack}

`), k;
      }
      Lt(() => {
        H.current = void 0, U.current = void 0, R.current = P;
      });
      const V = ne.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ ne.createElement(
          x,
          {
            ...P,
            ref: j
          }
        )
      ), [j, x, P]);
      return ne.useMemo(() => v ? /* @__PURE__ */ ne.createElement(M.Provider, { value: C }, V) : V, [M, V, C]);
    }
    const S = ne.memo(y);
    if (S.WrappedComponent = x, S.displayName = y.displayName = N, c) {
      const $ = ne.forwardRef(
        function(w, M) {
          return /* @__PURE__ */ ne.createElement(S, { ...w, reactReduxForwardedRef: M });
        }
      );
      return $.displayName = N, $.WrappedComponent = x, /* @__PURE__ */ zn($, x);
    }
    return /* @__PURE__ */ zn(S, x);
  };
}
var Vi = Nd;
function Dd(e) {
  const { children: t, context: n, serverState: r, store: o } = e, i = ne.useMemo(() => {
    const c = ji(o), d = {
      store: o,
      subscription: c,
      getServerState: r ? () => r : void 0
    };
    if (process.env.NODE_ENV === "production")
      return d;
    {
      const { identityFunctionCheck: p = "once", stabilityCheck: l = "once" } = e;
      return /* @__PURE__ */ Object.assign(d, {
        stabilityCheck: l,
        identityFunctionCheck: p
      });
    }
  }, [o, r]), a = ne.useMemo(() => o.getState(), [o]);
  Lt(() => {
    const { subscription: c } = i;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [i, a]);
  const s = n || Bi;
  return /* @__PURE__ */ ne.createElement(s.Provider, { value: i }, t);
}
var Od = Dd, Sd = process.env.NODE_ENV === "production", hn = "Invariant failed";
function ao(e, t) {
  if (Sd)
    throw new Error(hn);
  var n = typeof t == "function" ? t() : t, r = n ? "".concat(hn, ": ").concat(n) : hn;
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
}, Id = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, bn = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, ur = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? bn : r, i = t.border, a = i === void 0 ? bn : i, s = t.padding, c = s === void 0 ? bn : s, d = Pe(pr(n, o)), p = Pe(so(n, a)), l = Pe(so(p, c));
  return {
    marginBox: d,
    borderBox: Pe(n),
    paddingBox: p,
    contentBox: l,
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
}, Cd = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Bt = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = Id(r, n);
  return ur({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Vt = function(t, n) {
  return n === void 0 && (n = Cd()), Bt(t, n);
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
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ft.apply(null, arguments);
}
const kd = process.env.NODE_ENV === "production", _d = /[ \t]{2,}/g, Ad = /^[ \t]*/gm, co = (e) => e.replace(_d, " ").replace(Ad, "").trim(), Pd = (e) => co(`
  %c@hello-pangea/dnd

  %c${co(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Rd = (e) => [Pd(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Td = "__@hello-pangea/dnd-disable-dev-warnings";
function Gi(e, t) {
  kd || typeof window < "u" && window[Td] || console[e](...Rd(t));
}
const ue = Gi.bind(null, "warn"), Gn = Gi.bind(null, "error");
function Le() {
}
function $d(e, t) {
  return {
    ...e,
    ...t
  };
}
function _e(e, t, n) {
  const r = t.map((o) => {
    const i = $d(n, o.options);
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
const Md = process.env.NODE_ENV === "production", lo = "Invariant failed";
class ut extends Error {
}
ut.prototype.toString = function() {
  return this.message;
};
function g(e, t) {
  throw Md ? new ut(lo) : new ut(`${lo}: ${t || ""}`);
}
class jd extends me.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Le, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && ue(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof ut && (n.preventDefault(), process.env.NODE_ENV !== "production" && Gn(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = _e(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof ut) {
      process.env.NODE_ENV !== "production" && Gn(t.message), this.setState({});
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
const Ld = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, zt = (e) => e + 1, Bd = (e) => `
  You have lifted an item in position ${zt(e.source.index)}
`, Wi = (e, t) => {
  const n = e.droppableId === t.droppableId, r = zt(e.index), o = zt(t.index);
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
    `, Vd = (e) => {
  const t = e.destination;
  if (t)
    return Wi(e.source, t);
  const n = e.combine;
  return n ? qi(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, po = (e) => `
  The item has returned to its starting position
  of ${zt(e.index)}
`, Fd = (e) => {
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
  dragHandleUsageInstructions: Ld,
  onDragStart: Bd,
  onDragUpdate: Vd,
  onDragEnd: Fd
};
function zd(e, t) {
  return !!(e === t || Number.isNaN(e) && Number.isNaN(t));
}
function Ui(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (!zd(e[n], t[n]))
      return !1;
  return !0;
}
function te(e, t) {
  const n = he(() => ({
    inputs: t,
    result: e()
  }))[0], r = Q(!0), o = Q(n), a = r.current || !!(t && o.current.inputs && Ui(t, o.current.inputs)) ? o.current : {
    inputs: t,
    result: e()
  };
  return xe(() => {
    r.current = !1, o.current = a;
  }, [a]), a.result;
}
function L(e, t) {
  return te(() => e, t);
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
var Gd = (e, t) => {
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
}], Wd = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, qd = (e, t) => t ? Et(e, t.scroll.diff.displacement) : e, Ud = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, Hd = (e, t) => t && t.shouldClipSubject ? Gd(t.pageMarginBox, e) : Pe(e);
var Je = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = qd(e.marginBox, r), i = Ud(o, n, t), a = Hd(i, r);
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
const Yi = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Ki = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Xt = ye((e) => Object.values(e)), Yd = ye((e) => Object.values(e));
var He = ye((e, t) => Yd(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function mr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Jt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Zt = ye((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), Kd = ({
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
  const d = Zt(t, r);
  if (!c) {
    if (!d.length)
      return null;
    const f = d[d.length - 1];
    return a(f.descriptor.id);
  }
  const p = d.findIndex((f) => f.descriptor.id === c);
  p === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Could not find displaced item in set") : g());
  const l = p - 1;
  if (l < 0)
    return null;
  const u = d[l];
  return a(u.descriptor.id);
}, rt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Xi = {
  point: we,
  value: 0
}, mt = {
  invisible: {},
  visible: {},
  all: []
}, Xd = {
  displaced: mt,
  displacedBy: Xi,
  at: null
};
var Ae = (e, t) => (n) => e <= n && n <= t, Ji = (e) => {
  const t = Ae(e.top, e.bottom), n = Ae(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), a = n(r.left) || n(r.right);
    if (i && a)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, d = r.left < e.left && r.right > e.right;
    return c && d ? !0 : c && a || d && i;
  };
}, Jd = (e) => {
  const t = Ae(e.top, e.bottom), n = Ae(e.left, e.right);
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
}, Zi = {
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
var Zd = (e) => (t) => {
  const n = Ae(t.top, t.bottom), r = Ae(t.left, t.right);
  return (o) => e === gr ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const Qd = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : we;
  return Et(e, n);
}, ep = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, tp = (e, t, n) => n(t)(e), vr = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? Qd(e, t) : e;
  return ep(i, t, o) && tp(i, n, o);
}, np = (e) => vr({
  ...e,
  isVisibleThroughFrameFn: Ji
}), Qi = (e) => vr({
  ...e,
  isVisibleThroughFrameFn: Jd
}), rp = (e) => vr({
  ...e,
  isVisibleThroughFrameFn: Zd(e.destination.axis)
}), op = (e, t, n) => {
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
function ip(e, t) {
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
    const d = ip(c, n), p = c.descriptor.id;
    if (s.all.push(p), !np({
      target: d,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const u = op(p, i, o), f = {
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
function ap(e, t) {
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
  const o = ap(e, {
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
function Gt({
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
  const d = t.find((v) => v.descriptor.index === a);
  if (!d)
    return mo({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const p = Zt(e, t), l = t.indexOf(d), u = p.slice(l);
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
var sp = ({
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
}, cp = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, a = n[0].descriptor.index, s = n[n.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, lp = ({
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
  const d = a.at;
  if (d || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot move in direction without previous impact location") : g()), d.type === "REORDER") {
    const l = cp({
      isMovingForward: e,
      isInHomeList: t,
      location: d.destination,
      insideDestination: i
    });
    return l == null ? null : Gt({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: l
    });
  }
  const p = sp({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: r,
    combine: d.combine,
    afterCritical: c
  });
  return p == null ? null : Gt({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: p
  });
}, dp = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Fe(n, t) ? o ? we : nt(r.point) : o ? r.point : we;
}, pp = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = Jt(t);
  r || (process.env.NODE_ENV, g());
  const o = r.draggableId, i = n[o].page.borderBox.center, a = dp({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Ne(i, a);
};
const ea = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, up = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, hr = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, go = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.end] + ea(e, n), hr(e, t.marginBox, n)), vo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.start] - up(e, n), hr(e, t.marginBox, n)), fp = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => Ue(e.line, t.contentBox[e.start] + ea(e, n), hr(e, t.contentBox, n));
var mp = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = He(r.descriptor.id, n), a = t.page, s = r.axis;
  if (!i.length)
    return fp({
      axis: s,
      moveInto: r.page,
      isMoving: a
    });
  const {
    displaced: c,
    displacedBy: d
  } = e, p = c.all[0];
  if (p) {
    const u = n[p];
    if (Fe(p, o))
      return vo({
        axis: s,
        moveRelativeTo: u.page,
        isMoving: a
      });
    const f = Bt(u.page, d.point);
    return vo({
      axis: s,
      moveRelativeTo: f,
      isMoving: a
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Fe(l.descriptor.id, o)) {
    const u = Bt(l.page, nt(o.displacedBy.point));
    return go({
      axis: s,
      moveRelativeTo: u,
      isMoving: a
    });
  }
  return go({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, Wn = (e, t) => {
  const n = e.frame;
  return n ? Ne(t, n.scroll.diff.displacement) : t;
};
const gp = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !n || !a ? i : a.type === "REORDER" ? mp({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : pp({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var Qt = (e) => {
  const t = gp(e), n = e.droppable;
  return n ? Wn(n, t) : t;
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
function vp(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var hp = ({
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
  }), d = gt({
    afterDragging: ho(s.all, r),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), p = {}, l = {}, u = [s, c, d];
  return s.all.forEach((v) => {
    const h = vp(v, u);
    if (h) {
      l[v] = h;
      return;
    }
    p[v] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: p,
      visible: l
    }
  };
}, bp = (e, t) => Ne(e.scroll.diff.displacement, t), br = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = bp(n, e), o = Se(r, t.page.borderBox.center);
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
  return i ? rp(c) : Qi(c);
}, xp = ({
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
  const d = He(n.descriptor.id, r), p = rt(t, n), l = Kd({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: d,
    previousImpact: o
  }) || lp({
    isMovingForward: e,
    isInHomeList: p,
    draggable: t,
    draggables: r,
    destination: n,
    insideDestination: d,
    previousImpact: o,
    viewport: i,
    afterCritical: c
  });
  if (!l)
    return null;
  const u = Qt({
    impact: l,
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
      impact: l,
      scrollJumpRequest: null
    };
  const v = Se(u, a), h = hp({
    impact: l,
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
var yp = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const a = n.axis, s = Ae(i[a.start], i[a.end]), c = Xt(r).filter((p) => p !== n).filter((p) => p.isEnabled).filter((p) => !!p.subject.active).filter((p) => Ji(o.frame)(De(p))).filter((p) => {
    const l = De(p);
    return e ? i[a.crossAxisEnd] < l[a.crossAxisEnd] : l[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((p) => {
    const l = De(p), u = Ae(l[a.start], l[a.end]);
    return s(l[a.start]) || s(l[a.end]) || u(i[a.start]) || u(i[a.end]);
  }).sort((p, l) => {
    const u = De(p)[a.crossAxisStart], f = De(l)[a.crossAxisStart];
    return e ? u - f : f - u;
  }).filter((p, l, u) => De(p)[a.crossAxisStart] === De(u[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const d = c.filter((p) => Ae(De(p)[a.start], De(p)[a.end])(t[a.line]));
  return d.length === 1 ? d[0] : d.length > 1 ? d.sort((p, l) => De(p)[a.start] - De(l)[a.start])[0] : c.sort((p, l) => {
    const u = uo(t, fo(De(p))), f = uo(t, fo(De(l)));
    return u !== f ? u - f : De(p)[a.start] - De(l)[a.start];
  })[0];
};
const bo = (e, t) => {
  const n = e.page.borderBox.center;
  return Fe(e.descriptor.id, t) ? Se(n, t.displacedBy.point) : n;
}, wp = (e, t) => {
  const n = e.page.borderBox;
  return Fe(e.descriptor.id, t) ? Et(n, nt(t.displacedBy.point)) : n;
};
var Ep = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((a) => Qi({
  target: wp(a, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = ft(e, Wn(n, bo(a, o))), d = ft(e, Wn(n, bo(s, o)));
  return c < d ? -1 : d < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Nt = ye(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: Ue(t.line, r)
  };
});
const Np = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return Ue(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = He(e.descriptor.id, n).reduce((d, p) => d + p.client.marginBox[r.size], 0) + t[r.line] - o;
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
  const o = Nt(e.axis, t.displaceBy).point, i = Np(e, o, n), a = {
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
  const s = i ? Ne(r.scroll.max, i) : r.scroll.max, c = ra(r, s), d = Je({
    page: e.subject.page,
    withPlaceholder: a,
    axis: e.axis,
    frame: c
  });
  return {
    ...e,
    subject: d,
    frame: c
  };
}, Dp = (e) => {
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
var Op = ({
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
    const l = {
      displaced: mt,
      displacedBy: Xi,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, u = Qt({
      impact: l,
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
    }) ? l : null;
  }
  const c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], d = (() => {
    const l = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || c ? l : l + 1;
  })(), p = Nt(i.axis, r.displaceBy);
  return Gt({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: a,
    displacedBy: p,
    last: mt,
    index: d
  });
}, Sp = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = yp({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const d = He(c.descriptor.id, o), p = Ep({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: d,
    afterCritical: s
  }), l = Op({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: n,
    draggables: o,
    moveRelativeTo: p,
    insideDestination: d,
    viewport: a,
    afterCritical: s
  });
  if (!l)
    return null;
  const u = Qt({
    impact: l,
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
    impact: l,
    scrollJumpRequest: null
  };
}, Ie = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Ip = (e, t) => {
  const n = Ie(e);
  return n ? t[n] : null;
};
var Cp = ({
  state: e,
  type: t
}) => {
  const n = Ip(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", d = e.dimensions.draggables[e.critical.draggable.id], p = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: u
  } = e.dimensions;
  return s ? xp({
    isMovingForward: c,
    previousPageBorderBoxCenter: p,
    draggable: d,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Sp({
    isMovingForward: c,
    previousPageBorderBoxCenter: p,
    draggable: d,
    isOver: i,
    draggables: l,
    droppables: u,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function We(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function ia(e) {
  const t = Ae(e.top, e.bottom), n = Ae(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function kp(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function _p({
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
function Ap({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = Xt(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !kp(e, i))
      return !1;
    if (ia(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], d = e[a.crossAxisEnd], p = Ae(i[a.crossAxisStart], i[a.crossAxisEnd]), l = p(c), u = p(d);
    return !l && !u ? !0 : l ? c < s : d > s;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : _p({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const aa = (e, t) => Pe(Et(e, t));
var Pp = (e, t) => {
  const n = e.frame;
  return n ? aa(t, n.scroll.diff.value) : t;
};
function sa({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Rp({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Tp = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = n.axis, c = Nt(n.axis, t.displaceBy), d = c.value, p = e[s.start], l = e[s.end], f = Zt(t, r).find((h) => {
    const x = h.descriptor.id, E = h.page.borderBox.center[s.line], N = Fe(x, a), D = sa({
      displaced: o,
      id: x
    });
    return N ? D ? l <= E : p < E - d : D ? l <= E + d : p < E;
  }) || null, v = Rp({
    draggable: t,
    closest: f,
    inHomeList: rt(t, n)
  });
  return Gt({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: c,
    index: v
  });
};
const $p = 4;
var Mp = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const a = r.axis, s = Nt(r.axis, e.displaceBy), c = s.value, d = t[a.start], p = t[a.end], u = Zt(e, o).find((v) => {
    const h = v.descriptor.id, x = v.page.borderBox, N = x[a.size] / $p, D = Fe(h, i), y = sa({
      displaced: n.displaced,
      id: h
    });
    return D ? y ? p > x[a.start] + N && p < x[a.end] - N : d > x[a.start] - c + N && d < x[a.end] - c - N : y ? p > x[a.start] + c + N && p < x[a.end] + c - N : d > x[a.start] + N && d < x[a.end] - N;
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
  const s = aa(t.page.borderBox, e), c = Ap({
    pageBorderBox: s,
    draggable: t,
    droppables: r
  });
  if (!c)
    return Xd;
  const d = r[c], p = He(d.descriptor.id, n), l = Pp(d, s);
  return Mp({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: d,
    insideDestination: p,
    afterCritical: a
  }) || Tp({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: d,
    insideDestination: p,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, xr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const jp = ({
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
  const a = Dp(i);
  return xr(n, a);
};
var Lp = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = jp({
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
  const a = r || e.viewport, s = n || e.dimensions, c = t || e.current.client.selection, d = Se(c, e.initial.client.selection), p = {
    offset: d,
    selection: c,
    borderBoxCenter: Ne(e.initial.client.borderBoxCenter, d)
  }, l = {
    selection: Ne(p.selection, a.scroll.current),
    borderBoxCenter: Ne(p.borderBoxCenter, a.scroll.current),
    offset: Ne(p.offset, a.scroll.diff.value)
  }, u = {
    client: p,
    page: l
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: s,
      viewport: a,
      current: u
    };
  const f = s.draggables[e.critical.draggable.id], v = o || ca({
    pageOffset: l.offset,
    draggable: f,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), h = Lp({
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
function Bp(e, t) {
  return e.map((n) => t[n]);
}
var la = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = Bp(i.all, n), s = gt({
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
  const a = Qt({
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
  } = i, c = a[e.critical.draggable.id], d = Ie(r);
  d || (process.env.NODE_ENV !== "production" ? g(!1, "Must be over a destination in SNAP movement mode") : g());
  const p = s[d], l = la({
    impact: r,
    viewport: o,
    destination: p,
    draggables: a
  }), u = da({
    impact: l,
    draggable: c,
    droppable: p,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return lt({
    impact: l,
    clientSelection: u,
    state: e,
    dimensions: i,
    viewport: o
  });
}, Vp = (e) => ({
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
  const s = i.slice(a + 1), c = s.reduce((u, f) => (u[f.descriptor.id] = !0, u), {}), d = {
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
        destination: Vp(e.descriptor)
      }
    },
    afterCritical: d
  };
}, Fp = (e, t) => ({
  draggables: e.draggables,
  droppables: xr(e.droppables, t)
});
const Dt = (e) => {
  process.env.NODE_ENV;
}, Ot = (e) => {
  process.env.NODE_ENV;
};
var zp = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = Bt(e.client, t), o = Vt(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, Gp = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Expected Droppable to have a frame") : g()), t;
}, Wp = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = Gp(a).scroll.diff.value, d = Ne(r, c);
    return zp({
      draggable: o,
      offset: d,
      initialWindowScroll: n.scroll.initial
    });
  });
}, qp = ({
  state: e,
  published: t
}) => {
  Dt();
  const n = t.modified.map((E) => {
    const N = e.dimensions.droppables[E.droppableId];
    return fr(N, E.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Yi(n)
  }, o = Ki(Wp({
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
  }, s = Ie(e.impact), c = s ? a.droppables[s] : null, d = a.draggables[e.critical.draggable.id], p = a.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: u
  } = ua({
    draggable: d,
    home: p,
    draggables: i,
    viewport: e.viewport
  }), f = c && c.isCombineEnabled ? e.impact : l, v = ca({
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
    onLiftImpact: l,
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
const qn = (e) => e.movementMode === "SNAP", xn = (e, t, n) => {
  const r = Fp(e.dimensions, t);
  return !qn(e) || n ? lt({
    state: e,
    dimensions: r
  }) : pa({
    state: e,
    dimensions: r
  });
};
function yn(e) {
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
var Up = (e = xo, t) => {
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
    } = t.payload, s = i.draggables[n.draggable.id], c = i.droppables[n.droppable.id], d = {
      selection: r,
      borderBoxCenter: s.client.borderBox.center,
      offset: we
    }, p = {
      client: d,
      page: {
        selection: Ne(d.selection, o.scroll.initial),
        borderBoxCenter: Ne(d.selection, o.scroll.initial),
        offset: Ne(d.selection, o.scroll.diff.value)
      }
    }, l = Xt(i.droppables).every((h) => !h.isFixedOnPage), {
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
      isWindowScrollAllowed: l,
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : g()), qp({
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
      impact: qn(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return yn(e);
    We(e) || (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} not permitted in phase ${e.phase}`) : g());
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = fr(o, r);
    return xn(e, i, !1);
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
    return xn(e, i, !0);
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
    return xn(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot move by window in phase ${e.phase}`) : g()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? g(!1, "Window scrolling is currently not supported for fixed lists") : g());
    const n = t.payload.newScroll;
    if (Be(e.viewport.scroll.current, n))
      return yn(e);
    const r = ta(e.viewport, n);
    return qn(e) ? pa({
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
    const n = Cp({
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
const Hp = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Yp = (e) => ({
  type: "LIFT",
  payload: e
}), Kp = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Xp = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), Jp = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Zp = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), Qp = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), eu = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), fa = (e) => ({
  type: "MOVE",
  payload: e
}), tu = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), nu = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), ru = () => ({
  type: "MOVE_UP",
  payload: null
}), ou = () => ({
  type: "MOVE_DOWN",
  payload: null
}), iu = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), au = () => ({
  type: "MOVE_LEFT",
  payload: null
}), yr = () => ({
  type: "FLUSH",
  payload: null
}), su = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), wr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), ma = (e) => ({
  type: "DROP",
  payload: e
}), cu = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ga = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function lu(e) {
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
  process.env.NODE_ENV !== "production" && ue(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${r}
  `);
}
function du(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = He(e.droppable.id, t.draggables);
    lu(n);
  }
}
var pu = (e) => ({
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
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Unexpected phase to start a drag") : g()), n(yr()), n(Hp({
    draggableId: i,
    movementMode: s
  }));
  const p = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: s === "SNAP"
    }
  }, {
    critical: l,
    dimensions: u,
    viewport: f
  } = e.startPublishing(p);
  du(l, u), n(Kp({
    critical: l,
    dimensions: u,
    clientSelection: a,
    movementMode: s,
    viewport: f
  }));
}, uu = (e) => () => (t) => (n) => {
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
}, yo = (e) => Be(e, we) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Un = {
  moveTo: yo,
  drop: (e, t) => {
    const n = yo(e);
    if (n)
      return t ? `${n} scale(${vt.scale.drop})` : n;
  }
}, {
  minDropTime: Hn,
  maxDropTime: ha
} = va, fu = ha - Hn, wo = 1500, mu = 0.6;
var gu = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = ft(e, t);
  if (r <= 0)
    return Hn;
  if (r >= wo)
    return ha;
  const o = r / wo, i = Hn + fu * o, a = n === "CANCEL" ? i * mu : i;
  return Number(a.toFixed(2));
}, vu = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = n, s = Ie(e), c = s ? a[s] : null, d = a[t.descriptor.droppableId], p = da({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || d,
    viewport: r
  });
  return Se(p, t.client.borderBox.center);
}, hu = ({
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
const bu = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (!le(r, "DROP")) {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(cu({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? g(!1, "A DROP action occurred while DROP_PENDING and still waiting") : g()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot drop in phase: ${o.phase}`) : g());
  const s = o.critical, c = o.dimensions, d = c.draggables[o.critical.draggable.id], {
    impact: p,
    didDropInsideDroppable: l
  } = hu({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), u = l ? mr(p) : null, f = l ? Jt(p) : null, v = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, h = {
    draggableId: d.descriptor.id,
    type: d.descriptor.type,
    source: v,
    reason: i,
    mode: o.movementMode,
    destination: u,
    combine: f
  }, x = vu({
    impact: p,
    draggable: d,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), E = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: h,
    impact: p
  };
  if (!(!Be(o.current.client.offset, x) || !!h.combine)) {
    t(wr({
      completed: E
    }));
    return;
  }
  const D = gu({
    current: o.current.client.offset,
    destination: x,
    reason: i
  });
  t(su({
    newHomeClientOffset: x,
    dropDuration: D,
    completed: E
  }));
};
var ba = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function xu(e) {
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
function yu({
  onWindowScroll: e
}) {
  function t() {
    e(ba());
  }
  const n = pt(t), r = xu(n);
  let o = Le;
  function i() {
    return o !== Le;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start scroll listener when already active") : g()), o = _e(window, [r]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop scroll listener when not active") : g()), n.cancel(), o(), o = Le;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const wu = (e) => le(e, "DROP_COMPLETE") || le(e, "DROP_ANIMATE") || le(e, "FLUSH"), Eu = (e) => {
  const t = yu({
    onWindowScroll: (n) => {
      e.dispatch(tu({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && le(r, "INITIAL_PUBLISH") && t.start(), t.isActive() && wu(r) && t.stop(), n(r);
  };
};
var Nu = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && ue("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && ue(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(r);
  };
  return o.wasCalled = () => t, o;
}, Du = () => {
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
const Ou = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Su = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Iu = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, it = (e, t) => {
  Dt(), t(), Ot();
}, At = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function wn(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = Nu(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var Cu = (e, t) => {
  const n = Du();
  let r = null;
  const o = (l, u) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : g()), it("onBeforeCapture", () => {
      const f = e().onBeforeCapture;
      f && f({
        draggableId: l,
        mode: u
      });
    });
  }, i = (l, u) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g()), it("onBeforeDragStart", () => {
      const f = e().onBeforeDragStart;
      f && f(At(l, u));
    });
  }, a = (l, u) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g());
    const f = At(l, u);
    r = {
      mode: u,
      lastCritical: l,
      lastLocation: f.source,
      lastCombine: null
    }, n.add(() => {
      it("onDragStart", () => wn(e().onDragStart, f, t, $t.onDragStart));
    });
  }, s = (l, u) => {
    const f = mr(u), v = Jt(u);
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragMove when onDragStart has not been called") : g());
    const h = !Iu(l, r.lastCritical);
    h && (r.lastCritical = l);
    const x = !Ou(r.lastLocation, f);
    x && (r.lastLocation = f);
    const E = !Su(r.lastCombine, v);
    if (E && (r.lastCombine = v), !h && !x && !E)
      return;
    const N = {
      ...At(l, r.mode),
      combine: v,
      destination: f
    };
    n.add(() => {
      it("onDragUpdate", () => wn(e().onDragUpdate, N, t, $t.onDragUpdate));
    });
  }, c = () => {
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Can only flush responders while dragging") : g()), n.flush();
  }, d = (l) => {
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : g()), r = null, it("onDragEnd", () => wn(e().onDragEnd, l, t, $t.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: a,
    update: s,
    flush: c,
    drop: d,
    abort: () => {
      if (!r)
        return;
      const l = {
        ...At(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      d(l);
    }
  };
}, ku = (e, t) => {
  const n = Cu(e, t);
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
const _u = (e) => (t) => (n) => {
  if (!le(n, "DROP_ANIMATION_FINISHED")) {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot finish a drop animating when no drop is occurring") : g()), e.dispatch(wr({
    completed: r.completed
  }));
}, Au = (e) => {
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
      n = null, t = _e(window, [a]);
    });
  };
};
var Pu = (e) => () => (t) => (n) => {
  (le(n, "DROP_COMPLETE") || le(n, "FLUSH") || le(n, "DROP_ANIMATE")) && e.stopPublishing(), t(n);
}, Ru = (e) => {
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
const Tu = (e) => le(e, "DROP_COMPLETE") || le(e, "DROP_ANIMATE") || le(e, "FLUSH");
var $u = (e) => (t) => (n) => (r) => {
  if (Tu(r)) {
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
const Mu = (e) => (t) => (n) => {
  if (t(n), !le(n, "PUBLISH_WHILE_DRAGGING"))
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(ma({
    reason: r.reason
  })));
}, ju = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Ii;
var Lu = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => Si(Up, ju(Pl(uu(n), Pu(e), pu(e), bu, _u, Au, Mu, $u(i), Eu, Ru(t), ku(r, o))));
const En = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Bu({
  registry: e,
  callbacks: t
}) {
  let n = En(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, Dt();
      const {
        additions: c,
        removals: d,
        modified: p
      } = n, l = Object.keys(c).map((v) => e.draggable.getById(v).getDimension(we)).sort((v, h) => v.descriptor.index - h.descriptor.index), u = Object.keys(p).map((v) => {
        const x = e.droppable.getById(v).callbacks.getScrollWhileDragging();
        return {
          droppableId: v,
          scroll: x
        };
      }), f = {
        additions: l,
        removals: Object.keys(d),
        modified: u
      };
      n = En(), Ot(), t.publish(f);
    }));
  };
  return {
    add: (c) => {
      const d = c.descriptor.id;
      n.additions[d] = c, n.modified[c.descriptor.droppableId] = !0, n.removals[d] && delete n.removals[d], o();
    },
    remove: (c) => {
      const d = c.descriptor;
      n.removals[d.id] = !0, n.modified[d.droppableId] = !0, n.additions[d.id] && delete n.additions[d.id], o();
    },
    stop: () => {
      r && (cancelAnimationFrame(r), r = null, n = En());
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
}, Vu = () => {
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
}, Fu = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  Dt();
  const r = Vu(), o = r.scroll.current, i = e.droppable, a = n.droppable.getAllByType(i.type).map((p) => p.callbacks.getDimensionAndWatchScroll(o, t)), s = n.draggable.getAllByType(e.draggable.type).map((p) => p.getDimension(o)), c = {
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
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && ue(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var zu = (e, t) => {
  let n = null;
  const r = Bu({
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
  }, d = (u) => {
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
      }, x = e.subscribe(d);
      return n = {
        critical: h,
        unsubscribe: x
      }, Fu({
        critical: h,
        registry: e,
        scrollOptions: u.scrollOptions
      });
    },
    stopPublishing: c
  };
}, Ea = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Gu = (e) => {
  window.scrollBy(e.x, e.y);
};
const Wu = ye((e) => Xt(e).filter((t) => !(!t.isEnabled || !t.frame))), qu = (e, t) => Wu(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? g(!1, "Invalid result") : g()), ia(r.frame.pageMarginBox)(e))) || null;
var Uu = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return qu(e, n);
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
var Hu = (e, t, n = () => ht) => {
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
  return r === 0 ? (process.env.NODE_ENV !== "production" && ue(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (n - e) / r;
}, Nr = 1, Yu = (e, t, n = () => ht) => {
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
}, Ku = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, a = t, s = i, d = Date.now() - a;
  if (d >= i)
    return e;
  if (d < o)
    return Nr;
  const p = Na({
    startOfRange: o,
    endOfRange: s,
    current: d
  }), l = e * r.ease(p);
  return Math.ceil(l);
}, No = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = Yu(e, t, o);
  return i === 0 ? 0 : r ? Math.max(Ku(i, n, o), Nr) : i;
}, Do = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Hu(e, r, i);
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
}, Xu = ({
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
const Ju = Hi((e) => e === 0 ? 0 : e);
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
    axis: Zi,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), d = Ju({
    x: c,
    y: s
  });
  if (Be(d, we))
    return null;
  const p = Xu({
    container: t,
    subject: n,
    proposedScroll: d
  });
  return p ? Be(p, we) ? null : p : null;
};
const Zu = Hi((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Dr = /* @__PURE__ */ (() => {
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
  }, o = Zu(n), i = Dr({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Or = (e, t) => Oa({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Qu = (e, t) => {
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
}, ef = (e, t) => {
  const n = e.frame;
  return !n || !Sr(e, t) ? null : Dr({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var tf = ({
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
}, nf = ({
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
    const l = e.viewport, u = tf({
      dragStartTime: t,
      viewport: l,
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
  const d = Uu({
    center: a,
    destination: Ie(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!d)
    return;
  const p = nf({
    dragStartTime: t,
    droppable: d,
    subject: c,
    center: a,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  p && o(d.descriptor.id, p);
}, rf = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => ht
}) => {
  const r = pt(e), o = pt(t);
  let i = null;
  const a = (d) => {
    i || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fluid scroll if not dragging") : g());
    const {
      shouldUseTimeDampening: p,
      dragStartTime: l
    } = i;
    Oo({
      state: d,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: l,
      shouldUseTimeDampening: p,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (d) => {
      Dt(), i && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start auto scrolling when already started") : g());
      const p = Date.now();
      let l = !1;
      const u = () => {
        l = !0;
      };
      Oo({
        state: d,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: u,
        scrollDroppable: u,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: p,
        shouldUseTimeDampening: l
      }, Ot(), l && a(d);
    },
    stop: () => {
      i && (r.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, of = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: n
}) => {
  const r = (s, c) => {
    const d = Ne(s.current.client.selection, c);
    e({
      client: d
    });
  }, o = (s, c) => {
    if (!Sr(s, c))
      return c;
    const d = ef(s, c);
    if (!d)
      return t(s.descriptor.id, c), null;
    const p = Se(c, d);
    return t(s.descriptor.id, p), Se(c, p);
  }, i = (s, c, d) => {
    if (!s || !Or(c, d))
      return d;
    const p = Qu(c, d);
    if (!p)
      return n(d), null;
    const l = Se(d, p);
    return n(l), Se(d, l);
  };
  return (s) => {
    const c = s.scrollJumpRequest;
    if (!c)
      return;
    const d = Ie(s.impact);
    d || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot perform a jump scroll when there is no destination") : g());
    const p = o(s.dimensions.droppables[d], c);
    if (!p)
      return;
    const l = s.viewport, u = i(s.isWindowScrollAllowed, l, p);
    u && r(s, u);
  };
}, af = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = rf({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = of({
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
})(), Yn = (() => {
  const e = `${Ze}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), sf = (() => {
  const e = `${Ze}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), So = {
  contextId: `${Ze}-scroll-container-context-id`
}, cf = (e) => (t) => `[${t}="${e}"]`, at = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), lf = "pointer-events: none;";
var df = (e) => {
  const t = cf(e), n = (() => {
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
        dragging: lf,
        dropAnimating: s
      }
    };
  })(), r = (() => {
    const s = `
      transition: ${dt.outOfTheWay};
    `;
    return {
      selector: t(Yn.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(sf.contextId),
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
const Ce = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? as : xe, Nn = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find the head to append a style to") : g()), e;
}, Io = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function pf(e, t) {
  const n = te(() => df(e), [e]), r = Q(null), o = Q(null), i = L(ye((l) => {
    const u = o.current;
    u || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), u.textContent = l;
  }), []), a = L((l) => {
    const u = r.current;
    u || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), u.textContent = l;
  }, []);
  Ce(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? g(!1, "style elements already mounted") : g());
    const l = Io(t), u = Io(t);
    return r.current = l, o.current = u, l.setAttribute(`${Ze}-always`, e), u.setAttribute(`${Ze}-dynamic`, e), Nn().appendChild(l), Nn().appendChild(u), a(n.always), i(n.resting), () => {
      const f = (v) => {
        const h = v.current;
        h || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot unmount ref as it is not set") : g()), Nn().removeChild(h), v.current = null;
      };
      f(r), f(o);
    };
  }, [t, a, i, n.always, n.resting, e]);
  const s = L(() => i(n.dragging), [i, n.dragging]), c = L((l) => {
    if (l === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), d = L(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return te(() => ({
    dragging: s,
    dropping: c,
    resting: d
  }), [s, c, d]);
}
function Sa(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Ia = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function St(e) {
  return e instanceof Ia(e).HTMLElement;
}
function Ca(e, t) {
  const n = `[${Qe.contextId}="${e}"]`, r = Sa(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && ue(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(Qe.draggableId) === t);
  return o ? St(o) ? o : (process.env.NODE_ENV !== "production" && ue("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ue(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function uf(e) {
  const t = Q({}), n = Q(null), r = Q(null), o = Q(!1), i = L(function(u, f) {
    const v = {
      id: u,
      focus: f
    };
    return t.current[u] = v, function() {
      const x = t.current;
      x[u] !== v && delete x[u];
    };
  }, []), a = L(function(u) {
    const f = Ca(e, u);
    f && f !== document.activeElement && f.focus();
  }, [e]), s = L(function(u, f) {
    n.current === u && (n.current = f);
  }, []), c = L(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const u = n.current;
      u && a(u);
    }));
  }, [a]), d = L(function(u) {
    n.current = null;
    const f = document.activeElement;
    f && f.getAttribute(Qe.draggableId) === u && (n.current = u);
  }, []);
  return Ce(() => (o.current = !0, function() {
    o.current = !1;
    const u = r.current;
    u && cancelAnimationFrame(u);
  }), []), te(() => ({
    register: i,
    tryRecordFocus: d,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, d, c, s]);
}
function ff() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function n(l) {
    return t.push(l), function() {
      const f = t.indexOf(l);
      f !== -1 && t.splice(f, 1);
    };
  }
  function r(l) {
    t.length && t.forEach((u) => u(l));
  }
  function o(l) {
    return e.draggables[l] || null;
  }
  function i(l) {
    const u = o(l);
    return u || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find draggable entry with id [${l}]`) : g()), u;
  }
  const a = {
    register: (l) => {
      e.draggables[l.descriptor.id] = l, r({
        type: "ADDITION",
        value: l
      });
    },
    update: (l, u) => {
      const f = e.draggables[u.descriptor.id];
      f && f.uniqueId === l.uniqueId && (delete e.draggables[u.descriptor.id], e.draggables[l.descriptor.id] = l);
    },
    unregister: (l) => {
      const u = l.descriptor.id, f = o(u);
      f && l.uniqueId === f.uniqueId && (delete e.draggables[u], e.droppables[l.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: l
      }));
    },
    getById: i,
    findById: o,
    exists: (l) => !!o(l),
    getAllByType: (l) => Object.values(e.draggables).filter((u) => u.descriptor.type === l)
  };
  function s(l) {
    return e.droppables[l] || null;
  }
  function c(l) {
    const u = s(l);
    return u || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find droppable entry with id [${l}]`) : g()), u;
  }
  const d = {
    register: (l) => {
      e.droppables[l.descriptor.id] = l;
    },
    unregister: (l) => {
      const u = s(l.descriptor.id);
      u && l.uniqueId === u.uniqueId && delete e.droppables[l.descriptor.id];
    },
    getById: c,
    findById: s,
    exists: (l) => !!s(l),
    getAllByType: (l) => Object.values(e.droppables).filter((u) => u.descriptor.type === l)
  };
  function p() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: a,
    droppable: d,
    subscribe: n,
    clean: p
  };
}
function mf() {
  const e = te(ff, []);
  return xe(() => function() {
    e.clean();
  }, [e]), e;
}
var Ir = me.createContext(null), bt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.body") : g()), e;
};
const gf = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
}, vf = (e) => `rfd-announcement-${e}`;
function hf(e) {
  const t = te(() => vf(e), [e]), n = Q(null);
  return xe(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Ft(i.style, gf), bt().appendChild(i), function() {
      setTimeout(function() {
        const c = bt();
        c.contains(i) && c.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), L((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && ue(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
const bf = {
  separator: "::"
};
function Cr(e, t = bf) {
  const n = me.useId();
  return te(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
function xf({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function yf({
  contextId: e,
  text: t
}) {
  const n = Cr("hidden-text", {
    separator: "-"
  }), r = te(() => xf({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return xe(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", bt().appendChild(i), function() {
      const s = bt();
      s.contains(i) && s.removeChild(i);
    };
  }, [r, t]), r;
}
var en = me.createContext(null), wf = {
  react: "^18.0.0 || ^19.0.0"
};
const Ef = /(\d+)\.(\d+)\.(\d+)/, Co = (e) => {
  const t = Ef.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? g(!1, `Unable to parse React version ${e}`) : g());
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, Nf = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Df = (e, t) => {
  const n = Co(e), r = Co(t);
  Nf(n, r) || process.env.NODE_ENV !== "production" && ue(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Dn = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Of = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && ue(`
      No <!doctype html> found.

      ${Dn}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && ue(`
      Unexpected <!doctype> found: (${t.name})

      ${Dn}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && ue(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Dn}
    `);
};
function kr(e) {
  process.env.NODE_ENV !== "production" && e();
}
function It(e, t) {
  kr(() => {
    xe(() => {
      try {
        e();
      } catch (n) {
        Gn(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function Sf() {
  It(() => {
    Df(wf.react, me.version), Of(document);
  }, []);
}
function _r(e) {
  const t = Q(e);
  return xe(() => {
    t.current = e;
  }), t;
}
function If() {
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
const Cf = 9, kf = 13, Ar = 27, ka = 32, _f = 33, Af = 34, Pf = 35, Rf = 36, Tf = 37, $f = 38, Mf = 39, jf = 40, Lf = {
  [kf]: !0,
  [Cf]: !0
};
var _a = (e) => {
  Lf[e.keyCode] && e.preventDefault();
};
const tn = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})(), Aa = 0, ko = 5;
function Bf(e, t) {
  return Math.abs(t.x - e.x) >= ko || Math.abs(t.y - e.y) >= ko;
}
const _o = {
  type: "IDLE"
};
function Vf({
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
      if (i !== Aa)
        return;
      const c = {
        x: a,
        y: s
      }, d = n();
      if (d.type === "DRAGGING") {
        o.preventDefault(), d.actions.move(c);
        return;
      }
      d.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot be IDLE") : g());
      const p = d.point;
      if (!Bf(p, c))
        return;
      o.preventDefault();
      const l = d.actions.fluidLift(c);
      r({
        type: "DRAGGING",
        actions: l
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
      if (o.keyCode === Ar) {
        o.preventDefault(), e();
        return;
      }
      _a(o);
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
    eventName: tn,
    fn: e
  }];
}
function Ff(e) {
  const t = Q(_o), n = Q(Le), r = te(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== Aa || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
        return;
      const u = e.findClosestDraggableId(l);
      if (!u)
        return;
      const f = e.tryGetLock(u, a, {
        sourceEvent: l
      });
      if (!f)
        return;
      l.preventDefault();
      const v = {
        x: l.clientX,
        y: l.clientY
      };
      n.current(), d(f, v);
    }
  }), [e]), o = te(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (p) => {
      if (p.defaultPrevented)
        return;
      const l = e.findClosestDraggableId(p);
      if (!l)
        return;
      const u = e.findOptionsForDraggable(l);
      u && (u.shouldRespectForcePress || e.canGetLock(l) && p.preventDefault());
    }
  }), [e]), i = L(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    n.current = _e(window, [o, r], l);
  }, [o, r]), a = L(() => {
    t.current.type !== "IDLE" && (t.current = _o, n.current(), i());
  }, [i]), s = L(() => {
    const p = t.current;
    a(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [a]), c = L(function() {
    const l = {
      capture: !0,
      passive: !1
    }, u = Vf({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (f) => {
        t.current = f;
      }
    });
    n.current = _e(window, u, l);
  }, [s, a]), d = L(function(l, u) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g()), t.current = {
      type: "PENDING",
      point: u,
      actions: l
    }, c();
  }, [c]);
  Ce(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function zf() {
}
const Gf = {
  [Af]: !0,
  [_f]: !0,
  [Rf]: !0,
  [Pf]: !0
};
function Wf(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Ar) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === ka) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === jf) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === $f) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Mf) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Tf) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Gf[o.keyCode]) {
        o.preventDefault();
        return;
      }
      _a(o);
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
    eventName: tn,
    fn: n
  }];
}
function qf(e) {
  const t = Q(zf), n = te(() => ({
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
      const d = s.snapLift();
      t.current();
      function p() {
        c || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop capturing a keyboard drag when not capturing") : g()), c = !1, t.current(), r();
      }
      t.current = _e(window, Wf(d, p), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = L(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = _e(window, [n], i);
  }, [n]);
  Ce(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const On = {
  type: "IDLE"
}, Uf = 120, Hf = 0.15;
function Yf({
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
      n.keyCode === Ar && n.preventDefault(), e();
    }
  }, {
    eventName: tn,
    fn: e
  }];
}
function Kf({
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
      if (!i || !(i.force >= Hf))
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
    eventName: tn,
    fn: e
  }];
}
function Xf(e) {
  const t = Q(On), n = Q(Le), r = L(function() {
    return t.current;
  }, []), o = L(function(f) {
    t.current = f;
  }, []), i = te(() => ({
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
      const x = f.touches[0], {
        clientX: E,
        clientY: N
      } = x, D = {
        x: E,
        y: N
      };
      n.current(), l(h, D);
    }
  }), [e]), a = L(function() {
    const f = {
      capture: !0,
      passive: !1
    };
    n.current = _e(window, [i], f);
  }, [i]), s = L(() => {
    const u = t.current;
    u.type !== "IDLE" && (u.type === "PENDING" && clearTimeout(u.longPressTimerId), o(On), n.current(), a());
  }, [a, o]), c = L(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), d = L(function() {
    const f = {
      capture: !0,
      passive: !1
    }, v = {
      cancel: c,
      completed: s,
      getPhase: r
    }, h = _e(window, Kf(v), f), x = _e(window, Yf(v), f);
    n.current = function() {
      h(), x();
    };
  }, [c, r, s]), p = L(function() {
    const f = r();
    f.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? g(!1, `Cannot start dragging from phase ${f.type}`) : g());
    const v = f.actions.fluidLift(f.point);
    o({
      type: "DRAGGING",
      actions: v,
      hasMoved: !1
    });
  }, [r, o]), l = L(function(f, v) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g());
    const h = setTimeout(p, Uf);
    o({
      type: "PENDING",
      point: v,
      actions: f,
      longPressTimerId: h
    }), d();
  }, [d, r, o, p]);
  Ce(function() {
    return a(), function() {
      n.current();
      const v = r();
      v.type === "PENDING" && (clearTimeout(v.longPressTimerId), o(On));
    };
  }, [r, a, o]), Ce(function() {
    return _e(window, [{
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
function Jf(e) {
  kr(() => {
    const t = _r(e);
    It(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot change the amount of sensor hooks after mounting") : g(!1));
    });
  });
}
const Zf = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Pa(e, t) {
  if (t == null)
    return !1;
  if (Zf.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Pa(e, t.parentElement);
}
function Qf(e, t) {
  const n = t.target;
  return St(n) ? Pa(e, n) : !1;
}
var em = (e) => Pe(e.getBoundingClientRect()).center;
function tm(e) {
  return e instanceof Ia(e).Element;
}
const nm = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function Ra(e, t) {
  return e == null ? null : e[nm](t) ? e : Ra(e.parentElement, t);
}
function rm(e, t) {
  return e.closest ? e.closest(t) : Ra(e, t);
}
function om(e) {
  return `[${Qe.contextId}="${e}"]`;
}
function im(e, t) {
  const n = t.target;
  if (!tm(n))
    return process.env.NODE_ENV !== "production" && ue("event.target must be a Element"), null;
  const r = om(e), o = rm(n, r);
  return o ? St(o) ? o : (process.env.NODE_ENV !== "production" && ue("drag handle must be a HTMLElement"), null) : null;
}
function am(e, t) {
  const n = im(e, t);
  return n ? n.getAttribute(Qe.draggableId) : null;
}
function sm(e, t) {
  const n = `[${Yn.contextId}="${e}"]`, o = Sa(document, n).find((i) => i.getAttribute(Yn.id) === t);
  return o ? St(o) ? o : (process.env.NODE_ENV !== "production" && ue("Draggable element is not a HTMLElement"), null) : null;
}
function cm(e) {
  e.preventDefault();
}
function Pt({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return n() ? e !== t ? (r && process.env.NODE_ENV !== "production" && ue(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (r && process.env.NODE_ENV !== "production" && ue(`
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
  return o ? !(!o.options.isEnabled || !Ea(t.getState(), r)) : (process.env.NODE_ENV !== "production" && ue(`Unable to find draggable with id: ${r}`), !1);
}
function lm({
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
  const c = r.draggable.getById(o), d = sm(t, c.descriptor.id);
  if (!d)
    return process.env.NODE_ENV !== "production" && ue(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && Qf(d, a))
    return null;
  const p = e.claim(i || Le);
  let l = "PRE_DRAG";
  function u() {
    return c.options.shouldRespectForcePress;
  }
  function f() {
    return e.isActive(p);
  }
  function v(b, S) {
    Pt({
      expected: b,
      phase: l,
      isLockActive: f,
      shouldWarn: !0
    }) && n.dispatch(S());
  }
  const h = v.bind(null, "DRAGGING");
  function x(b) {
    function S() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (S(), process.env.NODE_ENV !== "production" ? g(!1, `Cannot lift in phase ${l}`) : g()), n.dispatch(Yp(b.liftActionArgs)), l = "DRAGGING";
    function A($, j = {
      shouldBlockNextClick: !1
    }) {
      if (b.cleanup(), j.shouldBlockNextClick) {
        const w = _e(window, [{
          eventName: "click",
          fn: cm,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(w);
      }
      S(), n.dispatch(ma({
        reason: $
      }));
    }
    return {
      isActive: () => Pt({
        expected: "DRAGGING",
        phase: l,
        isLockActive: f,
        shouldWarn: !1
      }),
      shouldRespectForcePress: u,
      drop: ($) => A("DROP", $),
      cancel: ($) => A("CANCEL", $),
      ...b.actions
    };
  }
  function E(b) {
    const S = pt(($) => {
      h(() => fa({
        client: $
      }));
    });
    return {
      ...x({
        liftActionArgs: {
          id: o,
          clientSelection: b,
          movementMode: "FLUID"
        },
        cleanup: () => S.cancel(),
        actions: {
          move: S
        }
      }),
      move: S
    };
  }
  function N() {
    const b = {
      moveUp: () => h(ru),
      moveRight: () => h(iu),
      moveDown: () => h(ou),
      moveLeft: () => h(au)
    };
    return x({
      liftActionArgs: {
        id: o,
        clientSelection: em(d),
        movementMode: "SNAP"
      },
      cleanup: Le,
      actions: b
    });
  }
  function D() {
    Pt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: f,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Pt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: f,
      shouldWarn: !1
    }),
    shouldRespectForcePress: u,
    fluidLift: E,
    snapLift: N,
    abort: D
  };
}
const dm = [Ff, qf, Xf];
function pm({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? dm : [], ...r || []], a = he(() => If())[0], s = L(function(x, E) {
    xt(x) && !xt(E) && a.tryAbandon();
  }, [a]);
  Ce(function() {
    let x = t.getState();
    return t.subscribe(() => {
      const N = t.getState();
      s(x, N), x = N;
    });
  }, [a, t, s]), Ce(() => a.tryAbandon, [a.tryAbandon]);
  const c = L((h) => Ta({
    lockAPI: a,
    registry: n,
    store: t,
    draggableId: h
  }), [a, n, t]), d = L((h, x, E) => lm({
    lockAPI: a,
    registry: n,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: x || null,
    sourceEvent: E && E.sourceEvent ? E.sourceEvent : null
  }), [e, a, n, t]), p = L((h) => am(e, h), [e]), l = L((h) => {
    const x = n.draggable.findById(h);
    return x ? x.options : null;
  }, [n.draggable]), u = L(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(yr()));
  }, [a, t]), f = L(() => a.isClaimed(), [a]), v = te(() => ({
    canGetLock: c,
    tryGetLock: d,
    findClosestDraggableId: p,
    findOptionsForDraggable: l,
    tryReleaseLock: u,
    isLockClaimed: f
  }), [c, d, p, l, u, f]);
  Jf(i);
  for (let h = 0; h < i.length; h++)
    i[h](v);
}
const um = (e) => ({
  onBeforeCapture: (t) => {
    ii(() => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    });
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), fm = (e) => ({
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
function mm(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = Q(null);
  Sf();
  const s = _r(e), c = L(() => um(s.current), [s]), d = L(() => fm(s.current), [s]), p = hf(t), l = yf({
    contextId: t,
    text: i
  }), u = pf(t, o), f = L((w) => {
    st(a).dispatch(w);
  }, []), v = te(() => Xr({
    publishWhileDragging: Xp,
    updateDroppableScroll: Zp,
    updateDroppableIsEnabled: Qp,
    updateDroppableIsCombineEnabled: eu,
    collectionStarting: Jp
  }, f), [f]), h = mf(), x = te(() => zu(h, v), [h, v]), E = te(() => af({
    scrollWindow: Gu,
    scrollDroppable: x.scrollDroppable,
    getAutoScrollerOptions: d,
    ...Xr({
      move: fa
    }, f)
  }), [x.scrollDroppable, f, d]), N = uf(t), D = te(() => Lu({
    announce: p,
    autoScroller: E,
    dimensionMarshal: x,
    focusMarshal: N,
    getResponders: c,
    styleMarshal: u
  }), [p, E, x, N, c, u]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== D && process.env.NODE_ENV !== "production" && ue("unexpected store change"), a.current = D;
  const y = L(() => {
    const w = st(a);
    w.getState().phase !== "IDLE" && w.dispatch(yr());
  }, []), b = L(() => {
    const w = st(a).getState();
    return w.phase === "DROP_ANIMATING" ? !0 : w.phase === "IDLE" ? !1 : w.isDragging;
  }, []), S = te(() => ({
    isDragging: b,
    tryAbort: y
  }), [b, y]);
  n(S);
  const A = L((w) => Ea(st(a).getState(), w), []), $ = L(() => We(st(a).getState()), []), j = te(() => ({
    marshal: x,
    focus: N,
    contextId: t,
    canLift: A,
    isMovementAllowed: $,
    dragHandleUsageInstructionsId: l,
    registry: h
  }), [t, x, l, N, A, $, h]);
  return pm({
    contextId: t,
    store: D,
    registry: h,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), xe(() => y, [y]), me.createElement(en.Provider, {
    value: j
  }, me.createElement(Od, {
    context: Ir,
    store: D
  }, e.children));
}
function gm() {
  return me.useId();
}
function Pr(e) {
  const t = gm(), n = e.dragHandleUsageInstructions || $t.dragHandleUsageInstructions;
  return me.createElement(jd, null, (r) => me.createElement(mm, {
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
const Ao = {
  dragging: 5e3,
  dropAnimating: 4500
}, vm = (e, t) => t ? dt.drop(t.duration) : e ? dt.snap : dt.fluid, hm = (e, t) => {
  if (e)
    return t ? vt.opacity.drop : vt.opacity.combining;
}, bm = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function xm(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = bm(e), c = !!i, d = c ? Un.drop(r, a) : Un.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: vm(s, i),
    transform: d,
    opacity: hm(a, c),
    zIndex: c ? Ao.dropAnimating : Ao.dragging,
    pointerEvents: "none"
  };
}
function ym(e) {
  return {
    transform: Un.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function wm(e) {
  return e.type === "DRAGGING" ? xm(e) : ym(e);
}
function Em(e, t, n = we) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Fi(o, r), a = Vt(i, n), s = {
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
function Nm(e) {
  const t = Cr("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = te(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), d = L((f) => {
    const v = o();
    return v || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get dimension when no ref is set") : g()), Em(n, v, f);
  }, [n, o]), p = te(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: d
  }), [n, d, c, t]), l = Q(p), u = Q(!0);
  Ce(() => (r.draggable.register(l.current), () => r.draggable.unregister(l.current)), [r.draggable]), Ce(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    const f = l.current;
    l.current = p, r.draggable.update(p, f);
  }, [p, r.draggable]);
}
var Rr = me.createContext(null);
function $a(e) {
  e && St(e) || (process.env.NODE_ENV !== "production" ? g(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : g());
}
function Dm(e, t, n) {
  It(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? g(!1, "Draggable requires a draggableId") : g(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? g(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : g(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? g(!1, `${r(o)} requires an integer index prop`) : g(!1)), e.mapped.type !== "DRAGGING" && ($a(n()), e.isEnabled && (Ca(t, o) || (process.env.NODE_ENV !== "production" ? g(!1, `${r(o)} Unable to find drag handle`) : g(!1))));
  });
}
function Om(e) {
  kr(() => {
    const t = Q(e);
    It(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Draggable isClone prop value changed during component life") : g(!1));
    }, [e]);
  });
}
function Wt(e) {
  const t = wt(e);
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find required context") : g()), t;
}
function Sm(e) {
  e.preventDefault();
}
const Im = (e) => {
  const t = Q(null), n = L((S = null) => {
    t.current = S;
  }, []), r = L(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Wt(en), {
    type: s,
    droppableId: c
  } = Wt(Rr), d = te(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: p,
    draggableId: l,
    isEnabled: u,
    shouldRespectForcePress: f,
    canDragInteractiveElements: v,
    isClone: h,
    mapped: x,
    dropAnimationFinished: E
  } = e;
  if (Dm(e, o, r), Om(h), !h) {
    const S = te(() => ({
      descriptor: d,
      registry: a,
      getDraggableRef: r,
      canDragInteractiveElements: v,
      shouldRespectForcePress: f,
      isEnabled: u
    }), [d, a, r, v, f, u]);
    Nm(S);
  }
  const N = te(() => u ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Sm
  } : null, [o, i, l, u]), D = L((S) => {
    x.type === "DRAGGING" && x.dropping && S.propertyName === "transform" && ii(E);
  }, [E, x]), y = te(() => {
    const S = wm(x), A = x.type === "DRAGGING" && x.dropping ? D : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: S,
        onTransitionEnd: A
      },
      dragHandleProps: N
    };
  }, [o, N, l, x, D, n]), b = te(() => ({
    draggableId: d.id,
    type: d.type,
    source: {
      index: d.index,
      droppableId: d.droppableId
    }
  }), [d.droppableId, d.id, d.index, d.type]);
  return me.createElement(me.Fragment, null, p(y, x.snapshot, b));
};
var Ma = (e, t) => e === t, ja = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const Cm = (e) => e.combine ? e.combine.draggableId : null, km = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function _m() {
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
  })), n = ye((o, i, a, s, c = null, d = null, p = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: d,
      mode: i,
      offset: o,
      dimension: a,
      forceShouldAnimate: p,
      snapshot: t(i, s, c, d, null)
    }
  }));
  return (o, i) => {
    if (xt(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = Ie(o.impact), d = km(o.impact), p = o.forceShouldAnimate;
      return n(e(a.x, a.y), o.movementMode, s, i.isClone, c, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], d = a.result, p = d.mode, l = ja(d), u = Cm(d), v = {
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
          draggingOver: l,
          combineWith: u,
          mode: p,
          forceShouldAnimate: null,
          snapshot: t(p, s, l, u, v)
        }
      };
    }
    return null;
  };
}
function La(e = null) {
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
const Am = {
  mapped: {
    type: "SECONDARY",
    offset: we,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: La(null)
  }
};
function Pm() {
  const e = ye((a, s) => ({
    x: a,
    y: s
  })), t = ye(La), n = ye((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), r = (a) => a ? n(we, a, !0) : null, o = (a, s, c, d) => {
    const p = c.displaced.visible[a], l = !!(d.inVirtualList && d.effected[a]), u = Jt(c), f = u && u.draggableId === a ? s : null;
    if (!p) {
      if (!l)
        return r(f);
      if (c.displaced.invisible[a])
        return null;
      const x = nt(d.displacedBy.point), E = e(x.x, x.y);
      return n(E, f, !0);
    }
    if (l)
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
const Rm = () => {
  const e = _m(), t = Pm();
  return (r, o) => e(r, o) || t(r, o) || Am;
}, Tm = {
  dropAnimationFinished: ga
}, $m = Vi(Rm, Tm, null, {
  context: Ir,
  areStatePropsEqual: Ma
})(Im);
function Ba(e) {
  return Wt(Rr).isUsingCloneFor === e.draggableId && !e.isClone ? null : me.createElement($m, e);
}
function Tr(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return me.createElement(Ba, Ft({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const $r = (e) => (t) => e === t, Mm = $r("scroll"), jm = $r("auto"), Lm = $r("visible"), Po = (e, t) => t(e.overflowX) || t(e.overflowY), Bm = (e, t) => t(e.overflowX) && t(e.overflowY), Va = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Po(n, Mm) || Po(n, jm);
}, Vm = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = bt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, g()), !Va(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return Bm(r, Lm) || process.env.NODE_ENV !== "production" && ue(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Mr = (e) => e == null ? null : e === document.body ? Vm() ? e : null : e === document.documentElement ? null : Va(e) ? e : Mr(e.parentElement);
var Fm = (e) => {
  !e || !Mr(e.parentElement) || process.env.NODE_ENV !== "production" && ue(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Kn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Fa = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Fa(e.parentElement) : !1;
var zm = (e) => {
  const t = Mr(e), n = Fa(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, Gm = ({
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
  })(), d = o === "vertical" ? gr : Zi, p = Je({
    page: a,
    withPlaceholder: null,
    axis: d,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: n,
    isFixedOnPage: r,
    axis: d,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: p
  };
};
const Wm = (e, t) => {
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
var qm = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = n.closestScrollable, d = Wm(e, c), p = Vt(d, r), l = (() => {
    if (!c)
      return null;
    const f = zi(c), v = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: f,
      page: Vt(f, r),
      scroll: Kn(c),
      scrollSize: v,
      shouldClipSubject: s
    };
  })();
  return Gm({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: d,
    page: p,
    closest: l
  });
};
const Um = {
  passive: !1
}, Hm = {
  passive: !0
};
var Ro = (e) => e.shouldPublishImmediately ? Um : Hm;
const Rt = (e) => e && e.env.closestScrollable || null;
function Ym(e) {
  const t = Q(null), n = Wt(en), r = Cr("droppable"), {
    registry: o,
    marshal: i
  } = n, a = _r(e), s = te(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = Q(s), d = te(() => ye((y, b) => {
    t.current || (process.env.NODE_ENV !== "production" ? g(!1, "Can only update scroll when dragging") : g());
    const S = {
      x: y,
      y: b
    };
    i.updateDroppableScroll(s.id, S);
  }), [s.id, i]), p = L(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? we : Kn(y.env.closestScrollable);
  }, []), l = L(() => {
    const y = p();
    d(y.x, y.y);
  }, [p, d]), u = te(() => pt(l), [l]), f = L(() => {
    const y = t.current, b = Rt(y);
    if (y && b || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find scroll options while scrolling") : g()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    u();
  }, [u, l]), v = L((y, b) => {
    t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect a droppable while a drag is occurring") : g());
    const S = a.current, A = S.getDroppableRef();
    A || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect without a droppable ref") : g());
    const $ = zm(A), j = {
      ref: A,
      descriptor: s,
      env: $,
      scrollOptions: b
    };
    t.current = j;
    const w = qm({
      ref: A,
      descriptor: s,
      env: $,
      windowScroll: y,
      direction: S.direction,
      isDropDisabled: S.isDropDisabled,
      isCombineEnabled: S.isCombineEnabled,
      shouldClipSubject: !S.ignoreContainerClipping
    }), M = $.closestScrollable;
    return M && (M.setAttribute(So.contextId, n.contextId), M.addEventListener("scroll", f, Ro(j.scrollOptions)), process.env.NODE_ENV !== "production" && Fm(M)), w;
  }, [n.contextId, s, f, a]), h = L(() => {
    const y = t.current, b = Rt(y);
    return y && b || (process.env.NODE_ENV !== "production" ? g(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : g()), Kn(b);
  }, []), x = L(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop drag when no active drag") : g());
    const b = Rt(y);
    t.current = null, b && (u.cancel(), b.removeAttribute(So.contextId), b.removeEventListener("scroll", f, Ro(y.scrollOptions)));
  }, [f, u]), E = L((y) => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll when there is no drag") : g());
    const S = Rt(b);
    S || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll a droppable with no closest scrollable") : g()), S.scrollTop += y.y, S.scrollLeft += y.x;
  }, []), N = te(() => ({
    getDimensionAndWatchScroll: v,
    getScrollWhileDragging: h,
    dragStopped: x,
    scroll: E
  }), [x, v, h, E]), D = te(() => ({
    uniqueId: r,
    descriptor: s,
    callbacks: N
  }), [N, s, r]);
  Ce(() => (c.current = D.descriptor, o.droppable.register(D), () => {
    t.current && (process.env.NODE_ENV !== "production" && ue("Unsupported: changing the droppableId or type of a Droppable during a drag"), x()), o.droppable.unregister(D);
  }), [N, s, x, D, i, o.droppable]), Ce(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ce(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Sn() {
}
const To = {
  width: 0,
  height: 0,
  margin: Wd
}, Km = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? To : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Xm = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = Km({
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
}, Jm = (e) => {
  const t = Q(null), n = L(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = he(e.animate === "open");
  xe(() => s ? r !== "open" ? (n(), c(!1), Sn) : t.current ? Sn : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : Sn, [r, s, n]);
  const d = L((l) => {
    l.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), p = Xm({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return me.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: d,
    ref: e.innerRef
  });
};
var Zm = me.memo(Jm);
function In(e) {
  return typeof e == "boolean";
}
function Cn(e, t) {
  t.forEach((n) => n(e));
}
const Qm = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? g(!1, "A Droppable requires a droppableId prop") : g()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? g(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : g());
}, function({
  props: t
}) {
  In(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? g(!1, "isDropDisabled must be a boolean") : g()), In(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? g(!1, "isCombineEnabled must be a boolean") : g()), In(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? g(!1, "ignoreContainerClipping must be a boolean") : g());
}, function({
  getDroppableRef: t
}) {
  $a(t());
}], eg = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && ue(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], tg = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? g(!1, "Must provide a clone render function (renderClone) for virtual lists") : g());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? g(!1, "Expected virtual list to not have a placeholder") : g());
}];
function ng(e) {
  It(() => {
    Cn(e, Qm), e.props.mode === "standard" && Cn(e, eg), e.props.mode === "virtual" && Cn(e, tg);
  });
}
class rg extends me.PureComponent {
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
const og = (e) => {
  const t = wt(en);
  t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find app context") : g());
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = Q(null), i = Q(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: d,
    direction: p,
    ignoreContainerClipping: l,
    isDropDisabled: u,
    isCombineEnabled: f,
    snapshot: v,
    useClone: h,
    updateViewportMaxScroll: x,
    getContainerForClone: E
  } = e, N = L(() => o.current, []), D = L((B = null) => {
    o.current = B;
  }, []), y = L(() => i.current, []), b = L((B = null) => {
    i.current = B;
  }, []);
  ng({
    props: e,
    getDroppableRef: N,
    getPlaceholderRef: y
  });
  const S = L(() => {
    r() && x({
      maxScroll: wa()
    });
  }, [r, x]);
  Ym({
    droppableId: s,
    type: c,
    mode: d,
    direction: p,
    isDropDisabled: u,
    isCombineEnabled: f,
    ignoreContainerClipping: l,
    getDroppableRef: N
  });
  const A = te(() => me.createElement(rg, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: B,
    data: K,
    animate: G
  }) => me.createElement(Zm, {
    placeholder: K,
    onClose: B,
    innerRef: b,
    animate: G,
    contextId: n,
    onTransitionEnd: S
  })), [n, S, e.placeholder, e.shouldAnimatePlaceholder, b]), $ = te(() => ({
    innerRef: D,
    placeholder: A,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": n
    }
  }), [n, s, A, D]), j = h ? h.dragging.draggableId : null, w = te(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: j
  }), [s, j, c]);
  function M() {
    if (!h)
      return null;
    const {
      dragging: B,
      render: K
    } = h, G = me.createElement(Ba, {
      draggableId: B.draggableId,
      index: B.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (X, J) => K(X, J, B));
    return ds.createPortal(G, E());
  }
  return me.createElement(Rr.Provider, {
    value: w
  }, a($, v), M());
};
function ig() {
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
  getContainerForClone: ig
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
}, kn = (e, t) => e === t.droppable.type, Mo = (e, t) => t.draggables[e.draggable.id], ag = () => {
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
  })), r = ye((i, a, s, c, d, p) => {
    const l = d.descriptor.id;
    if (d.descriptor.droppableId === i) {
      const v = p ? {
        render: p,
        dragging: n(d.descriptor)
      } : null, h = {
        isDraggingOver: s,
        draggingOverWith: s ? l : null,
        draggingFromThisWith: l,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: d.placeholder,
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
      draggingOverWith: l,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: d.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: f,
      useClone: null
    };
  });
  return (i, a) => {
    const s = za(a), c = s.droppableId, d = s.type, p = !s.isDropDisabled, l = s.renderClone;
    if (xt(i)) {
      const u = i.critical;
      if (!kn(d, u))
        return t;
      const f = Mo(u, i.dimensions), v = Ie(i.impact) === c;
      return r(c, p, v, v, f, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const u = i.completed;
      if (!kn(d, u.critical))
        return t;
      const f = Mo(u.critical, i.dimensions);
      return r(c, p, ja(u.result) === c, Ie(u.impact) === c, f, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const u = i.completed;
      if (!kn(d, u.critical))
        return t;
      const f = Ie(u.impact) === c, v = !!(u.impact.at && u.impact.at.type === "COMBINE"), h = u.critical.droppable.id === c;
      return f ? v ? e : t : h ? e : t;
    }
    return t;
  };
}, sg = {
  updateViewportMaxScroll: nu
}, jr = Vi(ag, sg, (e, t, n) => ({
  ...za(n),
  ...e,
  ...t
}), {
  context: Ir,
  areStatePropsEqual: Ma
})(og);
function xv({
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
  }, children: /* @__PURE__ */ m(jr, { droppableId: o, children: (a) => /* @__PURE__ */ I(
    "ul",
    {
      ref: a.innerRef,
      ...a.droppableProps,
      className: O("space-y-2", n),
      children: [
        e.map((s, c) => /* @__PURE__ */ m(Tr, { draggableId: s.id, index: c, children: (d, p) => /* @__PURE__ */ I(
          "li",
          {
            ref: d.innerRef,
            ...d.draggableProps,
            className: O(
              "group relative flex items-center gap-3 p-4 bg-white border border-neutral-200 rounded-xl",
              "transition-all duration-200 ease-out",
              "hover:shadow-md hover:border-primary/40",
              p.isDragging && "shadow-xl ring-2 ring-primary/30 rotate-1 scale-[1.02]",
              r
            ),
            style: {
              ...d.draggableProps.style
            },
            children: [
              /* @__PURE__ */ m(
                "div",
                {
                  className: O(
                    "absolute top-0 left-0 right-0 h-1 rounded-t-xl transition-opacity duration-200",
                    "bg-gradient-to-r from-accent via-primary to-primary",
                    p.isDragging ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  )
                }
              ),
              /* @__PURE__ */ m(
                "div",
                {
                  ...d.dragHandleProps,
                  className: O(
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
                  className: O(
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
var Xn = { exports: {} }, Tt = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function cg() {
  if (jo) return se;
  jo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function D(b) {
    if (typeof b == "object" && b !== null) {
      var S = b.$$typeof;
      switch (S) {
        case t:
          switch (b = b.type, b) {
            case c:
            case d:
            case r:
            case i:
            case o:
            case l:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case p:
                case v:
                case f:
                case a:
                  return b;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  function y(b) {
    return D(b) === d;
  }
  return se.AsyncMode = c, se.ConcurrentMode = d, se.ContextConsumer = s, se.ContextProvider = a, se.Element = t, se.ForwardRef = p, se.Fragment = r, se.Lazy = v, se.Memo = f, se.Portal = n, se.Profiler = i, se.StrictMode = o, se.Suspense = l, se.isAsyncMode = function(b) {
    return y(b) || D(b) === c;
  }, se.isConcurrentMode = y, se.isContextConsumer = function(b) {
    return D(b) === s;
  }, se.isContextProvider = function(b) {
    return D(b) === a;
  }, se.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, se.isForwardRef = function(b) {
    return D(b) === p;
  }, se.isFragment = function(b) {
    return D(b) === r;
  }, se.isLazy = function(b) {
    return D(b) === v;
  }, se.isMemo = function(b) {
    return D(b) === f;
  }, se.isPortal = function(b) {
    return D(b) === n;
  }, se.isProfiler = function(b) {
    return D(b) === i;
  }, se.isStrictMode = function(b) {
    return D(b) === o;
  }, se.isSuspense = function(b) {
    return D(b) === l;
  }, se.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === d || b === i || b === o || b === l || b === u || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === f || b.$$typeof === a || b.$$typeof === s || b.$$typeof === p || b.$$typeof === x || b.$$typeof === E || b.$$typeof === N || b.$$typeof === h);
  }, se.typeOf = D, se;
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
var Lo;
function lg() {
  return Lo || (Lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
    function D(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === r || k === d || k === i || k === o || k === l || k === u || typeof k == "object" && k !== null && (k.$$typeof === v || k.$$typeof === f || k.$$typeof === a || k.$$typeof === s || k.$$typeof === p || k.$$typeof === x || k.$$typeof === E || k.$$typeof === N || k.$$typeof === h);
    }
    function y(k) {
      if (typeof k == "object" && k !== null) {
        var ge = k.$$typeof;
        switch (ge) {
          case t:
            var ze = k.type;
            switch (ze) {
              case c:
              case d:
              case r:
              case i:
              case o:
              case l:
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
                    return ge;
                }
            }
          case n:
            return ge;
        }
      }
    }
    var b = c, S = d, A = s, $ = a, j = t, w = p, M = r, B = v, K = f, G = n, X = i, J = o, ee = l, pe = !1;
    function ie(k) {
      return pe || (pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(k) || y(k) === c;
    }
    function C(k) {
      return y(k) === d;
    }
    function R(k) {
      return y(k) === s;
    }
    function q(k) {
      return y(k) === a;
    }
    function U(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function F(k) {
      return y(k) === p;
    }
    function Y(k) {
      return y(k) === r;
    }
    function H(k) {
      return y(k) === v;
    }
    function W(k) {
      return y(k) === f;
    }
    function _(k) {
      return y(k) === n;
    }
    function P(k) {
      return y(k) === i;
    }
    function V(k) {
      return y(k) === o;
    }
    function ae(k) {
      return y(k) === l;
    }
    ce.AsyncMode = b, ce.ConcurrentMode = S, ce.ContextConsumer = A, ce.ContextProvider = $, ce.Element = j, ce.ForwardRef = w, ce.Fragment = M, ce.Lazy = B, ce.Memo = K, ce.Portal = G, ce.Profiler = X, ce.StrictMode = J, ce.Suspense = ee, ce.isAsyncMode = ie, ce.isConcurrentMode = C, ce.isContextConsumer = R, ce.isContextProvider = q, ce.isElement = U, ce.isForwardRef = F, ce.isFragment = Y, ce.isLazy = H, ce.isMemo = W, ce.isPortal = _, ce.isProfiler = P, ce.isStrictMode = V, ce.isSuspense = ae, ce.isValidElementType = D, ce.typeOf = y;
  }()), ce;
}
var Bo;
function Ga() {
  return Bo || (Bo = 1, process.env.NODE_ENV === "production" ? Tt.exports = cg() : Tt.exports = lg()), Tt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var _n, Vo;
function dg() {
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
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return _n = o() ? Object.assign : function(i, a) {
    for (var s, c = r(i), d, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var l in s)
        t.call(s, l) && (c[l] = s[l]);
      if (e) {
        d = e(s);
        for (var u = 0; u < d.length; u++)
          n.call(s, d[u]) && (c[d[u]] = s[d[u]]);
      }
    }
    return c;
  }, _n;
}
var An, Fo;
function Lr() {
  if (Fo) return An;
  Fo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return An = e, An;
}
var Pn, zo;
function Wa() {
  return zo || (zo = 1, Pn = Function.call.bind(Object.prototype.hasOwnProperty)), Pn;
}
var Rn, Go;
function pg() {
  if (Go) return Rn;
  Go = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Lr(), n = {}, r = Wa();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, c, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (r(i, p)) {
          var l;
          try {
            if (typeof i[p] != "function") {
              var u = Error(
                (c || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw u.name = "Invariant Violation", u;
            }
            l = i[p](a, p, c, s, null, t);
          } catch (v) {
            l = v;
          }
          if (l && !(l instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), l instanceof Error && !(l.message in n)) {
            n[l.message] = !0;
            var f = d ? d() : "";
            e(
              "Failed " + s + " type: " + l.message + (f ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Rn = o, Rn;
}
var Tn, Wo;
function ug() {
  if (Wo) return Tn;
  Wo = 1;
  var e = Ga(), t = dg(), n = Lr(), r = Wa(), o = pg(), i = function() {
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
  return Tn = function(s, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function l(C) {
      var R = C && (d && C[d] || C[p]);
      if (typeof R == "function")
        return R;
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
      any: N(),
      arrayOf: D,
      element: y(),
      elementType: b(),
      instanceOf: S,
      node: w(),
      objectOf: $,
      oneOf: A,
      oneOfType: j,
      shape: B,
      exact: K
    };
    function v(C, R) {
      return C === R ? C !== 0 || 1 / C === 1 / R : C !== C && R !== R;
    }
    function h(C, R) {
      this.message = C, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function x(C) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, q = 0;
      function U(Y, H, W, _, P, V, ae) {
        if (_ = _ || u, V = V || W, ae !== n) {
          if (c) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ge = _ + ":" + W;
            !R[ge] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + _ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[ge] = !0, q++);
          }
        }
        return H[W] == null ? Y ? H[W] === null ? new h("The " + P + " `" + V + "` is marked as required " + ("in `" + _ + "`, but its value is `null`.")) : new h("The " + P + " `" + V + "` is marked as required in " + ("`" + _ + "`, but its value is `undefined`.")) : null : C(H, W, _, P, V);
      }
      var F = U.bind(null, !1);
      return F.isRequired = U.bind(null, !0), F;
    }
    function E(C) {
      function R(q, U, F, Y, H, W) {
        var _ = q[U], P = J(_);
        if (P !== C) {
          var V = ee(_);
          return new h(
            "Invalid " + Y + " `" + H + "` of type " + ("`" + V + "` supplied to `" + F + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return x(R);
    }
    function N() {
      return x(a);
    }
    function D(C) {
      function R(q, U, F, Y, H) {
        if (typeof C != "function")
          return new h("Property `" + H + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var W = q[U];
        if (!Array.isArray(W)) {
          var _ = J(W);
          return new h("Invalid " + Y + " `" + H + "` of type " + ("`" + _ + "` supplied to `" + F + "`, expected an array."));
        }
        for (var P = 0; P < W.length; P++) {
          var V = C(W, P, F, Y, H + "[" + P + "]", n);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return x(R);
    }
    function y() {
      function C(R, q, U, F, Y) {
        var H = R[q];
        if (!s(H)) {
          var W = J(H);
          return new h("Invalid " + F + " `" + Y + "` of type " + ("`" + W + "` supplied to `" + U + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(C);
    }
    function b() {
      function C(R, q, U, F, Y) {
        var H = R[q];
        if (!e.isValidElementType(H)) {
          var W = J(H);
          return new h("Invalid " + F + " `" + Y + "` of type " + ("`" + W + "` supplied to `" + U + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(C);
    }
    function S(C) {
      function R(q, U, F, Y, H) {
        if (!(q[U] instanceof C)) {
          var W = C.name || u, _ = ie(q[U]);
          return new h("Invalid " + Y + " `" + H + "` of type " + ("`" + _ + "` supplied to `" + F + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return x(R);
    }
    function A(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function R(q, U, F, Y, H) {
        for (var W = q[U], _ = 0; _ < C.length; _++)
          if (v(W, C[_]))
            return null;
        var P = JSON.stringify(C, function(ae, k) {
          var ge = ee(k);
          return ge === "symbol" ? String(k) : k;
        });
        return new h("Invalid " + Y + " `" + H + "` of value `" + String(W) + "` " + ("supplied to `" + F + "`, expected one of " + P + "."));
      }
      return x(R);
    }
    function $(C) {
      function R(q, U, F, Y, H) {
        if (typeof C != "function")
          return new h("Property `" + H + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var W = q[U], _ = J(W);
        if (_ !== "object")
          return new h("Invalid " + Y + " `" + H + "` of type " + ("`" + _ + "` supplied to `" + F + "`, expected an object."));
        for (var P in W)
          if (r(W, P)) {
            var V = C(W, P, F, Y, H + "." + P, n);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return x(R);
    }
    function j(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var R = 0; R < C.length; R++) {
        var q = C[R];
        if (typeof q != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + pe(q) + " at index " + R + "."
          ), a;
      }
      function U(F, Y, H, W, _) {
        for (var P = [], V = 0; V < C.length; V++) {
          var ae = C[V], k = ae(F, Y, H, W, _, n);
          if (k == null)
            return null;
          k.data && r(k.data, "expectedType") && P.push(k.data.expectedType);
        }
        var ge = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new h("Invalid " + W + " `" + _ + "` supplied to " + ("`" + H + "`" + ge + "."));
      }
      return x(U);
    }
    function w() {
      function C(R, q, U, F, Y) {
        return G(R[q]) ? null : new h("Invalid " + F + " `" + Y + "` supplied to " + ("`" + U + "`, expected a ReactNode."));
      }
      return x(C);
    }
    function M(C, R, q, U, F) {
      return new h(
        (C || "React class") + ": " + R + " type `" + q + "." + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function B(C) {
      function R(q, U, F, Y, H) {
        var W = q[U], _ = J(W);
        if (_ !== "object")
          return new h("Invalid " + Y + " `" + H + "` of type `" + _ + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var P in C) {
          var V = C[P];
          if (typeof V != "function")
            return M(F, Y, H, P, ee(V));
          var ae = V(W, P, F, Y, H + "." + P, n);
          if (ae)
            return ae;
        }
        return null;
      }
      return x(R);
    }
    function K(C) {
      function R(q, U, F, Y, H) {
        var W = q[U], _ = J(W);
        if (_ !== "object")
          return new h("Invalid " + Y + " `" + H + "` of type `" + _ + "` " + ("supplied to `" + F + "`, expected `object`."));
        var P = t({}, q[U], C);
        for (var V in P) {
          var ae = C[V];
          if (r(C, V) && typeof ae != "function")
            return M(F, Y, H, V, ee(ae));
          if (!ae)
            return new h(
              "Invalid " + Y + " `" + H + "` key `" + V + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(q[U], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var k = ae(W, V, F, Y, H + "." + V, n);
          if (k)
            return k;
        }
        return null;
      }
      return x(R);
    }
    function G(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(G);
          if (C === null || s(C))
            return !0;
          var R = l(C);
          if (R) {
            var q = R.call(C), U;
            if (R !== C.entries) {
              for (; !(U = q.next()).done; )
                if (!G(U.value))
                  return !1;
            } else
              for (; !(U = q.next()).done; ) {
                var F = U.value;
                if (F && !G(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function X(C, R) {
      return C === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function J(C) {
      var R = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : X(R, C) ? "symbol" : R;
    }
    function ee(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var R = J(C);
      if (R === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function pe(C) {
      var R = ee(C);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function ie(C) {
      return !C.constructor || !C.constructor.name ? u : C.constructor.name;
    }
    return f.checkPropTypes = o, f.resetWarningCache = o.resetWarningCache, f.PropTypes = f, f;
  }, Tn;
}
var $n, qo;
function fg() {
  if (qo) return $n;
  qo = 1;
  var e = Lr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, $n = function() {
    function r(a, s, c, d, p, l) {
      if (l !== e) {
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
  }, $n;
}
if (process.env.NODE_ENV !== "production") {
  var mg = Ga(), gg = !0;
  Xn.exports = ug()(mg.isElement, gg);
} else
  Xn.exports = fg()();
var vg = Xn.exports;
const de = /* @__PURE__ */ Rl(vg);
function Ye(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function s(p) {
      try {
        d(r.next(p));
      } catch (l) {
        a(l);
      }
    }
    function c(p) {
      try {
        d(r.throw(p));
      } catch (l) {
        a(l);
      }
    }
    function d(p) {
      p.done ? i(p.value) : o(p.value).then(s, c);
    }
    d((r = r.apply(e, t || [])).next());
  });
}
const hg = /* @__PURE__ */ new Map([
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
  const r = bg(e), { webkitRelativePath: o } = e, i = typeof t == "string" ? t : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && Uo(r, "path", i), Uo(r, "relativePath", i), r;
}
function bg(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), o = hg.get(r);
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
const xg = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function yg(e) {
  return Ye(this, void 0, void 0, function* () {
    return qt(e) && wg(e.dataTransfer) ? Og(e.dataTransfer, e.type) : Eg(e) ? Ng(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? Dg(e) : [];
  });
}
function wg(e) {
  return qt(e);
}
function Eg(e) {
  return qt(e) && qt(e.target);
}
function qt(e) {
  return typeof e == "object" && e !== null;
}
function Ng(e) {
  return Jn(e.target.files).map((t) => et(t));
}
function Dg(e) {
  return Ye(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => et(n));
  });
}
function Og(e, t) {
  return Ye(this, void 0, void 0, function* () {
    if (e.items) {
      const n = Jn(e.items).filter((o) => o.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(Sg));
      return Ho(qa(r));
    }
    return Ho(Jn(e.files).map((n) => et(n)));
  });
}
function Ho(e) {
  return e.filter((t) => xg.indexOf(t.name) === -1);
}
function Jn(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function Sg(e) {
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
function Ig(e) {
  return Ye(this, void 0, void 0, function* () {
    return e.isDirectory ? Ua(e) : Cg(e);
  });
}
function Ua(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const o = [];
    function i() {
      t.readEntries((a) => Ye(this, void 0, void 0, function* () {
        if (a.length) {
          const s = Promise.all(a.map(Ig));
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
function Cg(e) {
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
var Mn = function(e, t) {
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
  return Ag(e) || _g(e) || Ya(e) || kg();
}
function kg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _g(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ag(e) {
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
  return Tg(e) || Rg(e, t) || Ya(e, t) || Pg();
}
function Pg() {
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
function Rg(e, t) {
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
var $g = typeof Mn == "function" ? Mn : Mn.default, Mg = "file-invalid-type", jg = "file-too-large", Lg = "file-too-small", Bg = "too-many-files", Vg = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: Mg,
    message: "File type must be ".concat(r)
  };
}, Zo = function(t) {
  return {
    code: jg,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Qo = function(t) {
  return {
    code: Lg,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Fg = {
  code: Bg,
  message: "Too many files"
};
function zg(e) {
  return e.type === "" && typeof e.getAsFile == "function";
}
function Ka(e, t) {
  var n = e.type === "application/x-moz-file" || $g(e, t) || zg(e);
  return [n, n ? null : Vg(t)];
}
function Xa(e, t, n) {
  if (qe(e.size))
    if (qe(t) && qe(n)) {
      if (e.size > n) return [!1, Zo(n)];
      if (e.size < t) return [!1, Qo(t)];
    } else {
      if (qe(t) && e.size < t) return [!1, Qo(t)];
      if (qe(n) && e.size > n) return [!1, Zo(n)];
    }
  return [!0, null];
}
function qe(e) {
  return e != null;
}
function Gg(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, i = e.multiple, a = e.maxFiles, s = e.validator;
  return !i && t.length > 1 || i && a >= 1 && t.length > a ? !1 : t.every(function(c) {
    var d = Ka(c, n), p = yt(d, 1), l = p[0], u = Xa(c, r, o), f = yt(u, 1), v = f[0], h = s ? s(c) : null;
    return l && v && !h;
  });
}
function Ut(e) {
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
function Wg(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function qg(e) {
  return e.indexOf("Edge/") !== -1;
}
function Ug() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Wg(e) || qg(e);
}
function Te() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return t.some(function(s) {
      return !Ut(r) && s && s.apply(void 0, [r].concat(i)), Ut(r);
    });
  };
}
function Hg() {
  return "showOpenFilePicker" in window;
}
function Yg(e) {
  if (qe(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = yt(n, 2), o = r[0], i = r[1], a = !0;
      return Ja(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(Za)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
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
function Kg(e) {
  if (qe(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = yt(n, 2), o = r[0], i = r[1];
      return [].concat(Ko(t), [o], Ko(i));
    }, []).filter(function(t) {
      return Ja(t) || Za(t);
    }).join(",");
}
function Xg(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Jg(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Ja(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Za(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Zg = ["children"], Qg = ["open"], ev = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], tv = ["refKey", "onChange", "onClick"];
function ti(e) {
  return ov(e) || rv(e) || Qa(e) || nv();
}
function nv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ov(e) {
  if (Array.isArray(e)) return Qn(e);
}
function jn(e, t) {
  return sv(e) || av(e, t) || Qa(e, t) || iv();
}
function iv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qa(e, t) {
  if (e) {
    if (typeof e == "string") return Qn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qn(e, t);
  }
}
function Qn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function av(e, t) {
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
function sv(e) {
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
function fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ni(Object(n), !0).forEach(function(r) {
      er(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ni(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ht(e, t) {
  if (e == null) return {};
  var n = cv(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function cv(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Br = /* @__PURE__ */ re(function(e, t) {
  var n = e.children, r = Ht(e, Zg), o = ts(r), i = o.open, a = Ht(o, Qg);
  return cs(t, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ me.createElement(ls, null, n(fe(fe({}, a), {}, {
    open: i
  })));
});
Br.displayName = "Dropzone";
var es = {
  disabled: !1,
  getFilesFromEvent: yg,
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
  children: de.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: de.objectOf(de.arrayOf(de.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: de.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: de.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: de.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: de.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: de.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: de.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: de.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: de.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: de.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: de.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: de.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: de.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: de.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: de.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: de.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: de.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: de.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: de.func,
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
  onDrop: de.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: de.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: de.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: de.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: de.func
};
var tr = {
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
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = fe(fe({}, es), e), n = t.accept, r = t.disabled, o = t.getFilesFromEvent, i = t.maxSize, a = t.minSize, s = t.multiple, c = t.maxFiles, d = t.onDragEnter, p = t.onDragLeave, l = t.onDragOver, u = t.onDrop, f = t.onDropAccepted, v = t.onDropRejected, h = t.onFileDialogCancel, x = t.onFileDialogOpen, E = t.useFsAccessApi, N = t.autoFocus, D = t.preventDropOnDocument, y = t.noClick, b = t.noKeyboard, S = t.noDrag, A = t.noDragEventsBubbling, $ = t.onError, j = t.validator, w = je(function() {
    return Kg(n);
  }, [n]), M = je(function() {
    return Yg(n);
  }, [n]), B = je(function() {
    return typeof x == "function" ? x : ri;
  }, [x]), K = je(function() {
    return typeof h == "function" ? h : ri;
  }, [h]), G = Q(null), X = Q(null), J = ss(lv, tr), ee = jn(J, 2), pe = ee[0], ie = ee[1], C = pe.isFocused, R = pe.isFileDialogActive, q = Q(typeof window < "u" && window.isSecureContext && E && Hg()), U = function() {
    !q.current && R && setTimeout(function() {
      if (X.current) {
        var z = X.current.files;
        z.length || (ie({
          type: "closeDialog"
        }), K());
      }
    }, 300);
  };
  xe(function() {
    return window.addEventListener("focus", U, !1), function() {
      window.removeEventListener("focus", U, !1);
    };
  }, [X, R, K, q]);
  var F = Q([]), Y = Q([]), H = function(z) {
    G.current && G.current.contains(z.target) || (z.preventDefault(), F.current = []);
  };
  xe(function() {
    return D && (document.addEventListener("dragover", ei, !1), document.addEventListener("drop", H, !1)), function() {
      D && (document.removeEventListener("dragover", ei), document.removeEventListener("drop", H));
    };
  }, [G, D]), xe(function() {
    var T = function(Re) {
      Y.current = [].concat(ti(Y.current), [Re.target]), ct(Re) && ie({
        isDragGlobal: !0,
        type: "setDragGlobal"
      });
    }, z = function(Re) {
      Y.current = Y.current.filter(function($e) {
        return $e !== Re.target && $e !== null;
      }), !(Y.current.length > 0) && ie({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, ve = function() {
      Y.current = [], ie({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, be = function() {
      Y.current = [], ie({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    };
    return document.addEventListener("dragenter", T, !1), document.addEventListener("dragleave", z, !1), document.addEventListener("dragend", ve, !1), document.addEventListener("drop", be, !1), function() {
      document.removeEventListener("dragenter", T), document.removeEventListener("dragleave", z), document.removeEventListener("dragend", ve), document.removeEventListener("drop", be);
    };
  }, [G]), xe(function() {
    return !r && N && G.current && G.current.focus(), function() {
    };
  }, [G, N, r]);
  var W = Z(function(T) {
    $ ? $(T) : console.error(T);
  }, [$]), _ = Z(function(T) {
    T.preventDefault(), T.persist(), kt(T), F.current = [].concat(ti(F.current), [T.target]), ct(T) && Promise.resolve(o(T)).then(function(z) {
      if (!(Ut(T) && !A)) {
        var ve = z.length, be = ve > 0 && Gg({
          files: z,
          accept: w,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: c,
          validator: j
        }), Ee = ve > 0 && !be;
        ie({
          isDragAccept: be,
          isDragReject: Ee,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), d && d(T);
      }
    }).catch(function(z) {
      return W(z);
    });
  }, [o, d, W, A, w, a, i, s, c, j]), P = Z(function(T) {
    T.preventDefault(), T.persist(), kt(T);
    var z = ct(T);
    if (z && T.dataTransfer)
      try {
        T.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return z && l && l(T), !1;
  }, [l, A]), V = Z(function(T) {
    T.preventDefault(), T.persist(), kt(T);
    var z = F.current.filter(function(be) {
      return G.current && G.current.contains(be);
    }), ve = z.indexOf(T.target);
    ve !== -1 && z.splice(ve, 1), F.current = z, !(z.length > 0) && (ie({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), ct(T) && p && p(T));
  }, [G, p, A]), ae = Z(function(T, z) {
    var ve = [], be = [];
    T.forEach(function(Ee) {
      var Re = Ka(Ee, w), $e = jn(Re, 2), rn = $e[0], on = $e[1], an = Xa(Ee, a, i), _t = jn(an, 2), sn = _t[0], cn = _t[1], ln = j ? j(Ee) : null;
      if (rn && sn && !ln)
        ve.push(Ee);
      else {
        var dn = [on, cn];
        ln && (dn = dn.concat(ln)), be.push({
          file: Ee,
          errors: dn.filter(function(is) {
            return is;
          })
        });
      }
    }), (!s && ve.length > 1 || s && c >= 1 && ve.length > c) && (ve.forEach(function(Ee) {
      be.push({
        file: Ee,
        errors: [Fg]
      });
    }), ve.splice(0)), ie({
      acceptedFiles: ve,
      fileRejections: be,
      isDragReject: be.length > 0,
      type: "setFiles"
    }), u && u(ve, be, z), be.length > 0 && v && v(be, z), ve.length > 0 && f && f(ve, z);
  }, [ie, s, w, a, i, c, u, f, v, j]), k = Z(function(T) {
    T.preventDefault(), T.persist(), kt(T), F.current = [], ct(T) && Promise.resolve(o(T)).then(function(z) {
      Ut(T) && !A || ae(z, T);
    }).catch(function(z) {
      return W(z);
    }), ie({
      type: "reset"
    });
  }, [o, ae, W, A]), ge = Z(function() {
    if (q.current) {
      ie({
        type: "openDialog"
      }), B();
      var T = {
        multiple: s,
        types: M
      };
      window.showOpenFilePicker(T).then(function(z) {
        return o(z);
      }).then(function(z) {
        ae(z, null), ie({
          type: "closeDialog"
        });
      }).catch(function(z) {
        Xg(z) ? (K(z), ie({
          type: "closeDialog"
        })) : Jg(z) ? (q.current = !1, X.current ? (X.current.value = null, X.current.click()) : W(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : W(z);
      });
      return;
    }
    X.current && (ie({
      type: "openDialog"
    }), B(), X.current.value = null, X.current.click());
  }, [ie, B, K, E, ae, W, M, s]), ze = Z(function(T) {
    !G.current || !G.current.isEqualNode(T.target) || (T.key === " " || T.key === "Enter" || T.keyCode === 32 || T.keyCode === 13) && (T.preventDefault(), ge());
  }, [G, ge]), ot = Z(function() {
    ie({
      type: "focus"
    });
  }, []), Vr = Z(function() {
    ie({
      type: "blur"
    });
  }, []), Fr = Z(function() {
    y || (Ug() ? setTimeout(ge, 0) : ge());
  }, [y, ge]), Ke = function(z) {
    return r ? null : z;
  }, nn = function(z) {
    return b ? null : Ke(z);
  }, Ct = function(z) {
    return S ? null : Ke(z);
  }, kt = function(z) {
    A && z.stopPropagation();
  }, ns = je(function() {
    return function() {
      var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = T.refKey, ve = z === void 0 ? "ref" : z, be = T.role, Ee = T.onKeyDown, Re = T.onFocus, $e = T.onBlur, rn = T.onClick, on = T.onDragEnter, an = T.onDragOver, _t = T.onDragLeave, sn = T.onDrop, cn = Ht(T, ev);
      return fe(fe(er({
        onKeyDown: nn(Te(Ee, ze)),
        onFocus: nn(Te(Re, ot)),
        onBlur: nn(Te($e, Vr)),
        onClick: Ke(Te(rn, Fr)),
        onDragEnter: Ct(Te(on, _)),
        onDragOver: Ct(Te(an, P)),
        onDragLeave: Ct(Te(_t, V)),
        onDrop: Ct(Te(sn, k)),
        role: typeof be == "string" && be !== "" ? be : "presentation"
      }, ve, G), !r && !b ? {
        tabIndex: 0
      } : {}), cn);
    };
  }, [G, ze, ot, Vr, Fr, _, P, V, k, b, S, r]), rs = Z(function(T) {
    T.stopPropagation();
  }, []), os = je(function() {
    return function() {
      var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = T.refKey, ve = z === void 0 ? "ref" : z, be = T.onChange, Ee = T.onClick, Re = Ht(T, tv), $e = er({
        accept: w,
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
        onChange: Ke(Te(be, k)),
        onClick: Ke(Te(Ee, rs)),
        tabIndex: -1
      }, ve, X);
      return fe(fe({}, $e), Re);
    };
  }, [X, n, s, k, r]);
  return fe(fe({}, pe), {}, {
    isFocused: C && !r,
    getRootProps: ns,
    getInputProps: os,
    rootRef: G,
    inputRef: X,
    open: Ke(ge)
  });
}
function lv(e, t) {
  switch (t.type) {
    case "focus":
      return fe(fe({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return fe(fe({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return fe(fe({}, tr), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return fe(fe({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return fe(fe({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return fe(fe({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "setDragGlobal":
      return fe(fe({}, e), {}, {
        isDragGlobal: t.isDragGlobal
      });
    case "reset":
      return fe({}, tr);
    default:
      return e;
  }
}
function ri() {
}
const dv = (e) => e.startsWith("image/") ? Ys : e.startsWith("video/") ? mc : e.startsWith("audio/") ? ac : e.includes("pdf") || e.includes("document") ? Fs : Gs, oi = (e) => {
  if (e === 0) return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB", "GB"], r = Math.floor(Math.log(e) / Math.log(t));
  return parseFloat((e / Math.pow(t, r)).toFixed(2)) + " " + n[r];
};
function yv({
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
  const [d, p] = he([]), [l, u] = he([]), f = Z(
    (D, y) => {
      if (D.length > 0) {
        const b = i ? [...d, ...D] : D;
        if (p(b), e(b), c) {
          const S = D.filter((A) => A.type.startsWith("image/")).map((A) => ({
            file: A,
            url: URL.createObjectURL(A)
          }));
          u((A) => i ? [...A, ...S] : S);
        }
      }
      y.length > 0 && t && t(y);
    },
    [d, i, e, t, c]
  ), v = (D) => {
    const y = d.filter((S) => S !== D);
    p(y), e(y);
    const b = l.find((S) => S.file === D);
    b && (URL.revokeObjectURL(b.url), u((S) => S.filter((A) => A.file !== D)));
  }, { getRootProps: h, getInputProps: x, isDragActive: E, isDragReject: N } = ts({
    onDrop: f,
    accept: n,
    maxFiles: r,
    maxSize: o,
    multiple: i,
    disabled: a
  });
  return /* @__PURE__ */ I("div", { className: O("space-y-4", s), children: [
    /* @__PURE__ */ I(
      "div",
      {
        ...h(),
        className: O(
          "flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl cursor-pointer",
          "transition-all duration-200 ease-out",
          "bg-gradient-to-b from-neutral-50 to-white",
          "border-primary/60 hover:border-primary",
          E && !N && "border-primary bg-gradient-to-b from-primary/5 to-accent/5 scale-[1.01]",
          N && "border-red-400 bg-red-50",
          a && "opacity-50 cursor-not-allowed"
        ),
        children: [
          /* @__PURE__ */ m("input", { ...x() }),
          /* @__PURE__ */ m(
            "div",
            {
              className: O(
                "w-16 h-16 mb-4 rounded-2xl flex items-center justify-center",
                "bg-gradient-to-br from-primary/10 to-accent/10",
                "transition-transform duration-200",
                E && "scale-110"
              ),
              children: /* @__PURE__ */ m(
                uc,
                {
                  className: O(
                    "w-8 h-8 text-primary",
                    E && "animate-bounce"
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ m("p", { className: "text-lg font-medium text-neutral-700 mb-1", children: E ? N ? "Archivo no permitido" : "Suelta los archivos aquí" : "Arrastra archivos aquí" }),
          /* @__PURE__ */ m("p", { className: "text-sm text-neutral-500 mb-3", children: "o haz clic para seleccionar" }),
          /* @__PURE__ */ I("p", { className: "text-xs text-neutral-400", children: [
            "PNG, JPG hasta ",
            oi(o)
          ] })
        ]
      }
    ),
    d.length > 0 && /* @__PURE__ */ I("div", { className: "space-y-2", children: [
      /* @__PURE__ */ I("p", { className: "text-sm font-medium text-neutral-700", children: [
        "Archivos seleccionados (",
        d.length,
        ")"
      ] }),
      /* @__PURE__ */ m("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: d.map((D, y) => {
        const b = dv(D.type), S = l.find((A) => A.file === D);
        return /* @__PURE__ */ I(
          "div",
          {
            className: O(
              "group flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-xl",
              "transition-all duration-200",
              "hover:shadow-md hover:border-primary/30"
            ),
            children: [
              S ? /* @__PURE__ */ m("div", { className: "w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100", children: /* @__PURE__ */ m(
                "img",
                {
                  src: S.url,
                  alt: D.name,
                  className: "w-full h-full object-cover"
                }
              ) }) : /* @__PURE__ */ m(
                "div",
                {
                  className: O(
                    "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
                    "bg-gradient-to-br from-primary/10 to-accent/10"
                  ),
                  children: /* @__PURE__ */ m(b, { className: "w-6 h-6 text-primary" })
                }
              ),
              /* @__PURE__ */ I("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ m("p", { className: "text-sm font-medium text-neutral-800 truncate", children: D.name }),
                /* @__PURE__ */ m("p", { className: "text-xs text-neutral-500", children: oi(D.size) })
              ] }),
              /* @__PURE__ */ m(
                "button",
                {
                  type: "button",
                  onClick: (A) => {
                    A.stopPropagation(), v(D);
                  },
                  className: O(
                    "p-1.5 rounded-lg opacity-0 group-hover:opacity-100",
                    "text-neutral-400 hover:text-red-500 hover:bg-red-50",
                    "transition-all duration-200"
                  ),
                  children: /* @__PURE__ */ m(tt, { className: "w-4 h-4" })
                }
              )
            ]
          },
          `${D.name}-${y}`
        );
      }) })
    ] })
  ] });
}
const pv = {
  default: "bg-neutral-100 text-neutral-700",
  primary: "bg-primary/10 text-primary",
  success: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700"
};
function wv({ columns: e, onCardMove: t, className: n }) {
  return /* @__PURE__ */ m(Pr, { onDragEnd: (o) => {
    const { source: i, destination: a, draggableId: s } = o;
    a && (i.droppableId === a.droppableId && i.index === a.index || t(
      s,
      i.droppableId,
      a.droppableId,
      i.index,
      a.index
    ));
  }, children: /* @__PURE__ */ m("div", { className: O("flex gap-4 overflow-x-auto pb-4", n), children: e.map((o) => /* @__PURE__ */ I(
    "div",
    {
      className: "flex-shrink-0 w-72 bg-neutral-50 rounded-xl border border-neutral-200",
      children: [
        /* @__PURE__ */ m(
          "div",
          {
            className: O(
              "px-4 py-3 border-b border-neutral-200 rounded-t-xl",
              "bg-gradient-to-r from-neutral-100 to-neutral-50"
            ),
            children: /* @__PURE__ */ I("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ m("h3", { className: "font-semibold text-neutral-800", children: o.title }),
              /* @__PURE__ */ m(
                "span",
                {
                  className: O(
                    "px-2 py-0.5 text-xs font-medium rounded-full",
                    "bg-primary/10 text-primary"
                  ),
                  children: o.cards.length
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ m(jr, { droppableId: o.id, children: (i, a) => /* @__PURE__ */ I(
          "div",
          {
            ref: i.innerRef,
            ...i.droppableProps,
            className: O(
              "p-3 min-h-[200px] space-y-3 transition-colors duration-200",
              a.isDraggingOver && "bg-primary/5"
            ),
            children: [
              o.cards.map((s, c) => /* @__PURE__ */ m(Tr, { draggableId: s.id, index: c, children: (d, p) => /* @__PURE__ */ I(
                "div",
                {
                  ref: d.innerRef,
                  ...d.draggableProps,
                  className: O(
                    "group bg-white rounded-lg border border-neutral-200 overflow-hidden",
                    "transition-all duration-200",
                    "hover:shadow-md hover:border-primary/30",
                    p.isDragging && "shadow-xl ring-2 ring-primary/30 rotate-2"
                  ),
                  style: {
                    ...d.draggableProps.style
                  },
                  children: [
                    /* @__PURE__ */ I(
                      "div",
                      {
                        ...d.dragHandleProps,
                        className: O(
                          "flex items-center gap-2 px-3 py-2 border-b border-neutral-100",
                          "cursor-grab active:cursor-grabbing",
                          "bg-gradient-to-r from-neutral-50 to-white"
                        ),
                        children: [
                          /* @__PURE__ */ m(
                            Xe,
                            {
                              className: O(
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
                    /* @__PURE__ */ I("div", { className: "p-3", children: [
                      s.description && /* @__PURE__ */ m("p", { className: "text-sm text-neutral-600 mb-2 line-clamp-2", children: s.description }),
                      s.tags && s.tags.length > 0 && /* @__PURE__ */ m("div", { className: "flex flex-wrap gap-1", children: s.tags.map((l, u) => /* @__PURE__ */ m(
                        "span",
                        {
                          className: O(
                            "px-2 py-0.5 text-xs font-medium rounded-full",
                            pv[l.variant || "default"]
                          ),
                          children: l.label
                        },
                        u
                      )) })
                    ] }),
                    /* @__PURE__ */ m(
                      "div",
                      {
                        className: O(
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
function Ev({
  items: e,
  onReorder: t,
  className: n,
  cardClassName: r,
  droppableId: o = "draggable-cards",
  direction: i = "vertical"
}) {
  return /* @__PURE__ */ m(Pr, { onDragEnd: (s) => {
    if (!s.destination) return;
    const c = Array.from(e), [d] = c.splice(s.source.index, 1);
    c.splice(s.destination.index, 0, d), t(c);
  }, children: /* @__PURE__ */ m(jr, { droppableId: o, direction: i, children: (s) => /* @__PURE__ */ I(
    "div",
    {
      ref: s.innerRef,
      ...s.droppableProps,
      className: O(
        i === "horizontal" ? "flex gap-4" : "space-y-4",
        n
      ),
      children: [
        e.map((c, d) => /* @__PURE__ */ m(Tr, { draggableId: c.id, index: d, children: (p, l) => /* @__PURE__ */ I(
          "div",
          {
            ref: p.innerRef,
            ...p.draggableProps,
            className: O(
              "group relative bg-white border border-neutral-200 rounded-xl overflow-hidden",
              "transition-all duration-200 ease-out",
              "hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5",
              l.isDragging && "shadow-2xl ring-2 ring-primary/30 scale-[1.02] rotate-1",
              r
            ),
            style: {
              ...p.draggableProps.style
            },
            children: [
              c.title ? /* @__PURE__ */ I(
                "div",
                {
                  ...p.dragHandleProps,
                  className: O(
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
                /* @__PURE__ */ I(
                  "div",
                  {
                    ...p.dragHandleProps,
                    className: O(
                      "flex items-center gap-3 px-4 pt-4 pb-2",
                      "cursor-grab active:cursor-grabbing"
                    ),
                    children: [
                      /* @__PURE__ */ m(
                        Xe,
                        {
                          className: O(
                            "w-5 h-5 flex-shrink-0 text-neutral-300",
                            "group-hover:text-neutral-400 transition-colors",
                            l.isDragging && "text-primary"
                          )
                        }
                      ),
                      /* @__PURE__ */ m("div", { className: "flex-1 h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-transparent" })
                    ]
                  }
                )
              ),
              /* @__PURE__ */ m("div", { className: O(c.title ? "p-4" : "px-4 pb-4"), children: c.children }),
              !c.title && /* @__PURE__ */ m(
                "div",
                {
                  className: O(
                    "absolute top-0 left-0 right-0 h-1 transition-opacity duration-200",
                    "bg-gradient-to-r from-accent via-primary to-primary",
                    l.isDragging ? "opacity-100" : "opacity-0 group-hover:opacity-50"
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
function Nv({
  title: e,
  children: t,
  className: n,
  isDragging: r = !1,
  dragHandleProps: o
}) {
  return /* @__PURE__ */ I(
    "div",
    {
      className: O(
        "group relative bg-white border border-neutral-200 rounded-xl overflow-hidden",
        "transition-all duration-200 ease-out",
        "hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5",
        r && "shadow-2xl ring-2 ring-primary/30 scale-[1.02] rotate-1",
        n
      ),
      children: [
        e ? /* @__PURE__ */ I(
          "div",
          {
            ...o,
            className: O(
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
          /* @__PURE__ */ I(
            "div",
            {
              ...o,
              className: O(
                "flex items-center gap-3 px-4 pt-4 pb-2",
                "cursor-grab active:cursor-grabbing"
              ),
              children: [
                /* @__PURE__ */ m(
                  Xe,
                  {
                    className: O(
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
        /* @__PURE__ */ m("div", { className: O(e ? "p-4" : "px-4 pb-4"), children: t }),
        !e && /* @__PURE__ */ m(
          "div",
          {
            className: O(
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
  tl as Alert,
  Bn as Avatar,
  Xc as Badge,
  rl as Breadcrumb,
  Mt as Button,
  zc as Card,
  Wc as CardBody,
  Uc as CardFooter,
  Gc as CardHeader,
  gi as Checkbox,
  xl as ConfirmModal,
  Ev as DraggableCard,
  mi as Dropdown,
  ir as DropdownMenu,
  yv as FileDropzone,
  xi as Header,
  vv as I18nProvider,
  jt as Input,
  wv as KanbanBoard,
  nl as Layout,
  Dl as LoginPage,
  Ni as Modal,
  Pc as MultiSelect,
  bi as NotificationMenu,
  hl as Pagination,
  Vc as Radio,
  Oc as Select,
  ol as SidePanel,
  hi as Sidebar,
  Nv as SingleDraggableCard,
  xv as SortableList,
  ll as TabPanel,
  gv as Table,
  cl as Tabs,
  jc as Textarea,
  Di as Toast,
  Nl as ToastContainer,
  hv as ToastProvider,
  O as cn,
  Yt as createTranslator,
  dl as defaultMessages,
  Ei as useI18n,
  bv as useToast
};
//# sourceMappingURL=index.js.map
