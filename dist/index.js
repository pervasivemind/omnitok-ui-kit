import { jsxs as C, jsx as m, Fragment as Be } from "react/jsx-runtime";
import * as ee from "react";
import fe, { forwardRef as le, createElement as Mn, useState as be, useRef as J, useCallback as te, useMemo as Ge, useEffect as xe, useContext as Ut, createContext as ni, useLayoutEffect as Qa, useReducer as es, useImperativeHandle as ts, Fragment as ns } from "react";
import rs, { flushSync as ri } from "react-dom";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oi = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = (e) => {
  const t = is(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var as = {
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
const ss = (e) => {
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
const cs = le(
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
      ...as,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: oi("lucide", o),
      ...!i && !ss(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([d, u]) => Mn(d, u)),
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
const re = (e, t) => {
  const n = le(
    ({ className: r, ...o }, i) => Mn(cs, {
      ref: i,
      iconNode: t,
      className: oi(
        `lucide-${os(Br(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Br(e), n;
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], ds = re("arrow-down", ls);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], us = re("arrow-up-down", ps);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], ms = re("arrow-up", fs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], vs = re("bell", gs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], bs = re("check", hs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], tr = re("chevron-down", xs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], ws = re("chevron-left", ys);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], nr = re("chevron-right", Es);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], Ds = re("chevrons-left", Ns);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], Ss = re("chevrons-right", Os);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], ii = re("circle-alert", Cs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], ai = re("circle-check-big", Is);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
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
], _s = re("eye-off", ks);
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
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Ps = re("eye", As);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
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
], Ts = re("file-text", Rs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], Ms = re("file", $s);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Xe = re("grip-vertical", js);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Bs = re("house", Ls);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Fs = re("image", Vs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], si = re("info", zs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Ws = re("loader-circle", Gs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Us = re("lock", qs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], Ys = re("mail", Hs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], ci = re("menu", Ks);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [["path", { d: "M5 12h14", key: "1ays0h" }]], Js = re("minus", Xs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], Qs = re("music", Zs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
], tc = re("panel-left-close", ec);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], rc = re("search", nc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], li = re("triangle-alert", oc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], ac = re("upload", ic);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], cc = re("video", sc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], tt = re("x", lc);
function di(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = di(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function dc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = di(e)) && (r && (r += " "), r += t);
  return r;
}
function D(...e) {
  return dc(e);
}
const pc = {
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
}, Vr = {
  primary: "bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 focus:ring-primary",
  accent: "bg-transparent text-accent hover:bg-accent/10 active:bg-accent/20 focus:ring-accent",
  neutral: "bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 focus:ring-neutral-300",
  accept: "bg-transparent text-success hover:bg-success/10 active:bg-success/20 focus:ring-success",
  danger: "bg-transparent text-error hover:bg-error/10 active:bg-error/20 focus:ring-error",
  info: "bg-transparent text-info hover:bg-info/10 active:bg-info/20 focus:ring-info",
  violet: "bg-transparent text-violet hover:bg-violet/10 active:bg-violet/20 focus:ring-violet",
  rose: "bg-transparent text-rose hover:bg-rose/10 active:bg-rose/20 focus:ring-rose",
  teal: "bg-transparent text-teal hover:bg-teal/10 active:bg-teal/20 focus:ring-teal"
}, uc = {
  xs: "px-2 py-0.5 text-xs gap-1",
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-4 py-2 text-base gap-2",
  lg: "px-6 py-3 text-lg gap-2.5"
}, fc = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20
}, $t = le(
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
    ...u
  }, l) => {
    const p = s || n;
    return /* @__PURE__ */ C(
      "button",
      {
        ref: l,
        disabled: p,
        className: D(
          // Base styles
          "inline-flex items-center justify-center font-medium rounded-md",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          // Variant styles
          r && Vr[e] ? Vr[e] : pc[e],
          // Size styles
          uc[t],
          // Full width
          a && "w-full",
          // Disabled state
          p && "opacity-50 cursor-not-allowed",
          c
        ),
        ...u,
        children: [
          n ? /* @__PURE__ */ m(Ws, { className: "animate-spin", size: fc[t] }) : o,
          d,
          !n && i
        ]
      }
    );
  }
);
$t.displayName = "Button";
const mc = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-4 py-3 text-lg"
}, gc = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, vc = {
  sm: "pr-8",
  md: "pr-10",
  lg: "pr-12"
}, jn = le(
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
    ...u
  }, l) => {
    const p = d || `input-${Math.random().toString(36).slice(2, 9)}`, f = !!r;
    return /* @__PURE__ */ C("div", { className: D("flex flex-col gap-1.5", a && "w-full"), children: [
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
            ref: l,
            id: p,
            disabled: s,
            className: D(
              // Base styles
              "w-full rounded-md border bg-white",
              "transition-colors duration-200",
              "placeholder:text-neutral-400",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              mc[e],
              // Icon padding
              o && gc[e],
              i && vc[e],
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
jn.displayName = "Input";
const hc = {
  sm: "px-3 py-1.5 text-sm pr-8",
  md: "px-4 py-2 text-base pr-10",
  lg: "px-4 py-3 text-lg pr-12"
}, bc = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, xc = le(
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
    id: u,
    ...l
  }, p) => {
    const f = u || `select-${Math.random().toString(36).slice(2, 9)}`, v = !!r;
    return /* @__PURE__ */ C("div", { className: D("flex flex-col gap-1.5", a && "w-full"), children: [
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
            className: D(
              // Base styles
              "w-full rounded-md border bg-white appearance-none cursor-pointer",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              hc[e],
              // Icon padding
              c && bc[e],
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
          tr,
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
xc.displayName = "Select";
const yc = {
  sm: "min-h-[34px] px-3 py-1 text-sm",
  md: "min-h-[42px] px-4 py-1.5 text-base",
  lg: "min-h-[50px] px-4 py-2 text-lg"
}, wc = {
  sm: "px-1.5 py-0.5 text-xs gap-0.5",
  md: "px-2 py-0.5 text-sm gap-1",
  lg: "px-2.5 py-1 text-sm gap-1"
}, Ec = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, Nc = {
  sm: 12,
  md: 14,
  lg: 14
}, Dc = {
  sm: 14,
  md: 16,
  lg: 20
}, Oc = {
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
}, Sc = le(
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
    disabled: u = !1,
    maxItems: l,
    searchable: p = !0,
    leftIcon: f,
    tagColor: v = "primary",
    className: h,
    id: x
  }, E) => {
    const O = x || `multiselect-${Math.random().toString(36).slice(2, 9)}`, N = !!s, w = t !== void 0, [b, y] = be(n), _ = w ? t : b, [M, Y] = be(""), [j, X] = be(!1), [S, V] = be(-1), $ = J(null), K = J(null), ne = J(null), me = te(
      (A) => {
        w || y(A), r == null || r(A);
      },
      [w, r]
    ), oe = Ge(() => e.filter((A) => {
      const P = _.includes(A.value), B = !M || A.label.toLowerCase().includes(M.toLowerCase());
      return !P && B;
    }), [e, _, M]), Q = l === void 0 || _.length < l, I = te(
      (A) => {
        var ie;
        if (!Q || u) return;
        const P = e.find((k) => k.value === A);
        if (P != null && P.disabled) return;
        const B = [..._, A];
        me(B), Y(""), V(-1), (ie = K.current) == null || ie.focus();
      },
      [Q, u, e, _, me]
    ), R = te(
      (A, P) => {
        var ie;
        if (P == null || P.stopPropagation(), u) return;
        const B = _.filter((k) => k !== A);
        me(B), (ie = K.current) == null || ie.focus();
      },
      [u, _, me]
    ), W = te(
      (A, P) => {
        const B = oe.length;
        if (B === 0) return -1;
        for (let ie = 0; ie < B; ie++) {
          const k = (A + P * (ie + 1) + B) % B;
          if (!oe[k].disabled) return k;
        }
        return -1;
      },
      [oe]
    ), q = te(() => oe.findIndex((A) => !A.disabled), [oe]), F = te(
      (A) => {
        if (!u)
          switch (A.key) {
            case "ArrowDown": {
              A.preventDefault(), j ? V((P) => W(P, 1)) : (X(!0), V(q()));
              break;
            }
            case "ArrowUp": {
              A.preventDefault(), j && V((P) => W(P, -1));
              break;
            }
            case "Enter": {
              if (A.preventDefault(), j && S >= 0 && S < oe.length) {
                const P = oe[S];
                P.disabled || I(P.value);
              } else j || X(!0);
              break;
            }
            case "Backspace": {
              if (M === "" && _.length > 0) {
                const P = _[_.length - 1];
                R(P);
              }
              break;
            }
            case "Escape": {
              A.preventDefault(), X(!1), V(-1);
              break;
            }
          }
      },
      [
        u,
        j,
        S,
        I,
        M,
        _,
        R,
        W,
        q
      ]
    );
    xe(() => {
      const A = (P) => {
        $.current && !$.current.contains(P.target) && (X(!1), V(-1), Y(""));
      };
      return document.addEventListener("mousedown", A), () => document.removeEventListener("mousedown", A);
    }, []), xe(() => {
      var A;
      S >= 0 && ne.current && ((A = ne.current.querySelectorAll('[role="option"]')[S]) == null || A.scrollIntoView({ block: "nearest" }));
    }, [S]);
    const H = () => {
      var A;
      u || ((A = K.current) == null || A.focus(), X(!0));
    }, U = (A) => {
      var P;
      return ((P = e.find((B) => B.value === A)) == null ? void 0 : P.label) ?? A;
    }, G = (A) => {
      var P;
      return ((P = e.find((B) => B.value === A)) == null ? void 0 : P.color) ?? v;
    };
    return /* @__PURE__ */ C("div", { ref: E, className: D("flex flex-col gap-1.5", d && "w-full"), children: [
      i && /* @__PURE__ */ m("label", { htmlFor: `${O}-input`, className: "text-sm font-medium text-neutral-700", children: i }),
      /* @__PURE__ */ C("div", { ref: $, className: "relative", children: [
        f && /* @__PURE__ */ m("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10", children: f }),
        /* @__PURE__ */ C(
          "div",
          {
            onClick: H,
            className: D(
              // Base styles
              "flex flex-wrap items-center gap-1.5 w-full rounded-md border bg-white cursor-text",
              "transition-colors duration-200",
              // Size styles
              yc[o],
              // Left icon padding
              f && Ec[o],
              // Right padding for chevron
              "pr-8",
              // Focus ring (applied when dropdown is open)
              j && !N && "ring-2 ring-primary border-primary",
              j && N && "ring-2 ring-error border-error",
              // Border color
              N ? "border-error" : "border-neutral-300",
              // Disabled state
              u && "bg-neutral-100 cursor-not-allowed opacity-60",
              h
            ),
            "aria-invalid": N,
            "aria-describedby": N ? `${O}-error` : a ? `${O}-helper` : void 0,
            children: [
              _.map((A) => {
                const P = Oc[G(A)];
                return /* @__PURE__ */ C(
                  "span",
                  {
                    className: D(
                      "inline-flex items-center rounded-md font-medium",
                      "transition-colors duration-150",
                      P.base,
                      !u && P.hover,
                      wc[o]
                    ),
                    children: [
                      U(A),
                      !u && /* @__PURE__ */ m(
                        "button",
                        {
                          type: "button",
                          onClick: (B) => R(A, B),
                          className: D(
                            "inline-flex items-center justify-center rounded-sm transition-colors",
                            P.hover
                          ),
                          "aria-label": `Remove ${U(A)}`,
                          tabIndex: -1,
                          children: /* @__PURE__ */ m(tt, { size: Nc[o] })
                        }
                      )
                    ]
                  },
                  A
                );
              }),
              p ? /* @__PURE__ */ m(
                "input",
                {
                  ref: K,
                  id: `${O}-input`,
                  type: "text",
                  value: M,
                  onChange: (A) => {
                    Y(A.target.value), j || X(!0), V(0);
                  },
                  onFocus: () => {
                    u || X(!0);
                  },
                  onKeyDown: F,
                  placeholder: _.length === 0 ? c : "",
                  disabled: u,
                  className: D(
                    "flex-1 min-w-[60px] outline-none bg-transparent",
                    "placeholder:text-neutral-400",
                    u && "cursor-not-allowed"
                  ),
                  role: "combobox",
                  "aria-expanded": j,
                  "aria-controls": `${O}-listbox`,
                  "aria-activedescendant": S >= 0 ? `${O}-option-${S}` : void 0,
                  "aria-autocomplete": "list",
                  autoComplete: "off"
                }
              ) : /* @__PURE__ */ C(Be, { children: [
                _.length === 0 && /* @__PURE__ */ m("span", { className: "text-neutral-400", children: c }),
                /* @__PURE__ */ m(
                  "input",
                  {
                    ref: K,
                    id: `${O}-input`,
                    className: "absolute opacity-0 w-0 h-0",
                    onFocus: () => {
                      u || X(!0);
                    },
                    onKeyDown: F,
                    disabled: u,
                    tabIndex: 0,
                    role: "combobox",
                    "aria-expanded": j,
                    "aria-controls": `${O}-listbox`,
                    "aria-activedescendant": S >= 0 ? `${O}-option-${S}` : void 0,
                    readOnly: !0
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ m(
          tr,
          {
            className: D(
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-200",
              j && "rotate-180"
            ),
            size: Dc[o]
          }
        ),
        j && /* @__PURE__ */ m(
          "ul",
          {
            ref: ne,
            id: `${O}-listbox`,
            role: "listbox",
            "aria-multiselectable": "true",
            className: D(
              "absolute z-50 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: oe.length === 0 ? /* @__PURE__ */ m("li", { className: "px-4 py-2 text-sm text-neutral-400", children: M ? "No matching options" : "No options available" }) : oe.map((A, P) => /* @__PURE__ */ m(
              "li",
              {
                id: `${O}-option-${P}`,
                role: "option",
                "aria-selected": _.includes(A.value),
                "aria-disabled": A.disabled || !Q,
                onClick: () => {
                  !A.disabled && Q && I(A.value);
                },
                className: D(
                  "px-4 py-2 text-sm transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  A.disabled || !Q ? "text-neutral-300 cursor-not-allowed opacity-50 select-none" : D(
                    "cursor-pointer",
                    P === S ? "bg-primary/10 text-primary" : "text-neutral-700 hover:bg-neutral-50"
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
Sc.displayName = "MultiSelect";
const Cc = {
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
function Ic(e, t) {
  return e.startsWith("bottom") ? { marginTop: t } : e.startsWith("top") ? { marginBottom: t } : e.startsWith("left") ? { marginRight: t } : e.startsWith("right") ? { marginLeft: t } : {};
}
const kc = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-4 py-2.5 text-base"
}, _c = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5"
}, pi = le(
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
  }, u) => {
    const [l, p] = be(!1), [f, v] = be(-1), h = J(null), x = J(null), E = J(null), O = t.filter((S) => !S.disabled), N = te(
      (S, V) => {
        const $ = t.length;
        if ($ === 0) return -1;
        for (let K = 0; K < $; K++) {
          const ne = (S + V * (K + 1) + $) % $;
          if (!t[ne].disabled) return ne;
        }
        return -1;
      },
      [t]
    ), w = te(() => t.findIndex((S) => !S.disabled), [t]), b = te(() => {
      s || O.length === 0 || (p(!0), v(w()));
    }, [s, O.length, w]), y = te(() => {
      p(!1), v(-1);
    }, []), _ = te(() => {
      l ? y() : b();
    }, [l, y, b]), M = te(
      (S) => {
        var V;
        S.disabled || ((V = S.onClick) == null || V.call(S), n == null || n(S.value), y());
      },
      [n, y]
    ), Y = te(
      (S) => {
        var V;
        if (!s)
          switch (S.key) {
            case "ArrowDown": {
              S.preventDefault(), l ? v(($) => N($, 1)) : b();
              break;
            }
            case "ArrowUp": {
              S.preventDefault(), l ? v(($) => N($, -1)) : b();
              break;
            }
            case "Enter":
            case " ": {
              if (S.preventDefault(), l && f >= 0 && f < t.length) {
                const $ = t[f];
                $.href && !$.disabled && (window.location.href = $.href), M($);
              } else l || b();
              break;
            }
            case "Escape": {
              S.preventDefault(), y(), (V = E.current) == null || V.focus();
              break;
            }
            case "Tab": {
              y();
              break;
            }
          }
      },
      [s, l, f, t, b, y, M, N]
    );
    xe(() => {
      const S = (V) => {
        h.current && !h.current.contains(V.target) && y();
      };
      return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
    }, [y]), xe(() => {
      var S;
      f >= 0 && x.current && ((S = x.current.querySelectorAll('[role="menuitem"]')[f]) == null || S.scrollIntoView({ block: "nearest" }));
    }, [f]);
    const j = (S, V) => {
      const $ = V === f, K = /* @__PURE__ */ C(Be, { children: [
        S.icon && /* @__PURE__ */ m(
          "span",
          {
            className: D(
              "flex-shrink-0",
              _c[a],
              S.danger && !S.disabled ? "text-error" : "text-neutral-400",
              $ && !S.danger && "text-primary"
            ),
            children: S.icon
          }
        ),
        /* @__PURE__ */ m("span", { className: "flex-1 truncate", children: S.label })
      ] }), ne = D(
        "flex items-center gap-2 w-full rounded-md",
        "transition-colors duration-100",
        kc[a],
        // Disabled
        S.disabled ? "text-neutral-300 cursor-not-allowed opacity-50" : D(
          "cursor-pointer",
          S.danger ? D("text-error", $ ? "bg-error/10" : "hover:bg-error/10") : D(
            "text-neutral-700",
            $ ? "bg-primary/10 text-primary" : "hover:bg-neutral-50"
          )
        )
      ), me = () => {
        var oe;
        S.disabled || ((oe = S.onClick) == null || oe.call(S), n == null || n(S.value), y());
      };
      return /* @__PURE__ */ C("div", { children: [
        S.dividerBefore && /* @__PURE__ */ m("div", { className: "my-1 border-t border-neutral-200", role: "separator" }),
        S.href && !S.disabled ? /* @__PURE__ */ m(
          "a",
          {
            href: S.href,
            role: "menuitem",
            tabIndex: -1,
            className: ne,
            onClick: (oe) => {
              var Q;
              (Q = S.onClick) == null || Q.call(S), n == null || n(S.value), y(), S.onClick && oe.preventDefault();
            },
            onMouseEnter: () => v(V),
            onMouseLeave: () => v(-1),
            "aria-disabled": S.disabled,
            children: K
          }
        ) : /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            role: "menuitem",
            tabIndex: -1,
            className: D(ne, "text-left"),
            onClick: me,
            onMouseEnter: () => v(V),
            onMouseLeave: () => v(-1),
            disabled: S.disabled,
            "aria-disabled": S.disabled,
            children: K
          }
        )
      ] }, S.value);
    }, X = `listmenu-${J(Math.random().toString(36).slice(2, 9)).current}`;
    return /* @__PURE__ */ C("div", { ref: h, className: D("relative inline-block", c), ...d, children: [
      /* @__PURE__ */ m(
        "div",
        {
          ref: E,
          role: "button",
          tabIndex: s ? -1 : 0,
          "aria-haspopup": "menu",
          "aria-expanded": l,
          "aria-controls": l ? `${X}-menu` : void 0,
          "aria-disabled": s,
          onClick: _,
          onKeyDown: Y,
          className: D(
            "inline-flex",
            s && "opacity-50 cursor-not-allowed pointer-events-none"
          ),
          children: r
        }
      ),
      l && /* @__PURE__ */ C(
        "div",
        {
          ref: (S) => {
            x.current = S, typeof u == "function" ? u(S) : u && (u.current = S);
          },
          id: `${X}-menu`,
          role: "menu",
          "aria-orientation": "vertical",
          onKeyDown: Y,
          style: Ic(o, i),
          className: D(
            "absolute z-50 min-w-[180px] w-max",
            "rounded-md border border-neutral-200 bg-white shadow-lg",
            "py-1 px-1",
            "animate-fade-in",
            "max-h-80 overflow-auto",
            Cc[o]
          ),
          children: [
            e && /* @__PURE__ */ C("div", { children: [
              e,
              /* @__PURE__ */ m("div", { className: "my-1 border-t border-neutral-200", role: "separator" })
            ] }),
            t.map((S, V) => j(S, V))
          ]
        }
      )
    ] });
  }
);
pi.displayName = "ListMenu";
const Ac = le(
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
    ...u
  }, l) => {
    const p = c || `textarea-${Math.random().toString(36).slice(2, 9)}`, f = !!n, v = typeof d == "string" ? d.length : 0;
    return /* @__PURE__ */ C("div", { className: D("flex flex-col gap-1.5", r && "w-full"), children: [
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
          ref: l,
          id: p,
          disabled: a,
          maxLength: i,
          value: d,
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
}, Tc = le(
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
    ...d
  }, u) => {
    const l = c || `checkbox-${Math.random().toString(36).slice(2, 9)}`, p = !!n, f = () => {
      const h = Pc[o];
      return /* @__PURE__ */ m(
        "div",
        {
          className: D(
            "w-5 h-5 rounded border-2 transition-colors",
            "flex items-center justify-center",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "[&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100",
            h.ring,
            h.checked,
            p ? "border-error" : "border-neutral-300 peer-hover:border-neutral-400"
          ),
          children: r ? /* @__PURE__ */ m(Js, { className: "w-3 h-3 text-white transition-opacity" }) : /* @__PURE__ */ m(bs, { className: "w-3 h-3 text-white transition-opacity" })
        }
      );
    }, v = () => {
      const h = Rc[o];
      return /* @__PURE__ */ m(
        "div",
        {
          className: D(
            "relative w-11 h-6 rounded-full transition-colors",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "peer-checked:[&>div]:translate-x-5",
            h.ring,
            h.checked,
            p ? "bg-error/30" : "bg-neutral-300"
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
    return /* @__PURE__ */ C("div", { className: D("flex flex-col gap-1", s), children: [
      /* @__PURE__ */ C(
        "label",
        {
          htmlFor: l,
          className: D(
            "flex items-start gap-3 cursor-pointer",
            a && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ C("div", { className: D("relative flex items-center", i ? "justify-start" : "justify-center"), children: [
              /* @__PURE__ */ m(
                "input",
                {
                  ref: u,
                  type: "checkbox",
                  id: l,
                  disabled: a,
                  className: "peer sr-only",
                  "aria-invalid": p,
                  ...d
                }
              ),
              i ? v() : f()
            ] }),
            (e || t) && /* @__PURE__ */ C("div", { className: "flex flex-col", children: [
              e && /* @__PURE__ */ m("span", { className: "text-sm font-medium text-neutral-700", children: e }),
              t && /* @__PURE__ */ m("span", { className: "text-sm text-neutral-500", children: t })
            ] })
          ]
        }
      ),
      p && /* @__PURE__ */ m("p", { className: D("text-sm text-error", i ? "ml-14" : "ml-8"), children: n })
    ] });
  }
);
Tc.displayName = "Checkbox";
const $c = le(
  ({ label: e, description: t, error: n, disabled: r, className: o, id: i, ...a }, s) => {
    const c = i || `radio-${Math.random().toString(36).slice(2, 9)}`, d = !!n;
    return /* @__PURE__ */ C("div", { className: D("flex flex-col gap-1", o), children: [
      /* @__PURE__ */ C(
        "label",
        {
          htmlFor: c,
          className: D(
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
                  "aria-invalid": d,
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
                    d ? "border-error" : "border-neutral-300 peer-hover:border-neutral-400"
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
      d && /* @__PURE__ */ m("p", { className: "text-sm text-error ml-8", children: n })
    ] });
  }
);
$c.displayName = "Radio";
const Mc = {
  default: "bg-white border border-neutral-200 rounded-lg",
  bordered: "bg-white border-2 border-neutral-300 rounded-lg",
  elevated: "bg-white border border-neutral-200 shadow-card rounded-lg"
}, jc = le(
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
const Lc = le(
  ({ children: e, action: t, className: n, ...r }, o) => /* @__PURE__ */ C(
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
const Bc = le(
  ({ children: e, className: t, ...n }, r) => /* @__PURE__ */ m("div", { ref: r, className: D("p-4", t), ...n, children: e })
);
Bc.displayName = "CardBody";
const Vc = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
  between: "justify-between"
}, Fc = le(
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
}, qc = le(
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
const Fr = {
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
}, Ln = le(
  ({ size: e = "md", src: t, alt: n = "", initials: r, status: o, className: i, ...a }, s) => {
    const c = (d) => d ? d.split(" ").map((u) => u[0]).join("").toUpperCase().slice(0, 2) : "?";
    return /* @__PURE__ */ C("div", { ref: s, className: D("relative inline-block", i), children: [
      t ? /* @__PURE__ */ m(
        "img",
        {
          src: t,
          alt: n,
          className: D(
            "rounded-full object-cover",
            Fr[e]
          ),
          ...a
        }
      ) : /* @__PURE__ */ m(
        "div",
        {
          className: D(
            "rounded-full flex items-center justify-center font-medium",
            "bg-primary text-white",
            Fr[e]
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
Ln.displayName = "Avatar";
const Yc = {
  info: "bg-info/10 border-info/30 text-info-dark",
  success: "bg-success/10 border-success/30 text-success-dark",
  warning: "bg-warning/10 border-warning/30 text-warning-dark",
  error: "bg-error/10 border-error/30 text-error-dark"
}, Kc = {
  info: si,
  success: ai,
  warning: li,
  error: ii
}, Xc = le(
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
    const d = Kc[e];
    return /* @__PURE__ */ C(
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
          !i && /* @__PURE__ */ m(d, { className: "flex-shrink-0 w-5 h-5 mt-0.5" }),
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
              children: /* @__PURE__ */ m(tt, { className: "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
Xc.displayName = "Alert";
const ui = ({
  item: e,
  collapsed: t,
  level: n = 0,
  activeId: r,
  onItemClick: o,
  onCollapsedChange: i
}) => {
  const [a, s] = be(!1), c = e.children && e.children.length > 0, d = e.active || e.id === r, u = () => {
    var f;
    c ? t ? (i == null || i(!1), s(!0)) : s(!a) : (o == null || o(e), (f = e.onClick) == null || f.call(e));
  }, l = /* @__PURE__ */ C(Be, { children: [
    /* @__PURE__ */ C("span", { className: "relative flex-shrink-0 w-4 h-4 flex items-center justify-center text-[16px]", children: [
      e.icon || /* @__PURE__ */ m("span", { className: "w-1" }),
      t && c && /* @__PURE__ */ m(nr, { className: "absolute -right-2.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 text-white/50" })
    ] }),
    !t && /* @__PURE__ */ C(Be, { children: [
      /* @__PURE__ */ m("span", { className: "flex-1 truncate text-[13px]", children: e.label }),
      e.badge && /* @__PURE__ */ m("span", { className: "px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-accent text-white", children: e.badge }),
      c && /* @__PURE__ */ m(
        tr,
        {
          className: D(
            "w-3.5 h-3.5 transition-transform",
            a && "rotate-180"
          )
        }
      )
    ] })
  ] }), p = D(
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
  return /* @__PURE__ */ C("div", { children: [
    e.dividerBefore && /* @__PURE__ */ m("div", { className: "my-2 border-t border-white/10", role: "separator" }),
    e.href ? /* @__PURE__ */ m("a", { href: e.href, className: p, onClick: u, title: t ? e.label : void 0, children: l }) : /* @__PURE__ */ m("button", { type: "button", className: D(p, "w-full text-left"), onClick: u, title: t ? e.label : void 0, children: l }),
    c && a && !t && /* @__PURE__ */ m("div", { className: "mt-1 space-y-1", children: e.children.map((f) => /* @__PURE__ */ m(
      ui,
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
}, fi = le(
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
    className: u,
    ...l
  }, p) => {
    const f = t, v = n ?? t;
    return /* @__PURE__ */ C(
      "aside",
      {
        ref: p,
        className: D(
          "flex flex-col h-screen bg-sidebar text-white overflow-hidden flex-shrink-0",
          "transition-all duration-300",
          i ? "w-16" : "w-64",
          u
        ),
        ...l,
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
              ) : /* @__PURE__ */ C(Be, { children: [
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
                    children: /* @__PURE__ */ m(tc, { className: "w-4 h-4" })
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ m("nav", { className: "flex-1 overflow-y-auto overflow-x-hidden py-3 space-y-0.5 scrollbar-thin", children: e.map((h) => /* @__PURE__ */ m(
            ui,
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
fi.displayName = "Sidebar";
const mi = le(
  ({
    title: e,
    searchPlaceholder: t = "Search...",
    showSearch: n = !0,
    searchValue: r,
    onSearchChange: o,
    showNotifications: i = !0,
    notificationCount: a,
    onNotificationClick: s,
    user: c,
    userMenuItems: d,
    onUserClick: u,
    onMenuToggle: l,
    showMenuToggle: p = !1,
    actions: f,
    className: v,
    ...h
  }, x) => /* @__PURE__ */ C(
    "header",
    {
      ref: x,
      className: D(
        "flex items-center justify-between h-16 px-6 bg-white border-b border-neutral-200",
        v
      ),
      ...h,
      children: [
        /* @__PURE__ */ C("div", { className: "flex items-center gap-4", children: [
          p && /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              onClick: l,
              className: "p-2 rounded-lg hover:bg-neutral-100 lg:hidden",
              "aria-label": "Toggle menu",
              children: /* @__PURE__ */ m(ci, { className: "w-5 h-5 text-neutral-600" })
            }
          ),
          /* @__PURE__ */ m("div", { className: "flex flex-col", children: e && /* @__PURE__ */ m("h1", { className: "text-lg font-semibold text-neutral-900", children: e }) })
        ] }),
        /* @__PURE__ */ C("div", { className: "flex items-center gap-4", children: [
          n && /* @__PURE__ */ C("div", { className: "relative hidden md:block", children: [
            /* @__PURE__ */ m(rc, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" }),
            /* @__PURE__ */ m(
              "input",
              {
                type: "search",
                placeholder: t,
                value: r,
                onChange: (E) => o == null ? void 0 : o(E.target.value),
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
          i && /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              onClick: s,
              className: "relative p-2 rounded-lg hover:bg-neutral-100 transition-colors",
              "aria-label": "Notifications",
              children: [
                /* @__PURE__ */ m(vs, { className: "w-5 h-5 text-neutral-600" }),
                a !== void 0 && a > 0 && /* @__PURE__ */ m("span", { className: "absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-4 h-4 text-xs font-medium text-white bg-accent rounded-full flex items-center justify-center", children: a > 9 ? "9+" : a })
              ]
            }
          ),
          c && /* @__PURE__ */ m(
            pi,
            {
              className: "-mr-4",
              offset: 12,
              card: /* @__PURE__ */ C("div", { className: "px-4 py-2 flex items-center gap-4", children: [
                /* @__PURE__ */ m(Ln, { src: c.avatar, alt: c.name, size: "xl" }),
                /* @__PURE__ */ C("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ m("span", { className: "text-md font-medium text-neutral-900", children: c.name }),
                  c.role && /* @__PURE__ */ m("span", { className: "text-sm text-neutral-500", children: c.role })
                ] })
              ] }),
              items: d || [],
              trigger: /* @__PURE__ */ m("div", { className: "pr-4", children: /* @__PURE__ */ m(Ln, { src: c.avatar, alt: c.name, size: "sm" }) }),
              placement: "bottom-end"
            }
          )
        ] })
      ]
    }
  )
);
mi.displayName = "Header";
const Jc = le(
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
    headerTitle: u,
    user: l,
    userMenuItems: p,
    onUserClick: f,
    notificationCount: v,
    onNotificationClick: h,
    showSearch: x = !0,
    searchValue: E,
    onSearchChange: O,
    headerActions: N,
    header: w,
    hideSidebar: b = !1,
    hideHeader: y = !1,
    rightPanel: _,
    rightPanelWidth: M = "360px",
    className: Y,
    ...j
  }, X) => {
    const [S, V] = be(!1), [$, K] = be(!1), ne = !!t, me = !!w;
    return /* @__PURE__ */ C("div", { ref: X, className: D("flex h-screen bg-neutral-50", Y), ...j, children: [
      !b && /* @__PURE__ */ C(Be, { children: [
        !ne && $ && /* @__PURE__ */ m(
          "div",
          {
            className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
            onClick: () => K(!1)
          }
        ),
        /* @__PURE__ */ m(
          "div",
          {
            className: D(
              "fixed lg:static inset-y-0 left-0 z-50 lg:z-auto",
              "transform lg:transform-none transition-transform duration-300",
              !ne && $ ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
              ne && "translate-x-0"
            ),
            children: ne ? t : /* @__PURE__ */ m(
              fi,
              {
                items: n,
                logo: o,
                logoCollapsed: i,
                systemName: a,
                footer: s,
                collapsible: r,
                collapsed: S,
                onCollapsedChange: V,
                activeId: c,
                onItemClick: (oe) => {
                  d == null || d(oe), K(!1);
                }
              }
            )
          }
        )
      ] }),
      !b && y && !me && /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          onClick: () => K(!$),
          className: "fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md border border-neutral-200 lg:hidden",
          "aria-label": "Toggle menu",
          children: /* @__PURE__ */ m(ci, { className: "w-5 h-5 text-neutral-600" })
        }
      ),
      /* @__PURE__ */ C("div", { className: "flex-1 flex flex-col min-w-0", children: [
        !y && (me ? w : /* @__PURE__ */ m(
          mi,
          {
            title: u,
            showSearch: x,
            searchValue: E,
            onSearchChange: O,
            showNotifications: !0,
            notificationCount: v,
            onNotificationClick: h,
            user: l,
            userMenuItems: p,
            onUserClick: f,
            showMenuToggle: !b,
            onMenuToggle: () => K(!$),
            actions: N
          }
        )),
        /* @__PURE__ */ C("div", { className: "flex-1 flex overflow-hidden", children: [
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
              style: { "--panel-width": M },
              children: _
            }
          )
        ] })
      ] })
    ] });
  }
);
Jc.displayName = "Layout";
const Zc = le(
  ({
    items: e,
    showHomeIcon: t = !1,
    separator: n,
    maxItems: r,
    className: o,
    ...i
  }, a) => {
    const s = () => n || /* @__PURE__ */ m(nr, { className: "w-4 h-4 text-neutral-400 mx-2" }), c = (l, p, f) => {
      const v = /* @__PURE__ */ C(Be, { children: [
        p === 0 && t && /* @__PURE__ */ m(Bs, { className: "w-4 h-4 mr-1" }),
        l.icon && /* @__PURE__ */ m("span", { className: "mr-1", children: l.icon }),
        l.label
      ] }), h = D(
        "inline-flex items-center text-sm",
        f ? "font-medium text-neutral-900" : "text-neutral-500 hover:text-neutral-700 transition-colors"
      );
      return l.href && !f ? /* @__PURE__ */ m("a", { href: l.href, className: h, children: v }) : /* @__PURE__ */ m("span", { className: h, children: v });
    };
    let d = e;
    if (r && e.length > r && r) {
      const l = e.slice(0, 1), p = e.slice(-(r - 2));
      d = [
        ...l,
        { label: "..." },
        ...p
      ];
    }
    return /* @__PURE__ */ m("nav", { ref: a, "aria-label": "Breadcrumb", className: o, ...i, children: /* @__PURE__ */ m("ol", { className: "flex items-center flex-wrap", children: d.map((l, p) => {
      const f = p === d.length - 1;
      return /* @__PURE__ */ C("li", { className: "inline-flex items-center", children: [
        c(l, p, f),
        !f && s()
      ] }, p);
    }) }) });
  }
);
Zc.displayName = "Breadcrumb";
const Qc = le(
  ({ onClose: e, title: t, description: n, children: r, footer: o, className: i, ...a }, s) => /* @__PURE__ */ C(
    "div",
    {
      ref: s,
      className: D("flex flex-col h-full animate-slide-in-right", i),
      ...a,
      children: [
        /* @__PURE__ */ C("div", { className: "flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark flex-shrink-0", children: [
          /* @__PURE__ */ C("div", { className: "min-w-0 flex-1", children: [
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
  striped: d = !1,
  hoverable: u = !0,
  compact: l = !1,
  className: p,
  ...f
}, v) {
  const h = (w, b) => typeof n == "function" ? n(w) : String(w[n] ?? b), x = (w, b, y) => b.render ? b.render(w, y) : b.accessor ? String(w[b.accessor] ?? "") : "", E = (w) => {
    if (!w.sortable || !i) return;
    let b = "asc";
    r === w.key && (o === "asc" ? b = "desc" : o === "desc" && (b = null)), i(w.key, b);
  }, O = (w) => {
    if (!w.sortable) return null;
    const b = r === w.key, y = D(
      "w-4 h-4 ml-1",
      b ? "text-white" : "text-white/60"
    );
    return b && o === "asc" ? /* @__PURE__ */ m(ms, { className: y }) : b && o === "desc" ? /* @__PURE__ */ m(ds, { className: y }) : /* @__PURE__ */ m(us, { className: y });
  }, N = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  return /* @__PURE__ */ m("div", { className: "overflow-x-auto", children: /* @__PURE__ */ C(
    "table",
    {
      ref: v,
      className: D("w-full border-collapse", p),
      ...f,
      children: [
        /* @__PURE__ */ m("thead", { className: "bg-primary text-white", children: /* @__PURE__ */ m("tr", { children: e.map((w) => /* @__PURE__ */ m(
          "th",
          {
            className: D(
              "font-semibold text-white text-sm",
              l ? "px-3 py-2" : "px-4 py-3",
              N[w.align || "left"],
              w.sortable && "cursor-pointer select-none hover:bg-primary-dark"
            ),
            style: { width: w.width },
            onClick: () => E(w),
            children: /* @__PURE__ */ C("div", { className: D(
              "flex items-center",
              w.align === "center" && "justify-center",
              w.align === "right" && "justify-end"
            ), children: [
              w.header,
              O(w)
            ] })
          },
          w.key
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
        ) }) : t.map((w, b) => /* @__PURE__ */ m(
          "tr",
          {
            className: D(
              "transition-colors",
              d && b % 2 === 1 && "bg-neutral-50",
              u && "hover:bg-neutral-50",
              a && "cursor-pointer"
            ),
            onClick: () => a == null ? void 0 : a(w, b),
            children: e.map((y) => /* @__PURE__ */ m(
              "td",
              {
                className: D(
                  "text-neutral-700 text-sm",
                  l ? "px-3 py-2" : "px-4 py-3",
                  N[y.align || "left"]
                ),
                children: x(w, y, b)
              },
              y.key
            ))
          },
          h(w, b)
        )) })
      ]
    }
  ) });
}
const av = le(el), gi = ni(null), tl = {
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
}, rl = le(
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
  }, u) => {
    var x;
    const [l, p] = be(
      n || ((x = e[0]) == null ? void 0 : x.id) || ""
    ), f = t ?? l, v = tl[o], h = (E) => {
      t === void 0 && p(E), r == null || r(E);
    };
    return /* @__PURE__ */ m(gi.Provider, { value: { activeId: f }, children: /* @__PURE__ */ C("div", { ref: u, className: s, ...d, children: [
      /* @__PURE__ */ m(
        "div",
        {
          role: "tablist",
          className: D(
            "flex",
            v.list,
            i && "w-full"
          ),
          children: e.map((E) => /* @__PURE__ */ C(
            "button",
            {
              role: "tab",
              type: "button",
              "aria-selected": f === E.id,
              "aria-controls": `tabpanel-${E.id}`,
              disabled: E.disabled,
              onClick: () => h(E.id),
              className: D(
                "flex items-center justify-center gap-2 font-medium transition-all min-w-0",
                v.tab,
                nl[a],
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
                    className: D(
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
rl.displayName = "Tabs";
const ol = le(
  ({ id: e, children: t, className: n, ...r }, o) => {
    const i = Ut(gi);
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
const zr = {
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
}, cl = le(
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
    size: d = "md",
    variant: u = "primary",
    className: l,
    ...p
  }, f) => {
    const h = (() => {
      const y = [], M = r * 2 + 3 + 2;
      if (t <= M)
        return Array.from({ length: t }, (V, $) => $ + 1);
      const Y = Math.max(e - r, 1), j = Math.min(
        e + r,
        t
      ), X = Y > 2, S = j < t - 1;
      if (!X && S) {
        const V = 1 + 2 * r + 1;
        for (let $ = 1; $ <= V; $++) y.push($);
        y.push("ellipsis"), y.push(t);
      } else if (X && !S) {
        y.push(1), y.push("ellipsis");
        const V = t - (2 * r + 1);
        for (let $ = V; $ <= t; $++) y.push($);
      } else {
        y.push(1), y.push("ellipsis");
        for (let V = Y; V <= j; V++)
          y.push(V);
        y.push("ellipsis"), y.push(t);
      }
      return y;
    })(), x = il[d], E = D(
      "flex items-center justify-center rounded-full transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      sl[u],
      zr[d],
      c && "opacity-50 cursor-not-allowed"
    ), O = ({
      page: y,
      isActive: _
    }) => /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        onClick: () => !c && n(y),
        disabled: c,
        "aria-current": _ ? "page" : void 0,
        className: D(
          E,
          "px-3",
          _ ? al[u] : "text-neutral-600 hover:bg-neutral-100"
        ),
        children: y
      }
    ), N = ({
      direction: y,
      double: _
    }) => {
      const M = y === "prev", Y = _ ? M ? 1 : t : M ? e - 1 : e + 1, j = c || (M ? e === 1 : e === t), X = _ ? M ? Ds : Ss : M ? ws : nr;
      return /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          onClick: () => !j && n(Y),
          disabled: j,
          "aria-label": _ ? M ? "First page" : "Last page" : M ? "Previous page" : "Next page",
          className: D(
            E,
            j ? "text-neutral-300 cursor-not-allowed" : "text-neutral-600 hover:bg-neutral-100"
          ),
          children: /* @__PURE__ */ m(X, { size: x })
        }
      );
    }, w = a && s ? (e - 1) * s + 1 : void 0, b = a && s ? Math.min(e * s, a) : void 0;
    return /* @__PURE__ */ C(
      "nav",
      {
        ref: f,
        role: "navigation",
        "aria-label": "Pagination",
        className: D("flex items-center gap-2", l),
        ...p,
        children: [
          i && a !== void 0 && /* @__PURE__ */ C("span", { className: "text-sm text-neutral-500 mr-4", children: [
            w,
            "-",
            b,
            " of ",
            a
          ] }),
          o && /* @__PURE__ */ m(N, { direction: "prev", double: !0 }),
          /* @__PURE__ */ m(N, { direction: "prev" }),
          /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: h.map(
            (y, _) => y === "ellipsis" ? /* @__PURE__ */ m(
              "span",
              {
                className: D("px-2 text-neutral-400", zr[d]),
                children: "..."
              },
              `ellipsis-${_}`
            ) : /* @__PURE__ */ m(
              O,
              {
                page: y,
                isActive: y === e
              },
              y
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
}, vi = le(
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
    centered: u = !0,
    className: l,
    ...p
  }, f) => {
    const v = te(
      (h) => {
        h.key === "Escape" && c && t();
      },
      [c, t]
    );
    return xe(() => (e && (document.addEventListener("keydown", v), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), [e, v]), e ? /* @__PURE__ */ C(
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
                u ? "items-center justify-center" : "items-start justify-center pt-16"
              ),
              children: /* @__PURE__ */ C(
                "div",
                {
                  ref: f,
                  className: D(
                    "relative w-full bg-white rounded-lg shadow-modal",
                    "animate-fade-in",
                    ll[a],
                    l
                  ),
                  onClick: (h) => h.stopPropagation(),
                  ...p,
                  children: [
                    (n || d) && /* @__PURE__ */ C("div", { className: "flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark rounded-t-lg", children: [
                      /* @__PURE__ */ C("div", { children: [
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
vi.displayName = "Modal";
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
  vi,
  {
    ...s,
    onClose: i,
    size: "sm",
    footer: /* @__PURE__ */ C(Be, { children: [
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
  info: si,
  success: ai,
  warning: li,
  error: ii
}, hi = le(
  ({ toast: e, onClose: t, className: n, ...r }, o) => {
    const [i, a] = be(!1), s = ul[e.variant];
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
    return /* @__PURE__ */ C(
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
              children: /* @__PURE__ */ m(tt, { className: "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
hi.displayName = "Toast";
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
    children: t.map((r) => /* @__PURE__ */ m(hi, { toast: r, onClose: n }, r.id))
  }
), bi = ni(null), sv = ({ children: e, position: t = "top-right" }) => {
  const [n, r] = be([]), o = te((u) => {
    const l = Math.random().toString(36).slice(2, 9);
    return r((p) => [...p, { ...u, id: l }]), l;
  }, []), i = te((u) => {
    r((l) => l.filter((p) => p.id !== u));
  }, []), a = te(
    (u, l) => o({ variant: "success", message: u, title: l }),
    [o]
  ), s = te(
    (u, l) => o({ variant: "error", message: u, title: l }),
    [o]
  ), c = te(
    (u, l) => o({ variant: "warning", message: u, title: l }),
    [o]
  ), d = te(
    (u, l) => o({ variant: "info", message: u, title: l }),
    [o]
  );
  return /* @__PURE__ */ C(bi.Provider, { value: { toasts: n, addToast: o, removeToast: i, success: a, error: s, warning: c, info: d }, children: [
    e,
    /* @__PURE__ */ m(ml, { position: t, toasts: n, onClose: i })
  ] });
}, cv = () => {
  const e = Ut(bi);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, gl = le(
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
    showRememberMe: d = !0,
    footer: u,
    variant: l = "gradient",
    className: p,
    ...f
  }, v) => {
    const [h, x] = be(""), [E, O] = be(""), [N, w] = be(!1), [b, y] = be(!1), M = /* @__PURE__ */ C("form", { onSubmit: (Y) => {
      Y.preventDefault(), i == null || i(h, E);
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
          jn,
          {
            id: "email",
            type: "email",
            value: h,
            onChange: (Y) => x(Y.target.value),
            placeholder: "tu@email.com",
            leftIcon: /* @__PURE__ */ m(Ys, { className: "w-5 h-5" }),
            required: !0,
            disabled: a
          }
        )
      ] }),
      /* @__PURE__ */ C("div", { children: [
        /* @__PURE__ */ m("label", { htmlFor: "password", className: "block text-sm font-medium text-neutral-700 mb-1", children: "Contraseña" }),
        /* @__PURE__ */ m(
          jn,
          {
            id: "password",
            type: N ? "text" : "password",
            value: E,
            onChange: (Y) => O(Y.target.value),
            placeholder: "••••••••",
            leftIcon: /* @__PURE__ */ m(Us, { className: "w-5 h-5" }),
            rightIcon: /* @__PURE__ */ m(
              "button",
              {
                type: "button",
                onClick: () => w(!N),
                className: "text-neutral-400 hover:text-neutral-600",
                children: N ? /* @__PURE__ */ m(_s, { className: "w-5 h-5" }) : /* @__PURE__ */ m(Ps, { className: "w-5 h-5" })
              }
            ),
            required: !0,
            disabled: a
          }
        )
      ] }),
      /* @__PURE__ */ C("div", { className: "flex items-center justify-between", children: [
        d && /* @__PURE__ */ C("label", { className: "flex items-center gap-2 cursor-pointer", children: [
          /* @__PURE__ */ m(
            "input",
            {
              type: "checkbox",
              checked: b,
              onChange: (Y) => y(Y.target.checked),
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
      u && /* @__PURE__ */ m("div", { className: "text-center", children: u })
    ] });
    return l === "split" ? /* @__PURE__ */ C(
      "div",
      {
        ref: v,
        className: D("min-h-screen flex", p),
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
          /* @__PURE__ */ m("div", { className: "w-full lg:w-1/2 flex items-center justify-center p-8 bg-white", children: /* @__PURE__ */ m("div", { className: "w-full max-w-md", children: M }) })
        ]
      }
    ) : l === "centered" ? /* @__PURE__ */ m(
      "div",
      {
        ref: v,
        className: D(
          "min-h-screen flex items-center justify-center p-4 bg-neutral-100",
          p
        ),
        ...f,
        children: /* @__PURE__ */ m("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-xl p-8", children: M })
      }
    ) : /* @__PURE__ */ m(
      "div",
      {
        ref: v,
        className: D(
          "min-h-screen flex items-center justify-center p-4",
          "bg-gradient-to-br from-sidebar via-primary to-accent",
          p
        ),
        ...f,
        children: /* @__PURE__ */ m("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-2xl p-8", children: M })
      }
    );
  }
);
gl.displayName = "LoginPage";
function Oe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var vl = typeof Symbol == "function" && Symbol.observable || "@@observable", Gr = vl, Wr = () => Math.random().toString(36).substring(7).split("").join("."), hl = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Wr()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Wr()}`
}, qr = hl;
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
function xi(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(2) : `Expected the root reducer to be a function. Instead, received: '${Me(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(1) : `Expected the enhancer to be a function. Instead, received: '${Me(n)}'`);
    return n(xi)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function d() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((x, E) => {
      a.set(E, x);
    }));
  }
  function u() {
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
    const O = s++;
    return a.set(O, x), function() {
      if (E) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Oe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        E = !1, d(), a.delete(O), i = null;
      }
    };
  }
  function p(x) {
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
    r = x, p({
      type: qr.REPLACE
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
        function O() {
          const w = E;
          w.next && w.next(u());
        }
        return O(), {
          unsubscribe: x(O)
        };
      },
      [Gr]() {
        return this;
      }
    };
  }
  return p({
    type: qr.INIT
  }), {
    dispatch: p,
    subscribe: l,
    getState: u,
    replaceReducer: f,
    [Gr]: v
  };
}
function Ur(e, t) {
  return function(...n) {
    return t(e.apply(this, n));
  };
}
function Hr(e, t) {
  if (typeof e == "function")
    return Ur(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Oe(16) : `bindActionCreators expected an object or a function, but instead received: '${Me(e)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = Ur(o, t));
  }
  return n;
}
function yi(...e) {
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
      dispatch: (c, ...d) => i(c, ...d)
    }, s = e.map((c) => c(a));
    return i = yi(...s)(o.dispatch), {
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
var Yr;
function Ol() {
  if (Yr) return ln;
  Yr = 1;
  var e = fe;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return ln.useSyncExternalStoreWithSelector = function(c, d, u, l, p) {
    var f = o(null);
    if (f.current === null) {
      var v = { hasValue: !1, value: null };
      f.current = v;
    } else v = f.current;
    f = a(
      function() {
        function x(b) {
          if (!E) {
            if (E = !0, O = b, b = l(b), p !== void 0 && v.hasValue) {
              var y = v.value;
              if (p(y, b))
                return N = y;
            }
            return N = b;
          }
          if (y = N, n(O, b)) return y;
          var _ = l(b);
          return p !== void 0 && p(y, _) ? (O = b, y) : (O = b, N = _);
        }
        var E = !1, O, N, w = u === void 0 ? null : u;
        return [
          function() {
            return x(d());
          },
          w === null ? void 0 : function() {
            return x(w());
          }
        ];
      },
      [d, u, l, p]
    );
    var h = r(c, f[0], f[1]);
    return i(
      function() {
        v.hasValue = !0, v.value = h;
      },
      [h]
    ), s(h), h;
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
var Kr;
function Sl() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, d) {
      return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = fe, n = typeof Object.is == "function" ? Object.is : e, r = t.useSyncExternalStore, o = t.useRef, i = t.useEffect, a = t.useMemo, s = t.useDebugValue;
    dn.useSyncExternalStoreWithSelector = function(c, d, u, l, p) {
      var f = o(null);
      if (f.current === null) {
        var v = { hasValue: !1, value: null };
        f.current = v;
      } else v = f.current;
      f = a(
        function() {
          function x(b) {
            if (!E) {
              if (E = !0, O = b, b = l(b), p !== void 0 && v.hasValue) {
                var y = v.value;
                if (p(y, b))
                  return N = y;
              }
              return N = b;
            }
            if (y = N, n(O, b))
              return y;
            var _ = l(b);
            return p !== void 0 && p(y, _) ? (O = b, y) : (O = b, N = _);
          }
          var E = !1, O, N, w = u === void 0 ? null : u;
          return [
            function() {
              return x(d());
            },
            w === null ? void 0 : function() {
              return x(w());
            }
          ];
        },
        [d, u, l, p]
      );
      var h = r(c, f[0], f[1]);
      return i(
        function() {
          v.hasValue = !0, v.value = h;
        },
        [h]
      ), s(h), h;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), dn;
}
process.env.NODE_ENV === "production" ? Ol() : Sl();
var wi = /* @__PURE__ */ ee.version.startsWith("19"), Cl = /* @__PURE__ */ Symbol.for(
  wi ? "react.transitional.element" : "react.element"
), Il = /* @__PURE__ */ Symbol.for("react.portal"), Ei = /* @__PURE__ */ Symbol.for("react.fragment"), Ni = /* @__PURE__ */ Symbol.for("react.strict_mode"), Di = /* @__PURE__ */ Symbol.for("react.profiler"), rr = /* @__PURE__ */ Symbol.for("react.consumer"), or = /* @__PURE__ */ Symbol.for("react.context"), ir = /* @__PURE__ */ Symbol.for("react.forward_ref"), Oi = /* @__PURE__ */ Symbol.for("react.suspense"), Si = /* @__PURE__ */ Symbol.for(
  "react.suspense_list"
), Ht = /* @__PURE__ */ Symbol.for("react.memo"), Ci = /* @__PURE__ */ Symbol.for("react.lazy"), kl = /* @__PURE__ */ Symbol.for("react.offscreen"), _l = /* @__PURE__ */ Symbol.for(
  "react.client.reference"
), Al = ir, Pl = Ht;
function Rl(e) {
  return typeof e == "string" || typeof e == "function" || e === Ei || e === Di || e === Ni || e === Oi || e === Si || e === kl || typeof e == "object" && e !== null && (e.$$typeof === Ci || e.$$typeof === Ht || e.$$typeof === or || e.$$typeof === rr || e.$$typeof === ir || e.$$typeof === _l || e.getModuleId !== void 0);
}
function Bn(e) {
  if (typeof e == "object" && e !== null) {
    const { $$typeof: t } = e;
    switch (t) {
      case Cl:
        switch (e = e.type, e) {
          case Ei:
          case Di:
          case Ni:
          case Oi:
          case Si:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case or:
              case ir:
              case Ci:
              case Ht:
                return e;
              case rr:
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
  return wi ? Bn(e) === rr : Bn(e) === or;
}
function $l(e) {
  return Bn(e) === Ht;
}
function ar(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function pn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || ar(
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
  let s = !1, c, d, u, l, p;
  function f(O, N) {
    return c = O, d = N, u = e(c, d), l = t(r, d), p = n(u, l, d), s = !0, p;
  }
  function v() {
    return u = e(c, d), t.dependsOnOwnProps && (l = t(r, d)), p = n(u, l, d), p;
  }
  function h() {
    return e.dependsOnOwnProps && (u = e(c, d)), t.dependsOnOwnProps && (l = t(r, d)), p = n(u, l, d), p;
  }
  function x() {
    const O = e(c, d), N = !a(O, u);
    return u = O, N && (p = n(u, l, d)), p;
  }
  function E(O, N) {
    const w = !i(N, d), b = !o(
      O,
      c,
      N,
      d
    );
    return c = O, d = N, w && b ? v() : w ? h() : b ? x() : p;
  }
  return function(N, w) {
    return s ? E(N, w) : f(N, w);
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
function Ii(e, t, n) {
  Vl(e) || ar(
    `${n}() in ${t} must return a plain object. Instead received ${e}.`
  );
}
function Vn(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Xr(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ki(e, t) {
  return function(r, { displayName: o }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Xr(e);
      let d = i(s, c);
      return typeof d == "function" && (i.mapToProps = d, i.dependsOnOwnProps = Xr(d), d = i(s, c)), process.env.NODE_ENV !== "production" && Ii(d, o, t), d;
    }, i;
  };
}
function sr(e, t) {
  return (n, r) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`
    );
  };
}
function Fl(e) {
  return e && typeof e == "object" ? Vn(
    (t) => (
      // @ts-ignore
      Bl(e, t)
    )
  ) : e ? typeof e == "function" ? (
    // @ts-ignore
    ki(e, "mapDispatchToProps")
  ) : sr(e, "mapDispatchToProps") : Vn((t) => ({
    dispatch: t
  }));
}
function zl(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ki(e, "mapStateToProps")
  ) : sr(e, "mapStateToProps") : Vn(() => ({}));
}
function Gl(e, t, n) {
  return { ...n, ...e, ...t };
}
function Wl(e) {
  return function(n, { displayName: r, areMergedPropsEqual: o }) {
    let i = !1, a;
    return function(c, d, u) {
      const l = e(c, d, u);
      return i ? o(l, a) || (a = l) : (i = !0, a = l, process.env.NODE_ENV !== "production" && Ii(a, r, "mergeProps")), a;
    };
  };
}
function ql(e) {
  return e ? typeof e == "function" ? Wl(e) : sr(e, "mergeProps") : () => Gl;
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
var Jr = {
  notify() {
  },
  get: () => []
};
function _i(e, t) {
  let n, r = Jr, o = 0, i = !1;
  function a(h) {
    u();
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
  function u() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = Hl());
  }
  function l() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Jr);
  }
  function p() {
    i || (i = !0, u());
  }
  function f() {
    i && (i = !1, l());
  }
  const v = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: d,
    trySubscribe: p,
    tryUnsubscribe: f,
    getListeners: () => r
  };
  return v;
}
var Yl = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Kl = /* @__PURE__ */ Yl(), Xl = () => typeof navigator < "u" && navigator.product === "ReactNative", Jl = /* @__PURE__ */ Xl(), Zl = () => Kl || Jl ? ee.useLayoutEffect : ee.useEffect, Mt = /* @__PURE__ */ Zl();
function Zr(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function un(e, t) {
  if (Zr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Zr(e[n[o]], t[n[o]]))
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
}, Ai = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, nd = {
  [Al]: td,
  [Pl]: Ai
};
function Qr(e) {
  return $l(e) ? Ai : nd[e.$$typeof] || Ql;
}
var rd = Object.defineProperty, od = Object.getOwnPropertyNames, eo = Object.getOwnPropertySymbols, id = Object.getOwnPropertyDescriptor, ad = Object.getPrototypeOf, to = Object.prototype;
function Fn(e, t) {
  if (typeof t != "string") {
    if (to) {
      const i = ad(t);
      i && i !== to && Fn(e, i);
    }
    let n = od(t);
    eo && (n = n.concat(eo(t)));
    const r = Qr(e), o = Qr(t);
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
  if (!ee.createContext) return {};
  const e = mn[fn] ?? (mn[fn] = /* @__PURE__ */ new Map());
  let t = e.get(ee.createContext);
  return t || (t = ee.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(ee.createContext, t)), t;
}
var Pi = /* @__PURE__ */ sd(), cd = [null, null], ld = (e) => {
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
function ud(e, t, n, r, o, i, a, s, c, d, u) {
  if (!e) return () => {
  };
  let l = !1, p = null;
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
    } catch (O) {
      E = O, p = O;
    }
    E || (p = null), x === i.current ? a.current || d() : (i.current = x, c.current = x, a.current = !0, u());
  };
  return n.onStateChange = f, n.trySubscribe(), f(), () => {
    if (l = !0, n.tryUnsubscribe(), n.onStateChange = null, p)
      throw p;
  };
}
function fd(e, t) {
  return e === t;
}
var no = !1;
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
  context: d = Pi
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !no && (no = !0, ar(
    'The `pure` option has been removed. `connect` is now always a "pure/memoized" component'
  ));
  const u = d, l = zl(e), p = Fl(t), f = ql(n), v = !!e;
  return (x) => {
    if (process.env.NODE_ENV !== "production" && !/* @__PURE__ */ Rl(x))
      throw new Error(
        `You must pass a component to the function returned by connect. Instead received ${ld(
          x
        )}`
      );
    const E = x.displayName || x.name || "Component", O = `Connect(${E})`, N = {
      shouldHandleStateChanges: v,
      displayName: O,
      wrappedComponentName: E,
      WrappedComponent: x,
      // @ts-ignore
      initMapStateToProps: l,
      initMapDispatchToProps: p,
      initMergeProps: f,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function w(_) {
      const [M, Y, j] = ee.useMemo(() => {
        const { reactReduxForwardedRef: k, ...ge } = _;
        return [_.context, k, ge];
      }, [_]), X = ee.useMemo(() => {
        let k = u;
        if (M != null && M.Consumer && process.env.NODE_ENV !== "production") {
          if (!/* @__PURE__ */ Tl(
            // @ts-ignore
            /* @__PURE__ */ ee.createElement(M.Consumer, null)
          ))
            throw new Error(
              "You must pass a valid React context consumer as `props.context`"
            );
          k = M;
        }
        return k;
      }, [M, u]), S = ee.useContext(X), V = !!_.store && !!_.store.getState && !!_.store.dispatch, $ = !!S && !!S.store;
      if (process.env.NODE_ENV !== "production" && !V && !$)
        throw new Error(
          `Could not find "store" in the context of "${O}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${O} in connect options.`
        );
      const K = V ? _.store : S.store, ne = $ ? S.getServerState : K.getState, me = ee.useMemo(() => Ll(K.dispatch, N), [K]), [oe, Q] = ee.useMemo(() => {
        if (!v) return cd;
        const k = _i(
          K,
          V ? void 0 : S.subscription
        ), ge = k.notifyNestedSubs.bind(k);
        return [k, ge];
      }, [K, V, S]), I = ee.useMemo(() => V ? S : {
        ...S,
        subscription: oe
      }, [V, S, oe]), R = ee.useRef(void 0), W = ee.useRef(j), q = ee.useRef(void 0), F = ee.useRef(!1), H = ee.useRef(!1), U = ee.useRef(
        void 0
      );
      Mt(() => (H.current = !0, () => {
        H.current = !1;
      }), []);
      const G = ee.useMemo(() => () => q.current && j === W.current ? q.current : me(K.getState(), j), [K, j]), A = ee.useMemo(() => (ge) => oe ? ud(
        v,
        K,
        oe,
        // @ts-ignore
        me,
        W,
        R,
        F,
        H,
        q,
        Q,
        ge
      ) : () => {
      }, [oe]);
      dd(pd, [
        W,
        R,
        F,
        j,
        q,
        Q
      ]);
      let P;
      try {
        P = ee.useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          A,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          G,
          ne ? () => me(ne(), j) : G
        );
      } catch (k) {
        throw U.current && (k.message += `
The error may be correlated with this previous error:
${U.current.stack}

`), k;
      }
      Mt(() => {
        U.current = void 0, q.current = void 0, R.current = P;
      });
      const B = ee.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ ee.createElement(
          x,
          {
            ...P,
            ref: Y
          }
        )
      ), [Y, x, P]);
      return ee.useMemo(() => v ? /* @__PURE__ */ ee.createElement(X.Provider, { value: I }, B) : B, [X, B, I]);
    }
    const y = ee.memo(w);
    if (y.WrappedComponent = x, y.displayName = w.displayName = O, c) {
      const M = ee.forwardRef(
        function(j, X) {
          return /* @__PURE__ */ ee.createElement(y, { ...j, reactReduxForwardedRef: X });
        }
      );
      return M.displayName = O, M.WrappedComponent = x, /* @__PURE__ */ Fn(M, x);
    }
    return /* @__PURE__ */ Fn(y, x);
  };
}
var Ri = md;
function gd(e) {
  const { children: t, context: n, serverState: r, store: o } = e, i = ee.useMemo(() => {
    const c = _i(o), d = {
      store: o,
      subscription: c,
      getServerState: r ? () => r : void 0
    };
    if (process.env.NODE_ENV === "production")
      return d;
    {
      const { identityFunctionCheck: u = "once", stabilityCheck: l = "once" } = e;
      return /* @__PURE__ */ Object.assign(d, {
        stabilityCheck: l,
        identityFunctionCheck: u
      });
    }
  }, [o, r]), a = ee.useMemo(() => o.getState(), [o]);
  Mt(() => {
    const { subscription: c } = i;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [i, a]);
  const s = n || Pi;
  return /* @__PURE__ */ ee.createElement(s.Provider, { value: i }, t);
}
var vd = gd, hd = process.env.NODE_ENV === "production", gn = "Invariant failed";
function ro(e, t) {
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
}, cr = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, oo = function(t, n) {
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
}, lr = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? vn : r, i = t.border, a = i === void 0 ? vn : i, s = t.padding, c = s === void 0 ? vn : s, d = Pe(cr(n, o)), u = Pe(oo(n, a)), l = Pe(oo(u, c));
  return {
    marginBox: d,
    borderBox: Pe(n),
    paddingBox: u,
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
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? ro(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : ro()), o;
}, xd = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, jt = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = bd(r, n);
  return lr({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Lt = function(t, n) {
  return n === void 0 && (n = xd()), jt(t, n);
}, Ti = function(t, n) {
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
  return lr({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, $i = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Ti(n, r);
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
const yd = process.env.NODE_ENV === "production", wd = /[ \t]{2,}/g, Ed = /^[ \t]*/gm, io = (e) => e.replace(wd, " ").replace(Ed, "").trim(), Nd = (e) => io(`
  %c@hello-pangea/dnd

  %c${io(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Dd = (e) => [Nd(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Od = "__@hello-pangea/dnd-disable-dev-warnings";
function Mi(e, t) {
  yd || typeof window < "u" && window[Od] || console[e](...Dd(t));
}
const pe = Mi.bind(null, "warn"), zn = Mi.bind(null, "error");
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
const Cd = process.env.NODE_ENV === "production", ao = "Invariant failed";
class ut extends Error {
}
ut.prototype.toString = function() {
  return this.message;
};
function g(e, t) {
  throw Cd ? new ut(ao) : new ut(`${ao}: ${t || ""}`);
}
class Id extends fe.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = je, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && pe(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof ut && (n.preventDefault(), process.env.NODE_ENV !== "production" && zn(o.message));
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
      process.env.NODE_ENV !== "production" && zn(t.message), this.setState({});
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
`, ji = (e, t) => {
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
}, Li = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, Ad = (e) => {
  const t = e.destination;
  if (t)
    return ji(e.source, t);
  const n = e.combine;
  return n ? Li(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, so = (e) => `
  The item has returned to its starting position
  of ${Vt(e.index)}
`, Pd = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${so(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${ji(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${Li(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${so(e.source)}
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
function Bi(e, t) {
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
  }))[0], r = J(!0), o = J(n), a = r.current || !!(t && o.current.inputs && Bi(t, o.current.inputs)) ? o.current : {
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
}, ft = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), co = (e, t) => Math.min(...t.map((n) => ft(e, n))), Vi = (e) => (t) => ({
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
}), lo = (e) => [{
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
}, dr = (e, t) => {
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
function ye(e, t = Bi) {
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
const Fi = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), zi = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Yt = ye((e) => Object.values(e)), Bd = ye((e) => Object.values(e));
var He = ye((e, t) => Bd(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function pr(e) {
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
  if (!n.isCombineEnabled || !pr(o))
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
  const d = Xt(t, r);
  if (!c) {
    if (!d.length)
      return null;
    const f = d[d.length - 1];
    return a(f.descriptor.id);
  }
  const u = d.findIndex((f) => f.descriptor.id === c);
  u === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Could not find displaced item in set") : g());
  const l = u - 1;
  if (l < 0)
    return null;
  const p = d[l];
  return a(p.descriptor.id);
}, rt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Gi = {
  point: we,
  value: 0
}, mt = {
  invisible: {},
  visible: {},
  all: []
}, Fd = {
  displaced: mt,
  displacedBy: Gi,
  at: null
};
var Ae = (e, t) => (n) => e <= n && n <= t, Wi = (e) => {
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
}, zd = (e) => {
  const t = Ae(e.top, e.bottom), n = Ae(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const ur = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, qi = {
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
  return (o) => e === ur ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const Wd = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : we;
  return wt(e, n);
}, qd = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, Ud = (e, t, n) => n(t)(e), fr = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? Wd(e, t) : e;
  return qd(i, t, o) && Ud(i, n, o);
}, Hd = (e) => fr({
  ...e,
  isVisibleThroughFrameFn: Wi
}), Ui = (e) => fr({
  ...e,
  isVisibleThroughFrameFn: zd
}), Yd = (e) => fr({
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
  return Pe(cr(n, r));
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
    const d = Xd(c, n), u = c.descriptor.id;
    if (s.all.push(u), !Hd({
      target: d,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const p = Kd(u, i, o), f = {
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
function Jd(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function po({
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
    return po({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const d = t.find((v) => v.descriptor.index === a);
  if (!d)
    return po({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const u = Xt(e, t), l = t.indexOf(d), p = u.slice(l);
  return {
    displaced: gt({
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
  const d = a.at;
  if (d || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot move in direction without previous impact location") : g()), d.type === "REORDER") {
    const l = Qd({
      isMovingForward: e,
      isInHomeList: t,
      location: d.destination,
      insideDestination: i
    });
    return l == null ? null : Ft({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: l
    });
  }
  const u = Zd({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: r,
    combine: d.combine,
    afterCritical: c
  });
  return u == null ? null : Ft({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: u
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
const Hi = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, rp = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, mr = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, uo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.end] + Hi(e, n), mr(e, t.marginBox, n)), fo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.start] - rp(e, n), mr(e, t.marginBox, n)), op = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => Ue(e.line, t.contentBox[e.start] + Hi(e, n), mr(e, t.contentBox, n));
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
    displacedBy: d
  } = e, u = c.all[0];
  if (u) {
    const p = n[u];
    if (Ve(u, o))
      return fo({
        axis: s,
        moveRelativeTo: p.page,
        isMoving: a
      });
    const f = jt(p.page, d.point);
    return fo({
      axis: s,
      moveRelativeTo: f,
      isMoving: a
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Ve(l.descriptor.id, o)) {
    const p = jt(l.page, nt(o.displacedBy.point));
    return uo({
      axis: s,
      moveRelativeTo: p,
      isMoving: a
    });
  }
  return uo({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, Gn = (e, t) => {
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
  return n ? Gn(n, t) : t;
}, Yi = (e, t) => {
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
function mo(e, t) {
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
  const i = Yi(t, Ne(t.scroll.current, o)), a = n.frame ? dr(n, Ne(n.frame.scroll.current, o)) : n, s = e.displaced, c = gt({
    afterDragging: mo(s.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), d = gt({
    afterDragging: mo(s.all, r),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = {}, l = {}, p = [s, c, d];
  return s.all.forEach((v) => {
    const h = sp(v, p);
    if (h) {
      l[v] = h;
      return;
    }
    u[v] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: u,
      visible: l
    }
  };
}, lp = (e, t) => Ne(e.scroll.diff.displacement, t), gr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = lp(n, e), o = Se(r, t.page.borderBox.center);
  return Ne(t.client.borderBox.center, o);
}, Ki = ({
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
  return i ? Yd(c) : Ui(c);
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
  const d = He(n.descriptor.id, r), u = rt(t, n), l = Vd({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: d,
    previousImpact: o
  }) || ep({
    isMovingForward: e,
    isInHomeList: u,
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
  const p = Jt({
    impact: l,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (Ki({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: p,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: gr({
        pageBorderBoxCenter: p,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const v = Se(p, a), h = cp({
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
  const a = n.axis, s = Ae(i[a.start], i[a.end]), c = Yt(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => Wi(o.frame)(De(u))).filter((u) => {
    const l = De(u);
    return e ? i[a.crossAxisEnd] < l[a.crossAxisEnd] : l[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((u) => {
    const l = De(u), p = Ae(l[a.start], l[a.end]);
    return s(l[a.start]) || s(l[a.end]) || p(i[a.start]) || p(i[a.end]);
  }).sort((u, l) => {
    const p = De(u)[a.crossAxisStart], f = De(l)[a.crossAxisStart];
    return e ? p - f : f - p;
  }).filter((u, l, p) => De(u)[a.crossAxisStart] === De(p[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const d = c.filter((u) => Ae(De(u)[a.start], De(u)[a.end])(t[a.line]));
  return d.length === 1 ? d[0] : d.length > 1 ? d.sort((u, l) => De(u)[a.start] - De(l)[a.start])[0] : c.sort((u, l) => {
    const p = co(t, lo(De(u))), f = co(t, lo(De(l)));
    return p !== f ? p - f : De(u)[a.start] - De(l)[a.start];
  })[0];
};
const go = (e, t) => {
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
}) => r.filter((a) => Ui({
  target: up(a, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = ft(e, Gn(n, go(a, o))), d = ft(e, Gn(n, go(s, o)));
  return c < d ? -1 : d < c ? 1 : a.descriptor.index - s.descriptor.index;
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
  const o = e.subject.page.contentBox[r.size], c = He(e.descriptor.id, n).reduce((d, u) => d + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : Ue(r.line, c);
}, Xi = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Ji = (e, t, n) => {
  const r = e.frame;
  rt(t, e) && (process.env.NODE_ENV !== "production" ? g(!1, "Should not add placeholder space to home list") : g()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot add placeholder size to a subject when it already has one") : g());
  const o = Et(e.axis, t.displaceBy).point, i = mp(e, o, n), a = {
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
  const s = i ? Ne(r.scroll.max, i) : r.scroll.max, c = Xi(r, s), d = Je({
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
  const o = Xi(n, r), i = Je({
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
    const l = {
      displaced: mt,
      displacedBy: Gi,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, p = Jt({
      impact: l,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), f = rt(r, i) ? i : Ji(i, r, o);
    return Ki({
      draggable: r,
      destination: f,
      newPageBorderBoxCenter: p,
      viewport: a.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? l : null;
  }
  const c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], d = (() => {
    const l = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || c ? l : l + 1;
  })(), u = Et(i.axis, r.displaceBy);
  return Ft({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: a,
    displacedBy: u,
    last: mt,
    index: d
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
  const d = He(c.descriptor.id, o), u = fp({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: d,
    afterCritical: s
  }), l = vp({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: n,
    draggables: o,
    moveRelativeTo: u,
    insideDestination: d,
    viewport: a,
    afterCritical: s
  });
  if (!l)
    return null;
  const p = Jt({
    impact: l,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: gr({
      pageBorderBoxCenter: p,
      draggable: n,
      viewport: a
    }),
    impact: l,
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
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", d = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: p
  } = e.dimensions;
  return s ? dp({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: d,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : hp({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: d,
    isOver: i,
    draggables: l,
    droppables: p,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function We(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Zi(e) {
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
    if (Zi(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], d = e[a.crossAxisEnd], u = Ae(i[a.crossAxisStart], i[a.crossAxisEnd]), l = u(c), p = u(d);
    return !l && !p ? !0 : l ? c < s : d > s;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : wp({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const Qi = (e, t) => Pe(wt(e, t));
var Np = (e, t) => {
  const n = e.frame;
  return n ? Qi(t, n.scroll.diff.value) : t;
};
function ea({
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
  const s = n.axis, c = Et(n.axis, t.displaceBy), d = c.value, u = e[s.start], l = e[s.end], f = Xt(t, r).find((h) => {
    const x = h.descriptor.id, E = h.page.borderBox.center[s.line], O = Ve(x, a), N = ea({
      displaced: o,
      id: x
    });
    return O ? N ? l <= E : u < E - d : N ? l <= E + d : u < E;
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
  const a = r.axis, s = Et(r.axis, e.displaceBy), c = s.value, d = t[a.start], u = t[a.end], p = Xt(e, o).find((v) => {
    const h = v.descriptor.id, x = v.page.borderBox, O = x[a.size] / Sp, N = Ve(h, i), w = ea({
      displaced: n.displaced,
      id: h
    });
    return N ? w ? u > x[a.start] + O && u < x[a.end] - O : d > x[a.start] - c + O && d < x[a.end] - c - O : w ? u > x[a.start] + c + O && u < x[a.end] + c - O : d > x[a.start] + O && d < x[a.end] - O;
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
}, ta = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = Qi(t.page.borderBox, e), c = Ep({
    pageBorderBox: s,
    draggable: t,
    droppables: r
  });
  if (!c)
    return Fd;
  const d = r[c], u = He(d.descriptor.id, n), l = Np(d, s);
  return Cp({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: d,
    insideDestination: u,
    afterCritical: a
  }) || Op({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: d,
    insideDestination: u,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, vr = (e, t) => ({
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
  return vr(n, a);
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
  const c = Ji(s, e, t);
  return vr(i, c);
}, lt = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = r || e.viewport, s = n || e.dimensions, c = t || e.current.client.selection, d = Se(c, e.initial.client.selection), u = {
    offset: d,
    selection: c,
    borderBoxCenter: Ne(e.initial.client.borderBoxCenter, d)
  }, l = {
    selection: Ne(u.selection, a.scroll.current),
    borderBoxCenter: Ne(u.borderBoxCenter, a.scroll.current),
    offset: Ne(u.offset, a.scroll.diff.value)
  }, p = {
    client: u,
    page: l
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: s,
      viewport: a,
      current: p
    };
  const f = s.draggables[e.critical.draggable.id], v = o || ta({
    pageOffset: l.offset,
    draggable: f,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), h = kp({
    draggable: f,
    impact: v,
    previousImpact: e.impact,
    draggables: s.draggables,
    droppables: s.droppables
  });
  return {
    ...e,
    current: p,
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
function _p(e, t) {
  return e.map((n) => t[n]);
}
var na = ({
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
}, ra = ({
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
  return gr({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, oa = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, g());
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, c = a[e.critical.draggable.id], d = Ce(r);
  d || (process.env.NODE_ENV !== "production" ? g(!1, "Must be over a destination in SNAP movement mode") : g());
  const u = s[d], l = na({
    impact: r,
    viewport: o,
    destination: u,
    draggables: a
  }), p = ra({
    impact: l,
    draggable: c,
    droppable: u,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return lt({
    impact: l,
    clientSelection: p,
    state: e,
    dimensions: i,
    viewport: o
  });
}, Ap = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), ia = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = Et(t.axis, e.displaceBy), i = He(t.descriptor.id, n), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Expected draggable to be inside home list") : g());
  const s = i.slice(a + 1), c = s.reduce((p, f) => (p[f.descriptor.id] = !0, p), {}), d = {
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
    afterCritical: d
  };
}, Pp = (e, t) => ({
  draggables: e.draggables,
  droppables: vr(e.droppables, t)
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
    const i = o.descriptor.droppableId, a = t[i], c = Tp(a).scroll.diff.value, d = Ne(r, c);
    return Rp({
      draggable: o,
      offset: d,
      initialWindowScroll: n.scroll.initial
    });
  });
}, Mp = ({
  state: e,
  published: t
}) => {
  Nt();
  const n = t.modified.map((E) => {
    const O = e.dimensions.droppables[E.droppableId];
    return dr(O, E.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Fi(n)
  }, o = zi($p({
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
  }, s = Ce(e.impact), c = s ? a.droppables[s] : null, d = a.draggables[e.critical.draggable.id], u = a.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: p
  } = ia({
    draggable: d,
    home: u,
    draggables: i,
    viewport: e.viewport
  }), f = c && c.isCombineEnabled ? e.impact : l, v = ta({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: f,
    viewport: e.viewport,
    afterCritical: p
  });
  Dt();
  const h = {
    ...e,
    phase: "DRAGGING",
    impact: v,
    onLiftImpact: l,
    dimensions: a,
    afterCritical: p,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? h : {
    ...h,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const Wn = (e) => e.movementMode === "SNAP", hn = (e, t, n) => {
  const r = Pp(e.dimensions, t);
  return !Wn(e) || n ? lt({
    state: e,
    dimensions: r
  }) : oa({
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
const vo = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var jp = (e = vo, t) => {
  if (t.type === "FLUSH")
    return {
      ...vo,
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
    }, u = {
      client: d,
      page: {
        selection: Ne(d.selection, o.scroll.initial),
        borderBoxCenter: Ne(d.selection, o.scroll.initial),
        offset: Ne(d.selection, o.scroll.diff.value)
      }
    }, l = Yt(i.droppables).every((h) => !h.isFixedOnPage), {
      impact: p,
      afterCritical: f
    } = ia({
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
      isWindowScrollAllowed: l,
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
      impact: Wn(e) ? e.impact : null
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
    const i = dr(o, r);
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
    const r = Yi(e.viewport, n);
    return Wn(e) ? oa({
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
function ce(e, t) {
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
}), aa = (e) => ({
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
}), hr = () => ({
  type: "FLUSH",
  payload: null
}), Zp = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), br = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), sa = (e) => ({
  type: "DROP",
  payload: e
}), Qp = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ca = () => ({
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
  process.env.NODE_ENV !== "production" && pe(`
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
  if (!ce(o, "LIFT")) {
    r(o);
    return;
  }
  const {
    id: i,
    clientSelection: a,
    movementMode: s
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && n(br({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Unexpected phase to start a drag") : g()), n(hr()), n(Lp({
    draggableId: i,
    movementMode: s
  }));
  const u = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: s === "SNAP"
    }
  }, {
    critical: l,
    dimensions: p,
    viewport: f
  } = e.startPublishing(u);
  tu(l, p), n(Vp({
    critical: l,
    dimensions: p,
    clientSelection: a,
    movementMode: s,
    viewport: f
  }));
}, ru = (e) => () => (t) => (n) => {
  ce(n, "INITIAL_PUBLISH") && e.dragging(), ce(n, "DROP_ANIMATE") && e.dropping(n.payload.completed.result.reason), (ce(n, "FLUSH") || ce(n, "DROP_COMPLETE")) && e.resting(), t(n);
};
const xr = {
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
}, la = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, ze = `${la.outOfTheWay}s ${xr.outOfTheWay}`, dt = {
  fluid: `opacity ${ze}`,
  snap: `transform ${ze}, opacity ${ze}`,
  drop: (e) => {
    const t = `${e}s ${xr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${ze}`,
  placeholder: `height ${ze}, width ${ze}, margin ${ze}`
}, ho = (e) => Le(e, we) ? void 0 : `translate(${e.x}px, ${e.y}px)`, qn = {
  moveTo: ho,
  drop: (e, t) => {
    const n = ho(e);
    if (n)
      return t ? `${n} scale(${vt.scale.drop})` : n;
  }
}, {
  minDropTime: Un,
  maxDropTime: da
} = la, ou = da - Un, bo = 1500, iu = 0.6;
var au = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = ft(e, t);
  if (r <= 0)
    return Un;
  if (r >= bo)
    return da;
  const o = r / bo, i = Un + ou * o, a = n === "CANCEL" ? i * iu : i;
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
  } = n, s = Ce(e), c = s ? a[s] : null, d = a[t.descriptor.droppableId], u = ra({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || d,
    viewport: r
  });
  return Se(u, t.client.borderBox.center);
}, cu = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: na({
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
  if (!ce(r, "DROP")) {
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
  const s = o.critical, c = o.dimensions, d = c.draggables[o.critical.draggable.id], {
    impact: u,
    didDropInsideDroppable: l
  } = cu({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), p = l ? pr(u) : null, f = l ? Kt(u) : null, v = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, h = {
    draggableId: d.descriptor.id,
    type: d.descriptor.type,
    source: v,
    reason: i,
    mode: o.movementMode,
    destination: p,
    combine: f
  }, x = su({
    impact: u,
    draggable: d,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), E = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: h,
    impact: u
  };
  if (!(!Le(o.current.client.offset, x) || !!h.combine)) {
    t(br({
      completed: E
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
    completed: E
  }));
};
var pa = () => ({
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
    e(pa());
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
const uu = (e) => ce(e, "DROP_COMPLETE") || ce(e, "DROP_ANIMATE") || ce(e, "FLUSH"), fu = (e) => {
  const t = pu({
    onWindowScroll: (n) => {
      e.dispatch(Up({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && ce(r, "INITIAL_PUBLISH") && t.start(), t.isActive() && uu(r) && t.stop(), n(r);
  };
};
var mu = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && pe("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && pe(`
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
  const o = (l, p) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : g()), it("onBeforeCapture", () => {
      const f = e().onBeforeCapture;
      f && f({
        draggableId: l,
        mode: p
      });
    });
  }, i = (l, p) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g()), it("onBeforeDragStart", () => {
      const f = e().onBeforeDragStart;
      f && f(_t(l, p));
    });
  }, a = (l, p) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g());
    const f = _t(l, p);
    r = {
      mode: p,
      lastCritical: l,
      lastLocation: f.source,
      lastCombine: null
    }, n.add(() => {
      it("onDragStart", () => xn(e().onDragStart, f, t, Tt.onDragStart));
    });
  }, s = (l, p) => {
    const f = pr(p), v = Kt(p);
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragMove when onDragStart has not been called") : g());
    const h = !bu(l, r.lastCritical);
    h && (r.lastCritical = l);
    const x = !vu(r.lastLocation, f);
    x && (r.lastLocation = f);
    const E = !hu(r.lastCombine, v);
    if (E && (r.lastCombine = v), !h && !x && !E)
      return;
    const O = {
      ..._t(l, r.mode),
      combine: v,
      destination: f
    };
    n.add(() => {
      it("onDragUpdate", () => xn(e().onDragUpdate, O, t, Tt.onDragUpdate));
    });
  }, c = () => {
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Can only flush responders while dragging") : g()), n.flush();
  }, d = (l) => {
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : g()), r = null, it("onDragEnd", () => xn(e().onDragEnd, l, t, Tt.onDragEnd));
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
        ..._t(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      d(l);
    }
  };
}, yu = (e, t) => {
  const n = xu(e, t);
  return (r) => (o) => (i) => {
    if (ce(i, "BEFORE_INITIAL_CAPTURE")) {
      n.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (ce(i, "INITIAL_PUBLISH")) {
      const s = i.payload.critical;
      n.beforeStart(s, i.payload.movementMode), o(i), n.start(s, i.payload.movementMode);
      return;
    }
    if (ce(i, "DROP_COMPLETE")) {
      const s = i.payload.completed.result;
      n.flush(), o(i), n.drop(s);
      return;
    }
    if (o(i), ce(i, "FLUSH")) {
      n.abort();
      return;
    }
    const a = r.getState();
    a.phase === "DRAGGING" && n.update(a.critical, a.impact);
  };
};
const wu = (e) => (t) => (n) => {
  if (!ce(n, "DROP_ANIMATION_FINISHED")) {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot finish a drop animating when no drop is occurring") : g()), e.dispatch(br({
    completed: r.completed
  }));
}, Eu = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((ce(i, "FLUSH") || ce(i, "DROP_COMPLETE") || ce(i, "DROP_ANIMATION_FINISHED")) && r(), o(i), !ce(i, "DROP_ANIMATE"))
      return;
    const a = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(ca());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = _e(window, [a]);
    });
  };
};
var Nu = (e) => () => (t) => (n) => {
  (ce(n, "DROP_COMPLETE") || ce(n, "FLUSH") || ce(n, "DROP_ANIMATE")) && e.stopPublishing(), t(n);
}, Du = (e) => {
  let t = !1;
  return () => (n) => (r) => {
    if (ce(r, "INITIAL_PUBLISH")) {
      t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
      return;
    }
    if (n(r), !!t) {
      if (ce(r, "FLUSH")) {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (ce(r, "DROP_COMPLETE")) {
        t = !1;
        const o = r.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const Ou = (e) => ce(e, "DROP_COMPLETE") || ce(e, "DROP_ANIMATE") || ce(e, "FLUSH");
var Su = (e) => (t) => (n) => (r) => {
  if (Ou(r)) {
    e.stop(), n(r);
    return;
  }
  if (ce(r, "INITIAL_PUBLISH")) {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : g()), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const Cu = (e) => (t) => (n) => {
  if (t(n), !ce(n, "PUBLISH_WHILE_DRAGGING"))
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(sa({
    reason: r.reason
  })));
}, Iu = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : yi;
var ku = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => xi(jp, Iu(Nl(ru(n), Nu(e), nu(e), lu, wu, Eu, Cu, Su(i), fu, Du(t), yu(r, o))));
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
        removals: d,
        modified: u
      } = n, l = Object.keys(c).map((v) => e.draggable.getById(v).getDimension(we)).sort((v, h) => v.descriptor.index - h.descriptor.index), p = Object.keys(u).map((v) => {
        const x = e.droppable.getById(v).callbacks.getScrollWhileDragging();
        return {
          droppableId: v,
          scroll: x
        };
      }), f = {
        additions: l,
        removals: Object.keys(d),
        modified: p
      };
      n = yn(), Dt(), t.publish(f);
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
      r && (cancelAnimationFrame(r), r = null, n = yn());
    }
  };
}
var ua = ({
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
}, fa = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.documentElement") : g()), e;
}, ma = () => {
  const e = fa();
  return ua({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Au = () => {
  const e = pa(), t = ma(), n = e.y, r = e.x, o = fa(), i = o.clientWidth, a = o.clientHeight, s = r + i, c = n + a;
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
  const r = Au(), o = r.scroll.current, i = e.droppable, a = n.droppable.getAllByType(i.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), s = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o)), c = {
    draggables: zi(s),
    droppables: Fi(a)
  };
  return Dt(), {
    dimensions: c,
    critical: e,
    viewport: r
  };
};
function xo(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && pe(`
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
  }, d = (p) => {
    n || (process.env.NODE_ENV !== "production" ? g(!1, "Should only be subscribed when a collection is occurring") : g());
    const f = n.critical.draggable;
    p.type === "ADDITION" && xo(e, f, p.value) && r.add(p.value), p.type === "REMOVAL" && xo(e, f, p.value) && r.remove(p.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (p) => {
      n && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start capturing critical dimensions as there is already a collection") : g());
      const f = e.draggable.getById(p.draggableId), v = e.droppable.getById(f.descriptor.droppableId), h = {
        draggable: f.descriptor,
        droppable: v.descriptor
      }, x = e.subscribe(d);
      return n = {
        critical: h,
        unsubscribe: x
      }, Pu({
        critical: h,
        registry: e,
        scrollOptions: p.scrollOptions
      });
    },
    stopPublishing: c
  };
}, ga = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Tu = (e) => {
  window.scrollBy(e.x, e.y);
};
const $u = ye((e) => Yt(e).filter((t) => !(!t.isEnabled || !t.frame))), Mu = (e, t) => $u(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? g(!1, "Invalid result") : g()), Zi(r.frame.pageMarginBox)(e))) || null;
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
}, va = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? (process.env.NODE_ENV !== "production" && pe(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (n - e) / r;
}, yr = 1, Bu = (e, t, n = () => ht) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return yr;
  const i = 1 - va({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = r.maxPixelScroll * r.ease(i);
  return Math.ceil(a);
}, Vu = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, a = t, s = i, d = Date.now() - a;
  if (d >= i)
    return e;
  if (d < o)
    return yr;
  const u = va({
    startOfRange: o,
    endOfRange: s,
    current: d
  }), l = e * r.ease(u);
  return Math.ceil(l);
}, yo = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = Bu(e, t, o);
  return i === 0 ? 0 : r ? Math.max(Vu(i, n, o), yr) : i;
}, wo = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Lu(e, r, i);
  return t[r.end] < t[r.start] ? yo({
    distanceToEdge: t[r.end],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * yo({
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
const zu = Vi((e) => e === 0 ? 0 : e);
var ha = ({
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
  }, s = wo({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: ur,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = wo({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: qi,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), d = zu({
    x: c,
    y: s
  });
  if (Le(d, we))
    return null;
  const u = Fu({
    container: t,
    subject: n,
    proposedScroll: d
  });
  return u ? Le(u, we) ? null : u : null;
};
const Gu = Vi((e) => e === 0 ? 0 : e > 0 ? 1 : -1), wr = /* @__PURE__ */ (() => {
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
})(), ba = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Gu(n), i = wr({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Er = (e, t) => ba({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Wu = (e, t) => {
  if (!Er(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return wr({
    current: r,
    max: n,
    change: t
  });
}, Nr = (e, t) => {
  const n = e.frame;
  return n ? ba({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, qu = (e, t) => {
  const n = e.frame;
  return !n || !Nr(e, t) ? null : wr({
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
  const a = ha({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Er(e, a) ? a : null;
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
  const s = ha({
    dragStartTime: r,
    container: a.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && Nr(e, s) ? s : null;
}, Eo = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, p = Uu({
      dragStartTime: t,
      viewport: l,
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
  const d = ju({
    center: a,
    destination: Ce(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!d)
    return;
  const u = Hu({
    dragStartTime: t,
    droppable: d,
    subject: c,
    center: a,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  u && o(d.descriptor.id, u);
}, Yu = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => ht
}) => {
  const r = pt(e), o = pt(t);
  let i = null;
  const a = (d) => {
    i || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fluid scroll if not dragging") : g());
    const {
      shouldUseTimeDampening: u,
      dragStartTime: l
    } = i;
    Eo({
      state: d,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: l,
      shouldUseTimeDampening: u,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (d) => {
      Nt(), i && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start auto scrolling when already started") : g());
      const u = Date.now();
      let l = !1;
      const p = () => {
        l = !0;
      };
      Eo({
        state: d,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: p,
        scrollDroppable: p,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: u,
        shouldUseTimeDampening: l
      }, Dt(), l && a(d);
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
    const d = Ne(s.current.client.selection, c);
    e({
      client: d
    });
  }, o = (s, c) => {
    if (!Nr(s, c))
      return c;
    const d = qu(s, c);
    if (!d)
      return t(s.descriptor.id, c), null;
    const u = Se(c, d);
    return t(s.descriptor.id, u), Se(c, u);
  }, i = (s, c, d) => {
    if (!s || !Er(c, d))
      return d;
    const u = Wu(c, d);
    if (!u)
      return n(d), null;
    const l = Se(d, u);
    return n(l), Se(d, l);
  };
  return (s) => {
    const c = s.scrollJumpRequest;
    if (!c)
      return;
    const d = Ce(s.impact);
    d || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot perform a jump scroll when there is no destination") : g());
    const u = o(s.dimensions.droppables[d], c);
    if (!u)
      return;
    const l = s.viewport, p = i(s.isWindowScrollAllowed, l, u);
    p && r(s, p);
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
})(), Hn = (() => {
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
})(), No = {
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
      selector: t(Hn.contextId),
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
const Ie = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Qa : xe, wn = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find the head to append a style to") : g()), e;
}, Do = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function tf(e, t) {
  const n = Z(() => ef(e), [e]), r = J(null), o = J(null), i = L(ye((l) => {
    const p = o.current;
    p || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), p.textContent = l;
  }), []), a = L((l) => {
    const p = r.current;
    p || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), p.textContent = l;
  }, []);
  Ie(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? g(!1, "style elements already mounted") : g());
    const l = Do(t), p = Do(t);
    return r.current = l, o.current = p, l.setAttribute(`${Ze}-always`, e), p.setAttribute(`${Ze}-dynamic`, e), wn().appendChild(l), wn().appendChild(p), a(n.always), i(n.resting), () => {
      const f = (v) => {
        const h = v.current;
        h || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot unmount ref as it is not set") : g()), wn().removeChild(h), v.current = null;
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
  return Z(() => ({
    dragging: s,
    dropping: c,
    resting: d
  }), [s, c, d]);
}
function xa(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var ya = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Ot(e) {
  return e instanceof ya(e).HTMLElement;
}
function wa(e, t) {
  const n = `[${Qe.contextId}="${e}"]`, r = xa(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && pe(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(Qe.draggableId) === t);
  return o ? Ot(o) ? o : (process.env.NODE_ENV !== "production" && pe("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && pe(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function nf(e) {
  const t = J({}), n = J(null), r = J(null), o = J(!1), i = L(function(p, f) {
    const v = {
      id: p,
      focus: f
    };
    return t.current[p] = v, function() {
      const x = t.current;
      x[p] !== v && delete x[p];
    };
  }, []), a = L(function(p) {
    const f = wa(e, p);
    f && f !== document.activeElement && f.focus();
  }, [e]), s = L(function(p, f) {
    n.current === p && (n.current = f);
  }, []), c = L(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const p = n.current;
      p && a(p);
    }));
  }, [a]), d = L(function(p) {
    n.current = null;
    const f = document.activeElement;
    f && f.getAttribute(Qe.draggableId) === p && (n.current = p);
  }, []);
  return Ie(() => (o.current = !0, function() {
    o.current = !1;
    const p = r.current;
    p && cancelAnimationFrame(p);
  }), []), Z(() => ({
    register: i,
    tryRecordFocus: d,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, d, c, s]);
}
function rf() {
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
    t.length && t.forEach((p) => p(l));
  }
  function o(l) {
    return e.draggables[l] || null;
  }
  function i(l) {
    const p = o(l);
    return p || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find draggable entry with id [${l}]`) : g()), p;
  }
  const a = {
    register: (l) => {
      e.draggables[l.descriptor.id] = l, r({
        type: "ADDITION",
        value: l
      });
    },
    update: (l, p) => {
      const f = e.draggables[p.descriptor.id];
      f && f.uniqueId === l.uniqueId && (delete e.draggables[p.descriptor.id], e.draggables[l.descriptor.id] = l);
    },
    unregister: (l) => {
      const p = l.descriptor.id, f = o(p);
      f && l.uniqueId === f.uniqueId && (delete e.draggables[p], e.droppables[l.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: l
      }));
    },
    getById: i,
    findById: o,
    exists: (l) => !!o(l),
    getAllByType: (l) => Object.values(e.draggables).filter((p) => p.descriptor.type === l)
  };
  function s(l) {
    return e.droppables[l] || null;
  }
  function c(l) {
    const p = s(l);
    return p || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find droppable entry with id [${l}]`) : g()), p;
  }
  const d = {
    register: (l) => {
      e.droppables[l.descriptor.id] = l;
    },
    unregister: (l) => {
      const p = s(l.descriptor.id);
      p && l.uniqueId === p.uniqueId && delete e.droppables[l.descriptor.id];
    },
    getById: c,
    findById: s,
    exists: (l) => !!s(l),
    getAllByType: (l) => Object.values(e.droppables).filter((p) => p.descriptor.type === l)
  };
  function u() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: a,
    droppable: d,
    subscribe: n,
    clean: u
  };
}
function of() {
  const e = Z(rf, []);
  return xe(() => function() {
    e.clean();
  }, [e]), e;
}
var Dr = fe.createContext(null), bt = () => {
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
    process.env.NODE_ENV !== "production" && pe(`
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
function Or(e, t = lf) {
  const n = fe.useId();
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
  const n = Or("hidden-text", {
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
var Zt = fe.createContext(null), uf = {
  react: "^18.0.0 || ^19.0.0"
};
const ff = /(\d+)\.(\d+)\.(\d+)/, Oo = (e) => {
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
  const n = Oo(e), r = Oo(t);
  mf(n, r) || process.env.NODE_ENV !== "production" && pe(`
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
    process.env.NODE_ENV !== "production" && pe(`
      No <!doctype html> found.

      ${En}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && pe(`
      Unexpected <!doctype> found: (${t.name})

      ${En}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && pe(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${En}
    `);
};
function Sr(e) {
  process.env.NODE_ENV !== "production" && e();
}
function St(e, t) {
  Sr(() => {
    xe(() => {
      try {
        e();
      } catch (n) {
        zn(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function hf() {
  St(() => {
    gf(uf.react, fe.version), vf(document);
  }, []);
}
function Cr(e) {
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
const xf = 9, yf = 13, Ir = 27, Ea = 32, wf = 33, Ef = 34, Nf = 35, Df = 36, Of = 37, Sf = 38, Cf = 39, If = 40, kf = {
  [yf]: !0,
  [xf]: !0
};
var Na = (e) => {
  kf[e.keyCode] && e.preventDefault();
};
const Qt = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})(), Da = 0, So = 5;
function _f(e, t) {
  return Math.abs(t.x - e.x) >= So || Math.abs(t.y - e.y) >= So;
}
const Co = {
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
      if (i !== Da)
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
      const u = d.point;
      if (!_f(u, c))
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
      if (o.keyCode === Ir) {
        o.preventDefault(), e();
        return;
      }
      Na(o);
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
  const t = J(Co), n = J(je), r = Z(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== Da || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
        return;
      const p = e.findClosestDraggableId(l);
      if (!p)
        return;
      const f = e.tryGetLock(p, a, {
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
  }), [e]), o = Z(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (u) => {
      if (u.defaultPrevented)
        return;
      const l = e.findClosestDraggableId(u);
      if (!l)
        return;
      const p = e.findOptionsForDraggable(l);
      p && (p.shouldRespectForcePress || e.canGetLock(l) && u.preventDefault());
    }
  }), [e]), i = L(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    n.current = _e(window, [o, r], l);
  }, [o, r]), a = L(() => {
    t.current.type !== "IDLE" && (t.current = Co, n.current(), i());
  }, [i]), s = L(() => {
    const u = t.current;
    a(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [a]), c = L(function() {
    const l = {
      capture: !0,
      passive: !1
    }, p = Af({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (f) => {
        t.current = f;
      }
    });
    n.current = _e(window, p, l);
  }, [s, a]), d = L(function(l, p) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g()), t.current = {
      type: "PENDING",
      point: p,
      actions: l
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
      if (o.keyCode === Ir) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Ea) {
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
      Na(o);
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
      if (i.defaultPrevented || i.keyCode !== Ea)
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
      const d = s.snapLift();
      t.current();
      function u() {
        c || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop capturing a keyboard drag when not capturing") : g()), c = !1, t.current(), r();
      }
      t.current = _e(window, $f(d, u), {
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
      n.keyCode === Ir && n.preventDefault(), e();
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
      const h = e.tryGetLock(v, s, {
        sourceEvent: f
      });
      if (!h)
        return;
      const x = f.touches[0], {
        clientX: E,
        clientY: O
      } = x, N = {
        x: E,
        y: O
      };
      n.current(), l(h, N);
    }
  }), [e]), a = L(function() {
    const f = {
      capture: !0,
      passive: !1
    };
    n.current = _e(window, [i], f);
  }, [i]), s = L(() => {
    const p = t.current;
    p.type !== "IDLE" && (p.type === "PENDING" && clearTimeout(p.longPressTimerId), o(Nn), n.current(), a());
  }, [a, o]), c = L(() => {
    const p = t.current;
    s(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [s]), d = L(function() {
    const f = {
      capture: !0,
      passive: !1
    }, v = {
      cancel: c,
      completed: s,
      getPhase: r
    }, h = _e(window, Vf(v), f), x = _e(window, Bf(v), f);
    n.current = function() {
      h(), x();
    };
  }, [c, r, s]), u = L(function() {
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
    const h = setTimeout(u, jf);
    o({
      type: "PENDING",
      point: v,
      actions: f,
      longPressTimerId: h
    }), d();
  }, [d, r, o, u]);
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
  Sr(() => {
    const t = Cr(e);
    St(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot change the amount of sensor hooks after mounting") : g(!1));
    });
  });
}
const Gf = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Oa(e, t) {
  if (t == null)
    return !1;
  if (Gf.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Oa(e, t.parentElement);
}
function Wf(e, t) {
  const n = t.target;
  return Ot(n) ? Oa(e, n) : !1;
}
var qf = (e) => Pe(e.getBoundingClientRect()).center;
function Uf(e) {
  return e instanceof ya(e).Element;
}
const Hf = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function Sa(e, t) {
  return e == null ? null : e[Hf](t) ? e : Sa(e.parentElement, t);
}
function Yf(e, t) {
  return e.closest ? e.closest(t) : Sa(e, t);
}
function Kf(e) {
  return `[${Qe.contextId}="${e}"]`;
}
function Xf(e, t) {
  const n = t.target;
  if (!Uf(n))
    return process.env.NODE_ENV !== "production" && pe("event.target must be a Element"), null;
  const r = Kf(e), o = Yf(n, r);
  return o ? Ot(o) ? o : (process.env.NODE_ENV !== "production" && pe("drag handle must be a HTMLElement"), null) : null;
}
function Jf(e, t) {
  const n = Xf(e, t);
  return n ? n.getAttribute(Qe.draggableId) : null;
}
function Zf(e, t) {
  const n = `[${Hn.contextId}="${e}"]`, o = xa(document, n).find((i) => i.getAttribute(Hn.id) === t);
  return o ? Ot(o) ? o : (process.env.NODE_ENV !== "production" && pe("Draggable element is not a HTMLElement"), null) : null;
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
  return n() ? e !== t ? (r && process.env.NODE_ENV !== "production" && pe(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (r && process.env.NODE_ENV !== "production" && pe(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Ca({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !ga(t.getState(), r)) : (process.env.NODE_ENV !== "production" && pe(`Unable to find draggable with id: ${r}`), !1);
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
  if (!Ca({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), d = Zf(t, c.descriptor.id);
  if (!d)
    return process.env.NODE_ENV !== "production" && pe(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && Wf(d, a))
    return null;
  const u = e.claim(i || je);
  let l = "PRE_DRAG";
  function p() {
    return c.options.shouldRespectForcePress;
  }
  function f() {
    return e.isActive(u);
  }
  function v(b, y) {
    At({
      expected: b,
      phase: l,
      isLockActive: f,
      shouldWarn: !0
    }) && n.dispatch(y());
  }
  const h = v.bind(null, "DRAGGING");
  function x(b) {
    function y() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (y(), process.env.NODE_ENV !== "production" ? g(!1, `Cannot lift in phase ${l}`) : g()), n.dispatch(Bp(b.liftActionArgs)), l = "DRAGGING";
    function _(M, Y = {
      shouldBlockNextClick: !1
    }) {
      if (b.cleanup(), Y.shouldBlockNextClick) {
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
      y(), n.dispatch(sa({
        reason: M
      }));
    }
    return {
      isActive: () => At({
        expected: "DRAGGING",
        phase: l,
        isLockActive: f,
        shouldWarn: !1
      }),
      shouldRespectForcePress: p,
      drop: (M) => _("DROP", M),
      cancel: (M) => _("CANCEL", M),
      ...b.actions
    };
  }
  function E(b) {
    const y = pt((M) => {
      h(() => aa({
        client: M
      }));
    });
    return {
      ...x({
        liftActionArgs: {
          id: o,
          clientSelection: b,
          movementMode: "FLUID"
        },
        cleanup: () => y.cancel(),
        actions: {
          move: y
        }
      }),
      move: y
    };
  }
  function O() {
    const b = {
      moveUp: () => h(Yp),
      moveRight: () => h(Xp),
      moveDown: () => h(Kp),
      moveLeft: () => h(Jp)
    };
    return x({
      liftActionArgs: {
        id: o,
        clientSelection: qf(d),
        movementMode: "SNAP"
      },
      cleanup: je,
      actions: b
    });
  }
  function N() {
    At({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: f,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => At({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: f,
      shouldWarn: !1
    }),
    shouldRespectForcePress: p,
    fluidLift: E,
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
  const i = [...o ? tm : [], ...r || []], a = be(() => bf())[0], s = L(function(x, E) {
    xt(x) && !xt(E) && a.tryAbandon();
  }, [a]);
  Ie(function() {
    let x = t.getState();
    return t.subscribe(() => {
      const O = t.getState();
      s(x, O), x = O;
    });
  }, [a, t, s]), Ie(() => a.tryAbandon, [a.tryAbandon]);
  const c = L((h) => Ca({
    lockAPI: a,
    registry: n,
    store: t,
    draggableId: h
  }), [a, n, t]), d = L((h, x, E) => em({
    lockAPI: a,
    registry: n,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: x || null,
    sourceEvent: E && E.sourceEvent ? E.sourceEvent : null
  }), [e, a, n, t]), u = L((h) => Jf(e, h), [e]), l = L((h) => {
    const x = n.draggable.findById(h);
    return x ? x.options : null;
  }, [n.draggable]), p = L(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(hr()));
  }, [a, t]), f = L(() => a.isClaimed(), [a]), v = Z(() => ({
    canGetLock: c,
    tryGetLock: d,
    findClosestDraggableId: u,
    findOptionsForDraggable: l,
    tryReleaseLock: p,
    isLockClaimed: f
  }), [c, d, u, l, p, f]);
  zf(i);
  for (let h = 0; h < i.length; h++)
    i[h](v);
}
const rm = (e) => ({
  onBeforeCapture: (t) => {
    ri(() => {
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
  const s = Cr(e), c = L(() => rm(s.current), [s]), d = L(() => om(s.current), [s]), u = cf(t), l = pf({
    contextId: t,
    text: i
  }), p = tf(t, o), f = L((j) => {
    st(a).dispatch(j);
  }, []), v = Z(() => Hr({
    publishWhileDragging: Fp,
    updateDroppableScroll: Gp,
    updateDroppableIsEnabled: Wp,
    updateDroppableIsCombineEnabled: qp,
    collectionStarting: zp
  }, f), [f]), h = of(), x = Z(() => Ru(h, v), [h, v]), E = Z(() => Xu({
    scrollWindow: Tu,
    scrollDroppable: x.scrollDroppable,
    getAutoScrollerOptions: d,
    ...Hr({
      move: aa
    }, f)
  }), [x.scrollDroppable, f, d]), O = nf(t), N = Z(() => ku({
    announce: u,
    autoScroller: E,
    dimensionMarshal: x,
    focusMarshal: O,
    getResponders: c,
    styleMarshal: p
  }), [u, E, x, O, c, p]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== N && process.env.NODE_ENV !== "production" && pe("unexpected store change"), a.current = N;
  const w = L(() => {
    const j = st(a);
    j.getState().phase !== "IDLE" && j.dispatch(hr());
  }, []), b = L(() => {
    const j = st(a).getState();
    return j.phase === "DROP_ANIMATING" ? !0 : j.phase === "IDLE" ? !1 : j.isDragging;
  }, []), y = Z(() => ({
    isDragging: b,
    tryAbort: w
  }), [b, w]);
  n(y);
  const _ = L((j) => ga(st(a).getState(), j), []), M = L(() => We(st(a).getState()), []), Y = Z(() => ({
    marshal: x,
    focus: O,
    contextId: t,
    canLift: _,
    isMovementAllowed: M,
    dragHandleUsageInstructionsId: l,
    registry: h
  }), [t, x, l, O, _, M, h]);
  return nm({
    contextId: t,
    store: N,
    registry: h,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), xe(() => w, [w]), fe.createElement(Zt.Provider, {
    value: Y
  }, fe.createElement(vd, {
    context: Dr,
    store: N
  }, e.children));
}
function am() {
  return fe.useId();
}
function kr(e) {
  const t = am(), n = e.dragHandleUsageInstructions || Tt.dragHandleUsageInstructions;
  return fe.createElement(Id, null, (r) => fe.createElement(im, {
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
const Io = {
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
  } = e, a = !!o, s = lm(e), c = !!i, d = c ? qn.drop(r, a) : qn.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: sm(s, i),
    transform: d,
    opacity: cm(a, c),
    zIndex: c ? Io.dropAnimating : Io.dragging,
    pointerEvents: "none"
  };
}
function pm(e) {
  return {
    transform: qn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function um(e) {
  return e.type === "DRAGGING" ? dm(e) : pm(e);
}
function fm(e, t, n = we) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Ti(o, r), a = Lt(i, n), s = {
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
  const t = Or("draggable"), {
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
  }), [i, s, a]), d = L((f) => {
    const v = o();
    return v || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get dimension when no ref is set") : g()), fm(n, v, f);
  }, [n, o]), u = Z(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: d
  }), [n, d, c, t]), l = J(u), p = J(!0);
  Ie(() => (r.draggable.register(l.current), () => r.draggable.unregister(l.current)), [r.draggable]), Ie(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const f = l.current;
    l.current = u, r.draggable.update(u, f);
  }, [u, r.draggable]);
}
var _r = fe.createContext(null);
function Ia(e) {
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
      Provided: [type: ${typeof o}] (value: ${o})`) : g(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? g(!1, `${r(o)} requires an integer index prop`) : g(!1)), e.mapped.type !== "DRAGGING" && (Ia(n()), e.isEnabled && (wa(t, o) || (process.env.NODE_ENV !== "production" ? g(!1, `${r(o)} Unable to find drag handle`) : g(!1))));
  });
}
function vm(e) {
  Sr(() => {
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
  const t = J(null), n = L((y = null) => {
    t.current = y;
  }, []), r = L(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = zt(Zt), {
    type: s,
    droppableId: c
  } = zt(_r), d = Z(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: u,
    draggableId: l,
    isEnabled: p,
    shouldRespectForcePress: f,
    canDragInteractiveElements: v,
    isClone: h,
    mapped: x,
    dropAnimationFinished: E
  } = e;
  if (gm(e, o, r), vm(h), !h) {
    const y = Z(() => ({
      descriptor: d,
      registry: a,
      getDraggableRef: r,
      canDragInteractiveElements: v,
      shouldRespectForcePress: f,
      isEnabled: p
    }), [d, a, r, v, f, p]);
    mm(y);
  }
  const O = Z(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: hm
  } : null, [o, i, l, p]), N = L((y) => {
    x.type === "DRAGGING" && x.dropping && y.propertyName === "transform" && ri(E);
  }, [E, x]), w = Z(() => {
    const y = um(x), _ = x.type === "DRAGGING" && x.dropping ? N : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: y,
        onTransitionEnd: _
      },
      dragHandleProps: O
    };
  }, [o, O, l, x, N, n]), b = Z(() => ({
    draggableId: d.id,
    type: d.type,
    source: {
      index: d.index,
      droppableId: d.droppableId
    }
  }), [d.droppableId, d.id, d.index, d.type]);
  return fe.createElement(fe.Fragment, null, u(w, x.snapshot, b));
};
var ka = (e, t) => e === t, _a = (e) => {
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
  })), n = ye((o, i, a, s, c = null, d = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: d,
      mode: i,
      offset: o,
      dimension: a,
      forceShouldAnimate: u,
      snapshot: t(i, s, c, d, null)
    }
  }));
  return (o, i) => {
    if (xt(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = Ce(o.impact), d = ym(o.impact), u = o.forceShouldAnimate;
      return n(e(a.x, a.y), o.movementMode, s, i.isClone, c, d, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], d = a.result, u = d.mode, l = _a(d), p = xm(d), v = {
        duration: o.dropDuration,
        curve: xr.drop,
        moveTo: o.newHomeClientOffset,
        opacity: p ? vt.opacity.drop : null,
        scale: p ? vt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: v,
          draggingOver: l,
          combineWith: p,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, s, l, p, v)
        }
      };
    }
    return null;
  };
}
function Aa(e = null) {
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
    snapshot: Aa(null)
  }
};
function Nm() {
  const e = ye((a, s) => ({
    x: a,
    y: s
  })), t = ye(Aa), n = ye((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), r = (a) => a ? n(we, a, !0) : null, o = (a, s, c, d) => {
    const u = c.displaced.visible[a], l = !!(d.inVirtualList && d.effected[a]), p = Kt(c), f = p && p.draggableId === a ? s : null;
    if (!u) {
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
    return n(h, f, u.shouldAnimate);
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
  dropAnimationFinished: ca
}, Sm = Ri(Dm, Om, null, {
  context: Dr,
  areStatePropsEqual: ka
})(bm);
function Pa(e) {
  return zt(_r).isUsingCloneFor === e.draggableId && !e.isClone ? null : fe.createElement(Sm, e);
}
function Ar(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return fe.createElement(Pa, Bt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const Pr = (e) => (t) => e === t, Cm = Pr("scroll"), Im = Pr("auto"), km = Pr("visible"), ko = (e, t) => t(e.overflowX) || t(e.overflowY), _m = (e, t) => t(e.overflowX) && t(e.overflowY), Ra = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return ko(n, Cm) || ko(n, Im);
}, Am = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = bt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, g()), !Ra(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return _m(r, km) || process.env.NODE_ENV !== "production" && pe(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Rr = (e) => e == null ? null : e === document.body ? Am() ? e : null : e === document.documentElement ? null : Ra(e) ? e : Rr(e.parentElement);
var Pm = (e) => {
  !e || !Rr(e.parentElement) || process.env.NODE_ENV !== "production" && pe(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Yn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Ta = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Ta(e.parentElement) : !1;
var Rm = (e) => {
  const t = Rr(e), n = Ta(e);
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
      scrollSize: p,
      client: f
    } = s, v = ua({
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
        max: v,
        diff: {
          value: we,
          displacement: we
        }
      }
    };
  })(), d = o === "vertical" ? ur : qi, u = Je({
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
    subject: u
  };
};
const $m = (e, t) => {
  const n = $i(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, a = o + t.scrollWidth, c = cr({
    top: r,
    right: a,
    bottom: i,
    left: o
  }, n.border);
  return lr({
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
  const c = n.closestScrollable, d = $m(e, c), u = Lt(d, r), l = (() => {
    if (!c)
      return null;
    const f = $i(c), v = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: f,
      page: Lt(f, r),
      scroll: Yn(c),
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
    client: d,
    page: u,
    closest: l
  });
};
const jm = {
  passive: !1
}, Lm = {
  passive: !0
};
var _o = (e) => e.shouldPublishImmediately ? jm : Lm;
const Pt = (e) => e && e.env.closestScrollable || null;
function Bm(e) {
  const t = J(null), n = zt(Zt), r = Or("droppable"), {
    registry: o,
    marshal: i
  } = n, a = Cr(e), s = Z(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = J(s), d = Z(() => ye((w, b) => {
    t.current || (process.env.NODE_ENV !== "production" ? g(!1, "Can only update scroll when dragging") : g());
    const y = {
      x: w,
      y: b
    };
    i.updateDroppableScroll(s.id, y);
  }), [s.id, i]), u = L(() => {
    const w = t.current;
    return !w || !w.env.closestScrollable ? we : Yn(w.env.closestScrollable);
  }, []), l = L(() => {
    const w = u();
    d(w.x, w.y);
  }, [u, d]), p = Z(() => pt(l), [l]), f = L(() => {
    const w = t.current, b = Pt(w);
    if (w && b || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find scroll options while scrolling") : g()), w.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    p();
  }, [p, l]), v = L((w, b) => {
    t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect a droppable while a drag is occurring") : g());
    const y = a.current, _ = y.getDroppableRef();
    _ || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect without a droppable ref") : g());
    const M = Rm(_), Y = {
      ref: _,
      descriptor: s,
      env: M,
      scrollOptions: b
    };
    t.current = Y;
    const j = Mm({
      ref: _,
      descriptor: s,
      env: M,
      windowScroll: w,
      direction: y.direction,
      isDropDisabled: y.isDropDisabled,
      isCombineEnabled: y.isCombineEnabled,
      shouldClipSubject: !y.ignoreContainerClipping
    }), X = M.closestScrollable;
    return X && (X.setAttribute(No.contextId, n.contextId), X.addEventListener("scroll", f, _o(Y.scrollOptions)), process.env.NODE_ENV !== "production" && Pm(X)), j;
  }, [n.contextId, s, f, a]), h = L(() => {
    const w = t.current, b = Pt(w);
    return w && b || (process.env.NODE_ENV !== "production" ? g(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : g()), Yn(b);
  }, []), x = L(() => {
    const w = t.current;
    w || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop drag when no active drag") : g());
    const b = Pt(w);
    t.current = null, b && (p.cancel(), b.removeAttribute(No.contextId), b.removeEventListener("scroll", f, _o(w.scrollOptions)));
  }, [f, p]), E = L((w) => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll when there is no drag") : g());
    const y = Pt(b);
    y || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll a droppable with no closest scrollable") : g()), y.scrollTop += w.y, y.scrollLeft += w.x;
  }, []), O = Z(() => ({
    getDimensionAndWatchScroll: v,
    getScrollWhileDragging: h,
    dragStopped: x,
    scroll: E
  }), [x, v, h, E]), N = Z(() => ({
    uniqueId: r,
    descriptor: s,
    callbacks: O
  }), [O, s, r]);
  Ie(() => (c.current = N.descriptor, o.droppable.register(N), () => {
    t.current && (process.env.NODE_ENV !== "production" && pe("Unsupported: changing the droppableId or type of a Droppable during a drag"), x()), o.droppable.unregister(N);
  }), [O, s, x, N, i, o.droppable]), Ie(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ie(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Dn() {
}
const Ao = {
  width: 0,
  height: 0,
  margin: $d
}, Vm = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? Ao : {
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
  const d = L((l) => {
    l.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), u = Fm({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return fe.createElement(e.placeholder.tagName, {
    style: u,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: d,
    ref: e.innerRef
  });
};
var Gm = fe.memo(zm);
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
  Ia(t());
}], qm = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && pe(`
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
class Ym extends fe.PureComponent {
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
    mode: d,
    direction: u,
    ignoreContainerClipping: l,
    isDropDisabled: p,
    isCombineEnabled: f,
    snapshot: v,
    useClone: h,
    updateViewportMaxScroll: x,
    getContainerForClone: E
  } = e, O = L(() => o.current, []), N = L((S = null) => {
    o.current = S;
  }, []), w = L(() => i.current, []), b = L((S = null) => {
    i.current = S;
  }, []);
  Hm({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: w
  });
  const y = L(() => {
    r() && x({
      maxScroll: ma()
    });
  }, [r, x]);
  Bm({
    droppableId: s,
    type: c,
    mode: d,
    direction: u,
    isDropDisabled: p,
    isCombineEnabled: f,
    ignoreContainerClipping: l,
    getDroppableRef: O
  });
  const _ = Z(() => fe.createElement(Ym, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: S,
    data: V,
    animate: $
  }) => fe.createElement(Gm, {
    placeholder: V,
    onClose: S,
    innerRef: b,
    animate: $,
    contextId: n,
    onTransitionEnd: y
  })), [n, y, e.placeholder, e.shouldAnimatePlaceholder, b]), M = Z(() => ({
    innerRef: N,
    placeholder: _,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": n
    }
  }), [n, s, _, N]), Y = h ? h.dragging.draggableId : null, j = Z(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: Y
  }), [s, Y, c]);
  function X() {
    if (!h)
      return null;
    const {
      dragging: S,
      render: V
    } = h, $ = fe.createElement(Pa, {
      draggableId: S.draggableId,
      index: S.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (K, ne) => V(K, ne, S));
    return rs.createPortal($, E());
  }
  return fe.createElement(_r.Provider, {
    value: j
  }, a(M, v), X());
};
function Xm() {
  return document.body || (process.env.NODE_ENV !== "production" ? g(!1, "document.body is not ready") : g()), document.body;
}
const Po = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Xm
}, $a = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Po)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Po[n]
    });
  return t;
}, Cn = (e, t) => e === t.droppable.type, Ro = (e, t) => t.draggables[e.draggable.id], Jm = () => {
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
  })), r = ye((i, a, s, c, d, u) => {
    const l = d.descriptor.id;
    if (d.descriptor.droppableId === i) {
      const v = u ? {
        render: u,
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
    const s = $a(a), c = s.droppableId, d = s.type, u = !s.isDropDisabled, l = s.renderClone;
    if (xt(i)) {
      const p = i.critical;
      if (!Cn(d, p))
        return t;
      const f = Ro(p, i.dimensions), v = Ce(i.impact) === c;
      return r(c, u, v, v, f, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const p = i.completed;
      if (!Cn(d, p.critical))
        return t;
      const f = Ro(p.critical, i.dimensions);
      return r(c, u, _a(p.result) === c, Ce(p.impact) === c, f, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const p = i.completed;
      if (!Cn(d, p.critical))
        return t;
      const f = Ce(p.impact) === c, v = !!(p.impact.at && p.impact.at.type === "COMBINE"), h = p.critical.droppable.id === c;
      return f ? v ? e : t : h ? e : t;
    }
    return t;
  };
}, Zm = {
  updateViewportMaxScroll: Hp
}, Tr = Ri(Jm, Zm, (e, t, n) => ({
  ...$a(n),
  ...e,
  ...t
}), {
  context: Dr,
  areStatePropsEqual: ka
})(Km);
function lv({
  items: e,
  onReorder: t,
  className: n,
  itemClassName: r,
  droppableId: o = "sortable-list"
}) {
  return /* @__PURE__ */ m(kr, { onDragEnd: (a) => {
    if (!a.destination) return;
    const s = Array.from(e), [c] = s.splice(a.source.index, 1);
    s.splice(a.destination.index, 0, c), t(s);
  }, children: /* @__PURE__ */ m(Tr, { droppableId: o, children: (a) => /* @__PURE__ */ C(
    "ul",
    {
      ref: a.innerRef,
      ...a.droppableProps,
      className: D("space-y-2", n),
      children: [
        e.map((s, c) => /* @__PURE__ */ m(Ar, { draggableId: s.id, index: c, children: (d, u) => /* @__PURE__ */ C(
          "li",
          {
            ref: d.innerRef,
            ...d.draggableProps,
            className: D(
              "group relative flex items-center gap-3 p-4 bg-white border border-neutral-200 rounded-xl",
              "transition-all duration-200 ease-out",
              "hover:shadow-md hover:border-primary/40",
              u.isDragging && "shadow-xl ring-2 ring-primary/30 rotate-1 scale-[1.02]",
              r
            ),
            style: {
              ...d.draggableProps.style
            },
            children: [
              /* @__PURE__ */ m(
                "div",
                {
                  className: D(
                    "absolute top-0 left-0 right-0 h-1 rounded-t-xl transition-opacity duration-200",
                    "bg-gradient-to-r from-accent via-primary to-primary",
                    u.isDragging ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  )
                }
              ),
              /* @__PURE__ */ m(
                "div",
                {
                  ...d.dragHandleProps,
                  className: D(
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
                  className: D(
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
var Kn = { exports: {} }, Rt = { exports: {} }, ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function Qm() {
  if (To) return ae;
  To = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function N(b) {
    if (typeof b == "object" && b !== null) {
      var y = b.$$typeof;
      switch (y) {
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
                case u:
                case v:
                case f:
                case a:
                  return b;
                default:
                  return y;
              }
          }
        case n:
          return y;
      }
    }
  }
  function w(b) {
    return N(b) === d;
  }
  return ae.AsyncMode = c, ae.ConcurrentMode = d, ae.ContextConsumer = s, ae.ContextProvider = a, ae.Element = t, ae.ForwardRef = u, ae.Fragment = r, ae.Lazy = v, ae.Memo = f, ae.Portal = n, ae.Profiler = i, ae.StrictMode = o, ae.Suspense = l, ae.isAsyncMode = function(b) {
    return w(b) || N(b) === c;
  }, ae.isConcurrentMode = w, ae.isContextConsumer = function(b) {
    return N(b) === s;
  }, ae.isContextProvider = function(b) {
    return N(b) === a;
  }, ae.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, ae.isForwardRef = function(b) {
    return N(b) === u;
  }, ae.isFragment = function(b) {
    return N(b) === r;
  }, ae.isLazy = function(b) {
    return N(b) === v;
  }, ae.isMemo = function(b) {
    return N(b) === f;
  }, ae.isPortal = function(b) {
    return N(b) === n;
  }, ae.isProfiler = function(b) {
    return N(b) === i;
  }, ae.isStrictMode = function(b) {
    return N(b) === o;
  }, ae.isSuspense = function(b) {
    return N(b) === l;
  }, ae.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === d || b === i || b === o || b === l || b === p || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === f || b.$$typeof === a || b.$$typeof === s || b.$$typeof === u || b.$$typeof === x || b.$$typeof === E || b.$$typeof === O || b.$$typeof === h);
  }, ae.typeOf = N, ae;
}
var se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $o;
function eg() {
  return $o || ($o = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function N(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === r || k === d || k === i || k === o || k === l || k === p || typeof k == "object" && k !== null && (k.$$typeof === v || k.$$typeof === f || k.$$typeof === a || k.$$typeof === s || k.$$typeof === u || k.$$typeof === x || k.$$typeof === E || k.$$typeof === O || k.$$typeof === h);
    }
    function w(k) {
      if (typeof k == "object" && k !== null) {
        var ge = k.$$typeof;
        switch (ge) {
          case t:
            var Fe = k.type;
            switch (Fe) {
              case c:
              case d:
              case r:
              case i:
              case o:
              case l:
                return Fe;
              default:
                var ot = Fe && Fe.$$typeof;
                switch (ot) {
                  case s:
                  case u:
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
    var b = c, y = d, _ = s, M = a, Y = t, j = u, X = r, S = v, V = f, $ = n, K = i, ne = o, me = l, oe = !1;
    function Q(k) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(k) || w(k) === c;
    }
    function I(k) {
      return w(k) === d;
    }
    function R(k) {
      return w(k) === s;
    }
    function W(k) {
      return w(k) === a;
    }
    function q(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function F(k) {
      return w(k) === u;
    }
    function H(k) {
      return w(k) === r;
    }
    function U(k) {
      return w(k) === v;
    }
    function G(k) {
      return w(k) === f;
    }
    function A(k) {
      return w(k) === n;
    }
    function P(k) {
      return w(k) === i;
    }
    function B(k) {
      return w(k) === o;
    }
    function ie(k) {
      return w(k) === l;
    }
    se.AsyncMode = b, se.ConcurrentMode = y, se.ContextConsumer = _, se.ContextProvider = M, se.Element = Y, se.ForwardRef = j, se.Fragment = X, se.Lazy = S, se.Memo = V, se.Portal = $, se.Profiler = K, se.StrictMode = ne, se.Suspense = me, se.isAsyncMode = Q, se.isConcurrentMode = I, se.isContextConsumer = R, se.isContextProvider = W, se.isElement = q, se.isForwardRef = F, se.isFragment = H, se.isLazy = U, se.isMemo = G, se.isPortal = A, se.isProfiler = P, se.isStrictMode = B, se.isSuspense = ie, se.isValidElementType = N, se.typeOf = w;
  }()), se;
}
var Mo;
function Ma() {
  return Mo || (Mo = 1, process.env.NODE_ENV === "production" ? Rt.exports = Qm() : Rt.exports = eg()), Rt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var In, jo;
function tg() {
  if (jo) return In;
  jo = 1;
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
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        d[u] = u;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return In = o() ? Object.assign : function(i, a) {
    for (var s, c = r(i), d, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var l in s)
        t.call(s, l) && (c[l] = s[l]);
      if (e) {
        d = e(s);
        for (var p = 0; p < d.length; p++)
          n.call(s, d[p]) && (c[d[p]] = s[d[p]]);
      }
    }
    return c;
  }, In;
}
var kn, Lo;
function $r() {
  if (Lo) return kn;
  Lo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kn = e, kn;
}
var _n, Bo;
function ja() {
  return Bo || (Bo = 1, _n = Function.call.bind(Object.prototype.hasOwnProperty)), _n;
}
var An, Vo;
function ng() {
  if (Vo) return An;
  Vo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = $r(), n = {}, r = ja();
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
      for (var u in i)
        if (r(i, u)) {
          var l;
          try {
            if (typeof i[u] != "function") {
              var p = Error(
                (c || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            l = i[u](a, u, c, s, null, t);
          } catch (v) {
            l = v;
          }
          if (l && !(l instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
  }, An = o, An;
}
var Pn, Fo;
function rg() {
  if (Fo) return Pn;
  Fo = 1;
  var e = Ma(), t = tg(), n = $r(), r = ja(), o = ng(), i = function() {
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
    var d = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function l(I) {
      var R = I && (d && I[d] || I[u]);
      if (typeof R == "function")
        return R;
    }
    var p = "<<anonymous>>", f = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: O(),
      arrayOf: N,
      element: w(),
      elementType: b(),
      instanceOf: y,
      node: j(),
      objectOf: M,
      oneOf: _,
      oneOfType: Y,
      shape: S,
      exact: V
    };
    function v(I, R) {
      return I === R ? I !== 0 || 1 / I === 1 / R : I !== I && R !== R;
    }
    function h(I, R) {
      this.message = I, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function x(I) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, W = 0;
      function q(H, U, G, A, P, B, ie) {
        if (A = A || p, B = B || G, ie !== n) {
          if (c) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ge = A + ":" + G;
            !R[ge] && // Avoid spamming the console because they are often not actionable except for lib authors
            W < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + B + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[ge] = !0, W++);
          }
        }
        return U[G] == null ? H ? U[G] === null ? new h("The " + P + " `" + B + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new h("The " + P + " `" + B + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : I(U, G, A, P, B);
      }
      var F = q.bind(null, !1);
      return F.isRequired = q.bind(null, !0), F;
    }
    function E(I) {
      function R(W, q, F, H, U, G) {
        var A = W[q], P = ne(A);
        if (P !== I) {
          var B = me(A);
          return new h(
            "Invalid " + H + " `" + U + "` of type " + ("`" + B + "` supplied to `" + F + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return x(R);
    }
    function O() {
      return x(a);
    }
    function N(I) {
      function R(W, q, F, H, U) {
        if (typeof I != "function")
          return new h("Property `" + U + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var G = W[q];
        if (!Array.isArray(G)) {
          var A = ne(G);
          return new h("Invalid " + H + " `" + U + "` of type " + ("`" + A + "` supplied to `" + F + "`, expected an array."));
        }
        for (var P = 0; P < G.length; P++) {
          var B = I(G, P, F, H, U + "[" + P + "]", n);
          if (B instanceof Error)
            return B;
        }
        return null;
      }
      return x(R);
    }
    function w() {
      function I(R, W, q, F, H) {
        var U = R[W];
        if (!s(U)) {
          var G = ne(U);
          return new h("Invalid " + F + " `" + H + "` of type " + ("`" + G + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(I);
    }
    function b() {
      function I(R, W, q, F, H) {
        var U = R[W];
        if (!e.isValidElementType(U)) {
          var G = ne(U);
          return new h("Invalid " + F + " `" + H + "` of type " + ("`" + G + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(I);
    }
    function y(I) {
      function R(W, q, F, H, U) {
        if (!(W[q] instanceof I)) {
          var G = I.name || p, A = Q(W[q]);
          return new h("Invalid " + H + " `" + U + "` of type " + ("`" + A + "` supplied to `" + F + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return x(R);
    }
    function _(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function R(W, q, F, H, U) {
        for (var G = W[q], A = 0; A < I.length; A++)
          if (v(G, I[A]))
            return null;
        var P = JSON.stringify(I, function(ie, k) {
          var ge = me(k);
          return ge === "symbol" ? String(k) : k;
        });
        return new h("Invalid " + H + " `" + U + "` of value `" + String(G) + "` " + ("supplied to `" + F + "`, expected one of " + P + "."));
      }
      return x(R);
    }
    function M(I) {
      function R(W, q, F, H, U) {
        if (typeof I != "function")
          return new h("Property `" + U + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var G = W[q], A = ne(G);
        if (A !== "object")
          return new h("Invalid " + H + " `" + U + "` of type " + ("`" + A + "` supplied to `" + F + "`, expected an object."));
        for (var P in G)
          if (r(G, P)) {
            var B = I(G, P, F, H, U + "." + P, n);
            if (B instanceof Error)
              return B;
          }
        return null;
      }
      return x(R);
    }
    function Y(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var R = 0; R < I.length; R++) {
        var W = I[R];
        if (typeof W != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(W) + " at index " + R + "."
          ), a;
      }
      function q(F, H, U, G, A) {
        for (var P = [], B = 0; B < I.length; B++) {
          var ie = I[B], k = ie(F, H, U, G, A, n);
          if (k == null)
            return null;
          k.data && r(k.data, "expectedType") && P.push(k.data.expectedType);
        }
        var ge = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new h("Invalid " + G + " `" + A + "` supplied to " + ("`" + U + "`" + ge + "."));
      }
      return x(q);
    }
    function j() {
      function I(R, W, q, F, H) {
        return $(R[W]) ? null : new h("Invalid " + F + " `" + H + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return x(I);
    }
    function X(I, R, W, q, F) {
      return new h(
        (I || "React class") + ": " + R + " type `" + W + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function S(I) {
      function R(W, q, F, H, U) {
        var G = W[q], A = ne(G);
        if (A !== "object")
          return new h("Invalid " + H + " `" + U + "` of type `" + A + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var P in I) {
          var B = I[P];
          if (typeof B != "function")
            return X(F, H, U, P, me(B));
          var ie = B(G, P, F, H, U + "." + P, n);
          if (ie)
            return ie;
        }
        return null;
      }
      return x(R);
    }
    function V(I) {
      function R(W, q, F, H, U) {
        var G = W[q], A = ne(G);
        if (A !== "object")
          return new h("Invalid " + H + " `" + U + "` of type `" + A + "` " + ("supplied to `" + F + "`, expected `object`."));
        var P = t({}, W[q], I);
        for (var B in P) {
          var ie = I[B];
          if (r(I, B) && typeof ie != "function")
            return X(F, H, U, B, me(ie));
          if (!ie)
            return new h(
              "Invalid " + H + " `" + U + "` key `" + B + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(W[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var k = ie(G, B, F, H, U + "." + B, n);
          if (k)
            return k;
        }
        return null;
      }
      return x(R);
    }
    function $(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every($);
          if (I === null || s(I))
            return !0;
          var R = l(I);
          if (R) {
            var W = R.call(I), q;
            if (R !== I.entries) {
              for (; !(q = W.next()).done; )
                if (!$(q.value))
                  return !1;
            } else
              for (; !(q = W.next()).done; ) {
                var F = q.value;
                if (F && !$(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function K(I, R) {
      return I === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function ne(I) {
      var R = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : K(R, I) ? "symbol" : R;
    }
    function me(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var R = ne(I);
      if (R === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function oe(I) {
      var R = me(I);
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
    function Q(I) {
      return !I.constructor || !I.constructor.name ? p : I.constructor.name;
    }
    return f.checkPropTypes = o, f.resetWarningCache = o.resetWarningCache, f.PropTypes = f, f;
  }, Pn;
}
var Rn, zo;
function og() {
  if (zo) return Rn;
  zo = 1;
  var e = $r();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Rn = function() {
    function r(a, s, c, d, u, l) {
      if (l !== e) {
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
  }, Rn;
}
if (process.env.NODE_ENV !== "production") {
  var ig = Ma(), ag = !0;
  Kn.exports = rg()(ig.isElement, ag);
} else
  Kn.exports = og()();
var sg = Kn.exports;
const de = /* @__PURE__ */ Dl(sg);
function Ye(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function s(u) {
      try {
        d(r.next(u));
      } catch (l) {
        a(l);
      }
    }
    function c(u) {
      try {
        d(r.throw(u));
      } catch (l) {
        a(l);
      }
    }
    function d(u) {
      u.done ? i(u.value) : o(u.value).then(s, c);
    }
    d((r = r.apply(e, t || [])).next());
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
  return typeof r.path != "string" && Go(r, "path", i), Go(r, "relativePath", i), r;
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
function Go(e, t, n) {
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
  return Xn(e.target.files).map((t) => et(t));
}
function gg(e) {
  return Ye(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => et(n));
  });
}
function vg(e, t) {
  return Ye(this, void 0, void 0, function* () {
    if (e.items) {
      const n = Xn(e.items).filter((o) => o.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(hg));
      return Wo(La(r));
    }
    return Wo(Xn(e.files).map((n) => et(n)));
  });
}
function Wo(e) {
  return e.filter((t) => dg.indexOf(t.name) === -1);
}
function Xn(e) {
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
    return qo(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Ba(t) : qo(e, t);
}
function La(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? La(n) : [n]
  ], []);
}
function qo(e, t) {
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
    return e.isDirectory ? Ba(e) : xg(e);
  });
}
function Ba(e) {
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
function Uo(e) {
  return Eg(e) || wg(e) || Fa(e) || yg();
}
function yg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wg(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Eg(e) {
  if (Array.isArray(e)) return Jn(e);
}
function Ho(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Yo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ho(Object(n), !0).forEach(function(r) {
      Va(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ho(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Va(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function yt(e, t) {
  return Og(e) || Dg(e, t) || Fa(e, t) || Ng();
}
function Ng() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fa(e, t) {
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
}, Ko = function(t) {
  return {
    code: Ig,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Xo = function(t) {
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
function za(e, t) {
  var n = e.type === "application/x-moz-file" || Sg(e, t) || Rg(e);
  return [n, n ? null : Ag(t)];
}
function Ga(e, t, n) {
  if (qe(e.size))
    if (qe(t) && qe(n)) {
      if (e.size > n) return [!1, Ko(n)];
      if (e.size < t) return [!1, Xo(t)];
    } else {
      if (qe(t) && e.size < t) return [!1, Xo(t)];
      if (qe(n) && e.size > n) return [!1, Ko(n)];
    }
  return [!0, null];
}
function qe(e) {
  return e != null;
}
function Tg(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, i = e.multiple, a = e.maxFiles, s = e.validator;
  return !i && t.length > 1 || i && a >= 1 && t.length > a ? !1 : t.every(function(c) {
    var d = za(c, n), u = yt(d, 1), l = u[0], p = Ga(c, r, o), f = yt(p, 1), v = f[0], h = s ? s(c) : null;
    return l && v && !h;
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
function Jo(e) {
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
      return Wa(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(qa)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(n, r) {
      var o = yt(r, 2), i = o[0], a = o[1];
      return Yo(Yo({}, n), {}, Va({}, i, a));
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
      return [].concat(Uo(t), [o], Uo(i));
    }, []).filter(function(t) {
      return Wa(t) || qa(t);
    }).join(",");
}
function Fg(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function zg(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Wa(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function qa(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Gg = ["children"], Wg = ["open"], qg = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Ug = ["refKey", "onChange", "onClick"];
function Zo(e) {
  return Kg(e) || Yg(e) || Ua(e) || Hg();
}
function Hg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yg(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Kg(e) {
  if (Array.isArray(e)) return Zn(e);
}
function $n(e, t) {
  return Zg(e) || Jg(e, t) || Ua(e, t) || Xg();
}
function Xg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ua(e, t) {
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
function Qo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qo(Object(n), !0).forEach(function(r) {
      Qn(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Qn(e, t, n) {
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
var Mr = /* @__PURE__ */ le(function(e, t) {
  var n = e.children, r = qt(e, Gg), o = Ya(r), i = o.open, a = qt(o, Wg);
  return ts(t, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ fe.createElement(ns, null, n(ue(ue({}, a), {}, {
    open: i
  })));
});
Mr.displayName = "Dropzone";
var Ha = {
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
Mr.defaultProps = Ha;
Mr.propTypes = {
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
var er = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  isDragGlobal: !1,
  acceptedFiles: [],
  fileRejections: []
};
function Ya() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = ue(ue({}, Ha), e), n = t.accept, r = t.disabled, o = t.getFilesFromEvent, i = t.maxSize, a = t.minSize, s = t.multiple, c = t.maxFiles, d = t.onDragEnter, u = t.onDragLeave, l = t.onDragOver, p = t.onDrop, f = t.onDropAccepted, v = t.onDropRejected, h = t.onFileDialogCancel, x = t.onFileDialogOpen, E = t.useFsAccessApi, O = t.autoFocus, N = t.preventDropOnDocument, w = t.noClick, b = t.noKeyboard, y = t.noDrag, _ = t.noDragEventsBubbling, M = t.onError, Y = t.validator, j = Ge(function() {
    return Vg(n);
  }, [n]), X = Ge(function() {
    return Bg(n);
  }, [n]), S = Ge(function() {
    return typeof x == "function" ? x : ei;
  }, [x]), V = Ge(function() {
    return typeof h == "function" ? h : ei;
  }, [h]), $ = J(null), K = J(null), ne = es(ev, er), me = $n(ne, 2), oe = me[0], Q = me[1], I = oe.isFocused, R = oe.isFileDialogActive, W = J(typeof window < "u" && window.isSecureContext && E && Lg()), q = function() {
    !W.current && R && setTimeout(function() {
      if (K.current) {
        var z = K.current.files;
        z.length || (Q({
          type: "closeDialog"
        }), V());
      }
    }, 300);
  };
  xe(function() {
    return window.addEventListener("focus", q, !1), function() {
      window.removeEventListener("focus", q, !1);
    };
  }, [K, R, V, W]);
  var F = J([]), H = J([]), U = function(z) {
    $.current && $.current.contains(z.target) || (z.preventDefault(), F.current = []);
  };
  xe(function() {
    return N && (document.addEventListener("dragover", Jo, !1), document.addEventListener("drop", U, !1)), function() {
      N && (document.removeEventListener("dragover", Jo), document.removeEventListener("drop", U));
    };
  }, [$, N]), xe(function() {
    var T = function(Re) {
      H.current = [].concat(Zo(H.current), [Re.target]), ct(Re) && Q({
        isDragGlobal: !0,
        type: "setDragGlobal"
      });
    }, z = function(Re) {
      H.current = H.current.filter(function($e) {
        return $e !== Re.target && $e !== null;
      }), !(H.current.length > 0) && Q({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, ve = function() {
      H.current = [], Q({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, he = function() {
      H.current = [], Q({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    };
    return document.addEventListener("dragenter", T, !1), document.addEventListener("dragleave", z, !1), document.addEventListener("dragend", ve, !1), document.addEventListener("drop", he, !1), function() {
      document.removeEventListener("dragenter", T), document.removeEventListener("dragleave", z), document.removeEventListener("dragend", ve), document.removeEventListener("drop", he);
    };
  }, [$]), xe(function() {
    return !r && O && $.current && $.current.focus(), function() {
    };
  }, [$, O, r]);
  var G = te(function(T) {
    M ? M(T) : console.error(T);
  }, [M]), A = te(function(T) {
    T.preventDefault(), T.persist(), It(T), F.current = [].concat(Zo(F.current), [T.target]), ct(T) && Promise.resolve(o(T)).then(function(z) {
      if (!(Wt(T) && !_)) {
        var ve = z.length, he = ve > 0 && Tg({
          files: z,
          accept: j,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: c,
          validator: Y
        }), Ee = ve > 0 && !he;
        Q({
          isDragAccept: he,
          isDragReject: Ee,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), d && d(T);
      }
    }).catch(function(z) {
      return G(z);
    });
  }, [o, d, G, _, j, a, i, s, c, Y]), P = te(function(T) {
    T.preventDefault(), T.persist(), It(T);
    var z = ct(T);
    if (z && T.dataTransfer)
      try {
        T.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return z && l && l(T), !1;
  }, [l, _]), B = te(function(T) {
    T.preventDefault(), T.persist(), It(T);
    var z = F.current.filter(function(he) {
      return $.current && $.current.contains(he);
    }), ve = z.indexOf(T.target);
    ve !== -1 && z.splice(ve, 1), F.current = z, !(z.length > 0) && (Q({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), ct(T) && u && u(T));
  }, [$, u, _]), ie = te(function(T, z) {
    var ve = [], he = [];
    T.forEach(function(Ee) {
      var Re = za(Ee, j), $e = $n(Re, 2), tn = $e[0], nn = $e[1], rn = Ga(Ee, a, i), kt = $n(rn, 2), on = kt[0], an = kt[1], sn = Y ? Y(Ee) : null;
      if (tn && on && !sn)
        ve.push(Ee);
      else {
        var cn = [nn, an];
        sn && (cn = cn.concat(sn)), he.push({
          file: Ee,
          errors: cn.filter(function(Za) {
            return Za;
          })
        });
      }
    }), (!s && ve.length > 1 || s && c >= 1 && ve.length > c) && (ve.forEach(function(Ee) {
      he.push({
        file: Ee,
        errors: [Pg]
      });
    }), ve.splice(0)), Q({
      acceptedFiles: ve,
      fileRejections: he,
      isDragReject: he.length > 0,
      type: "setFiles"
    }), p && p(ve, he, z), he.length > 0 && v && v(he, z), ve.length > 0 && f && f(ve, z);
  }, [Q, s, j, a, i, c, p, f, v, Y]), k = te(function(T) {
    T.preventDefault(), T.persist(), It(T), F.current = [], ct(T) && Promise.resolve(o(T)).then(function(z) {
      Wt(T) && !_ || ie(z, T);
    }).catch(function(z) {
      return G(z);
    }), Q({
      type: "reset"
    });
  }, [o, ie, G, _]), ge = te(function() {
    if (W.current) {
      Q({
        type: "openDialog"
      }), S();
      var T = {
        multiple: s,
        types: X
      };
      window.showOpenFilePicker(T).then(function(z) {
        return o(z);
      }).then(function(z) {
        ie(z, null), Q({
          type: "closeDialog"
        });
      }).catch(function(z) {
        Fg(z) ? (V(z), Q({
          type: "closeDialog"
        })) : zg(z) ? (W.current = !1, K.current ? (K.current.value = null, K.current.click()) : G(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : G(z);
      });
      return;
    }
    K.current && (Q({
      type: "openDialog"
    }), S(), K.current.value = null, K.current.click());
  }, [Q, S, V, E, ie, G, X, s]), Fe = te(function(T) {
    !$.current || !$.current.isEqualNode(T.target) || (T.key === " " || T.key === "Enter" || T.keyCode === 32 || T.keyCode === 13) && (T.preventDefault(), ge());
  }, [$, ge]), ot = te(function() {
    Q({
      type: "focus"
    });
  }, []), jr = te(function() {
    Q({
      type: "blur"
    });
  }, []), Lr = te(function() {
    w || (jg() ? setTimeout(ge, 0) : ge());
  }, [w, ge]), Ke = function(z) {
    return r ? null : z;
  }, en = function(z) {
    return b ? null : Ke(z);
  }, Ct = function(z) {
    return y ? null : Ke(z);
  }, It = function(z) {
    _ && z.stopPropagation();
  }, Ka = Ge(function() {
    return function() {
      var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = T.refKey, ve = z === void 0 ? "ref" : z, he = T.role, Ee = T.onKeyDown, Re = T.onFocus, $e = T.onBlur, tn = T.onClick, nn = T.onDragEnter, rn = T.onDragOver, kt = T.onDragLeave, on = T.onDrop, an = qt(T, qg);
      return ue(ue(Qn({
        onKeyDown: en(Te(Ee, Fe)),
        onFocus: en(Te(Re, ot)),
        onBlur: en(Te($e, jr)),
        onClick: Ke(Te(tn, Lr)),
        onDragEnter: Ct(Te(nn, A)),
        onDragOver: Ct(Te(rn, P)),
        onDragLeave: Ct(Te(kt, B)),
        onDrop: Ct(Te(on, k)),
        role: typeof he == "string" && he !== "" ? he : "presentation"
      }, ve, $), !r && !b ? {
        tabIndex: 0
      } : {}), an);
    };
  }, [$, Fe, ot, jr, Lr, A, P, B, k, b, y, r]), Xa = te(function(T) {
    T.stopPropagation();
  }, []), Ja = Ge(function() {
    return function() {
      var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = T.refKey, ve = z === void 0 ? "ref" : z, he = T.onChange, Ee = T.onClick, Re = qt(T, Ug), $e = Qn({
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
        onClick: Ke(Te(Ee, Xa)),
        tabIndex: -1
      }, ve, K);
      return ue(ue({}, $e), Re);
    };
  }, [K, n, s, k, r]);
  return ue(ue({}, oe), {}, {
    isFocused: I && !r,
    getRootProps: Ka,
    getInputProps: Ja,
    rootRef: $,
    inputRef: K,
    open: Ke(ge)
  });
}
function ev(e, t) {
  switch (t.type) {
    case "focus":
      return ue(ue({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return ue(ue({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return ue(ue({}, er), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return ue(ue({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return ue(ue({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return ue(ue({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "setDragGlobal":
      return ue(ue({}, e), {}, {
        isDragGlobal: t.isDragGlobal
      });
    case "reset":
      return ue({}, er);
    default:
      return e;
  }
}
function ei() {
}
const tv = (e) => e.startsWith("image/") ? Fs : e.startsWith("video/") ? cc : e.startsWith("audio/") ? Qs : e.includes("pdf") || e.includes("document") ? Ts : Ms, ti = (e) => {
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
  const [d, u] = be([]), [l, p] = be([]), f = te(
    (N, w) => {
      if (N.length > 0) {
        const b = i ? [...d, ...N] : N;
        if (u(b), e(b), c) {
          const y = N.filter((_) => _.type.startsWith("image/")).map((_) => ({
            file: _,
            url: URL.createObjectURL(_)
          }));
          p((_) => i ? [..._, ...y] : y);
        }
      }
      w.length > 0 && t && t(w);
    },
    [d, i, e, t, c]
  ), v = (N) => {
    const w = d.filter((y) => y !== N);
    u(w), e(w);
    const b = l.find((y) => y.file === N);
    b && (URL.revokeObjectURL(b.url), p((y) => y.filter((_) => _.file !== N)));
  }, { getRootProps: h, getInputProps: x, isDragActive: E, isDragReject: O } = Ya({
    onDrop: f,
    accept: n,
    maxFiles: r,
    maxSize: o,
    multiple: i,
    disabled: a
  });
  return /* @__PURE__ */ C("div", { className: D("space-y-4", s), children: [
    /* @__PURE__ */ C(
      "div",
      {
        ...h(),
        className: D(
          "flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl cursor-pointer",
          "transition-all duration-200 ease-out",
          "bg-gradient-to-b from-neutral-50 to-white",
          "border-primary/60 hover:border-primary",
          E && !O && "border-primary bg-gradient-to-b from-primary/5 to-accent/5 scale-[1.01]",
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
                E && "scale-110"
              ),
              children: /* @__PURE__ */ m(
                ac,
                {
                  className: D(
                    "w-8 h-8 text-primary",
                    E && "animate-bounce"
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ m("p", { className: "text-lg font-medium text-neutral-700 mb-1", children: E ? O ? "Archivo no permitido" : "Suelta los archivos aquí" : "Arrastra archivos aquí" }),
          /* @__PURE__ */ m("p", { className: "text-sm text-neutral-500 mb-3", children: "o haz clic para seleccionar" }),
          /* @__PURE__ */ C("p", { className: "text-xs text-neutral-400", children: [
            "PNG, JPG hasta ",
            ti(o)
          ] })
        ]
      }
    ),
    d.length > 0 && /* @__PURE__ */ C("div", { className: "space-y-2", children: [
      /* @__PURE__ */ C("p", { className: "text-sm font-medium text-neutral-700", children: [
        "Archivos seleccionados (",
        d.length,
        ")"
      ] }),
      /* @__PURE__ */ m("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: d.map((N, w) => {
        const b = tv(N.type), y = l.find((_) => _.file === N);
        return /* @__PURE__ */ C(
          "div",
          {
            className: D(
              "group flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-xl",
              "transition-all duration-200",
              "hover:shadow-md hover:border-primary/30"
            ),
            children: [
              y ? /* @__PURE__ */ m("div", { className: "w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100", children: /* @__PURE__ */ m(
                "img",
                {
                  src: y.url,
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
                  children: /* @__PURE__ */ m(b, { className: "w-6 h-6 text-primary" })
                }
              ),
              /* @__PURE__ */ C("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ m("p", { className: "text-sm font-medium text-neutral-800 truncate", children: N.name }),
                /* @__PURE__ */ m("p", { className: "text-xs text-neutral-500", children: ti(N.size) })
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
          `${N.name}-${w}`
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
  return /* @__PURE__ */ m(kr, { onDragEnd: (o) => {
    const { source: i, destination: a, draggableId: s } = o;
    a && (i.droppableId === a.droppableId && i.index === a.index || t(
      s,
      i.droppableId,
      a.droppableId,
      i.index,
      a.index
    ));
  }, children: /* @__PURE__ */ m("div", { className: D("flex gap-4 overflow-x-auto pb-4", n), children: e.map((o) => /* @__PURE__ */ C(
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
            children: /* @__PURE__ */ C("div", { className: "flex items-center justify-between", children: [
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
        /* @__PURE__ */ m(Tr, { droppableId: o.id, children: (i, a) => /* @__PURE__ */ C(
          "div",
          {
            ref: i.innerRef,
            ...i.droppableProps,
            className: D(
              "p-3 min-h-[200px] space-y-3 transition-colors duration-200",
              a.isDraggingOver && "bg-primary/5"
            ),
            children: [
              o.cards.map((s, c) => /* @__PURE__ */ m(Ar, { draggableId: s.id, index: c, children: (d, u) => /* @__PURE__ */ C(
                "div",
                {
                  ref: d.innerRef,
                  ...d.draggableProps,
                  className: D(
                    "group bg-white rounded-lg border border-neutral-200 overflow-hidden",
                    "transition-all duration-200",
                    "hover:shadow-md hover:border-primary/30",
                    u.isDragging && "shadow-xl ring-2 ring-primary/30 rotate-2"
                  ),
                  style: {
                    ...d.draggableProps.style
                  },
                  children: [
                    /* @__PURE__ */ C(
                      "div",
                      {
                        ...d.dragHandleProps,
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
                      s.tags && s.tags.length > 0 && /* @__PURE__ */ m("div", { className: "flex flex-wrap gap-1", children: s.tags.map((l, p) => /* @__PURE__ */ m(
                        "span",
                        {
                          className: D(
                            "px-2 py-0.5 text-xs font-medium rounded-full",
                            nv[l.variant || "default"]
                          ),
                          children: l.label
                        },
                        p
                      )) })
                    ] }),
                    /* @__PURE__ */ m(
                      "div",
                      {
                        className: D(
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
function uv({
  items: e,
  onReorder: t,
  className: n,
  cardClassName: r,
  droppableId: o = "draggable-cards",
  direction: i = "vertical"
}) {
  return /* @__PURE__ */ m(kr, { onDragEnd: (s) => {
    if (!s.destination) return;
    const c = Array.from(e), [d] = c.splice(s.source.index, 1);
    c.splice(s.destination.index, 0, d), t(c);
  }, children: /* @__PURE__ */ m(Tr, { droppableId: o, direction: i, children: (s) => /* @__PURE__ */ C(
    "div",
    {
      ref: s.innerRef,
      ...s.droppableProps,
      className: D(
        i === "horizontal" ? "flex gap-4" : "space-y-4",
        n
      ),
      children: [
        e.map((c, d) => /* @__PURE__ */ m(Ar, { draggableId: c.id, index: d, children: (u, l) => /* @__PURE__ */ C(
          "div",
          {
            ref: u.innerRef,
            ...u.draggableProps,
            className: D(
              "group relative bg-white border border-neutral-200 rounded-xl overflow-hidden",
              "transition-all duration-200 ease-out",
              "hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5",
              l.isDragging && "shadow-2xl ring-2 ring-primary/30 scale-[1.02] rotate-1",
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
                /* @__PURE__ */ C(
                  "div",
                  {
                    ...u.dragHandleProps,
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
                            l.isDragging && "text-primary"
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
function fv({
  title: e,
  children: t,
  className: n,
  isDragging: r = !1,
  dragHandleProps: o
}) {
  return /* @__PURE__ */ C(
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
        e ? /* @__PURE__ */ C(
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
          /* @__PURE__ */ C(
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
  Ln as Avatar,
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
  mi as Header,
  jn as Input,
  pv as KanbanBoard,
  Jc as Layout,
  pi as ListMenu,
  gl as LoginPage,
  vi as Modal,
  Sc as MultiSelect,
  cl as Pagination,
  $c as Radio,
  xc as Select,
  Qc as SidePanel,
  fi as Sidebar,
  fv as SingleDraggableCard,
  lv as SortableList,
  ol as TabPanel,
  av as Table,
  rl as Tabs,
  Ac as Textarea,
  hi as Toast,
  ml as ToastContainer,
  sv as ToastProvider,
  D as cn,
  cv as useToast
};
//# sourceMappingURL=index.js.map
