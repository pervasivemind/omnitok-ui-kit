import { jsxs as k, jsx as f, Fragment as _e } from "react/jsx-runtime";
import * as se from "react";
import ve, { forwardRef as oe, createElement as Wn, useState as ce, useRef as te, useCallback as Q, useMemo as $e, useEffect as fe, useId as bs, useContext as Nt, createContext as dr, useLayoutEffect as xi, useReducer as xs, useImperativeHandle as ys, Fragment as ws } from "react";
import Es, { createPortal as Ns, flushSync as yi } from "react-dom";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wi = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = (e) => {
  const t = Os(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ks = {
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
const Ss = (e) => {
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
const Is = oe(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, c) => Wn(
    "svg",
    {
      ref: c,
      ...ks,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: wi("lucide", o),
      ...!i && !Ss(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([d, u]) => Wn(d, u)),
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
const ie = (e, t) => {
  const n = oe(
    ({ className: r, ...o }, i) => Wn(Is, {
      ref: i,
      iconNode: t,
      className: wi(
        `lucide-${Ds(Qr(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Qr(e), n;
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], _s = ie("arrow-down", Cs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Ps = ie("arrow-up-down", As);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Ts = ie("arrow-up", Rs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], js = ie("bell", Ms);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Jt = ie("check", $s);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ut = ie("chevron-down", Ls);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Fs = ie("chevron-left", Bs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Qt = ie("chevron-right", Vs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], Gs = ie("chevrons-left", zs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], qs = ie("chevrons-right", Ws);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], pr = ie("circle-alert", Us);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], Ei = ie("circle-check-big", Hs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Ks = ie("copy", Ys);
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
], Js = ie("eye-off", Xs);
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
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Zs = ie("eye", Qs);
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
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], tc = ie("file-text", ec);
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
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], rc = ie("file", nc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], ic = ie("globe", oc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Je = ie("grip-vertical", ac);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], cc = ie("house", sc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], dc = ie("image", lc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], Ni = ie("info", pc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], fc = ie("loader-circle", uc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], gc = ie("lock", mc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], vc = ie("log-out", hc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bc = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], xc = ie("mail", bc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], ur = ie("menu", yc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wc = [["path", { d: "M5 12h14", key: "1ays0h" }]], Ec = ie("minus", wc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nc = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], Dc = ie("music", Nc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oc = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
], kc = ie("panel-left-close", Oc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], fr = ie("search", Sc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ic = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Di = ie("triangle-alert", Ic);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cc = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], _c = ie("upload", Cc);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ac = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], Pc = ie("video", Ac);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], nt = ie("x", Rc);
function Oi(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Oi(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Tc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Oi(e)) && (r && (r += " "), r += t);
  return r;
}
function O(...e) {
  return Tc(e);
}
const Mc = {
  // v3: the action colour. Pink-to-violet gradient (tenant-overridable token),
  // white text >= 4.6:1 on both ends, soft pink glow.
  primary: "bg-[image:var(--omni-gradient-action)] text-white shadow-[var(--omni-shadow-action)] enabled:hover:brightness-95 focus:ring-accent",
  secondary: "bg-primary-soft text-primary-ink border border-primary-line enabled:hover:bg-[#E7E5F4] focus:ring-primary",
  accent: "bg-accent text-white hover:bg-accent-dark active:bg-accent-dark focus:ring-accent",
  neutral: "bg-neutral-200 text-neutral-800 hover:bg-neutral-300 active:bg-neutral-400 focus:ring-neutral-400",
  accept: "bg-success text-white hover:bg-success-dark active:bg-success-dark focus:ring-success",
  danger: "bg-error text-white hover:bg-error-dark active:bg-error-dark focus:ring-error",
  info: "bg-info text-white hover:bg-info-dark active:bg-info-dark focus:ring-info",
  violet: "bg-violet text-white hover:bg-violet-dark active:bg-violet-dark focus:ring-violet",
  rose: "bg-rose text-white hover:bg-rose-dark active:bg-rose-dark focus:ring-rose",
  teal: "bg-teal text-white hover:bg-teal-dark active:bg-teal-dark focus:ring-teal",
  outline: "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary"
}, Zr = {
  primary: "bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 focus:ring-primary",
  accent: "bg-transparent text-accent hover:bg-accent/10 active:bg-accent/20 focus:ring-accent",
  neutral: "bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 focus:ring-neutral-300",
  accept: "bg-transparent text-success hover:bg-success/10 active:bg-success/20 focus:ring-success",
  danger: "bg-transparent text-error hover:bg-error/10 active:bg-error/20 focus:ring-error",
  info: "bg-transparent text-info hover:bg-info/10 active:bg-info/20 focus:ring-info",
  violet: "bg-transparent text-violet hover:bg-violet/10 active:bg-violet/20 focus:ring-violet",
  rose: "bg-transparent text-rose hover:bg-rose/10 active:bg-rose/20 focus:ring-rose",
  teal: "bg-transparent text-teal hover:bg-teal/10 active:bg-teal/20 focus:ring-teal"
}, jc = {
  xs: "px-2.5 py-1 text-2xs gap-1",
  sm: "px-3 py-1.5 text-xs gap-1.5",
  md: "px-4 py-2 text-[13px] leading-5 gap-2",
  lg: "px-5 py-2.5 text-sm gap-2.5"
}, $c = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20
}, Bt = oe(
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
          "inline-flex items-center justify-center font-semibold rounded-xl",
          // State motion only: colour, shadow and a 1px lift on hover.
          "transition-[background-color,box-shadow,transform,filter,color] duration-150",
          "enabled:hover:-translate-y-px enabled:hover:shadow-[0_3px_10px_#1A124018] motion-reduce:transform-none",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          // Variant styles
          r && Zr[e] ? Zr[e] : Mc[e],
          // Size styles
          jc[t],
          // Full width
          a && "w-full",
          // Disabled state
          p && "opacity-50 cursor-not-allowed",
          c
        ),
        ...u,
        children: [
          n ? /* @__PURE__ */ f(fc, { className: "animate-spin", size: $c[t] }) : o,
          d,
          !n && i
        ]
      }
    );
  }
);
Bt.displayName = "Button";
const Lc = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-3.5 py-2 text-[13px] leading-5",
  lg: "px-4 py-2.5 text-sm"
}, Bc = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, Fc = {
  sm: "pr-8",
  md: "pr-10",
  lg: "pr-12"
}, Ft = oe(
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
          className: "text-xs font-semibold text-neutral-600",
          children: t
        }
      ),
      /* @__PURE__ */ k("div", { className: "relative", children: [
        o && /* @__PURE__ */ f("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: o }),
        /* @__PURE__ */ f(
          "input",
          {
            ref: l,
            id: p,
            disabled: s,
            className: O(
              // Base styles
              "w-full rounded-[10px] border bg-white",
              "transition-colors duration-200",
              "placeholder:text-neutral-500",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              Lc[e],
              // Icon padding
              o && Bc[e],
              i && Fc[e],
              // Border color
              m ? "border-error focus:ring-error focus:border-error" : "border-control",
              // Disabled state
              s && "!bg-neutral-100 text-neutral-500 cursor-not-allowed",
              c
            ),
            "aria-invalid": m,
            "aria-describedby": m ? `${p}-error` : n ? `${p}-helper` : void 0,
            ...u
          }
        ),
        i && /* @__PURE__ */ f("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: i })
      ] }),
      m && /* @__PURE__ */ f("p", { id: `${p}-error`, className: "text-xs text-error", children: r }),
      !m && n && /* @__PURE__ */ f("p", { id: `${p}-helper`, className: "text-xs text-neutral-500", children: n })
    ] });
  }
);
Ft.displayName = "Input";
const Vc = {
  sm: "px-3 py-1.5 text-xs pr-8",
  md: "px-3.5 py-2 text-[13px] leading-5 pr-10",
  lg: "px-4 py-2.5 text-sm pr-12"
}, zc = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, Gc = {
  sm: "min-h-[32px] px-3 py-1 text-xs",
  md: "min-h-[38px] px-3.5 py-1.5 text-[13px]",
  lg: "min-h-[44px] px-4 py-2 text-sm"
}, Wc = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, qc = {
  sm: 14,
  md: 16,
  lg: 20
}, ki = oe(
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
    name: b,
    ...x
  }, E) => {
    var T;
    const y = l || `select-${Math.random().toString(36).slice(2, 9)}`, w = !!r, N = p !== void 0, [h, D] = ce(
      m !== void 0 ? String(m) : ""
    ), A = N ? String(p ?? "") : h, j = ((T = o.find((S) => S.value === A)) == null ? void 0 : T.label) ?? "", [q, I] = ce(""), [R, $] = ce(!1), [V, B] = ce(-1), J = te(null), z = te(null), ne = te(null), Z = te(null), ee = Q(
      (S) => {
        Z.current = S, typeof E == "function" ? E(S) : E && (E.current = S);
      },
      [E]
    ), C = $e(() => o.filter(
      (S) => !q || S.label.toLowerCase().includes(q.toLowerCase())
    ), [o, q]), _ = Q((S) => {
      var P;
      const M = Z.current;
      if (!M) return;
      const re = (P = Object.getOwnPropertyDescriptor(
        HTMLSelectElement.prototype,
        "value"
      )) == null ? void 0 : P.set;
      re == null || re.call(M, S), M.dispatchEvent(new Event("change", { bubbles: !0 }));
    }, []), G = Q(
      (S) => {
        N || D(S.target.value), g == null || g(S), $(!1), I(""), B(-1);
      },
      [N, g]
    ), W = Q(
      (S) => {
        if (c) return;
        const M = o.find((re) => re.value === S);
        M != null && M.disabled || _(S);
      },
      [c, o, _]
    ), F = Q(
      (S, M) => {
        const re = C.length;
        if (re === 0) return -1;
        for (let P = 0; P < re; P++) {
          const le = (S + M * (P + 1) + re) % re;
          if (!C[le].disabled) return le;
        }
        return -1;
      },
      [C]
    ), Y = Q(() => C.findIndex((S) => !S.disabled), [C]), U = Q(
      (S) => {
        if (!c)
          switch (S.key) {
            case "ArrowDown": {
              S.preventDefault(), R ? B((M) => F(M, 1)) : ($(!0), B(Y()));
              break;
            }
            case "ArrowUp": {
              S.preventDefault(), R && B((M) => F(M, -1));
              break;
            }
            case "Enter": {
              if (S.preventDefault(), R && V >= 0 && V < C.length) {
                const M = C[V];
                M.disabled || W(M.value);
              } else R || $(!0);
              break;
            }
            case "Escape": {
              S.preventDefault(), $(!1), B(-1);
              break;
            }
          }
      },
      [
        c,
        R,
        V,
        C,
        W,
        F,
        Y
      ]
    );
    fe(() => {
      if (!s) return;
      const S = (M) => {
        J.current && !J.current.contains(M.target) && ($(!1), B(-1), I(""));
      };
      return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
    }, [s]), fe(() => {
      var S;
      V >= 0 && ne.current && ((S = ne.current.querySelectorAll('[role="option"]')[V]) == null || S.scrollIntoView({ block: "nearest" }));
    }, [V]);
    const K = () => {
      var S;
      c || ((S = z.current) == null || S.focus(), $(!0));
    };
    return s ? /* @__PURE__ */ k("div", { className: O("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: `${y}-input`,
          className: "text-xs font-semibold text-neutral-600",
          children: t
        }
      ),
      /* @__PURE__ */ k("div", { ref: J, className: "relative", children: [
        d && /* @__PURE__ */ f("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none z-10", children: d }),
        /* @__PURE__ */ f(
          "div",
          {
            onClick: K,
            className: O(
              // Base styles
              "flex items-center gap-1.5 w-full rounded-[10px] border bg-white cursor-text",
              "transition-colors duration-200",
              // Size styles
              Gc[e],
              // Left icon padding
              d && Wc[e],
              // Right padding for chevron
              "pr-8",
              // Focus ring (applied when dropdown is open)
              R && !w && "ring-2 ring-primary border-primary",
              R && w && "ring-2 ring-error border-error",
              // Border color
              w ? "border-error" : "border-control",
              // Disabled state
              c && "!bg-neutral-100 text-neutral-500 cursor-not-allowed",
              u
            ),
            "aria-invalid": w,
            "aria-describedby": w ? `${y}-error` : n ? `${y}-helper` : void 0,
            children: /* @__PURE__ */ f(
              "input",
              {
                ref: z,
                id: `${y}-input`,
                type: "text",
                value: R ? q : j,
                onChange: (S) => {
                  I(S.target.value), R || $(!0), B(0);
                },
                onFocus: () => {
                  c || $(!0);
                },
                onKeyDown: U,
                placeholder: j || i,
                disabled: c,
                className: O(
                  "flex-1 min-w-[60px] outline-none bg-transparent",
                  "placeholder:text-neutral-500",
                  c && "cursor-not-allowed"
                ),
                role: "combobox",
                "aria-expanded": R,
                "aria-controls": `${y}-listbox`,
                "aria-activedescendant": V >= 0 ? `${y}-option-${V}` : void 0,
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
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none transition-transform duration-200",
              R && "rotate-180"
            ),
            size: qc[e]
          }
        ),
        R && /* @__PURE__ */ f(
          "ul",
          {
            ref: ne,
            id: `${y}-listbox`,
            role: "listbox",
            className: O(
              "absolute z-50 mt-1 w-full rounded-xl border border-neutral-200 bg-white p-1 shadow-menu",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: C.length === 0 ? /* @__PURE__ */ f("li", { className: "px-3 py-2 text-xs text-neutral-500", children: q ? "No matching options" : "No options available" }) : C.map((S, M) => /* @__PURE__ */ f(
              "li",
              {
                id: `${y}-option-${M}`,
                role: "option",
                "aria-selected": S.value === A,
                "aria-disabled": S.disabled,
                onClick: () => {
                  S.disabled || W(S.value);
                },
                className: O(
                  "rounded-[7px] px-3 py-2 text-[13px] leading-5 transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  S.disabled ? "text-neutral-400 cursor-not-allowed select-none" : O(
                    "cursor-pointer",
                    M === V ? "bg-primary-soft text-primary-ink font-semibold" : "text-neutral-700 hover:bg-primary-soft"
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
            ref: ee,
            id: y,
            name: b,
            disabled: c,
            ...N ? { value: p } : { defaultValue: m },
            onChange: G,
            className: "sr-only",
            tabIndex: -1,
            "aria-hidden": "true",
            ...x,
            children: [
              i && /* @__PURE__ */ f("option", { value: "", disabled: !0, children: i }),
              o.map((S) => /* @__PURE__ */ f("option", { value: S.value, disabled: S.disabled, children: S.label }, S.value))
            ]
          }
        )
      ] }),
      w && /* @__PURE__ */ f("p", { id: `${y}-error`, className: "text-xs text-error", children: r }),
      !w && n && /* @__PURE__ */ f("p", { id: `${y}-helper`, className: "text-xs text-neutral-500", children: n })
    ] }) : /* @__PURE__ */ k("div", { className: O("flex flex-col gap-1.5", a && "w-full"), children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: y,
          className: "text-xs font-semibold text-neutral-600",
          children: t
        }
      ),
      /* @__PURE__ */ k("div", { className: "relative", children: [
        d && /* @__PURE__ */ f("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none", children: d }),
        /* @__PURE__ */ k(
          "select",
          {
            ref: E,
            id: y,
            name: b,
            disabled: c,
            value: p,
            defaultValue: m,
            onChange: g,
            className: O(
              // Base styles
              "w-full rounded-[10px] border bg-white appearance-none cursor-pointer text-neutral-800",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              Vc[e],
              // Icon padding
              d && zc[e],
              // Border color
              w ? "border-error focus:ring-error focus:border-error" : "border-control",
              // Disabled state
              c && "!bg-neutral-100 text-neutral-500 cursor-not-allowed",
              u
            ),
            "aria-invalid": w,
            "aria-describedby": w ? `${y}-error` : n ? `${y}-helper` : void 0,
            ...x,
            children: [
              i && /* @__PURE__ */ f("option", { value: "", disabled: !0, children: i }),
              o.map((S) => /* @__PURE__ */ f("option", { value: S.value, disabled: S.disabled, children: S.label }, S.value))
            ]
          }
        ),
        /* @__PURE__ */ f(
          ut,
          {
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none",
            size: e === "sm" ? 14 : e === "lg" ? 20 : 16
          }
        )
      ] }),
      w && /* @__PURE__ */ f("p", { id: `${y}-error`, className: "text-xs text-error", children: r }),
      !w && n && /* @__PURE__ */ f("p", { id: `${y}-helper`, className: "text-xs text-neutral-500", children: n })
    ] });
  }
);
ki.displayName = "Select";
const Uc = {
  sm: "min-h-[32px] px-3 py-1 text-xs",
  md: "min-h-[38px] px-3.5 py-1.5 text-[13px]",
  lg: "min-h-[44px] px-4 py-2 text-sm"
}, Hc = {
  sm: "px-1.5 py-0.5 text-2xs gap-0.5",
  md: "px-2 py-0.5 text-xs gap-1",
  lg: "px-2.5 py-1 text-xs gap-1"
}, Yc = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, Kc = {
  sm: 12,
  md: 14,
  lg: 14
}, Xc = {
  sm: 14,
  md: 16,
  lg: 20
}, Jc = {
  primary: { base: "bg-primary-soft text-primary-ink", hover: "hover:bg-primary-line" },
  accent: { base: "bg-accent/10 text-accent-dark", hover: "hover:bg-accent/20" },
  neutral: { base: "bg-neutral-100 text-neutral-700", hover: "hover:bg-neutral-200" },
  success: { base: "bg-success/10 text-success", hover: "hover:bg-success/20" },
  warning: { base: "bg-warning/10 text-warning", hover: "hover:bg-warning/20" },
  error: { base: "bg-error/10 text-error", hover: "hover:bg-error/20" },
  info: { base: "bg-info/10 text-info", hover: "hover:bg-info/20" },
  violet: { base: "bg-violet/10 text-violet", hover: "hover:bg-violet/20" },
  rose: { base: "bg-rose/10 text-rose", hover: "hover:bg-rose/20" },
  teal: { base: "bg-teal/10 text-teal", hover: "hover:bg-teal/20" }
}, Qc = oe(
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
    className: b,
    id: x
  }, E) => {
    const y = x || `multiselect-${Math.random().toString(36).slice(2, 9)}`, w = !!s, N = t !== void 0, [h, D] = ce(n), A = N ? t : h, [j, q] = ce(""), [I, R] = ce(!1), [$, V] = ce(-1), B = te(null), J = te(null), z = te(null), ne = Q(
      (T) => {
        N || D(T), r == null || r(T);
      },
      [N, r]
    ), Z = $e(() => e.filter((T) => {
      const S = A.includes(T.value), M = !j || T.label.toLowerCase().includes(j.toLowerCase());
      return !S && M;
    }), [e, A, j]), ee = l === void 0 || A.length < l, C = Q(
      (T) => {
        var re;
        if (!ee || u) return;
        const S = e.find((P) => P.value === T);
        if (S != null && S.disabled) return;
        const M = [...A, T];
        ne(M), q(""), V(-1), (re = J.current) == null || re.focus();
      },
      [ee, u, e, A, ne]
    ), _ = Q(
      (T, S) => {
        var re;
        if (S == null || S.stopPropagation(), u) return;
        const M = A.filter((P) => P !== T);
        ne(M), (re = J.current) == null || re.focus();
      },
      [u, A, ne]
    ), G = Q(
      (T, S) => {
        const M = Z.length;
        if (M === 0) return -1;
        for (let re = 0; re < M; re++) {
          const P = (T + S * (re + 1) + M) % M;
          if (!Z[P].disabled) return P;
        }
        return -1;
      },
      [Z]
    ), W = Q(() => Z.findIndex((T) => !T.disabled), [Z]), F = Q(
      (T) => {
        if (!u)
          switch (T.key) {
            case "ArrowDown": {
              T.preventDefault(), I ? V((S) => G(S, 1)) : (R(!0), V(W()));
              break;
            }
            case "ArrowUp": {
              T.preventDefault(), I && V((S) => G(S, -1));
              break;
            }
            case "Enter": {
              if (T.preventDefault(), I && $ >= 0 && $ < Z.length) {
                const S = Z[$];
                S.disabled || C(S.value);
              } else I || R(!0);
              break;
            }
            case "Backspace": {
              if (j === "" && A.length > 0) {
                const S = A[A.length - 1];
                _(S);
              }
              break;
            }
            case "Escape": {
              T.preventDefault(), R(!1), V(-1);
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
        _,
        G,
        W
      ]
    );
    fe(() => {
      const T = (S) => {
        B.current && !B.current.contains(S.target) && (R(!1), V(-1), q(""));
      };
      return document.addEventListener("mousedown", T), () => document.removeEventListener("mousedown", T);
    }, []), fe(() => {
      var T;
      $ >= 0 && z.current && ((T = z.current.querySelectorAll('[role="option"]')[$]) == null || T.scrollIntoView({ block: "nearest" }));
    }, [$]);
    const Y = () => {
      var T;
      u || ((T = J.current) == null || T.focus(), R(!0));
    }, U = (T) => {
      var S;
      return ((S = e.find((M) => M.value === T)) == null ? void 0 : S.label) ?? T;
    }, K = (T) => {
      var S;
      return ((S = e.find((M) => M.value === T)) == null ? void 0 : S.color) ?? g;
    };
    return /* @__PURE__ */ k("div", { ref: E, className: O("flex flex-col gap-1.5", d && "w-full"), children: [
      i && /* @__PURE__ */ f("label", { htmlFor: `${y}-input`, className: "text-xs font-semibold text-neutral-600", children: i }),
      /* @__PURE__ */ k("div", { ref: B, className: "relative", children: [
        m && /* @__PURE__ */ f("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none z-10", children: m }),
        /* @__PURE__ */ k(
          "div",
          {
            onClick: Y,
            className: O(
              // Base styles
              "flex flex-wrap items-center gap-1.5 w-full rounded-[10px] border bg-white cursor-text",
              "transition-colors duration-200",
              // Size styles
              Uc[o],
              // Left icon padding
              m && Yc[o],
              // Right padding for chevron
              "pr-8",
              // Focus ring (applied when dropdown is open)
              I && !w && "ring-2 ring-primary border-primary",
              I && w && "ring-2 ring-error border-error",
              // Border color
              w ? "border-error" : "border-control",
              // Disabled state
              u && "!bg-neutral-100 text-neutral-500 cursor-not-allowed",
              b
            ),
            "aria-invalid": w,
            "aria-describedby": w ? `${y}-error` : a ? `${y}-helper` : void 0,
            children: [
              A.map((T) => {
                const S = Jc[K(T)];
                return /* @__PURE__ */ k(
                  "span",
                  {
                    className: O(
                      "inline-flex items-center rounded-full font-semibold",
                      "transition-colors duration-150",
                      S.base,
                      !u && S.hover,
                      Hc[o]
                    ),
                    children: [
                      U(T),
                      !u && /* @__PURE__ */ f(
                        "button",
                        {
                          type: "button",
                          onClick: (M) => _(T, M),
                          className: O(
                            "inline-flex items-center justify-center rounded-sm transition-colors",
                            S.hover
                          ),
                          "aria-label": `Remove ${U(T)}`,
                          tabIndex: -1,
                          children: /* @__PURE__ */ f(nt, { size: Kc[o] })
                        }
                      )
                    ]
                  },
                  T
                );
              }),
              p ? /* @__PURE__ */ f(
                "input",
                {
                  ref: J,
                  id: `${y}-input`,
                  type: "text",
                  value: j,
                  onChange: (T) => {
                    q(T.target.value), I || R(!0), V(0);
                  },
                  onFocus: () => {
                    u || R(!0);
                  },
                  onKeyDown: F,
                  placeholder: A.length === 0 ? c : "",
                  disabled: u,
                  className: O(
                    "flex-1 min-w-[60px] outline-none bg-transparent",
                    "placeholder:text-neutral-500",
                    u && "cursor-not-allowed"
                  ),
                  role: "combobox",
                  "aria-expanded": I,
                  "aria-controls": `${y}-listbox`,
                  "aria-activedescendant": $ >= 0 ? `${y}-option-${$}` : void 0,
                  "aria-autocomplete": "list",
                  autoComplete: "off"
                }
              ) : /* @__PURE__ */ k(_e, { children: [
                A.length === 0 && /* @__PURE__ */ f("span", { className: "text-neutral-500", children: c }),
                /* @__PURE__ */ f(
                  "input",
                  {
                    ref: J,
                    id: `${y}-input`,
                    className: "absolute opacity-0 w-0 h-0",
                    onFocus: () => {
                      u || R(!0);
                    },
                    onKeyDown: F,
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
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none transition-transform duration-200",
              I && "rotate-180"
            ),
            size: Xc[o]
          }
        ),
        I && /* @__PURE__ */ f(
          "ul",
          {
            ref: z,
            id: `${y}-listbox`,
            role: "listbox",
            "aria-multiselectable": "true",
            className: O(
              "absolute z-50 mt-1 w-full rounded-xl border border-neutral-200 bg-white p-1 shadow-menu",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: Z.length === 0 ? /* @__PURE__ */ f("li", { className: "px-3 py-2 text-xs text-neutral-500", children: j ? "No matching options" : "No options available" }) : Z.map((T, S) => /* @__PURE__ */ f(
              "li",
              {
                id: `${y}-option-${S}`,
                role: "option",
                "aria-selected": A.includes(T.value),
                "aria-disabled": T.disabled || !ee,
                onClick: () => {
                  !T.disabled && ee && C(T.value);
                },
                className: O(
                  "rounded-[7px] px-3 py-2 text-[13px] leading-5 transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  T.disabled || !ee ? "text-neutral-400 cursor-not-allowed select-none" : O(
                    "cursor-pointer",
                    S === $ ? "bg-primary-soft text-primary-ink font-semibold" : "text-neutral-700 hover:bg-primary-soft"
                  )
                ),
                children: T.label
              },
              T.value
            ))
          }
        )
      ] }),
      w && /* @__PURE__ */ f("p", { id: `${y}-error`, className: "text-xs text-error", children: s }),
      !w && a && /* @__PURE__ */ f("p", { id: `${y}-helper`, className: "text-xs text-neutral-500", children: a })
    ] });
  }
);
Qc.displayName = "MultiSelect";
const Zc = {
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
function el(e, t) {
  return e.startsWith("bottom") ? { marginTop: t } : e.startsWith("top") ? { marginBottom: t } : e.startsWith("left") ? { marginRight: t } : e.startsWith("right") ? { marginLeft: t } : {};
}
const Si = oe(
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
    const p = i !== void 0, [m, g] = ce(!1), b = p ? i : m, x = te(null), E = te(null), y = te(null), w = Q(
      (j) => {
        p || g(j), a == null || a(j);
      },
      [p, a]
    ), N = Q(() => w(!1), [w]), h = Q(() => {
      o || w(!b);
    }, [o, b, w]), D = Q(
      (j) => {
        var q;
        j.key === "Escape" && (j.preventDefault(), N(), (q = y.current) == null || q.focus()), j.key === "Tab" && N();
      },
      [N]
    );
    fe(() => {
      const j = (q) => {
        x.current && !x.current.contains(q.target) && N();
      };
      return document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j);
    }, [N]);
    const A = `dropdown-${te(Math.random().toString(36).slice(2, 9)).current}`;
    return /* @__PURE__ */ k(
      "div",
      {
        ref: x,
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
              "aria-expanded": b,
              "aria-controls": b ? `${A}-panel` : void 0,
              "aria-disabled": o,
              onClick: h,
              onKeyDown: D,
              className: O(
                "inline-flex",
                s,
                o && "opacity-50 cursor-not-allowed pointer-events-none"
              ),
              children: e
            }
          ),
          b && /* @__PURE__ */ f(
            "div",
            {
              ref: (j) => {
                E.current = j, typeof l == "function" ? l(j) : l && (l.current = j);
              },
              id: `${A}-panel`,
              onKeyDown: D,
              style: el(n, r),
              className: O(
                "absolute z-50 w-max",
                "rounded-xl border border-neutral-200 bg-white p-1 shadow-menu",
                "animate-fade-in",
                Zc[n],
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
Si.displayName = "Dropdown";
const tl = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-4 py-2.5 text-base"
}, nl = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5"
}, mr = oe(
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
    const [l, p] = ce(!1), [m, g] = ce(-1), b = te(null), x = t.filter((I) => !I.disabled), E = Q(
      (I, R) => {
        const $ = t.length;
        if ($ === 0) return -1;
        for (let V = 0; V < $; V++) {
          const B = (I + R * (V + 1) + $) % $;
          if (!t[B].disabled) return B;
        }
        return -1;
      },
      [t]
    ), y = Q(() => t.findIndex((I) => !I.disabled), [t]), w = Q(() => {
      for (let I = t.length - 1; I >= 0; I--)
        if (!t[I].disabled) return I;
      return -1;
    }, [t]), N = Q(() => {
      s || x.length === 0 || (p(!0), g(-1));
    }, [s, x.length]), h = Q(() => {
      p(!1), g(-1);
    }, []), D = Q(
      (I) => {
        var R;
        I.disabled || ((R = I.onClick) == null || R.call(I), n == null || n(I.value), h());
      },
      [n, h]
    ), A = Q(
      (I) => {
        I ? N() : h();
      },
      [N, h]
    ), j = Q(
      (I) => {
        if (!s)
          switch (I.key) {
            case "ArrowDown": {
              I.preventDefault(), l ? g(
                (R) => R === -1 ? y() : E(R, 1)
              ) : N();
              break;
            }
            case "ArrowUp": {
              I.preventDefault(), l ? g(
                (R) => R === -1 ? w() : E(R, -1)
              ) : N();
              break;
            }
            case "Enter":
            case " ": {
              if (I.preventDefault(), l && m >= 0 && m < t.length) {
                const R = t[m];
                R.href && !R.disabled && (window.location.href = R.href), D(R);
              } else l || N();
              break;
            }
          }
      },
      [
        s,
        l,
        m,
        t,
        N,
        D,
        E,
        y,
        w
      ]
    );
    fe(() => {
      var I;
      m >= 0 && b.current && ((I = b.current.querySelectorAll('[role="menuitem"]')[m]) == null || I.scrollIntoView({ block: "nearest" }));
    }, [m]);
    const q = (I, R) => {
      const $ = R === m, V = /* @__PURE__ */ k(_e, { children: [
        I.icon && /* @__PURE__ */ f(
          "span",
          {
            className: O(
              "flex-shrink-0",
              nl[a],
              I.danger && !I.disabled ? "text-error" : "text-neutral-400",
              $ && !I.danger && "text-primary"
            ),
            children: I.icon
          }
        ),
        /* @__PURE__ */ f("span", { className: "flex-1 truncate", children: I.label }),
        I.badge && /* @__PURE__ */ f("span", { className: "text-xs text-neutral-500", children: I.badge })
      ] }), B = O(
        "flex items-center gap-2 w-full rounded-[7px] text-[13px]",
        "transition-colors duration-100",
        tl[a],
        I.disabled ? "text-neutral-300 cursor-not-allowed opacity-50" : O(
          "cursor-pointer",
          I.danger ? O("text-error", $ ? "bg-error/10" : "hover:bg-error/10") : O(
            "text-neutral-700",
            $ ? "bg-primary-soft text-primary-ink" : "hover:bg-primary-soft"
          )
        )
      ), J = () => {
        var z;
        I.disabled || ((z = I.onClick) == null || z.call(I), n == null || n(I.value), h());
      };
      return /* @__PURE__ */ k("div", { children: [
        I.dividerBefore && /* @__PURE__ */ f("div", { className: "my-1 border-t border-neutral-200", role: "separator" }),
        I.href && !I.disabled ? /* @__PURE__ */ f(
          "a",
          {
            href: I.href,
            role: "menuitem",
            tabIndex: -1,
            className: B,
            onClick: (z) => {
              var ne;
              (ne = I.onClick) == null || ne.call(I), n == null || n(I.value), h(), I.onClick && z.preventDefault();
            },
            onMouseEnter: () => g(R),
            onMouseLeave: () => g(-1),
            "aria-disabled": I.disabled,
            children: V
          }
        ) : /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            role: "menuitem",
            tabIndex: -1,
            className: O(B, "text-left"),
            onClick: J,
            onMouseEnter: () => g(R),
            onMouseLeave: () => g(-1),
            disabled: I.disabled,
            "aria-disabled": I.disabled,
            children: V
          }
        )
      ] }, I.value);
    };
    return /* @__PURE__ */ f(
      Si,
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
        children: /* @__PURE__ */ k("div", { ref: b, role: "menu", "aria-orientation": "vertical", children: [
          e && /* @__PURE__ */ k("div", { children: [
            e,
            /* @__PURE__ */ f("div", { className: "my-1 border-t border-neutral-200", role: "separator" })
          ] }),
          t.map((I, R) => q(I, R))
        ] })
      }
    );
  }
);
mr.displayName = "DropdownMenu";
const rl = oe(
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
          className: "text-xs font-semibold text-neutral-600",
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
            "w-full rounded-[10px] border bg-white px-3.5 py-2.5 text-[13px] leading-5",
            "transition-colors duration-200",
            "placeholder:text-neutral-500",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
            "resize-y min-h-[100px]",
            // Border color
            m ? "border-error focus:ring-error focus:border-error" : "border-control",
            // Disabled state
            a && "!bg-neutral-100 text-neutral-500 cursor-not-allowed",
            s
          ),
          "aria-invalid": m,
          "aria-describedby": m ? `${p}-error` : t ? `${p}-helper` : void 0,
          ...u
        }
      ),
      /* @__PURE__ */ k("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ k("div", { children: [
          m && /* @__PURE__ */ f("p", { id: `${p}-error`, className: "text-xs text-error", children: n }),
          !m && t && /* @__PURE__ */ f("p", { id: `${p}-helper`, className: "text-xs text-neutral-500", children: t })
        ] }),
        o && i && /* @__PURE__ */ k("span", { className: "text-xs text-neutral-500 tabular-nums", children: [
          g,
          "/",
          i
        ] })
      ] })
    ] });
  }
);
rl.displayName = "Textarea";
let hn = null;
function ol() {
  return hn || (hn = Promise.all([
    import("./index-3camMQQh.js").then((e) => e.i),
    // prismjs core ships markup/css/clike/javascript — no grammars eagerly imported
    import("./prism-Ciz7AabW.js").then((e) => e.p)
  ]).then(([e, t]) => ({
    Editor: e.default ?? e,
    Prism: t.default ?? t
  }))), hn;
}
const il = {
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
}, eo = /* @__PURE__ */ new Map();
function al(e, t) {
  if (e.languages[t]) return Promise.resolve();
  const n = il[t];
  if (!n) return Promise.resolve();
  let r = eo.get(t);
  return r || (r = n(), eo.set(t, r)), r;
}
function sl(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const Rt = {
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: 13,
  lineHeight: 1.5
}, cl = oe(
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
    disabled: b = !1,
    className: x,
    id: E,
    ...y
  }, w) => {
    const N = bs(), h = E || `code-editor-${N}`, D = !!n, [A, j] = ce(null), [q, I] = ce(null), [R, $] = ce(!1), V = te(null);
    fe(() => {
      let _ = !0;
      return (async () => {
        const G = await ol();
        _ && (j(G), await al(G.Prism, a), _ && I(a));
      })(), () => {
        _ = !1;
      };
    }, [a]), fe(
      () => () => {
        V.current && clearTimeout(V.current);
      },
      []
    );
    const B = A == null ? void 0 : A.Prism, J = !!B && q === a, z = (_) => {
      if (B && J) {
        const G = B.languages[a] ?? B.languages.javascript;
        if (G) return B.highlight(_, G, a);
      }
      return sl(_);
    }, ne = () => {
      var _;
      (_ = navigator.clipboard) == null || _.writeText(o), $(!0), V.current && clearTimeout(V.current), V.current = setTimeout(() => $(!1), 2e3);
    }, Z = Math.max(1, o.split(`
`).length), ee = D ? `${h}-error` : t ? `${h}-helper` : void 0, C = l || !A ? (
      // Display-only, or fallback before the editor lib resolves.
      l ? /* @__PURE__ */ f(
        "pre",
        {
          className: "m-0 overflow-auto px-4 py-3",
          style: { ...Rt, minHeight: u },
          children: /* @__PURE__ */ f("code", { dangerouslySetInnerHTML: { __html: z(o) } })
        }
      ) : (
        // Editable fallback: a plain textarea so there is no layout shift.
        /* @__PURE__ */ f(
          "textarea",
          {
            id: h,
            value: o,
            disabled: b,
            placeholder: s,
            spellCheck: !1,
            onChange: (_) => i == null ? void 0 : i(_.target.value),
            className: "m-0 w-full resize-none border-0 bg-transparent px-4 py-3 focus:outline-none",
            style: { ...Rt, minHeight: u }
          }
        )
      )
    ) : /* @__PURE__ */ f(
      A.Editor,
      {
        value: o,
        onValueChange: (_) => i == null ? void 0 : i(_),
        highlight: z,
        padding: { top: 12, right: 16, bottom: 12, left: 16 },
        tabSize: c,
        insertSpaces: d,
        textareaId: h,
        disabled: b,
        placeholder: s,
        style: { ...Rt, minHeight: u },
        textareaClassName: "focus:outline-none"
      }
    );
    return /* @__PURE__ */ k("div", { className: O("flex flex-col gap-1.5", r && "w-full"), children: [
      e && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: h,
          className: "text-xs font-semibold text-neutral-600",
          children: e
        }
      ),
      /* @__PURE__ */ k("div", { className: "relative", children: [
        g && /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            onClick: ne,
            "aria-label": R ? "Copied" : "Copy code",
            className: O(
              "absolute right-2 top-2 z-10 rounded-lg p-1.5",
              "bg-white text-neutral-500 border border-neutral-200",
              "transition-colors hover:bg-neutral-100 hover:text-neutral-700",
              "focus:outline-none focus:ring-2 focus:ring-primary"
            ),
            children: R ? /* @__PURE__ */ f(Jt, { size: 16, className: "text-success" }) : /* @__PURE__ */ f(Ks, { size: 16 })
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            ref: w,
            "aria-invalid": D || void 0,
            "aria-describedby": ee,
            className: O(
              "omnitok-code-editor",
              "overflow-hidden rounded-[10px] border bg-white",
              "transition-colors duration-200",
              !l && !b && "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
              D ? "border-error focus-within:border-error focus-within:ring-error/20" : "border-control",
              b && "cursor-not-allowed bg-neutral-100 text-neutral-500",
              x
            ),
            ...y,
            children: /* @__PURE__ */ k("div", { className: "flex", children: [
              p && /* @__PURE__ */ f(
                "div",
                {
                  "aria-hidden": "true",
                  className: "select-none border-r border-neutral-200 bg-neutral-50 py-3 pl-4 pr-3 text-right text-neutral-500 tabular-nums",
                  style: Rt,
                  children: Array.from({ length: Z }, (_, G) => /* @__PURE__ */ f("div", { children: G + 1 }, G))
                }
              ),
              /* @__PURE__ */ f("div", { className: "min-w-0 flex-1", children: C })
            ] })
          }
        )
      ] }),
      (D || t || m && !l) && /* @__PURE__ */ k("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ k("div", { children: [
          D && /* @__PURE__ */ f("p", { id: `${h}-error`, className: "text-xs text-error", children: n }),
          !D && t && /* @__PURE__ */ f("p", { id: `${h}-helper`, className: "text-xs text-neutral-500", children: t })
        ] }),
        m && !l && /* @__PURE__ */ k("span", { className: "text-xs text-neutral-500 tabular-nums", children: [
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
cl.displayName = "CodeEditor";
const ll = {
  primary: { checked: "peer-checked:bg-primary peer-checked:border-primary", ring: "peer-focus:ring-primary" },
  accent: { checked: "peer-checked:bg-accent peer-checked:border-accent", ring: "peer-focus:ring-accent" },
  neutral: { checked: "peer-checked:bg-neutral-600 peer-checked:border-neutral-600", ring: "peer-focus:ring-neutral-400" },
  success: { checked: "peer-checked:bg-success peer-checked:border-success", ring: "peer-focus:ring-success" },
  info: { checked: "peer-checked:bg-info peer-checked:border-info", ring: "peer-focus:ring-info" },
  violet: { checked: "peer-checked:bg-violet peer-checked:border-violet", ring: "peer-focus:ring-violet" },
  rose: { checked: "peer-checked:bg-rose peer-checked:border-rose", ring: "peer-focus:ring-rose" },
  teal: { checked: "peer-checked:bg-teal peer-checked:border-teal", ring: "peer-focus:ring-teal" }
}, dl = {
  primary: { checked: "peer-checked:bg-primary", ring: "peer-focus:ring-primary" },
  accent: { checked: "peer-checked:bg-accent", ring: "peer-focus:ring-accent" },
  neutral: { checked: "peer-checked:bg-neutral-600", ring: "peer-focus:ring-neutral-400" },
  success: { checked: "peer-checked:bg-success", ring: "peer-focus:ring-success" },
  info: { checked: "peer-checked:bg-info", ring: "peer-focus:ring-info" },
  violet: { checked: "peer-checked:bg-violet", ring: "peer-focus:ring-violet" },
  rose: { checked: "peer-checked:bg-rose", ring: "peer-focus:ring-rose" },
  teal: { checked: "peer-checked:bg-teal", ring: "peer-focus:ring-teal" }
}, gr = oe(
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
    const m = d || `checkbox-${Math.random().toString(36).slice(2, 9)}`, g = !!n, b = (y) => {
      u == null || u(y), a == null || a(y.target.checked);
    }, x = () => {
      const y = ll[o];
      return /* @__PURE__ */ f(
        "div",
        {
          className: O(
            "w-[18px] h-[18px] rounded-[5px] border-2 transition-colors",
            "flex items-center justify-center",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "[&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100",
            y.ring,
            y.checked,
            g ? "border-error" : "border-neutral-400 peer-hover:border-primary"
          ),
          children: r ? /* @__PURE__ */ f(Ec, { className: "w-3 h-3 text-white transition-opacity" }) : /* @__PURE__ */ f(Jt, { className: "w-3 h-3 text-white transition-opacity" })
        }
      );
    }, E = () => {
      const y = dl[o];
      return /* @__PURE__ */ f(
        "div",
        {
          className: O(
            "relative w-11 h-6 rounded-full transition-colors",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "peer-checked:[&>div]:translate-x-5",
            y.ring,
            y.checked,
            g ? "bg-error/30" : "bg-neutral-400"
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
                  onChange: b,
                  ...l
                }
              ),
              i ? E() : x()
            ] }),
            (e || t) && /* @__PURE__ */ k("div", { className: "flex flex-col", children: [
              e && /* @__PURE__ */ f("span", { className: "text-[13px] font-medium text-neutral-800", children: e }),
              t && /* @__PURE__ */ f("span", { className: "text-xs text-neutral-500", children: t })
            ] })
          ]
        }
      ),
      g && /* @__PURE__ */ f("p", { className: O("text-xs text-error", i ? "ml-14" : "ml-8"), children: n })
    ] });
  }
);
gr.displayName = "Checkbox";
const pl = oe(
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
                    "w-[18px] h-[18px] rounded-full border-2 transition-colors",
                    "flex items-center justify-center",
                    "peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2",
                    "peer-checked:border-primary",
                    d ? "border-error" : "border-neutral-400 peer-hover:border-primary"
                  ),
                  children: /* @__PURE__ */ f("div", { className: "w-2 h-2 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform" })
                }
              )
            ] }),
            (e || t) && /* @__PURE__ */ k("div", { className: "flex flex-col", children: [
              e && /* @__PURE__ */ f("span", { className: "text-[13px] font-medium text-neutral-800", children: e }),
              t && /* @__PURE__ */ f("span", { className: "text-xs text-neutral-500", children: t })
            ] })
          ]
        }
      ),
      d && /* @__PURE__ */ f("p", { className: "text-xs text-error ml-8", children: n })
    ] });
  }
);
pl.displayName = "Radio";
const ul = {
  default: "bg-white border border-neutral-200 rounded-[14px] shadow-card",
  bordered: "bg-white border border-neutral-300 rounded-[14px]",
  elevated: "bg-white border border-neutral-200 rounded-[14px] shadow-card-hover"
}, fl = oe(
  ({ children: e, noPadding: t = !1, hoverable: n = !1, variant: r = "default", className: o, ...i }, a) => /* @__PURE__ */ f(
    "div",
    {
      ref: a,
      className: O(
        ul[r],
        !t && "p-4",
        n && "transition-[box-shadow,border-color] duration-150 hover:shadow-card-hover hover:border-primary/30 cursor-pointer",
        o
      ),
      ...i,
      children: e
    }
  )
);
fl.displayName = "Card";
const ml = oe(
  ({ children: e, action: t, className: n, ...r }, o) => /* @__PURE__ */ k(
    "div",
    {
      ref: o,
      className: O(
        // v3: the header is part of the white card, not a coloured band.
        "flex items-center justify-between gap-3 px-4 py-3 first:rounded-t-[14px]",
        "bg-white text-neutral-800 border-b border-neutral-200",
        n
      ),
      ...r,
      children: [
        /* @__PURE__ */ f("div", { className: "font-display text-[15px] font-extrabold leading-6", children: e }),
        t && /* @__PURE__ */ f("div", { children: t })
      ]
    }
  )
);
ml.displayName = "CardHeader";
const gl = oe(
  ({ children: e, className: t, ...n }, r) => /* @__PURE__ */ f("div", { ref: r, className: O("p-4", t), ...n, children: e })
);
gl.displayName = "CardBody";
const hl = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
  between: "justify-between"
}, vl = oe(
  ({ children: e, align: t = "right", className: n, ...r }, o) => /* @__PURE__ */ f(
    "div",
    {
      ref: o,
      className: O(
        "flex items-center gap-3 px-4 py-3 bg-[#FAFAFC] border-t border-neutral-200 text-xs text-neutral-600 last:rounded-b-[14px]",
        hl[t],
        n
      ),
      ...r,
      children: e
    }
  )
);
vl.displayName = "CardFooter";
const bl = {
  // v3: tint behind, the dark tone in front (>= 5:1 on every tint).
  primary: "bg-primary-soft text-primary-ink",
  accent: "bg-accent/10 text-accent-dark",
  neutral: "bg-neutral-100 text-neutral-700",
  success: "bg-success-soft text-success-dark",
  warning: "bg-warning-soft text-warning-dark",
  error: "bg-error-soft text-error-dark",
  info: "bg-info-soft text-info-dark",
  violet: "bg-violet/10 text-violet-dark",
  rose: "bg-rose/10 text-rose-dark",
  teal: "bg-teal/10 text-teal-dark"
}, xl = {
  sm: "px-2 py-0.5 text-2xs",
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-3 py-1 text-[13px]"
}, yl = {
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
}, wl = oe(
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
        yl[t],
        i
      ),
      ...a
    }
  ) : /* @__PURE__ */ f(
    "span",
    {
      ref: s,
      className: O(
        "inline-flex items-center font-semibold tabular-nums",
        r ? "rounded-full" : "rounded-[7px]",
        bl[t],
        xl[n],
        i
      ),
      ...a,
      children: e
    }
  )
);
wl.displayName = "Badge";
const to = {
  xs: "w-6 h-6 text-2xs",
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-xl"
}, El = {
  xs: "w-1.5 h-1.5 border",
  sm: "w-2 h-2 border",
  md: "w-2.5 h-2.5 border-2",
  lg: "w-3 h-3 border-2",
  xl: "w-4 h-4 border-2"
}, Nl = {
  online: "bg-success",
  offline: "bg-neutral-400",
  busy: "bg-error",
  away: "bg-warning"
}, qn = oe(
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
            to[e]
          ),
          ...a
        }
      ) : /* @__PURE__ */ f(
        "div",
        {
          className: O(
            "rounded-full flex items-center justify-center font-semibold",
            // v3: the action gradient (white initials >= 4.6:1 on both ends).
            "bg-[image:var(--omni-gradient-action)] text-white",
            to[e]
          ),
          children: c(r || n)
        }
      ),
      o && /* @__PURE__ */ f(
        "span",
        {
          className: O(
            "absolute bottom-0 right-0 rounded-full border-white",
            El[e],
            Nl[o]
          )
        }
      )
    ] });
  }
);
qn.displayName = "Avatar";
const Dl = {
  // v3: the state's tint, a 1px border of its colour and the dark tone for
  // text; the icon carries the shape (never colour alone).
  info: "bg-info-soft border-info/30 text-info-dark",
  success: "bg-success-soft border-success/30 text-success-dark",
  warning: "bg-warning-soft border-warning/30 text-warning-dark",
  error: "bg-error-soft border-error/30 text-error-dark"
}, Ol = {
  info: Ni,
  success: Ei,
  warning: Di,
  error: pr
}, kl = oe(
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
    const d = Ol[e];
    return /* @__PURE__ */ k(
      "div",
      {
        ref: c,
        role: "alert",
        className: O(
          "flex gap-3 px-4 py-3.5 rounded-xl border",
          Dl[e],
          a
        ),
        ...s,
        children: [
          !i && /* @__PURE__ */ f(d, { "aria-hidden": "true", className: "flex-shrink-0 w-[18px] h-[18px] mt-0.5" }),
          /* @__PURE__ */ k("div", { className: "flex-1 min-w-0", children: [
            t && // Not a heading: an alert sits inside any outline level.
            /* @__PURE__ */ f("p", { className: "text-xs font-semibold mb-0.5", children: t }),
            /* @__PURE__ */ f("div", { className: "text-[13px] leading-5", children: n })
          ] }),
          r && /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: o,
              className: "flex-shrink-0 p-1 rounded hover:bg-black/5 transition-colors",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ f(nt, { className: "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
kl.displayName = "Alert";
const Sl = {
  es: {
    // LoginPage
    "login.title": "Iniciar sesión",
    "login.subtitle": "Ingresa tus credenciales para continuar",
    "login.emailLabel": "Correo electrónico",
    "login.emailPlaceholder": "tu@email.com",
    "login.passwordLabel": "Contraseña",
    "login.passwordPlaceholder": "••••••••",
    "login.rememberMe": "Recordarme",
    "login.forgotPassword": "¿Olvidaste tu contraseña?",
    "login.submit": "Iniciar sesión",
    "login.split.heroTitle": "Te damos la bienvenida",
    "login.split.heroDescription": "Ingresa para seguir donde lo dejaste.",
    "login.showPassword": "Mostrar contraseña",
    "login.hidePassword": "Ocultar contraseña",
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
    "sidebar.language": "Idioma",
    "sidebar.signOut": "Salir",
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
    "login.showPassword": "Show password",
    "login.hidePassword": "Hide password",
    "login.split.heroDescription": "Sign in to pick up where you left off.",
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
    "sidebar.language": "Language",
    "sidebar.signOut": "Sign out",
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
    "login.split.heroTitle": "Que bom ter você de volta",
    "login.split.heroDescription": "Entre para continuar de onde parou.",
    "login.showPassword": "Mostrar senha",
    "login.hidePassword": "Ocultar senha",
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
    "sidebar.language": "Idioma",
    "sidebar.signOut": "Sair",
    "header.toggleMenu": "Mostrar ou ocultar o menu",
    "header.poweredBy": "Powered by",
    "layout.closeMenu": "Fechar menu"
  }
}, Il = /\{(\w+)\}/g;
function Cl(e, t) {
  if (!t) return e;
  const n = { ...e };
  for (const [r, o] of Object.entries(t))
    n[r] = { ...n[r] ?? {}, ...o };
  return n;
}
function Zt({
  language: e,
  messagesByLanguage: t,
  fallbackLanguage: n = "en"
}) {
  const r = Cl(Sl, t);
  return {
    language: e,
    messagesByLanguage: r,
    t: (i, a) => {
      const s = r[e] ?? {}, c = r[n] ?? {}, d = s[i] ?? c[i] ?? i;
      return a ? d.replace(Il, (u, l) => {
        const p = String(l), m = a[p];
        return m == null ? u : String(m);
      }) : d;
    }
  };
}
const _l = Zt({ language: "es" }), Ii = dr(_l);
function Yh({
  children: e,
  language: t,
  messages: n,
  fallbackLanguage: r = "es"
}) {
  const o = $e(
    () => Zt({ language: t, messagesByLanguage: n, fallbackLanguage: r }),
    [t, n, r]
  );
  return /* @__PURE__ */ f(Ii.Provider, { value: o, children: e });
}
function Ge() {
  return Nt(Ii);
}
const Al = "flex w-full items-center gap-2.5 rounded-lg px-3 text-left text-[12px] leading-tight text-[var(--omni-sb-text)] transition-colors duration-150 hover:bg-white/[.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40", Pl = "bg-[color-mix(in_srgb,var(--omni-sb-accent)_12.5%,transparent)] text-white font-semibold shadow-[inset_3px_0_0_var(--omni-sb-accent)]", Rl = "relative flex h-4 w-4 flex-shrink-0 items-center justify-center text-[var(--omni-sb-muted)] [&>svg]:h-4 [&>svg]:w-4", Tl = "text-[var(--omni-sb-accent-ink)]";
function Ml({
  item: e,
  collapsed: t,
  active: n,
  expanded: r,
  hasChildren: o,
  onPress: i,
  onAnchorClick: a
}) {
  const s = O(
    Al,
    t ? "min-h-[38px] justify-center px-0" : "min-h-[36px] py-1.5",
    n && Pl,
    o && !t && "font-semibold"
  ), c = /* @__PURE__ */ k(_e, { children: [
    /* @__PURE__ */ f("span", { className: O(Rl, n && Tl), children: e.icon ?? /* @__PURE__ */ f("span", { className: "h-1.5 w-1.5 rounded-full bg-current opacity-60" }) }),
    !t && /* @__PURE__ */ k(_e, { children: [
      /* @__PURE__ */ f("span", { className: "min-w-0 flex-1 truncate", children: e.label }),
      e.badge != null && e.badge !== "" && /* @__PURE__ */ f("span", { className: "rounded-full bg-[var(--omni-sb-badge)] px-1.5 py-px text-2xs font-bold leading-4 tabular-nums text-white", children: e.badge }),
      e.tag && /* @__PURE__ */ f("span", { className: "rounded border border-white/20 px-1 text-2xs font-semibold uppercase tracking-[.06em] text-[var(--omni-sb-muted)]", children: e.tag }),
      n && !o && /* @__PURE__ */ f("span", { "aria-hidden": "true", className: "h-1 w-1 flex-shrink-0 rounded-full bg-[var(--omni-sb-accent)]" }),
      o && /* @__PURE__ */ f(
        ut,
        {
          "aria-hidden": "true",
          className: O("h-3.5 w-3.5 text-[var(--omni-sb-muted)] transition-transform", r && "rotate-180")
        }
      )
    ] }),
    t && o && /* @__PURE__ */ f(Qt, { "aria-hidden": "true", className: "absolute right-1.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 text-white/50" })
  ] }), d = {
    id: e.elementId,
    className: O(s, t && "relative"),
    title: t ? e.label : void 0,
    "aria-current": n && !o ? "page" : void 0
  };
  return e.href && !o ? /* @__PURE__ */ f("a", { href: e.href, onClick: a, ...d, children: c }) : /* @__PURE__ */ f("button", { type: "button", onClick: i, "aria-expanded": o ? r : void 0, ...d, children: c });
}
function Un({ item: e, collapsed: t, activeId: n, isExpanded: r, toggle: o, onItemClick: i, onCollapsedChange: a, level: s }) {
  const c = !!e.children && e.children.length > 0, d = e.active || e.id === n, u = c && r(e), l = (g) => {
    var x;
    g.ctrlKey || g.metaKey || g.shiftKey || g.button !== 0 || (g.preventDefault(), i == null || i(e), (x = e.onClick) == null || x.call(e));
  }, p = () => {
    var g, b;
    if (c) {
      t ? (a == null || a(!1), u || o(e)) : o(e), i == null || i(e), (g = e.onClick) == null || g.call(e);
      return;
    }
    i == null || i(e), (b = e.onClick) == null || b.call(e);
  }, m = c && u && !t && /* @__PURE__ */ f("div", { className: O("mt-0.5 space-y-px", e.kind === "section" ? "ml-5 border-l border-white/[.11] pl-1.5" : "ml-4"), children: e.children.map((g) => /* @__PURE__ */ f(
    Un,
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
      Un,
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
      Ml,
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
function no({ selector: e, collapsed: t }) {
  const { t: n } = Ge(), { active: r, options: o, onSelect: i } = e, a = o.length > 1 || o.length === 1 && r == null, [s, c] = ce(!1), [d, u] = ce(""), [l, p] = ce(null), m = te(null), g = te(null), b = e.searchThreshold ?? 8, x = o.length >= b, E = Q(() => {
    var A;
    const D = (A = m.current) == null ? void 0 : A.getBoundingClientRect();
    D && p(t ? { left: D.right + 10, top: D.top, width: 250 } : { left: D.left, top: D.bottom + 6, width: Math.max(D.width, 230) });
  }, [t]);
  xi(() => {
    s && E();
  }, [s, E]), fe(() => {
    if (!s) return;
    const D = (j) => {
      var q;
      j.key === "Escape" && (c(!1), (q = m.current) == null || q.focus());
    }, A = (j) => {
      var I, R;
      const q = j.target;
      (I = g.current) != null && I.contains(q) || (R = m.current) != null && R.contains(q) || c(!1);
    };
    return document.addEventListener("keydown", D), document.addEventListener("mousedown", A), window.addEventListener("resize", E), () => {
      document.removeEventListener("keydown", D), document.removeEventListener("mousedown", A), window.removeEventListener("resize", E);
    };
  }, [s, E]), fe(() => {
    s || u("");
  }, [s]);
  const y = $e(() => {
    const D = d.trim().toLowerCase();
    return D ? o.filter((A) => A.label.toLowerCase().includes(D)) : o;
  }, [o, d]), w = ((r == null ? void 0 : r.initial) ?? (r == null ? void 0 : r.label) ?? "?").trim().charAt(0).toUpperCase(), N = e.caption ?? n("sidebar.project"), h = (D) => {
    D.disabled || (c(!1), i == null || i(D));
  };
  return /* @__PURE__ */ k("div", { className: O(t ? "my-2" : "mb-1"), children: [
    !t && /* @__PURE__ */ k("div", { className: "mx-2.5 mb-1.5 mt-1 text-[11px] font-semibold uppercase tracking-[.1em] text-[var(--omni-sb-muted)]", children: [
      N,
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
        "aria-label": t ? `${N}: ${(r == null ? void 0 : r.label) ?? ""}` : void 0,
        title: t ? r == null ? void 0 : r.label : void 0,
        onClick: () => {
          if (a) {
            if (t) {
              c((D) => !D);
              return;
            }
            c((D) => !D);
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
              children: w
            }
          ),
          !t && /* @__PURE__ */ k(_e, { children: [
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
    s && l && Ns(
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
            /* @__PURE__ */ f("div", { className: "px-2.5 pb-1 pt-1.5 text-2xs font-semibold uppercase tracking-[.1em] text-[var(--omni-muted)]", children: e.menuTitle ?? n("sidebar.changeProject") }),
            x && /* @__PURE__ */ k("label", { className: "mx-1 mb-1.5 flex items-center gap-1.5 rounded-lg border border-[var(--omni-line)] px-2 py-1.5 text-[var(--omni-muted)] focus-within:border-[var(--omni-accent)]", children: [
              /* @__PURE__ */ f(fr, { "aria-hidden": "true", className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ f(
                "input",
                {
                  autoFocus: !0,
                  value: d,
                  onChange: (D) => u(D.target.value),
                  placeholder: e.searchPlaceholder ?? n("sidebar.searchProject"),
                  className: "min-w-0 flex-1 bg-transparent text-[12px] text-[var(--omni-text)] outline-none placeholder:text-[var(--omni-muted)]"
                }
              )
            ] }),
            y.length === 0 && /* @__PURE__ */ f("div", { className: "px-2.5 py-2 text-[var(--omni-muted)]", children: e.emptyLabel ?? n("sidebar.noProjects") }),
            y.map((D) => {
              const A = D.id === (r == null ? void 0 : r.id);
              return /* @__PURE__ */ k(
                "button",
                {
                  type: "button",
                  role: "option",
                  "aria-selected": A,
                  disabled: D.disabled,
                  onClick: () => h(D),
                  className: O(
                    "flex w-full items-center gap-2 rounded-[7px] px-2.5 py-2 text-left leading-tight",
                    A ? "bg-[var(--omni-active)] font-semibold text-[var(--omni-accent)]" : "hover:bg-[var(--omni-canvas)]",
                    D.disabled && "cursor-default text-[var(--omni-muted)] hover:bg-transparent"
                  ),
                  children: [
                    /* @__PURE__ */ f("span", { className: "flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center", children: A && /* @__PURE__ */ f(Jt, { "aria-hidden": "true", className: "h-3.5 w-3.5" }) }),
                    /* @__PURE__ */ f("span", { className: "min-w-0 flex-1 truncate", children: D.label }),
                    D.meta && /* @__PURE__ */ f("span", { className: "flex-shrink-0 text-[11px] text-[var(--omni-muted)]", children: D.meta })
                  ]
                },
                D.id
              );
            })
          ]
        }
      ),
      document.body
    )
  ] });
}
function Hn(e, t, n) {
  let r = !1;
  for (const o of e)
    o.children && o.children.length > 0 ? Hn(o.children, t, n) && (n.push(o.id), r = !0) : (o.id === t || o.active) && (r = !0);
  return r;
}
const Ci = oe(
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
    className: b,
    ...x
  }, E) => {
    const { t: y } = Ge(), w = p !== void 0, [N, h] = ce(() => {
      const R = [];
      return Hn(e, d, R), new Set(R);
    });
    fe(() => {
      if (w) return;
      const R = [];
      Hn(e, d, R), R.length !== 0 && h(($) => {
        const V = new Set($);
        return R.forEach((B) => V.add(B)), V;
      });
    }, [e, d, w]);
    const D = Q(
      (R) => w ? p.includes(R.id) : N.has(R.id),
      [w, p, N]
    ), A = Q(
      (R) => {
        const $ = !D(R);
        if (w) {
          m == null || m(R.id, $);
          return;
        }
        h((V) => {
          const B = new Set(V);
          return $ ? B.add(R.id) : B.delete(R.id), B;
        }), m == null || m(R.id, $);
      },
      [w, D, m]
    ), j = t, q = n ?? t;
    return /* @__PURE__ */ k(
      "aside",
      {
        ref: E,
        "data-omni-sidebar": "",
        "data-collapsed": a ? "" : void 0,
        className: O(
          "flex flex-shrink-0 flex-col overflow-hidden [background:var(--omni-sb-bg)] font-sans text-[var(--omni-sb-text)]",
          "transition-[width] duration-200",
          g === "framed" ? "m-3 h-[calc(100%-24px)] rounded-[14px] border border-[var(--omni-navy-line)] shadow-[0_2px_8px_#1A124008]" : "h-full border-r border-[var(--omni-navy-line)]",
          a ? "w-16" : "w-[250px]",
          b
        ),
        ...x,
        children: [
          (j || c) && /* @__PURE__ */ f("div", { className: O("flex items-center border-b border-white/[.11] px-3", a ? "h-14 justify-center px-2" : "h-14"), children: a ? /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: () => s == null ? void 0 : s(!1),
              className: "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/10",
              "aria-label": y("sidebar.expand"),
              children: q ?? /* @__PURE__ */ f(Qt, { className: "h-4 w-4", "aria-hidden": "true" })
            }
          ) : /* @__PURE__ */ k(_e, { children: [
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
                children: /* @__PURE__ */ f(kc, { className: "h-4 w-4", "aria-hidden": "true" })
              }
            )
          ] }) }),
          /* @__PURE__ */ k("nav", { className: O("scrollbar-thin flex-1 overflow-y-auto overflow-x-hidden", a ? "px-2 py-2" : "px-2.5 py-2.5"), children: [
            l && !e.some((R) => R.kind === "project-selector") && /* @__PURE__ */ f(no, { selector: l, collapsed: a }),
            e.map(
              (R) => R.kind === "project-selector" ? l ? /* @__PURE__ */ f(no, { selector: l, collapsed: a }, R.id) : null : /* @__PURE__ */ f(
                Un,
                {
                  item: R,
                  collapsed: a,
                  activeId: d,
                  isExpanded: D,
                  toggle: A,
                  onItemClick: u,
                  onCollapsedChange: s,
                  level: 0
                },
                R.id
              )
            )
          ] }),
          a ? i && /* @__PURE__ */ f("div", { className: "border-t border-white/[.11] p-2", children: i }) : o && /* @__PURE__ */ f("div", { className: "border-t border-white/[.11] p-2.5", children: o })
        ]
      }
    );
  }
);
Ci.displayName = "Sidebar";
function jl(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]).join("").toUpperCase();
}
function ro({ name: e, initials: t, src: n }) {
  return n ? /* @__PURE__ */ f("img", { src: n, alt: "", className: "h-8 w-8 flex-shrink-0 rounded-full object-cover" }) : /* @__PURE__ */ f(
    "span",
    {
      "aria-hidden": "true",
      className: "grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-white/10 text-2xs font-bold text-[#E3DAFA]",
      title: e,
      children: t
    }
  );
}
const $l = oe(
  ({
    name: e,
    detail: t,
    initials: n,
    avatarSrc: r,
    version: o,
    languages: i,
    language: a,
    onLanguageChange: s,
    languageLabel: c,
    onSignOut: d,
    signOutLabel: u,
    collapsed: l = !1,
    children: p,
    className: m,
    ...g
  }, b) => {
    const { t: x } = Ge(), E = n ?? jl(e);
    return l ? /* @__PURE__ */ k("div", { ref: b, "data-omni-sidebar-account": "", className: O("flex justify-center py-1", m), title: e, ...g, children: [
      /* @__PURE__ */ f(ro, { name: e, initials: E, src: r }),
      /* @__PURE__ */ f("span", { className: "sr-only", children: e })
    ] }) : /* @__PURE__ */ k("div", { ref: b, "data-omni-sidebar-account": "", className: O("flex flex-col gap-0.5 px-1", m), ...g, children: [
      o && /* @__PURE__ */ f("div", { className: "px-2 pb-1.5", children: /* @__PURE__ */ k("span", { className: "inline-flex items-center rounded-md border border-white/25 bg-white/10 px-2 py-0.5 text-2xs font-bold tracking-wide tabular-nums text-white/90", children: [
        "v",
        o
      ] }) }),
      p,
      i && i.length > 1 && /* @__PURE__ */ k("div", { className: "flex items-center gap-2.5 px-2 py-1", children: [
        /* @__PURE__ */ f(ic, { "aria-hidden": "true", className: "h-4 w-4 flex-shrink-0 text-[var(--omni-sb-muted)]" }),
        /* @__PURE__ */ f(
          "div",
          {
            role: "group",
            "aria-label": c ?? x("sidebar.language"),
            className: "inline-flex overflow-hidden rounded-lg border border-white/30 bg-white/[.04]",
            children: i.map((y) => {
              const w = y.code === a;
              return /* @__PURE__ */ f(
                "button",
                {
                  type: "button",
                  "aria-pressed": w,
                  onClick: () => s == null ? void 0 : s(y.code),
                  className: O(
                    "border-r border-white/20 px-2.5 py-1 text-2xs font-semibold uppercase tracking-wide transition-colors last:border-r-0",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60",
                    w ? "bg-white text-[var(--omni-navy)]" : "text-[var(--omni-sb-text)] hover:bg-white/10"
                  ),
                  children: y.label ?? y.code.toUpperCase()
                },
                y.code
              );
            })
          }
        )
      ] }),
      d && /* @__PURE__ */ k(
        "button",
        {
          type: "button",
          onClick: d,
          className: "flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-[12px] text-[var(--omni-sb-text)] transition-colors hover:bg-white/[.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
          children: [
            /* @__PURE__ */ f(vc, { "aria-hidden": "true", className: "h-4 w-4 text-[var(--omni-sb-muted)]" }),
            /* @__PURE__ */ f("span", { children: u ?? x("sidebar.signOut") })
          ]
        }
      ),
      /* @__PURE__ */ k("div", { className: "mt-1 flex items-center gap-2.5 border-t border-white/[.11] px-2 pt-2.5", children: [
        /* @__PURE__ */ f(ro, { name: e, initials: E, src: r }),
        /* @__PURE__ */ k("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ f("div", { className: "truncate text-[12px] font-semibold text-white", children: e }),
          t && /* @__PURE__ */ f("div", { className: "truncate text-2xs text-[var(--omni-sb-muted)]", children: t })
        ] })
      ] })
    ] });
  }
);
$l.displayName = "SidebarAccount";
const _i = oe(
  ({ items: e, count: t, searchValue: n, searchPlaceholder: r, filterLabel: o, onSearchChange: i, onFilterChange: a }, s) => /* @__PURE__ */ f(
    mr,
    {
      ref: s,
      offset: 14,
      card: /* @__PURE__ */ k("div", { className: "flex flex-col gap-4 p-4", children: [
        /* @__PURE__ */ f(
          Ft,
          {
            size: "sm",
            leftIcon: /* @__PURE__ */ f(fr, { size: 14 }),
            value: n,
            onChange: (c) => i == null ? void 0 : i(c.target.value),
            placeholder: r ?? "Search notifications..."
          }
        ),
        /* @__PURE__ */ f(gr, { label: o ?? "Unread only", onCheckedChange: a })
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
            /* @__PURE__ */ f(js, { "aria-hidden": "true", className: "w-[18px] h-[18px] text-neutral-600" }),
            t !== void 0 && t > 0 && /* @__PURE__ */ f("span", { className: "absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 min-w-4 h-4 px-1 text-2xs font-bold tabular-nums text-white bg-accent rounded-full flex items-center justify-center", children: t > 9 ? "9+" : t })
          ]
        }
      )
    }
  )
);
_i.displayName = "NotificationMenu";
const Ai = oe(
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
  }, b) => {
    const { t: x } = Ge();
    return /* @__PURE__ */ k(
      "header",
      {
        ref: b,
        className: O(
          "flex items-center justify-between gap-4 h-14 px-6 bg-white border-b border-neutral-200 font-sans",
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
                "aria-label": x("header.toggleMenu"),
                children: /* @__PURE__ */ f(ur, { "aria-hidden": "true", className: "w-[18px] h-[18px] text-neutral-600" })
              }
            ),
            /* @__PURE__ */ f("div", { className: "flex flex-col", children: e && /* @__PURE__ */ f("h1", { className: "font-display text-[17px] font-extrabold leading-6 tracking-[-.01em] text-neutral-800 truncate", children: e }) })
          ] }),
          /* @__PURE__ */ k("div", { className: "flex items-center gap-4", children: [
            n && /* @__PURE__ */ k("div", { className: "relative hidden md:block", children: [
              /* @__PURE__ */ f(fr, { "aria-hidden": "true", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" }),
              /* @__PURE__ */ f(
                "input",
                {
                  type: "search",
                  placeholder: t,
                  value: r,
                  onChange: (E) => o == null ? void 0 : o(E.target.value),
                  className: O(
                    "w-64 pl-9 pr-3.5 py-2 text-[13px] leading-5 rounded-[10px]",
                    "bg-neutral-50 border border-control",
                    "placeholder:text-neutral-500",
                    "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  )
                }
              )
            ] }),
            p,
            i && /* @__PURE__ */ f(_i, { ...a }),
            s && /* @__PURE__ */ f(
              mr,
              {
                className: "-mr-2",
                offset: 16,
                card: /* @__PURE__ */ k("div", { className: "px-4 py-2 flex items-center gap-4", children: [
                  /* @__PURE__ */ f(qn, { src: s.avatar, alt: s.name, size: "xl" }),
                  /* @__PURE__ */ k("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ f("span", { className: "text-[13px] font-semibold text-neutral-800", children: s.name }),
                    s.email && /* @__PURE__ */ f("span", { className: "text-xs text-neutral-500", children: s.email }),
                    s.role && /* @__PURE__ */ f("span", { className: "text-xs text-neutral-500", children: s.role })
                  ] })
                ] }),
                items: c ?? [],
                trigger: /* @__PURE__ */ f("div", { className: "pr-2 flex items-center", children: /* @__PURE__ */ f(
                  qn,
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
    );
  }
);
Ai.displayName = "Header";
function Pi({ caption: e, className: t }) {
  return /* @__PURE__ */ k("div", { "data-omni-powered-by": "", className: O("flex items-center gap-2 whitespace-nowrap", t), children: [
    /* @__PURE__ */ f("span", { className: "hidden text-[10px] font-medium uppercase tracking-[.12em] text-[#C9C4E6] sm:inline", children: e }),
    /* @__PURE__ */ f("span", { className: "rounded-[5px] bg-white px-2 py-px font-display text-[14px] font-extrabold leading-5 tracking-[-.02em] text-[var(--omni-navy)]", children: "omnitok" })
  ] });
}
const Ri = oe(
  ({ brand: e, brandText: t, label: n, poweredBy: r = !0, poweredByCaption: o, actions: i, onMenuToggle: a, menuLabel: s, className: c, ...d }, u) => {
    const { t: l } = Ge(), p = e != null || t != null && t !== "";
    return /* @__PURE__ */ k(
      "header",
      {
        ref: u,
        "data-omni-brand-header": "",
        className: O(
          "flex h-[42px] flex-shrink-0 items-center gap-3.5 border-b border-[var(--omni-navy-border)] [background:var(--omni-header-bg)] px-4 font-sans text-[#E4DFF3]",
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
              children: /* @__PURE__ */ f(ur, { className: "h-[18px] w-[18px]", "aria-hidden": "true" })
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
            r && /* @__PURE__ */ f(Pi, { caption: o ?? l("header.poweredBy") })
          ] })
        ]
      }
    );
  }
);
Ri.displayName = "BrandHeader";
const oo = "(min-width: 1024px)";
function Ll() {
  const [e, t] = ce(
    () => typeof window > "u" || typeof window.matchMedia != "function" ? !0 : window.matchMedia(oo).matches
  );
  return fe(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const n = window.matchMedia(oo), r = () => t(n.matches);
    return n.addEventListener("change", r), () => n.removeEventListener("change", r);
  }, []), e;
}
const Bl = oe(
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
    onSidebarCollapsedChange: b,
    brandHeader: x,
    headerTitle: E,
    user: y,
    userMenuItems: w,
    onUserClick: N,
    showNotifications: h = !0,
    notificationMenu: D,
    showSearch: A = !0,
    searchValue: j,
    onSearchChange: q,
    headerActions: I,
    header: R,
    hideSidebar: $ = !1,
    hideHeader: V = !1,
    rightPanel: B,
    rightPanelWidth: J = "360px",
    mainClassName: z,
    className: ne,
    ...Z
  }, ee) => {
    const { t: C } = Ge(), [_, G] = ce(!1), W = g ?? _, F = Q(
      (ke) => {
        g === void 0 && G(ke), b == null || b(ke);
      },
      [g, b]
    ), [Y, U] = ce(!1), K = Ll(), T = !!t, S = !!R, M = !!x;
    fe(() => {
      K && U(!1);
    }, [K]);
    const re = () => {
      K ? F(!W) : U((ke) => !ke);
    }, P = /* @__PURE__ */ f(
      Ci,
      {
        items: n,
        logo: M ? void 0 : o,
        logoCollapsed: M ? void 0 : i,
        systemName: M ? void 0 : a,
        footer: s,
        footerCollapsed: c,
        collapsible: M ? !1 : r,
        collapsed: K ? W : !1,
        onCollapsedChange: F,
        activeId: d,
        projectSelector: l,
        expandedIds: p,
        onExpandedChange: m,
        frame: M ? "framed" : "flush",
        onItemClick: (ke) => {
          u == null || u(ke), U(!1);
        }
      }
    ), le = /* @__PURE__ */ k("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
      /* @__PURE__ */ f(
        "main",
        {
          "data-omni-main": "",
          className: O("flex-1 overflow-y-auto", z ?? "p-6", B && "hidden md:block"),
          children: e
        }
      ),
      B && /* @__PURE__ */ f(
        "aside",
        {
          "data-omni-right-panel": "",
          className: O(
            "w-full flex-shrink-0 overflow-y-auto bg-white md:w-[var(--panel-width)]",
            // v3: docked panel with the left corners rounded (.omni-panel spec).
            M ? "md:my-3 md:rounded-l-[18px] md:border md:border-r-0 md:border-neutral-200 md:shadow-card" : "border-l border-neutral-200"
          ),
          style: { "--panel-width": J },
          children: B
        }
      )
    ] });
    return M ? /* @__PURE__ */ k(
      "div",
      {
        ref: ee,
        "data-omni-shell": "v3",
        className: O("flex h-screen flex-col bg-[var(--omni-canvas)] font-sans text-[var(--omni-text)]", ne),
        ...Z,
        children: [
          !V && (S ? R : /* @__PURE__ */ f(Ri, { ...x, onMenuToggle: $ ? void 0 : re })),
          /* @__PURE__ */ k("div", { className: "flex min-h-0 flex-1", children: [
            !$ && /* @__PURE__ */ k(_e, { children: [
              !T && Y && /* @__PURE__ */ f(
                "button",
                {
                  type: "button",
                  "aria-label": C("layout.closeMenu"),
                  className: "fixed inset-0 z-40 bg-neutral-900/45 lg:hidden",
                  onClick: () => U(!1)
                }
              ),
              /* @__PURE__ */ f(
                "div",
                {
                  className: O(
                    "z-50 flex-shrink-0 transition-transform duration-300 lg:static lg:z-auto lg:h-full lg:translate-x-0 lg:transform-none",
                    "fixed bottom-0 left-0 top-[42px]",
                    !T && Y ? "translate-x-0" : "-translate-x-full",
                    T && "translate-x-0"
                  ),
                  children: T ? t : P
                }
              )
            ] }),
            /* @__PURE__ */ f("div", { className: "flex min-w-0 flex-1 flex-col", children: le })
          ] })
        ]
      }
    ) : /* @__PURE__ */ k("div", { ref: ee, className: O("flex h-screen bg-[var(--omni-canvas)]", ne), ...Z, children: [
      !$ && /* @__PURE__ */ k(_e, { children: [
        !T && Y && /* @__PURE__ */ f("div", { className: "fixed inset-0 z-40 bg-neutral-900/45 lg:hidden", onClick: () => U(!1) }),
        /* @__PURE__ */ f(
          "div",
          {
            className: O(
              "fixed inset-y-0 left-0 z-50 lg:static lg:z-auto",
              "transform transition-transform duration-300 lg:transform-none",
              !T && Y ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
              T && "translate-x-0"
            ),
            children: T ? t : P
          }
        )
      ] }),
      !$ && V && !S && /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: () => U(!Y),
          className: "fixed left-4 top-4 z-50 rounded-lg border border-neutral-200 bg-white p-2 shadow-md lg:hidden",
          "aria-label": C("header.toggleMenu"),
          children: /* @__PURE__ */ f(ur, { className: "h-5 w-5 text-neutral-600" })
        }
      ),
      /* @__PURE__ */ k("div", { className: "flex min-w-0 flex-1 flex-col", children: [
        !V && (S ? R : /* @__PURE__ */ f(
          Ai,
          {
            title: E,
            showSearch: A,
            searchValue: j,
            onSearchChange: q,
            showNotifications: h,
            notificationMenu: D,
            user: y,
            userMenuItems: w,
            onUserClick: N,
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
Bl.displayName = "Layout";
const Fl = oe(
  ({
    items: e,
    showHomeIcon: t = !1,
    separator: n,
    maxItems: r,
    className: o,
    ...i
  }, a) => {
    const s = () => n || /* @__PURE__ */ f(Qt, { className: "w-3.5 h-3.5 text-neutral-400 mx-1.5", "aria-hidden": "true" }), c = (l, p, m) => {
      const g = /* @__PURE__ */ k(_e, { children: [
        p === 0 && t && /* @__PURE__ */ f(cc, { className: "w-3.5 h-3.5 mr-1", "aria-hidden": "true" }),
        l.icon && /* @__PURE__ */ f("span", { className: "mr-1", children: l.icon }),
        l.label
      ] }), b = O(
        "inline-flex items-center text-xs",
        m ? "font-semibold text-neutral-800" : "text-neutral-500 hover:text-neutral-800 hover:underline transition-colors"
      );
      return l.href && !m ? /* @__PURE__ */ f("a", { href: l.href, className: b, children: g }) : /* @__PURE__ */ f("span", { className: b, children: g });
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
Fl.displayName = "Breadcrumb";
const Vl = oe(
  ({ onClose: e, title: t, description: n, children: r, footer: o, className: i, ...a }, s) => /* @__PURE__ */ k(
    "div",
    {
      ref: s,
      className: O("flex flex-col h-full bg-white animate-slide-in-right motion-reduce:animate-none", i),
      ...a,
      children: [
        /* @__PURE__ */ k("div", { className: "flex items-start justify-between gap-3 px-5 py-4 bg-white border-b border-neutral-200 flex-shrink-0", children: [
          /* @__PURE__ */ k("div", { className: "min-w-0 flex-1", children: [
            t && /* @__PURE__ */ f("h2", { className: "font-display text-[15px] font-extrabold leading-6 text-neutral-800 truncate", children: t }),
            n && /* @__PURE__ */ f("p", { className: "mt-0.5 text-[13px] leading-5 text-neutral-600", children: n })
          ] }),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: e,
              className: "p-1.5 -mr-1.5 rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 transition-colors flex-shrink-0",
              "aria-label": "Close",
              children: /* @__PURE__ */ f(nt, { "aria-hidden": "true", className: "w-[18px] h-[18px]" })
            }
          )
        ] }),
        /* @__PURE__ */ f("div", { className: "flex-1 overflow-y-auto px-5 py-4 text-[13px] leading-5 text-neutral-700", children: r }),
        o && /* @__PURE__ */ f("div", { className: "flex items-center justify-end gap-2 px-5 py-3 border-t border-neutral-200 bg-[#FAFAFC] flex-shrink-0", children: o })
      ]
    }
  )
);
Vl.displayName = "SidePanel";
function zl({
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
  const b = (N, h) => typeof n == "function" ? n(N) : String(N[n] ?? h), x = (N, h, D) => h.render ? h.render(N, D) : h.accessor ? String(N[h.accessor] ?? "") : "", E = (N) => {
    if (!N.sortable || !i) return;
    let h = "asc";
    r === N.key && (o === "asc" ? h = "desc" : o === "desc" && (h = null)), i(N.key, h);
  }, y = (N) => {
    if (!N.sortable) return null;
    const h = r === N.key, D = O(
      "w-3.5 h-3.5 ml-1 flex-shrink-0",
      h ? "text-primary-ink" : "text-neutral-400"
    );
    return h && o === "asc" ? /* @__PURE__ */ f(Ts, { className: D }) : h && o === "desc" ? /* @__PURE__ */ f(_s, { className: D }) : /* @__PURE__ */ f(Ps, { className: D });
  }, w = {
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
        /* @__PURE__ */ f("thead", { className: "bg-white border-b border-neutral-200", children: /* @__PURE__ */ f("tr", { children: e.map((N) => /* @__PURE__ */ f(
          "th",
          {
            className: O(
              "text-2xs font-semibold uppercase tracking-[.06em] text-neutral-500 whitespace-nowrap",
              l ? "px-3 py-2" : "px-4 py-3",
              w[N.align || "left"],
              N.sortable && "cursor-pointer select-none hover:text-neutral-800"
            ),
            style: { width: N.width },
            onClick: () => E(N),
            children: /* @__PURE__ */ k("div", { className: O(
              "flex items-center",
              N.align === "center" && "justify-center",
              N.align === "right" && "justify-end"
            ), children: [
              N.header,
              y(N)
            ] })
          },
          N.key
        )) }) }),
        /* @__PURE__ */ f("tbody", { className: "bg-white divide-y divide-neutral-200", children: s ? /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f(
          "td",
          {
            colSpan: e.length,
            className: "px-4 py-8 text-center text-neutral-500",
            children: /* @__PURE__ */ k("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ f("div", { "aria-hidden": "true", className: "w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" }),
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
        ) }) : t.map((N, h) => /* @__PURE__ */ f(
          "tr",
          {
            className: O(
              "transition-colors",
              d && h % 2 === 1 && "bg-neutral-50",
              u && "hover:bg-neutral-50",
              a && "cursor-pointer"
            ),
            onClick: () => a == null ? void 0 : a(N, h),
            children: e.map((D) => /* @__PURE__ */ f(
              "td",
              {
                className: O(
                  "text-neutral-700 text-[13px] leading-5",
                  l ? "px-3 py-2" : "px-4 py-3",
                  w[D.align || "left"]
                ),
                children: x(N, D, h)
              },
              D.key
            ))
          },
          b(N, h)
        )) })
      ]
    }
  ) });
}
const Kh = oe(zl), Ti = dr(null), Gl = {
  // v3: every option reads as a button before it is selected; the selected
  // one is filled with the module colour AND carries a check (shape + colour).
  // Border width never changes on selection, so neighbours never jump.
  default: {
    list: "gap-1.5 p-1.5 rounded-[13px] border border-neutral-200 bg-[#F4F3F9]",
    tab: "rounded-[9px] border min-h-[38px] shadow-[0_1px_2px_#1A124008]",
    active: "bg-[var(--omni-selected)] border-[var(--omni-selected)] text-white font-bold shadow-[0_2px_6px_#10A37F22]",
    inactive: "bg-white border-[#DCD8EA] text-[#4A4568] hover:bg-[#ECEAF7] hover:border-[#9C93C6] hover:shadow-[0_2px_6px_#1A124015]"
  },
  pills: {
    list: "gap-2",
    tab: "rounded-full",
    active: "bg-[image:var(--omni-gradient-action)] text-white shadow-[var(--omni-shadow-action)]",
    inactive: "text-neutral-600 hover:bg-primary-soft hover:text-primary-ink"
  },
  underline: {
    list: "border-b border-primary/20",
    tab: "border-b-2 -mb-px rounded-none",
    active: "border-accent text-primary-ink font-semibold",
    inactive: "border-transparent text-neutral-500 hover:text-primary-ink hover:border-primary/30"
  }
}, Wl = {
  sm: "px-3 py-1.5 text-2xs",
  md: "px-[15px] py-2 text-xs",
  lg: "px-5 py-2.5 text-[13px]"
}, ql = oe(
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
    const [l, p] = ce(
      n || ((x = e[0]) == null ? void 0 : x.id) || ""
    ), m = t ?? l, g = Gl[o], b = (E) => {
      t === void 0 && p(E), r == null || r(E);
    };
    return /* @__PURE__ */ f(Ti.Provider, { value: { activeId: m }, children: /* @__PURE__ */ k("div", { ref: u, className: s, ...d, children: [
      /* @__PURE__ */ f(
        "div",
        {
          role: "tablist",
          className: O(
            "flex",
            g.list,
            i ? "w-full" : "flex-wrap"
          ),
          children: e.map((E) => /* @__PURE__ */ k(
            "button",
            {
              role: "tab",
              type: "button",
              "aria-selected": m === E.id,
              "aria-controls": `tabpanel-${E.id}`,
              disabled: E.disabled,
              onClick: () => b(E.id),
              className: O(
                "flex items-center justify-center gap-[7px] font-semibold transition-[background-color,border-color,box-shadow,color] duration-150 min-w-0",
                g.tab,
                Wl[a],
                m === E.id ? g.active : g.inactive,
                i && "flex-1",
                E.disabled && "opacity-50 cursor-not-allowed"
              ),
              children: [
                o === "default" && m === E.id && /* @__PURE__ */ f(Jt, { "aria-hidden": "true", className: "w-3.5 h-3.5 shrink-0", strokeWidth: 3 }),
                E.icon,
                /* @__PURE__ */ f("span", { className: "truncate", children: E.label }),
                E.badge !== void 0 && /* @__PURE__ */ f(
                  "span",
                  {
                    className: O(
                      "px-1.5 py-0.5 text-2xs font-semibold rounded-full shrink-0 tabular-nums",
                      m === E.id ? "bg-white/20" : "bg-neutral-100 text-neutral-600"
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
ql.displayName = "Tabs";
const Ul = oe(
  ({ id: e, children: t, className: n, ...r }, o) => {
    const i = Nt(Ti);
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
Ul.displayName = "TabPanel";
const io = {
  sm: "h-8 min-w-8 text-xs",
  md: "h-9 min-w-9 text-[13px]",
  lg: "h-10 min-w-10 text-sm"
}, Hl = {
  sm: 14,
  md: 16,
  lg: 20
}, Yl = {
  // v3: the current page uses the selected colour, like the selected tab.
  primary: "bg-[var(--omni-selected)] text-white font-bold",
  accent: "bg-accent text-white",
  neutral: "bg-neutral-700 text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-error text-white",
  info: "bg-info text-white",
  violet: "bg-violet text-white",
  rose: "bg-rose text-white",
  teal: "bg-teal text-white"
}, Kl = {
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
}, Xl = oe(
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
    className: b,
    ...x
  }, E) => {
    const y = Ge(), { t: w } = a ? Zt({
      language: a,
      messagesByLanguage: y.messagesByLanguage
    }) : y, h = (() => {
      const z = [], Z = r * 2 + 3 + 2;
      if (t <= Z)
        return Array.from({ length: t }, (W, F) => F + 1);
      const ee = Math.max(e - r, 1), C = Math.min(e + r, t), _ = ee > 2, G = C < t - 1;
      if (!_ && G) {
        const W = 1 + 2 * r + 1;
        for (let F = 1; F <= W; F++) z.push(F);
        z.push("ellipsis"), z.push(t);
      } else if (_ && !G) {
        z.push(1), z.push("ellipsis");
        const W = t - (2 * r + 1);
        for (let F = W; F <= t; F++) z.push(F);
      } else {
        z.push(1), z.push("ellipsis");
        for (let W = ee; W <= C; W++) z.push(W);
        z.push("ellipsis"), z.push(t);
      }
      return z;
    })(), D = Hl[m], A = O(
      "flex items-center justify-center rounded-[9px] transition-colors tabular-nums",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      Kl[g],
      io[m],
      p && "opacity-50 cursor-not-allowed"
    ), j = ({ page: z, isActive: ne }) => /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        onClick: () => !p && n(z),
        disabled: p,
        "aria-current": ne ? "page" : void 0,
        className: O(
          A,
          "px-3",
          ne ? Yl[g] : "text-neutral-600 hover:bg-primary-soft hover:text-primary-ink"
        ),
        children: z
      }
    ), q = ({ direction: z, double: ne }) => {
      const Z = z === "prev", ee = ne ? Z ? 1 : t : Z ? e - 1 : e + 1, C = p || (Z ? e === 1 : e === t), _ = ne ? Z ? Gs : qs : Z ? Fs : Qt;
      return /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: () => !C && n(ee),
          disabled: C,
          "aria-label": w(ne ? Z ? "pagination.firstPage" : "pagination.lastPage" : Z ? "pagination.previousPage" : "pagination.nextPage"),
          className: O(
            A,
            C ? "text-neutral-400 cursor-not-allowed" : "text-neutral-600 hover:bg-primary-soft hover:text-primary-ink"
          ),
          children: /* @__PURE__ */ f(_, { size: D })
        }
      );
    }, I = s && c ? (e - 1) * c + 1 : void 0, R = s && c ? Math.min(e * c, s) : void 0, $ = i && s !== void 0, V = Array.isArray(d) && d.length > 0, B = $ || V ? /* @__PURE__ */ k("div", { className: "flex items-center gap-2", children: [
      $ && /* @__PURE__ */ f("span", { className: "text-xs text-neutral-500 tabular-nums whitespace-nowrap", children: w("pagination.info", {
        start: I ?? "",
        end: R ?? "",
        total: s
      }) }),
      V && /* @__PURE__ */ f(
        ki,
        {
          size: m,
          disabled: p,
          "aria-label": w("pagination.itemsPerPage"),
          value: c !== void 0 ? String(c) : void 0,
          options: d.map((z) => ({ value: String(z), label: String(z) })),
          onChange: (z) => u == null ? void 0 : u(Number(z.target.value))
        }
      )
    ] }) : null, J = /* @__PURE__ */ k("div", { className: "flex items-center gap-2", children: [
      o && /* @__PURE__ */ f(q, { direction: "prev", double: !0 }),
      /* @__PURE__ */ f(q, { direction: "prev" }),
      /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: h.map(
        (z, ne) => z === "ellipsis" ? /* @__PURE__ */ f(
          "span",
          {
            className: O("px-2 text-neutral-500", io[m]),
            children: "..."
          },
          `ellipsis-${ne}`
        ) : /* @__PURE__ */ f(j, { page: z, isActive: z === e }, z)
      ) }),
      /* @__PURE__ */ f(q, { direction: "next" }),
      o && /* @__PURE__ */ f(q, { direction: "next", double: !0 })
    ] });
    return /* @__PURE__ */ f(
      "nav",
      {
        ref: E,
        role: "navigation",
        "aria-label": w("pagination.ariaLabel"),
        className: O(
          "flex items-center gap-2",
          l === "end" && "justify-between w-full",
          b
        ),
        ...x,
        children: l === "end" ? /* @__PURE__ */ k(_e, { children: [
          J,
          B
        ] }) : /* @__PURE__ */ k(_e, { children: [
          B,
          J
        ] })
      }
    );
  }
);
Xl.displayName = "Pagination";
const Jl = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-4xl"
}, Mi = oe(
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
      (b) => {
        b.key === "Escape" && c && t();
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
              className: "fixed inset-0 bg-neutral-900/45 animate-fade-in",
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
                    // v3: radius 18, line border, deep soft shadow; the header is white.
                    "relative w-full bg-white rounded-[18px] border border-neutral-200 shadow-modal",
                    "animate-fade-in",
                    Jl[a],
                    l
                  ),
                  onClick: (b) => b.stopPropagation(),
                  ...p,
                  children: [
                    (n || d) && /* @__PURE__ */ k("div", { className: "flex items-start justify-between gap-3 px-5 py-4 bg-white border-b border-neutral-200 rounded-t-[18px]", children: [
                      /* @__PURE__ */ k("div", { className: "min-w-0", children: [
                        n && /* @__PURE__ */ f("h2", { className: "font-display text-[17px] font-extrabold leading-6 text-neutral-800", children: n }),
                        r && /* @__PURE__ */ f("p", { className: "mt-0.5 text-[13px] leading-5 text-neutral-600", children: r })
                      ] }),
                      d && /* @__PURE__ */ f(
                        "button",
                        {
                          type: "button",
                          onClick: t,
                          className: "p-1.5 -mr-1.5 rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 transition-colors",
                          "aria-label": "Close",
                          children: /* @__PURE__ */ f(nt, { "aria-hidden": "true", className: "w-[18px] h-[18px]" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ f("div", { className: "px-5 py-4 text-[13px] leading-5 text-neutral-700", children: o }),
                    i && /* @__PURE__ */ f("div", { className: "flex items-center justify-end gap-2 px-5 py-3 border-t border-neutral-200 bg-[#FAFAFC] rounded-b-[18px]", children: i })
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
Mi.displayName = "Modal";
const Ql = ({
  message: e,
  confirmText: t = "Confirm",
  cancelText: n = "Cancel",
  confirmVariant: r = "primary",
  onConfirm: o,
  onClose: i,
  loading: a,
  ...s
}) => /* @__PURE__ */ f(
  Mi,
  {
    ...s,
    onClose: i,
    size: "sm",
    footer: /* @__PURE__ */ k(_e, { children: [
      /* @__PURE__ */ f(Bt, { variant: "secondary", onClick: i, disabled: a, children: n }),
      /* @__PURE__ */ f(Bt, { variant: r, onClick: o, loading: a, children: t })
    ] }),
    children: /* @__PURE__ */ f("p", { className: "text-[13px] leading-5 text-neutral-700", children: e })
  }
);
Ql.displayName = "ConfirmModal";
const Zl = {
  info: "bg-info text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-error text-white"
}, ed = {
  info: Ni,
  success: Ei,
  warning: Di,
  error: pr
}, ji = oe(
  ({ toast: e, onClose: t, className: n, ...r }, o) => {
    const [i, a] = ce(!1), s = ed[e.variant];
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
          "flex items-start gap-2.5 px-4 py-3 rounded-xl shadow-menu min-w-[320px] max-w-md",
          "transition-[opacity,transform] duration-200 motion-reduce:transition-none",
          i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          Zl[e.variant],
          n
        ),
        ...r,
        children: [
          /* @__PURE__ */ f(s, { "aria-hidden": "true", className: "flex-shrink-0 w-[18px] h-[18px] mt-px" }),
          /* @__PURE__ */ k("div", { className: "flex-1 min-w-0", children: [
            e.title && /* @__PURE__ */ f("p", { className: "text-xs font-semibold leading-4 mb-0.5", children: e.title }),
            /* @__PURE__ */ f("p", { className: "text-[13px] leading-5", children: e.message })
          ] }),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: c,
              className: "flex-shrink-0 p-1 -mr-1 rounded-md hover:bg-white/15 transition-colors",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ f(nt, { "aria-hidden": "true", className: "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
ji.displayName = "Toast";
const td = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, nd = ({
  position: e = "top-right",
  toasts: t,
  onClose: n
}) => /* @__PURE__ */ f(
  "div",
  {
    className: O(
      "fixed z-50 flex flex-col gap-2",
      td[e]
    ),
    children: t.map((r) => /* @__PURE__ */ f(ji, { toast: r, onClose: n }, r.id))
  }
), $i = dr(null), Xh = ({ children: e, position: t = "top-right" }) => {
  const [n, r] = ce([]), o = Q((u) => {
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
  return /* @__PURE__ */ k($i.Provider, { value: { toasts: n, addToast: o, removeToast: i, success: a, error: s, warning: c, info: d }, children: [
    e,
    /* @__PURE__ */ f(nd, { position: t, toasts: n, onClose: i })
  ] });
}, Jh = () => {
  const e = Nt($i);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, rd = oe(
  ({
    language: e,
    logo: t,
    logoWide: n,
    splitLogo: r,
    brandText: o,
    heroTitle: i,
    heroDescription: a,
    poweredBy: s = !0,
    onLoginSubmit: c,
    loading: d = !1,
    error: u,
    onForgotPassword: l,
    showRememberMe: p = !0,
    showForgotPassword: m = !0,
    footer: g,
    variant: b = "gradient",
    idPrefix: x,
    className: E,
    ...y
  }, w) => {
    const N = Ge(), { t: h } = e ? Zt({
      language: e,
      messagesByLanguage: N.messagesByLanguage
    }) : N, [D, A] = ce(""), [j, q] = ce(""), [I, R] = ce(!1), [$, V] = ce(!1), B = (_) => x ? `${x}-${_}` : _, J = b === "split", z = (_) => {
      _.preventDefault(), c == null || c(D, j);
    }, ne = n || t, Z = ne ? /* @__PURE__ */ k(_e, { children: [
      /* @__PURE__ */ f("div", { className: "md:hidden", children: t ?? n }),
      /* @__PURE__ */ f("div", { className: "hidden md:block", children: ne })
    ] }) : o ? /* @__PURE__ */ f("span", { className: "font-display text-[22px] font-extrabold tracking-[-.02em] text-[var(--omni-ink)]", children: o }) : null, ee = /* @__PURE__ */ k("form", { onSubmit: z, className: "flex flex-col gap-5", children: [
      /* @__PURE__ */ k("div", { className: O(J ? "text-left" : "text-center"), children: [
        Z && /* @__PURE__ */ f(
          "div",
          {
            className: O(
              "mb-7 flex [&_img]:max-h-10 [&_img]:w-auto",
              J ? "justify-start lg:hidden" : "justify-center"
            ),
            children: Z
          }
        ),
        /* @__PURE__ */ f("h1", { className: "font-display text-[26px] font-extrabold leading-8 tracking-[-.02em] text-[var(--omni-ink)]", children: h("login.title") }),
        /* @__PURE__ */ f("p", { className: "mt-1.5 text-[13px] leading-5 text-neutral-500", children: h("login.subtitle") })
      ] }),
      u && /* @__PURE__ */ k(
        "div",
        {
          role: "alert",
          className: "flex items-start gap-2 rounded-xl border border-error/30 bg-error-soft px-3.5 py-3 text-[13px] leading-5 text-error-dark",
          children: [
            /* @__PURE__ */ f(pr, { "aria-hidden": "true", className: "mt-0.5 h-4 w-4 flex-shrink-0" }),
            /* @__PURE__ */ f("span", { children: u })
          ]
        }
      ),
      /* @__PURE__ */ f(
        Ft,
        {
          id: B("email"),
          label: h("login.emailLabel"),
          type: "email",
          autoComplete: "email",
          value: D,
          onChange: (_) => A(_.target.value),
          placeholder: h("login.emailPlaceholder"),
          leftIcon: /* @__PURE__ */ f(xc, { "aria-hidden": "true", className: "h-4 w-4" }),
          size: "lg",
          required: !0,
          disabled: d
        }
      ),
      /* @__PURE__ */ f(
        Ft,
        {
          id: B("password"),
          label: h("login.passwordLabel"),
          type: I ? "text" : "password",
          autoComplete: "current-password",
          value: j,
          onChange: (_) => q(_.target.value),
          placeholder: h("login.passwordPlaceholder"),
          leftIcon: /* @__PURE__ */ f(gc, { "aria-hidden": "true", className: "h-4 w-4" }),
          size: "lg",
          rightIcon: /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: () => R(!I),
              "aria-label": h(I ? "login.hidePassword" : "login.showPassword"),
              "aria-pressed": I,
              className: "grid h-7 w-7 place-items-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-800",
              children: I ? /* @__PURE__ */ f(Js, { "aria-hidden": "true", className: "h-4 w-4" }) : /* @__PURE__ */ f(Zs, { "aria-hidden": "true", className: "h-4 w-4" })
            }
          ),
          required: !0,
          disabled: d
        }
      ),
      (p || m && l) && /* @__PURE__ */ k("div", { className: "-mt-1 flex items-center justify-between gap-3", children: [
        p ? /* @__PURE__ */ f(
          gr,
          {
            label: h("login.rememberMe"),
            checked: $,
            onChange: (_) => V(_.target.checked)
          }
        ) : /* @__PURE__ */ f("span", {}),
        m && l && /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            onClick: l,
            className: "text-xs font-semibold text-primary-ink underline-offset-2 hover:underline",
            children: h("login.forgotPassword")
          }
        )
      ] }),
      /* @__PURE__ */ f(Bt, { type: "submit", variant: "primary", size: "lg", fullWidth: !0, loading: d, className: "mt-1", children: h("login.submit") }),
      g && /* @__PURE__ */ f("div", { className: "text-center text-xs text-neutral-500", children: g })
    ] });
    if (J) {
      const _ = r || n || t || (o ? /* @__PURE__ */ f("span", { className: "font-display text-[26px] font-extrabold tracking-[-.02em] text-white", children: o }) : null);
      return /* @__PURE__ */ k("div", { ref: w, "data-omni-login": "split", className: O("flex min-h-screen bg-white font-sans", E), ...y, children: [
        /* @__PURE__ */ k("aside", { className: "relative hidden w-[44%] max-w-[640px] flex-col justify-between overflow-hidden p-10 text-white [background:var(--omni-sb-bg)] lg:flex xl:p-14", children: [
          /* @__PURE__ */ f("div", { className: "flex min-h-10 items-center [&_img]:max-h-14 [&_img]:w-auto", children: _ }),
          /* @__PURE__ */ k("div", { className: "max-w-[440px]", children: [
            /* @__PURE__ */ f("span", { "aria-hidden": "true", className: "mb-6 block h-1 w-12 rounded-full bg-[var(--omni-sb-accent)]" }),
            /* @__PURE__ */ f("h2", { className: "font-display text-[34px] font-extrabold leading-[1.15] tracking-[-.02em] text-white", children: i ?? h("login.split.heroTitle") }),
            /* @__PURE__ */ f("p", { className: "mt-4 text-[15px] leading-6 text-[#C9C4E6]", children: a ?? h("login.split.heroDescription") })
          ] }),
          /* @__PURE__ */ k("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ f("span", { className: "text-2xs text-[var(--omni-sb-muted)]", children: h("login.split.copyright", { year: (/* @__PURE__ */ new Date()).getFullYear() }) }),
            s && /* @__PURE__ */ f(Pi, { caption: h("header.poweredBy") })
          ] })
        ] }),
        /* @__PURE__ */ f("main", { className: "flex flex-1 items-center justify-center px-6 py-12 sm:px-10", children: /* @__PURE__ */ f("div", { className: "w-full max-w-[380px]", children: ee }) })
      ] });
    }
    const C = /* @__PURE__ */ f("div", { className: "w-full max-w-[420px] rounded-[18px] border border-neutral-200 bg-white p-8 shadow-card-hover sm:p-10", children: ee });
    return b === "centered" ? /* @__PURE__ */ f(
      "div",
      {
        ref: w,
        "data-omni-login": "centered",
        className: O("flex min-h-screen items-center justify-center bg-[var(--omni-canvas)] p-4 font-sans", E),
        ...y,
        children: C
      }
    ) : /* @__PURE__ */ f(
      "div",
      {
        ref: w,
        "data-omni-login": "gradient",
        className: O("flex min-h-screen items-center justify-center p-4 font-sans [background:var(--omni-sb-bg)]", E),
        ...y,
        children: C
      }
    );
  }
);
rd.displayName = "LoginPage";
function Oe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var od = typeof Symbol == "function" && Symbol.observable || "@@observable", ao = od, so = () => Math.random().toString(36).substring(7).split("").join("."), id = {
  INIT: `@@redux/INIT${/* @__PURE__ */ so()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ so()}`
}, co = id;
function ad(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function sd(e) {
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
  if (dd(e))
    return "date";
  if (ld(e))
    return "error";
  const n = cd(e);
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
function cd(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function ld(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function dd(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Be(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = sd(e)), t;
}
function Li(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(2) : `Expected the root reducer to be a function. Instead, received: '${Be(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(1) : `Expected the enhancer to be a function. Instead, received: '${Be(n)}'`);
    return n(Li)(e, t);
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
      throw new Error(process.env.NODE_ENV === "production" ? Oe(4) : `Expected the listener to be a function. Instead, received: '${Be(x)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let E = !0;
    d();
    const y = s++;
    return a.set(y, x), function() {
      if (E) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Oe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        E = !1, d(), a.delete(y), i = null;
      }
    };
  }
  function p(x) {
    if (!ad(x))
      throw new Error(process.env.NODE_ENV === "production" ? Oe(7) : `Actions must be plain objects. Instead, the actual type was: '${Be(x)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof x.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof x.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(17) : `Action "type" property must be a string. Instead, the actual type was: '${Be(x.type)}'. Value was: '${x.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Oe(9) : "Reducers may not dispatch actions.");
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
      throw new Error(process.env.NODE_ENV === "production" ? Oe(10) : `Expected the nextReducer to be a function. Instead, received: '${Be(x)}`);
    r = x, p({
      type: co.REPLACE
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
          throw new Error(process.env.NODE_ENV === "production" ? Oe(11) : `Expected the observer to be an object. Instead, received: '${Be(E)}'`);
        function y() {
          const N = E;
          N.next && N.next(u());
        }
        return y(), {
          unsubscribe: x(y)
        };
      },
      [ao]() {
        return this;
      }
    };
  }
  return p({
    type: co.INIT
  }), {
    dispatch: p,
    subscribe: l,
    getState: u,
    replaceReducer: m,
    [ao]: g
  };
}
function lo(e, t) {
  return function(...n) {
    return t(e.apply(this, n));
  };
}
function po(e, t) {
  if (typeof e == "function")
    return lo(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Oe(16) : `bindActionCreators expected an object or a function, but instead received: '${Be(e)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = lo(o, t));
  }
  return n;
}
function Bi(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function pd(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Oe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...d) => i(c, ...d)
    }, s = e.map((c) => c(a));
    return i = Bi(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
var Qh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ud(e) {
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
var uo;
function fd() {
  if (uo) return vn;
  uo = 1;
  var e = ve;
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
        function x(h) {
          if (!E) {
            if (E = !0, y = h, h = l(h), p !== void 0 && g.hasValue) {
              var D = g.value;
              if (p(D, h))
                return w = D;
            }
            return w = h;
          }
          if (D = w, n(y, h)) return D;
          var A = l(h);
          return p !== void 0 && p(D, A) ? (y = h, D) : (y = h, w = A);
        }
        var E = !1, y, w, N = u === void 0 ? null : u;
        return [
          function() {
            return x(d());
          },
          N === null ? void 0 : function() {
            return x(N());
          }
        ];
      },
      [d, u, l, p]
    );
    var b = r(c, m[0], m[1]);
    return i(
      function() {
        g.hasValue = !0, g.value = b;
      },
      [b]
    ), s(b), b;
  }, vn;
}
var bn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo;
function md() {
  return fo || (fo = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, d) {
      return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = ve, n = typeof Object.is == "function" ? Object.is : e, r = t.useSyncExternalStore, o = t.useRef, i = t.useEffect, a = t.useMemo, s = t.useDebugValue;
    bn.useSyncExternalStoreWithSelector = function(c, d, u, l, p) {
      var m = o(null);
      if (m.current === null) {
        var g = { hasValue: !1, value: null };
        m.current = g;
      } else g = m.current;
      m = a(
        function() {
          function x(h) {
            if (!E) {
              if (E = !0, y = h, h = l(h), p !== void 0 && g.hasValue) {
                var D = g.value;
                if (p(D, h))
                  return w = D;
              }
              return w = h;
            }
            if (D = w, n(y, h))
              return D;
            var A = l(h);
            return p !== void 0 && p(D, A) ? (y = h, D) : (y = h, w = A);
          }
          var E = !1, y, w, N = u === void 0 ? null : u;
          return [
            function() {
              return x(d());
            },
            N === null ? void 0 : function() {
              return x(N());
            }
          ];
        },
        [d, u, l, p]
      );
      var b = r(c, m[0], m[1]);
      return i(
        function() {
          g.hasValue = !0, g.value = b;
        },
        [b]
      ), s(b), b;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), bn;
}
process.env.NODE_ENV === "production" ? fd() : md();
var Fi = /* @__PURE__ */ se.version.startsWith("19"), gd = /* @__PURE__ */ Symbol.for(
  Fi ? "react.transitional.element" : "react.element"
), hd = /* @__PURE__ */ Symbol.for("react.portal"), Vi = /* @__PURE__ */ Symbol.for("react.fragment"), zi = /* @__PURE__ */ Symbol.for("react.strict_mode"), Gi = /* @__PURE__ */ Symbol.for("react.profiler"), hr = /* @__PURE__ */ Symbol.for("react.consumer"), vr = /* @__PURE__ */ Symbol.for("react.context"), br = /* @__PURE__ */ Symbol.for("react.forward_ref"), Wi = /* @__PURE__ */ Symbol.for("react.suspense"), qi = /* @__PURE__ */ Symbol.for(
  "react.suspense_list"
), en = /* @__PURE__ */ Symbol.for("react.memo"), Ui = /* @__PURE__ */ Symbol.for("react.lazy"), vd = /* @__PURE__ */ Symbol.for("react.offscreen"), bd = /* @__PURE__ */ Symbol.for(
  "react.client.reference"
), xd = br, yd = en;
function wd(e) {
  return typeof e == "string" || typeof e == "function" || e === Vi || e === Gi || e === zi || e === Wi || e === qi || e === vd || typeof e == "object" && e !== null && (e.$$typeof === Ui || e.$$typeof === en || e.$$typeof === vr || e.$$typeof === hr || e.$$typeof === br || e.$$typeof === bd || e.getModuleId !== void 0);
}
function Yn(e) {
  if (typeof e == "object" && e !== null) {
    const { $$typeof: t } = e;
    switch (t) {
      case gd:
        switch (e = e.type, e) {
          case Vi:
          case Gi:
          case zi:
          case Wi:
          case qi:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case vr:
              case br:
              case Ui:
              case en:
                return e;
              case hr:
                return e;
              default:
                return t;
            }
        }
      case hd:
        return t;
    }
  }
}
function Ed(e) {
  return Fi ? Yn(e) === hr : Yn(e) === vr;
}
function Nd(e) {
  return Yn(e) === en;
}
function xr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function xn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || xr(
      `The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`
    ));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Dd(e, t, n) {
  xn(e, "mapStateToProps"), xn(t, "mapDispatchToProps"), xn(n, "mergeProps");
}
function Od(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, d, u, l, p;
  function m(y, w) {
    return c = y, d = w, u = e(c, d), l = t(r, d), p = n(u, l, d), s = !0, p;
  }
  function g() {
    return u = e(c, d), t.dependsOnOwnProps && (l = t(r, d)), p = n(u, l, d), p;
  }
  function b() {
    return e.dependsOnOwnProps && (u = e(c, d)), t.dependsOnOwnProps && (l = t(r, d)), p = n(u, l, d), p;
  }
  function x() {
    const y = e(c, d), w = !a(y, u);
    return u = y, w && (p = n(u, l, d)), p;
  }
  function E(y, w) {
    const N = !i(w, d), h = !o(
      y,
      c,
      w,
      d
    );
    return c = y, d = w, N && h ? g() : N ? b() : h ? x() : p;
  }
  return function(w, N) {
    return s ? E(w, N) : m(w, N);
  };
}
function kd(e, {
  initMapStateToProps: t,
  initMapDispatchToProps: n,
  initMergeProps: r,
  ...o
}) {
  const i = t(e, o), a = n(e, o), s = r(e, o);
  return process.env.NODE_ENV !== "production" && Dd(i, a, s), Od(i, a, s, e, o);
}
function Sd(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function Id(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function Hi(e, t, n) {
  Id(e) || xr(
    `${n}() in ${t} must return a plain object. Instead received ${e}.`
  );
}
function Kn(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function mo(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Yi(e, t) {
  return function(r, { displayName: o }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = mo(e);
      let d = i(s, c);
      return typeof d == "function" && (i.mapToProps = d, i.dependsOnOwnProps = mo(d), d = i(s, c)), process.env.NODE_ENV !== "production" && Hi(d, o, t), d;
    }, i;
  };
}
function yr(e, t) {
  return (n, r) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`
    );
  };
}
function Cd(e) {
  return e && typeof e == "object" ? Kn(
    (t) => (
      // @ts-ignore
      Sd(e, t)
    )
  ) : e ? typeof e == "function" ? (
    // @ts-ignore
    Yi(e, "mapDispatchToProps")
  ) : yr(e, "mapDispatchToProps") : Kn((t) => ({
    dispatch: t
  }));
}
function _d(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Yi(e, "mapStateToProps")
  ) : yr(e, "mapStateToProps") : Kn(() => ({}));
}
function Ad(e, t, n) {
  return { ...n, ...e, ...t };
}
function Pd(e) {
  return function(n, { displayName: r, areMergedPropsEqual: o }) {
    let i = !1, a;
    return function(c, d, u) {
      const l = e(c, d, u);
      return i ? o(l, a) || (a = l) : (i = !0, a = l, process.env.NODE_ENV !== "production" && Hi(a, r, "mergeProps")), a;
    };
  };
}
function Rd(e) {
  return e ? typeof e == "function" ? Pd(e) : yr(e, "mergeProps") : () => Ad;
}
function Td(e) {
  e();
}
function Md() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Td(() => {
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
var go = {
  notify() {
  },
  get: () => []
};
function Ki(e, t) {
  let n, r = go, o = 0, i = !1;
  function a(b) {
    u();
    const x = r.subscribe(b);
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
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = Md());
  }
  function l() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = go);
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
var jd = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $d = /* @__PURE__ */ jd(), Ld = () => typeof navigator < "u" && navigator.product === "ReactNative", Bd = /* @__PURE__ */ Ld(), Fd = () => $d || Bd ? se.useLayoutEffect : se.useEffect, Vt = /* @__PURE__ */ Fd();
function ho(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function yn(e, t) {
  if (ho(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !ho(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
var Vd = {
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
}, zd = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Gd = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Xi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Wd = {
  [xd]: Gd,
  [yd]: Xi
};
function vo(e) {
  return Nd(e) ? Xi : Wd[e.$$typeof] || Vd;
}
var qd = Object.defineProperty, Ud = Object.getOwnPropertyNames, bo = Object.getOwnPropertySymbols, Hd = Object.getOwnPropertyDescriptor, Yd = Object.getPrototypeOf, xo = Object.prototype;
function Xn(e, t) {
  if (typeof t != "string") {
    if (xo) {
      const i = Yd(t);
      i && i !== xo && Xn(e, i);
    }
    let n = Ud(t);
    bo && (n = n.concat(bo(t)));
    const r = vo(e), o = vo(t);
    for (let i = 0; i < n.length; ++i) {
      const a = n[i];
      if (!zd[a] && !(o && o[a]) && !(r && r[a])) {
        const s = Hd(t, a);
        try {
          qd(e, a, s);
        } catch {
        }
      }
    }
  }
  return e;
}
var wn = /* @__PURE__ */ Symbol.for("react-redux-context"), En = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Kd() {
  if (!se.createContext) return {};
  const e = En[wn] ?? (En[wn] = /* @__PURE__ */ new Map());
  let t = e.get(se.createContext);
  return t || (t = se.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(se.createContext, t)), t;
}
var Ji = /* @__PURE__ */ Kd(), Xd = [null, null], Jd = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Qd(e, t, n) {
  Vt(() => e(...t), n);
}
function Zd(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function ep(e, t, n, r, o, i, a, s, c, d, u) {
  if (!e) return () => {
  };
  let l = !1, p = null;
  const m = () => {
    if (l || !s.current)
      return;
    const b = t.getState();
    let x, E;
    try {
      x = r(
        b,
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
function tp(e, t) {
  return e === t;
}
var yo = !1;
function np(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = tp,
  areOwnPropsEqual: i = yn,
  areStatePropsEqual: a = yn,
  areMergedPropsEqual: s = yn,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: d = Ji
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !yo && (yo = !0, xr(
    'The `pure` option has been removed. `connect` is now always a "pure/memoized" component'
  ));
  const u = d, l = _d(e), p = Cd(t), m = Rd(n), g = !!e;
  return (x) => {
    if (process.env.NODE_ENV !== "production" && !/* @__PURE__ */ wd(x))
      throw new Error(
        `You must pass a component to the function returned by connect. Instead received ${Jd(
          x
        )}`
      );
    const E = x.displayName || x.name || "Component", y = `Connect(${E})`, w = {
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
    function N(A) {
      const [j, q, I] = se.useMemo(() => {
        const { reactReduxForwardedRef: P, ...le } = A;
        return [A.context, P, le];
      }, [A]), R = se.useMemo(() => {
        let P = u;
        if (j != null && j.Consumer && process.env.NODE_ENV !== "production") {
          if (!/* @__PURE__ */ Ed(
            // @ts-ignore
            /* @__PURE__ */ se.createElement(j.Consumer, null)
          ))
            throw new Error(
              "You must pass a valid React context consumer as `props.context`"
            );
          P = j;
        }
        return P;
      }, [j, u]), $ = se.useContext(R), V = !!A.store && !!A.store.getState && !!A.store.dispatch, B = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !V && !B)
        throw new Error(
          `Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`
        );
      const J = V ? A.store : $.store, z = B ? $.getServerState : J.getState, ne = se.useMemo(() => kd(J.dispatch, w), [J]), [Z, ee] = se.useMemo(() => {
        if (!g) return Xd;
        const P = Ki(
          J,
          V ? void 0 : $.subscription
        ), le = P.notifyNestedSubs.bind(P);
        return [P, le];
      }, [J, V, $]), C = se.useMemo(() => V ? $ : {
        ...$,
        subscription: Z
      }, [V, $, Z]), _ = se.useRef(void 0), G = se.useRef(I), W = se.useRef(void 0), F = se.useRef(!1), Y = se.useRef(!1), U = se.useRef(
        void 0
      );
      Vt(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const K = se.useMemo(() => () => W.current && I === G.current ? W.current : ne(J.getState(), I), [J, I]), T = se.useMemo(() => (le) => Z ? ep(
        g,
        J,
        Z,
        // @ts-ignore
        ne,
        G,
        _,
        F,
        Y,
        W,
        ee,
        le
      ) : () => {
      }, [Z]);
      Qd(Zd, [
        G,
        _,
        F,
        I,
        W,
        ee
      ]);
      let S;
      try {
        S = se.useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          T,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          K,
          z ? () => ne(z(), I) : K
        );
      } catch (P) {
        throw U.current && (P.message += `
The error may be correlated with this previous error:
${U.current.stack}

`), P;
      }
      Vt(() => {
        U.current = void 0, W.current = void 0, _.current = S;
      });
      const M = se.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ se.createElement(
          x,
          {
            ...S,
            ref: q
          }
        )
      ), [q, x, S]);
      return se.useMemo(() => g ? /* @__PURE__ */ se.createElement(R.Provider, { value: C }, M) : M, [R, M, C]);
    }
    const D = se.memo(N);
    if (D.WrappedComponent = x, D.displayName = N.displayName = y, c) {
      const j = se.forwardRef(
        function(I, R) {
          return /* @__PURE__ */ se.createElement(D, { ...I, reactReduxForwardedRef: R });
        }
      );
      return j.displayName = y, j.WrappedComponent = x, /* @__PURE__ */ Xn(j, x);
    }
    return /* @__PURE__ */ Xn(D, x);
  };
}
var Qi = np;
function rp(e) {
  const { children: t, context: n, serverState: r, store: o } = e, i = se.useMemo(() => {
    const c = Ki(o), d = {
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
  }, [o, r]), a = se.useMemo(() => o.getState(), [o]);
  Vt(() => {
    const { subscription: c } = i;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [i, a]);
  const s = n || Ji;
  return /* @__PURE__ */ se.createElement(s.Provider, { value: i }, t);
}
var op = rp, ip = process.env.NODE_ENV === "production", Nn = "Invariant failed";
function wo(e, t) {
  if (ip)
    throw new Error(Nn);
  var n = typeof t == "function" ? t() : t, r = n ? "".concat(Nn, ": ").concat(n) : Nn;
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
}, wr = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, Eo = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, ap = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, Dn = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Er = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? Dn : r, i = t.border, a = i === void 0 ? Dn : i, s = t.padding, c = s === void 0 ? Dn : s, d = Te(wr(n, o)), u = Te(Eo(n, a)), l = Te(Eo(u, c));
  return {
    marginBox: d,
    borderBox: Te(n),
    paddingBox: u,
    contentBox: l,
    margin: o,
    border: a,
    padding: c
  };
}, Ae = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? wo(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : wo()), o;
}, sp = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, zt = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = ap(r, n);
  return Er({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Gt = function(t, n) {
  return n === void 0 && (n = sp()), zt(t, n);
}, Zi = function(t, n) {
  var r = {
    top: Ae(n.marginTop),
    right: Ae(n.marginRight),
    bottom: Ae(n.marginBottom),
    left: Ae(n.marginLeft)
  }, o = {
    top: Ae(n.paddingTop),
    right: Ae(n.paddingRight),
    bottom: Ae(n.paddingBottom),
    left: Ae(n.paddingLeft)
  }, i = {
    top: Ae(n.borderTopWidth),
    right: Ae(n.borderRightWidth),
    bottom: Ae(n.borderBottomWidth),
    left: Ae(n.borderLeftWidth)
  };
  return Er({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, ea = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Zi(n, r);
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
const cp = process.env.NODE_ENV === "production", lp = /[ \t]{2,}/g, dp = /^[ \t]*/gm, No = (e) => e.replace(lp, " ").replace(dp, "").trim(), pp = (e) => No(`
  %c@hello-pangea/dnd

  %c${No(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), up = (e) => [pp(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], fp = "__@hello-pangea/dnd-disable-dev-warnings";
function ta(e, t) {
  cp || typeof window < "u" && window[fp] || console[e](...up(t));
}
const ge = ta.bind(null, "warn"), Jn = ta.bind(null, "error");
function Fe() {
}
function mp(e, t) {
  return {
    ...e,
    ...t
  };
}
function Pe(e, t, n) {
  const r = t.map((o) => {
    const i = mp(n, o.options);
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
const gp = process.env.NODE_ENV === "production", Do = "Invariant failed";
class mt extends Error {
}
mt.prototype.toString = function() {
  return this.message;
};
function v(e, t) {
  throw gp ? new mt(Do) : new mt(`${Do}: ${t || ""}`);
}
class hp extends ve.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Fe, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && ge(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof mt && (n.preventDefault(), process.env.NODE_ENV !== "production" && Jn(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = Pe(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof mt) {
      process.env.NODE_ENV !== "production" && Jn(t.message), this.setState({});
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
const vp = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, qt = (e) => e + 1, bp = (e) => `
  You have lifted an item in position ${qt(e.source.index)}
`, na = (e, t) => {
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
}, ra = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, xp = (e) => {
  const t = e.destination;
  if (t)
    return na(e.source, t);
  const n = e.combine;
  return n ? ra(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Oo = (e) => `
  The item has returned to its starting position
  of ${qt(e.index)}
`, yp = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Oo(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${na(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${ra(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Oo(e.source)}
  `;
}, Lt = {
  dragHandleUsageInstructions: vp,
  onDragStart: bp,
  onDragUpdate: xp,
  onDragEnd: yp
};
function wp(e, t) {
  return !!(e === t || Number.isNaN(e) && Number.isNaN(t));
}
function oa(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (!wp(e[n], t[n]))
      return !1;
  return !0;
}
function ae(e, t) {
  const n = ce(() => ({
    inputs: t,
    result: e()
  }))[0], r = te(!0), o = te(n), a = r.current || !!(t && o.current.inputs && oa(t, o.current.inputs)) ? o.current : {
    inputs: t,
    result: e()
  };
  return fe(() => {
    r.current = !1, o.current = a;
  }, [a]), a.result;
}
function H(e, t) {
  return ae(() => e, t);
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
}), Ve = (e, t) => e.x === t.x && e.y === t.y, rt = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), He = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, gt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), ko = (e, t) => Math.min(...t.map((n) => gt(e, n))), ia = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Ep = (e, t) => {
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
}), So = (e) => [{
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
}], Np = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Dp = (e, t) => t ? Dt(e, t.scroll.diff.displacement) : e, Op = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, kp = (e, t) => t && t.shouldClipSubject ? Ep(t.pageMarginBox, e) : Te(e);
var Qe = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = Dp(e.marginBox, r), i = Op(o, n, t), a = kp(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, Nr = (e, t) => {
  e.frame || (process.env.NODE_ENV, v());
  const n = e.frame, r = Se(t, n.scroll.initial), o = rt(r), i = {
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
  }, a = Qe({
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
function ye(e, t = oa) {
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
const aa = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), sa = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), tn = ye((e) => Object.values(e)), Sp = ye((e) => Object.values(e));
var Ye = ye((e, t) => Sp(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Dr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function nn(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var rn = ye((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), Ip = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !Dr(o))
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
  const d = rn(t, r);
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
const ca = {
  point: we,
  value: 0
}, ht = {
  invisible: {},
  visible: {},
  all: []
}, Cp = {
  displaced: ht,
  displacedBy: ca,
  at: null
};
var Re = (e, t) => (n) => e <= n && n <= t, la = (e) => {
  const t = Re(e.top, e.bottom), n = Re(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), a = n(r.left) || n(r.right);
    if (i && a)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, d = r.left < e.left && r.right > e.right;
    return c && d ? !0 : c && a || d && i;
  };
}, _p = (e) => {
  const t = Re(e.top, e.bottom), n = Re(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const Or = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, da = {
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
var Ap = (e) => (t) => {
  const n = Re(t.top, t.bottom), r = Re(t.left, t.right);
  return (o) => e === Or ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const Pp = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : we;
  return Dt(e, n);
}, Rp = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, Tp = (e, t, n) => n(t)(e), kr = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? Pp(e, t) : e;
  return Rp(i, t, o) && Tp(i, n, o);
}, Mp = (e) => kr({
  ...e,
  isVisibleThroughFrameFn: la
}), pa = (e) => kr({
  ...e,
  isVisibleThroughFrameFn: _p
}), jp = (e) => kr({
  ...e,
  isVisibleThroughFrameFn: Ap(e.destination.axis)
}), $p = (e, t, n) => {
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
function Lp(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Te(wr(n, r));
}
function vt({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, c) {
    const d = Lp(c, n), u = c.descriptor.id;
    if (s.all.push(u), !Mp({
      target: d,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const p = $p(u, i, o), m = {
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
function Bp(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function Io({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = Bp(e, {
    inHomeList: t
  });
  return {
    displaced: ht,
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
    return Io({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const d = t.find((g) => g.descriptor.index === a);
  if (!d)
    return Io({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const u = rn(e, t), l = t.indexOf(d), p = u.slice(l);
  return {
    displaced: vt({
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
var Fp = ({
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
}, Vp = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, a = n[0].descriptor.index, s = n[n.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, zp = ({
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
    const l = Vp({
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
  const u = Fp({
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
}, Gp = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return ze(n, t) ? o ? we : rt(r.point) : o ? r.point : we;
}, Wp = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = nn(t);
  r || (process.env.NODE_ENV, v());
  const o = r.draggableId, i = n[o].page.borderBox.center, a = Gp({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Ne(i, a);
};
const ua = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, qp = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Sr = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, Co = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => He(e.line, t.marginBox[e.end] + ua(e, n), Sr(e, t.marginBox, n)), _o = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => He(e.line, t.marginBox[e.start] - qp(e, n), Sr(e, t.marginBox, n)), Up = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => He(e.line, t.contentBox[e.start] + ua(e, n), Sr(e, t.contentBox, n));
var Hp = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = Ye(r.descriptor.id, n), a = t.page, s = r.axis;
  if (!i.length)
    return Up({
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
      return _o({
        axis: s,
        moveRelativeTo: p.page,
        isMoving: a
      });
    const m = zt(p.page, d.point);
    return _o({
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
    return Co({
      axis: s,
      moveRelativeTo: p,
      isMoving: a
    });
  }
  return Co({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, Qn = (e, t) => {
  const n = e.frame;
  return n ? Ne(t, n.scroll.diff.displacement) : t;
};
const Yp = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !n || !a ? i : a.type === "REORDER" ? Hp({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : Wp({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var on = (e) => {
  const t = Yp(e), n = e.droppable;
  return n ? Qn(n, t) : t;
}, fa = (e, t) => {
  const n = Se(t, e.scroll.initial), r = rt(n);
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
function Ao(e, t) {
  return e.map((n) => t[n]);
}
function Kp(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var Xp = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = fa(t, Ne(t.scroll.current, o)), a = n.frame ? Nr(n, Ne(n.frame.scroll.current, o)) : n, s = e.displaced, c = vt({
    afterDragging: Ao(s.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), d = vt({
    afterDragging: Ao(s.all, r),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = {}, l = {}, p = [s, c, d];
  return s.all.forEach((g) => {
    const b = Kp(g, p);
    if (b) {
      l[g] = b;
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
}, Jp = (e, t) => Ne(e.scroll.diff.displacement, t), Ir = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = Jp(n, e), o = Se(r, t.page.borderBox.center);
  return Ne(t.client.borderBox.center, o);
}, ma = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = Se(n, e.page.borderBox.center), c = {
    target: Dt(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? jp(c) : pa(c);
}, Qp = ({
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
  const d = Ye(n.descriptor.id, r), u = ot(t, n), l = Ip({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: d,
    previousImpact: o
  }) || zp({
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
  const p = on({
    impact: l,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (ma({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: p,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Ir({
        pageBorderBoxCenter: p,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const g = Se(p, a), b = Xp({
    impact: l,
    viewport: i,
    destination: n,
    draggables: r,
    maxScrollChange: g
  });
  return {
    clientSelection: s,
    impact: b,
    scrollJumpRequest: g
  };
};
const De = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot get clipped area from droppable") : v()), t;
};
var Zp = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const a = n.axis, s = Re(i[a.start], i[a.end]), c = tn(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => la(o.frame)(De(u))).filter((u) => {
    const l = De(u);
    return e ? i[a.crossAxisEnd] < l[a.crossAxisEnd] : l[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((u) => {
    const l = De(u), p = Re(l[a.start], l[a.end]);
    return s(l[a.start]) || s(l[a.end]) || p(i[a.start]) || p(i[a.end]);
  }).sort((u, l) => {
    const p = De(u)[a.crossAxisStart], m = De(l)[a.crossAxisStart];
    return e ? p - m : m - p;
  }).filter((u, l, p) => De(u)[a.crossAxisStart] === De(p[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const d = c.filter((u) => Re(De(u)[a.start], De(u)[a.end])(t[a.line]));
  return d.length === 1 ? d[0] : d.length > 1 ? d.sort((u, l) => De(u)[a.start] - De(l)[a.start])[0] : c.sort((u, l) => {
    const p = ko(t, So(De(u))), m = ko(t, So(De(l)));
    return p !== m ? p - m : De(u)[a.start] - De(l)[a.start];
  })[0];
};
const Po = (e, t) => {
  const n = e.page.borderBox.center;
  return ze(e.descriptor.id, t) ? Se(n, t.displacedBy.point) : n;
}, eu = (e, t) => {
  const n = e.page.borderBox;
  return ze(e.descriptor.id, t) ? Dt(n, rt(t.displacedBy.point)) : n;
};
var tu = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((a) => pa({
  target: eu(a, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = gt(e, Qn(n, Po(a, o))), d = gt(e, Qn(n, Po(s, o)));
  return c < d ? -1 : d < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Ot = ye(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: He(t.line, r)
  };
});
const nu = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return He(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = Ye(e.descriptor.id, n).reduce((d, u) => d + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : He(r.line, c);
}, ga = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), ha = (e, t, n) => {
  const r = e.frame;
  ot(t, e) && (process.env.NODE_ENV !== "production" ? v(!1, "Should not add placeholder space to home list") : v()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot add placeholder size to a subject when it already has one") : v());
  const o = Ot(e.axis, t.displaceBy).point, i = nu(e, o, n), a = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const u = Qe({
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
  const s = i ? Ne(r.scroll.max, i) : r.scroll.max, c = ga(r, s), d = Qe({
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
}, ru = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot remove placeholder form subject when there was none") : v());
  const n = e.frame;
  if (!n) {
    const a = Qe({
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
  const o = ga(n, r), i = Qe({
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
var ou = ({
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
      displaced: ht,
      displacedBy: ca,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, p = on({
      impact: l,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), m = ot(r, i) ? i : ha(i, r, o);
    return ma({
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
    last: ht,
    index: d
  });
}, iu = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = Zp({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const d = Ye(c.descriptor.id, o), u = tu({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: d,
    afterCritical: s
  }), l = ou({
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
  const p = on({
    impact: l,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: Ir({
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
const au = (e, t) => {
  const n = Ie(e);
  return n ? t[n] : null;
};
var su = ({
  state: e,
  type: t
}) => {
  const n = au(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", d = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: p
  } = e.dimensions;
  return s ? Qp({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: d,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : iu({
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
function qe(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function va(e) {
  const t = Re(e.top, e.bottom), n = Re(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function cu(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function lu({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const a = i.axis, s = He(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: gt(r, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function du({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = tn(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !cu(e, i))
      return !1;
    if (va(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], d = e[a.crossAxisEnd], u = Re(i[a.crossAxisStart], i[a.crossAxisEnd]), l = u(c), p = u(d);
    return !l && !p ? !0 : l ? c < s : d > s;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : lu({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const ba = (e, t) => Te(Dt(e, t));
var pu = (e, t) => {
  const n = e.frame;
  return n ? ba(t, n.scroll.diff.value) : t;
};
function xa({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function uu({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var fu = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = n.axis, c = Ot(n.axis, t.displaceBy), d = c.value, u = e[s.start], l = e[s.end], m = rn(t, r).find((b) => {
    const x = b.descriptor.id, E = b.page.borderBox.center[s.line], y = ze(x, a), w = xa({
      displaced: o,
      id: x
    });
    return y ? w ? l <= E : u < E - d : w ? l <= E + d : u < E;
  }) || null, g = uu({
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
const mu = 4;
var gu = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const a = r.axis, s = Ot(r.axis, e.displaceBy), c = s.value, d = t[a.start], u = t[a.end], p = rn(e, o).find((g) => {
    const b = g.descriptor.id, x = g.page.borderBox, y = x[a.size] / mu, w = ze(b, i), N = xa({
      displaced: n.displaced,
      id: b
    });
    return w ? N ? u > x[a.start] + y && u < x[a.end] - y : d > x[a.start] - c + y && d < x[a.end] - c - y : N ? u > x[a.start] + c + y && u < x[a.end] + c - y : d > x[a.start] + y && d < x[a.end] - y;
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
}, ya = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = ba(t.page.borderBox, e), c = du({
    pageBorderBox: s,
    draggable: t,
    droppables: r
  });
  if (!c)
    return Cp;
  const d = r[c], u = Ye(d.descriptor.id, n), l = pu(d, s);
  return gu({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: d,
    insideDestination: u,
    afterCritical: a
  }) || fu({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: d,
    insideDestination: u,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, Cr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const hu = ({
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
  const a = ru(i);
  return Cr(n, a);
};
var vu = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = hu({
    previousImpact: r,
    impact: o,
    droppables: n
  }), a = Ie(o);
  if (!a)
    return i;
  const s = n[a];
  if (ot(e, s) || s.subject.withPlaceholder)
    return i;
  const c = ha(s, e, t);
  return Cr(i, c);
}, dt = ({
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
  const m = s.draggables[e.critical.draggable.id], g = o || ya({
    pageOffset: l.offset,
    draggable: m,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), b = vu({
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
      droppables: b
    },
    impact: g,
    viewport: a,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function bu(e, t) {
  return e.map((n) => t[n]);
}
var wa = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = bu(i.all, n), s = vt({
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
}, Ea = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const a = on({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return Ir({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, Na = ({
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
  const u = s[d], l = wa({
    impact: r,
    viewport: o,
    destination: u,
    draggables: a
  }), p = Ea({
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
}, xu = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Da = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = Ot(t.axis, e.displaceBy), i = Ye(t.descriptor.id, n), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? v(!1, "Expected draggable to be inside home list") : v());
  const s = i.slice(a + 1), c = s.reduce((p, m) => (p[m.descriptor.id] = !0, p), {}), d = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: vt({
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
        destination: xu(e.descriptor)
      }
    },
    afterCritical: d
  };
}, yu = (e, t) => ({
  draggables: e.draggables,
  droppables: Cr(e.droppables, t)
});
const kt = (e) => {
  process.env.NODE_ENV;
}, St = (e) => {
  process.env.NODE_ENV;
};
var wu = ({
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
}, Eu = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Expected Droppable to have a frame") : v()), t;
}, Nu = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = Eu(a).scroll.diff.value, d = Ne(r, c);
    return wu({
      draggable: o,
      offset: d,
      initialWindowScroll: n.scroll.initial
    });
  });
}, Du = ({
  state: e,
  published: t
}) => {
  kt();
  const n = t.modified.map((E) => {
    const y = e.dimensions.droppables[E.droppableId];
    return Nr(y, E.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...aa(n)
  }, o = sa(Nu({
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
  } = Da({
    draggable: d,
    home: u,
    draggables: i,
    viewport: e.viewport
  }), m = c && c.isCombineEnabled ? e.impact : l, g = ya({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: m,
    viewport: e.viewport,
    afterCritical: p
  });
  St();
  const b = {
    ...e,
    phase: "DRAGGING",
    impact: g,
    onLiftImpact: l,
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
const Zn = (e) => e.movementMode === "SNAP", On = (e, t, n) => {
  const r = yu(e.dimensions, t);
  return !Zn(e) || n ? dt({
    state: e,
    dimensions: r
  }) : Na({
    state: e,
    dimensions: r
  });
};
function kn(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const Ro = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Ou = (e = Ro, t) => {
  if (t.type === "FLUSH")
    return {
      ...Ro,
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
    }, l = tn(i.droppables).every((b) => !b.isFixedOnPage), {
      impact: p,
      afterCritical: m
    } = Da({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? v(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : v()), Du({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    qe(e) || (process.env.NODE_ENV !== "production" ? v(!1, `${t.type} not permitted in phase ${e.phase}`) : v());
    const {
      client: n
    } = t.payload;
    return Ve(n, e.current.client.selection) ? e : dt({
      state: e,
      clientSelection: n,
      impact: Zn(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return kn(e);
    qe(e) || (process.env.NODE_ENV !== "production" ? v(!1, `${t.type} not permitted in phase ${e.phase}`) : v());
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = Nr(o, r);
    return On(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    qe(e) || (process.env.NODE_ENV !== "production" ? v(!1, `Attempting to move in an unsupported phase ${e.phase}`) : v());
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
    return On(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    qe(e) || (process.env.NODE_ENV !== "production" ? v(!1, `Attempting to move in an unsupported phase ${e.phase}`) : v());
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
    return On(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    qe(e) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot move by window in phase ${e.phase}`) : v()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? v(!1, "Window scrolling is currently not supported for fixed lists") : v());
    const n = t.payload.newScroll;
    if (Ve(e.viewport.scroll.current, n))
      return kn(e);
    const r = fa(e.viewport, n);
    return Zn(e) ? Na({
      state: e,
      viewport: r
    }) : dt({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!qe(e))
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
    const n = su({
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
const ku = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Su = (e) => ({
  type: "LIFT",
  payload: e
}), Iu = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Cu = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), _u = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Au = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), Pu = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), Ru = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Oa = (e) => ({
  type: "MOVE",
  payload: e
}), Tu = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), Mu = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), ju = () => ({
  type: "MOVE_UP",
  payload: null
}), $u = () => ({
  type: "MOVE_DOWN",
  payload: null
}), Lu = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Bu = () => ({
  type: "MOVE_LEFT",
  payload: null
}), _r = () => ({
  type: "FLUSH",
  payload: null
}), Fu = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Ar = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), ka = (e) => ({
  type: "DROP",
  payload: e
}), Vu = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Sa = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function zu(e) {
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
function Gu(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Ye(e.droppable.id, t.draggables);
    zu(n);
  }
}
var Wu = (e) => ({
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
  c.phase === "DROP_ANIMATING" && n(Ar({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Unexpected phase to start a drag") : v()), n(_r()), n(ku({
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
  Gu(l, p), n(Iu({
    critical: l,
    dimensions: p,
    clientSelection: a,
    movementMode: s,
    viewport: m
  }));
}, qu = (e) => () => (t) => (n) => {
  ue(n, "INITIAL_PUBLISH") && e.dragging(), ue(n, "DROP_ANIMATE") && e.dropping(n.payload.completed.result.reason), (ue(n, "FLUSH") || ue(n, "DROP_COMPLETE")) && e.resting(), t(n);
};
const Pr = {
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
}, Ia = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, We = `${Ia.outOfTheWay}s ${Pr.outOfTheWay}`, pt = {
  fluid: `opacity ${We}`,
  snap: `transform ${We}, opacity ${We}`,
  drop: (e) => {
    const t = `${e}s ${Pr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${We}`,
  placeholder: `height ${We}, width ${We}, margin ${We}`
}, To = (e) => Ve(e, we) ? void 0 : `translate(${e.x}px, ${e.y}px)`, er = {
  moveTo: To,
  drop: (e, t) => {
    const n = To(e);
    if (n)
      return t ? `${n} scale(${bt.scale.drop})` : n;
  }
}, {
  minDropTime: tr,
  maxDropTime: Ca
} = Ia, Uu = Ca - tr, Mo = 1500, Hu = 0.6;
var Yu = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = gt(e, t);
  if (r <= 0)
    return tr;
  if (r >= Mo)
    return Ca;
  const o = r / Mo, i = tr + Uu * o, a = n === "CANCEL" ? i * Hu : i;
  return Number(a.toFixed(2));
}, Ku = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = n, s = Ie(e), c = s ? a[s] : null, d = a[t.descriptor.droppableId], u = Ea({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || d,
    viewport: r
  });
  return Se(u, t.client.borderBox.center);
}, Xu = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: wa({
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
    displaced: ht
  },
  didDropInsideDroppable: !0
};
const Ju = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (!ue(r, "DROP")) {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Vu({
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
  } = Xu({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), p = l ? Dr(u) : null, m = l ? nn(u) : null, g = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, b = {
    draggableId: d.descriptor.id,
    type: d.descriptor.type,
    source: g,
    reason: i,
    mode: o.movementMode,
    destination: p,
    combine: m
  }, x = Ku({
    impact: u,
    draggable: d,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), E = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: b,
    impact: u
  };
  if (!(!Ve(o.current.client.offset, x) || !!b.combine)) {
    t(Ar({
      completed: E
    }));
    return;
  }
  const w = Yu({
    current: o.current.client.offset,
    destination: x,
    reason: i
  });
  t(Fu({
    newHomeClientOffset: x,
    dropDuration: w,
    completed: E
  }));
};
var _a = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Qu(e) {
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
function Zu({
  onWindowScroll: e
}) {
  function t() {
    e(_a());
  }
  const n = ft(t), r = Qu(n);
  let o = Fe;
  function i() {
    return o !== Fe;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start scroll listener when already active") : v()), o = Pe(window, [r]);
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
const ef = (e) => ue(e, "DROP_COMPLETE") || ue(e, "DROP_ANIMATE") || ue(e, "FLUSH"), tf = (e) => {
  const t = Zu({
    onWindowScroll: (n) => {
      e.dispatch(Tu({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && ue(r, "INITIAL_PUBLISH") && t.start(), t.isActive() && ef(r) && t.stop(), n(r);
  };
};
var nf = (e) => {
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
}, rf = () => {
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
const of = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, af = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, sf = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, at = (e, t) => {
  kt(), t(), St();
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
  const o = nf(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var cf = (e, t) => {
  const n = rf();
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
    const m = Dr(p), g = nn(p);
    r || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onDragMove when onDragStart has not been called") : v());
    const b = !sf(l, r.lastCritical);
    b && (r.lastCritical = l);
    const x = !of(r.lastLocation, m);
    x && (r.lastLocation = m);
    const E = !af(r.lastCombine, g);
    if (E && (r.lastCombine = g), !b && !x && !E)
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
}, lf = (e, t) => {
  const n = cf(e, t);
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
const df = (e) => (t) => (n) => {
  if (!ue(n, "DROP_ANIMATION_FINISHED")) {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot finish a drop animating when no drop is occurring") : v()), e.dispatch(Ar({
    completed: r.completed
  }));
}, pf = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Sa());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = Pe(window, [a]);
    });
  };
};
var uf = (e) => () => (t) => (n) => {
  (ue(n, "DROP_COMPLETE") || ue(n, "FLUSH") || ue(n, "DROP_ANIMATE")) && e.stopPublishing(), t(n);
}, ff = (e) => {
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
const mf = (e) => ue(e, "DROP_COMPLETE") || ue(e, "DROP_ANIMATE") || ue(e, "FLUSH");
var gf = (e) => (t) => (n) => (r) => {
  if (mf(r)) {
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
const hf = (e) => (t) => (n) => {
  if (t(n), !ue(n, "PUBLISH_WHILE_DRAGGING"))
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(ka({
    reason: r.reason
  })));
}, vf = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Bi;
var bf = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => Li(Ou, vf(pd(qu(n), uf(e), Wu(e), Ju, df, pf, hf, gf(i), tf, ff(t), lf(r, o))));
const In = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function xf({
  registry: e,
  callbacks: t
}) {
  let n = In(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, kt();
      const {
        additions: c,
        removals: d,
        modified: u
      } = n, l = Object.keys(c).map((g) => e.draggable.getById(g).getDimension(we)).sort((g, b) => g.descriptor.index - b.descriptor.index), p = Object.keys(u).map((g) => {
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
      n = In(), St(), t.publish(m);
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
      r && (cancelAnimationFrame(r), r = null, n = In());
    }
  };
}
var Aa = ({
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
}, Pa = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find document.documentElement") : v()), e;
}, Ra = () => {
  const e = Pa();
  return Aa({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, yf = () => {
  const e = _a(), t = Ra(), n = e.y, r = e.x, o = Pa(), i = o.clientWidth, a = o.clientHeight, s = r + i, c = n + a;
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
}, wf = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  kt();
  const r = yf(), o = r.scroll.current, i = e.droppable, a = n.droppable.getAllByType(i.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), s = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o)), c = {
    draggables: sa(s),
    droppables: aa(a)
  };
  return St(), {
    dimensions: c,
    critical: e,
    viewport: r
  };
};
function jo(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && ge(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Ef = (e, t) => {
  let n = null;
  const r = xf({
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
    p.type === "ADDITION" && jo(e, m, p.value) && r.add(p.value), p.type === "REMOVAL" && jo(e, m, p.value) && r.remove(p.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (p) => {
      n && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start capturing critical dimensions as there is already a collection") : v());
      const m = e.draggable.getById(p.draggableId), g = e.droppable.getById(m.descriptor.droppableId), b = {
        draggable: m.descriptor,
        droppable: g.descriptor
      }, x = e.subscribe(d);
      return n = {
        critical: b,
        unsubscribe: x
      }, wf({
        critical: b,
        registry: e,
        scrollOptions: p.scrollOptions
      });
    },
    stopPublishing: c
  };
}, Ta = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Nf = (e) => {
  window.scrollBy(e.x, e.y);
};
const Df = ye((e) => tn(e).filter((t) => !(!t.isEnabled || !t.frame))), Of = (e, t) => Df(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? v(!1, "Invalid result") : v()), va(r.frame.pageMarginBox)(e))) || null;
var kf = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return Of(e, n);
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
var Sf = (e, t, n = () => xt) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Ma = ({
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
}, Rr = 1, If = (e, t, n = () => xt) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Rr;
  const i = 1 - Ma({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = r.maxPixelScroll * r.ease(i);
  return Math.ceil(a);
}, Cf = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, a = t, s = i, d = Date.now() - a;
  if (d >= i)
    return e;
  if (d < o)
    return Rr;
  const u = Ma({
    startOfRange: o,
    endOfRange: s,
    current: d
  }), l = e * r.ease(u);
  return Math.ceil(l);
}, $o = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = If(e, t, o);
  return i === 0 ? 0 : r ? Math.max(Cf(i, n, o), Rr) : i;
}, Lo = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Sf(e, r, i);
  return t[r.end] < t[r.start] ? $o({
    distanceToEdge: t[r.end],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * $o({
    distanceToEdge: t[r.start],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, _f = ({
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
const Af = ia((e) => e === 0 ? 0 : e);
var ja = ({
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
  }, s = Lo({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Or,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = Lo({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: da,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), d = Af({
    x: c,
    y: s
  });
  if (Ve(d, we))
    return null;
  const u = _f({
    container: t,
    subject: n,
    proposedScroll: d
  });
  return u ? Ve(u, we) ? null : u : null;
};
const Pf = ia((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Tr = /* @__PURE__ */ (() => {
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
})(), $a = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Pf(n), i = Tr({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Mr = (e, t) => $a({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Rf = (e, t) => {
  if (!Mr(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return Tr({
    current: r,
    max: n,
    change: t
  });
}, jr = (e, t) => {
  const n = e.frame;
  return n ? $a({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, Tf = (e, t) => {
  const n = e.frame;
  return !n || !jr(e, t) ? null : Tr({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var Mf = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = ja({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Mr(e, a) ? a : null;
}, jf = ({
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
  const s = ja({
    dragStartTime: r,
    container: a.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && jr(e, s) ? s : null;
}, Bo = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, p = Mf({
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
  const d = kf({
    center: a,
    destination: Ie(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!d)
    return;
  const u = jf({
    dragStartTime: t,
    droppable: d,
    subject: c,
    center: a,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  u && o(d.descriptor.id, u);
}, $f = ({
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
    Bo({
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
      kt(), i && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start auto scrolling when already started") : v());
      const u = Date.now();
      let l = !1;
      const p = () => {
        l = !0;
      };
      Bo({
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
}, Lf = ({
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
    if (!jr(s, c))
      return c;
    const d = Tf(s, c);
    if (!d)
      return t(s.descriptor.id, c), null;
    const u = Se(c, d);
    return t(s.descriptor.id, u), Se(c, u);
  }, i = (s, c, d) => {
    if (!s || !Mr(c, d))
      return d;
    const u = Rf(c, d);
    if (!u)
      return n(d), null;
    const l = Se(d, u);
    return n(l), Se(d, l);
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
}, Bf = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = $f({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = Lf({
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
const Ze = "data-rfd", et = (() => {
  const e = `${Ze}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), nr = (() => {
  const e = `${Ze}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Ff = (() => {
  const e = `${Ze}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Fo = {
  contextId: `${Ze}-scroll-container-context-id`
}, Vf = (e) => (t) => `[${t}="${e}"]`, st = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), zf = "pointer-events: none;";
var Gf = (e) => {
  const t = Vf(e), n = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(et.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: zf,
        dropAnimating: s
      }
    };
  })(), r = (() => {
    const s = `
      transition: ${pt.outOfTheWay};
    `;
    return {
      selector: t(nr.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(Ff.contextId),
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
const Ce = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? xi : fe, Cn = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find the head to append a style to") : v()), e;
}, Vo = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Wf(e, t) {
  const n = ae(() => Gf(e), [e]), r = te(null), o = te(null), i = H(ye((l) => {
    const p = o.current;
    p || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot set dynamic style element if it is not set") : v()), p.textContent = l;
  }), []), a = H((l) => {
    const p = r.current;
    p || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot set dynamic style element if it is not set") : v()), p.textContent = l;
  }, []);
  Ce(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? v(!1, "style elements already mounted") : v());
    const l = Vo(t), p = Vo(t);
    return r.current = l, o.current = p, l.setAttribute(`${Ze}-always`, e), p.setAttribute(`${Ze}-dynamic`, e), Cn().appendChild(l), Cn().appendChild(p), a(n.always), i(n.resting), () => {
      const m = (g) => {
        const b = g.current;
        b || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot unmount ref as it is not set") : v()), Cn().removeChild(b), g.current = null;
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
  return ae(() => ({
    dragging: s,
    dropping: c,
    resting: d
  }), [s, c, d]);
}
function La(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Ba = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function It(e) {
  return e instanceof Ba(e).HTMLElement;
}
function Fa(e, t) {
  const n = `[${et.contextId}="${e}"]`, r = La(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && ge(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(et.draggableId) === t);
  return o ? It(o) ? o : (process.env.NODE_ENV !== "production" && ge("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ge(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function qf(e) {
  const t = te({}), n = te(null), r = te(null), o = te(!1), i = H(function(p, m) {
    const g = {
      id: p,
      focus: m
    };
    return t.current[p] = g, function() {
      const x = t.current;
      x[p] !== g && delete x[p];
    };
  }, []), a = H(function(p) {
    const m = Fa(e, p);
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
    m && m.getAttribute(et.draggableId) === p && (n.current = p);
  }, []);
  return Ce(() => (o.current = !0, function() {
    o.current = !1;
    const p = r.current;
    p && cancelAnimationFrame(p);
  }), []), ae(() => ({
    register: i,
    tryRecordFocus: d,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, d, c, s]);
}
function Uf() {
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
function Hf() {
  const e = ae(Uf, []);
  return fe(() => function() {
    e.clean();
  }, [e]), e;
}
var $r = ve.createContext(null), yt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find document.body") : v()), e;
};
const Yf = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
}, Kf = (e) => `rfd-announcement-${e}`;
function Xf(e) {
  const t = ae(() => Kf(e), [e]), n = te(null);
  return fe(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Wt(i.style, Yf), yt().appendChild(i), function() {
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
const Jf = {
  separator: "::"
};
function Lr(e, t = Jf) {
  const n = ve.useId();
  return ae(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
function Qf({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Zf({
  contextId: e,
  text: t
}) {
  const n = Lr("hidden-text", {
    separator: "-"
  }), r = ae(() => Qf({
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
var an = ve.createContext(null), em = {
  react: "^18.0.0 || ^19.0.0"
};
const tm = /(\d+)\.(\d+)\.(\d+)/, zo = (e) => {
  const t = tm.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? v(!1, `Unable to parse React version ${e}`) : v());
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, nm = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var rm = (e, t) => {
  const n = zo(e), r = zo(t);
  nm(n, r) || process.env.NODE_ENV !== "production" && ge(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const _n = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var om = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && ge(`
      No <!doctype html> found.

      ${_n}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && ge(`
      Unexpected <!doctype> found: (${t.name})

      ${_n}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && ge(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${_n}
    `);
};
function Br(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Ct(e, t) {
  Br(() => {
    fe(() => {
      try {
        e();
      } catch (n) {
        Jn(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function im() {
  Ct(() => {
    rm(em.react, ve.version), om(document);
  }, []);
}
function Fr(e) {
  const t = te(e);
  return fe(() => {
    t.current = e;
  }), t;
}
function am() {
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
const sm = 9, cm = 13, Vr = 27, Va = 32, lm = 33, dm = 34, pm = 35, um = 36, fm = 37, mm = 38, gm = 39, hm = 40, vm = {
  [cm]: !0,
  [sm]: !0
};
var za = (e) => {
  vm[e.keyCode] && e.preventDefault();
};
const sn = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})(), Ga = 0, Go = 5;
function bm(e, t) {
  return Math.abs(t.x - e.x) >= Go || Math.abs(t.y - e.y) >= Go;
}
const Wo = {
  type: "IDLE"
};
function xm({
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
      if (i !== Ga)
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
      if (!bm(u, c))
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
      if (o.keyCode === Vr) {
        o.preventDefault(), e();
        return;
      }
      za(o);
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
    eventName: sn,
    fn: e
  }];
}
function ym(e) {
  const t = te(Wo), n = te(Fe), r = ae(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== Ga || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
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
  }), [e]), o = ae(() => ({
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
    n.current = Pe(window, [o, r], l);
  }, [o, r]), a = H(() => {
    t.current.type !== "IDLE" && (t.current = Wo, n.current(), i());
  }, [i]), s = H(() => {
    const u = t.current;
    a(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [a]), c = H(function() {
    const l = {
      capture: !0,
      passive: !1
    }, p = xm({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (m) => {
        t.current = m;
      }
    });
    n.current = Pe(window, p, l);
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
function wm() {
}
const Em = {
  [dm]: !0,
  [lm]: !0,
  [um]: !0,
  [pm]: !0
};
function Nm(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Vr) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Va) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === hm) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === mm) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === gm) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === fm) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Em[o.keyCode]) {
        o.preventDefault();
        return;
      }
      za(o);
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
    eventName: sn,
    fn: n
  }];
}
function Dm(e) {
  const t = te(wm), n = ae(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Va)
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
      t.current = Pe(window, Nm(d, u), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = H(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = Pe(window, [n], i);
  }, [n]);
  Ce(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const An = {
  type: "IDLE"
}, Om = 120, km = 0.15;
function Sm({
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
      n.keyCode === Vr && n.preventDefault(), e();
    }
  }, {
    eventName: sn,
    fn: e
  }];
}
function Im({
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
      if (!i || !(i.force >= km))
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
    eventName: sn,
    fn: e
  }];
}
function Cm(e) {
  const t = te(An), n = te(Fe), r = H(function() {
    return t.current;
  }, []), o = H(function(m) {
    t.current = m;
  }, []), i = ae(() => ({
    eventName: "touchstart",
    fn: function(m) {
      if (m.defaultPrevented)
        return;
      const g = e.findClosestDraggableId(m);
      if (!g)
        return;
      const b = e.tryGetLock(g, s, {
        sourceEvent: m
      });
      if (!b)
        return;
      const x = m.touches[0], {
        clientX: E,
        clientY: y
      } = x, w = {
        x: E,
        y
      };
      n.current(), l(b, w);
    }
  }), [e]), a = H(function() {
    const m = {
      capture: !0,
      passive: !1
    };
    n.current = Pe(window, [i], m);
  }, [i]), s = H(() => {
    const p = t.current;
    p.type !== "IDLE" && (p.type === "PENDING" && clearTimeout(p.longPressTimerId), o(An), n.current(), a());
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
    }, b = Pe(window, Im(g), m), x = Pe(window, Sm(g), m);
    n.current = function() {
      b(), x();
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
    const b = setTimeout(u, Om);
    o({
      type: "PENDING",
      point: g,
      actions: m,
      longPressTimerId: b
    }), d();
  }, [d, r, o, u]);
  Ce(function() {
    return a(), function() {
      n.current();
      const g = r();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), o(An));
    };
  }, [r, a, o]), Ce(function() {
    return Pe(window, [{
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
function _m(e) {
  Br(() => {
    const t = Fr(e);
    Ct(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot change the amount of sensor hooks after mounting") : v(!1));
    });
  });
}
const Am = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Wa(e, t) {
  if (t == null)
    return !1;
  if (Am.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Wa(e, t.parentElement);
}
function Pm(e, t) {
  const n = t.target;
  return It(n) ? Wa(e, n) : !1;
}
var Rm = (e) => Te(e.getBoundingClientRect()).center;
function Tm(e) {
  return e instanceof Ba(e).Element;
}
const Mm = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function qa(e, t) {
  return e == null ? null : e[Mm](t) ? e : qa(e.parentElement, t);
}
function jm(e, t) {
  return e.closest ? e.closest(t) : qa(e, t);
}
function $m(e) {
  return `[${et.contextId}="${e}"]`;
}
function Lm(e, t) {
  const n = t.target;
  if (!Tm(n))
    return process.env.NODE_ENV !== "production" && ge("event.target must be a Element"), null;
  const r = $m(e), o = jm(n, r);
  return o ? It(o) ? o : (process.env.NODE_ENV !== "production" && ge("drag handle must be a HTMLElement"), null) : null;
}
function Bm(e, t) {
  const n = Lm(e, t);
  return n ? n.getAttribute(et.draggableId) : null;
}
function Fm(e, t) {
  const n = `[${nr.contextId}="${e}"]`, o = La(document, n).find((i) => i.getAttribute(nr.id) === t);
  return o ? It(o) ? o : (process.env.NODE_ENV !== "production" && ge("Draggable element is not a HTMLElement"), null) : null;
}
function Vm(e) {
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
function Ua({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !Ta(t.getState(), r)) : (process.env.NODE_ENV !== "production" && ge(`Unable to find draggable with id: ${r}`), !1);
}
function zm({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Ua({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), d = Fm(t, c.descriptor.id);
  if (!d)
    return process.env.NODE_ENV !== "production" && ge(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && Pm(d, a))
    return null;
  const u = e.claim(i || Fe);
  let l = "PRE_DRAG";
  function p() {
    return c.options.shouldRespectForcePress;
  }
  function m() {
    return e.isActive(u);
  }
  function g(h, D) {
    Mt({
      expected: h,
      phase: l,
      isLockActive: m,
      shouldWarn: !0
    }) && n.dispatch(D());
  }
  const b = g.bind(null, "DRAGGING");
  function x(h) {
    function D() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (D(), process.env.NODE_ENV !== "production" ? v(!1, `Cannot lift in phase ${l}`) : v()), n.dispatch(Su(h.liftActionArgs)), l = "DRAGGING";
    function A(j, q = {
      shouldBlockNextClick: !1
    }) {
      if (h.cleanup(), q.shouldBlockNextClick) {
        const I = Pe(window, [{
          eventName: "click",
          fn: Vm,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(I);
      }
      D(), n.dispatch(ka({
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
      ...h.actions
    };
  }
  function E(h) {
    const D = ft((j) => {
      b(() => Oa({
        client: j
      }));
    });
    return {
      ...x({
        liftActionArgs: {
          id: o,
          clientSelection: h,
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
  function y() {
    const h = {
      moveUp: () => b(ju),
      moveRight: () => b(Lu),
      moveDown: () => b($u),
      moveLeft: () => b(Bu)
    };
    return x({
      liftActionArgs: {
        id: o,
        clientSelection: Rm(d),
        movementMode: "SNAP"
      },
      cleanup: Fe,
      actions: h
    });
  }
  function w() {
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
    fluidLift: E,
    snapLift: y,
    abort: w
  };
}
const Gm = [ym, Dm, Cm];
function Wm({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? Gm : [], ...r || []], a = ce(() => am())[0], s = H(function(x, E) {
    wt(x) && !wt(E) && a.tryAbandon();
  }, [a]);
  Ce(function() {
    let x = t.getState();
    return t.subscribe(() => {
      const y = t.getState();
      s(x, y), x = y;
    });
  }, [a, t, s]), Ce(() => a.tryAbandon, [a.tryAbandon]);
  const c = H((b) => Ua({
    lockAPI: a,
    registry: n,
    store: t,
    draggableId: b
  }), [a, n, t]), d = H((b, x, E) => zm({
    lockAPI: a,
    registry: n,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: x || null,
    sourceEvent: E && E.sourceEvent ? E.sourceEvent : null
  }), [e, a, n, t]), u = H((b) => Bm(e, b), [e]), l = H((b) => {
    const x = n.draggable.findById(b);
    return x ? x.options : null;
  }, [n.draggable]), p = H(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(_r()));
  }, [a, t]), m = H(() => a.isClaimed(), [a]), g = ae(() => ({
    canGetLock: c,
    tryGetLock: d,
    findClosestDraggableId: u,
    findOptionsForDraggable: l,
    tryReleaseLock: p,
    isLockClaimed: m
  }), [c, d, u, l, p, m]);
  _m(i);
  for (let b = 0; b < i.length; b++)
    i[b](g);
}
const qm = (e) => ({
  onBeforeCapture: (t) => {
    yi(() => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    });
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Um = (e) => ({
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
function Hm(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = te(null);
  im();
  const s = Fr(e), c = H(() => qm(s.current), [s]), d = H(() => Um(s.current), [s]), u = Xf(t), l = Zf({
    contextId: t,
    text: i
  }), p = Wf(t, o), m = H((I) => {
    ct(a).dispatch(I);
  }, []), g = ae(() => po({
    publishWhileDragging: Cu,
    updateDroppableScroll: Au,
    updateDroppableIsEnabled: Pu,
    updateDroppableIsCombineEnabled: Ru,
    collectionStarting: _u
  }, m), [m]), b = Hf(), x = ae(() => Ef(b, g), [b, g]), E = ae(() => Bf({
    scrollWindow: Nf,
    scrollDroppable: x.scrollDroppable,
    getAutoScrollerOptions: d,
    ...po({
      move: Oa
    }, m)
  }), [x.scrollDroppable, m, d]), y = qf(t), w = ae(() => bf({
    announce: u,
    autoScroller: E,
    dimensionMarshal: x,
    focusMarshal: y,
    getResponders: c,
    styleMarshal: p
  }), [u, E, x, y, c, p]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== w && process.env.NODE_ENV !== "production" && ge("unexpected store change"), a.current = w;
  const N = H(() => {
    const I = ct(a);
    I.getState().phase !== "IDLE" && I.dispatch(_r());
  }, []), h = H(() => {
    const I = ct(a).getState();
    return I.phase === "DROP_ANIMATING" ? !0 : I.phase === "IDLE" ? !1 : I.isDragging;
  }, []), D = ae(() => ({
    isDragging: h,
    tryAbort: N
  }), [h, N]);
  n(D);
  const A = H((I) => Ta(ct(a).getState(), I), []), j = H(() => qe(ct(a).getState()), []), q = ae(() => ({
    marshal: x,
    focus: y,
    contextId: t,
    canLift: A,
    isMovementAllowed: j,
    dragHandleUsageInstructionsId: l,
    registry: b
  }), [t, x, l, y, A, j, b]);
  return Wm({
    contextId: t,
    store: w,
    registry: b,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), fe(() => N, [N]), ve.createElement(an.Provider, {
    value: q
  }, ve.createElement(op, {
    context: $r,
    store: w
  }, e.children));
}
function Ym() {
  return ve.useId();
}
function zr(e) {
  const t = Ym(), n = e.dragHandleUsageInstructions || Lt.dragHandleUsageInstructions;
  return ve.createElement(hp, null, (r) => ve.createElement(Hm, {
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
const qo = {
  dragging: 5e3,
  dropAnimating: 4500
}, Km = (e, t) => t ? pt.drop(t.duration) : e ? pt.snap : pt.fluid, Xm = (e, t) => {
  if (e)
    return t ? bt.opacity.drop : bt.opacity.combining;
}, Jm = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Qm(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = Jm(e), c = !!i, d = c ? er.drop(r, a) : er.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: Km(s, i),
    transform: d,
    opacity: Xm(a, c),
    zIndex: c ? qo.dropAnimating : qo.dragging,
    pointerEvents: "none"
  };
}
function Zm(e) {
  return {
    transform: er.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function eg(e) {
  return e.type === "DRAGGING" ? Qm(e) : Zm(e);
}
function tg(e, t, n = we) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Zi(o, r), a = Gt(i, n), s = {
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
function ng(e) {
  const t = Lr("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = ae(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), d = H((m) => {
    const g = o();
    return g || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot get dimension when no ref is set") : v()), tg(n, g, m);
  }, [n, o]), u = ae(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: d
  }), [n, d, c, t]), l = te(u), p = te(!0);
  Ce(() => (r.draggable.register(l.current), () => r.draggable.unregister(l.current)), [r.draggable]), Ce(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const m = l.current;
    l.current = u, r.draggable.update(u, m);
  }, [u, r.draggable]);
}
var Gr = ve.createContext(null);
function Ha(e) {
  e && It(e) || (process.env.NODE_ENV !== "production" ? v(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : v());
}
function rg(e, t, n) {
  Ct(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? v(!1, "Draggable requires a draggableId") : v(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? v(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : v(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? v(!1, `${r(o)} requires an integer index prop`) : v(!1)), e.mapped.type !== "DRAGGING" && (Ha(n()), e.isEnabled && (Fa(t, o) || (process.env.NODE_ENV !== "production" ? v(!1, `${r(o)} Unable to find drag handle`) : v(!1))));
  });
}
function og(e) {
  Br(() => {
    const t = te(e);
    Ct(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? v(!1, "Draggable isClone prop value changed during component life") : v(!1));
    }, [e]);
  });
}
function Ht(e) {
  const t = Nt(e);
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find required context") : v()), t;
}
function ig(e) {
  e.preventDefault();
}
const ag = (e) => {
  const t = te(null), n = H((D = null) => {
    t.current = D;
  }, []), r = H(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Ht(an), {
    type: s,
    droppableId: c
  } = Ht(Gr), d = ae(() => ({
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
    isClone: b,
    mapped: x,
    dropAnimationFinished: E
  } = e;
  if (rg(e, o, r), og(b), !b) {
    const D = ae(() => ({
      descriptor: d,
      registry: a,
      getDraggableRef: r,
      canDragInteractiveElements: g,
      shouldRespectForcePress: m,
      isEnabled: p
    }), [d, a, r, g, m, p]);
    ng(D);
  }
  const y = ae(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: ig
  } : null, [o, i, l, p]), w = H((D) => {
    x.type === "DRAGGING" && x.dropping && D.propertyName === "transform" && yi(E);
  }, [E, x]), N = ae(() => {
    const D = eg(x), A = x.type === "DRAGGING" && x.dropping ? w : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: D,
        onTransitionEnd: A
      },
      dragHandleProps: y
    };
  }, [o, y, l, x, w, n]), h = ae(() => ({
    draggableId: d.id,
    type: d.type,
    source: {
      index: d.index,
      droppableId: d.droppableId
    }
  }), [d.droppableId, d.id, d.index, d.type]);
  return ve.createElement(ve.Fragment, null, u(N, x.snapshot, h));
};
var Ya = (e, t) => e === t, Ka = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const sg = (e) => e.combine ? e.combine.draggableId : null, cg = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function lg() {
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
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = Ie(o.impact), d = cg(o.impact), u = o.forceShouldAnimate;
      return n(e(a.x, a.y), o.movementMode, s, i.isClone, c, d, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], d = a.result, u = d.mode, l = Ka(d), p = sg(d), g = {
        duration: o.dropDuration,
        curve: Pr.drop,
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
function Xa(e = null) {
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
const dg = {
  mapped: {
    type: "SECONDARY",
    offset: we,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Xa(null)
  }
};
function pg() {
  const e = ye((a, s) => ({
    x: a,
    y: s
  })), t = ye(Xa), n = ye((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), r = (a) => a ? n(we, a, !0) : null, o = (a, s, c, d) => {
    const u = c.displaced.visible[a], l = !!(d.inVirtualList && d.effected[a]), p = nn(c), m = p && p.draggableId === a ? s : null;
    if (!u) {
      if (!l)
        return r(m);
      if (c.displaced.invisible[a])
        return null;
      const x = rt(d.displacedBy.point), E = e(x.x, x.y);
      return n(E, m, !0);
    }
    if (l)
      return r(m);
    const g = c.displacedBy.point, b = e(g.x, g.y);
    return n(b, m, u.shouldAnimate);
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
const ug = () => {
  const e = lg(), t = pg();
  return (r, o) => e(r, o) || t(r, o) || dg;
}, fg = {
  dropAnimationFinished: Sa
}, mg = Qi(ug, fg, null, {
  context: $r,
  areStatePropsEqual: Ya
})(ag);
function Ja(e) {
  return Ht(Gr).isUsingCloneFor === e.draggableId && !e.isClone ? null : ve.createElement(mg, e);
}
function Wr(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return ve.createElement(Ja, Wt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const qr = (e) => (t) => e === t, gg = qr("scroll"), hg = qr("auto"), vg = qr("visible"), Uo = (e, t) => t(e.overflowX) || t(e.overflowY), bg = (e, t) => t(e.overflowX) && t(e.overflowY), Qa = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Uo(n, gg) || Uo(n, hg);
}, xg = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = yt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, v()), !Qa(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return bg(r, vg) || process.env.NODE_ENV !== "production" && ge(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Ur = (e) => e == null ? null : e === document.body ? xg() ? e : null : e === document.documentElement ? null : Qa(e) ? e : Ur(e.parentElement);
var yg = (e) => {
  !e || !Ur(e.parentElement) || process.env.NODE_ENV !== "production" && ge(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, rr = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Za = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Za(e.parentElement) : !1;
var wg = (e) => {
  const t = Ur(e), n = Za(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, Eg = ({
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
    } = s, g = Aa({
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
  })(), d = o === "vertical" ? Or : da, u = Qe({
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
const Ng = (e, t) => {
  const n = ea(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, a = o + t.scrollWidth, c = wr({
    top: r,
    right: a,
    bottom: i,
    left: o
  }, n.border);
  return Er({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var Dg = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = n.closestScrollable, d = Ng(e, c), u = Gt(d, r), l = (() => {
    if (!c)
      return null;
    const m = ea(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: m,
      page: Gt(m, r),
      scroll: rr(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return Eg({
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
const Og = {
  passive: !1
}, kg = {
  passive: !0
};
var Ho = (e) => e.shouldPublishImmediately ? Og : kg;
const jt = (e) => e && e.env.closestScrollable || null;
function Sg(e) {
  const t = te(null), n = Ht(an), r = Lr("droppable"), {
    registry: o,
    marshal: i
  } = n, a = Fr(e), s = ae(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = te(s), d = ae(() => ye((N, h) => {
    t.current || (process.env.NODE_ENV !== "production" ? v(!1, "Can only update scroll when dragging") : v());
    const D = {
      x: N,
      y: h
    };
    i.updateDroppableScroll(s.id, D);
  }), [s.id, i]), u = H(() => {
    const N = t.current;
    return !N || !N.env.closestScrollable ? we : rr(N.env.closestScrollable);
  }, []), l = H(() => {
    const N = u();
    d(N.x, N.y);
  }, [u, d]), p = ae(() => ft(l), [l]), m = H(() => {
    const N = t.current, h = jt(N);
    if (N && h || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find scroll options while scrolling") : v()), N.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    p();
  }, [p, l]), g = H((N, h) => {
    t.current && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot collect a droppable while a drag is occurring") : v());
    const D = a.current, A = D.getDroppableRef();
    A || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot collect without a droppable ref") : v());
    const j = wg(A), q = {
      ref: A,
      descriptor: s,
      env: j,
      scrollOptions: h
    };
    t.current = q;
    const I = Dg({
      ref: A,
      descriptor: s,
      env: j,
      windowScroll: N,
      direction: D.direction,
      isDropDisabled: D.isDropDisabled,
      isCombineEnabled: D.isCombineEnabled,
      shouldClipSubject: !D.ignoreContainerClipping
    }), R = j.closestScrollable;
    return R && (R.setAttribute(Fo.contextId, n.contextId), R.addEventListener("scroll", m, Ho(q.scrollOptions)), process.env.NODE_ENV !== "production" && yg(R)), I;
  }, [n.contextId, s, m, a]), b = H(() => {
    const N = t.current, h = jt(N);
    return N && h || (process.env.NODE_ENV !== "production" ? v(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : v()), rr(h);
  }, []), x = H(() => {
    const N = t.current;
    N || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop drag when no active drag") : v());
    const h = jt(N);
    t.current = null, h && (p.cancel(), h.removeAttribute(Fo.contextId), h.removeEventListener("scroll", m, Ho(N.scrollOptions)));
  }, [m, p]), E = H((N) => {
    const h = t.current;
    h || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot scroll when there is no drag") : v());
    const D = jt(h);
    D || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot scroll a droppable with no closest scrollable") : v()), D.scrollTop += N.y, D.scrollLeft += N.x;
  }, []), y = ae(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: b,
    dragStopped: x,
    scroll: E
  }), [x, g, b, E]), w = ae(() => ({
    uniqueId: r,
    descriptor: s,
    callbacks: y
  }), [y, s, r]);
  Ce(() => (c.current = w.descriptor, o.droppable.register(w), () => {
    t.current && (process.env.NODE_ENV !== "production" && ge("Unsupported: changing the droppableId or type of a Droppable during a drag"), x()), o.droppable.unregister(w);
  }), [y, s, x, w, i, o.droppable]), Ce(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ce(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Pn() {
}
const Yo = {
  width: 0,
  height: 0,
  margin: Np
}, Ig = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? Yo : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Cg = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = Ig({
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
}, _g = (e) => {
  const t = te(null), n = H(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = ce(e.animate === "open");
  fe(() => s ? r !== "open" ? (n(), c(!1), Pn) : t.current ? Pn : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : Pn, [r, s, n]);
  const d = H((l) => {
    l.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), u = Cg({
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
var Ag = ve.memo(_g);
function Rn(e) {
  return typeof e == "boolean";
}
function Tn(e, t) {
  t.forEach((n) => n(e));
}
const Pg = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? v(!1, "A Droppable requires a droppableId prop") : v()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? v(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : v());
}, function({
  props: t
}) {
  Rn(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? v(!1, "isDropDisabled must be a boolean") : v()), Rn(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? v(!1, "isCombineEnabled must be a boolean") : v()), Rn(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? v(!1, "ignoreContainerClipping must be a boolean") : v());
}, function({
  getDroppableRef: t
}) {
  Ha(t());
}], Rg = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && ge(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Tg = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? v(!1, "Must provide a clone render function (renderClone) for virtual lists") : v());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? v(!1, "Expected virtual list to not have a placeholder") : v());
}];
function Mg(e) {
  Ct(() => {
    Tn(e, Pg), e.props.mode === "standard" && Tn(e, Rg), e.props.mode === "virtual" && Tn(e, Tg);
  });
}
class jg extends ve.PureComponent {
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
const $g = (e) => {
  const t = Nt(an);
  t || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find app context") : v());
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = te(null), i = te(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: d,
    direction: u,
    ignoreContainerClipping: l,
    isDropDisabled: p,
    isCombineEnabled: m,
    snapshot: g,
    useClone: b,
    updateViewportMaxScroll: x,
    getContainerForClone: E
  } = e, y = H(() => o.current, []), w = H(($ = null) => {
    o.current = $;
  }, []), N = H(() => i.current, []), h = H(($ = null) => {
    i.current = $;
  }, []);
  Mg({
    props: e,
    getDroppableRef: y,
    getPlaceholderRef: N
  });
  const D = H(() => {
    r() && x({
      maxScroll: Ra()
    });
  }, [r, x]);
  Sg({
    droppableId: s,
    type: c,
    mode: d,
    direction: u,
    isDropDisabled: p,
    isCombineEnabled: m,
    ignoreContainerClipping: l,
    getDroppableRef: y
  });
  const A = ae(() => ve.createElement(jg, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: $,
    data: V,
    animate: B
  }) => ve.createElement(Ag, {
    placeholder: V,
    onClose: $,
    innerRef: h,
    animate: B,
    contextId: n,
    onTransitionEnd: D
  })), [n, D, e.placeholder, e.shouldAnimatePlaceholder, h]), j = ae(() => ({
    innerRef: w,
    placeholder: A,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": n
    }
  }), [n, s, A, w]), q = b ? b.dragging.draggableId : null, I = ae(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: q
  }), [s, q, c]);
  function R() {
    if (!b)
      return null;
    const {
      dragging: $,
      render: V
    } = b, B = ve.createElement(Ja, {
      draggableId: $.draggableId,
      index: $.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (J, z) => V(J, z, $));
    return Es.createPortal(B, E());
  }
  return ve.createElement(Gr.Provider, {
    value: I
  }, a(j, g), R());
};
function Lg() {
  return document.body || (process.env.NODE_ENV !== "production" ? v(!1, "document.body is not ready") : v()), document.body;
}
const Ko = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Lg
}, es = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Ko)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Ko[n]
    });
  return t;
}, Mn = (e, t) => e === t.droppable.type, Xo = (e, t) => t.draggables[e.draggable.id], Bg = () => {
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
      } : null, b = {
        isDraggingOver: s,
        draggingOverWith: s ? l : null,
        draggingFromThisWith: l,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: d.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: b,
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
    const s = es(a), c = s.droppableId, d = s.type, u = !s.isDropDisabled, l = s.renderClone;
    if (wt(i)) {
      const p = i.critical;
      if (!Mn(d, p))
        return t;
      const m = Xo(p, i.dimensions), g = Ie(i.impact) === c;
      return r(c, u, g, g, m, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const p = i.completed;
      if (!Mn(d, p.critical))
        return t;
      const m = Xo(p.critical, i.dimensions);
      return r(c, u, Ka(p.result) === c, Ie(p.impact) === c, m, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const p = i.completed;
      if (!Mn(d, p.critical))
        return t;
      const m = Ie(p.impact) === c, g = !!(p.impact.at && p.impact.at.type === "COMBINE"), b = p.critical.droppable.id === c;
      return m ? g ? e : t : b ? e : t;
    }
    return t;
  };
}, Fg = {
  updateViewportMaxScroll: Mu
}, Hr = Qi(Bg, Fg, (e, t, n) => ({
  ...es(n),
  ...e,
  ...t
}), {
  context: $r,
  areStatePropsEqual: Ya
})($g);
function Zh({
  items: e,
  onReorder: t,
  className: n,
  itemClassName: r,
  droppableId: o = "sortable-list"
}) {
  return /* @__PURE__ */ f(zr, { onDragEnd: (a) => {
    if (!a.destination) return;
    const s = Array.from(e), [c] = s.splice(a.source.index, 1);
    s.splice(a.destination.index, 0, c), t(s);
  }, children: /* @__PURE__ */ f(Hr, { droppableId: o, children: (a) => /* @__PURE__ */ k(
    "ul",
    {
      ref: a.innerRef,
      ...a.droppableProps,
      className: O("space-y-2", n),
      children: [
        e.map((s, c) => /* @__PURE__ */ f(Wr, { draggableId: s.id, index: c, children: (d, u) => /* @__PURE__ */ k(
          "li",
          {
            ref: d.innerRef,
            ...d.draggableProps,
            className: O(
              "group relative flex items-center gap-3 px-3.5 py-3 bg-white border border-neutral-200 rounded-xl shadow-card text-[13px] text-neutral-700",
              "transition-[box-shadow,border-color] duration-150 ease-out",
              "hover:shadow-card-hover hover:border-primary-line",
              u.isDragging && "shadow-menu ring-2 ring-primary/25 border-primary-line",
              r
            ),
            style: {
              ...d.draggableProps.style
            },
            children: [
              /* @__PURE__ */ f(
                "div",
                {
                  ...d.dragHandleProps,
                  className: O(
                    "flex-shrink-0 p-1 rounded-lg cursor-grab active:cursor-grabbing",
                    "text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100",
                    "transition-colors duration-150",
                    u.isDragging && "text-primary"
                  ),
                  children: /* @__PURE__ */ f(Je, { "aria-hidden": "true", className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ f("div", { className: "flex-1 min-w-0", children: s.content }),
              /* @__PURE__ */ f(
                "span",
                {
                  className: O(
                    "flex-shrink-0 min-w-6 h-6 px-1.5 flex items-center justify-center rounded-full text-2xs font-semibold tabular-nums",
                    "bg-neutral-100 text-neutral-600",
                    "transition-colors duration-200",
                    u.isDragging && "bg-primary-soft text-primary-ink"
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
var or = { exports: {} }, $t = { exports: {} }, de = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jo;
function Vg() {
  if (Jo) return de;
  Jo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function w(h) {
    if (typeof h == "object" && h !== null) {
      var D = h.$$typeof;
      switch (D) {
        case t:
          switch (h = h.type, h) {
            case c:
            case d:
            case r:
            case i:
            case o:
            case l:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case u:
                case g:
                case m:
                case a:
                  return h;
                default:
                  return D;
              }
          }
        case n:
          return D;
      }
    }
  }
  function N(h) {
    return w(h) === d;
  }
  return de.AsyncMode = c, de.ConcurrentMode = d, de.ContextConsumer = s, de.ContextProvider = a, de.Element = t, de.ForwardRef = u, de.Fragment = r, de.Lazy = g, de.Memo = m, de.Portal = n, de.Profiler = i, de.StrictMode = o, de.Suspense = l, de.isAsyncMode = function(h) {
    return N(h) || w(h) === c;
  }, de.isConcurrentMode = N, de.isContextConsumer = function(h) {
    return w(h) === s;
  }, de.isContextProvider = function(h) {
    return w(h) === a;
  }, de.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, de.isForwardRef = function(h) {
    return w(h) === u;
  }, de.isFragment = function(h) {
    return w(h) === r;
  }, de.isLazy = function(h) {
    return w(h) === g;
  }, de.isMemo = function(h) {
    return w(h) === m;
  }, de.isPortal = function(h) {
    return w(h) === n;
  }, de.isProfiler = function(h) {
    return w(h) === i;
  }, de.isStrictMode = function(h) {
    return w(h) === o;
  }, de.isSuspense = function(h) {
    return w(h) === l;
  }, de.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === d || h === i || h === o || h === l || h === p || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === m || h.$$typeof === a || h.$$typeof === s || h.$$typeof === u || h.$$typeof === x || h.$$typeof === E || h.$$typeof === y || h.$$typeof === b);
  }, de.typeOf = w, de;
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
var Qo;
function zg() {
  return Qo || (Qo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function w(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === r || P === d || P === i || P === o || P === l || P === p || typeof P == "object" && P !== null && (P.$$typeof === g || P.$$typeof === m || P.$$typeof === a || P.$$typeof === s || P.$$typeof === u || P.$$typeof === x || P.$$typeof === E || P.$$typeof === y || P.$$typeof === b);
    }
    function N(P) {
      if (typeof P == "object" && P !== null) {
        var le = P.$$typeof;
        switch (le) {
          case t:
            var ke = P.type;
            switch (ke) {
              case c:
              case d:
              case r:
              case i:
              case o:
              case l:
                return ke;
              default:
                var it = ke && ke.$$typeof;
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
    var h = c, D = d, A = s, j = a, q = t, I = u, R = r, $ = g, V = m, B = n, J = i, z = o, ne = l, Z = !1;
    function ee(P) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(P) || N(P) === c;
    }
    function C(P) {
      return N(P) === d;
    }
    function _(P) {
      return N(P) === s;
    }
    function G(P) {
      return N(P) === a;
    }
    function W(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function F(P) {
      return N(P) === u;
    }
    function Y(P) {
      return N(P) === r;
    }
    function U(P) {
      return N(P) === g;
    }
    function K(P) {
      return N(P) === m;
    }
    function T(P) {
      return N(P) === n;
    }
    function S(P) {
      return N(P) === i;
    }
    function M(P) {
      return N(P) === o;
    }
    function re(P) {
      return N(P) === l;
    }
    pe.AsyncMode = h, pe.ConcurrentMode = D, pe.ContextConsumer = A, pe.ContextProvider = j, pe.Element = q, pe.ForwardRef = I, pe.Fragment = R, pe.Lazy = $, pe.Memo = V, pe.Portal = B, pe.Profiler = J, pe.StrictMode = z, pe.Suspense = ne, pe.isAsyncMode = ee, pe.isConcurrentMode = C, pe.isContextConsumer = _, pe.isContextProvider = G, pe.isElement = W, pe.isForwardRef = F, pe.isFragment = Y, pe.isLazy = U, pe.isMemo = K, pe.isPortal = T, pe.isProfiler = S, pe.isStrictMode = M, pe.isSuspense = re, pe.isValidElementType = w, pe.typeOf = N;
  }()), pe;
}
var Zo;
function ts() {
  return Zo || (Zo = 1, process.env.NODE_ENV === "production" ? $t.exports = Vg() : $t.exports = zg()), $t.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var jn, ei;
function Gg() {
  if (ei) return jn;
  ei = 1;
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
  return jn = o() ? Object.assign : function(i, a) {
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
  }, jn;
}
var $n, ti;
function Yr() {
  if (ti) return $n;
  ti = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $n = e, $n;
}
var Ln, ni;
function ns() {
  return ni || (ni = 1, Ln = Function.call.bind(Object.prototype.hasOwnProperty)), Ln;
}
var Bn, ri;
function Wg() {
  if (ri) return Bn;
  ri = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Yr(), n = {}, r = ns();
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
  }, Bn = o, Bn;
}
var Fn, oi;
function qg() {
  if (oi) return Fn;
  oi = 1;
  var e = ts(), t = Gg(), n = Yr(), r = ns(), o = Wg(), i = function() {
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
  return Fn = function(s, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function l(C) {
      var _ = C && (d && C[d] || C[u]);
      if (typeof _ == "function")
        return _;
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
      arrayOf: w,
      element: N(),
      elementType: h(),
      instanceOf: D,
      node: I(),
      objectOf: j,
      oneOf: A,
      oneOfType: q,
      shape: $,
      exact: V
    };
    function g(C, _) {
      return C === _ ? C !== 0 || 1 / C === 1 / _ : C !== C && _ !== _;
    }
    function b(C, _) {
      this.message = C, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function x(C) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, G = 0;
      function W(Y, U, K, T, S, M, re) {
        if (T = T || p, M = M || K, re !== n) {
          if (c) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = T + ":" + K;
            !_[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            G < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + T + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[le] = !0, G++);
          }
        }
        return U[K] == null ? Y ? U[K] === null ? new b("The " + S + " `" + M + "` is marked as required " + ("in `" + T + "`, but its value is `null`.")) : new b("The " + S + " `" + M + "` is marked as required in " + ("`" + T + "`, but its value is `undefined`.")) : null : C(U, K, T, S, M);
      }
      var F = W.bind(null, !1);
      return F.isRequired = W.bind(null, !0), F;
    }
    function E(C) {
      function _(G, W, F, Y, U, K) {
        var T = G[W], S = z(T);
        if (S !== C) {
          var M = ne(T);
          return new b(
            "Invalid " + Y + " `" + U + "` of type " + ("`" + M + "` supplied to `" + F + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return x(_);
    }
    function y() {
      return x(a);
    }
    function w(C) {
      function _(G, W, F, Y, U) {
        if (typeof C != "function")
          return new b("Property `" + U + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var K = G[W];
        if (!Array.isArray(K)) {
          var T = z(K);
          return new b("Invalid " + Y + " `" + U + "` of type " + ("`" + T + "` supplied to `" + F + "`, expected an array."));
        }
        for (var S = 0; S < K.length; S++) {
          var M = C(K, S, F, Y, U + "[" + S + "]", n);
          if (M instanceof Error)
            return M;
        }
        return null;
      }
      return x(_);
    }
    function N() {
      function C(_, G, W, F, Y) {
        var U = _[G];
        if (!s(U)) {
          var K = z(U);
          return new b("Invalid " + F + " `" + Y + "` of type " + ("`" + K + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(C);
    }
    function h() {
      function C(_, G, W, F, Y) {
        var U = _[G];
        if (!e.isValidElementType(U)) {
          var K = z(U);
          return new b("Invalid " + F + " `" + Y + "` of type " + ("`" + K + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(C);
    }
    function D(C) {
      function _(G, W, F, Y, U) {
        if (!(G[W] instanceof C)) {
          var K = C.name || p, T = ee(G[W]);
          return new b("Invalid " + Y + " `" + U + "` of type " + ("`" + T + "` supplied to `" + F + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return x(_);
    }
    function A(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function _(G, W, F, Y, U) {
        for (var K = G[W], T = 0; T < C.length; T++)
          if (g(K, C[T]))
            return null;
        var S = JSON.stringify(C, function(re, P) {
          var le = ne(P);
          return le === "symbol" ? String(P) : P;
        });
        return new b("Invalid " + Y + " `" + U + "` of value `" + String(K) + "` " + ("supplied to `" + F + "`, expected one of " + S + "."));
      }
      return x(_);
    }
    function j(C) {
      function _(G, W, F, Y, U) {
        if (typeof C != "function")
          return new b("Property `" + U + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var K = G[W], T = z(K);
        if (T !== "object")
          return new b("Invalid " + Y + " `" + U + "` of type " + ("`" + T + "` supplied to `" + F + "`, expected an object."));
        for (var S in K)
          if (r(K, S)) {
            var M = C(K, S, F, Y, U + "." + S, n);
            if (M instanceof Error)
              return M;
          }
        return null;
      }
      return x(_);
    }
    function q(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var _ = 0; _ < C.length; _++) {
        var G = C[_];
        if (typeof G != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Z(G) + " at index " + _ + "."
          ), a;
      }
      function W(F, Y, U, K, T) {
        for (var S = [], M = 0; M < C.length; M++) {
          var re = C[M], P = re(F, Y, U, K, T, n);
          if (P == null)
            return null;
          P.data && r(P.data, "expectedType") && S.push(P.data.expectedType);
        }
        var le = S.length > 0 ? ", expected one of type [" + S.join(", ") + "]" : "";
        return new b("Invalid " + K + " `" + T + "` supplied to " + ("`" + U + "`" + le + "."));
      }
      return x(W);
    }
    function I() {
      function C(_, G, W, F, Y) {
        return B(_[G]) ? null : new b("Invalid " + F + " `" + Y + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return x(C);
    }
    function R(C, _, G, W, F) {
      return new b(
        (C || "React class") + ": " + _ + " type `" + G + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function $(C) {
      function _(G, W, F, Y, U) {
        var K = G[W], T = z(K);
        if (T !== "object")
          return new b("Invalid " + Y + " `" + U + "` of type `" + T + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var S in C) {
          var M = C[S];
          if (typeof M != "function")
            return R(F, Y, U, S, ne(M));
          var re = M(K, S, F, Y, U + "." + S, n);
          if (re)
            return re;
        }
        return null;
      }
      return x(_);
    }
    function V(C) {
      function _(G, W, F, Y, U) {
        var K = G[W], T = z(K);
        if (T !== "object")
          return new b("Invalid " + Y + " `" + U + "` of type `" + T + "` " + ("supplied to `" + F + "`, expected `object`."));
        var S = t({}, G[W], C);
        for (var M in S) {
          var re = C[M];
          if (r(C, M) && typeof re != "function")
            return R(F, Y, U, M, ne(re));
          if (!re)
            return new b(
              "Invalid " + Y + " `" + U + "` key `" + M + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(G[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var P = re(K, M, F, Y, U + "." + M, n);
          if (P)
            return P;
        }
        return null;
      }
      return x(_);
    }
    function B(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(B);
          if (C === null || s(C))
            return !0;
          var _ = l(C);
          if (_) {
            var G = _.call(C), W;
            if (_ !== C.entries) {
              for (; !(W = G.next()).done; )
                if (!B(W.value))
                  return !1;
            } else
              for (; !(W = G.next()).done; ) {
                var F = W.value;
                if (F && !B(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(C, _) {
      return C === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function z(C) {
      var _ = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : J(_, C) ? "symbol" : _;
    }
    function ne(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var _ = z(C);
      if (_ === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function Z(C) {
      var _ = ne(C);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function ee(C) {
      return !C.constructor || !C.constructor.name ? p : C.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, Fn;
}
var Vn, ii;
function Ug() {
  if (ii) return Vn;
  ii = 1;
  var e = Yr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Vn = function() {
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
  }, Vn;
}
if (process.env.NODE_ENV !== "production") {
  var Hg = ts(), Yg = !0;
  or.exports = qg()(Hg.isElement, Yg);
} else
  or.exports = Ug()();
var Kg = or.exports;
const me = /* @__PURE__ */ ud(Kg);
function Ke(e, t, n, r) {
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
const Xg = /* @__PURE__ */ new Map([
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
function tt(e, t, n) {
  const r = Jg(e), { webkitRelativePath: o } = e, i = typeof t == "string" ? t : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && ai(r, "path", i), ai(r, "relativePath", i), r;
}
function Jg(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), o = Xg.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function ai(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const Qg = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function Zg(e) {
  return Ke(this, void 0, void 0, function* () {
    return Yt(e) && eh(e.dataTransfer) ? oh(e.dataTransfer, e.type) : th(e) ? nh(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? rh(e) : [];
  });
}
function eh(e) {
  return Yt(e);
}
function th(e) {
  return Yt(e) && Yt(e.target);
}
function Yt(e) {
  return typeof e == "object" && e !== null;
}
function nh(e) {
  return ir(e.target.files).map((t) => tt(t));
}
function rh(e) {
  return Ke(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => tt(n));
  });
}
function oh(e, t) {
  return Ke(this, void 0, void 0, function* () {
    if (e.items) {
      const n = ir(e.items).filter((o) => o.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(ih));
      return si(rs(r));
    }
    return si(ir(e.files).map((n) => tt(n)));
  });
}
function si(e) {
  return e.filter((t) => Qg.indexOf(t.name) === -1);
}
function ir(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function ih(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return ci(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? os(t) : ci(e, t);
}
function rs(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? rs(n) : [n]
  ], []);
}
function ci(e, t) {
  return Ke(this, void 0, void 0, function* () {
    var n;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const i = yield e.getAsFileSystemHandle();
      if (i === null)
        throw new Error(`${e} is not a File`);
      if (i !== void 0) {
        const a = yield i.getFile();
        return a.handle = i, tt(a);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return tt(r, (n = t == null ? void 0 : t.fullPath) !== null && n !== void 0 ? n : void 0);
  });
}
function ah(e) {
  return Ke(this, void 0, void 0, function* () {
    return e.isDirectory ? os(e) : sh(e);
  });
}
function os(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const o = [];
    function i() {
      t.readEntries((a) => Ke(this, void 0, void 0, function* () {
        if (a.length) {
          const s = Promise.all(a.map(ah));
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
function sh(e) {
  return Ke(this, void 0, void 0, function* () {
    return new Promise((t, n) => {
      e.file((r) => {
        const o = tt(r, e.fullPath);
        t(o);
      }, (r) => {
        n(r);
      });
    });
  });
}
var zn = function(e, t) {
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
function li(e) {
  return dh(e) || lh(e) || as(e) || ch();
}
function ch() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lh(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function dh(e) {
  if (Array.isArray(e)) return ar(e);
}
function di(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function pi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? di(Object(n), !0).forEach(function(r) {
      is(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : di(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function is(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Et(e, t) {
  return fh(e) || uh(e, t) || as(e, t) || ph();
}
function ph() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function as(e, t) {
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
function uh(e, t) {
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
function fh(e) {
  if (Array.isArray(e)) return e;
}
var mh = typeof zn == "function" ? zn : zn.default, gh = "file-invalid-type", hh = "file-too-large", vh = "file-too-small", bh = "too-many-files", xh = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: gh,
    message: "File type must be ".concat(r)
  };
}, ui = function(t) {
  return {
    code: hh,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, fi = function(t) {
  return {
    code: vh,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, yh = {
  code: bh,
  message: "Too many files"
};
function wh(e) {
  return e.type === "" && typeof e.getAsFile == "function";
}
function ss(e, t) {
  var n = e.type === "application/x-moz-file" || mh(e, t) || wh(e);
  return [n, n ? null : xh(t)];
}
function cs(e, t, n) {
  if (Ue(e.size))
    if (Ue(t) && Ue(n)) {
      if (e.size > n) return [!1, ui(n)];
      if (e.size < t) return [!1, fi(t)];
    } else {
      if (Ue(t) && e.size < t) return [!1, fi(t)];
      if (Ue(n) && e.size > n) return [!1, ui(n)];
    }
  return [!0, null];
}
function Ue(e) {
  return e != null;
}
function Eh(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, i = e.multiple, a = e.maxFiles, s = e.validator;
  return !i && t.length > 1 || i && a >= 1 && t.length > a ? !1 : t.every(function(c) {
    var d = ss(c, n), u = Et(d, 1), l = u[0], p = cs(c, r, o), m = Et(p, 1), g = m[0], b = s ? s(c) : null;
    return l && g && !b;
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
function mi(e) {
  e.preventDefault();
}
function Nh(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Dh(e) {
  return e.indexOf("Edge/") !== -1;
}
function Oh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Nh(e) || Dh(e);
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
function kh() {
  return "showOpenFilePicker" in window;
}
function Sh(e) {
  if (Ue(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = Et(n, 2), o = r[0], i = r[1], a = !0;
      return ls(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(ds)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(n, r) {
      var o = Et(r, 2), i = o[0], a = o[1];
      return pi(pi({}, n), {}, is({}, i, a));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function Ih(e) {
  if (Ue(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = Et(n, 2), o = r[0], i = r[1];
      return [].concat(li(t), [o], li(i));
    }, []).filter(function(t) {
      return ls(t) || ds(t);
    }).join(",");
}
function Ch(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function _h(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function ls(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function ds(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Ah = ["children"], Ph = ["open"], Rh = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Th = ["refKey", "onChange", "onClick"];
function gi(e) {
  return $h(e) || jh(e) || ps(e) || Mh();
}
function Mh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jh(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function $h(e) {
  if (Array.isArray(e)) return sr(e);
}
function Gn(e, t) {
  return Fh(e) || Bh(e, t) || ps(e, t) || Lh();
}
function Lh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ps(e, t) {
  if (e) {
    if (typeof e == "string") return sr(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sr(e, t);
  }
}
function sr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Bh(e, t) {
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
function Fh(e) {
  if (Array.isArray(e)) return e;
}
function hi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function he(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hi(Object(n), !0).forEach(function(r) {
      cr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function cr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Xt(e, t) {
  if (e == null) return {};
  var n = Vh(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Vh(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Kr = /* @__PURE__ */ oe(function(e, t) {
  var n = e.children, r = Xt(e, Ah), o = fs(r), i = o.open, a = Xt(o, Ph);
  return ys(t, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ ve.createElement(ws, null, n(he(he({}, a), {}, {
    open: i
  })));
});
Kr.displayName = "Dropzone";
var us = {
  disabled: !1,
  getFilesFromEvent: Zg,
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
Kr.defaultProps = us;
Kr.propTypes = {
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
var lr = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  isDragGlobal: !1,
  acceptedFiles: [],
  fileRejections: []
};
function fs() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = he(he({}, us), e), n = t.accept, r = t.disabled, o = t.getFilesFromEvent, i = t.maxSize, a = t.minSize, s = t.multiple, c = t.maxFiles, d = t.onDragEnter, u = t.onDragLeave, l = t.onDragOver, p = t.onDrop, m = t.onDropAccepted, g = t.onDropRejected, b = t.onFileDialogCancel, x = t.onFileDialogOpen, E = t.useFsAccessApi, y = t.autoFocus, w = t.preventDropOnDocument, N = t.noClick, h = t.noKeyboard, D = t.noDrag, A = t.noDragEventsBubbling, j = t.onError, q = t.validator, I = $e(function() {
    return Ih(n);
  }, [n]), R = $e(function() {
    return Sh(n);
  }, [n]), $ = $e(function() {
    return typeof x == "function" ? x : vi;
  }, [x]), V = $e(function() {
    return typeof b == "function" ? b : vi;
  }, [b]), B = te(null), J = te(null), z = xs(zh, lr), ne = Gn(z, 2), Z = ne[0], ee = ne[1], C = Z.isFocused, _ = Z.isFileDialogActive, G = te(typeof window < "u" && window.isSecureContext && E && kh()), W = function() {
    !G.current && _ && setTimeout(function() {
      if (J.current) {
        var X = J.current.files;
        X.length || (ee({
          type: "closeDialog"
        }), V());
      }
    }, 300);
  };
  fe(function() {
    return window.addEventListener("focus", W, !1), function() {
      window.removeEventListener("focus", W, !1);
    };
  }, [J, _, V, G]);
  var F = te([]), Y = te([]), U = function(X) {
    B.current && B.current.contains(X.target) || (X.preventDefault(), F.current = []);
  };
  fe(function() {
    return w && (document.addEventListener("dragover", mi, !1), document.addEventListener("drop", U, !1)), function() {
      w && (document.removeEventListener("dragover", mi), document.removeEventListener("drop", U));
    };
  }, [B, w]), fe(function() {
    var L = function(Me) {
      Y.current = [].concat(gi(Y.current), [Me.target]), lt(Me) && ee({
        isDragGlobal: !0,
        type: "setDragGlobal"
      });
    }, X = function(Me) {
      Y.current = Y.current.filter(function(Le) {
        return Le !== Me.target && Le !== null;
      }), !(Y.current.length > 0) && ee({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, be = function() {
      Y.current = [], ee({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, xe = function() {
      Y.current = [], ee({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    };
    return document.addEventListener("dragenter", L, !1), document.addEventListener("dragleave", X, !1), document.addEventListener("dragend", be, !1), document.addEventListener("drop", xe, !1), function() {
      document.removeEventListener("dragenter", L), document.removeEventListener("dragleave", X), document.removeEventListener("dragend", be), document.removeEventListener("drop", xe);
    };
  }, [B]), fe(function() {
    return !r && y && B.current && B.current.focus(), function() {
    };
  }, [B, y, r]);
  var K = Q(function(L) {
    j ? j(L) : console.error(L);
  }, [j]), T = Q(function(L) {
    L.preventDefault(), L.persist(), At(L), F.current = [].concat(gi(F.current), [L.target]), lt(L) && Promise.resolve(o(L)).then(function(X) {
      if (!(Kt(L) && !A)) {
        var be = X.length, xe = be > 0 && Eh({
          files: X,
          accept: I,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: c,
          validator: q
        }), Ee = be > 0 && !xe;
        ee({
          isDragAccept: xe,
          isDragReject: Ee,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), d && d(L);
      }
    }).catch(function(X) {
      return K(X);
    });
  }, [o, d, K, A, I, a, i, s, c, q]), S = Q(function(L) {
    L.preventDefault(), L.persist(), At(L);
    var X = lt(L);
    if (X && L.dataTransfer)
      try {
        L.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return X && l && l(L), !1;
  }, [l, A]), M = Q(function(L) {
    L.preventDefault(), L.persist(), At(L);
    var X = F.current.filter(function(xe) {
      return B.current && B.current.contains(xe);
    }), be = X.indexOf(L.target);
    be !== -1 && X.splice(be, 1), F.current = X, !(X.length > 0) && (ee({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), lt(L) && u && u(L));
  }, [B, u, A]), re = Q(function(L, X) {
    var be = [], xe = [];
    L.forEach(function(Ee) {
      var Me = ss(Ee, I), Le = Gn(Me, 2), ln = Le[0], dn = Le[1], pn = cs(Ee, a, i), Pt = Gn(pn, 2), un = Pt[0], fn = Pt[1], mn = q ? q(Ee) : null;
      if (ln && un && !mn)
        be.push(Ee);
      else {
        var gn = [dn, fn];
        mn && (gn = gn.concat(mn)), xe.push({
          file: Ee,
          errors: gn.filter(function(vs) {
            return vs;
          })
        });
      }
    }), (!s && be.length > 1 || s && c >= 1 && be.length > c) && (be.forEach(function(Ee) {
      xe.push({
        file: Ee,
        errors: [yh]
      });
    }), be.splice(0)), ee({
      acceptedFiles: be,
      fileRejections: xe,
      isDragReject: xe.length > 0,
      type: "setFiles"
    }), p && p(be, xe, X), xe.length > 0 && g && g(xe, X), be.length > 0 && m && m(be, X);
  }, [ee, s, I, a, i, c, p, m, g, q]), P = Q(function(L) {
    L.preventDefault(), L.persist(), At(L), F.current = [], lt(L) && Promise.resolve(o(L)).then(function(X) {
      Kt(L) && !A || re(X, L);
    }).catch(function(X) {
      return K(X);
    }), ee({
      type: "reset"
    });
  }, [o, re, K, A]), le = Q(function() {
    if (G.current) {
      ee({
        type: "openDialog"
      }), $();
      var L = {
        multiple: s,
        types: R
      };
      window.showOpenFilePicker(L).then(function(X) {
        return o(X);
      }).then(function(X) {
        re(X, null), ee({
          type: "closeDialog"
        });
      }).catch(function(X) {
        Ch(X) ? (V(X), ee({
          type: "closeDialog"
        })) : _h(X) ? (G.current = !1, J.current ? (J.current.value = null, J.current.click()) : K(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : K(X);
      });
      return;
    }
    J.current && (ee({
      type: "openDialog"
    }), $(), J.current.value = null, J.current.click());
  }, [ee, $, V, E, re, K, R, s]), ke = Q(function(L) {
    !B.current || !B.current.isEqualNode(L.target) || (L.key === " " || L.key === "Enter" || L.keyCode === 32 || L.keyCode === 13) && (L.preventDefault(), le());
  }, [B, le]), it = Q(function() {
    ee({
      type: "focus"
    });
  }, []), Xr = Q(function() {
    ee({
      type: "blur"
    });
  }, []), Jr = Q(function() {
    N || (Oh() ? setTimeout(le, 0) : le());
  }, [N, le]), Xe = function(X) {
    return r ? null : X;
  }, cn = function(X) {
    return h ? null : Xe(X);
  }, _t = function(X) {
    return D ? null : Xe(X);
  }, At = function(X) {
    A && X.stopPropagation();
  }, ms = $e(function() {
    return function() {
      var L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, X = L.refKey, be = X === void 0 ? "ref" : X, xe = L.role, Ee = L.onKeyDown, Me = L.onFocus, Le = L.onBlur, ln = L.onClick, dn = L.onDragEnter, pn = L.onDragOver, Pt = L.onDragLeave, un = L.onDrop, fn = Xt(L, Rh);
      return he(he(cr({
        onKeyDown: cn(je(Ee, ke)),
        onFocus: cn(je(Me, it)),
        onBlur: cn(je(Le, Xr)),
        onClick: Xe(je(ln, Jr)),
        onDragEnter: _t(je(dn, T)),
        onDragOver: _t(je(pn, S)),
        onDragLeave: _t(je(Pt, M)),
        onDrop: _t(je(un, P)),
        role: typeof xe == "string" && xe !== "" ? xe : "presentation"
      }, be, B), !r && !h ? {
        tabIndex: 0
      } : {}), fn);
    };
  }, [B, ke, it, Xr, Jr, T, S, M, P, h, D, r]), gs = Q(function(L) {
    L.stopPropagation();
  }, []), hs = $e(function() {
    return function() {
      var L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, X = L.refKey, be = X === void 0 ? "ref" : X, xe = L.onChange, Ee = L.onClick, Me = Xt(L, Th), Le = cr({
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
        onChange: Xe(je(xe, P)),
        onClick: Xe(je(Ee, gs)),
        tabIndex: -1
      }, be, J);
      return he(he({}, Le), Me);
    };
  }, [J, n, s, P, r]);
  return he(he({}, Z), {}, {
    isFocused: C && !r,
    getRootProps: ms,
    getInputProps: hs,
    rootRef: B,
    inputRef: J,
    open: Xe(le)
  });
}
function zh(e, t) {
  switch (t.type) {
    case "focus":
      return he(he({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return he(he({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return he(he({}, lr), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return he(he({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return he(he({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return he(he({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "setDragGlobal":
      return he(he({}, e), {}, {
        isDragGlobal: t.isDragGlobal
      });
    case "reset":
      return he({}, lr);
    default:
      return e;
  }
}
function vi() {
}
const Gh = (e) => e.startsWith("image/") ? dc : e.startsWith("video/") ? Pc : e.startsWith("audio/") ? Dc : e.includes("pdf") || e.includes("document") ? tc : rc, bi = (e) => {
  if (e === 0) return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB", "GB"], r = Math.floor(Math.log(e) / Math.log(t));
  return parseFloat((e / Math.pow(t, r)).toFixed(2)) + " " + n[r];
};
function ev({
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
  const [d, u] = ce([]), [l, p] = ce([]), m = Q(
    (w, N) => {
      if (w.length > 0) {
        const h = i ? [...d, ...w] : w;
        if (u(h), e(h), c) {
          const D = w.filter((A) => A.type.startsWith("image/")).map((A) => ({
            file: A,
            url: URL.createObjectURL(A)
          }));
          p((A) => i ? [...A, ...D] : D);
        }
      }
      N.length > 0 && t && t(N);
    },
    [d, i, e, t, c]
  ), g = (w) => {
    const N = d.filter((D) => D !== w);
    u(N), e(N);
    const h = l.find((D) => D.file === w);
    h && (URL.revokeObjectURL(h.url), p((D) => D.filter((A) => A.file !== w)));
  }, { getRootProps: b, getInputProps: x, isDragActive: E, isDragReject: y } = fs({
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
        ...b(),
        className: O(
          "flex flex-col items-center justify-center px-6 py-8 border border-dashed rounded-[14px] cursor-pointer text-center",
          "transition-colors duration-150 ease-out",
          "bg-[#FAF9FD]",
          "border-[#B9B3D6] hover:border-primary hover:bg-primary-soft",
          E && !y && "border-primary bg-primary-soft",
          y && "border-error bg-error-soft",
          a && "opacity-50 cursor-not-allowed"
        ),
        children: [
          /* @__PURE__ */ f("input", { ...x() }),
          /* @__PURE__ */ f(
            "div",
            {
              className: O(
                "w-12 h-12 mb-3 rounded-xl flex items-center justify-center",
                "bg-primary-soft",
                "transition-colors duration-150",
                E && "bg-white"
              ),
              children: /* @__PURE__ */ f(
                _c,
                {
                  className: O(
                    "w-6 h-6 text-primary-ink",
                    E && "motion-safe:animate-bounce"
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ f("p", { className: "font-display text-[15px] font-extrabold text-neutral-800 mb-0.5", children: E ? y ? "Archivo no permitido" : "Suelta los archivos aquí" : "Arrastra archivos aquí" }),
          /* @__PURE__ */ f("p", { className: "text-[13px] text-neutral-600 mb-2", children: "o haz clic para seleccionar" }),
          /* @__PURE__ */ k("p", { className: "text-2xs text-neutral-500", children: [
            "PNG, JPG hasta ",
            bi(o)
          ] })
        ]
      }
    ),
    d.length > 0 && /* @__PURE__ */ k("div", { className: "space-y-2", children: [
      /* @__PURE__ */ k("p", { className: "text-xs font-semibold text-neutral-600", children: [
        "Archivos seleccionados (",
        d.length,
        ")"
      ] }),
      /* @__PURE__ */ f("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: d.map((w, N) => {
        const h = Gh(w.type), D = l.find((A) => A.file === w);
        return /* @__PURE__ */ k(
          "div",
          {
            className: O(
              "group flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-xl shadow-card",
              "transition-all duration-200",
              "hover:shadow-card-hover hover:border-primary-line"
            ),
            children: [
              D ? /* @__PURE__ */ f("div", { className: "w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100", children: /* @__PURE__ */ f(
                "img",
                {
                  src: D.url,
                  alt: w.name,
                  className: "w-full h-full object-cover"
                }
              ) }) : /* @__PURE__ */ f(
                "div",
                {
                  className: O(
                    "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
                    "bg-primary-soft"
                  ),
                  children: /* @__PURE__ */ f(h, { "aria-hidden": "true", className: "w-5 h-5 text-primary-ink" })
                }
              ),
              /* @__PURE__ */ k("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ f("p", { className: "text-[13px] font-semibold text-neutral-800 truncate", children: w.name }),
                /* @__PURE__ */ f("p", { className: "text-xs text-neutral-500", children: bi(w.size) })
              ] }),
              /* @__PURE__ */ f(
                "button",
                {
                  type: "button",
                  onClick: (A) => {
                    A.stopPropagation(), g(w);
                  },
                  className: O(
                    "p-1.5 rounded-lg opacity-0 group-hover:opacity-100 focus-visible:opacity-100",
                    "text-neutral-500 hover:text-error-dark hover:bg-error-soft",
                    "transition-all duration-200"
                  ),
                  children: /* @__PURE__ */ f(nt, { "aria-hidden": "true", className: "w-4 h-4" })
                }
              )
            ]
          },
          `${w.name}-${N}`
        );
      }) })
    ] })
  ] });
}
const Wh = {
  default: "bg-neutral-100 text-neutral-700",
  primary: "bg-primary-soft text-primary-ink",
  success: "bg-success-soft text-success-dark",
  warning: "bg-warning-soft text-warning-dark",
  danger: "bg-error-soft text-error-dark"
};
function tv({ columns: e, onCardMove: t, className: n }) {
  return /* @__PURE__ */ f(zr, { onDragEnd: (o) => {
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
      className: "flex-shrink-0 w-72 bg-[#F4F3F9] rounded-[14px] border border-neutral-200",
      children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: O(
              "px-4 py-3 border-b border-neutral-200 rounded-t-[14px]",
              "bg-transparent"
            ),
            children: /* @__PURE__ */ k("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ f("h3", { className: "font-display text-[14px] font-extrabold text-neutral-800", children: o.title }),
              /* @__PURE__ */ f(
                "span",
                {
                  className: O(
                    "px-2 py-0.5 text-2xs font-semibold tabular-nums rounded-full",
                    "bg-white border border-neutral-200 text-neutral-600"
                  ),
                  children: o.cards.length
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ f(Hr, { droppableId: o.id, children: (i, a) => /* @__PURE__ */ k(
          "div",
          {
            ref: i.innerRef,
            ...i.droppableProps,
            className: O(
              "p-3 min-h-[200px] space-y-3 rounded-b-[14px] transition-colors duration-150",
              a.isDraggingOver && "bg-primary-soft"
            ),
            children: [
              o.cards.map((s, c) => /* @__PURE__ */ f(Wr, { draggableId: s.id, index: c, children: (d, u) => /* @__PURE__ */ k(
                "div",
                {
                  ref: d.innerRef,
                  ...d.draggableProps,
                  className: O(
                    "group bg-white rounded-xl border border-neutral-200 shadow-card overflow-hidden",
                    "transition-[box-shadow,border-color] duration-150",
                    "hover:shadow-card-hover hover:border-primary-line",
                    u.isDragging && "shadow-menu ring-2 ring-primary/25 border-primary-line"
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
                          "bg-white"
                        ),
                        children: [
                          /* @__PURE__ */ f(
                            Je,
                            {
                              "aria-hidden": "true",
                              className: O(
                                "w-4 h-4 flex-shrink-0 text-neutral-400",
                                "group-hover:text-neutral-600",
                                u.isDragging && "text-primary"
                              )
                            }
                          ),
                          /* @__PURE__ */ f("span", { className: "font-semibold text-[13px] text-neutral-800 truncate", children: s.title })
                        ]
                      }
                    ),
                    /* @__PURE__ */ k("div", { className: "p-3", children: [
                      s.description && /* @__PURE__ */ f("p", { className: "text-xs leading-5 text-neutral-600 mb-2 line-clamp-2", children: s.description }),
                      s.tags && s.tags.length > 0 && /* @__PURE__ */ f("div", { className: "flex flex-wrap gap-1", children: s.tags.map((l, p) => /* @__PURE__ */ f(
                        "span",
                        {
                          className: O(
                            "px-2 py-0.5 text-2xs font-semibold tabular-nums rounded-full",
                            Wh[l.variant || "default"]
                          ),
                          children: l.label
                        },
                        p
                      )) })
                    ] })
                  ]
                }
              ) }, s.id)),
              i.placeholder,
              o.cards.length === 0 && !a.isDraggingOver && /* @__PURE__ */ f("div", { className: "flex items-center justify-center h-24 rounded-xl border border-dashed border-neutral-300 text-neutral-500 text-xs", children: "Sin tarjetas" })
            ]
          }
        ) })
      ]
    },
    o.id
  )) }) });
}
function nv({
  items: e,
  onReorder: t,
  className: n,
  cardClassName: r,
  droppableId: o = "draggable-cards",
  direction: i = "vertical"
}) {
  return /* @__PURE__ */ f(zr, { onDragEnd: (s) => {
    if (!s.destination) return;
    const c = Array.from(e), [d] = c.splice(s.source.index, 1);
    c.splice(s.destination.index, 0, d), t(c);
  }, children: /* @__PURE__ */ f(Hr, { droppableId: o, direction: i, children: (s) => /* @__PURE__ */ k(
    "div",
    {
      ref: s.innerRef,
      ...s.droppableProps,
      className: O(
        i === "horizontal" ? "flex gap-4" : "space-y-4",
        n
      ),
      children: [
        e.map((c, d) => /* @__PURE__ */ f(Wr, { draggableId: c.id, index: d, children: (u, l) => /* @__PURE__ */ k(
          "div",
          {
            ref: u.innerRef,
            ...u.draggableProps,
            className: O(
              "group relative bg-white border border-neutral-200 rounded-[14px] shadow-card overflow-hidden",
              "transition-[box-shadow,border-color] duration-150 ease-out",
              "hover:shadow-card-hover hover:border-primary-line",
              l.isDragging && "shadow-menu ring-2 ring-primary/25 border-primary-line",
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
                    "flex items-center justify-between gap-3 px-4 py-3",
                    "bg-white border-b border-neutral-200 text-neutral-800",
                    "cursor-grab active:cursor-grabbing"
                  ),
                  children: [
                    /* @__PURE__ */ f("h3", { className: "font-display text-[15px] font-extrabold leading-6", children: c.title }),
                    /* @__PURE__ */ f(Je, { "aria-hidden": "true", className: "w-4 h-4 flex-shrink-0 text-neutral-400 transition-colors group-hover:text-neutral-600" })
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
                        Je,
                        {
                          "aria-hidden": "true",
                          className: O(
                            "w-4 h-4 flex-shrink-0 text-neutral-400",
                            "group-hover:text-neutral-600 transition-colors",
                            l.isDragging && "text-primary"
                          )
                        }
                      ),
                      /* @__PURE__ */ f("div", { className: "flex-1 h-px bg-neutral-200" })
                    ]
                  }
                )
              ),
              /* @__PURE__ */ f("div", { className: O("text-[13px] leading-5 text-neutral-700", c.title ? "p-4" : "px-4 pb-4"), children: c.children })
            ]
          }
        ) }, c.id)),
        s.placeholder
      ]
    }
  ) }) });
}
function rv({
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
        "group relative bg-white border border-neutral-200 rounded-[14px] shadow-card overflow-hidden",
        "transition-[box-shadow,border-color] duration-150 ease-out",
        "hover:shadow-card-hover hover:border-primary-line",
        r && "shadow-menu ring-2 ring-primary/25 border-primary-line",
        n
      ),
      children: [
        e ? /* @__PURE__ */ k(
          "div",
          {
            ...o,
            className: O(
              "flex items-center justify-between gap-3 px-4 py-3",
              "bg-white border-b border-neutral-200 text-neutral-800",
              "cursor-grab active:cursor-grabbing"
            ),
            children: [
              /* @__PURE__ */ f("h3", { className: "font-display text-[15px] font-extrabold leading-6", children: e }),
              /* @__PURE__ */ f(Je, { "aria-hidden": "true", className: "w-4 h-4 flex-shrink-0 text-neutral-400 transition-colors group-hover:text-neutral-600" })
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
                  Je,
                  {
                    "aria-hidden": "true",
                    className: O(
                      "w-4 h-4 flex-shrink-0 text-neutral-400",
                      "group-hover:text-neutral-600 transition-colors",
                      r && "text-primary"
                    )
                  }
                ),
                /* @__PURE__ */ f("div", { className: "flex-1 h-px bg-neutral-200" })
              ]
            }
          )
        ),
        /* @__PURE__ */ f("div", { className: O("text-[13px] leading-5 text-neutral-700", e ? "p-4" : "px-4 pb-4"), children: t })
      ]
    }
  );
}
export {
  kl as A,
  wl as B,
  fl as C,
  nv as D,
  nd as E,
  ev as F,
  Xh as G,
  Ai as H,
  Yh as I,
  O as J,
  tv as K,
  Bl as L,
  Mi as M,
  _i as N,
  Zt as O,
  Xl as P,
  Sl as Q,
  pl as R,
  ki as S,
  Ul as T,
  Ge as U,
  Jh as V,
  qn as a,
  Ri as b,
  Qh as c,
  Fl as d,
  Bt as e,
  gl as f,
  ud as g,
  vl as h,
  ml as i,
  gr as j,
  cl as k,
  Ql as l,
  Si as m,
  mr as n,
  Ft as o,
  rd as p,
  Qc as q,
  Vl as r,
  Ci as s,
  $l as t,
  rv as u,
  Zh as v,
  Kh as w,
  ql as x,
  rl as y,
  ji as z
};
//# sourceMappingURL=index-DczAGeHV.js.map
