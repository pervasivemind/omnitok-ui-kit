import { jsxs as S, jsx as m, Fragment as Be } from "react/jsx-runtime";
import * as Q from "react";
import me, { forwardRef as se, createElement as Mn, useState as be, useRef as J, useCallback as ee, useMemo as Ge, useEffect as xe, useContext as Ut, createContext as ti, useLayoutEffect as Za, useReducer as Qa, useImperativeHandle as es, Fragment as ts } from "react";
import ns, { flushSync as ni } from "react-dom";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ri = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = (e) => {
  const t = os(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var is = {
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
const as = (e) => {
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
const ss = se(
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
      ...is,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: ri("lucide", o),
      ...!i && !as(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([l, p]) => Mn(l, p)),
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
const te = (e, t) => {
  const n = se(
    ({ className: r, ...o }, i) => Mn(ss, {
      ref: i,
      iconNode: t,
      className: ri(
        `lucide-${rs(Lr(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Lr(e), n;
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], ls = te("arrow-down", cs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], ps = te("arrow-up-down", ds);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], fs = te("arrow-up", us);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], gs = te("bell", ms);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], hs = te("check", vs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], er = te("chevron-down", bs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], ys = te("chevron-left", xs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], tr = te("chevron-right", ws);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], Ns = te("chevrons-left", Es);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], Os = te("chevrons-right", Ds);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], oi = te("circle-alert", Ss);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], ii = te("circle-check-big", Cs);
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
], ks = te("eye-off", Is);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], As = te("eye", _s);
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
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Rs = te("file-text", Ps);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], $s = te("file", Ts);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Xe = te("grip-vertical", Ms);
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
], Ls = te("house", js);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Vs = te("image", Bs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], ai = te("info", Fs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Gs = te("loader-circle", zs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], qs = te("lock", Ws);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], Hs = te("mail", Us);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], si = te("menu", Ys);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [["path", { d: "M5 12h14", key: "1ays0h" }]], Xs = te("minus", Ks);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], Zs = te("music", Js);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
], ec = te("panel-left-close", Qs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], nc = te("search", tc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], ci = te("triangle-alert", rc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], ic = te("upload", oc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], sc = te("video", ac);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], tt = te("x", cc);
function li(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = li(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function lc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = li(e)) && (r && (r += " "), r += t);
  return r;
}
function D(...e) {
  return lc(e);
}
const dc = {
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
}, Br = {
  primary: "bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 focus:ring-primary",
  accent: "bg-transparent text-accent hover:bg-accent/10 active:bg-accent/20 focus:ring-accent",
  neutral: "bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 focus:ring-neutral-300",
  accept: "bg-transparent text-success hover:bg-success/10 active:bg-success/20 focus:ring-success",
  danger: "bg-transparent text-error hover:bg-error/10 active:bg-error/20 focus:ring-error",
  info: "bg-transparent text-info hover:bg-info/10 active:bg-info/20 focus:ring-info",
  violet: "bg-transparent text-violet hover:bg-violet/10 active:bg-violet/20 focus:ring-violet",
  rose: "bg-transparent text-rose hover:bg-rose/10 active:bg-rose/20 focus:ring-rose",
  teal: "bg-transparent text-teal hover:bg-teal/10 active:bg-teal/20 focus:ring-teal"
}, pc = {
  xs: "px-2 py-0.5 text-xs gap-1",
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-4 py-2 text-base gap-2",
  lg: "px-6 py-3 text-lg gap-2.5"
}, uc = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20
}, $t = se(
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
    return /* @__PURE__ */ S(
      "button",
      {
        ref: d,
        disabled: u,
        className: D(
          // Base styles
          "inline-flex items-center justify-center font-medium rounded-md",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          // Variant styles
          r && Br[e] ? Br[e] : dc[e],
          // Size styles
          pc[t],
          // Full width
          a && "w-full",
          // Disabled state
          u && "opacity-50 cursor-not-allowed",
          c
        ),
        ...p,
        children: [
          n ? /* @__PURE__ */ m(Gs, { className: "animate-spin", size: uc[t] }) : o,
          l,
          !n && i
        ]
      }
    );
  }
);
$t.displayName = "Button";
const fc = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-4 py-3 text-lg"
}, mc = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, gc = {
  sm: "pr-8",
  md: "pr-10",
  lg: "pr-12"
}, jn = se(
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
    return /* @__PURE__ */ S("div", { className: D("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ m(
        "label",
        {
          htmlFor: u,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ S("div", { className: "relative", children: [
        o && /* @__PURE__ */ m("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400", children: o }),
        /* @__PURE__ */ m(
          "input",
          {
            ref: d,
            id: u,
            disabled: s,
            className: D(
              // Base styles
              "w-full rounded-md border bg-white",
              "transition-colors duration-200",
              "placeholder:text-neutral-400",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              fc[e],
              // Icon padding
              o && mc[e],
              i && gc[e],
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
jn.displayName = "Input";
const vc = {
  sm: "px-3 py-1.5 text-sm pr-8",
  md: "px-4 py-2 text-base pr-10",
  lg: "px-4 py-3 text-lg pr-12"
}, hc = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, bc = se(
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
    id: p,
    ...d
  }, u) => {
    const f = p || `select-${Math.random().toString(36).slice(2, 9)}`, v = !!r;
    return /* @__PURE__ */ S("div", { className: D("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ m(
        "label",
        {
          htmlFor: f,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ S("div", { className: "relative", children: [
        c && /* @__PURE__ */ m("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none", children: c }),
        /* @__PURE__ */ S(
          "select",
          {
            ref: u,
            id: f,
            disabled: s,
            className: D(
              // Base styles
              "w-full rounded-md border bg-white appearance-none cursor-pointer",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              vc[e],
              // Icon padding
              c && hc[e],
              // Border color
              v ? "border-error focus:ring-error focus:border-error" : "border-neutral-300",
              // Disabled state
              s && "bg-neutral-100 cursor-not-allowed opacity-60",
              l
            ),
            "aria-invalid": v,
            "aria-describedby": v ? `${f}-error` : n ? `${f}-helper` : void 0,
            ...d,
            children: [
              i && /* @__PURE__ */ m("option", { value: "", disabled: !0, children: i }),
              o.map((b) => /* @__PURE__ */ m("option", { value: b.value, disabled: b.disabled, children: b.label }, b.value))
            ]
          }
        ),
        /* @__PURE__ */ m(
          er,
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
bc.displayName = "Select";
const xc = {
  sm: "min-h-[34px] px-3 py-1 text-sm",
  md: "min-h-[42px] px-4 py-1.5 text-base",
  lg: "min-h-[50px] px-4 py-2 text-lg"
}, yc = {
  sm: "px-1.5 py-0.5 text-xs gap-0.5",
  md: "px-2 py-0.5 text-sm gap-1",
  lg: "px-2.5 py-1 text-sm gap-1"
}, wc = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, Ec = {
  sm: 12,
  md: 14,
  lg: 14
}, Nc = {
  sm: 14,
  md: 16,
  lg: 20
}, Dc = {
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
}, Oc = se(
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
    className: b,
    id: x
  }, w) => {
    const O = x || `multiselect-${Math.random().toString(36).slice(2, 9)}`, N = !!s, y = t !== void 0, [h, E] = be(n), _ = y ? t : h, [$, K] = be(""), [j, I] = be(!1), [M, B] = be(-1), V = J(null), X = J(null), le = J(null), de = ee(
      (A) => {
        y || E(A), r == null || r(A);
      },
      [y, r]
    ), ce = Ge(() => e.filter((A) => {
      const P = _.includes(A.value), F = !$ || A.label.toLowerCase().includes($.toLowerCase());
      return !P && F;
    }), [e, _, $]), ne = d === void 0 || _.length < d, C = ee(
      (A) => {
        var re;
        if (!ne || p) return;
        const P = e.find((k) => k.value === A);
        if (P != null && P.disabled) return;
        const F = [..._, A];
        de(F), K(""), B(-1), (re = X.current) == null || re.focus();
      },
      [ne, p, e, _, de]
    ), R = ee(
      (A, P) => {
        var re;
        if (P == null || P.stopPropagation(), p) return;
        const F = _.filter((k) => k !== A);
        de(F), (re = X.current) == null || re.focus();
      },
      [p, _, de]
    ), q = ee(
      (A, P) => {
        const F = ce.length;
        if (F === 0) return -1;
        for (let re = 0; re < F; re++) {
          const k = (A + P * (re + 1) + F) % F;
          if (!ce[k].disabled) return k;
        }
        return -1;
      },
      [ce]
    ), U = ee(() => ce.findIndex((A) => !A.disabled), [ce]), z = ee(
      (A) => {
        if (!p)
          switch (A.key) {
            case "ArrowDown": {
              A.preventDefault(), j ? B((P) => q(P, 1)) : (I(!0), B(U()));
              break;
            }
            case "ArrowUp": {
              A.preventDefault(), j && B((P) => q(P, -1));
              break;
            }
            case "Enter": {
              if (A.preventDefault(), j && M >= 0 && M < ce.length) {
                const P = ce[M];
                P.disabled || C(P.value);
              } else j || I(!0);
              break;
            }
            case "Backspace": {
              if ($ === "" && _.length > 0) {
                const P = _[_.length - 1];
                R(P);
              }
              break;
            }
            case "Escape": {
              A.preventDefault(), I(!1), B(-1);
              break;
            }
          }
      },
      [
        p,
        j,
        M,
        C,
        $,
        _,
        R,
        q,
        U
      ]
    );
    xe(() => {
      const A = (P) => {
        V.current && !V.current.contains(P.target) && (I(!1), B(-1), K(""));
      };
      return document.addEventListener("mousedown", A), () => document.removeEventListener("mousedown", A);
    }, []), xe(() => {
      var A;
      M >= 0 && le.current && ((A = le.current.querySelectorAll('[role="option"]')[M]) == null || A.scrollIntoView({ block: "nearest" }));
    }, [M]);
    const Y = () => {
      var A;
      p || ((A = X.current) == null || A.focus(), I(!0));
    }, H = (A) => {
      var P;
      return ((P = e.find((F) => F.value === A)) == null ? void 0 : P.label) ?? A;
    }, W = (A) => {
      var P;
      return ((P = e.find((F) => F.value === A)) == null ? void 0 : P.color) ?? v;
    };
    return /* @__PURE__ */ S("div", { ref: w, className: D("flex flex-col gap-1.5", l && "w-full"), children: [
      i && /* @__PURE__ */ m("label", { htmlFor: `${O}-input`, className: "text-sm font-medium text-neutral-700", children: i }),
      /* @__PURE__ */ S("div", { ref: V, className: "relative", children: [
        f && /* @__PURE__ */ m("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10", children: f }),
        /* @__PURE__ */ S(
          "div",
          {
            onClick: Y,
            className: D(
              // Base styles
              "flex flex-wrap items-center gap-1.5 w-full rounded-md border bg-white cursor-text",
              "transition-colors duration-200",
              // Size styles
              xc[o],
              // Left icon padding
              f && wc[o],
              // Right padding for chevron
              "pr-8",
              // Focus ring (applied when dropdown is open)
              j && !N && "ring-2 ring-primary border-primary",
              j && N && "ring-2 ring-error border-error",
              // Border color
              N ? "border-error" : "border-neutral-300",
              // Disabled state
              p && "bg-neutral-100 cursor-not-allowed opacity-60",
              b
            ),
            "aria-invalid": N,
            "aria-describedby": N ? `${O}-error` : a ? `${O}-helper` : void 0,
            children: [
              _.map((A) => {
                const P = Dc[W(A)];
                return /* @__PURE__ */ S(
                  "span",
                  {
                    className: D(
                      "inline-flex items-center rounded-md font-medium",
                      "transition-colors duration-150",
                      P.base,
                      !p && P.hover,
                      yc[o]
                    ),
                    children: [
                      H(A),
                      !p && /* @__PURE__ */ m(
                        "button",
                        {
                          type: "button",
                          onClick: (F) => R(A, F),
                          className: D(
                            "inline-flex items-center justify-center rounded-sm transition-colors",
                            P.hover
                          ),
                          "aria-label": `Remove ${H(A)}`,
                          tabIndex: -1,
                          children: /* @__PURE__ */ m(tt, { size: Ec[o] })
                        }
                      )
                    ]
                  },
                  A
                );
              }),
              u ? /* @__PURE__ */ m(
                "input",
                {
                  ref: X,
                  id: `${O}-input`,
                  type: "text",
                  value: $,
                  onChange: (A) => {
                    K(A.target.value), j || I(!0), B(0);
                  },
                  onFocus: () => {
                    p || I(!0);
                  },
                  onKeyDown: z,
                  placeholder: _.length === 0 ? c : "",
                  disabled: p,
                  className: D(
                    "flex-1 min-w-[60px] outline-none bg-transparent",
                    "placeholder:text-neutral-400",
                    p && "cursor-not-allowed"
                  ),
                  role: "combobox",
                  "aria-expanded": j,
                  "aria-controls": `${O}-listbox`,
                  "aria-activedescendant": M >= 0 ? `${O}-option-${M}` : void 0,
                  "aria-autocomplete": "list",
                  autoComplete: "off"
                }
              ) : /* @__PURE__ */ S(Be, { children: [
                _.length === 0 && /* @__PURE__ */ m("span", { className: "text-neutral-400", children: c }),
                /* @__PURE__ */ m(
                  "input",
                  {
                    ref: X,
                    id: `${O}-input`,
                    className: "absolute opacity-0 w-0 h-0",
                    onFocus: () => {
                      p || I(!0);
                    },
                    onKeyDown: z,
                    disabled: p,
                    tabIndex: 0,
                    role: "combobox",
                    "aria-expanded": j,
                    "aria-controls": `${O}-listbox`,
                    "aria-activedescendant": M >= 0 ? `${O}-option-${M}` : void 0,
                    readOnly: !0
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ m(
          er,
          {
            className: D(
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-200",
              j && "rotate-180"
            ),
            size: Nc[o]
          }
        ),
        j && /* @__PURE__ */ m(
          "ul",
          {
            ref: le,
            id: `${O}-listbox`,
            role: "listbox",
            "aria-multiselectable": "true",
            className: D(
              "absolute z-50 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: ce.length === 0 ? /* @__PURE__ */ m("li", { className: "px-4 py-2 text-sm text-neutral-400", children: $ ? "No matching options" : "No options available" }) : ce.map((A, P) => /* @__PURE__ */ m(
              "li",
              {
                id: `${O}-option-${P}`,
                role: "option",
                "aria-selected": _.includes(A.value),
                "aria-disabled": A.disabled || !ne,
                onClick: () => {
                  !A.disabled && ne && C(A.value);
                },
                className: D(
                  "px-4 py-2 text-sm transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  A.disabled || !ne ? "text-neutral-300 cursor-not-allowed opacity-50 select-none" : D(
                    "cursor-pointer",
                    P === M ? "bg-primary/10 text-primary" : "text-neutral-700 hover:bg-neutral-50"
                  )
                ),
                children: A.label
              },
              A.value
            ))
          }
        )
      ] }),
      N && /* @__PURE__ */ m("p", { id: `${O}-error`, className: "text-sm text-error", children: s }),
      !N && a && /* @__PURE__ */ m("p", { id: `${O}-helper`, className: "text-sm text-neutral-500", children: a })
    ] });
  }
);
Oc.displayName = "MultiSelect";
const Sc = {
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
function Cc(e, t) {
  return e.startsWith("bottom") ? { marginTop: t } : e.startsWith("top") ? { marginBottom: t } : e.startsWith("left") ? { marginRight: t } : e.startsWith("right") ? { marginLeft: t } : {};
}
const Ic = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-4 py-2.5 text-base"
}, kc = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5"
}, _c = se(
  ({
    items: e,
    onSelect: t,
    trigger: n,
    placement: r = "bottom-start",
    offset: o = 4,
    size: i = "md",
    disabled: a = !1,
    className: s,
    ...c
  }, l) => {
    const [p, d] = be(!1), [u, f] = be(-1), v = J(null), b = J(null), x = J(null), w = e.filter((I) => !I.disabled), O = ee(
      (I, M) => {
        const B = e.length;
        if (B === 0) return -1;
        for (let V = 0; V < B; V++) {
          const X = (I + M * (V + 1) + B) % B;
          if (!e[X].disabled) return X;
        }
        return -1;
      },
      [e]
    ), N = ee(() => e.findIndex((I) => !I.disabled), [e]), y = ee(() => {
      a || w.length === 0 || (d(!0), f(N()));
    }, [a, w.length, N]), h = ee(() => {
      d(!1), f(-1);
    }, []), E = ee(() => {
      p ? h() : y();
    }, [p, h, y]), _ = ee(
      (I) => {
        var M;
        I.disabled || ((M = I.onClick) == null || M.call(I), t == null || t(I.value), h());
      },
      [t, h]
    ), $ = ee(
      (I) => {
        var M;
        if (!a)
          switch (I.key) {
            case "ArrowDown": {
              I.preventDefault(), p ? f((B) => O(B, 1)) : y();
              break;
            }
            case "ArrowUp": {
              I.preventDefault(), p ? f((B) => O(B, -1)) : y();
              break;
            }
            case "Enter":
            case " ": {
              if (I.preventDefault(), p && u >= 0 && u < e.length) {
                const B = e[u];
                B.href && !B.disabled && (window.location.href = B.href), _(B);
              } else p || y();
              break;
            }
            case "Escape": {
              I.preventDefault(), h(), (M = x.current) == null || M.focus();
              break;
            }
            case "Tab": {
              h();
              break;
            }
          }
      },
      [a, p, u, e, y, h, _, O]
    );
    xe(() => {
      const I = (M) => {
        v.current && !v.current.contains(M.target) && h();
      };
      return document.addEventListener("mousedown", I), () => document.removeEventListener("mousedown", I);
    }, [h]), xe(() => {
      var I;
      u >= 0 && b.current && ((I = b.current.querySelectorAll('[role="menuitem"]')[u]) == null || I.scrollIntoView({ block: "nearest" }));
    }, [u]);
    const K = (I, M) => {
      const B = M === u, V = /* @__PURE__ */ S(Be, { children: [
        I.icon && /* @__PURE__ */ m(
          "span",
          {
            className: D(
              "flex-shrink-0",
              kc[i],
              I.danger && !I.disabled ? "text-error" : "text-neutral-400",
              B && !I.danger && "text-primary"
            ),
            children: I.icon
          }
        ),
        /* @__PURE__ */ m("span", { className: "flex-1 truncate", children: I.label })
      ] }), X = D(
        "flex items-center gap-2 w-full rounded-md",
        "transition-colors duration-100",
        Ic[i],
        // Disabled
        I.disabled ? "text-neutral-300 cursor-not-allowed opacity-50" : D(
          "cursor-pointer",
          I.danger ? D(
            "text-error",
            B ? "bg-error/10" : "hover:bg-error/10"
          ) : D(
            "text-neutral-700",
            B ? "bg-primary/10 text-primary" : "hover:bg-neutral-50"
          )
        )
      ), le = () => {
        var de;
        I.disabled || ((de = I.onClick) == null || de.call(I), t == null || t(I.value), h());
      };
      return /* @__PURE__ */ S("div", { children: [
        I.dividerBefore && /* @__PURE__ */ m("div", { className: "my-1 border-t border-neutral-200", role: "separator" }),
        I.href && !I.disabled ? /* @__PURE__ */ m(
          "a",
          {
            href: I.href,
            role: "menuitem",
            tabIndex: -1,
            className: X,
            onClick: (de) => {
              var ce;
              (ce = I.onClick) == null || ce.call(I), t == null || t(I.value), h(), I.onClick && de.preventDefault();
            },
            onMouseEnter: () => f(M),
            onMouseLeave: () => f(-1),
            "aria-disabled": I.disabled,
            children: V
          }
        ) : /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            role: "menuitem",
            tabIndex: -1,
            className: D(X, "text-left"),
            onClick: le,
            onMouseEnter: () => f(M),
            onMouseLeave: () => f(-1),
            disabled: I.disabled,
            "aria-disabled": I.disabled,
            children: V
          }
        )
      ] }, I.value);
    }, j = `listmenu-${J(Math.random().toString(36).slice(2, 9)).current}`;
    return /* @__PURE__ */ S(
      "div",
      {
        ref: v,
        className: D("relative inline-block", s),
        ...c,
        children: [
          /* @__PURE__ */ m(
            "div",
            {
              ref: x,
              role: "button",
              tabIndex: a ? -1 : 0,
              "aria-haspopup": "menu",
              "aria-expanded": p,
              "aria-controls": p ? `${j}-menu` : void 0,
              "aria-disabled": a,
              onClick: E,
              onKeyDown: $,
              className: D(
                "inline-flex",
                a && "opacity-50 cursor-not-allowed pointer-events-none"
              ),
              children: n
            }
          ),
          p && /* @__PURE__ */ m(
            "div",
            {
              ref: (I) => {
                b.current = I, typeof l == "function" ? l(I) : l && (l.current = I);
              },
              id: `${j}-menu`,
              role: "menu",
              "aria-orientation": "vertical",
              onKeyDown: $,
              style: Cc(r, o),
              className: D(
                "absolute z-50 min-w-[180px] w-max",
                "rounded-md border border-neutral-200 bg-white shadow-lg",
                "py-1 px-1",
                "animate-fade-in",
                "max-h-80 overflow-auto",
                Sc[r]
              ),
              children: e.map((I, M) => K(I, M))
            }
          )
        ]
      }
    );
  }
);
_c.displayName = "ListMenu";
const Ac = se(
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
    return /* @__PURE__ */ S("div", { className: D("flex flex-col gap-1.5", r && "w-full"), children: [
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
          className: D(
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
      /* @__PURE__ */ S("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ S("div", { children: [
          f && /* @__PURE__ */ m("p", { id: `${u}-error`, className: "text-sm text-error", children: n }),
          !f && t && /* @__PURE__ */ m("p", { id: `${u}-helper`, className: "text-sm text-neutral-500", children: t })
        ] }),
        o && i && /* @__PURE__ */ S("span", { className: "text-sm text-neutral-500", children: [
          v,
          "/",
          i
        ] })
      ] })
    ] });
  }
);
Ac.displayName = "Textarea";
const Pc = {
  primary: { checked: "peer-checked:bg-primary peer-checked:border-primary", ring: "peer-focus:ring-primary" },
  accent: { checked: "peer-checked:bg-accent peer-checked:border-accent", ring: "peer-focus:ring-accent" },
  neutral: { checked: "peer-checked:bg-neutral-600 peer-checked:border-neutral-600", ring: "peer-focus:ring-neutral-400" },
  success: { checked: "peer-checked:bg-success peer-checked:border-success", ring: "peer-focus:ring-success" },
  info: { checked: "peer-checked:bg-info peer-checked:border-info", ring: "peer-focus:ring-info" },
  violet: { checked: "peer-checked:bg-violet peer-checked:border-violet", ring: "peer-focus:ring-violet" },
  rose: { checked: "peer-checked:bg-rose peer-checked:border-rose", ring: "peer-focus:ring-rose" },
  teal: { checked: "peer-checked:bg-teal peer-checked:border-teal", ring: "peer-focus:ring-teal" }
}, Rc = {
  primary: { checked: "peer-checked:bg-primary", ring: "peer-focus:ring-primary" },
  accent: { checked: "peer-checked:bg-accent", ring: "peer-focus:ring-accent" },
  neutral: { checked: "peer-checked:bg-neutral-600", ring: "peer-focus:ring-neutral-400" },
  success: { checked: "peer-checked:bg-success", ring: "peer-focus:ring-success" },
  info: { checked: "peer-checked:bg-info", ring: "peer-focus:ring-info" },
  violet: { checked: "peer-checked:bg-violet", ring: "peer-focus:ring-violet" },
  rose: { checked: "peer-checked:bg-rose", ring: "peer-focus:ring-rose" },
  teal: { checked: "peer-checked:bg-teal", ring: "peer-focus:ring-teal" }
}, Tc = se(
  ({
    label: e,
    description: t,
    error: n,
    indeterminate: r,
    variant: o = "primary",
    toggle: i = !1,
    disabled: a,
    className: s,
    id: c,
    ...l
  }, p) => {
    const d = c || `checkbox-${Math.random().toString(36).slice(2, 9)}`, u = !!n, f = () => {
      const b = Pc[o];
      return /* @__PURE__ */ m(
        "div",
        {
          className: D(
            "w-5 h-5 rounded border-2 transition-colors",
            "flex items-center justify-center",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "[&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100",
            b.ring,
            b.checked,
            u ? "border-error" : "border-neutral-300 peer-hover:border-neutral-400"
          ),
          children: r ? /* @__PURE__ */ m(Xs, { className: "w-3 h-3 text-white transition-opacity" }) : /* @__PURE__ */ m(hs, { className: "w-3 h-3 text-white transition-opacity" })
        }
      );
    }, v = () => {
      const b = Rc[o];
      return /* @__PURE__ */ m(
        "div",
        {
          className: D(
            "relative w-11 h-6 rounded-full transition-colors",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "peer-checked:[&>div]:translate-x-5",
            b.ring,
            b.checked,
            u ? "bg-error/30" : "bg-neutral-300"
          ),
          children: /* @__PURE__ */ m(
            "div",
            {
              className: D(
                "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white",
                "shadow-sm transition-transform duration-200"
              )
            }
          )
        }
      );
    };
    return /* @__PURE__ */ S("div", { className: D("flex flex-col gap-1", s), children: [
      /* @__PURE__ */ S(
        "label",
        {
          htmlFor: d,
          className: D(
            "flex items-start gap-3 cursor-pointer",
            a && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ S("div", { className: D("relative flex items-center", i ? "justify-start" : "justify-center"), children: [
              /* @__PURE__ */ m(
                "input",
                {
                  ref: p,
                  type: "checkbox",
                  id: d,
                  disabled: a,
                  className: "peer sr-only",
                  "aria-invalid": u,
                  ...l
                }
              ),
              i ? v() : f()
            ] }),
            (e || t) && /* @__PURE__ */ S("div", { className: "flex flex-col", children: [
              e && /* @__PURE__ */ m("span", { className: "text-sm font-medium text-neutral-700", children: e }),
              t && /* @__PURE__ */ m("span", { className: "text-sm text-neutral-500", children: t })
            ] })
          ]
        }
      ),
      u && /* @__PURE__ */ m("p", { className: D("text-sm text-error", i ? "ml-14" : "ml-8"), children: n })
    ] });
  }
);
Tc.displayName = "Checkbox";
const $c = se(
  ({ label: e, description: t, error: n, disabled: r, className: o, id: i, ...a }, s) => {
    const c = i || `radio-${Math.random().toString(36).slice(2, 9)}`, l = !!n;
    return /* @__PURE__ */ S("div", { className: D("flex flex-col gap-1", o), children: [
      /* @__PURE__ */ S(
        "label",
        {
          htmlFor: c,
          className: D(
            "flex items-start gap-3 cursor-pointer",
            r && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ S("div", { className: "relative flex items-center justify-center", children: [
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
                  className: D(
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
            (e || t) && /* @__PURE__ */ S("div", { className: "flex flex-col", children: [
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
$c.displayName = "Radio";
const Mc = {
  default: "bg-white border border-neutral-200 rounded-lg",
  bordered: "bg-white border-2 border-neutral-300 rounded-lg",
  elevated: "bg-white border border-neutral-200 shadow-card rounded-lg"
}, jc = se(
  ({ children: e, noPadding: t = !1, hoverable: n = !1, variant: r = "default", className: o, ...i }, a) => /* @__PURE__ */ m(
    "div",
    {
      ref: a,
      className: D(
        Mc[r],
        !t && "p-4",
        n && "transition-shadow transition-colors duration-200 hover:shadow-card-hover hover:border-primary/30 cursor-pointer",
        o
      ),
      ...i,
      children: e
    }
  )
);
jc.displayName = "Card";
const Lc = se(
  ({ children: e, action: t, className: n, ...r }, o) => /* @__PURE__ */ S(
    "div",
    {
      ref: o,
      className: D(
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
Lc.displayName = "CardHeader";
const Bc = se(
  ({ children: e, className: t, ...n }, r) => /* @__PURE__ */ m("div", { ref: r, className: D("p-4", t), ...n, children: e })
);
Bc.displayName = "CardBody";
const Vc = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
  between: "justify-between"
}, Fc = se(
  ({ children: e, align: t = "right", className: n, ...r }, o) => /* @__PURE__ */ m(
    "div",
    {
      ref: o,
      className: D(
        "flex items-center gap-3 px-4 py-3 bg-neutral-50 border-t border-neutral-200",
        Vc[t],
        n
      ),
      ...r,
      children: e
    }
  )
);
Fc.displayName = "CardFooter";
const zc = {
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
}, Gc = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base"
}, Wc = {
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
}, qc = se(
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
      className: D(
        "inline-block rounded-full",
        n === "sm" && "w-2 h-2",
        n === "md" && "w-2.5 h-2.5",
        n === "lg" && "w-3 h-3",
        Wc[t],
        i
      ),
      ...a
    }
  ) : /* @__PURE__ */ m(
    "span",
    {
      ref: s,
      className: D(
        "inline-flex items-center font-medium",
        r ? "rounded-full" : "rounded-md",
        zc[t],
        Gc[n],
        i
      ),
      ...a,
      children: e
    }
  )
);
qc.displayName = "Badge";
const Vr = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl"
}, Uc = {
  xs: "w-1.5 h-1.5 border",
  sm: "w-2 h-2 border",
  md: "w-2.5 h-2.5 border-2",
  lg: "w-3 h-3 border-2",
  xl: "w-4 h-4 border-2"
}, Hc = {
  online: "bg-success",
  offline: "bg-neutral-400",
  busy: "bg-error",
  away: "bg-warning"
}, di = se(
  ({ size: e = "md", src: t, alt: n = "", initials: r, status: o, className: i, ...a }, s) => {
    const c = (l) => l ? l.split(" ").map((p) => p[0]).join("").toUpperCase().slice(0, 2) : "?";
    return /* @__PURE__ */ S("div", { ref: s, className: D("relative inline-block", i), children: [
      t ? /* @__PURE__ */ m(
        "img",
        {
          src: t,
          alt: n,
          className: D(
            "rounded-full object-cover",
            Vr[e]
          ),
          ...a
        }
      ) : /* @__PURE__ */ m(
        "div",
        {
          className: D(
            "rounded-full flex items-center justify-center font-medium",
            "bg-primary text-white",
            Vr[e]
          ),
          children: c(r || n)
        }
      ),
      o && /* @__PURE__ */ m(
        "span",
        {
          className: D(
            "absolute bottom-0 right-0 rounded-full border-white",
            Uc[e],
            Hc[o]
          )
        }
      )
    ] });
  }
);
di.displayName = "Avatar";
const Yc = {
  info: "bg-info/10 border-info/30 text-info-dark",
  success: "bg-success/10 border-success/30 text-success-dark",
  warning: "bg-warning/10 border-warning/30 text-warning-dark",
  error: "bg-error/10 border-error/30 text-error-dark"
}, Kc = {
  info: ai,
  success: ii,
  warning: ci,
  error: oi
}, Xc = se(
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
    const l = Kc[e];
    return /* @__PURE__ */ S(
      "div",
      {
        ref: c,
        role: "alert",
        className: D(
          "flex gap-3 p-4 rounded-lg border",
          Yc[e],
          a
        ),
        ...s,
        children: [
          !i && /* @__PURE__ */ m(l, { className: "flex-shrink-0 w-5 h-5 mt-0.5" }),
          /* @__PURE__ */ S("div", { className: "flex-1 min-w-0", children: [
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
Xc.displayName = "Alert";
const pi = ({
  item: e,
  collapsed: t,
  level: n = 0,
  activeId: r,
  onItemClick: o,
  onCollapsedChange: i
}) => {
  const [a, s] = be(!1), c = e.children && e.children.length > 0, l = e.active || e.id === r, p = () => {
    var f;
    c ? t ? (i == null || i(!1), s(!0)) : s(!a) : (o == null || o(e), (f = e.onClick) == null || f.call(e));
  }, d = /* @__PURE__ */ S(Be, { children: [
    /* @__PURE__ */ S("span", { className: "relative flex-shrink-0 w-4 h-4 flex items-center justify-center text-[16px]", children: [
      e.icon || /* @__PURE__ */ m("span", { className: "w-1" }),
      t && c && /* @__PURE__ */ m(tr, { className: "absolute -right-2.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 text-white/50" })
    ] }),
    !t && /* @__PURE__ */ S(Be, { children: [
      /* @__PURE__ */ m("span", { className: "flex-1 truncate text-[13px]", children: e.label }),
      e.badge && /* @__PURE__ */ m("span", { className: "px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-accent text-white", children: e.badge }),
      c && /* @__PURE__ */ m(
        er,
        {
          className: D(
            "w-3.5 h-3.5 transition-transform",
            a && "rotate-180"
          )
        }
      )
    ] })
  ] }), u = D(
    "flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg",
    "transition-all duration-200 cursor-pointer",
    "text-white/80 hover:text-white hover:bg-white/10",
    l && [
      "gradient-active",
      "!text-white",
      "mx-2",
      "font-medium"
    ],
    n > 0 && "ml-4",
    t && "justify-center px-2"
  );
  return /* @__PURE__ */ S("div", { children: [
    e.dividerBefore && /* @__PURE__ */ m("div", { className: "my-2 border-t border-white/10", role: "separator" }),
    e.href ? /* @__PURE__ */ m("a", { href: e.href, className: u, onClick: p, title: t ? e.label : void 0, children: d }) : /* @__PURE__ */ m("button", { type: "button", className: D(u, "w-full text-left"), onClick: p, title: t ? e.label : void 0, children: d }),
    c && a && !t && /* @__PURE__ */ m("div", { className: "mt-1 space-y-1", children: e.children.map((f) => /* @__PURE__ */ m(
      pi,
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
}, ui = se(
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
    return /* @__PURE__ */ S(
      "aside",
      {
        ref: u,
        className: D(
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
              className: D(
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
              ) : /* @__PURE__ */ S(Be, { children: [
                /* @__PURE__ */ S("div", { className: "flex flex-col flex-1 min-w-0", children: [
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
                    children: /* @__PURE__ */ m(ec, { className: "w-4 h-4" })
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ m("nav", { className: "flex-1 overflow-y-auto overflow-x-hidden py-3 space-y-0.5 scrollbar-thin", children: e.map((b) => /* @__PURE__ */ m(
            pi,
            {
              item: b,
              collapsed: i,
              activeId: c,
              onItemClick: l,
              onCollapsedChange: a
            },
            b.id
          )) }),
          o && /* @__PURE__ */ m("div", { className: "p-3 border-t border-white/10", children: o })
        ]
      }
    );
  }
);
ui.displayName = "Sidebar";
const fi = se(
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
    onUserClick: p,
    onMenuToggle: d,
    showMenuToggle: u = !1,
    actions: f,
    className: v,
    ...b
  }, x) => /* @__PURE__ */ S(
    "header",
    {
      ref: x,
      className: D(
        "flex items-center justify-between h-16 px-6 bg-white border-b border-neutral-200",
        v
      ),
      ...b,
      children: [
        /* @__PURE__ */ S("div", { className: "flex items-center gap-4", children: [
          u && /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              onClick: d,
              className: "p-2 rounded-lg hover:bg-neutral-100 lg:hidden",
              "aria-label": "Toggle menu",
              children: /* @__PURE__ */ m(si, { className: "w-5 h-5 text-neutral-600" })
            }
          ),
          /* @__PURE__ */ S("div", { className: "flex flex-col", children: [
            t,
            e && /* @__PURE__ */ m("h1", { className: "text-lg font-semibold text-neutral-900", children: e })
          ] })
        ] }),
        /* @__PURE__ */ S("div", { className: "flex items-center gap-4", children: [
          r && /* @__PURE__ */ S("div", { className: "relative hidden md:block", children: [
            /* @__PURE__ */ m(nc, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" }),
            /* @__PURE__ */ m(
              "input",
              {
                type: "search",
                placeholder: n,
                value: o,
                onChange: (w) => i == null ? void 0 : i(w.target.value),
                className: D(
                  "w-64 pl-10 pr-4 py-2 text-sm rounded-lg",
                  "bg-neutral-100 border-none",
                  "placeholder:text-neutral-400",
                  "focus:outline-none focus:ring-2 focus:ring-primary"
                )
              }
            )
          ] }),
          f,
          a && /* @__PURE__ */ S(
            "button",
            {
              type: "button",
              onClick: c,
              className: "relative p-2 rounded-lg hover:bg-neutral-100 transition-colors",
              "aria-label": "Notifications",
              children: [
                /* @__PURE__ */ m(gs, { className: "w-5 h-5 text-neutral-600" }),
                s !== void 0 && s > 0 && /* @__PURE__ */ m("span", { className: "absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-4 h-4 text-xs font-medium text-white bg-accent rounded-full flex items-center justify-center", children: s > 9 ? "9+" : s })
              ]
            }
          ),
          l && /* @__PURE__ */ S(
            "button",
            {
              type: "button",
              onClick: p,
              className: "flex items-center gap-3 p-1 rounded-lg hover:bg-neutral-100 transition-colors",
              children: [
                /* @__PURE__ */ m(
                  di,
                  {
                    src: l.avatar,
                    alt: l.name,
                    initials: l.name,
                    size: "sm"
                  }
                ),
                /* @__PURE__ */ S("div", { className: "hidden lg:flex flex-col items-start", children: [
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
fi.displayName = "Header";
const Jc = se(
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
    headerBreadcrumb: d,
    user: u,
    onUserClick: f,
    notificationCount: v,
    onNotificationClick: b,
    showSearch: x = !0,
    searchValue: w,
    onSearchChange: O,
    headerActions: N,
    header: y,
    hideSidebar: h = !1,
    hideHeader: E = !1,
    rightPanel: _,
    rightPanelWidth: $ = "360px",
    className: K,
    ...j
  }, I) => {
    const [M, B] = be(!1), [V, X] = be(!1), le = !!t, de = !!y;
    return /* @__PURE__ */ S("div", { ref: I, className: D("flex h-screen bg-neutral-50", K), ...j, children: [
      !h && /* @__PURE__ */ S(Be, { children: [
        !le && V && /* @__PURE__ */ m(
          "div",
          {
            className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
            onClick: () => X(!1)
          }
        ),
        /* @__PURE__ */ m(
          "div",
          {
            className: D(
              "fixed lg:static inset-y-0 left-0 z-50 lg:z-auto",
              "transform lg:transform-none transition-transform duration-300",
              !le && V ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
              le && "translate-x-0"
            ),
            children: le ? t : /* @__PURE__ */ m(
              ui,
              {
                items: n,
                logo: o,
                logoCollapsed: i,
                systemName: a,
                footer: s,
                collapsible: r,
                collapsed: M,
                onCollapsedChange: B,
                activeId: c,
                onItemClick: (ce) => {
                  l == null || l(ce), X(!1);
                }
              }
            )
          }
        )
      ] }),
      !h && E && !de && /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          onClick: () => X(!V),
          className: "fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md border border-neutral-200 lg:hidden",
          "aria-label": "Toggle menu",
          children: /* @__PURE__ */ m(si, { className: "w-5 h-5 text-neutral-600" })
        }
      ),
      /* @__PURE__ */ S("div", { className: "flex-1 flex flex-col min-w-0", children: [
        !E && (de ? y : /* @__PURE__ */ m(
          fi,
          {
            title: p,
            breadcrumb: d,
            showSearch: x,
            searchValue: w,
            onSearchChange: O,
            showNotifications: !0,
            notificationCount: v,
            onNotificationClick: b,
            user: u,
            onUserClick: f,
            showMenuToggle: !h,
            onMenuToggle: () => X(!V),
            actions: N
          }
        )),
        /* @__PURE__ */ S("div", { className: "flex-1 flex overflow-hidden", children: [
          /* @__PURE__ */ m(
            "main",
            {
              className: D(
                "flex-1 overflow-y-auto p-6",
                _ && "hidden md:block"
              ),
              children: e
            }
          ),
          _ && /* @__PURE__ */ m(
            "aside",
            {
              className: "w-full md:w-[var(--panel-width)] border-l border-neutral-200 bg-white overflow-y-auto flex-shrink-0",
              style: { "--panel-width": $ },
              children: _
            }
          )
        ] })
      ] })
    ] });
  }
);
Jc.displayName = "Layout";
const Zc = se(
  ({
    items: e,
    showHomeIcon: t = !1,
    separator: n,
    maxItems: r,
    className: o,
    ...i
  }, a) => {
    const s = () => n || /* @__PURE__ */ m(tr, { className: "w-4 h-4 text-neutral-400 mx-2" }), c = (d, u, f) => {
      const v = /* @__PURE__ */ S(Be, { children: [
        u === 0 && t && /* @__PURE__ */ m(Ls, { className: "w-4 h-4 mr-1" }),
        d.icon && /* @__PURE__ */ m("span", { className: "mr-1", children: d.icon }),
        d.label
      ] }), b = D(
        "inline-flex items-center text-sm",
        f ? "font-medium text-neutral-900" : "text-neutral-500 hover:text-neutral-700 transition-colors"
      );
      return d.href && !f ? /* @__PURE__ */ m("a", { href: d.href, className: b, children: v }) : /* @__PURE__ */ m("span", { className: b, children: v });
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
      return /* @__PURE__ */ S("li", { className: "inline-flex items-center", children: [
        c(d, u, f),
        !f && s()
      ] }, u);
    }) }) });
  }
);
Zc.displayName = "Breadcrumb";
const Qc = se(
  ({ onClose: e, title: t, description: n, children: r, footer: o, className: i, ...a }, s) => /* @__PURE__ */ S(
    "div",
    {
      ref: s,
      className: D("flex flex-col h-full animate-slide-in-right", i),
      ...a,
      children: [
        /* @__PURE__ */ S("div", { className: "flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark flex-shrink-0", children: [
          /* @__PURE__ */ S("div", { className: "min-w-0 flex-1", children: [
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
Qc.displayName = "SidePanel";
function el({
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
  const b = (y, h) => typeof n == "function" ? n(y) : String(y[n] ?? h), x = (y, h, E) => h.render ? h.render(y, E) : h.accessor ? String(y[h.accessor] ?? "") : "", w = (y) => {
    if (!y.sortable || !i) return;
    let h = "asc";
    r === y.key && (o === "asc" ? h = "desc" : o === "desc" && (h = null)), i(y.key, h);
  }, O = (y) => {
    if (!y.sortable) return null;
    const h = r === y.key, E = D(
      "w-4 h-4 ml-1",
      h ? "text-white" : "text-white/60"
    );
    return h && o === "asc" ? /* @__PURE__ */ m(fs, { className: E }) : h && o === "desc" ? /* @__PURE__ */ m(ls, { className: E }) : /* @__PURE__ */ m(ps, { className: E });
  }, N = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  return /* @__PURE__ */ m("div", { className: "overflow-x-auto", children: /* @__PURE__ */ S(
    "table",
    {
      ref: v,
      className: D("w-full border-collapse", u),
      ...f,
      children: [
        /* @__PURE__ */ m("thead", { className: "bg-primary text-white", children: /* @__PURE__ */ m("tr", { children: e.map((y) => /* @__PURE__ */ m(
          "th",
          {
            className: D(
              "font-semibold text-white text-sm",
              d ? "px-3 py-2" : "px-4 py-3",
              N[y.align || "left"],
              y.sortable && "cursor-pointer select-none hover:bg-primary-dark"
            ),
            style: { width: y.width },
            onClick: () => w(y),
            children: /* @__PURE__ */ S("div", { className: D(
              "flex items-center",
              y.align === "center" && "justify-center",
              y.align === "right" && "justify-end"
            ), children: [
              y.header,
              O(y)
            ] })
          },
          y.key
        )) }) }),
        /* @__PURE__ */ m("tbody", { className: "bg-white divide-y divide-neutral-200", children: s ? /* @__PURE__ */ m("tr", { children: /* @__PURE__ */ m(
          "td",
          {
            colSpan: e.length,
            className: "px-4 py-8 text-center text-neutral-500",
            children: /* @__PURE__ */ S("div", { className: "flex items-center justify-center gap-2", children: [
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
        ) }) : t.map((y, h) => /* @__PURE__ */ m(
          "tr",
          {
            className: D(
              "transition-colors",
              l && h % 2 === 1 && "bg-neutral-50",
              p && "hover:bg-neutral-50",
              a && "cursor-pointer"
            ),
            onClick: () => a == null ? void 0 : a(y, h),
            children: e.map((E) => /* @__PURE__ */ m(
              "td",
              {
                className: D(
                  "text-neutral-700 text-sm",
                  d ? "px-3 py-2" : "px-4 py-3",
                  N[E.align || "left"]
                ),
                children: x(y, E, h)
              },
              E.key
            ))
          },
          b(y, h)
        )) })
      ]
    }
  ) });
}
const av = se(el), mi = ti(null), tl = {
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
}, nl = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg"
}, rl = se(
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
    var x;
    const [d, u] = be(
      n || ((x = e[0]) == null ? void 0 : x.id) || ""
    ), f = t ?? d, v = tl[o], b = (w) => {
      t === void 0 && u(w), r == null || r(w);
    };
    return /* @__PURE__ */ m(mi.Provider, { value: { activeId: f }, children: /* @__PURE__ */ S("div", { ref: p, className: s, ...l, children: [
      /* @__PURE__ */ m(
        "div",
        {
          role: "tablist",
          className: D(
            "flex",
            v.list,
            i && "w-full"
          ),
          children: e.map((w) => /* @__PURE__ */ S(
            "button",
            {
              role: "tab",
              type: "button",
              "aria-selected": f === w.id,
              "aria-controls": `tabpanel-${w.id}`,
              disabled: w.disabled,
              onClick: () => b(w.id),
              className: D(
                "flex items-center justify-center gap-2 font-medium transition-all min-w-0",
                v.tab,
                nl[a],
                f === w.id ? v.active : v.inactive,
                i && "flex-1",
                w.disabled && "opacity-50 cursor-not-allowed"
              ),
              children: [
                w.icon,
                /* @__PURE__ */ m("span", { className: "truncate", children: w.label }),
                w.badge !== void 0 && /* @__PURE__ */ m(
                  "span",
                  {
                    className: D(
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
rl.displayName = "Tabs";
const ol = se(
  ({ id: e, children: t, className: n, ...r }, o) => {
    const i = Ut(mi);
    if (!i)
      throw new Error("TabPanel must be used within Tabs");
    return i.activeId !== e ? null : /* @__PURE__ */ m(
      "div",
      {
        ref: o,
        role: "tabpanel",
        id: `tabpanel-${e}`,
        "aria-labelledby": e,
        className: D("pt-4", n),
        ...r,
        children: t
      }
    );
  }
);
ol.displayName = "TabPanel";
const Fr = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg"
}, il = {
  sm: 14,
  md: 16,
  lg: 20
}, al = {
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
}, sl = {
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
}, cl = se(
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
    variant: p = "primary",
    className: d,
    ...u
  }, f) => {
    const b = (() => {
      const E = [], $ = r * 2 + 3 + 2;
      if (t <= $)
        return Array.from({ length: t }, (B, V) => V + 1);
      const K = Math.max(e - r, 1), j = Math.min(
        e + r,
        t
      ), I = K > 2, M = j < t - 1;
      if (!I && M) {
        const B = 1 + 2 * r + 1;
        for (let V = 1; V <= B; V++) E.push(V);
        E.push("ellipsis"), E.push(t);
      } else if (I && !M) {
        E.push(1), E.push("ellipsis");
        const B = t - (2 * r + 1);
        for (let V = B; V <= t; V++) E.push(V);
      } else {
        E.push(1), E.push("ellipsis");
        for (let B = K; B <= j; B++)
          E.push(B);
        E.push("ellipsis"), E.push(t);
      }
      return E;
    })(), x = il[l], w = D(
      "flex items-center justify-center rounded-full transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      sl[p],
      Fr[l],
      c && "opacity-50 cursor-not-allowed"
    ), O = ({
      page: E,
      isActive: _
    }) => /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        onClick: () => !c && n(E),
        disabled: c,
        "aria-current": _ ? "page" : void 0,
        className: D(
          w,
          "px-3",
          _ ? al[p] : "text-neutral-600 hover:bg-neutral-100"
        ),
        children: E
      }
    ), N = ({
      direction: E,
      double: _
    }) => {
      const $ = E === "prev", K = _ ? $ ? 1 : t : $ ? e - 1 : e + 1, j = c || ($ ? e === 1 : e === t), I = _ ? $ ? Ns : Os : $ ? ys : tr;
      return /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          onClick: () => !j && n(K),
          disabled: j,
          "aria-label": _ ? $ ? "First page" : "Last page" : $ ? "Previous page" : "Next page",
          className: D(
            w,
            j ? "text-neutral-300 cursor-not-allowed" : "text-neutral-600 hover:bg-neutral-100"
          ),
          children: /* @__PURE__ */ m(I, { size: x })
        }
      );
    }, y = a && s ? (e - 1) * s + 1 : void 0, h = a && s ? Math.min(e * s, a) : void 0;
    return /* @__PURE__ */ S(
      "nav",
      {
        ref: f,
        role: "navigation",
        "aria-label": "Pagination",
        className: D("flex items-center gap-2", d),
        ...u,
        children: [
          i && a !== void 0 && /* @__PURE__ */ S("span", { className: "text-sm text-neutral-500 mr-4", children: [
            y,
            "-",
            h,
            " of ",
            a
          ] }),
          o && /* @__PURE__ */ m(N, { direction: "prev", double: !0 }),
          /* @__PURE__ */ m(N, { direction: "prev" }),
          /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: b.map(
            (E, _) => E === "ellipsis" ? /* @__PURE__ */ m(
              "span",
              {
                className: D("px-2 text-neutral-400", Fr[l]),
                children: "..."
              },
              `ellipsis-${_}`
            ) : /* @__PURE__ */ m(
              O,
              {
                page: E,
                isActive: E === e
              },
              E
            )
          ) }),
          /* @__PURE__ */ m(N, { direction: "next" }),
          o && /* @__PURE__ */ m(N, { direction: "next", double: !0 })
        ]
      }
    );
  }
);
cl.displayName = "Pagination";
const ll = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-4xl"
}, gi = se(
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
    const v = ee(
      (b) => {
        b.key === "Escape" && c && t();
      },
      [c, t]
    );
    return xe(() => (e && (document.addEventListener("keydown", v), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), [e, v]), e ? /* @__PURE__ */ S(
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
              className: D(
                "relative flex min-h-full w-full p-4",
                p ? "items-center justify-center" : "items-start justify-center pt-16"
              ),
              children: /* @__PURE__ */ S(
                "div",
                {
                  ref: f,
                  className: D(
                    "relative w-full bg-white rounded-lg shadow-modal",
                    "animate-fade-in",
                    ll[a],
                    d
                  ),
                  onClick: (b) => b.stopPropagation(),
                  ...u,
                  children: [
                    (n || l) && /* @__PURE__ */ S("div", { className: "flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark rounded-t-lg", children: [
                      /* @__PURE__ */ S("div", { children: [
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
gi.displayName = "Modal";
const dl = ({
  message: e,
  confirmText: t = "Confirm",
  cancelText: n = "Cancel",
  confirmVariant: r = "primary",
  onConfirm: o,
  onClose: i,
  loading: a,
  ...s
}) => /* @__PURE__ */ m(
  gi,
  {
    ...s,
    onClose: i,
    size: "sm",
    footer: /* @__PURE__ */ S(Be, { children: [
      /* @__PURE__ */ m($t, { variant: "neutral", ghost: !0, onClick: i, disabled: a, children: n }),
      /* @__PURE__ */ m($t, { variant: r, onClick: o, loading: a, children: t })
    ] }),
    children: /* @__PURE__ */ m("p", { className: "text-neutral-700", children: e })
  }
);
dl.displayName = "ConfirmModal";
const pl = {
  info: "bg-info text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-error text-white"
}, ul = {
  info: ai,
  success: ii,
  warning: ci,
  error: oi
}, vi = se(
  ({ toast: e, onClose: t, className: n, ...r }, o) => {
    const [i, a] = be(!1), s = ul[e.variant];
    xe(() => {
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
    return /* @__PURE__ */ S(
      "div",
      {
        ref: o,
        role: "alert",
        className: D(
          "flex items-start gap-3 p-4 rounded-lg shadow-lg min-w-[320px] max-w-md",
          "transition-all duration-200",
          i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          pl[e.variant],
          n
        ),
        ...r,
        children: [
          /* @__PURE__ */ m(s, { className: "flex-shrink-0 w-5 h-5 mt-0.5" }),
          /* @__PURE__ */ S("div", { className: "flex-1 min-w-0", children: [
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
vi.displayName = "Toast";
const fl = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, ml = ({
  position: e = "top-right",
  toasts: t,
  onClose: n
}) => /* @__PURE__ */ m(
  "div",
  {
    className: D(
      "fixed z-50 flex flex-col gap-2",
      fl[e]
    ),
    children: t.map((r) => /* @__PURE__ */ m(vi, { toast: r, onClose: n }, r.id))
  }
), hi = ti(null), sv = ({ children: e, position: t = "top-right" }) => {
  const [n, r] = be([]), o = ee((p) => {
    const d = Math.random().toString(36).slice(2, 9);
    return r((u) => [...u, { ...p, id: d }]), d;
  }, []), i = ee((p) => {
    r((d) => d.filter((u) => u.id !== p));
  }, []), a = ee(
    (p, d) => o({ variant: "success", message: p, title: d }),
    [o]
  ), s = ee(
    (p, d) => o({ variant: "error", message: p, title: d }),
    [o]
  ), c = ee(
    (p, d) => o({ variant: "warning", message: p, title: d }),
    [o]
  ), l = ee(
    (p, d) => o({ variant: "info", message: p, title: d }),
    [o]
  );
  return /* @__PURE__ */ S(hi.Provider, { value: { toasts: n, addToast: o, removeToast: i, success: a, error: s, warning: c, info: l }, children: [
    e,
    /* @__PURE__ */ m(ml, { position: t, toasts: n, onClose: i })
  ] });
}, cv = () => {
  const e = Ut(hi);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, gl = se(
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
    footer: p,
    variant: d = "gradient",
    className: u,
    ...f
  }, v) => {
    const [b, x] = be(""), [w, O] = be(""), [N, y] = be(!1), [h, E] = be(!1), $ = /* @__PURE__ */ S("form", { onSubmit: (K) => {
      K.preventDefault(), i == null || i(b, w);
    }, className: "space-y-6", children: [
      /* @__PURE__ */ S("div", { className: "text-center mb-8", children: [
        (e || t) && /* @__PURE__ */ S("div", { className: "flex justify-center mb-6", children: [
          /* @__PURE__ */ m("div", { className: "md:hidden", children: e }),
          /* @__PURE__ */ m("div", { className: "hidden md:block", children: t || e })
        ] }),
        /* @__PURE__ */ m("h1", { className: "text-2xl font-bold text-neutral-900", children: r }),
        /* @__PURE__ */ m("p", { className: "mt-2 text-neutral-500", children: o })
      ] }),
      s && /* @__PURE__ */ m("div", { className: "p-3 rounded-lg bg-error/10 border border-error/20 text-error text-sm", children: s }),
      /* @__PURE__ */ S("div", { children: [
        /* @__PURE__ */ m("label", { htmlFor: "email", className: "block text-sm font-medium text-neutral-700 mb-1", children: "Correo electrónico" }),
        /* @__PURE__ */ m(
          jn,
          {
            id: "email",
            type: "email",
            value: b,
            onChange: (K) => x(K.target.value),
            placeholder: "tu@email.com",
            leftIcon: /* @__PURE__ */ m(Hs, { className: "w-5 h-5" }),
            required: !0,
            disabled: a
          }
        )
      ] }),
      /* @__PURE__ */ S("div", { children: [
        /* @__PURE__ */ m("label", { htmlFor: "password", className: "block text-sm font-medium text-neutral-700 mb-1", children: "Contraseña" }),
        /* @__PURE__ */ m(
          jn,
          {
            id: "password",
            type: N ? "text" : "password",
            value: w,
            onChange: (K) => O(K.target.value),
            placeholder: "••••••••",
            leftIcon: /* @__PURE__ */ m(qs, { className: "w-5 h-5" }),
            rightIcon: /* @__PURE__ */ m(
              "button",
              {
                type: "button",
                onClick: () => y(!N),
                className: "text-neutral-400 hover:text-neutral-600",
                children: N ? /* @__PURE__ */ m(ks, { className: "w-5 h-5" }) : /* @__PURE__ */ m(As, { className: "w-5 h-5" })
              }
            ),
            required: !0,
            disabled: a
          }
        )
      ] }),
      /* @__PURE__ */ S("div", { className: "flex items-center justify-between", children: [
        l && /* @__PURE__ */ S("label", { className: "flex items-center gap-2 cursor-pointer", children: [
          /* @__PURE__ */ m(
            "input",
            {
              type: "checkbox",
              checked: h,
              onChange: (K) => E(K.target.checked),
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
        $t,
        {
          type: "submit",
          variant: "accent",
          fullWidth: !0,
          loading: a,
          className: "py-3",
          children: "Iniciar Sesión"
        }
      ),
      p && /* @__PURE__ */ m("div", { className: "text-center", children: p })
    ] });
    return d === "split" ? /* @__PURE__ */ S(
      "div",
      {
        ref: v,
        className: D("min-h-screen flex", u),
        ...f,
        children: [
          /* @__PURE__ */ S("div", { className: "hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sidebar via-primary to-accent p-12 flex-col justify-between", children: [
            /* @__PURE__ */ m("div", { children: (n || t || e) && /* @__PURE__ */ m("div", { className: "mb-8", children: n || t || e }) }),
            /* @__PURE__ */ S("div", { className: "text-white", children: [
              /* @__PURE__ */ m("h2", { className: "text-4xl font-bold mb-4", children: "Bienvenido de vuelta" }),
              /* @__PURE__ */ m("p", { className: "text-white/80 text-lg", children: "Accede a tu panel de administración y gestiona tu plataforma de manera eficiente." })
            ] }),
            /* @__PURE__ */ m("div", { className: "text-white/50 text-sm", children: "© 2024 Omnitok. Todos los derechos reservados." })
          ] }),
          /* @__PURE__ */ m("div", { className: "w-full lg:w-1/2 flex items-center justify-center p-8 bg-white", children: /* @__PURE__ */ m("div", { className: "w-full max-w-md", children: $ }) })
        ]
      }
    ) : d === "centered" ? /* @__PURE__ */ m(
      "div",
      {
        ref: v,
        className: D(
          "min-h-screen flex items-center justify-center p-4 bg-neutral-100",
          u
        ),
        ...f,
        children: /* @__PURE__ */ m("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-xl p-8", children: $ })
      }
    ) : /* @__PURE__ */ m(
      "div",
      {
        ref: v,
        className: D(
          "min-h-screen flex items-center justify-center p-4",
          "bg-gradient-to-br from-sidebar via-primary to-accent",
          u
        ),
        ...f,
        children: /* @__PURE__ */ m("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-2xl p-8", children: $ })
      }
    );
  }
);
gl.displayName = "LoginPage";
function Oe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var vl = typeof Symbol == "function" && Symbol.observable || "@@observable", zr = vl, Gr = () => Math.random().toString(36).substring(7).split("").join("."), hl = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Gr()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Gr()}`
}, Wr = hl;
function bl(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function xl(e) {
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
  if (El(e))
    return "date";
  if (wl(e))
    return "error";
  const n = yl(e);
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
function yl(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function wl(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function El(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Me(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = xl(e)), t;
}
function bi(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(2) : `Expected the root reducer to be a function. Instead, received: '${Me(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(1) : `Expected the enhancer to be a function. Instead, received: '${Me(n)}'`);
    return n(bi)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function l() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((x, w) => {
      a.set(w, x);
    }));
  }
  function p() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function d(x) {
    if (typeof x != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(4) : `Expected the listener to be a function. Instead, received: '${Me(x)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let w = !0;
    l();
    const O = s++;
    return a.set(O, x), function() {
      if (w) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Oe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        w = !1, l(), a.delete(O), i = null;
      }
    };
  }
  function u(x) {
    if (!bl(x))
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
    return (i = a).forEach((O) => {
      O();
    }), x;
  }
  function f(x) {
    if (typeof x != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(10) : `Expected the nextReducer to be a function. Instead, received: '${Me(x)}`);
    r = x, u({
      type: Wr.REPLACE
    });
  }
  function v() {
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
          throw new Error(process.env.NODE_ENV === "production" ? Oe(11) : `Expected the observer to be an object. Instead, received: '${Me(w)}'`);
        function O() {
          const y = w;
          y.next && y.next(p());
        }
        return O(), {
          unsubscribe: x(O)
        };
      },
      [zr]() {
        return this;
      }
    };
  }
  return u({
    type: Wr.INIT
  }), {
    dispatch: u,
    subscribe: d,
    getState: p,
    replaceReducer: f,
    [zr]: v
  };
}
function qr(e, t) {
  return function(...n) {
    return t(e.apply(this, n));
  };
}
function Ur(e, t) {
  if (typeof e == "function")
    return qr(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Oe(16) : `bindActionCreators expected an object or a function, but instead received: '${Me(e)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = qr(o, t));
  }
  return n;
}
function xi(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function Nl(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Oe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, s = e.map((c) => c(a));
    return i = xi(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function Dl(e) {
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
var Hr;
function Ol() {
  if (Hr) return ln;
  Hr = 1;
  var e = me;
  function t(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return ln.useSyncExternalStoreWithSelector = function(c, l, p, d, u) {
    var f = o(null);
    if (f.current === null) {
      var v = { hasValue: !1, value: null };
      f.current = v;
    } else v = f.current;
    f = a(
      function() {
        function x(h) {
          if (!w) {
            if (w = !0, O = h, h = d(h), u !== void 0 && v.hasValue) {
              var E = v.value;
              if (u(E, h))
                return N = E;
            }
            return N = h;
          }
          if (E = N, n(O, h)) return E;
          var _ = d(h);
          return u !== void 0 && u(E, _) ? (O = h, E) : (O = h, N = _);
        }
        var w = !1, O, N, y = p === void 0 ? null : p;
        return [
          function() {
            return x(l());
          },
          y === null ? void 0 : function() {
            return x(y());
          }
        ];
      },
      [l, p, d, u]
    );
    var b = r(c, f[0], f[1]);
    return i(
      function() {
        v.hasValue = !0, v.value = b;
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
var Yr;
function Sl() {
  return Yr || (Yr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, l) {
      return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = me, n = typeof Object.is == "function" ? Object.is : e, r = t.useSyncExternalStore, o = t.useRef, i = t.useEffect, a = t.useMemo, s = t.useDebugValue;
    dn.useSyncExternalStoreWithSelector = function(c, l, p, d, u) {
      var f = o(null);
      if (f.current === null) {
        var v = { hasValue: !1, value: null };
        f.current = v;
      } else v = f.current;
      f = a(
        function() {
          function x(h) {
            if (!w) {
              if (w = !0, O = h, h = d(h), u !== void 0 && v.hasValue) {
                var E = v.value;
                if (u(E, h))
                  return N = E;
              }
              return N = h;
            }
            if (E = N, n(O, h))
              return E;
            var _ = d(h);
            return u !== void 0 && u(E, _) ? (O = h, E) : (O = h, N = _);
          }
          var w = !1, O, N, y = p === void 0 ? null : p;
          return [
            function() {
              return x(l());
            },
            y === null ? void 0 : function() {
              return x(y());
            }
          ];
        },
        [l, p, d, u]
      );
      var b = r(c, f[0], f[1]);
      return i(
        function() {
          v.hasValue = !0, v.value = b;
        },
        [b]
      ), s(b), b;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), dn;
}
process.env.NODE_ENV === "production" ? Ol() : Sl();
var yi = /* @__PURE__ */ Q.version.startsWith("19"), Cl = /* @__PURE__ */ Symbol.for(
  yi ? "react.transitional.element" : "react.element"
), Il = /* @__PURE__ */ Symbol.for("react.portal"), wi = /* @__PURE__ */ Symbol.for("react.fragment"), Ei = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ni = /* @__PURE__ */ Symbol.for("react.profiler"), nr = /* @__PURE__ */ Symbol.for("react.consumer"), rr = /* @__PURE__ */ Symbol.for("react.context"), or = /* @__PURE__ */ Symbol.for("react.forward_ref"), Di = /* @__PURE__ */ Symbol.for("react.suspense"), Oi = /* @__PURE__ */ Symbol.for(
  "react.suspense_list"
), Ht = /* @__PURE__ */ Symbol.for("react.memo"), Si = /* @__PURE__ */ Symbol.for("react.lazy"), kl = /* @__PURE__ */ Symbol.for("react.offscreen"), _l = /* @__PURE__ */ Symbol.for(
  "react.client.reference"
), Al = or, Pl = Ht;
function Rl(e) {
  return typeof e == "string" || typeof e == "function" || e === wi || e === Ni || e === Ei || e === Di || e === Oi || e === kl || typeof e == "object" && e !== null && (e.$$typeof === Si || e.$$typeof === Ht || e.$$typeof === rr || e.$$typeof === nr || e.$$typeof === or || e.$$typeof === _l || e.getModuleId !== void 0);
}
function Ln(e) {
  if (typeof e == "object" && e !== null) {
    const { $$typeof: t } = e;
    switch (t) {
      case Cl:
        switch (e = e.type, e) {
          case wi:
          case Ni:
          case Ei:
          case Di:
          case Oi:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case rr:
              case or:
              case Si:
              case Ht:
                return e;
              case nr:
                return e;
              default:
                return t;
            }
        }
      case Il:
        return t;
    }
  }
}
function Tl(e) {
  return yi ? Ln(e) === nr : Ln(e) === rr;
}
function $l(e) {
  return Ln(e) === Ht;
}
function ir(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function pn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || ir(
      `The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`
    ));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Ml(e, t, n) {
  pn(e, "mapStateToProps"), pn(t, "mapDispatchToProps"), pn(n, "mergeProps");
}
function jl(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, l, p, d, u;
  function f(O, N) {
    return c = O, l = N, p = e(c, l), d = t(r, l), u = n(p, d, l), s = !0, u;
  }
  function v() {
    return p = e(c, l), t.dependsOnOwnProps && (d = t(r, l)), u = n(p, d, l), u;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(c, l)), t.dependsOnOwnProps && (d = t(r, l)), u = n(p, d, l), u;
  }
  function x() {
    const O = e(c, l), N = !a(O, p);
    return p = O, N && (u = n(p, d, l)), u;
  }
  function w(O, N) {
    const y = !i(N, l), h = !o(
      O,
      c,
      N,
      l
    );
    return c = O, l = N, y && h ? v() : y ? b() : h ? x() : u;
  }
  return function(N, y) {
    return s ? w(N, y) : f(N, y);
  };
}
function Ll(e, {
  initMapStateToProps: t,
  initMapDispatchToProps: n,
  initMergeProps: r,
  ...o
}) {
  const i = t(e, o), a = n(e, o), s = r(e, o);
  return process.env.NODE_ENV !== "production" && Ml(i, a, s), jl(i, a, s, e, o);
}
function Bl(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function Vl(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function Ci(e, t, n) {
  Vl(e) || ir(
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
function Kr(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Ii(e, t) {
  return function(r, { displayName: o }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Kr(e);
      let l = i(s, c);
      return typeof l == "function" && (i.mapToProps = l, i.dependsOnOwnProps = Kr(l), l = i(s, c)), process.env.NODE_ENV !== "production" && Ci(l, o, t), l;
    }, i;
  };
}
function ar(e, t) {
  return (n, r) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`
    );
  };
}
function Fl(e) {
  return e && typeof e == "object" ? Bn(
    (t) => (
      // @ts-ignore
      Bl(e, t)
    )
  ) : e ? typeof e == "function" ? (
    // @ts-ignore
    Ii(e, "mapDispatchToProps")
  ) : ar(e, "mapDispatchToProps") : Bn((t) => ({
    dispatch: t
  }));
}
function zl(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Ii(e, "mapStateToProps")
  ) : ar(e, "mapStateToProps") : Bn(() => ({}));
}
function Gl(e, t, n) {
  return { ...n, ...e, ...t };
}
function Wl(e) {
  return function(n, { displayName: r, areMergedPropsEqual: o }) {
    let i = !1, a;
    return function(c, l, p) {
      const d = e(c, l, p);
      return i ? o(d, a) || (a = d) : (i = !0, a = d, process.env.NODE_ENV !== "production" && Ci(a, r, "mergeProps")), a;
    };
  };
}
function ql(e) {
  return e ? typeof e == "function" ? Wl(e) : ar(e, "mergeProps") : () => Gl;
}
function Ul(e) {
  e();
}
function Hl() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Ul(() => {
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
var Xr = {
  notify() {
  },
  get: () => []
};
function ki(e, t) {
  let n, r = Xr, o = 0, i = !1;
  function a(b) {
    p();
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
    v.onStateChange && v.onStateChange();
  }
  function l() {
    return i;
  }
  function p() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = Hl());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Xr);
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
var Yl = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Kl = /* @__PURE__ */ Yl(), Xl = () => typeof navigator < "u" && navigator.product === "ReactNative", Jl = /* @__PURE__ */ Xl(), Zl = () => Kl || Jl ? Q.useLayoutEffect : Q.useEffect, Mt = /* @__PURE__ */ Zl();
function Jr(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function un(e, t) {
  if (Jr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Jr(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
var Ql = {
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
}, ed = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, td = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, _i = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, nd = {
  [Al]: td,
  [Pl]: _i
};
function Zr(e) {
  return $l(e) ? _i : nd[e.$$typeof] || Ql;
}
var rd = Object.defineProperty, od = Object.getOwnPropertyNames, Qr = Object.getOwnPropertySymbols, id = Object.getOwnPropertyDescriptor, ad = Object.getPrototypeOf, eo = Object.prototype;
function Vn(e, t) {
  if (typeof t != "string") {
    if (eo) {
      const i = ad(t);
      i && i !== eo && Vn(e, i);
    }
    let n = od(t);
    Qr && (n = n.concat(Qr(t)));
    const r = Zr(e), o = Zr(t);
    for (let i = 0; i < n.length; ++i) {
      const a = n[i];
      if (!ed[a] && !(o && o[a]) && !(r && r[a])) {
        const s = id(t, a);
        try {
          rd(e, a, s);
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
function sd() {
  if (!Q.createContext) return {};
  const e = mn[fn] ?? (mn[fn] = /* @__PURE__ */ new Map());
  let t = e.get(Q.createContext);
  return t || (t = Q.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(Q.createContext, t)), t;
}
var Ai = /* @__PURE__ */ sd(), cd = [null, null], ld = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function dd(e, t, n) {
  Mt(() => e(...t), n);
}
function pd(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function ud(e, t, n, r, o, i, a, s, c, l, p) {
  if (!e) return () => {
  };
  let d = !1, u = null;
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
    } catch (O) {
      w = O, u = O;
    }
    w || (u = null), x === i.current ? a.current || l() : (i.current = x, c.current = x, a.current = !0, p());
  };
  return n.onStateChange = f, n.trySubscribe(), f(), () => {
    if (d = !0, n.tryUnsubscribe(), n.onStateChange = null, u)
      throw u;
  };
}
function fd(e, t) {
  return e === t;
}
var to = !1;
function md(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = fd,
  areOwnPropsEqual: i = un,
  areStatePropsEqual: a = un,
  areMergedPropsEqual: s = un,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = Ai
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !to && (to = !0, ir(
    'The `pure` option has been removed. `connect` is now always a "pure/memoized" component'
  ));
  const p = l, d = zl(e), u = Fl(t), f = ql(n), v = !!e;
  return (x) => {
    if (process.env.NODE_ENV !== "production" && !/* @__PURE__ */ Rl(x))
      throw new Error(
        `You must pass a component to the function returned by connect. Instead received ${ld(
          x
        )}`
      );
    const w = x.displayName || x.name || "Component", O = `Connect(${w})`, N = {
      shouldHandleStateChanges: v,
      displayName: O,
      wrappedComponentName: w,
      WrappedComponent: x,
      // @ts-ignore
      initMapStateToProps: d,
      initMapDispatchToProps: u,
      initMergeProps: f,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function y(_) {
      const [$, K, j] = Q.useMemo(() => {
        const { reactReduxForwardedRef: k, ...ge } = _;
        return [_.context, k, ge];
      }, [_]), I = Q.useMemo(() => {
        let k = p;
        if ($ != null && $.Consumer && process.env.NODE_ENV !== "production") {
          if (!/* @__PURE__ */ Tl(
            // @ts-ignore
            /* @__PURE__ */ Q.createElement($.Consumer, null)
          ))
            throw new Error(
              "You must pass a valid React context consumer as `props.context`"
            );
          k = $;
        }
        return k;
      }, [$, p]), M = Q.useContext(I), B = !!_.store && !!_.store.getState && !!_.store.dispatch, V = !!M && !!M.store;
      if (process.env.NODE_ENV !== "production" && !B && !V)
        throw new Error(
          `Could not find "store" in the context of "${O}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${O} in connect options.`
        );
      const X = B ? _.store : M.store, le = V ? M.getServerState : X.getState, de = Q.useMemo(() => Ll(X.dispatch, N), [X]), [ce, ne] = Q.useMemo(() => {
        if (!v) return cd;
        const k = ki(
          X,
          B ? void 0 : M.subscription
        ), ge = k.notifyNestedSubs.bind(k);
        return [k, ge];
      }, [X, B, M]), C = Q.useMemo(() => B ? M : {
        ...M,
        subscription: ce
      }, [B, M, ce]), R = Q.useRef(void 0), q = Q.useRef(j), U = Q.useRef(void 0), z = Q.useRef(!1), Y = Q.useRef(!1), H = Q.useRef(
        void 0
      );
      Mt(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const W = Q.useMemo(() => () => U.current && j === q.current ? U.current : de(X.getState(), j), [X, j]), A = Q.useMemo(() => (ge) => ce ? ud(
        v,
        X,
        ce,
        // @ts-ignore
        de,
        q,
        R,
        z,
        Y,
        U,
        ne,
        ge
      ) : () => {
      }, [ce]);
      dd(pd, [
        q,
        R,
        z,
        j,
        U,
        ne
      ]);
      let P;
      try {
        P = Q.useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          A,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          W,
          le ? () => de(le(), j) : W
        );
      } catch (k) {
        throw H.current && (k.message += `
The error may be correlated with this previous error:
${H.current.stack}

`), k;
      }
      Mt(() => {
        H.current = void 0, U.current = void 0, R.current = P;
      });
      const F = Q.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ Q.createElement(
          x,
          {
            ...P,
            ref: K
          }
        )
      ), [K, x, P]);
      return Q.useMemo(() => v ? /* @__PURE__ */ Q.createElement(I.Provider, { value: C }, F) : F, [I, F, C]);
    }
    const E = Q.memo(y);
    if (E.WrappedComponent = x, E.displayName = y.displayName = O, c) {
      const $ = Q.forwardRef(
        function(j, I) {
          return /* @__PURE__ */ Q.createElement(E, { ...j, reactReduxForwardedRef: I });
        }
      );
      return $.displayName = O, $.WrappedComponent = x, /* @__PURE__ */ Vn($, x);
    }
    return /* @__PURE__ */ Vn(E, x);
  };
}
var Pi = md;
function gd(e) {
  const { children: t, context: n, serverState: r, store: o } = e, i = Q.useMemo(() => {
    const c = ki(o), l = {
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
  }, [o, r]), a = Q.useMemo(() => o.getState(), [o]);
  Mt(() => {
    const { subscription: c } = i;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [i, a]);
  const s = n || Ai;
  return /* @__PURE__ */ Q.createElement(s.Provider, { value: i }, t);
}
var vd = gd, hd = process.env.NODE_ENV === "production", gn = "Invariant failed";
function no(e, t) {
  if (hd)
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
}, sr = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, ro = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, bd = function(t, n) {
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
}, cr = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? vn : r, i = t.border, a = i === void 0 ? vn : i, s = t.padding, c = s === void 0 ? vn : s, l = Pe(sr(n, o)), p = Pe(ro(n, a)), d = Pe(ro(p, c));
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
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? no(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : no()), o;
}, xd = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, jt = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = bd(r, n);
  return cr({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Lt = function(t, n) {
  return n === void 0 && (n = xd()), jt(t, n);
}, Ri = function(t, n) {
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
  return cr({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, Ti = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Ri(n, r);
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
function Bt() {
  return Bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Bt.apply(null, arguments);
}
const yd = process.env.NODE_ENV === "production", wd = /[ \t]{2,}/g, Ed = /^[ \t]*/gm, oo = (e) => e.replace(wd, " ").replace(Ed, "").trim(), Nd = (e) => oo(`
  %c@hello-pangea/dnd

  %c${oo(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Dd = (e) => [Nd(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Od = "__@hello-pangea/dnd-disable-dev-warnings";
function $i(e, t) {
  yd || typeof window < "u" && window[Od] || console[e](...Dd(t));
}
const ue = $i.bind(null, "warn"), Fn = $i.bind(null, "error");
function je() {
}
function Sd(e, t) {
  return {
    ...e,
    ...t
  };
}
function _e(e, t, n) {
  const r = t.map((o) => {
    const i = Sd(n, o.options);
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
const Cd = process.env.NODE_ENV === "production", io = "Invariant failed";
class ut extends Error {
}
ut.prototype.toString = function() {
  return this.message;
};
function g(e, t) {
  throw Cd ? new ut(io) : new ut(`${io}: ${t || ""}`);
}
class Id extends me.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = je, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && ue(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof ut && (n.preventDefault(), process.env.NODE_ENV !== "production" && Fn(o.message));
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
const kd = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Vt = (e) => e + 1, _d = (e) => `
  You have lifted an item in position ${Vt(e.source.index)}
`, Mi = (e, t) => {
  const n = e.droppableId === t.droppableId, r = Vt(e.index), o = Vt(t.index);
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
    `, Ad = (e) => {
  const t = e.destination;
  if (t)
    return Mi(e.source, t);
  const n = e.combine;
  return n ? ji(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, ao = (e) => `
  The item has returned to its starting position
  of ${Vt(e.index)}
`, Pd = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${ao(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Mi(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${ji(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${ao(e.source)}
  `;
}, Tt = {
  dragHandleUsageInstructions: kd,
  onDragStart: _d,
  onDragUpdate: Ad,
  onDragEnd: Pd
};
function Rd(e, t) {
  return !!(e === t || Number.isNaN(e) && Number.isNaN(t));
}
function Li(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (!Rd(e[n], t[n]))
      return !1;
  return !0;
}
function Z(e, t) {
  const n = be(() => ({
    inputs: t,
    result: e()
  }))[0], r = J(!0), o = J(n), a = r.current || !!(t && o.current.inputs && Li(t, o.current.inputs)) ? o.current : {
    inputs: t,
    result: e()
  };
  return xe(() => {
    r.current = !1, o.current = a;
  }, [a]), a.result;
}
function L(e, t) {
  return Z(() => e, t);
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
}), Le = (e, t) => e.x === t.x && e.y === t.y, nt = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Ue = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, ft = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), so = (e, t) => Math.min(...t.map((n) => ft(e, n))), Bi = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Td = (e, t) => {
  const n = Pe({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const wt = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), co = (e) => [{
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
}], $d = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Md = (e, t) => t ? wt(e, t.scroll.diff.displacement) : e, jd = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, Ld = (e, t) => t && t.shouldClipSubject ? Td(t.pageMarginBox, e) : Pe(e);
var Je = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = Md(e.marginBox, r), i = jd(o, n, t), a = Ld(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, lr = (e, t) => {
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
function ye(e, t = Li) {
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
const Vi = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Fi = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Yt = ye((e) => Object.values(e)), Bd = ye((e) => Object.values(e));
var He = ye((e, t) => Bd(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function dr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Kt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Xt = ye((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), Vd = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !dr(o))
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
  const l = Xt(t, r);
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
const zi = {
  point: we,
  value: 0
}, mt = {
  invisible: {},
  visible: {},
  all: []
}, Fd = {
  displaced: mt,
  displacedBy: zi,
  at: null
};
var Ae = (e, t) => (n) => e <= n && n <= t, Gi = (e) => {
  const t = Ae(e.top, e.bottom), n = Ae(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), a = n(r.left) || n(r.right);
    if (i && a)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, l = r.left < e.left && r.right > e.right;
    return c && l ? !0 : c && a || l && i;
  };
}, zd = (e) => {
  const t = Ae(e.top, e.bottom), n = Ae(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const pr = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Wi = {
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
var Gd = (e) => (t) => {
  const n = Ae(t.top, t.bottom), r = Ae(t.left, t.right);
  return (o) => e === pr ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const Wd = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : we;
  return wt(e, n);
}, qd = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, Ud = (e, t, n) => n(t)(e), ur = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? Wd(e, t) : e;
  return qd(i, t, o) && Ud(i, n, o);
}, Hd = (e) => ur({
  ...e,
  isVisibleThroughFrameFn: Gi
}), qi = (e) => ur({
  ...e,
  isVisibleThroughFrameFn: zd
}), Yd = (e) => ur({
  ...e,
  isVisibleThroughFrameFn: Gd(e.destination.axis)
}), Kd = (e, t, n) => {
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
function Xd(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Pe(sr(n, r));
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
    const l = Xd(c, n), p = c.descriptor.id;
    if (s.all.push(p), !Hd({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const u = Kd(p, i, o), f = {
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
function Jd(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function lo({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = Jd(e, {
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
function Ft({
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
    return lo({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const l = t.find((v) => v.descriptor.index === a);
  if (!l)
    return lo({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const p = Xt(e, t), d = t.indexOf(l), u = p.slice(d);
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
function Ve(e, t) {
  return !!t.effected[e];
}
var Zd = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = r.draggableId, s = n[i].descriptor.index;
  return Ve(i, o) ? e ? s : s - 1 : e ? s + 1 : s;
}, Qd = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, a = n[0].descriptor.index, s = n[n.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, ep = ({
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
    const d = Qd({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: i
    });
    return d == null ? null : Ft({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: d
    });
  }
  const p = Zd({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: c
  });
  return p == null ? null : Ft({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: p
  });
}, tp = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Ve(n, t) ? o ? we : nt(r.point) : o ? r.point : we;
}, np = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = Kt(t);
  r || (process.env.NODE_ENV, g());
  const o = r.draggableId, i = n[o].page.borderBox.center, a = tp({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Ne(i, a);
};
const Ui = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, rp = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, fr = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, po = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.end] + Ui(e, n), fr(e, t.marginBox, n)), uo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.start] - rp(e, n), fr(e, t.marginBox, n)), op = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => Ue(e.line, t.contentBox[e.start] + Ui(e, n), fr(e, t.contentBox, n));
var ip = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = He(r.descriptor.id, n), a = t.page, s = r.axis;
  if (!i.length)
    return op({
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
    if (Ve(p, o))
      return uo({
        axis: s,
        moveRelativeTo: u.page,
        isMoving: a
      });
    const f = jt(u.page, l.point);
    return uo({
      axis: s,
      moveRelativeTo: f,
      isMoving: a
    });
  }
  const d = i[i.length - 1];
  if (d.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Ve(d.descriptor.id, o)) {
    const u = jt(d.page, nt(o.displacedBy.point));
    return po({
      axis: s,
      moveRelativeTo: u,
      isMoving: a
    });
  }
  return po({
    axis: s,
    moveRelativeTo: d.page,
    isMoving: a
  });
}, zn = (e, t) => {
  const n = e.frame;
  return n ? Ne(t, n.scroll.diff.displacement) : t;
};
const ap = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !n || !a ? i : a.type === "REORDER" ? ip({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : np({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var Jt = (e) => {
  const t = ap(e), n = e.droppable;
  return n ? zn(n, t) : t;
}, Hi = (e, t) => {
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
function fo(e, t) {
  return e.map((n) => t[n]);
}
function sp(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var cp = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = Hi(t, Ne(t.scroll.current, o)), a = n.frame ? lr(n, Ne(n.frame.scroll.current, o)) : n, s = e.displaced, c = gt({
    afterDragging: fo(s.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), l = gt({
    afterDragging: fo(s.all, r),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), p = {}, d = {}, u = [s, c, l];
  return s.all.forEach((v) => {
    const b = sp(v, u);
    if (b) {
      d[v] = b;
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
}, lp = (e, t) => Ne(e.scroll.diff.displacement, t), mr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = lp(n, e), o = Se(r, t.page.borderBox.center);
  return Ne(t.client.borderBox.center, o);
}, Yi = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = Se(n, e.page.borderBox.center), c = {
    target: wt(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? Yd(c) : qi(c);
}, dp = ({
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
  const l = He(n.descriptor.id, r), p = rt(t, n), d = Vd({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || ep({
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
  const u = Jt({
    impact: d,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (Yi({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: u,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: mr({
        pageBorderBoxCenter: u,
        draggable: t,
        viewport: i
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const v = Se(u, a), b = cp({
    impact: d,
    viewport: i,
    destination: n,
    draggables: r,
    maxScrollChange: v
  });
  return {
    clientSelection: s,
    impact: b,
    scrollJumpRequest: v
  };
};
const De = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get clipped area from droppable") : g()), t;
};
var pp = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const a = n.axis, s = Ae(i[a.start], i[a.end]), c = Yt(r).filter((p) => p !== n).filter((p) => p.isEnabled).filter((p) => !!p.subject.active).filter((p) => Gi(o.frame)(De(p))).filter((p) => {
    const d = De(p);
    return e ? i[a.crossAxisEnd] < d[a.crossAxisEnd] : d[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((p) => {
    const d = De(p), u = Ae(d[a.start], d[a.end]);
    return s(d[a.start]) || s(d[a.end]) || u(i[a.start]) || u(i[a.end]);
  }).sort((p, d) => {
    const u = De(p)[a.crossAxisStart], f = De(d)[a.crossAxisStart];
    return e ? u - f : f - u;
  }).filter((p, d, u) => De(p)[a.crossAxisStart] === De(u[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const l = c.filter((p) => Ae(De(p)[a.start], De(p)[a.end])(t[a.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((p, d) => De(p)[a.start] - De(d)[a.start])[0] : c.sort((p, d) => {
    const u = so(t, co(De(p))), f = so(t, co(De(d)));
    return u !== f ? u - f : De(p)[a.start] - De(d)[a.start];
  })[0];
};
const mo = (e, t) => {
  const n = e.page.borderBox.center;
  return Ve(e.descriptor.id, t) ? Se(n, t.displacedBy.point) : n;
}, up = (e, t) => {
  const n = e.page.borderBox;
  return Ve(e.descriptor.id, t) ? wt(n, nt(t.displacedBy.point)) : n;
};
var fp = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((a) => qi({
  target: up(a, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = ft(e, zn(n, mo(a, o))), l = ft(e, zn(n, mo(s, o)));
  return c < l ? -1 : l < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Et = ye(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: Ue(t.line, r)
  };
});
const mp = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return Ue(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = He(e.descriptor.id, n).reduce((l, p) => l + p.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : Ue(r.line, c);
}, Ki = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Xi = (e, t, n) => {
  const r = e.frame;
  rt(t, e) && (process.env.NODE_ENV !== "production" ? g(!1, "Should not add placeholder space to home list") : g()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot add placeholder size to a subject when it already has one") : g());
  const o = Et(e.axis, t.displaceBy).point, i = mp(e, o, n), a = {
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
  const s = i ? Ne(r.scroll.max, i) : r.scroll.max, c = Ki(r, s), l = Je({
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
}, gp = (e) => {
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
  const o = Ki(n, r), i = Je({
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
var vp = ({
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
      displacedBy: zi,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, u = Jt({
      impact: d,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), f = rt(r, i) ? i : Xi(i, r, o);
    return Yi({
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
  })(), p = Et(i.axis, r.displaceBy);
  return Ft({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: a,
    displacedBy: p,
    last: mt,
    index: l
  });
}, hp = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = pp({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const l = He(c.descriptor.id, o), p = fp({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: l,
    afterCritical: s
  }), d = vp({
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
  const u = Jt({
    impact: d,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: mr({
      pageBorderBoxCenter: u,
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
const bp = (e, t) => {
  const n = Ce(e);
  return n ? t[n] : null;
};
var xp = ({
  state: e,
  type: t
}) => {
  const n = bp(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], p = e.current.page.borderBoxCenter, {
    draggables: d,
    droppables: u
  } = e.dimensions;
  return s ? dp({
    isMovingForward: c,
    previousPageBorderBoxCenter: p,
    draggable: l,
    destination: i,
    draggables: d,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : hp({
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
function Ji(e) {
  const t = Ae(e.top, e.bottom), n = Ae(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function yp(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function wp({
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
function Ep({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = Yt(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !yp(e, i))
      return !1;
    if (Ji(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], l = e[a.crossAxisEnd], p = Ae(i[a.crossAxisStart], i[a.crossAxisEnd]), d = p(c), u = p(l);
    return !d && !u ? !0 : d ? c < s : l > s;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : wp({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const Zi = (e, t) => Pe(wt(e, t));
var Np = (e, t) => {
  const n = e.frame;
  return n ? Zi(t, n.scroll.diff.value) : t;
};
function Qi({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Dp({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Op = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = n.axis, c = Et(n.axis, t.displaceBy), l = c.value, p = e[s.start], d = e[s.end], f = Xt(t, r).find((b) => {
    const x = b.descriptor.id, w = b.page.borderBox.center[s.line], O = Ve(x, a), N = Qi({
      displaced: o,
      id: x
    });
    return O ? N ? d <= w : p < w - l : N ? d <= w + l : p < w;
  }) || null, v = Dp({
    draggable: t,
    closest: f,
    inHomeList: rt(t, n)
  });
  return Ft({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: c,
    index: v
  });
};
const Sp = 4;
var Cp = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const a = r.axis, s = Et(r.axis, e.displaceBy), c = s.value, l = t[a.start], p = t[a.end], u = Xt(e, o).find((v) => {
    const b = v.descriptor.id, x = v.page.borderBox, O = x[a.size] / Sp, N = Ve(b, i), y = Qi({
      displaced: n.displaced,
      id: b
    });
    return N ? y ? p > x[a.start] + O && p < x[a.end] - O : l > x[a.start] - c + O && l < x[a.end] - c - O : y ? p > x[a.start] + c + O && p < x[a.end] + c - O : l > x[a.start] + O && l < x[a.end] - O;
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
}, ea = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = Zi(t.page.borderBox, e), c = Ep({
    pageBorderBox: s,
    draggable: t,
    droppables: r
  });
  if (!c)
    return Fd;
  const l = r[c], p = He(l.descriptor.id, n), d = Np(l, s);
  return Cp({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: p,
    afterCritical: a
  }) || Op({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    destination: l,
    insideDestination: p,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, gr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Ip = ({
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
  const a = gp(i);
  return gr(n, a);
};
var kp = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = Ip({
    previousImpact: r,
    impact: o,
    droppables: n
  }), a = Ce(o);
  if (!a)
    return i;
  const s = n[a];
  if (rt(e, s) || s.subject.withPlaceholder)
    return i;
  const c = Xi(s, e, t);
  return gr(i, c);
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
  const f = s.draggables[e.critical.draggable.id], v = o || ea({
    pageOffset: d.offset,
    draggable: f,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), b = kp({
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
      droppables: b
    },
    impact: v,
    viewport: a,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function _p(e, t) {
  return e.map((n) => t[n]);
}
var ta = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = _p(i.all, n), s = gt({
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
}, na = ({
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
  return mr({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, ra = ({
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
  const p = s[l], d = ta({
    impact: r,
    viewport: o,
    destination: p,
    draggables: a
  }), u = na({
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
}, Ap = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), oa = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = Et(t.axis, e.displaceBy), i = He(t.descriptor.id, n), a = i.indexOf(e);
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
        destination: Ap(e.descriptor)
      }
    },
    afterCritical: l
  };
}, Pp = (e, t) => ({
  draggables: e.draggables,
  droppables: gr(e.droppables, t)
});
const Nt = (e) => {
  process.env.NODE_ENV;
}, Dt = (e) => {
  process.env.NODE_ENV;
};
var Rp = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = jt(e.client, t), o = Lt(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, Tp = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Expected Droppable to have a frame") : g()), t;
}, $p = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = Tp(a).scroll.diff.value, l = Ne(r, c);
    return Rp({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, Mp = ({
  state: e,
  published: t
}) => {
  Nt();
  const n = t.modified.map((w) => {
    const O = e.dimensions.droppables[w.droppableId];
    return lr(O, w.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Vi(n)
  }, o = Fi($p({
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
  }, s = Ce(e.impact), c = s ? a.droppables[s] : null, l = a.draggables[e.critical.draggable.id], p = a.droppables[e.critical.droppable.id], {
    impact: d,
    afterCritical: u
  } = oa({
    draggable: l,
    home: p,
    draggables: i,
    viewport: e.viewport
  }), f = c && c.isCombineEnabled ? e.impact : d, v = ea({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: f,
    viewport: e.viewport,
    afterCritical: u
  });
  Dt();
  const b = {
    ...e,
    phase: "DRAGGING",
    impact: v,
    onLiftImpact: d,
    dimensions: a,
    afterCritical: u,
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
  const r = Pp(e.dimensions, t);
  return !Gn(e) || n ? lt({
    state: e,
    dimensions: r
  }) : ra({
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
const go = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var jp = (e = go, t) => {
  if (t.type === "FLUSH")
    return {
      ...go,
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
    }, d = Yt(i.droppables).every((b) => !b.isFixedOnPage), {
      impact: u,
      afterCritical: f
    } = oa({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : g()), Mp({
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
    return Le(n, e.current.client.selection) ? e : lt({
      state: e,
      clientSelection: n,
      impact: Gn(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return bn(e);
    We(e) || (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} not permitted in phase ${e.phase}`) : g());
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = lr(o, r);
    return hn(e, i, !1);
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
    return hn(e, i, !0);
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
    return hn(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot move by window in phase ${e.phase}`) : g()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? g(!1, "Window scrolling is currently not supported for fixed lists") : g());
    const n = t.payload.newScroll;
    if (Le(e.viewport.scroll.current, n))
      return bn(e);
    const r = Hi(e.viewport, n);
    return Gn(e) ? ra({
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
    const n = xp({
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
function ae(e, t) {
  return e instanceof Object && "type" in e && e.type === t;
}
const Lp = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Bp = (e) => ({
  type: "LIFT",
  payload: e
}), Vp = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Fp = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), zp = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Gp = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), Wp = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), qp = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), ia = (e) => ({
  type: "MOVE",
  payload: e
}), Up = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), Hp = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Yp = () => ({
  type: "MOVE_UP",
  payload: null
}), Kp = () => ({
  type: "MOVE_DOWN",
  payload: null
}), Xp = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Jp = () => ({
  type: "MOVE_LEFT",
  payload: null
}), vr = () => ({
  type: "FLUSH",
  payload: null
}), Zp = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), hr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), aa = (e) => ({
  type: "DROP",
  payload: e
}), Qp = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), sa = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function eu(e) {
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
function tu(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = He(e.droppable.id, t.draggables);
    eu(n);
  }
}
var nu = (e) => ({
  getState: t,
  dispatch: n
}) => (r) => (o) => {
  if (!ae(o, "LIFT")) {
    r(o);
    return;
  }
  const {
    id: i,
    clientSelection: a,
    movementMode: s
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && n(hr({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Unexpected phase to start a drag") : g()), n(vr()), n(Lp({
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
  tu(d, u), n(Vp({
    critical: d,
    dimensions: u,
    clientSelection: a,
    movementMode: s,
    viewport: f
  }));
}, ru = (e) => () => (t) => (n) => {
  ae(n, "INITIAL_PUBLISH") && e.dragging(), ae(n, "DROP_ANIMATE") && e.dropping(n.payload.completed.result.reason), (ae(n, "FLUSH") || ae(n, "DROP_COMPLETE")) && e.resting(), t(n);
};
const br = {
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
}, ca = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, ze = `${ca.outOfTheWay}s ${br.outOfTheWay}`, dt = {
  fluid: `opacity ${ze}`,
  snap: `transform ${ze}, opacity ${ze}`,
  drop: (e) => {
    const t = `${e}s ${br.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${ze}`,
  placeholder: `height ${ze}, width ${ze}, margin ${ze}`
}, vo = (e) => Le(e, we) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Wn = {
  moveTo: vo,
  drop: (e, t) => {
    const n = vo(e);
    if (n)
      return t ? `${n} scale(${vt.scale.drop})` : n;
  }
}, {
  minDropTime: qn,
  maxDropTime: la
} = ca, ou = la - qn, ho = 1500, iu = 0.6;
var au = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = ft(e, t);
  if (r <= 0)
    return qn;
  if (r >= ho)
    return la;
  const o = r / ho, i = qn + ou * o, a = n === "CANCEL" ? i * iu : i;
  return Number(a.toFixed(2));
}, su = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = n, s = Ce(e), c = s ? a[s] : null, l = a[t.descriptor.droppableId], p = na({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || l,
    viewport: r
  });
  return Se(p, t.client.borderBox.center);
}, cu = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: ta({
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
const lu = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (!ae(r, "DROP")) {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Qp({
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
  } = cu({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), u = d ? dr(p) : null, f = d ? Kt(p) : null, v = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, b = {
    draggableId: l.descriptor.id,
    type: l.descriptor.type,
    source: v,
    reason: i,
    mode: o.movementMode,
    destination: u,
    combine: f
  }, x = su({
    impact: p,
    draggable: l,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), w = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: b,
    impact: p
  };
  if (!(!Le(o.current.client.offset, x) || !!b.combine)) {
    t(hr({
      completed: w
    }));
    return;
  }
  const N = au({
    current: o.current.client.offset,
    destination: x,
    reason: i
  });
  t(Zp({
    newHomeClientOffset: x,
    dropDuration: N,
    completed: w
  }));
};
var da = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function du(e) {
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
function pu({
  onWindowScroll: e
}) {
  function t() {
    e(da());
  }
  const n = pt(t), r = du(n);
  let o = je;
  function i() {
    return o !== je;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start scroll listener when already active") : g()), o = _e(window, [r]);
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
const uu = (e) => ae(e, "DROP_COMPLETE") || ae(e, "DROP_ANIMATE") || ae(e, "FLUSH"), fu = (e) => {
  const t = pu({
    onWindowScroll: (n) => {
      e.dispatch(Up({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && ae(r, "INITIAL_PUBLISH") && t.start(), t.isActive() && uu(r) && t.stop(), n(r);
  };
};
var mu = (e) => {
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
}, gu = () => {
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
const vu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, hu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, bu = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, it = (e, t) => {
  Nt(), t(), Dt();
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
  const o = mu(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var xu = (e, t) => {
  const n = gu();
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
      it("onDragStart", () => xn(e().onDragStart, f, t, Tt.onDragStart));
    });
  }, s = (d, u) => {
    const f = dr(u), v = Kt(u);
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragMove when onDragStart has not been called") : g());
    const b = !bu(d, r.lastCritical);
    b && (r.lastCritical = d);
    const x = !vu(r.lastLocation, f);
    x && (r.lastLocation = f);
    const w = !hu(r.lastCombine, v);
    if (w && (r.lastCombine = v), !b && !x && !w)
      return;
    const O = {
      ..._t(d, r.mode),
      combine: v,
      destination: f
    };
    n.add(() => {
      it("onDragUpdate", () => xn(e().onDragUpdate, O, t, Tt.onDragUpdate));
    });
  }, c = () => {
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Can only flush responders while dragging") : g()), n.flush();
  }, l = (d) => {
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : g()), r = null, it("onDragEnd", () => xn(e().onDragEnd, d, t, Tt.onDragEnd));
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
}, yu = (e, t) => {
  const n = xu(e, t);
  return (r) => (o) => (i) => {
    if (ae(i, "BEFORE_INITIAL_CAPTURE")) {
      n.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (ae(i, "INITIAL_PUBLISH")) {
      const s = i.payload.critical;
      n.beforeStart(s, i.payload.movementMode), o(i), n.start(s, i.payload.movementMode);
      return;
    }
    if (ae(i, "DROP_COMPLETE")) {
      const s = i.payload.completed.result;
      n.flush(), o(i), n.drop(s);
      return;
    }
    if (o(i), ae(i, "FLUSH")) {
      n.abort();
      return;
    }
    const a = r.getState();
    a.phase === "DRAGGING" && n.update(a.critical, a.impact);
  };
};
const wu = (e) => (t) => (n) => {
  if (!ae(n, "DROP_ANIMATION_FINISHED")) {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot finish a drop animating when no drop is occurring") : g()), e.dispatch(hr({
    completed: r.completed
  }));
}, Eu = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((ae(i, "FLUSH") || ae(i, "DROP_COMPLETE") || ae(i, "DROP_ANIMATION_FINISHED")) && r(), o(i), !ae(i, "DROP_ANIMATE"))
      return;
    const a = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(sa());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = _e(window, [a]);
    });
  };
};
var Nu = (e) => () => (t) => (n) => {
  (ae(n, "DROP_COMPLETE") || ae(n, "FLUSH") || ae(n, "DROP_ANIMATE")) && e.stopPublishing(), t(n);
}, Du = (e) => {
  let t = !1;
  return () => (n) => (r) => {
    if (ae(r, "INITIAL_PUBLISH")) {
      t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
      return;
    }
    if (n(r), !!t) {
      if (ae(r, "FLUSH")) {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (ae(r, "DROP_COMPLETE")) {
        t = !1;
        const o = r.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const Ou = (e) => ae(e, "DROP_COMPLETE") || ae(e, "DROP_ANIMATE") || ae(e, "FLUSH");
var Su = (e) => (t) => (n) => (r) => {
  if (Ou(r)) {
    e.stop(), n(r);
    return;
  }
  if (ae(r, "INITIAL_PUBLISH")) {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : g()), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const Cu = (e) => (t) => (n) => {
  if (t(n), !ae(n, "PUBLISH_WHILE_DRAGGING"))
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(aa({
    reason: r.reason
  })));
}, Iu = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : xi;
var ku = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => bi(jp, Iu(Nl(ru(n), Nu(e), nu(e), lu, wu, Eu, Cu, Su(i), fu, Du(t), yu(r, o))));
const yn = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function _u({
  registry: e,
  callbacks: t
}) {
  let n = yn(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, Nt();
      const {
        additions: c,
        removals: l,
        modified: p
      } = n, d = Object.keys(c).map((v) => e.draggable.getById(v).getDimension(we)).sort((v, b) => v.descriptor.index - b.descriptor.index), u = Object.keys(p).map((v) => {
        const x = e.droppable.getById(v).callbacks.getScrollWhileDragging();
        return {
          droppableId: v,
          scroll: x
        };
      }), f = {
        additions: d,
        removals: Object.keys(l),
        modified: u
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
var pa = ({
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
}, ua = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.documentElement") : g()), e;
}, fa = () => {
  const e = ua();
  return pa({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Au = () => {
  const e = da(), t = fa(), n = e.y, r = e.x, o = ua(), i = o.clientWidth, a = o.clientHeight, s = r + i, c = n + a;
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
}, Pu = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  Nt();
  const r = Au(), o = r.scroll.current, i = e.droppable, a = n.droppable.getAllByType(i.type).map((p) => p.callbacks.getDimensionAndWatchScroll(o, t)), s = n.draggable.getAllByType(e.draggable.type).map((p) => p.getDimension(o)), c = {
    draggables: Fi(s),
    droppables: Vi(a)
  };
  return Dt(), {
    dimensions: c,
    critical: e,
    viewport: r
  };
};
function bo(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && ue(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Ru = (e, t) => {
  let n = null;
  const r = _u({
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
    u.type === "ADDITION" && bo(e, f, u.value) && r.add(u.value), u.type === "REMOVAL" && bo(e, f, u.value) && r.remove(u.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (u) => {
      n && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start capturing critical dimensions as there is already a collection") : g());
      const f = e.draggable.getById(u.draggableId), v = e.droppable.getById(f.descriptor.droppableId), b = {
        draggable: f.descriptor,
        droppable: v.descriptor
      }, x = e.subscribe(l);
      return n = {
        critical: b,
        unsubscribe: x
      }, Pu({
        critical: b,
        registry: e,
        scrollOptions: u.scrollOptions
      });
    },
    stopPublishing: c
  };
}, ma = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Tu = (e) => {
  window.scrollBy(e.x, e.y);
};
const $u = ye((e) => Yt(e).filter((t) => !(!t.isEnabled || !t.frame))), Mu = (e, t) => $u(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? g(!1, "Invalid result") : g()), Ji(r.frame.pageMarginBox)(e))) || null;
var ju = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return Mu(e, n);
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
var Lu = (e, t, n = () => ht) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, ga = ({
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
}, xr = 1, Bu = (e, t, n = () => ht) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return xr;
  const i = 1 - ga({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = r.maxPixelScroll * r.ease(i);
  return Math.ceil(a);
}, Vu = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, a = t, s = i, l = Date.now() - a;
  if (l >= i)
    return e;
  if (l < o)
    return xr;
  const p = ga({
    startOfRange: o,
    endOfRange: s,
    current: l
  }), d = e * r.ease(p);
  return Math.ceil(d);
}, xo = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = Bu(e, t, o);
  return i === 0 ? 0 : r ? Math.max(Vu(i, n, o), xr) : i;
}, yo = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Lu(e, r, i);
  return t[r.end] < t[r.start] ? xo({
    distanceToEdge: t[r.end],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * xo({
    distanceToEdge: t[r.start],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, Fu = ({
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
const zu = Bi((e) => e === 0 ? 0 : e);
var va = ({
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
  }, s = yo({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: pr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = yo({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Wi,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = zu({
    x: c,
    y: s
  });
  if (Le(l, we))
    return null;
  const p = Fu({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return p ? Le(p, we) ? null : p : null;
};
const Gu = Bi((e) => e === 0 ? 0 : e > 0 ? 1 : -1), yr = /* @__PURE__ */ (() => {
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
    return Le(i, we) ? null : i;
  };
})(), ha = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Gu(n), i = yr({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, wr = (e, t) => ha({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Wu = (e, t) => {
  if (!wr(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return yr({
    current: r,
    max: n,
    change: t
  });
}, Er = (e, t) => {
  const n = e.frame;
  return n ? ha({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, qu = (e, t) => {
  const n = e.frame;
  return !n || !Er(e, t) ? null : yr({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var Uu = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = va({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && wr(e, a) ? a : null;
}, Hu = ({
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
  const s = va({
    dragStartTime: r,
    container: a.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && Er(e, s) ? s : null;
}, wo = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const d = e.viewport, u = Uu({
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
  const l = ju({
    center: a,
    destination: Ce(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const p = Hu({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: a,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  p && o(l.descriptor.id, p);
}, Yu = ({
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
    wo({
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
      Nt(), i && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start auto scrolling when already started") : g());
      const p = Date.now();
      let d = !1;
      const u = () => {
        d = !0;
      };
      wo({
        state: l,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: u,
        scrollDroppable: u,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: p,
        shouldUseTimeDampening: d
      }, Dt(), d && a(l);
    },
    stop: () => {
      i && (r.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, Ku = ({
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
    if (!Er(s, c))
      return c;
    const l = qu(s, c);
    if (!l)
      return t(s.descriptor.id, c), null;
    const p = Se(c, l);
    return t(s.descriptor.id, p), Se(c, p);
  }, i = (s, c, l) => {
    if (!s || !wr(c, l))
      return l;
    const p = Wu(c, l);
    if (!p)
      return n(l), null;
    const d = Se(l, p);
    return n(d), Se(l, d);
  };
  return (s) => {
    const c = s.scrollJumpRequest;
    if (!c)
      return;
    const l = Ce(s.impact);
    l || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot perform a jump scroll when there is no destination") : g());
    const p = o(s.dimensions.droppables[l], c);
    if (!p)
      return;
    const d = s.viewport, u = i(s.isWindowScrollAllowed, d, p);
    u && r(s, u);
  };
}, Xu = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = Yu({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = Ku({
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
})(), Ju = (() => {
  const e = `${Ze}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Eo = {
  contextId: `${Ze}-scroll-container-context-id`
}, Zu = (e) => (t) => `[${t}="${e}"]`, at = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), Qu = "pointer-events: none;";
var ef = (e) => {
  const t = Zu(e), n = (() => {
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
        dragging: Qu,
        dropAnimating: s
      }
    };
  })(), r = (() => {
    const s = `
      transition: ${dt.outOfTheWay};
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
    selector: t(Ju.contextId),
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
const Ie = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Za : xe, wn = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find the head to append a style to") : g()), e;
}, No = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function tf(e, t) {
  const n = Z(() => ef(e), [e]), r = J(null), o = J(null), i = L(ye((d) => {
    const u = o.current;
    u || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), u.textContent = d;
  }), []), a = L((d) => {
    const u = r.current;
    u || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), u.textContent = d;
  }, []);
  Ie(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? g(!1, "style elements already mounted") : g());
    const d = No(t), u = No(t);
    return r.current = d, o.current = u, d.setAttribute(`${Ze}-always`, e), u.setAttribute(`${Ze}-dynamic`, e), wn().appendChild(d), wn().appendChild(u), a(n.always), i(n.resting), () => {
      const f = (v) => {
        const b = v.current;
        b || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot unmount ref as it is not set") : g()), wn().removeChild(b), v.current = null;
      };
      f(r), f(o);
    };
  }, [t, a, i, n.always, n.resting, e]);
  const s = L(() => i(n.dragging), [i, n.dragging]), c = L((d) => {
    if (d === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), l = L(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return Z(() => ({
    dragging: s,
    dropping: c,
    resting: l
  }), [s, c, l]);
}
function ba(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var xa = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Ot(e) {
  return e instanceof xa(e).HTMLElement;
}
function ya(e, t) {
  const n = `[${Qe.contextId}="${e}"]`, r = ba(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && ue(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(Qe.draggableId) === t);
  return o ? Ot(o) ? o : (process.env.NODE_ENV !== "production" && ue("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ue(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function nf(e) {
  const t = J({}), n = J(null), r = J(null), o = J(!1), i = L(function(u, f) {
    const v = {
      id: u,
      focus: f
    };
    return t.current[u] = v, function() {
      const x = t.current;
      x[u] !== v && delete x[u];
    };
  }, []), a = L(function(u) {
    const f = ya(e, u);
    f && f !== document.activeElement && f.focus();
  }, [e]), s = L(function(u, f) {
    n.current === u && (n.current = f);
  }, []), c = L(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const u = n.current;
      u && a(u);
    }));
  }, [a]), l = L(function(u) {
    n.current = null;
    const f = document.activeElement;
    f && f.getAttribute(Qe.draggableId) === u && (n.current = u);
  }, []);
  return Ie(() => (o.current = !0, function() {
    o.current = !1;
    const u = r.current;
    u && cancelAnimationFrame(u);
  }), []), Z(() => ({
    register: i,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, l, c, s]);
}
function rf() {
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
function of() {
  const e = Z(rf, []);
  return xe(() => function() {
    e.clean();
  }, [e]), e;
}
var Nr = me.createContext(null), bt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.body") : g()), e;
};
const af = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
}, sf = (e) => `rfd-announcement-${e}`;
function cf(e) {
  const t = Z(() => sf(e), [e]), n = J(null);
  return xe(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Bt(i.style, af), bt().appendChild(i), function() {
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
const lf = {
  separator: "::"
};
function Dr(e, t = lf) {
  const n = me.useId();
  return Z(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
function df({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function pf({
  contextId: e,
  text: t
}) {
  const n = Dr("hidden-text", {
    separator: "-"
  }), r = Z(() => df({
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
var Zt = me.createContext(null), uf = {
  react: "^18.0.0 || ^19.0.0"
};
const ff = /(\d+)\.(\d+)\.(\d+)/, Do = (e) => {
  const t = ff.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? g(!1, `Unable to parse React version ${e}`) : g());
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, mf = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var gf = (e, t) => {
  const n = Do(e), r = Do(t);
  mf(n, r) || process.env.NODE_ENV !== "production" && ue(`
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
var vf = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && ue(`
      No <!doctype html> found.

      ${En}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && ue(`
      Unexpected <!doctype> found: (${t.name})

      ${En}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && ue(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${En}
    `);
};
function Or(e) {
  process.env.NODE_ENV !== "production" && e();
}
function St(e, t) {
  Or(() => {
    xe(() => {
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
function hf() {
  St(() => {
    gf(uf.react, me.version), vf(document);
  }, []);
}
function Sr(e) {
  const t = J(e);
  return xe(() => {
    t.current = e;
  }), t;
}
function bf() {
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
const xf = 9, yf = 13, Cr = 27, wa = 32, wf = 33, Ef = 34, Nf = 35, Df = 36, Of = 37, Sf = 38, Cf = 39, If = 40, kf = {
  [yf]: !0,
  [xf]: !0
};
var Ea = (e) => {
  kf[e.keyCode] && e.preventDefault();
};
const Qt = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})(), Na = 0, Oo = 5;
function _f(e, t) {
  return Math.abs(t.x - e.x) >= Oo || Math.abs(t.y - e.y) >= Oo;
}
const So = {
  type: "IDLE"
};
function Af({
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
      if (i !== Na)
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
      if (!_f(p, c))
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
      if (o.keyCode === Cr) {
        o.preventDefault(), e();
        return;
      }
      Ea(o);
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
function Pf(e) {
  const t = J(So), n = J(je), r = Z(() => ({
    eventName: "mousedown",
    fn: function(d) {
      if (d.defaultPrevented || d.button !== Na || d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
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
  }), [e]), o = Z(() => ({
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
  }), [e]), i = L(function() {
    const d = {
      passive: !1,
      capture: !0
    };
    n.current = _e(window, [o, r], d);
  }, [o, r]), a = L(() => {
    t.current.type !== "IDLE" && (t.current = So, n.current(), i());
  }, [i]), s = L(() => {
    const p = t.current;
    a(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [a]), c = L(function() {
    const d = {
      capture: !0,
      passive: !1
    }, u = Af({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (f) => {
        t.current = f;
      }
    });
    n.current = _e(window, u, d);
  }, [s, a]), l = L(function(d, u) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g()), t.current = {
      type: "PENDING",
      point: u,
      actions: d
    }, c();
  }, [c]);
  Ie(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function Rf() {
}
const Tf = {
  [Ef]: !0,
  [wf]: !0,
  [Df]: !0,
  [Nf]: !0
};
function $f(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Cr) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === wa) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === If) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Sf) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Cf) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Of) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Tf[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Ea(o);
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
function Mf(e) {
  const t = J(Rf), n = Z(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== wa)
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
      t.current = _e(window, $f(l, p), {
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
  Ie(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const Nn = {
  type: "IDLE"
}, jf = 120, Lf = 0.15;
function Bf({
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
      n.keyCode === Cr && n.preventDefault(), e();
    }
  }, {
    eventName: Qt,
    fn: e
  }];
}
function Vf({
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
      if (!i || !(i.force >= Lf))
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
function Ff(e) {
  const t = J(Nn), n = J(je), r = L(function() {
    return t.current;
  }, []), o = L(function(f) {
    t.current = f;
  }, []), i = Z(() => ({
    eventName: "touchstart",
    fn: function(f) {
      if (f.defaultPrevented)
        return;
      const v = e.findClosestDraggableId(f);
      if (!v)
        return;
      const b = e.tryGetLock(v, s, {
        sourceEvent: f
      });
      if (!b)
        return;
      const x = f.touches[0], {
        clientX: w,
        clientY: O
      } = x, N = {
        x: w,
        y: O
      };
      n.current(), d(b, N);
    }
  }), [e]), a = L(function() {
    const f = {
      capture: !0,
      passive: !1
    };
    n.current = _e(window, [i], f);
  }, [i]), s = L(() => {
    const u = t.current;
    u.type !== "IDLE" && (u.type === "PENDING" && clearTimeout(u.longPressTimerId), o(Nn), n.current(), a());
  }, [a, o]), c = L(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), l = L(function() {
    const f = {
      capture: !0,
      passive: !1
    }, v = {
      cancel: c,
      completed: s,
      getPhase: r
    }, b = _e(window, Vf(v), f), x = _e(window, Bf(v), f);
    n.current = function() {
      b(), x();
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
  }, [r, o]), d = L(function(f, v) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g());
    const b = setTimeout(p, jf);
    o({
      type: "PENDING",
      point: v,
      actions: f,
      longPressTimerId: b
    }), l();
  }, [l, r, o, p]);
  Ie(function() {
    return a(), function() {
      n.current();
      const v = r();
      v.type === "PENDING" && (clearTimeout(v.longPressTimerId), o(Nn));
    };
  }, [r, a, o]), Ie(function() {
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
function zf(e) {
  Or(() => {
    const t = Sr(e);
    St(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot change the amount of sensor hooks after mounting") : g(!1));
    });
  });
}
const Gf = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Da(e, t) {
  if (t == null)
    return !1;
  if (Gf.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Da(e, t.parentElement);
}
function Wf(e, t) {
  const n = t.target;
  return Ot(n) ? Da(e, n) : !1;
}
var qf = (e) => Pe(e.getBoundingClientRect()).center;
function Uf(e) {
  return e instanceof xa(e).Element;
}
const Hf = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function Oa(e, t) {
  return e == null ? null : e[Hf](t) ? e : Oa(e.parentElement, t);
}
function Yf(e, t) {
  return e.closest ? e.closest(t) : Oa(e, t);
}
function Kf(e) {
  return `[${Qe.contextId}="${e}"]`;
}
function Xf(e, t) {
  const n = t.target;
  if (!Uf(n))
    return process.env.NODE_ENV !== "production" && ue("event.target must be a Element"), null;
  const r = Kf(e), o = Yf(n, r);
  return o ? Ot(o) ? o : (process.env.NODE_ENV !== "production" && ue("drag handle must be a HTMLElement"), null) : null;
}
function Jf(e, t) {
  const n = Xf(e, t);
  return n ? n.getAttribute(Qe.draggableId) : null;
}
function Zf(e, t) {
  const n = `[${Un.contextId}="${e}"]`, o = ba(document, n).find((i) => i.getAttribute(Un.id) === t);
  return o ? Ot(o) ? o : (process.env.NODE_ENV !== "production" && ue("Draggable element is not a HTMLElement"), null) : null;
}
function Qf(e) {
  e.preventDefault();
}
function At({
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
function Sa({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !ma(t.getState(), r)) : (process.env.NODE_ENV !== "production" && ue(`Unable to find draggable with id: ${r}`), !1);
}
function em({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Sa({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), l = Zf(t, c.descriptor.id);
  if (!l)
    return process.env.NODE_ENV !== "production" && ue(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && Wf(l, a))
    return null;
  const p = e.claim(i || je);
  let d = "PRE_DRAG";
  function u() {
    return c.options.shouldRespectForcePress;
  }
  function f() {
    return e.isActive(p);
  }
  function v(h, E) {
    At({
      expected: h,
      phase: d,
      isLockActive: f,
      shouldWarn: !0
    }) && n.dispatch(E());
  }
  const b = v.bind(null, "DRAGGING");
  function x(h) {
    function E() {
      e.release(), d = "COMPLETED";
    }
    d !== "PRE_DRAG" && (E(), process.env.NODE_ENV !== "production" ? g(!1, `Cannot lift in phase ${d}`) : g()), n.dispatch(Bp(h.liftActionArgs)), d = "DRAGGING";
    function _($, K = {
      shouldBlockNextClick: !1
    }) {
      if (h.cleanup(), K.shouldBlockNextClick) {
        const j = _e(window, [{
          eventName: "click",
          fn: Qf,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(j);
      }
      E(), n.dispatch(aa({
        reason: $
      }));
    }
    return {
      isActive: () => At({
        expected: "DRAGGING",
        phase: d,
        isLockActive: f,
        shouldWarn: !1
      }),
      shouldRespectForcePress: u,
      drop: ($) => _("DROP", $),
      cancel: ($) => _("CANCEL", $),
      ...h.actions
    };
  }
  function w(h) {
    const E = pt(($) => {
      b(() => ia({
        client: $
      }));
    });
    return {
      ...x({
        liftActionArgs: {
          id: o,
          clientSelection: h,
          movementMode: "FLUID"
        },
        cleanup: () => E.cancel(),
        actions: {
          move: E
        }
      }),
      move: E
    };
  }
  function O() {
    const h = {
      moveUp: () => b(Yp),
      moveRight: () => b(Xp),
      moveDown: () => b(Kp),
      moveLeft: () => b(Jp)
    };
    return x({
      liftActionArgs: {
        id: o,
        clientSelection: qf(l),
        movementMode: "SNAP"
      },
      cleanup: je,
      actions: h
    });
  }
  function N() {
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
    shouldRespectForcePress: u,
    fluidLift: w,
    snapLift: O,
    abort: N
  };
}
const tm = [Pf, Mf, Ff];
function nm({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? tm : [], ...r || []], a = be(() => bf())[0], s = L(function(x, w) {
    xt(x) && !xt(w) && a.tryAbandon();
  }, [a]);
  Ie(function() {
    let x = t.getState();
    return t.subscribe(() => {
      const O = t.getState();
      s(x, O), x = O;
    });
  }, [a, t, s]), Ie(() => a.tryAbandon, [a.tryAbandon]);
  const c = L((b) => Sa({
    lockAPI: a,
    registry: n,
    store: t,
    draggableId: b
  }), [a, n, t]), l = L((b, x, w) => em({
    lockAPI: a,
    registry: n,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: x || null,
    sourceEvent: w && w.sourceEvent ? w.sourceEvent : null
  }), [e, a, n, t]), p = L((b) => Jf(e, b), [e]), d = L((b) => {
    const x = n.draggable.findById(b);
    return x ? x.options : null;
  }, [n.draggable]), u = L(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(vr()));
  }, [a, t]), f = L(() => a.isClaimed(), [a]), v = Z(() => ({
    canGetLock: c,
    tryGetLock: l,
    findClosestDraggableId: p,
    findOptionsForDraggable: d,
    tryReleaseLock: u,
    isLockClaimed: f
  }), [c, l, p, d, u, f]);
  zf(i);
  for (let b = 0; b < i.length; b++)
    i[b](v);
}
const rm = (e) => ({
  onBeforeCapture: (t) => {
    ni(() => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    });
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), om = (e) => ({
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
function im(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = J(null);
  hf();
  const s = Sr(e), c = L(() => rm(s.current), [s]), l = L(() => om(s.current), [s]), p = cf(t), d = pf({
    contextId: t,
    text: i
  }), u = tf(t, o), f = L((j) => {
    st(a).dispatch(j);
  }, []), v = Z(() => Ur({
    publishWhileDragging: Fp,
    updateDroppableScroll: Gp,
    updateDroppableIsEnabled: Wp,
    updateDroppableIsCombineEnabled: qp,
    collectionStarting: zp
  }, f), [f]), b = of(), x = Z(() => Ru(b, v), [b, v]), w = Z(() => Xu({
    scrollWindow: Tu,
    scrollDroppable: x.scrollDroppable,
    getAutoScrollerOptions: l,
    ...Ur({
      move: ia
    }, f)
  }), [x.scrollDroppable, f, l]), O = nf(t), N = Z(() => ku({
    announce: p,
    autoScroller: w,
    dimensionMarshal: x,
    focusMarshal: O,
    getResponders: c,
    styleMarshal: u
  }), [p, w, x, O, c, u]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== N && process.env.NODE_ENV !== "production" && ue("unexpected store change"), a.current = N;
  const y = L(() => {
    const j = st(a);
    j.getState().phase !== "IDLE" && j.dispatch(vr());
  }, []), h = L(() => {
    const j = st(a).getState();
    return j.phase === "DROP_ANIMATING" ? !0 : j.phase === "IDLE" ? !1 : j.isDragging;
  }, []), E = Z(() => ({
    isDragging: h,
    tryAbort: y
  }), [h, y]);
  n(E);
  const _ = L((j) => ma(st(a).getState(), j), []), $ = L(() => We(st(a).getState()), []), K = Z(() => ({
    marshal: x,
    focus: O,
    contextId: t,
    canLift: _,
    isMovementAllowed: $,
    dragHandleUsageInstructionsId: d,
    registry: b
  }), [t, x, d, O, _, $, b]);
  return nm({
    contextId: t,
    store: N,
    registry: b,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), xe(() => y, [y]), me.createElement(Zt.Provider, {
    value: K
  }, me.createElement(vd, {
    context: Nr,
    store: N
  }, e.children));
}
function am() {
  return me.useId();
}
function Ir(e) {
  const t = am(), n = e.dragHandleUsageInstructions || Tt.dragHandleUsageInstructions;
  return me.createElement(Id, null, (r) => me.createElement(im, {
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
const Co = {
  dragging: 5e3,
  dropAnimating: 4500
}, sm = (e, t) => t ? dt.drop(t.duration) : e ? dt.snap : dt.fluid, cm = (e, t) => {
  if (e)
    return t ? vt.opacity.drop : vt.opacity.combining;
}, lm = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function dm(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = lm(e), c = !!i, l = c ? Wn.drop(r, a) : Wn.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: sm(s, i),
    transform: l,
    opacity: cm(a, c),
    zIndex: c ? Co.dropAnimating : Co.dragging,
    pointerEvents: "none"
  };
}
function pm(e) {
  return {
    transform: Wn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function um(e) {
  return e.type === "DRAGGING" ? dm(e) : pm(e);
}
function fm(e, t, n = we) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Ri(o, r), a = Lt(i, n), s = {
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
function mm(e) {
  const t = Dr("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = Z(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), l = L((f) => {
    const v = o();
    return v || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get dimension when no ref is set") : g()), fm(n, v, f);
  }, [n, o]), p = Z(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: l
  }), [n, l, c, t]), d = J(p), u = J(!0);
  Ie(() => (r.draggable.register(d.current), () => r.draggable.unregister(d.current)), [r.draggable]), Ie(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    const f = d.current;
    d.current = p, r.draggable.update(p, f);
  }, [p, r.draggable]);
}
var kr = me.createContext(null);
function Ca(e) {
  e && Ot(e) || (process.env.NODE_ENV !== "production" ? g(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : g());
}
function gm(e, t, n) {
  St(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? g(!1, "Draggable requires a draggableId") : g(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? g(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : g(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? g(!1, `${r(o)} requires an integer index prop`) : g(!1)), e.mapped.type !== "DRAGGING" && (Ca(n()), e.isEnabled && (ya(t, o) || (process.env.NODE_ENV !== "production" ? g(!1, `${r(o)} Unable to find drag handle`) : g(!1))));
  });
}
function vm(e) {
  Or(() => {
    const t = J(e);
    St(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Draggable isClone prop value changed during component life") : g(!1));
    }, [e]);
  });
}
function zt(e) {
  const t = Ut(e);
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find required context") : g()), t;
}
function hm(e) {
  e.preventDefault();
}
const bm = (e) => {
  const t = J(null), n = L((E = null) => {
    t.current = E;
  }, []), r = L(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = zt(Zt), {
    type: s,
    droppableId: c
  } = zt(kr), l = Z(() => ({
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
    isClone: b,
    mapped: x,
    dropAnimationFinished: w
  } = e;
  if (gm(e, o, r), vm(b), !b) {
    const E = Z(() => ({
      descriptor: l,
      registry: a,
      getDraggableRef: r,
      canDragInteractiveElements: v,
      shouldRespectForcePress: f,
      isEnabled: u
    }), [l, a, r, v, f, u]);
    mm(E);
  }
  const O = Z(() => u ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": d,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: hm
  } : null, [o, i, d, u]), N = L((E) => {
    x.type === "DRAGGING" && x.dropping && E.propertyName === "transform" && ni(w);
  }, [w, x]), y = Z(() => {
    const E = um(x), _ = x.type === "DRAGGING" && x.dropping ? N : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": d,
        style: E,
        onTransitionEnd: _
      },
      dragHandleProps: O
    };
  }, [o, O, d, x, N, n]), h = Z(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return me.createElement(me.Fragment, null, p(y, x.snapshot, h));
};
var Ia = (e, t) => e === t, ka = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const xm = (e) => e.combine ? e.combine.draggableId : null, ym = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function wm() {
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
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = Ce(o.impact), l = ym(o.impact), p = o.forceShouldAnimate;
      return n(e(a.x, a.y), o.movementMode, s, i.isClone, c, l, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], l = a.result, p = l.mode, d = ka(l), u = xm(l), v = {
        duration: o.dropDuration,
        curve: br.drop,
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
function _a(e = null) {
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
const Em = {
  mapped: {
    type: "SECONDARY",
    offset: we,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: _a(null)
  }
};
function Nm() {
  const e = ye((a, s) => ({
    x: a,
    y: s
  })), t = ye(_a), n = ye((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), r = (a) => a ? n(we, a, !0) : null, o = (a, s, c, l) => {
    const p = c.displaced.visible[a], d = !!(l.inVirtualList && l.effected[a]), u = Kt(c), f = u && u.draggableId === a ? s : null;
    if (!p) {
      if (!d)
        return r(f);
      if (c.displaced.invisible[a])
        return null;
      const x = nt(l.displacedBy.point), w = e(x.x, x.y);
      return n(w, f, !0);
    }
    if (d)
      return r(f);
    const v = c.displacedBy.point, b = e(v.x, v.y);
    return n(b, f, p.shouldAnimate);
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
const Dm = () => {
  const e = wm(), t = Nm();
  return (r, o) => e(r, o) || t(r, o) || Em;
}, Om = {
  dropAnimationFinished: sa
}, Sm = Pi(Dm, Om, null, {
  context: Nr,
  areStatePropsEqual: Ia
})(bm);
function Aa(e) {
  return zt(kr).isUsingCloneFor === e.draggableId && !e.isClone ? null : me.createElement(Sm, e);
}
function _r(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return me.createElement(Aa, Bt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const Ar = (e) => (t) => e === t, Cm = Ar("scroll"), Im = Ar("auto"), km = Ar("visible"), Io = (e, t) => t(e.overflowX) || t(e.overflowY), _m = (e, t) => t(e.overflowX) && t(e.overflowY), Pa = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Io(n, Cm) || Io(n, Im);
}, Am = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = bt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, g()), !Pa(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return _m(r, km) || process.env.NODE_ENV !== "production" && ue(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Pr = (e) => e == null ? null : e === document.body ? Am() ? e : null : e === document.documentElement ? null : Pa(e) ? e : Pr(e.parentElement);
var Pm = (e) => {
  !e || !Pr(e.parentElement) || process.env.NODE_ENV !== "production" && ue(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Hn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Ra = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Ra(e.parentElement) : !1;
var Rm = (e) => {
  const t = Pr(e), n = Ra(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, Tm = ({
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
    } = s, v = pa({
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
  })(), l = o === "vertical" ? pr : Wi, p = Je({
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
const $m = (e, t) => {
  const n = Ti(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, a = o + t.scrollWidth, c = sr({
    top: r,
    right: a,
    bottom: i,
    left: o
  }, n.border);
  return cr({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var Mm = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = n.closestScrollable, l = $m(e, c), p = Lt(l, r), d = (() => {
    if (!c)
      return null;
    const f = Ti(c), v = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: f,
      page: Lt(f, r),
      scroll: Hn(c),
      scrollSize: v,
      shouldClipSubject: s
    };
  })();
  return Tm({
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
const jm = {
  passive: !1
}, Lm = {
  passive: !0
};
var ko = (e) => e.shouldPublishImmediately ? jm : Lm;
const Pt = (e) => e && e.env.closestScrollable || null;
function Bm(e) {
  const t = J(null), n = zt(Zt), r = Dr("droppable"), {
    registry: o,
    marshal: i
  } = n, a = Sr(e), s = Z(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = J(s), l = Z(() => ye((y, h) => {
    t.current || (process.env.NODE_ENV !== "production" ? g(!1, "Can only update scroll when dragging") : g());
    const E = {
      x: y,
      y: h
    };
    i.updateDroppableScroll(s.id, E);
  }), [s.id, i]), p = L(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? we : Hn(y.env.closestScrollable);
  }, []), d = L(() => {
    const y = p();
    l(y.x, y.y);
  }, [p, l]), u = Z(() => pt(d), [d]), f = L(() => {
    const y = t.current, h = Pt(y);
    if (y && h || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find scroll options while scrolling") : g()), y.scrollOptions.shouldPublishImmediately) {
      d();
      return;
    }
    u();
  }, [u, d]), v = L((y, h) => {
    t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect a droppable while a drag is occurring") : g());
    const E = a.current, _ = E.getDroppableRef();
    _ || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect without a droppable ref") : g());
    const $ = Rm(_), K = {
      ref: _,
      descriptor: s,
      env: $,
      scrollOptions: h
    };
    t.current = K;
    const j = Mm({
      ref: _,
      descriptor: s,
      env: $,
      windowScroll: y,
      direction: E.direction,
      isDropDisabled: E.isDropDisabled,
      isCombineEnabled: E.isCombineEnabled,
      shouldClipSubject: !E.ignoreContainerClipping
    }), I = $.closestScrollable;
    return I && (I.setAttribute(Eo.contextId, n.contextId), I.addEventListener("scroll", f, ko(K.scrollOptions)), process.env.NODE_ENV !== "production" && Pm(I)), j;
  }, [n.contextId, s, f, a]), b = L(() => {
    const y = t.current, h = Pt(y);
    return y && h || (process.env.NODE_ENV !== "production" ? g(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : g()), Hn(h);
  }, []), x = L(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop drag when no active drag") : g());
    const h = Pt(y);
    t.current = null, h && (u.cancel(), h.removeAttribute(Eo.contextId), h.removeEventListener("scroll", f, ko(y.scrollOptions)));
  }, [f, u]), w = L((y) => {
    const h = t.current;
    h || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll when there is no drag") : g());
    const E = Pt(h);
    E || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll a droppable with no closest scrollable") : g()), E.scrollTop += y.y, E.scrollLeft += y.x;
  }, []), O = Z(() => ({
    getDimensionAndWatchScroll: v,
    getScrollWhileDragging: b,
    dragStopped: x,
    scroll: w
  }), [x, v, b, w]), N = Z(() => ({
    uniqueId: r,
    descriptor: s,
    callbacks: O
  }), [O, s, r]);
  Ie(() => (c.current = N.descriptor, o.droppable.register(N), () => {
    t.current && (process.env.NODE_ENV !== "production" && ue("Unsupported: changing the droppableId or type of a Droppable during a drag"), x()), o.droppable.unregister(N);
  }), [O, s, x, N, i, o.droppable]), Ie(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ie(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Dn() {
}
const _o = {
  width: 0,
  height: 0,
  margin: $d
}, Vm = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? _o : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Fm = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = Vm({
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
}, zm = (e) => {
  const t = J(null), n = L(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = be(e.animate === "open");
  xe(() => s ? r !== "open" ? (n(), c(!1), Dn) : t.current ? Dn : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : Dn, [r, s, n]);
  const l = L((d) => {
    d.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), p = Fm({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return me.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: l,
    ref: e.innerRef
  });
};
var Gm = me.memo(zm);
function On(e) {
  return typeof e == "boolean";
}
function Sn(e, t) {
  t.forEach((n) => n(e));
}
const Wm = [function({
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
  Ca(t());
}], qm = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && ue(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Um = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? g(!1, "Must provide a clone render function (renderClone) for virtual lists") : g());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? g(!1, "Expected virtual list to not have a placeholder") : g());
}];
function Hm(e) {
  St(() => {
    Sn(e, Wm), e.props.mode === "standard" && Sn(e, qm), e.props.mode === "virtual" && Sn(e, Um);
  });
}
class Ym extends me.PureComponent {
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
const Km = (e) => {
  const t = Ut(Zt);
  t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find app context") : g());
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = J(null), i = J(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: l,
    direction: p,
    ignoreContainerClipping: d,
    isDropDisabled: u,
    isCombineEnabled: f,
    snapshot: v,
    useClone: b,
    updateViewportMaxScroll: x,
    getContainerForClone: w
  } = e, O = L(() => o.current, []), N = L((M = null) => {
    o.current = M;
  }, []), y = L(() => i.current, []), h = L((M = null) => {
    i.current = M;
  }, []);
  Hm({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const E = L(() => {
    r() && x({
      maxScroll: fa()
    });
  }, [r, x]);
  Bm({
    droppableId: s,
    type: c,
    mode: l,
    direction: p,
    isDropDisabled: u,
    isCombineEnabled: f,
    ignoreContainerClipping: d,
    getDroppableRef: O
  });
  const _ = Z(() => me.createElement(Ym, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: M,
    data: B,
    animate: V
  }) => me.createElement(Gm, {
    placeholder: B,
    onClose: M,
    innerRef: h,
    animate: V,
    contextId: n,
    onTransitionEnd: E
  })), [n, E, e.placeholder, e.shouldAnimatePlaceholder, h]), $ = Z(() => ({
    innerRef: N,
    placeholder: _,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": n
    }
  }), [n, s, _, N]), K = b ? b.dragging.draggableId : null, j = Z(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: K
  }), [s, K, c]);
  function I() {
    if (!b)
      return null;
    const {
      dragging: M,
      render: B
    } = b, V = me.createElement(Aa, {
      draggableId: M.draggableId,
      index: M.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (X, le) => B(X, le, M));
    return ns.createPortal(V, w());
  }
  return me.createElement(kr.Provider, {
    value: j
  }, a($, v), I());
};
function Xm() {
  return document.body || (process.env.NODE_ENV !== "production" ? g(!1, "document.body is not ready") : g()), document.body;
}
const Ao = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Xm
}, Ta = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Ao)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Ao[n]
    });
  return t;
}, Cn = (e, t) => e === t.droppable.type, Po = (e, t) => t.draggables[e.draggable.id], Jm = () => {
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
    const s = Ta(a), c = s.droppableId, l = s.type, p = !s.isDropDisabled, d = s.renderClone;
    if (xt(i)) {
      const u = i.critical;
      if (!Cn(l, u))
        return t;
      const f = Po(u, i.dimensions), v = Ce(i.impact) === c;
      return r(c, p, v, v, f, d);
    }
    if (i.phase === "DROP_ANIMATING") {
      const u = i.completed;
      if (!Cn(l, u.critical))
        return t;
      const f = Po(u.critical, i.dimensions);
      return r(c, p, ka(u.result) === c, Ce(u.impact) === c, f, d);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const u = i.completed;
      if (!Cn(l, u.critical))
        return t;
      const f = Ce(u.impact) === c, v = !!(u.impact.at && u.impact.at.type === "COMBINE"), b = u.critical.droppable.id === c;
      return f ? v ? e : t : b ? e : t;
    }
    return t;
  };
}, Zm = {
  updateViewportMaxScroll: Hp
}, Rr = Pi(Jm, Zm, (e, t, n) => ({
  ...Ta(n),
  ...e,
  ...t
}), {
  context: Nr,
  areStatePropsEqual: Ia
})(Km);
function lv({
  items: e,
  onReorder: t,
  className: n,
  itemClassName: r,
  droppableId: o = "sortable-list"
}) {
  return /* @__PURE__ */ m(Ir, { onDragEnd: (a) => {
    if (!a.destination) return;
    const s = Array.from(e), [c] = s.splice(a.source.index, 1);
    s.splice(a.destination.index, 0, c), t(s);
  }, children: /* @__PURE__ */ m(Rr, { droppableId: o, children: (a) => /* @__PURE__ */ S(
    "ul",
    {
      ref: a.innerRef,
      ...a.droppableProps,
      className: D("space-y-2", n),
      children: [
        e.map((s, c) => /* @__PURE__ */ m(_r, { draggableId: s.id, index: c, children: (l, p) => /* @__PURE__ */ S(
          "li",
          {
            ref: l.innerRef,
            ...l.draggableProps,
            className: D(
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
                  className: D(
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
                  className: D(
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
                  className: D(
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
var Yn = { exports: {} }, Rt = { exports: {} }, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ro;
function Qm() {
  if (Ro) return oe;
  Ro = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function N(h) {
    if (typeof h == "object" && h !== null) {
      var E = h.$$typeof;
      switch (E) {
        case t:
          switch (h = h.type, h) {
            case c:
            case l:
            case r:
            case i:
            case o:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case p:
                case v:
                case f:
                case a:
                  return h;
                default:
                  return E;
              }
          }
        case n:
          return E;
      }
    }
  }
  function y(h) {
    return N(h) === l;
  }
  return oe.AsyncMode = c, oe.ConcurrentMode = l, oe.ContextConsumer = s, oe.ContextProvider = a, oe.Element = t, oe.ForwardRef = p, oe.Fragment = r, oe.Lazy = v, oe.Memo = f, oe.Portal = n, oe.Profiler = i, oe.StrictMode = o, oe.Suspense = d, oe.isAsyncMode = function(h) {
    return y(h) || N(h) === c;
  }, oe.isConcurrentMode = y, oe.isContextConsumer = function(h) {
    return N(h) === s;
  }, oe.isContextProvider = function(h) {
    return N(h) === a;
  }, oe.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, oe.isForwardRef = function(h) {
    return N(h) === p;
  }, oe.isFragment = function(h) {
    return N(h) === r;
  }, oe.isLazy = function(h) {
    return N(h) === v;
  }, oe.isMemo = function(h) {
    return N(h) === f;
  }, oe.isPortal = function(h) {
    return N(h) === n;
  }, oe.isProfiler = function(h) {
    return N(h) === i;
  }, oe.isStrictMode = function(h) {
    return N(h) === o;
  }, oe.isSuspense = function(h) {
    return N(h) === d;
  }, oe.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === l || h === i || h === o || h === d || h === u || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === f || h.$$typeof === a || h.$$typeof === s || h.$$typeof === p || h.$$typeof === x || h.$$typeof === w || h.$$typeof === O || h.$$typeof === b);
  }, oe.typeOf = N, oe;
}
var ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function eg() {
  return To || (To = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function N(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === r || k === l || k === i || k === o || k === d || k === u || typeof k == "object" && k !== null && (k.$$typeof === v || k.$$typeof === f || k.$$typeof === a || k.$$typeof === s || k.$$typeof === p || k.$$typeof === x || k.$$typeof === w || k.$$typeof === O || k.$$typeof === b);
    }
    function y(k) {
      if (typeof k == "object" && k !== null) {
        var ge = k.$$typeof;
        switch (ge) {
          case t:
            var Fe = k.type;
            switch (Fe) {
              case c:
              case l:
              case r:
              case i:
              case o:
              case d:
                return Fe;
              default:
                var ot = Fe && Fe.$$typeof;
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
    var h = c, E = l, _ = s, $ = a, K = t, j = p, I = r, M = v, B = f, V = n, X = i, le = o, de = d, ce = !1;
    function ne(k) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(k) || y(k) === c;
    }
    function C(k) {
      return y(k) === l;
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
    function z(k) {
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
    function A(k) {
      return y(k) === n;
    }
    function P(k) {
      return y(k) === i;
    }
    function F(k) {
      return y(k) === o;
    }
    function re(k) {
      return y(k) === d;
    }
    ie.AsyncMode = h, ie.ConcurrentMode = E, ie.ContextConsumer = _, ie.ContextProvider = $, ie.Element = K, ie.ForwardRef = j, ie.Fragment = I, ie.Lazy = M, ie.Memo = B, ie.Portal = V, ie.Profiler = X, ie.StrictMode = le, ie.Suspense = de, ie.isAsyncMode = ne, ie.isConcurrentMode = C, ie.isContextConsumer = R, ie.isContextProvider = q, ie.isElement = U, ie.isForwardRef = z, ie.isFragment = Y, ie.isLazy = H, ie.isMemo = W, ie.isPortal = A, ie.isProfiler = P, ie.isStrictMode = F, ie.isSuspense = re, ie.isValidElementType = N, ie.typeOf = y;
  }()), ie;
}
var $o;
function $a() {
  return $o || ($o = 1, process.env.NODE_ENV === "production" ? Rt.exports = Qm() : Rt.exports = eg()), Rt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var In, Mo;
function tg() {
  if (Mo) return In;
  Mo = 1;
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
  return In = o() ? Object.assign : function(i, a) {
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
  }, In;
}
var kn, jo;
function Tr() {
  if (jo) return kn;
  jo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kn = e, kn;
}
var _n, Lo;
function Ma() {
  return Lo || (Lo = 1, _n = Function.call.bind(Object.prototype.hasOwnProperty)), _n;
}
var An, Bo;
function ng() {
  if (Bo) return An;
  Bo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Tr(), n = {}, r = Ma();
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
  }, An = o, An;
}
var Pn, Vo;
function rg() {
  if (Vo) return Pn;
  Vo = 1;
  var e = $a(), t = tg(), n = Tr(), r = Ma(), o = ng(), i = function() {
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
    var l = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function d(C) {
      var R = C && (l && C[l] || C[p]);
      if (typeof R == "function")
        return R;
    }
    var u = "<<anonymous>>", f = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: O(),
      arrayOf: N,
      element: y(),
      elementType: h(),
      instanceOf: E,
      node: j(),
      objectOf: $,
      oneOf: _,
      oneOfType: K,
      shape: M,
      exact: B
    };
    function v(C, R) {
      return C === R ? C !== 0 || 1 / C === 1 / R : C !== C && R !== R;
    }
    function b(C, R) {
      this.message = C, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function x(C) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, q = 0;
      function U(Y, H, W, A, P, F, re) {
        if (A = A || u, F = F || W, re !== n) {
          if (c) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ge = A + ":" + W;
            !R[ge] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[ge] = !0, q++);
          }
        }
        return H[W] == null ? Y ? H[W] === null ? new b("The " + P + " `" + F + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new b("The " + P + " `" + F + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : C(H, W, A, P, F);
      }
      var z = U.bind(null, !1);
      return z.isRequired = U.bind(null, !0), z;
    }
    function w(C) {
      function R(q, U, z, Y, H, W) {
        var A = q[U], P = le(A);
        if (P !== C) {
          var F = de(A);
          return new b(
            "Invalid " + Y + " `" + H + "` of type " + ("`" + F + "` supplied to `" + z + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return x(R);
    }
    function O() {
      return x(a);
    }
    function N(C) {
      function R(q, U, z, Y, H) {
        if (typeof C != "function")
          return new b("Property `" + H + "` of component `" + z + "` has invalid PropType notation inside arrayOf.");
        var W = q[U];
        if (!Array.isArray(W)) {
          var A = le(W);
          return new b("Invalid " + Y + " `" + H + "` of type " + ("`" + A + "` supplied to `" + z + "`, expected an array."));
        }
        for (var P = 0; P < W.length; P++) {
          var F = C(W, P, z, Y, H + "[" + P + "]", n);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return x(R);
    }
    function y() {
      function C(R, q, U, z, Y) {
        var H = R[q];
        if (!s(H)) {
          var W = le(H);
          return new b("Invalid " + z + " `" + Y + "` of type " + ("`" + W + "` supplied to `" + U + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(C);
    }
    function h() {
      function C(R, q, U, z, Y) {
        var H = R[q];
        if (!e.isValidElementType(H)) {
          var W = le(H);
          return new b("Invalid " + z + " `" + Y + "` of type " + ("`" + W + "` supplied to `" + U + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(C);
    }
    function E(C) {
      function R(q, U, z, Y, H) {
        if (!(q[U] instanceof C)) {
          var W = C.name || u, A = ne(q[U]);
          return new b("Invalid " + Y + " `" + H + "` of type " + ("`" + A + "` supplied to `" + z + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return x(R);
    }
    function _(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function R(q, U, z, Y, H) {
        for (var W = q[U], A = 0; A < C.length; A++)
          if (v(W, C[A]))
            return null;
        var P = JSON.stringify(C, function(re, k) {
          var ge = de(k);
          return ge === "symbol" ? String(k) : k;
        });
        return new b("Invalid " + Y + " `" + H + "` of value `" + String(W) + "` " + ("supplied to `" + z + "`, expected one of " + P + "."));
      }
      return x(R);
    }
    function $(C) {
      function R(q, U, z, Y, H) {
        if (typeof C != "function")
          return new b("Property `" + H + "` of component `" + z + "` has invalid PropType notation inside objectOf.");
        var W = q[U], A = le(W);
        if (A !== "object")
          return new b("Invalid " + Y + " `" + H + "` of type " + ("`" + A + "` supplied to `" + z + "`, expected an object."));
        for (var P in W)
          if (r(W, P)) {
            var F = C(W, P, z, Y, H + "." + P, n);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return x(R);
    }
    function K(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var R = 0; R < C.length; R++) {
        var q = C[R];
        if (typeof q != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(q) + " at index " + R + "."
          ), a;
      }
      function U(z, Y, H, W, A) {
        for (var P = [], F = 0; F < C.length; F++) {
          var re = C[F], k = re(z, Y, H, W, A, n);
          if (k == null)
            return null;
          k.data && r(k.data, "expectedType") && P.push(k.data.expectedType);
        }
        var ge = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new b("Invalid " + W + " `" + A + "` supplied to " + ("`" + H + "`" + ge + "."));
      }
      return x(U);
    }
    function j() {
      function C(R, q, U, z, Y) {
        return V(R[q]) ? null : new b("Invalid " + z + " `" + Y + "` supplied to " + ("`" + U + "`, expected a ReactNode."));
      }
      return x(C);
    }
    function I(C, R, q, U, z) {
      return new b(
        (C || "React class") + ": " + R + " type `" + q + "." + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + z + "`."
      );
    }
    function M(C) {
      function R(q, U, z, Y, H) {
        var W = q[U], A = le(W);
        if (A !== "object")
          return new b("Invalid " + Y + " `" + H + "` of type `" + A + "` " + ("supplied to `" + z + "`, expected `object`."));
        for (var P in C) {
          var F = C[P];
          if (typeof F != "function")
            return I(z, Y, H, P, de(F));
          var re = F(W, P, z, Y, H + "." + P, n);
          if (re)
            return re;
        }
        return null;
      }
      return x(R);
    }
    function B(C) {
      function R(q, U, z, Y, H) {
        var W = q[U], A = le(W);
        if (A !== "object")
          return new b("Invalid " + Y + " `" + H + "` of type `" + A + "` " + ("supplied to `" + z + "`, expected `object`."));
        var P = t({}, q[U], C);
        for (var F in P) {
          var re = C[F];
          if (r(C, F) && typeof re != "function")
            return I(z, Y, H, F, de(re));
          if (!re)
            return new b(
              "Invalid " + Y + " `" + H + "` key `" + F + "` supplied to `" + z + "`.\nBad object: " + JSON.stringify(q[U], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var k = re(W, F, z, Y, H + "." + F, n);
          if (k)
            return k;
        }
        return null;
      }
      return x(R);
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
          var R = d(C);
          if (R) {
            var q = R.call(C), U;
            if (R !== C.entries) {
              for (; !(U = q.next()).done; )
                if (!V(U.value))
                  return !1;
            } else
              for (; !(U = q.next()).done; ) {
                var z = U.value;
                if (z && !V(z[1]))
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
    function le(C) {
      var R = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : X(R, C) ? "symbol" : R;
    }
    function de(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var R = le(C);
      if (R === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function ce(C) {
      var R = de(C);
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
    function ne(C) {
      return !C.constructor || !C.constructor.name ? u : C.constructor.name;
    }
    return f.checkPropTypes = o, f.resetWarningCache = o.resetWarningCache, f.PropTypes = f, f;
  }, Pn;
}
var Rn, Fo;
function og() {
  if (Fo) return Rn;
  Fo = 1;
  var e = Tr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Rn = function() {
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
  }, Rn;
}
if (process.env.NODE_ENV !== "production") {
  var ig = $a(), ag = !0;
  Yn.exports = rg()(ig.isElement, ag);
} else
  Yn.exports = og()();
var sg = Yn.exports;
const pe = /* @__PURE__ */ Dl(sg);
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
const cg = /* @__PURE__ */ new Map([
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
  const r = lg(e), { webkitRelativePath: o } = e, i = typeof t == "string" ? t : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && zo(r, "path", i), zo(r, "relativePath", i), r;
}
function lg(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), o = cg.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function zo(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const dg = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function pg(e) {
  return Ye(this, void 0, void 0, function* () {
    return Gt(e) && ug(e.dataTransfer) ? vg(e.dataTransfer, e.type) : fg(e) ? mg(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? gg(e) : [];
  });
}
function ug(e) {
  return Gt(e);
}
function fg(e) {
  return Gt(e) && Gt(e.target);
}
function Gt(e) {
  return typeof e == "object" && e !== null;
}
function mg(e) {
  return Kn(e.target.files).map((t) => et(t));
}
function gg(e) {
  return Ye(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => et(n));
  });
}
function vg(e, t) {
  return Ye(this, void 0, void 0, function* () {
    if (e.items) {
      const n = Kn(e.items).filter((o) => o.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(hg));
      return Go(ja(r));
    }
    return Go(Kn(e.files).map((n) => et(n)));
  });
}
function Go(e) {
  return e.filter((t) => dg.indexOf(t.name) === -1);
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
function hg(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Wo(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? La(t) : Wo(e, t);
}
function ja(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? ja(n) : [n]
  ], []);
}
function Wo(e, t) {
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
function bg(e) {
  return Ye(this, void 0, void 0, function* () {
    return e.isDirectory ? La(e) : xg(e);
  });
}
function La(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const o = [];
    function i() {
      t.readEntries((a) => Ye(this, void 0, void 0, function* () {
        if (a.length) {
          const s = Promise.all(a.map(bg));
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
function xg(e) {
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
var Tn = function(e, t) {
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
function qo(e) {
  return Eg(e) || wg(e) || Va(e) || yg();
}
function yg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wg(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Eg(e) {
  if (Array.isArray(e)) return Xn(e);
}
function Uo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ho(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uo(Object(n), !0).forEach(function(r) {
      Ba(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Uo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ba(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function yt(e, t) {
  return Og(e) || Dg(e, t) || Va(e, t) || Ng();
}
function Ng() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Va(e, t) {
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
function Dg(e, t) {
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
function Og(e) {
  if (Array.isArray(e)) return e;
}
var Sg = typeof Tn == "function" ? Tn : Tn.default, Cg = "file-invalid-type", Ig = "file-too-large", kg = "file-too-small", _g = "too-many-files", Ag = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: Cg,
    message: "File type must be ".concat(r)
  };
}, Yo = function(t) {
  return {
    code: Ig,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Ko = function(t) {
  return {
    code: kg,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Pg = {
  code: _g,
  message: "Too many files"
};
function Rg(e) {
  return e.type === "" && typeof e.getAsFile == "function";
}
function Fa(e, t) {
  var n = e.type === "application/x-moz-file" || Sg(e, t) || Rg(e);
  return [n, n ? null : Ag(t)];
}
function za(e, t, n) {
  if (qe(e.size))
    if (qe(t) && qe(n)) {
      if (e.size > n) return [!1, Yo(n)];
      if (e.size < t) return [!1, Ko(t)];
    } else {
      if (qe(t) && e.size < t) return [!1, Ko(t)];
      if (qe(n) && e.size > n) return [!1, Yo(n)];
    }
  return [!0, null];
}
function qe(e) {
  return e != null;
}
function Tg(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, i = e.multiple, a = e.maxFiles, s = e.validator;
  return !i && t.length > 1 || i && a >= 1 && t.length > a ? !1 : t.every(function(c) {
    var l = Fa(c, n), p = yt(l, 1), d = p[0], u = za(c, r, o), f = yt(u, 1), v = f[0], b = s ? s(c) : null;
    return d && v && !b;
  });
}
function Wt(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function ct(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Xo(e) {
  e.preventDefault();
}
function $g(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Mg(e) {
  return e.indexOf("Edge/") !== -1;
}
function jg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return $g(e) || Mg(e);
}
function Te() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return t.some(function(s) {
      return !Wt(r) && s && s.apply(void 0, [r].concat(i)), Wt(r);
    });
  };
}
function Lg() {
  return "showOpenFilePicker" in window;
}
function Bg(e) {
  if (qe(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = yt(n, 2), o = r[0], i = r[1], a = !0;
      return Ga(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(Wa)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(n, r) {
      var o = yt(r, 2), i = o[0], a = o[1];
      return Ho(Ho({}, n), {}, Ba({}, i, a));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function Vg(e) {
  if (qe(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = yt(n, 2), o = r[0], i = r[1];
      return [].concat(qo(t), [o], qo(i));
    }, []).filter(function(t) {
      return Ga(t) || Wa(t);
    }).join(",");
}
function Fg(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function zg(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Ga(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Wa(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Gg = ["children"], Wg = ["open"], qg = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Ug = ["refKey", "onChange", "onClick"];
function Jo(e) {
  return Kg(e) || Yg(e) || qa(e) || Hg();
}
function Hg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yg(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Kg(e) {
  if (Array.isArray(e)) return Jn(e);
}
function $n(e, t) {
  return Zg(e) || Jg(e, t) || qa(e, t) || Xg();
}
function Xg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qa(e, t) {
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
function Jg(e, t) {
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
function Zg(e) {
  if (Array.isArray(e)) return e;
}
function Zo(e, t) {
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
    t % 2 ? Zo(Object(n), !0).forEach(function(r) {
      Zn(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Zn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function qt(e, t) {
  if (e == null) return {};
  var n = Qg(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Qg(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var $r = /* @__PURE__ */ se(function(e, t) {
  var n = e.children, r = qt(e, Gg), o = Ha(r), i = o.open, a = qt(o, Wg);
  return es(t, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ me.createElement(ts, null, n(fe(fe({}, a), {}, {
    open: i
  })));
});
$r.displayName = "Dropzone";
var Ua = {
  disabled: !1,
  getFilesFromEvent: pg,
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
$r.defaultProps = Ua;
$r.propTypes = {
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
  children: pe.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: pe.objectOf(pe.arrayOf(pe.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: pe.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: pe.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: pe.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: pe.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: pe.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: pe.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: pe.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: pe.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: pe.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: pe.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: pe.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: pe.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: pe.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: pe.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: pe.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: pe.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: pe.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: pe.func,
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
  onDrop: pe.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: pe.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: pe.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: pe.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: pe.func
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
function Ha() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = fe(fe({}, Ua), e), n = t.accept, r = t.disabled, o = t.getFilesFromEvent, i = t.maxSize, a = t.minSize, s = t.multiple, c = t.maxFiles, l = t.onDragEnter, p = t.onDragLeave, d = t.onDragOver, u = t.onDrop, f = t.onDropAccepted, v = t.onDropRejected, b = t.onFileDialogCancel, x = t.onFileDialogOpen, w = t.useFsAccessApi, O = t.autoFocus, N = t.preventDropOnDocument, y = t.noClick, h = t.noKeyboard, E = t.noDrag, _ = t.noDragEventsBubbling, $ = t.onError, K = t.validator, j = Ge(function() {
    return Vg(n);
  }, [n]), I = Ge(function() {
    return Bg(n);
  }, [n]), M = Ge(function() {
    return typeof x == "function" ? x : Qo;
  }, [x]), B = Ge(function() {
    return typeof b == "function" ? b : Qo;
  }, [b]), V = J(null), X = J(null), le = Qa(ev, Qn), de = $n(le, 2), ce = de[0], ne = de[1], C = ce.isFocused, R = ce.isFileDialogActive, q = J(typeof window < "u" && window.isSecureContext && w && Lg()), U = function() {
    !q.current && R && setTimeout(function() {
      if (X.current) {
        var G = X.current.files;
        G.length || (ne({
          type: "closeDialog"
        }), B());
      }
    }, 300);
  };
  xe(function() {
    return window.addEventListener("focus", U, !1), function() {
      window.removeEventListener("focus", U, !1);
    };
  }, [X, R, B, q]);
  var z = J([]), Y = J([]), H = function(G) {
    V.current && V.current.contains(G.target) || (G.preventDefault(), z.current = []);
  };
  xe(function() {
    return N && (document.addEventListener("dragover", Xo, !1), document.addEventListener("drop", H, !1)), function() {
      N && (document.removeEventListener("dragover", Xo), document.removeEventListener("drop", H));
    };
  }, [V, N]), xe(function() {
    var T = function(Re) {
      Y.current = [].concat(Jo(Y.current), [Re.target]), ct(Re) && ne({
        isDragGlobal: !0,
        type: "setDragGlobal"
      });
    }, G = function(Re) {
      Y.current = Y.current.filter(function($e) {
        return $e !== Re.target && $e !== null;
      }), !(Y.current.length > 0) && ne({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, ve = function() {
      Y.current = [], ne({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, he = function() {
      Y.current = [], ne({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    };
    return document.addEventListener("dragenter", T, !1), document.addEventListener("dragleave", G, !1), document.addEventListener("dragend", ve, !1), document.addEventListener("drop", he, !1), function() {
      document.removeEventListener("dragenter", T), document.removeEventListener("dragleave", G), document.removeEventListener("dragend", ve), document.removeEventListener("drop", he);
    };
  }, [V]), xe(function() {
    return !r && O && V.current && V.current.focus(), function() {
    };
  }, [V, O, r]);
  var W = ee(function(T) {
    $ ? $(T) : console.error(T);
  }, [$]), A = ee(function(T) {
    T.preventDefault(), T.persist(), It(T), z.current = [].concat(Jo(z.current), [T.target]), ct(T) && Promise.resolve(o(T)).then(function(G) {
      if (!(Wt(T) && !_)) {
        var ve = G.length, he = ve > 0 && Tg({
          files: G,
          accept: j,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: c,
          validator: K
        }), Ee = ve > 0 && !he;
        ne({
          isDragAccept: he,
          isDragReject: Ee,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), l && l(T);
      }
    }).catch(function(G) {
      return W(G);
    });
  }, [o, l, W, _, j, a, i, s, c, K]), P = ee(function(T) {
    T.preventDefault(), T.persist(), It(T);
    var G = ct(T);
    if (G && T.dataTransfer)
      try {
        T.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return G && d && d(T), !1;
  }, [d, _]), F = ee(function(T) {
    T.preventDefault(), T.persist(), It(T);
    var G = z.current.filter(function(he) {
      return V.current && V.current.contains(he);
    }), ve = G.indexOf(T.target);
    ve !== -1 && G.splice(ve, 1), z.current = G, !(G.length > 0) && (ne({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), ct(T) && p && p(T));
  }, [V, p, _]), re = ee(function(T, G) {
    var ve = [], he = [];
    T.forEach(function(Ee) {
      var Re = Fa(Ee, j), $e = $n(Re, 2), tn = $e[0], nn = $e[1], rn = za(Ee, a, i), kt = $n(rn, 2), on = kt[0], an = kt[1], sn = K ? K(Ee) : null;
      if (tn && on && !sn)
        ve.push(Ee);
      else {
        var cn = [nn, an];
        sn && (cn = cn.concat(sn)), he.push({
          file: Ee,
          errors: cn.filter(function(Ja) {
            return Ja;
          })
        });
      }
    }), (!s && ve.length > 1 || s && c >= 1 && ve.length > c) && (ve.forEach(function(Ee) {
      he.push({
        file: Ee,
        errors: [Pg]
      });
    }), ve.splice(0)), ne({
      acceptedFiles: ve,
      fileRejections: he,
      isDragReject: he.length > 0,
      type: "setFiles"
    }), u && u(ve, he, G), he.length > 0 && v && v(he, G), ve.length > 0 && f && f(ve, G);
  }, [ne, s, j, a, i, c, u, f, v, K]), k = ee(function(T) {
    T.preventDefault(), T.persist(), It(T), z.current = [], ct(T) && Promise.resolve(o(T)).then(function(G) {
      Wt(T) && !_ || re(G, T);
    }).catch(function(G) {
      return W(G);
    }), ne({
      type: "reset"
    });
  }, [o, re, W, _]), ge = ee(function() {
    if (q.current) {
      ne({
        type: "openDialog"
      }), M();
      var T = {
        multiple: s,
        types: I
      };
      window.showOpenFilePicker(T).then(function(G) {
        return o(G);
      }).then(function(G) {
        re(G, null), ne({
          type: "closeDialog"
        });
      }).catch(function(G) {
        Fg(G) ? (B(G), ne({
          type: "closeDialog"
        })) : zg(G) ? (q.current = !1, X.current ? (X.current.value = null, X.current.click()) : W(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : W(G);
      });
      return;
    }
    X.current && (ne({
      type: "openDialog"
    }), M(), X.current.value = null, X.current.click());
  }, [ne, M, B, w, re, W, I, s]), Fe = ee(function(T) {
    !V.current || !V.current.isEqualNode(T.target) || (T.key === " " || T.key === "Enter" || T.keyCode === 32 || T.keyCode === 13) && (T.preventDefault(), ge());
  }, [V, ge]), ot = ee(function() {
    ne({
      type: "focus"
    });
  }, []), Mr = ee(function() {
    ne({
      type: "blur"
    });
  }, []), jr = ee(function() {
    y || (jg() ? setTimeout(ge, 0) : ge());
  }, [y, ge]), Ke = function(G) {
    return r ? null : G;
  }, en = function(G) {
    return h ? null : Ke(G);
  }, Ct = function(G) {
    return E ? null : Ke(G);
  }, It = function(G) {
    _ && G.stopPropagation();
  }, Ya = Ge(function() {
    return function() {
      var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, G = T.refKey, ve = G === void 0 ? "ref" : G, he = T.role, Ee = T.onKeyDown, Re = T.onFocus, $e = T.onBlur, tn = T.onClick, nn = T.onDragEnter, rn = T.onDragOver, kt = T.onDragLeave, on = T.onDrop, an = qt(T, qg);
      return fe(fe(Zn({
        onKeyDown: en(Te(Ee, Fe)),
        onFocus: en(Te(Re, ot)),
        onBlur: en(Te($e, Mr)),
        onClick: Ke(Te(tn, jr)),
        onDragEnter: Ct(Te(nn, A)),
        onDragOver: Ct(Te(rn, P)),
        onDragLeave: Ct(Te(kt, F)),
        onDrop: Ct(Te(on, k)),
        role: typeof he == "string" && he !== "" ? he : "presentation"
      }, ve, V), !r && !h ? {
        tabIndex: 0
      } : {}), an);
    };
  }, [V, Fe, ot, Mr, jr, A, P, F, k, h, E, r]), Ka = ee(function(T) {
    T.stopPropagation();
  }, []), Xa = Ge(function() {
    return function() {
      var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, G = T.refKey, ve = G === void 0 ? "ref" : G, he = T.onChange, Ee = T.onClick, Re = qt(T, Ug), $e = Zn({
        accept: j,
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
        onChange: Ke(Te(he, k)),
        onClick: Ke(Te(Ee, Ka)),
        tabIndex: -1
      }, ve, X);
      return fe(fe({}, $e), Re);
    };
  }, [X, n, s, k, r]);
  return fe(fe({}, ce), {}, {
    isFocused: C && !r,
    getRootProps: Ya,
    getInputProps: Xa,
    rootRef: V,
    inputRef: X,
    open: Ke(ge)
  });
}
function ev(e, t) {
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
      return fe(fe({}, Qn), {}, {
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
      return fe({}, Qn);
    default:
      return e;
  }
}
function Qo() {
}
const tv = (e) => e.startsWith("image/") ? Vs : e.startsWith("video/") ? sc : e.startsWith("audio/") ? Zs : e.includes("pdf") || e.includes("document") ? Rs : $s, ei = (e) => {
  if (e === 0) return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB", "GB"], r = Math.floor(Math.log(e) / Math.log(t));
  return parseFloat((e / Math.pow(t, r)).toFixed(2)) + " " + n[r];
};
function dv({
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
  const [l, p] = be([]), [d, u] = be([]), f = ee(
    (N, y) => {
      if (N.length > 0) {
        const h = i ? [...l, ...N] : N;
        if (p(h), e(h), c) {
          const E = N.filter((_) => _.type.startsWith("image/")).map((_) => ({
            file: _,
            url: URL.createObjectURL(_)
          }));
          u((_) => i ? [..._, ...E] : E);
        }
      }
      y.length > 0 && t && t(y);
    },
    [l, i, e, t, c]
  ), v = (N) => {
    const y = l.filter((E) => E !== N);
    p(y), e(y);
    const h = d.find((E) => E.file === N);
    h && (URL.revokeObjectURL(h.url), u((E) => E.filter((_) => _.file !== N)));
  }, { getRootProps: b, getInputProps: x, isDragActive: w, isDragReject: O } = Ha({
    onDrop: f,
    accept: n,
    maxFiles: r,
    maxSize: o,
    multiple: i,
    disabled: a
  });
  return /* @__PURE__ */ S("div", { className: D("space-y-4", s), children: [
    /* @__PURE__ */ S(
      "div",
      {
        ...b(),
        className: D(
          "flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl cursor-pointer",
          "transition-all duration-200 ease-out",
          "bg-gradient-to-b from-neutral-50 to-white",
          "border-primary/60 hover:border-primary",
          w && !O && "border-primary bg-gradient-to-b from-primary/5 to-accent/5 scale-[1.01]",
          O && "border-red-400 bg-red-50",
          a && "opacity-50 cursor-not-allowed"
        ),
        children: [
          /* @__PURE__ */ m("input", { ...x() }),
          /* @__PURE__ */ m(
            "div",
            {
              className: D(
                "w-16 h-16 mb-4 rounded-2xl flex items-center justify-center",
                "bg-gradient-to-br from-primary/10 to-accent/10",
                "transition-transform duration-200",
                w && "scale-110"
              ),
              children: /* @__PURE__ */ m(
                ic,
                {
                  className: D(
                    "w-8 h-8 text-primary",
                    w && "animate-bounce"
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ m("p", { className: "text-lg font-medium text-neutral-700 mb-1", children: w ? O ? "Archivo no permitido" : "Suelta los archivos aquí" : "Arrastra archivos aquí" }),
          /* @__PURE__ */ m("p", { className: "text-sm text-neutral-500 mb-3", children: "o haz clic para seleccionar" }),
          /* @__PURE__ */ S("p", { className: "text-xs text-neutral-400", children: [
            "PNG, JPG hasta ",
            ei(o)
          ] })
        ]
      }
    ),
    l.length > 0 && /* @__PURE__ */ S("div", { className: "space-y-2", children: [
      /* @__PURE__ */ S("p", { className: "text-sm font-medium text-neutral-700", children: [
        "Archivos seleccionados (",
        l.length,
        ")"
      ] }),
      /* @__PURE__ */ m("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: l.map((N, y) => {
        const h = tv(N.type), E = d.find((_) => _.file === N);
        return /* @__PURE__ */ S(
          "div",
          {
            className: D(
              "group flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-xl",
              "transition-all duration-200",
              "hover:shadow-md hover:border-primary/30"
            ),
            children: [
              E ? /* @__PURE__ */ m("div", { className: "w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100", children: /* @__PURE__ */ m(
                "img",
                {
                  src: E.url,
                  alt: N.name,
                  className: "w-full h-full object-cover"
                }
              ) }) : /* @__PURE__ */ m(
                "div",
                {
                  className: D(
                    "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
                    "bg-gradient-to-br from-primary/10 to-accent/10"
                  ),
                  children: /* @__PURE__ */ m(h, { className: "w-6 h-6 text-primary" })
                }
              ),
              /* @__PURE__ */ S("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ m("p", { className: "text-sm font-medium text-neutral-800 truncate", children: N.name }),
                /* @__PURE__ */ m("p", { className: "text-xs text-neutral-500", children: ei(N.size) })
              ] }),
              /* @__PURE__ */ m(
                "button",
                {
                  type: "button",
                  onClick: (_) => {
                    _.stopPropagation(), v(N);
                  },
                  className: D(
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
const nv = {
  default: "bg-neutral-100 text-neutral-700",
  primary: "bg-primary/10 text-primary",
  success: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700"
};
function pv({ columns: e, onCardMove: t, className: n }) {
  return /* @__PURE__ */ m(Ir, { onDragEnd: (o) => {
    const { source: i, destination: a, draggableId: s } = o;
    a && (i.droppableId === a.droppableId && i.index === a.index || t(
      s,
      i.droppableId,
      a.droppableId,
      i.index,
      a.index
    ));
  }, children: /* @__PURE__ */ m("div", { className: D("flex gap-4 overflow-x-auto pb-4", n), children: e.map((o) => /* @__PURE__ */ S(
    "div",
    {
      className: "flex-shrink-0 w-72 bg-neutral-50 rounded-xl border border-neutral-200",
      children: [
        /* @__PURE__ */ m(
          "div",
          {
            className: D(
              "px-4 py-3 border-b border-neutral-200 rounded-t-xl",
              "bg-gradient-to-r from-neutral-100 to-neutral-50"
            ),
            children: /* @__PURE__ */ S("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ m("h3", { className: "font-semibold text-neutral-800", children: o.title }),
              /* @__PURE__ */ m(
                "span",
                {
                  className: D(
                    "px-2 py-0.5 text-xs font-medium rounded-full",
                    "bg-primary/10 text-primary"
                  ),
                  children: o.cards.length
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ m(Rr, { droppableId: o.id, children: (i, a) => /* @__PURE__ */ S(
          "div",
          {
            ref: i.innerRef,
            ...i.droppableProps,
            className: D(
              "p-3 min-h-[200px] space-y-3 transition-colors duration-200",
              a.isDraggingOver && "bg-primary/5"
            ),
            children: [
              o.cards.map((s, c) => /* @__PURE__ */ m(_r, { draggableId: s.id, index: c, children: (l, p) => /* @__PURE__ */ S(
                "div",
                {
                  ref: l.innerRef,
                  ...l.draggableProps,
                  className: D(
                    "group bg-white rounded-lg border border-neutral-200 overflow-hidden",
                    "transition-all duration-200",
                    "hover:shadow-md hover:border-primary/30",
                    p.isDragging && "shadow-xl ring-2 ring-primary/30 rotate-2"
                  ),
                  style: {
                    ...l.draggableProps.style
                  },
                  children: [
                    /* @__PURE__ */ S(
                      "div",
                      {
                        ...l.dragHandleProps,
                        className: D(
                          "flex items-center gap-2 px-3 py-2 border-b border-neutral-100",
                          "cursor-grab active:cursor-grabbing",
                          "bg-gradient-to-r from-neutral-50 to-white"
                        ),
                        children: [
                          /* @__PURE__ */ m(
                            Xe,
                            {
                              className: D(
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
                    /* @__PURE__ */ S("div", { className: "p-3", children: [
                      s.description && /* @__PURE__ */ m("p", { className: "text-sm text-neutral-600 mb-2 line-clamp-2", children: s.description }),
                      s.tags && s.tags.length > 0 && /* @__PURE__ */ m("div", { className: "flex flex-wrap gap-1", children: s.tags.map((d, u) => /* @__PURE__ */ m(
                        "span",
                        {
                          className: D(
                            "px-2 py-0.5 text-xs font-medium rounded-full",
                            nv[d.variant || "default"]
                          ),
                          children: d.label
                        },
                        u
                      )) })
                    ] }),
                    /* @__PURE__ */ m(
                      "div",
                      {
                        className: D(
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
function uv({
  items: e,
  onReorder: t,
  className: n,
  cardClassName: r,
  droppableId: o = "draggable-cards",
  direction: i = "vertical"
}) {
  return /* @__PURE__ */ m(Ir, { onDragEnd: (s) => {
    if (!s.destination) return;
    const c = Array.from(e), [l] = c.splice(s.source.index, 1);
    c.splice(s.destination.index, 0, l), t(c);
  }, children: /* @__PURE__ */ m(Rr, { droppableId: o, direction: i, children: (s) => /* @__PURE__ */ S(
    "div",
    {
      ref: s.innerRef,
      ...s.droppableProps,
      className: D(
        i === "horizontal" ? "flex gap-4" : "space-y-4",
        n
      ),
      children: [
        e.map((c, l) => /* @__PURE__ */ m(_r, { draggableId: c.id, index: l, children: (p, d) => /* @__PURE__ */ S(
          "div",
          {
            ref: p.innerRef,
            ...p.draggableProps,
            className: D(
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
              c.title ? /* @__PURE__ */ S(
                "div",
                {
                  ...p.dragHandleProps,
                  className: D(
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
                /* @__PURE__ */ S(
                  "div",
                  {
                    ...p.dragHandleProps,
                    className: D(
                      "flex items-center gap-3 px-4 pt-4 pb-2",
                      "cursor-grab active:cursor-grabbing"
                    ),
                    children: [
                      /* @__PURE__ */ m(
                        Xe,
                        {
                          className: D(
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
              /* @__PURE__ */ m("div", { className: D(c.title ? "p-4" : "px-4 pb-4"), children: c.children }),
              !c.title && /* @__PURE__ */ m(
                "div",
                {
                  className: D(
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
function fv({
  title: e,
  children: t,
  className: n,
  isDragging: r = !1,
  dragHandleProps: o
}) {
  return /* @__PURE__ */ S(
    "div",
    {
      className: D(
        "group relative bg-white border border-neutral-200 rounded-xl overflow-hidden",
        "transition-all duration-200 ease-out",
        "hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5",
        r && "shadow-2xl ring-2 ring-primary/30 scale-[1.02] rotate-1",
        n
      ),
      children: [
        e ? /* @__PURE__ */ S(
          "div",
          {
            ...o,
            className: D(
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
          /* @__PURE__ */ S(
            "div",
            {
              ...o,
              className: D(
                "flex items-center gap-3 px-4 pt-4 pb-2",
                "cursor-grab active:cursor-grabbing"
              ),
              children: [
                /* @__PURE__ */ m(
                  Xe,
                  {
                    className: D(
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
        /* @__PURE__ */ m("div", { className: D(e ? "p-4" : "px-4 pb-4"), children: t }),
        !e && /* @__PURE__ */ m(
          "div",
          {
            className: D(
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
  Xc as Alert,
  di as Avatar,
  qc as Badge,
  Zc as Breadcrumb,
  $t as Button,
  jc as Card,
  Bc as CardBody,
  Fc as CardFooter,
  Lc as CardHeader,
  Tc as Checkbox,
  dl as ConfirmModal,
  uv as DraggableCard,
  dv as FileDropzone,
  fi as Header,
  jn as Input,
  pv as KanbanBoard,
  Jc as Layout,
  _c as ListMenu,
  gl as LoginPage,
  gi as Modal,
  Oc as MultiSelect,
  cl as Pagination,
  $c as Radio,
  bc as Select,
  Qc as SidePanel,
  ui as Sidebar,
  fv as SingleDraggableCard,
  lv as SortableList,
  ol as TabPanel,
  av as Table,
  rl as Tabs,
  Ac as Textarea,
  vi as Toast,
  ml as ToastContainer,
  sv as ToastProvider,
  D as cn,
  cv as useToast
};
//# sourceMappingURL=index.js.map
