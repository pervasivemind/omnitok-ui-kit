import { jsxs as C, jsx as f, Fragment as $e } from "react/jsx-runtime";
import * as ie from "react";
import ve, { forwardRef as ae, createElement as Vn, useState as pe, useRef as ee, useCallback as Q, useMemo as je, useEffect as he, useId as ps, useContext as wt, createContext as ir, useLayoutEffect as us, useReducer as fs, useImperativeHandle as ms, Fragment as gs } from "react";
import vs, { flushSync as ci } from "react-dom";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const li = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = (e) => {
  const t = bs(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var xs = {
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
const ys = (e) => {
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
const ws = ae(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, c) => Vn(
    "svg",
    {
      ref: c,
      ...xs,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: li("lucide", o),
      ...!i && !ys(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([d, u]) => Vn(d, u)),
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
const se = (e, t) => {
  const n = ae(
    ({ className: r, ...o }, i) => Vn(ws, {
      ref: i,
      iconNode: t,
      className: li(
        `lucide-${hs(Wr(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Wr(e), n;
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Ns = se("arrow-down", Es);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Ss = se("arrow-up-down", Ds);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Is = se("arrow-up", Os);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], ks = se("bell", Cs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], di = se("check", As);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], jt = se("chevron-down", _s);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Rs = se("chevron-left", Ps);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ar = se("chevron-right", Ts);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], Ms = se("chevrons-left", $s);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], Ls = se("chevrons-right", js);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], pi = se("circle-alert", Bs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], ui = se("circle-check-big", Fs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], zs = se("copy", Vs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = [
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
], Ws = se("eye-off", Gs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Us = se("eye", qs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
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
], Ys = se("file-text", Hs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], Xs = se("file", Ks);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Xe = se("grip-vertical", Js);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Zs = se("house", Qs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], tc = se("image", ec);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], fi = se("info", nc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], oc = se("loader-circle", rc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], ac = se("lock", ic);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], cc = se("mail", sc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], mi = se("menu", lc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dc = [["path", { d: "M5 12h14", key: "1ays0h" }]], pc = se("minus", dc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], fc = se("music", uc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
], gc = se("panel-left-close", mc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], gi = se("search", vc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], vi = se("triangle-alert", hc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bc = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], xc = se("upload", bc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], wc = se("video", yc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ec = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], tt = se("x", Ec);
function hi(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = hi(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Nc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = hi(e)) && (r && (r += " "), r += t);
  return r;
}
function S(...e) {
  return Nc(e);
}
const Dc = {
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
}, qr = {
  primary: "bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 focus:ring-primary",
  accent: "bg-transparent text-accent hover:bg-accent/10 active:bg-accent/20 focus:ring-accent",
  neutral: "bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 focus:ring-neutral-300",
  accept: "bg-transparent text-success hover:bg-success/10 active:bg-success/20 focus:ring-success",
  danger: "bg-transparent text-error hover:bg-error/10 active:bg-error/20 focus:ring-error",
  info: "bg-transparent text-info hover:bg-info/10 active:bg-info/20 focus:ring-info",
  violet: "bg-transparent text-violet hover:bg-violet/10 active:bg-violet/20 focus:ring-violet",
  rose: "bg-transparent text-rose hover:bg-rose/10 active:bg-rose/20 focus:ring-rose",
  teal: "bg-transparent text-teal hover:bg-teal/10 active:bg-teal/20 focus:ring-teal"
}, Sc = {
  xs: "px-2 py-0.5 text-xs gap-1",
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-4 py-2 text-base gap-2",
  lg: "px-6 py-3 text-lg gap-2.5"
}, Oc = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20
}, Lt = ae(
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
        className: S(
          // Base styles
          "inline-flex items-center justify-center font-medium rounded-md",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          // Variant styles
          r && qr[e] ? qr[e] : Dc[e],
          // Size styles
          Sc[t],
          // Full width
          a && "w-full",
          // Disabled state
          p && "opacity-50 cursor-not-allowed",
          c
        ),
        ...u,
        children: [
          n ? /* @__PURE__ */ f(oc, { className: "animate-spin", size: Oc[t] }) : o,
          d,
          !n && i
        ]
      }
    );
  }
);
Lt.displayName = "Button";
const Ic = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-4 py-3 text-lg"
}, Cc = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, kc = {
  sm: "pr-8",
  md: "pr-10",
  lg: "pr-12"
}, Bt = ae(
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
    const p = d || `input-${Math.random().toString(36).slice(2, 9)}`, m = !!r;
    return /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: p,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ C("div", { className: "relative", children: [
        o && /* @__PURE__ */ f("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400", children: o }),
        /* @__PURE__ */ f(
          "input",
          {
            ref: l,
            id: p,
            disabled: s,
            className: S(
              // Base styles
              "w-full rounded-md border bg-white",
              "transition-colors duration-200",
              "placeholder:text-neutral-400",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              Ic[e],
              // Icon padding
              o && Cc[e],
              i && kc[e],
              // Border color
              m ? "border-error focus:ring-error focus:border-error" : "border-neutral-300",
              // Disabled state
              s && "bg-neutral-100 cursor-not-allowed opacity-60",
              c
            ),
            "aria-invalid": m,
            "aria-describedby": m ? `${p}-error` : n ? `${p}-helper` : void 0,
            ...u
          }
        ),
        i && /* @__PURE__ */ f("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400", children: i })
      ] }),
      m && /* @__PURE__ */ f("p", { id: `${p}-error`, className: "text-sm text-error", children: r }),
      !m && n && /* @__PURE__ */ f("p", { id: `${p}-helper`, className: "text-sm text-neutral-500", children: n })
    ] });
  }
);
Bt.displayName = "Input";
const Ac = {
  sm: "px-3 py-1.5 text-sm pr-8",
  md: "px-4 py-2 text-base pr-10",
  lg: "px-4 py-3 text-lg pr-12"
}, _c = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, Pc = {
  sm: "min-h-[34px] px-3 py-1 text-sm",
  md: "min-h-[42px] px-4 py-1.5 text-base",
  lg: "min-h-[50px] px-4 py-2 text-lg"
}, Rc = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, Tc = {
  sm: 14,
  md: 16,
  lg: 20
}, bi = ae(
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
    leftIcon: d,
    className: u,
    id: l,
    value: p,
    defaultValue: m,
    onChange: g,
    name: h,
    ...x
  }, E) => {
    var R;
    const y = l || `select-${Math.random().toString(36).slice(2, 9)}`, N = !!r, w = p !== void 0, [b, k] = pe(
      m !== void 0 ? String(m) : ""
    ), _ = w ? String(p ?? "") : b, j = ((R = o.find((D) => D.value === _)) == null ? void 0 : R.label) ?? "", [Y, O] = pe(""), [T, B] = pe(!1), [q, V] = pe(-1), K = ee(null), F = ee(null), te = ee(null), Z = ee(null), re = Q(
      (D) => {
        Z.current = D, typeof E == "function" ? E(D) : E && (E.current = D);
      },
      [E]
    ), I = je(() => o.filter(
      (D) => !Y || D.label.toLowerCase().includes(Y.toLowerCase())
    ), [o, Y]), P = Q((D) => {
      var A;
      const $ = Z.current;
      if (!$) return;
      const ne = (A = Object.getOwnPropertyDescriptor(
        HTMLSelectElement.prototype,
        "value"
      )) == null ? void 0 : A.set;
      ne == null || ne.call($, D), $.dispatchEvent(new Event("change", { bubbles: !0 }));
    }, []), z = Q(
      (D) => {
        w || k(D.target.value), g == null || g(D), B(!1), O(""), V(-1);
      },
      [w, g]
    ), G = Q(
      (D) => {
        if (c) return;
        const $ = o.find((ne) => ne.value === D);
        $ != null && $.disabled || P(D);
      },
      [c, o, P]
    ), L = Q(
      (D, $) => {
        const ne = I.length;
        if (ne === 0) return -1;
        for (let A = 0; A < ne; A++) {
          const ue = (D + $ * (A + 1) + ne) % ne;
          if (!I[ue].disabled) return ue;
        }
        return -1;
      },
      [I]
    ), X = Q(() => I.findIndex((D) => !D.disabled), [I]), J = Q(
      (D) => {
        if (!c)
          switch (D.key) {
            case "ArrowDown": {
              D.preventDefault(), T ? V(($) => L($, 1)) : (B(!0), V(X()));
              break;
            }
            case "ArrowUp": {
              D.preventDefault(), T && V(($) => L($, -1));
              break;
            }
            case "Enter": {
              if (D.preventDefault(), T && q >= 0 && q < I.length) {
                const $ = I[q];
                $.disabled || G($.value);
              } else T || B(!0);
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
        T,
        q,
        I,
        G,
        L,
        X
      ]
    );
    he(() => {
      if (!s) return;
      const D = ($) => {
        K.current && !K.current.contains($.target) && (B(!1), V(-1), O(""));
      };
      return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
    }, [s]), he(() => {
      var D;
      q >= 0 && te.current && ((D = te.current.querySelectorAll('[role="option"]')[q]) == null || D.scrollIntoView({ block: "nearest" }));
    }, [q]);
    const U = () => {
      var D;
      c || ((D = F.current) == null || D.focus(), B(!0));
    };
    return s ? /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: `${y}-input`,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ C("div", { ref: K, className: "relative", children: [
        d && /* @__PURE__ */ f("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10", children: d }),
        /* @__PURE__ */ f(
          "div",
          {
            onClick: U,
            className: S(
              // Base styles
              "flex items-center gap-1.5 w-full rounded-md border bg-white cursor-text",
              "transition-colors duration-200",
              // Size styles
              Pc[e],
              // Left icon padding
              d && Rc[e],
              // Right padding for chevron
              "pr-8",
              // Focus ring (applied when dropdown is open)
              T && !N && "ring-2 ring-primary border-primary",
              T && N && "ring-2 ring-error border-error",
              // Border color
              N ? "border-error" : "border-neutral-300",
              // Disabled state
              c && "bg-neutral-100 cursor-not-allowed opacity-60",
              u
            ),
            "aria-invalid": N,
            "aria-describedby": N ? `${y}-error` : n ? `${y}-helper` : void 0,
            children: /* @__PURE__ */ f(
              "input",
              {
                ref: F,
                id: `${y}-input`,
                type: "text",
                value: T ? Y : j,
                onChange: (D) => {
                  O(D.target.value), T || B(!0), V(0);
                },
                onFocus: () => {
                  c || B(!0);
                },
                onKeyDown: J,
                placeholder: j || i,
                disabled: c,
                className: S(
                  "flex-1 min-w-[60px] outline-none bg-transparent",
                  "placeholder:text-neutral-400",
                  c && "cursor-not-allowed"
                ),
                role: "combobox",
                "aria-expanded": T,
                "aria-controls": `${y}-listbox`,
                "aria-activedescendant": q >= 0 ? `${y}-option-${q}` : void 0,
                "aria-autocomplete": "list",
                autoComplete: "off"
              }
            )
          }
        ),
        /* @__PURE__ */ f(
          jt,
          {
            className: S(
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-200",
              T && "rotate-180"
            ),
            size: Tc[e]
          }
        ),
        T && /* @__PURE__ */ f(
          "ul",
          {
            ref: te,
            id: `${y}-listbox`,
            role: "listbox",
            className: S(
              "absolute z-50 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: I.length === 0 ? /* @__PURE__ */ f("li", { className: "px-4 py-2 text-sm text-neutral-400", children: Y ? "No matching options" : "No options available" }) : I.map((D, $) => /* @__PURE__ */ f(
              "li",
              {
                id: `${y}-option-${$}`,
                role: "option",
                "aria-selected": D.value === _,
                "aria-disabled": D.disabled,
                onClick: () => {
                  D.disabled || G(D.value);
                },
                className: S(
                  "px-4 py-2 text-sm transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  D.disabled ? "text-neutral-300 cursor-not-allowed opacity-50 select-none" : S(
                    "cursor-pointer",
                    $ === q ? "bg-primary/10 text-primary" : "text-neutral-700 hover:bg-neutral-50"
                  )
                ),
                children: D.label
              },
              D.value
            ))
          }
        ),
        /* @__PURE__ */ C(
          "select",
          {
            ref: re,
            id: y,
            name: h,
            disabled: c,
            ...w ? { value: p } : { defaultValue: m },
            onChange: z,
            className: "sr-only",
            tabIndex: -1,
            "aria-hidden": "true",
            ...x,
            children: [
              i && /* @__PURE__ */ f("option", { value: "", disabled: !0, children: i }),
              o.map((D) => /* @__PURE__ */ f("option", { value: D.value, disabled: D.disabled, children: D.label }, D.value))
            ]
          }
        )
      ] }),
      N && /* @__PURE__ */ f("p", { id: `${y}-error`, className: "text-sm text-error", children: r }),
      !N && n && /* @__PURE__ */ f("p", { id: `${y}-helper`, className: "text-sm text-neutral-500", children: n })
    ] }) : /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: y,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ C("div", { className: "relative", children: [
        d && /* @__PURE__ */ f("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none", children: d }),
        /* @__PURE__ */ C(
          "select",
          {
            ref: E,
            id: y,
            name: h,
            disabled: c,
            value: p,
            defaultValue: m,
            onChange: g,
            className: S(
              // Base styles
              "w-full rounded-md border bg-white appearance-none cursor-pointer",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              Ac[e],
              // Icon padding
              d && _c[e],
              // Border color
              N ? "border-error focus:ring-error focus:border-error" : "border-neutral-300",
              // Disabled state
              c && "bg-neutral-100 cursor-not-allowed opacity-60",
              u
            ),
            "aria-invalid": N,
            "aria-describedby": N ? `${y}-error` : n ? `${y}-helper` : void 0,
            ...x,
            children: [
              i && /* @__PURE__ */ f("option", { value: "", disabled: !0, children: i }),
              o.map((D) => /* @__PURE__ */ f("option", { value: D.value, disabled: D.disabled, children: D.label }, D.value))
            ]
          }
        ),
        /* @__PURE__ */ f(
          jt,
          {
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none",
            size: e === "sm" ? 14 : e === "lg" ? 20 : 16
          }
        )
      ] }),
      N && /* @__PURE__ */ f("p", { id: `${y}-error`, className: "text-sm text-error", children: r }),
      !N && n && /* @__PURE__ */ f("p", { id: `${y}-helper`, className: "text-sm text-neutral-500", children: n })
    ] });
  }
);
bi.displayName = "Select";
const $c = {
  sm: "min-h-[34px] px-3 py-1 text-sm",
  md: "min-h-[42px] px-4 py-1.5 text-base",
  lg: "min-h-[50px] px-4 py-2 text-lg"
}, Mc = {
  sm: "px-1.5 py-0.5 text-xs gap-0.5",
  md: "px-2 py-0.5 text-sm gap-1",
  lg: "px-2.5 py-1 text-sm gap-1"
}, jc = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, Lc = {
  sm: 12,
  md: 14,
  lg: 14
}, Bc = {
  sm: 14,
  md: 16,
  lg: 20
}, Fc = {
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
}, Vc = ae(
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
    leftIcon: m,
    tagColor: g = "primary",
    className: h,
    id: x
  }, E) => {
    const y = x || `multiselect-${Math.random().toString(36).slice(2, 9)}`, N = !!s, w = t !== void 0, [b, k] = pe(n), _ = w ? t : b, [j, Y] = pe(""), [O, T] = pe(!1), [B, q] = pe(-1), V = ee(null), K = ee(null), F = ee(null), te = Q(
      (R) => {
        w || k(R), r == null || r(R);
      },
      [w, r]
    ), Z = je(() => e.filter((R) => {
      const D = _.includes(R.value), $ = !j || R.label.toLowerCase().includes(j.toLowerCase());
      return !D && $;
    }), [e, _, j]), re = l === void 0 || _.length < l, I = Q(
      (R) => {
        var ne;
        if (!re || u) return;
        const D = e.find((A) => A.value === R);
        if (D != null && D.disabled) return;
        const $ = [..._, R];
        te($), Y(""), q(-1), (ne = K.current) == null || ne.focus();
      },
      [re, u, e, _, te]
    ), P = Q(
      (R, D) => {
        var ne;
        if (D == null || D.stopPropagation(), u) return;
        const $ = _.filter((A) => A !== R);
        te($), (ne = K.current) == null || ne.focus();
      },
      [u, _, te]
    ), z = Q(
      (R, D) => {
        const $ = Z.length;
        if ($ === 0) return -1;
        for (let ne = 0; ne < $; ne++) {
          const A = (R + D * (ne + 1) + $) % $;
          if (!Z[A].disabled) return A;
        }
        return -1;
      },
      [Z]
    ), G = Q(() => Z.findIndex((R) => !R.disabled), [Z]), L = Q(
      (R) => {
        if (!u)
          switch (R.key) {
            case "ArrowDown": {
              R.preventDefault(), O ? q((D) => z(D, 1)) : (T(!0), q(G()));
              break;
            }
            case "ArrowUp": {
              R.preventDefault(), O && q((D) => z(D, -1));
              break;
            }
            case "Enter": {
              if (R.preventDefault(), O && B >= 0 && B < Z.length) {
                const D = Z[B];
                D.disabled || I(D.value);
              } else O || T(!0);
              break;
            }
            case "Backspace": {
              if (j === "" && _.length > 0) {
                const D = _[_.length - 1];
                P(D);
              }
              break;
            }
            case "Escape": {
              R.preventDefault(), T(!1), q(-1);
              break;
            }
          }
      },
      [
        u,
        O,
        B,
        I,
        j,
        _,
        P,
        z,
        G
      ]
    );
    he(() => {
      const R = (D) => {
        V.current && !V.current.contains(D.target) && (T(!1), q(-1), Y(""));
      };
      return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
    }, []), he(() => {
      var R;
      B >= 0 && F.current && ((R = F.current.querySelectorAll('[role="option"]')[B]) == null || R.scrollIntoView({ block: "nearest" }));
    }, [B]);
    const X = () => {
      var R;
      u || ((R = K.current) == null || R.focus(), T(!0));
    }, J = (R) => {
      var D;
      return ((D = e.find(($) => $.value === R)) == null ? void 0 : D.label) ?? R;
    }, U = (R) => {
      var D;
      return ((D = e.find(($) => $.value === R)) == null ? void 0 : D.color) ?? g;
    };
    return /* @__PURE__ */ C("div", { ref: E, className: S("flex flex-col gap-1.5", d && "w-full"), children: [
      i && /* @__PURE__ */ f("label", { htmlFor: `${y}-input`, className: "text-sm font-medium text-neutral-700", children: i }),
      /* @__PURE__ */ C("div", { ref: V, className: "relative", children: [
        m && /* @__PURE__ */ f("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10", children: m }),
        /* @__PURE__ */ C(
          "div",
          {
            onClick: X,
            className: S(
              // Base styles
              "flex flex-wrap items-center gap-1.5 w-full rounded-md border bg-white cursor-text",
              "transition-colors duration-200",
              // Size styles
              $c[o],
              // Left icon padding
              m && jc[o],
              // Right padding for chevron
              "pr-8",
              // Focus ring (applied when dropdown is open)
              O && !N && "ring-2 ring-primary border-primary",
              O && N && "ring-2 ring-error border-error",
              // Border color
              N ? "border-error" : "border-neutral-300",
              // Disabled state
              u && "bg-neutral-100 cursor-not-allowed opacity-60",
              h
            ),
            "aria-invalid": N,
            "aria-describedby": N ? `${y}-error` : a ? `${y}-helper` : void 0,
            children: [
              _.map((R) => {
                const D = Fc[U(R)];
                return /* @__PURE__ */ C(
                  "span",
                  {
                    className: S(
                      "inline-flex items-center rounded-md font-medium",
                      "transition-colors duration-150",
                      D.base,
                      !u && D.hover,
                      Mc[o]
                    ),
                    children: [
                      J(R),
                      !u && /* @__PURE__ */ f(
                        "button",
                        {
                          type: "button",
                          onClick: ($) => P(R, $),
                          className: S(
                            "inline-flex items-center justify-center rounded-sm transition-colors",
                            D.hover
                          ),
                          "aria-label": `Remove ${J(R)}`,
                          tabIndex: -1,
                          children: /* @__PURE__ */ f(tt, { size: Lc[o] })
                        }
                      )
                    ]
                  },
                  R
                );
              }),
              p ? /* @__PURE__ */ f(
                "input",
                {
                  ref: K,
                  id: `${y}-input`,
                  type: "text",
                  value: j,
                  onChange: (R) => {
                    Y(R.target.value), O || T(!0), q(0);
                  },
                  onFocus: () => {
                    u || T(!0);
                  },
                  onKeyDown: L,
                  placeholder: _.length === 0 ? c : "",
                  disabled: u,
                  className: S(
                    "flex-1 min-w-[60px] outline-none bg-transparent",
                    "placeholder:text-neutral-400",
                    u && "cursor-not-allowed"
                  ),
                  role: "combobox",
                  "aria-expanded": O,
                  "aria-controls": `${y}-listbox`,
                  "aria-activedescendant": B >= 0 ? `${y}-option-${B}` : void 0,
                  "aria-autocomplete": "list",
                  autoComplete: "off"
                }
              ) : /* @__PURE__ */ C($e, { children: [
                _.length === 0 && /* @__PURE__ */ f("span", { className: "text-neutral-400", children: c }),
                /* @__PURE__ */ f(
                  "input",
                  {
                    ref: K,
                    id: `${y}-input`,
                    className: "absolute opacity-0 w-0 h-0",
                    onFocus: () => {
                      u || T(!0);
                    },
                    onKeyDown: L,
                    disabled: u,
                    tabIndex: 0,
                    role: "combobox",
                    "aria-expanded": O,
                    "aria-controls": `${y}-listbox`,
                    "aria-activedescendant": B >= 0 ? `${y}-option-${B}` : void 0,
                    readOnly: !0
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ f(
          jt,
          {
            className: S(
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-200",
              O && "rotate-180"
            ),
            size: Bc[o]
          }
        ),
        O && /* @__PURE__ */ f(
          "ul",
          {
            ref: F,
            id: `${y}-listbox`,
            role: "listbox",
            "aria-multiselectable": "true",
            className: S(
              "absolute z-50 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: Z.length === 0 ? /* @__PURE__ */ f("li", { className: "px-4 py-2 text-sm text-neutral-400", children: j ? "No matching options" : "No options available" }) : Z.map((R, D) => /* @__PURE__ */ f(
              "li",
              {
                id: `${y}-option-${D}`,
                role: "option",
                "aria-selected": _.includes(R.value),
                "aria-disabled": R.disabled || !re,
                onClick: () => {
                  !R.disabled && re && I(R.value);
                },
                className: S(
                  "px-4 py-2 text-sm transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  R.disabled || !re ? "text-neutral-300 cursor-not-allowed opacity-50 select-none" : S(
                    "cursor-pointer",
                    D === B ? "bg-primary/10 text-primary" : "text-neutral-700 hover:bg-neutral-50"
                  )
                ),
                children: R.label
              },
              R.value
            ))
          }
        )
      ] }),
      N && /* @__PURE__ */ f("p", { id: `${y}-error`, className: "text-sm text-error", children: s }),
      !N && a && /* @__PURE__ */ f("p", { id: `${y}-helper`, className: "text-sm text-neutral-500", children: a })
    ] });
  }
);
Vc.displayName = "MultiSelect";
const zc = {
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
function Gc(e, t) {
  return e.startsWith("bottom") ? { marginTop: t } : e.startsWith("top") ? { marginBottom: t } : e.startsWith("left") ? { marginRight: t } : e.startsWith("right") ? { marginLeft: t } : {};
}
const xi = ae(
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
    ...u
  }, l) => {
    const p = i !== void 0, [m, g] = pe(!1), h = p ? i : m, x = ee(null), E = ee(null), y = ee(null), N = Q(
      (j) => {
        p || g(j), a == null || a(j);
      },
      [p, a]
    ), w = Q(() => N(!1), [N]), b = Q(() => {
      o || N(!h);
    }, [o, h, N]), k = Q(
      (j) => {
        var Y;
        j.key === "Escape" && (j.preventDefault(), w(), (Y = y.current) == null || Y.focus()), j.key === "Tab" && w();
      },
      [w]
    );
    he(() => {
      const j = (Y) => {
        x.current && !x.current.contains(Y.target) && w();
      };
      return document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j);
    }, [w]);
    const _ = `dropdown-${ee(Math.random().toString(36).slice(2, 9)).current}`;
    return /* @__PURE__ */ C(
      "div",
      {
        ref: x,
        className: S("relative inline-flex items-center", d),
        ...u,
        children: [
          /* @__PURE__ */ f(
            "div",
            {
              ref: y,
              role: "button",
              tabIndex: o ? -1 : 0,
              "aria-haspopup": "true",
              "aria-expanded": h,
              "aria-controls": h ? `${_}-panel` : void 0,
              "aria-disabled": o,
              onClick: b,
              onKeyDown: k,
              className: S(
                "inline-flex",
                s,
                o && "opacity-50 cursor-not-allowed pointer-events-none"
              ),
              children: e
            }
          ),
          h && /* @__PURE__ */ f(
            "div",
            {
              ref: (j) => {
                E.current = j, typeof l == "function" ? l(j) : l && (l.current = j);
              },
              id: `${_}-panel`,
              onKeyDown: k,
              style: Gc(n, r),
              className: S(
                "absolute z-50 w-max",
                "rounded-md border border-neutral-200 bg-white shadow-lg",
                "animate-fade-in",
                zc[n],
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
xi.displayName = "Dropdown";
const Wc = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-4 py-2.5 text-base"
}, qc = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5"
}, sr = ae(
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
    const [l, p] = pe(!1), [m, g] = pe(-1), h = ee(null), x = t.filter((O) => !O.disabled), E = Q(
      (O, T) => {
        const B = t.length;
        if (B === 0) return -1;
        for (let q = 0; q < B; q++) {
          const V = (O + T * (q + 1) + B) % B;
          if (!t[V].disabled) return V;
        }
        return -1;
      },
      [t]
    ), y = Q(() => t.findIndex((O) => !O.disabled), [t]), N = Q(() => {
      for (let O = t.length - 1; O >= 0; O--)
        if (!t[O].disabled) return O;
      return -1;
    }, [t]), w = Q(() => {
      s || x.length === 0 || (p(!0), g(-1));
    }, [s, x.length]), b = Q(() => {
      p(!1), g(-1);
    }, []), k = Q(
      (O) => {
        var T;
        O.disabled || ((T = O.onClick) == null || T.call(O), n == null || n(O.value), b());
      },
      [n, b]
    ), _ = Q(
      (O) => {
        O ? w() : b();
      },
      [w, b]
    ), j = Q(
      (O) => {
        if (!s)
          switch (O.key) {
            case "ArrowDown": {
              O.preventDefault(), l ? g(
                (T) => T === -1 ? y() : E(T, 1)
              ) : w();
              break;
            }
            case "ArrowUp": {
              O.preventDefault(), l ? g(
                (T) => T === -1 ? N() : E(T, -1)
              ) : w();
              break;
            }
            case "Enter":
            case " ": {
              if (O.preventDefault(), l && m >= 0 && m < t.length) {
                const T = t[m];
                T.href && !T.disabled && (window.location.href = T.href), k(T);
              } else l || w();
              break;
            }
          }
      },
      [
        s,
        l,
        m,
        t,
        w,
        k,
        E,
        y,
        N
      ]
    );
    he(() => {
      var O;
      m >= 0 && h.current && ((O = h.current.querySelectorAll('[role="menuitem"]')[m]) == null || O.scrollIntoView({ block: "nearest" }));
    }, [m]);
    const Y = (O, T) => {
      const B = T === m, q = /* @__PURE__ */ C($e, { children: [
        O.icon && /* @__PURE__ */ f(
          "span",
          {
            className: S(
              "flex-shrink-0",
              qc[a],
              O.danger && !O.disabled ? "text-error" : "text-neutral-400",
              B && !O.danger && "text-primary"
            ),
            children: O.icon
          }
        ),
        /* @__PURE__ */ f("span", { className: "flex-1 truncate", children: O.label }),
        O.badge && /* @__PURE__ */ f("span", { className: "text-xs text-neutral-500", children: O.badge })
      ] }), V = S(
        "flex items-center gap-2 w-full rounded-md",
        "transition-colors duration-100",
        Wc[a],
        O.disabled ? "text-neutral-300 cursor-not-allowed opacity-50" : S(
          "cursor-pointer",
          O.danger ? S("text-error", B ? "bg-error/10" : "hover:bg-error/10") : S(
            "text-neutral-700",
            B ? "bg-primary/10 text-primary" : "hover:bg-neutral-50"
          )
        )
      ), K = () => {
        var F;
        O.disabled || ((F = O.onClick) == null || F.call(O), n == null || n(O.value), b());
      };
      return /* @__PURE__ */ C("div", { children: [
        O.dividerBefore && /* @__PURE__ */ f("div", { className: "my-1 border-t border-neutral-200", role: "separator" }),
        O.href && !O.disabled ? /* @__PURE__ */ f(
          "a",
          {
            href: O.href,
            role: "menuitem",
            tabIndex: -1,
            className: V,
            onClick: (F) => {
              var te;
              (te = O.onClick) == null || te.call(O), n == null || n(O.value), b(), O.onClick && F.preventDefault();
            },
            onMouseEnter: () => g(T),
            onMouseLeave: () => g(-1),
            "aria-disabled": O.disabled,
            children: q
          }
        ) : /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            role: "menuitem",
            tabIndex: -1,
            className: S(V, "text-left"),
            onClick: K,
            onMouseEnter: () => g(T),
            onMouseLeave: () => g(-1),
            disabled: O.disabled,
            "aria-disabled": O.disabled,
            children: q
          }
        )
      ] }, O.value);
    };
    return /* @__PURE__ */ f(
      xi,
      {
        ref: u,
        trigger: r,
        placement: o,
        offset: i,
        disabled: s,
        open: l,
        onOpenChange: _,
        onKeyDown: j,
        contentClassName: "min-w-[180px] py-1 px-1 max-h-80 overflow-auto",
        className: c,
        ...d,
        children: /* @__PURE__ */ C("div", { ref: h, role: "menu", "aria-orientation": "vertical", children: [
          e && /* @__PURE__ */ C("div", { children: [
            e,
            /* @__PURE__ */ f("div", { className: "my-1 border-t border-neutral-200", role: "separator" })
          ] }),
          t.map((O, T) => Y(O, T))
        ] })
      }
    );
  }
);
sr.displayName = "DropdownMenu";
const Uc = ae(
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
    const p = c || `textarea-${Math.random().toString(36).slice(2, 9)}`, m = !!n, g = typeof d == "string" ? d.length : 0;
    return /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1.5", r && "w-full"), children: [
      e && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: p,
          className: "text-sm font-medium text-neutral-700",
          children: e
        }
      ),
      /* @__PURE__ */ f(
        "textarea",
        {
          ref: l,
          id: p,
          disabled: a,
          maxLength: i,
          value: d,
          className: S(
            // Base styles
            "w-full rounded-md border bg-white px-4 py-3",
            "transition-colors duration-200",
            "placeholder:text-neutral-400",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
            "resize-y min-h-[100px]",
            // Border color
            m ? "border-error focus:ring-error focus:border-error" : "border-neutral-300",
            // Disabled state
            a && "bg-neutral-100 cursor-not-allowed opacity-60",
            s
          ),
          "aria-invalid": m,
          "aria-describedby": m ? `${p}-error` : t ? `${p}-helper` : void 0,
          ...u
        }
      ),
      /* @__PURE__ */ C("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ C("div", { children: [
          m && /* @__PURE__ */ f("p", { id: `${p}-error`, className: "text-sm text-error", children: n }),
          !m && t && /* @__PURE__ */ f("p", { id: `${p}-helper`, className: "text-sm text-neutral-500", children: t })
        ] }),
        o && i && /* @__PURE__ */ C("span", { className: "text-sm text-neutral-500", children: [
          g,
          "/",
          i
        ] })
      ] })
    ] });
  }
);
Uc.displayName = "Textarea";
let fn = null;
function Hc() {
  return fn || (fn = Promise.all([
    import("./index-BjM9QVRt.js").then((e) => e.i),
    // prismjs core ships markup/css/clike/javascript — no grammars eagerly imported
    import("./prism-DJGrwmvA.js").then((e) => e.p)
  ]).then(([e, t]) => ({
    Editor: e.default ?? e,
    Prism: t.default ?? t
  }))), fn;
}
const Yc = {
  json: () => import("./prism-json-iVb7He6L.js"),
  bash: () => import("./prism-bash-zSjFhtUz.js"),
  yaml: () => import("./prism-yaml-DwdKlmeG.js"),
  markdown: () => import("./prism-markdown-tjNeCMi3.js"),
  jsx: () => import("./prism-jsx-yfun9EDN.js"),
  typescript: () => import("./prism-typescript-BFOjW12f.js"),
  // tsx depends on both jsx and typescript being registered first
  tsx: async () => {
    await import("./prism-jsx-yfun9EDN.js"), await import("./prism-typescript-BFOjW12f.js"), await import("./prism-tsx-D_jjxt3I.js");
  }
}, Ur = /* @__PURE__ */ new Map();
function Kc(e, t) {
  if (e.languages[t]) return Promise.resolve();
  const n = Yc[t];
  if (!n) return Promise.resolve();
  let r = Ur.get(t);
  return r || (r = n(), Ur.set(t, r)), r;
}
function Xc(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const _t = {
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: 13,
  lineHeight: 1.5
}, Jc = ae(
  ({
    label: e,
    helperText: t,
    error: n,
    fullWidth: r = !1,
    value: o,
    onValueChange: i,
    language: a = "javascript",
    placeholder: s,
    tabSize: c = 2,
    insertSpaces: d = !0,
    minHeight: u = 120,
    displayOnly: l = !1,
    showLineNumbers: p = !1,
    showCount: m = !1,
    showCopyButton: g = !1,
    disabled: h = !1,
    className: x,
    id: E,
    ...y
  }, N) => {
    const w = ps(), b = E || `code-editor-${w}`, k = !!n, [_, j] = pe(null), [Y, O] = pe(null), [T, B] = pe(!1), q = ee(null);
    he(() => {
      let P = !0;
      return (async () => {
        const z = await Hc();
        P && (j(z), await Kc(z.Prism, a), P && O(a));
      })(), () => {
        P = !1;
      };
    }, [a]), he(
      () => () => {
        q.current && clearTimeout(q.current);
      },
      []
    );
    const V = _ == null ? void 0 : _.Prism, K = !!V && Y === a, F = (P) => {
      if (V && K) {
        const z = V.languages[a] ?? V.languages.javascript;
        if (z) return V.highlight(P, z, a);
      }
      return Xc(P);
    }, te = () => {
      var P;
      (P = navigator.clipboard) == null || P.writeText(o), B(!0), q.current && clearTimeout(q.current), q.current = setTimeout(() => B(!1), 2e3);
    }, Z = Math.max(1, o.split(`
`).length), re = k ? `${b}-error` : t ? `${b}-helper` : void 0, I = l || !_ ? (
      // Display-only, or fallback before the editor lib resolves.
      l ? /* @__PURE__ */ f(
        "pre",
        {
          className: "m-0 overflow-auto px-4 py-3",
          style: { ..._t, minHeight: u },
          children: /* @__PURE__ */ f("code", { dangerouslySetInnerHTML: { __html: F(o) } })
        }
      ) : (
        // Editable fallback: a plain textarea so there is no layout shift.
        /* @__PURE__ */ f(
          "textarea",
          {
            id: b,
            value: o,
            disabled: h,
            placeholder: s,
            spellCheck: !1,
            onChange: (P) => i == null ? void 0 : i(P.target.value),
            className: "m-0 w-full resize-none border-0 bg-transparent px-4 py-3 focus:outline-none",
            style: { ..._t, minHeight: u }
          }
        )
      )
    ) : /* @__PURE__ */ f(
      _.Editor,
      {
        value: o,
        onValueChange: (P) => i == null ? void 0 : i(P),
        highlight: F,
        padding: { top: 12, right: 16, bottom: 12, left: 16 },
        tabSize: c,
        insertSpaces: d,
        textareaId: b,
        disabled: h,
        placeholder: s,
        style: { ..._t, minHeight: u },
        textareaClassName: "focus:outline-none"
      }
    );
    return /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1.5", r && "w-full"), children: [
      e && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: b,
          className: "text-sm font-medium text-neutral-700",
          children: e
        }
      ),
      /* @__PURE__ */ C("div", { className: "relative", children: [
        g && /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            onClick: te,
            "aria-label": T ? "Copied" : "Copy code",
            className: S(
              "absolute right-2 top-2 z-10 rounded-md p-1.5",
              "bg-white/80 text-neutral-500 backdrop-blur",
              "transition-colors hover:bg-neutral-100 hover:text-neutral-700",
              "focus:outline-none focus:ring-2 focus:ring-primary"
            ),
            children: T ? /* @__PURE__ */ f(di, { size: 16, className: "text-success" }) : /* @__PURE__ */ f(zs, { size: 16 })
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            ref: N,
            "aria-invalid": k || void 0,
            "aria-describedby": re,
            className: S(
              "omnitok-code-editor",
              "overflow-hidden rounded-md border bg-white",
              "transition-colors duration-200",
              !l && !h && "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary",
              k ? "border-error focus-within:border-error focus-within:ring-error" : "border-neutral-300",
              h && "cursor-not-allowed bg-neutral-100 opacity-60",
              x
            ),
            ...y,
            children: /* @__PURE__ */ C("div", { className: "flex", children: [
              p && /* @__PURE__ */ f(
                "div",
                {
                  "aria-hidden": "true",
                  className: "select-none border-r border-neutral-200 bg-neutral-50 py-3 pl-4 pr-3 text-right text-neutral-400",
                  style: _t,
                  children: Array.from({ length: Z }, (P, z) => /* @__PURE__ */ f("div", { children: z + 1 }, z))
                }
              ),
              /* @__PURE__ */ f("div", { className: "min-w-0 flex-1", children: I })
            ] })
          }
        )
      ] }),
      (k || t || m && !l) && /* @__PURE__ */ C("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ C("div", { children: [
          k && /* @__PURE__ */ f("p", { id: `${b}-error`, className: "text-sm text-error", children: n }),
          !k && t && /* @__PURE__ */ f("p", { id: `${b}-helper`, className: "text-sm text-neutral-500", children: t })
        ] }),
        m && !l && /* @__PURE__ */ C("span", { className: "text-sm text-neutral-500", children: [
          Z,
          " ",
          Z === 1 ? "line" : "lines",
          " · ",
          o.length,
          " chars"
        ] })
      ] })
    ] });
  }
);
Jc.displayName = "CodeEditor";
const Qc = {
  primary: { checked: "peer-checked:bg-primary peer-checked:border-primary", ring: "peer-focus:ring-primary" },
  accent: { checked: "peer-checked:bg-accent peer-checked:border-accent", ring: "peer-focus:ring-accent" },
  neutral: { checked: "peer-checked:bg-neutral-600 peer-checked:border-neutral-600", ring: "peer-focus:ring-neutral-400" },
  success: { checked: "peer-checked:bg-success peer-checked:border-success", ring: "peer-focus:ring-success" },
  info: { checked: "peer-checked:bg-info peer-checked:border-info", ring: "peer-focus:ring-info" },
  violet: { checked: "peer-checked:bg-violet peer-checked:border-violet", ring: "peer-focus:ring-violet" },
  rose: { checked: "peer-checked:bg-rose peer-checked:border-rose", ring: "peer-focus:ring-rose" },
  teal: { checked: "peer-checked:bg-teal peer-checked:border-teal", ring: "peer-focus:ring-teal" }
}, Zc = {
  primary: { checked: "peer-checked:bg-primary", ring: "peer-focus:ring-primary" },
  accent: { checked: "peer-checked:bg-accent", ring: "peer-focus:ring-accent" },
  neutral: { checked: "peer-checked:bg-neutral-600", ring: "peer-focus:ring-neutral-400" },
  success: { checked: "peer-checked:bg-success", ring: "peer-focus:ring-success" },
  info: { checked: "peer-checked:bg-info", ring: "peer-focus:ring-info" },
  violet: { checked: "peer-checked:bg-violet", ring: "peer-focus:ring-violet" },
  rose: { checked: "peer-checked:bg-rose", ring: "peer-focus:ring-rose" },
  teal: { checked: "peer-checked:bg-teal", ring: "peer-focus:ring-teal" }
}, yi = ae(
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
    onChange: u,
    ...l
  }, p) => {
    const m = d || `checkbox-${Math.random().toString(36).slice(2, 9)}`, g = !!n, h = (y) => {
      u == null || u(y), a == null || a(y.target.checked);
    }, x = () => {
      const y = Qc[o];
      return /* @__PURE__ */ f(
        "div",
        {
          className: S(
            "w-5 h-5 rounded border-2 transition-colors",
            "flex items-center justify-center",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "[&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100",
            y.ring,
            y.checked,
            g ? "border-error" : "border-neutral-300 peer-hover:border-neutral-400"
          ),
          children: r ? /* @__PURE__ */ f(pc, { className: "w-3 h-3 text-white transition-opacity" }) : /* @__PURE__ */ f(di, { className: "w-3 h-3 text-white transition-opacity" })
        }
      );
    }, E = () => {
      const y = Zc[o];
      return /* @__PURE__ */ f(
        "div",
        {
          className: S(
            "relative w-11 h-6 rounded-full transition-colors",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "peer-checked:[&>div]:translate-x-5",
            y.ring,
            y.checked,
            g ? "bg-error/30" : "bg-neutral-300"
          ),
          children: /* @__PURE__ */ f(
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
    return /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1", c), children: [
      /* @__PURE__ */ C(
        "label",
        {
          htmlFor: m,
          className: S(
            "flex items-start gap-3 cursor-pointer",
            s && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ C("div", { className: S("relative flex items-center", i ? "justify-start" : "justify-center"), children: [
              /* @__PURE__ */ f(
                "input",
                {
                  ref: p,
                  type: "checkbox",
                  id: m,
                  disabled: s,
                  className: "peer sr-only",
                  "aria-invalid": g,
                  onChange: h,
                  ...l
                }
              ),
              i ? E() : x()
            ] }),
            (e || t) && /* @__PURE__ */ C("div", { className: "flex flex-col", children: [
              e && /* @__PURE__ */ f("span", { className: "text-sm font-medium text-neutral-700", children: e }),
              t && /* @__PURE__ */ f("span", { className: "text-sm text-neutral-500", children: t })
            ] })
          ]
        }
      ),
      g && /* @__PURE__ */ f("p", { className: S("text-sm text-error", i ? "ml-14" : "ml-8"), children: n })
    ] });
  }
);
yi.displayName = "Checkbox";
const el = ae(
  ({ label: e, description: t, error: n, disabled: r, className: o, id: i, ...a }, s) => {
    const c = i || `radio-${Math.random().toString(36).slice(2, 9)}`, d = !!n;
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
              /* @__PURE__ */ f(
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
              /* @__PURE__ */ f(
                "div",
                {
                  className: S(
                    "w-5 h-5 rounded-full border-2 transition-colors",
                    "flex items-center justify-center",
                    "peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2",
                    "peer-checked:border-primary",
                    d ? "border-error" : "border-neutral-300 peer-hover:border-neutral-400"
                  ),
                  children: /* @__PURE__ */ f("div", { className: "w-2.5 h-2.5 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform" })
                }
              )
            ] }),
            (e || t) && /* @__PURE__ */ C("div", { className: "flex flex-col", children: [
              e && /* @__PURE__ */ f("span", { className: "text-sm font-medium text-neutral-700", children: e }),
              t && /* @__PURE__ */ f("span", { className: "text-sm text-neutral-500", children: t })
            ] })
          ]
        }
      ),
      d && /* @__PURE__ */ f("p", { className: "text-sm text-error ml-8", children: n })
    ] });
  }
);
el.displayName = "Radio";
const tl = {
  default: "bg-white border border-neutral-200 rounded-lg",
  bordered: "bg-white border-2 border-neutral-300 rounded-lg",
  elevated: "bg-white border border-neutral-200 shadow-card rounded-lg"
}, nl = ae(
  ({ children: e, noPadding: t = !1, hoverable: n = !1, variant: r = "default", className: o, ...i }, a) => /* @__PURE__ */ f(
    "div",
    {
      ref: a,
      className: S(
        tl[r],
        !t && "p-4",
        n && "transition-shadow transition-colors duration-200 hover:shadow-card-hover hover:border-primary/30 cursor-pointer",
        o
      ),
      ...i,
      children: e
    }
  )
);
nl.displayName = "Card";
const rl = ae(
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
        /* @__PURE__ */ f("div", { className: "font-semibold text-lg", children: e }),
        t && /* @__PURE__ */ f("div", { children: t })
      ]
    }
  )
);
rl.displayName = "CardHeader";
const ol = ae(
  ({ children: e, className: t, ...n }, r) => /* @__PURE__ */ f("div", { ref: r, className: S("p-4", t), ...n, children: e })
);
ol.displayName = "CardBody";
const il = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
  between: "justify-between"
}, al = ae(
  ({ children: e, align: t = "right", className: n, ...r }, o) => /* @__PURE__ */ f(
    "div",
    {
      ref: o,
      className: S(
        "flex items-center gap-3 px-4 py-3 bg-neutral-50 border-t border-neutral-200",
        il[t],
        n
      ),
      ...r,
      children: e
    }
  )
);
al.displayName = "CardFooter";
const sl = {
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
}, cl = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base"
}, ll = {
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
}, dl = ae(
  ({
    children: e,
    variant: t = "primary",
    size: n = "md",
    pill: r = !1,
    dot: o = !1,
    className: i,
    ...a
  }, s) => o ? /* @__PURE__ */ f(
    "span",
    {
      ref: s,
      className: S(
        "inline-block rounded-full",
        n === "sm" && "w-2 h-2",
        n === "md" && "w-2.5 h-2.5",
        n === "lg" && "w-3 h-3",
        ll[t],
        i
      ),
      ...a
    }
  ) : /* @__PURE__ */ f(
    "span",
    {
      ref: s,
      className: S(
        "inline-flex items-center font-medium",
        r ? "rounded-full" : "rounded-md",
        sl[t],
        cl[n],
        i
      ),
      ...a,
      children: e
    }
  )
);
dl.displayName = "Badge";
const Hr = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl"
}, pl = {
  xs: "w-1.5 h-1.5 border",
  sm: "w-2 h-2 border",
  md: "w-2.5 h-2.5 border-2",
  lg: "w-3 h-3 border-2",
  xl: "w-4 h-4 border-2"
}, ul = {
  online: "bg-success",
  offline: "bg-neutral-400",
  busy: "bg-error",
  away: "bg-warning"
}, zn = ae(
  ({ size: e = "md", src: t, alt: n = "", initials: r, status: o, className: i, ...a }, s) => {
    const c = (d) => d ? d.split(" ").map((u) => u[0]).join("").toUpperCase().slice(0, 2) : "?";
    return /* @__PURE__ */ C("div", { ref: s, className: S("relative inline-block", i), children: [
      t ? /* @__PURE__ */ f(
        "img",
        {
          src: t,
          alt: n,
          className: S(
            "rounded-full object-cover",
            Hr[e]
          ),
          ...a
        }
      ) : /* @__PURE__ */ f(
        "div",
        {
          className: S(
            "rounded-full flex items-center justify-center font-medium",
            "bg-primary text-white",
            Hr[e]
          ),
          children: c(r || n)
        }
      ),
      o && /* @__PURE__ */ f(
        "span",
        {
          className: S(
            "absolute bottom-0 right-0 rounded-full border-white",
            pl[e],
            ul[o]
          )
        }
      )
    ] });
  }
);
zn.displayName = "Avatar";
const fl = {
  info: "bg-info/10 border-info/30 text-info-dark",
  success: "bg-success/10 border-success/30 text-success-dark",
  warning: "bg-warning/10 border-warning/30 text-warning-dark",
  error: "bg-error/10 border-error/30 text-error-dark"
}, ml = {
  info: fi,
  success: ui,
  warning: vi,
  error: pi
}, gl = ae(
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
    const d = ml[e];
    return /* @__PURE__ */ C(
      "div",
      {
        ref: c,
        role: "alert",
        className: S(
          "flex gap-3 p-4 rounded-lg border",
          fl[e],
          a
        ),
        ...s,
        children: [
          !i && /* @__PURE__ */ f(d, { className: "flex-shrink-0 w-5 h-5 mt-0.5" }),
          /* @__PURE__ */ C("div", { className: "flex-1 min-w-0", children: [
            t && /* @__PURE__ */ f("h5", { className: "font-semibold mb-1", children: t }),
            /* @__PURE__ */ f("div", { className: "text-sm", children: n })
          ] }),
          r && /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: o,
              className: "flex-shrink-0 p-1 rounded hover:bg-black/5 transition-colors",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ f(tt, { className: "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
gl.displayName = "Alert";
const wi = ({
  item: e,
  collapsed: t,
  level: n = 0,
  activeId: r,
  onItemClick: o,
  onCollapsedChange: i
}) => {
  const a = e.children && e.children.length > 0, s = e.active || e.id === r, c = a && e.children.some((h) => h.id === r), [d, u] = pe(c);
  he(() => {
    c && u(!0);
  }, [c]);
  const l = (h) => {
    var E;
    h.ctrlKey || h.metaKey || h.shiftKey || h.button !== 0 || (h.preventDefault(), o == null || o(e), (E = e.onClick) == null || E.call(e));
  }, p = () => {
    var h;
    a ? t ? (i == null || i(!1), u(!0)) : u(!d) : (o == null || o(e), (h = e.onClick) == null || h.call(e));
  }, m = /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ C("span", { className: "relative flex-shrink-0 w-4 h-4 flex items-center justify-center text-[16px]", children: [
      e.icon || /* @__PURE__ */ f("span", { className: "w-1" }),
      t && a && /* @__PURE__ */ f(ar, { className: "absolute -right-2.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 text-white/50" })
    ] }),
    !t && /* @__PURE__ */ C($e, { children: [
      /* @__PURE__ */ f("span", { className: "flex-1 truncate text-[13px]", children: e.label }),
      e.badge && /* @__PURE__ */ f("span", { className: "px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-accent text-white", children: e.badge }),
      a && /* @__PURE__ */ f(
        jt,
        {
          className: S("w-3.5 h-3.5 transition-transform", d && "rotate-180")
        }
      )
    ] })
  ] }), g = S(
    "flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg",
    "transition-all duration-200 cursor-pointer",
    "text-white/80 hover:text-white hover:bg-white/10",
    s && ["gradient-active", "!text-white", "mx-2", "font-medium"],
    n > 0 && "ml-4",
    t && "justify-center px-2"
  );
  return /* @__PURE__ */ C("div", { children: [
    e.dividerBefore && /* @__PURE__ */ f("div", { className: "my-2 border-t border-white/10", role: "separator" }),
    e.href ? /* @__PURE__ */ f(
      "a",
      {
        href: e.href,
        id: e.elementId,
        className: g,
        onClick: l,
        title: t ? e.label : void 0,
        children: m
      }
    ) : /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        id: e.elementId,
        className: S(g, "w-full text-left"),
        onClick: p,
        title: t ? e.label : void 0,
        children: m
      }
    ),
    a && d && !t && /* @__PURE__ */ f("div", { className: "mt-1 space-y-1", children: e.children.map((h) => /* @__PURE__ */ f(
      wi,
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
}, Ei = ae(
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
    const m = t, g = n ?? t;
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
        ...l,
        children: [
          /* @__PURE__ */ f(
            "div",
            {
              className: S(
                "flex items-center h-16 border-b border-white/10 px-3",
                i && "justify-center px-2"
              ),
              children: i ? /* @__PURE__ */ f(
                "button",
                {
                  type: "button",
                  onClick: () => a == null ? void 0 : a(!1),
                  className: "w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors",
                  "aria-label": "Expand sidebar",
                  children: g || /* @__PURE__ */ f("span", { className: "text-xs text-white", children: "Logo" })
                }
              ) : /* @__PURE__ */ C($e, { children: [
                /* @__PURE__ */ C("div", { className: "flex flex-col flex-1 min-w-0", children: [
                  /* @__PURE__ */ f("div", { className: "flex items-center justify-center", children: m || /* @__PURE__ */ f("span", { className: "text-lg font-bold text-white", children: "Omnitok" }) }),
                  r && /* @__PURE__ */ f("span", { className: "text-[10px] text-white/50 uppercase tracking-wider mt-0.5 text-center leading-tight", children: r })
                ] }),
                s && /* @__PURE__ */ f(
                  "button",
                  {
                    type: "button",
                    onClick: () => a == null ? void 0 : a(!0),
                    className: "p-1.5 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0 ml-2",
                    "aria-label": "Collapse sidebar",
                    children: /* @__PURE__ */ f(gc, { className: "w-4 h-4" })
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ f("nav", { className: "flex-1 overflow-y-auto overflow-x-hidden py-3 space-y-0.5 scrollbar-thin", children: e.map((h) => /* @__PURE__ */ f(
            wi,
            {
              item: h,
              collapsed: i,
              activeId: c,
              onItemClick: d,
              onCollapsedChange: a
            },
            h.id
          )) }),
          o && /* @__PURE__ */ f("div", { className: "p-3 border-t border-white/10", children: o })
        ]
      }
    );
  }
);
Ei.displayName = "Sidebar";
const Ni = ae(
  ({ items: e, count: t, searchValue: n, searchPlaceholder: r, filterLabel: o, onSearchChange: i, onFilterChange: a }) => /* @__PURE__ */ f(
    sr,
    {
      offset: 14,
      card: /* @__PURE__ */ C("div", { className: "flex flex-col gap-4 p-4", children: [
        /* @__PURE__ */ f(
          Bt,
          {
            size: "sm",
            leftIcon: /* @__PURE__ */ f(gi, { size: 14 }),
            value: n,
            onChange: (s) => i == null ? void 0 : i(s.target.value),
            placeholder: r ?? "Search notifications..."
          }
        ),
        /* @__PURE__ */ f(yi, { label: o ?? "Unread only", onCheckedChange: a })
      ] }),
      items: e ?? [],
      placement: "bottom-end",
      trigger: /* @__PURE__ */ C(
        "button",
        {
          type: "button",
          className: "relative p-2 rounded-lg hover:bg-neutral-100 transition-colors",
          "aria-label": "Notifications",
          children: [
            /* @__PURE__ */ f(ks, { className: "w-5 h-5 text-neutral-600" }),
            t !== void 0 && t > 0 && /* @__PURE__ */ f("span", { className: "absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-4 h-4 text-xs font-medium text-white bg-accent rounded-full flex items-center justify-center", children: t > 9 ? "9+" : t })
          ]
        }
      )
    }
  )
);
Ni.displayName = "NotificationMenu";
const Di = ae(
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
    onMenuToggle: u,
    showMenuToggle: l = !1,
    actions: p,
    className: m,
    ...g
  }, h) => /* @__PURE__ */ C(
    "header",
    {
      ref: h,
      className: S(
        "flex items-center justify-between h-16 px-6 bg-white border-b border-neutral-200",
        m
      ),
      ...g,
      children: [
        /* @__PURE__ */ C("div", { className: "flex items-center gap-4", children: [
          l && /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: u,
              className: "p-2 rounded-lg hover:bg-neutral-100 lg:hidden",
              "aria-label": "Toggle menu",
              children: /* @__PURE__ */ f(mi, { className: "w-5 h-5 text-neutral-600" })
            }
          ),
          /* @__PURE__ */ f("div", { className: "flex flex-col", children: e && /* @__PURE__ */ f("h1", { className: "text-lg font-semibold text-neutral-900", children: e }) })
        ] }),
        /* @__PURE__ */ C("div", { className: "flex items-center gap-4", children: [
          n && /* @__PURE__ */ C("div", { className: "relative hidden md:block", children: [
            /* @__PURE__ */ f(gi, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" }),
            /* @__PURE__ */ f(
              "input",
              {
                type: "search",
                placeholder: t,
                value: r,
                onChange: (x) => o == null ? void 0 : o(x.target.value),
                className: S(
                  "w-64 pl-10 pr-4 py-2 text-sm rounded-lg",
                  "bg-neutral-100 border-none",
                  "placeholder:text-neutral-400",
                  "focus:outline-none focus:ring-2 focus:ring-primary"
                )
              }
            )
          ] }),
          p,
          i && /* @__PURE__ */ f(Ni, { ...a }),
          s && /* @__PURE__ */ f(
            sr,
            {
              className: "-mr-2",
              offset: 16,
              card: /* @__PURE__ */ C("div", { className: "px-4 py-2 flex items-center gap-4", children: [
                /* @__PURE__ */ f(zn, { src: s.avatar, alt: s.name, size: "xl" }),
                /* @__PURE__ */ C("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ f("span", { className: "text-md font-medium text-neutral-900", children: s.name }),
                  s.email && /* @__PURE__ */ f("span", { className: "text-xs text-neutral-500", children: s.email }),
                  s.role && /* @__PURE__ */ f("span", { className: "text-xs text-neutral-500", children: s.role })
                ] })
              ] }),
              items: c ?? [],
              trigger: /* @__PURE__ */ f("div", { className: "pr-2 flex items-center", children: /* @__PURE__ */ f(
                zn,
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
Di.displayName = "Header";
const vl = ae(
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
    onUserClick: m,
    showNotifications: g = !0,
    notificationMenu: h,
    showSearch: x = !0,
    searchValue: E,
    onSearchChange: y,
    headerActions: N,
    header: w,
    hideSidebar: b = !1,
    hideHeader: k = !1,
    rightPanel: _,
    rightPanelWidth: j = "360px",
    className: Y,
    ...O
  }, T) => {
    const [B, q] = pe(!1), [V, K] = pe(!1), F = !!t, te = !!w;
    return /* @__PURE__ */ C("div", { ref: T, className: S("flex h-screen bg-neutral-50", Y), ...O, children: [
      !b && /* @__PURE__ */ C($e, { children: [
        !F && V && /* @__PURE__ */ f(
          "div",
          {
            className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
            onClick: () => K(!1)
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            className: S(
              "fixed lg:static inset-y-0 left-0 z-50 lg:z-auto",
              "transform lg:transform-none transition-transform duration-300",
              !F && V ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
              F && "translate-x-0"
            ),
            children: F ? t : /* @__PURE__ */ f(
              Ei,
              {
                items: n,
                logo: o,
                logoCollapsed: i,
                systemName: a,
                footer: s,
                collapsible: r,
                collapsed: B,
                onCollapsedChange: q,
                activeId: c,
                onItemClick: (Z) => {
                  d == null || d(Z), K(!1);
                }
              }
            )
          }
        )
      ] }),
      !b && k && !te && /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: () => K(!V),
          className: "fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md border border-neutral-200 lg:hidden",
          "aria-label": "Toggle menu",
          children: /* @__PURE__ */ f(mi, { className: "w-5 h-5 text-neutral-600" })
        }
      ),
      /* @__PURE__ */ C("div", { className: "flex-1 flex flex-col min-w-0", children: [
        !k && (te ? w : /* @__PURE__ */ f(
          Di,
          {
            title: u,
            showSearch: x,
            searchValue: E,
            onSearchChange: y,
            showNotifications: g,
            notificationMenu: h,
            user: l,
            userMenuItems: p,
            onUserClick: m,
            showMenuToggle: !b,
            onMenuToggle: () => K(!V),
            actions: N
          }
        )),
        /* @__PURE__ */ C("div", { className: "flex-1 flex overflow-hidden", children: [
          /* @__PURE__ */ f(
            "main",
            {
              className: S(
                "flex-1 overflow-y-auto p-6",
                _ && "hidden md:block"
              ),
              children: e
            }
          ),
          _ && /* @__PURE__ */ f(
            "aside",
            {
              className: "w-full md:w-[var(--panel-width)] border-l border-neutral-200 bg-white overflow-y-auto flex-shrink-0",
              style: { "--panel-width": j },
              children: _
            }
          )
        ] })
      ] })
    ] });
  }
);
vl.displayName = "Layout";
const hl = ae(
  ({
    items: e,
    showHomeIcon: t = !1,
    separator: n,
    maxItems: r,
    className: o,
    ...i
  }, a) => {
    const s = () => n || /* @__PURE__ */ f(ar, { className: "w-4 h-4 text-neutral-400 mx-2" }), c = (l, p, m) => {
      const g = /* @__PURE__ */ C($e, { children: [
        p === 0 && t && /* @__PURE__ */ f(Zs, { className: "w-4 h-4 mr-1" }),
        l.icon && /* @__PURE__ */ f("span", { className: "mr-1", children: l.icon }),
        l.label
      ] }), h = S(
        "inline-flex items-center text-sm",
        m ? "font-medium text-neutral-900" : "text-neutral-500 hover:text-neutral-700 transition-colors"
      );
      return l.href && !m ? /* @__PURE__ */ f("a", { href: l.href, className: h, children: g }) : /* @__PURE__ */ f("span", { className: h, children: g });
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
    return /* @__PURE__ */ f("nav", { ref: a, "aria-label": "Breadcrumb", className: o, ...i, children: /* @__PURE__ */ f("ol", { className: "flex items-center flex-wrap", children: d.map((l, p) => {
      const m = p === d.length - 1;
      return /* @__PURE__ */ C("li", { className: "inline-flex items-center", children: [
        c(l, p, m),
        !m && s()
      ] }, p);
    }) }) });
  }
);
hl.displayName = "Breadcrumb";
const bl = ae(
  ({ onClose: e, title: t, description: n, children: r, footer: o, className: i, ...a }, s) => /* @__PURE__ */ C(
    "div",
    {
      ref: s,
      className: S("flex flex-col h-full animate-slide-in-right", i),
      ...a,
      children: [
        /* @__PURE__ */ C("div", { className: "flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark flex-shrink-0", children: [
          /* @__PURE__ */ C("div", { className: "min-w-0 flex-1", children: [
            t && /* @__PURE__ */ f("h2", { className: "text-lg font-semibold text-white truncate", children: t }),
            n && /* @__PURE__ */ f("p", { className: "mt-1 text-sm text-white/80", children: n })
          ] }),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: e,
              className: "p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0 ml-3",
              "aria-label": "Close",
              children: /* @__PURE__ */ f(tt, { className: "w-5 h-5" })
            }
          )
        ] }),
        /* @__PURE__ */ f("div", { className: "flex-1 overflow-y-auto p-4", children: r }),
        o && /* @__PURE__ */ f("div", { className: "flex items-center justify-end gap-3 p-4 border-t border-neutral-200 flex-shrink-0", children: o })
      ]
    }
  )
);
bl.displayName = "SidePanel";
function xl({
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
  ...m
}, g) {
  const h = (w, b) => typeof n == "function" ? n(w) : String(w[n] ?? b), x = (w, b, k) => b.render ? b.render(w, k) : b.accessor ? String(w[b.accessor] ?? "") : "", E = (w) => {
    if (!w.sortable || !i) return;
    let b = "asc";
    r === w.key && (o === "asc" ? b = "desc" : o === "desc" && (b = null)), i(w.key, b);
  }, y = (w) => {
    if (!w.sortable) return null;
    const b = r === w.key, k = S(
      "w-4 h-4 ml-1",
      b ? "text-white" : "text-white/60"
    );
    return b && o === "asc" ? /* @__PURE__ */ f(Is, { className: k }) : b && o === "desc" ? /* @__PURE__ */ f(Ns, { className: k }) : /* @__PURE__ */ f(Ss, { className: k });
  }, N = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  return /* @__PURE__ */ f("div", { className: "overflow-x-auto", children: /* @__PURE__ */ C(
    "table",
    {
      ref: g,
      className: S("w-full border-collapse", p),
      ...m,
      children: [
        /* @__PURE__ */ f("thead", { className: "bg-primary text-white", children: /* @__PURE__ */ f("tr", { children: e.map((w) => /* @__PURE__ */ f(
          "th",
          {
            className: S(
              "font-semibold text-white text-sm",
              l ? "px-3 py-2" : "px-4 py-3",
              N[w.align || "left"],
              w.sortable && "cursor-pointer select-none hover:bg-primary-dark"
            ),
            style: { width: w.width },
            onClick: () => E(w),
            children: /* @__PURE__ */ C("div", { className: S(
              "flex items-center",
              w.align === "center" && "justify-center",
              w.align === "right" && "justify-end"
            ), children: [
              w.header,
              y(w)
            ] })
          },
          w.key
        )) }) }),
        /* @__PURE__ */ f("tbody", { className: "bg-white divide-y divide-neutral-200", children: s ? /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f(
          "td",
          {
            colSpan: e.length,
            className: "px-4 py-8 text-center text-neutral-500",
            children: /* @__PURE__ */ C("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ f("div", { className: "w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" }),
              "Loading..."
            ] })
          }
        ) }) : t.length === 0 ? /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f(
          "td",
          {
            colSpan: e.length,
            className: "px-4 py-8 text-center text-neutral-500",
            children: c
          }
        ) }) : t.map((w, b) => /* @__PURE__ */ f(
          "tr",
          {
            className: S(
              "transition-colors",
              d && b % 2 === 1 && "bg-neutral-50",
              u && "hover:bg-neutral-50",
              a && "cursor-pointer"
            ),
            onClick: () => a == null ? void 0 : a(w, b),
            children: e.map((k) => /* @__PURE__ */ f(
              "td",
              {
                className: S(
                  "text-neutral-700 text-sm",
                  l ? "px-3 py-2" : "px-4 py-3",
                  N[k.align || "left"]
                ),
                children: x(w, k, b)
              },
              k.key
            ))
          },
          h(w, b)
        )) })
      ]
    }
  ) });
}
const kv = ae(xl), Si = ir(null), yl = {
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
}, wl = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg"
}, El = ae(
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
    const [l, p] = pe(
      n || ((x = e[0]) == null ? void 0 : x.id) || ""
    ), m = t ?? l, g = yl[o], h = (E) => {
      t === void 0 && p(E), r == null || r(E);
    };
    return /* @__PURE__ */ f(Si.Provider, { value: { activeId: m }, children: /* @__PURE__ */ C("div", { ref: u, className: s, ...d, children: [
      /* @__PURE__ */ f(
        "div",
        {
          role: "tablist",
          className: S(
            "flex",
            g.list,
            i && "w-full"
          ),
          children: e.map((E) => /* @__PURE__ */ C(
            "button",
            {
              role: "tab",
              type: "button",
              "aria-selected": m === E.id,
              "aria-controls": `tabpanel-${E.id}`,
              disabled: E.disabled,
              onClick: () => h(E.id),
              className: S(
                "flex items-center justify-center gap-2 font-medium transition-all min-w-0",
                g.tab,
                wl[a],
                m === E.id ? g.active : g.inactive,
                i && "flex-1",
                E.disabled && "opacity-50 cursor-not-allowed"
              ),
              children: [
                E.icon,
                /* @__PURE__ */ f("span", { className: "truncate", children: E.label }),
                E.badge !== void 0 && /* @__PURE__ */ f(
                  "span",
                  {
                    className: S(
                      "px-1.5 py-0.5 text-xs font-medium rounded-full shrink-0",
                      m === E.id ? "bg-white/20" : "bg-neutral-200 text-neutral-600"
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
El.displayName = "Tabs";
const Nl = ae(
  ({ id: e, children: t, className: n, ...r }, o) => {
    const i = wt(Si);
    if (!i)
      throw new Error("TabPanel must be used within Tabs");
    return i.activeId !== e ? null : /* @__PURE__ */ f(
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
Nl.displayName = "TabPanel";
const Dl = {
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
    "pagination.info": "{start}-{end} de {total}",
    "pagination.itemsPerPage": "Elementos por página"
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
    "pagination.info": "{start}-{end} of {total}",
    "pagination.itemsPerPage": "Items per page"
  }
}, Sl = /\{(\w+)\}/g;
function Ol(e, t) {
  if (!t) return e;
  const n = { ...e };
  for (const [r, o] of Object.entries(t))
    n[r] = { ...n[r] ?? {}, ...o };
  return n;
}
function Xt({
  language: e,
  messagesByLanguage: t,
  fallbackLanguage: n = "en"
}) {
  const r = Ol(Dl, t);
  return {
    language: e,
    messagesByLanguage: r,
    t: (i, a) => {
      const s = r[e] ?? {}, c = r[n] ?? {}, d = s[i] ?? c[i] ?? i;
      return a ? d.replace(Sl, (u, l) => {
        const p = String(l), m = a[p];
        return m == null ? u : String(m);
      }) : d;
    }
  };
}
const Il = Xt({ language: "es" }), Oi = ir(Il);
function Av({
  children: e,
  language: t,
  messages: n,
  fallbackLanguage: r = "es"
}) {
  const o = je(
    () => Xt({ language: t, messagesByLanguage: n, fallbackLanguage: r }),
    [t, n, r]
  );
  return /* @__PURE__ */ f(Oi.Provider, { value: o, children: e });
}
function Ii() {
  return wt(Oi);
}
const Yr = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg"
}, Cl = {
  sm: 14,
  md: 16,
  lg: 20
}, kl = {
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
}, Al = {
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
}, _l = ae(
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
    itemsPerPageOptions: d,
    onItemsPerPageChange: u,
    infoPosition: l = "start",
    disabled: p = !1,
    size: m = "md",
    variant: g = "primary",
    className: h,
    ...x
  }, E) => {
    const y = Ii(), { t: N } = a ? Xt({
      language: a,
      messagesByLanguage: y.messagesByLanguage
    }) : y, b = (() => {
      const F = [], Z = r * 2 + 3 + 2;
      if (t <= Z)
        return Array.from({ length: t }, (G, L) => L + 1);
      const re = Math.max(e - r, 1), I = Math.min(e + r, t), P = re > 2, z = I < t - 1;
      if (!P && z) {
        const G = 1 + 2 * r + 1;
        for (let L = 1; L <= G; L++) F.push(L);
        F.push("ellipsis"), F.push(t);
      } else if (P && !z) {
        F.push(1), F.push("ellipsis");
        const G = t - (2 * r + 1);
        for (let L = G; L <= t; L++) F.push(L);
      } else {
        F.push(1), F.push("ellipsis");
        for (let G = re; G <= I; G++) F.push(G);
        F.push("ellipsis"), F.push(t);
      }
      return F;
    })(), k = Cl[m], _ = S(
      "flex items-center justify-center rounded-full transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      Al[g],
      Yr[m],
      p && "opacity-50 cursor-not-allowed"
    ), j = ({ page: F, isActive: te }) => /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        onClick: () => !p && n(F),
        disabled: p,
        "aria-current": te ? "page" : void 0,
        className: S(
          _,
          "px-3",
          te ? kl[g] : "text-neutral-600 hover:bg-neutral-100"
        ),
        children: F
      }
    ), Y = ({ direction: F, double: te }) => {
      const Z = F === "prev", re = te ? Z ? 1 : t : Z ? e - 1 : e + 1, I = p || (Z ? e === 1 : e === t), P = te ? Z ? Ms : Ls : Z ? Rs : ar;
      return /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: () => !I && n(re),
          disabled: I,
          "aria-label": N(te ? Z ? "pagination.firstPage" : "pagination.lastPage" : Z ? "pagination.previousPage" : "pagination.nextPage"),
          className: S(
            _,
            I ? "text-neutral-300 cursor-not-allowed" : "text-neutral-600 hover:bg-neutral-100"
          ),
          children: /* @__PURE__ */ f(P, { size: k })
        }
      );
    }, O = s && c ? (e - 1) * c + 1 : void 0, T = s && c ? Math.min(e * c, s) : void 0, B = i && s !== void 0, q = Array.isArray(d) && d.length > 0, V = B || q ? /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
      B && /* @__PURE__ */ f("span", { className: "text-sm text-neutral-500", children: N("pagination.info", {
        start: O ?? "",
        end: T ?? "",
        total: s
      }) }),
      q && /* @__PURE__ */ f(
        bi,
        {
          size: m,
          disabled: p,
          "aria-label": N("pagination.itemsPerPage"),
          value: c !== void 0 ? String(c) : void 0,
          options: d.map((F) => ({ value: String(F), label: String(F) })),
          onChange: (F) => u == null ? void 0 : u(Number(F.target.value))
        }
      )
    ] }) : null, K = /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
      o && /* @__PURE__ */ f(Y, { direction: "prev", double: !0 }),
      /* @__PURE__ */ f(Y, { direction: "prev" }),
      /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: b.map(
        (F, te) => F === "ellipsis" ? /* @__PURE__ */ f(
          "span",
          {
            className: S("px-2 text-neutral-400", Yr[m]),
            children: "..."
          },
          `ellipsis-${te}`
        ) : /* @__PURE__ */ f(j, { page: F, isActive: F === e }, F)
      ) }),
      /* @__PURE__ */ f(Y, { direction: "next" }),
      o && /* @__PURE__ */ f(Y, { direction: "next", double: !0 })
    ] });
    return /* @__PURE__ */ f(
      "nav",
      {
        ref: E,
        role: "navigation",
        "aria-label": N("pagination.ariaLabel"),
        className: S(
          "flex items-center gap-2",
          l === "end" && "justify-between w-full",
          h
        ),
        ...x,
        children: l === "end" ? /* @__PURE__ */ C($e, { children: [
          K,
          V
        ] }) : /* @__PURE__ */ C($e, { children: [
          V,
          K
        ] })
      }
    );
  }
);
_l.displayName = "Pagination";
const Pl = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-4xl"
}, Ci = ae(
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
  }, m) => {
    const g = Q(
      (h) => {
        h.key === "Escape" && c && t();
      },
      [c, t]
    );
    return he(() => (e && (document.addEventListener("keydown", g), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), [e, g]), e ? /* @__PURE__ */ C(
      "div",
      {
        className: "fixed inset-0 z-50 flex overflow-y-auto",
        role: "dialog",
        "aria-modal": "true",
        children: [
          /* @__PURE__ */ f(
            "div",
            {
              className: "fixed inset-0 bg-black/50 animate-fade-in",
              onClick: s ? t : void 0
            }
          ),
          /* @__PURE__ */ f(
            "div",
            {
              className: S(
                "relative flex min-h-full w-full p-4",
                u ? "items-center justify-center" : "items-start justify-center pt-16"
              ),
              children: /* @__PURE__ */ C(
                "div",
                {
                  ref: m,
                  className: S(
                    "relative w-full bg-white rounded-lg shadow-modal",
                    "animate-fade-in",
                    Pl[a],
                    l
                  ),
                  onClick: (h) => h.stopPropagation(),
                  ...p,
                  children: [
                    (n || d) && /* @__PURE__ */ C("div", { className: "flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark rounded-t-lg", children: [
                      /* @__PURE__ */ C("div", { children: [
                        n && /* @__PURE__ */ f("h2", { className: "text-lg font-semibold text-white", children: n }),
                        r && /* @__PURE__ */ f("p", { className: "mt-1 text-sm text-white/80", children: r })
                      ] }),
                      d && /* @__PURE__ */ f(
                        "button",
                        {
                          type: "button",
                          onClick: t,
                          className: "p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors",
                          "aria-label": "Close",
                          children: /* @__PURE__ */ f(tt, { className: "w-5 h-5" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ f("div", { className: "p-4", children: o }),
                    i && /* @__PURE__ */ f("div", { className: "flex items-center justify-end gap-3 p-4 border-t border-neutral-200", children: i })
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
Ci.displayName = "Modal";
const Rl = ({
  message: e,
  confirmText: t = "Confirm",
  cancelText: n = "Cancel",
  confirmVariant: r = "primary",
  onConfirm: o,
  onClose: i,
  loading: a,
  ...s
}) => /* @__PURE__ */ f(
  Ci,
  {
    ...s,
    onClose: i,
    size: "sm",
    footer: /* @__PURE__ */ C($e, { children: [
      /* @__PURE__ */ f(Lt, { variant: "neutral", ghost: !0, onClick: i, disabled: a, children: n }),
      /* @__PURE__ */ f(Lt, { variant: r, onClick: o, loading: a, children: t })
    ] }),
    children: /* @__PURE__ */ f("p", { className: "text-neutral-700", children: e })
  }
);
Rl.displayName = "ConfirmModal";
const Tl = {
  info: "bg-info text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-error text-white"
}, $l = {
  info: fi,
  success: ui,
  warning: vi,
  error: pi
}, ki = ae(
  ({ toast: e, onClose: t, className: n, ...r }, o) => {
    const [i, a] = pe(!1), s = $l[e.variant];
    he(() => {
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
        className: S(
          "flex items-start gap-3 p-4 rounded-lg shadow-lg min-w-[320px] max-w-md",
          "transition-all duration-200",
          i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          Tl[e.variant],
          n
        ),
        ...r,
        children: [
          /* @__PURE__ */ f(s, { className: "flex-shrink-0 w-5 h-5 mt-0.5" }),
          /* @__PURE__ */ C("div", { className: "flex-1 min-w-0", children: [
            e.title && /* @__PURE__ */ f("h5", { className: "font-semibold mb-0.5", children: e.title }),
            /* @__PURE__ */ f("p", { className: "text-sm opacity-90", children: e.message })
          ] }),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: c,
              className: "flex-shrink-0 p-1 rounded hover:bg-white/20 transition-colors",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ f(tt, { className: "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
ki.displayName = "Toast";
const Ml = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, jl = ({
  position: e = "top-right",
  toasts: t,
  onClose: n
}) => /* @__PURE__ */ f(
  "div",
  {
    className: S(
      "fixed z-50 flex flex-col gap-2",
      Ml[e]
    ),
    children: t.map((r) => /* @__PURE__ */ f(ki, { toast: r, onClose: n }, r.id))
  }
), Ai = ir(null), _v = ({ children: e, position: t = "top-right" }) => {
  const [n, r] = pe([]), o = Q((u) => {
    const l = Math.random().toString(36).slice(2, 9);
    return r((p) => [...p, { ...u, id: l }]), l;
  }, []), i = Q((u) => {
    r((l) => l.filter((p) => p.id !== u));
  }, []), a = Q(
    (u, l) => o({ variant: "success", message: u, title: l }),
    [o]
  ), s = Q(
    (u, l) => o({ variant: "error", message: u, title: l }),
    [o]
  ), c = Q(
    (u, l) => o({ variant: "warning", message: u, title: l }),
    [o]
  ), d = Q(
    (u, l) => o({ variant: "info", message: u, title: l }),
    [o]
  );
  return /* @__PURE__ */ C(Ai.Provider, { value: { toasts: n, addToast: o, removeToast: i, success: a, error: s, warning: c, info: d }, children: [
    e,
    /* @__PURE__ */ f(jl, { position: t, toasts: n, onClose: i })
  ] });
}, Pv = () => {
  const e = wt(Ai);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, Ll = ae(
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
    showForgotPassword: d = !0,
    footer: u,
    variant: l = "gradient",
    className: p,
    ...m
  }, g) => {
    const h = Ii(), { t: x } = e ? Xt({
      language: e,
      messagesByLanguage: h.messagesByLanguage
    }) : h, [E, y] = pe(""), [N, w] = pe(""), [b, k] = pe(!1), [_, j] = pe(!1), O = /* @__PURE__ */ C("form", { onSubmit: (T) => {
      T.preventDefault(), o == null || o(E, N);
    }, className: "space-y-6", children: [
      /* @__PURE__ */ C("div", { className: "text-center mb-8", children: [
        (t || n) && /* @__PURE__ */ C("div", { className: "flex justify-center mb-6", children: [
          /* @__PURE__ */ f("div", { className: "md:hidden", children: t }),
          /* @__PURE__ */ f("div", { className: "hidden md:block", children: n || t })
        ] }),
        /* @__PURE__ */ f("h1", { className: "text-2xl font-bold text-neutral-900", children: x("login.title") }),
        /* @__PURE__ */ f("p", { className: "mt-2 text-neutral-500", children: x("login.subtitle") })
      ] }),
      a && /* @__PURE__ */ f("div", { className: "p-3 rounded-lg bg-error/10 border border-error/20 text-error text-sm", children: a }),
      /* @__PURE__ */ C("div", { children: [
        /* @__PURE__ */ f("label", { htmlFor: "email", className: "block text-sm font-medium text-neutral-700 mb-1", children: x("login.emailLabel") }),
        /* @__PURE__ */ f(
          Bt,
          {
            id: "email",
            type: "email",
            value: E,
            onChange: (T) => y(T.target.value),
            placeholder: x("login.emailPlaceholder"),
            leftIcon: /* @__PURE__ */ f(cc, { className: "w-5 h-5" }),
            required: !0,
            disabled: i
          }
        )
      ] }),
      /* @__PURE__ */ C("div", { children: [
        /* @__PURE__ */ f("label", { htmlFor: "password", className: "block text-sm font-medium text-neutral-700 mb-1", children: x("login.passwordLabel") }),
        /* @__PURE__ */ f(
          Bt,
          {
            id: "password",
            type: b ? "text" : "password",
            value: N,
            onChange: (T) => w(T.target.value),
            placeholder: x("login.passwordPlaceholder"),
            leftIcon: /* @__PURE__ */ f(ac, { className: "w-5 h-5" }),
            rightIcon: /* @__PURE__ */ f(
              "button",
              {
                type: "button",
                onClick: () => k(!b),
                className: "text-neutral-400 hover:text-neutral-600",
                children: b ? /* @__PURE__ */ f(Ws, { className: "w-5 h-5" }) : /* @__PURE__ */ f(Us, { className: "w-5 h-5" })
              }
            ),
            required: !0,
            disabled: i
          }
        )
      ] }),
      /* @__PURE__ */ C("div", { className: "flex items-center justify-between", children: [
        c && /* @__PURE__ */ C("label", { className: "flex items-center gap-2 cursor-pointer", children: [
          /* @__PURE__ */ f(
            "input",
            {
              type: "checkbox",
              checked: _,
              onChange: (T) => j(T.target.checked),
              className: "w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary"
            }
          ),
          /* @__PURE__ */ f("span", { className: "text-sm text-neutral-600", children: x("login.rememberMe") })
        ] }),
        d && s && /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            onClick: s,
            className: "text-sm text-primary hover:text-primary-dark font-medium",
            children: x("login.forgotPassword")
          }
        )
      ] }),
      /* @__PURE__ */ f(Lt, { type: "submit", variant: "accent", fullWidth: !0, loading: i, className: "py-3", children: x("login.submit") }),
      u && /* @__PURE__ */ f("div", { className: "text-center", children: u })
    ] });
    return l === "split" ? /* @__PURE__ */ C("div", { ref: g, className: S("min-h-screen flex", p), ...m, children: [
      /* @__PURE__ */ C("div", { className: "hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sidebar via-primary to-accent p-12 flex-col justify-between", children: [
        /* @__PURE__ */ f("div", { children: (r || n || t) && /* @__PURE__ */ f("div", { className: "mb-8", children: r || n || t }) }),
        /* @__PURE__ */ C("div", { className: "text-white", children: [
          /* @__PURE__ */ f("h2", { className: "text-4xl font-bold mb-4", children: x("login.split.heroTitle") }),
          /* @__PURE__ */ f("p", { className: "text-white/80 text-lg", children: x("login.split.heroDescription") })
        ] }),
        /* @__PURE__ */ f("div", { className: "text-white/50 text-sm", children: x("login.split.copyright", { year: (/* @__PURE__ */ new Date()).getFullYear() }) })
      ] }),
      /* @__PURE__ */ f("div", { className: "w-full lg:w-1/2 flex items-center justify-center p-8 bg-white", children: /* @__PURE__ */ f("div", { className: "w-full max-w-md", children: O }) })
    ] }) : l === "centered" ? /* @__PURE__ */ f(
      "div",
      {
        ref: g,
        className: S(
          "min-h-screen flex items-center justify-center p-4 bg-neutral-100",
          p
        ),
        ...m,
        children: /* @__PURE__ */ f("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-xl p-8", children: O })
      }
    ) : /* @__PURE__ */ f(
      "div",
      {
        ref: g,
        className: S(
          "min-h-screen flex items-center justify-center p-4",
          "bg-gradient-to-br from-sidebar via-primary to-accent",
          p
        ),
        ...m,
        children: /* @__PURE__ */ f("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-2xl p-8", children: O })
      }
    );
  }
);
Ll.displayName = "LoginPage";
function Se(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Bl = typeof Symbol == "function" && Symbol.observable || "@@observable", Kr = Bl, Xr = () => Math.random().toString(36).substring(7).split("").join("."), Fl = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Xr()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Xr()}`
}, Jr = Fl;
function Vl(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function zl(e) {
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
  if (ql(e))
    return "date";
  if (Wl(e))
    return "error";
  const n = Gl(e);
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
function Gl(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Wl(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function ql(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Le(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = zl(e)), t;
}
function _i(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Se(2) : `Expected the root reducer to be a function. Instead, received: '${Le(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Se(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Se(1) : `Expected the enhancer to be a function. Instead, received: '${Le(n)}'`);
    return n(_i)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function d() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((x, E) => {
      a.set(E, x);
    }));
  }
  function u() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Se(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function l(x) {
    if (typeof x != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Se(4) : `Expected the listener to be a function. Instead, received: '${Le(x)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Se(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let E = !0;
    d();
    const y = s++;
    return a.set(y, x), function() {
      if (E) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Se(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        E = !1, d(), a.delete(y), i = null;
      }
    };
  }
  function p(x) {
    if (!Vl(x))
      throw new Error(process.env.NODE_ENV === "production" ? Se(7) : `Actions must be plain objects. Instead, the actual type was: '${Le(x)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof x.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Se(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof x.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Se(17) : `Action "type" property must be a string. Instead, the actual type was: '${Le(x.type)}'. Value was: '${x.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Se(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = r(o, x);
    } finally {
      c = !1;
    }
    return (i = a).forEach((y) => {
      y();
    }), x;
  }
  function m(x) {
    if (typeof x != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Se(10) : `Expected the nextReducer to be a function. Instead, received: '${Le(x)}`);
    r = x, p({
      type: Jr.REPLACE
    });
  }
  function g() {
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
          throw new Error(process.env.NODE_ENV === "production" ? Se(11) : `Expected the observer to be an object. Instead, received: '${Le(E)}'`);
        function y() {
          const w = E;
          w.next && w.next(u());
        }
        return y(), {
          unsubscribe: x(y)
        };
      },
      [Kr]() {
        return this;
      }
    };
  }
  return p({
    type: Jr.INIT
  }), {
    dispatch: p,
    subscribe: l,
    getState: u,
    replaceReducer: m,
    [Kr]: g
  };
}
function Qr(e, t) {
  return function(...n) {
    return t(e.apply(this, n));
  };
}
function Zr(e, t) {
  if (typeof e == "function")
    return Qr(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Se(16) : `bindActionCreators expected an object or a function, but instead received: '${Le(e)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = Qr(o, t));
  }
  return n;
}
function Pi(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function Ul(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Se(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...d) => i(c, ...d)
    }, s = e.map((c) => c(a));
    return i = Pi(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
var Rv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Hl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function Yl() {
  if (eo) return mn;
  eo = 1;
  var e = ve;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return mn.useSyncExternalStoreWithSelector = function(c, d, u, l, p) {
    var m = o(null);
    if (m.current === null) {
      var g = { hasValue: !1, value: null };
      m.current = g;
    } else g = m.current;
    m = a(
      function() {
        function x(b) {
          if (!E) {
            if (E = !0, y = b, b = l(b), p !== void 0 && g.hasValue) {
              var k = g.value;
              if (p(k, b))
                return N = k;
            }
            return N = b;
          }
          if (k = N, n(y, b)) return k;
          var _ = l(b);
          return p !== void 0 && p(k, _) ? (y = b, k) : (y = b, N = _);
        }
        var E = !1, y, N, w = u === void 0 ? null : u;
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
    var h = r(c, m[0], m[1]);
    return i(
      function() {
        g.hasValue = !0, g.value = h;
      },
      [h]
    ), s(h), h;
  }, mn;
}
var gn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var to;
function Kl() {
  return to || (to = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, d) {
      return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = ve, n = typeof Object.is == "function" ? Object.is : e, r = t.useSyncExternalStore, o = t.useRef, i = t.useEffect, a = t.useMemo, s = t.useDebugValue;
    gn.useSyncExternalStoreWithSelector = function(c, d, u, l, p) {
      var m = o(null);
      if (m.current === null) {
        var g = { hasValue: !1, value: null };
        m.current = g;
      } else g = m.current;
      m = a(
        function() {
          function x(b) {
            if (!E) {
              if (E = !0, y = b, b = l(b), p !== void 0 && g.hasValue) {
                var k = g.value;
                if (p(k, b))
                  return N = k;
              }
              return N = b;
            }
            if (k = N, n(y, b))
              return k;
            var _ = l(b);
            return p !== void 0 && p(k, _) ? (y = b, k) : (y = b, N = _);
          }
          var E = !1, y, N, w = u === void 0 ? null : u;
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
      var h = r(c, m[0], m[1]);
      return i(
        function() {
          g.hasValue = !0, g.value = h;
        },
        [h]
      ), s(h), h;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), gn;
}
process.env.NODE_ENV === "production" ? Yl() : Kl();
var Ri = /* @__PURE__ */ ie.version.startsWith("19"), Xl = /* @__PURE__ */ Symbol.for(
  Ri ? "react.transitional.element" : "react.element"
), Jl = /* @__PURE__ */ Symbol.for("react.portal"), Ti = /* @__PURE__ */ Symbol.for("react.fragment"), $i = /* @__PURE__ */ Symbol.for("react.strict_mode"), Mi = /* @__PURE__ */ Symbol.for("react.profiler"), cr = /* @__PURE__ */ Symbol.for("react.consumer"), lr = /* @__PURE__ */ Symbol.for("react.context"), dr = /* @__PURE__ */ Symbol.for("react.forward_ref"), ji = /* @__PURE__ */ Symbol.for("react.suspense"), Li = /* @__PURE__ */ Symbol.for(
  "react.suspense_list"
), Jt = /* @__PURE__ */ Symbol.for("react.memo"), Bi = /* @__PURE__ */ Symbol.for("react.lazy"), Ql = /* @__PURE__ */ Symbol.for("react.offscreen"), Zl = /* @__PURE__ */ Symbol.for(
  "react.client.reference"
), ed = dr, td = Jt;
function nd(e) {
  return typeof e == "string" || typeof e == "function" || e === Ti || e === Mi || e === $i || e === ji || e === Li || e === Ql || typeof e == "object" && e !== null && (e.$$typeof === Bi || e.$$typeof === Jt || e.$$typeof === lr || e.$$typeof === cr || e.$$typeof === dr || e.$$typeof === Zl || e.getModuleId !== void 0);
}
function Gn(e) {
  if (typeof e == "object" && e !== null) {
    const { $$typeof: t } = e;
    switch (t) {
      case Xl:
        switch (e = e.type, e) {
          case Ti:
          case Mi:
          case $i:
          case ji:
          case Li:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case lr:
              case dr:
              case Bi:
              case Jt:
                return e;
              case cr:
                return e;
              default:
                return t;
            }
        }
      case Jl:
        return t;
    }
  }
}
function rd(e) {
  return Ri ? Gn(e) === cr : Gn(e) === lr;
}
function od(e) {
  return Gn(e) === Jt;
}
function pr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function vn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || pr(
      `The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`
    ));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function id(e, t, n) {
  vn(e, "mapStateToProps"), vn(t, "mapDispatchToProps"), vn(n, "mergeProps");
}
function ad(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, d, u, l, p;
  function m(y, N) {
    return c = y, d = N, u = e(c, d), l = t(r, d), p = n(u, l, d), s = !0, p;
  }
  function g() {
    return u = e(c, d), t.dependsOnOwnProps && (l = t(r, d)), p = n(u, l, d), p;
  }
  function h() {
    return e.dependsOnOwnProps && (u = e(c, d)), t.dependsOnOwnProps && (l = t(r, d)), p = n(u, l, d), p;
  }
  function x() {
    const y = e(c, d), N = !a(y, u);
    return u = y, N && (p = n(u, l, d)), p;
  }
  function E(y, N) {
    const w = !i(N, d), b = !o(
      y,
      c,
      N,
      d
    );
    return c = y, d = N, w && b ? g() : w ? h() : b ? x() : p;
  }
  return function(N, w) {
    return s ? E(N, w) : m(N, w);
  };
}
function sd(e, {
  initMapStateToProps: t,
  initMapDispatchToProps: n,
  initMergeProps: r,
  ...o
}) {
  const i = t(e, o), a = n(e, o), s = r(e, o);
  return process.env.NODE_ENV !== "production" && id(i, a, s), ad(i, a, s, e, o);
}
function cd(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function ld(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function Fi(e, t, n) {
  ld(e) || pr(
    `${n}() in ${t} must return a plain object. Instead received ${e}.`
  );
}
function Wn(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function no(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Vi(e, t) {
  return function(r, { displayName: o }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = no(e);
      let d = i(s, c);
      return typeof d == "function" && (i.mapToProps = d, i.dependsOnOwnProps = no(d), d = i(s, c)), process.env.NODE_ENV !== "production" && Fi(d, o, t), d;
    }, i;
  };
}
function ur(e, t) {
  return (n, r) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`
    );
  };
}
function dd(e) {
  return e && typeof e == "object" ? Wn(
    (t) => (
      // @ts-ignore
      cd(e, t)
    )
  ) : e ? typeof e == "function" ? (
    // @ts-ignore
    Vi(e, "mapDispatchToProps")
  ) : ur(e, "mapDispatchToProps") : Wn((t) => ({
    dispatch: t
  }));
}
function pd(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Vi(e, "mapStateToProps")
  ) : ur(e, "mapStateToProps") : Wn(() => ({}));
}
function ud(e, t, n) {
  return { ...n, ...e, ...t };
}
function fd(e) {
  return function(n, { displayName: r, areMergedPropsEqual: o }) {
    let i = !1, a;
    return function(c, d, u) {
      const l = e(c, d, u);
      return i ? o(l, a) || (a = l) : (i = !0, a = l, process.env.NODE_ENV !== "production" && Fi(a, r, "mergeProps")), a;
    };
  };
}
function md(e) {
  return e ? typeof e == "function" ? fd(e) : ur(e, "mergeProps") : () => ud;
}
function gd(e) {
  e();
}
function vd() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      gd(() => {
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
var ro = {
  notify() {
  },
  get: () => []
};
function zi(e, t) {
  let n, r = ro, o = 0, i = !1;
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
    g.onStateChange && g.onStateChange();
  }
  function d() {
    return i;
  }
  function u() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = vd());
  }
  function l() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = ro);
  }
  function p() {
    i || (i = !0, u());
  }
  function m() {
    i && (i = !1, l());
  }
  const g = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: d,
    trySubscribe: p,
    tryUnsubscribe: m,
    getListeners: () => r
  };
  return g;
}
var hd = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", bd = /* @__PURE__ */ hd(), xd = () => typeof navigator < "u" && navigator.product === "ReactNative", yd = /* @__PURE__ */ xd(), wd = () => bd || yd ? ie.useLayoutEffect : ie.useEffect, Ft = /* @__PURE__ */ wd();
function oo(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function hn(e, t) {
  if (oo(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !oo(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
var Ed = {
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
}, Nd = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Dd = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Gi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Sd = {
  [ed]: Dd,
  [td]: Gi
};
function io(e) {
  return od(e) ? Gi : Sd[e.$$typeof] || Ed;
}
var Od = Object.defineProperty, Id = Object.getOwnPropertyNames, ao = Object.getOwnPropertySymbols, Cd = Object.getOwnPropertyDescriptor, kd = Object.getPrototypeOf, so = Object.prototype;
function qn(e, t) {
  if (typeof t != "string") {
    if (so) {
      const i = kd(t);
      i && i !== so && qn(e, i);
    }
    let n = Id(t);
    ao && (n = n.concat(ao(t)));
    const r = io(e), o = io(t);
    for (let i = 0; i < n.length; ++i) {
      const a = n[i];
      if (!Nd[a] && !(o && o[a]) && !(r && r[a])) {
        const s = Cd(t, a);
        try {
          Od(e, a, s);
        } catch {
        }
      }
    }
  }
  return e;
}
var bn = /* @__PURE__ */ Symbol.for("react-redux-context"), xn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ad() {
  if (!ie.createContext) return {};
  const e = xn[bn] ?? (xn[bn] = /* @__PURE__ */ new Map());
  let t = e.get(ie.createContext);
  return t || (t = ie.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(ie.createContext, t)), t;
}
var Wi = /* @__PURE__ */ Ad(), _d = [null, null], Pd = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Rd(e, t, n) {
  Ft(() => e(...t), n);
}
function Td(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function $d(e, t, n, r, o, i, a, s, c, d, u) {
  if (!e) return () => {
  };
  let l = !1, p = null;
  const m = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let x, E;
    try {
      x = r(
        h,
        o.current
      );
    } catch (y) {
      E = y, p = y;
    }
    E || (p = null), x === i.current ? a.current || d() : (i.current = x, c.current = x, a.current = !0, u());
  };
  return n.onStateChange = m, n.trySubscribe(), m(), () => {
    if (l = !0, n.tryUnsubscribe(), n.onStateChange = null, p)
      throw p;
  };
}
function Md(e, t) {
  return e === t;
}
var co = !1;
function jd(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = Md,
  areOwnPropsEqual: i = hn,
  areStatePropsEqual: a = hn,
  areMergedPropsEqual: s = hn,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: d = Wi
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !co && (co = !0, pr(
    'The `pure` option has been removed. `connect` is now always a "pure/memoized" component'
  ));
  const u = d, l = pd(e), p = dd(t), m = md(n), g = !!e;
  return (x) => {
    if (process.env.NODE_ENV !== "production" && !/* @__PURE__ */ nd(x))
      throw new Error(
        `You must pass a component to the function returned by connect. Instead received ${Pd(
          x
        )}`
      );
    const E = x.displayName || x.name || "Component", y = `Connect(${E})`, N = {
      shouldHandleStateChanges: g,
      displayName: y,
      wrappedComponentName: E,
      WrappedComponent: x,
      // @ts-ignore
      initMapStateToProps: l,
      initMapDispatchToProps: p,
      initMergeProps: m,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function w(_) {
      const [j, Y, O] = ie.useMemo(() => {
        const { reactReduxForwardedRef: A, ...ue } = _;
        return [_.context, A, ue];
      }, [_]), T = ie.useMemo(() => {
        let A = u;
        if (j != null && j.Consumer && process.env.NODE_ENV !== "production") {
          if (!/* @__PURE__ */ rd(
            // @ts-ignore
            /* @__PURE__ */ ie.createElement(j.Consumer, null)
          ))
            throw new Error(
              "You must pass a valid React context consumer as `props.context`"
            );
          A = j;
        }
        return A;
      }, [j, u]), B = ie.useContext(T), q = !!_.store && !!_.store.getState && !!_.store.dispatch, V = !!B && !!B.store;
      if (process.env.NODE_ENV !== "production" && !q && !V)
        throw new Error(
          `Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`
        );
      const K = q ? _.store : B.store, F = V ? B.getServerState : K.getState, te = ie.useMemo(() => sd(K.dispatch, N), [K]), [Z, re] = ie.useMemo(() => {
        if (!g) return _d;
        const A = zi(
          K,
          q ? void 0 : B.subscription
        ), ue = A.notifyNestedSubs.bind(A);
        return [A, ue];
      }, [K, q, B]), I = ie.useMemo(() => q ? B : {
        ...B,
        subscription: Z
      }, [q, B, Z]), P = ie.useRef(void 0), z = ie.useRef(O), G = ie.useRef(void 0), L = ie.useRef(!1), X = ie.useRef(!1), J = ie.useRef(
        void 0
      );
      Ft(() => (X.current = !0, () => {
        X.current = !1;
      }), []);
      const U = ie.useMemo(() => () => G.current && O === z.current ? G.current : te(K.getState(), O), [K, O]), R = ie.useMemo(() => (ue) => Z ? $d(
        g,
        K,
        Z,
        // @ts-ignore
        te,
        z,
        P,
        L,
        X,
        G,
        re,
        ue
      ) : () => {
      }, [Z]);
      Rd(Td, [
        z,
        P,
        L,
        O,
        G,
        re
      ]);
      let D;
      try {
        D = ie.useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          R,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          U,
          F ? () => te(F(), O) : U
        );
      } catch (A) {
        throw J.current && (A.message += `
The error may be correlated with this previous error:
${J.current.stack}

`), A;
      }
      Ft(() => {
        J.current = void 0, G.current = void 0, P.current = D;
      });
      const $ = ie.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ ie.createElement(
          x,
          {
            ...D,
            ref: Y
          }
        )
      ), [Y, x, D]);
      return ie.useMemo(() => g ? /* @__PURE__ */ ie.createElement(T.Provider, { value: I }, $) : $, [T, $, I]);
    }
    const k = ie.memo(w);
    if (k.WrappedComponent = x, k.displayName = w.displayName = y, c) {
      const j = ie.forwardRef(
        function(O, T) {
          return /* @__PURE__ */ ie.createElement(k, { ...O, reactReduxForwardedRef: T });
        }
      );
      return j.displayName = y, j.WrappedComponent = x, /* @__PURE__ */ qn(j, x);
    }
    return /* @__PURE__ */ qn(k, x);
  };
}
var qi = jd;
function Ld(e) {
  const { children: t, context: n, serverState: r, store: o } = e, i = ie.useMemo(() => {
    const c = zi(o), d = {
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
  }, [o, r]), a = ie.useMemo(() => o.getState(), [o]);
  Ft(() => {
    const { subscription: c } = i;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [i, a]);
  const s = n || Wi;
  return /* @__PURE__ */ ie.createElement(s.Provider, { value: i }, t);
}
var Bd = Ld, Fd = process.env.NODE_ENV === "production", yn = "Invariant failed";
function lo(e, t) {
  if (Fd)
    throw new Error(yn);
  var n = typeof t == "function" ? t() : t, r = n ? "".concat(yn, ": ").concat(n) : yn;
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
}, fr = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, po = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, Vd = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, wn = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, mr = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? wn : r, i = t.border, a = i === void 0 ? wn : i, s = t.padding, c = s === void 0 ? wn : s, d = Pe(fr(n, o)), u = Pe(po(n, a)), l = Pe(po(u, c));
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
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? lo(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : lo()), o;
}, zd = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Vt = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = Vd(r, n);
  return mr({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, zt = function(t, n) {
  return n === void 0 && (n = zd()), Vt(t, n);
}, Ui = function(t, n) {
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
  return mr({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, Hi = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Ui(n, r);
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
function Gt() {
  return Gt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Gt.apply(null, arguments);
}
const Gd = process.env.NODE_ENV === "production", Wd = /[ \t]{2,}/g, qd = /^[ \t]*/gm, uo = (e) => e.replace(Wd, " ").replace(qd, "").trim(), Ud = (e) => uo(`
  %c@hello-pangea/dnd

  %c${uo(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Hd = (e) => [Ud(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Yd = "__@hello-pangea/dnd-disable-dev-warnings";
function Yi(e, t) {
  Gd || typeof window < "u" && window[Yd] || console[e](...Hd(t));
}
const me = Yi.bind(null, "warn"), Un = Yi.bind(null, "error");
function Be() {
}
function Kd(e, t) {
  return {
    ...e,
    ...t
  };
}
function Ae(e, t, n) {
  const r = t.map((o) => {
    const i = Kd(n, o.options);
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
const Xd = process.env.NODE_ENV === "production", fo = "Invariant failed";
class ut extends Error {
}
ut.prototype.toString = function() {
  return this.message;
};
function v(e, t) {
  throw Xd ? new ut(fo) : new ut(`${fo}: ${t || ""}`);
}
class Jd extends ve.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Be, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && me(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof ut && (n.preventDefault(), process.env.NODE_ENV !== "production" && Un(o.message));
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
      process.env.NODE_ENV !== "production" && Un(t.message), this.setState({});
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
const Qd = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Wt = (e) => e + 1, Zd = (e) => `
  You have lifted an item in position ${Wt(e.source.index)}
`, Ki = (e, t) => {
  const n = e.droppableId === t.droppableId, r = Wt(e.index), o = Wt(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, Xi = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, ep = (e) => {
  const t = e.destination;
  if (t)
    return Ki(e.source, t);
  const n = e.combine;
  return n ? Xi(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, mo = (e) => `
  The item has returned to its starting position
  of ${Wt(e.index)}
`, tp = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${mo(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Ki(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${Xi(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${mo(e.source)}
  `;
}, Mt = {
  dragHandleUsageInstructions: Qd,
  onDragStart: Zd,
  onDragUpdate: ep,
  onDragEnd: tp
};
function np(e, t) {
  return !!(e === t || Number.isNaN(e) && Number.isNaN(t));
}
function Ji(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (!np(e[n], t[n]))
      return !1;
  return !0;
}
function oe(e, t) {
  const n = pe(() => ({
    inputs: t,
    result: e()
  }))[0], r = ee(!0), o = ee(n), a = r.current || !!(t && o.current.inputs && Ji(t, o.current.inputs)) ? o.current : {
    inputs: t,
    result: e()
  };
  return he(() => {
    r.current = !1, o.current = a;
  }, [a]), a.result;
}
function W(e, t) {
  return oe(() => e, t);
}
const we = {
  x: 0,
  y: 0
}, Ne = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Oe = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Fe = (e, t) => e.x === t.x && e.y === t.y, nt = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Ue = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, ft = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), go = (e, t) => Math.min(...t.map((n) => ft(e, n))), Qi = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var rp = (e, t) => {
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
}), vo = (e) => [{
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
}], op = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, ip = (e, t) => t ? Et(e, t.scroll.diff.displacement) : e, ap = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, sp = (e, t) => t && t.shouldClipSubject ? rp(t.pageMarginBox, e) : Pe(e);
var Je = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = ip(e.marginBox, r), i = ap(o, n, t), a = sp(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, gr = (e, t) => {
  e.frame || (process.env.NODE_ENV, v());
  const n = e.frame, r = Oe(t, n.scroll.initial), o = nt(r), i = {
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
function ye(e, t = Ji) {
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
const Zi = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), ea = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Qt = ye((e) => Object.values(e)), cp = ye((e) => Object.values(e));
var He = ye((e, t) => cp(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function vr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Zt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var en = ye((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), lp = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !vr(o))
    return null;
  function a(m) {
    const g = {
      type: "COMBINE",
      combine: {
        draggableId: m,
        droppableId: n.descriptor.id
      }
    };
    return {
      ...o,
      at: g
    };
  }
  const s = o.displaced.all, c = s.length ? s[0] : null;
  if (e)
    return c ? a(c) : null;
  const d = en(t, r);
  if (!c) {
    if (!d.length)
      return null;
    const m = d[d.length - 1];
    return a(m.descriptor.id);
  }
  const u = d.findIndex((m) => m.descriptor.id === c);
  u === -1 && (process.env.NODE_ENV !== "production" ? v(!1, "Could not find displaced item in set") : v());
  const l = u - 1;
  if (l < 0)
    return null;
  const p = d[l];
  return a(p.descriptor.id);
}, rt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const ta = {
  point: we,
  value: 0
}, mt = {
  invisible: {},
  visible: {},
  all: []
}, dp = {
  displaced: mt,
  displacedBy: ta,
  at: null
};
var _e = (e, t) => (n) => e <= n && n <= t, na = (e) => {
  const t = _e(e.top, e.bottom), n = _e(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), a = n(r.left) || n(r.right);
    if (i && a)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, d = r.left < e.left && r.right > e.right;
    return c && d ? !0 : c && a || d && i;
  };
}, pp = (e) => {
  const t = _e(e.top, e.bottom), n = _e(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const hr = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, ra = {
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
var up = (e) => (t) => {
  const n = _e(t.top, t.bottom), r = _e(t.left, t.right);
  return (o) => e === hr ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const fp = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : we;
  return Et(e, n);
}, mp = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, gp = (e, t, n) => n(t)(e), br = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? fp(e, t) : e;
  return mp(i, t, o) && gp(i, n, o);
}, vp = (e) => br({
  ...e,
  isVisibleThroughFrameFn: na
}), oa = (e) => br({
  ...e,
  isVisibleThroughFrameFn: pp
}), hp = (e) => br({
  ...e,
  isVisibleThroughFrameFn: up(e.destination.axis)
}), bp = (e, t, n) => {
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
function xp(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Pe(fr(n, r));
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
    const d = xp(c, n), u = c.descriptor.id;
    if (s.all.push(u), !vp({
      target: d,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const p = bp(u, i, o), m = {
      draggableId: u,
      shouldAnimate: p
    };
    return s.visible[u] = m, s;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function yp(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function ho({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = yp(e, {
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
function qt({
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
    return ho({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const d = t.find((g) => g.descriptor.index === a);
  if (!d)
    return ho({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const u = en(e, t), l = t.indexOf(d), p = u.slice(l);
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
var wp = ({
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
}, Ep = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, a = n[0].descriptor.index, s = n[n.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, Np = ({
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
  if (d || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot move in direction without previous impact location") : v()), d.type === "REORDER") {
    const l = Ep({
      isMovingForward: e,
      isInHomeList: t,
      location: d.destination,
      insideDestination: i
    });
    return l == null ? null : qt({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: l
    });
  }
  const u = wp({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: r,
    combine: d.combine,
    afterCritical: c
  });
  return u == null ? null : qt({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: u
  });
}, Dp = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Ve(n, t) ? o ? we : nt(r.point) : o ? r.point : we;
}, Sp = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = Zt(t);
  r || (process.env.NODE_ENV, v());
  const o = r.draggableId, i = n[o].page.borderBox.center, a = Dp({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Ne(i, a);
};
const ia = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, Op = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, xr = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, bo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.end] + ia(e, n), xr(e, t.marginBox, n)), xo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.start] - Op(e, n), xr(e, t.marginBox, n)), Ip = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => Ue(e.line, t.contentBox[e.start] + ia(e, n), xr(e, t.contentBox, n));
var Cp = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = He(r.descriptor.id, n), a = t.page, s = r.axis;
  if (!i.length)
    return Ip({
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
      return xo({
        axis: s,
        moveRelativeTo: p.page,
        isMoving: a
      });
    const m = Vt(p.page, d.point);
    return xo({
      axis: s,
      moveRelativeTo: m,
      isMoving: a
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Ve(l.descriptor.id, o)) {
    const p = Vt(l.page, nt(o.displacedBy.point));
    return bo({
      axis: s,
      moveRelativeTo: p,
      isMoving: a
    });
  }
  return bo({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, Hn = (e, t) => {
  const n = e.frame;
  return n ? Ne(t, n.scroll.diff.displacement) : t;
};
const kp = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !n || !a ? i : a.type === "REORDER" ? Cp({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : Sp({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var tn = (e) => {
  const t = kp(e), n = e.droppable;
  return n ? Hn(n, t) : t;
}, aa = (e, t) => {
  const n = Oe(t, e.scroll.initial), r = nt(n);
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
function yo(e, t) {
  return e.map((n) => t[n]);
}
function Ap(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var _p = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = aa(t, Ne(t.scroll.current, o)), a = n.frame ? gr(n, Ne(n.frame.scroll.current, o)) : n, s = e.displaced, c = gt({
    afterDragging: yo(s.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), d = gt({
    afterDragging: yo(s.all, r),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = {}, l = {}, p = [s, c, d];
  return s.all.forEach((g) => {
    const h = Ap(g, p);
    if (h) {
      l[g] = h;
      return;
    }
    u[g] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: u,
      visible: l
    }
  };
}, Pp = (e, t) => Ne(e.scroll.diff.displacement, t), yr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = Pp(n, e), o = Oe(r, t.page.borderBox.center);
  return Ne(t.client.borderBox.center, o);
}, sa = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = Oe(n, e.page.borderBox.center), c = {
    target: Et(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? hp(c) : oa(c);
}, Rp = ({
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
  const d = He(n.descriptor.id, r), u = rt(t, n), l = lp({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: d,
    previousImpact: o
  }) || Np({
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
  const p = tn({
    impact: l,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (sa({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: p,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: yr({
        pageBorderBoxCenter: p,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const g = Oe(p, a), h = _p({
    impact: l,
    viewport: i,
    destination: n,
    draggables: r,
    maxScrollChange: g
  });
  return {
    clientSelection: s,
    impact: h,
    scrollJumpRequest: g
  };
};
const De = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot get clipped area from droppable") : v()), t;
};
var Tp = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const a = n.axis, s = _e(i[a.start], i[a.end]), c = Qt(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => na(o.frame)(De(u))).filter((u) => {
    const l = De(u);
    return e ? i[a.crossAxisEnd] < l[a.crossAxisEnd] : l[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((u) => {
    const l = De(u), p = _e(l[a.start], l[a.end]);
    return s(l[a.start]) || s(l[a.end]) || p(i[a.start]) || p(i[a.end]);
  }).sort((u, l) => {
    const p = De(u)[a.crossAxisStart], m = De(l)[a.crossAxisStart];
    return e ? p - m : m - p;
  }).filter((u, l, p) => De(u)[a.crossAxisStart] === De(p[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const d = c.filter((u) => _e(De(u)[a.start], De(u)[a.end])(t[a.line]));
  return d.length === 1 ? d[0] : d.length > 1 ? d.sort((u, l) => De(u)[a.start] - De(l)[a.start])[0] : c.sort((u, l) => {
    const p = go(t, vo(De(u))), m = go(t, vo(De(l)));
    return p !== m ? p - m : De(u)[a.start] - De(l)[a.start];
  })[0];
};
const wo = (e, t) => {
  const n = e.page.borderBox.center;
  return Ve(e.descriptor.id, t) ? Oe(n, t.displacedBy.point) : n;
}, $p = (e, t) => {
  const n = e.page.borderBox;
  return Ve(e.descriptor.id, t) ? Et(n, nt(t.displacedBy.point)) : n;
};
var Mp = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((a) => oa({
  target: $p(a, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = ft(e, Hn(n, wo(a, o))), d = ft(e, Hn(n, wo(s, o)));
  return c < d ? -1 : d < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Nt = ye(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: Ue(t.line, r)
  };
});
const jp = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return Ue(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = He(e.descriptor.id, n).reduce((d, u) => d + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : Ue(r.line, c);
}, ca = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), la = (e, t, n) => {
  const r = e.frame;
  rt(t, e) && (process.env.NODE_ENV !== "production" ? v(!1, "Should not add placeholder space to home list") : v()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot add placeholder size to a subject when it already has one") : v());
  const o = Nt(e.axis, t.displaceBy).point, i = jp(e, o, n), a = {
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
  const s = i ? Ne(r.scroll.max, i) : r.scroll.max, c = ca(r, s), d = Je({
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
}, Lp = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot remove placeholder form subject when there was none") : v());
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
  r || (process.env.NODE_ENV !== "production" ? v(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : v());
  const o = ca(n, r), i = Je({
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
var Bp = ({
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
      displacedBy: ta,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, p = tn({
      impact: l,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), m = rt(r, i) ? i : la(i, r, o);
    return sa({
      draggable: r,
      destination: m,
      newPageBorderBoxCenter: p,
      viewport: a.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? l : null;
  }
  const c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], d = (() => {
    const l = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || c ? l : l + 1;
  })(), u = Nt(i.axis, r.displaceBy);
  return qt({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: a,
    displacedBy: u,
    last: mt,
    index: d
  });
}, Fp = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = Tp({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const d = He(c.descriptor.id, o), u = Mp({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: d,
    afterCritical: s
  }), l = Bp({
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
  const p = tn({
    impact: l,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: yr({
      pageBorderBoxCenter: p,
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
const Vp = (e, t) => {
  const n = Ie(e);
  return n ? t[n] : null;
};
var zp = ({
  state: e,
  type: t
}) => {
  const n = Vp(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", d = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: p
  } = e.dimensions;
  return s ? Rp({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: d,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Fp({
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
function da(e) {
  const t = _e(e.top, e.bottom), n = _e(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function Gp(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Wp({
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
function qp({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = Qt(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !Gp(e, i))
      return !1;
    if (da(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], d = e[a.crossAxisEnd], u = _e(i[a.crossAxisStart], i[a.crossAxisEnd]), l = u(c), p = u(d);
    return !l && !p ? !0 : l ? c < s : d > s;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : Wp({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const pa = (e, t) => Pe(Et(e, t));
var Up = (e, t) => {
  const n = e.frame;
  return n ? pa(t, n.scroll.diff.value) : t;
};
function ua({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Hp({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Yp = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = n.axis, c = Nt(n.axis, t.displaceBy), d = c.value, u = e[s.start], l = e[s.end], m = en(t, r).find((h) => {
    const x = h.descriptor.id, E = h.page.borderBox.center[s.line], y = Ve(x, a), N = ua({
      displaced: o,
      id: x
    });
    return y ? N ? l <= E : u < E - d : N ? l <= E + d : u < E;
  }) || null, g = Hp({
    draggable: t,
    closest: m,
    inHomeList: rt(t, n)
  });
  return qt({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: c,
    index: g
  });
};
const Kp = 4;
var Xp = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const a = r.axis, s = Nt(r.axis, e.displaceBy), c = s.value, d = t[a.start], u = t[a.end], p = en(e, o).find((g) => {
    const h = g.descriptor.id, x = g.page.borderBox, y = x[a.size] / Kp, N = Ve(h, i), w = ua({
      displaced: n.displaced,
      id: h
    });
    return N ? w ? u > x[a.start] + y && u < x[a.end] - y : d > x[a.start] - c + y && d < x[a.end] - c - y : w ? u > x[a.start] + c + y && u < x[a.end] + c - y : d > x[a.start] + y && d < x[a.end] - y;
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
}, fa = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = pa(t.page.borderBox, e), c = qp({
    pageBorderBox: s,
    draggable: t,
    droppables: r
  });
  if (!c)
    return dp;
  const d = r[c], u = He(d.descriptor.id, n), l = Up(d, s);
  return Xp({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: d,
    insideDestination: u,
    afterCritical: a
  }) || Yp({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: d,
    insideDestination: u,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, wr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Jp = ({
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
  const a = Lp(i);
  return wr(n, a);
};
var Qp = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = Jp({
    previousImpact: r,
    impact: o,
    droppables: n
  }), a = Ie(o);
  if (!a)
    return i;
  const s = n[a];
  if (rt(e, s) || s.subject.withPlaceholder)
    return i;
  const c = la(s, e, t);
  return wr(i, c);
}, lt = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = r || e.viewport, s = n || e.dimensions, c = t || e.current.client.selection, d = Oe(c, e.initial.client.selection), u = {
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
  const m = s.draggables[e.critical.draggable.id], g = o || fa({
    pageOffset: l.offset,
    draggable: m,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), h = Qp({
    draggable: m,
    impact: g,
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
    impact: g,
    viewport: a,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function Zp(e, t) {
  return e.map((n) => t[n]);
}
var ma = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = Zp(i.all, n), s = gt({
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
}, ga = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const a = tn({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return yr({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, va = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, v());
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, c = a[e.critical.draggable.id], d = Ie(r);
  d || (process.env.NODE_ENV !== "production" ? v(!1, "Must be over a destination in SNAP movement mode") : v());
  const u = s[d], l = ma({
    impact: r,
    viewport: o,
    destination: u,
    draggables: a
  }), p = ga({
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
}, eu = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), ha = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = Nt(t.axis, e.displaceBy), i = He(t.descriptor.id, n), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? v(!1, "Expected draggable to be inside home list") : v());
  const s = i.slice(a + 1), c = s.reduce((p, m) => (p[m.descriptor.id] = !0, p), {}), d = {
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
        destination: eu(e.descriptor)
      }
    },
    afterCritical: d
  };
}, tu = (e, t) => ({
  draggables: e.draggables,
  droppables: wr(e.droppables, t)
});
const Dt = (e) => {
  process.env.NODE_ENV;
}, St = (e) => {
  process.env.NODE_ENV;
};
var nu = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = Vt(e.client, t), o = zt(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, ru = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Expected Droppable to have a frame") : v()), t;
}, ou = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = ru(a).scroll.diff.value, d = Ne(r, c);
    return nu({
      draggable: o,
      offset: d,
      initialWindowScroll: n.scroll.initial
    });
  });
}, iu = ({
  state: e,
  published: t
}) => {
  Dt();
  const n = t.modified.map((E) => {
    const y = e.dimensions.droppables[E.droppableId];
    return gr(y, E.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Zi(n)
  }, o = ea(ou({
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
  }, s = Ie(e.impact), c = s ? a.droppables[s] : null, d = a.draggables[e.critical.draggable.id], u = a.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: p
  } = ha({
    draggable: d,
    home: u,
    draggables: i,
    viewport: e.viewport
  }), m = c && c.isCombineEnabled ? e.impact : l, g = fa({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: m,
    viewport: e.viewport,
    afterCritical: p
  });
  St();
  const h = {
    ...e,
    phase: "DRAGGING",
    impact: g,
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
const Yn = (e) => e.movementMode === "SNAP", En = (e, t, n) => {
  const r = tu(e.dimensions, t);
  return !Yn(e) || n ? lt({
    state: e,
    dimensions: r
  }) : va({
    state: e,
    dimensions: r
  });
};
function Nn(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const Eo = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var au = (e = Eo, t) => {
  if (t.type === "FLUSH")
    return {
      ...Eo,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "INITIAL_PUBLISH must come after a IDLE phase") : v());
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
    }, l = Qt(i.droppables).every((h) => !h.isFixedOnPage), {
      impact: p,
      afterCritical: m
    } = ha({
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
      afterCritical: m,
      onLiftImpact: p,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? v(!1, `Collection cannot start from phase ${e.phase}`) : v()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? v(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : v()), iu({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `${t.type} not permitted in phase ${e.phase}`) : v());
    const {
      client: n
    } = t.payload;
    return Fe(n, e.current.client.selection) ? e : lt({
      state: e,
      clientSelection: n,
      impact: Yn(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Nn(e);
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `${t.type} not permitted in phase ${e.phase}`) : v());
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = gr(o, r);
    return En(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `Attempting to move in an unsupported phase ${e.phase}`) : v());
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot find Droppable[id: ${n}] to toggle its enabled state`) : v()), o.isEnabled === r && (process.env.NODE_ENV !== "production" ? v(!1, `Trying to set droppable isEnabled to ${String(r)}
      but it is already ${String(o.isEnabled)}`) : v());
    const i = {
      ...o,
      isEnabled: r
    };
    return En(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `Attempting to move in an unsupported phase ${e.phase}`) : v());
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot find Droppable[id: ${n}] to toggle its isCombineEnabled state`) : v()), o.isCombineEnabled === r && (process.env.NODE_ENV !== "production" ? v(!1, `Trying to set droppable isCombineEnabled to ${String(r)}
      but it is already ${String(o.isCombineEnabled)}`) : v());
    const i = {
      ...o,
      isCombineEnabled: r
    };
    return En(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot move by window in phase ${e.phase}`) : v()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? v(!1, "Window scrolling is currently not supported for fixed lists") : v());
    const n = t.payload.newScroll;
    if (Fe(e.viewport.scroll.current, n))
      return Nn(e);
    const r = aa(e.viewport, n);
    return Yn(e) ? va({
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
    if (Fe(n, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? v(!1, `${t.type} received while not in DRAGGING phase`) : v());
    const n = zp({
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
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? v(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : v()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot animate drop from phase ${e.phase}`) : v()), {
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
function de(e, t) {
  return e instanceof Object && "type" in e && e.type === t;
}
const su = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), cu = (e) => ({
  type: "LIFT",
  payload: e
}), lu = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), du = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), pu = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), uu = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), fu = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), mu = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), ba = (e) => ({
  type: "MOVE",
  payload: e
}), gu = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), vu = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), hu = () => ({
  type: "MOVE_UP",
  payload: null
}), bu = () => ({
  type: "MOVE_DOWN",
  payload: null
}), xu = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), yu = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Er = () => ({
  type: "FLUSH",
  payload: null
}), wu = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Nr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), xa = (e) => ({
  type: "DROP",
  payload: e
}), Eu = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ya = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function Nu(e) {
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
function Du(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = He(e.droppable.id, t.draggables);
    Nu(n);
  }
}
var Su = (e) => ({
  getState: t,
  dispatch: n
}) => (r) => (o) => {
  if (!de(o, "LIFT")) {
    r(o);
    return;
  }
  const {
    id: i,
    clientSelection: a,
    movementMode: s
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && n(Nr({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Unexpected phase to start a drag") : v()), n(Er()), n(su({
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
    viewport: m
  } = e.startPublishing(u);
  Du(l, p), n(lu({
    critical: l,
    dimensions: p,
    clientSelection: a,
    movementMode: s,
    viewport: m
  }));
}, Ou = (e) => () => (t) => (n) => {
  de(n, "INITIAL_PUBLISH") && e.dragging(), de(n, "DROP_ANIMATE") && e.dropping(n.payload.completed.result.reason), (de(n, "FLUSH") || de(n, "DROP_COMPLETE")) && e.resting(), t(n);
};
const Dr = {
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
}, wa = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ge = `${wa.outOfTheWay}s ${Dr.outOfTheWay}`, dt = {
  fluid: `opacity ${Ge}`,
  snap: `transform ${Ge}, opacity ${Ge}`,
  drop: (e) => {
    const t = `${e}s ${Dr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ge}`,
  placeholder: `height ${Ge}, width ${Ge}, margin ${Ge}`
}, No = (e) => Fe(e, we) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Kn = {
  moveTo: No,
  drop: (e, t) => {
    const n = No(e);
    if (n)
      return t ? `${n} scale(${vt.scale.drop})` : n;
  }
}, {
  minDropTime: Xn,
  maxDropTime: Ea
} = wa, Iu = Ea - Xn, Do = 1500, Cu = 0.6;
var ku = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = ft(e, t);
  if (r <= 0)
    return Xn;
  if (r >= Do)
    return Ea;
  const o = r / Do, i = Xn + Iu * o, a = n === "CANCEL" ? i * Cu : i;
  return Number(a.toFixed(2));
}, Au = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = n, s = Ie(e), c = s ? a[s] : null, d = a[t.descriptor.droppableId], u = ga({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || d,
    viewport: r
  });
  return Oe(u, t.client.borderBox.center);
}, _u = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: ma({
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
const Pu = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (!de(r, "DROP")) {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Eu({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? v(!1, "A DROP action occurred while DROP_PENDING and still waiting") : v()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot drop in phase: ${o.phase}`) : v());
  const s = o.critical, c = o.dimensions, d = c.draggables[o.critical.draggable.id], {
    impact: u,
    didDropInsideDroppable: l
  } = _u({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), p = l ? vr(u) : null, m = l ? Zt(u) : null, g = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, h = {
    draggableId: d.descriptor.id,
    type: d.descriptor.type,
    source: g,
    reason: i,
    mode: o.movementMode,
    destination: p,
    combine: m
  }, x = Au({
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
  if (!(!Fe(o.current.client.offset, x) || !!h.combine)) {
    t(Nr({
      completed: E
    }));
    return;
  }
  const N = ku({
    current: o.current.client.offset,
    destination: x,
    reason: i
  });
  t(wu({
    newHomeClientOffset: x,
    dropDuration: N,
    completed: E
  }));
};
var Na = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Ru(e) {
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
function Tu({
  onWindowScroll: e
}) {
  function t() {
    e(Na());
  }
  const n = pt(t), r = Ru(n);
  let o = Be;
  function i() {
    return o !== Be;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start scroll listener when already active") : v()), o = Ae(window, [r]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop scroll listener when not active") : v()), n.cancel(), o(), o = Be;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const $u = (e) => de(e, "DROP_COMPLETE") || de(e, "DROP_ANIMATE") || de(e, "FLUSH"), Mu = (e) => {
  const t = Tu({
    onWindowScroll: (n) => {
      e.dispatch(gu({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && de(r, "INITIAL_PUBLISH") && t.start(), t.isActive() && $u(r) && t.stop(), n(r);
  };
};
var ju = (e) => {
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
}, Lu = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((s) => s.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? v(!1, "Could not find timer") : v());
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
const Bu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Fu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Vu = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, it = (e, t) => {
  Dt(), t(), St();
}, Pt = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Dn(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = ju(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var zu = (e, t) => {
  const n = Lu();
  let r = null;
  const o = (l, p) => {
    r && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : v()), it("onBeforeCapture", () => {
      const m = e().onBeforeCapture;
      m && m({
        draggableId: l,
        mode: p
      });
    });
  }, i = (l, p) => {
    r && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : v()), it("onBeforeDragStart", () => {
      const m = e().onBeforeDragStart;
      m && m(Pt(l, p));
    });
  }, a = (l, p) => {
    r && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : v());
    const m = Pt(l, p);
    r = {
      mode: p,
      lastCritical: l,
      lastLocation: m.source,
      lastCombine: null
    }, n.add(() => {
      it("onDragStart", () => Dn(e().onDragStart, m, t, Mt.onDragStart));
    });
  }, s = (l, p) => {
    const m = vr(p), g = Zt(p);
    r || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onDragMove when onDragStart has not been called") : v());
    const h = !Vu(l, r.lastCritical);
    h && (r.lastCritical = l);
    const x = !Bu(r.lastLocation, m);
    x && (r.lastLocation = m);
    const E = !Fu(r.lastCombine, g);
    if (E && (r.lastCombine = g), !h && !x && !E)
      return;
    const y = {
      ...Pt(l, r.mode),
      combine: g,
      destination: m
    };
    n.add(() => {
      it("onDragUpdate", () => Dn(e().onDragUpdate, y, t, Mt.onDragUpdate));
    });
  }, c = () => {
    r || (process.env.NODE_ENV !== "production" ? v(!1, "Can only flush responders while dragging") : v()), n.flush();
  }, d = (l) => {
    r || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : v()), r = null, it("onDragEnd", () => Dn(e().onDragEnd, l, t, Mt.onDragEnd));
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
        ...Pt(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      d(l);
    }
  };
}, Gu = (e, t) => {
  const n = zu(e, t);
  return (r) => (o) => (i) => {
    if (de(i, "BEFORE_INITIAL_CAPTURE")) {
      n.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (de(i, "INITIAL_PUBLISH")) {
      const s = i.payload.critical;
      n.beforeStart(s, i.payload.movementMode), o(i), n.start(s, i.payload.movementMode);
      return;
    }
    if (de(i, "DROP_COMPLETE")) {
      const s = i.payload.completed.result;
      n.flush(), o(i), n.drop(s);
      return;
    }
    if (o(i), de(i, "FLUSH")) {
      n.abort();
      return;
    }
    const a = r.getState();
    a.phase === "DRAGGING" && n.update(a.critical, a.impact);
  };
};
const Wu = (e) => (t) => (n) => {
  if (!de(n, "DROP_ANIMATION_FINISHED")) {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot finish a drop animating when no drop is occurring") : v()), e.dispatch(Nr({
    completed: r.completed
  }));
}, qu = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((de(i, "FLUSH") || de(i, "DROP_COMPLETE") || de(i, "DROP_ANIMATION_FINISHED")) && r(), o(i), !de(i, "DROP_ANIMATE"))
      return;
    const a = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(ya());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = Ae(window, [a]);
    });
  };
};
var Uu = (e) => () => (t) => (n) => {
  (de(n, "DROP_COMPLETE") || de(n, "FLUSH") || de(n, "DROP_ANIMATE")) && e.stopPublishing(), t(n);
}, Hu = (e) => {
  let t = !1;
  return () => (n) => (r) => {
    if (de(r, "INITIAL_PUBLISH")) {
      t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
      return;
    }
    if (n(r), !!t) {
      if (de(r, "FLUSH")) {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (de(r, "DROP_COMPLETE")) {
        t = !1;
        const o = r.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const Yu = (e) => de(e, "DROP_COMPLETE") || de(e, "DROP_ANIMATE") || de(e, "FLUSH");
var Ku = (e) => (t) => (n) => (r) => {
  if (Yu(r)) {
    e.stop(), n(r);
    return;
  }
  if (de(r, "INITIAL_PUBLISH")) {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? v(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : v()), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const Xu = (e) => (t) => (n) => {
  if (t(n), !de(n, "PUBLISH_WHILE_DRAGGING"))
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(xa({
    reason: r.reason
  })));
}, Ju = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Pi;
var Qu = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => _i(au, Ju(Ul(Ou(n), Uu(e), Su(e), Pu, Wu, qu, Xu, Ku(i), Mu, Hu(t), Gu(r, o))));
const Sn = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Zu({
  registry: e,
  callbacks: t
}) {
  let n = Sn(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, Dt();
      const {
        additions: c,
        removals: d,
        modified: u
      } = n, l = Object.keys(c).map((g) => e.draggable.getById(g).getDimension(we)).sort((g, h) => g.descriptor.index - h.descriptor.index), p = Object.keys(u).map((g) => {
        const x = e.droppable.getById(g).callbacks.getScrollWhileDragging();
        return {
          droppableId: g,
          scroll: x
        };
      }), m = {
        additions: l,
        removals: Object.keys(d),
        modified: p
      };
      n = Sn(), St(), t.publish(m);
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
      r && (cancelAnimationFrame(r), r = null, n = Sn());
    }
  };
}
var Da = ({
  scrollHeight: e,
  scrollWidth: t,
  height: n,
  width: r
}) => {
  const o = Oe({
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
}, Sa = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find document.documentElement") : v()), e;
}, Oa = () => {
  const e = Sa();
  return Da({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, ef = () => {
  const e = Na(), t = Oa(), n = e.y, r = e.x, o = Sa(), i = o.clientWidth, a = o.clientHeight, s = r + i, c = n + a;
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
}, tf = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  Dt();
  const r = ef(), o = r.scroll.current, i = e.droppable, a = n.droppable.getAllByType(i.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), s = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o)), c = {
    draggables: ea(s),
    droppables: Zi(a)
  };
  return St(), {
    dimensions: c,
    critical: e,
    viewport: r
  };
};
function So(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && me(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var nf = (e, t) => {
  let n = null;
  const r = Zu({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (p, m) => {
    e.droppable.exists(p) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot update is enabled flag of Droppable ${p} as it is not registered`) : v()), n && t.updateDroppableIsEnabled({
      id: p,
      isEnabled: m
    });
  }, i = (p, m) => {
    n && (e.droppable.exists(p) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot update isCombineEnabled flag of Droppable ${p} as it is not registered`) : v()), t.updateDroppableIsCombineEnabled({
      id: p,
      isCombineEnabled: m
    }));
  }, a = (p, m) => {
    n && (e.droppable.exists(p) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot update the scroll on Droppable ${p} as it is not registered`) : v()), t.updateDroppableScroll({
      id: p,
      newScroll: m
    }));
  }, s = (p, m) => {
    n && e.droppable.getById(p).callbacks.scroll(m);
  }, c = () => {
    if (!n)
      return;
    r.stop();
    const p = n.critical.droppable;
    e.droppable.getAllByType(p.type).forEach((m) => m.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, d = (p) => {
    n || (process.env.NODE_ENV !== "production" ? v(!1, "Should only be subscribed when a collection is occurring") : v());
    const m = n.critical.draggable;
    p.type === "ADDITION" && So(e, m, p.value) && r.add(p.value), p.type === "REMOVAL" && So(e, m, p.value) && r.remove(p.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (p) => {
      n && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start capturing critical dimensions as there is already a collection") : v());
      const m = e.draggable.getById(p.draggableId), g = e.droppable.getById(m.descriptor.droppableId), h = {
        draggable: m.descriptor,
        droppable: g.descriptor
      }, x = e.subscribe(d);
      return n = {
        critical: h,
        unsubscribe: x
      }, tf({
        critical: h,
        registry: e,
        scrollOptions: p.scrollOptions
      });
    },
    stopPublishing: c
  };
}, Ia = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", rf = (e) => {
  window.scrollBy(e.x, e.y);
};
const of = ye((e) => Qt(e).filter((t) => !(!t.isEnabled || !t.frame))), af = (e, t) => of(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? v(!1, "Invalid result") : v()), da(r.frame.pageMarginBox)(e))) || null;
var sf = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return af(e, n);
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
var cf = (e, t, n = () => ht) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Ca = ({
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
}, Sr = 1, lf = (e, t, n = () => ht) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Sr;
  const i = 1 - Ca({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = r.maxPixelScroll * r.ease(i);
  return Math.ceil(a);
}, df = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, a = t, s = i, d = Date.now() - a;
  if (d >= i)
    return e;
  if (d < o)
    return Sr;
  const u = Ca({
    startOfRange: o,
    endOfRange: s,
    current: d
  }), l = e * r.ease(u);
  return Math.ceil(l);
}, Oo = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = lf(e, t, o);
  return i === 0 ? 0 : r ? Math.max(df(i, n, o), Sr) : i;
}, Io = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = cf(e, r, i);
  return t[r.end] < t[r.start] ? Oo({
    distanceToEdge: t[r.end],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * Oo({
    distanceToEdge: t[r.start],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, pf = ({
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
const uf = Qi((e) => e === 0 ? 0 : e);
var ka = ({
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
  }, s = Io({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: hr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = Io({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: ra,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), d = uf({
    x: c,
    y: s
  });
  if (Fe(d, we))
    return null;
  const u = pf({
    container: t,
    subject: n,
    proposedScroll: d
  });
  return u ? Fe(u, we) ? null : u : null;
};
const ff = Qi((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Or = /* @__PURE__ */ (() => {
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
    return Fe(i, we) ? null : i;
  };
})(), Aa = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = ff(n), i = Or({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Ir = (e, t) => Aa({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), mf = (e, t) => {
  if (!Ir(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return Or({
    current: r,
    max: n,
    change: t
  });
}, Cr = (e, t) => {
  const n = e.frame;
  return n ? Aa({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, gf = (e, t) => {
  const n = e.frame;
  return !n || !Cr(e, t) ? null : Or({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var vf = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = ka({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Ir(e, a) ? a : null;
}, hf = ({
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
  const s = ka({
    dragStartTime: r,
    container: a.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && Cr(e, s) ? s : null;
}, Co = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, p = vf({
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
  const d = sf({
    center: a,
    destination: Ie(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!d)
    return;
  const u = hf({
    dragStartTime: t,
    droppable: d,
    subject: c,
    center: a,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  u && o(d.descriptor.id, u);
}, bf = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => ht
}) => {
  const r = pt(e), o = pt(t);
  let i = null;
  const a = (d) => {
    i || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fluid scroll if not dragging") : v());
    const {
      shouldUseTimeDampening: u,
      dragStartTime: l
    } = i;
    Co({
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
      Dt(), i && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start auto scrolling when already started") : v());
      const u = Date.now();
      let l = !1;
      const p = () => {
        l = !0;
      };
      Co({
        state: d,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: p,
        scrollDroppable: p,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: u,
        shouldUseTimeDampening: l
      }, St(), l && a(d);
    },
    stop: () => {
      i && (r.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, xf = ({
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
    if (!Cr(s, c))
      return c;
    const d = gf(s, c);
    if (!d)
      return t(s.descriptor.id, c), null;
    const u = Oe(c, d);
    return t(s.descriptor.id, u), Oe(c, u);
  }, i = (s, c, d) => {
    if (!s || !Ir(c, d))
      return d;
    const u = mf(c, d);
    if (!u)
      return n(d), null;
    const l = Oe(d, u);
    return n(l), Oe(d, l);
  };
  return (s) => {
    const c = s.scrollJumpRequest;
    if (!c)
      return;
    const d = Ie(s.impact);
    d || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot perform a jump scroll when there is no destination") : v());
    const u = o(s.dimensions.droppables[d], c);
    if (!u)
      return;
    const l = s.viewport, p = i(s.isWindowScrollAllowed, l, u);
    p && r(s, p);
  };
}, yf = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = bf({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = xf({
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
})(), Jn = (() => {
  const e = `${Qe}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), wf = (() => {
  const e = `${Qe}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), ko = {
  contextId: `${Qe}-scroll-container-context-id`
}, Ef = (e) => (t) => `[${t}="${e}"]`, at = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), Nf = "pointer-events: none;";
var Df = (e) => {
  const t = Ef(e), n = (() => {
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
        dragging: Nf,
        dropAnimating: s
      }
    };
  })(), r = (() => {
    const s = `
      transition: ${dt.outOfTheWay};
    `;
    return {
      selector: t(Jn.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(wf.contextId),
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
const Ce = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? us : he, On = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find the head to append a style to") : v()), e;
}, Ao = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Sf(e, t) {
  const n = oe(() => Df(e), [e]), r = ee(null), o = ee(null), i = W(ye((l) => {
    const p = o.current;
    p || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot set dynamic style element if it is not set") : v()), p.textContent = l;
  }), []), a = W((l) => {
    const p = r.current;
    p || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot set dynamic style element if it is not set") : v()), p.textContent = l;
  }, []);
  Ce(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? v(!1, "style elements already mounted") : v());
    const l = Ao(t), p = Ao(t);
    return r.current = l, o.current = p, l.setAttribute(`${Qe}-always`, e), p.setAttribute(`${Qe}-dynamic`, e), On().appendChild(l), On().appendChild(p), a(n.always), i(n.resting), () => {
      const m = (g) => {
        const h = g.current;
        h || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot unmount ref as it is not set") : v()), On().removeChild(h), g.current = null;
      };
      m(r), m(o);
    };
  }, [t, a, i, n.always, n.resting, e]);
  const s = W(() => i(n.dragging), [i, n.dragging]), c = W((l) => {
    if (l === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), d = W(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return oe(() => ({
    dragging: s,
    dropping: c,
    resting: d
  }), [s, c, d]);
}
function _a(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Pa = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Ot(e) {
  return e instanceof Pa(e).HTMLElement;
}
function Ra(e, t) {
  const n = `[${Ze.contextId}="${e}"]`, r = _a(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && me(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(Ze.draggableId) === t);
  return o ? Ot(o) ? o : (process.env.NODE_ENV !== "production" && me("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && me(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Of(e) {
  const t = ee({}), n = ee(null), r = ee(null), o = ee(!1), i = W(function(p, m) {
    const g = {
      id: p,
      focus: m
    };
    return t.current[p] = g, function() {
      const x = t.current;
      x[p] !== g && delete x[p];
    };
  }, []), a = W(function(p) {
    const m = Ra(e, p);
    m && m !== document.activeElement && m.focus();
  }, [e]), s = W(function(p, m) {
    n.current === p && (n.current = m);
  }, []), c = W(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const p = n.current;
      p && a(p);
    }));
  }, [a]), d = W(function(p) {
    n.current = null;
    const m = document.activeElement;
    m && m.getAttribute(Ze.draggableId) === p && (n.current = p);
  }, []);
  return Ce(() => (o.current = !0, function() {
    o.current = !1;
    const p = r.current;
    p && cancelAnimationFrame(p);
  }), []), oe(() => ({
    register: i,
    tryRecordFocus: d,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, d, c, s]);
}
function If() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function n(l) {
    return t.push(l), function() {
      const m = t.indexOf(l);
      m !== -1 && t.splice(m, 1);
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
    return p || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot find draggable entry with id [${l}]`) : v()), p;
  }
  const a = {
    register: (l) => {
      e.draggables[l.descriptor.id] = l, r({
        type: "ADDITION",
        value: l
      });
    },
    update: (l, p) => {
      const m = e.draggables[p.descriptor.id];
      m && m.uniqueId === l.uniqueId && (delete e.draggables[p.descriptor.id], e.draggables[l.descriptor.id] = l);
    },
    unregister: (l) => {
      const p = l.descriptor.id, m = o(p);
      m && l.uniqueId === m.uniqueId && (delete e.draggables[p], e.droppables[l.descriptor.droppableId] && r({
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
    return p || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot find droppable entry with id [${l}]`) : v()), p;
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
function Cf() {
  const e = oe(If, []);
  return he(() => function() {
    e.clean();
  }, [e]), e;
}
var kr = ve.createContext(null), bt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find document.body") : v()), e;
};
const kf = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
}, Af = (e) => `rfd-announcement-${e}`;
function _f(e) {
  const t = oe(() => Af(e), [e]), n = ee(null);
  return he(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Gt(i.style, kf), bt().appendChild(i), function() {
      setTimeout(function() {
        const c = bt();
        c.contains(i) && c.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), W((o) => {
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
const Pf = {
  separator: "::"
};
function Ar(e, t = Pf) {
  const n = ve.useId();
  return oe(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
function Rf({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Tf({
  contextId: e,
  text: t
}) {
  const n = Ar("hidden-text", {
    separator: "-"
  }), r = oe(() => Rf({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return he(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", bt().appendChild(i), function() {
      const s = bt();
      s.contains(i) && s.removeChild(i);
    };
  }, [r, t]), r;
}
var nn = ve.createContext(null), $f = {
  react: "^18.0.0 || ^19.0.0"
};
const Mf = /(\d+)\.(\d+)\.(\d+)/, _o = (e) => {
  const t = Mf.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? v(!1, `Unable to parse React version ${e}`) : v());
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, jf = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Lf = (e, t) => {
  const n = _o(e), r = _o(t);
  jf(n, r) || process.env.NODE_ENV !== "production" && me(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const In = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Bf = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && me(`
      No <!doctype html> found.

      ${In}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && me(`
      Unexpected <!doctype> found: (${t.name})

      ${In}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && me(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${In}
    `);
};
function _r(e) {
  process.env.NODE_ENV !== "production" && e();
}
function It(e, t) {
  _r(() => {
    he(() => {
      try {
        e();
      } catch (n) {
        Un(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function Ff() {
  It(() => {
    Lf($f.react, ve.version), Bf(document);
  }, []);
}
function Pr(e) {
  const t = ee(e);
  return he(() => {
    t.current = e;
  }), t;
}
function Vf() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(a) {
    return a === e;
  }
  function r(a) {
    e && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot claim lock as it is already claimed") : v());
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot release lock when there is no lock") : v()), e = null;
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
const zf = 9, Gf = 13, Rr = 27, Ta = 32, Wf = 33, qf = 34, Uf = 35, Hf = 36, Yf = 37, Kf = 38, Xf = 39, Jf = 40, Qf = {
  [Gf]: !0,
  [zf]: !0
};
var $a = (e) => {
  Qf[e.keyCode] && e.preventDefault();
};
const rn = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})(), Ma = 0, Po = 5;
function Zf(e, t) {
  return Math.abs(t.x - e.x) >= Po || Math.abs(t.y - e.y) >= Po;
}
const Ro = {
  type: "IDLE"
};
function em({
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
      if (i !== Ma)
        return;
      const c = {
        x: a,
        y: s
      }, d = n();
      if (d.type === "DRAGGING") {
        o.preventDefault(), d.actions.move(c);
        return;
      }
      d.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot be IDLE") : v());
      const u = d.point;
      if (!Zf(u, c))
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
      if (o.keyCode === Rr) {
        o.preventDefault(), e();
        return;
      }
      $a(o);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Unexpected phase") : v()), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: rn,
    fn: e
  }];
}
function tm(e) {
  const t = ee(Ro), n = ee(Be), r = oe(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== Ma || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
        return;
      const p = e.findClosestDraggableId(l);
      if (!p)
        return;
      const m = e.tryGetLock(p, a, {
        sourceEvent: l
      });
      if (!m)
        return;
      l.preventDefault();
      const g = {
        x: l.clientX,
        y: l.clientY
      };
      n.current(), d(m, g);
    }
  }), [e]), o = oe(() => ({
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
  }), [e]), i = W(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    n.current = Ae(window, [o, r], l);
  }, [o, r]), a = W(() => {
    t.current.type !== "IDLE" && (t.current = Ro, n.current(), i());
  }, [i]), s = W(() => {
    const u = t.current;
    a(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [a]), c = W(function() {
    const l = {
      capture: !0,
      passive: !1
    }, p = em({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (m) => {
        t.current = m;
      }
    });
    n.current = Ae(window, p, l);
  }, [s, a]), d = W(function(l, p) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Expected to move from IDLE to PENDING drag") : v()), t.current = {
      type: "PENDING",
      point: p,
      actions: l
    }, c();
  }, [c]);
  Ce(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function nm() {
}
const rm = {
  [qf]: !0,
  [Wf]: !0,
  [Hf]: !0,
  [Uf]: !0
};
function om(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Rr) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Ta) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === Jf) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Kf) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Xf) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Yf) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (rm[o.keyCode]) {
        o.preventDefault();
        return;
      }
      $a(o);
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
    eventName: rn,
    fn: n
  }];
}
function im(e) {
  const t = ee(nm), n = oe(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Ta)
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
        c || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop capturing a keyboard drag when not capturing") : v()), c = !1, t.current(), r();
      }
      t.current = Ae(window, om(d, u), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = W(function() {
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
const Cn = {
  type: "IDLE"
}, am = 120, sm = 0.15;
function cm({
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
      n.keyCode === Rr && n.preventDefault(), e();
    }
  }, {
    eventName: rn,
    fn: e
  }];
}
function lm({
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
      o.type === "IDLE" && (process.env.NODE_ENV, v());
      const i = r.touches[0];
      if (!i || !(i.force >= sm))
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
    eventName: rn,
    fn: e
  }];
}
function dm(e) {
  const t = ee(Cn), n = ee(Be), r = W(function() {
    return t.current;
  }, []), o = W(function(m) {
    t.current = m;
  }, []), i = oe(() => ({
    eventName: "touchstart",
    fn: function(m) {
      if (m.defaultPrevented)
        return;
      const g = e.findClosestDraggableId(m);
      if (!g)
        return;
      const h = e.tryGetLock(g, s, {
        sourceEvent: m
      });
      if (!h)
        return;
      const x = m.touches[0], {
        clientX: E,
        clientY: y
      } = x, N = {
        x: E,
        y
      };
      n.current(), l(h, N);
    }
  }), [e]), a = W(function() {
    const m = {
      capture: !0,
      passive: !1
    };
    n.current = Ae(window, [i], m);
  }, [i]), s = W(() => {
    const p = t.current;
    p.type !== "IDLE" && (p.type === "PENDING" && clearTimeout(p.longPressTimerId), o(Cn), n.current(), a());
  }, [a, o]), c = W(() => {
    const p = t.current;
    s(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [s]), d = W(function() {
    const m = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: c,
      completed: s,
      getPhase: r
    }, h = Ae(window, lm(g), m), x = Ae(window, cm(g), m);
    n.current = function() {
      h(), x();
    };
  }, [c, r, s]), u = W(function() {
    const m = r();
    m.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? v(!1, `Cannot start dragging from phase ${m.type}`) : v());
    const g = m.actions.fluidLift(m.point);
    o({
      type: "DRAGGING",
      actions: g,
      hasMoved: !1
    });
  }, [r, o]), l = W(function(m, g) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Expected to move from IDLE to PENDING drag") : v());
    const h = setTimeout(u, am);
    o({
      type: "PENDING",
      point: g,
      actions: m,
      longPressTimerId: h
    }), d();
  }, [d, r, o, u]);
  Ce(function() {
    return a(), function() {
      n.current();
      const g = r();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), o(Cn));
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
function pm(e) {
  _r(() => {
    const t = Pr(e);
    It(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot change the amount of sensor hooks after mounting") : v(!1));
    });
  });
}
const um = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function ja(e, t) {
  if (t == null)
    return !1;
  if (um.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : ja(e, t.parentElement);
}
function fm(e, t) {
  const n = t.target;
  return Ot(n) ? ja(e, n) : !1;
}
var mm = (e) => Pe(e.getBoundingClientRect()).center;
function gm(e) {
  return e instanceof Pa(e).Element;
}
const vm = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function La(e, t) {
  return e == null ? null : e[vm](t) ? e : La(e.parentElement, t);
}
function hm(e, t) {
  return e.closest ? e.closest(t) : La(e, t);
}
function bm(e) {
  return `[${Ze.contextId}="${e}"]`;
}
function xm(e, t) {
  const n = t.target;
  if (!gm(n))
    return process.env.NODE_ENV !== "production" && me("event.target must be a Element"), null;
  const r = bm(e), o = hm(n, r);
  return o ? Ot(o) ? o : (process.env.NODE_ENV !== "production" && me("drag handle must be a HTMLElement"), null) : null;
}
function ym(e, t) {
  const n = xm(e, t);
  return n ? n.getAttribute(Ze.draggableId) : null;
}
function wm(e, t) {
  const n = `[${Jn.contextId}="${e}"]`, o = _a(document, n).find((i) => i.getAttribute(Jn.id) === t);
  return o ? Ot(o) ? o : (process.env.NODE_ENV !== "production" && me("Draggable element is not a HTMLElement"), null) : null;
}
function Em(e) {
  e.preventDefault();
}
function Rt({
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
function Ba({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !Ia(t.getState(), r)) : (process.env.NODE_ENV !== "production" && me(`Unable to find draggable with id: ${r}`), !1);
}
function Nm({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Ba({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), d = wm(t, c.descriptor.id);
  if (!d)
    return process.env.NODE_ENV !== "production" && me(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && fm(d, a))
    return null;
  const u = e.claim(i || Be);
  let l = "PRE_DRAG";
  function p() {
    return c.options.shouldRespectForcePress;
  }
  function m() {
    return e.isActive(u);
  }
  function g(b, k) {
    Rt({
      expected: b,
      phase: l,
      isLockActive: m,
      shouldWarn: !0
    }) && n.dispatch(k());
  }
  const h = g.bind(null, "DRAGGING");
  function x(b) {
    function k() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (k(), process.env.NODE_ENV !== "production" ? v(!1, `Cannot lift in phase ${l}`) : v()), n.dispatch(cu(b.liftActionArgs)), l = "DRAGGING";
    function _(j, Y = {
      shouldBlockNextClick: !1
    }) {
      if (b.cleanup(), Y.shouldBlockNextClick) {
        const O = Ae(window, [{
          eventName: "click",
          fn: Em,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(O);
      }
      k(), n.dispatch(xa({
        reason: j
      }));
    }
    return {
      isActive: () => Rt({
        expected: "DRAGGING",
        phase: l,
        isLockActive: m,
        shouldWarn: !1
      }),
      shouldRespectForcePress: p,
      drop: (j) => _("DROP", j),
      cancel: (j) => _("CANCEL", j),
      ...b.actions
    };
  }
  function E(b) {
    const k = pt((j) => {
      h(() => ba({
        client: j
      }));
    });
    return {
      ...x({
        liftActionArgs: {
          id: o,
          clientSelection: b,
          movementMode: "FLUID"
        },
        cleanup: () => k.cancel(),
        actions: {
          move: k
        }
      }),
      move: k
    };
  }
  function y() {
    const b = {
      moveUp: () => h(hu),
      moveRight: () => h(xu),
      moveDown: () => h(bu),
      moveLeft: () => h(yu)
    };
    return x({
      liftActionArgs: {
        id: o,
        clientSelection: mm(d),
        movementMode: "SNAP"
      },
      cleanup: Be,
      actions: b
    });
  }
  function N() {
    Rt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: m,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Rt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: m,
      shouldWarn: !1
    }),
    shouldRespectForcePress: p,
    fluidLift: E,
    snapLift: y,
    abort: N
  };
}
const Dm = [tm, im, dm];
function Sm({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? Dm : [], ...r || []], a = pe(() => Vf())[0], s = W(function(x, E) {
    xt(x) && !xt(E) && a.tryAbandon();
  }, [a]);
  Ce(function() {
    let x = t.getState();
    return t.subscribe(() => {
      const y = t.getState();
      s(x, y), x = y;
    });
  }, [a, t, s]), Ce(() => a.tryAbandon, [a.tryAbandon]);
  const c = W((h) => Ba({
    lockAPI: a,
    registry: n,
    store: t,
    draggableId: h
  }), [a, n, t]), d = W((h, x, E) => Nm({
    lockAPI: a,
    registry: n,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: x || null,
    sourceEvent: E && E.sourceEvent ? E.sourceEvent : null
  }), [e, a, n, t]), u = W((h) => ym(e, h), [e]), l = W((h) => {
    const x = n.draggable.findById(h);
    return x ? x.options : null;
  }, [n.draggable]), p = W(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Er()));
  }, [a, t]), m = W(() => a.isClaimed(), [a]), g = oe(() => ({
    canGetLock: c,
    tryGetLock: d,
    findClosestDraggableId: u,
    findOptionsForDraggable: l,
    tryReleaseLock: p,
    isLockClaimed: m
  }), [c, d, u, l, p, m]);
  pm(i);
  for (let h = 0; h < i.length; h++)
    i[h](g);
}
const Om = (e) => ({
  onBeforeCapture: (t) => {
    ci(() => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    });
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Im = (e) => ({
  ...ht,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...ht.durationDampening,
    ...e.autoScrollerOptions
  }
});
function st(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find store from lazy ref") : v()), e.current;
}
function Cm(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = ee(null);
  Ff();
  const s = Pr(e), c = W(() => Om(s.current), [s]), d = W(() => Im(s.current), [s]), u = _f(t), l = Tf({
    contextId: t,
    text: i
  }), p = Sf(t, o), m = W((O) => {
    st(a).dispatch(O);
  }, []), g = oe(() => Zr({
    publishWhileDragging: du,
    updateDroppableScroll: uu,
    updateDroppableIsEnabled: fu,
    updateDroppableIsCombineEnabled: mu,
    collectionStarting: pu
  }, m), [m]), h = Cf(), x = oe(() => nf(h, g), [h, g]), E = oe(() => yf({
    scrollWindow: rf,
    scrollDroppable: x.scrollDroppable,
    getAutoScrollerOptions: d,
    ...Zr({
      move: ba
    }, m)
  }), [x.scrollDroppable, m, d]), y = Of(t), N = oe(() => Qu({
    announce: u,
    autoScroller: E,
    dimensionMarshal: x,
    focusMarshal: y,
    getResponders: c,
    styleMarshal: p
  }), [u, E, x, y, c, p]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== N && process.env.NODE_ENV !== "production" && me("unexpected store change"), a.current = N;
  const w = W(() => {
    const O = st(a);
    O.getState().phase !== "IDLE" && O.dispatch(Er());
  }, []), b = W(() => {
    const O = st(a).getState();
    return O.phase === "DROP_ANIMATING" ? !0 : O.phase === "IDLE" ? !1 : O.isDragging;
  }, []), k = oe(() => ({
    isDragging: b,
    tryAbort: w
  }), [b, w]);
  n(k);
  const _ = W((O) => Ia(st(a).getState(), O), []), j = W(() => We(st(a).getState()), []), Y = oe(() => ({
    marshal: x,
    focus: y,
    contextId: t,
    canLift: _,
    isMovementAllowed: j,
    dragHandleUsageInstructionsId: l,
    registry: h
  }), [t, x, l, y, _, j, h]);
  return Sm({
    contextId: t,
    store: N,
    registry: h,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), he(() => w, [w]), ve.createElement(nn.Provider, {
    value: Y
  }, ve.createElement(Bd, {
    context: kr,
    store: N
  }, e.children));
}
function km() {
  return ve.useId();
}
function Tr(e) {
  const t = km(), n = e.dragHandleUsageInstructions || Mt.dragHandleUsageInstructions;
  return ve.createElement(Jd, null, (r) => ve.createElement(Cm, {
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
const To = {
  dragging: 5e3,
  dropAnimating: 4500
}, Am = (e, t) => t ? dt.drop(t.duration) : e ? dt.snap : dt.fluid, _m = (e, t) => {
  if (e)
    return t ? vt.opacity.drop : vt.opacity.combining;
}, Pm = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Rm(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = Pm(e), c = !!i, d = c ? Kn.drop(r, a) : Kn.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: Am(s, i),
    transform: d,
    opacity: _m(a, c),
    zIndex: c ? To.dropAnimating : To.dragging,
    pointerEvents: "none"
  };
}
function Tm(e) {
  return {
    transform: Kn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function $m(e) {
  return e.type === "DRAGGING" ? Rm(e) : Tm(e);
}
function Mm(e, t, n = we) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Ui(o, r), a = zt(i, n), s = {
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
function jm(e) {
  const t = Ar("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = oe(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), d = W((m) => {
    const g = o();
    return g || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot get dimension when no ref is set") : v()), Mm(n, g, m);
  }, [n, o]), u = oe(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: d
  }), [n, d, c, t]), l = ee(u), p = ee(!0);
  Ce(() => (r.draggable.register(l.current), () => r.draggable.unregister(l.current)), [r.draggable]), Ce(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const m = l.current;
    l.current = u, r.draggable.update(u, m);
  }, [u, r.draggable]);
}
var $r = ve.createContext(null);
function Fa(e) {
  e && Ot(e) || (process.env.NODE_ENV !== "production" ? v(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : v());
}
function Lm(e, t, n) {
  It(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? v(!1, "Draggable requires a draggableId") : v(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? v(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : v(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? v(!1, `${r(o)} requires an integer index prop`) : v(!1)), e.mapped.type !== "DRAGGING" && (Fa(n()), e.isEnabled && (Ra(t, o) || (process.env.NODE_ENV !== "production" ? v(!1, `${r(o)} Unable to find drag handle`) : v(!1))));
  });
}
function Bm(e) {
  _r(() => {
    const t = ee(e);
    It(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? v(!1, "Draggable isClone prop value changed during component life") : v(!1));
    }, [e]);
  });
}
function Ut(e) {
  const t = wt(e);
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find required context") : v()), t;
}
function Fm(e) {
  e.preventDefault();
}
const Vm = (e) => {
  const t = ee(null), n = W((k = null) => {
    t.current = k;
  }, []), r = W(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Ut(nn), {
    type: s,
    droppableId: c
  } = Ut($r), d = oe(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: u,
    draggableId: l,
    isEnabled: p,
    shouldRespectForcePress: m,
    canDragInteractiveElements: g,
    isClone: h,
    mapped: x,
    dropAnimationFinished: E
  } = e;
  if (Lm(e, o, r), Bm(h), !h) {
    const k = oe(() => ({
      descriptor: d,
      registry: a,
      getDraggableRef: r,
      canDragInteractiveElements: g,
      shouldRespectForcePress: m,
      isEnabled: p
    }), [d, a, r, g, m, p]);
    jm(k);
  }
  const y = oe(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Fm
  } : null, [o, i, l, p]), N = W((k) => {
    x.type === "DRAGGING" && x.dropping && k.propertyName === "transform" && ci(E);
  }, [E, x]), w = oe(() => {
    const k = $m(x), _ = x.type === "DRAGGING" && x.dropping ? N : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: k,
        onTransitionEnd: _
      },
      dragHandleProps: y
    };
  }, [o, y, l, x, N, n]), b = oe(() => ({
    draggableId: d.id,
    type: d.type,
    source: {
      index: d.index,
      droppableId: d.droppableId
    }
  }), [d.droppableId, d.id, d.index, d.type]);
  return ve.createElement(ve.Fragment, null, u(w, x.snapshot, b));
};
var Va = (e, t) => e === t, za = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const zm = (e) => e.combine ? e.combine.draggableId : null, Gm = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Wm() {
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
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = Ie(o.impact), d = Gm(o.impact), u = o.forceShouldAnimate;
      return n(e(a.x, a.y), o.movementMode, s, i.isClone, c, d, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], d = a.result, u = d.mode, l = za(d), p = zm(d), g = {
        duration: o.dropDuration,
        curve: Dr.drop,
        moveTo: o.newHomeClientOffset,
        opacity: p ? vt.opacity.drop : null,
        scale: p ? vt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: g,
          draggingOver: l,
          combineWith: p,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, s, l, p, g)
        }
      };
    }
    return null;
  };
}
function Ga(e = null) {
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
const qm = {
  mapped: {
    type: "SECONDARY",
    offset: we,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Ga(null)
  }
};
function Um() {
  const e = ye((a, s) => ({
    x: a,
    y: s
  })), t = ye(Ga), n = ye((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), r = (a) => a ? n(we, a, !0) : null, o = (a, s, c, d) => {
    const u = c.displaced.visible[a], l = !!(d.inVirtualList && d.effected[a]), p = Zt(c), m = p && p.draggableId === a ? s : null;
    if (!u) {
      if (!l)
        return r(m);
      if (c.displaced.invisible[a])
        return null;
      const x = nt(d.displacedBy.point), E = e(x.x, x.y);
      return n(E, m, !0);
    }
    if (l)
      return r(m);
    const g = c.displacedBy.point, h = e(g.x, g.y);
    return n(h, m, u.shouldAnimate);
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
const Hm = () => {
  const e = Wm(), t = Um();
  return (r, o) => e(r, o) || t(r, o) || qm;
}, Ym = {
  dropAnimationFinished: ya
}, Km = qi(Hm, Ym, null, {
  context: kr,
  areStatePropsEqual: Va
})(Vm);
function Wa(e) {
  return Ut($r).isUsingCloneFor === e.draggableId && !e.isClone ? null : ve.createElement(Km, e);
}
function Mr(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return ve.createElement(Wa, Gt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const jr = (e) => (t) => e === t, Xm = jr("scroll"), Jm = jr("auto"), Qm = jr("visible"), $o = (e, t) => t(e.overflowX) || t(e.overflowY), Zm = (e, t) => t(e.overflowX) && t(e.overflowY), qa = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return $o(n, Xm) || $o(n, Jm);
}, eg = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = bt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, v()), !qa(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return Zm(r, Qm) || process.env.NODE_ENV !== "production" && me(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Lr = (e) => e == null ? null : e === document.body ? eg() ? e : null : e === document.documentElement ? null : qa(e) ? e : Lr(e.parentElement);
var tg = (e) => {
  !e || !Lr(e.parentElement) || process.env.NODE_ENV !== "production" && me(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Qn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Ua = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Ua(e.parentElement) : !1;
var ng = (e) => {
  const t = Lr(e), n = Ua(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, rg = ({
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
      client: m
    } = s, g = Da({
      scrollHeight: p.scrollHeight,
      scrollWidth: p.scrollWidth,
      height: m.paddingBox.height,
      width: m.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: m,
      scrollSize: p,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: we,
          displacement: we
        }
      }
    };
  })(), d = o === "vertical" ? hr : ra, u = Je({
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
const og = (e, t) => {
  const n = Hi(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, a = o + t.scrollWidth, c = fr({
    top: r,
    right: a,
    bottom: i,
    left: o
  }, n.border);
  return mr({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var ig = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = n.closestScrollable, d = og(e, c), u = zt(d, r), l = (() => {
    if (!c)
      return null;
    const m = Hi(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: m,
      page: zt(m, r),
      scroll: Qn(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return rg({
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
const ag = {
  passive: !1
}, sg = {
  passive: !0
};
var Mo = (e) => e.shouldPublishImmediately ? ag : sg;
const Tt = (e) => e && e.env.closestScrollable || null;
function cg(e) {
  const t = ee(null), n = Ut(nn), r = Ar("droppable"), {
    registry: o,
    marshal: i
  } = n, a = Pr(e), s = oe(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = ee(s), d = oe(() => ye((w, b) => {
    t.current || (process.env.NODE_ENV !== "production" ? v(!1, "Can only update scroll when dragging") : v());
    const k = {
      x: w,
      y: b
    };
    i.updateDroppableScroll(s.id, k);
  }), [s.id, i]), u = W(() => {
    const w = t.current;
    return !w || !w.env.closestScrollable ? we : Qn(w.env.closestScrollable);
  }, []), l = W(() => {
    const w = u();
    d(w.x, w.y);
  }, [u, d]), p = oe(() => pt(l), [l]), m = W(() => {
    const w = t.current, b = Tt(w);
    if (w && b || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find scroll options while scrolling") : v()), w.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    p();
  }, [p, l]), g = W((w, b) => {
    t.current && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot collect a droppable while a drag is occurring") : v());
    const k = a.current, _ = k.getDroppableRef();
    _ || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot collect without a droppable ref") : v());
    const j = ng(_), Y = {
      ref: _,
      descriptor: s,
      env: j,
      scrollOptions: b
    };
    t.current = Y;
    const O = ig({
      ref: _,
      descriptor: s,
      env: j,
      windowScroll: w,
      direction: k.direction,
      isDropDisabled: k.isDropDisabled,
      isCombineEnabled: k.isCombineEnabled,
      shouldClipSubject: !k.ignoreContainerClipping
    }), T = j.closestScrollable;
    return T && (T.setAttribute(ko.contextId, n.contextId), T.addEventListener("scroll", m, Mo(Y.scrollOptions)), process.env.NODE_ENV !== "production" && tg(T)), O;
  }, [n.contextId, s, m, a]), h = W(() => {
    const w = t.current, b = Tt(w);
    return w && b || (process.env.NODE_ENV !== "production" ? v(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : v()), Qn(b);
  }, []), x = W(() => {
    const w = t.current;
    w || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop drag when no active drag") : v());
    const b = Tt(w);
    t.current = null, b && (p.cancel(), b.removeAttribute(ko.contextId), b.removeEventListener("scroll", m, Mo(w.scrollOptions)));
  }, [m, p]), E = W((w) => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot scroll when there is no drag") : v());
    const k = Tt(b);
    k || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot scroll a droppable with no closest scrollable") : v()), k.scrollTop += w.y, k.scrollLeft += w.x;
  }, []), y = oe(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: h,
    dragStopped: x,
    scroll: E
  }), [x, g, h, E]), N = oe(() => ({
    uniqueId: r,
    descriptor: s,
    callbacks: y
  }), [y, s, r]);
  Ce(() => (c.current = N.descriptor, o.droppable.register(N), () => {
    t.current && (process.env.NODE_ENV !== "production" && me("Unsupported: changing the droppableId or type of a Droppable during a drag"), x()), o.droppable.unregister(N);
  }), [y, s, x, N, i, o.droppable]), Ce(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ce(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function kn() {
}
const jo = {
  width: 0,
  height: 0,
  margin: op
}, lg = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? jo : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, dg = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = lg({
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
}, pg = (e) => {
  const t = ee(null), n = W(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = pe(e.animate === "open");
  he(() => s ? r !== "open" ? (n(), c(!1), kn) : t.current ? kn : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : kn, [r, s, n]);
  const d = W((l) => {
    l.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), u = dg({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return ve.createElement(e.placeholder.tagName, {
    style: u,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: d,
    ref: e.innerRef
  });
};
var ug = ve.memo(pg);
function An(e) {
  return typeof e == "boolean";
}
function _n(e, t) {
  t.forEach((n) => n(e));
}
const fg = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? v(!1, "A Droppable requires a droppableId prop") : v()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? v(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : v());
}, function({
  props: t
}) {
  An(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? v(!1, "isDropDisabled must be a boolean") : v()), An(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? v(!1, "isCombineEnabled must be a boolean") : v()), An(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? v(!1, "ignoreContainerClipping must be a boolean") : v());
}, function({
  getDroppableRef: t
}) {
  Fa(t());
}], mg = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && me(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], gg = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? v(!1, "Must provide a clone render function (renderClone) for virtual lists") : v());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? v(!1, "Expected virtual list to not have a placeholder") : v());
}];
function vg(e) {
  It(() => {
    _n(e, fg), e.props.mode === "standard" && _n(e, mg), e.props.mode === "virtual" && _n(e, gg);
  });
}
class hg extends ve.PureComponent {
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
const bg = (e) => {
  const t = wt(nn);
  t || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find app context") : v());
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = ee(null), i = ee(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: d,
    direction: u,
    ignoreContainerClipping: l,
    isDropDisabled: p,
    isCombineEnabled: m,
    snapshot: g,
    useClone: h,
    updateViewportMaxScroll: x,
    getContainerForClone: E
  } = e, y = W(() => o.current, []), N = W((B = null) => {
    o.current = B;
  }, []), w = W(() => i.current, []), b = W((B = null) => {
    i.current = B;
  }, []);
  vg({
    props: e,
    getDroppableRef: y,
    getPlaceholderRef: w
  });
  const k = W(() => {
    r() && x({
      maxScroll: Oa()
    });
  }, [r, x]);
  cg({
    droppableId: s,
    type: c,
    mode: d,
    direction: u,
    isDropDisabled: p,
    isCombineEnabled: m,
    ignoreContainerClipping: l,
    getDroppableRef: y
  });
  const _ = oe(() => ve.createElement(hg, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: B,
    data: q,
    animate: V
  }) => ve.createElement(ug, {
    placeholder: q,
    onClose: B,
    innerRef: b,
    animate: V,
    contextId: n,
    onTransitionEnd: k
  })), [n, k, e.placeholder, e.shouldAnimatePlaceholder, b]), j = oe(() => ({
    innerRef: N,
    placeholder: _,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": n
    }
  }), [n, s, _, N]), Y = h ? h.dragging.draggableId : null, O = oe(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: Y
  }), [s, Y, c]);
  function T() {
    if (!h)
      return null;
    const {
      dragging: B,
      render: q
    } = h, V = ve.createElement(Wa, {
      draggableId: B.draggableId,
      index: B.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (K, F) => q(K, F, B));
    return vs.createPortal(V, E());
  }
  return ve.createElement($r.Provider, {
    value: O
  }, a(j, g), T());
};
function xg() {
  return document.body || (process.env.NODE_ENV !== "production" ? v(!1, "document.body is not ready") : v()), document.body;
}
const Lo = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: xg
}, Ha = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Lo)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Lo[n]
    });
  return t;
}, Pn = (e, t) => e === t.droppable.type, Bo = (e, t) => t.draggables[e.draggable.id], yg = () => {
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
      const g = u ? {
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
        useClone: g
      };
    }
    if (!a)
      return t;
    if (!c)
      return e;
    const m = {
      isDraggingOver: s,
      draggingOverWith: l,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: d.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: m,
      useClone: null
    };
  });
  return (i, a) => {
    const s = Ha(a), c = s.droppableId, d = s.type, u = !s.isDropDisabled, l = s.renderClone;
    if (xt(i)) {
      const p = i.critical;
      if (!Pn(d, p))
        return t;
      const m = Bo(p, i.dimensions), g = Ie(i.impact) === c;
      return r(c, u, g, g, m, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const p = i.completed;
      if (!Pn(d, p.critical))
        return t;
      const m = Bo(p.critical, i.dimensions);
      return r(c, u, za(p.result) === c, Ie(p.impact) === c, m, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const p = i.completed;
      if (!Pn(d, p.critical))
        return t;
      const m = Ie(p.impact) === c, g = !!(p.impact.at && p.impact.at.type === "COMBINE"), h = p.critical.droppable.id === c;
      return m ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, wg = {
  updateViewportMaxScroll: vu
}, Br = qi(yg, wg, (e, t, n) => ({
  ...Ha(n),
  ...e,
  ...t
}), {
  context: kr,
  areStatePropsEqual: Va
})(bg);
function Tv({
  items: e,
  onReorder: t,
  className: n,
  itemClassName: r,
  droppableId: o = "sortable-list"
}) {
  return /* @__PURE__ */ f(Tr, { onDragEnd: (a) => {
    if (!a.destination) return;
    const s = Array.from(e), [c] = s.splice(a.source.index, 1);
    s.splice(a.destination.index, 0, c), t(s);
  }, children: /* @__PURE__ */ f(Br, { droppableId: o, children: (a) => /* @__PURE__ */ C(
    "ul",
    {
      ref: a.innerRef,
      ...a.droppableProps,
      className: S("space-y-2", n),
      children: [
        e.map((s, c) => /* @__PURE__ */ f(Mr, { draggableId: s.id, index: c, children: (d, u) => /* @__PURE__ */ C(
          "li",
          {
            ref: d.innerRef,
            ...d.draggableProps,
            className: S(
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
              /* @__PURE__ */ f(
                "div",
                {
                  className: S(
                    "absolute top-0 left-0 right-0 h-1 rounded-t-xl transition-opacity duration-200",
                    "bg-gradient-to-r from-accent via-primary to-primary",
                    u.isDragging ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  )
                }
              ),
              /* @__PURE__ */ f(
                "div",
                {
                  ...d.dragHandleProps,
                  className: S(
                    "flex-shrink-0 p-1 rounded-lg cursor-grab active:cursor-grabbing",
                    "text-neutral-300 hover:text-neutral-500 hover:bg-neutral-100",
                    "transition-colors duration-150",
                    u.isDragging && "text-primary"
                  ),
                  children: /* @__PURE__ */ f(Xe, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ f("div", { className: "flex-1 min-w-0", children: s.content }),
              /* @__PURE__ */ f(
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
var Zn = { exports: {} }, $t = { exports: {} }, ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fo;
function Eg() {
  if (Fo) return ce;
  Fo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function N(b) {
    if (typeof b == "object" && b !== null) {
      var k = b.$$typeof;
      switch (k) {
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
                case g:
                case m:
                case a:
                  return b;
                default:
                  return k;
              }
          }
        case n:
          return k;
      }
    }
  }
  function w(b) {
    return N(b) === d;
  }
  return ce.AsyncMode = c, ce.ConcurrentMode = d, ce.ContextConsumer = s, ce.ContextProvider = a, ce.Element = t, ce.ForwardRef = u, ce.Fragment = r, ce.Lazy = g, ce.Memo = m, ce.Portal = n, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = l, ce.isAsyncMode = function(b) {
    return w(b) || N(b) === c;
  }, ce.isConcurrentMode = w, ce.isContextConsumer = function(b) {
    return N(b) === s;
  }, ce.isContextProvider = function(b) {
    return N(b) === a;
  }, ce.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, ce.isForwardRef = function(b) {
    return N(b) === u;
  }, ce.isFragment = function(b) {
    return N(b) === r;
  }, ce.isLazy = function(b) {
    return N(b) === g;
  }, ce.isMemo = function(b) {
    return N(b) === m;
  }, ce.isPortal = function(b) {
    return N(b) === n;
  }, ce.isProfiler = function(b) {
    return N(b) === i;
  }, ce.isStrictMode = function(b) {
    return N(b) === o;
  }, ce.isSuspense = function(b) {
    return N(b) === l;
  }, ce.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === d || b === i || b === o || b === l || b === p || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === m || b.$$typeof === a || b.$$typeof === s || b.$$typeof === u || b.$$typeof === x || b.$$typeof === E || b.$$typeof === y || b.$$typeof === h);
  }, ce.typeOf = N, ce;
}
var le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vo;
function Ng() {
  return Vo || (Vo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function N(A) {
      return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      A === r || A === d || A === i || A === o || A === l || A === p || typeof A == "object" && A !== null && (A.$$typeof === g || A.$$typeof === m || A.$$typeof === a || A.$$typeof === s || A.$$typeof === u || A.$$typeof === x || A.$$typeof === E || A.$$typeof === y || A.$$typeof === h);
    }
    function w(A) {
      if (typeof A == "object" && A !== null) {
        var ue = A.$$typeof;
        switch (ue) {
          case t:
            var ze = A.type;
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
                  case u:
                  case g:
                  case m:
                  case a:
                    return ot;
                  default:
                    return ue;
                }
            }
          case n:
            return ue;
        }
      }
    }
    var b = c, k = d, _ = s, j = a, Y = t, O = u, T = r, B = g, q = m, V = n, K = i, F = o, te = l, Z = !1;
    function re(A) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(A) || w(A) === c;
    }
    function I(A) {
      return w(A) === d;
    }
    function P(A) {
      return w(A) === s;
    }
    function z(A) {
      return w(A) === a;
    }
    function G(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function L(A) {
      return w(A) === u;
    }
    function X(A) {
      return w(A) === r;
    }
    function J(A) {
      return w(A) === g;
    }
    function U(A) {
      return w(A) === m;
    }
    function R(A) {
      return w(A) === n;
    }
    function D(A) {
      return w(A) === i;
    }
    function $(A) {
      return w(A) === o;
    }
    function ne(A) {
      return w(A) === l;
    }
    le.AsyncMode = b, le.ConcurrentMode = k, le.ContextConsumer = _, le.ContextProvider = j, le.Element = Y, le.ForwardRef = O, le.Fragment = T, le.Lazy = B, le.Memo = q, le.Portal = V, le.Profiler = K, le.StrictMode = F, le.Suspense = te, le.isAsyncMode = re, le.isConcurrentMode = I, le.isContextConsumer = P, le.isContextProvider = z, le.isElement = G, le.isForwardRef = L, le.isFragment = X, le.isLazy = J, le.isMemo = U, le.isPortal = R, le.isProfiler = D, le.isStrictMode = $, le.isSuspense = ne, le.isValidElementType = N, le.typeOf = w;
  }()), le;
}
var zo;
function Ya() {
  return zo || (zo = 1, process.env.NODE_ENV === "production" ? $t.exports = Eg() : $t.exports = Ng()), $t.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Rn, Go;
function Dg() {
  if (Go) return Rn;
  Go = 1;
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
  return Rn = o() ? Object.assign : function(i, a) {
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
  }, Rn;
}
var Tn, Wo;
function Fr() {
  if (Wo) return Tn;
  Wo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Tn = e, Tn;
}
var $n, qo;
function Ka() {
  return qo || (qo = 1, $n = Function.call.bind(Object.prototype.hasOwnProperty)), $n;
}
var Mn, Uo;
function Sg() {
  if (Uo) return Mn;
  Uo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Fr(), n = {}, r = Ka();
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
          } catch (g) {
            l = g;
          }
          if (l && !(l instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), l instanceof Error && !(l.message in n)) {
            n[l.message] = !0;
            var m = d ? d() : "";
            e(
              "Failed " + s + " type: " + l.message + (m ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Mn = o, Mn;
}
var jn, Ho;
function Og() {
  if (Ho) return jn;
  Ho = 1;
  var e = Ya(), t = Dg(), n = Fr(), r = Ka(), o = Sg(), i = function() {
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
  return jn = function(s, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function l(I) {
      var P = I && (d && I[d] || I[u]);
      if (typeof P == "function")
        return P;
    }
    var p = "<<anonymous>>", m = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: y(),
      arrayOf: N,
      element: w(),
      elementType: b(),
      instanceOf: k,
      node: O(),
      objectOf: j,
      oneOf: _,
      oneOfType: Y,
      shape: B,
      exact: q
    };
    function g(I, P) {
      return I === P ? I !== 0 || 1 / I === 1 / P : I !== I && P !== P;
    }
    function h(I, P) {
      this.message = I, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function x(I) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, z = 0;
      function G(X, J, U, R, D, $, ne) {
        if (R = R || p, $ = $ || U, ne !== n) {
          if (c) {
            var A = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw A.name = "Invariant Violation", A;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = R + ":" + U;
            !P[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + R + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[ue] = !0, z++);
          }
        }
        return J[U] == null ? X ? J[U] === null ? new h("The " + D + " `" + $ + "` is marked as required " + ("in `" + R + "`, but its value is `null`.")) : new h("The " + D + " `" + $ + "` is marked as required in " + ("`" + R + "`, but its value is `undefined`.")) : null : I(J, U, R, D, $);
      }
      var L = G.bind(null, !1);
      return L.isRequired = G.bind(null, !0), L;
    }
    function E(I) {
      function P(z, G, L, X, J, U) {
        var R = z[G], D = F(R);
        if (D !== I) {
          var $ = te(R);
          return new h(
            "Invalid " + X + " `" + J + "` of type " + ("`" + $ + "` supplied to `" + L + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return x(P);
    }
    function y() {
      return x(a);
    }
    function N(I) {
      function P(z, G, L, X, J) {
        if (typeof I != "function")
          return new h("Property `" + J + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var U = z[G];
        if (!Array.isArray(U)) {
          var R = F(U);
          return new h("Invalid " + X + " `" + J + "` of type " + ("`" + R + "` supplied to `" + L + "`, expected an array."));
        }
        for (var D = 0; D < U.length; D++) {
          var $ = I(U, D, L, X, J + "[" + D + "]", n);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return x(P);
    }
    function w() {
      function I(P, z, G, L, X) {
        var J = P[z];
        if (!s(J)) {
          var U = F(J);
          return new h("Invalid " + L + " `" + X + "` of type " + ("`" + U + "` supplied to `" + G + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(I);
    }
    function b() {
      function I(P, z, G, L, X) {
        var J = P[z];
        if (!e.isValidElementType(J)) {
          var U = F(J);
          return new h("Invalid " + L + " `" + X + "` of type " + ("`" + U + "` supplied to `" + G + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(I);
    }
    function k(I) {
      function P(z, G, L, X, J) {
        if (!(z[G] instanceof I)) {
          var U = I.name || p, R = re(z[G]);
          return new h("Invalid " + X + " `" + J + "` of type " + ("`" + R + "` supplied to `" + L + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return x(P);
    }
    function _(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function P(z, G, L, X, J) {
        for (var U = z[G], R = 0; R < I.length; R++)
          if (g(U, I[R]))
            return null;
        var D = JSON.stringify(I, function(ne, A) {
          var ue = te(A);
          return ue === "symbol" ? String(A) : A;
        });
        return new h("Invalid " + X + " `" + J + "` of value `" + String(U) + "` " + ("supplied to `" + L + "`, expected one of " + D + "."));
      }
      return x(P);
    }
    function j(I) {
      function P(z, G, L, X, J) {
        if (typeof I != "function")
          return new h("Property `" + J + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var U = z[G], R = F(U);
        if (R !== "object")
          return new h("Invalid " + X + " `" + J + "` of type " + ("`" + R + "` supplied to `" + L + "`, expected an object."));
        for (var D in U)
          if (r(U, D)) {
            var $ = I(U, D, L, X, J + "." + D, n);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return x(P);
    }
    function Y(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var P = 0; P < I.length; P++) {
        var z = I[P];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Z(z) + " at index " + P + "."
          ), a;
      }
      function G(L, X, J, U, R) {
        for (var D = [], $ = 0; $ < I.length; $++) {
          var ne = I[$], A = ne(L, X, J, U, R, n);
          if (A == null)
            return null;
          A.data && r(A.data, "expectedType") && D.push(A.data.expectedType);
        }
        var ue = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new h("Invalid " + U + " `" + R + "` supplied to " + ("`" + J + "`" + ue + "."));
      }
      return x(G);
    }
    function O() {
      function I(P, z, G, L, X) {
        return V(P[z]) ? null : new h("Invalid " + L + " `" + X + "` supplied to " + ("`" + G + "`, expected a ReactNode."));
      }
      return x(I);
    }
    function T(I, P, z, G, L) {
      return new h(
        (I || "React class") + ": " + P + " type `" + z + "." + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function B(I) {
      function P(z, G, L, X, J) {
        var U = z[G], R = F(U);
        if (R !== "object")
          return new h("Invalid " + X + " `" + J + "` of type `" + R + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var D in I) {
          var $ = I[D];
          if (typeof $ != "function")
            return T(L, X, J, D, te($));
          var ne = $(U, D, L, X, J + "." + D, n);
          if (ne)
            return ne;
        }
        return null;
      }
      return x(P);
    }
    function q(I) {
      function P(z, G, L, X, J) {
        var U = z[G], R = F(U);
        if (R !== "object")
          return new h("Invalid " + X + " `" + J + "` of type `" + R + "` " + ("supplied to `" + L + "`, expected `object`."));
        var D = t({}, z[G], I);
        for (var $ in D) {
          var ne = I[$];
          if (r(I, $) && typeof ne != "function")
            return T(L, X, J, $, te(ne));
          if (!ne)
            return new h(
              "Invalid " + X + " `" + J + "` key `" + $ + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify(z[G], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var A = ne(U, $, L, X, J + "." + $, n);
          if (A)
            return A;
        }
        return null;
      }
      return x(P);
    }
    function V(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(V);
          if (I === null || s(I))
            return !0;
          var P = l(I);
          if (P) {
            var z = P.call(I), G;
            if (P !== I.entries) {
              for (; !(G = z.next()).done; )
                if (!V(G.value))
                  return !1;
            } else
              for (; !(G = z.next()).done; ) {
                var L = G.value;
                if (L && !V(L[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function K(I, P) {
      return I === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function F(I) {
      var P = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : K(P, I) ? "symbol" : P;
    }
    function te(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var P = F(I);
      if (P === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function Z(I) {
      var P = te(I);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function re(I) {
      return !I.constructor || !I.constructor.name ? p : I.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, jn;
}
var Ln, Yo;
function Ig() {
  if (Yo) return Ln;
  Yo = 1;
  var e = Fr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ln = function() {
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
  }, Ln;
}
if (process.env.NODE_ENV !== "production") {
  var Cg = Ya(), kg = !0;
  Zn.exports = Og()(Cg.isElement, kg);
} else
  Zn.exports = Ig()();
var Ag = Zn.exports;
const fe = /* @__PURE__ */ Hl(Ag);
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
const _g = /* @__PURE__ */ new Map([
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
  const r = Pg(e), { webkitRelativePath: o } = e, i = typeof t == "string" ? t : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && Ko(r, "path", i), Ko(r, "relativePath", i), r;
}
function Pg(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), o = _g.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Ko(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const Rg = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function Tg(e) {
  return Ye(this, void 0, void 0, function* () {
    return Ht(e) && $g(e.dataTransfer) ? Bg(e.dataTransfer, e.type) : Mg(e) ? jg(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? Lg(e) : [];
  });
}
function $g(e) {
  return Ht(e);
}
function Mg(e) {
  return Ht(e) && Ht(e.target);
}
function Ht(e) {
  return typeof e == "object" && e !== null;
}
function jg(e) {
  return er(e.target.files).map((t) => et(t));
}
function Lg(e) {
  return Ye(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => et(n));
  });
}
function Bg(e, t) {
  return Ye(this, void 0, void 0, function* () {
    if (e.items) {
      const n = er(e.items).filter((o) => o.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(Fg));
      return Xo(Xa(r));
    }
    return Xo(er(e.files).map((n) => et(n)));
  });
}
function Xo(e) {
  return e.filter((t) => Rg.indexOf(t.name) === -1);
}
function er(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function Fg(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Jo(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Ja(t) : Jo(e, t);
}
function Xa(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? Xa(n) : [n]
  ], []);
}
function Jo(e, t) {
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
function Vg(e) {
  return Ye(this, void 0, void 0, function* () {
    return e.isDirectory ? Ja(e) : zg(e);
  });
}
function Ja(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const o = [];
    function i() {
      t.readEntries((a) => Ye(this, void 0, void 0, function* () {
        if (a.length) {
          const s = Promise.all(a.map(Vg));
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
function zg(e) {
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
var Bn = function(e, t) {
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
function Qo(e) {
  return qg(e) || Wg(e) || Za(e) || Gg();
}
function Gg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wg(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function qg(e) {
  if (Array.isArray(e)) return tr(e);
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
function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zo(Object(n), !0).forEach(function(r) {
      Qa(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Qa(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function yt(e, t) {
  return Yg(e) || Hg(e, t) || Za(e, t) || Ug();
}
function Ug() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Za(e, t) {
  if (e) {
    if (typeof e == "string") return tr(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tr(e, t);
  }
}
function tr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Hg(e, t) {
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
function Yg(e) {
  if (Array.isArray(e)) return e;
}
var Kg = typeof Bn == "function" ? Bn : Bn.default, Xg = "file-invalid-type", Jg = "file-too-large", Qg = "file-too-small", Zg = "too-many-files", ev = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: Xg,
    message: "File type must be ".concat(r)
  };
}, ti = function(t) {
  return {
    code: Jg,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, ni = function(t) {
  return {
    code: Qg,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, tv = {
  code: Zg,
  message: "Too many files"
};
function nv(e) {
  return e.type === "" && typeof e.getAsFile == "function";
}
function es(e, t) {
  var n = e.type === "application/x-moz-file" || Kg(e, t) || nv(e);
  return [n, n ? null : ev(t)];
}
function ts(e, t, n) {
  if (qe(e.size))
    if (qe(t) && qe(n)) {
      if (e.size > n) return [!1, ti(n)];
      if (e.size < t) return [!1, ni(t)];
    } else {
      if (qe(t) && e.size < t) return [!1, ni(t)];
      if (qe(n) && e.size > n) return [!1, ti(n)];
    }
  return [!0, null];
}
function qe(e) {
  return e != null;
}
function rv(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, i = e.multiple, a = e.maxFiles, s = e.validator;
  return !i && t.length > 1 || i && a >= 1 && t.length > a ? !1 : t.every(function(c) {
    var d = es(c, n), u = yt(d, 1), l = u[0], p = ts(c, r, o), m = yt(p, 1), g = m[0], h = s ? s(c) : null;
    return l && g && !h;
  });
}
function Yt(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function ct(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function ri(e) {
  e.preventDefault();
}
function ov(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function iv(e) {
  return e.indexOf("Edge/") !== -1;
}
function av() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return ov(e) || iv(e);
}
function Te() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return t.some(function(s) {
      return !Yt(r) && s && s.apply(void 0, [r].concat(i)), Yt(r);
    });
  };
}
function sv() {
  return "showOpenFilePicker" in window;
}
function cv(e) {
  if (qe(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = yt(n, 2), o = r[0], i = r[1], a = !0;
      return ns(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(rs)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(n, r) {
      var o = yt(r, 2), i = o[0], a = o[1];
      return ei(ei({}, n), {}, Qa({}, i, a));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function lv(e) {
  if (qe(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = yt(n, 2), o = r[0], i = r[1];
      return [].concat(Qo(t), [o], Qo(i));
    }, []).filter(function(t) {
      return ns(t) || rs(t);
    }).join(",");
}
function dv(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function pv(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function ns(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function rs(e) {
  return /^.*\.[\w]+$/.test(e);
}
var uv = ["children"], fv = ["open"], mv = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], gv = ["refKey", "onChange", "onClick"];
function oi(e) {
  return bv(e) || hv(e) || os(e) || vv();
}
function vv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function bv(e) {
  if (Array.isArray(e)) return nr(e);
}
function Fn(e, t) {
  return wv(e) || yv(e, t) || os(e, t) || xv();
}
function xv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function os(e, t) {
  if (e) {
    if (typeof e == "string") return nr(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nr(e, t);
  }
}
function nr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function yv(e, t) {
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
function wv(e) {
  if (Array.isArray(e)) return e;
}
function ii(e, t) {
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
    t % 2 ? ii(Object(n), !0).forEach(function(r) {
      rr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ii(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function rr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Kt(e, t) {
  if (e == null) return {};
  var n = Ev(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ev(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Vr = /* @__PURE__ */ ae(function(e, t) {
  var n = e.children, r = Kt(e, uv), o = as(r), i = o.open, a = Kt(o, fv);
  return ms(t, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ ve.createElement(gs, null, n(ge(ge({}, a), {}, {
    open: i
  })));
});
Vr.displayName = "Dropzone";
var is = {
  disabled: !1,
  getFilesFromEvent: Tg,
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
Vr.defaultProps = is;
Vr.propTypes = {
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
  children: fe.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: fe.objectOf(fe.arrayOf(fe.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: fe.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: fe.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: fe.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: fe.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: fe.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: fe.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: fe.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: fe.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: fe.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: fe.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: fe.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: fe.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: fe.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: fe.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: fe.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: fe.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: fe.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: fe.func,
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
  onDrop: fe.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: fe.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: fe.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: fe.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: fe.func
};
var or = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  isDragGlobal: !1,
  acceptedFiles: [],
  fileRejections: []
};
function as() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = ge(ge({}, is), e), n = t.accept, r = t.disabled, o = t.getFilesFromEvent, i = t.maxSize, a = t.minSize, s = t.multiple, c = t.maxFiles, d = t.onDragEnter, u = t.onDragLeave, l = t.onDragOver, p = t.onDrop, m = t.onDropAccepted, g = t.onDropRejected, h = t.onFileDialogCancel, x = t.onFileDialogOpen, E = t.useFsAccessApi, y = t.autoFocus, N = t.preventDropOnDocument, w = t.noClick, b = t.noKeyboard, k = t.noDrag, _ = t.noDragEventsBubbling, j = t.onError, Y = t.validator, O = je(function() {
    return lv(n);
  }, [n]), T = je(function() {
    return cv(n);
  }, [n]), B = je(function() {
    return typeof x == "function" ? x : ai;
  }, [x]), q = je(function() {
    return typeof h == "function" ? h : ai;
  }, [h]), V = ee(null), K = ee(null), F = fs(Nv, or), te = Fn(F, 2), Z = te[0], re = te[1], I = Z.isFocused, P = Z.isFileDialogActive, z = ee(typeof window < "u" && window.isSecureContext && E && sv()), G = function() {
    !z.current && P && setTimeout(function() {
      if (K.current) {
        var H = K.current.files;
        H.length || (re({
          type: "closeDialog"
        }), q());
      }
    }, 300);
  };
  he(function() {
    return window.addEventListener("focus", G, !1), function() {
      window.removeEventListener("focus", G, !1);
    };
  }, [K, P, q, z]);
  var L = ee([]), X = ee([]), J = function(H) {
    V.current && V.current.contains(H.target) || (H.preventDefault(), L.current = []);
  };
  he(function() {
    return N && (document.addEventListener("dragover", ri, !1), document.addEventListener("drop", J, !1)), function() {
      N && (document.removeEventListener("dragover", ri), document.removeEventListener("drop", J));
    };
  }, [V, N]), he(function() {
    var M = function(Re) {
      X.current = [].concat(oi(X.current), [Re.target]), ct(Re) && re({
        isDragGlobal: !0,
        type: "setDragGlobal"
      });
    }, H = function(Re) {
      X.current = X.current.filter(function(Me) {
        return Me !== Re.target && Me !== null;
      }), !(X.current.length > 0) && re({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, be = function() {
      X.current = [], re({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, xe = function() {
      X.current = [], re({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    };
    return document.addEventListener("dragenter", M, !1), document.addEventListener("dragleave", H, !1), document.addEventListener("dragend", be, !1), document.addEventListener("drop", xe, !1), function() {
      document.removeEventListener("dragenter", M), document.removeEventListener("dragleave", H), document.removeEventListener("dragend", be), document.removeEventListener("drop", xe);
    };
  }, [V]), he(function() {
    return !r && y && V.current && V.current.focus(), function() {
    };
  }, [V, y, r]);
  var U = Q(function(M) {
    j ? j(M) : console.error(M);
  }, [j]), R = Q(function(M) {
    M.preventDefault(), M.persist(), kt(M), L.current = [].concat(oi(L.current), [M.target]), ct(M) && Promise.resolve(o(M)).then(function(H) {
      if (!(Yt(M) && !_)) {
        var be = H.length, xe = be > 0 && rv({
          files: H,
          accept: O,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: c,
          validator: Y
        }), Ee = be > 0 && !xe;
        re({
          isDragAccept: xe,
          isDragReject: Ee,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), d && d(M);
      }
    }).catch(function(H) {
      return U(H);
    });
  }, [o, d, U, _, O, a, i, s, c, Y]), D = Q(function(M) {
    M.preventDefault(), M.persist(), kt(M);
    var H = ct(M);
    if (H && M.dataTransfer)
      try {
        M.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return H && l && l(M), !1;
  }, [l, _]), $ = Q(function(M) {
    M.preventDefault(), M.persist(), kt(M);
    var H = L.current.filter(function(xe) {
      return V.current && V.current.contains(xe);
    }), be = H.indexOf(M.target);
    be !== -1 && H.splice(be, 1), L.current = H, !(H.length > 0) && (re({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), ct(M) && u && u(M));
  }, [V, u, _]), ne = Q(function(M, H) {
    var be = [], xe = [];
    M.forEach(function(Ee) {
      var Re = es(Ee, O), Me = Fn(Re, 2), an = Me[0], sn = Me[1], cn = ts(Ee, a, i), At = Fn(cn, 2), ln = At[0], dn = At[1], pn = Y ? Y(Ee) : null;
      if (an && ln && !pn)
        be.push(Ee);
      else {
        var un = [sn, dn];
        pn && (un = un.concat(pn)), xe.push({
          file: Ee,
          errors: un.filter(function(ds) {
            return ds;
          })
        });
      }
    }), (!s && be.length > 1 || s && c >= 1 && be.length > c) && (be.forEach(function(Ee) {
      xe.push({
        file: Ee,
        errors: [tv]
      });
    }), be.splice(0)), re({
      acceptedFiles: be,
      fileRejections: xe,
      isDragReject: xe.length > 0,
      type: "setFiles"
    }), p && p(be, xe, H), xe.length > 0 && g && g(xe, H), be.length > 0 && m && m(be, H);
  }, [re, s, O, a, i, c, p, m, g, Y]), A = Q(function(M) {
    M.preventDefault(), M.persist(), kt(M), L.current = [], ct(M) && Promise.resolve(o(M)).then(function(H) {
      Yt(M) && !_ || ne(H, M);
    }).catch(function(H) {
      return U(H);
    }), re({
      type: "reset"
    });
  }, [o, ne, U, _]), ue = Q(function() {
    if (z.current) {
      re({
        type: "openDialog"
      }), B();
      var M = {
        multiple: s,
        types: T
      };
      window.showOpenFilePicker(M).then(function(H) {
        return o(H);
      }).then(function(H) {
        ne(H, null), re({
          type: "closeDialog"
        });
      }).catch(function(H) {
        dv(H) ? (q(H), re({
          type: "closeDialog"
        })) : pv(H) ? (z.current = !1, K.current ? (K.current.value = null, K.current.click()) : U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : U(H);
      });
      return;
    }
    K.current && (re({
      type: "openDialog"
    }), B(), K.current.value = null, K.current.click());
  }, [re, B, q, E, ne, U, T, s]), ze = Q(function(M) {
    !V.current || !V.current.isEqualNode(M.target) || (M.key === " " || M.key === "Enter" || M.keyCode === 32 || M.keyCode === 13) && (M.preventDefault(), ue());
  }, [V, ue]), ot = Q(function() {
    re({
      type: "focus"
    });
  }, []), zr = Q(function() {
    re({
      type: "blur"
    });
  }, []), Gr = Q(function() {
    w || (av() ? setTimeout(ue, 0) : ue());
  }, [w, ue]), Ke = function(H) {
    return r ? null : H;
  }, on = function(H) {
    return b ? null : Ke(H);
  }, Ct = function(H) {
    return k ? null : Ke(H);
  }, kt = function(H) {
    _ && H.stopPropagation();
  }, ss = je(function() {
    return function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, H = M.refKey, be = H === void 0 ? "ref" : H, xe = M.role, Ee = M.onKeyDown, Re = M.onFocus, Me = M.onBlur, an = M.onClick, sn = M.onDragEnter, cn = M.onDragOver, At = M.onDragLeave, ln = M.onDrop, dn = Kt(M, mv);
      return ge(ge(rr({
        onKeyDown: on(Te(Ee, ze)),
        onFocus: on(Te(Re, ot)),
        onBlur: on(Te(Me, zr)),
        onClick: Ke(Te(an, Gr)),
        onDragEnter: Ct(Te(sn, R)),
        onDragOver: Ct(Te(cn, D)),
        onDragLeave: Ct(Te(At, $)),
        onDrop: Ct(Te(ln, A)),
        role: typeof xe == "string" && xe !== "" ? xe : "presentation"
      }, be, V), !r && !b ? {
        tabIndex: 0
      } : {}), dn);
    };
  }, [V, ze, ot, zr, Gr, R, D, $, A, b, k, r]), cs = Q(function(M) {
    M.stopPropagation();
  }, []), ls = je(function() {
    return function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, H = M.refKey, be = H === void 0 ? "ref" : H, xe = M.onChange, Ee = M.onClick, Re = Kt(M, gv), Me = rr({
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
        onClick: Ke(Te(Ee, cs)),
        tabIndex: -1
      }, be, K);
      return ge(ge({}, Me), Re);
    };
  }, [K, n, s, A, r]);
  return ge(ge({}, Z), {}, {
    isFocused: I && !r,
    getRootProps: ss,
    getInputProps: ls,
    rootRef: V,
    inputRef: K,
    open: Ke(ue)
  });
}
function Nv(e, t) {
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
      return ge(ge({}, or), {}, {
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
      return ge({}, or);
    default:
      return e;
  }
}
function ai() {
}
const Dv = (e) => e.startsWith("image/") ? tc : e.startsWith("video/") ? wc : e.startsWith("audio/") ? fc : e.includes("pdf") || e.includes("document") ? Ys : Xs, si = (e) => {
  if (e === 0) return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB", "GB"], r = Math.floor(Math.log(e) / Math.log(t));
  return parseFloat((e / Math.pow(t, r)).toFixed(2)) + " " + n[r];
};
function $v({
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
  const [d, u] = pe([]), [l, p] = pe([]), m = Q(
    (N, w) => {
      if (N.length > 0) {
        const b = i ? [...d, ...N] : N;
        if (u(b), e(b), c) {
          const k = N.filter((_) => _.type.startsWith("image/")).map((_) => ({
            file: _,
            url: URL.createObjectURL(_)
          }));
          p((_) => i ? [..._, ...k] : k);
        }
      }
      w.length > 0 && t && t(w);
    },
    [d, i, e, t, c]
  ), g = (N) => {
    const w = d.filter((k) => k !== N);
    u(w), e(w);
    const b = l.find((k) => k.file === N);
    b && (URL.revokeObjectURL(b.url), p((k) => k.filter((_) => _.file !== N)));
  }, { getRootProps: h, getInputProps: x, isDragActive: E, isDragReject: y } = as({
    onDrop: m,
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
        ...h(),
        className: S(
          "flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl cursor-pointer",
          "transition-all duration-200 ease-out",
          "bg-gradient-to-b from-neutral-50 to-white",
          "border-primary/60 hover:border-primary",
          E && !y && "border-primary bg-gradient-to-b from-primary/5 to-accent/5 scale-[1.01]",
          y && "border-red-400 bg-red-50",
          a && "opacity-50 cursor-not-allowed"
        ),
        children: [
          /* @__PURE__ */ f("input", { ...x() }),
          /* @__PURE__ */ f(
            "div",
            {
              className: S(
                "w-16 h-16 mb-4 rounded-2xl flex items-center justify-center",
                "bg-gradient-to-br from-primary/10 to-accent/10",
                "transition-transform duration-200",
                E && "scale-110"
              ),
              children: /* @__PURE__ */ f(
                xc,
                {
                  className: S(
                    "w-8 h-8 text-primary",
                    E && "animate-bounce"
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ f("p", { className: "text-lg font-medium text-neutral-700 mb-1", children: E ? y ? "Archivo no permitido" : "Suelta los archivos aquí" : "Arrastra archivos aquí" }),
          /* @__PURE__ */ f("p", { className: "text-sm text-neutral-500 mb-3", children: "o haz clic para seleccionar" }),
          /* @__PURE__ */ C("p", { className: "text-xs text-neutral-400", children: [
            "PNG, JPG hasta ",
            si(o)
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
      /* @__PURE__ */ f("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: d.map((N, w) => {
        const b = Dv(N.type), k = l.find((_) => _.file === N);
        return /* @__PURE__ */ C(
          "div",
          {
            className: S(
              "group flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-xl",
              "transition-all duration-200",
              "hover:shadow-md hover:border-primary/30"
            ),
            children: [
              k ? /* @__PURE__ */ f("div", { className: "w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100", children: /* @__PURE__ */ f(
                "img",
                {
                  src: k.url,
                  alt: N.name,
                  className: "w-full h-full object-cover"
                }
              ) }) : /* @__PURE__ */ f(
                "div",
                {
                  className: S(
                    "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
                    "bg-gradient-to-br from-primary/10 to-accent/10"
                  ),
                  children: /* @__PURE__ */ f(b, { className: "w-6 h-6 text-primary" })
                }
              ),
              /* @__PURE__ */ C("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ f("p", { className: "text-sm font-medium text-neutral-800 truncate", children: N.name }),
                /* @__PURE__ */ f("p", { className: "text-xs text-neutral-500", children: si(N.size) })
              ] }),
              /* @__PURE__ */ f(
                "button",
                {
                  type: "button",
                  onClick: (_) => {
                    _.stopPropagation(), g(N);
                  },
                  className: S(
                    "p-1.5 rounded-lg opacity-0 group-hover:opacity-100",
                    "text-neutral-400 hover:text-red-500 hover:bg-red-50",
                    "transition-all duration-200"
                  ),
                  children: /* @__PURE__ */ f(tt, { className: "w-4 h-4" })
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
const Sv = {
  default: "bg-neutral-100 text-neutral-700",
  primary: "bg-primary/10 text-primary",
  success: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700"
};
function Mv({ columns: e, onCardMove: t, className: n }) {
  return /* @__PURE__ */ f(Tr, { onDragEnd: (o) => {
    const { source: i, destination: a, draggableId: s } = o;
    a && (i.droppableId === a.droppableId && i.index === a.index || t(
      s,
      i.droppableId,
      a.droppableId,
      i.index,
      a.index
    ));
  }, children: /* @__PURE__ */ f("div", { className: S("flex gap-4 overflow-x-auto pb-4", n), children: e.map((o) => /* @__PURE__ */ C(
    "div",
    {
      className: "flex-shrink-0 w-72 bg-neutral-50 rounded-xl border border-neutral-200",
      children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: S(
              "px-4 py-3 border-b border-neutral-200 rounded-t-xl",
              "bg-gradient-to-r from-neutral-100 to-neutral-50"
            ),
            children: /* @__PURE__ */ C("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ f("h3", { className: "font-semibold text-neutral-800", children: o.title }),
              /* @__PURE__ */ f(
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
        /* @__PURE__ */ f(Br, { droppableId: o.id, children: (i, a) => /* @__PURE__ */ C(
          "div",
          {
            ref: i.innerRef,
            ...i.droppableProps,
            className: S(
              "p-3 min-h-[200px] space-y-3 transition-colors duration-200",
              a.isDraggingOver && "bg-primary/5"
            ),
            children: [
              o.cards.map((s, c) => /* @__PURE__ */ f(Mr, { draggableId: s.id, index: c, children: (d, u) => /* @__PURE__ */ C(
                "div",
                {
                  ref: d.innerRef,
                  ...d.draggableProps,
                  className: S(
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
                        className: S(
                          "flex items-center gap-2 px-3 py-2 border-b border-neutral-100",
                          "cursor-grab active:cursor-grabbing",
                          "bg-gradient-to-r from-neutral-50 to-white"
                        ),
                        children: [
                          /* @__PURE__ */ f(
                            Xe,
                            {
                              className: S(
                                "w-4 h-4 text-neutral-300",
                                "group-hover:text-neutral-400",
                                u.isDragging && "text-primary"
                              )
                            }
                          ),
                          /* @__PURE__ */ f("span", { className: "font-medium text-sm text-neutral-800 truncate", children: s.title })
                        ]
                      }
                    ),
                    /* @__PURE__ */ C("div", { className: "p-3", children: [
                      s.description && /* @__PURE__ */ f("p", { className: "text-sm text-neutral-600 mb-2 line-clamp-2", children: s.description }),
                      s.tags && s.tags.length > 0 && /* @__PURE__ */ f("div", { className: "flex flex-wrap gap-1", children: s.tags.map((l, p) => /* @__PURE__ */ f(
                        "span",
                        {
                          className: S(
                            "px-2 py-0.5 text-xs font-medium rounded-full",
                            Sv[l.variant || "default"]
                          ),
                          children: l.label
                        },
                        p
                      )) })
                    ] }),
                    /* @__PURE__ */ f(
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
              o.cards.length === 0 && !a.isDraggingOver && /* @__PURE__ */ f("div", { className: "flex items-center justify-center h-24 text-neutral-400 text-sm", children: "Sin tarjetas" })
            ]
          }
        ) })
      ]
    },
    o.id
  )) }) });
}
function jv({
  items: e,
  onReorder: t,
  className: n,
  cardClassName: r,
  droppableId: o = "draggable-cards",
  direction: i = "vertical"
}) {
  return /* @__PURE__ */ f(Tr, { onDragEnd: (s) => {
    if (!s.destination) return;
    const c = Array.from(e), [d] = c.splice(s.source.index, 1);
    c.splice(s.destination.index, 0, d), t(c);
  }, children: /* @__PURE__ */ f(Br, { droppableId: o, direction: i, children: (s) => /* @__PURE__ */ C(
    "div",
    {
      ref: s.innerRef,
      ...s.droppableProps,
      className: S(
        i === "horizontal" ? "flex gap-4" : "space-y-4",
        n
      ),
      children: [
        e.map((c, d) => /* @__PURE__ */ f(Mr, { draggableId: c.id, index: d, children: (u, l) => /* @__PURE__ */ C(
          "div",
          {
            ref: u.innerRef,
            ...u.draggableProps,
            className: S(
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
                  className: S(
                    "flex items-center justify-between px-4 py-3",
                    "bg-gradient-to-r from-primary to-primary-dark text-white",
                    "cursor-grab active:cursor-grabbing"
                  ),
                  children: [
                    /* @__PURE__ */ f("h3", { className: "font-semibold", children: c.title }),
                    /* @__PURE__ */ f(Xe, { className: "w-5 h-5 opacity-70" })
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
                      /* @__PURE__ */ f(
                        Xe,
                        {
                          className: S(
                            "w-5 h-5 flex-shrink-0 text-neutral-300",
                            "group-hover:text-neutral-400 transition-colors",
                            l.isDragging && "text-primary"
                          )
                        }
                      ),
                      /* @__PURE__ */ f("div", { className: "flex-1 h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-transparent" })
                    ]
                  }
                )
              ),
              /* @__PURE__ */ f("div", { className: S(c.title ? "p-4" : "px-4 pb-4"), children: c.children }),
              !c.title && /* @__PURE__ */ f(
                "div",
                {
                  className: S(
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
function Lv({
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
              /* @__PURE__ */ f("h3", { className: "font-semibold", children: e }),
              /* @__PURE__ */ f(Xe, { className: "w-5 h-5 opacity-70" })
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
                /* @__PURE__ */ f(
                  Xe,
                  {
                    className: S(
                      "w-5 h-5 flex-shrink-0 text-neutral-300",
                      "group-hover:text-neutral-400 transition-colors",
                      r && "text-primary"
                    )
                  }
                ),
                /* @__PURE__ */ f("div", { className: "flex-1 h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-transparent" })
              ]
            }
          )
        ),
        /* @__PURE__ */ f("div", { className: S(e ? "p-4" : "px-4 pb-4"), children: t }),
        !e && /* @__PURE__ */ f(
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
  gl as A,
  dl as B,
  nl as C,
  jv as D,
  S as E,
  $v as F,
  Xt as G,
  Di as H,
  Av as I,
  Dl as J,
  Mv as K,
  vl as L,
  Ci as M,
  Ni as N,
  Ii as O,
  _l as P,
  Pv as Q,
  el as R,
  bi as S,
  Nl as T,
  zn as a,
  hl as b,
  Rv as c,
  Lt as d,
  ol as e,
  al as f,
  Hl as g,
  rl as h,
  yi as i,
  Jc as j,
  Rl as k,
  xi as l,
  sr as m,
  Bt as n,
  Ll as o,
  Vc as p,
  bl as q,
  Ei as r,
  Lv as s,
  Tv as t,
  kv as u,
  El as v,
  Uc as w,
  ki as x,
  jl as y,
  _v as z
};
//# sourceMappingURL=index-B14wxdPg.js.map
