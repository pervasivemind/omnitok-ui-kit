import { jsxs as k, jsx as f, Fragment as Re } from "react/jsx-runtime";
import * as ae from "react";
import he, { forwardRef as ie, createElement as Gn, useState as se, useRef as Z, useCallback as J, useMemo as $e, useEffect as fe, useId as vs, useContext as Nt, createContext as lr, useLayoutEffect as vi, useReducer as hs, useImperativeHandle as bs, Fragment as xs } from "react";
import ys, { createPortal as ws, flushSync as hi } from "react-dom";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bi = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = (e) => {
  const t = Ns(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ds = {
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
const Os = (e) => {
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
const Ss = ie(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, c) => Gn(
    "svg",
    {
      ref: c,
      ...Ds,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: bi("lucide", o),
      ...!i && !Os(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([d, u]) => Gn(d, u)),
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
const ce = (e, t) => {
  const n = ie(
    ({ className: r, ...o }, i) => Gn(Ss, {
      ref: i,
      iconNode: t,
      className: bi(
        `lucide-${Es(Xr(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Xr(e), n;
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Is = ce("arrow-down", ks);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], _s = ce("arrow-up-down", Cs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Ps = ce("arrow-up", As);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], Ts = ce("bell", Rs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], dr = ce("check", Ms);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ut = ce("chevron-down", js);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ls = ce("chevron-left", $s);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Jt = ce("chevron-right", Bs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], Vs = ce("chevrons-left", Fs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], Gs = ce("chevrons-right", zs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], xi = ce("circle-alert", Ws);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], yi = ce("circle-check-big", qs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Hs = ce("copy", Us);
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
], Ks = ce("eye-off", Ys);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Js = ce("eye", Xs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = [
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
], Zs = ce("file-text", Qs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], tc = ce("file", ec);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Xe = ce("grip-vertical", nc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], oc = ce("house", rc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ac = ce("image", ic);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], wi = ce("info", sc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], lc = ce("loader-circle", cc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dc = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], pc = ce("lock", dc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], fc = ce("mail", uc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], pr = ce("menu", mc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = [["path", { d: "M5 12h14", key: "1ays0h" }]], vc = ce("minus", gc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], bc = ce("music", hc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xc = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
], yc = ce("panel-left-close", xc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], ur = ce("search", wc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ec = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ei = ce("triangle-alert", Ec);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nc = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Dc = ce("upload", Nc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oc = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], Sc = ce("video", Oc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], tt = ce("x", kc);
function Ni(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ni(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ic() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ni(e)) && (r && (r += " "), r += t);
  return r;
}
function O(...e) {
  return Ic(e);
}
const Cc = {
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
}, Jr = {
  primary: "bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 focus:ring-primary",
  accent: "bg-transparent text-accent hover:bg-accent/10 active:bg-accent/20 focus:ring-accent",
  neutral: "bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 focus:ring-neutral-300",
  accept: "bg-transparent text-success hover:bg-success/10 active:bg-success/20 focus:ring-success",
  danger: "bg-transparent text-error hover:bg-error/10 active:bg-error/20 focus:ring-error",
  info: "bg-transparent text-info hover:bg-info/10 active:bg-info/20 focus:ring-info",
  violet: "bg-transparent text-violet hover:bg-violet/10 active:bg-violet/20 focus:ring-violet",
  rose: "bg-transparent text-rose hover:bg-rose/10 active:bg-rose/20 focus:ring-rose",
  teal: "bg-transparent text-teal hover:bg-teal/10 active:bg-teal/20 focus:ring-teal"
}, _c = {
  xs: "px-2 py-0.5 text-xs gap-1",
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-4 py-2 text-base gap-2",
  lg: "px-6 py-3 text-lg gap-2.5"
}, Ac = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20
}, Bt = ie(
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
    return /* @__PURE__ */ k(
      "button",
      {
        ref: l,
        disabled: p,
        className: O(
          // Base styles
          "inline-flex items-center justify-center font-medium rounded-md",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          // Variant styles
          r && Jr[e] ? Jr[e] : Cc[e],
          // Size styles
          _c[t],
          // Full width
          a && "w-full",
          // Disabled state
          p && "opacity-50 cursor-not-allowed",
          c
        ),
        ...u,
        children: [
          n ? /* @__PURE__ */ f(lc, { className: "animate-spin", size: Ac[t] }) : o,
          d,
          !n && i
        ]
      }
    );
  }
);
Bt.displayName = "Button";
const Pc = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-4 py-3 text-lg"
}, Rc = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, Tc = {
  sm: "pr-8",
  md: "pr-10",
  lg: "pr-12"
}, Ft = ie(
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
    return /* @__PURE__ */ k("div", { className: O("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: p,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ k("div", { className: "relative", children: [
        o && /* @__PURE__ */ f("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400", children: o }),
        /* @__PURE__ */ f(
          "input",
          {
            ref: l,
            id: p,
            disabled: s,
            className: O(
              // Base styles
              "w-full rounded-md border bg-white",
              "transition-colors duration-200",
              "placeholder:text-neutral-400",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              Pc[e],
              // Icon padding
              o && Rc[e],
              i && Tc[e],
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
Ft.displayName = "Input";
const Mc = {
  sm: "px-3 py-1.5 text-sm pr-8",
  md: "px-4 py-2 text-base pr-10",
  lg: "px-4 py-3 text-lg pr-12"
}, jc = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, $c = {
  sm: "min-h-[34px] px-3 py-1 text-sm",
  md: "min-h-[42px] px-4 py-1.5 text-base",
  lg: "min-h-[50px] px-4 py-2 text-lg"
}, Lc = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, Bc = {
  sm: 14,
  md: 16,
  lg: 20
}, Di = ie(
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
    name: x,
    ...h
  }, D) => {
    var R;
    const y = l || `select-${Math.random().toString(36).slice(2, 9)}`, E = !!r, w = p !== void 0, [b, N] = se(
      m !== void 0 ? String(m) : ""
    ), A = w ? String(p ?? "") : b, j = ((R = o.find((S) => S.value === A)) == null ? void 0 : R.label) ?? "", [q, I] = se(""), [_, $] = se(!1), [G, F] = se(-1), Q = Z(null), W = Z(null), re = Z(null), ee = Z(null), ne = J(
      (S) => {
        ee.current = S, typeof D == "function" ? D(S) : D && (D.current = S);
      },
      [D]
    ), C = $e(() => o.filter(
      (S) => !q || S.label.toLowerCase().includes(q.toLowerCase())
    ), [o, q]), T = J((S) => {
      var P;
      const M = ee.current;
      if (!M) return;
      const te = (P = Object.getOwnPropertyDescriptor(
        HTMLSelectElement.prototype,
        "value"
      )) == null ? void 0 : P.set;
      te == null || te.call(M, S), M.dispatchEvent(new Event("change", { bubbles: !0 }));
    }, []), V = J(
      (S) => {
        w || N(S.target.value), g == null || g(S), $(!1), I(""), F(-1);
      },
      [w, g]
    ), z = J(
      (S) => {
        if (c) return;
        const M = o.find((te) => te.value === S);
        M != null && M.disabled || T(S);
      },
      [c, o, T]
    ), B = J(
      (S, M) => {
        const te = C.length;
        if (te === 0) return -1;
        for (let P = 0; P < te; P++) {
          const le = (S + M * (P + 1) + te) % te;
          if (!C[le].disabled) return le;
        }
        return -1;
      },
      [C]
    ), Y = J(() => C.findIndex((S) => !S.disabled), [C]), U = J(
      (S) => {
        if (!c)
          switch (S.key) {
            case "ArrowDown": {
              S.preventDefault(), _ ? F((M) => B(M, 1)) : ($(!0), F(Y()));
              break;
            }
            case "ArrowUp": {
              S.preventDefault(), _ && F((M) => B(M, -1));
              break;
            }
            case "Enter": {
              if (S.preventDefault(), _ && G >= 0 && G < C.length) {
                const M = C[G];
                M.disabled || z(M.value);
              } else _ || $(!0);
              break;
            }
            case "Escape": {
              S.preventDefault(), $(!1), F(-1);
              break;
            }
          }
      },
      [
        c,
        _,
        G,
        C,
        z,
        B,
        Y
      ]
    );
    fe(() => {
      if (!s) return;
      const S = (M) => {
        Q.current && !Q.current.contains(M.target) && ($(!1), F(-1), I(""));
      };
      return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
    }, [s]), fe(() => {
      var S;
      G >= 0 && re.current && ((S = re.current.querySelectorAll('[role="option"]')[G]) == null || S.scrollIntoView({ block: "nearest" }));
    }, [G]);
    const K = () => {
      var S;
      c || ((S = W.current) == null || S.focus(), $(!0));
    };
    return s ? /* @__PURE__ */ k("div", { className: O("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: `${y}-input`,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ k("div", { ref: Q, className: "relative", children: [
        d && /* @__PURE__ */ f("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10", children: d }),
        /* @__PURE__ */ f(
          "div",
          {
            onClick: K,
            className: O(
              // Base styles
              "flex items-center gap-1.5 w-full rounded-md border bg-white cursor-text",
              "transition-colors duration-200",
              // Size styles
              $c[e],
              // Left icon padding
              d && Lc[e],
              // Right padding for chevron
              "pr-8",
              // Focus ring (applied when dropdown is open)
              _ && !E && "ring-2 ring-primary border-primary",
              _ && E && "ring-2 ring-error border-error",
              // Border color
              E ? "border-error" : "border-neutral-300",
              // Disabled state
              c && "bg-neutral-100 cursor-not-allowed opacity-60",
              u
            ),
            "aria-invalid": E,
            "aria-describedby": E ? `${y}-error` : n ? `${y}-helper` : void 0,
            children: /* @__PURE__ */ f(
              "input",
              {
                ref: W,
                id: `${y}-input`,
                type: "text",
                value: _ ? q : j,
                onChange: (S) => {
                  I(S.target.value), _ || $(!0), F(0);
                },
                onFocus: () => {
                  c || $(!0);
                },
                onKeyDown: U,
                placeholder: j || i,
                disabled: c,
                className: O(
                  "flex-1 min-w-[60px] outline-none bg-transparent",
                  "placeholder:text-neutral-400",
                  c && "cursor-not-allowed"
                ),
                role: "combobox",
                "aria-expanded": _,
                "aria-controls": `${y}-listbox`,
                "aria-activedescendant": G >= 0 ? `${y}-option-${G}` : void 0,
                "aria-autocomplete": "list",
                autoComplete: "off"
              }
            )
          }
        ),
        /* @__PURE__ */ f(
          ut,
          {
            className: O(
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-200",
              _ && "rotate-180"
            ),
            size: Bc[e]
          }
        ),
        _ && /* @__PURE__ */ f(
          "ul",
          {
            ref: re,
            id: `${y}-listbox`,
            role: "listbox",
            className: O(
              "absolute z-50 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: C.length === 0 ? /* @__PURE__ */ f("li", { className: "px-4 py-2 text-sm text-neutral-400", children: q ? "No matching options" : "No options available" }) : C.map((S, M) => /* @__PURE__ */ f(
              "li",
              {
                id: `${y}-option-${M}`,
                role: "option",
                "aria-selected": S.value === A,
                "aria-disabled": S.disabled,
                onClick: () => {
                  S.disabled || z(S.value);
                },
                className: O(
                  "px-4 py-2 text-sm transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  S.disabled ? "text-neutral-300 cursor-not-allowed opacity-50 select-none" : O(
                    "cursor-pointer",
                    M === G ? "bg-primary/10 text-primary" : "text-neutral-700 hover:bg-neutral-50"
                  )
                ),
                children: S.label
              },
              S.value
            ))
          }
        ),
        /* @__PURE__ */ k(
          "select",
          {
            ref: ne,
            id: y,
            name: x,
            disabled: c,
            ...w ? { value: p } : { defaultValue: m },
            onChange: V,
            className: "sr-only",
            tabIndex: -1,
            "aria-hidden": "true",
            ...h,
            children: [
              i && /* @__PURE__ */ f("option", { value: "", disabled: !0, children: i }),
              o.map((S) => /* @__PURE__ */ f("option", { value: S.value, disabled: S.disabled, children: S.label }, S.value))
            ]
          }
        )
      ] }),
      E && /* @__PURE__ */ f("p", { id: `${y}-error`, className: "text-sm text-error", children: r }),
      !E && n && /* @__PURE__ */ f("p", { id: `${y}-helper`, className: "text-sm text-neutral-500", children: n })
    ] }) : /* @__PURE__ */ k("div", { className: O("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: y,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ k("div", { className: "relative", children: [
        d && /* @__PURE__ */ f("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none", children: d }),
        /* @__PURE__ */ k(
          "select",
          {
            ref: D,
            id: y,
            name: x,
            disabled: c,
            value: p,
            defaultValue: m,
            onChange: g,
            className: O(
              // Base styles
              "w-full rounded-md border bg-white appearance-none cursor-pointer",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              Mc[e],
              // Icon padding
              d && jc[e],
              // Border color
              E ? "border-error focus:ring-error focus:border-error" : "border-neutral-300",
              // Disabled state
              c && "bg-neutral-100 cursor-not-allowed opacity-60",
              u
            ),
            "aria-invalid": E,
            "aria-describedby": E ? `${y}-error` : n ? `${y}-helper` : void 0,
            ...h,
            children: [
              i && /* @__PURE__ */ f("option", { value: "", disabled: !0, children: i }),
              o.map((S) => /* @__PURE__ */ f("option", { value: S.value, disabled: S.disabled, children: S.label }, S.value))
            ]
          }
        ),
        /* @__PURE__ */ f(
          ut,
          {
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none",
            size: e === "sm" ? 14 : e === "lg" ? 20 : 16
          }
        )
      ] }),
      E && /* @__PURE__ */ f("p", { id: `${y}-error`, className: "text-sm text-error", children: r }),
      !E && n && /* @__PURE__ */ f("p", { id: `${y}-helper`, className: "text-sm text-neutral-500", children: n })
    ] });
  }
);
Di.displayName = "Select";
const Fc = {
  sm: "min-h-[34px] px-3 py-1 text-sm",
  md: "min-h-[42px] px-4 py-1.5 text-base",
  lg: "min-h-[50px] px-4 py-2 text-lg"
}, Vc = {
  sm: "px-1.5 py-0.5 text-xs gap-0.5",
  md: "px-2 py-0.5 text-sm gap-1",
  lg: "px-2.5 py-1 text-sm gap-1"
}, zc = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, Gc = {
  sm: 12,
  md: 14,
  lg: 14
}, Wc = {
  sm: 14,
  md: 16,
  lg: 20
}, qc = {
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
}, Uc = ie(
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
    className: x,
    id: h
  }, D) => {
    const y = h || `multiselect-${Math.random().toString(36).slice(2, 9)}`, E = !!s, w = t !== void 0, [b, N] = se(n), A = w ? t : b, [j, q] = se(""), [I, _] = se(!1), [$, G] = se(-1), F = Z(null), Q = Z(null), W = Z(null), re = J(
      (R) => {
        w || N(R), r == null || r(R);
      },
      [w, r]
    ), ee = $e(() => e.filter((R) => {
      const S = A.includes(R.value), M = !j || R.label.toLowerCase().includes(j.toLowerCase());
      return !S && M;
    }), [e, A, j]), ne = l === void 0 || A.length < l, C = J(
      (R) => {
        var te;
        if (!ne || u) return;
        const S = e.find((P) => P.value === R);
        if (S != null && S.disabled) return;
        const M = [...A, R];
        re(M), q(""), G(-1), (te = Q.current) == null || te.focus();
      },
      [ne, u, e, A, re]
    ), T = J(
      (R, S) => {
        var te;
        if (S == null || S.stopPropagation(), u) return;
        const M = A.filter((P) => P !== R);
        re(M), (te = Q.current) == null || te.focus();
      },
      [u, A, re]
    ), V = J(
      (R, S) => {
        const M = ee.length;
        if (M === 0) return -1;
        for (let te = 0; te < M; te++) {
          const P = (R + S * (te + 1) + M) % M;
          if (!ee[P].disabled) return P;
        }
        return -1;
      },
      [ee]
    ), z = J(() => ee.findIndex((R) => !R.disabled), [ee]), B = J(
      (R) => {
        if (!u)
          switch (R.key) {
            case "ArrowDown": {
              R.preventDefault(), I ? G((S) => V(S, 1)) : (_(!0), G(z()));
              break;
            }
            case "ArrowUp": {
              R.preventDefault(), I && G((S) => V(S, -1));
              break;
            }
            case "Enter": {
              if (R.preventDefault(), I && $ >= 0 && $ < ee.length) {
                const S = ee[$];
                S.disabled || C(S.value);
              } else I || _(!0);
              break;
            }
            case "Backspace": {
              if (j === "" && A.length > 0) {
                const S = A[A.length - 1];
                T(S);
              }
              break;
            }
            case "Escape": {
              R.preventDefault(), _(!1), G(-1);
              break;
            }
          }
      },
      [
        u,
        I,
        $,
        C,
        j,
        A,
        T,
        V,
        z
      ]
    );
    fe(() => {
      const R = (S) => {
        F.current && !F.current.contains(S.target) && (_(!1), G(-1), q(""));
      };
      return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
    }, []), fe(() => {
      var R;
      $ >= 0 && W.current && ((R = W.current.querySelectorAll('[role="option"]')[$]) == null || R.scrollIntoView({ block: "nearest" }));
    }, [$]);
    const Y = () => {
      var R;
      u || ((R = Q.current) == null || R.focus(), _(!0));
    }, U = (R) => {
      var S;
      return ((S = e.find((M) => M.value === R)) == null ? void 0 : S.label) ?? R;
    }, K = (R) => {
      var S;
      return ((S = e.find((M) => M.value === R)) == null ? void 0 : S.color) ?? g;
    };
    return /* @__PURE__ */ k("div", { ref: D, className: O("flex flex-col gap-1.5", d && "w-full"), children: [
      i && /* @__PURE__ */ f("label", { htmlFor: `${y}-input`, className: "text-sm font-medium text-neutral-700", children: i }),
      /* @__PURE__ */ k("div", { ref: F, className: "relative", children: [
        m && /* @__PURE__ */ f("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10", children: m }),
        /* @__PURE__ */ k(
          "div",
          {
            onClick: Y,
            className: O(
              // Base styles
              "flex flex-wrap items-center gap-1.5 w-full rounded-md border bg-white cursor-text",
              "transition-colors duration-200",
              // Size styles
              Fc[o],
              // Left icon padding
              m && zc[o],
              // Right padding for chevron
              "pr-8",
              // Focus ring (applied when dropdown is open)
              I && !E && "ring-2 ring-primary border-primary",
              I && E && "ring-2 ring-error border-error",
              // Border color
              E ? "border-error" : "border-neutral-300",
              // Disabled state
              u && "bg-neutral-100 cursor-not-allowed opacity-60",
              x
            ),
            "aria-invalid": E,
            "aria-describedby": E ? `${y}-error` : a ? `${y}-helper` : void 0,
            children: [
              A.map((R) => {
                const S = qc[K(R)];
                return /* @__PURE__ */ k(
                  "span",
                  {
                    className: O(
                      "inline-flex items-center rounded-md font-medium",
                      "transition-colors duration-150",
                      S.base,
                      !u && S.hover,
                      Vc[o]
                    ),
                    children: [
                      U(R),
                      !u && /* @__PURE__ */ f(
                        "button",
                        {
                          type: "button",
                          onClick: (M) => T(R, M),
                          className: O(
                            "inline-flex items-center justify-center rounded-sm transition-colors",
                            S.hover
                          ),
                          "aria-label": `Remove ${U(R)}`,
                          tabIndex: -1,
                          children: /* @__PURE__ */ f(tt, { size: Gc[o] })
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
                  ref: Q,
                  id: `${y}-input`,
                  type: "text",
                  value: j,
                  onChange: (R) => {
                    q(R.target.value), I || _(!0), G(0);
                  },
                  onFocus: () => {
                    u || _(!0);
                  },
                  onKeyDown: B,
                  placeholder: A.length === 0 ? c : "",
                  disabled: u,
                  className: O(
                    "flex-1 min-w-[60px] outline-none bg-transparent",
                    "placeholder:text-neutral-400",
                    u && "cursor-not-allowed"
                  ),
                  role: "combobox",
                  "aria-expanded": I,
                  "aria-controls": `${y}-listbox`,
                  "aria-activedescendant": $ >= 0 ? `${y}-option-${$}` : void 0,
                  "aria-autocomplete": "list",
                  autoComplete: "off"
                }
              ) : /* @__PURE__ */ k(Re, { children: [
                A.length === 0 && /* @__PURE__ */ f("span", { className: "text-neutral-400", children: c }),
                /* @__PURE__ */ f(
                  "input",
                  {
                    ref: Q,
                    id: `${y}-input`,
                    className: "absolute opacity-0 w-0 h-0",
                    onFocus: () => {
                      u || _(!0);
                    },
                    onKeyDown: B,
                    disabled: u,
                    tabIndex: 0,
                    role: "combobox",
                    "aria-expanded": I,
                    "aria-controls": `${y}-listbox`,
                    "aria-activedescendant": $ >= 0 ? `${y}-option-${$}` : void 0,
                    readOnly: !0
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ f(
          ut,
          {
            className: O(
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-200",
              I && "rotate-180"
            ),
            size: Wc[o]
          }
        ),
        I && /* @__PURE__ */ f(
          "ul",
          {
            ref: W,
            id: `${y}-listbox`,
            role: "listbox",
            "aria-multiselectable": "true",
            className: O(
              "absolute z-50 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: ee.length === 0 ? /* @__PURE__ */ f("li", { className: "px-4 py-2 text-sm text-neutral-400", children: j ? "No matching options" : "No options available" }) : ee.map((R, S) => /* @__PURE__ */ f(
              "li",
              {
                id: `${y}-option-${S}`,
                role: "option",
                "aria-selected": A.includes(R.value),
                "aria-disabled": R.disabled || !ne,
                onClick: () => {
                  !R.disabled && ne && C(R.value);
                },
                className: O(
                  "px-4 py-2 text-sm transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  R.disabled || !ne ? "text-neutral-300 cursor-not-allowed opacity-50 select-none" : O(
                    "cursor-pointer",
                    S === $ ? "bg-primary/10 text-primary" : "text-neutral-700 hover:bg-neutral-50"
                  )
                ),
                children: R.label
              },
              R.value
            ))
          }
        )
      ] }),
      E && /* @__PURE__ */ f("p", { id: `${y}-error`, className: "text-sm text-error", children: s }),
      !E && a && /* @__PURE__ */ f("p", { id: `${y}-helper`, className: "text-sm text-neutral-500", children: a })
    ] });
  }
);
Uc.displayName = "MultiSelect";
const Hc = {
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
function Yc(e, t) {
  return e.startsWith("bottom") ? { marginTop: t } : e.startsWith("top") ? { marginBottom: t } : e.startsWith("left") ? { marginRight: t } : e.startsWith("right") ? { marginLeft: t } : {};
}
const Oi = ie(
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
    const p = i !== void 0, [m, g] = se(!1), x = p ? i : m, h = Z(null), D = Z(null), y = Z(null), E = J(
      (j) => {
        p || g(j), a == null || a(j);
      },
      [p, a]
    ), w = J(() => E(!1), [E]), b = J(() => {
      o || E(!x);
    }, [o, x, E]), N = J(
      (j) => {
        var q;
        j.key === "Escape" && (j.preventDefault(), w(), (q = y.current) == null || q.focus()), j.key === "Tab" && w();
      },
      [w]
    );
    fe(() => {
      const j = (q) => {
        h.current && !h.current.contains(q.target) && w();
      };
      return document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j);
    }, [w]);
    const A = `dropdown-${Z(Math.random().toString(36).slice(2, 9)).current}`;
    return /* @__PURE__ */ k(
      "div",
      {
        ref: h,
        className: O("relative inline-flex items-center", d),
        ...u,
        children: [
          /* @__PURE__ */ f(
            "div",
            {
              ref: y,
              role: "button",
              tabIndex: o ? -1 : 0,
              "aria-haspopup": "true",
              "aria-expanded": x,
              "aria-controls": x ? `${A}-panel` : void 0,
              "aria-disabled": o,
              onClick: b,
              onKeyDown: N,
              className: O(
                "inline-flex",
                s,
                o && "opacity-50 cursor-not-allowed pointer-events-none"
              ),
              children: e
            }
          ),
          x && /* @__PURE__ */ f(
            "div",
            {
              ref: (j) => {
                D.current = j, typeof l == "function" ? l(j) : l && (l.current = j);
              },
              id: `${A}-panel`,
              onKeyDown: N,
              style: Yc(n, r),
              className: O(
                "absolute z-50 w-max",
                "rounded-md border border-neutral-200 bg-white shadow-lg",
                "animate-fade-in",
                Hc[n],
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
Oi.displayName = "Dropdown";
const Kc = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-4 py-2.5 text-base"
}, Xc = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5"
}, fr = ie(
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
    const [l, p] = se(!1), [m, g] = se(-1), x = Z(null), h = t.filter((I) => !I.disabled), D = J(
      (I, _) => {
        const $ = t.length;
        if ($ === 0) return -1;
        for (let G = 0; G < $; G++) {
          const F = (I + _ * (G + 1) + $) % $;
          if (!t[F].disabled) return F;
        }
        return -1;
      },
      [t]
    ), y = J(() => t.findIndex((I) => !I.disabled), [t]), E = J(() => {
      for (let I = t.length - 1; I >= 0; I--)
        if (!t[I].disabled) return I;
      return -1;
    }, [t]), w = J(() => {
      s || h.length === 0 || (p(!0), g(-1));
    }, [s, h.length]), b = J(() => {
      p(!1), g(-1);
    }, []), N = J(
      (I) => {
        var _;
        I.disabled || ((_ = I.onClick) == null || _.call(I), n == null || n(I.value), b());
      },
      [n, b]
    ), A = J(
      (I) => {
        I ? w() : b();
      },
      [w, b]
    ), j = J(
      (I) => {
        if (!s)
          switch (I.key) {
            case "ArrowDown": {
              I.preventDefault(), l ? g(
                (_) => _ === -1 ? y() : D(_, 1)
              ) : w();
              break;
            }
            case "ArrowUp": {
              I.preventDefault(), l ? g(
                (_) => _ === -1 ? E() : D(_, -1)
              ) : w();
              break;
            }
            case "Enter":
            case " ": {
              if (I.preventDefault(), l && m >= 0 && m < t.length) {
                const _ = t[m];
                _.href && !_.disabled && (window.location.href = _.href), N(_);
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
        N,
        D,
        y,
        E
      ]
    );
    fe(() => {
      var I;
      m >= 0 && x.current && ((I = x.current.querySelectorAll('[role="menuitem"]')[m]) == null || I.scrollIntoView({ block: "nearest" }));
    }, [m]);
    const q = (I, _) => {
      const $ = _ === m, G = /* @__PURE__ */ k(Re, { children: [
        I.icon && /* @__PURE__ */ f(
          "span",
          {
            className: O(
              "flex-shrink-0",
              Xc[a],
              I.danger && !I.disabled ? "text-error" : "text-neutral-400",
              $ && !I.danger && "text-primary"
            ),
            children: I.icon
          }
        ),
        /* @__PURE__ */ f("span", { className: "flex-1 truncate", children: I.label }),
        I.badge && /* @__PURE__ */ f("span", { className: "text-xs text-neutral-500", children: I.badge })
      ] }), F = O(
        "flex items-center gap-2 w-full rounded-md",
        "transition-colors duration-100",
        Kc[a],
        I.disabled ? "text-neutral-300 cursor-not-allowed opacity-50" : O(
          "cursor-pointer",
          I.danger ? O("text-error", $ ? "bg-error/10" : "hover:bg-error/10") : O(
            "text-neutral-700",
            $ ? "bg-primary/10 text-primary" : "hover:bg-neutral-50"
          )
        )
      ), Q = () => {
        var W;
        I.disabled || ((W = I.onClick) == null || W.call(I), n == null || n(I.value), b());
      };
      return /* @__PURE__ */ k("div", { children: [
        I.dividerBefore && /* @__PURE__ */ f("div", { className: "my-1 border-t border-neutral-200", role: "separator" }),
        I.href && !I.disabled ? /* @__PURE__ */ f(
          "a",
          {
            href: I.href,
            role: "menuitem",
            tabIndex: -1,
            className: F,
            onClick: (W) => {
              var re;
              (re = I.onClick) == null || re.call(I), n == null || n(I.value), b(), I.onClick && W.preventDefault();
            },
            onMouseEnter: () => g(_),
            onMouseLeave: () => g(-1),
            "aria-disabled": I.disabled,
            children: G
          }
        ) : /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            role: "menuitem",
            tabIndex: -1,
            className: O(F, "text-left"),
            onClick: Q,
            onMouseEnter: () => g(_),
            onMouseLeave: () => g(-1),
            disabled: I.disabled,
            "aria-disabled": I.disabled,
            children: G
          }
        )
      ] }, I.value);
    };
    return /* @__PURE__ */ f(
      Oi,
      {
        ref: u,
        trigger: r,
        placement: o,
        offset: i,
        disabled: s,
        open: l,
        onOpenChange: A,
        onKeyDown: j,
        contentClassName: "min-w-[180px] py-1 px-1 max-h-80 overflow-auto",
        className: c,
        ...d,
        children: /* @__PURE__ */ k("div", { ref: x, role: "menu", "aria-orientation": "vertical", children: [
          e && /* @__PURE__ */ k("div", { children: [
            e,
            /* @__PURE__ */ f("div", { className: "my-1 border-t border-neutral-200", role: "separator" })
          ] }),
          t.map((I, _) => q(I, _))
        ] })
      }
    );
  }
);
fr.displayName = "DropdownMenu";
const Jc = ie(
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
    return /* @__PURE__ */ k("div", { className: O("flex flex-col gap-1.5", r && "w-full"), children: [
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
          className: O(
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
      /* @__PURE__ */ k("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ k("div", { children: [
          m && /* @__PURE__ */ f("p", { id: `${p}-error`, className: "text-sm text-error", children: n }),
          !m && t && /* @__PURE__ */ f("p", { id: `${p}-helper`, className: "text-sm text-neutral-500", children: t })
        ] }),
        o && i && /* @__PURE__ */ k("span", { className: "text-sm text-neutral-500", children: [
          g,
          "/",
          i
        ] })
      ] })
    ] });
  }
);
Jc.displayName = "Textarea";
let gn = null;
function Qc() {
  return gn || (gn = Promise.all([
    import("./index-CVUK8S3n.js").then((e) => e.i),
    // prismjs core ships markup/css/clike/javascript — no grammars eagerly imported
    import("./prism-mXDeoVAf.js").then((e) => e.p)
  ]).then(([e, t]) => ({
    Editor: e.default ?? e,
    Prism: t.default ?? t
  }))), gn;
}
const Zc = {
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
}, Qr = /* @__PURE__ */ new Map();
function el(e, t) {
  if (e.languages[t]) return Promise.resolve();
  const n = Zc[t];
  if (!n) return Promise.resolve();
  let r = Qr.get(t);
  return r || (r = n(), Qr.set(t, r)), r;
}
function tl(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const Rt = {
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: 13,
  lineHeight: 1.5
}, nl = ie(
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
    disabled: x = !1,
    className: h,
    id: D,
    ...y
  }, E) => {
    const w = vs(), b = D || `code-editor-${w}`, N = !!n, [A, j] = se(null), [q, I] = se(null), [_, $] = se(!1), G = Z(null);
    fe(() => {
      let T = !0;
      return (async () => {
        const V = await Qc();
        T && (j(V), await el(V.Prism, a), T && I(a));
      })(), () => {
        T = !1;
      };
    }, [a]), fe(
      () => () => {
        G.current && clearTimeout(G.current);
      },
      []
    );
    const F = A == null ? void 0 : A.Prism, Q = !!F && q === a, W = (T) => {
      if (F && Q) {
        const V = F.languages[a] ?? F.languages.javascript;
        if (V) return F.highlight(T, V, a);
      }
      return tl(T);
    }, re = () => {
      var T;
      (T = navigator.clipboard) == null || T.writeText(o), $(!0), G.current && clearTimeout(G.current), G.current = setTimeout(() => $(!1), 2e3);
    }, ee = Math.max(1, o.split(`
`).length), ne = N ? `${b}-error` : t ? `${b}-helper` : void 0, C = l || !A ? (
      // Display-only, or fallback before the editor lib resolves.
      l ? /* @__PURE__ */ f(
        "pre",
        {
          className: "m-0 overflow-auto px-4 py-3",
          style: { ...Rt, minHeight: u },
          children: /* @__PURE__ */ f("code", { dangerouslySetInnerHTML: { __html: W(o) } })
        }
      ) : (
        // Editable fallback: a plain textarea so there is no layout shift.
        /* @__PURE__ */ f(
          "textarea",
          {
            id: b,
            value: o,
            disabled: x,
            placeholder: s,
            spellCheck: !1,
            onChange: (T) => i == null ? void 0 : i(T.target.value),
            className: "m-0 w-full resize-none border-0 bg-transparent px-4 py-3 focus:outline-none",
            style: { ...Rt, minHeight: u }
          }
        )
      )
    ) : /* @__PURE__ */ f(
      A.Editor,
      {
        value: o,
        onValueChange: (T) => i == null ? void 0 : i(T),
        highlight: W,
        padding: { top: 12, right: 16, bottom: 12, left: 16 },
        tabSize: c,
        insertSpaces: d,
        textareaId: b,
        disabled: x,
        placeholder: s,
        style: { ...Rt, minHeight: u },
        textareaClassName: "focus:outline-none"
      }
    );
    return /* @__PURE__ */ k("div", { className: O("flex flex-col gap-1.5", r && "w-full"), children: [
      e && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: b,
          className: "text-sm font-medium text-neutral-700",
          children: e
        }
      ),
      /* @__PURE__ */ k("div", { className: "relative", children: [
        g && /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            onClick: re,
            "aria-label": _ ? "Copied" : "Copy code",
            className: O(
              "absolute right-2 top-2 z-10 rounded-md p-1.5",
              "bg-white/80 text-neutral-500 backdrop-blur",
              "transition-colors hover:bg-neutral-100 hover:text-neutral-700",
              "focus:outline-none focus:ring-2 focus:ring-primary"
            ),
            children: _ ? /* @__PURE__ */ f(dr, { size: 16, className: "text-success" }) : /* @__PURE__ */ f(Hs, { size: 16 })
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            ref: E,
            "aria-invalid": N || void 0,
            "aria-describedby": ne,
            className: O(
              "omnitok-code-editor",
              "overflow-hidden rounded-md border bg-white",
              "transition-colors duration-200",
              !l && !x && "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary",
              N ? "border-error focus-within:border-error focus-within:ring-error" : "border-neutral-300",
              x && "cursor-not-allowed bg-neutral-100 opacity-60",
              h
            ),
            ...y,
            children: /* @__PURE__ */ k("div", { className: "flex", children: [
              p && /* @__PURE__ */ f(
                "div",
                {
                  "aria-hidden": "true",
                  className: "select-none border-r border-neutral-200 bg-neutral-50 py-3 pl-4 pr-3 text-right text-neutral-400",
                  style: Rt,
                  children: Array.from({ length: ee }, (T, V) => /* @__PURE__ */ f("div", { children: V + 1 }, V))
                }
              ),
              /* @__PURE__ */ f("div", { className: "min-w-0 flex-1", children: C })
            ] })
          }
        )
      ] }),
      (N || t || m && !l) && /* @__PURE__ */ k("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ k("div", { children: [
          N && /* @__PURE__ */ f("p", { id: `${b}-error`, className: "text-sm text-error", children: n }),
          !N && t && /* @__PURE__ */ f("p", { id: `${b}-helper`, className: "text-sm text-neutral-500", children: t })
        ] }),
        m && !l && /* @__PURE__ */ k("span", { className: "text-sm text-neutral-500", children: [
          ee,
          " ",
          ee === 1 ? "line" : "lines",
          " · ",
          o.length,
          " chars"
        ] })
      ] })
    ] });
  }
);
nl.displayName = "CodeEditor";
const rl = {
  primary: { checked: "peer-checked:bg-primary peer-checked:border-primary", ring: "peer-focus:ring-primary" },
  accent: { checked: "peer-checked:bg-accent peer-checked:border-accent", ring: "peer-focus:ring-accent" },
  neutral: { checked: "peer-checked:bg-neutral-600 peer-checked:border-neutral-600", ring: "peer-focus:ring-neutral-400" },
  success: { checked: "peer-checked:bg-success peer-checked:border-success", ring: "peer-focus:ring-success" },
  info: { checked: "peer-checked:bg-info peer-checked:border-info", ring: "peer-focus:ring-info" },
  violet: { checked: "peer-checked:bg-violet peer-checked:border-violet", ring: "peer-focus:ring-violet" },
  rose: { checked: "peer-checked:bg-rose peer-checked:border-rose", ring: "peer-focus:ring-rose" },
  teal: { checked: "peer-checked:bg-teal peer-checked:border-teal", ring: "peer-focus:ring-teal" }
}, ol = {
  primary: { checked: "peer-checked:bg-primary", ring: "peer-focus:ring-primary" },
  accent: { checked: "peer-checked:bg-accent", ring: "peer-focus:ring-accent" },
  neutral: { checked: "peer-checked:bg-neutral-600", ring: "peer-focus:ring-neutral-400" },
  success: { checked: "peer-checked:bg-success", ring: "peer-focus:ring-success" },
  info: { checked: "peer-checked:bg-info", ring: "peer-focus:ring-info" },
  violet: { checked: "peer-checked:bg-violet", ring: "peer-focus:ring-violet" },
  rose: { checked: "peer-checked:bg-rose", ring: "peer-focus:ring-rose" },
  teal: { checked: "peer-checked:bg-teal", ring: "peer-focus:ring-teal" }
}, Si = ie(
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
    const m = d || `checkbox-${Math.random().toString(36).slice(2, 9)}`, g = !!n, x = (y) => {
      u == null || u(y), a == null || a(y.target.checked);
    }, h = () => {
      const y = rl[o];
      return /* @__PURE__ */ f(
        "div",
        {
          className: O(
            "w-5 h-5 rounded border-2 transition-colors",
            "flex items-center justify-center",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "[&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100",
            y.ring,
            y.checked,
            g ? "border-error" : "border-neutral-300 peer-hover:border-neutral-400"
          ),
          children: r ? /* @__PURE__ */ f(vc, { className: "w-3 h-3 text-white transition-opacity" }) : /* @__PURE__ */ f(dr, { className: "w-3 h-3 text-white transition-opacity" })
        }
      );
    }, D = () => {
      const y = ol[o];
      return /* @__PURE__ */ f(
        "div",
        {
          className: O(
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
              className: O(
                "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white",
                "shadow-sm transition-transform duration-200"
              )
            }
          )
        }
      );
    };
    return /* @__PURE__ */ k("div", { className: O("flex flex-col gap-1", c), children: [
      /* @__PURE__ */ k(
        "label",
        {
          htmlFor: m,
          className: O(
            "flex items-start gap-3 cursor-pointer",
            s && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ k("div", { className: O("relative flex items-center", i ? "justify-start" : "justify-center"), children: [
              /* @__PURE__ */ f(
                "input",
                {
                  ref: p,
                  type: "checkbox",
                  id: m,
                  disabled: s,
                  className: "peer sr-only",
                  "aria-invalid": g,
                  onChange: x,
                  ...l
                }
              ),
              i ? D() : h()
            ] }),
            (e || t) && /* @__PURE__ */ k("div", { className: "flex flex-col", children: [
              e && /* @__PURE__ */ f("span", { className: "text-sm font-medium text-neutral-700", children: e }),
              t && /* @__PURE__ */ f("span", { className: "text-sm text-neutral-500", children: t })
            ] })
          ]
        }
      ),
      g && /* @__PURE__ */ f("p", { className: O("text-sm text-error", i ? "ml-14" : "ml-8"), children: n })
    ] });
  }
);
Si.displayName = "Checkbox";
const il = ie(
  ({ label: e, description: t, error: n, disabled: r, className: o, id: i, ...a }, s) => {
    const c = i || `radio-${Math.random().toString(36).slice(2, 9)}`, d = !!n;
    return /* @__PURE__ */ k("div", { className: O("flex flex-col gap-1", o), children: [
      /* @__PURE__ */ k(
        "label",
        {
          htmlFor: c,
          className: O(
            "flex items-start gap-3 cursor-pointer",
            r && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ k("div", { className: "relative flex items-center justify-center", children: [
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
                  className: O(
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
            (e || t) && /* @__PURE__ */ k("div", { className: "flex flex-col", children: [
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
il.displayName = "Radio";
const al = {
  default: "bg-white border border-neutral-200 rounded-lg",
  bordered: "bg-white border-2 border-neutral-300 rounded-lg",
  elevated: "bg-white border border-neutral-200 shadow-card rounded-lg"
}, sl = ie(
  ({ children: e, noPadding: t = !1, hoverable: n = !1, variant: r = "default", className: o, ...i }, a) => /* @__PURE__ */ f(
    "div",
    {
      ref: a,
      className: O(
        al[r],
        !t && "p-4",
        n && "transition-shadow transition-colors duration-200 hover:shadow-card-hover hover:border-primary/30 cursor-pointer",
        o
      ),
      ...i,
      children: e
    }
  )
);
sl.displayName = "Card";
const cl = ie(
  ({ children: e, action: t, className: n, ...r }, o) => /* @__PURE__ */ k(
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
        /* @__PURE__ */ f("div", { className: "font-semibold text-lg", children: e }),
        t && /* @__PURE__ */ f("div", { children: t })
      ]
    }
  )
);
cl.displayName = "CardHeader";
const ll = ie(
  ({ children: e, className: t, ...n }, r) => /* @__PURE__ */ f("div", { ref: r, className: O("p-4", t), ...n, children: e })
);
ll.displayName = "CardBody";
const dl = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
  between: "justify-between"
}, pl = ie(
  ({ children: e, align: t = "right", className: n, ...r }, o) => /* @__PURE__ */ f(
    "div",
    {
      ref: o,
      className: O(
        "flex items-center gap-3 px-4 py-3 bg-neutral-50 border-t border-neutral-200",
        dl[t],
        n
      ),
      ...r,
      children: e
    }
  )
);
pl.displayName = "CardFooter";
const ul = {
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
}, fl = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base"
}, ml = {
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
}, gl = ie(
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
      className: O(
        "inline-block rounded-full",
        n === "sm" && "w-2 h-2",
        n === "md" && "w-2.5 h-2.5",
        n === "lg" && "w-3 h-3",
        ml[t],
        i
      ),
      ...a
    }
  ) : /* @__PURE__ */ f(
    "span",
    {
      ref: s,
      className: O(
        "inline-flex items-center font-medium",
        r ? "rounded-full" : "rounded-md",
        ul[t],
        fl[n],
        i
      ),
      ...a,
      children: e
    }
  )
);
gl.displayName = "Badge";
const Zr = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl"
}, vl = {
  xs: "w-1.5 h-1.5 border",
  sm: "w-2 h-2 border",
  md: "w-2.5 h-2.5 border-2",
  lg: "w-3 h-3 border-2",
  xl: "w-4 h-4 border-2"
}, hl = {
  online: "bg-success",
  offline: "bg-neutral-400",
  busy: "bg-error",
  away: "bg-warning"
}, Wn = ie(
  ({ size: e = "md", src: t, alt: n = "", initials: r, status: o, className: i, ...a }, s) => {
    const c = (d) => d ? d.split(" ").map((u) => u[0]).join("").toUpperCase().slice(0, 2) : "?";
    return /* @__PURE__ */ k("div", { ref: s, className: O("relative inline-block", i), children: [
      t ? /* @__PURE__ */ f(
        "img",
        {
          src: t,
          alt: n,
          className: O(
            "rounded-full object-cover",
            Zr[e]
          ),
          ...a
        }
      ) : /* @__PURE__ */ f(
        "div",
        {
          className: O(
            "rounded-full flex items-center justify-center font-medium",
            "bg-primary text-white",
            Zr[e]
          ),
          children: c(r || n)
        }
      ),
      o && /* @__PURE__ */ f(
        "span",
        {
          className: O(
            "absolute bottom-0 right-0 rounded-full border-white",
            vl[e],
            hl[o]
          )
        }
      )
    ] });
  }
);
Wn.displayName = "Avatar";
const bl = {
  info: "bg-info/10 border-info/30 text-info-dark",
  success: "bg-success/10 border-success/30 text-success-dark",
  warning: "bg-warning/10 border-warning/30 text-warning-dark",
  error: "bg-error/10 border-error/30 text-error-dark"
}, xl = {
  info: wi,
  success: yi,
  warning: Ei,
  error: xi
}, yl = ie(
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
    const d = xl[e];
    return /* @__PURE__ */ k(
      "div",
      {
        ref: c,
        role: "alert",
        className: O(
          "flex gap-3 p-4 rounded-lg border",
          bl[e],
          a
        ),
        ...s,
        children: [
          !i && /* @__PURE__ */ f(d, { className: "flex-shrink-0 w-5 h-5 mt-0.5" }),
          /* @__PURE__ */ k("div", { className: "flex-1 min-w-0", children: [
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
yl.displayName = "Alert";
const wl = {
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
    "pagination.itemsPerPage": "Elementos por página",
    // Shell v3 (Sidebar, BrandHeader, Layout)
    "sidebar.expand": "Expandir menú",
    "sidebar.collapse": "Colapsar menú",
    "sidebar.project": "Proyecto",
    "sidebar.chooseProject": "Elegir proyecto",
    "sidebar.changeProject": "Cambiar de proyecto",
    "sidebar.searchProject": "Buscar proyecto…",
    "sidebar.noProjects": "Ningún proyecto coincide",
    "header.toggleMenu": "Mostrar u ocultar el menú",
    "header.poweredBy": "Powered by",
    "layout.closeMenu": "Cerrar menú"
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
    "pagination.itemsPerPage": "Items per page",
    // Shell v3 (Sidebar, BrandHeader, Layout)
    "sidebar.expand": "Expand menu",
    "sidebar.collapse": "Collapse menu",
    "sidebar.project": "Project",
    "sidebar.chooseProject": "Choose a project",
    "sidebar.changeProject": "Change project",
    "sidebar.searchProject": "Search project…",
    "sidebar.noProjects": "No project matches",
    "header.toggleMenu": "Show or hide the menu",
    "header.poweredBy": "Powered by",
    "layout.closeMenu": "Close menu"
  },
  pt: {
    // LoginPage
    "login.title": "Entrar",
    "login.subtitle": "Informe suas credenciais para continuar",
    "login.emailLabel": "E-mail",
    "login.emailPlaceholder": "voce@email.com",
    "login.passwordLabel": "Senha",
    "login.passwordPlaceholder": "••••••••",
    "login.rememberMe": "Lembrar de mim",
    "login.forgotPassword": "Esqueceu sua senha?",
    "login.submit": "Entrar",
    "login.split.heroTitle": "Bem-vindo de volta",
    "login.split.heroDescription": "Acesse seu painel de administração e gerencie sua plataforma com eficiência.",
    "login.split.copyright": "© {year} Omnitok. Todos os direitos reservados.",
    // Pagination
    "pagination.ariaLabel": "Paginação",
    "pagination.firstPage": "Primeira página",
    "pagination.lastPage": "Última página",
    "pagination.previousPage": "Página anterior",
    "pagination.nextPage": "Próxima página",
    "pagination.info": "{start}-{end} de {total}",
    "pagination.itemsPerPage": "Itens por página",
    // Shell v3 (Sidebar, BrandHeader, Layout)
    "sidebar.expand": "Expandir menu",
    "sidebar.collapse": "Recolher menu",
    "sidebar.project": "Projeto",
    "sidebar.chooseProject": "Escolher projeto",
    "sidebar.changeProject": "Trocar de projeto",
    "sidebar.searchProject": "Buscar projeto…",
    "sidebar.noProjects": "Nenhum projeto corresponde",
    "header.toggleMenu": "Mostrar ou ocultar o menu",
    "header.poweredBy": "Powered by",
    "layout.closeMenu": "Fechar menu"
  }
}, El = /\{(\w+)\}/g;
function Nl(e, t) {
  if (!t) return e;
  const n = { ...e };
  for (const [r, o] of Object.entries(t))
    n[r] = { ...n[r] ?? {}, ...o };
  return n;
}
function Qt({
  language: e,
  messagesByLanguage: t,
  fallbackLanguage: n = "en"
}) {
  const r = Nl(wl, t);
  return {
    language: e,
    messagesByLanguage: r,
    t: (i, a) => {
      const s = r[e] ?? {}, c = r[n] ?? {}, d = s[i] ?? c[i] ?? i;
      return a ? d.replace(El, (u, l) => {
        const p = String(l), m = a[p];
        return m == null ? u : String(m);
      }) : d;
    }
  };
}
const Dl = Qt({ language: "es" }), ki = lr(Dl);
function Fv({
  children: e,
  language: t,
  messages: n,
  fallbackLanguage: r = "es"
}) {
  const o = $e(
    () => Qt({ language: t, messagesByLanguage: n, fallbackLanguage: r }),
    [t, n, r]
  );
  return /* @__PURE__ */ f(ki.Provider, { value: o, children: e });
}
function nt() {
  return Nt(ki);
}
const Ol = "flex w-full items-center gap-2.5 rounded-lg px-3 text-left text-[12px] leading-tight text-[var(--omni-sb-text)] transition-colors duration-150 hover:bg-white/[.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40", Sl = "bg-[#FF177B20] text-white font-semibold shadow-[inset_3px_0_0_#FF177B]", kl = "relative flex h-4 w-4 flex-shrink-0 items-center justify-center text-[var(--omni-sb-muted)] [&>svg]:h-4 [&>svg]:w-4", Il = "text-[#FF6AAA]";
function Cl({
  item: e,
  collapsed: t,
  active: n,
  expanded: r,
  hasChildren: o,
  onPress: i,
  onAnchorClick: a
}) {
  const s = O(
    Ol,
    t ? "min-h-[38px] justify-center px-0" : "min-h-[36px] py-1.5",
    n && Sl,
    o && !t && "font-semibold"
  ), c = /* @__PURE__ */ k(Re, { children: [
    /* @__PURE__ */ f("span", { className: O(kl, n && Il), children: e.icon ?? /* @__PURE__ */ f("span", { className: "h-1.5 w-1.5 rounded-full bg-current opacity-60" }) }),
    !t && /* @__PURE__ */ k(Re, { children: [
      /* @__PURE__ */ f("span", { className: "min-w-0 flex-1 truncate", children: e.label }),
      e.badge != null && e.badge !== "" && /* @__PURE__ */ f("span", { className: "rounded-full bg-[var(--omni-pink)] px-1.5 py-px text-[10px] font-bold leading-4 text-white", children: e.badge }),
      e.tag && /* @__PURE__ */ f("span", { className: "rounded border border-white/20 px-1 text-[9px] font-semibold uppercase tracking-[.08em] text-[var(--omni-sb-muted)]", children: e.tag }),
      n && !o && /* @__PURE__ */ f("span", { "aria-hidden": "true", className: "h-1 w-1 flex-shrink-0 rounded-full bg-[var(--omni-pink)]" }),
      o && /* @__PURE__ */ f(
        ut,
        {
          "aria-hidden": "true",
          className: O("h-3.5 w-3.5 text-[var(--omni-sb-muted)] transition-transform", r && "rotate-180")
        }
      )
    ] }),
    t && o && /* @__PURE__ */ f(Jt, { "aria-hidden": "true", className: "absolute right-1.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 text-white/50" })
  ] }), d = {
    id: e.elementId,
    className: O(s, t && "relative"),
    title: t ? e.label : void 0,
    "aria-current": n && !o ? "page" : void 0
  };
  return e.href && !o ? /* @__PURE__ */ f("a", { href: e.href, onClick: a, ...d, children: c }) : /* @__PURE__ */ f("button", { type: "button", onClick: i, "aria-expanded": o ? r : void 0, ...d, children: c });
}
function qn({ item: e, collapsed: t, activeId: n, isExpanded: r, toggle: o, onItemClick: i, onCollapsedChange: a, level: s }) {
  const c = !!e.children && e.children.length > 0, d = e.active || e.id === n, u = c && r(e), l = (g) => {
    var h;
    g.ctrlKey || g.metaKey || g.shiftKey || g.button !== 0 || (g.preventDefault(), i == null || i(e), (h = e.onClick) == null || h.call(e));
  }, p = () => {
    var g, x;
    if (c) {
      t ? (a == null || a(!1), u || o(e)) : o(e), i == null || i(e), (g = e.onClick) == null || g.call(e);
      return;
    }
    i == null || i(e), (x = e.onClick) == null || x.call(e);
  }, m = c && u && !t && /* @__PURE__ */ f("div", { className: O("mt-0.5 space-y-px", e.kind === "section" ? "ml-5 border-l border-white/[.11] pl-1.5" : "ml-4"), children: e.children.map((g) => /* @__PURE__ */ f(
    qn,
    {
      item: g,
      collapsed: t,
      activeId: n,
      isExpanded: r,
      toggle: o,
      onItemClick: i,
      onCollapsedChange: a,
      level: s + 1
    },
    g.id
  )) });
  return e.kind === "section" ? /* @__PURE__ */ k("div", { children: [
    e.dividerBefore && /* @__PURE__ */ f("div", { className: "my-2 border-t border-white/[.11]", role: "separator" }),
    t ? /* @__PURE__ */ f("div", { className: "mx-1.5 my-2 border-t border-white/[.11]", role: "separator", "aria-label": e.label }) : /* @__PURE__ */ k("div", { className: "mx-2.5 mb-1 mt-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[.1em] text-[var(--omni-sb-muted)]", children: [
      /* @__PURE__ */ f("span", { className: "truncate", children: e.label }),
      e.badge != null && e.badge !== "" && /* @__PURE__ */ k("span", { className: "font-medium", children: [
        "· ",
        e.badge
      ] })
    ] }),
    c && /* @__PURE__ */ f("div", { className: O("space-y-px", !t && "ml-5 border-l border-white/[.11] pl-1.5"), children: e.children.map((g) => /* @__PURE__ */ f(
      qn,
      {
        item: g,
        collapsed: t,
        activeId: n,
        isExpanded: r,
        toggle: o,
        onItemClick: i,
        onCollapsedChange: a,
        level: s + 1
      },
      g.id
    )) })
  ] }) : /* @__PURE__ */ k("div", { children: [
    e.dividerBefore && /* @__PURE__ */ f("div", { className: "my-2 border-t border-white/[.11]", role: "separator" }),
    /* @__PURE__ */ f(
      Cl,
      {
        item: e,
        collapsed: t,
        active: d,
        expanded: u,
        hasChildren: c,
        onPress: p,
        onAnchorClick: l
      }
    ),
    m
  ] });
}
function eo({ selector: e, collapsed: t }) {
  const { t: n } = nt(), { active: r, options: o, onSelect: i } = e, a = o.length > 1 || o.length === 1 && r == null, [s, c] = se(!1), [d, u] = se(""), [l, p] = se(null), m = Z(null), g = Z(null), x = e.searchThreshold ?? 8, h = o.length >= x, D = J(() => {
    var A;
    const N = (A = m.current) == null ? void 0 : A.getBoundingClientRect();
    N && p(t ? { left: N.right + 10, top: N.top, width: 250 } : { left: N.left, top: N.bottom + 6, width: Math.max(N.width, 230) });
  }, [t]);
  vi(() => {
    s && D();
  }, [s, D]), fe(() => {
    if (!s) return;
    const N = (j) => {
      var q;
      j.key === "Escape" && (c(!1), (q = m.current) == null || q.focus());
    }, A = (j) => {
      var I, _;
      const q = j.target;
      (I = g.current) != null && I.contains(q) || (_ = m.current) != null && _.contains(q) || c(!1);
    };
    return document.addEventListener("keydown", N), document.addEventListener("mousedown", A), window.addEventListener("resize", D), () => {
      document.removeEventListener("keydown", N), document.removeEventListener("mousedown", A), window.removeEventListener("resize", D);
    };
  }, [s, D]), fe(() => {
    s || u("");
  }, [s]);
  const y = $e(() => {
    const N = d.trim().toLowerCase();
    return N ? o.filter((A) => A.label.toLowerCase().includes(N)) : o;
  }, [o, d]), E = ((r == null ? void 0 : r.initial) ?? (r == null ? void 0 : r.label) ?? "?").trim().charAt(0).toUpperCase(), w = e.caption ?? n("sidebar.project"), b = (N) => {
    N.disabled || (c(!1), i == null || i(N));
  };
  return /* @__PURE__ */ k("div", { className: O(t ? "my-2" : "mb-1"), children: [
    !t && /* @__PURE__ */ k("div", { className: "mx-2.5 mb-1.5 mt-1 text-[11px] font-semibold uppercase tracking-[.1em] text-[var(--omni-sb-muted)]", children: [
      w,
      o.length > 1 && /* @__PURE__ */ k("span", { className: "font-medium", children: [
        " · ",
        o.length
      ] })
    ] }),
    /* @__PURE__ */ k(
      "button",
      {
        ref: m,
        type: "button",
        disabled: !a,
        "aria-haspopup": "listbox",
        "aria-expanded": s,
        "aria-label": t ? `${w}: ${(r == null ? void 0 : r.label) ?? ""}` : void 0,
        title: t ? r == null ? void 0 : r.label : void 0,
        onClick: () => {
          if (a) {
            if (t) {
              c((N) => !N);
              return;
            }
            c((N) => !N);
          }
        },
        className: O(
          "flex w-full items-center gap-2.5 rounded-[10px] border border-white/[.11] bg-white/[.04] text-left transition-colors",
          t ? "mx-auto h-10 w-10 justify-center p-0" : "px-2.5 py-2",
          a && "hover:border-white/30 hover:bg-white/[.08]",
          s && "border-white/40 bg-white/[.1]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        ),
        children: [
          /* @__PURE__ */ f(
            "span",
            {
              "aria-hidden": "true",
              className: "grid h-7 w-7 flex-shrink-0 place-items-center rounded-md bg-white font-display text-[17px] font-extrabold leading-none text-[#254D9D]",
              children: E
            }
          ),
          !t && /* @__PURE__ */ k(Re, { children: [
            /* @__PURE__ */ k("span", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ f("span", { className: "block truncate text-[12px] font-semibold leading-tight text-white", children: (r == null ? void 0 : r.label) ?? n("sidebar.chooseProject") }),
              (r == null ? void 0 : r.meta) && /* @__PURE__ */ f("span", { className: "block truncate text-[11px] leading-tight text-[var(--omni-sb-muted)]", children: r.meta })
            ] }),
            a && /* @__PURE__ */ f(
              ut,
              {
                "aria-hidden": "true",
                className: O("h-4 w-4 flex-shrink-0 text-[var(--omni-sb-muted)] transition-transform", s && "rotate-180")
              }
            )
          ] })
        ]
      }
    ),
    s && l && ws(
      /* @__PURE__ */ k(
        "div",
        {
          ref: g,
          role: "listbox",
          "aria-label": e.menuTitle ?? n("sidebar.changeProject"),
          "data-dropdown-surface": "list",
          style: { position: "fixed", left: l.left, top: l.top, width: l.width },
          className: "z-[1000] max-h-[60vh] overflow-y-auto rounded-xl border border-[var(--omni-line)] bg-white p-1.5 font-sans text-[12px] text-[var(--omni-text)] shadow-[var(--omni-shadow-menu)]",
          children: [
            /* @__PURE__ */ f("div", { className: "px-2.5 pb-1 pt-1.5 text-[10px] font-semibold uppercase tracking-[.1em] text-[var(--omni-muted)]", children: e.menuTitle ?? n("sidebar.changeProject") }),
            h && /* @__PURE__ */ k("label", { className: "mx-1 mb-1.5 flex items-center gap-1.5 rounded-lg border border-[var(--omni-line)] px-2 py-1.5 text-[var(--omni-muted)] focus-within:border-[var(--omni-accent)]", children: [
              /* @__PURE__ */ f(ur, { "aria-hidden": "true", className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ f(
                "input",
                {
                  autoFocus: !0,
                  value: d,
                  onChange: (N) => u(N.target.value),
                  placeholder: e.searchPlaceholder ?? n("sidebar.searchProject"),
                  className: "min-w-0 flex-1 bg-transparent text-[12px] text-[var(--omni-text)] outline-none placeholder:text-[var(--omni-muted)]"
                }
              )
            ] }),
            y.length === 0 && /* @__PURE__ */ f("div", { className: "px-2.5 py-2 text-[var(--omni-muted)]", children: e.emptyLabel ?? n("sidebar.noProjects") }),
            y.map((N) => {
              const A = N.id === (r == null ? void 0 : r.id);
              return /* @__PURE__ */ k(
                "button",
                {
                  type: "button",
                  role: "option",
                  "aria-selected": A,
                  disabled: N.disabled,
                  onClick: () => b(N),
                  className: O(
                    "flex w-full items-center gap-2 rounded-[7px] px-2.5 py-2 text-left leading-tight",
                    A ? "bg-[var(--omni-active)] font-semibold text-[var(--omni-accent)]" : "hover:bg-[var(--omni-canvas)]",
                    N.disabled && "cursor-default text-[var(--omni-muted)] hover:bg-transparent"
                  ),
                  children: [
                    /* @__PURE__ */ f("span", { className: "flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center", children: A && /* @__PURE__ */ f(dr, { "aria-hidden": "true", className: "h-3.5 w-3.5" }) }),
                    /* @__PURE__ */ f("span", { className: "min-w-0 flex-1 truncate", children: N.label }),
                    N.meta && /* @__PURE__ */ f("span", { className: "flex-shrink-0 text-[11px] text-[var(--omni-muted)]", children: N.meta })
                  ]
                },
                N.id
              );
            })
          ]
        }
      ),
      document.body
    )
  ] });
}
function Un(e, t, n) {
  let r = !1;
  for (const o of e)
    o.children && o.children.length > 0 ? Un(o.children, t, n) && (n.push(o.id), r = !0) : (o.id === t || o.active) && (r = !0);
  return r;
}
const Ii = ie(
  ({
    items: e,
    logo: t,
    logoCollapsed: n,
    systemName: r,
    footer: o,
    footerCollapsed: i,
    collapsed: a = !1,
    onCollapsedChange: s,
    collapsible: c = !1,
    activeId: d,
    onItemClick: u,
    projectSelector: l,
    expandedIds: p,
    onExpandedChange: m,
    frame: g = "framed",
    className: x,
    ...h
  }, D) => {
    const { t: y } = nt(), E = p !== void 0, [w, b] = se(() => {
      const _ = [];
      return Un(e, d, _), new Set(_);
    });
    fe(() => {
      if (E) return;
      const _ = [];
      Un(e, d, _), _.length !== 0 && b(($) => {
        const G = new Set($);
        return _.forEach((F) => G.add(F)), G;
      });
    }, [e, d, E]);
    const N = J(
      (_) => E ? p.includes(_.id) : w.has(_.id),
      [E, p, w]
    ), A = J(
      (_) => {
        const $ = !N(_);
        if (E) {
          m == null || m(_.id, $);
          return;
        }
        b((G) => {
          const F = new Set(G);
          return $ ? F.add(_.id) : F.delete(_.id), F;
        }), m == null || m(_.id, $);
      },
      [E, N, m]
    ), j = t, q = n ?? t;
    return /* @__PURE__ */ k(
      "aside",
      {
        ref: D,
        "data-omni-sidebar": "",
        "data-collapsed": a ? "" : void 0,
        className: O(
          "flex flex-shrink-0 flex-col overflow-hidden bg-[var(--omni-navy)] font-sans text-[var(--omni-sb-text)]",
          "transition-[width] duration-200",
          g === "framed" ? "m-3 h-[calc(100%-24px)] rounded-[14px] border border-[#302453] shadow-[0_2px_8px_#1A124008]" : "h-full border-r border-[#302453]",
          a ? "w-16" : "w-[250px]",
          x
        ),
        ...h,
        children: [
          (j || c) && /* @__PURE__ */ f("div", { className: O("flex items-center border-b border-white/[.11] px-3", a ? "h-14 justify-center px-2" : "h-14"), children: a ? /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: () => s == null ? void 0 : s(!1),
              className: "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/10",
              "aria-label": y("sidebar.expand"),
              children: q ?? /* @__PURE__ */ f(Jt, { className: "h-4 w-4", "aria-hidden": "true" })
            }
          ) : /* @__PURE__ */ k(Re, { children: [
            /* @__PURE__ */ k("div", { className: "flex min-w-0 flex-1 flex-col", children: [
              /* @__PURE__ */ f("div", { className: "flex items-center justify-center", children: j }),
              r && /* @__PURE__ */ f("span", { className: "mt-0.5 text-center text-[10px] uppercase leading-tight tracking-wider text-white/50", children: r })
            ] }),
            c && /* @__PURE__ */ f(
              "button",
              {
                type: "button",
                onClick: () => s == null ? void 0 : s(!0),
                className: "ml-2 flex-shrink-0 rounded-lg p-1.5 transition-colors hover:bg-white/10",
                "aria-label": y("sidebar.collapse"),
                children: /* @__PURE__ */ f(yc, { className: "h-4 w-4", "aria-hidden": "true" })
              }
            )
          ] }) }),
          /* @__PURE__ */ k("nav", { className: O("scrollbar-thin flex-1 overflow-y-auto overflow-x-hidden", a ? "px-2 py-2" : "px-2.5 py-2.5"), children: [
            l && !e.some((_) => _.kind === "project-selector") && /* @__PURE__ */ f(eo, { selector: l, collapsed: a }),
            e.map(
              (_) => _.kind === "project-selector" ? l ? /* @__PURE__ */ f(eo, { selector: l, collapsed: a }, _.id) : null : /* @__PURE__ */ f(
                qn,
                {
                  item: _,
                  collapsed: a,
                  activeId: d,
                  isExpanded: N,
                  toggle: A,
                  onItemClick: u,
                  onCollapsedChange: s,
                  level: 0
                },
                _.id
              )
            )
          ] }),
          a ? i && /* @__PURE__ */ f("div", { className: "border-t border-white/[.11] p-2", children: i }) : o && /* @__PURE__ */ f("div", { className: "border-t border-white/[.11] p-2.5", children: o })
        ]
      }
    );
  }
);
Ii.displayName = "Sidebar";
const Ci = ie(
  ({ items: e, count: t, searchValue: n, searchPlaceholder: r, filterLabel: o, onSearchChange: i, onFilterChange: a }, s) => /* @__PURE__ */ f(
    fr,
    {
      ref: s,
      offset: 14,
      card: /* @__PURE__ */ k("div", { className: "flex flex-col gap-4 p-4", children: [
        /* @__PURE__ */ f(
          Ft,
          {
            size: "sm",
            leftIcon: /* @__PURE__ */ f(ur, { size: 14 }),
            value: n,
            onChange: (c) => i == null ? void 0 : i(c.target.value),
            placeholder: r ?? "Search notifications..."
          }
        ),
        /* @__PURE__ */ f(Si, { label: o ?? "Unread only", onCheckedChange: a })
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
            /* @__PURE__ */ f(Ts, { className: "w-5 h-5 text-neutral-600" }),
            t !== void 0 && t > 0 && /* @__PURE__ */ f("span", { className: "absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-4 h-4 text-xs font-medium text-white bg-accent rounded-full flex items-center justify-center", children: t > 9 ? "9+" : t })
          ]
        }
      )
    }
  )
);
Ci.displayName = "NotificationMenu";
const _i = ie(
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
  }, x) => /* @__PURE__ */ k(
    "header",
    {
      ref: x,
      className: O(
        "flex items-center justify-between h-16 px-6 bg-white border-b border-neutral-200",
        m
      ),
      ...g,
      children: [
        /* @__PURE__ */ k("div", { className: "flex items-center gap-4", children: [
          l && /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: u,
              className: "p-2 rounded-lg hover:bg-neutral-100 lg:hidden",
              "aria-label": "Toggle menu",
              children: /* @__PURE__ */ f(pr, { className: "w-5 h-5 text-neutral-600" })
            }
          ),
          /* @__PURE__ */ f("div", { className: "flex flex-col", children: e && /* @__PURE__ */ f("h1", { className: "text-lg font-semibold text-neutral-900", children: e }) })
        ] }),
        /* @__PURE__ */ k("div", { className: "flex items-center gap-4", children: [
          n && /* @__PURE__ */ k("div", { className: "relative hidden md:block", children: [
            /* @__PURE__ */ f(ur, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" }),
            /* @__PURE__ */ f(
              "input",
              {
                type: "search",
                placeholder: t,
                value: r,
                onChange: (h) => o == null ? void 0 : o(h.target.value),
                className: O(
                  "w-64 pl-10 pr-4 py-2 text-sm rounded-lg",
                  "bg-neutral-100 border-none",
                  "placeholder:text-neutral-400",
                  "focus:outline-none focus:ring-2 focus:ring-primary"
                )
              }
            )
          ] }),
          p,
          i && /* @__PURE__ */ f(Ci, { ...a }),
          s && /* @__PURE__ */ f(
            fr,
            {
              className: "-mr-2",
              offset: 16,
              card: /* @__PURE__ */ k("div", { className: "px-4 py-2 flex items-center gap-4", children: [
                /* @__PURE__ */ f(Wn, { src: s.avatar, alt: s.name, size: "xl" }),
                /* @__PURE__ */ k("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ f("span", { className: "text-md font-medium text-neutral-900", children: s.name }),
                  s.email && /* @__PURE__ */ f("span", { className: "text-xs text-neutral-500", children: s.email }),
                  s.role && /* @__PURE__ */ f("span", { className: "text-xs text-neutral-500", children: s.role })
                ] })
              ] }),
              items: c ?? [],
              trigger: /* @__PURE__ */ f("div", { className: "pr-2 flex items-center", children: /* @__PURE__ */ f(
                Wn,
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
_i.displayName = "Header";
const Ai = ie(
  ({ brand: e, brandText: t, label: n, poweredBy: r = !0, poweredByCaption: o, actions: i, onMenuToggle: a, menuLabel: s, className: c, ...d }, u) => {
    const { t: l } = nt(), p = e != null || t != null && t !== "";
    return /* @__PURE__ */ k(
      "header",
      {
        ref: u,
        "data-omni-brand-header": "",
        className: O(
          "flex h-[42px] flex-shrink-0 items-center gap-3.5 border-b border-[#362B59] bg-[var(--omni-navy)] px-4 font-sans text-[#E4DFF3]",
          c
        ),
        ...d,
        children: [
          a && /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: a,
              "aria-label": s ?? l("header.toggleMenu"),
              className: "-ml-1.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-md text-[#BEB6D8] transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
              children: /* @__PURE__ */ f(pr, { className: "h-[18px] w-[18px]", "aria-hidden": "true" })
            }
          ),
          p && /* @__PURE__ */ f("div", { "data-omni-brand": "", className: "flex min-w-0 flex-shrink-0 items-center [&_img]:max-h-6 [&_img]:w-auto [&_img]:max-w-[160px]", children: e ?? /* @__PURE__ */ f("span", { className: "truncate font-display text-[15px] font-bold tracking-[-.01em] text-white", children: t }) }),
          n != null && n !== "" && /* @__PURE__ */ f(
            "div",
            {
              "data-omni-brand-label": "",
              className: O(
                "hidden min-w-0 truncate text-[11px] uppercase tracking-[.06em] text-[#C9C4E6] md:block",
                p && "border-l border-white/[.15] pl-3.5"
              ),
              children: n
            }
          ),
          /* @__PURE__ */ k("div", { className: "ml-auto flex flex-shrink-0 items-center gap-3", children: [
            i,
            r && /* @__PURE__ */ k("div", { "data-omni-powered-by": "", className: "flex items-center gap-2 whitespace-nowrap", children: [
              /* @__PURE__ */ f("span", { className: "hidden text-[9px] font-medium uppercase tracking-[.12em] text-[#C9C4E6] sm:inline", children: o ?? l("header.poweredBy") }),
              /* @__PURE__ */ f("span", { className: "rounded-[5px] bg-white px-2 py-px font-display text-[14px] font-extrabold leading-5 tracking-[-.02em] text-[var(--omni-navy)]", children: "omnitok" })
            ] })
          ] })
        ]
      }
    );
  }
);
Ai.displayName = "BrandHeader";
const to = "(min-width: 1024px)";
function _l() {
  const [e, t] = se(
    () => typeof window > "u" || typeof window.matchMedia != "function" ? !0 : window.matchMedia(to).matches
  );
  return fe(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const n = window.matchMedia(to), r = () => t(n.matches);
    return n.addEventListener("change", r), () => n.removeEventListener("change", r);
  }, []), e;
}
const Al = ie(
  ({
    children: e,
    sidebar: t,
    sidebarItems: n = [],
    collapsibleSidebar: r = !0,
    logo: o,
    logoCollapsed: i,
    systemName: a,
    sidebarFooter: s,
    sidebarFooterCollapsed: c,
    activeSidebarId: d,
    onSidebarItemClick: u,
    projectSelector: l,
    sidebarExpandedIds: p,
    onSidebarExpandedChange: m,
    sidebarCollapsed: g,
    onSidebarCollapsedChange: x,
    brandHeader: h,
    headerTitle: D,
    user: y,
    userMenuItems: E,
    onUserClick: w,
    showNotifications: b = !0,
    notificationMenu: N,
    showSearch: A = !0,
    searchValue: j,
    onSearchChange: q,
    headerActions: I,
    header: _,
    hideSidebar: $ = !1,
    hideHeader: G = !1,
    rightPanel: F,
    rightPanelWidth: Q = "360px",
    mainClassName: W,
    className: re,
    ...ee
  }, ne) => {
    const { t: C } = nt(), [T, V] = se(!1), z = g ?? T, B = J(
      (Se) => {
        g === void 0 && V(Se), x == null || x(Se);
      },
      [g, x]
    ), [Y, U] = se(!1), K = _l(), R = !!t, S = !!_, M = !!h;
    fe(() => {
      K && U(!1);
    }, [K]);
    const te = () => {
      K ? B(!z) : U((Se) => !Se);
    }, P = /* @__PURE__ */ f(
      Ii,
      {
        items: n,
        logo: M ? void 0 : o,
        logoCollapsed: M ? void 0 : i,
        systemName: M ? void 0 : a,
        footer: s,
        footerCollapsed: c,
        collapsible: M ? !1 : r,
        collapsed: K ? z : !1,
        onCollapsedChange: B,
        activeId: d,
        projectSelector: l,
        expandedIds: p,
        onExpandedChange: m,
        frame: M ? "framed" : "flush",
        onItemClick: (Se) => {
          u == null || u(Se), U(!1);
        }
      }
    ), le = /* @__PURE__ */ k("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
      /* @__PURE__ */ f(
        "main",
        {
          "data-omni-main": "",
          className: O("flex-1 overflow-y-auto", W ?? "p-6", F && "hidden md:block"),
          children: e
        }
      ),
      F && /* @__PURE__ */ f(
        "aside",
        {
          className: "w-full flex-shrink-0 overflow-y-auto border-l border-neutral-200 bg-white md:w-[var(--panel-width)]",
          style: { "--panel-width": Q },
          children: F
        }
      )
    ] });
    return M ? /* @__PURE__ */ k(
      "div",
      {
        ref: ne,
        "data-omni-shell": "v3",
        className: O("flex h-screen flex-col bg-[var(--omni-canvas)] font-sans text-[var(--omni-text)]", re),
        ...ee,
        children: [
          !G && (S ? _ : /* @__PURE__ */ f(Ai, { ...h, onMenuToggle: $ ? void 0 : te })),
          /* @__PURE__ */ k("div", { className: "flex min-h-0 flex-1", children: [
            !$ && /* @__PURE__ */ k(Re, { children: [
              !R && Y && /* @__PURE__ */ f(
                "button",
                {
                  type: "button",
                  "aria-label": C("layout.closeMenu"),
                  className: "fixed inset-0 z-40 bg-black/50 lg:hidden",
                  onClick: () => U(!1)
                }
              ),
              /* @__PURE__ */ f(
                "div",
                {
                  className: O(
                    "z-50 flex-shrink-0 transition-transform duration-300 lg:static lg:z-auto lg:h-full lg:translate-x-0 lg:transform-none",
                    "fixed bottom-0 left-0 top-[42px]",
                    !R && Y ? "translate-x-0" : "-translate-x-full",
                    R && "translate-x-0"
                  ),
                  children: R ? t : P
                }
              )
            ] }),
            /* @__PURE__ */ f("div", { className: "flex min-w-0 flex-1 flex-col", children: le })
          ] })
        ]
      }
    ) : /* @__PURE__ */ k("div", { ref: ne, className: O("flex h-screen bg-neutral-50", re), ...ee, children: [
      !$ && /* @__PURE__ */ k(Re, { children: [
        !R && Y && /* @__PURE__ */ f("div", { className: "fixed inset-0 z-40 bg-black/50 lg:hidden", onClick: () => U(!1) }),
        /* @__PURE__ */ f(
          "div",
          {
            className: O(
              "fixed inset-y-0 left-0 z-50 lg:static lg:z-auto",
              "transform transition-transform duration-300 lg:transform-none",
              !R && Y ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
              R && "translate-x-0"
            ),
            children: R ? t : P
          }
        )
      ] }),
      !$ && G && !S && /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: () => U(!Y),
          className: "fixed left-4 top-4 z-50 rounded-lg border border-neutral-200 bg-white p-2 shadow-md lg:hidden",
          "aria-label": C("header.toggleMenu"),
          children: /* @__PURE__ */ f(pr, { className: "h-5 w-5 text-neutral-600" })
        }
      ),
      /* @__PURE__ */ k("div", { className: "flex min-w-0 flex-1 flex-col", children: [
        !G && (S ? _ : /* @__PURE__ */ f(
          _i,
          {
            title: D,
            showSearch: A,
            searchValue: j,
            onSearchChange: q,
            showNotifications: b,
            notificationMenu: N,
            user: y,
            userMenuItems: E,
            onUserClick: w,
            showMenuToggle: !$,
            onMenuToggle: () => U(!Y),
            actions: I
          }
        )),
        le
      ] })
    ] });
  }
);
Al.displayName = "Layout";
const Pl = ie(
  ({
    items: e,
    showHomeIcon: t = !1,
    separator: n,
    maxItems: r,
    className: o,
    ...i
  }, a) => {
    const s = () => n || /* @__PURE__ */ f(Jt, { className: "w-4 h-4 text-neutral-400 mx-2" }), c = (l, p, m) => {
      const g = /* @__PURE__ */ k(Re, { children: [
        p === 0 && t && /* @__PURE__ */ f(oc, { className: "w-4 h-4 mr-1" }),
        l.icon && /* @__PURE__ */ f("span", { className: "mr-1", children: l.icon }),
        l.label
      ] }), x = O(
        "inline-flex items-center text-sm",
        m ? "font-medium text-neutral-900" : "text-neutral-500 hover:text-neutral-700 transition-colors"
      );
      return l.href && !m ? /* @__PURE__ */ f("a", { href: l.href, className: x, children: g }) : /* @__PURE__ */ f("span", { className: x, children: g });
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
      return /* @__PURE__ */ k("li", { className: "inline-flex items-center", children: [
        c(l, p, m),
        !m && s()
      ] }, p);
    }) }) });
  }
);
Pl.displayName = "Breadcrumb";
const Rl = ie(
  ({ onClose: e, title: t, description: n, children: r, footer: o, className: i, ...a }, s) => /* @__PURE__ */ k(
    "div",
    {
      ref: s,
      className: O("flex flex-col h-full animate-slide-in-right", i),
      ...a,
      children: [
        /* @__PURE__ */ k("div", { className: "flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark flex-shrink-0", children: [
          /* @__PURE__ */ k("div", { className: "min-w-0 flex-1", children: [
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
Rl.displayName = "SidePanel";
function Tl({
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
  const x = (w, b) => typeof n == "function" ? n(w) : String(w[n] ?? b), h = (w, b, N) => b.render ? b.render(w, N) : b.accessor ? String(w[b.accessor] ?? "") : "", D = (w) => {
    if (!w.sortable || !i) return;
    let b = "asc";
    r === w.key && (o === "asc" ? b = "desc" : o === "desc" && (b = null)), i(w.key, b);
  }, y = (w) => {
    if (!w.sortable) return null;
    const b = r === w.key, N = O(
      "w-4 h-4 ml-1",
      b ? "text-white" : "text-white/60"
    );
    return b && o === "asc" ? /* @__PURE__ */ f(Ps, { className: N }) : b && o === "desc" ? /* @__PURE__ */ f(Is, { className: N }) : /* @__PURE__ */ f(_s, { className: N });
  }, E = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  return /* @__PURE__ */ f("div", { className: "overflow-x-auto", children: /* @__PURE__ */ k(
    "table",
    {
      ref: g,
      className: O("w-full border-collapse", p),
      ...m,
      children: [
        /* @__PURE__ */ f("thead", { className: "bg-primary text-white", children: /* @__PURE__ */ f("tr", { children: e.map((w) => /* @__PURE__ */ f(
          "th",
          {
            className: O(
              "font-semibold text-white text-sm",
              l ? "px-3 py-2" : "px-4 py-3",
              E[w.align || "left"],
              w.sortable && "cursor-pointer select-none hover:bg-primary-dark"
            ),
            style: { width: w.width },
            onClick: () => D(w),
            children: /* @__PURE__ */ k("div", { className: O(
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
            children: /* @__PURE__ */ k("div", { className: "flex items-center justify-center gap-2", children: [
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
            className: O(
              "transition-colors",
              d && b % 2 === 1 && "bg-neutral-50",
              u && "hover:bg-neutral-50",
              a && "cursor-pointer"
            ),
            onClick: () => a == null ? void 0 : a(w, b),
            children: e.map((N) => /* @__PURE__ */ f(
              "td",
              {
                className: O(
                  "text-neutral-700 text-sm",
                  l ? "px-3 py-2" : "px-4 py-3",
                  E[N.align || "left"]
                ),
                children: h(w, N, b)
              },
              N.key
            ))
          },
          x(w, b)
        )) })
      ]
    }
  ) });
}
const Vv = ie(Tl), Pi = lr(null), Ml = {
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
}, jl = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg"
}, $l = ie(
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
    var h;
    const [l, p] = se(
      n || ((h = e[0]) == null ? void 0 : h.id) || ""
    ), m = t ?? l, g = Ml[o], x = (D) => {
      t === void 0 && p(D), r == null || r(D);
    };
    return /* @__PURE__ */ f(Pi.Provider, { value: { activeId: m }, children: /* @__PURE__ */ k("div", { ref: u, className: s, ...d, children: [
      /* @__PURE__ */ f(
        "div",
        {
          role: "tablist",
          className: O(
            "flex",
            g.list,
            i && "w-full"
          ),
          children: e.map((D) => /* @__PURE__ */ k(
            "button",
            {
              role: "tab",
              type: "button",
              "aria-selected": m === D.id,
              "aria-controls": `tabpanel-${D.id}`,
              disabled: D.disabled,
              onClick: () => x(D.id),
              className: O(
                "flex items-center justify-center gap-2 font-medium transition-all min-w-0",
                g.tab,
                jl[a],
                m === D.id ? g.active : g.inactive,
                i && "flex-1",
                D.disabled && "opacity-50 cursor-not-allowed"
              ),
              children: [
                D.icon,
                /* @__PURE__ */ f("span", { className: "truncate", children: D.label }),
                D.badge !== void 0 && /* @__PURE__ */ f(
                  "span",
                  {
                    className: O(
                      "px-1.5 py-0.5 text-xs font-medium rounded-full shrink-0",
                      m === D.id ? "bg-white/20" : "bg-neutral-200 text-neutral-600"
                    ),
                    children: D.badge
                  }
                )
              ]
            },
            D.id
          ))
        }
      ),
      c
    ] }) });
  }
);
$l.displayName = "Tabs";
const Ll = ie(
  ({ id: e, children: t, className: n, ...r }, o) => {
    const i = Nt(Pi);
    if (!i)
      throw new Error("TabPanel must be used within Tabs");
    return i.activeId !== e ? null : /* @__PURE__ */ f(
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
Ll.displayName = "TabPanel";
const no = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg"
}, Bl = {
  sm: 14,
  md: 16,
  lg: 20
}, Fl = {
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
}, Vl = {
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
}, zl = ie(
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
    className: x,
    ...h
  }, D) => {
    const y = nt(), { t: E } = a ? Qt({
      language: a,
      messagesByLanguage: y.messagesByLanguage
    }) : y, b = (() => {
      const W = [], ee = r * 2 + 3 + 2;
      if (t <= ee)
        return Array.from({ length: t }, (z, B) => B + 1);
      const ne = Math.max(e - r, 1), C = Math.min(e + r, t), T = ne > 2, V = C < t - 1;
      if (!T && V) {
        const z = 1 + 2 * r + 1;
        for (let B = 1; B <= z; B++) W.push(B);
        W.push("ellipsis"), W.push(t);
      } else if (T && !V) {
        W.push(1), W.push("ellipsis");
        const z = t - (2 * r + 1);
        for (let B = z; B <= t; B++) W.push(B);
      } else {
        W.push(1), W.push("ellipsis");
        for (let z = ne; z <= C; z++) W.push(z);
        W.push("ellipsis"), W.push(t);
      }
      return W;
    })(), N = Bl[m], A = O(
      "flex items-center justify-center rounded-full transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      Vl[g],
      no[m],
      p && "opacity-50 cursor-not-allowed"
    ), j = ({ page: W, isActive: re }) => /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        onClick: () => !p && n(W),
        disabled: p,
        "aria-current": re ? "page" : void 0,
        className: O(
          A,
          "px-3",
          re ? Fl[g] : "text-neutral-600 hover:bg-neutral-100"
        ),
        children: W
      }
    ), q = ({ direction: W, double: re }) => {
      const ee = W === "prev", ne = re ? ee ? 1 : t : ee ? e - 1 : e + 1, C = p || (ee ? e === 1 : e === t), T = re ? ee ? Vs : Gs : ee ? Ls : Jt;
      return /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: () => !C && n(ne),
          disabled: C,
          "aria-label": E(re ? ee ? "pagination.firstPage" : "pagination.lastPage" : ee ? "pagination.previousPage" : "pagination.nextPage"),
          className: O(
            A,
            C ? "text-neutral-300 cursor-not-allowed" : "text-neutral-600 hover:bg-neutral-100"
          ),
          children: /* @__PURE__ */ f(T, { size: N })
        }
      );
    }, I = s && c ? (e - 1) * c + 1 : void 0, _ = s && c ? Math.min(e * c, s) : void 0, $ = i && s !== void 0, G = Array.isArray(d) && d.length > 0, F = $ || G ? /* @__PURE__ */ k("div", { className: "flex items-center gap-2", children: [
      $ && /* @__PURE__ */ f("span", { className: "text-sm text-neutral-500", children: E("pagination.info", {
        start: I ?? "",
        end: _ ?? "",
        total: s
      }) }),
      G && /* @__PURE__ */ f(
        Di,
        {
          size: m,
          disabled: p,
          "aria-label": E("pagination.itemsPerPage"),
          value: c !== void 0 ? String(c) : void 0,
          options: d.map((W) => ({ value: String(W), label: String(W) })),
          onChange: (W) => u == null ? void 0 : u(Number(W.target.value))
        }
      )
    ] }) : null, Q = /* @__PURE__ */ k("div", { className: "flex items-center gap-2", children: [
      o && /* @__PURE__ */ f(q, { direction: "prev", double: !0 }),
      /* @__PURE__ */ f(q, { direction: "prev" }),
      /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: b.map(
        (W, re) => W === "ellipsis" ? /* @__PURE__ */ f(
          "span",
          {
            className: O("px-2 text-neutral-400", no[m]),
            children: "..."
          },
          `ellipsis-${re}`
        ) : /* @__PURE__ */ f(j, { page: W, isActive: W === e }, W)
      ) }),
      /* @__PURE__ */ f(q, { direction: "next" }),
      o && /* @__PURE__ */ f(q, { direction: "next", double: !0 })
    ] });
    return /* @__PURE__ */ f(
      "nav",
      {
        ref: D,
        role: "navigation",
        "aria-label": E("pagination.ariaLabel"),
        className: O(
          "flex items-center gap-2",
          l === "end" && "justify-between w-full",
          x
        ),
        ...h,
        children: l === "end" ? /* @__PURE__ */ k(Re, { children: [
          Q,
          F
        ] }) : /* @__PURE__ */ k(Re, { children: [
          F,
          Q
        ] })
      }
    );
  }
);
zl.displayName = "Pagination";
const Gl = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-4xl"
}, Ri = ie(
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
    const g = J(
      (x) => {
        x.key === "Escape" && c && t();
      },
      [c, t]
    );
    return fe(() => (e && (document.addEventListener("keydown", g), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), [e, g]), e ? /* @__PURE__ */ k(
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
              className: O(
                "relative flex min-h-full w-full p-4",
                u ? "items-center justify-center" : "items-start justify-center pt-16"
              ),
              children: /* @__PURE__ */ k(
                "div",
                {
                  ref: m,
                  className: O(
                    "relative w-full bg-white rounded-lg shadow-modal",
                    "animate-fade-in",
                    Gl[a],
                    l
                  ),
                  onClick: (x) => x.stopPropagation(),
                  ...p,
                  children: [
                    (n || d) && /* @__PURE__ */ k("div", { className: "flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark rounded-t-lg", children: [
                      /* @__PURE__ */ k("div", { children: [
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
Ri.displayName = "Modal";
const Wl = ({
  message: e,
  confirmText: t = "Confirm",
  cancelText: n = "Cancel",
  confirmVariant: r = "primary",
  onConfirm: o,
  onClose: i,
  loading: a,
  ...s
}) => /* @__PURE__ */ f(
  Ri,
  {
    ...s,
    onClose: i,
    size: "sm",
    footer: /* @__PURE__ */ k(Re, { children: [
      /* @__PURE__ */ f(Bt, { variant: "neutral", ghost: !0, onClick: i, disabled: a, children: n }),
      /* @__PURE__ */ f(Bt, { variant: r, onClick: o, loading: a, children: t })
    ] }),
    children: /* @__PURE__ */ f("p", { className: "text-neutral-700", children: e })
  }
);
Wl.displayName = "ConfirmModal";
const ql = {
  info: "bg-info text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-error text-white"
}, Ul = {
  info: wi,
  success: yi,
  warning: Ei,
  error: xi
}, Ti = ie(
  ({ toast: e, onClose: t, className: n, ...r }, o) => {
    const [i, a] = se(!1), s = Ul[e.variant];
    fe(() => {
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
    return /* @__PURE__ */ k(
      "div",
      {
        ref: o,
        role: "alert",
        className: O(
          "flex items-start gap-3 p-4 rounded-lg shadow-lg min-w-[320px] max-w-md",
          "transition-all duration-200",
          i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ql[e.variant],
          n
        ),
        ...r,
        children: [
          /* @__PURE__ */ f(s, { className: "flex-shrink-0 w-5 h-5 mt-0.5" }),
          /* @__PURE__ */ k("div", { className: "flex-1 min-w-0", children: [
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
Ti.displayName = "Toast";
const Hl = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Yl = ({
  position: e = "top-right",
  toasts: t,
  onClose: n
}) => /* @__PURE__ */ f(
  "div",
  {
    className: O(
      "fixed z-50 flex flex-col gap-2",
      Hl[e]
    ),
    children: t.map((r) => /* @__PURE__ */ f(Ti, { toast: r, onClose: n }, r.id))
  }
), Mi = lr(null), zv = ({ children: e, position: t = "top-right" }) => {
  const [n, r] = se([]), o = J((u) => {
    const l = Math.random().toString(36).slice(2, 9);
    return r((p) => [...p, { ...u, id: l }]), l;
  }, []), i = J((u) => {
    r((l) => l.filter((p) => p.id !== u));
  }, []), a = J(
    (u, l) => o({ variant: "success", message: u, title: l }),
    [o]
  ), s = J(
    (u, l) => o({ variant: "error", message: u, title: l }),
    [o]
  ), c = J(
    (u, l) => o({ variant: "warning", message: u, title: l }),
    [o]
  ), d = J(
    (u, l) => o({ variant: "info", message: u, title: l }),
    [o]
  );
  return /* @__PURE__ */ k(Mi.Provider, { value: { toasts: n, addToast: o, removeToast: i, success: a, error: s, warning: c, info: d }, children: [
    e,
    /* @__PURE__ */ f(Yl, { position: t, toasts: n, onClose: i })
  ] });
}, Gv = () => {
  const e = Nt(Mi);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, Kl = ie(
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
    const x = nt(), { t: h } = e ? Qt({
      language: e,
      messagesByLanguage: x.messagesByLanguage
    }) : x, [D, y] = se(""), [E, w] = se(""), [b, N] = se(!1), [A, j] = se(!1), I = /* @__PURE__ */ k("form", { onSubmit: (_) => {
      _.preventDefault(), o == null || o(D, E);
    }, className: "space-y-6", children: [
      /* @__PURE__ */ k("div", { className: "text-center mb-8", children: [
        (t || n) && /* @__PURE__ */ k("div", { className: "flex justify-center mb-6", children: [
          /* @__PURE__ */ f("div", { className: "md:hidden", children: t }),
          /* @__PURE__ */ f("div", { className: "hidden md:block", children: n || t })
        ] }),
        /* @__PURE__ */ f("h1", { className: "text-2xl font-bold text-neutral-900", children: h("login.title") }),
        /* @__PURE__ */ f("p", { className: "mt-2 text-neutral-500", children: h("login.subtitle") })
      ] }),
      a && /* @__PURE__ */ f("div", { className: "p-3 rounded-lg bg-error/10 border border-error/20 text-error text-sm", children: a }),
      /* @__PURE__ */ k("div", { children: [
        /* @__PURE__ */ f("label", { htmlFor: "email", className: "block text-sm font-medium text-neutral-700 mb-1", children: h("login.emailLabel") }),
        /* @__PURE__ */ f(
          Ft,
          {
            id: "email",
            type: "email",
            value: D,
            onChange: (_) => y(_.target.value),
            placeholder: h("login.emailPlaceholder"),
            leftIcon: /* @__PURE__ */ f(fc, { className: "w-5 h-5" }),
            required: !0,
            disabled: i
          }
        )
      ] }),
      /* @__PURE__ */ k("div", { children: [
        /* @__PURE__ */ f("label", { htmlFor: "password", className: "block text-sm font-medium text-neutral-700 mb-1", children: h("login.passwordLabel") }),
        /* @__PURE__ */ f(
          Ft,
          {
            id: "password",
            type: b ? "text" : "password",
            value: E,
            onChange: (_) => w(_.target.value),
            placeholder: h("login.passwordPlaceholder"),
            leftIcon: /* @__PURE__ */ f(pc, { className: "w-5 h-5" }),
            rightIcon: /* @__PURE__ */ f(
              "button",
              {
                type: "button",
                onClick: () => N(!b),
                className: "text-neutral-400 hover:text-neutral-600",
                children: b ? /* @__PURE__ */ f(Ks, { className: "w-5 h-5" }) : /* @__PURE__ */ f(Js, { className: "w-5 h-5" })
              }
            ),
            required: !0,
            disabled: i
          }
        )
      ] }),
      /* @__PURE__ */ k("div", { className: "flex items-center justify-between", children: [
        c && /* @__PURE__ */ k("label", { className: "flex items-center gap-2 cursor-pointer", children: [
          /* @__PURE__ */ f(
            "input",
            {
              type: "checkbox",
              checked: A,
              onChange: (_) => j(_.target.checked),
              className: "w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary"
            }
          ),
          /* @__PURE__ */ f("span", { className: "text-sm text-neutral-600", children: h("login.rememberMe") })
        ] }),
        d && s && /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            onClick: s,
            className: "text-sm text-primary hover:text-primary-dark font-medium",
            children: h("login.forgotPassword")
          }
        )
      ] }),
      /* @__PURE__ */ f(Bt, { type: "submit", variant: "accent", fullWidth: !0, loading: i, className: "py-3", children: h("login.submit") }),
      u && /* @__PURE__ */ f("div", { className: "text-center", children: u })
    ] });
    return l === "split" ? /* @__PURE__ */ k("div", { ref: g, className: O("min-h-screen flex", p), ...m, children: [
      /* @__PURE__ */ k("div", { className: "hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sidebar via-primary to-accent p-12 flex-col justify-between", children: [
        /* @__PURE__ */ f("div", { children: (r || n || t) && /* @__PURE__ */ f("div", { className: "mb-8", children: r || n || t }) }),
        /* @__PURE__ */ k("div", { className: "text-white", children: [
          /* @__PURE__ */ f("h2", { className: "text-4xl font-bold mb-4", children: h("login.split.heroTitle") }),
          /* @__PURE__ */ f("p", { className: "text-white/80 text-lg", children: h("login.split.heroDescription") })
        ] }),
        /* @__PURE__ */ f("div", { className: "text-white/50 text-sm", children: h("login.split.copyright", { year: (/* @__PURE__ */ new Date()).getFullYear() }) })
      ] }),
      /* @__PURE__ */ f("div", { className: "w-full lg:w-1/2 flex items-center justify-center p-8 bg-white", children: /* @__PURE__ */ f("div", { className: "w-full max-w-md", children: I }) })
    ] }) : l === "centered" ? /* @__PURE__ */ f(
      "div",
      {
        ref: g,
        className: O(
          "min-h-screen flex items-center justify-center p-4 bg-neutral-100",
          p
        ),
        ...m,
        children: /* @__PURE__ */ f("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-xl p-8", children: I })
      }
    ) : /* @__PURE__ */ f(
      "div",
      {
        ref: g,
        className: O(
          "min-h-screen flex items-center justify-center p-4",
          "bg-gradient-to-br from-sidebar via-primary to-accent",
          p
        ),
        ...m,
        children: /* @__PURE__ */ f("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-2xl p-8", children: I })
      }
    );
  }
);
Kl.displayName = "LoginPage";
function Oe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Xl = typeof Symbol == "function" && Symbol.observable || "@@observable", ro = Xl, oo = () => Math.random().toString(36).substring(7).split("").join("."), Jl = {
  INIT: `@@redux/INIT${/* @__PURE__ */ oo()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ oo()}`
}, io = Jl;
function Ql(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Zl(e) {
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
  if (nd(e))
    return "date";
  if (td(e))
    return "error";
  const n = ed(e);
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
function ed(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function td(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function nd(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Be(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Zl(e)), t;
}
function ji(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(2) : `Expected the root reducer to be a function. Instead, received: '${Be(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(1) : `Expected the enhancer to be a function. Instead, received: '${Be(n)}'`);
    return n(ji)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function d() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((h, D) => {
      a.set(D, h);
    }));
  }
  function u() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function l(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(4) : `Expected the listener to be a function. Instead, received: '${Be(h)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let D = !0;
    d();
    const y = s++;
    return a.set(y, h), function() {
      if (D) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Oe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        D = !1, d(), a.delete(y), i = null;
      }
    };
  }
  function p(h) {
    if (!Ql(h))
      throw new Error(process.env.NODE_ENV === "production" ? Oe(7) : `Actions must be plain objects. Instead, the actual type was: '${Be(h)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof h.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof h.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(17) : `Action "type" property must be a string. Instead, the actual type was: '${Be(h.type)}'. Value was: '${h.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = r(o, h);
    } finally {
      c = !1;
    }
    return (i = a).forEach((y) => {
      y();
    }), h;
  }
  function m(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(10) : `Expected the nextReducer to be a function. Instead, received: '${Be(h)}`);
    r = h, p({
      type: io.REPLACE
    });
  }
  function g() {
    const h = l;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(D) {
        if (typeof D != "object" || D === null)
          throw new Error(process.env.NODE_ENV === "production" ? Oe(11) : `Expected the observer to be an object. Instead, received: '${Be(D)}'`);
        function y() {
          const w = D;
          w.next && w.next(u());
        }
        return y(), {
          unsubscribe: h(y)
        };
      },
      [ro]() {
        return this;
      }
    };
  }
  return p({
    type: io.INIT
  }), {
    dispatch: p,
    subscribe: l,
    getState: u,
    replaceReducer: m,
    [ro]: g
  };
}
function ao(e, t) {
  return function(...n) {
    return t(e.apply(this, n));
  };
}
function so(e, t) {
  if (typeof e == "function")
    return ao(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Oe(16) : `bindActionCreators expected an object or a function, but instead received: '${Be(e)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = ao(o, t));
  }
  return n;
}
function $i(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function rd(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Oe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...d) => i(c, ...d)
    }, s = e.map((c) => c(a));
    return i = $i(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
var Wv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function od(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function id() {
  if (co) return vn;
  co = 1;
  var e = he;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return vn.useSyncExternalStoreWithSelector = function(c, d, u, l, p) {
    var m = o(null);
    if (m.current === null) {
      var g = { hasValue: !1, value: null };
      m.current = g;
    } else g = m.current;
    m = a(
      function() {
        function h(b) {
          if (!D) {
            if (D = !0, y = b, b = l(b), p !== void 0 && g.hasValue) {
              var N = g.value;
              if (p(N, b))
                return E = N;
            }
            return E = b;
          }
          if (N = E, n(y, b)) return N;
          var A = l(b);
          return p !== void 0 && p(N, A) ? (y = b, N) : (y = b, E = A);
        }
        var D = !1, y, E, w = u === void 0 ? null : u;
        return [
          function() {
            return h(d());
          },
          w === null ? void 0 : function() {
            return h(w());
          }
        ];
      },
      [d, u, l, p]
    );
    var x = r(c, m[0], m[1]);
    return i(
      function() {
        g.hasValue = !0, g.value = x;
      },
      [x]
    ), s(x), x;
  }, vn;
}
var hn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function ad() {
  return lo || (lo = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, d) {
      return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = he, n = typeof Object.is == "function" ? Object.is : e, r = t.useSyncExternalStore, o = t.useRef, i = t.useEffect, a = t.useMemo, s = t.useDebugValue;
    hn.useSyncExternalStoreWithSelector = function(c, d, u, l, p) {
      var m = o(null);
      if (m.current === null) {
        var g = { hasValue: !1, value: null };
        m.current = g;
      } else g = m.current;
      m = a(
        function() {
          function h(b) {
            if (!D) {
              if (D = !0, y = b, b = l(b), p !== void 0 && g.hasValue) {
                var N = g.value;
                if (p(N, b))
                  return E = N;
              }
              return E = b;
            }
            if (N = E, n(y, b))
              return N;
            var A = l(b);
            return p !== void 0 && p(N, A) ? (y = b, N) : (y = b, E = A);
          }
          var D = !1, y, E, w = u === void 0 ? null : u;
          return [
            function() {
              return h(d());
            },
            w === null ? void 0 : function() {
              return h(w());
            }
          ];
        },
        [d, u, l, p]
      );
      var x = r(c, m[0], m[1]);
      return i(
        function() {
          g.hasValue = !0, g.value = x;
        },
        [x]
      ), s(x), x;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), hn;
}
process.env.NODE_ENV === "production" ? id() : ad();
var Li = /* @__PURE__ */ ae.version.startsWith("19"), sd = /* @__PURE__ */ Symbol.for(
  Li ? "react.transitional.element" : "react.element"
), cd = /* @__PURE__ */ Symbol.for("react.portal"), Bi = /* @__PURE__ */ Symbol.for("react.fragment"), Fi = /* @__PURE__ */ Symbol.for("react.strict_mode"), Vi = /* @__PURE__ */ Symbol.for("react.profiler"), mr = /* @__PURE__ */ Symbol.for("react.consumer"), gr = /* @__PURE__ */ Symbol.for("react.context"), vr = /* @__PURE__ */ Symbol.for("react.forward_ref"), zi = /* @__PURE__ */ Symbol.for("react.suspense"), Gi = /* @__PURE__ */ Symbol.for(
  "react.suspense_list"
), Zt = /* @__PURE__ */ Symbol.for("react.memo"), Wi = /* @__PURE__ */ Symbol.for("react.lazy"), ld = /* @__PURE__ */ Symbol.for("react.offscreen"), dd = /* @__PURE__ */ Symbol.for(
  "react.client.reference"
), pd = vr, ud = Zt;
function fd(e) {
  return typeof e == "string" || typeof e == "function" || e === Bi || e === Vi || e === Fi || e === zi || e === Gi || e === ld || typeof e == "object" && e !== null && (e.$$typeof === Wi || e.$$typeof === Zt || e.$$typeof === gr || e.$$typeof === mr || e.$$typeof === vr || e.$$typeof === dd || e.getModuleId !== void 0);
}
function Hn(e) {
  if (typeof e == "object" && e !== null) {
    const { $$typeof: t } = e;
    switch (t) {
      case sd:
        switch (e = e.type, e) {
          case Bi:
          case Vi:
          case Fi:
          case zi:
          case Gi:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case gr:
              case vr:
              case Wi:
              case Zt:
                return e;
              case mr:
                return e;
              default:
                return t;
            }
        }
      case cd:
        return t;
    }
  }
}
function md(e) {
  return Li ? Hn(e) === mr : Hn(e) === gr;
}
function gd(e) {
  return Hn(e) === Zt;
}
function hr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function bn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || hr(
      `The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`
    ));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function vd(e, t, n) {
  bn(e, "mapStateToProps"), bn(t, "mapDispatchToProps"), bn(n, "mergeProps");
}
function hd(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, d, u, l, p;
  function m(y, E) {
    return c = y, d = E, u = e(c, d), l = t(r, d), p = n(u, l, d), s = !0, p;
  }
  function g() {
    return u = e(c, d), t.dependsOnOwnProps && (l = t(r, d)), p = n(u, l, d), p;
  }
  function x() {
    return e.dependsOnOwnProps && (u = e(c, d)), t.dependsOnOwnProps && (l = t(r, d)), p = n(u, l, d), p;
  }
  function h() {
    const y = e(c, d), E = !a(y, u);
    return u = y, E && (p = n(u, l, d)), p;
  }
  function D(y, E) {
    const w = !i(E, d), b = !o(
      y,
      c,
      E,
      d
    );
    return c = y, d = E, w && b ? g() : w ? x() : b ? h() : p;
  }
  return function(E, w) {
    return s ? D(E, w) : m(E, w);
  };
}
function bd(e, {
  initMapStateToProps: t,
  initMapDispatchToProps: n,
  initMergeProps: r,
  ...o
}) {
  const i = t(e, o), a = n(e, o), s = r(e, o);
  return process.env.NODE_ENV !== "production" && vd(i, a, s), hd(i, a, s, e, o);
}
function xd(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function yd(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function qi(e, t, n) {
  yd(e) || hr(
    `${n}() in ${t} must return a plain object. Instead received ${e}.`
  );
}
function Yn(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function po(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Ui(e, t) {
  return function(r, { displayName: o }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = po(e);
      let d = i(s, c);
      return typeof d == "function" && (i.mapToProps = d, i.dependsOnOwnProps = po(d), d = i(s, c)), process.env.NODE_ENV !== "production" && qi(d, o, t), d;
    }, i;
  };
}
function br(e, t) {
  return (n, r) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`
    );
  };
}
function wd(e) {
  return e && typeof e == "object" ? Yn(
    (t) => (
      // @ts-ignore
      xd(e, t)
    )
  ) : e ? typeof e == "function" ? (
    // @ts-ignore
    Ui(e, "mapDispatchToProps")
  ) : br(e, "mapDispatchToProps") : Yn((t) => ({
    dispatch: t
  }));
}
function Ed(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Ui(e, "mapStateToProps")
  ) : br(e, "mapStateToProps") : Yn(() => ({}));
}
function Nd(e, t, n) {
  return { ...n, ...e, ...t };
}
function Dd(e) {
  return function(n, { displayName: r, areMergedPropsEqual: o }) {
    let i = !1, a;
    return function(c, d, u) {
      const l = e(c, d, u);
      return i ? o(l, a) || (a = l) : (i = !0, a = l, process.env.NODE_ENV !== "production" && qi(a, r, "mergeProps")), a;
    };
  };
}
function Od(e) {
  return e ? typeof e == "function" ? Dd(e) : br(e, "mergeProps") : () => Nd;
}
function Sd(e) {
  e();
}
function kd() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Sd(() => {
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
var uo = {
  notify() {
  },
  get: () => []
};
function Hi(e, t) {
  let n, r = uo, o = 0, i = !1;
  function a(x) {
    u();
    const h = r.subscribe(x);
    let D = !1;
    return () => {
      D || (D = !0, h(), l());
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
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = kd());
  }
  function l() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = uo);
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
var Id = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Cd = /* @__PURE__ */ Id(), _d = () => typeof navigator < "u" && navigator.product === "ReactNative", Ad = /* @__PURE__ */ _d(), Pd = () => Cd || Ad ? ae.useLayoutEffect : ae.useEffect, Vt = /* @__PURE__ */ Pd();
function fo(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function xn(e, t) {
  if (fo(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !fo(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
var Rd = {
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
}, Td = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Md = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Yi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, jd = {
  [pd]: Md,
  [ud]: Yi
};
function mo(e) {
  return gd(e) ? Yi : jd[e.$$typeof] || Rd;
}
var $d = Object.defineProperty, Ld = Object.getOwnPropertyNames, go = Object.getOwnPropertySymbols, Bd = Object.getOwnPropertyDescriptor, Fd = Object.getPrototypeOf, vo = Object.prototype;
function Kn(e, t) {
  if (typeof t != "string") {
    if (vo) {
      const i = Fd(t);
      i && i !== vo && Kn(e, i);
    }
    let n = Ld(t);
    go && (n = n.concat(go(t)));
    const r = mo(e), o = mo(t);
    for (let i = 0; i < n.length; ++i) {
      const a = n[i];
      if (!Td[a] && !(o && o[a]) && !(r && r[a])) {
        const s = Bd(t, a);
        try {
          $d(e, a, s);
        } catch {
        }
      }
    }
  }
  return e;
}
var yn = /* @__PURE__ */ Symbol.for("react-redux-context"), wn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Vd() {
  if (!ae.createContext) return {};
  const e = wn[yn] ?? (wn[yn] = /* @__PURE__ */ new Map());
  let t = e.get(ae.createContext);
  return t || (t = ae.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(ae.createContext, t)), t;
}
var Ki = /* @__PURE__ */ Vd(), zd = [null, null], Gd = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Wd(e, t, n) {
  Vt(() => e(...t), n);
}
function qd(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function Ud(e, t, n, r, o, i, a, s, c, d, u) {
  if (!e) return () => {
  };
  let l = !1, p = null;
  const m = () => {
    if (l || !s.current)
      return;
    const x = t.getState();
    let h, D;
    try {
      h = r(
        x,
        o.current
      );
    } catch (y) {
      D = y, p = y;
    }
    D || (p = null), h === i.current ? a.current || d() : (i.current = h, c.current = h, a.current = !0, u());
  };
  return n.onStateChange = m, n.trySubscribe(), m(), () => {
    if (l = !0, n.tryUnsubscribe(), n.onStateChange = null, p)
      throw p;
  };
}
function Hd(e, t) {
  return e === t;
}
var ho = !1;
function Yd(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = Hd,
  areOwnPropsEqual: i = xn,
  areStatePropsEqual: a = xn,
  areMergedPropsEqual: s = xn,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: d = Ki
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !ho && (ho = !0, hr(
    'The `pure` option has been removed. `connect` is now always a "pure/memoized" component'
  ));
  const u = d, l = Ed(e), p = wd(t), m = Od(n), g = !!e;
  return (h) => {
    if (process.env.NODE_ENV !== "production" && !/* @__PURE__ */ fd(h))
      throw new Error(
        `You must pass a component to the function returned by connect. Instead received ${Gd(
          h
        )}`
      );
    const D = h.displayName || h.name || "Component", y = `Connect(${D})`, E = {
      shouldHandleStateChanges: g,
      displayName: y,
      wrappedComponentName: D,
      WrappedComponent: h,
      // @ts-ignore
      initMapStateToProps: l,
      initMapDispatchToProps: p,
      initMergeProps: m,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function w(A) {
      const [j, q, I] = ae.useMemo(() => {
        const { reactReduxForwardedRef: P, ...le } = A;
        return [A.context, P, le];
      }, [A]), _ = ae.useMemo(() => {
        let P = u;
        if (j != null && j.Consumer && process.env.NODE_ENV !== "production") {
          if (!/* @__PURE__ */ md(
            // @ts-ignore
            /* @__PURE__ */ ae.createElement(j.Consumer, null)
          ))
            throw new Error(
              "You must pass a valid React context consumer as `props.context`"
            );
          P = j;
        }
        return P;
      }, [j, u]), $ = ae.useContext(_), G = !!A.store && !!A.store.getState && !!A.store.dispatch, F = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !G && !F)
        throw new Error(
          `Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`
        );
      const Q = G ? A.store : $.store, W = F ? $.getServerState : Q.getState, re = ae.useMemo(() => bd(Q.dispatch, E), [Q]), [ee, ne] = ae.useMemo(() => {
        if (!g) return zd;
        const P = Hi(
          Q,
          G ? void 0 : $.subscription
        ), le = P.notifyNestedSubs.bind(P);
        return [P, le];
      }, [Q, G, $]), C = ae.useMemo(() => G ? $ : {
        ...$,
        subscription: ee
      }, [G, $, ee]), T = ae.useRef(void 0), V = ae.useRef(I), z = ae.useRef(void 0), B = ae.useRef(!1), Y = ae.useRef(!1), U = ae.useRef(
        void 0
      );
      Vt(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const K = ae.useMemo(() => () => z.current && I === V.current ? z.current : re(Q.getState(), I), [Q, I]), R = ae.useMemo(() => (le) => ee ? Ud(
        g,
        Q,
        ee,
        // @ts-ignore
        re,
        V,
        T,
        B,
        Y,
        z,
        ne,
        le
      ) : () => {
      }, [ee]);
      Wd(qd, [
        V,
        T,
        B,
        I,
        z,
        ne
      ]);
      let S;
      try {
        S = ae.useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          R,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          K,
          W ? () => re(W(), I) : K
        );
      } catch (P) {
        throw U.current && (P.message += `
The error may be correlated with this previous error:
${U.current.stack}

`), P;
      }
      Vt(() => {
        U.current = void 0, z.current = void 0, T.current = S;
      });
      const M = ae.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ ae.createElement(
          h,
          {
            ...S,
            ref: q
          }
        )
      ), [q, h, S]);
      return ae.useMemo(() => g ? /* @__PURE__ */ ae.createElement(_.Provider, { value: C }, M) : M, [_, M, C]);
    }
    const N = ae.memo(w);
    if (N.WrappedComponent = h, N.displayName = w.displayName = y, c) {
      const j = ae.forwardRef(
        function(I, _) {
          return /* @__PURE__ */ ae.createElement(N, { ...I, reactReduxForwardedRef: _ });
        }
      );
      return j.displayName = y, j.WrappedComponent = h, /* @__PURE__ */ Kn(j, h);
    }
    return /* @__PURE__ */ Kn(N, h);
  };
}
var Xi = Yd;
function Kd(e) {
  const { children: t, context: n, serverState: r, store: o } = e, i = ae.useMemo(() => {
    const c = Hi(o), d = {
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
  }, [o, r]), a = ae.useMemo(() => o.getState(), [o]);
  Vt(() => {
    const { subscription: c } = i;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [i, a]);
  const s = n || Ki;
  return /* @__PURE__ */ ae.createElement(s.Provider, { value: i }, t);
}
var Xd = Kd, Jd = process.env.NODE_ENV === "production", En = "Invariant failed";
function bo(e, t) {
  if (Jd)
    throw new Error(En);
  var n = typeof t == "function" ? t() : t, r = n ? "".concat(En, ": ").concat(n) : En;
  throw new Error(r);
}
var Te = function(t) {
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
}, xr = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, xo = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, Qd = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, Nn = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, yr = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? Nn : r, i = t.border, a = i === void 0 ? Nn : i, s = t.padding, c = s === void 0 ? Nn : s, d = Te(xr(n, o)), u = Te(xo(n, a)), l = Te(xo(u, c));
  return {
    marginBox: d,
    borderBox: Te(n),
    paddingBox: u,
    contentBox: l,
    margin: o,
    border: a,
    padding: c
  };
}, _e = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? bo(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : bo()), o;
}, Zd = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, zt = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = Qd(r, n);
  return yr({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Gt = function(t, n) {
  return n === void 0 && (n = Zd()), zt(t, n);
}, Ji = function(t, n) {
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
  return yr({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, Qi = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Ji(n, r);
}, ft = function(t) {
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
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Wt.apply(null, arguments);
}
const ep = process.env.NODE_ENV === "production", tp = /[ \t]{2,}/g, np = /^[ \t]*/gm, yo = (e) => e.replace(tp, " ").replace(np, "").trim(), rp = (e) => yo(`
  %c@hello-pangea/dnd

  %c${yo(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), op = (e) => [rp(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], ip = "__@hello-pangea/dnd-disable-dev-warnings";
function Zi(e, t) {
  ep || typeof window < "u" && window[ip] || console[e](...op(t));
}
const ge = Zi.bind(null, "warn"), Xn = Zi.bind(null, "error");
function Fe() {
}
function ap(e, t) {
  return {
    ...e,
    ...t
  };
}
function Ae(e, t, n) {
  const r = t.map((o) => {
    const i = ap(n, o.options);
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
const sp = process.env.NODE_ENV === "production", wo = "Invariant failed";
class mt extends Error {
}
mt.prototype.toString = function() {
  return this.message;
};
function v(e, t) {
  throw sp ? new mt(wo) : new mt(`${wo}: ${t || ""}`);
}
class cp extends he.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Fe, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && ge(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof mt && (n.preventDefault(), process.env.NODE_ENV !== "production" && Xn(o.message));
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
    if (t instanceof mt) {
      process.env.NODE_ENV !== "production" && Xn(t.message), this.setState({});
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
const lp = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, qt = (e) => e + 1, dp = (e) => `
  You have lifted an item in position ${qt(e.source.index)}
`, ea = (e, t) => {
  const n = e.droppableId === t.droppableId, r = qt(e.index), o = qt(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, ta = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, pp = (e) => {
  const t = e.destination;
  if (t)
    return ea(e.source, t);
  const n = e.combine;
  return n ? ta(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Eo = (e) => `
  The item has returned to its starting position
  of ${qt(e.index)}
`, up = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Eo(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${ea(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${ta(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Eo(e.source)}
  `;
}, Lt = {
  dragHandleUsageInstructions: lp,
  onDragStart: dp,
  onDragUpdate: pp,
  onDragEnd: up
};
function fp(e, t) {
  return !!(e === t || Number.isNaN(e) && Number.isNaN(t));
}
function na(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (!fp(e[n], t[n]))
      return !1;
  return !0;
}
function oe(e, t) {
  const n = se(() => ({
    inputs: t,
    result: e()
  }))[0], r = Z(!0), o = Z(n), a = r.current || !!(t && o.current.inputs && na(t, o.current.inputs)) ? o.current : {
    inputs: t,
    result: e()
  };
  return fe(() => {
    r.current = !1, o.current = a;
  }, [a]), a.result;
}
function H(e, t) {
  return oe(() => e, t);
}
const we = {
  x: 0,
  y: 0
}, Ne = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), ke = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Ve = (e, t) => e.x === t.x && e.y === t.y, rt = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Ue = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, gt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), No = (e, t) => Math.min(...t.map((n) => gt(e, n))), ra = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var mp = (e, t) => {
  const n = Te({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const Dt = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Do = (e) => [{
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
}], gp = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, vp = (e, t) => t ? Dt(e, t.scroll.diff.displacement) : e, hp = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, bp = (e, t) => t && t.shouldClipSubject ? mp(t.pageMarginBox, e) : Te(e);
var Je = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = vp(e.marginBox, r), i = hp(o, n, t), a = bp(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, wr = (e, t) => {
  e.frame || (process.env.NODE_ENV, v());
  const n = e.frame, r = ke(t, n.scroll.initial), o = rt(r), i = {
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
function ye(e, t = na) {
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
const oa = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), ia = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), en = ye((e) => Object.values(e)), xp = ye((e) => Object.values(e));
var He = ye((e, t) => xp(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Er(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function tn(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var nn = ye((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), yp = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !Er(o))
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
  const d = nn(t, r);
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
}, ot = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const aa = {
  point: we,
  value: 0
}, vt = {
  invisible: {},
  visible: {},
  all: []
}, wp = {
  displaced: vt,
  displacedBy: aa,
  at: null
};
var Pe = (e, t) => (n) => e <= n && n <= t, sa = (e) => {
  const t = Pe(e.top, e.bottom), n = Pe(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), a = n(r.left) || n(r.right);
    if (i && a)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, d = r.left < e.left && r.right > e.right;
    return c && d ? !0 : c && a || d && i;
  };
}, Ep = (e) => {
  const t = Pe(e.top, e.bottom), n = Pe(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const Nr = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, ca = {
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
var Np = (e) => (t) => {
  const n = Pe(t.top, t.bottom), r = Pe(t.left, t.right);
  return (o) => e === Nr ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const Dp = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : we;
  return Dt(e, n);
}, Op = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, Sp = (e, t, n) => n(t)(e), Dr = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? Dp(e, t) : e;
  return Op(i, t, o) && Sp(i, n, o);
}, kp = (e) => Dr({
  ...e,
  isVisibleThroughFrameFn: sa
}), la = (e) => Dr({
  ...e,
  isVisibleThroughFrameFn: Ep
}), Ip = (e) => Dr({
  ...e,
  isVisibleThroughFrameFn: Np(e.destination.axis)
}), Cp = (e, t, n) => {
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
function _p(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Te(xr(n, r));
}
function ht({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, c) {
    const d = _p(c, n), u = c.descriptor.id;
    if (s.all.push(u), !kp({
      target: d,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const p = Cp(u, i, o), m = {
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
function Ap(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function Oo({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = Ap(e, {
    inHomeList: t
  });
  return {
    displaced: vt,
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
function Ut({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const c = ot(e, n);
  if (a == null)
    return Oo({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const d = t.find((g) => g.descriptor.index === a);
  if (!d)
    return Oo({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const u = nn(e, t), l = t.indexOf(d), p = u.slice(l);
  return {
    displaced: ht({
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
function ze(e, t) {
  return !!t.effected[e];
}
var Pp = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = r.draggableId, s = n[i].descriptor.index;
  return ze(i, o) ? e ? s : s - 1 : e ? s + 1 : s;
}, Rp = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, a = n[0].descriptor.index, s = n[n.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, Tp = ({
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
    const l = Rp({
      isMovingForward: e,
      isInHomeList: t,
      location: d.destination,
      insideDestination: i
    });
    return l == null ? null : Ut({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: l
    });
  }
  const u = Pp({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: r,
    combine: d.combine,
    afterCritical: c
  });
  return u == null ? null : Ut({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: u
  });
}, Mp = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return ze(n, t) ? o ? we : rt(r.point) : o ? r.point : we;
}, jp = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = tn(t);
  r || (process.env.NODE_ENV, v());
  const o = r.draggableId, i = n[o].page.borderBox.center, a = Mp({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Ne(i, a);
};
const da = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, $p = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Or = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, So = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.end] + da(e, n), Or(e, t.marginBox, n)), ko = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.start] - $p(e, n), Or(e, t.marginBox, n)), Lp = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => Ue(e.line, t.contentBox[e.start] + da(e, n), Or(e, t.contentBox, n));
var Bp = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = He(r.descriptor.id, n), a = t.page, s = r.axis;
  if (!i.length)
    return Lp({
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
    if (ze(u, o))
      return ko({
        axis: s,
        moveRelativeTo: p.page,
        isMoving: a
      });
    const m = zt(p.page, d.point);
    return ko({
      axis: s,
      moveRelativeTo: m,
      isMoving: a
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (ze(l.descriptor.id, o)) {
    const p = zt(l.page, rt(o.displacedBy.point));
    return So({
      axis: s,
      moveRelativeTo: p,
      isMoving: a
    });
  }
  return So({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, Jn = (e, t) => {
  const n = e.frame;
  return n ? Ne(t, n.scroll.diff.displacement) : t;
};
const Fp = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !n || !a ? i : a.type === "REORDER" ? Bp({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : jp({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var rn = (e) => {
  const t = Fp(e), n = e.droppable;
  return n ? Jn(n, t) : t;
}, pa = (e, t) => {
  const n = ke(t, e.scroll.initial), r = rt(n);
  return {
    frame: Te({
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
function Io(e, t) {
  return e.map((n) => t[n]);
}
function Vp(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var zp = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = pa(t, Ne(t.scroll.current, o)), a = n.frame ? wr(n, Ne(n.frame.scroll.current, o)) : n, s = e.displaced, c = ht({
    afterDragging: Io(s.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), d = ht({
    afterDragging: Io(s.all, r),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = {}, l = {}, p = [s, c, d];
  return s.all.forEach((g) => {
    const x = Vp(g, p);
    if (x) {
      l[g] = x;
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
}, Gp = (e, t) => Ne(e.scroll.diff.displacement, t), Sr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = Gp(n, e), o = ke(r, t.page.borderBox.center);
  return Ne(t.client.borderBox.center, o);
}, ua = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = ke(n, e.page.borderBox.center), c = {
    target: Dt(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? Ip(c) : la(c);
}, Wp = ({
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
  const d = He(n.descriptor.id, r), u = ot(t, n), l = yp({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: d,
    previousImpact: o
  }) || Tp({
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
  const p = rn({
    impact: l,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (ua({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: p,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Sr({
        pageBorderBoxCenter: p,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const g = ke(p, a), x = zp({
    impact: l,
    viewport: i,
    destination: n,
    draggables: r,
    maxScrollChange: g
  });
  return {
    clientSelection: s,
    impact: x,
    scrollJumpRequest: g
  };
};
const De = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot get clipped area from droppable") : v()), t;
};
var qp = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const a = n.axis, s = Pe(i[a.start], i[a.end]), c = en(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => sa(o.frame)(De(u))).filter((u) => {
    const l = De(u);
    return e ? i[a.crossAxisEnd] < l[a.crossAxisEnd] : l[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((u) => {
    const l = De(u), p = Pe(l[a.start], l[a.end]);
    return s(l[a.start]) || s(l[a.end]) || p(i[a.start]) || p(i[a.end]);
  }).sort((u, l) => {
    const p = De(u)[a.crossAxisStart], m = De(l)[a.crossAxisStart];
    return e ? p - m : m - p;
  }).filter((u, l, p) => De(u)[a.crossAxisStart] === De(p[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const d = c.filter((u) => Pe(De(u)[a.start], De(u)[a.end])(t[a.line]));
  return d.length === 1 ? d[0] : d.length > 1 ? d.sort((u, l) => De(u)[a.start] - De(l)[a.start])[0] : c.sort((u, l) => {
    const p = No(t, Do(De(u))), m = No(t, Do(De(l)));
    return p !== m ? p - m : De(u)[a.start] - De(l)[a.start];
  })[0];
};
const Co = (e, t) => {
  const n = e.page.borderBox.center;
  return ze(e.descriptor.id, t) ? ke(n, t.displacedBy.point) : n;
}, Up = (e, t) => {
  const n = e.page.borderBox;
  return ze(e.descriptor.id, t) ? Dt(n, rt(t.displacedBy.point)) : n;
};
var Hp = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((a) => la({
  target: Up(a, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = gt(e, Jn(n, Co(a, o))), d = gt(e, Jn(n, Co(s, o)));
  return c < d ? -1 : d < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Ot = ye(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: Ue(t.line, r)
  };
});
const Yp = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return Ue(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = He(e.descriptor.id, n).reduce((d, u) => d + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : Ue(r.line, c);
}, fa = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), ma = (e, t, n) => {
  const r = e.frame;
  ot(t, e) && (process.env.NODE_ENV !== "production" ? v(!1, "Should not add placeholder space to home list") : v()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot add placeholder size to a subject when it already has one") : v());
  const o = Ot(e.axis, t.displaceBy).point, i = Yp(e, o, n), a = {
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
  const s = i ? Ne(r.scroll.max, i) : r.scroll.max, c = fa(r, s), d = Je({
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
}, Kp = (e) => {
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
  const o = fa(n, r), i = Je({
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
var Xp = ({
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
      displaced: vt,
      displacedBy: aa,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, p = rn({
      impact: l,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), m = ot(r, i) ? i : ma(i, r, o);
    return ua({
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
  })(), u = Ot(i.axis, r.displaceBy);
  return Ut({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: a,
    displacedBy: u,
    last: vt,
    index: d
  });
}, Jp = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = qp({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const d = He(c.descriptor.id, o), u = Hp({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: d,
    afterCritical: s
  }), l = Xp({
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
  const p = rn({
    impact: l,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: Sr({
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
const Qp = (e, t) => {
  const n = Ie(e);
  return n ? t[n] : null;
};
var Zp = ({
  state: e,
  type: t
}) => {
  const n = Qp(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", d = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: p
  } = e.dimensions;
  return s ? Wp({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: d,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Jp({
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
function ga(e) {
  const t = Pe(e.top, e.bottom), n = Pe(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function eu(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function tu({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const a = i.axis, s = Ue(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: gt(r, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function nu({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = en(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !eu(e, i))
      return !1;
    if (ga(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], d = e[a.crossAxisEnd], u = Pe(i[a.crossAxisStart], i[a.crossAxisEnd]), l = u(c), p = u(d);
    return !l && !p ? !0 : l ? c < s : d > s;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : tu({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const va = (e, t) => Te(Dt(e, t));
var ru = (e, t) => {
  const n = e.frame;
  return n ? va(t, n.scroll.diff.value) : t;
};
function ha({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function ou({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var iu = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = n.axis, c = Ot(n.axis, t.displaceBy), d = c.value, u = e[s.start], l = e[s.end], m = nn(t, r).find((x) => {
    const h = x.descriptor.id, D = x.page.borderBox.center[s.line], y = ze(h, a), E = ha({
      displaced: o,
      id: h
    });
    return y ? E ? l <= D : u < D - d : E ? l <= D + d : u < D;
  }) || null, g = ou({
    draggable: t,
    closest: m,
    inHomeList: ot(t, n)
  });
  return Ut({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: c,
    index: g
  });
};
const au = 4;
var su = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const a = r.axis, s = Ot(r.axis, e.displaceBy), c = s.value, d = t[a.start], u = t[a.end], p = nn(e, o).find((g) => {
    const x = g.descriptor.id, h = g.page.borderBox, y = h[a.size] / au, E = ze(x, i), w = ha({
      displaced: n.displaced,
      id: x
    });
    return E ? w ? u > h[a.start] + y && u < h[a.end] - y : d > h[a.start] - c + y && d < h[a.end] - c - y : w ? u > h[a.start] + c + y && u < h[a.end] + c - y : d > h[a.start] + y && d < h[a.end] - y;
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
}, ba = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = va(t.page.borderBox, e), c = nu({
    pageBorderBox: s,
    draggable: t,
    droppables: r
  });
  if (!c)
    return wp;
  const d = r[c], u = He(d.descriptor.id, n), l = ru(d, s);
  return su({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: d,
    insideDestination: u,
    afterCritical: a
  }) || iu({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: d,
    insideDestination: u,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, kr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const cu = ({
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
  const a = Kp(i);
  return kr(n, a);
};
var lu = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = cu({
    previousImpact: r,
    impact: o,
    droppables: n
  }), a = Ie(o);
  if (!a)
    return i;
  const s = n[a];
  if (ot(e, s) || s.subject.withPlaceholder)
    return i;
  const c = ma(s, e, t);
  return kr(i, c);
}, dt = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = r || e.viewport, s = n || e.dimensions, c = t || e.current.client.selection, d = ke(c, e.initial.client.selection), u = {
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
  const m = s.draggables[e.critical.draggable.id], g = o || ba({
    pageOffset: l.offset,
    draggable: m,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), x = lu({
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
      droppables: x
    },
    impact: g,
    viewport: a,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function du(e, t) {
  return e.map((n) => t[n]);
}
var xa = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = du(i.all, n), s = ht({
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
}, ya = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const a = rn({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return Sr({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, wa = ({
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
  const u = s[d], l = xa({
    impact: r,
    viewport: o,
    destination: u,
    draggables: a
  }), p = ya({
    impact: l,
    draggable: c,
    droppable: u,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return dt({
    impact: l,
    clientSelection: p,
    state: e,
    dimensions: i,
    viewport: o
  });
}, pu = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Ea = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = Ot(t.axis, e.displaceBy), i = He(t.descriptor.id, n), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? v(!1, "Expected draggable to be inside home list") : v());
  const s = i.slice(a + 1), c = s.reduce((p, m) => (p[m.descriptor.id] = !0, p), {}), d = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: ht({
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
        destination: pu(e.descriptor)
      }
    },
    afterCritical: d
  };
}, uu = (e, t) => ({
  draggables: e.draggables,
  droppables: kr(e.droppables, t)
});
const St = (e) => {
  process.env.NODE_ENV;
}, kt = (e) => {
  process.env.NODE_ENV;
};
var fu = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = zt(e.client, t), o = Gt(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, mu = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Expected Droppable to have a frame") : v()), t;
}, gu = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = mu(a).scroll.diff.value, d = Ne(r, c);
    return fu({
      draggable: o,
      offset: d,
      initialWindowScroll: n.scroll.initial
    });
  });
}, vu = ({
  state: e,
  published: t
}) => {
  St();
  const n = t.modified.map((D) => {
    const y = e.dimensions.droppables[D.droppableId];
    return wr(y, D.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...oa(n)
  }, o = ia(gu({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((D) => {
    delete i[D];
  });
  const a = {
    droppables: r,
    draggables: i
  }, s = Ie(e.impact), c = s ? a.droppables[s] : null, d = a.draggables[e.critical.draggable.id], u = a.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: p
  } = Ea({
    draggable: d,
    home: u,
    draggables: i,
    viewport: e.viewport
  }), m = c && c.isCombineEnabled ? e.impact : l, g = ba({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: m,
    viewport: e.viewport,
    afterCritical: p
  });
  kt();
  const x = {
    ...e,
    phase: "DRAGGING",
    impact: g,
    onLiftImpact: l,
    dimensions: a,
    afterCritical: p,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? x : {
    ...x,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const Qn = (e) => e.movementMode === "SNAP", Dn = (e, t, n) => {
  const r = uu(e.dimensions, t);
  return !Qn(e) || n ? dt({
    state: e,
    dimensions: r
  }) : wa({
    state: e,
    dimensions: r
  });
};
function On(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const _o = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var hu = (e = _o, t) => {
  if (t.type === "FLUSH")
    return {
      ..._o,
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
    }, l = en(i.droppables).every((x) => !x.isFixedOnPage), {
      impact: p,
      afterCritical: m
    } = Ea({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? v(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : v()), vu({
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
    return Ve(n, e.current.client.selection) ? e : dt({
      state: e,
      clientSelection: n,
      impact: Qn(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return On(e);
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `${t.type} not permitted in phase ${e.phase}`) : v());
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = wr(o, r);
    return Dn(e, i, !1);
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
    return Dn(e, i, !0);
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
    return Dn(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot move by window in phase ${e.phase}`) : v()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? v(!1, "Window scrolling is currently not supported for fixed lists") : v());
    const n = t.payload.newScroll;
    if (Ve(e.viewport.scroll.current, n))
      return On(e);
    const r = pa(e.viewport, n);
    return Qn(e) ? wa({
      state: e,
      viewport: r
    }) : dt({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!We(e))
      return e;
    const n = t.payload.maxScroll;
    if (Ve(n, e.viewport.scroll.max))
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
    const n = Zp({
      state: e,
      type: t.type
    });
    return n ? dt({
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
function ue(e, t) {
  return e instanceof Object && "type" in e && e.type === t;
}
const bu = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), xu = (e) => ({
  type: "LIFT",
  payload: e
}), yu = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), wu = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), Eu = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Nu = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), Du = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), Ou = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Na = (e) => ({
  type: "MOVE",
  payload: e
}), Su = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), ku = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Iu = () => ({
  type: "MOVE_UP",
  payload: null
}), Cu = () => ({
  type: "MOVE_DOWN",
  payload: null
}), _u = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Au = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Ir = () => ({
  type: "FLUSH",
  payload: null
}), Pu = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Cr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Da = (e) => ({
  type: "DROP",
  payload: e
}), Ru = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Oa = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function Tu(e) {
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
  process.env.NODE_ENV !== "production" && ge(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${r}
  `);
}
function Mu(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = He(e.droppable.id, t.draggables);
    Tu(n);
  }
}
var ju = (e) => ({
  getState: t,
  dispatch: n
}) => (r) => (o) => {
  if (!ue(o, "LIFT")) {
    r(o);
    return;
  }
  const {
    id: i,
    clientSelection: a,
    movementMode: s
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && n(Cr({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Unexpected phase to start a drag") : v()), n(Ir()), n(bu({
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
  Mu(l, p), n(yu({
    critical: l,
    dimensions: p,
    clientSelection: a,
    movementMode: s,
    viewport: m
  }));
}, $u = (e) => () => (t) => (n) => {
  ue(n, "INITIAL_PUBLISH") && e.dragging(), ue(n, "DROP_ANIMATE") && e.dropping(n.payload.completed.result.reason), (ue(n, "FLUSH") || ue(n, "DROP_COMPLETE")) && e.resting(), t(n);
};
const _r = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, bt = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Sa = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ge = `${Sa.outOfTheWay}s ${_r.outOfTheWay}`, pt = {
  fluid: `opacity ${Ge}`,
  snap: `transform ${Ge}, opacity ${Ge}`,
  drop: (e) => {
    const t = `${e}s ${_r.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ge}`,
  placeholder: `height ${Ge}, width ${Ge}, margin ${Ge}`
}, Ao = (e) => Ve(e, we) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Zn = {
  moveTo: Ao,
  drop: (e, t) => {
    const n = Ao(e);
    if (n)
      return t ? `${n} scale(${bt.scale.drop})` : n;
  }
}, {
  minDropTime: er,
  maxDropTime: ka
} = Sa, Lu = ka - er, Po = 1500, Bu = 0.6;
var Fu = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = gt(e, t);
  if (r <= 0)
    return er;
  if (r >= Po)
    return ka;
  const o = r / Po, i = er + Lu * o, a = n === "CANCEL" ? i * Bu : i;
  return Number(a.toFixed(2));
}, Vu = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = n, s = Ie(e), c = s ? a[s] : null, d = a[t.descriptor.droppableId], u = ya({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || d,
    viewport: r
  });
  return ke(u, t.client.borderBox.center);
}, zu = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: xa({
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
    displaced: vt
  },
  didDropInsideDroppable: !0
};
const Gu = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (!ue(r, "DROP")) {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Ru({
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
  } = zu({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), p = l ? Er(u) : null, m = l ? tn(u) : null, g = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, x = {
    draggableId: d.descriptor.id,
    type: d.descriptor.type,
    source: g,
    reason: i,
    mode: o.movementMode,
    destination: p,
    combine: m
  }, h = Vu({
    impact: u,
    draggable: d,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), D = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: x,
    impact: u
  };
  if (!(!Ve(o.current.client.offset, h) || !!x.combine)) {
    t(Cr({
      completed: D
    }));
    return;
  }
  const E = Fu({
    current: o.current.client.offset,
    destination: h,
    reason: i
  });
  t(Pu({
    newHomeClientOffset: h,
    dropDuration: E,
    completed: D
  }));
};
var Ia = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Wu(e) {
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
function qu({
  onWindowScroll: e
}) {
  function t() {
    e(Ia());
  }
  const n = ft(t), r = Wu(n);
  let o = Fe;
  function i() {
    return o !== Fe;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start scroll listener when already active") : v()), o = Ae(window, [r]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop scroll listener when not active") : v()), n.cancel(), o(), o = Fe;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const Uu = (e) => ue(e, "DROP_COMPLETE") || ue(e, "DROP_ANIMATE") || ue(e, "FLUSH"), Hu = (e) => {
  const t = qu({
    onWindowScroll: (n) => {
      e.dispatch(Su({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && ue(r, "INITIAL_PUBLISH") && t.start(), t.isActive() && Uu(r) && t.stop(), n(r);
  };
};
var Yu = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && ge("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && ge(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(r);
  };
  return o.wasCalled = () => t, o;
}, Ku = () => {
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
const Xu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Ju = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Qu = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, at = (e, t) => {
  St(), t(), kt();
}, Tt = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Sn(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = Yu(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var Zu = (e, t) => {
  const n = Ku();
  let r = null;
  const o = (l, p) => {
    r && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : v()), at("onBeforeCapture", () => {
      const m = e().onBeforeCapture;
      m && m({
        draggableId: l,
        mode: p
      });
    });
  }, i = (l, p) => {
    r && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : v()), at("onBeforeDragStart", () => {
      const m = e().onBeforeDragStart;
      m && m(Tt(l, p));
    });
  }, a = (l, p) => {
    r && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : v());
    const m = Tt(l, p);
    r = {
      mode: p,
      lastCritical: l,
      lastLocation: m.source,
      lastCombine: null
    }, n.add(() => {
      at("onDragStart", () => Sn(e().onDragStart, m, t, Lt.onDragStart));
    });
  }, s = (l, p) => {
    const m = Er(p), g = tn(p);
    r || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onDragMove when onDragStart has not been called") : v());
    const x = !Qu(l, r.lastCritical);
    x && (r.lastCritical = l);
    const h = !Xu(r.lastLocation, m);
    h && (r.lastLocation = m);
    const D = !Ju(r.lastCombine, g);
    if (D && (r.lastCombine = g), !x && !h && !D)
      return;
    const y = {
      ...Tt(l, r.mode),
      combine: g,
      destination: m
    };
    n.add(() => {
      at("onDragUpdate", () => Sn(e().onDragUpdate, y, t, Lt.onDragUpdate));
    });
  }, c = () => {
    r || (process.env.NODE_ENV !== "production" ? v(!1, "Can only flush responders while dragging") : v()), n.flush();
  }, d = (l) => {
    r || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : v()), r = null, at("onDragEnd", () => Sn(e().onDragEnd, l, t, Lt.onDragEnd));
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
        ...Tt(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      d(l);
    }
  };
}, ef = (e, t) => {
  const n = Zu(e, t);
  return (r) => (o) => (i) => {
    if (ue(i, "BEFORE_INITIAL_CAPTURE")) {
      n.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (ue(i, "INITIAL_PUBLISH")) {
      const s = i.payload.critical;
      n.beforeStart(s, i.payload.movementMode), o(i), n.start(s, i.payload.movementMode);
      return;
    }
    if (ue(i, "DROP_COMPLETE")) {
      const s = i.payload.completed.result;
      n.flush(), o(i), n.drop(s);
      return;
    }
    if (o(i), ue(i, "FLUSH")) {
      n.abort();
      return;
    }
    const a = r.getState();
    a.phase === "DRAGGING" && n.update(a.critical, a.impact);
  };
};
const tf = (e) => (t) => (n) => {
  if (!ue(n, "DROP_ANIMATION_FINISHED")) {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot finish a drop animating when no drop is occurring") : v()), e.dispatch(Cr({
    completed: r.completed
  }));
}, nf = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((ue(i, "FLUSH") || ue(i, "DROP_COMPLETE") || ue(i, "DROP_ANIMATION_FINISHED")) && r(), o(i), !ue(i, "DROP_ANIMATE"))
      return;
    const a = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Oa());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = Ae(window, [a]);
    });
  };
};
var rf = (e) => () => (t) => (n) => {
  (ue(n, "DROP_COMPLETE") || ue(n, "FLUSH") || ue(n, "DROP_ANIMATE")) && e.stopPublishing(), t(n);
}, of = (e) => {
  let t = !1;
  return () => (n) => (r) => {
    if (ue(r, "INITIAL_PUBLISH")) {
      t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
      return;
    }
    if (n(r), !!t) {
      if (ue(r, "FLUSH")) {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (ue(r, "DROP_COMPLETE")) {
        t = !1;
        const o = r.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const af = (e) => ue(e, "DROP_COMPLETE") || ue(e, "DROP_ANIMATE") || ue(e, "FLUSH");
var sf = (e) => (t) => (n) => (r) => {
  if (af(r)) {
    e.stop(), n(r);
    return;
  }
  if (ue(r, "INITIAL_PUBLISH")) {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? v(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : v()), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const cf = (e) => (t) => (n) => {
  if (t(n), !ue(n, "PUBLISH_WHILE_DRAGGING"))
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(Da({
    reason: r.reason
  })));
}, lf = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : $i;
var df = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => ji(hu, lf(rd($u(n), rf(e), ju(e), Gu, tf, nf, cf, sf(i), Hu, of(t), ef(r, o))));
const kn = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function pf({
  registry: e,
  callbacks: t
}) {
  let n = kn(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, St();
      const {
        additions: c,
        removals: d,
        modified: u
      } = n, l = Object.keys(c).map((g) => e.draggable.getById(g).getDimension(we)).sort((g, x) => g.descriptor.index - x.descriptor.index), p = Object.keys(u).map((g) => {
        const h = e.droppable.getById(g).callbacks.getScrollWhileDragging();
        return {
          droppableId: g,
          scroll: h
        };
      }), m = {
        additions: l,
        removals: Object.keys(d),
        modified: p
      };
      n = kn(), kt(), t.publish(m);
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
      r && (cancelAnimationFrame(r), r = null, n = kn());
    }
  };
}
var Ca = ({
  scrollHeight: e,
  scrollWidth: t,
  height: n,
  width: r
}) => {
  const o = ke({
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
}, _a = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find document.documentElement") : v()), e;
}, Aa = () => {
  const e = _a();
  return Ca({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, uf = () => {
  const e = Ia(), t = Aa(), n = e.y, r = e.x, o = _a(), i = o.clientWidth, a = o.clientHeight, s = r + i, c = n + a;
  return {
    frame: Te({
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
}, ff = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  St();
  const r = uf(), o = r.scroll.current, i = e.droppable, a = n.droppable.getAllByType(i.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), s = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o)), c = {
    draggables: ia(s),
    droppables: oa(a)
  };
  return kt(), {
    dimensions: c,
    critical: e,
    viewport: r
  };
};
function Ro(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && ge(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var mf = (e, t) => {
  let n = null;
  const r = pf({
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
    p.type === "ADDITION" && Ro(e, m, p.value) && r.add(p.value), p.type === "REMOVAL" && Ro(e, m, p.value) && r.remove(p.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (p) => {
      n && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start capturing critical dimensions as there is already a collection") : v());
      const m = e.draggable.getById(p.draggableId), g = e.droppable.getById(m.descriptor.droppableId), x = {
        draggable: m.descriptor,
        droppable: g.descriptor
      }, h = e.subscribe(d);
      return n = {
        critical: x,
        unsubscribe: h
      }, ff({
        critical: x,
        registry: e,
        scrollOptions: p.scrollOptions
      });
    },
    stopPublishing: c
  };
}, Pa = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", gf = (e) => {
  window.scrollBy(e.x, e.y);
};
const vf = ye((e) => en(e).filter((t) => !(!t.isEnabled || !t.frame))), hf = (e, t) => vf(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? v(!1, "Invalid result") : v()), ga(r.frame.pageMarginBox)(e))) || null;
var bf = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return hf(e, n);
};
const xt = {
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
var xf = (e, t, n = () => xt) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Ra = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? (process.env.NODE_ENV !== "production" && ge(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (n - e) / r;
}, Ar = 1, yf = (e, t, n = () => xt) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Ar;
  const i = 1 - Ra({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = r.maxPixelScroll * r.ease(i);
  return Math.ceil(a);
}, wf = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, a = t, s = i, d = Date.now() - a;
  if (d >= i)
    return e;
  if (d < o)
    return Ar;
  const u = Ra({
    startOfRange: o,
    endOfRange: s,
    current: d
  }), l = e * r.ease(u);
  return Math.ceil(l);
}, To = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = yf(e, t, o);
  return i === 0 ? 0 : r ? Math.max(wf(i, n, o), Ar) : i;
}, Mo = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = xf(e, r, i);
  return t[r.end] < t[r.start] ? To({
    distanceToEdge: t[r.end],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * To({
    distanceToEdge: t[r.start],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, Ef = ({
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
const Nf = ra((e) => e === 0 ? 0 : e);
var Ta = ({
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
  }, s = Mo({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Nr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = Mo({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: ca,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), d = Nf({
    x: c,
    y: s
  });
  if (Ve(d, we))
    return null;
  const u = Ef({
    container: t,
    subject: n,
    proposedScroll: d
  });
  return u ? Ve(u, we) ? null : u : null;
};
const Df = ra((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Pr = /* @__PURE__ */ (() => {
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
    return Ve(i, we) ? null : i;
  };
})(), Ma = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Df(n), i = Pr({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Rr = (e, t) => Ma({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Of = (e, t) => {
  if (!Rr(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return Pr({
    current: r,
    max: n,
    change: t
  });
}, Tr = (e, t) => {
  const n = e.frame;
  return n ? Ma({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, Sf = (e, t) => {
  const n = e.frame;
  return !n || !Tr(e, t) ? null : Pr({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var kf = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Ta({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Rr(e, a) ? a : null;
}, If = ({
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
  const s = Ta({
    dragStartTime: r,
    container: a.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && Tr(e, s) ? s : null;
}, jo = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, p = kf({
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
  const d = bf({
    center: a,
    destination: Ie(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!d)
    return;
  const u = If({
    dragStartTime: t,
    droppable: d,
    subject: c,
    center: a,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  u && o(d.descriptor.id, u);
}, Cf = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => xt
}) => {
  const r = ft(e), o = ft(t);
  let i = null;
  const a = (d) => {
    i || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fluid scroll if not dragging") : v());
    const {
      shouldUseTimeDampening: u,
      dragStartTime: l
    } = i;
    jo({
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
      St(), i && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start auto scrolling when already started") : v());
      const u = Date.now();
      let l = !1;
      const p = () => {
        l = !0;
      };
      jo({
        state: d,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: p,
        scrollDroppable: p,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: u,
        shouldUseTimeDampening: l
      }, kt(), l && a(d);
    },
    stop: () => {
      i && (r.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, _f = ({
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
    if (!Tr(s, c))
      return c;
    const d = Sf(s, c);
    if (!d)
      return t(s.descriptor.id, c), null;
    const u = ke(c, d);
    return t(s.descriptor.id, u), ke(c, u);
  }, i = (s, c, d) => {
    if (!s || !Rr(c, d))
      return d;
    const u = Of(c, d);
    if (!u)
      return n(d), null;
    const l = ke(d, u);
    return n(l), ke(d, l);
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
}, Af = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = Cf({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = _f({
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
})(), tr = (() => {
  const e = `${Qe}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Pf = (() => {
  const e = `${Qe}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), $o = {
  contextId: `${Qe}-scroll-container-context-id`
}, Rf = (e) => (t) => `[${t}="${e}"]`, st = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), Tf = "pointer-events: none;";
var Mf = (e) => {
  const t = Rf(e), n = (() => {
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
        dragging: Tf,
        dropAnimating: s
      }
    };
  })(), r = (() => {
    const s = `
      transition: ${pt.outOfTheWay};
    `;
    return {
      selector: t(tr.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(Pf.contextId),
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
    always: st(a, "always"),
    resting: st(a, "resting"),
    dragging: st(a, "dragging"),
    dropAnimating: st(a, "dropAnimating"),
    userCancel: st(a, "userCancel")
  };
};
const Ce = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? vi : fe, In = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find the head to append a style to") : v()), e;
}, Lo = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function jf(e, t) {
  const n = oe(() => Mf(e), [e]), r = Z(null), o = Z(null), i = H(ye((l) => {
    const p = o.current;
    p || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot set dynamic style element if it is not set") : v()), p.textContent = l;
  }), []), a = H((l) => {
    const p = r.current;
    p || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot set dynamic style element if it is not set") : v()), p.textContent = l;
  }, []);
  Ce(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? v(!1, "style elements already mounted") : v());
    const l = Lo(t), p = Lo(t);
    return r.current = l, o.current = p, l.setAttribute(`${Qe}-always`, e), p.setAttribute(`${Qe}-dynamic`, e), In().appendChild(l), In().appendChild(p), a(n.always), i(n.resting), () => {
      const m = (g) => {
        const x = g.current;
        x || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot unmount ref as it is not set") : v()), In().removeChild(x), g.current = null;
      };
      m(r), m(o);
    };
  }, [t, a, i, n.always, n.resting, e]);
  const s = H(() => i(n.dragging), [i, n.dragging]), c = H((l) => {
    if (l === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), d = H(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return oe(() => ({
    dragging: s,
    dropping: c,
    resting: d
  }), [s, c, d]);
}
function ja(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var $a = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function It(e) {
  return e instanceof $a(e).HTMLElement;
}
function La(e, t) {
  const n = `[${Ze.contextId}="${e}"]`, r = ja(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && ge(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(Ze.draggableId) === t);
  return o ? It(o) ? o : (process.env.NODE_ENV !== "production" && ge("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ge(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function $f(e) {
  const t = Z({}), n = Z(null), r = Z(null), o = Z(!1), i = H(function(p, m) {
    const g = {
      id: p,
      focus: m
    };
    return t.current[p] = g, function() {
      const h = t.current;
      h[p] !== g && delete h[p];
    };
  }, []), a = H(function(p) {
    const m = La(e, p);
    m && m !== document.activeElement && m.focus();
  }, [e]), s = H(function(p, m) {
    n.current === p && (n.current = m);
  }, []), c = H(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const p = n.current;
      p && a(p);
    }));
  }, [a]), d = H(function(p) {
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
function Lf() {
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
function Bf() {
  const e = oe(Lf, []);
  return fe(() => function() {
    e.clean();
  }, [e]), e;
}
var Mr = he.createContext(null), yt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find document.body") : v()), e;
};
const Ff = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
}, Vf = (e) => `rfd-announcement-${e}`;
function zf(e) {
  const t = oe(() => Vf(e), [e]), n = Z(null);
  return fe(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Wt(i.style, Ff), yt().appendChild(i), function() {
      setTimeout(function() {
        const c = yt();
        c.contains(i) && c.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), H((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && ge(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
const Gf = {
  separator: "::"
};
function jr(e, t = Gf) {
  const n = he.useId();
  return oe(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
function Wf({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function qf({
  contextId: e,
  text: t
}) {
  const n = jr("hidden-text", {
    separator: "-"
  }), r = oe(() => Wf({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return fe(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", yt().appendChild(i), function() {
      const s = yt();
      s.contains(i) && s.removeChild(i);
    };
  }, [r, t]), r;
}
var on = he.createContext(null), Uf = {
  react: "^18.0.0 || ^19.0.0"
};
const Hf = /(\d+)\.(\d+)\.(\d+)/, Bo = (e) => {
  const t = Hf.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? v(!1, `Unable to parse React version ${e}`) : v());
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, Yf = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Kf = (e, t) => {
  const n = Bo(e), r = Bo(t);
  Yf(n, r) || process.env.NODE_ENV !== "production" && ge(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Cn = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Xf = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && ge(`
      No <!doctype html> found.

      ${Cn}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && ge(`
      Unexpected <!doctype> found: (${t.name})

      ${Cn}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && ge(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Cn}
    `);
};
function $r(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Ct(e, t) {
  $r(() => {
    fe(() => {
      try {
        e();
      } catch (n) {
        Xn(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function Jf() {
  Ct(() => {
    Kf(Uf.react, he.version), Xf(document);
  }, []);
}
function Lr(e) {
  const t = Z(e);
  return fe(() => {
    t.current = e;
  }), t;
}
function Qf() {
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
function wt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Zf = 9, em = 13, Br = 27, Ba = 32, tm = 33, nm = 34, rm = 35, om = 36, im = 37, am = 38, sm = 39, cm = 40, lm = {
  [em]: !0,
  [Zf]: !0
};
var Fa = (e) => {
  lm[e.keyCode] && e.preventDefault();
};
const an = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})(), Va = 0, Fo = 5;
function dm(e, t) {
  return Math.abs(t.x - e.x) >= Fo || Math.abs(t.y - e.y) >= Fo;
}
const Vo = {
  type: "IDLE"
};
function pm({
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
      if (i !== Va)
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
      if (!dm(u, c))
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
      if (o.keyCode === Br) {
        o.preventDefault(), e();
        return;
      }
      Fa(o);
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
    eventName: an,
    fn: e
  }];
}
function um(e) {
  const t = Z(Vo), n = Z(Fe), r = oe(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== Va || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
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
  }), [e]), i = H(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    n.current = Ae(window, [o, r], l);
  }, [o, r]), a = H(() => {
    t.current.type !== "IDLE" && (t.current = Vo, n.current(), i());
  }, [i]), s = H(() => {
    const u = t.current;
    a(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [a]), c = H(function() {
    const l = {
      capture: !0,
      passive: !1
    }, p = pm({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (m) => {
        t.current = m;
      }
    });
    n.current = Ae(window, p, l);
  }, [s, a]), d = H(function(l, p) {
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
function fm() {
}
const mm = {
  [nm]: !0,
  [tm]: !0,
  [om]: !0,
  [rm]: !0
};
function gm(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Br) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Ba) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === cm) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === am) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === sm) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === im) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (mm[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Fa(o);
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
    eventName: an,
    fn: n
  }];
}
function vm(e) {
  const t = Z(fm), n = oe(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Ba)
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
      t.current = Ae(window, gm(d, u), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = H(function() {
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
const _n = {
  type: "IDLE"
}, hm = 120, bm = 0.15;
function xm({
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
      n.keyCode === Br && n.preventDefault(), e();
    }
  }, {
    eventName: an,
    fn: e
  }];
}
function ym({
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
      if (!i || !(i.force >= bm))
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
    eventName: an,
    fn: e
  }];
}
function wm(e) {
  const t = Z(_n), n = Z(Fe), r = H(function() {
    return t.current;
  }, []), o = H(function(m) {
    t.current = m;
  }, []), i = oe(() => ({
    eventName: "touchstart",
    fn: function(m) {
      if (m.defaultPrevented)
        return;
      const g = e.findClosestDraggableId(m);
      if (!g)
        return;
      const x = e.tryGetLock(g, s, {
        sourceEvent: m
      });
      if (!x)
        return;
      const h = m.touches[0], {
        clientX: D,
        clientY: y
      } = h, E = {
        x: D,
        y
      };
      n.current(), l(x, E);
    }
  }), [e]), a = H(function() {
    const m = {
      capture: !0,
      passive: !1
    };
    n.current = Ae(window, [i], m);
  }, [i]), s = H(() => {
    const p = t.current;
    p.type !== "IDLE" && (p.type === "PENDING" && clearTimeout(p.longPressTimerId), o(_n), n.current(), a());
  }, [a, o]), c = H(() => {
    const p = t.current;
    s(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [s]), d = H(function() {
    const m = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: c,
      completed: s,
      getPhase: r
    }, x = Ae(window, ym(g), m), h = Ae(window, xm(g), m);
    n.current = function() {
      x(), h();
    };
  }, [c, r, s]), u = H(function() {
    const m = r();
    m.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? v(!1, `Cannot start dragging from phase ${m.type}`) : v());
    const g = m.actions.fluidLift(m.point);
    o({
      type: "DRAGGING",
      actions: g,
      hasMoved: !1
    });
  }, [r, o]), l = H(function(m, g) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Expected to move from IDLE to PENDING drag") : v());
    const x = setTimeout(u, hm);
    o({
      type: "PENDING",
      point: g,
      actions: m,
      longPressTimerId: x
    }), d();
  }, [d, r, o, u]);
  Ce(function() {
    return a(), function() {
      n.current();
      const g = r();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), o(_n));
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
function Em(e) {
  $r(() => {
    const t = Lr(e);
    Ct(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot change the amount of sensor hooks after mounting") : v(!1));
    });
  });
}
const Nm = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function za(e, t) {
  if (t == null)
    return !1;
  if (Nm.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : za(e, t.parentElement);
}
function Dm(e, t) {
  const n = t.target;
  return It(n) ? za(e, n) : !1;
}
var Om = (e) => Te(e.getBoundingClientRect()).center;
function Sm(e) {
  return e instanceof $a(e).Element;
}
const km = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function Ga(e, t) {
  return e == null ? null : e[km](t) ? e : Ga(e.parentElement, t);
}
function Im(e, t) {
  return e.closest ? e.closest(t) : Ga(e, t);
}
function Cm(e) {
  return `[${Ze.contextId}="${e}"]`;
}
function _m(e, t) {
  const n = t.target;
  if (!Sm(n))
    return process.env.NODE_ENV !== "production" && ge("event.target must be a Element"), null;
  const r = Cm(e), o = Im(n, r);
  return o ? It(o) ? o : (process.env.NODE_ENV !== "production" && ge("drag handle must be a HTMLElement"), null) : null;
}
function Am(e, t) {
  const n = _m(e, t);
  return n ? n.getAttribute(Ze.draggableId) : null;
}
function Pm(e, t) {
  const n = `[${tr.contextId}="${e}"]`, o = ja(document, n).find((i) => i.getAttribute(tr.id) === t);
  return o ? It(o) ? o : (process.env.NODE_ENV !== "production" && ge("Draggable element is not a HTMLElement"), null) : null;
}
function Rm(e) {
  e.preventDefault();
}
function Mt({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return n() ? e !== t ? (r && process.env.NODE_ENV !== "production" && ge(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (r && process.env.NODE_ENV !== "production" && ge(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Wa({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !Pa(t.getState(), r)) : (process.env.NODE_ENV !== "production" && ge(`Unable to find draggable with id: ${r}`), !1);
}
function Tm({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Wa({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), d = Pm(t, c.descriptor.id);
  if (!d)
    return process.env.NODE_ENV !== "production" && ge(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && Dm(d, a))
    return null;
  const u = e.claim(i || Fe);
  let l = "PRE_DRAG";
  function p() {
    return c.options.shouldRespectForcePress;
  }
  function m() {
    return e.isActive(u);
  }
  function g(b, N) {
    Mt({
      expected: b,
      phase: l,
      isLockActive: m,
      shouldWarn: !0
    }) && n.dispatch(N());
  }
  const x = g.bind(null, "DRAGGING");
  function h(b) {
    function N() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (N(), process.env.NODE_ENV !== "production" ? v(!1, `Cannot lift in phase ${l}`) : v()), n.dispatch(xu(b.liftActionArgs)), l = "DRAGGING";
    function A(j, q = {
      shouldBlockNextClick: !1
    }) {
      if (b.cleanup(), q.shouldBlockNextClick) {
        const I = Ae(window, [{
          eventName: "click",
          fn: Rm,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(I);
      }
      N(), n.dispatch(Da({
        reason: j
      }));
    }
    return {
      isActive: () => Mt({
        expected: "DRAGGING",
        phase: l,
        isLockActive: m,
        shouldWarn: !1
      }),
      shouldRespectForcePress: p,
      drop: (j) => A("DROP", j),
      cancel: (j) => A("CANCEL", j),
      ...b.actions
    };
  }
  function D(b) {
    const N = ft((j) => {
      x(() => Na({
        client: j
      }));
    });
    return {
      ...h({
        liftActionArgs: {
          id: o,
          clientSelection: b,
          movementMode: "FLUID"
        },
        cleanup: () => N.cancel(),
        actions: {
          move: N
        }
      }),
      move: N
    };
  }
  function y() {
    const b = {
      moveUp: () => x(Iu),
      moveRight: () => x(_u),
      moveDown: () => x(Cu),
      moveLeft: () => x(Au)
    };
    return h({
      liftActionArgs: {
        id: o,
        clientSelection: Om(d),
        movementMode: "SNAP"
      },
      cleanup: Fe,
      actions: b
    });
  }
  function E() {
    Mt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: m,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Mt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: m,
      shouldWarn: !1
    }),
    shouldRespectForcePress: p,
    fluidLift: D,
    snapLift: y,
    abort: E
  };
}
const Mm = [um, vm, wm];
function jm({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? Mm : [], ...r || []], a = se(() => Qf())[0], s = H(function(h, D) {
    wt(h) && !wt(D) && a.tryAbandon();
  }, [a]);
  Ce(function() {
    let h = t.getState();
    return t.subscribe(() => {
      const y = t.getState();
      s(h, y), h = y;
    });
  }, [a, t, s]), Ce(() => a.tryAbandon, [a.tryAbandon]);
  const c = H((x) => Wa({
    lockAPI: a,
    registry: n,
    store: t,
    draggableId: x
  }), [a, n, t]), d = H((x, h, D) => Tm({
    lockAPI: a,
    registry: n,
    contextId: e,
    store: t,
    draggableId: x,
    forceSensorStop: h || null,
    sourceEvent: D && D.sourceEvent ? D.sourceEvent : null
  }), [e, a, n, t]), u = H((x) => Am(e, x), [e]), l = H((x) => {
    const h = n.draggable.findById(x);
    return h ? h.options : null;
  }, [n.draggable]), p = H(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Ir()));
  }, [a, t]), m = H(() => a.isClaimed(), [a]), g = oe(() => ({
    canGetLock: c,
    tryGetLock: d,
    findClosestDraggableId: u,
    findOptionsForDraggable: l,
    tryReleaseLock: p,
    isLockClaimed: m
  }), [c, d, u, l, p, m]);
  Em(i);
  for (let x = 0; x < i.length; x++)
    i[x](g);
}
const $m = (e) => ({
  onBeforeCapture: (t) => {
    hi(() => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    });
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Lm = (e) => ({
  ...xt,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...xt.durationDampening,
    ...e.autoScrollerOptions
  }
});
function ct(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find store from lazy ref") : v()), e.current;
}
function Bm(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = Z(null);
  Jf();
  const s = Lr(e), c = H(() => $m(s.current), [s]), d = H(() => Lm(s.current), [s]), u = zf(t), l = qf({
    contextId: t,
    text: i
  }), p = jf(t, o), m = H((I) => {
    ct(a).dispatch(I);
  }, []), g = oe(() => so({
    publishWhileDragging: wu,
    updateDroppableScroll: Nu,
    updateDroppableIsEnabled: Du,
    updateDroppableIsCombineEnabled: Ou,
    collectionStarting: Eu
  }, m), [m]), x = Bf(), h = oe(() => mf(x, g), [x, g]), D = oe(() => Af({
    scrollWindow: gf,
    scrollDroppable: h.scrollDroppable,
    getAutoScrollerOptions: d,
    ...so({
      move: Na
    }, m)
  }), [h.scrollDroppable, m, d]), y = $f(t), E = oe(() => df({
    announce: u,
    autoScroller: D,
    dimensionMarshal: h,
    focusMarshal: y,
    getResponders: c,
    styleMarshal: p
  }), [u, D, h, y, c, p]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== E && process.env.NODE_ENV !== "production" && ge("unexpected store change"), a.current = E;
  const w = H(() => {
    const I = ct(a);
    I.getState().phase !== "IDLE" && I.dispatch(Ir());
  }, []), b = H(() => {
    const I = ct(a).getState();
    return I.phase === "DROP_ANIMATING" ? !0 : I.phase === "IDLE" ? !1 : I.isDragging;
  }, []), N = oe(() => ({
    isDragging: b,
    tryAbort: w
  }), [b, w]);
  n(N);
  const A = H((I) => Pa(ct(a).getState(), I), []), j = H(() => We(ct(a).getState()), []), q = oe(() => ({
    marshal: h,
    focus: y,
    contextId: t,
    canLift: A,
    isMovementAllowed: j,
    dragHandleUsageInstructionsId: l,
    registry: x
  }), [t, h, l, y, A, j, x]);
  return jm({
    contextId: t,
    store: E,
    registry: x,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), fe(() => w, [w]), he.createElement(on.Provider, {
    value: q
  }, he.createElement(Xd, {
    context: Mr,
    store: E
  }, e.children));
}
function Fm() {
  return he.useId();
}
function Fr(e) {
  const t = Fm(), n = e.dragHandleUsageInstructions || Lt.dragHandleUsageInstructions;
  return he.createElement(cp, null, (r) => he.createElement(Bm, {
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
const zo = {
  dragging: 5e3,
  dropAnimating: 4500
}, Vm = (e, t) => t ? pt.drop(t.duration) : e ? pt.snap : pt.fluid, zm = (e, t) => {
  if (e)
    return t ? bt.opacity.drop : bt.opacity.combining;
}, Gm = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Wm(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = Gm(e), c = !!i, d = c ? Zn.drop(r, a) : Zn.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: Vm(s, i),
    transform: d,
    opacity: zm(a, c),
    zIndex: c ? zo.dropAnimating : zo.dragging,
    pointerEvents: "none"
  };
}
function qm(e) {
  return {
    transform: Zn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Um(e) {
  return e.type === "DRAGGING" ? Wm(e) : qm(e);
}
function Hm(e, t, n = we) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Ji(o, r), a = Gt(i, n), s = {
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
function Ym(e) {
  const t = jr("draggable"), {
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
  }), [i, s, a]), d = H((m) => {
    const g = o();
    return g || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot get dimension when no ref is set") : v()), Hm(n, g, m);
  }, [n, o]), u = oe(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: d
  }), [n, d, c, t]), l = Z(u), p = Z(!0);
  Ce(() => (r.draggable.register(l.current), () => r.draggable.unregister(l.current)), [r.draggable]), Ce(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const m = l.current;
    l.current = u, r.draggable.update(u, m);
  }, [u, r.draggable]);
}
var Vr = he.createContext(null);
function qa(e) {
  e && It(e) || (process.env.NODE_ENV !== "production" ? v(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : v());
}
function Km(e, t, n) {
  Ct(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? v(!1, "Draggable requires a draggableId") : v(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? v(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : v(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? v(!1, `${r(o)} requires an integer index prop`) : v(!1)), e.mapped.type !== "DRAGGING" && (qa(n()), e.isEnabled && (La(t, o) || (process.env.NODE_ENV !== "production" ? v(!1, `${r(o)} Unable to find drag handle`) : v(!1))));
  });
}
function Xm(e) {
  $r(() => {
    const t = Z(e);
    Ct(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? v(!1, "Draggable isClone prop value changed during component life") : v(!1));
    }, [e]);
  });
}
function Ht(e) {
  const t = Nt(e);
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find required context") : v()), t;
}
function Jm(e) {
  e.preventDefault();
}
const Qm = (e) => {
  const t = Z(null), n = H((N = null) => {
    t.current = N;
  }, []), r = H(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Ht(on), {
    type: s,
    droppableId: c
  } = Ht(Vr), d = oe(() => ({
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
    isClone: x,
    mapped: h,
    dropAnimationFinished: D
  } = e;
  if (Km(e, o, r), Xm(x), !x) {
    const N = oe(() => ({
      descriptor: d,
      registry: a,
      getDraggableRef: r,
      canDragInteractiveElements: g,
      shouldRespectForcePress: m,
      isEnabled: p
    }), [d, a, r, g, m, p]);
    Ym(N);
  }
  const y = oe(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Jm
  } : null, [o, i, l, p]), E = H((N) => {
    h.type === "DRAGGING" && h.dropping && N.propertyName === "transform" && hi(D);
  }, [D, h]), w = oe(() => {
    const N = Um(h), A = h.type === "DRAGGING" && h.dropping ? E : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: N,
        onTransitionEnd: A
      },
      dragHandleProps: y
    };
  }, [o, y, l, h, E, n]), b = oe(() => ({
    draggableId: d.id,
    type: d.type,
    source: {
      index: d.index,
      droppableId: d.droppableId
    }
  }), [d.droppableId, d.id, d.index, d.type]);
  return he.createElement(he.Fragment, null, u(w, h.snapshot, b));
};
var Ua = (e, t) => e === t, Ha = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const Zm = (e) => e.combine ? e.combine.draggableId : null, eg = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function tg() {
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
    if (wt(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = Ie(o.impact), d = eg(o.impact), u = o.forceShouldAnimate;
      return n(e(a.x, a.y), o.movementMode, s, i.isClone, c, d, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], d = a.result, u = d.mode, l = Ha(d), p = Zm(d), g = {
        duration: o.dropDuration,
        curve: _r.drop,
        moveTo: o.newHomeClientOffset,
        opacity: p ? bt.opacity.drop : null,
        scale: p ? bt.scale.drop : null
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
function Ya(e = null) {
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
const ng = {
  mapped: {
    type: "SECONDARY",
    offset: we,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Ya(null)
  }
};
function rg() {
  const e = ye((a, s) => ({
    x: a,
    y: s
  })), t = ye(Ya), n = ye((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), r = (a) => a ? n(we, a, !0) : null, o = (a, s, c, d) => {
    const u = c.displaced.visible[a], l = !!(d.inVirtualList && d.effected[a]), p = tn(c), m = p && p.draggableId === a ? s : null;
    if (!u) {
      if (!l)
        return r(m);
      if (c.displaced.invisible[a])
        return null;
      const h = rt(d.displacedBy.point), D = e(h.x, h.y);
      return n(D, m, !0);
    }
    if (l)
      return r(m);
    const g = c.displacedBy.point, x = e(g.x, g.y);
    return n(x, m, u.shouldAnimate);
  };
  return (a, s) => {
    if (wt(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const c = a.completed;
      return c.result.draggableId === s.draggableId ? null : o(s.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const og = () => {
  const e = tg(), t = rg();
  return (r, o) => e(r, o) || t(r, o) || ng;
}, ig = {
  dropAnimationFinished: Oa
}, ag = Xi(og, ig, null, {
  context: Mr,
  areStatePropsEqual: Ua
})(Qm);
function Ka(e) {
  return Ht(Vr).isUsingCloneFor === e.draggableId && !e.isClone ? null : he.createElement(ag, e);
}
function zr(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return he.createElement(Ka, Wt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const Gr = (e) => (t) => e === t, sg = Gr("scroll"), cg = Gr("auto"), lg = Gr("visible"), Go = (e, t) => t(e.overflowX) || t(e.overflowY), dg = (e, t) => t(e.overflowX) && t(e.overflowY), Xa = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Go(n, sg) || Go(n, cg);
}, pg = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = yt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, v()), !Xa(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return dg(r, lg) || process.env.NODE_ENV !== "production" && ge(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Wr = (e) => e == null ? null : e === document.body ? pg() ? e : null : e === document.documentElement ? null : Xa(e) ? e : Wr(e.parentElement);
var ug = (e) => {
  !e || !Wr(e.parentElement) || process.env.NODE_ENV !== "production" && ge(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, nr = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Ja = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Ja(e.parentElement) : !1;
var fg = (e) => {
  const t = Wr(e), n = Ja(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, mg = ({
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
    } = s, g = Ca({
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
  })(), d = o === "vertical" ? Nr : ca, u = Je({
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
const gg = (e, t) => {
  const n = Qi(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, a = o + t.scrollWidth, c = xr({
    top: r,
    right: a,
    bottom: i,
    left: o
  }, n.border);
  return yr({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var vg = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = n.closestScrollable, d = gg(e, c), u = Gt(d, r), l = (() => {
    if (!c)
      return null;
    const m = Qi(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: m,
      page: Gt(m, r),
      scroll: nr(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return mg({
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
const hg = {
  passive: !1
}, bg = {
  passive: !0
};
var Wo = (e) => e.shouldPublishImmediately ? hg : bg;
const jt = (e) => e && e.env.closestScrollable || null;
function xg(e) {
  const t = Z(null), n = Ht(on), r = jr("droppable"), {
    registry: o,
    marshal: i
  } = n, a = Lr(e), s = oe(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = Z(s), d = oe(() => ye((w, b) => {
    t.current || (process.env.NODE_ENV !== "production" ? v(!1, "Can only update scroll when dragging") : v());
    const N = {
      x: w,
      y: b
    };
    i.updateDroppableScroll(s.id, N);
  }), [s.id, i]), u = H(() => {
    const w = t.current;
    return !w || !w.env.closestScrollable ? we : nr(w.env.closestScrollable);
  }, []), l = H(() => {
    const w = u();
    d(w.x, w.y);
  }, [u, d]), p = oe(() => ft(l), [l]), m = H(() => {
    const w = t.current, b = jt(w);
    if (w && b || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find scroll options while scrolling") : v()), w.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    p();
  }, [p, l]), g = H((w, b) => {
    t.current && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot collect a droppable while a drag is occurring") : v());
    const N = a.current, A = N.getDroppableRef();
    A || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot collect without a droppable ref") : v());
    const j = fg(A), q = {
      ref: A,
      descriptor: s,
      env: j,
      scrollOptions: b
    };
    t.current = q;
    const I = vg({
      ref: A,
      descriptor: s,
      env: j,
      windowScroll: w,
      direction: N.direction,
      isDropDisabled: N.isDropDisabled,
      isCombineEnabled: N.isCombineEnabled,
      shouldClipSubject: !N.ignoreContainerClipping
    }), _ = j.closestScrollable;
    return _ && (_.setAttribute($o.contextId, n.contextId), _.addEventListener("scroll", m, Wo(q.scrollOptions)), process.env.NODE_ENV !== "production" && ug(_)), I;
  }, [n.contextId, s, m, a]), x = H(() => {
    const w = t.current, b = jt(w);
    return w && b || (process.env.NODE_ENV !== "production" ? v(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : v()), nr(b);
  }, []), h = H(() => {
    const w = t.current;
    w || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop drag when no active drag") : v());
    const b = jt(w);
    t.current = null, b && (p.cancel(), b.removeAttribute($o.contextId), b.removeEventListener("scroll", m, Wo(w.scrollOptions)));
  }, [m, p]), D = H((w) => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot scroll when there is no drag") : v());
    const N = jt(b);
    N || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot scroll a droppable with no closest scrollable") : v()), N.scrollTop += w.y, N.scrollLeft += w.x;
  }, []), y = oe(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: x,
    dragStopped: h,
    scroll: D
  }), [h, g, x, D]), E = oe(() => ({
    uniqueId: r,
    descriptor: s,
    callbacks: y
  }), [y, s, r]);
  Ce(() => (c.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && ge("Unsupported: changing the droppableId or type of a Droppable during a drag"), h()), o.droppable.unregister(E);
  }), [y, s, h, E, i, o.droppable]), Ce(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ce(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function An() {
}
const qo = {
  width: 0,
  height: 0,
  margin: gp
}, yg = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? qo : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, wg = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = yg({
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
    transition: n !== "none" ? pt.placeholder : null
  };
}, Eg = (e) => {
  const t = Z(null), n = H(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = se(e.animate === "open");
  fe(() => s ? r !== "open" ? (n(), c(!1), An) : t.current ? An : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : An, [r, s, n]);
  const d = H((l) => {
    l.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), u = wg({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return he.createElement(e.placeholder.tagName, {
    style: u,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: d,
    ref: e.innerRef
  });
};
var Ng = he.memo(Eg);
function Pn(e) {
  return typeof e == "boolean";
}
function Rn(e, t) {
  t.forEach((n) => n(e));
}
const Dg = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? v(!1, "A Droppable requires a droppableId prop") : v()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? v(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : v());
}, function({
  props: t
}) {
  Pn(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? v(!1, "isDropDisabled must be a boolean") : v()), Pn(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? v(!1, "isCombineEnabled must be a boolean") : v()), Pn(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? v(!1, "ignoreContainerClipping must be a boolean") : v());
}, function({
  getDroppableRef: t
}) {
  qa(t());
}], Og = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && ge(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Sg = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? v(!1, "Must provide a clone render function (renderClone) for virtual lists") : v());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? v(!1, "Expected virtual list to not have a placeholder") : v());
}];
function kg(e) {
  Ct(() => {
    Rn(e, Dg), e.props.mode === "standard" && Rn(e, Og), e.props.mode === "virtual" && Rn(e, Sg);
  });
}
class Ig extends he.PureComponent {
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
const Cg = (e) => {
  const t = Nt(on);
  t || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find app context") : v());
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = Z(null), i = Z(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: d,
    direction: u,
    ignoreContainerClipping: l,
    isDropDisabled: p,
    isCombineEnabled: m,
    snapshot: g,
    useClone: x,
    updateViewportMaxScroll: h,
    getContainerForClone: D
  } = e, y = H(() => o.current, []), E = H(($ = null) => {
    o.current = $;
  }, []), w = H(() => i.current, []), b = H(($ = null) => {
    i.current = $;
  }, []);
  kg({
    props: e,
    getDroppableRef: y,
    getPlaceholderRef: w
  });
  const N = H(() => {
    r() && h({
      maxScroll: Aa()
    });
  }, [r, h]);
  xg({
    droppableId: s,
    type: c,
    mode: d,
    direction: u,
    isDropDisabled: p,
    isCombineEnabled: m,
    ignoreContainerClipping: l,
    getDroppableRef: y
  });
  const A = oe(() => he.createElement(Ig, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: $,
    data: G,
    animate: F
  }) => he.createElement(Ng, {
    placeholder: G,
    onClose: $,
    innerRef: b,
    animate: F,
    contextId: n,
    onTransitionEnd: N
  })), [n, N, e.placeholder, e.shouldAnimatePlaceholder, b]), j = oe(() => ({
    innerRef: E,
    placeholder: A,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": n
    }
  }), [n, s, A, E]), q = x ? x.dragging.draggableId : null, I = oe(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: q
  }), [s, q, c]);
  function _() {
    if (!x)
      return null;
    const {
      dragging: $,
      render: G
    } = x, F = he.createElement(Ka, {
      draggableId: $.draggableId,
      index: $.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (Q, W) => G(Q, W, $));
    return ys.createPortal(F, D());
  }
  return he.createElement(Vr.Provider, {
    value: I
  }, a(j, g), _());
};
function _g() {
  return document.body || (process.env.NODE_ENV !== "production" ? v(!1, "document.body is not ready") : v()), document.body;
}
const Uo = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: _g
}, Qa = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Uo)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Uo[n]
    });
  return t;
}, Tn = (e, t) => e === t.droppable.type, Ho = (e, t) => t.draggables[e.draggable.id], Ag = () => {
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
      } : null, x = {
        isDraggingOver: s,
        draggingOverWith: s ? l : null,
        draggingFromThisWith: l,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: d.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: x,
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
    const s = Qa(a), c = s.droppableId, d = s.type, u = !s.isDropDisabled, l = s.renderClone;
    if (wt(i)) {
      const p = i.critical;
      if (!Tn(d, p))
        return t;
      const m = Ho(p, i.dimensions), g = Ie(i.impact) === c;
      return r(c, u, g, g, m, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const p = i.completed;
      if (!Tn(d, p.critical))
        return t;
      const m = Ho(p.critical, i.dimensions);
      return r(c, u, Ha(p.result) === c, Ie(p.impact) === c, m, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const p = i.completed;
      if (!Tn(d, p.critical))
        return t;
      const m = Ie(p.impact) === c, g = !!(p.impact.at && p.impact.at.type === "COMBINE"), x = p.critical.droppable.id === c;
      return m ? g ? e : t : x ? e : t;
    }
    return t;
  };
}, Pg = {
  updateViewportMaxScroll: ku
}, qr = Xi(Ag, Pg, (e, t, n) => ({
  ...Qa(n),
  ...e,
  ...t
}), {
  context: Mr,
  areStatePropsEqual: Ua
})(Cg);
function qv({
  items: e,
  onReorder: t,
  className: n,
  itemClassName: r,
  droppableId: o = "sortable-list"
}) {
  return /* @__PURE__ */ f(Fr, { onDragEnd: (a) => {
    if (!a.destination) return;
    const s = Array.from(e), [c] = s.splice(a.source.index, 1);
    s.splice(a.destination.index, 0, c), t(s);
  }, children: /* @__PURE__ */ f(qr, { droppableId: o, children: (a) => /* @__PURE__ */ k(
    "ul",
    {
      ref: a.innerRef,
      ...a.droppableProps,
      className: O("space-y-2", n),
      children: [
        e.map((s, c) => /* @__PURE__ */ f(zr, { draggableId: s.id, index: c, children: (d, u) => /* @__PURE__ */ k(
          "li",
          {
            ref: d.innerRef,
            ...d.draggableProps,
            className: O(
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
                  className: O(
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
                  className: O(
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
                  className: O(
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
var rr = { exports: {} }, $t = { exports: {} }, de = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yo;
function Rg() {
  if (Yo) return de;
  Yo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function E(b) {
    if (typeof b == "object" && b !== null) {
      var N = b.$$typeof;
      switch (N) {
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
                  return N;
              }
          }
        case n:
          return N;
      }
    }
  }
  function w(b) {
    return E(b) === d;
  }
  return de.AsyncMode = c, de.ConcurrentMode = d, de.ContextConsumer = s, de.ContextProvider = a, de.Element = t, de.ForwardRef = u, de.Fragment = r, de.Lazy = g, de.Memo = m, de.Portal = n, de.Profiler = i, de.StrictMode = o, de.Suspense = l, de.isAsyncMode = function(b) {
    return w(b) || E(b) === c;
  }, de.isConcurrentMode = w, de.isContextConsumer = function(b) {
    return E(b) === s;
  }, de.isContextProvider = function(b) {
    return E(b) === a;
  }, de.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, de.isForwardRef = function(b) {
    return E(b) === u;
  }, de.isFragment = function(b) {
    return E(b) === r;
  }, de.isLazy = function(b) {
    return E(b) === g;
  }, de.isMemo = function(b) {
    return E(b) === m;
  }, de.isPortal = function(b) {
    return E(b) === n;
  }, de.isProfiler = function(b) {
    return E(b) === i;
  }, de.isStrictMode = function(b) {
    return E(b) === o;
  }, de.isSuspense = function(b) {
    return E(b) === l;
  }, de.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === d || b === i || b === o || b === l || b === p || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === m || b.$$typeof === a || b.$$typeof === s || b.$$typeof === u || b.$$typeof === h || b.$$typeof === D || b.$$typeof === y || b.$$typeof === x);
  }, de.typeOf = E, de;
}
var pe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ko;
function Tg() {
  return Ko || (Ko = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function E(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === r || P === d || P === i || P === o || P === l || P === p || typeof P == "object" && P !== null && (P.$$typeof === g || P.$$typeof === m || P.$$typeof === a || P.$$typeof === s || P.$$typeof === u || P.$$typeof === h || P.$$typeof === D || P.$$typeof === y || P.$$typeof === x);
    }
    function w(P) {
      if (typeof P == "object" && P !== null) {
        var le = P.$$typeof;
        switch (le) {
          case t:
            var Se = P.type;
            switch (Se) {
              case c:
              case d:
              case r:
              case i:
              case o:
              case l:
                return Se;
              default:
                var it = Se && Se.$$typeof;
                switch (it) {
                  case s:
                  case u:
                  case g:
                  case m:
                  case a:
                    return it;
                  default:
                    return le;
                }
            }
          case n:
            return le;
        }
      }
    }
    var b = c, N = d, A = s, j = a, q = t, I = u, _ = r, $ = g, G = m, F = n, Q = i, W = o, re = l, ee = !1;
    function ne(P) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(P) || w(P) === c;
    }
    function C(P) {
      return w(P) === d;
    }
    function T(P) {
      return w(P) === s;
    }
    function V(P) {
      return w(P) === a;
    }
    function z(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function B(P) {
      return w(P) === u;
    }
    function Y(P) {
      return w(P) === r;
    }
    function U(P) {
      return w(P) === g;
    }
    function K(P) {
      return w(P) === m;
    }
    function R(P) {
      return w(P) === n;
    }
    function S(P) {
      return w(P) === i;
    }
    function M(P) {
      return w(P) === o;
    }
    function te(P) {
      return w(P) === l;
    }
    pe.AsyncMode = b, pe.ConcurrentMode = N, pe.ContextConsumer = A, pe.ContextProvider = j, pe.Element = q, pe.ForwardRef = I, pe.Fragment = _, pe.Lazy = $, pe.Memo = G, pe.Portal = F, pe.Profiler = Q, pe.StrictMode = W, pe.Suspense = re, pe.isAsyncMode = ne, pe.isConcurrentMode = C, pe.isContextConsumer = T, pe.isContextProvider = V, pe.isElement = z, pe.isForwardRef = B, pe.isFragment = Y, pe.isLazy = U, pe.isMemo = K, pe.isPortal = R, pe.isProfiler = S, pe.isStrictMode = M, pe.isSuspense = te, pe.isValidElementType = E, pe.typeOf = w;
  }()), pe;
}
var Xo;
function Za() {
  return Xo || (Xo = 1, process.env.NODE_ENV === "production" ? $t.exports = Rg() : $t.exports = Tg()), $t.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Mn, Jo;
function Mg() {
  if (Jo) return Mn;
  Jo = 1;
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
  return Mn = o() ? Object.assign : function(i, a) {
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
  }, Mn;
}
var jn, Qo;
function Ur() {
  if (Qo) return jn;
  Qo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jn = e, jn;
}
var $n, Zo;
function es() {
  return Zo || (Zo = 1, $n = Function.call.bind(Object.prototype.hasOwnProperty)), $n;
}
var Ln, ei;
function jg() {
  if (ei) return Ln;
  ei = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ur(), n = {}, r = es();
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
  }, Ln = o, Ln;
}
var Bn, ti;
function $g() {
  if (ti) return Bn;
  ti = 1;
  var e = Za(), t = Mg(), n = Ur(), r = es(), o = jg(), i = function() {
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
  return Bn = function(s, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function l(C) {
      var T = C && (d && C[d] || C[u]);
      if (typeof T == "function")
        return T;
    }
    var p = "<<anonymous>>", m = {
      array: D("array"),
      bigint: D("bigint"),
      bool: D("boolean"),
      func: D("function"),
      number: D("number"),
      object: D("object"),
      string: D("string"),
      symbol: D("symbol"),
      any: y(),
      arrayOf: E,
      element: w(),
      elementType: b(),
      instanceOf: N,
      node: I(),
      objectOf: j,
      oneOf: A,
      oneOfType: q,
      shape: $,
      exact: G
    };
    function g(C, T) {
      return C === T ? C !== 0 || 1 / C === 1 / T : C !== C && T !== T;
    }
    function x(C, T) {
      this.message = C, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function h(C) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, V = 0;
      function z(Y, U, K, R, S, M, te) {
        if (R = R || p, M = M || K, te !== n) {
          if (c) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = R + ":" + K;
            !T[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            V < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + R + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[le] = !0, V++);
          }
        }
        return U[K] == null ? Y ? U[K] === null ? new x("The " + S + " `" + M + "` is marked as required " + ("in `" + R + "`, but its value is `null`.")) : new x("The " + S + " `" + M + "` is marked as required in " + ("`" + R + "`, but its value is `undefined`.")) : null : C(U, K, R, S, M);
      }
      var B = z.bind(null, !1);
      return B.isRequired = z.bind(null, !0), B;
    }
    function D(C) {
      function T(V, z, B, Y, U, K) {
        var R = V[z], S = W(R);
        if (S !== C) {
          var M = re(R);
          return new x(
            "Invalid " + Y + " `" + U + "` of type " + ("`" + M + "` supplied to `" + B + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return h(T);
    }
    function y() {
      return h(a);
    }
    function E(C) {
      function T(V, z, B, Y, U) {
        if (typeof C != "function")
          return new x("Property `" + U + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var K = V[z];
        if (!Array.isArray(K)) {
          var R = W(K);
          return new x("Invalid " + Y + " `" + U + "` of type " + ("`" + R + "` supplied to `" + B + "`, expected an array."));
        }
        for (var S = 0; S < K.length; S++) {
          var M = C(K, S, B, Y, U + "[" + S + "]", n);
          if (M instanceof Error)
            return M;
        }
        return null;
      }
      return h(T);
    }
    function w() {
      function C(T, V, z, B, Y) {
        var U = T[V];
        if (!s(U)) {
          var K = W(U);
          return new x("Invalid " + B + " `" + Y + "` of type " + ("`" + K + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(C);
    }
    function b() {
      function C(T, V, z, B, Y) {
        var U = T[V];
        if (!e.isValidElementType(U)) {
          var K = W(U);
          return new x("Invalid " + B + " `" + Y + "` of type " + ("`" + K + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(C);
    }
    function N(C) {
      function T(V, z, B, Y, U) {
        if (!(V[z] instanceof C)) {
          var K = C.name || p, R = ne(V[z]);
          return new x("Invalid " + Y + " `" + U + "` of type " + ("`" + R + "` supplied to `" + B + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return h(T);
    }
    function A(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function T(V, z, B, Y, U) {
        for (var K = V[z], R = 0; R < C.length; R++)
          if (g(K, C[R]))
            return null;
        var S = JSON.stringify(C, function(te, P) {
          var le = re(P);
          return le === "symbol" ? String(P) : P;
        });
        return new x("Invalid " + Y + " `" + U + "` of value `" + String(K) + "` " + ("supplied to `" + B + "`, expected one of " + S + "."));
      }
      return h(T);
    }
    function j(C) {
      function T(V, z, B, Y, U) {
        if (typeof C != "function")
          return new x("Property `" + U + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var K = V[z], R = W(K);
        if (R !== "object")
          return new x("Invalid " + Y + " `" + U + "` of type " + ("`" + R + "` supplied to `" + B + "`, expected an object."));
        for (var S in K)
          if (r(K, S)) {
            var M = C(K, S, B, Y, U + "." + S, n);
            if (M instanceof Error)
              return M;
          }
        return null;
      }
      return h(T);
    }
    function q(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var T = 0; T < C.length; T++) {
        var V = C[T];
        if (typeof V != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(V) + " at index " + T + "."
          ), a;
      }
      function z(B, Y, U, K, R) {
        for (var S = [], M = 0; M < C.length; M++) {
          var te = C[M], P = te(B, Y, U, K, R, n);
          if (P == null)
            return null;
          P.data && r(P.data, "expectedType") && S.push(P.data.expectedType);
        }
        var le = S.length > 0 ? ", expected one of type [" + S.join(", ") + "]" : "";
        return new x("Invalid " + K + " `" + R + "` supplied to " + ("`" + U + "`" + le + "."));
      }
      return h(z);
    }
    function I() {
      function C(T, V, z, B, Y) {
        return F(T[V]) ? null : new x("Invalid " + B + " `" + Y + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return h(C);
    }
    function _(C, T, V, z, B) {
      return new x(
        (C || "React class") + ": " + T + " type `" + V + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function $(C) {
      function T(V, z, B, Y, U) {
        var K = V[z], R = W(K);
        if (R !== "object")
          return new x("Invalid " + Y + " `" + U + "` of type `" + R + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var S in C) {
          var M = C[S];
          if (typeof M != "function")
            return _(B, Y, U, S, re(M));
          var te = M(K, S, B, Y, U + "." + S, n);
          if (te)
            return te;
        }
        return null;
      }
      return h(T);
    }
    function G(C) {
      function T(V, z, B, Y, U) {
        var K = V[z], R = W(K);
        if (R !== "object")
          return new x("Invalid " + Y + " `" + U + "` of type `" + R + "` " + ("supplied to `" + B + "`, expected `object`."));
        var S = t({}, V[z], C);
        for (var M in S) {
          var te = C[M];
          if (r(C, M) && typeof te != "function")
            return _(B, Y, U, M, re(te));
          if (!te)
            return new x(
              "Invalid " + Y + " `" + U + "` key `" + M + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(V[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var P = te(K, M, B, Y, U + "." + M, n);
          if (P)
            return P;
        }
        return null;
      }
      return h(T);
    }
    function F(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(F);
          if (C === null || s(C))
            return !0;
          var T = l(C);
          if (T) {
            var V = T.call(C), z;
            if (T !== C.entries) {
              for (; !(z = V.next()).done; )
                if (!F(z.value))
                  return !1;
            } else
              for (; !(z = V.next()).done; ) {
                var B = z.value;
                if (B && !F(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(C, T) {
      return C === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function W(C) {
      var T = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : Q(T, C) ? "symbol" : T;
    }
    function re(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var T = W(C);
      if (T === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function ee(C) {
      var T = re(C);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function ne(C) {
      return !C.constructor || !C.constructor.name ? p : C.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, Bn;
}
var Fn, ni;
function Lg() {
  if (ni) return Fn;
  ni = 1;
  var e = Ur();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Fn = function() {
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
  }, Fn;
}
if (process.env.NODE_ENV !== "production") {
  var Bg = Za(), Fg = !0;
  rr.exports = $g()(Bg.isElement, Fg);
} else
  rr.exports = Lg()();
var Vg = rr.exports;
const me = /* @__PURE__ */ od(Vg);
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
const zg = /* @__PURE__ */ new Map([
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
  const r = Gg(e), { webkitRelativePath: o } = e, i = typeof t == "string" ? t : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && ri(r, "path", i), ri(r, "relativePath", i), r;
}
function Gg(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), o = zg.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function ri(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const Wg = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function qg(e) {
  return Ye(this, void 0, void 0, function* () {
    return Yt(e) && Ug(e.dataTransfer) ? Xg(e.dataTransfer, e.type) : Hg(e) ? Yg(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? Kg(e) : [];
  });
}
function Ug(e) {
  return Yt(e);
}
function Hg(e) {
  return Yt(e) && Yt(e.target);
}
function Yt(e) {
  return typeof e == "object" && e !== null;
}
function Yg(e) {
  return or(e.target.files).map((t) => et(t));
}
function Kg(e) {
  return Ye(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => et(n));
  });
}
function Xg(e, t) {
  return Ye(this, void 0, void 0, function* () {
    if (e.items) {
      const n = or(e.items).filter((o) => o.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(Jg));
      return oi(ts(r));
    }
    return oi(or(e.files).map((n) => et(n)));
  });
}
function oi(e) {
  return e.filter((t) => Wg.indexOf(t.name) === -1);
}
function or(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function Jg(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return ii(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? ns(t) : ii(e, t);
}
function ts(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? ts(n) : [n]
  ], []);
}
function ii(e, t) {
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
function Qg(e) {
  return Ye(this, void 0, void 0, function* () {
    return e.isDirectory ? ns(e) : Zg(e);
  });
}
function ns(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const o = [];
    function i() {
      t.readEntries((a) => Ye(this, void 0, void 0, function* () {
        if (a.length) {
          const s = Promise.all(a.map(Qg));
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
function Zg(e) {
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
var Vn = function(e, t) {
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
function ai(e) {
  return nv(e) || tv(e) || os(e) || ev();
}
function ev() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function nv(e) {
  if (Array.isArray(e)) return ir(e);
}
function si(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ci(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? si(Object(n), !0).forEach(function(r) {
      rs(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : si(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function rs(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Et(e, t) {
  return iv(e) || ov(e, t) || os(e, t) || rv();
}
function rv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function os(e, t) {
  if (e) {
    if (typeof e == "string") return ir(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ir(e, t);
  }
}
function ir(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ov(e, t) {
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
function iv(e) {
  if (Array.isArray(e)) return e;
}
var av = typeof Vn == "function" ? Vn : Vn.default, sv = "file-invalid-type", cv = "file-too-large", lv = "file-too-small", dv = "too-many-files", pv = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: sv,
    message: "File type must be ".concat(r)
  };
}, li = function(t) {
  return {
    code: cv,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, di = function(t) {
  return {
    code: lv,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, uv = {
  code: dv,
  message: "Too many files"
};
function fv(e) {
  return e.type === "" && typeof e.getAsFile == "function";
}
function is(e, t) {
  var n = e.type === "application/x-moz-file" || av(e, t) || fv(e);
  return [n, n ? null : pv(t)];
}
function as(e, t, n) {
  if (qe(e.size))
    if (qe(t) && qe(n)) {
      if (e.size > n) return [!1, li(n)];
      if (e.size < t) return [!1, di(t)];
    } else {
      if (qe(t) && e.size < t) return [!1, di(t)];
      if (qe(n) && e.size > n) return [!1, li(n)];
    }
  return [!0, null];
}
function qe(e) {
  return e != null;
}
function mv(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, i = e.multiple, a = e.maxFiles, s = e.validator;
  return !i && t.length > 1 || i && a >= 1 && t.length > a ? !1 : t.every(function(c) {
    var d = is(c, n), u = Et(d, 1), l = u[0], p = as(c, r, o), m = Et(p, 1), g = m[0], x = s ? s(c) : null;
    return l && g && !x;
  });
}
function Kt(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function lt(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function pi(e) {
  e.preventDefault();
}
function gv(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function vv(e) {
  return e.indexOf("Edge/") !== -1;
}
function hv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return gv(e) || vv(e);
}
function je() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return t.some(function(s) {
      return !Kt(r) && s && s.apply(void 0, [r].concat(i)), Kt(r);
    });
  };
}
function bv() {
  return "showOpenFilePicker" in window;
}
function xv(e) {
  if (qe(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = Et(n, 2), o = r[0], i = r[1], a = !0;
      return ss(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(cs)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(n, r) {
      var o = Et(r, 2), i = o[0], a = o[1];
      return ci(ci({}, n), {}, rs({}, i, a));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function yv(e) {
  if (qe(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = Et(n, 2), o = r[0], i = r[1];
      return [].concat(ai(t), [o], ai(i));
    }, []).filter(function(t) {
      return ss(t) || cs(t);
    }).join(",");
}
function wv(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Ev(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function ss(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function cs(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Nv = ["children"], Dv = ["open"], Ov = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Sv = ["refKey", "onChange", "onClick"];
function ui(e) {
  return Cv(e) || Iv(e) || ls(e) || kv();
}
function kv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Iv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Cv(e) {
  if (Array.isArray(e)) return ar(e);
}
function zn(e, t) {
  return Pv(e) || Av(e, t) || ls(e, t) || _v();
}
function _v() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ls(e, t) {
  if (e) {
    if (typeof e == "string") return ar(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ar(e, t);
  }
}
function ar(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Av(e, t) {
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
function Pv(e) {
  if (Array.isArray(e)) return e;
}
function fi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fi(Object(n), !0).forEach(function(r) {
      sr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function sr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Xt(e, t) {
  if (e == null) return {};
  var n = Rv(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Rv(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Hr = /* @__PURE__ */ ie(function(e, t) {
  var n = e.children, r = Xt(e, Nv), o = ps(r), i = o.open, a = Xt(o, Dv);
  return bs(t, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ he.createElement(xs, null, n(ve(ve({}, a), {}, {
    open: i
  })));
});
Hr.displayName = "Dropzone";
var ds = {
  disabled: !1,
  getFilesFromEvent: qg,
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
Hr.defaultProps = ds;
Hr.propTypes = {
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
  children: me.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: me.objectOf(me.arrayOf(me.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: me.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: me.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: me.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: me.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: me.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: me.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: me.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: me.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: me.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: me.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: me.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: me.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: me.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: me.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: me.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: me.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: me.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: me.func,
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
  onDrop: me.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: me.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: me.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: me.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: me.func
};
var cr = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  isDragGlobal: !1,
  acceptedFiles: [],
  fileRejections: []
};
function ps() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = ve(ve({}, ds), e), n = t.accept, r = t.disabled, o = t.getFilesFromEvent, i = t.maxSize, a = t.minSize, s = t.multiple, c = t.maxFiles, d = t.onDragEnter, u = t.onDragLeave, l = t.onDragOver, p = t.onDrop, m = t.onDropAccepted, g = t.onDropRejected, x = t.onFileDialogCancel, h = t.onFileDialogOpen, D = t.useFsAccessApi, y = t.autoFocus, E = t.preventDropOnDocument, w = t.noClick, b = t.noKeyboard, N = t.noDrag, A = t.noDragEventsBubbling, j = t.onError, q = t.validator, I = $e(function() {
    return yv(n);
  }, [n]), _ = $e(function() {
    return xv(n);
  }, [n]), $ = $e(function() {
    return typeof h == "function" ? h : mi;
  }, [h]), G = $e(function() {
    return typeof x == "function" ? x : mi;
  }, [x]), F = Z(null), Q = Z(null), W = hs(Tv, cr), re = zn(W, 2), ee = re[0], ne = re[1], C = ee.isFocused, T = ee.isFileDialogActive, V = Z(typeof window < "u" && window.isSecureContext && D && bv()), z = function() {
    !V.current && T && setTimeout(function() {
      if (Q.current) {
        var X = Q.current.files;
        X.length || (ne({
          type: "closeDialog"
        }), G());
      }
    }, 300);
  };
  fe(function() {
    return window.addEventListener("focus", z, !1), function() {
      window.removeEventListener("focus", z, !1);
    };
  }, [Q, T, G, V]);
  var B = Z([]), Y = Z([]), U = function(X) {
    F.current && F.current.contains(X.target) || (X.preventDefault(), B.current = []);
  };
  fe(function() {
    return E && (document.addEventListener("dragover", pi, !1), document.addEventListener("drop", U, !1)), function() {
      E && (document.removeEventListener("dragover", pi), document.removeEventListener("drop", U));
    };
  }, [F, E]), fe(function() {
    var L = function(Me) {
      Y.current = [].concat(ui(Y.current), [Me.target]), lt(Me) && ne({
        isDragGlobal: !0,
        type: "setDragGlobal"
      });
    }, X = function(Me) {
      Y.current = Y.current.filter(function(Le) {
        return Le !== Me.target && Le !== null;
      }), !(Y.current.length > 0) && ne({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, be = function() {
      Y.current = [], ne({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, xe = function() {
      Y.current = [], ne({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    };
    return document.addEventListener("dragenter", L, !1), document.addEventListener("dragleave", X, !1), document.addEventListener("dragend", be, !1), document.addEventListener("drop", xe, !1), function() {
      document.removeEventListener("dragenter", L), document.removeEventListener("dragleave", X), document.removeEventListener("dragend", be), document.removeEventListener("drop", xe);
    };
  }, [F]), fe(function() {
    return !r && y && F.current && F.current.focus(), function() {
    };
  }, [F, y, r]);
  var K = J(function(L) {
    j ? j(L) : console.error(L);
  }, [j]), R = J(function(L) {
    L.preventDefault(), L.persist(), At(L), B.current = [].concat(ui(B.current), [L.target]), lt(L) && Promise.resolve(o(L)).then(function(X) {
      if (!(Kt(L) && !A)) {
        var be = X.length, xe = be > 0 && mv({
          files: X,
          accept: I,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: c,
          validator: q
        }), Ee = be > 0 && !xe;
        ne({
          isDragAccept: xe,
          isDragReject: Ee,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), d && d(L);
      }
    }).catch(function(X) {
      return K(X);
    });
  }, [o, d, K, A, I, a, i, s, c, q]), S = J(function(L) {
    L.preventDefault(), L.persist(), At(L);
    var X = lt(L);
    if (X && L.dataTransfer)
      try {
        L.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return X && l && l(L), !1;
  }, [l, A]), M = J(function(L) {
    L.preventDefault(), L.persist(), At(L);
    var X = B.current.filter(function(xe) {
      return F.current && F.current.contains(xe);
    }), be = X.indexOf(L.target);
    be !== -1 && X.splice(be, 1), B.current = X, !(X.length > 0) && (ne({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), lt(L) && u && u(L));
  }, [F, u, A]), te = J(function(L, X) {
    var be = [], xe = [];
    L.forEach(function(Ee) {
      var Me = is(Ee, I), Le = zn(Me, 2), cn = Le[0], ln = Le[1], dn = as(Ee, a, i), Pt = zn(dn, 2), pn = Pt[0], un = Pt[1], fn = q ? q(Ee) : null;
      if (cn && pn && !fn)
        be.push(Ee);
      else {
        var mn = [ln, un];
        fn && (mn = mn.concat(fn)), xe.push({
          file: Ee,
          errors: mn.filter(function(gs) {
            return gs;
          })
        });
      }
    }), (!s && be.length > 1 || s && c >= 1 && be.length > c) && (be.forEach(function(Ee) {
      xe.push({
        file: Ee,
        errors: [uv]
      });
    }), be.splice(0)), ne({
      acceptedFiles: be,
      fileRejections: xe,
      isDragReject: xe.length > 0,
      type: "setFiles"
    }), p && p(be, xe, X), xe.length > 0 && g && g(xe, X), be.length > 0 && m && m(be, X);
  }, [ne, s, I, a, i, c, p, m, g, q]), P = J(function(L) {
    L.preventDefault(), L.persist(), At(L), B.current = [], lt(L) && Promise.resolve(o(L)).then(function(X) {
      Kt(L) && !A || te(X, L);
    }).catch(function(X) {
      return K(X);
    }), ne({
      type: "reset"
    });
  }, [o, te, K, A]), le = J(function() {
    if (V.current) {
      ne({
        type: "openDialog"
      }), $();
      var L = {
        multiple: s,
        types: _
      };
      window.showOpenFilePicker(L).then(function(X) {
        return o(X);
      }).then(function(X) {
        te(X, null), ne({
          type: "closeDialog"
        });
      }).catch(function(X) {
        wv(X) ? (G(X), ne({
          type: "closeDialog"
        })) : Ev(X) ? (V.current = !1, Q.current ? (Q.current.value = null, Q.current.click()) : K(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : K(X);
      });
      return;
    }
    Q.current && (ne({
      type: "openDialog"
    }), $(), Q.current.value = null, Q.current.click());
  }, [ne, $, G, D, te, K, _, s]), Se = J(function(L) {
    !F.current || !F.current.isEqualNode(L.target) || (L.key === " " || L.key === "Enter" || L.keyCode === 32 || L.keyCode === 13) && (L.preventDefault(), le());
  }, [F, le]), it = J(function() {
    ne({
      type: "focus"
    });
  }, []), Yr = J(function() {
    ne({
      type: "blur"
    });
  }, []), Kr = J(function() {
    w || (hv() ? setTimeout(le, 0) : le());
  }, [w, le]), Ke = function(X) {
    return r ? null : X;
  }, sn = function(X) {
    return b ? null : Ke(X);
  }, _t = function(X) {
    return N ? null : Ke(X);
  }, At = function(X) {
    A && X.stopPropagation();
  }, us = $e(function() {
    return function() {
      var L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, X = L.refKey, be = X === void 0 ? "ref" : X, xe = L.role, Ee = L.onKeyDown, Me = L.onFocus, Le = L.onBlur, cn = L.onClick, ln = L.onDragEnter, dn = L.onDragOver, Pt = L.onDragLeave, pn = L.onDrop, un = Xt(L, Ov);
      return ve(ve(sr({
        onKeyDown: sn(je(Ee, Se)),
        onFocus: sn(je(Me, it)),
        onBlur: sn(je(Le, Yr)),
        onClick: Ke(je(cn, Kr)),
        onDragEnter: _t(je(ln, R)),
        onDragOver: _t(je(dn, S)),
        onDragLeave: _t(je(Pt, M)),
        onDrop: _t(je(pn, P)),
        role: typeof xe == "string" && xe !== "" ? xe : "presentation"
      }, be, F), !r && !b ? {
        tabIndex: 0
      } : {}), un);
    };
  }, [F, Se, it, Yr, Kr, R, S, M, P, b, N, r]), fs = J(function(L) {
    L.stopPropagation();
  }, []), ms = $e(function() {
    return function() {
      var L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, X = L.refKey, be = X === void 0 ? "ref" : X, xe = L.onChange, Ee = L.onClick, Me = Xt(L, Sv), Le = sr({
        accept: I,
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
        onChange: Ke(je(xe, P)),
        onClick: Ke(je(Ee, fs)),
        tabIndex: -1
      }, be, Q);
      return ve(ve({}, Le), Me);
    };
  }, [Q, n, s, P, r]);
  return ve(ve({}, ee), {}, {
    isFocused: C && !r,
    getRootProps: us,
    getInputProps: ms,
    rootRef: F,
    inputRef: Q,
    open: Ke(le)
  });
}
function Tv(e, t) {
  switch (t.type) {
    case "focus":
      return ve(ve({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return ve(ve({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return ve(ve({}, cr), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return ve(ve({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return ve(ve({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return ve(ve({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "setDragGlobal":
      return ve(ve({}, e), {}, {
        isDragGlobal: t.isDragGlobal
      });
    case "reset":
      return ve({}, cr);
    default:
      return e;
  }
}
function mi() {
}
const Mv = (e) => e.startsWith("image/") ? ac : e.startsWith("video/") ? Sc : e.startsWith("audio/") ? bc : e.includes("pdf") || e.includes("document") ? Zs : tc, gi = (e) => {
  if (e === 0) return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB", "GB"], r = Math.floor(Math.log(e) / Math.log(t));
  return parseFloat((e / Math.pow(t, r)).toFixed(2)) + " " + n[r];
};
function Uv({
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
  const [d, u] = se([]), [l, p] = se([]), m = J(
    (E, w) => {
      if (E.length > 0) {
        const b = i ? [...d, ...E] : E;
        if (u(b), e(b), c) {
          const N = E.filter((A) => A.type.startsWith("image/")).map((A) => ({
            file: A,
            url: URL.createObjectURL(A)
          }));
          p((A) => i ? [...A, ...N] : N);
        }
      }
      w.length > 0 && t && t(w);
    },
    [d, i, e, t, c]
  ), g = (E) => {
    const w = d.filter((N) => N !== E);
    u(w), e(w);
    const b = l.find((N) => N.file === E);
    b && (URL.revokeObjectURL(b.url), p((N) => N.filter((A) => A.file !== E)));
  }, { getRootProps: x, getInputProps: h, isDragActive: D, isDragReject: y } = ps({
    onDrop: m,
    accept: n,
    maxFiles: r,
    maxSize: o,
    multiple: i,
    disabled: a
  });
  return /* @__PURE__ */ k("div", { className: O("space-y-4", s), children: [
    /* @__PURE__ */ k(
      "div",
      {
        ...x(),
        className: O(
          "flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl cursor-pointer",
          "transition-all duration-200 ease-out",
          "bg-gradient-to-b from-neutral-50 to-white",
          "border-primary/60 hover:border-primary",
          D && !y && "border-primary bg-gradient-to-b from-primary/5 to-accent/5 scale-[1.01]",
          y && "border-red-400 bg-red-50",
          a && "opacity-50 cursor-not-allowed"
        ),
        children: [
          /* @__PURE__ */ f("input", { ...h() }),
          /* @__PURE__ */ f(
            "div",
            {
              className: O(
                "w-16 h-16 mb-4 rounded-2xl flex items-center justify-center",
                "bg-gradient-to-br from-primary/10 to-accent/10",
                "transition-transform duration-200",
                D && "scale-110"
              ),
              children: /* @__PURE__ */ f(
                Dc,
                {
                  className: O(
                    "w-8 h-8 text-primary",
                    D && "animate-bounce"
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ f("p", { className: "text-lg font-medium text-neutral-700 mb-1", children: D ? y ? "Archivo no permitido" : "Suelta los archivos aquí" : "Arrastra archivos aquí" }),
          /* @__PURE__ */ f("p", { className: "text-sm text-neutral-500 mb-3", children: "o haz clic para seleccionar" }),
          /* @__PURE__ */ k("p", { className: "text-xs text-neutral-400", children: [
            "PNG, JPG hasta ",
            gi(o)
          ] })
        ]
      }
    ),
    d.length > 0 && /* @__PURE__ */ k("div", { className: "space-y-2", children: [
      /* @__PURE__ */ k("p", { className: "text-sm font-medium text-neutral-700", children: [
        "Archivos seleccionados (",
        d.length,
        ")"
      ] }),
      /* @__PURE__ */ f("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: d.map((E, w) => {
        const b = Mv(E.type), N = l.find((A) => A.file === E);
        return /* @__PURE__ */ k(
          "div",
          {
            className: O(
              "group flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-xl",
              "transition-all duration-200",
              "hover:shadow-md hover:border-primary/30"
            ),
            children: [
              N ? /* @__PURE__ */ f("div", { className: "w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100", children: /* @__PURE__ */ f(
                "img",
                {
                  src: N.url,
                  alt: E.name,
                  className: "w-full h-full object-cover"
                }
              ) }) : /* @__PURE__ */ f(
                "div",
                {
                  className: O(
                    "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
                    "bg-gradient-to-br from-primary/10 to-accent/10"
                  ),
                  children: /* @__PURE__ */ f(b, { className: "w-6 h-6 text-primary" })
                }
              ),
              /* @__PURE__ */ k("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ f("p", { className: "text-sm font-medium text-neutral-800 truncate", children: E.name }),
                /* @__PURE__ */ f("p", { className: "text-xs text-neutral-500", children: gi(E.size) })
              ] }),
              /* @__PURE__ */ f(
                "button",
                {
                  type: "button",
                  onClick: (A) => {
                    A.stopPropagation(), g(E);
                  },
                  className: O(
                    "p-1.5 rounded-lg opacity-0 group-hover:opacity-100",
                    "text-neutral-400 hover:text-red-500 hover:bg-red-50",
                    "transition-all duration-200"
                  ),
                  children: /* @__PURE__ */ f(tt, { className: "w-4 h-4" })
                }
              )
            ]
          },
          `${E.name}-${w}`
        );
      }) })
    ] })
  ] });
}
const jv = {
  default: "bg-neutral-100 text-neutral-700",
  primary: "bg-primary/10 text-primary",
  success: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700"
};
function Hv({ columns: e, onCardMove: t, className: n }) {
  return /* @__PURE__ */ f(Fr, { onDragEnd: (o) => {
    const { source: i, destination: a, draggableId: s } = o;
    a && (i.droppableId === a.droppableId && i.index === a.index || t(
      s,
      i.droppableId,
      a.droppableId,
      i.index,
      a.index
    ));
  }, children: /* @__PURE__ */ f("div", { className: O("flex gap-4 overflow-x-auto pb-4", n), children: e.map((o) => /* @__PURE__ */ k(
    "div",
    {
      className: "flex-shrink-0 w-72 bg-neutral-50 rounded-xl border border-neutral-200",
      children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: O(
              "px-4 py-3 border-b border-neutral-200 rounded-t-xl",
              "bg-gradient-to-r from-neutral-100 to-neutral-50"
            ),
            children: /* @__PURE__ */ k("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ f("h3", { className: "font-semibold text-neutral-800", children: o.title }),
              /* @__PURE__ */ f(
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
        /* @__PURE__ */ f(qr, { droppableId: o.id, children: (i, a) => /* @__PURE__ */ k(
          "div",
          {
            ref: i.innerRef,
            ...i.droppableProps,
            className: O(
              "p-3 min-h-[200px] space-y-3 transition-colors duration-200",
              a.isDraggingOver && "bg-primary/5"
            ),
            children: [
              o.cards.map((s, c) => /* @__PURE__ */ f(zr, { draggableId: s.id, index: c, children: (d, u) => /* @__PURE__ */ k(
                "div",
                {
                  ref: d.innerRef,
                  ...d.draggableProps,
                  className: O(
                    "group bg-white rounded-lg border border-neutral-200 overflow-hidden",
                    "transition-all duration-200",
                    "hover:shadow-md hover:border-primary/30",
                    u.isDragging && "shadow-xl ring-2 ring-primary/30 rotate-2"
                  ),
                  style: {
                    ...d.draggableProps.style
                  },
                  children: [
                    /* @__PURE__ */ k(
                      "div",
                      {
                        ...d.dragHandleProps,
                        className: O(
                          "flex items-center gap-2 px-3 py-2 border-b border-neutral-100",
                          "cursor-grab active:cursor-grabbing",
                          "bg-gradient-to-r from-neutral-50 to-white"
                        ),
                        children: [
                          /* @__PURE__ */ f(
                            Xe,
                            {
                              className: O(
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
                    /* @__PURE__ */ k("div", { className: "p-3", children: [
                      s.description && /* @__PURE__ */ f("p", { className: "text-sm text-neutral-600 mb-2 line-clamp-2", children: s.description }),
                      s.tags && s.tags.length > 0 && /* @__PURE__ */ f("div", { className: "flex flex-wrap gap-1", children: s.tags.map((l, p) => /* @__PURE__ */ f(
                        "span",
                        {
                          className: O(
                            "px-2 py-0.5 text-xs font-medium rounded-full",
                            jv[l.variant || "default"]
                          ),
                          children: l.label
                        },
                        p
                      )) })
                    ] }),
                    /* @__PURE__ */ f(
                      "div",
                      {
                        className: O(
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
function Yv({
  items: e,
  onReorder: t,
  className: n,
  cardClassName: r,
  droppableId: o = "draggable-cards",
  direction: i = "vertical"
}) {
  return /* @__PURE__ */ f(Fr, { onDragEnd: (s) => {
    if (!s.destination) return;
    const c = Array.from(e), [d] = c.splice(s.source.index, 1);
    c.splice(s.destination.index, 0, d), t(c);
  }, children: /* @__PURE__ */ f(qr, { droppableId: o, direction: i, children: (s) => /* @__PURE__ */ k(
    "div",
    {
      ref: s.innerRef,
      ...s.droppableProps,
      className: O(
        i === "horizontal" ? "flex gap-4" : "space-y-4",
        n
      ),
      children: [
        e.map((c, d) => /* @__PURE__ */ f(zr, { draggableId: c.id, index: d, children: (u, l) => /* @__PURE__ */ k(
          "div",
          {
            ref: u.innerRef,
            ...u.draggableProps,
            className: O(
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
              c.title ? /* @__PURE__ */ k(
                "div",
                {
                  ...u.dragHandleProps,
                  className: O(
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
                /* @__PURE__ */ k(
                  "div",
                  {
                    ...u.dragHandleProps,
                    className: O(
                      "flex items-center gap-3 px-4 pt-4 pb-2",
                      "cursor-grab active:cursor-grabbing"
                    ),
                    children: [
                      /* @__PURE__ */ f(
                        Xe,
                        {
                          className: O(
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
              /* @__PURE__ */ f("div", { className: O(c.title ? "p-4" : "px-4 pb-4"), children: c.children }),
              !c.title && /* @__PURE__ */ f(
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
function Kv({
  title: e,
  children: t,
  className: n,
  isDragging: r = !1,
  dragHandleProps: o
}) {
  return /* @__PURE__ */ k(
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
        e ? /* @__PURE__ */ k(
          "div",
          {
            ...o,
            className: O(
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
          /* @__PURE__ */ k(
            "div",
            {
              ...o,
              className: O(
                "flex items-center gap-3 px-4 pt-4 pb-2",
                "cursor-grab active:cursor-grabbing"
              ),
              children: [
                /* @__PURE__ */ f(
                  Xe,
                  {
                    className: O(
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
        /* @__PURE__ */ f("div", { className: O(e ? "p-4" : "px-4 pb-4"), children: t }),
        !e && /* @__PURE__ */ f(
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
  yl as A,
  gl as B,
  sl as C,
  Yv as D,
  zv as E,
  Uv as F,
  O as G,
  _i as H,
  Fv as I,
  Qt as J,
  Hv as K,
  Al as L,
  Ri as M,
  Ci as N,
  wl as O,
  zl as P,
  nt as Q,
  il as R,
  Di as S,
  Ll as T,
  Gv as U,
  Wn as a,
  Ai as b,
  Wv as c,
  Pl as d,
  Bt as e,
  ll as f,
  od as g,
  pl as h,
  cl as i,
  Si as j,
  nl as k,
  Wl as l,
  Oi as m,
  fr as n,
  Ft as o,
  Kl as p,
  Uc as q,
  Rl as r,
  Ii as s,
  Kv as t,
  qv as u,
  Vv as v,
  $l as w,
  Jc as x,
  Ti as y,
  Yl as z
};
//# sourceMappingURL=index-Ctz6q9V0.js.map
