import { jsxs as C, jsx as f, Fragment as Fe } from "react/jsx-runtime";
import * as ie from "react";
import ve, { forwardRef as ae, createElement as Vn, useState as pe, useRef as Z, useCallback as Q, useMemo as Me, useEffect as he, useId as ds, useContext as wt, createContext as ir, useLayoutEffect as ps, useReducer as us, useImperativeHandle as fs, Fragment as ms } from "react";
import gs, { flushSync as ci } from "react-dom";
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
const vs = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = (e) => e.replace(
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
  const t = hs(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var bs = {
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
const xs = (e) => {
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
const ys = ae(
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
      ...bs,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: li("lucide", o),
      ...!i && !xs(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([d, p]) => Vn(d, p)),
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
    ({ className: r, ...o }, i) => Vn(ys, {
      ref: i,
      iconNode: t,
      className: li(
        `lucide-${vs(Wr(e))}`,
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
const ws = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Es = se("arrow-down", ws);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Ds = se("arrow-up-down", Ns);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Ss = se("arrow-up", Os);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], Cs = se("bell", Is);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], di = se("check", ks);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Lt = se("chevron-down", _s);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ps = se("chevron-left", As);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ar = se("chevron-right", Rs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], $s = se("chevrons-left", Ts);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], Ls = se("chevrons-right", Ms);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], pi = se("circle-alert", js);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], ui = se("circle-check-big", Bs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Vs = se("copy", Fs);
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
], Gs = se("eye-off", zs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], qs = se("eye", Ws);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
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
], Hs = se("file-text", Us);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], Ks = se("file", Ys);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Xe = se("grip-vertical", Xs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Qs = se("house", Js);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ec = se("image", Zs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], fi = se("info", tc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], rc = se("loader-circle", nc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], ic = se("lock", oc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], sc = se("mail", ac);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], mi = se("menu", cc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = [["path", { d: "M5 12h14", key: "1ays0h" }]], dc = se("minus", lc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], uc = se("music", pc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
], mc = se("panel-left-close", fc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], gi = se("search", gc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], vi = se("triangle-alert", vc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], bc = se("upload", hc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xc = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], yc = se("video", xc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], tt = se("x", wc);
function hi(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = hi(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ec() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = hi(e)) && (r && (r += " "), r += t);
  return r;
}
function S(...e) {
  return Ec(e);
}
const Nc = {
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
}, Dc = {
  xs: "px-2 py-0.5 text-xs gap-1",
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-4 py-2 text-base gap-2",
  lg: "px-6 py-3 text-lg gap-2.5"
}, Oc = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20
}, jt = ae(
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
    return /* @__PURE__ */ C(
      "button",
      {
        ref: l,
        disabled: u,
        className: S(
          // Base styles
          "inline-flex items-center justify-center font-medium rounded-md",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          // Variant styles
          r && qr[e] ? qr[e] : Nc[e],
          // Size styles
          Dc[t],
          // Full width
          a && "w-full",
          // Disabled state
          u && "opacity-50 cursor-not-allowed",
          c
        ),
        ...p,
        children: [
          n ? /* @__PURE__ */ f(rc, { className: "animate-spin", size: Oc[t] }) : o,
          d,
          !n && i
        ]
      }
    );
  }
);
jt.displayName = "Button";
const Sc = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-4 py-3 text-lg"
}, Ic = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, Cc = {
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
    ...p
  }, l) => {
    const u = d || `input-${Math.random().toString(36).slice(2, 9)}`, m = !!r;
    return /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: u,
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
            id: u,
            disabled: s,
            className: S(
              // Base styles
              "w-full rounded-md border bg-white",
              "transition-colors duration-200",
              "placeholder:text-neutral-400",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              Sc[e],
              // Icon padding
              o && Ic[e],
              i && Cc[e],
              // Border color
              m ? "border-error focus:ring-error focus:border-error" : "border-neutral-300",
              // Disabled state
              s && "bg-neutral-100 cursor-not-allowed opacity-60",
              c
            ),
            "aria-invalid": m,
            "aria-describedby": m ? `${u}-error` : n ? `${u}-helper` : void 0,
            ...p
          }
        ),
        i && /* @__PURE__ */ f("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400", children: i })
      ] }),
      m && /* @__PURE__ */ f("p", { id: `${u}-error`, className: "text-sm text-error", children: r }),
      !m && n && /* @__PURE__ */ f("p", { id: `${u}-helper`, className: "text-sm text-neutral-500", children: n })
    ] });
  }
);
Bt.displayName = "Input";
const kc = {
  sm: "px-3 py-1.5 text-sm pr-8",
  md: "px-4 py-2 text-base pr-10",
  lg: "px-4 py-3 text-lg pr-12"
}, _c = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, Ac = {
  sm: "min-h-[34px] px-3 py-1 text-sm",
  md: "min-h-[42px] px-4 py-1.5 text-base",
  lg: "min-h-[50px] px-4 py-2 text-lg"
}, Pc = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, Rc = {
  sm: 14,
  md: 16,
  lg: 20
}, Tc = ae(
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
    className: p,
    id: l,
    value: u,
    defaultValue: m,
    onChange: g,
    name: h,
    ...b
  }, E) => {
    var R;
    const w = l || `select-${Math.random().toString(36).slice(2, 9)}`, N = !!r, y = u !== void 0, [x, I] = pe(
      m !== void 0 ? String(m) : ""
    ), A = y ? String(u ?? "") : x, L = ((R = o.find((D) => D.value === A)) == null ? void 0 : R.label) ?? "", [j, O] = pe(""), [T, B] = pe(!1), [V, F] = pe(-1), Y = Z(null), J = Z(null), ee = Z(null), oe = Z(null), ne = Q(
      (D) => {
        oe.current = D, typeof E == "function" ? E(D) : E && (E.current = D);
      },
      [E]
    ), k = Me(() => o.filter(
      (D) => !j || D.label.toLowerCase().includes(j.toLowerCase())
    ), [o, j]), P = Q((D) => {
      var _;
      const $ = oe.current;
      if (!$) return;
      const te = (_ = Object.getOwnPropertyDescriptor(
        HTMLSelectElement.prototype,
        "value"
      )) == null ? void 0 : _.set;
      te == null || te.call($, D), $.dispatchEvent(new Event("change", { bubbles: !0 }));
    }, []), z = Q(
      (D) => {
        y || I(D.target.value), g == null || g(D), B(!1), O(""), F(-1);
      },
      [y, g]
    ), q = Q(
      (D) => {
        if (c) return;
        const $ = o.find((te) => te.value === D);
        $ != null && $.disabled || P(D);
      },
      [c, o, P]
    ), G = Q(
      (D, $) => {
        const te = k.length;
        if (te === 0) return -1;
        for (let _ = 0; _ < te; _++) {
          const ue = (D + $ * (_ + 1) + te) % te;
          if (!k[ue].disabled) return ue;
        }
        return -1;
      },
      [k]
    ), K = Q(() => k.findIndex((D) => !D.disabled), [k]), X = Q(
      (D) => {
        if (!c)
          switch (D.key) {
            case "ArrowDown": {
              D.preventDefault(), T ? F(($) => G($, 1)) : (B(!0), F(K()));
              break;
            }
            case "ArrowUp": {
              D.preventDefault(), T && F(($) => G($, -1));
              break;
            }
            case "Enter": {
              if (D.preventDefault(), T && V >= 0 && V < k.length) {
                const $ = k[V];
                $.disabled || q($.value);
              } else T || B(!0);
              break;
            }
            case "Escape": {
              D.preventDefault(), B(!1), F(-1);
              break;
            }
          }
      },
      [
        c,
        T,
        V,
        k,
        q,
        G,
        K
      ]
    );
    he(() => {
      if (!s) return;
      const D = ($) => {
        Y.current && !Y.current.contains($.target) && (B(!1), F(-1), O(""));
      };
      return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
    }, [s]), he(() => {
      var D;
      V >= 0 && ee.current && ((D = ee.current.querySelectorAll('[role="option"]')[V]) == null || D.scrollIntoView({ block: "nearest" }));
    }, [V]);
    const U = () => {
      var D;
      c || ((D = J.current) == null || D.focus(), B(!0));
    };
    return s ? /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: `${w}-input`,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ C("div", { ref: Y, className: "relative", children: [
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
              Ac[e],
              // Left icon padding
              d && Pc[e],
              // Right padding for chevron
              "pr-8",
              // Focus ring (applied when dropdown is open)
              T && !N && "ring-2 ring-primary border-primary",
              T && N && "ring-2 ring-error border-error",
              // Border color
              N ? "border-error" : "border-neutral-300",
              // Disabled state
              c && "bg-neutral-100 cursor-not-allowed opacity-60",
              p
            ),
            "aria-invalid": N,
            "aria-describedby": N ? `${w}-error` : n ? `${w}-helper` : void 0,
            children: /* @__PURE__ */ f(
              "input",
              {
                ref: J,
                id: `${w}-input`,
                type: "text",
                value: T ? j : L,
                onChange: (D) => {
                  O(D.target.value), T || B(!0), F(0);
                },
                onFocus: () => {
                  c || B(!0);
                },
                onKeyDown: X,
                placeholder: L || i,
                disabled: c,
                className: S(
                  "flex-1 min-w-[60px] outline-none bg-transparent",
                  "placeholder:text-neutral-400",
                  c && "cursor-not-allowed"
                ),
                role: "combobox",
                "aria-expanded": T,
                "aria-controls": `${w}-listbox`,
                "aria-activedescendant": V >= 0 ? `${w}-option-${V}` : void 0,
                "aria-autocomplete": "list",
                autoComplete: "off"
              }
            )
          }
        ),
        /* @__PURE__ */ f(
          Lt,
          {
            className: S(
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-200",
              T && "rotate-180"
            ),
            size: Rc[e]
          }
        ),
        T && /* @__PURE__ */ f(
          "ul",
          {
            ref: ee,
            id: `${w}-listbox`,
            role: "listbox",
            className: S(
              "absolute z-50 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: k.length === 0 ? /* @__PURE__ */ f("li", { className: "px-4 py-2 text-sm text-neutral-400", children: j ? "No matching options" : "No options available" }) : k.map((D, $) => /* @__PURE__ */ f(
              "li",
              {
                id: `${w}-option-${$}`,
                role: "option",
                "aria-selected": D.value === A,
                "aria-disabled": D.disabled,
                onClick: () => {
                  D.disabled || q(D.value);
                },
                className: S(
                  "px-4 py-2 text-sm transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  D.disabled ? "text-neutral-300 cursor-not-allowed opacity-50 select-none" : S(
                    "cursor-pointer",
                    $ === V ? "bg-primary/10 text-primary" : "text-neutral-700 hover:bg-neutral-50"
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
            ref: ne,
            id: w,
            name: h,
            disabled: c,
            ...y ? { value: u } : { defaultValue: m },
            onChange: z,
            className: "sr-only",
            tabIndex: -1,
            "aria-hidden": "true",
            ...b,
            children: [
              i && /* @__PURE__ */ f("option", { value: "", disabled: !0, children: i }),
              o.map((D) => /* @__PURE__ */ f("option", { value: D.value, disabled: D.disabled, children: D.label }, D.value))
            ]
          }
        )
      ] }),
      N && /* @__PURE__ */ f("p", { id: `${w}-error`, className: "text-sm text-error", children: r }),
      !N && n && /* @__PURE__ */ f("p", { id: `${w}-helper`, className: "text-sm text-neutral-500", children: n })
    ] }) : /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: w,
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
            id: w,
            name: h,
            disabled: c,
            value: u,
            defaultValue: m,
            onChange: g,
            className: S(
              // Base styles
              "w-full rounded-md border bg-white appearance-none cursor-pointer",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              kc[e],
              // Icon padding
              d && _c[e],
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
              i && /* @__PURE__ */ f("option", { value: "", disabled: !0, children: i }),
              o.map((D) => /* @__PURE__ */ f("option", { value: D.value, disabled: D.disabled, children: D.label }, D.value))
            ]
          }
        ),
        /* @__PURE__ */ f(
          Lt,
          {
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none",
            size: e === "sm" ? 14 : e === "lg" ? 20 : 16
          }
        )
      ] }),
      N && /* @__PURE__ */ f("p", { id: `${w}-error`, className: "text-sm text-error", children: r }),
      !N && n && /* @__PURE__ */ f("p", { id: `${w}-helper`, className: "text-sm text-neutral-500", children: n })
    ] });
  }
);
Tc.displayName = "Select";
const $c = {
  sm: "min-h-[34px] px-3 py-1 text-sm",
  md: "min-h-[42px] px-4 py-1.5 text-base",
  lg: "min-h-[50px] px-4 py-2 text-lg"
}, Mc = {
  sm: "px-1.5 py-0.5 text-xs gap-0.5",
  md: "px-2 py-0.5 text-sm gap-1",
  lg: "px-2.5 py-1 text-sm gap-1"
}, Lc = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, jc = {
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
    disabled: p = !1,
    maxItems: l,
    searchable: u = !0,
    leftIcon: m,
    tagColor: g = "primary",
    className: h,
    id: b
  }, E) => {
    const w = b || `multiselect-${Math.random().toString(36).slice(2, 9)}`, N = !!s, y = t !== void 0, [x, I] = pe(n), A = y ? t : x, [L, j] = pe(""), [O, T] = pe(!1), [B, V] = pe(-1), F = Z(null), Y = Z(null), J = Z(null), ee = Q(
      (R) => {
        y || I(R), r == null || r(R);
      },
      [y, r]
    ), oe = Me(() => e.filter((R) => {
      const D = A.includes(R.value), $ = !L || R.label.toLowerCase().includes(L.toLowerCase());
      return !D && $;
    }), [e, A, L]), ne = l === void 0 || A.length < l, k = Q(
      (R) => {
        var te;
        if (!ne || p) return;
        const D = e.find((_) => _.value === R);
        if (D != null && D.disabled) return;
        const $ = [...A, R];
        ee($), j(""), V(-1), (te = Y.current) == null || te.focus();
      },
      [ne, p, e, A, ee]
    ), P = Q(
      (R, D) => {
        var te;
        if (D == null || D.stopPropagation(), p) return;
        const $ = A.filter((_) => _ !== R);
        ee($), (te = Y.current) == null || te.focus();
      },
      [p, A, ee]
    ), z = Q(
      (R, D) => {
        const $ = oe.length;
        if ($ === 0) return -1;
        for (let te = 0; te < $; te++) {
          const _ = (R + D * (te + 1) + $) % $;
          if (!oe[_].disabled) return _;
        }
        return -1;
      },
      [oe]
    ), q = Q(() => oe.findIndex((R) => !R.disabled), [oe]), G = Q(
      (R) => {
        if (!p)
          switch (R.key) {
            case "ArrowDown": {
              R.preventDefault(), O ? V((D) => z(D, 1)) : (T(!0), V(q()));
              break;
            }
            case "ArrowUp": {
              R.preventDefault(), O && V((D) => z(D, -1));
              break;
            }
            case "Enter": {
              if (R.preventDefault(), O && B >= 0 && B < oe.length) {
                const D = oe[B];
                D.disabled || k(D.value);
              } else O || T(!0);
              break;
            }
            case "Backspace": {
              if (L === "" && A.length > 0) {
                const D = A[A.length - 1];
                P(D);
              }
              break;
            }
            case "Escape": {
              R.preventDefault(), T(!1), V(-1);
              break;
            }
          }
      },
      [
        p,
        O,
        B,
        k,
        L,
        A,
        P,
        z,
        q
      ]
    );
    he(() => {
      const R = (D) => {
        F.current && !F.current.contains(D.target) && (T(!1), V(-1), j(""));
      };
      return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
    }, []), he(() => {
      var R;
      B >= 0 && J.current && ((R = J.current.querySelectorAll('[role="option"]')[B]) == null || R.scrollIntoView({ block: "nearest" }));
    }, [B]);
    const K = () => {
      var R;
      p || ((R = Y.current) == null || R.focus(), T(!0));
    }, X = (R) => {
      var D;
      return ((D = e.find(($) => $.value === R)) == null ? void 0 : D.label) ?? R;
    }, U = (R) => {
      var D;
      return ((D = e.find(($) => $.value === R)) == null ? void 0 : D.color) ?? g;
    };
    return /* @__PURE__ */ C("div", { ref: E, className: S("flex flex-col gap-1.5", d && "w-full"), children: [
      i && /* @__PURE__ */ f("label", { htmlFor: `${w}-input`, className: "text-sm font-medium text-neutral-700", children: i }),
      /* @__PURE__ */ C("div", { ref: F, className: "relative", children: [
        m && /* @__PURE__ */ f("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10", children: m }),
        /* @__PURE__ */ C(
          "div",
          {
            onClick: K,
            className: S(
              // Base styles
              "flex flex-wrap items-center gap-1.5 w-full rounded-md border bg-white cursor-text",
              "transition-colors duration-200",
              // Size styles
              $c[o],
              // Left icon padding
              m && Lc[o],
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
              A.map((R) => {
                const D = Fc[U(R)];
                return /* @__PURE__ */ C(
                  "span",
                  {
                    className: S(
                      "inline-flex items-center rounded-md font-medium",
                      "transition-colors duration-150",
                      D.base,
                      !p && D.hover,
                      Mc[o]
                    ),
                    children: [
                      X(R),
                      !p && /* @__PURE__ */ f(
                        "button",
                        {
                          type: "button",
                          onClick: ($) => P(R, $),
                          className: S(
                            "inline-flex items-center justify-center rounded-sm transition-colors",
                            D.hover
                          ),
                          "aria-label": `Remove ${X(R)}`,
                          tabIndex: -1,
                          children: /* @__PURE__ */ f(tt, { size: jc[o] })
                        }
                      )
                    ]
                  },
                  R
                );
              }),
              u ? /* @__PURE__ */ f(
                "input",
                {
                  ref: Y,
                  id: `${w}-input`,
                  type: "text",
                  value: L,
                  onChange: (R) => {
                    j(R.target.value), O || T(!0), V(0);
                  },
                  onFocus: () => {
                    p || T(!0);
                  },
                  onKeyDown: G,
                  placeholder: A.length === 0 ? c : "",
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
              ) : /* @__PURE__ */ C(Fe, { children: [
                A.length === 0 && /* @__PURE__ */ f("span", { className: "text-neutral-400", children: c }),
                /* @__PURE__ */ f(
                  "input",
                  {
                    ref: Y,
                    id: `${w}-input`,
                    className: "absolute opacity-0 w-0 h-0",
                    onFocus: () => {
                      p || T(!0);
                    },
                    onKeyDown: G,
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
        /* @__PURE__ */ f(
          Lt,
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
            ref: J,
            id: `${w}-listbox`,
            role: "listbox",
            "aria-multiselectable": "true",
            className: S(
              "absolute z-50 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: oe.length === 0 ? /* @__PURE__ */ f("li", { className: "px-4 py-2 text-sm text-neutral-400", children: L ? "No matching options" : "No options available" }) : oe.map((R, D) => /* @__PURE__ */ f(
              "li",
              {
                id: `${w}-option-${D}`,
                role: "option",
                "aria-selected": A.includes(R.value),
                "aria-disabled": R.disabled || !ne,
                onClick: () => {
                  !R.disabled && ne && k(R.value);
                },
                className: S(
                  "px-4 py-2 text-sm transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  R.disabled || !ne ? "text-neutral-300 cursor-not-allowed opacity-50 select-none" : S(
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
      N && /* @__PURE__ */ f("p", { id: `${w}-error`, className: "text-sm text-error", children: s }),
      !N && a && /* @__PURE__ */ f("p", { id: `${w}-helper`, className: "text-sm text-neutral-500", children: a })
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
const bi = ae(
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
    const u = i !== void 0, [m, g] = pe(!1), h = u ? i : m, b = Z(null), E = Z(null), w = Z(null), N = Q(
      (L) => {
        u || g(L), a == null || a(L);
      },
      [u, a]
    ), y = Q(() => N(!1), [N]), x = Q(() => {
      o || N(!h);
    }, [o, h, N]), I = Q(
      (L) => {
        var j;
        L.key === "Escape" && (L.preventDefault(), y(), (j = w.current) == null || j.focus()), L.key === "Tab" && y();
      },
      [y]
    );
    he(() => {
      const L = (j) => {
        b.current && !b.current.contains(j.target) && y();
      };
      return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
    }, [y]);
    const A = `dropdown-${Z(Math.random().toString(36).slice(2, 9)).current}`;
    return /* @__PURE__ */ C(
      "div",
      {
        ref: b,
        className: S("relative inline-flex items-center", d),
        ...p,
        children: [
          /* @__PURE__ */ f(
            "div",
            {
              ref: w,
              role: "button",
              tabIndex: o ? -1 : 0,
              "aria-haspopup": "true",
              "aria-expanded": h,
              "aria-controls": h ? `${A}-panel` : void 0,
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
          h && /* @__PURE__ */ f(
            "div",
            {
              ref: (L) => {
                E.current = L, typeof l == "function" ? l(L) : l && (l.current = L);
              },
              id: `${A}-panel`,
              onKeyDown: I,
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
bi.displayName = "Dropdown";
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
  }, p) => {
    const [l, u] = pe(!1), [m, g] = pe(-1), h = Z(null), b = t.filter((O) => !O.disabled), E = Q(
      (O, T) => {
        const B = t.length;
        if (B === 0) return -1;
        for (let V = 0; V < B; V++) {
          const F = (O + T * (V + 1) + B) % B;
          if (!t[F].disabled) return F;
        }
        return -1;
      },
      [t]
    ), w = Q(() => t.findIndex((O) => !O.disabled), [t]), N = Q(() => {
      for (let O = t.length - 1; O >= 0; O--)
        if (!t[O].disabled) return O;
      return -1;
    }, [t]), y = Q(() => {
      s || b.length === 0 || (u(!0), g(-1));
    }, [s, b.length]), x = Q(() => {
      u(!1), g(-1);
    }, []), I = Q(
      (O) => {
        var T;
        O.disabled || ((T = O.onClick) == null || T.call(O), n == null || n(O.value), x());
      },
      [n, x]
    ), A = Q(
      (O) => {
        O ? y() : x();
      },
      [y, x]
    ), L = Q(
      (O) => {
        if (!s)
          switch (O.key) {
            case "ArrowDown": {
              O.preventDefault(), l ? g(
                (T) => T === -1 ? w() : E(T, 1)
              ) : y();
              break;
            }
            case "ArrowUp": {
              O.preventDefault(), l ? g(
                (T) => T === -1 ? N() : E(T, -1)
              ) : y();
              break;
            }
            case "Enter":
            case " ": {
              if (O.preventDefault(), l && m >= 0 && m < t.length) {
                const T = t[m];
                T.href && !T.disabled && (window.location.href = T.href), I(T);
              } else l || y();
              break;
            }
          }
      },
      [
        s,
        l,
        m,
        t,
        y,
        I,
        E,
        w,
        N
      ]
    );
    he(() => {
      var O;
      m >= 0 && h.current && ((O = h.current.querySelectorAll('[role="menuitem"]')[m]) == null || O.scrollIntoView({ block: "nearest" }));
    }, [m]);
    const j = (O, T) => {
      const B = T === m, V = /* @__PURE__ */ C(Fe, { children: [
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
      ] }), F = S(
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
      ), Y = () => {
        var J;
        O.disabled || ((J = O.onClick) == null || J.call(O), n == null || n(O.value), x());
      };
      return /* @__PURE__ */ C("div", { children: [
        O.dividerBefore && /* @__PURE__ */ f("div", { className: "my-1 border-t border-neutral-200", role: "separator" }),
        O.href && !O.disabled ? /* @__PURE__ */ f(
          "a",
          {
            href: O.href,
            role: "menuitem",
            tabIndex: -1,
            className: F,
            onClick: (J) => {
              var ee;
              (ee = O.onClick) == null || ee.call(O), n == null || n(O.value), x(), O.onClick && J.preventDefault();
            },
            onMouseEnter: () => g(T),
            onMouseLeave: () => g(-1),
            "aria-disabled": O.disabled,
            children: V
          }
        ) : /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            role: "menuitem",
            tabIndex: -1,
            className: S(F, "text-left"),
            onClick: Y,
            onMouseEnter: () => g(T),
            onMouseLeave: () => g(-1),
            disabled: O.disabled,
            "aria-disabled": O.disabled,
            children: V
          }
        )
      ] }, O.value);
    };
    return /* @__PURE__ */ f(
      bi,
      {
        ref: p,
        trigger: r,
        placement: o,
        offset: i,
        disabled: s,
        open: l,
        onOpenChange: A,
        onKeyDown: L,
        contentClassName: "min-w-[180px] py-1 px-1 max-h-80 overflow-auto",
        className: c,
        ...d,
        children: /* @__PURE__ */ C("div", { ref: h, role: "menu", "aria-orientation": "vertical", children: [
          e && /* @__PURE__ */ C("div", { children: [
            e,
            /* @__PURE__ */ f("div", { className: "my-1 border-t border-neutral-200", role: "separator" })
          ] }),
          t.map((O, T) => j(O, T))
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
    ...p
  }, l) => {
    const u = c || `textarea-${Math.random().toString(36).slice(2, 9)}`, m = !!n, g = typeof d == "string" ? d.length : 0;
    return /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1.5", r && "w-full"), children: [
      e && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: u,
          className: "text-sm font-medium text-neutral-700",
          children: e
        }
      ),
      /* @__PURE__ */ f(
        "textarea",
        {
          ref: l,
          id: u,
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
          "aria-describedby": m ? `${u}-error` : t ? `${u}-helper` : void 0,
          ...p
        }
      ),
      /* @__PURE__ */ C("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ C("div", { children: [
          m && /* @__PURE__ */ f("p", { id: `${u}-error`, className: "text-sm text-error", children: n }),
          !m && t && /* @__PURE__ */ f("p", { id: `${u}-helper`, className: "text-sm text-neutral-500", children: t })
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
    import("./index-CbGOrlZj.js").then((e) => e.i),
    // prismjs core ships markup/css/clike/javascript — no grammars eagerly imported
    import("./prism-B-t5P2ex.js").then((e) => e.p)
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
const At = {
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
    minHeight: p = 120,
    displayOnly: l = !1,
    showLineNumbers: u = !1,
    showCount: m = !1,
    showCopyButton: g = !1,
    disabled: h = !1,
    className: b,
    id: E,
    ...w
  }, N) => {
    const y = ds(), x = E || `code-editor-${y}`, I = !!n, [A, L] = pe(null), [j, O] = pe(null), [T, B] = pe(!1), V = Z(null);
    he(() => {
      let P = !0;
      return (async () => {
        const z = await Hc();
        P && (L(z), await Kc(z.Prism, a), P && O(a));
      })(), () => {
        P = !1;
      };
    }, [a]), he(
      () => () => {
        V.current && clearTimeout(V.current);
      },
      []
    );
    const F = A == null ? void 0 : A.Prism, Y = !!F && j === a, J = (P) => {
      if (F && Y) {
        const z = F.languages[a] ?? F.languages.javascript;
        if (z) return F.highlight(P, z, a);
      }
      return Xc(P);
    }, ee = () => {
      var P;
      (P = navigator.clipboard) == null || P.writeText(o), B(!0), V.current && clearTimeout(V.current), V.current = setTimeout(() => B(!1), 2e3);
    }, oe = Math.max(1, o.split(`
`).length), ne = I ? `${x}-error` : t ? `${x}-helper` : void 0, k = l || !A ? (
      // Display-only, or fallback before the editor lib resolves.
      l ? /* @__PURE__ */ f(
        "pre",
        {
          className: "m-0 overflow-auto px-4 py-3",
          style: { ...At, minHeight: p },
          children: /* @__PURE__ */ f("code", { dangerouslySetInnerHTML: { __html: J(o) } })
        }
      ) : (
        // Editable fallback: a plain textarea so there is no layout shift.
        /* @__PURE__ */ f(
          "textarea",
          {
            id: x,
            value: o,
            disabled: h,
            placeholder: s,
            spellCheck: !1,
            onChange: (P) => i == null ? void 0 : i(P.target.value),
            className: "m-0 w-full resize-none border-0 bg-transparent px-4 py-3 focus:outline-none",
            style: { ...At, minHeight: p }
          }
        )
      )
    ) : /* @__PURE__ */ f(
      A.Editor,
      {
        value: o,
        onValueChange: (P) => i == null ? void 0 : i(P),
        highlight: J,
        padding: { top: 12, right: 16, bottom: 12, left: 16 },
        tabSize: c,
        insertSpaces: d,
        textareaId: x,
        disabled: h,
        placeholder: s,
        style: { ...At, minHeight: p },
        textareaClassName: "focus:outline-none"
      }
    );
    return /* @__PURE__ */ C("div", { className: S("flex flex-col gap-1.5", r && "w-full"), children: [
      e && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: x,
          className: "text-sm font-medium text-neutral-700",
          children: e
        }
      ),
      /* @__PURE__ */ C("div", { className: "relative", children: [
        g && /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            onClick: ee,
            "aria-label": T ? "Copied" : "Copy code",
            className: S(
              "absolute right-2 top-2 z-10 rounded-md p-1.5",
              "bg-white/80 text-neutral-500 backdrop-blur",
              "transition-colors hover:bg-neutral-100 hover:text-neutral-700",
              "focus:outline-none focus:ring-2 focus:ring-primary"
            ),
            children: T ? /* @__PURE__ */ f(di, { size: 16, className: "text-success" }) : /* @__PURE__ */ f(Vs, { size: 16 })
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            ref: N,
            "aria-invalid": I || void 0,
            "aria-describedby": ne,
            className: S(
              "omnitok-code-editor",
              "overflow-hidden rounded-md border bg-white",
              "transition-colors duration-200",
              !l && !h && "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary",
              I ? "border-error focus-within:border-error focus-within:ring-error" : "border-neutral-300",
              h && "cursor-not-allowed bg-neutral-100 opacity-60",
              b
            ),
            ...w,
            children: /* @__PURE__ */ C("div", { className: "flex", children: [
              u && /* @__PURE__ */ f(
                "div",
                {
                  "aria-hidden": "true",
                  className: "select-none border-r border-neutral-200 bg-neutral-50 py-3 pl-4 pr-3 text-right text-neutral-400",
                  style: At,
                  children: Array.from({ length: oe }, (P, z) => /* @__PURE__ */ f("div", { children: z + 1 }, z))
                }
              ),
              /* @__PURE__ */ f("div", { className: "min-w-0 flex-1", children: k })
            ] })
          }
        )
      ] }),
      (I || t || m && !l) && /* @__PURE__ */ C("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ C("div", { children: [
          I && /* @__PURE__ */ f("p", { id: `${x}-error`, className: "text-sm text-error", children: n }),
          !I && t && /* @__PURE__ */ f("p", { id: `${x}-helper`, className: "text-sm text-neutral-500", children: t })
        ] }),
        m && !l && /* @__PURE__ */ C("span", { className: "text-sm text-neutral-500", children: [
          oe,
          " ",
          oe === 1 ? "line" : "lines",
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
}, xi = ae(
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
    const m = d || `checkbox-${Math.random().toString(36).slice(2, 9)}`, g = !!n, h = (w) => {
      p == null || p(w), a == null || a(w.target.checked);
    }, b = () => {
      const w = Qc[o];
      return /* @__PURE__ */ f(
        "div",
        {
          className: S(
            "w-5 h-5 rounded border-2 transition-colors",
            "flex items-center justify-center",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "[&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100",
            w.ring,
            w.checked,
            g ? "border-error" : "border-neutral-300 peer-hover:border-neutral-400"
          ),
          children: r ? /* @__PURE__ */ f(dc, { className: "w-3 h-3 text-white transition-opacity" }) : /* @__PURE__ */ f(di, { className: "w-3 h-3 text-white transition-opacity" })
        }
      );
    }, E = () => {
      const w = Zc[o];
      return /* @__PURE__ */ f(
        "div",
        {
          className: S(
            "relative w-11 h-6 rounded-full transition-colors",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "peer-checked:[&>div]:translate-x-5",
            w.ring,
            w.checked,
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
                  ref: u,
                  type: "checkbox",
                  id: m,
                  disabled: s,
                  className: "peer sr-only",
                  "aria-invalid": g,
                  onChange: h,
                  ...l
                }
              ),
              i ? E() : b()
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
xi.displayName = "Checkbox";
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
    const c = (d) => d ? d.split(" ").map((p) => p[0]).join("").toUpperCase().slice(0, 2) : "?";
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
const yi = ({
  item: e,
  collapsed: t,
  level: n = 0,
  activeId: r,
  onItemClick: o,
  onCollapsedChange: i
}) => {
  const a = e.children && e.children.length > 0, s = e.active || e.id === r, c = a && e.children.some((h) => h.id === r), [d, p] = pe(c);
  he(() => {
    c && p(!0);
  }, [c]);
  const l = (h) => {
    var E;
    h.ctrlKey || h.metaKey || h.shiftKey || h.button !== 0 || (h.preventDefault(), o == null || o(e), (E = e.onClick) == null || E.call(e));
  }, u = () => {
    var h;
    a ? t ? (i == null || i(!1), p(!0)) : p(!d) : (o == null || o(e), (h = e.onClick) == null || h.call(e));
  }, m = /* @__PURE__ */ C(Fe, { children: [
    /* @__PURE__ */ C("span", { className: "relative flex-shrink-0 w-4 h-4 flex items-center justify-center text-[16px]", children: [
      e.icon || /* @__PURE__ */ f("span", { className: "w-1" }),
      t && a && /* @__PURE__ */ f(ar, { className: "absolute -right-2.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 text-white/50" })
    ] }),
    !t && /* @__PURE__ */ C(Fe, { children: [
      /* @__PURE__ */ f("span", { className: "flex-1 truncate text-[13px]", children: e.label }),
      e.badge && /* @__PURE__ */ f("span", { className: "px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-accent text-white", children: e.badge }),
      a && /* @__PURE__ */ f(
        Lt,
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
        onClick: u,
        title: t ? e.label : void 0,
        children: m
      }
    ),
    a && d && !t && /* @__PURE__ */ f("div", { className: "mt-1 space-y-1", children: e.children.map((h) => /* @__PURE__ */ f(
      yi,
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
}, wi = ae(
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
    const m = t, g = n ?? t;
    return /* @__PURE__ */ C(
      "aside",
      {
        ref: u,
        className: S(
          "flex flex-col h-screen bg-sidebar text-white overflow-hidden flex-shrink-0",
          "transition-all duration-300",
          i ? "w-16" : "w-64",
          p
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
              ) : /* @__PURE__ */ C(Fe, { children: [
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
                    children: /* @__PURE__ */ f(mc, { className: "w-4 h-4" })
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ f("nav", { className: "flex-1 overflow-y-auto overflow-x-hidden py-3 space-y-0.5 scrollbar-thin", children: e.map((h) => /* @__PURE__ */ f(
            yi,
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
wi.displayName = "Sidebar";
const Ei = ae(
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
        /* @__PURE__ */ f(xi, { label: o ?? "Unread only", onCheckedChange: a })
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
            /* @__PURE__ */ f(Cs, { className: "w-5 h-5 text-neutral-600" }),
            t !== void 0 && t > 0 && /* @__PURE__ */ f("span", { className: "absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-4 h-4 text-xs font-medium text-white bg-accent rounded-full flex items-center justify-center", children: t > 9 ? "9+" : t })
          ]
        }
      )
    }
  )
);
Ei.displayName = "NotificationMenu";
const Ni = ae(
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
              onClick: p,
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
          i && /* @__PURE__ */ f(Ei, { ...a }),
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
Ni.displayName = "Header";
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
    headerTitle: p,
    user: l,
    userMenuItems: u,
    onUserClick: m,
    showNotifications: g = !0,
    notificationMenu: h,
    showSearch: b = !0,
    searchValue: E,
    onSearchChange: w,
    headerActions: N,
    header: y,
    hideSidebar: x = !1,
    hideHeader: I = !1,
    rightPanel: A,
    rightPanelWidth: L = "360px",
    className: j,
    ...O
  }, T) => {
    const [B, V] = pe(!1), [F, Y] = pe(!1), J = !!t, ee = !!y;
    return /* @__PURE__ */ C("div", { ref: T, className: S("flex h-screen bg-neutral-50", j), ...O, children: [
      !x && /* @__PURE__ */ C(Fe, { children: [
        !J && F && /* @__PURE__ */ f(
          "div",
          {
            className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
            onClick: () => Y(!1)
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            className: S(
              "fixed lg:static inset-y-0 left-0 z-50 lg:z-auto",
              "transform lg:transform-none transition-transform duration-300",
              !J && F ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
              J && "translate-x-0"
            ),
            children: J ? t : /* @__PURE__ */ f(
              wi,
              {
                items: n,
                logo: o,
                logoCollapsed: i,
                systemName: a,
                footer: s,
                collapsible: r,
                collapsed: B,
                onCollapsedChange: V,
                activeId: c,
                onItemClick: (oe) => {
                  d == null || d(oe), Y(!1);
                }
              }
            )
          }
        )
      ] }),
      !x && I && !ee && /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: () => Y(!F),
          className: "fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md border border-neutral-200 lg:hidden",
          "aria-label": "Toggle menu",
          children: /* @__PURE__ */ f(mi, { className: "w-5 h-5 text-neutral-600" })
        }
      ),
      /* @__PURE__ */ C("div", { className: "flex-1 flex flex-col min-w-0", children: [
        !I && (ee ? y : /* @__PURE__ */ f(
          Ni,
          {
            title: p,
            showSearch: b,
            searchValue: E,
            onSearchChange: w,
            showNotifications: g,
            notificationMenu: h,
            user: l,
            userMenuItems: u,
            onUserClick: m,
            showMenuToggle: !x,
            onMenuToggle: () => Y(!F),
            actions: N
          }
        )),
        /* @__PURE__ */ C("div", { className: "flex-1 flex overflow-hidden", children: [
          /* @__PURE__ */ f(
            "main",
            {
              className: S(
                "flex-1 overflow-y-auto p-6",
                A && "hidden md:block"
              ),
              children: e
            }
          ),
          A && /* @__PURE__ */ f(
            "aside",
            {
              className: "w-full md:w-[var(--panel-width)] border-l border-neutral-200 bg-white overflow-y-auto flex-shrink-0",
              style: { "--panel-width": L },
              children: A
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
    const s = () => n || /* @__PURE__ */ f(ar, { className: "w-4 h-4 text-neutral-400 mx-2" }), c = (l, u, m) => {
      const g = /* @__PURE__ */ C(Fe, { children: [
        u === 0 && t && /* @__PURE__ */ f(Qs, { className: "w-4 h-4 mr-1" }),
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
      const l = e.slice(0, 1), u = e.slice(-(r - 2));
      d = [
        ...l,
        { label: "..." },
        ...u
      ];
    }
    return /* @__PURE__ */ f("nav", { ref: a, "aria-label": "Breadcrumb", className: o, ...i, children: /* @__PURE__ */ f("ol", { className: "flex items-center flex-wrap", children: d.map((l, u) => {
      const m = u === d.length - 1;
      return /* @__PURE__ */ C("li", { className: "inline-flex items-center", children: [
        c(l, u, m),
        !m && s()
      ] }, u);
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
  hoverable: p = !0,
  compact: l = !1,
  className: u,
  ...m
}, g) {
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
    return x && o === "asc" ? /* @__PURE__ */ f(Ss, { className: I }) : x && o === "desc" ? /* @__PURE__ */ f(Es, { className: I }) : /* @__PURE__ */ f(Ds, { className: I });
  }, N = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  return /* @__PURE__ */ f("div", { className: "overflow-x-auto", children: /* @__PURE__ */ C(
    "table",
    {
      ref: g,
      className: S("w-full border-collapse", u),
      ...m,
      children: [
        /* @__PURE__ */ f("thead", { className: "bg-primary text-white", children: /* @__PURE__ */ f("tr", { children: e.map((y) => /* @__PURE__ */ f(
          "th",
          {
            className: S(
              "font-semibold text-white text-sm",
              l ? "px-3 py-2" : "px-4 py-3",
              N[y.align || "left"],
              y.sortable && "cursor-pointer select-none hover:bg-primary-dark"
            ),
            style: { width: y.width },
            onClick: () => E(y),
            children: /* @__PURE__ */ C("div", { className: S(
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
        ) }) : t.map((y, x) => /* @__PURE__ */ f(
          "tr",
          {
            className: S(
              "transition-colors",
              d && x % 2 === 1 && "bg-neutral-50",
              p && "hover:bg-neutral-50",
              a && "cursor-pointer"
            ),
            onClick: () => a == null ? void 0 : a(y, x),
            children: e.map((I) => /* @__PURE__ */ f(
              "td",
              {
                className: S(
                  "text-neutral-700 text-sm",
                  l ? "px-3 py-2" : "px-4 py-3",
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
const kv = ae(xl), Di = ir(null), yl = {
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
  }, p) => {
    var b;
    const [l, u] = pe(
      n || ((b = e[0]) == null ? void 0 : b.id) || ""
    ), m = t ?? l, g = yl[o], h = (E) => {
      t === void 0 && u(E), r == null || r(E);
    };
    return /* @__PURE__ */ f(Di.Provider, { value: { activeId: m }, children: /* @__PURE__ */ C("div", { ref: p, className: s, ...d, children: [
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
    const i = wt(Di);
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
}, Ol = /\{(\w+)\}/g;
function Sl(e, t) {
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
  const r = Sl(Dl, t);
  return {
    language: e,
    messagesByLanguage: r,
    t: (i, a) => {
      const s = r[e] ?? {}, c = r[n] ?? {}, d = s[i] ?? c[i] ?? i;
      return a ? d.replace(Ol, (p, l) => {
        const u = String(l), m = a[u];
        return m == null ? p : String(m);
      }) : d;
    }
  };
}
const Il = Xt({ language: "es" }), Oi = ir(Il);
function _v({
  children: e,
  language: t,
  messages: n,
  fallbackLanguage: r = "es"
}) {
  const o = Me(
    () => Xt({ language: t, messagesByLanguage: n, fallbackLanguage: r }),
    [t, n, r]
  );
  return /* @__PURE__ */ f(Oi.Provider, { value: o, children: e });
}
function Si() {
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
}, _l = {
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
}, Al = ae(
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
    ...m
  }, g) => {
    const h = Si(), { t: b } = a ? Xt({
      language: a,
      messagesByLanguage: h.messagesByLanguage
    }) : h, w = (() => {
      const j = [], T = r * 2 + 3 + 2;
      if (t <= T)
        return Array.from({ length: t }, (J, ee) => ee + 1);
      const B = Math.max(e - r, 1), V = Math.min(e + r, t), F = B > 2, Y = V < t - 1;
      if (!F && Y) {
        const J = 1 + 2 * r + 1;
        for (let ee = 1; ee <= J; ee++) j.push(ee);
        j.push("ellipsis"), j.push(t);
      } else if (F && !Y) {
        j.push(1), j.push("ellipsis");
        const J = t - (2 * r + 1);
        for (let ee = J; ee <= t; ee++) j.push(ee);
      } else {
        j.push(1), j.push("ellipsis");
        for (let J = B; J <= V; J++) j.push(J);
        j.push("ellipsis"), j.push(t);
      }
      return j;
    })(), N = Cl[p], y = S(
      "flex items-center justify-center rounded-full transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      _l[l],
      Yr[p],
      d && "opacity-50 cursor-not-allowed"
    ), x = ({ page: j, isActive: O }) => /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        onClick: () => !d && n(j),
        disabled: d,
        "aria-current": O ? "page" : void 0,
        className: S(
          y,
          "px-3",
          O ? kl[l] : "text-neutral-600 hover:bg-neutral-100"
        ),
        children: j
      }
    ), I = ({ direction: j, double: O }) => {
      const T = j === "prev", B = O ? T ? 1 : t : T ? e - 1 : e + 1, V = d || (T ? e === 1 : e === t), F = O ? T ? $s : Ls : T ? Ps : ar;
      return /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: () => !V && n(B),
          disabled: V,
          "aria-label": b(O ? T ? "pagination.firstPage" : "pagination.lastPage" : T ? "pagination.previousPage" : "pagination.nextPage"),
          className: S(
            y,
            V ? "text-neutral-300 cursor-not-allowed" : "text-neutral-600 hover:bg-neutral-100"
          ),
          children: /* @__PURE__ */ f(F, { size: N })
        }
      );
    }, A = s && c ? (e - 1) * c + 1 : void 0, L = s && c ? Math.min(e * c, s) : void 0;
    return /* @__PURE__ */ C(
      "nav",
      {
        ref: g,
        role: "navigation",
        "aria-label": b("pagination.ariaLabel"),
        className: S("flex items-center gap-2", u),
        ...m,
        children: [
          i && s !== void 0 && /* @__PURE__ */ f("span", { className: "text-sm text-neutral-500 mr-4", children: b("pagination.info", {
            start: A ?? "",
            end: L ?? "",
            total: s
          }) }),
          o && /* @__PURE__ */ f(I, { direction: "prev", double: !0 }),
          /* @__PURE__ */ f(I, { direction: "prev" }),
          /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: w.map(
            (j, O) => j === "ellipsis" ? /* @__PURE__ */ f(
              "span",
              {
                className: S("px-2 text-neutral-400", Yr[p]),
                children: "..."
              },
              `ellipsis-${O}`
            ) : /* @__PURE__ */ f(x, { page: j, isActive: j === e }, j)
          ) }),
          /* @__PURE__ */ f(I, { direction: "next" }),
          o && /* @__PURE__ */ f(I, { direction: "next", double: !0 })
        ]
      }
    );
  }
);
Al.displayName = "Pagination";
const Pl = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-4xl"
}, Ii = ae(
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
                p ? "items-center justify-center" : "items-start justify-center pt-16"
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
                  ...u,
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
Ii.displayName = "Modal";
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
  Ii,
  {
    ...s,
    onClose: i,
    size: "sm",
    footer: /* @__PURE__ */ C(Fe, { children: [
      /* @__PURE__ */ f(jt, { variant: "neutral", ghost: !0, onClick: i, disabled: a, children: n }),
      /* @__PURE__ */ f(jt, { variant: r, onClick: o, loading: a, children: t })
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
}, Ci = ae(
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
Ci.displayName = "Toast";
const Ml = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Ll = ({
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
    children: t.map((r) => /* @__PURE__ */ f(Ci, { toast: r, onClose: n }, r.id))
  }
), ki = ir(null), Av = ({ children: e, position: t = "top-right" }) => {
  const [n, r] = pe([]), o = Q((p) => {
    const l = Math.random().toString(36).slice(2, 9);
    return r((u) => [...u, { ...p, id: l }]), l;
  }, []), i = Q((p) => {
    r((l) => l.filter((u) => u.id !== p));
  }, []), a = Q(
    (p, l) => o({ variant: "success", message: p, title: l }),
    [o]
  ), s = Q(
    (p, l) => o({ variant: "error", message: p, title: l }),
    [o]
  ), c = Q(
    (p, l) => o({ variant: "warning", message: p, title: l }),
    [o]
  ), d = Q(
    (p, l) => o({ variant: "info", message: p, title: l }),
    [o]
  );
  return /* @__PURE__ */ C(ki.Provider, { value: { toasts: n, addToast: o, removeToast: i, success: a, error: s, warning: c, info: d }, children: [
    e,
    /* @__PURE__ */ f(Ll, { position: t, toasts: n, onClose: i })
  ] });
}, Pv = () => {
  const e = wt(ki);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, jl = ae(
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
    footer: p,
    variant: l = "gradient",
    className: u,
    ...m
  }, g) => {
    const h = Si(), { t: b } = e ? Xt({
      language: e,
      messagesByLanguage: h.messagesByLanguage
    }) : h, [E, w] = pe(""), [N, y] = pe(""), [x, I] = pe(!1), [A, L] = pe(!1), O = /* @__PURE__ */ C("form", { onSubmit: (T) => {
      T.preventDefault(), o == null || o(E, N);
    }, className: "space-y-6", children: [
      /* @__PURE__ */ C("div", { className: "text-center mb-8", children: [
        (t || n) && /* @__PURE__ */ C("div", { className: "flex justify-center mb-6", children: [
          /* @__PURE__ */ f("div", { className: "md:hidden", children: t }),
          /* @__PURE__ */ f("div", { className: "hidden md:block", children: n || t })
        ] }),
        /* @__PURE__ */ f("h1", { className: "text-2xl font-bold text-neutral-900", children: b("login.title") }),
        /* @__PURE__ */ f("p", { className: "mt-2 text-neutral-500", children: b("login.subtitle") })
      ] }),
      a && /* @__PURE__ */ f("div", { className: "p-3 rounded-lg bg-error/10 border border-error/20 text-error text-sm", children: a }),
      /* @__PURE__ */ C("div", { children: [
        /* @__PURE__ */ f("label", { htmlFor: "email", className: "block text-sm font-medium text-neutral-700 mb-1", children: b("login.emailLabel") }),
        /* @__PURE__ */ f(
          Bt,
          {
            id: "email",
            type: "email",
            value: E,
            onChange: (T) => w(T.target.value),
            placeholder: b("login.emailPlaceholder"),
            leftIcon: /* @__PURE__ */ f(sc, { className: "w-5 h-5" }),
            required: !0,
            disabled: i
          }
        )
      ] }),
      /* @__PURE__ */ C("div", { children: [
        /* @__PURE__ */ f("label", { htmlFor: "password", className: "block text-sm font-medium text-neutral-700 mb-1", children: b("login.passwordLabel") }),
        /* @__PURE__ */ f(
          Bt,
          {
            id: "password",
            type: x ? "text" : "password",
            value: N,
            onChange: (T) => y(T.target.value),
            placeholder: b("login.passwordPlaceholder"),
            leftIcon: /* @__PURE__ */ f(ic, { className: "w-5 h-5" }),
            rightIcon: /* @__PURE__ */ f(
              "button",
              {
                type: "button",
                onClick: () => I(!x),
                className: "text-neutral-400 hover:text-neutral-600",
                children: x ? /* @__PURE__ */ f(Gs, { className: "w-5 h-5" }) : /* @__PURE__ */ f(qs, { className: "w-5 h-5" })
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
              checked: A,
              onChange: (T) => L(T.target.checked),
              className: "w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary"
            }
          ),
          /* @__PURE__ */ f("span", { className: "text-sm text-neutral-600", children: b("login.rememberMe") })
        ] }),
        d && s && /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            onClick: s,
            className: "text-sm text-primary hover:text-primary-dark font-medium",
            children: b("login.forgotPassword")
          }
        )
      ] }),
      /* @__PURE__ */ f(jt, { type: "submit", variant: "accent", fullWidth: !0, loading: i, className: "py-3", children: b("login.submit") }),
      p && /* @__PURE__ */ f("div", { className: "text-center", children: p })
    ] });
    return l === "split" ? /* @__PURE__ */ C("div", { ref: g, className: S("min-h-screen flex", u), ...m, children: [
      /* @__PURE__ */ C("div", { className: "hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sidebar via-primary to-accent p-12 flex-col justify-between", children: [
        /* @__PURE__ */ f("div", { children: (r || n || t) && /* @__PURE__ */ f("div", { className: "mb-8", children: r || n || t }) }),
        /* @__PURE__ */ C("div", { className: "text-white", children: [
          /* @__PURE__ */ f("h2", { className: "text-4xl font-bold mb-4", children: b("login.split.heroTitle") }),
          /* @__PURE__ */ f("p", { className: "text-white/80 text-lg", children: b("login.split.heroDescription") })
        ] }),
        /* @__PURE__ */ f("div", { className: "text-white/50 text-sm", children: b("login.split.copyright", { year: (/* @__PURE__ */ new Date()).getFullYear() }) })
      ] }),
      /* @__PURE__ */ f("div", { className: "w-full lg:w-1/2 flex items-center justify-center p-8 bg-white", children: /* @__PURE__ */ f("div", { className: "w-full max-w-md", children: O }) })
    ] }) : l === "centered" ? /* @__PURE__ */ f(
      "div",
      {
        ref: g,
        className: S(
          "min-h-screen flex items-center justify-center p-4 bg-neutral-100",
          u
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
          u
        ),
        ...m,
        children: /* @__PURE__ */ f("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-2xl p-8", children: O })
      }
    );
  }
);
jl.displayName = "LoginPage";
function Oe(e) {
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
    throw new Error(process.env.NODE_ENV === "production" ? Oe(2) : `Expected the root reducer to be a function. Instead, received: '${Le(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(1) : `Expected the enhancer to be a function. Instead, received: '${Le(n)}'`);
    return n(_i)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function d() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((b, E) => {
      a.set(E, b);
    }));
  }
  function p() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function l(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(4) : `Expected the listener to be a function. Instead, received: '${Le(b)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let E = !0;
    d();
    const w = s++;
    return a.set(w, b), function() {
      if (E) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Oe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        E = !1, d(), a.delete(w), i = null;
      }
    };
  }
  function u(b) {
    if (!Vl(b))
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
  function m(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(10) : `Expected the nextReducer to be a function. Instead, received: '${Le(b)}`);
    r = b, u({
      type: Jr.REPLACE
    });
  }
  function g() {
    const b = l;
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
      [Kr]() {
        return this;
      }
    };
  }
  return u({
    type: Jr.INIT
  }), {
    dispatch: u,
    subscribe: l,
    getState: p,
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
    throw new Error(process.env.NODE_ENV === "production" ? Oe(16) : `bindActionCreators expected an object or a function, but instead received: '${Le(e)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = Qr(o, t));
  }
  return n;
}
function Ai(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function Ul(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Oe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...d) => i(c, ...d)
    }, s = e.map((c) => c(a));
    return i = Ai(...s)(o.dispatch), {
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
  return mn.useSyncExternalStoreWithSelector = function(c, d, p, l, u) {
    var m = o(null);
    if (m.current === null) {
      var g = { hasValue: !1, value: null };
      m.current = g;
    } else g = m.current;
    m = a(
      function() {
        function b(x) {
          if (!E) {
            if (E = !0, w = x, x = l(x), u !== void 0 && g.hasValue) {
              var I = g.value;
              if (u(I, x))
                return N = I;
            }
            return N = x;
          }
          if (I = N, n(w, x)) return I;
          var A = l(x);
          return u !== void 0 && u(I, A) ? (w = x, I) : (w = x, N = A);
        }
        var E = !1, w, N, y = p === void 0 ? null : p;
        return [
          function() {
            return b(d());
          },
          y === null ? void 0 : function() {
            return b(y());
          }
        ];
      },
      [d, p, l, u]
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
    gn.useSyncExternalStoreWithSelector = function(c, d, p, l, u) {
      var m = o(null);
      if (m.current === null) {
        var g = { hasValue: !1, value: null };
        m.current = g;
      } else g = m.current;
      m = a(
        function() {
          function b(x) {
            if (!E) {
              if (E = !0, w = x, x = l(x), u !== void 0 && g.hasValue) {
                var I = g.value;
                if (u(I, x))
                  return N = I;
              }
              return N = x;
            }
            if (I = N, n(w, x))
              return I;
            var A = l(x);
            return u !== void 0 && u(I, A) ? (w = x, I) : (w = x, N = A);
          }
          var E = !1, w, N, y = p === void 0 ? null : p;
          return [
            function() {
              return b(d());
            },
            y === null ? void 0 : function() {
              return b(y());
            }
          ];
        },
        [d, p, l, u]
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
var Pi = /* @__PURE__ */ ie.version.startsWith("19"), Xl = /* @__PURE__ */ Symbol.for(
  Pi ? "react.transitional.element" : "react.element"
), Jl = /* @__PURE__ */ Symbol.for("react.portal"), Ri = /* @__PURE__ */ Symbol.for("react.fragment"), Ti = /* @__PURE__ */ Symbol.for("react.strict_mode"), $i = /* @__PURE__ */ Symbol.for("react.profiler"), cr = /* @__PURE__ */ Symbol.for("react.consumer"), lr = /* @__PURE__ */ Symbol.for("react.context"), dr = /* @__PURE__ */ Symbol.for("react.forward_ref"), Mi = /* @__PURE__ */ Symbol.for("react.suspense"), Li = /* @__PURE__ */ Symbol.for(
  "react.suspense_list"
), Jt = /* @__PURE__ */ Symbol.for("react.memo"), ji = /* @__PURE__ */ Symbol.for("react.lazy"), Ql = /* @__PURE__ */ Symbol.for("react.offscreen"), Zl = /* @__PURE__ */ Symbol.for(
  "react.client.reference"
), ed = dr, td = Jt;
function nd(e) {
  return typeof e == "string" || typeof e == "function" || e === Ri || e === $i || e === Ti || e === Mi || e === Li || e === Ql || typeof e == "object" && e !== null && (e.$$typeof === ji || e.$$typeof === Jt || e.$$typeof === lr || e.$$typeof === cr || e.$$typeof === dr || e.$$typeof === Zl || e.getModuleId !== void 0);
}
function Gn(e) {
  if (typeof e == "object" && e !== null) {
    const { $$typeof: t } = e;
    switch (t) {
      case Xl:
        switch (e = e.type, e) {
          case Ri:
          case $i:
          case Ti:
          case Mi:
          case Li:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case lr:
              case dr:
              case ji:
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
  return Pi ? Gn(e) === cr : Gn(e) === lr;
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
  let s = !1, c, d, p, l, u;
  function m(w, N) {
    return c = w, d = N, p = e(c, d), l = t(r, d), u = n(p, l, d), s = !0, u;
  }
  function g() {
    return p = e(c, d), t.dependsOnOwnProps && (l = t(r, d)), u = n(p, l, d), u;
  }
  function h() {
    return e.dependsOnOwnProps && (p = e(c, d)), t.dependsOnOwnProps && (l = t(r, d)), u = n(p, l, d), u;
  }
  function b() {
    const w = e(c, d), N = !a(w, p);
    return p = w, N && (u = n(p, l, d)), u;
  }
  function E(w, N) {
    const y = !i(N, d), x = !o(
      w,
      c,
      N,
      d
    );
    return c = w, d = N, y && x ? g() : y ? h() : x ? b() : u;
  }
  return function(N, y) {
    return s ? E(N, y) : m(N, y);
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
function Bi(e, t, n) {
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
function Fi(e, t) {
  return function(r, { displayName: o }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = no(e);
      let d = i(s, c);
      return typeof d == "function" && (i.mapToProps = d, i.dependsOnOwnProps = no(d), d = i(s, c)), process.env.NODE_ENV !== "production" && Bi(d, o, t), d;
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
    Fi(e, "mapDispatchToProps")
  ) : ur(e, "mapDispatchToProps") : Wn((t) => ({
    dispatch: t
  }));
}
function pd(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Fi(e, "mapStateToProps")
  ) : ur(e, "mapStateToProps") : Wn(() => ({}));
}
function ud(e, t, n) {
  return { ...n, ...e, ...t };
}
function fd(e) {
  return function(n, { displayName: r, areMergedPropsEqual: o }) {
    let i = !1, a;
    return function(c, d, p) {
      const l = e(c, d, p);
      return i ? o(l, a) || (a = l) : (i = !0, a = l, process.env.NODE_ENV !== "production" && Bi(a, r, "mergeProps")), a;
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
function Vi(e, t) {
  let n, r = ro, o = 0, i = !1;
  function a(h) {
    p();
    const b = r.subscribe(h);
    let E = !1;
    return () => {
      E || (E = !0, b(), l());
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
  function p() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = vd());
  }
  function l() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = ro);
  }
  function u() {
    i || (i = !0, p());
  }
  function m() {
    i && (i = !1, l());
  }
  const g = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: d,
    trySubscribe: u,
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
}, zi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Od = {
  [ed]: Dd,
  [td]: zi
};
function io(e) {
  return od(e) ? zi : Od[e.$$typeof] || Ed;
}
var Sd = Object.defineProperty, Id = Object.getOwnPropertyNames, ao = Object.getOwnPropertySymbols, Cd = Object.getOwnPropertyDescriptor, kd = Object.getPrototypeOf, so = Object.prototype;
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
          Sd(e, a, s);
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
function _d() {
  if (!ie.createContext) return {};
  const e = xn[bn] ?? (xn[bn] = /* @__PURE__ */ new Map());
  let t = e.get(ie.createContext);
  return t || (t = ie.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(ie.createContext, t)), t;
}
var Gi = /* @__PURE__ */ _d(), Ad = [null, null], Pd = (e) => {
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
function $d(e, t, n, r, o, i, a, s, c, d, p) {
  if (!e) return () => {
  };
  let l = !1, u = null;
  const m = () => {
    if (l || !s.current)
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
    E || (u = null), b === i.current ? a.current || d() : (i.current = b, c.current = b, a.current = !0, p());
  };
  return n.onStateChange = m, n.trySubscribe(), m(), () => {
    if (l = !0, n.tryUnsubscribe(), n.onStateChange = null, u)
      throw u;
  };
}
function Md(e, t) {
  return e === t;
}
var co = !1;
function Ld(e, t, n, {
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
  context: d = Gi
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !co && (co = !0, pr(
    'The `pure` option has been removed. `connect` is now always a "pure/memoized" component'
  ));
  const p = d, l = pd(e), u = dd(t), m = md(n), g = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !/* @__PURE__ */ nd(b))
      throw new Error(
        `You must pass a component to the function returned by connect. Instead received ${Pd(
          b
        )}`
      );
    const E = b.displayName || b.name || "Component", w = `Connect(${E})`, N = {
      shouldHandleStateChanges: g,
      displayName: w,
      wrappedComponentName: E,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      initMapDispatchToProps: u,
      initMergeProps: m,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function y(A) {
      const [L, j, O] = ie.useMemo(() => {
        const { reactReduxForwardedRef: _, ...ue } = A;
        return [A.context, _, ue];
      }, [A]), T = ie.useMemo(() => {
        let _ = p;
        if (L != null && L.Consumer && process.env.NODE_ENV !== "production") {
          if (!/* @__PURE__ */ rd(
            // @ts-ignore
            /* @__PURE__ */ ie.createElement(L.Consumer, null)
          ))
            throw new Error(
              "You must pass a valid React context consumer as `props.context`"
            );
          _ = L;
        }
        return _;
      }, [L, p]), B = ie.useContext(T), V = !!A.store && !!A.store.getState && !!A.store.dispatch, F = !!B && !!B.store;
      if (process.env.NODE_ENV !== "production" && !V && !F)
        throw new Error(
          `Could not find "store" in the context of "${w}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${w} in connect options.`
        );
      const Y = V ? A.store : B.store, J = F ? B.getServerState : Y.getState, ee = ie.useMemo(() => sd(Y.dispatch, N), [Y]), [oe, ne] = ie.useMemo(() => {
        if (!g) return Ad;
        const _ = Vi(
          Y,
          V ? void 0 : B.subscription
        ), ue = _.notifyNestedSubs.bind(_);
        return [_, ue];
      }, [Y, V, B]), k = ie.useMemo(() => V ? B : {
        ...B,
        subscription: oe
      }, [V, B, oe]), P = ie.useRef(void 0), z = ie.useRef(O), q = ie.useRef(void 0), G = ie.useRef(!1), K = ie.useRef(!1), X = ie.useRef(
        void 0
      );
      Ft(() => (K.current = !0, () => {
        K.current = !1;
      }), []);
      const U = ie.useMemo(() => () => q.current && O === z.current ? q.current : ee(Y.getState(), O), [Y, O]), R = ie.useMemo(() => (ue) => oe ? $d(
        g,
        Y,
        oe,
        // @ts-ignore
        ee,
        z,
        P,
        G,
        K,
        q,
        ne,
        ue
      ) : () => {
      }, [oe]);
      Rd(Td, [
        z,
        P,
        G,
        O,
        q,
        ne
      ]);
      let D;
      try {
        D = ie.useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          R,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          U,
          J ? () => ee(J(), O) : U
        );
      } catch (_) {
        throw X.current && (_.message += `
The error may be correlated with this previous error:
${X.current.stack}

`), _;
      }
      Ft(() => {
        X.current = void 0, q.current = void 0, P.current = D;
      });
      const $ = ie.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ ie.createElement(
          b,
          {
            ...D,
            ref: j
          }
        )
      ), [j, b, D]);
      return ie.useMemo(() => g ? /* @__PURE__ */ ie.createElement(T.Provider, { value: k }, $) : $, [T, $, k]);
    }
    const I = ie.memo(y);
    if (I.WrappedComponent = b, I.displayName = y.displayName = w, c) {
      const L = ie.forwardRef(
        function(O, T) {
          return /* @__PURE__ */ ie.createElement(I, { ...O, reactReduxForwardedRef: T });
        }
      );
      return L.displayName = w, L.WrappedComponent = b, /* @__PURE__ */ qn(L, b);
    }
    return /* @__PURE__ */ qn(I, b);
  };
}
var Wi = Ld;
function jd(e) {
  const { children: t, context: n, serverState: r, store: o } = e, i = ie.useMemo(() => {
    const c = Vi(o), d = {
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
  }, [o, r]), a = ie.useMemo(() => o.getState(), [o]);
  Ft(() => {
    const { subscription: c } = i;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [i, a]);
  const s = n || Gi;
  return /* @__PURE__ */ ie.createElement(s.Provider, { value: i }, t);
}
var Bd = jd, Fd = process.env.NODE_ENV === "production", yn = "Invariant failed";
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
  var n = t.borderBox, r = t.margin, o = r === void 0 ? wn : r, i = t.border, a = i === void 0 ? wn : i, s = t.padding, c = s === void 0 ? wn : s, d = Pe(fr(n, o)), p = Pe(po(n, a)), l = Pe(po(p, c));
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
}, qi = function(t, n) {
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
}, Ui = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return qi(n, r);
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
function Hi(e, t) {
  Gd || typeof window < "u" && window[Yd] || console[e](...Hd(t));
}
const me = Hi.bind(null, "warn"), Un = Hi.bind(null, "error");
function je() {
}
function Kd(e, t) {
  return {
    ...e,
    ...t
  };
}
function _e(e, t, n) {
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
    super(...t), this.callbacks = null, this.unbind = je, this.onWindowError = (n) => {
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
    this.unbind = _e(window, [{
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
`, Yi = (e, t) => {
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
}, Ki = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, ep = (e) => {
  const t = e.destination;
  if (t)
    return Yi(e.source, t);
  const n = e.combine;
  return n ? Ki(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
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
      ${Yi(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${Ki(e.draggableId, e.source, n)}
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
function Xi(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (!np(e[n], t[n]))
      return !1;
  return !0;
}
function re(e, t) {
  const n = pe(() => ({
    inputs: t,
    result: e()
  }))[0], r = Z(!0), o = Z(n), a = r.current || !!(t && o.current.inputs && Xi(t, o.current.inputs)) ? o.current : {
    inputs: t,
    result: e()
  };
  return he(() => {
    r.current = !1, o.current = a;
  }, [a]), a.result;
}
function W(e, t) {
  return re(() => e, t);
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
}, ft = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), go = (e, t) => Math.min(...t.map((n) => ft(e, n))), Ji = (e) => (t) => ({
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
function ye(e, t = Xi) {
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
const Qi = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Zi = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Qt = ye((e) => Object.values(e)), cp = ye((e) => Object.values(e));
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
  const p = d.findIndex((m) => m.descriptor.id === c);
  p === -1 && (process.env.NODE_ENV !== "production" ? v(!1, "Could not find displaced item in set") : v());
  const l = p - 1;
  if (l < 0)
    return null;
  const u = d[l];
  return a(u.descriptor.id);
}, rt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const ea = {
  point: we,
  value: 0
}, mt = {
  invisible: {},
  visible: {},
  all: []
}, dp = {
  displaced: mt,
  displacedBy: ea,
  at: null
};
var Ae = (e, t) => (n) => e <= n && n <= t, ta = (e) => {
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
}, pp = (e) => {
  const t = Ae(e.top, e.bottom), n = Ae(e.left, e.right);
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
}, na = {
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
  const n = Ae(t.top, t.bottom), r = Ae(t.left, t.right);
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
  isVisibleThroughFrameFn: ta
}), ra = (e) => br({
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
    const d = xp(c, n), p = c.descriptor.id;
    if (s.all.push(p), !vp({
      target: d,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const u = bp(p, i, o), m = {
      draggableId: p,
      shouldAnimate: u
    };
    return s.visible[p] = m, s;
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
  const p = en(e, t), l = t.indexOf(d), u = p.slice(l);
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
  const p = wp({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: r,
    combine: d.combine,
    afterCritical: c
  });
  return p == null ? null : qt({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: p
  });
}, Dp = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Ve(n, t) ? o ? we : nt(r.point) : o ? r.point : we;
}, Op = ({
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
const oa = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, Sp = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, xr = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, bo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.end] + oa(e, n), xr(e, t.marginBox, n)), xo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.start] - Sp(e, n), xr(e, t.marginBox, n)), Ip = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => Ue(e.line, t.contentBox[e.start] + oa(e, n), xr(e, t.contentBox, n));
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
  } = e, p = c.all[0];
  if (p) {
    const u = n[p];
    if (Ve(p, o))
      return xo({
        axis: s,
        moveRelativeTo: u.page,
        isMoving: a
      });
    const m = Vt(u.page, d.point);
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
    const u = Vt(l.page, nt(o.displacedBy.point));
    return bo({
      axis: s,
      moveRelativeTo: u,
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
  }) : Op({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var tn = (e) => {
  const t = kp(e), n = e.droppable;
  return n ? Hn(n, t) : t;
}, ia = (e, t) => {
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
function yo(e, t) {
  return e.map((n) => t[n]);
}
function _p(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var Ap = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = ia(t, Ne(t.scroll.current, o)), a = n.frame ? gr(n, Ne(n.frame.scroll.current, o)) : n, s = e.displaced, c = gt({
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
  }), p = {}, l = {}, u = [s, c, d];
  return s.all.forEach((g) => {
    const h = _p(g, u);
    if (h) {
      l[g] = h;
      return;
    }
    p[g] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: p,
      visible: l
    }
  };
}, Pp = (e, t) => Ne(e.scroll.diff.displacement, t), yr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = Pp(n, e), o = Se(r, t.page.borderBox.center);
  return Ne(t.client.borderBox.center, o);
}, aa = ({
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
  return i ? hp(c) : ra(c);
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
  const d = He(n.descriptor.id, r), p = rt(t, n), l = lp({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: d,
    previousImpact: o
  }) || Np({
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
  const u = tn({
    impact: l,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (aa({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: u,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: yr({
        pageBorderBoxCenter: u,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const g = Se(u, a), h = Ap({
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
  const a = n.axis, s = Ae(i[a.start], i[a.end]), c = Qt(r).filter((p) => p !== n).filter((p) => p.isEnabled).filter((p) => !!p.subject.active).filter((p) => ta(o.frame)(De(p))).filter((p) => {
    const l = De(p);
    return e ? i[a.crossAxisEnd] < l[a.crossAxisEnd] : l[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((p) => {
    const l = De(p), u = Ae(l[a.start], l[a.end]);
    return s(l[a.start]) || s(l[a.end]) || u(i[a.start]) || u(i[a.end]);
  }).sort((p, l) => {
    const u = De(p)[a.crossAxisStart], m = De(l)[a.crossAxisStart];
    return e ? u - m : m - u;
  }).filter((p, l, u) => De(p)[a.crossAxisStart] === De(u[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const d = c.filter((p) => Ae(De(p)[a.start], De(p)[a.end])(t[a.line]));
  return d.length === 1 ? d[0] : d.length > 1 ? d.sort((p, l) => De(p)[a.start] - De(l)[a.start])[0] : c.sort((p, l) => {
    const u = go(t, vo(De(p))), m = go(t, vo(De(l)));
    return u !== m ? u - m : De(p)[a.start] - De(l)[a.start];
  })[0];
};
const wo = (e, t) => {
  const n = e.page.borderBox.center;
  return Ve(e.descriptor.id, t) ? Se(n, t.displacedBy.point) : n;
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
}) => r.filter((a) => ra({
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
const Lp = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return Ue(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = He(e.descriptor.id, n).reduce((d, p) => d + p.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : Ue(r.line, c);
}, sa = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), ca = (e, t, n) => {
  const r = e.frame;
  rt(t, e) && (process.env.NODE_ENV !== "production" ? v(!1, "Should not add placeholder space to home list") : v()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot add placeholder size to a subject when it already has one") : v());
  const o = Nt(e.axis, t.displaceBy).point, i = Lp(e, o, n), a = {
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
  const s = i ? Ne(r.scroll.max, i) : r.scroll.max, c = sa(r, s), d = Je({
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
}, jp = (e) => {
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
  const o = sa(n, r), i = Je({
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
      displacedBy: ea,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, u = tn({
      impact: l,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), m = rt(r, i) ? i : ca(i, r, o);
    return aa({
      draggable: r,
      destination: m,
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
  return qt({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: a,
    displacedBy: p,
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
  const d = He(c.descriptor.id, o), p = Mp({
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
    moveRelativeTo: p,
    insideDestination: d,
    viewport: a,
    afterCritical: s
  });
  if (!l)
    return null;
  const u = tn({
    impact: l,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: yr({
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
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", d = e.dimensions.draggables[e.critical.draggable.id], p = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: u
  } = e.dimensions;
  return s ? Rp({
    isMovingForward: c,
    previousPageBorderBoxCenter: p,
    draggable: d,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Fp({
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
function la(e) {
  const t = Ae(e.top, e.bottom), n = Ae(e.left, e.right);
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
    if (la(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], d = e[a.crossAxisEnd], p = Ae(i[a.crossAxisStart], i[a.crossAxisEnd]), l = p(c), u = p(d);
    return !l && !u ? !0 : l ? c < s : d > s;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : Wp({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const da = (e, t) => Pe(Et(e, t));
var Up = (e, t) => {
  const n = e.frame;
  return n ? da(t, n.scroll.diff.value) : t;
};
function pa({
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
  const s = n.axis, c = Nt(n.axis, t.displaceBy), d = c.value, p = e[s.start], l = e[s.end], m = en(t, r).find((h) => {
    const b = h.descriptor.id, E = h.page.borderBox.center[s.line], w = Ve(b, a), N = pa({
      displaced: o,
      id: b
    });
    return w ? N ? l <= E : p < E - d : N ? l <= E + d : p < E;
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
  const a = r.axis, s = Nt(r.axis, e.displaceBy), c = s.value, d = t[a.start], p = t[a.end], u = en(e, o).find((g) => {
    const h = g.descriptor.id, b = g.page.borderBox, w = b[a.size] / Kp, N = Ve(h, i), y = pa({
      displaced: n.displaced,
      id: h
    });
    return N ? y ? p > b[a.start] + w && p < b[a.end] - w : d > b[a.start] - c + w && d < b[a.end] - c - w : y ? p > b[a.start] + c + w && p < b[a.end] + c - w : d > b[a.start] + w && d < b[a.end] - w;
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
}, ua = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = da(t.page.borderBox, e), c = qp({
    pageBorderBox: s,
    draggable: t,
    droppables: r
  });
  if (!c)
    return dp;
  const d = r[c], p = He(d.descriptor.id, n), l = Up(d, s);
  return Xp({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: d,
    insideDestination: p,
    afterCritical: a
  }) || Yp({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: d,
    insideDestination: p,
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
  const a = jp(i);
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
  const c = ca(s, e, t);
  return wr(i, c);
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
  const m = s.draggables[e.critical.draggable.id], g = o || ua({
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
    current: u,
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
var fa = ({
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
}, ma = ({
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
}, ga = ({
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
  const p = s[d], l = fa({
    impact: r,
    viewport: o,
    destination: p,
    draggables: a
  }), u = ma({
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
}, eu = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), va = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = Nt(t.axis, e.displaceBy), i = He(t.descriptor.id, n), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? v(!1, "Expected draggable to be inside home list") : v());
  const s = i.slice(a + 1), c = s.reduce((u, m) => (u[m.descriptor.id] = !0, u), {}), d = {
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
}, Ot = (e) => {
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
    const w = e.dimensions.droppables[E.droppableId];
    return gr(w, E.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Qi(n)
  }, o = Zi(ou({
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
  } = va({
    draggable: d,
    home: p,
    draggables: i,
    viewport: e.viewport
  }), m = c && c.isCombineEnabled ? e.impact : l, g = ua({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: m,
    viewport: e.viewport,
    afterCritical: u
  });
  Ot();
  const h = {
    ...e,
    phase: "DRAGGING",
    impact: g,
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
const Yn = (e) => e.movementMode === "SNAP", En = (e, t, n) => {
  const r = tu(e.dimensions, t);
  return !Yn(e) || n ? lt({
    state: e,
    dimensions: r
  }) : ga({
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
    }, p = {
      client: d,
      page: {
        selection: Ne(d.selection, o.scroll.initial),
        borderBoxCenter: Ne(d.selection, o.scroll.initial),
        offset: Ne(d.selection, o.scroll.diff.value)
      }
    }, l = Qt(i.droppables).every((h) => !h.isFixedOnPage), {
      impact: u,
      afterCritical: m
    } = va({
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
      afterCritical: m,
      onLiftImpact: u,
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
    return Be(n, e.current.client.selection) ? e : lt({
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
    if (Be(e.viewport.scroll.current, n))
      return Nn(e);
    const r = ia(e.viewport, n);
    return Yn(e) ? ga({
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
}), ha = (e) => ({
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
}), ba = (e) => ({
  type: "DROP",
  payload: e
}), Eu = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), xa = () => ({
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
var Ou = (e) => ({
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
  const p = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: s === "SNAP"
    }
  }, {
    critical: l,
    dimensions: u,
    viewport: m
  } = e.startPublishing(p);
  Du(l, u), n(lu({
    critical: l,
    dimensions: u,
    clientSelection: a,
    movementMode: s,
    viewport: m
  }));
}, Su = (e) => () => (t) => (n) => {
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
}, ya = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ge = `${ya.outOfTheWay}s ${Dr.outOfTheWay}`, dt = {
  fluid: `opacity ${Ge}`,
  snap: `transform ${Ge}, opacity ${Ge}`,
  drop: (e) => {
    const t = `${e}s ${Dr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ge}`,
  placeholder: `height ${Ge}, width ${Ge}, margin ${Ge}`
}, No = (e) => Be(e, we) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Kn = {
  moveTo: No,
  drop: (e, t) => {
    const n = No(e);
    if (n)
      return t ? `${n} scale(${vt.scale.drop})` : n;
  }
}, {
  minDropTime: Xn,
  maxDropTime: wa
} = ya, Iu = wa - Xn, Do = 1500, Cu = 0.6;
var ku = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = ft(e, t);
  if (r <= 0)
    return Xn;
  if (r >= Do)
    return wa;
  const o = r / Do, i = Xn + Iu * o, a = n === "CANCEL" ? i * Cu : i;
  return Number(a.toFixed(2));
}, _u = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = n, s = Ie(e), c = s ? a[s] : null, d = a[t.descriptor.droppableId], p = ma({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || d,
    viewport: r
  });
  return Se(p, t.client.borderBox.center);
}, Au = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: fa({
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
    impact: p,
    didDropInsideDroppable: l
  } = Au({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), u = l ? vr(p) : null, m = l ? Zt(p) : null, g = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, h = {
    draggableId: d.descriptor.id,
    type: d.descriptor.type,
    source: g,
    reason: i,
    mode: o.movementMode,
    destination: u,
    combine: m
  }, b = _u({
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
  if (!(!Be(o.current.client.offset, b) || !!h.combine)) {
    t(Nr({
      completed: E
    }));
    return;
  }
  const N = ku({
    current: o.current.client.offset,
    destination: b,
    reason: i
  });
  t(wu({
    newHomeClientOffset: b,
    dropDuration: N,
    completed: E
  }));
};
var Ea = () => ({
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
    e(Ea());
  }
  const n = pt(t), r = Ru(n);
  let o = je;
  function i() {
    return o !== je;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start scroll listener when already active") : v()), o = _e(window, [r]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop scroll listener when not active") : v()), n.cancel(), o(), o = je;
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
var Lu = (e) => {
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
}, ju = () => {
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
  Dt(), t(), Ot();
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
  const o = Lu(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var zu = (e, t) => {
  const n = ju();
  let r = null;
  const o = (l, u) => {
    r && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : v()), it("onBeforeCapture", () => {
      const m = e().onBeforeCapture;
      m && m({
        draggableId: l,
        mode: u
      });
    });
  }, i = (l, u) => {
    r && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : v()), it("onBeforeDragStart", () => {
      const m = e().onBeforeDragStart;
      m && m(Pt(l, u));
    });
  }, a = (l, u) => {
    r && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : v());
    const m = Pt(l, u);
    r = {
      mode: u,
      lastCritical: l,
      lastLocation: m.source,
      lastCombine: null
    }, n.add(() => {
      it("onDragStart", () => Dn(e().onDragStart, m, t, Mt.onDragStart));
    });
  }, s = (l, u) => {
    const m = vr(u), g = Zt(u);
    r || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onDragMove when onDragStart has not been called") : v());
    const h = !Vu(l, r.lastCritical);
    h && (r.lastCritical = l);
    const b = !Bu(r.lastLocation, m);
    b && (r.lastLocation = m);
    const E = !Fu(r.lastCombine, g);
    if (E && (r.lastCombine = g), !h && !b && !E)
      return;
    const w = {
      ...Pt(l, r.mode),
      combine: g,
      destination: m
    };
    n.add(() => {
      it("onDragUpdate", () => Dn(e().onDragUpdate, w, t, Mt.onDragUpdate));
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(xa());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = _e(window, [a]);
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
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(ba({
    reason: r.reason
  })));
}, Ju = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Ai;
var Qu = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => _i(au, Ju(Ul(Su(n), Uu(e), Ou(e), Pu, Wu, qu, Xu, Ku(i), Mu, Hu(t), Gu(r, o))));
const On = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Zu({
  registry: e,
  callbacks: t
}) {
  let n = On(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, Dt();
      const {
        additions: c,
        removals: d,
        modified: p
      } = n, l = Object.keys(c).map((g) => e.draggable.getById(g).getDimension(we)).sort((g, h) => g.descriptor.index - h.descriptor.index), u = Object.keys(p).map((g) => {
        const b = e.droppable.getById(g).callbacks.getScrollWhileDragging();
        return {
          droppableId: g,
          scroll: b
        };
      }), m = {
        additions: l,
        removals: Object.keys(d),
        modified: u
      };
      n = On(), Ot(), t.publish(m);
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
      r && (cancelAnimationFrame(r), r = null, n = On());
    }
  };
}
var Na = ({
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
}, Da = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find document.documentElement") : v()), e;
}, Oa = () => {
  const e = Da();
  return Na({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, ef = () => {
  const e = Ea(), t = Oa(), n = e.y, r = e.x, o = Da(), i = o.clientWidth, a = o.clientHeight, s = r + i, c = n + a;
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
  const r = ef(), o = r.scroll.current, i = e.droppable, a = n.droppable.getAllByType(i.type).map((p) => p.callbacks.getDimensionAndWatchScroll(o, t)), s = n.draggable.getAllByType(e.draggable.type).map((p) => p.getDimension(o)), c = {
    draggables: Zi(s),
    droppables: Qi(a)
  };
  return Ot(), {
    dimensions: c,
    critical: e,
    viewport: r
  };
};
function Oo(e, t, n) {
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
  }), o = (u, m) => {
    e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot update is enabled flag of Droppable ${u} as it is not registered`) : v()), n && t.updateDroppableIsEnabled({
      id: u,
      isEnabled: m
    });
  }, i = (u, m) => {
    n && (e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot update isCombineEnabled flag of Droppable ${u} as it is not registered`) : v()), t.updateDroppableIsCombineEnabled({
      id: u,
      isCombineEnabled: m
    }));
  }, a = (u, m) => {
    n && (e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot update the scroll on Droppable ${u} as it is not registered`) : v()), t.updateDroppableScroll({
      id: u,
      newScroll: m
    }));
  }, s = (u, m) => {
    n && e.droppable.getById(u).callbacks.scroll(m);
  }, c = () => {
    if (!n)
      return;
    r.stop();
    const u = n.critical.droppable;
    e.droppable.getAllByType(u.type).forEach((m) => m.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, d = (u) => {
    n || (process.env.NODE_ENV !== "production" ? v(!1, "Should only be subscribed when a collection is occurring") : v());
    const m = n.critical.draggable;
    u.type === "ADDITION" && Oo(e, m, u.value) && r.add(u.value), u.type === "REMOVAL" && Oo(e, m, u.value) && r.remove(u.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (u) => {
      n && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start capturing critical dimensions as there is already a collection") : v());
      const m = e.draggable.getById(u.draggableId), g = e.droppable.getById(m.descriptor.droppableId), h = {
        draggable: m.descriptor,
        droppable: g.descriptor
      }, b = e.subscribe(d);
      return n = {
        critical: h,
        unsubscribe: b
      }, tf({
        critical: h,
        registry: e,
        scrollOptions: u.scrollOptions
      });
    },
    stopPublishing: c
  };
}, Sa = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", rf = (e) => {
  window.scrollBy(e.x, e.y);
};
const of = ye((e) => Qt(e).filter((t) => !(!t.isEnabled || !t.frame))), af = (e, t) => of(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? v(!1, "Invalid result") : v()), la(r.frame.pageMarginBox)(e))) || null;
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
}, Ia = ({
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
}, Or = 1, lf = (e, t, n = () => ht) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Or;
  const i = 1 - Ia({
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
    return Or;
  const p = Ia({
    startOfRange: o,
    endOfRange: s,
    current: d
  }), l = e * r.ease(p);
  return Math.ceil(l);
}, So = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = lf(e, t, o);
  return i === 0 ? 0 : r ? Math.max(df(i, n, o), Or) : i;
}, Io = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = cf(e, r, i);
  return t[r.end] < t[r.start] ? So({
    distanceToEdge: t[r.end],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * So({
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
const uf = Ji((e) => e === 0 ? 0 : e);
var Ca = ({
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
    axis: na,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), d = uf({
    x: c,
    y: s
  });
  if (Be(d, we))
    return null;
  const p = pf({
    container: t,
    subject: n,
    proposedScroll: d
  });
  return p ? Be(p, we) ? null : p : null;
};
const ff = Ji((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Sr = /* @__PURE__ */ (() => {
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
})(), ka = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = ff(n), i = Sr({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Ir = (e, t) => ka({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), mf = (e, t) => {
  if (!Ir(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return Sr({
    current: r,
    max: n,
    change: t
  });
}, Cr = (e, t) => {
  const n = e.frame;
  return n ? ka({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, gf = (e, t) => {
  const n = e.frame;
  return !n || !Cr(e, t) ? null : Sr({
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
  const a = Ca({
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
  const s = Ca({
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
    const l = e.viewport, u = vf({
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
  const d = sf({
    center: a,
    destination: Ie(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!d)
    return;
  const p = hf({
    dragStartTime: t,
    droppable: d,
    subject: c,
    center: a,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  p && o(d.descriptor.id, p);
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
      shouldUseTimeDampening: p,
      dragStartTime: l
    } = i;
    Co({
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
      Dt(), i && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start auto scrolling when already started") : v());
      const p = Date.now();
      let l = !1;
      const u = () => {
        l = !0;
      };
      Co({
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
    const p = Se(c, d);
    return t(s.descriptor.id, p), Se(c, p);
  }, i = (s, c, d) => {
    if (!s || !Ir(c, d))
      return d;
    const p = mf(c, d);
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
    d || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot perform a jump scroll when there is no destination") : v());
    const p = o(s.dimensions.droppables[d], c);
    if (!p)
      return;
    const l = s.viewport, u = i(s.isWindowScrollAllowed, l, p);
    u && r(s, u);
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
const Ce = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? ps : he, Sn = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find the head to append a style to") : v()), e;
}, _o = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Of(e, t) {
  const n = re(() => Df(e), [e]), r = Z(null), o = Z(null), i = W(ye((l) => {
    const u = o.current;
    u || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot set dynamic style element if it is not set") : v()), u.textContent = l;
  }), []), a = W((l) => {
    const u = r.current;
    u || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot set dynamic style element if it is not set") : v()), u.textContent = l;
  }, []);
  Ce(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? v(!1, "style elements already mounted") : v());
    const l = _o(t), u = _o(t);
    return r.current = l, o.current = u, l.setAttribute(`${Qe}-always`, e), u.setAttribute(`${Qe}-dynamic`, e), Sn().appendChild(l), Sn().appendChild(u), a(n.always), i(n.resting), () => {
      const m = (g) => {
        const h = g.current;
        h || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot unmount ref as it is not set") : v()), Sn().removeChild(h), g.current = null;
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
  return re(() => ({
    dragging: s,
    dropping: c,
    resting: d
  }), [s, c, d]);
}
function _a(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Aa = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function St(e) {
  return e instanceof Aa(e).HTMLElement;
}
function Pa(e, t) {
  const n = `[${Ze.contextId}="${e}"]`, r = _a(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && me(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(Ze.draggableId) === t);
  return o ? St(o) ? o : (process.env.NODE_ENV !== "production" && me("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && me(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Sf(e) {
  const t = Z({}), n = Z(null), r = Z(null), o = Z(!1), i = W(function(u, m) {
    const g = {
      id: u,
      focus: m
    };
    return t.current[u] = g, function() {
      const b = t.current;
      b[u] !== g && delete b[u];
    };
  }, []), a = W(function(u) {
    const m = Pa(e, u);
    m && m !== document.activeElement && m.focus();
  }, [e]), s = W(function(u, m) {
    n.current === u && (n.current = m);
  }, []), c = W(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const u = n.current;
      u && a(u);
    }));
  }, [a]), d = W(function(u) {
    n.current = null;
    const m = document.activeElement;
    m && m.getAttribute(Ze.draggableId) === u && (n.current = u);
  }, []);
  return Ce(() => (o.current = !0, function() {
    o.current = !1;
    const u = r.current;
    u && cancelAnimationFrame(u);
  }), []), re(() => ({
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
    t.length && t.forEach((u) => u(l));
  }
  function o(l) {
    return e.draggables[l] || null;
  }
  function i(l) {
    const u = o(l);
    return u || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot find draggable entry with id [${l}]`) : v()), u;
  }
  const a = {
    register: (l) => {
      e.draggables[l.descriptor.id] = l, r({
        type: "ADDITION",
        value: l
      });
    },
    update: (l, u) => {
      const m = e.draggables[u.descriptor.id];
      m && m.uniqueId === l.uniqueId && (delete e.draggables[u.descriptor.id], e.draggables[l.descriptor.id] = l);
    },
    unregister: (l) => {
      const u = l.descriptor.id, m = o(u);
      m && l.uniqueId === m.uniqueId && (delete e.draggables[u], e.droppables[l.descriptor.droppableId] && r({
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
    return u || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot find droppable entry with id [${l}]`) : v()), u;
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
function Cf() {
  const e = re(If, []);
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
}, _f = (e) => `rfd-announcement-${e}`;
function Af(e) {
  const t = re(() => _f(e), [e]), n = Z(null);
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
function _r(e, t = Pf) {
  const n = ve.useId();
  return re(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
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
  const n = _r("hidden-text", {
    separator: "-"
  }), r = re(() => Rf({
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
const Mf = /(\d+)\.(\d+)\.(\d+)/, Ao = (e) => {
  const t = Mf.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? v(!1, `Unable to parse React version ${e}`) : v());
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, Lf = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var jf = (e, t) => {
  const n = Ao(e), r = Ao(t);
  Lf(n, r) || process.env.NODE_ENV !== "production" && me(`
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
function Ar(e) {
  process.env.NODE_ENV !== "production" && e();
}
function It(e, t) {
  Ar(() => {
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
    jf($f.react, ve.version), Bf(document);
  }, []);
}
function Pr(e) {
  const t = Z(e);
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
const zf = 9, Gf = 13, Rr = 27, Ra = 32, Wf = 33, qf = 34, Uf = 35, Hf = 36, Yf = 37, Kf = 38, Xf = 39, Jf = 40, Qf = {
  [Gf]: !0,
  [zf]: !0
};
var Ta = (e) => {
  Qf[e.keyCode] && e.preventDefault();
};
const rn = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})(), $a = 0, Po = 5;
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
      if (i !== $a)
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
      const p = d.point;
      if (!Zf(p, c))
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
      Ta(o);
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
  const t = Z(Ro), n = Z(je), r = re(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== $a || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
        return;
      const u = e.findClosestDraggableId(l);
      if (!u)
        return;
      const m = e.tryGetLock(u, a, {
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
  }), [e]), o = re(() => ({
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
  }), [e]), i = W(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    n.current = _e(window, [o, r], l);
  }, [o, r]), a = W(() => {
    t.current.type !== "IDLE" && (t.current = Ro, n.current(), i());
  }, [i]), s = W(() => {
    const p = t.current;
    a(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [a]), c = W(function() {
    const l = {
      capture: !0,
      passive: !1
    }, u = em({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (m) => {
        t.current = m;
      }
    });
    n.current = _e(window, u, l);
  }, [s, a]), d = W(function(l, u) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Expected to move from IDLE to PENDING drag") : v()), t.current = {
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
      if (o.keyCode === Ra) {
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
      Ta(o);
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
  const t = Z(nm), n = re(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Ra)
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
        c || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop capturing a keyboard drag when not capturing") : v()), c = !1, t.current(), r();
      }
      t.current = _e(window, om(d, p), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = W(function() {
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
  const t = Z(Cn), n = Z(je), r = W(function() {
    return t.current;
  }, []), o = W(function(m) {
    t.current = m;
  }, []), i = re(() => ({
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
      const b = m.touches[0], {
        clientX: E,
        clientY: w
      } = b, N = {
        x: E,
        y: w
      };
      n.current(), l(h, N);
    }
  }), [e]), a = W(function() {
    const m = {
      capture: !0,
      passive: !1
    };
    n.current = _e(window, [i], m);
  }, [i]), s = W(() => {
    const u = t.current;
    u.type !== "IDLE" && (u.type === "PENDING" && clearTimeout(u.longPressTimerId), o(Cn), n.current(), a());
  }, [a, o]), c = W(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), d = W(function() {
    const m = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: c,
      completed: s,
      getPhase: r
    }, h = _e(window, lm(g), m), b = _e(window, cm(g), m);
    n.current = function() {
      h(), b();
    };
  }, [c, r, s]), p = W(function() {
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
    const h = setTimeout(p, am);
    o({
      type: "PENDING",
      point: g,
      actions: m,
      longPressTimerId: h
    }), d();
  }, [d, r, o, p]);
  Ce(function() {
    return a(), function() {
      n.current();
      const g = r();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), o(Cn));
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
function pm(e) {
  Ar(() => {
    const t = Pr(e);
    It(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot change the amount of sensor hooks after mounting") : v(!1));
    });
  });
}
const um = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Ma(e, t) {
  if (t == null)
    return !1;
  if (um.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Ma(e, t.parentElement);
}
function fm(e, t) {
  const n = t.target;
  return St(n) ? Ma(e, n) : !1;
}
var mm = (e) => Pe(e.getBoundingClientRect()).center;
function gm(e) {
  return e instanceof Aa(e).Element;
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
  return o ? St(o) ? o : (process.env.NODE_ENV !== "production" && me("drag handle must be a HTMLElement"), null) : null;
}
function ym(e, t) {
  const n = xm(e, t);
  return n ? n.getAttribute(Ze.draggableId) : null;
}
function wm(e, t) {
  const n = `[${Jn.contextId}="${e}"]`, o = _a(document, n).find((i) => i.getAttribute(Jn.id) === t);
  return o ? St(o) ? o : (process.env.NODE_ENV !== "production" && me("Draggable element is not a HTMLElement"), null) : null;
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
function ja({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !Sa(t.getState(), r)) : (process.env.NODE_ENV !== "production" && me(`Unable to find draggable with id: ${r}`), !1);
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
  if (!ja({
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
  const p = e.claim(i || je);
  let l = "PRE_DRAG";
  function u() {
    return c.options.shouldRespectForcePress;
  }
  function m() {
    return e.isActive(p);
  }
  function g(x, I) {
    Rt({
      expected: x,
      phase: l,
      isLockActive: m,
      shouldWarn: !0
    }) && n.dispatch(I());
  }
  const h = g.bind(null, "DRAGGING");
  function b(x) {
    function I() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (I(), process.env.NODE_ENV !== "production" ? v(!1, `Cannot lift in phase ${l}`) : v()), n.dispatch(cu(x.liftActionArgs)), l = "DRAGGING";
    function A(L, j = {
      shouldBlockNextClick: !1
    }) {
      if (x.cleanup(), j.shouldBlockNextClick) {
        const O = _e(window, [{
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
      I(), n.dispatch(ba({
        reason: L
      }));
    }
    return {
      isActive: () => Rt({
        expected: "DRAGGING",
        phase: l,
        isLockActive: m,
        shouldWarn: !1
      }),
      shouldRespectForcePress: u,
      drop: (L) => A("DROP", L),
      cancel: (L) => A("CANCEL", L),
      ...x.actions
    };
  }
  function E(x) {
    const I = pt((L) => {
      h(() => ha({
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
      moveUp: () => h(hu),
      moveRight: () => h(xu),
      moveDown: () => h(bu),
      moveLeft: () => h(yu)
    };
    return b({
      liftActionArgs: {
        id: o,
        clientSelection: mm(d),
        movementMode: "SNAP"
      },
      cleanup: je,
      actions: x
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
    shouldRespectForcePress: u,
    fluidLift: E,
    snapLift: w,
    abort: N
  };
}
const Dm = [tm, im, dm];
function Om({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? Dm : [], ...r || []], a = pe(() => Vf())[0], s = W(function(b, E) {
    xt(b) && !xt(E) && a.tryAbandon();
  }, [a]);
  Ce(function() {
    let b = t.getState();
    return t.subscribe(() => {
      const w = t.getState();
      s(b, w), b = w;
    });
  }, [a, t, s]), Ce(() => a.tryAbandon, [a.tryAbandon]);
  const c = W((h) => ja({
    lockAPI: a,
    registry: n,
    store: t,
    draggableId: h
  }), [a, n, t]), d = W((h, b, E) => Nm({
    lockAPI: a,
    registry: n,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: b || null,
    sourceEvent: E && E.sourceEvent ? E.sourceEvent : null
  }), [e, a, n, t]), p = W((h) => ym(e, h), [e]), l = W((h) => {
    const b = n.draggable.findById(h);
    return b ? b.options : null;
  }, [n.draggable]), u = W(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Er()));
  }, [a, t]), m = W(() => a.isClaimed(), [a]), g = re(() => ({
    canGetLock: c,
    tryGetLock: d,
    findClosestDraggableId: p,
    findOptionsForDraggable: l,
    tryReleaseLock: u,
    isLockClaimed: m
  }), [c, d, p, l, u, m]);
  pm(i);
  for (let h = 0; h < i.length; h++)
    i[h](g);
}
const Sm = (e) => ({
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
  } = e, a = Z(null);
  Ff();
  const s = Pr(e), c = W(() => Sm(s.current), [s]), d = W(() => Im(s.current), [s]), p = Af(t), l = Tf({
    contextId: t,
    text: i
  }), u = Of(t, o), m = W((O) => {
    st(a).dispatch(O);
  }, []), g = re(() => Zr({
    publishWhileDragging: du,
    updateDroppableScroll: uu,
    updateDroppableIsEnabled: fu,
    updateDroppableIsCombineEnabled: mu,
    collectionStarting: pu
  }, m), [m]), h = Cf(), b = re(() => nf(h, g), [h, g]), E = re(() => yf({
    scrollWindow: rf,
    scrollDroppable: b.scrollDroppable,
    getAutoScrollerOptions: d,
    ...Zr({
      move: ha
    }, m)
  }), [b.scrollDroppable, m, d]), w = Sf(t), N = re(() => Qu({
    announce: p,
    autoScroller: E,
    dimensionMarshal: b,
    focusMarshal: w,
    getResponders: c,
    styleMarshal: u
  }), [p, E, b, w, c, u]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== N && process.env.NODE_ENV !== "production" && me("unexpected store change"), a.current = N;
  const y = W(() => {
    const O = st(a);
    O.getState().phase !== "IDLE" && O.dispatch(Er());
  }, []), x = W(() => {
    const O = st(a).getState();
    return O.phase === "DROP_ANIMATING" ? !0 : O.phase === "IDLE" ? !1 : O.isDragging;
  }, []), I = re(() => ({
    isDragging: x,
    tryAbort: y
  }), [x, y]);
  n(I);
  const A = W((O) => Sa(st(a).getState(), O), []), L = W(() => We(st(a).getState()), []), j = re(() => ({
    marshal: b,
    focus: w,
    contextId: t,
    canLift: A,
    isMovementAllowed: L,
    dragHandleUsageInstructionsId: l,
    registry: h
  }), [t, b, l, w, A, L, h]);
  return Om({
    contextId: t,
    store: N,
    registry: h,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), he(() => y, [y]), ve.createElement(nn.Provider, {
    value: j
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
}, _m = (e, t) => t ? dt.drop(t.duration) : e ? dt.snap : dt.fluid, Am = (e, t) => {
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
    transition: _m(s, i),
    transform: d,
    opacity: Am(a, c),
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
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = qi(o, r), a = zt(i, n), s = {
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
function Lm(e) {
  const t = _r("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = re(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), d = W((m) => {
    const g = o();
    return g || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot get dimension when no ref is set") : v()), Mm(n, g, m);
  }, [n, o]), p = re(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: d
  }), [n, d, c, t]), l = Z(p), u = Z(!0);
  Ce(() => (r.draggable.register(l.current), () => r.draggable.unregister(l.current)), [r.draggable]), Ce(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    const m = l.current;
    l.current = p, r.draggable.update(p, m);
  }, [p, r.draggable]);
}
var $r = ve.createContext(null);
function Ba(e) {
  e && St(e) || (process.env.NODE_ENV !== "production" ? v(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : v());
}
function jm(e, t, n) {
  It(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? v(!1, "Draggable requires a draggableId") : v(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? v(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : v(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? v(!1, `${r(o)} requires an integer index prop`) : v(!1)), e.mapped.type !== "DRAGGING" && (Ba(n()), e.isEnabled && (Pa(t, o) || (process.env.NODE_ENV !== "production" ? v(!1, `${r(o)} Unable to find drag handle`) : v(!1))));
  });
}
function Bm(e) {
  Ar(() => {
    const t = Z(e);
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
  const t = Z(null), n = W((I = null) => {
    t.current = I;
  }, []), r = W(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Ut(nn), {
    type: s,
    droppableId: c
  } = Ut($r), d = re(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: p,
    draggableId: l,
    isEnabled: u,
    shouldRespectForcePress: m,
    canDragInteractiveElements: g,
    isClone: h,
    mapped: b,
    dropAnimationFinished: E
  } = e;
  if (jm(e, o, r), Bm(h), !h) {
    const I = re(() => ({
      descriptor: d,
      registry: a,
      getDraggableRef: r,
      canDragInteractiveElements: g,
      shouldRespectForcePress: m,
      isEnabled: u
    }), [d, a, r, g, m, u]);
    Lm(I);
  }
  const w = re(() => u ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Fm
  } : null, [o, i, l, u]), N = W((I) => {
    b.type === "DRAGGING" && b.dropping && I.propertyName === "transform" && ci(E);
  }, [E, b]), y = re(() => {
    const I = $m(b), A = b.type === "DRAGGING" && b.dropping ? N : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: I,
        onTransitionEnd: A
      },
      dragHandleProps: w
    };
  }, [o, w, l, b, N, n]), x = re(() => ({
    draggableId: d.id,
    type: d.type,
    source: {
      index: d.index,
      droppableId: d.droppableId
    }
  }), [d.droppableId, d.id, d.index, d.type]);
  return ve.createElement(ve.Fragment, null, p(y, b.snapshot, x));
};
var Fa = (e, t) => e === t, Va = (e) => {
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
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = Ie(o.impact), d = Gm(o.impact), p = o.forceShouldAnimate;
      return n(e(a.x, a.y), o.movementMode, s, i.isClone, c, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], d = a.result, p = d.mode, l = Va(d), u = zm(d), g = {
        duration: o.dropDuration,
        curve: Dr.drop,
        moveTo: o.newHomeClientOffset,
        opacity: u ? vt.opacity.drop : null,
        scale: u ? vt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: g,
          draggingOver: l,
          combineWith: u,
          mode: p,
          forceShouldAnimate: null,
          snapshot: t(p, s, l, u, g)
        }
      };
    }
    return null;
  };
}
function za(e = null) {
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
    snapshot: za(null)
  }
};
function Um() {
  const e = ye((a, s) => ({
    x: a,
    y: s
  })), t = ye(za), n = ye((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), r = (a) => a ? n(we, a, !0) : null, o = (a, s, c, d) => {
    const p = c.displaced.visible[a], l = !!(d.inVirtualList && d.effected[a]), u = Zt(c), m = u && u.draggableId === a ? s : null;
    if (!p) {
      if (!l)
        return r(m);
      if (c.displaced.invisible[a])
        return null;
      const b = nt(d.displacedBy.point), E = e(b.x, b.y);
      return n(E, m, !0);
    }
    if (l)
      return r(m);
    const g = c.displacedBy.point, h = e(g.x, g.y);
    return n(h, m, p.shouldAnimate);
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
  dropAnimationFinished: xa
}, Km = Wi(Hm, Ym, null, {
  context: kr,
  areStatePropsEqual: Fa
})(Vm);
function Ga(e) {
  return Ut($r).isUsingCloneFor === e.draggableId && !e.isClone ? null : ve.createElement(Km, e);
}
function Mr(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return ve.createElement(Ga, Gt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const Lr = (e) => (t) => e === t, Xm = Lr("scroll"), Jm = Lr("auto"), Qm = Lr("visible"), $o = (e, t) => t(e.overflowX) || t(e.overflowY), Zm = (e, t) => t(e.overflowX) && t(e.overflowY), Wa = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return $o(n, Xm) || $o(n, Jm);
}, eg = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = bt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, v()), !Wa(e))
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
}, jr = (e) => e == null ? null : e === document.body ? eg() ? e : null : e === document.documentElement ? null : Wa(e) ? e : jr(e.parentElement);
var tg = (e) => {
  !e || !jr(e.parentElement) || process.env.NODE_ENV !== "production" && me(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Qn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const qa = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : qa(e.parentElement) : !1;
var ng = (e) => {
  const t = jr(e), n = qa(e);
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
      scrollSize: u,
      client: m
    } = s, g = Na({
      scrollHeight: u.scrollHeight,
      scrollWidth: u.scrollWidth,
      height: m.paddingBox.height,
      width: m.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: m,
      scrollSize: u,
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
  })(), d = o === "vertical" ? hr : na, p = Je({
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
const og = (e, t) => {
  const n = Ui(e);
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
  const c = n.closestScrollable, d = og(e, c), p = zt(d, r), l = (() => {
    if (!c)
      return null;
    const m = Ui(c), g = {
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
    page: p,
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
  const t = Z(null), n = Ut(nn), r = _r("droppable"), {
    registry: o,
    marshal: i
  } = n, a = Pr(e), s = re(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = Z(s), d = re(() => ye((y, x) => {
    t.current || (process.env.NODE_ENV !== "production" ? v(!1, "Can only update scroll when dragging") : v());
    const I = {
      x: y,
      y: x
    };
    i.updateDroppableScroll(s.id, I);
  }), [s.id, i]), p = W(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? we : Qn(y.env.closestScrollable);
  }, []), l = W(() => {
    const y = p();
    d(y.x, y.y);
  }, [p, d]), u = re(() => pt(l), [l]), m = W(() => {
    const y = t.current, x = Tt(y);
    if (y && x || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find scroll options while scrolling") : v()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    u();
  }, [u, l]), g = W((y, x) => {
    t.current && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot collect a droppable while a drag is occurring") : v());
    const I = a.current, A = I.getDroppableRef();
    A || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot collect without a droppable ref") : v());
    const L = ng(A), j = {
      ref: A,
      descriptor: s,
      env: L,
      scrollOptions: x
    };
    t.current = j;
    const O = ig({
      ref: A,
      descriptor: s,
      env: L,
      windowScroll: y,
      direction: I.direction,
      isDropDisabled: I.isDropDisabled,
      isCombineEnabled: I.isCombineEnabled,
      shouldClipSubject: !I.ignoreContainerClipping
    }), T = L.closestScrollable;
    return T && (T.setAttribute(ko.contextId, n.contextId), T.addEventListener("scroll", m, Mo(j.scrollOptions)), process.env.NODE_ENV !== "production" && tg(T)), O;
  }, [n.contextId, s, m, a]), h = W(() => {
    const y = t.current, x = Tt(y);
    return y && x || (process.env.NODE_ENV !== "production" ? v(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : v()), Qn(x);
  }, []), b = W(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop drag when no active drag") : v());
    const x = Tt(y);
    t.current = null, x && (u.cancel(), x.removeAttribute(ko.contextId), x.removeEventListener("scroll", m, Mo(y.scrollOptions)));
  }, [m, u]), E = W((y) => {
    const x = t.current;
    x || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot scroll when there is no drag") : v());
    const I = Tt(x);
    I || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot scroll a droppable with no closest scrollable") : v()), I.scrollTop += y.y, I.scrollLeft += y.x;
  }, []), w = re(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: h,
    dragStopped: b,
    scroll: E
  }), [b, g, h, E]), N = re(() => ({
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
function kn() {
}
const Lo = {
  width: 0,
  height: 0,
  margin: op
}, lg = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? Lo : {
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
  const t = Z(null), n = W(() => {
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
  }, [r, i, o]), p = dg({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return ve.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: d,
    ref: e.innerRef
  });
};
var ug = ve.memo(pg);
function _n(e) {
  return typeof e == "boolean";
}
function An(e, t) {
  t.forEach((n) => n(e));
}
const fg = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? v(!1, "A Droppable requires a droppableId prop") : v()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? v(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : v());
}, function({
  props: t
}) {
  _n(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? v(!1, "isDropDisabled must be a boolean") : v()), _n(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? v(!1, "isCombineEnabled must be a boolean") : v()), _n(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? v(!1, "ignoreContainerClipping must be a boolean") : v());
}, function({
  getDroppableRef: t
}) {
  Ba(t());
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
    An(e, fg), e.props.mode === "standard" && An(e, mg), e.props.mode === "virtual" && An(e, gg);
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
  } = t, o = Z(null), i = Z(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: d,
    direction: p,
    ignoreContainerClipping: l,
    isDropDisabled: u,
    isCombineEnabled: m,
    snapshot: g,
    useClone: h,
    updateViewportMaxScroll: b,
    getContainerForClone: E
  } = e, w = W(() => o.current, []), N = W((B = null) => {
    o.current = B;
  }, []), y = W(() => i.current, []), x = W((B = null) => {
    i.current = B;
  }, []);
  vg({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const I = W(() => {
    r() && b({
      maxScroll: Oa()
    });
  }, [r, b]);
  cg({
    droppableId: s,
    type: c,
    mode: d,
    direction: p,
    isDropDisabled: u,
    isCombineEnabled: m,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const A = re(() => ve.createElement(hg, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: B,
    data: V,
    animate: F
  }) => ve.createElement(ug, {
    placeholder: V,
    onClose: B,
    innerRef: x,
    animate: F,
    contextId: n,
    onTransitionEnd: I
  })), [n, I, e.placeholder, e.shouldAnimatePlaceholder, x]), L = re(() => ({
    innerRef: N,
    placeholder: A,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": n
    }
  }), [n, s, A, N]), j = h ? h.dragging.draggableId : null, O = re(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: j
  }), [s, j, c]);
  function T() {
    if (!h)
      return null;
    const {
      dragging: B,
      render: V
    } = h, F = ve.createElement(Ga, {
      draggableId: B.draggableId,
      index: B.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (Y, J) => V(Y, J, B));
    return gs.createPortal(F, E());
  }
  return ve.createElement($r.Provider, {
    value: O
  }, a(L, g), T());
};
function xg() {
  return document.body || (process.env.NODE_ENV !== "production" ? v(!1, "document.body is not ready") : v()), document.body;
}
const jo = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: xg
}, Ua = (e) => {
  let t = {
    ...e
  }, n;
  for (n in jo)
    e[n] === void 0 && (t = {
      ...t,
      [n]: jo[n]
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
  })), r = ye((i, a, s, c, d, p) => {
    const l = d.descriptor.id;
    if (d.descriptor.droppableId === i) {
      const g = p ? {
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
    const s = Ua(a), c = s.droppableId, d = s.type, p = !s.isDropDisabled, l = s.renderClone;
    if (xt(i)) {
      const u = i.critical;
      if (!Pn(d, u))
        return t;
      const m = Bo(u, i.dimensions), g = Ie(i.impact) === c;
      return r(c, p, g, g, m, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const u = i.completed;
      if (!Pn(d, u.critical))
        return t;
      const m = Bo(u.critical, i.dimensions);
      return r(c, p, Va(u.result) === c, Ie(u.impact) === c, m, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const u = i.completed;
      if (!Pn(d, u.critical))
        return t;
      const m = Ie(u.impact) === c, g = !!(u.impact.at && u.impact.at.type === "COMBINE"), h = u.critical.droppable.id === c;
      return m ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, wg = {
  updateViewportMaxScroll: vu
}, Br = Wi(yg, wg, (e, t, n) => ({
  ...Ua(n),
  ...e,
  ...t
}), {
  context: kr,
  areStatePropsEqual: Fa
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
        e.map((s, c) => /* @__PURE__ */ f(Mr, { draggableId: s.id, index: c, children: (d, p) => /* @__PURE__ */ C(
          "li",
          {
            ref: d.innerRef,
            ...d.draggableProps,
            className: S(
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
              /* @__PURE__ */ f(
                "div",
                {
                  className: S(
                    "absolute top-0 left-0 right-0 h-1 rounded-t-xl transition-opacity duration-200",
                    "bg-gradient-to-r from-accent via-primary to-primary",
                    p.isDragging ? "opacity-100" : "opacity-0 group-hover:opacity-50"
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
                    p.isDragging && "text-primary"
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
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function N(x) {
    if (typeof x == "object" && x !== null) {
      var I = x.$$typeof;
      switch (I) {
        case t:
          switch (x = x.type, x) {
            case c:
            case d:
            case r:
            case i:
            case o:
            case l:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case s:
                case p:
                case g:
                case m:
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
    return N(x) === d;
  }
  return ce.AsyncMode = c, ce.ConcurrentMode = d, ce.ContextConsumer = s, ce.ContextProvider = a, ce.Element = t, ce.ForwardRef = p, ce.Fragment = r, ce.Lazy = g, ce.Memo = m, ce.Portal = n, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = l, ce.isAsyncMode = function(x) {
    return y(x) || N(x) === c;
  }, ce.isConcurrentMode = y, ce.isContextConsumer = function(x) {
    return N(x) === s;
  }, ce.isContextProvider = function(x) {
    return N(x) === a;
  }, ce.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, ce.isForwardRef = function(x) {
    return N(x) === p;
  }, ce.isFragment = function(x) {
    return N(x) === r;
  }, ce.isLazy = function(x) {
    return N(x) === g;
  }, ce.isMemo = function(x) {
    return N(x) === m;
  }, ce.isPortal = function(x) {
    return N(x) === n;
  }, ce.isProfiler = function(x) {
    return N(x) === i;
  }, ce.isStrictMode = function(x) {
    return N(x) === o;
  }, ce.isSuspense = function(x) {
    return N(x) === l;
  }, ce.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === d || x === i || x === o || x === l || x === u || typeof x == "object" && x !== null && (x.$$typeof === g || x.$$typeof === m || x.$$typeof === a || x.$$typeof === s || x.$$typeof === p || x.$$typeof === b || x.$$typeof === E || x.$$typeof === w || x.$$typeof === h);
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function N(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === d || _ === i || _ === o || _ === l || _ === u || typeof _ == "object" && _ !== null && (_.$$typeof === g || _.$$typeof === m || _.$$typeof === a || _.$$typeof === s || _.$$typeof === p || _.$$typeof === b || _.$$typeof === E || _.$$typeof === w || _.$$typeof === h);
    }
    function y(_) {
      if (typeof _ == "object" && _ !== null) {
        var ue = _.$$typeof;
        switch (ue) {
          case t:
            var ze = _.type;
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
    var x = c, I = d, A = s, L = a, j = t, O = p, T = r, B = g, V = m, F = n, Y = i, J = o, ee = l, oe = !1;
    function ne(_) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(_) || y(_) === c;
    }
    function k(_) {
      return y(_) === d;
    }
    function P(_) {
      return y(_) === s;
    }
    function z(_) {
      return y(_) === a;
    }
    function q(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function G(_) {
      return y(_) === p;
    }
    function K(_) {
      return y(_) === r;
    }
    function X(_) {
      return y(_) === g;
    }
    function U(_) {
      return y(_) === m;
    }
    function R(_) {
      return y(_) === n;
    }
    function D(_) {
      return y(_) === i;
    }
    function $(_) {
      return y(_) === o;
    }
    function te(_) {
      return y(_) === l;
    }
    le.AsyncMode = x, le.ConcurrentMode = I, le.ContextConsumer = A, le.ContextProvider = L, le.Element = j, le.ForwardRef = O, le.Fragment = T, le.Lazy = B, le.Memo = V, le.Portal = F, le.Profiler = Y, le.StrictMode = J, le.Suspense = ee, le.isAsyncMode = ne, le.isConcurrentMode = k, le.isContextConsumer = P, le.isContextProvider = z, le.isElement = q, le.isForwardRef = G, le.isFragment = K, le.isLazy = X, le.isMemo = U, le.isPortal = R, le.isProfiler = D, le.isStrictMode = $, le.isSuspense = te, le.isValidElementType = N, le.typeOf = y;
  }()), le;
}
var zo;
function Ha() {
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
  return Rn = o() ? Object.assign : function(i, a) {
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
function Ya() {
  return qo || (qo = 1, $n = Function.call.bind(Object.prototype.hasOwnProperty)), $n;
}
var Mn, Uo;
function Og() {
  if (Uo) return Mn;
  Uo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Fr(), n = {}, r = Ya();
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
          } catch (g) {
            l = g;
          }
          if (l && !(l instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
var Ln, Ho;
function Sg() {
  if (Ho) return Ln;
  Ho = 1;
  var e = Ha(), t = Dg(), n = Fr(), r = Ya(), o = Og(), i = function() {
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
  return Ln = function(s, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function l(k) {
      var P = k && (d && k[d] || k[p]);
      if (typeof P == "function")
        return P;
    }
    var u = "<<anonymous>>", m = {
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
      oneOf: A,
      oneOfType: j,
      shape: B,
      exact: V
    };
    function g(k, P) {
      return k === P ? k !== 0 || 1 / k === 1 / P : k !== k && P !== P;
    }
    function h(k, P) {
      this.message = k, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function b(k) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, z = 0;
      function q(K, X, U, R, D, $, te) {
        if (R = R || u, $ = $ || U, te !== n) {
          if (c) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = R + ":" + U;
            !P[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + R + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[ue] = !0, z++);
          }
        }
        return X[U] == null ? K ? X[U] === null ? new h("The " + D + " `" + $ + "` is marked as required " + ("in `" + R + "`, but its value is `null`.")) : new h("The " + D + " `" + $ + "` is marked as required in " + ("`" + R + "`, but its value is `undefined`.")) : null : k(X, U, R, D, $);
      }
      var G = q.bind(null, !1);
      return G.isRequired = q.bind(null, !0), G;
    }
    function E(k) {
      function P(z, q, G, K, X, U) {
        var R = z[q], D = J(R);
        if (D !== k) {
          var $ = ee(R);
          return new h(
            "Invalid " + K + " `" + X + "` of type " + ("`" + $ + "` supplied to `" + G + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return b(P);
    }
    function w() {
      return b(a);
    }
    function N(k) {
      function P(z, q, G, K, X) {
        if (typeof k != "function")
          return new h("Property `" + X + "` of component `" + G + "` has invalid PropType notation inside arrayOf.");
        var U = z[q];
        if (!Array.isArray(U)) {
          var R = J(U);
          return new h("Invalid " + K + " `" + X + "` of type " + ("`" + R + "` supplied to `" + G + "`, expected an array."));
        }
        for (var D = 0; D < U.length; D++) {
          var $ = k(U, D, G, K, X + "[" + D + "]", n);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return b(P);
    }
    function y() {
      function k(P, z, q, G, K) {
        var X = P[z];
        if (!s(X)) {
          var U = J(X);
          return new h("Invalid " + G + " `" + K + "` of type " + ("`" + U + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(k);
    }
    function x() {
      function k(P, z, q, G, K) {
        var X = P[z];
        if (!e.isValidElementType(X)) {
          var U = J(X);
          return new h("Invalid " + G + " `" + K + "` of type " + ("`" + U + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(k);
    }
    function I(k) {
      function P(z, q, G, K, X) {
        if (!(z[q] instanceof k)) {
          var U = k.name || u, R = ne(z[q]);
          return new h("Invalid " + K + " `" + X + "` of type " + ("`" + R + "` supplied to `" + G + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return b(P);
    }
    function A(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function P(z, q, G, K, X) {
        for (var U = z[q], R = 0; R < k.length; R++)
          if (g(U, k[R]))
            return null;
        var D = JSON.stringify(k, function(te, _) {
          var ue = ee(_);
          return ue === "symbol" ? String(_) : _;
        });
        return new h("Invalid " + K + " `" + X + "` of value `" + String(U) + "` " + ("supplied to `" + G + "`, expected one of " + D + "."));
      }
      return b(P);
    }
    function L(k) {
      function P(z, q, G, K, X) {
        if (typeof k != "function")
          return new h("Property `" + X + "` of component `" + G + "` has invalid PropType notation inside objectOf.");
        var U = z[q], R = J(U);
        if (R !== "object")
          return new h("Invalid " + K + " `" + X + "` of type " + ("`" + R + "` supplied to `" + G + "`, expected an object."));
        for (var D in U)
          if (r(U, D)) {
            var $ = k(U, D, G, K, X + "." + D, n);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return b(P);
    }
    function j(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var P = 0; P < k.length; P++) {
        var z = k[P];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(z) + " at index " + P + "."
          ), a;
      }
      function q(G, K, X, U, R) {
        for (var D = [], $ = 0; $ < k.length; $++) {
          var te = k[$], _ = te(G, K, X, U, R, n);
          if (_ == null)
            return null;
          _.data && r(_.data, "expectedType") && D.push(_.data.expectedType);
        }
        var ue = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new h("Invalid " + U + " `" + R + "` supplied to " + ("`" + X + "`" + ue + "."));
      }
      return b(q);
    }
    function O() {
      function k(P, z, q, G, K) {
        return F(P[z]) ? null : new h("Invalid " + G + " `" + K + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return b(k);
    }
    function T(k, P, z, q, G) {
      return new h(
        (k || "React class") + ": " + P + " type `" + z + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + G + "`."
      );
    }
    function B(k) {
      function P(z, q, G, K, X) {
        var U = z[q], R = J(U);
        if (R !== "object")
          return new h("Invalid " + K + " `" + X + "` of type `" + R + "` " + ("supplied to `" + G + "`, expected `object`."));
        for (var D in k) {
          var $ = k[D];
          if (typeof $ != "function")
            return T(G, K, X, D, ee($));
          var te = $(U, D, G, K, X + "." + D, n);
          if (te)
            return te;
        }
        return null;
      }
      return b(P);
    }
    function V(k) {
      function P(z, q, G, K, X) {
        var U = z[q], R = J(U);
        if (R !== "object")
          return new h("Invalid " + K + " `" + X + "` of type `" + R + "` " + ("supplied to `" + G + "`, expected `object`."));
        var D = t({}, z[q], k);
        for (var $ in D) {
          var te = k[$];
          if (r(k, $) && typeof te != "function")
            return T(G, K, X, $, ee(te));
          if (!te)
            return new h(
              "Invalid " + K + " `" + X + "` key `" + $ + "` supplied to `" + G + "`.\nBad object: " + JSON.stringify(z[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var _ = te(U, $, G, K, X + "." + $, n);
          if (_)
            return _;
        }
        return null;
      }
      return b(P);
    }
    function F(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(F);
          if (k === null || s(k))
            return !0;
          var P = l(k);
          if (P) {
            var z = P.call(k), q;
            if (P !== k.entries) {
              for (; !(q = z.next()).done; )
                if (!F(q.value))
                  return !1;
            } else
              for (; !(q = z.next()).done; ) {
                var G = q.value;
                if (G && !F(G[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Y(k, P) {
      return k === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function J(k) {
      var P = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : Y(P, k) ? "symbol" : P;
    }
    function ee(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var P = J(k);
      if (P === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function oe(k) {
      var P = ee(k);
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
    function ne(k) {
      return !k.constructor || !k.constructor.name ? u : k.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, Ln;
}
var jn, Yo;
function Ig() {
  if (Yo) return jn;
  Yo = 1;
  var e = Fr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, jn = function() {
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
  }, jn;
}
if (process.env.NODE_ENV !== "production") {
  var Cg = Ha(), kg = !0;
  Zn.exports = Sg()(Cg.isElement, kg);
} else
  Zn.exports = Ig()();
var _g = Zn.exports;
const fe = /* @__PURE__ */ Hl(_g);
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
const Ag = /* @__PURE__ */ new Map([
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
    const r = t.split(".").pop().toLowerCase(), o = Ag.get(r);
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
    return Ht(e) && $g(e.dataTransfer) ? Bg(e.dataTransfer, e.type) : Mg(e) ? Lg(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? jg(e) : [];
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
function Lg(e) {
  return er(e.target.files).map((t) => et(t));
}
function jg(e) {
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
      return Xo(Ka(r));
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
  return t && t.isDirectory ? Xa(t) : Jo(e, t);
}
function Ka(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? Ka(n) : [n]
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
    return e.isDirectory ? Xa(e) : zg(e);
  });
}
function Xa(e) {
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
  return qg(e) || Wg(e) || Qa(e) || Gg();
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
      Ja(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ja(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function yt(e, t) {
  return Yg(e) || Hg(e, t) || Qa(e, t) || Ug();
}
function Ug() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qa(e, t) {
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
function Za(e, t) {
  var n = e.type === "application/x-moz-file" || Kg(e, t) || nv(e);
  return [n, n ? null : ev(t)];
}
function es(e, t, n) {
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
    var d = Za(c, n), p = yt(d, 1), l = p[0], u = es(c, r, o), m = yt(u, 1), g = m[0], h = s ? s(c) : null;
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
      return ts(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(ns)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(n, r) {
      var o = yt(r, 2), i = o[0], a = o[1];
      return ei(ei({}, n), {}, Ja({}, i, a));
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
      return ts(t) || ns(t);
    }).join(",");
}
function dv(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function pv(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function ts(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function ns(e) {
  return /^.*\.[\w]+$/.test(e);
}
var uv = ["children"], fv = ["open"], mv = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], gv = ["refKey", "onChange", "onClick"];
function oi(e) {
  return bv(e) || hv(e) || rs(e) || vv();
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
  return wv(e) || yv(e, t) || rs(e, t) || xv();
}
function xv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rs(e, t) {
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
  var n = e.children, r = Kt(e, uv), o = is(r), i = o.open, a = Kt(o, fv);
  return fs(t, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ ve.createElement(ms, null, n(ge(ge({}, a), {}, {
    open: i
  })));
});
Vr.displayName = "Dropzone";
var os = {
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
Vr.defaultProps = os;
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
function is() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = ge(ge({}, os), e), n = t.accept, r = t.disabled, o = t.getFilesFromEvent, i = t.maxSize, a = t.minSize, s = t.multiple, c = t.maxFiles, d = t.onDragEnter, p = t.onDragLeave, l = t.onDragOver, u = t.onDrop, m = t.onDropAccepted, g = t.onDropRejected, h = t.onFileDialogCancel, b = t.onFileDialogOpen, E = t.useFsAccessApi, w = t.autoFocus, N = t.preventDropOnDocument, y = t.noClick, x = t.noKeyboard, I = t.noDrag, A = t.noDragEventsBubbling, L = t.onError, j = t.validator, O = Me(function() {
    return lv(n);
  }, [n]), T = Me(function() {
    return cv(n);
  }, [n]), B = Me(function() {
    return typeof b == "function" ? b : ai;
  }, [b]), V = Me(function() {
    return typeof h == "function" ? h : ai;
  }, [h]), F = Z(null), Y = Z(null), J = us(Nv, or), ee = Fn(J, 2), oe = ee[0], ne = ee[1], k = oe.isFocused, P = oe.isFileDialogActive, z = Z(typeof window < "u" && window.isSecureContext && E && sv()), q = function() {
    !z.current && P && setTimeout(function() {
      if (Y.current) {
        var H = Y.current.files;
        H.length || (ne({
          type: "closeDialog"
        }), V());
      }
    }, 300);
  };
  he(function() {
    return window.addEventListener("focus", q, !1), function() {
      window.removeEventListener("focus", q, !1);
    };
  }, [Y, P, V, z]);
  var G = Z([]), K = Z([]), X = function(H) {
    F.current && F.current.contains(H.target) || (H.preventDefault(), G.current = []);
  };
  he(function() {
    return N && (document.addEventListener("dragover", ri, !1), document.addEventListener("drop", X, !1)), function() {
      N && (document.removeEventListener("dragover", ri), document.removeEventListener("drop", X));
    };
  }, [F, N]), he(function() {
    var M = function(Re) {
      K.current = [].concat(oi(K.current), [Re.target]), ct(Re) && ne({
        isDragGlobal: !0,
        type: "setDragGlobal"
      });
    }, H = function(Re) {
      K.current = K.current.filter(function($e) {
        return $e !== Re.target && $e !== null;
      }), !(K.current.length > 0) && ne({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, be = function() {
      K.current = [], ne({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, xe = function() {
      K.current = [], ne({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    };
    return document.addEventListener("dragenter", M, !1), document.addEventListener("dragleave", H, !1), document.addEventListener("dragend", be, !1), document.addEventListener("drop", xe, !1), function() {
      document.removeEventListener("dragenter", M), document.removeEventListener("dragleave", H), document.removeEventListener("dragend", be), document.removeEventListener("drop", xe);
    };
  }, [F]), he(function() {
    return !r && w && F.current && F.current.focus(), function() {
    };
  }, [F, w, r]);
  var U = Q(function(M) {
    L ? L(M) : console.error(M);
  }, [L]), R = Q(function(M) {
    M.preventDefault(), M.persist(), kt(M), G.current = [].concat(oi(G.current), [M.target]), ct(M) && Promise.resolve(o(M)).then(function(H) {
      if (!(Yt(M) && !A)) {
        var be = H.length, xe = be > 0 && rv({
          files: H,
          accept: O,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: c,
          validator: j
        }), Ee = be > 0 && !xe;
        ne({
          isDragAccept: xe,
          isDragReject: Ee,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), d && d(M);
      }
    }).catch(function(H) {
      return U(H);
    });
  }, [o, d, U, A, O, a, i, s, c, j]), D = Q(function(M) {
    M.preventDefault(), M.persist(), kt(M);
    var H = ct(M);
    if (H && M.dataTransfer)
      try {
        M.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return H && l && l(M), !1;
  }, [l, A]), $ = Q(function(M) {
    M.preventDefault(), M.persist(), kt(M);
    var H = G.current.filter(function(xe) {
      return F.current && F.current.contains(xe);
    }), be = H.indexOf(M.target);
    be !== -1 && H.splice(be, 1), G.current = H, !(H.length > 0) && (ne({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), ct(M) && p && p(M));
  }, [F, p, A]), te = Q(function(M, H) {
    var be = [], xe = [];
    M.forEach(function(Ee) {
      var Re = Za(Ee, O), $e = Fn(Re, 2), an = $e[0], sn = $e[1], cn = es(Ee, a, i), _t = Fn(cn, 2), ln = _t[0], dn = _t[1], pn = j ? j(Ee) : null;
      if (an && ln && !pn)
        be.push(Ee);
      else {
        var un = [sn, dn];
        pn && (un = un.concat(pn)), xe.push({
          file: Ee,
          errors: un.filter(function(ls) {
            return ls;
          })
        });
      }
    }), (!s && be.length > 1 || s && c >= 1 && be.length > c) && (be.forEach(function(Ee) {
      xe.push({
        file: Ee,
        errors: [tv]
      });
    }), be.splice(0)), ne({
      acceptedFiles: be,
      fileRejections: xe,
      isDragReject: xe.length > 0,
      type: "setFiles"
    }), u && u(be, xe, H), xe.length > 0 && g && g(xe, H), be.length > 0 && m && m(be, H);
  }, [ne, s, O, a, i, c, u, m, g, j]), _ = Q(function(M) {
    M.preventDefault(), M.persist(), kt(M), G.current = [], ct(M) && Promise.resolve(o(M)).then(function(H) {
      Yt(M) && !A || te(H, M);
    }).catch(function(H) {
      return U(H);
    }), ne({
      type: "reset"
    });
  }, [o, te, U, A]), ue = Q(function() {
    if (z.current) {
      ne({
        type: "openDialog"
      }), B();
      var M = {
        multiple: s,
        types: T
      };
      window.showOpenFilePicker(M).then(function(H) {
        return o(H);
      }).then(function(H) {
        te(H, null), ne({
          type: "closeDialog"
        });
      }).catch(function(H) {
        dv(H) ? (V(H), ne({
          type: "closeDialog"
        })) : pv(H) ? (z.current = !1, Y.current ? (Y.current.value = null, Y.current.click()) : U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : U(H);
      });
      return;
    }
    Y.current && (ne({
      type: "openDialog"
    }), B(), Y.current.value = null, Y.current.click());
  }, [ne, B, V, E, te, U, T, s]), ze = Q(function(M) {
    !F.current || !F.current.isEqualNode(M.target) || (M.key === " " || M.key === "Enter" || M.keyCode === 32 || M.keyCode === 13) && (M.preventDefault(), ue());
  }, [F, ue]), ot = Q(function() {
    ne({
      type: "focus"
    });
  }, []), zr = Q(function() {
    ne({
      type: "blur"
    });
  }, []), Gr = Q(function() {
    y || (av() ? setTimeout(ue, 0) : ue());
  }, [y, ue]), Ke = function(H) {
    return r ? null : H;
  }, on = function(H) {
    return x ? null : Ke(H);
  }, Ct = function(H) {
    return I ? null : Ke(H);
  }, kt = function(H) {
    A && H.stopPropagation();
  }, as = Me(function() {
    return function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, H = M.refKey, be = H === void 0 ? "ref" : H, xe = M.role, Ee = M.onKeyDown, Re = M.onFocus, $e = M.onBlur, an = M.onClick, sn = M.onDragEnter, cn = M.onDragOver, _t = M.onDragLeave, ln = M.onDrop, dn = Kt(M, mv);
      return ge(ge(rr({
        onKeyDown: on(Te(Ee, ze)),
        onFocus: on(Te(Re, ot)),
        onBlur: on(Te($e, zr)),
        onClick: Ke(Te(an, Gr)),
        onDragEnter: Ct(Te(sn, R)),
        onDragOver: Ct(Te(cn, D)),
        onDragLeave: Ct(Te(_t, $)),
        onDrop: Ct(Te(ln, _)),
        role: typeof xe == "string" && xe !== "" ? xe : "presentation"
      }, be, F), !r && !x ? {
        tabIndex: 0
      } : {}), dn);
    };
  }, [F, ze, ot, zr, Gr, R, D, $, _, x, I, r]), ss = Q(function(M) {
    M.stopPropagation();
  }, []), cs = Me(function() {
    return function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, H = M.refKey, be = H === void 0 ? "ref" : H, xe = M.onChange, Ee = M.onClick, Re = Kt(M, gv), $e = rr({
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
        onChange: Ke(Te(xe, _)),
        onClick: Ke(Te(Ee, ss)),
        tabIndex: -1
      }, be, Y);
      return ge(ge({}, $e), Re);
    };
  }, [Y, n, s, _, r]);
  return ge(ge({}, oe), {}, {
    isFocused: k && !r,
    getRootProps: as,
    getInputProps: cs,
    rootRef: F,
    inputRef: Y,
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
const Dv = (e) => e.startsWith("image/") ? ec : e.startsWith("video/") ? yc : e.startsWith("audio/") ? uc : e.includes("pdf") || e.includes("document") ? Hs : Ks, si = (e) => {
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
  const [d, p] = pe([]), [l, u] = pe([]), m = Q(
    (N, y) => {
      if (N.length > 0) {
        const x = i ? [...d, ...N] : N;
        if (p(x), e(x), c) {
          const I = N.filter((A) => A.type.startsWith("image/")).map((A) => ({
            file: A,
            url: URL.createObjectURL(A)
          }));
          u((A) => i ? [...A, ...I] : I);
        }
      }
      y.length > 0 && t && t(y);
    },
    [d, i, e, t, c]
  ), g = (N) => {
    const y = d.filter((I) => I !== N);
    p(y), e(y);
    const x = l.find((I) => I.file === N);
    x && (URL.revokeObjectURL(x.url), u((I) => I.filter((A) => A.file !== N)));
  }, { getRootProps: h, getInputProps: b, isDragActive: E, isDragReject: w } = is({
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
          E && !w && "border-primary bg-gradient-to-b from-primary/5 to-accent/5 scale-[1.01]",
          w && "border-red-400 bg-red-50",
          a && "opacity-50 cursor-not-allowed"
        ),
        children: [
          /* @__PURE__ */ f("input", { ...b() }),
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
                bc,
                {
                  className: S(
                    "w-8 h-8 text-primary",
                    E && "animate-bounce"
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ f("p", { className: "text-lg font-medium text-neutral-700 mb-1", children: E ? w ? "Archivo no permitido" : "Suelta los archivos aquí" : "Arrastra archivos aquí" }),
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
      /* @__PURE__ */ f("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: d.map((N, y) => {
        const x = Dv(N.type), I = l.find((A) => A.file === N);
        return /* @__PURE__ */ C(
          "div",
          {
            className: S(
              "group flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-xl",
              "transition-all duration-200",
              "hover:shadow-md hover:border-primary/30"
            ),
            children: [
              I ? /* @__PURE__ */ f("div", { className: "w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100", children: /* @__PURE__ */ f(
                "img",
                {
                  src: I.url,
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
                  children: /* @__PURE__ */ f(x, { className: "w-6 h-6 text-primary" })
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
                  onClick: (A) => {
                    A.stopPropagation(), g(N);
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
          `${N.name}-${y}`
        );
      }) })
    ] })
  ] });
}
const Ov = {
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
              o.cards.map((s, c) => /* @__PURE__ */ f(Mr, { draggableId: s.id, index: c, children: (d, p) => /* @__PURE__ */ C(
                "div",
                {
                  ref: d.innerRef,
                  ...d.draggableProps,
                  className: S(
                    "group bg-white rounded-lg border border-neutral-200 overflow-hidden",
                    "transition-all duration-200",
                    "hover:shadow-md hover:border-primary/30",
                    p.isDragging && "shadow-xl ring-2 ring-primary/30 rotate-2"
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
                                p.isDragging && "text-primary"
                              )
                            }
                          ),
                          /* @__PURE__ */ f("span", { className: "font-medium text-sm text-neutral-800 truncate", children: s.title })
                        ]
                      }
                    ),
                    /* @__PURE__ */ C("div", { className: "p-3", children: [
                      s.description && /* @__PURE__ */ f("p", { className: "text-sm text-neutral-600 mb-2 line-clamp-2", children: s.description }),
                      s.tags && s.tags.length > 0 && /* @__PURE__ */ f("div", { className: "flex flex-wrap gap-1", children: s.tags.map((l, u) => /* @__PURE__ */ f(
                        "span",
                        {
                          className: S(
                            "px-2 py-0.5 text-xs font-medium rounded-full",
                            Ov[l.variant || "default"]
                          ),
                          children: l.label
                        },
                        u
                      )) })
                    ] }),
                    /* @__PURE__ */ f(
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
              o.cards.length === 0 && !a.isDraggingOver && /* @__PURE__ */ f("div", { className: "flex items-center justify-center h-24 text-neutral-400 text-sm", children: "Sin tarjetas" })
            ]
          }
        ) })
      ]
    },
    o.id
  )) }) });
}
function Lv({
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
        e.map((c, d) => /* @__PURE__ */ f(Mr, { draggableId: c.id, index: d, children: (p, l) => /* @__PURE__ */ C(
          "div",
          {
            ref: p.innerRef,
            ...p.draggableProps,
            className: S(
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
              c.title ? /* @__PURE__ */ C(
                "div",
                {
                  ...p.dragHandleProps,
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
                    ...p.dragHandleProps,
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
function jv({
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
  Lv as D,
  S as E,
  $v as F,
  Xt as G,
  Ni as H,
  _v as I,
  Dl as J,
  Mv as K,
  vl as L,
  Ii as M,
  Ei as N,
  Si as O,
  Al as P,
  Pv as Q,
  el as R,
  Tc as S,
  Nl as T,
  zn as a,
  hl as b,
  Rv as c,
  jt as d,
  ol as e,
  al as f,
  Hl as g,
  rl as h,
  xi as i,
  Jc as j,
  Rl as k,
  bi as l,
  sr as m,
  Bt as n,
  jl as o,
  Vc as p,
  bl as q,
  wi as r,
  jv as s,
  Tv as t,
  kv as u,
  El as v,
  Uc as w,
  Ci as x,
  Ll as y,
  Av as z
};
//# sourceMappingURL=index-DXnWNUkK.js.map
