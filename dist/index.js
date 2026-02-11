import { jsxs as I, jsx as m, Fragment as qe } from "react/jsx-runtime";
import * as Z from "react";
import pe, { forwardRef as ae, createElement as Mn, useState as be, useRef as Q, useCallback as ce, useMemo as ze, useEffect as Ee, useContext as Ut, createContext as Qo, useLayoutEffect as Xa, useReducer as Ja, useImperativeHandle as Za, Fragment as Qa } from "react";
import es, { flushSync as ei } from "react-dom";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ti = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
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
const jr = (e) => {
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
const is = ae(
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
      className: ti("lucide", o),
      ...!i && !os(s) && { "aria-hidden": "true" },
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
const ee = (e, t) => {
  const n = ae(
    ({ className: r, ...o }, i) => Mn(is, {
      ref: i,
      iconNode: t,
      className: ti(
        `lucide-${ts(jr(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = jr(e), n;
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
], ss = ee("arrow-down", as);
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
], ls = ee("arrow-up-down", cs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], ps = ee("arrow-up", ds);
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
], fs = ee("bell", us);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], gs = ee("check", ms);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], er = ee("chevron-down", vs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], bs = ee("chevron-left", hs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ni = ee("chevron-right", xs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], ws = ee("chevrons-left", ys);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], Ns = ee("chevrons-right", Es);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], ri = ee("circle-alert", Ds);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], oi = ee("circle-check-big", Os);
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
], Cs = ee("eye-off", Ss);
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
], _s = ee("eye", Is);
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
], ks = ee("file-text", As);
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
], Rs = ee("file", Ps);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Xe = ee("grip-vertical", Ts);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Ms = ee("house", $s);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Ls = ee("image", js);
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
], ii = ee("info", Bs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Fs = ee("loader-circle", Vs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Gs = ee("lock", zs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], qs = ee("mail", Ws);
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
], Hs = ee("menu", Us);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [["path", { d: "M5 12h14", key: "1ays0h" }]], Ks = ee("minus", Ys);
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
], Js = ee("music", Xs);
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
], Qs = ee("panel-left-close", Zs);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], tc = ee("search", ec);
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
], ai = ee("triangle-alert", nc);
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
], oc = ee("upload", rc);
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
], ac = ee("video", ic);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], yt = ee("x", sc);
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
function O(...e) {
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
}, $t = ae(
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
  }, p) => {
    const d = a || n;
    return /* @__PURE__ */ I(
      "button",
      {
        ref: p,
        disabled: d,
        className: O(
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
$t.displayName = "Button";
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
}, jn = ae(
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
            ref: d,
            id: u,
            disabled: s,
            className: O(
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
const mc = {
  sm: "px-3 py-1.5 text-sm pr-8",
  md: "px-4 py-2 text-base pr-10",
  lg: "px-4 py-3 text-lg pr-12"
}, gc = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, vc = ae(
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
    const f = p || `select-${Math.random().toString(36).slice(2, 9)}`, h = !!r;
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
          er,
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
const hc = {
  sm: "min-h-[34px] px-3 py-1 text-sm",
  md: "min-h-[42px] px-4 py-1.5 text-base",
  lg: "min-h-[50px] px-4 py-2 text-lg"
}, bc = {
  sm: "px-1.5 py-0.5 text-xs gap-0.5",
  md: "px-2 py-0.5 text-sm gap-1",
  lg: "px-2.5 py-1 text-sm gap-1"
}, xc = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, yc = {
  sm: 12,
  md: 14,
  lg: 14
}, wc = {
  sm: 14,
  md: 16,
  lg: 20
}, Ec = {
  primary: { base: "bg-primary/10 text-primary", hover: "hover:bg-primary/20" },
  accent: { base: "bg-accent/10 text-accent", hover: "hover:bg-accent/20" },
  success: { base: "bg-success/10 text-success", hover: "hover:bg-success/20" },
  warning: { base: "bg-warning/10 text-warning", hover: "hover:bg-warning/20" },
  error: { base: "bg-error/10 text-error", hover: "hover:bg-error/20" },
  info: { base: "bg-info/10 text-info", hover: "hover:bg-info/20" },
  neutral: { base: "bg-neutral-100 text-neutral-700", hover: "hover:bg-neutral-200" }
}, Nc = ae(
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
    tagColor: h = "primary",
    className: b,
    id: x
  }, w) => {
    const E = x || `multiselect-${Math.random().toString(36).slice(2, 9)}`, N = !!s, y = t !== void 0, [v, D] = be(n), A = y ? t : v, [M, U] = be(""), [j, X] = be(!1), [B, H] = be(-1), Y = Q(null), K = Q(null), me = Q(null), ve = ce(
      (_) => {
        y || D(_), r == null || r(_);
      },
      [y, r]
    ), ue = ze(() => e.filter((_) => {
      const k = A.includes(_.value), $ = !M || _.label.toLowerCase().includes(M.toLowerCase());
      return !k && $;
    }), [e, A, M]), te = d === void 0 || A.length < d, S = ce(
      (_) => {
        var ne;
        if (!te || p) return;
        const k = e.find((C) => C.value === _);
        if (k != null && k.disabled) return;
        const $ = [...A, _];
        ve($), U(""), H(-1), (ne = K.current) == null || ne.focus();
      },
      [te, p, e, A, ve]
    ), P = ce(
      (_, k) => {
        var ne;
        if (k == null || k.stopPropagation(), p) return;
        const $ = A.filter((C) => C !== _);
        ve($), (ne = K.current) == null || ne.focus();
      },
      [p, A, ve]
    ), z = ce(
      (_, k) => {
        const $ = ue.length;
        if ($ === 0) return -1;
        for (let ne = 0; ne < $; ne++) {
          const C = (_ + k * (ne + 1) + $) % $;
          if (!ue[C].disabled) return C;
        }
        return -1;
      },
      [ue]
    ), G = ce(() => ue.findIndex((_) => !_.disabled), [ue]), L = ce(
      (_) => {
        if (!p)
          switch (_.key) {
            case "ArrowDown": {
              _.preventDefault(), j ? H((k) => z(k, 1)) : (X(!0), H(G()));
              break;
            }
            case "ArrowUp": {
              _.preventDefault(), j && H((k) => z(k, -1));
              break;
            }
            case "Enter": {
              if (_.preventDefault(), j && B >= 0 && B < ue.length) {
                const k = ue[B];
                k.disabled || S(k.value);
              } else j || X(!0);
              break;
            }
            case "Backspace": {
              if (M === "" && A.length > 0) {
                const k = A[A.length - 1];
                P(k);
              }
              break;
            }
            case "Escape": {
              _.preventDefault(), X(!1), H(-1);
              break;
            }
          }
      },
      [
        p,
        j,
        B,
        S,
        M,
        A,
        P,
        z,
        G
      ]
    );
    Ee(() => {
      const _ = (k) => {
        Y.current && !Y.current.contains(k.target) && (X(!1), H(-1), U(""));
      };
      return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
    }, []), Ee(() => {
      var _;
      B >= 0 && me.current && ((_ = me.current.querySelectorAll('[role="option"]')[B]) == null || _.scrollIntoView({ block: "nearest" }));
    }, [B]);
    const q = () => {
      var _;
      p || ((_ = K.current) == null || _.focus(), X(!0));
    }, W = (_) => {
      var k;
      return ((k = e.find(($) => $.value === _)) == null ? void 0 : k.label) ?? _;
    }, F = (_) => {
      var k;
      return ((k = e.find(($) => $.value === _)) == null ? void 0 : k.color) ?? h;
    };
    return /* @__PURE__ */ I(
      "div",
      {
        ref: w,
        className: O("flex flex-col gap-1.5", l && "w-full"),
        children: [
          i && /* @__PURE__ */ m(
            "label",
            {
              htmlFor: `${E}-input`,
              className: "text-sm font-medium text-neutral-700",
              children: i
            }
          ),
          /* @__PURE__ */ I("div", { ref: Y, className: "relative", children: [
            f && /* @__PURE__ */ m("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10", children: f }),
            /* @__PURE__ */ I(
              "div",
              {
                onClick: q,
                className: O(
                  // Base styles
                  "flex flex-wrap items-center gap-1.5 w-full rounded-md border bg-white cursor-text",
                  "transition-colors duration-200",
                  // Size styles
                  hc[o],
                  // Left icon padding
                  f && xc[o],
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
                "aria-describedby": N ? `${E}-error` : a ? `${E}-helper` : void 0,
                children: [
                  A.map((_) => {
                    const k = Ec[F(_)];
                    return /* @__PURE__ */ I(
                      "span",
                      {
                        className: O(
                          "inline-flex items-center rounded-md font-medium",
                          "transition-colors duration-150",
                          k.base,
                          !p && k.hover,
                          bc[o]
                        ),
                        children: [
                          W(_),
                          !p && /* @__PURE__ */ m(
                            "button",
                            {
                              type: "button",
                              onClick: ($) => P(_, $),
                              className: O(
                                "inline-flex items-center justify-center rounded-sm transition-colors",
                                k.hover
                              ),
                              "aria-label": `Remove ${W(_)}`,
                              tabIndex: -1,
                              children: /* @__PURE__ */ m(yt, { size: yc[o] })
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
                      ref: K,
                      id: `${E}-input`,
                      type: "text",
                      value: M,
                      onChange: (_) => {
                        U(_.target.value), j || X(!0), H(0);
                      },
                      onFocus: () => {
                        p || X(!0);
                      },
                      onKeyDown: L,
                      placeholder: A.length === 0 ? c : "",
                      disabled: p,
                      className: O(
                        "flex-1 min-w-[60px] outline-none bg-transparent",
                        "placeholder:text-neutral-400",
                        p && "cursor-not-allowed"
                      ),
                      role: "combobox",
                      "aria-expanded": j,
                      "aria-controls": `${E}-listbox`,
                      "aria-activedescendant": B >= 0 ? `${E}-option-${B}` : void 0,
                      "aria-autocomplete": "list",
                      autoComplete: "off"
                    }
                  ) : /* @__PURE__ */ I(qe, { children: [
                    A.length === 0 && /* @__PURE__ */ m("span", { className: "text-neutral-400", children: c }),
                    /* @__PURE__ */ m(
                      "input",
                      {
                        ref: K,
                        id: `${E}-input`,
                        className: "absolute opacity-0 w-0 h-0",
                        onFocus: () => {
                          p || X(!0);
                        },
                        onKeyDown: L,
                        disabled: p,
                        tabIndex: 0,
                        role: "combobox",
                        "aria-expanded": j,
                        "aria-controls": `${E}-listbox`,
                        "aria-activedescendant": B >= 0 ? `${E}-option-${B}` : void 0,
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
                className: O(
                  "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-200",
                  j && "rotate-180"
                ),
                size: wc[o]
              }
            ),
            j && /* @__PURE__ */ m(
              "ul",
              {
                ref: me,
                id: `${E}-listbox`,
                role: "listbox",
                "aria-multiselectable": "true",
                className: O(
                  "absolute z-50 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg",
                  "max-h-60 overflow-auto",
                  "py-1"
                ),
                children: ue.length === 0 ? /* @__PURE__ */ m("li", { className: "px-4 py-2 text-sm text-neutral-400", children: M ? "No matching options" : "No options available" }) : ue.map((_, k) => /* @__PURE__ */ m(
                  "li",
                  {
                    id: `${E}-option-${k}`,
                    role: "option",
                    "aria-selected": A.includes(_.value),
                    "aria-disabled": _.disabled || !te,
                    onClick: () => {
                      !_.disabled && te && S(_.value);
                    },
                    className: O(
                      "px-4 py-2 text-sm transition-colors duration-100",
                      // Disabled state (takes precedence over other visual states)
                      _.disabled || !te ? "text-neutral-300 cursor-not-allowed opacity-50 select-none" : O(
                        "cursor-pointer",
                        k === B ? "bg-primary/10 text-primary" : "text-neutral-700 hover:bg-neutral-50"
                      )
                    ),
                    children: _.label
                  },
                  _.value
                ))
              }
            )
          ] }),
          N && /* @__PURE__ */ m("p", { id: `${E}-error`, className: "text-sm text-error", children: s }),
          !N && a && /* @__PURE__ */ m("p", { id: `${E}-helper`, className: "text-sm text-neutral-500", children: a })
        ]
      }
    );
  }
);
Nc.displayName = "MultiSelect";
const Dc = ae(
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
    const u = c || `textarea-${Math.random().toString(36).slice(2, 9)}`, f = !!n, h = typeof l == "string" ? l.length : 0;
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
          ref: d,
          id: u,
          disabled: a,
          maxLength: i,
          value: l,
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
          h,
          "/",
          i
        ] })
      ] })
    ] });
  }
);
Dc.displayName = "Textarea";
const Oc = ae(
  ({ label: e, description: t, error: n, indeterminate: r, disabled: o, className: i, id: a, ...s }, c) => {
    const l = a || `checkbox-${Math.random().toString(36).slice(2, 9)}`, p = !!n;
    return /* @__PURE__ */ I("div", { className: O("flex flex-col gap-1", i), children: [
      /* @__PURE__ */ I(
        "label",
        {
          htmlFor: l,
          className: O(
            "flex items-start gap-3 cursor-pointer",
            o && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ I("div", { className: "relative flex items-center justify-center", children: [
              /* @__PURE__ */ m(
                "input",
                {
                  ref: c,
                  type: "checkbox",
                  id: l,
                  disabled: o,
                  className: "peer sr-only",
                  "aria-invalid": p,
                  ...s
                }
              ),
              /* @__PURE__ */ m(
                "div",
                {
                  className: O(
                    "w-5 h-5 rounded border-2 transition-colors",
                    "flex items-center justify-center",
                    "peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2",
                    "peer-checked:bg-primary peer-checked:border-primary",
                    p ? "border-error" : "border-neutral-300 peer-hover:border-neutral-400"
                  ),
                  children: r ? /* @__PURE__ */ m(Ks, { className: "w-3 h-3 text-white opacity-0 peer-checked:opacity-100" }) : /* @__PURE__ */ m(gs, { className: "w-3 h-3 text-white opacity-0 peer-checked:opacity-100" })
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
      p && /* @__PURE__ */ m("p", { className: "text-sm text-error ml-8", children: n })
    ] });
  }
);
Oc.displayName = "Checkbox";
const Sc = ae(
  ({ label: e, description: t, error: n, disabled: r, className: o, id: i, ...a }, s) => {
    const c = i || `radio-${Math.random().toString(36).slice(2, 9)}`, l = !!n;
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
                  "aria-invalid": l,
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
                    l ? "border-error" : "border-neutral-300 peer-hover:border-neutral-400"
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
      l && /* @__PURE__ */ m("p", { className: "text-sm text-error ml-8", children: n })
    ] });
  }
);
Sc.displayName = "Radio";
const Cc = {
  default: "bg-white border border-neutral-200 rounded-lg",
  bordered: "bg-white border-2 border-neutral-300 rounded-lg",
  elevated: "bg-white border border-neutral-200 shadow-card rounded-lg"
}, Ic = ae(
  ({ children: e, noPadding: t = !1, hoverable: n = !1, variant: r = "default", className: o, ...i }, a) => /* @__PURE__ */ m(
    "div",
    {
      ref: a,
      className: O(
        Cc[r],
        !t && "p-4",
        n && "transition-shadow transition-colors duration-200 hover:shadow-card-hover hover:border-primary/30 cursor-pointer",
        o
      ),
      ...i,
      children: e
    }
  )
);
Ic.displayName = "Card";
const _c = ae(
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
_c.displayName = "CardHeader";
const Ac = ae(
  ({ children: e, className: t, ...n }, r) => /* @__PURE__ */ m("div", { ref: r, className: O("p-4", t), ...n, children: e })
);
Ac.displayName = "CardBody";
const kc = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
  between: "justify-between"
}, Pc = ae(
  ({ children: e, align: t = "right", className: n, ...r }, o) => /* @__PURE__ */ m(
    "div",
    {
      ref: o,
      className: O(
        "flex items-center gap-3 px-4 py-3 bg-neutral-50 border-t border-neutral-200",
        kc[t],
        n
      ),
      ...r,
      children: e
    }
  )
);
Pc.displayName = "CardFooter";
const Rc = {
  default: "bg-neutral-100 text-neutral-700",
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  success: "bg-success/10 text-success-dark",
  warning: "bg-warning/10 text-warning-dark",
  error: "bg-error/10 text-error-dark",
  info: "bg-info/10 text-info-dark"
}, Tc = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base"
}, $c = {
  default: "bg-neutral-400",
  primary: "bg-primary",
  accent: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  info: "bg-info"
}, Mc = ae(
  ({ children: e, variant: t = "default", size: n = "md", pill: r = !1, dot: o = !1, className: i, ...a }, s) => o ? /* @__PURE__ */ m(
    "span",
    {
      ref: s,
      className: O(
        "inline-block rounded-full",
        n === "sm" && "w-2 h-2",
        n === "md" && "w-2.5 h-2.5",
        n === "lg" && "w-3 h-3",
        $c[t],
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
        Rc[t],
        Tc[n],
        i
      ),
      ...a,
      children: e
    }
  )
);
Mc.displayName = "Badge";
const Lr = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl"
}, jc = {
  xs: "w-1.5 h-1.5 border",
  sm: "w-2 h-2 border",
  md: "w-2.5 h-2.5 border-2",
  lg: "w-3 h-3 border-2",
  xl: "w-4 h-4 border-2"
}, Lc = {
  online: "bg-success",
  offline: "bg-neutral-400",
  busy: "bg-error",
  away: "bg-warning"
}, ci = ae(
  ({ size: e = "md", src: t, alt: n = "", initials: r, status: o, className: i, ...a }, s) => {
    const c = (l) => l ? l.split(" ").map((p) => p[0]).join("").toUpperCase().slice(0, 2) : "?";
    return /* @__PURE__ */ I("div", { ref: s, className: O("relative inline-block", i), children: [
      t ? /* @__PURE__ */ m(
        "img",
        {
          src: t,
          alt: n,
          className: O(
            "rounded-full object-cover",
            Lr[e]
          ),
          ...a
        }
      ) : /* @__PURE__ */ m(
        "div",
        {
          className: O(
            "rounded-full flex items-center justify-center font-medium",
            "bg-primary text-white",
            Lr[e]
          ),
          children: c(r || n)
        }
      ),
      o && /* @__PURE__ */ m(
        "span",
        {
          className: O(
            "absolute bottom-0 right-0 rounded-full border-white",
            jc[e],
            Lc[o]
          )
        }
      )
    ] });
  }
);
ci.displayName = "Avatar";
const Bc = {
  info: "bg-info/10 border-info/30 text-info-dark",
  success: "bg-success/10 border-success/30 text-success-dark",
  warning: "bg-warning/10 border-warning/30 text-warning-dark",
  error: "bg-error/10 border-error/30 text-error-dark"
}, Vc = {
  info: ii,
  success: oi,
  warning: ai,
  error: ri
}, Fc = ae(
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
    const l = Vc[e];
    return /* @__PURE__ */ I(
      "div",
      {
        ref: c,
        role: "alert",
        className: O(
          "flex gap-3 p-4 rounded-lg border",
          Bc[e],
          a
        ),
        ...s,
        children: [
          !i && /* @__PURE__ */ m(l, { className: "flex-shrink-0 w-5 h-5 mt-0.5" }),
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
              children: /* @__PURE__ */ m(yt, { className: "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
Fc.displayName = "Alert";
const li = ({
  item: e,
  collapsed: t,
  level: n = 0,
  activeId: r,
  onItemClick: o
}) => {
  const [i, a] = be(!1), s = e.children && e.children.length > 0, c = e.active || e.id === r, l = () => {
    var u;
    s ? a(!i) : (o == null || o(e), (u = e.onClick) == null || u.call(e));
  }, p = /* @__PURE__ */ I(qe, { children: [
    /* @__PURE__ */ m("span", { className: "flex-shrink-0 w-4 h-4 flex items-center justify-center text-[16px]", children: e.icon || /* @__PURE__ */ m("span", { className: "w-1" }) }),
    !t && /* @__PURE__ */ I(qe, { children: [
      /* @__PURE__ */ m("span", { className: "flex-1 truncate text-[13px]", children: e.label }),
      e.badge && /* @__PURE__ */ m("span", { className: "px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-accent text-white", children: e.badge }),
      s && /* @__PURE__ */ m(
        er,
        {
          className: O(
            "w-3.5 h-3.5 transition-transform",
            i && "rotate-180"
          )
        }
      )
    ] })
  ] }), d = O(
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
  return /* @__PURE__ */ I("div", { children: [
    e.href ? /* @__PURE__ */ m("a", { href: e.href, className: d, onClick: l, children: p }) : /* @__PURE__ */ m("button", { type: "button", className: O(d, "w-full text-left"), onClick: l, children: p }),
    s && i && !t && /* @__PURE__ */ m("div", { className: "mt-1 space-y-1", children: e.children.map((u) => /* @__PURE__ */ m(
      li,
      {
        item: u,
        collapsed: t,
        level: n + 1,
        activeId: r,
        onItemClick: o
      },
      u.id
    )) })
  ] });
}, di = ae(
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
    className: p,
    ...d
  }, u) => {
    const f = t, h = n ?? t;
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
        ...d,
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
                  children: h || /* @__PURE__ */ m("span", { className: "text-xs text-white", children: "Logo" })
                }
              ) : /* @__PURE__ */ I(qe, { children: [
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
const pi = ae(
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
    className: h,
    ...b
  }, x) => /* @__PURE__ */ I(
    "header",
    {
      ref: x,
      className: O(
        "flex items-center justify-between h-16 px-6 bg-white border-b border-neutral-200",
        h
      ),
      ...b,
      children: [
        /* @__PURE__ */ I("div", { className: "flex items-center gap-4", children: [
          u && /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              onClick: d,
              className: "p-2 rounded-lg hover:bg-neutral-100 lg:hidden",
              "aria-label": "Toggle menu",
              children: /* @__PURE__ */ m(Hs, { className: "w-5 h-5 text-neutral-600" })
            }
          ),
          /* @__PURE__ */ I("div", { className: "flex flex-col", children: [
            t,
            e && /* @__PURE__ */ m("h1", { className: "text-lg font-semibold text-neutral-900", children: e })
          ] })
        ] }),
        /* @__PURE__ */ I("div", { className: "flex items-center gap-4", children: [
          r && /* @__PURE__ */ I("div", { className: "relative hidden md:block", children: [
            /* @__PURE__ */ m(tc, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" }),
            /* @__PURE__ */ m(
              "input",
              {
                type: "search",
                placeholder: n,
                value: o,
                onChange: (w) => i == null ? void 0 : i(w.target.value),
                className: O(
                  "w-64 pl-10 pr-4 py-2 text-sm rounded-lg",
                  "bg-neutral-100 border-none",
                  "placeholder:text-neutral-400",
                  "focus:outline-none focus:ring-2 focus:ring-primary"
                )
              }
            )
          ] }),
          f,
          a && /* @__PURE__ */ I(
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
          l && /* @__PURE__ */ I(
            "button",
            {
              type: "button",
              onClick: p,
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
                /* @__PURE__ */ I("div", { className: "hidden lg:flex flex-col items-start", children: [
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
const zc = ae(
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
    headerBreadcrumb: p,
    user: d,
    onUserClick: u,
    notificationCount: f,
    onNotificationClick: h,
    showSearch: b = !0,
    searchValue: x,
    onSearchChange: w,
    headerActions: E,
    header: N,
    hideSidebar: y = !1,
    hideHeader: v = !1,
    rightPanel: D,
    rightPanelWidth: A = "360px",
    className: M,
    ...U
  }, j) => {
    const [X, B] = be(!1), [H, Y] = be(!1), K = !!t, me = !!N;
    return /* @__PURE__ */ I("div", { ref: j, className: O("flex h-screen bg-neutral-50", M), ...U, children: [
      !y && /* @__PURE__ */ I(qe, { children: [
        !K && H && /* @__PURE__ */ m(
          "div",
          {
            className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
            onClick: () => Y(!1)
          }
        ),
        /* @__PURE__ */ m(
          "div",
          {
            className: O(
              "fixed lg:static inset-y-0 left-0 z-50 lg:z-auto",
              "transform lg:transform-none transition-transform duration-300",
              !K && H ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
              K && "translate-x-0"
            ),
            children: K ? t : /* @__PURE__ */ m(
              di,
              {
                items: n,
                logo: r,
                logoCollapsed: o,
                systemName: i,
                footer: a,
                collapsed: X,
                onCollapsedChange: B,
                activeId: s,
                onItemClick: (ve) => {
                  c == null || c(ve), Y(!1);
                }
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ I("div", { className: "flex-1 flex flex-col min-w-0", children: [
        !v && (me ? N : /* @__PURE__ */ m(
          pi,
          {
            title: l,
            breadcrumb: p,
            showSearch: b,
            searchValue: x,
            onSearchChange: w,
            showNotifications: !0,
            notificationCount: f,
            onNotificationClick: h,
            user: d,
            onUserClick: u,
            showMenuToggle: !y,
            onMenuToggle: () => Y(!H),
            actions: E
          }
        )),
        /* @__PURE__ */ I("div", { className: "flex-1 flex overflow-hidden", children: [
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
zc.displayName = "Layout";
const Gc = ae(
  ({
    items: e,
    showHomeIcon: t = !1,
    separator: n,
    maxItems: r,
    className: o,
    ...i
  }, a) => {
    const s = () => n || /* @__PURE__ */ m(ni, { className: "w-4 h-4 text-neutral-400 mx-2" }), c = (d, u, f) => {
      const h = /* @__PURE__ */ I(qe, { children: [
        u === 0 && t && /* @__PURE__ */ m(Ms, { className: "w-4 h-4 mr-1" }),
        d.icon && /* @__PURE__ */ m("span", { className: "mr-1", children: d.icon }),
        d.label
      ] }), b = O(
        "inline-flex items-center text-sm",
        f ? "font-medium text-neutral-900" : "text-neutral-500 hover:text-neutral-700 transition-colors"
      );
      return d.href && !f ? /* @__PURE__ */ m("a", { href: d.href, className: b, children: h }) : /* @__PURE__ */ m("span", { className: b, children: h });
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
      return /* @__PURE__ */ I("li", { className: "inline-flex items-center", children: [
        c(d, u, f),
        !f && s()
      ] }, u);
    }) }) });
  }
);
Gc.displayName = "Breadcrumb";
function Wc({
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
}, h) {
  const b = (y, v) => typeof n == "function" ? n(y) : String(y[n] ?? v), x = (y, v, D) => v.render ? v.render(y, D) : v.accessor ? String(y[v.accessor] ?? "") : "", w = (y) => {
    if (!y.sortable || !i) return;
    let v = "asc";
    r === y.key && (o === "asc" ? v = "desc" : o === "desc" && (v = null)), i(y.key, v);
  }, E = (y) => {
    if (!y.sortable) return null;
    const v = r === y.key, D = O(
      "w-4 h-4 ml-1",
      v ? "text-white" : "text-white/60"
    );
    return v && o === "asc" ? /* @__PURE__ */ m(ps, { className: D }) : v && o === "desc" ? /* @__PURE__ */ m(ss, { className: D }) : /* @__PURE__ */ m(ls, { className: D });
  }, N = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  return /* @__PURE__ */ m("div", { className: "overflow-x-auto", children: /* @__PURE__ */ I(
    "table",
    {
      ref: h,
      className: O("w-full border-collapse", u),
      ...f,
      children: [
        /* @__PURE__ */ m("thead", { className: "bg-primary text-white", children: /* @__PURE__ */ m("tr", { children: e.map((y) => /* @__PURE__ */ m(
          "th",
          {
            className: O(
              "font-semibold text-white text-sm",
              d ? "px-3 py-2" : "px-4 py-3",
              N[y.align || "left"],
              y.sortable && "cursor-pointer select-none hover:bg-primary-dark"
            ),
            style: { width: y.width },
            onClick: () => w(y),
            children: /* @__PURE__ */ I("div", { className: O(
              "flex items-center",
              y.align === "center" && "justify-center",
              y.align === "right" && "justify-end"
            ), children: [
              y.header,
              E(y)
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
        ) }) : t.map((y, v) => /* @__PURE__ */ m(
          "tr",
          {
            className: O(
              "transition-colors",
              l && v % 2 === 1 && "bg-neutral-50",
              p && "hover:bg-neutral-50",
              a && "cursor-pointer"
            ),
            onClick: () => a == null ? void 0 : a(y, v),
            children: e.map((D) => /* @__PURE__ */ m(
              "td",
              {
                className: O(
                  "text-neutral-700 text-sm",
                  d ? "px-3 py-2" : "px-4 py-3",
                  N[D.align || "left"]
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
const Yg = ae(Wc), ui = Qo(null), qc = {
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
}, Uc = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg"
}, Hc = ae(
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
    ), f = t ?? d, h = qc[o], b = (w) => {
      t === void 0 && u(w), r == null || r(w);
    };
    return /* @__PURE__ */ m(ui.Provider, { value: { activeId: f }, children: /* @__PURE__ */ I("div", { ref: p, className: s, ...l, children: [
      /* @__PURE__ */ m(
        "div",
        {
          role: "tablist",
          className: O(
            "flex",
            h.list,
            i && "w-full"
          ),
          children: e.map((w) => /* @__PURE__ */ I(
            "button",
            {
              role: "tab",
              type: "button",
              "aria-selected": f === w.id,
              "aria-controls": `tabpanel-${w.id}`,
              disabled: w.disabled,
              onClick: () => b(w.id),
              className: O(
                "flex items-center justify-center gap-2 font-medium transition-all min-w-0",
                h.tab,
                Uc[a],
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
                    className: O(
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
Hc.displayName = "Tabs";
const Yc = ae(
  ({ id: e, children: t, className: n, ...r }, o) => {
    const i = Ut(ui);
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
Yc.displayName = "TabPanel";
const Br = {
  sm: "h-8 min-w-8 text-sm",
  md: "h-10 min-w-10 text-base",
  lg: "h-12 min-w-12 text-lg"
}, Kc = {
  sm: 14,
  md: 16,
  lg: 20
}, Xc = ae(
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
    className: p,
    ...d
  }, u) => {
    const h = (() => {
      const v = [], A = r * 2 + 3 + 2;
      if (t <= A)
        return Array.from({ length: t }, (B, H) => H + 1);
      const M = Math.max(e - r, 1), U = Math.min(e + r, t), j = M > 2, X = U < t - 1;
      if (!j && X) {
        const B = 1 + 2 * r + 1;
        for (let H = 1; H <= B; H++) v.push(H);
        v.push("ellipsis"), v.push(t);
      } else if (j && !X) {
        v.push(1), v.push("ellipsis");
        const B = t - (2 * r + 1);
        for (let H = B; H <= t; H++) v.push(H);
      } else {
        v.push(1), v.push("ellipsis");
        for (let B = M; B <= U; B++) v.push(B);
        v.push("ellipsis"), v.push(t);
      }
      return v;
    })(), b = Kc[l], x = O(
      "flex items-center justify-center rounded-md transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
      Br[l],
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
        className: O(
          x,
          "px-3",
          D ? "bg-primary text-white" : "text-neutral-600 hover:bg-neutral-100"
        ),
        children: v
      }
    ), E = ({
      direction: v,
      double: D
    }) => {
      const A = v === "prev", M = D ? A ? 1 : t : A ? e - 1 : e + 1, U = c || (A ? e === 1 : e === t), j = D ? A ? ws : Ns : A ? bs : ni;
      return /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          onClick: () => !U && n(M),
          disabled: U,
          "aria-label": D ? A ? "First page" : "Last page" : A ? "Previous page" : "Next page",
          className: O(
            x,
            U ? "text-neutral-300 cursor-not-allowed" : "text-neutral-600 hover:bg-neutral-100"
          ),
          children: /* @__PURE__ */ m(j, { size: b })
        }
      );
    }, N = a && s ? (e - 1) * s + 1 : void 0, y = a && s ? Math.min(e * s, a) : void 0;
    return /* @__PURE__ */ I(
      "nav",
      {
        ref: u,
        role: "navigation",
        "aria-label": "Pagination",
        className: O("flex items-center gap-2", p),
        ...d,
        children: [
          i && a !== void 0 && /* @__PURE__ */ I("span", { className: "text-sm text-neutral-500 mr-4", children: [
            N,
            "-",
            y,
            " of ",
            a
          ] }),
          o && /* @__PURE__ */ m(E, { direction: "prev", double: !0 }),
          /* @__PURE__ */ m(E, { direction: "prev" }),
          /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: h.map(
            (v, D) => v === "ellipsis" ? /* @__PURE__ */ m(
              "span",
              {
                className: O("px-2 text-neutral-400", Br[l]),
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
          /* @__PURE__ */ m(E, { direction: "next" }),
          o && /* @__PURE__ */ m(E, { direction: "next", double: !0 })
        ]
      }
    );
  }
);
Xc.displayName = "Pagination";
const Jc = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-4xl"
}, fi = ae(
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
    const h = ce(
      (b) => {
        b.key === "Escape" && c && t();
      },
      [c, t]
    );
    return Ee(() => (e && (document.addEventListener("keydown", h), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", h), document.body.style.overflow = "";
    }), [e, h]), e ? /* @__PURE__ */ I(
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
                    Jc[a],
                    d
                  ),
                  onClick: (b) => b.stopPropagation(),
                  ...u,
                  children: [
                    (n || l) && /* @__PURE__ */ I("div", { className: "flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark rounded-t-lg", children: [
                      /* @__PURE__ */ I("div", { children: [
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
                          children: /* @__PURE__ */ m(yt, { className: "w-5 h-5" })
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
const Zc = ({
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
    footer: /* @__PURE__ */ I(qe, { children: [
      /* @__PURE__ */ m($t, { variant: "ghost", onClick: i, disabled: a, children: n }),
      /* @__PURE__ */ m($t, { variant: r, onClick: o, loading: a, children: t })
    ] }),
    children: /* @__PURE__ */ m("p", { className: "text-neutral-700", children: e })
  }
);
Zc.displayName = "ConfirmModal";
const Qc = {
  info: "bg-info text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-error text-white"
}, el = {
  info: ii,
  success: oi,
  warning: ai,
  error: ri
}, mi = ae(
  ({ toast: e, onClose: t, className: n, ...r }, o) => {
    const [i, a] = be(!1), s = el[e.variant];
    Ee(() => {
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
    return /* @__PURE__ */ I(
      "div",
      {
        ref: o,
        role: "alert",
        className: O(
          "flex items-start gap-3 p-4 rounded-lg shadow-lg min-w-[320px] max-w-md",
          "transition-all duration-200",
          i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          Qc[e.variant],
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
              children: /* @__PURE__ */ m(yt, { className: "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
mi.displayName = "Toast";
const tl = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, nl = ({
  position: e = "top-right",
  toasts: t,
  onClose: n
}) => /* @__PURE__ */ m(
  "div",
  {
    className: O(
      "fixed z-50 flex flex-col gap-2",
      tl[e]
    ),
    children: t.map((r) => /* @__PURE__ */ m(mi, { toast: r, onClose: n }, r.id))
  }
), gi = Qo(null), Kg = ({ children: e, position: t = "top-right" }) => {
  const [n, r] = be([]), o = ce((p) => {
    const d = Math.random().toString(36).slice(2, 9);
    return r((u) => [...u, { ...p, id: d }]), d;
  }, []), i = ce((p) => {
    r((d) => d.filter((u) => u.id !== p));
  }, []), a = ce(
    (p, d) => o({ variant: "success", message: p, title: d }),
    [o]
  ), s = ce(
    (p, d) => o({ variant: "error", message: p, title: d }),
    [o]
  ), c = ce(
    (p, d) => o({ variant: "warning", message: p, title: d }),
    [o]
  ), l = ce(
    (p, d) => o({ variant: "info", message: p, title: d }),
    [o]
  );
  return /* @__PURE__ */ I(gi.Provider, { value: { toasts: n, addToast: o, removeToast: i, success: a, error: s, warning: c, info: l }, children: [
    e,
    /* @__PURE__ */ m(nl, { position: t, toasts: n, onClose: i })
  ] });
}, Xg = () => {
  const e = Ut(gi);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, rl = ae(
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
  }, h) => {
    const [b, x] = be(""), [w, E] = be(""), [N, y] = be(!1), [v, D] = be(!1), M = /* @__PURE__ */ I("form", { onSubmit: (U) => {
      U.preventDefault(), i == null || i(b, w);
    }, className: "space-y-6", children: [
      /* @__PURE__ */ I("div", { className: "text-center mb-8", children: [
        (e || t) && /* @__PURE__ */ I("div", { className: "flex justify-center mb-6", children: [
          /* @__PURE__ */ m("div", { className: "md:hidden", children: e }),
          /* @__PURE__ */ m("div", { className: "hidden md:block", children: t || e })
        ] }),
        /* @__PURE__ */ m("h1", { className: "text-2xl font-bold text-neutral-900", children: r }),
        /* @__PURE__ */ m("p", { className: "mt-2 text-neutral-500", children: o })
      ] }),
      s && /* @__PURE__ */ m("div", { className: "p-3 rounded-lg bg-error/10 border border-error/20 text-error text-sm", children: s }),
      /* @__PURE__ */ I("div", { children: [
        /* @__PURE__ */ m("label", { htmlFor: "email", className: "block text-sm font-medium text-neutral-700 mb-1", children: "Correo electrónico" }),
        /* @__PURE__ */ m(
          jn,
          {
            id: "email",
            type: "email",
            value: b,
            onChange: (U) => x(U.target.value),
            placeholder: "tu@email.com",
            leftIcon: /* @__PURE__ */ m(qs, { className: "w-5 h-5" }),
            required: !0,
            disabled: a
          }
        )
      ] }),
      /* @__PURE__ */ I("div", { children: [
        /* @__PURE__ */ m("label", { htmlFor: "password", className: "block text-sm font-medium text-neutral-700 mb-1", children: "Contraseña" }),
        /* @__PURE__ */ m(
          jn,
          {
            id: "password",
            type: N ? "text" : "password",
            value: w,
            onChange: (U) => E(U.target.value),
            placeholder: "••••••••",
            leftIcon: /* @__PURE__ */ m(Gs, { className: "w-5 h-5" }),
            rightIcon: /* @__PURE__ */ m(
              "button",
              {
                type: "button",
                onClick: () => y(!N),
                className: "text-neutral-400 hover:text-neutral-600",
                children: N ? /* @__PURE__ */ m(Cs, { className: "w-5 h-5" }) : /* @__PURE__ */ m(_s, { className: "w-5 h-5" })
              }
            ),
            required: !0,
            disabled: a
          }
        )
      ] }),
      /* @__PURE__ */ I("div", { className: "flex items-center justify-between", children: [
        l && /* @__PURE__ */ I("label", { className: "flex items-center gap-2 cursor-pointer", children: [
          /* @__PURE__ */ m(
            "input",
            {
              type: "checkbox",
              checked: v,
              onChange: (U) => D(U.target.checked),
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
    return d === "split" ? /* @__PURE__ */ I(
      "div",
      {
        ref: h,
        className: O("min-h-screen flex", u),
        ...f,
        children: [
          /* @__PURE__ */ I("div", { className: "hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sidebar via-primary to-accent p-12 flex-col justify-between", children: [
            /* @__PURE__ */ m("div", { children: (n || t || e) && /* @__PURE__ */ m("div", { className: "mb-8", children: n || t || e }) }),
            /* @__PURE__ */ I("div", { className: "text-white", children: [
              /* @__PURE__ */ m("h2", { className: "text-4xl font-bold mb-4", children: "Bienvenido de vuelta" }),
              /* @__PURE__ */ m("p", { className: "text-white/80 text-lg", children: "Accede a tu panel de administración y gestiona tu plataforma de manera eficiente." })
            ] }),
            /* @__PURE__ */ m("div", { className: "text-white/50 text-sm", children: "© 2024 Omnitok. Todos los derechos reservados." })
          ] }),
          /* @__PURE__ */ m("div", { className: "w-full lg:w-1/2 flex items-center justify-center p-8 bg-white", children: /* @__PURE__ */ m("div", { className: "w-full max-w-md", children: M }) })
        ]
      }
    ) : d === "centered" ? /* @__PURE__ */ m(
      "div",
      {
        ref: h,
        className: O(
          "min-h-screen flex items-center justify-center p-4 bg-neutral-100",
          u
        ),
        ...f,
        children: /* @__PURE__ */ m("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-xl p-8", children: M })
      }
    ) : /* @__PURE__ */ m(
      "div",
      {
        ref: h,
        className: O(
          "min-h-screen flex items-center justify-center p-4",
          "bg-gradient-to-br from-sidebar via-primary to-accent",
          u
        ),
        ...f,
        children: /* @__PURE__ */ m("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-2xl p-8", children: M })
      }
    );
  }
);
rl.displayName = "LoginPage";
function Oe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var ol = typeof Symbol == "function" && Symbol.observable || "@@observable", Vr = ol, Fr = () => Math.random().toString(36).substring(7).split("").join("."), il = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Fr()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Fr()}`
}, zr = il;
function al(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function sl(e) {
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
  if (dl(e))
    return "date";
  if (ll(e))
    return "error";
  const n = cl(e);
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
function cl(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function ll(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function dl(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Me(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = sl(e)), t;
}
function vi(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(2) : `Expected the root reducer to be a function. Instead, received: '${Me(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Oe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(1) : `Expected the enhancer to be a function. Instead, received: '${Me(n)}'`);
    return n(vi)(e, t);
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
    const E = s++;
    return a.set(E, x), function() {
      if (w) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Oe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        w = !1, l(), a.delete(E), i = null;
      }
    };
  }
  function u(x) {
    if (!al(x))
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
    return (i = a).forEach((E) => {
      E();
    }), x;
  }
  function f(x) {
    if (typeof x != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Oe(10) : `Expected the nextReducer to be a function. Instead, received: '${Me(x)}`);
    r = x, u({
      type: zr.REPLACE
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
          throw new Error(process.env.NODE_ENV === "production" ? Oe(11) : `Expected the observer to be an object. Instead, received: '${Me(w)}'`);
        function E() {
          const y = w;
          y.next && y.next(p());
        }
        return E(), {
          unsubscribe: x(E)
        };
      },
      [Vr]() {
        return this;
      }
    };
  }
  return u({
    type: zr.INIT
  }), {
    dispatch: u,
    subscribe: d,
    getState: p,
    replaceReducer: f,
    [Vr]: h
  };
}
function Gr(e, t) {
  return function(...n) {
    return t(e.apply(this, n));
  };
}
function Wr(e, t) {
  if (typeof e == "function")
    return Gr(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Oe(16) : `bindActionCreators expected an object or a function, but instead received: '${Me(e)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = Gr(o, t));
  }
  return n;
}
function hi(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function pl(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Oe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
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
function ul(e) {
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
var qr;
function fl() {
  if (qr) return ln;
  qr = 1;
  var e = pe;
  function t(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return ln.useSyncExternalStoreWithSelector = function(c, l, p, d, u) {
    var f = o(null);
    if (f.current === null) {
      var h = { hasValue: !1, value: null };
      f.current = h;
    } else h = f.current;
    f = a(
      function() {
        function x(v) {
          if (!w) {
            if (w = !0, E = v, v = d(v), u !== void 0 && h.hasValue) {
              var D = h.value;
              if (u(D, v))
                return N = D;
            }
            return N = v;
          }
          if (D = N, n(E, v)) return D;
          var A = d(v);
          return u !== void 0 && u(D, A) ? (E = v, D) : (E = v, N = A);
        }
        var w = !1, E, N, y = p === void 0 ? null : p;
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
var Ur;
function ml() {
  return Ur || (Ur = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, l) {
      return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = pe, n = typeof Object.is == "function" ? Object.is : e, r = t.useSyncExternalStore, o = t.useRef, i = t.useEffect, a = t.useMemo, s = t.useDebugValue;
    dn.useSyncExternalStoreWithSelector = function(c, l, p, d, u) {
      var f = o(null);
      if (f.current === null) {
        var h = { hasValue: !1, value: null };
        f.current = h;
      } else h = f.current;
      f = a(
        function() {
          function x(v) {
            if (!w) {
              if (w = !0, E = v, v = d(v), u !== void 0 && h.hasValue) {
                var D = h.value;
                if (u(D, v))
                  return N = D;
              }
              return N = v;
            }
            if (D = N, n(E, v))
              return D;
            var A = d(v);
            return u !== void 0 && u(D, A) ? (E = v, D) : (E = v, N = A);
          }
          var w = !1, E, N, y = p === void 0 ? null : p;
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
          h.hasValue = !0, h.value = b;
        },
        [b]
      ), s(b), b;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), dn;
}
process.env.NODE_ENV === "production" ? fl() : ml();
var bi = /* @__PURE__ */ Z.version.startsWith("19"), gl = /* @__PURE__ */ Symbol.for(
  bi ? "react.transitional.element" : "react.element"
), vl = /* @__PURE__ */ Symbol.for("react.portal"), xi = /* @__PURE__ */ Symbol.for("react.fragment"), yi = /* @__PURE__ */ Symbol.for("react.strict_mode"), wi = /* @__PURE__ */ Symbol.for("react.profiler"), tr = /* @__PURE__ */ Symbol.for("react.consumer"), nr = /* @__PURE__ */ Symbol.for("react.context"), rr = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ei = /* @__PURE__ */ Symbol.for("react.suspense"), Ni = /* @__PURE__ */ Symbol.for(
  "react.suspense_list"
), Ht = /* @__PURE__ */ Symbol.for("react.memo"), Di = /* @__PURE__ */ Symbol.for("react.lazy"), hl = /* @__PURE__ */ Symbol.for("react.offscreen"), bl = /* @__PURE__ */ Symbol.for(
  "react.client.reference"
), xl = rr, yl = Ht;
function wl(e) {
  return typeof e == "string" || typeof e == "function" || e === xi || e === wi || e === yi || e === Ei || e === Ni || e === hl || typeof e == "object" && e !== null && (e.$$typeof === Di || e.$$typeof === Ht || e.$$typeof === nr || e.$$typeof === tr || e.$$typeof === rr || e.$$typeof === bl || e.getModuleId !== void 0);
}
function Ln(e) {
  if (typeof e == "object" && e !== null) {
    const { $$typeof: t } = e;
    switch (t) {
      case gl:
        switch (e = e.type, e) {
          case xi:
          case wi:
          case yi:
          case Ei:
          case Ni:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case nr:
              case rr:
              case Di:
              case Ht:
                return e;
              case tr:
                return e;
              default:
                return t;
            }
        }
      case vl:
        return t;
    }
  }
}
function El(e) {
  return bi ? Ln(e) === tr : Ln(e) === nr;
}
function Nl(e) {
  return Ln(e) === Ht;
}
function or(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function pn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || or(
      `The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`
    ));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Dl(e, t, n) {
  pn(e, "mapStateToProps"), pn(t, "mapDispatchToProps"), pn(n, "mergeProps");
}
function Ol(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, l, p, d, u;
  function f(E, N) {
    return c = E, l = N, p = e(c, l), d = t(r, l), u = n(p, d, l), s = !0, u;
  }
  function h() {
    return p = e(c, l), t.dependsOnOwnProps && (d = t(r, l)), u = n(p, d, l), u;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(c, l)), t.dependsOnOwnProps && (d = t(r, l)), u = n(p, d, l), u;
  }
  function x() {
    const E = e(c, l), N = !a(E, p);
    return p = E, N && (u = n(p, d, l)), u;
  }
  function w(E, N) {
    const y = !i(N, l), v = !o(
      E,
      c,
      N,
      l
    );
    return c = E, l = N, y && v ? h() : y ? b() : v ? x() : u;
  }
  return function(N, y) {
    return s ? w(N, y) : f(N, y);
  };
}
function Sl(e, {
  initMapStateToProps: t,
  initMapDispatchToProps: n,
  initMergeProps: r,
  ...o
}) {
  const i = t(e, o), a = n(e, o), s = r(e, o);
  return process.env.NODE_ENV !== "production" && Dl(i, a, s), Ol(i, a, s, e, o);
}
function Cl(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function Il(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function Oi(e, t, n) {
  Il(e) || or(
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
function Hr(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Si(e, t) {
  return function(r, { displayName: o }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Hr(e);
      let l = i(s, c);
      return typeof l == "function" && (i.mapToProps = l, i.dependsOnOwnProps = Hr(l), l = i(s, c)), process.env.NODE_ENV !== "production" && Oi(l, o, t), l;
    }, i;
  };
}
function ir(e, t) {
  return (n, r) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`
    );
  };
}
function _l(e) {
  return e && typeof e == "object" ? Bn(
    (t) => (
      // @ts-ignore
      Cl(e, t)
    )
  ) : e ? typeof e == "function" ? (
    // @ts-ignore
    Si(e, "mapDispatchToProps")
  ) : ir(e, "mapDispatchToProps") : Bn((t) => ({
    dispatch: t
  }));
}
function Al(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Si(e, "mapStateToProps")
  ) : ir(e, "mapStateToProps") : Bn(() => ({}));
}
function kl(e, t, n) {
  return { ...n, ...e, ...t };
}
function Pl(e) {
  return function(n, { displayName: r, areMergedPropsEqual: o }) {
    let i = !1, a;
    return function(c, l, p) {
      const d = e(c, l, p);
      return i ? o(d, a) || (a = d) : (i = !0, a = d, process.env.NODE_ENV !== "production" && Oi(a, r, "mergeProps")), a;
    };
  };
}
function Rl(e) {
  return e ? typeof e == "function" ? Pl(e) : ir(e, "mergeProps") : () => kl;
}
function Tl(e) {
  e();
}
function $l() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Tl(() => {
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
var Yr = {
  notify() {
  },
  get: () => []
};
function Ci(e, t) {
  let n, r = Yr, o = 0, i = !1;
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
    h.onStateChange && h.onStateChange();
  }
  function l() {
    return i;
  }
  function p() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = $l());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Yr);
  }
  function u() {
    i || (i = !0, p());
  }
  function f() {
    i && (i = !1, d());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: u,
    tryUnsubscribe: f,
    getListeners: () => r
  };
  return h;
}
var Ml = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", jl = /* @__PURE__ */ Ml(), Ll = () => typeof navigator < "u" && navigator.product === "ReactNative", Bl = /* @__PURE__ */ Ll(), Vl = () => jl || Bl ? Z.useLayoutEffect : Z.useEffect, Mt = /* @__PURE__ */ Vl();
function Kr(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function un(e, t) {
  if (Kr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Kr(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
var Fl = {
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
}, zl = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Gl = {
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
}, Wl = {
  [xl]: Gl,
  [yl]: Ii
};
function Xr(e) {
  return Nl(e) ? Ii : Wl[e.$$typeof] || Fl;
}
var ql = Object.defineProperty, Ul = Object.getOwnPropertyNames, Jr = Object.getOwnPropertySymbols, Hl = Object.getOwnPropertyDescriptor, Yl = Object.getPrototypeOf, Zr = Object.prototype;
function Vn(e, t) {
  if (typeof t != "string") {
    if (Zr) {
      const i = Yl(t);
      i && i !== Zr && Vn(e, i);
    }
    let n = Ul(t);
    Jr && (n = n.concat(Jr(t)));
    const r = Xr(e), o = Xr(t);
    for (let i = 0; i < n.length; ++i) {
      const a = n[i];
      if (!zl[a] && !(o && o[a]) && !(r && r[a])) {
        const s = Hl(t, a);
        try {
          ql(e, a, s);
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
function Kl() {
  if (!Z.createContext) return {};
  const e = mn[fn] ?? (mn[fn] = /* @__PURE__ */ new Map());
  let t = e.get(Z.createContext);
  return t || (t = Z.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(Z.createContext, t)), t;
}
var _i = /* @__PURE__ */ Kl(), Xl = [null, null], Jl = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Zl(e, t, n) {
  Mt(() => e(...t), n);
}
function Ql(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function ed(e, t, n, r, o, i, a, s, c, l, p) {
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
    } catch (E) {
      w = E, u = E;
    }
    w || (u = null), x === i.current ? a.current || l() : (i.current = x, c.current = x, a.current = !0, p());
  };
  return n.onStateChange = f, n.trySubscribe(), f(), () => {
    if (d = !0, n.tryUnsubscribe(), n.onStateChange = null, u)
      throw u;
  };
}
function td(e, t) {
  return e === t;
}
var Qr = !1;
function nd(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = td,
  areOwnPropsEqual: i = un,
  areStatePropsEqual: a = un,
  areMergedPropsEqual: s = un,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = _i
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !Qr && (Qr = !0, or(
    'The `pure` option has been removed. `connect` is now always a "pure/memoized" component'
  ));
  const p = l, d = Al(e), u = _l(t), f = Rl(n), h = !!e;
  return (x) => {
    if (process.env.NODE_ENV !== "production" && !/* @__PURE__ */ wl(x))
      throw new Error(
        `You must pass a component to the function returned by connect. Instead received ${Jl(
          x
        )}`
      );
    const w = x.displayName || x.name || "Component", E = `Connect(${w})`, N = {
      shouldHandleStateChanges: h,
      displayName: E,
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
    function y(A) {
      const [M, U, j] = Z.useMemo(() => {
        const { reactReduxForwardedRef: C, ...fe } = A;
        return [A.context, C, fe];
      }, [A]), X = Z.useMemo(() => {
        let C = p;
        if (M != null && M.Consumer && process.env.NODE_ENV !== "production") {
          if (!/* @__PURE__ */ El(
            // @ts-ignore
            /* @__PURE__ */ Z.createElement(M.Consumer, null)
          ))
            throw new Error(
              "You must pass a valid React context consumer as `props.context`"
            );
          C = M;
        }
        return C;
      }, [M, p]), B = Z.useContext(X), H = !!A.store && !!A.store.getState && !!A.store.dispatch, Y = !!B && !!B.store;
      if (process.env.NODE_ENV !== "production" && !H && !Y)
        throw new Error(
          `Could not find "store" in the context of "${E}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${E} in connect options.`
        );
      const K = H ? A.store : B.store, me = Y ? B.getServerState : K.getState, ve = Z.useMemo(() => Sl(K.dispatch, N), [K]), [ue, te] = Z.useMemo(() => {
        if (!h) return Xl;
        const C = Ci(
          K,
          H ? void 0 : B.subscription
        ), fe = C.notifyNestedSubs.bind(C);
        return [C, fe];
      }, [K, H, B]), S = Z.useMemo(() => H ? B : {
        ...B,
        subscription: ue
      }, [H, B, ue]), P = Z.useRef(void 0), z = Z.useRef(j), G = Z.useRef(void 0), L = Z.useRef(!1), q = Z.useRef(!1), W = Z.useRef(
        void 0
      );
      Mt(() => (q.current = !0, () => {
        q.current = !1;
      }), []);
      const F = Z.useMemo(() => () => G.current && j === z.current ? G.current : ve(K.getState(), j), [K, j]), _ = Z.useMemo(() => (fe) => ue ? ed(
        h,
        K,
        ue,
        // @ts-ignore
        ve,
        z,
        P,
        L,
        q,
        G,
        te,
        fe
      ) : () => {
      }, [ue]);
      Zl(Ql, [
        z,
        P,
        L,
        j,
        G,
        te
      ]);
      let k;
      try {
        k = Z.useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          _,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          F,
          me ? () => ve(me(), j) : F
        );
      } catch (C) {
        throw W.current && (C.message += `
The error may be correlated with this previous error:
${W.current.stack}

`), C;
      }
      Mt(() => {
        W.current = void 0, G.current = void 0, P.current = k;
      });
      const $ = Z.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ Z.createElement(
          x,
          {
            ...k,
            ref: U
          }
        )
      ), [U, x, k]);
      return Z.useMemo(() => h ? /* @__PURE__ */ Z.createElement(X.Provider, { value: S }, $) : $, [X, $, S]);
    }
    const D = Z.memo(y);
    if (D.WrappedComponent = x, D.displayName = y.displayName = E, c) {
      const M = Z.forwardRef(
        function(j, X) {
          return /* @__PURE__ */ Z.createElement(D, { ...j, reactReduxForwardedRef: X });
        }
      );
      return M.displayName = E, M.WrappedComponent = x, /* @__PURE__ */ Vn(M, x);
    }
    return /* @__PURE__ */ Vn(D, x);
  };
}
var Ai = nd;
function rd(e) {
  const { children: t, context: n, serverState: r, store: o } = e, i = Z.useMemo(() => {
    const c = Ci(o), l = {
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
  }, [o, r]), a = Z.useMemo(() => o.getState(), [o]);
  Mt(() => {
    const { subscription: c } = i;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== o.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [i, a]);
  const s = n || _i;
  return /* @__PURE__ */ Z.createElement(s.Provider, { value: i }, t);
}
var od = rd, id = process.env.NODE_ENV === "production", gn = "Invariant failed";
function eo(e, t) {
  if (id)
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
}, ar = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, to = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, ad = function(t, n) {
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
}, sr = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? vn : r, i = t.border, a = i === void 0 ? vn : i, s = t.padding, c = s === void 0 ? vn : s, l = Pe(ar(n, o)), p = Pe(to(n, a)), d = Pe(to(p, c));
  return {
    marginBox: l,
    borderBox: Pe(n),
    paddingBox: p,
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
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? eo(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : eo()), o;
}, sd = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, jt = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = ad(r, n);
  return sr({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Lt = function(t, n) {
  return n === void 0 && (n = sd()), jt(t, n);
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
  return sr({
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
function Bt() {
  return Bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Bt.apply(null, arguments);
}
const cd = process.env.NODE_ENV === "production", ld = /[ \t]{2,}/g, dd = /^[ \t]*/gm, no = (e) => e.replace(ld, " ").replace(dd, "").trim(), pd = (e) => no(`
  %c@hello-pangea/dnd

  %c${no(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), ud = (e) => [pd(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], fd = "__@hello-pangea/dnd-disable-dev-warnings";
function Ri(e, t) {
  cd || typeof window < "u" && window[fd] || console[e](...ud(t));
}
const le = Ri.bind(null, "warn"), Fn = Ri.bind(null, "error");
function je() {
}
function md(e, t) {
  return {
    ...e,
    ...t
  };
}
function Ae(e, t, n) {
  const r = t.map((o) => {
    const i = md(n, o.options);
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
const gd = process.env.NODE_ENV === "production", ro = "Invariant failed";
class pt extends Error {
}
pt.prototype.toString = function() {
  return this.message;
};
function g(e, t) {
  throw gd ? new pt(ro) : new pt(`${ro}: ${t || ""}`);
}
class vd extends pe.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = je, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && le(`
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
const hd = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Vt = (e) => e + 1, bd = (e) => `
  You have lifted an item in position ${Vt(e.source.index)}
`, Ti = (e, t) => {
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
}, $i = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, xd = (e) => {
  const t = e.destination;
  if (t)
    return Ti(e.source, t);
  const n = e.combine;
  return n ? $i(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, oo = (e) => `
  The item has returned to its starting position
  of ${Vt(e.index)}
`, yd = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${oo(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Ti(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${$i(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${oo(e.source)}
  `;
}, Tt = {
  dragHandleUsageInstructions: hd,
  onDragStart: bd,
  onDragUpdate: xd,
  onDragEnd: yd
};
function wd(e, t) {
  return !!(e === t || Number.isNaN(e) && Number.isNaN(t));
}
function Mi(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (!wd(e[n], t[n]))
      return !1;
  return !0;
}
function J(e, t) {
  const n = be(() => ({
    inputs: t,
    result: e()
  }))[0], r = Q(!0), o = Q(n), a = r.current || !!(t && o.current.inputs && Mi(t, o.current.inputs)) ? o.current : {
    inputs: t,
    result: e()
  };
  return Ee(() => {
    r.current = !1, o.current = a;
  }, [a]), a.result;
}
function T(e, t) {
  return J(() => e, t);
}
const ye = {
  x: 0,
  y: 0
}, Ne = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Se = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Le = (e, t) => e.x === t.x && e.y === t.y, tt = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Ue = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, ut = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), io = (e, t) => Math.min(...t.map((n) => ut(e, n))), ji = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Ed = (e, t) => {
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
}), ao = (e) => [{
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
}], Nd = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Dd = (e, t) => t ? wt(e, t.scroll.diff.displacement) : e, Od = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, Sd = (e, t) => t && t.shouldClipSubject ? Ed(t.pageMarginBox, e) : Pe(e);
var Je = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = Dd(e.marginBox, r), i = Od(o, n, t), a = Sd(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, cr = (e, t) => {
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
function xe(e, t = Mi) {
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
const Li = xe((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Bi = xe((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Yt = xe((e) => Object.values(e)), Cd = xe((e) => Object.values(e));
var He = xe((e, t) => Cd(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function lr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Kt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Xt = xe((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), Id = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !lr(o))
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
  const p = l.findIndex((f) => f.descriptor.id === c);
  p === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Could not find displaced item in set") : g());
  const d = p - 1;
  if (d < 0)
    return null;
  const u = l[d];
  return a(u.descriptor.id);
}, nt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Vi = {
  point: ye,
  value: 0
}, ft = {
  invisible: {},
  visible: {},
  all: []
}, _d = {
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
}, Ad = (e) => {
  const t = ke(e.top, e.bottom), n = ke(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const dr = {
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
var kd = (e) => (t) => {
  const n = ke(t.top, t.bottom), r = ke(t.left, t.right);
  return (o) => e === dr ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const Pd = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : ye;
  return wt(e, n);
}, Rd = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, Td = (e, t, n) => n(t)(e), pr = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? Pd(e, t) : e;
  return Rd(i, t, o) && Td(i, n, o);
}, $d = (e) => pr({
  ...e,
  isVisibleThroughFrameFn: Fi
}), Gi = (e) => pr({
  ...e,
  isVisibleThroughFrameFn: Ad
}), Md = (e) => pr({
  ...e,
  isVisibleThroughFrameFn: kd(e.destination.axis)
}), jd = (e, t, n) => {
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
function Ld(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Pe(ar(n, r));
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
    const l = Ld(c, n), p = c.descriptor.id;
    if (s.all.push(p), !$d({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const u = jd(p, i, o), f = {
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
function Bd(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function so({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = Bd(e, {
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
  const c = nt(e, n);
  if (a == null)
    return so({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const l = t.find((h) => h.descriptor.index === a);
  if (!l)
    return so({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const p = Xt(e, t), d = t.indexOf(l), u = p.slice(d);
  return {
    displaced: mt({
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
function Be(e, t) {
  return !!t.effected[e];
}
var Vd = ({
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
}, Fd = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, a = n[0].descriptor.index, s = n[n.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, zd = ({
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
    const d = Fd({
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
  const p = Vd({
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
}, Gd = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Be(n, t) ? o ? ye : tt(r.point) : o ? r.point : ye;
}, Wd = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = Kt(t);
  r || (process.env.NODE_ENV, g());
  const o = r.draggableId, i = n[o].page.borderBox.center, a = Gd({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Ne(i, a);
};
const Wi = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, qd = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, ur = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, co = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.end] + Wi(e, n), ur(e, t.marginBox, n)), lo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ue(e.line, t.marginBox[e.start] - qd(e, n), ur(e, t.marginBox, n)), Ud = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => Ue(e.line, t.contentBox[e.start] + Wi(e, n), ur(e, t.contentBox, n));
var Hd = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = He(r.descriptor.id, n), a = t.page, s = r.axis;
  if (!i.length)
    return Ud({
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
    if (Be(p, o))
      return lo({
        axis: s,
        moveRelativeTo: u.page,
        isMoving: a
      });
    const f = jt(u.page, l.point);
    return lo({
      axis: s,
      moveRelativeTo: f,
      isMoving: a
    });
  }
  const d = i[i.length - 1];
  if (d.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Be(d.descriptor.id, o)) {
    const u = jt(d.page, tt(o.displacedBy.point));
    return co({
      axis: s,
      moveRelativeTo: u,
      isMoving: a
    });
  }
  return co({
    axis: s,
    moveRelativeTo: d.page,
    isMoving: a
  });
}, zn = (e, t) => {
  const n = e.frame;
  return n ? Ne(t, n.scroll.diff.displacement) : t;
};
const Yd = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !n || !a ? i : a.type === "REORDER" ? Hd({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : Wd({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var Jt = (e) => {
  const t = Yd(e), n = e.droppable;
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
function po(e, t) {
  return e.map((n) => t[n]);
}
function Kd(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var Xd = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = qi(t, Ne(t.scroll.current, o)), a = n.frame ? cr(n, Ne(n.frame.scroll.current, o)) : n, s = e.displaced, c = mt({
    afterDragging: po(s.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), l = mt({
    afterDragging: po(s.all, r),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), p = {}, d = {}, u = [s, c, l];
  return s.all.forEach((h) => {
    const b = Kd(h, u);
    if (b) {
      d[h] = b;
      return;
    }
    p[h] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: p,
      visible: d
    }
  };
}, Jd = (e, t) => Ne(e.scroll.diff.displacement, t), fr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = Jd(n, e), o = Se(r, t.page.borderBox.center);
  return Ne(t.client.borderBox.center, o);
}, Ui = ({
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
  return i ? Md(c) : Gi(c);
}, Zd = ({
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
  const l = He(n.descriptor.id, r), p = nt(t, n), d = Id({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || zd({
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
  if (Ui({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: u,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: fr({
        pageBorderBoxCenter: u,
        draggable: t,
        viewport: i
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const h = Se(u, a), b = Xd({
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
const De = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get clipped area from droppable") : g()), t;
};
var Qd = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const a = n.axis, s = ke(i[a.start], i[a.end]), c = Yt(r).filter((p) => p !== n).filter((p) => p.isEnabled).filter((p) => !!p.subject.active).filter((p) => Fi(o.frame)(De(p))).filter((p) => {
    const d = De(p);
    return e ? i[a.crossAxisEnd] < d[a.crossAxisEnd] : d[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((p) => {
    const d = De(p), u = ke(d[a.start], d[a.end]);
    return s(d[a.start]) || s(d[a.end]) || u(i[a.start]) || u(i[a.end]);
  }).sort((p, d) => {
    const u = De(p)[a.crossAxisStart], f = De(d)[a.crossAxisStart];
    return e ? u - f : f - u;
  }).filter((p, d, u) => De(p)[a.crossAxisStart] === De(u[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const l = c.filter((p) => ke(De(p)[a.start], De(p)[a.end])(t[a.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((p, d) => De(p)[a.start] - De(d)[a.start])[0] : c.sort((p, d) => {
    const u = io(t, ao(De(p))), f = io(t, ao(De(d)));
    return u !== f ? u - f : De(p)[a.start] - De(d)[a.start];
  })[0];
};
const uo = (e, t) => {
  const n = e.page.borderBox.center;
  return Be(e.descriptor.id, t) ? Se(n, t.displacedBy.point) : n;
}, ep = (e, t) => {
  const n = e.page.borderBox;
  return Be(e.descriptor.id, t) ? wt(n, tt(t.displacedBy.point)) : n;
};
var tp = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((a) => Gi({
  target: ep(a, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = ut(e, zn(n, uo(a, o))), l = ut(e, zn(n, uo(s, o)));
  return c < l ? -1 : l < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Et = xe(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: Ue(t.line, r)
  };
});
const np = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return Ue(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = He(e.descriptor.id, n).reduce((l, p) => l + p.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : Ue(r.line, c);
}, Hi = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Yi = (e, t, n) => {
  const r = e.frame;
  nt(t, e) && (process.env.NODE_ENV !== "production" ? g(!1, "Should not add placeholder space to home list") : g()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot add placeholder size to a subject when it already has one") : g());
  const o = Et(e.axis, t.displaceBy).point, i = np(e, o, n), a = {
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
  const s = i ? Ne(r.scroll.max, i) : r.scroll.max, c = Hi(r, s), l = Je({
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
}, rp = (e) => {
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
var op = ({
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
    }, u = Jt({
      impact: d,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), f = nt(r, i) ? i : Yi(i, r, o);
    return Ui({
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
    last: ft,
    index: l
  });
}, ip = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = Qd({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const l = He(c.descriptor.id, o), p = tp({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: l,
    afterCritical: s
  }), d = op({
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
    clientSelection: fr({
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
const ap = (e, t) => {
  const n = Ce(e);
  return n ? t[n] : null;
};
var sp = ({
  state: e,
  type: t
}) => {
  const n = ap(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], p = e.current.page.borderBoxCenter, {
    draggables: d,
    droppables: u
  } = e.dimensions;
  return s ? Zd({
    isMovingForward: c,
    previousPageBorderBoxCenter: p,
    draggable: l,
    destination: i,
    draggables: d,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : ip({
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
function Ge(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Ki(e) {
  const t = ke(e.top, e.bottom), n = ke(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function cp(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function lp({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const a = i.axis, s = Ue(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: ut(r, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function dp({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = Yt(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !cp(e, i))
      return !1;
    if (Ki(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], l = e[a.crossAxisEnd], p = ke(i[a.crossAxisStart], i[a.crossAxisEnd]), d = p(c), u = p(l);
    return !d && !u ? !0 : d ? c < s : l > s;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : lp({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const Xi = (e, t) => Pe(wt(e, t));
var pp = (e, t) => {
  const n = e.frame;
  return n ? Xi(t, n.scroll.diff.value) : t;
};
function Ji({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function up({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var fp = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = n.axis, c = Et(n.axis, t.displaceBy), l = c.value, p = e[s.start], d = e[s.end], f = Xt(t, r).find((b) => {
    const x = b.descriptor.id, w = b.page.borderBox.center[s.line], E = Be(x, a), N = Ji({
      displaced: o,
      id: x
    });
    return E ? N ? d <= w : p < w - l : N ? d <= w + l : p < w;
  }) || null, h = up({
    draggable: t,
    closest: f,
    inHomeList: nt(t, n)
  });
  return Ft({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: c,
    index: h
  });
};
const mp = 4;
var gp = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const a = r.axis, s = Et(r.axis, e.displaceBy), c = s.value, l = t[a.start], p = t[a.end], u = Xt(e, o).find((h) => {
    const b = h.descriptor.id, x = h.page.borderBox, E = x[a.size] / mp, N = Be(b, i), y = Ji({
      displaced: n.displaced,
      id: b
    });
    return N ? y ? p > x[a.start] + E && p < x[a.end] - E : l > x[a.start] - c + E && l < x[a.end] - c - E : y ? p > x[a.start] + c + E && p < x[a.end] + c - E : l > x[a.start] + E && l < x[a.end] - E;
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
}, Zi = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = Xi(t.page.borderBox, e), c = dp({
    pageBorderBox: s,
    draggable: t,
    droppables: r
  });
  if (!c)
    return _d;
  const l = r[c], p = He(l.descriptor.id, n), d = pp(l, s);
  return gp({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: p,
    afterCritical: a
  }) || fp({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    destination: l,
    insideDestination: p,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, mr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const vp = ({
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
  const a = rp(i);
  return mr(n, a);
};
var hp = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = vp({
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
  return mr(i, c);
}, ct = ({
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
  const f = s.draggables[e.critical.draggable.id], h = o || Zi({
    pageOffset: d.offset,
    draggable: f,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), b = hp({
    draggable: f,
    impact: h,
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
    impact: h,
    viewport: a,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function bp(e, t) {
  return e.map((n) => t[n]);
}
var Qi = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = bp(i.all, n), s = mt({
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
  return fr({
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
  const p = s[l], d = Qi({
    impact: r,
    viewport: o,
    destination: p,
    draggables: a
  }), u = ea({
    impact: d,
    draggable: c,
    droppable: p,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return ct({
    impact: d,
    clientSelection: u,
    state: e,
    dimensions: i,
    viewport: o
  });
}, xp = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), na = ({
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
        destination: xp(e.descriptor)
      }
    },
    afterCritical: l
  };
}, yp = (e, t) => ({
  draggables: e.draggables,
  droppables: mr(e.droppables, t)
});
const Nt = (e) => {
  process.env.NODE_ENV;
}, Dt = (e) => {
  process.env.NODE_ENV;
};
var wp = ({
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
}, Ep = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Expected Droppable to have a frame") : g()), t;
}, Np = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = Ep(a).scroll.diff.value, l = Ne(r, c);
    return wp({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, Dp = ({
  state: e,
  published: t
}) => {
  Nt();
  const n = t.modified.map((w) => {
    const E = e.dimensions.droppables[w.droppableId];
    return cr(E, w.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Li(n)
  }, o = Bi(Np({
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
  } = na({
    draggable: l,
    home: p,
    draggables: i,
    viewport: e.viewport
  }), f = c && c.isCombineEnabled ? e.impact : d, h = Zi({
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
    impact: h,
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
  const r = yp(e.dimensions, t);
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
const fo = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Op = (e = fo, t) => {
  if (t.type === "FLUSH")
    return {
      ...fo,
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
      offset: ye
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : g()), Dp({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Ge(e) || (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} not permitted in phase ${e.phase}`) : g());
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
    Ge(e) || (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} not permitted in phase ${e.phase}`) : g());
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = cr(o, r);
    return hn(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Ge(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Attempting to move in an unsupported phase ${e.phase}`) : g());
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
    Ge(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Attempting to move in an unsupported phase ${e.phase}`) : g());
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
    Ge(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot move by window in phase ${e.phase}`) : g()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? g(!1, "Window scrolling is currently not supported for fixed lists") : g());
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
    if (!Ge(e))
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
    const n = sp({
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
function ie(e, t) {
  return e instanceof Object && "type" in e && e.type === t;
}
const Sp = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Cp = (e) => ({
  type: "LIFT",
  payload: e
}), Ip = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), _p = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), Ap = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), kp = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), Pp = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), Rp = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), ra = (e) => ({
  type: "MOVE",
  payload: e
}), Tp = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), $p = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Mp = () => ({
  type: "MOVE_UP",
  payload: null
}), jp = () => ({
  type: "MOVE_DOWN",
  payload: null
}), Lp = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Bp = () => ({
  type: "MOVE_LEFT",
  payload: null
}), gr = () => ({
  type: "FLUSH",
  payload: null
}), Vp = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), vr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), oa = (e) => ({
  type: "DROP",
  payload: e
}), Fp = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ia = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function zp(e) {
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
  process.env.NODE_ENV !== "production" && le(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${r}
  `);
}
function Gp(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = He(e.droppable.id, t.draggables);
    zp(n);
  }
}
var Wp = (e) => ({
  getState: t,
  dispatch: n
}) => (r) => (o) => {
  if (!ie(o, "LIFT")) {
    r(o);
    return;
  }
  const {
    id: i,
    clientSelection: a,
    movementMode: s
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && n(vr({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Unexpected phase to start a drag") : g()), n(gr()), n(Sp({
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
  Gp(d, u), n(Ip({
    critical: d,
    dimensions: u,
    clientSelection: a,
    movementMode: s,
    viewport: f
  }));
}, qp = (e) => () => (t) => (n) => {
  ie(n, "INITIAL_PUBLISH") && e.dragging(), ie(n, "DROP_ANIMATE") && e.dropping(n.payload.completed.result.reason), (ie(n, "FLUSH") || ie(n, "DROP_COMPLETE")) && e.resting(), t(n);
};
const hr = {
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
}, Fe = `${aa.outOfTheWay}s ${hr.outOfTheWay}`, lt = {
  fluid: `opacity ${Fe}`,
  snap: `transform ${Fe}, opacity ${Fe}`,
  drop: (e) => {
    const t = `${e}s ${hr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Fe}`,
  placeholder: `height ${Fe}, width ${Fe}, margin ${Fe}`
}, mo = (e) => Le(e, ye) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Wn = {
  moveTo: mo,
  drop: (e, t) => {
    const n = mo(e);
    if (n)
      return t ? `${n} scale(${gt.scale.drop})` : n;
  }
}, {
  minDropTime: qn,
  maxDropTime: sa
} = aa, Up = sa - qn, go = 1500, Hp = 0.6;
var Yp = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = ut(e, t);
  if (r <= 0)
    return qn;
  if (r >= go)
    return sa;
  const o = r / go, i = qn + Up * o, a = n === "CANCEL" ? i * Hp : i;
  return Number(a.toFixed(2));
}, Kp = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = n, s = Ce(e), c = s ? a[s] : null, l = a[t.descriptor.droppableId], p = ea({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || l,
    viewport: r
  });
  return Se(p, t.client.borderBox.center);
}, Xp = ({
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
const Jp = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (!ie(r, "DROP")) {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Fp({
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
  } = Xp({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), u = d ? lr(p) : null, f = d ? Kt(p) : null, h = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, b = {
    draggableId: l.descriptor.id,
    type: l.descriptor.type,
    source: h,
    reason: i,
    mode: o.movementMode,
    destination: u,
    combine: f
  }, x = Kp({
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
    t(vr({
      completed: w
    }));
    return;
  }
  const N = Yp({
    current: o.current.client.offset,
    destination: x,
    reason: i
  });
  t(Vp({
    newHomeClientOffset: x,
    dropDuration: N,
    completed: w
  }));
};
var ca = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Zp(e) {
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
function Qp({
  onWindowScroll: e
}) {
  function t() {
    e(ca());
  }
  const n = dt(t), r = Zp(n);
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
const eu = (e) => ie(e, "DROP_COMPLETE") || ie(e, "DROP_ANIMATE") || ie(e, "FLUSH"), tu = (e) => {
  const t = Qp({
    onWindowScroll: (n) => {
      e.dispatch(Tp({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && ie(r, "INITIAL_PUBLISH") && t.start(), t.isActive() && eu(r) && t.stop(), n(r);
  };
};
var nu = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && le("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && le(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(r);
  };
  return o.wasCalled = () => t, o;
}, ru = () => {
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
const ou = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, iu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, au = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, ot = (e, t) => {
  Nt(), t(), Dt();
}, At = (e, t) => ({
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
  const o = nu(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var su = (e, t) => {
  const n = ru();
  let r = null;
  const o = (d, u) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : g()), ot("onBeforeCapture", () => {
      const f = e().onBeforeCapture;
      f && f({
        draggableId: d,
        mode: u
      });
    });
  }, i = (d, u) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g()), ot("onBeforeDragStart", () => {
      const f = e().onBeforeDragStart;
      f && f(At(d, u));
    });
  }, a = (d, u) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g());
    const f = At(d, u);
    r = {
      mode: u,
      lastCritical: d,
      lastLocation: f.source,
      lastCombine: null
    }, n.add(() => {
      ot("onDragStart", () => xn(e().onDragStart, f, t, Tt.onDragStart));
    });
  }, s = (d, u) => {
    const f = lr(u), h = Kt(u);
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragMove when onDragStart has not been called") : g());
    const b = !au(d, r.lastCritical);
    b && (r.lastCritical = d);
    const x = !ou(r.lastLocation, f);
    x && (r.lastLocation = f);
    const w = !iu(r.lastCombine, h);
    if (w && (r.lastCombine = h), !b && !x && !w)
      return;
    const E = {
      ...At(d, r.mode),
      combine: h,
      destination: f
    };
    n.add(() => {
      ot("onDragUpdate", () => xn(e().onDragUpdate, E, t, Tt.onDragUpdate));
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
        ...At(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(d);
    }
  };
}, cu = (e, t) => {
  const n = su(e, t);
  return (r) => (o) => (i) => {
    if (ie(i, "BEFORE_INITIAL_CAPTURE")) {
      n.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (ie(i, "INITIAL_PUBLISH")) {
      const s = i.payload.critical;
      n.beforeStart(s, i.payload.movementMode), o(i), n.start(s, i.payload.movementMode);
      return;
    }
    if (ie(i, "DROP_COMPLETE")) {
      const s = i.payload.completed.result;
      n.flush(), o(i), n.drop(s);
      return;
    }
    if (o(i), ie(i, "FLUSH")) {
      n.abort();
      return;
    }
    const a = r.getState();
    a.phase === "DRAGGING" && n.update(a.critical, a.impact);
  };
};
const lu = (e) => (t) => (n) => {
  if (!ie(n, "DROP_ANIMATION_FINISHED")) {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot finish a drop animating when no drop is occurring") : g()), e.dispatch(vr({
    completed: r.completed
  }));
}, du = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((ie(i, "FLUSH") || ie(i, "DROP_COMPLETE") || ie(i, "DROP_ANIMATION_FINISHED")) && r(), o(i), !ie(i, "DROP_ANIMATE"))
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
var pu = (e) => () => (t) => (n) => {
  (ie(n, "DROP_COMPLETE") || ie(n, "FLUSH") || ie(n, "DROP_ANIMATE")) && e.stopPublishing(), t(n);
}, uu = (e) => {
  let t = !1;
  return () => (n) => (r) => {
    if (ie(r, "INITIAL_PUBLISH")) {
      t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
      return;
    }
    if (n(r), !!t) {
      if (ie(r, "FLUSH")) {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (ie(r, "DROP_COMPLETE")) {
        t = !1;
        const o = r.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const fu = (e) => ie(e, "DROP_COMPLETE") || ie(e, "DROP_ANIMATE") || ie(e, "FLUSH");
var mu = (e) => (t) => (n) => (r) => {
  if (fu(r)) {
    e.stop(), n(r);
    return;
  }
  if (ie(r, "INITIAL_PUBLISH")) {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : g()), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const gu = (e) => (t) => (n) => {
  if (t(n), !ie(n, "PUBLISH_WHILE_DRAGGING"))
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(oa({
    reason: r.reason
  })));
}, vu = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : hi;
var hu = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => vi(Op, vu(pl(qp(n), pu(e), Wp(e), Jp, lu, du, gu, mu(i), tu, uu(t), cu(r, o))));
const yn = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function bu({
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
      } = n, d = Object.keys(c).map((h) => e.draggable.getById(h).getDimension(ye)).sort((h, b) => h.descriptor.index - b.descriptor.index), u = Object.keys(p).map((h) => {
        const x = e.droppable.getById(h).callbacks.getScrollWhileDragging();
        return {
          droppableId: h,
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
}, xu = () => {
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
        value: ye,
        displacement: ye
      }
    }
  };
}, yu = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  Nt();
  const r = xu(), o = r.scroll.current, i = e.droppable, a = n.droppable.getAllByType(i.type).map((p) => p.callbacks.getDimensionAndWatchScroll(o, t)), s = n.draggable.getAllByType(e.draggable.type).map((p) => p.getDimension(o)), c = {
    draggables: Bi(s),
    droppables: Li(a)
  };
  return Dt(), {
    dimensions: c,
    critical: e,
    viewport: r
  };
};
function vo(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && le(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var wu = (e, t) => {
  let n = null;
  const r = bu({
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
    u.type === "ADDITION" && vo(e, f, u.value) && r.add(u.value), u.type === "REMOVAL" && vo(e, f, u.value) && r.remove(u.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (u) => {
      n && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start capturing critical dimensions as there is already a collection") : g());
      const f = e.draggable.getById(u.draggableId), h = e.droppable.getById(f.descriptor.droppableId), b = {
        draggable: f.descriptor,
        droppable: h.descriptor
      }, x = e.subscribe(l);
      return n = {
        critical: b,
        unsubscribe: x
      }, yu({
        critical: b,
        registry: e,
        scrollOptions: u.scrollOptions
      });
    },
    stopPublishing: c
  };
}, ua = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Eu = (e) => {
  window.scrollBy(e.x, e.y);
};
const Nu = xe((e) => Yt(e).filter((t) => !(!t.isEnabled || !t.frame))), Du = (e, t) => Nu(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? g(!1, "Invalid result") : g()), Ki(r.frame.pageMarginBox)(e))) || null;
var Ou = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return Du(e, n);
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
var Su = (e, t, n = () => vt) => {
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
  return r === 0 ? (process.env.NODE_ENV !== "production" && le(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (n - e) / r;
}, br = 1, Cu = (e, t, n = () => vt) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return br;
  const i = 1 - fa({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = r.maxPixelScroll * r.ease(i);
  return Math.ceil(a);
}, Iu = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, a = t, s = i, l = Date.now() - a;
  if (l >= i)
    return e;
  if (l < o)
    return br;
  const p = fa({
    startOfRange: o,
    endOfRange: s,
    current: l
  }), d = e * r.ease(p);
  return Math.ceil(d);
}, ho = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = Cu(e, t, o);
  return i === 0 ? 0 : r ? Math.max(Iu(i, n, o), br) : i;
}, bo = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Su(e, r, i);
  return t[r.end] < t[r.start] ? ho({
    distanceToEdge: t[r.end],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * ho({
    distanceToEdge: t[r.start],
    thresholds: a,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, _u = ({
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
const Au = ji((e) => e === 0 ? 0 : e);
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
  }, s = bo({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: dr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = bo({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: zi,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = Au({
    x: c,
    y: s
  });
  if (Le(l, ye))
    return null;
  const p = _u({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return p ? Le(p, ye) ? null : p : null;
};
const ku = ji((e) => e === 0 ? 0 : e > 0 ? 1 : -1), xr = /* @__PURE__ */ (() => {
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
    return Le(i, ye) ? null : i;
  };
})(), ga = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = ku(n), i = xr({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, yr = (e, t) => ga({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Pu = (e, t) => {
  if (!yr(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return xr({
    current: r,
    max: n,
    change: t
  });
}, wr = (e, t) => {
  const n = e.frame;
  return n ? ga({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, Ru = (e, t) => {
  const n = e.frame;
  return !n || !wr(e, t) ? null : xr({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var Tu = ({
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
  return a && yr(e, a) ? a : null;
}, $u = ({
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
  return s && wr(e, s) ? s : null;
}, xo = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const d = e.viewport, u = Tu({
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
  const l = Ou({
    center: a,
    destination: Ce(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const p = $u({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: a,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  p && o(l.descriptor.id, p);
}, Mu = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => vt
}) => {
  const r = dt(e), o = dt(t);
  let i = null;
  const a = (l) => {
    i || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fluid scroll if not dragging") : g());
    const {
      shouldUseTimeDampening: p,
      dragStartTime: d
    } = i;
    xo({
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
      xo({
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
}, ju = ({
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
    if (!wr(s, c))
      return c;
    const l = Ru(s, c);
    if (!l)
      return t(s.descriptor.id, c), null;
    const p = Se(c, l);
    return t(s.descriptor.id, p), Se(c, p);
  }, i = (s, c, l) => {
    if (!s || !yr(c, l))
      return l;
    const p = Pu(c, l);
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
}, Lu = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = Mu({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = ju({
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
})(), Bu = (() => {
  const e = `${Ze}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), yo = {
  contextId: `${Ze}-scroll-container-context-id`
}, Vu = (e) => (t) => `[${t}="${e}"]`, it = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), Fu = "pointer-events: none;";
var zu = (e) => {
  const t = Vu(e), n = (() => {
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
        dragging: Fu,
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
    selector: t(Bu.contextId),
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
const Ie = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Xa : Ee, wn = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find the head to append a style to") : g()), e;
}, wo = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Gu(e, t) {
  const n = J(() => zu(e), [e]), r = Q(null), o = Q(null), i = T(xe((d) => {
    const u = o.current;
    u || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), u.textContent = d;
  }), []), a = T((d) => {
    const u = r.current;
    u || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), u.textContent = d;
  }, []);
  Ie(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? g(!1, "style elements already mounted") : g());
    const d = wo(t), u = wo(t);
    return r.current = d, o.current = u, d.setAttribute(`${Ze}-always`, e), u.setAttribute(`${Ze}-dynamic`, e), wn().appendChild(d), wn().appendChild(u), a(n.always), i(n.resting), () => {
      const f = (h) => {
        const b = h.current;
        b || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot unmount ref as it is not set") : g()), wn().removeChild(b), h.current = null;
      };
      f(r), f(o);
    };
  }, [t, a, i, n.always, n.resting, e]);
  const s = T(() => i(n.dragging), [i, n.dragging]), c = T((d) => {
    if (d === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), l = T(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return J(() => ({
    dragging: s,
    dropping: c,
    resting: l
  }), [s, c, l]);
}
function va(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var ha = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Ot(e) {
  return e instanceof ha(e).HTMLElement;
}
function ba(e, t) {
  const n = `[${Qe.contextId}="${e}"]`, r = va(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && le(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(Qe.draggableId) === t);
  return o ? Ot(o) ? o : (process.env.NODE_ENV !== "production" && le("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && le(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Wu(e) {
  const t = Q({}), n = Q(null), r = Q(null), o = Q(!1), i = T(function(u, f) {
    const h = {
      id: u,
      focus: f
    };
    return t.current[u] = h, function() {
      const x = t.current;
      x[u] !== h && delete x[u];
    };
  }, []), a = T(function(u) {
    const f = ba(e, u);
    f && f !== document.activeElement && f.focus();
  }, [e]), s = T(function(u, f) {
    n.current === u && (n.current = f);
  }, []), c = T(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const u = n.current;
      u && a(u);
    }));
  }, [a]), l = T(function(u) {
    n.current = null;
    const f = document.activeElement;
    f && f.getAttribute(Qe.draggableId) === u && (n.current = u);
  }, []);
  return Ie(() => (o.current = !0, function() {
    o.current = !1;
    const u = r.current;
    u && cancelAnimationFrame(u);
  }), []), J(() => ({
    register: i,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, l, c, s]);
}
function qu() {
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
function Uu() {
  const e = J(qu, []);
  return Ee(() => function() {
    e.clean();
  }, [e]), e;
}
var Er = pe.createContext(null), ht = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.body") : g()), e;
};
const Hu = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
}, Yu = (e) => `rfd-announcement-${e}`;
function Ku(e) {
  const t = J(() => Yu(e), [e]), n = Q(null);
  return Ee(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Bt(i.style, Hu), ht().appendChild(i), function() {
      setTimeout(function() {
        const c = ht();
        c.contains(i) && c.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), T((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && le(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
const Xu = {
  separator: "::"
};
function Nr(e, t = Xu) {
  const n = pe.useId();
  return J(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
function Ju({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Zu({
  contextId: e,
  text: t
}) {
  const n = Nr("hidden-text", {
    separator: "-"
  }), r = J(() => Ju({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return Ee(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", ht().appendChild(i), function() {
      const s = ht();
      s.contains(i) && s.removeChild(i);
    };
  }, [r, t]), r;
}
var Zt = pe.createContext(null), Qu = {
  react: "^18.0.0 || ^19.0.0"
};
const ef = /(\d+)\.(\d+)\.(\d+)/, Eo = (e) => {
  const t = ef.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? g(!1, `Unable to parse React version ${e}`) : g());
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, tf = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var nf = (e, t) => {
  const n = Eo(e), r = Eo(t);
  tf(n, r) || process.env.NODE_ENV !== "production" && le(`
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
var rf = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && le(`
      No <!doctype html> found.

      ${En}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && le(`
      Unexpected <!doctype> found: (${t.name})

      ${En}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && le(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${En}
    `);
};
function Dr(e) {
  process.env.NODE_ENV !== "production" && e();
}
function St(e, t) {
  Dr(() => {
    Ee(() => {
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
function of() {
  St(() => {
    nf(Qu.react, pe.version), rf(document);
  }, []);
}
function Or(e) {
  const t = Q(e);
  return Ee(() => {
    t.current = e;
  }), t;
}
function af() {
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
const sf = 9, cf = 13, Sr = 27, xa = 32, lf = 33, df = 34, pf = 35, uf = 36, ff = 37, mf = 38, gf = 39, vf = 40, hf = {
  [cf]: !0,
  [sf]: !0
};
var ya = (e) => {
  hf[e.keyCode] && e.preventDefault();
};
const Qt = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})(), wa = 0, No = 5;
function bf(e, t) {
  return Math.abs(t.x - e.x) >= No || Math.abs(t.y - e.y) >= No;
}
const Do = {
  type: "IDLE"
};
function xf({
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
      const p = l.point;
      if (!bf(p, c))
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
      if (o.keyCode === Sr) {
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
function yf(e) {
  const t = Q(Do), n = Q(je), r = J(() => ({
    eventName: "mousedown",
    fn: function(d) {
      if (d.defaultPrevented || d.button !== wa || d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
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
      const h = {
        x: d.clientX,
        y: d.clientY
      };
      n.current(), l(f, h);
    }
  }), [e]), o = J(() => ({
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
  }), [e]), i = T(function() {
    const d = {
      passive: !1,
      capture: !0
    };
    n.current = Ae(window, [o, r], d);
  }, [o, r]), a = T(() => {
    t.current.type !== "IDLE" && (t.current = Do, n.current(), i());
  }, [i]), s = T(() => {
    const p = t.current;
    a(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [a]), c = T(function() {
    const d = {
      capture: !0,
      passive: !1
    }, u = xf({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (f) => {
        t.current = f;
      }
    });
    n.current = Ae(window, u, d);
  }, [s, a]), l = T(function(d, u) {
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
function wf() {
}
const Ef = {
  [df]: !0,
  [lf]: !0,
  [uf]: !0,
  [pf]: !0
};
function Nf(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Sr) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === xa) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === vf) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === mf) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === gf) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === ff) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Ef[o.keyCode]) {
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
function Df(e) {
  const t = Q(wf), n = J(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== xa)
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
      t.current = Ae(window, Nf(l, p), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = T(function() {
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
const Nn = {
  type: "IDLE"
}, Of = 120, Sf = 0.15;
function Cf({
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
      n.keyCode === Sr && n.preventDefault(), e();
    }
  }, {
    eventName: Qt,
    fn: e
  }];
}
function If({
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
      if (!i || !(i.force >= Sf))
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
function _f(e) {
  const t = Q(Nn), n = Q(je), r = T(function() {
    return t.current;
  }, []), o = T(function(f) {
    t.current = f;
  }, []), i = J(() => ({
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
        clientY: E
      } = x, N = {
        x: w,
        y: E
      };
      n.current(), d(b, N);
    }
  }), [e]), a = T(function() {
    const f = {
      capture: !0,
      passive: !1
    };
    n.current = Ae(window, [i], f);
  }, [i]), s = T(() => {
    const u = t.current;
    u.type !== "IDLE" && (u.type === "PENDING" && clearTimeout(u.longPressTimerId), o(Nn), n.current(), a());
  }, [a, o]), c = T(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), l = T(function() {
    const f = {
      capture: !0,
      passive: !1
    }, h = {
      cancel: c,
      completed: s,
      getPhase: r
    }, b = Ae(window, If(h), f), x = Ae(window, Cf(h), f);
    n.current = function() {
      b(), x();
    };
  }, [c, r, s]), p = T(function() {
    const f = r();
    f.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? g(!1, `Cannot start dragging from phase ${f.type}`) : g());
    const h = f.actions.fluidLift(f.point);
    o({
      type: "DRAGGING",
      actions: h,
      hasMoved: !1
    });
  }, [r, o]), d = T(function(f, h) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g());
    const b = setTimeout(p, Of);
    o({
      type: "PENDING",
      point: h,
      actions: f,
      longPressTimerId: b
    }), l();
  }, [l, r, o, p]);
  Ie(function() {
    return a(), function() {
      n.current();
      const h = r();
      h.type === "PENDING" && (clearTimeout(h.longPressTimerId), o(Nn));
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
function Af(e) {
  Dr(() => {
    const t = Or(e);
    St(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot change the amount of sensor hooks after mounting") : g(!1));
    });
  });
}
const kf = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Ea(e, t) {
  if (t == null)
    return !1;
  if (kf.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Ea(e, t.parentElement);
}
function Pf(e, t) {
  const n = t.target;
  return Ot(n) ? Ea(e, n) : !1;
}
var Rf = (e) => Pe(e.getBoundingClientRect()).center;
function Tf(e) {
  return e instanceof ha(e).Element;
}
const $f = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function Na(e, t) {
  return e == null ? null : e[$f](t) ? e : Na(e.parentElement, t);
}
function Mf(e, t) {
  return e.closest ? e.closest(t) : Na(e, t);
}
function jf(e) {
  return `[${Qe.contextId}="${e}"]`;
}
function Lf(e, t) {
  const n = t.target;
  if (!Tf(n))
    return process.env.NODE_ENV !== "production" && le("event.target must be a Element"), null;
  const r = jf(e), o = Mf(n, r);
  return o ? Ot(o) ? o : (process.env.NODE_ENV !== "production" && le("drag handle must be a HTMLElement"), null) : null;
}
function Bf(e, t) {
  const n = Lf(e, t);
  return n ? n.getAttribute(Qe.draggableId) : null;
}
function Vf(e, t) {
  const n = `[${Un.contextId}="${e}"]`, o = va(document, n).find((i) => i.getAttribute(Un.id) === t);
  return o ? Ot(o) ? o : (process.env.NODE_ENV !== "production" && le("Draggable element is not a HTMLElement"), null) : null;
}
function Ff(e) {
  e.preventDefault();
}
function kt({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return n() ? e !== t ? (r && process.env.NODE_ENV !== "production" && le(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (r && process.env.NODE_ENV !== "production" && le(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Da({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !ua(t.getState(), r)) : (process.env.NODE_ENV !== "production" && le(`Unable to find draggable with id: ${r}`), !1);
}
function zf({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Da({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), l = Vf(t, c.descriptor.id);
  if (!l)
    return process.env.NODE_ENV !== "production" && le(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && Pf(l, a))
    return null;
  const p = e.claim(i || je);
  let d = "PRE_DRAG";
  function u() {
    return c.options.shouldRespectForcePress;
  }
  function f() {
    return e.isActive(p);
  }
  function h(v, D) {
    kt({
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
    d !== "PRE_DRAG" && (D(), process.env.NODE_ENV !== "production" ? g(!1, `Cannot lift in phase ${d}`) : g()), n.dispatch(Cp(v.liftActionArgs)), d = "DRAGGING";
    function A(M, U = {
      shouldBlockNextClick: !1
    }) {
      if (v.cleanup(), U.shouldBlockNextClick) {
        const j = Ae(window, [{
          eventName: "click",
          fn: Ff,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(j);
      }
      D(), n.dispatch(oa({
        reason: M
      }));
    }
    return {
      isActive: () => kt({
        expected: "DRAGGING",
        phase: d,
        isLockActive: f,
        shouldWarn: !1
      }),
      shouldRespectForcePress: u,
      drop: (M) => A("DROP", M),
      cancel: (M) => A("CANCEL", M),
      ...v.actions
    };
  }
  function w(v) {
    const D = dt((M) => {
      b(() => ra({
        client: M
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
  function E() {
    const v = {
      moveUp: () => b(Mp),
      moveRight: () => b(Lp),
      moveDown: () => b(jp),
      moveLeft: () => b(Bp)
    };
    return x({
      liftActionArgs: {
        id: o,
        clientSelection: Rf(l),
        movementMode: "SNAP"
      },
      cleanup: je,
      actions: v
    });
  }
  function N() {
    kt({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: f,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => kt({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: f,
      shouldWarn: !1
    }),
    shouldRespectForcePress: u,
    fluidLift: w,
    snapLift: E,
    abort: N
  };
}
const Gf = [yf, Df, _f];
function Wf({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? Gf : [], ...r || []], a = be(() => af())[0], s = T(function(x, w) {
    bt(x) && !bt(w) && a.tryAbandon();
  }, [a]);
  Ie(function() {
    let x = t.getState();
    return t.subscribe(() => {
      const E = t.getState();
      s(x, E), x = E;
    });
  }, [a, t, s]), Ie(() => a.tryAbandon, [a.tryAbandon]);
  const c = T((b) => Da({
    lockAPI: a,
    registry: n,
    store: t,
    draggableId: b
  }), [a, n, t]), l = T((b, x, w) => zf({
    lockAPI: a,
    registry: n,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: x || null,
    sourceEvent: w && w.sourceEvent ? w.sourceEvent : null
  }), [e, a, n, t]), p = T((b) => Bf(e, b), [e]), d = T((b) => {
    const x = n.draggable.findById(b);
    return x ? x.options : null;
  }, [n.draggable]), u = T(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(gr()));
  }, [a, t]), f = T(() => a.isClaimed(), [a]), h = J(() => ({
    canGetLock: c,
    tryGetLock: l,
    findClosestDraggableId: p,
    findOptionsForDraggable: d,
    tryReleaseLock: u,
    isLockClaimed: f
  }), [c, l, p, d, u, f]);
  Af(i);
  for (let b = 0; b < i.length; b++)
    i[b](h);
}
const qf = (e) => ({
  onBeforeCapture: (t) => {
    ei(() => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    });
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Uf = (e) => ({
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
function Hf(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = Q(null);
  of();
  const s = Or(e), c = T(() => qf(s.current), [s]), l = T(() => Uf(s.current), [s]), p = Ku(t), d = Zu({
    contextId: t,
    text: i
  }), u = Gu(t, o), f = T((j) => {
    at(a).dispatch(j);
  }, []), h = J(() => Wr({
    publishWhileDragging: _p,
    updateDroppableScroll: kp,
    updateDroppableIsEnabled: Pp,
    updateDroppableIsCombineEnabled: Rp,
    collectionStarting: Ap
  }, f), [f]), b = Uu(), x = J(() => wu(b, h), [b, h]), w = J(() => Lu({
    scrollWindow: Eu,
    scrollDroppable: x.scrollDroppable,
    getAutoScrollerOptions: l,
    ...Wr({
      move: ra
    }, f)
  }), [x.scrollDroppable, f, l]), E = Wu(t), N = J(() => hu({
    announce: p,
    autoScroller: w,
    dimensionMarshal: x,
    focusMarshal: E,
    getResponders: c,
    styleMarshal: u
  }), [p, w, x, E, c, u]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== N && process.env.NODE_ENV !== "production" && le("unexpected store change"), a.current = N;
  const y = T(() => {
    const j = at(a);
    j.getState().phase !== "IDLE" && j.dispatch(gr());
  }, []), v = T(() => {
    const j = at(a).getState();
    return j.phase === "DROP_ANIMATING" ? !0 : j.phase === "IDLE" ? !1 : j.isDragging;
  }, []), D = J(() => ({
    isDragging: v,
    tryAbort: y
  }), [v, y]);
  n(D);
  const A = T((j) => ua(at(a).getState(), j), []), M = T(() => Ge(at(a).getState()), []), U = J(() => ({
    marshal: x,
    focus: E,
    contextId: t,
    canLift: A,
    isMovementAllowed: M,
    dragHandleUsageInstructionsId: d,
    registry: b
  }), [t, x, d, E, A, M, b]);
  return Wf({
    contextId: t,
    store: N,
    registry: b,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), Ee(() => y, [y]), pe.createElement(Zt.Provider, {
    value: U
  }, pe.createElement(od, {
    context: Er,
    store: N
  }, e.children));
}
function Yf() {
  return pe.useId();
}
function Cr(e) {
  const t = Yf(), n = e.dragHandleUsageInstructions || Tt.dragHandleUsageInstructions;
  return pe.createElement(vd, null, (r) => pe.createElement(Hf, {
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
const Oo = {
  dragging: 5e3,
  dropAnimating: 4500
}, Kf = (e, t) => t ? lt.drop(t.duration) : e ? lt.snap : lt.fluid, Xf = (e, t) => {
  if (e)
    return t ? gt.opacity.drop : gt.opacity.combining;
}, Jf = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Zf(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = Jf(e), c = !!i, l = c ? Wn.drop(r, a) : Wn.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: Kf(s, i),
    transform: l,
    opacity: Xf(a, c),
    zIndex: c ? Oo.dropAnimating : Oo.dragging,
    pointerEvents: "none"
  };
}
function Qf(e) {
  return {
    transform: Wn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function em(e) {
  return e.type === "DRAGGING" ? Zf(e) : Qf(e);
}
function tm(e, t, n = ye) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = ki(o, r), a = Lt(i, n), s = {
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
function nm(e) {
  const t = Nr("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = J(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), l = T((f) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get dimension when no ref is set") : g()), tm(n, h, f);
  }, [n, o]), p = J(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: l
  }), [n, l, c, t]), d = Q(p), u = Q(!0);
  Ie(() => (r.draggable.register(d.current), () => r.draggable.unregister(d.current)), [r.draggable]), Ie(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    const f = d.current;
    d.current = p, r.draggable.update(p, f);
  }, [p, r.draggable]);
}
var Ir = pe.createContext(null);
function Oa(e) {
  e && Ot(e) || (process.env.NODE_ENV !== "production" ? g(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : g());
}
function rm(e, t, n) {
  St(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? g(!1, "Draggable requires a draggableId") : g(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? g(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : g(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? g(!1, `${r(o)} requires an integer index prop`) : g(!1)), e.mapped.type !== "DRAGGING" && (Oa(n()), e.isEnabled && (ba(t, o) || (process.env.NODE_ENV !== "production" ? g(!1, `${r(o)} Unable to find drag handle`) : g(!1))));
  });
}
function om(e) {
  Dr(() => {
    const t = Q(e);
    St(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Draggable isClone prop value changed during component life") : g(!1));
    }, [e]);
  });
}
function zt(e) {
  const t = Ut(e);
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find required context") : g()), t;
}
function im(e) {
  e.preventDefault();
}
const am = (e) => {
  const t = Q(null), n = T((D = null) => {
    t.current = D;
  }, []), r = T(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = zt(Zt), {
    type: s,
    droppableId: c
  } = zt(Ir), l = J(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: p,
    draggableId: d,
    isEnabled: u,
    shouldRespectForcePress: f,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: x,
    dropAnimationFinished: w
  } = e;
  if (rm(e, o, r), om(b), !b) {
    const D = J(() => ({
      descriptor: l,
      registry: a,
      getDraggableRef: r,
      canDragInteractiveElements: h,
      shouldRespectForcePress: f,
      isEnabled: u
    }), [l, a, r, h, f, u]);
    nm(D);
  }
  const E = J(() => u ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": d,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: im
  } : null, [o, i, d, u]), N = T((D) => {
    x.type === "DRAGGING" && x.dropping && D.propertyName === "transform" && ei(w);
  }, [w, x]), y = J(() => {
    const D = em(x), A = x.type === "DRAGGING" && x.dropping ? N : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": d,
        style: D,
        onTransitionEnd: A
      },
      dragHandleProps: E
    };
  }, [o, E, d, x, N, n]), v = J(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return pe.createElement(pe.Fragment, null, p(y, x.snapshot, v));
};
var Sa = (e, t) => e === t, Ca = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const sm = (e) => e.combine ? e.combine.draggableId : null, cm = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function lm() {
  const e = xe((o, i) => ({
    x: o,
    y: i
  })), t = xe((o, i, a = null, s = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), n = xe((o, i, a, s, c = null, l = null, p = null) => ({
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
    if (bt(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = Ce(o.impact), l = cm(o.impact), p = o.forceShouldAnimate;
      return n(e(a.x, a.y), o.movementMode, s, i.isClone, c, l, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], l = a.result, p = l.mode, d = Ca(l), u = sm(l), h = {
        duration: o.dropDuration,
        curve: hr.drop,
        moveTo: o.newHomeClientOffset,
        opacity: u ? gt.opacity.drop : null,
        scale: u ? gt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: h,
          draggingOver: d,
          combineWith: u,
          mode: p,
          forceShouldAnimate: null,
          snapshot: t(p, s, d, u, h)
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
const dm = {
  mapped: {
    type: "SECONDARY",
    offset: ye,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Ia(null)
  }
};
function pm() {
  const e = xe((a, s) => ({
    x: a,
    y: s
  })), t = xe(Ia), n = xe((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), r = (a) => a ? n(ye, a, !0) : null, o = (a, s, c, l) => {
    const p = c.displaced.visible[a], d = !!(l.inVirtualList && l.effected[a]), u = Kt(c), f = u && u.draggableId === a ? s : null;
    if (!p) {
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
    return n(b, f, p.shouldAnimate);
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
const um = () => {
  const e = lm(), t = pm();
  return (r, o) => e(r, o) || t(r, o) || dm;
}, fm = {
  dropAnimationFinished: ia
}, mm = Ai(um, fm, null, {
  context: Er,
  areStatePropsEqual: Sa
})(am);
function _a(e) {
  return zt(Ir).isUsingCloneFor === e.draggableId && !e.isClone ? null : pe.createElement(mm, e);
}
function _r(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return pe.createElement(_a, Bt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const Ar = (e) => (t) => e === t, gm = Ar("scroll"), vm = Ar("auto"), hm = Ar("visible"), So = (e, t) => t(e.overflowX) || t(e.overflowY), bm = (e, t) => t(e.overflowX) && t(e.overflowY), Aa = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return So(n, gm) || So(n, vm);
}, xm = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = ht(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, g()), !Aa(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return bm(r, hm) || process.env.NODE_ENV !== "production" && le(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, kr = (e) => e == null ? null : e === document.body ? xm() ? e : null : e === document.documentElement ? null : Aa(e) ? e : kr(e.parentElement);
var ym = (e) => {
  !e || !kr(e.parentElement) || process.env.NODE_ENV !== "production" && le(`
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
var wm = (e) => {
  const t = kr(e), n = ka(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, Em = ({
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
    } = s, h = la({
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
        max: h,
        diff: {
          value: ye,
          displacement: ye
        }
      }
    };
  })(), l = o === "vertical" ? dr : zi, p = Je({
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
const Nm = (e, t) => {
  const n = Pi(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, a = o + t.scrollWidth, c = ar({
    top: r,
    right: a,
    bottom: i,
    left: o
  }, n.border);
  return sr({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var Dm = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = n.closestScrollable, l = Nm(e, c), p = Lt(l, r), d = (() => {
    if (!c)
      return null;
    const f = Pi(c), h = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: f,
      page: Lt(f, r),
      scroll: Hn(c),
      scrollSize: h,
      shouldClipSubject: s
    };
  })();
  return Em({
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
const Om = {
  passive: !1
}, Sm = {
  passive: !0
};
var Co = (e) => e.shouldPublishImmediately ? Om : Sm;
const Pt = (e) => e && e.env.closestScrollable || null;
function Cm(e) {
  const t = Q(null), n = zt(Zt), r = Nr("droppable"), {
    registry: o,
    marshal: i
  } = n, a = Or(e), s = J(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = Q(s), l = J(() => xe((y, v) => {
    t.current || (process.env.NODE_ENV !== "production" ? g(!1, "Can only update scroll when dragging") : g());
    const D = {
      x: y,
      y: v
    };
    i.updateDroppableScroll(s.id, D);
  }), [s.id, i]), p = T(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? ye : Hn(y.env.closestScrollable);
  }, []), d = T(() => {
    const y = p();
    l(y.x, y.y);
  }, [p, l]), u = J(() => dt(d), [d]), f = T(() => {
    const y = t.current, v = Pt(y);
    if (y && v || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find scroll options while scrolling") : g()), y.scrollOptions.shouldPublishImmediately) {
      d();
      return;
    }
    u();
  }, [u, d]), h = T((y, v) => {
    t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect a droppable while a drag is occurring") : g());
    const D = a.current, A = D.getDroppableRef();
    A || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect without a droppable ref") : g());
    const M = wm(A), U = {
      ref: A,
      descriptor: s,
      env: M,
      scrollOptions: v
    };
    t.current = U;
    const j = Dm({
      ref: A,
      descriptor: s,
      env: M,
      windowScroll: y,
      direction: D.direction,
      isDropDisabled: D.isDropDisabled,
      isCombineEnabled: D.isCombineEnabled,
      shouldClipSubject: !D.ignoreContainerClipping
    }), X = M.closestScrollable;
    return X && (X.setAttribute(yo.contextId, n.contextId), X.addEventListener("scroll", f, Co(U.scrollOptions)), process.env.NODE_ENV !== "production" && ym(X)), j;
  }, [n.contextId, s, f, a]), b = T(() => {
    const y = t.current, v = Pt(y);
    return y && v || (process.env.NODE_ENV !== "production" ? g(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : g()), Hn(v);
  }, []), x = T(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop drag when no active drag") : g());
    const v = Pt(y);
    t.current = null, v && (u.cancel(), v.removeAttribute(yo.contextId), v.removeEventListener("scroll", f, Co(y.scrollOptions)));
  }, [f, u]), w = T((y) => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll when there is no drag") : g());
    const D = Pt(v);
    D || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll a droppable with no closest scrollable") : g()), D.scrollTop += y.y, D.scrollLeft += y.x;
  }, []), E = J(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: x,
    scroll: w
  }), [x, h, b, w]), N = J(() => ({
    uniqueId: r,
    descriptor: s,
    callbacks: E
  }), [E, s, r]);
  Ie(() => (c.current = N.descriptor, o.droppable.register(N), () => {
    t.current && (process.env.NODE_ENV !== "production" && le("Unsupported: changing the droppableId or type of a Droppable during a drag"), x()), o.droppable.unregister(N);
  }), [E, s, x, N, i, o.droppable]), Ie(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ie(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Dn() {
}
const Io = {
  width: 0,
  height: 0,
  margin: Nd
}, Im = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? Io : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, _m = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = Im({
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
}, Am = (e) => {
  const t = Q(null), n = T(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = be(e.animate === "open");
  Ee(() => s ? r !== "open" ? (n(), c(!1), Dn) : t.current ? Dn : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : Dn, [r, s, n]);
  const l = T((d) => {
    d.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), p = _m({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return pe.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: l,
    ref: e.innerRef
  });
};
var km = pe.memo(Am);
function On(e) {
  return typeof e == "boolean";
}
function Sn(e, t) {
  t.forEach((n) => n(e));
}
const Pm = [function({
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
}], Rm = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && le(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Tm = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? g(!1, "Must provide a clone render function (renderClone) for virtual lists") : g());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? g(!1, "Expected virtual list to not have a placeholder") : g());
}];
function $m(e) {
  St(() => {
    Sn(e, Pm), e.props.mode === "standard" && Sn(e, Rm), e.props.mode === "virtual" && Sn(e, Tm);
  });
}
class Mm extends pe.PureComponent {
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
const jm = (e) => {
  const t = Ut(Zt);
  t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find app context") : g());
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = Q(null), i = Q(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: l,
    direction: p,
    ignoreContainerClipping: d,
    isDropDisabled: u,
    isCombineEnabled: f,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: x,
    getContainerForClone: w
  } = e, E = T(() => o.current, []), N = T((B = null) => {
    o.current = B;
  }, []), y = T(() => i.current, []), v = T((B = null) => {
    i.current = B;
  }, []);
  $m({
    props: e,
    getDroppableRef: E,
    getPlaceholderRef: y
  });
  const D = T(() => {
    r() && x({
      maxScroll: pa()
    });
  }, [r, x]);
  Cm({
    droppableId: s,
    type: c,
    mode: l,
    direction: p,
    isDropDisabled: u,
    isCombineEnabled: f,
    ignoreContainerClipping: d,
    getDroppableRef: E
  });
  const A = J(() => pe.createElement(Mm, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: B,
    data: H,
    animate: Y
  }) => pe.createElement(km, {
    placeholder: H,
    onClose: B,
    innerRef: v,
    animate: Y,
    contextId: n,
    onTransitionEnd: D
  })), [n, D, e.placeholder, e.shouldAnimatePlaceholder, v]), M = J(() => ({
    innerRef: N,
    placeholder: A,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": n
    }
  }), [n, s, A, N]), U = b ? b.dragging.draggableId : null, j = J(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: U
  }), [s, U, c]);
  function X() {
    if (!b)
      return null;
    const {
      dragging: B,
      render: H
    } = b, Y = pe.createElement(_a, {
      draggableId: B.draggableId,
      index: B.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (K, me) => H(K, me, B));
    return es.createPortal(Y, w());
  }
  return pe.createElement(Ir.Provider, {
    value: j
  }, a(M, h), X());
};
function Lm() {
  return document.body || (process.env.NODE_ENV !== "production" ? g(!1, "document.body is not ready") : g()), document.body;
}
const _o = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Lm
}, Pa = (e) => {
  let t = {
    ...e
  }, n;
  for (n in _o)
    e[n] === void 0 && (t = {
      ...t,
      [n]: _o[n]
    });
  return t;
}, Cn = (e, t) => e === t.droppable.type, Ao = (e, t) => t.draggables[e.draggable.id], Bm = () => {
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
  }, n = xe((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), r = xe((i, a, s, c, l, p) => {
    const d = l.descriptor.id;
    if (l.descriptor.droppableId === i) {
      const h = p ? {
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
    const s = Pa(a), c = s.droppableId, l = s.type, p = !s.isDropDisabled, d = s.renderClone;
    if (bt(i)) {
      const u = i.critical;
      if (!Cn(l, u))
        return t;
      const f = Ao(u, i.dimensions), h = Ce(i.impact) === c;
      return r(c, p, h, h, f, d);
    }
    if (i.phase === "DROP_ANIMATING") {
      const u = i.completed;
      if (!Cn(l, u.critical))
        return t;
      const f = Ao(u.critical, i.dimensions);
      return r(c, p, Ca(u.result) === c, Ce(u.impact) === c, f, d);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const u = i.completed;
      if (!Cn(l, u.critical))
        return t;
      const f = Ce(u.impact) === c, h = !!(u.impact.at && u.impact.at.type === "COMBINE"), b = u.critical.droppable.id === c;
      return f ? h ? e : t : b ? e : t;
    }
    return t;
  };
}, Vm = {
  updateViewportMaxScroll: $p
}, Pr = Ai(Bm, Vm, (e, t, n) => ({
  ...Pa(n),
  ...e,
  ...t
}), {
  context: Er,
  areStatePropsEqual: Sa
})(jm);
function Jg({
  items: e,
  onReorder: t,
  className: n,
  itemClassName: r,
  droppableId: o = "sortable-list"
}) {
  return /* @__PURE__ */ m(Cr, { onDragEnd: (a) => {
    if (!a.destination) return;
    const s = Array.from(e), [c] = s.splice(a.source.index, 1);
    s.splice(a.destination.index, 0, c), t(s);
  }, children: /* @__PURE__ */ m(Pr, { droppableId: o, children: (a) => /* @__PURE__ */ I(
    "ul",
    {
      ref: a.innerRef,
      ...a.droppableProps,
      className: O("space-y-2", n),
      children: [
        e.map((s, c) => /* @__PURE__ */ m(_r, { draggableId: s.id, index: c, children: (l, p) => /* @__PURE__ */ I(
          "li",
          {
            ref: l.innerRef,
            ...l.draggableProps,
            className: O(
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
                  ...l.dragHandleProps,
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
var Yn = { exports: {} }, Rt = { exports: {} }, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko;
function Fm() {
  if (ko) return re;
  ko = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function N(v) {
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
                case p:
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
    return N(v) === l;
  }
  return re.AsyncMode = c, re.ConcurrentMode = l, re.ContextConsumer = s, re.ContextProvider = a, re.Element = t, re.ForwardRef = p, re.Fragment = r, re.Lazy = h, re.Memo = f, re.Portal = n, re.Profiler = i, re.StrictMode = o, re.Suspense = d, re.isAsyncMode = function(v) {
    return y(v) || N(v) === c;
  }, re.isConcurrentMode = y, re.isContextConsumer = function(v) {
    return N(v) === s;
  }, re.isContextProvider = function(v) {
    return N(v) === a;
  }, re.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, re.isForwardRef = function(v) {
    return N(v) === p;
  }, re.isFragment = function(v) {
    return N(v) === r;
  }, re.isLazy = function(v) {
    return N(v) === h;
  }, re.isMemo = function(v) {
    return N(v) === f;
  }, re.isPortal = function(v) {
    return N(v) === n;
  }, re.isProfiler = function(v) {
    return N(v) === i;
  }, re.isStrictMode = function(v) {
    return N(v) === o;
  }, re.isSuspense = function(v) {
    return N(v) === d;
  }, re.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === l || v === i || v === o || v === d || v === u || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === f || v.$$typeof === a || v.$$typeof === s || v.$$typeof === p || v.$$typeof === x || v.$$typeof === w || v.$$typeof === E || v.$$typeof === b);
  }, re.typeOf = N, re;
}
var oe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Po;
function zm() {
  return Po || (Po = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function N(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === r || C === l || C === i || C === o || C === d || C === u || typeof C == "object" && C !== null && (C.$$typeof === h || C.$$typeof === f || C.$$typeof === a || C.$$typeof === s || C.$$typeof === p || C.$$typeof === x || C.$$typeof === w || C.$$typeof === E || C.$$typeof === b);
    }
    function y(C) {
      if (typeof C == "object" && C !== null) {
        var fe = C.$$typeof;
        switch (fe) {
          case t:
            var Ve = C.type;
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
                  case p:
                  case h:
                  case f:
                  case a:
                    return rt;
                  default:
                    return fe;
                }
            }
          case n:
            return fe;
        }
      }
    }
    var v = c, D = l, A = s, M = a, U = t, j = p, X = r, B = h, H = f, Y = n, K = i, me = o, ve = d, ue = !1;
    function te(C) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(C) || y(C) === c;
    }
    function S(C) {
      return y(C) === l;
    }
    function P(C) {
      return y(C) === s;
    }
    function z(C) {
      return y(C) === a;
    }
    function G(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function L(C) {
      return y(C) === p;
    }
    function q(C) {
      return y(C) === r;
    }
    function W(C) {
      return y(C) === h;
    }
    function F(C) {
      return y(C) === f;
    }
    function _(C) {
      return y(C) === n;
    }
    function k(C) {
      return y(C) === i;
    }
    function $(C) {
      return y(C) === o;
    }
    function ne(C) {
      return y(C) === d;
    }
    oe.AsyncMode = v, oe.ConcurrentMode = D, oe.ContextConsumer = A, oe.ContextProvider = M, oe.Element = U, oe.ForwardRef = j, oe.Fragment = X, oe.Lazy = B, oe.Memo = H, oe.Portal = Y, oe.Profiler = K, oe.StrictMode = me, oe.Suspense = ve, oe.isAsyncMode = te, oe.isConcurrentMode = S, oe.isContextConsumer = P, oe.isContextProvider = z, oe.isElement = G, oe.isForwardRef = L, oe.isFragment = q, oe.isLazy = W, oe.isMemo = F, oe.isPortal = _, oe.isProfiler = k, oe.isStrictMode = $, oe.isSuspense = ne, oe.isValidElementType = N, oe.typeOf = y;
  }()), oe;
}
var Ro;
function Ra() {
  return Ro || (Ro = 1, process.env.NODE_ENV === "production" ? Rt.exports = Fm() : Rt.exports = zm()), Rt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var In, To;
function Gm() {
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
var _n, $o;
function Rr() {
  if ($o) return _n;
  $o = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _n = e, _n;
}
var An, Mo;
function Ta() {
  return Mo || (Mo = 1, An = Function.call.bind(Object.prototype.hasOwnProperty)), An;
}
var kn, jo;
function Wm() {
  if (jo) return kn;
  jo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Rr(), n = {}, r = Ta();
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
          } catch (h) {
            d = h;
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
  }, kn = o, kn;
}
var Pn, Lo;
function qm() {
  if (Lo) return Pn;
  Lo = 1;
  var e = Ra(), t = Gm(), n = Rr(), r = Ta(), o = Wm(), i = function() {
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
    function d(S) {
      var P = S && (l && S[l] || S[p]);
      if (typeof P == "function")
        return P;
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
      any: E(),
      arrayOf: N,
      element: y(),
      elementType: v(),
      instanceOf: D,
      node: j(),
      objectOf: M,
      oneOf: A,
      oneOfType: U,
      shape: B,
      exact: H
    };
    function h(S, P) {
      return S === P ? S !== 0 || 1 / S === 1 / P : S !== S && P !== P;
    }
    function b(S, P) {
      this.message = S, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function x(S) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, z = 0;
      function G(q, W, F, _, k, $, ne) {
        if (_ = _ || u, $ = $ || F, ne !== n) {
          if (c) {
            var C = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw C.name = "Invariant Violation", C;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = _ + ":" + F;
            !P[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + _ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[fe] = !0, z++);
          }
        }
        return W[F] == null ? q ? W[F] === null ? new b("The " + k + " `" + $ + "` is marked as required " + ("in `" + _ + "`, but its value is `null`.")) : new b("The " + k + " `" + $ + "` is marked as required in " + ("`" + _ + "`, but its value is `undefined`.")) : null : S(W, F, _, k, $);
      }
      var L = G.bind(null, !1);
      return L.isRequired = G.bind(null, !0), L;
    }
    function w(S) {
      function P(z, G, L, q, W, F) {
        var _ = z[G], k = me(_);
        if (k !== S) {
          var $ = ve(_);
          return new b(
            "Invalid " + q + " `" + W + "` of type " + ("`" + $ + "` supplied to `" + L + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return x(P);
    }
    function E() {
      return x(a);
    }
    function N(S) {
      function P(z, G, L, q, W) {
        if (typeof S != "function")
          return new b("Property `" + W + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var F = z[G];
        if (!Array.isArray(F)) {
          var _ = me(F);
          return new b("Invalid " + q + " `" + W + "` of type " + ("`" + _ + "` supplied to `" + L + "`, expected an array."));
        }
        for (var k = 0; k < F.length; k++) {
          var $ = S(F, k, L, q, W + "[" + k + "]", n);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return x(P);
    }
    function y() {
      function S(P, z, G, L, q) {
        var W = P[z];
        if (!s(W)) {
          var F = me(W);
          return new b("Invalid " + L + " `" + q + "` of type " + ("`" + F + "` supplied to `" + G + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(S);
    }
    function v() {
      function S(P, z, G, L, q) {
        var W = P[z];
        if (!e.isValidElementType(W)) {
          var F = me(W);
          return new b("Invalid " + L + " `" + q + "` of type " + ("`" + F + "` supplied to `" + G + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(S);
    }
    function D(S) {
      function P(z, G, L, q, W) {
        if (!(z[G] instanceof S)) {
          var F = S.name || u, _ = te(z[G]);
          return new b("Invalid " + q + " `" + W + "` of type " + ("`" + _ + "` supplied to `" + L + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return x(P);
    }
    function A(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function P(z, G, L, q, W) {
        for (var F = z[G], _ = 0; _ < S.length; _++)
          if (h(F, S[_]))
            return null;
        var k = JSON.stringify(S, function(ne, C) {
          var fe = ve(C);
          return fe === "symbol" ? String(C) : C;
        });
        return new b("Invalid " + q + " `" + W + "` of value `" + String(F) + "` " + ("supplied to `" + L + "`, expected one of " + k + "."));
      }
      return x(P);
    }
    function M(S) {
      function P(z, G, L, q, W) {
        if (typeof S != "function")
          return new b("Property `" + W + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var F = z[G], _ = me(F);
        if (_ !== "object")
          return new b("Invalid " + q + " `" + W + "` of type " + ("`" + _ + "` supplied to `" + L + "`, expected an object."));
        for (var k in F)
          if (r(F, k)) {
            var $ = S(F, k, L, q, W + "." + k, n);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return x(P);
    }
    function U(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var P = 0; P < S.length; P++) {
        var z = S[P];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(z) + " at index " + P + "."
          ), a;
      }
      function G(L, q, W, F, _) {
        for (var k = [], $ = 0; $ < S.length; $++) {
          var ne = S[$], C = ne(L, q, W, F, _, n);
          if (C == null)
            return null;
          C.data && r(C.data, "expectedType") && k.push(C.data.expectedType);
        }
        var fe = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new b("Invalid " + F + " `" + _ + "` supplied to " + ("`" + W + "`" + fe + "."));
      }
      return x(G);
    }
    function j() {
      function S(P, z, G, L, q) {
        return Y(P[z]) ? null : new b("Invalid " + L + " `" + q + "` supplied to " + ("`" + G + "`, expected a ReactNode."));
      }
      return x(S);
    }
    function X(S, P, z, G, L) {
      return new b(
        (S || "React class") + ": " + P + " type `" + z + "." + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function B(S) {
      function P(z, G, L, q, W) {
        var F = z[G], _ = me(F);
        if (_ !== "object")
          return new b("Invalid " + q + " `" + W + "` of type `" + _ + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var k in S) {
          var $ = S[k];
          if (typeof $ != "function")
            return X(L, q, W, k, ve($));
          var ne = $(F, k, L, q, W + "." + k, n);
          if (ne)
            return ne;
        }
        return null;
      }
      return x(P);
    }
    function H(S) {
      function P(z, G, L, q, W) {
        var F = z[G], _ = me(F);
        if (_ !== "object")
          return new b("Invalid " + q + " `" + W + "` of type `" + _ + "` " + ("supplied to `" + L + "`, expected `object`."));
        var k = t({}, z[G], S);
        for (var $ in k) {
          var ne = S[$];
          if (r(S, $) && typeof ne != "function")
            return X(L, q, W, $, ve(ne));
          if (!ne)
            return new b(
              "Invalid " + q + " `" + W + "` key `" + $ + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify(z[G], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var C = ne(F, $, L, q, W + "." + $, n);
          if (C)
            return C;
        }
        return null;
      }
      return x(P);
    }
    function Y(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(Y);
          if (S === null || s(S))
            return !0;
          var P = d(S);
          if (P) {
            var z = P.call(S), G;
            if (P !== S.entries) {
              for (; !(G = z.next()).done; )
                if (!Y(G.value))
                  return !1;
            } else
              for (; !(G = z.next()).done; ) {
                var L = G.value;
                if (L && !Y(L[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function K(S, P) {
      return S === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function me(S) {
      var P = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : K(P, S) ? "symbol" : P;
    }
    function ve(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var P = me(S);
      if (P === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function ue(S) {
      var P = ve(S);
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
    function te(S) {
      return !S.constructor || !S.constructor.name ? u : S.constructor.name;
    }
    return f.checkPropTypes = o, f.resetWarningCache = o.resetWarningCache, f.PropTypes = f, f;
  }, Pn;
}
var Rn, Bo;
function Um() {
  if (Bo) return Rn;
  Bo = 1;
  var e = Rr();
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
  var Hm = Ra(), Ym = !0;
  Yn.exports = qm()(Hm.isElement, Ym);
} else
  Yn.exports = Um()();
var Km = Yn.exports;
const se = /* @__PURE__ */ ul(Km);
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
const Xm = /* @__PURE__ */ new Map([
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
  const r = Jm(e), { webkitRelativePath: o } = e, i = typeof t == "string" ? t : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && Vo(r, "path", i), Vo(r, "relativePath", i), r;
}
function Jm(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), o = Xm.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Vo(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const Zm = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function Qm(e) {
  return Ye(this, void 0, void 0, function* () {
    return Gt(e) && eg(e.dataTransfer) ? og(e.dataTransfer, e.type) : tg(e) ? ng(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? rg(e) : [];
  });
}
function eg(e) {
  return Gt(e);
}
function tg(e) {
  return Gt(e) && Gt(e.target);
}
function Gt(e) {
  return typeof e == "object" && e !== null;
}
function ng(e) {
  return Kn(e.target.files).map((t) => et(t));
}
function rg(e) {
  return Ye(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => et(n));
  });
}
function og(e, t) {
  return Ye(this, void 0, void 0, function* () {
    if (e.items) {
      const n = Kn(e.items).filter((o) => o.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(ig));
      return Fo($a(r));
    }
    return Fo(Kn(e.files).map((n) => et(n)));
  });
}
function Fo(e) {
  return e.filter((t) => Zm.indexOf(t.name) === -1);
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
function ig(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return zo(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Ma(t) : zo(e, t);
}
function $a(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? $a(n) : [n]
  ], []);
}
function zo(e, t) {
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
function ag(e) {
  return Ye(this, void 0, void 0, function* () {
    return e.isDirectory ? Ma(e) : sg(e);
  });
}
function Ma(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const o = [];
    function i() {
      t.readEntries((a) => Ye(this, void 0, void 0, function* () {
        if (a.length) {
          const s = Promise.all(a.map(ag));
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
function sg(e) {
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
function Go(e) {
  return dg(e) || lg(e) || La(e) || cg();
}
function cg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lg(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function dg(e) {
  if (Array.isArray(e)) return Xn(e);
}
function Wo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wo(Object(n), !0).forEach(function(r) {
      ja(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ja(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function xt(e, t) {
  return fg(e) || ug(e, t) || La(e, t) || pg();
}
function pg() {
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
function ug(e, t) {
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
function fg(e) {
  if (Array.isArray(e)) return e;
}
var mg = typeof Tn == "function" ? Tn : Tn.default, gg = "file-invalid-type", vg = "file-too-large", hg = "file-too-small", bg = "too-many-files", xg = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: gg,
    message: "File type must be ".concat(r)
  };
}, Uo = function(t) {
  return {
    code: vg,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Ho = function(t) {
  return {
    code: hg,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, yg = {
  code: bg,
  message: "Too many files"
};
function wg(e) {
  return e.type === "" && typeof e.getAsFile == "function";
}
function Ba(e, t) {
  var n = e.type === "application/x-moz-file" || mg(e, t) || wg(e);
  return [n, n ? null : xg(t)];
}
function Va(e, t, n) {
  if (We(e.size))
    if (We(t) && We(n)) {
      if (e.size > n) return [!1, Uo(n)];
      if (e.size < t) return [!1, Ho(t)];
    } else {
      if (We(t) && e.size < t) return [!1, Ho(t)];
      if (We(n) && e.size > n) return [!1, Uo(n)];
    }
  return [!0, null];
}
function We(e) {
  return e != null;
}
function Eg(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, i = e.multiple, a = e.maxFiles, s = e.validator;
  return !i && t.length > 1 || i && a >= 1 && t.length > a ? !1 : t.every(function(c) {
    var l = Ba(c, n), p = xt(l, 1), d = p[0], u = Va(c, r, o), f = xt(u, 1), h = f[0], b = s ? s(c) : null;
    return d && h && !b;
  });
}
function Wt(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function st(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Yo(e) {
  e.preventDefault();
}
function Ng(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Dg(e) {
  return e.indexOf("Edge/") !== -1;
}
function Og() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Ng(e) || Dg(e);
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
function Sg() {
  return "showOpenFilePicker" in window;
}
function Cg(e) {
  if (We(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = xt(n, 2), o = r[0], i = r[1], a = !0;
      return Fa(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(za)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(n, r) {
      var o = xt(r, 2), i = o[0], a = o[1];
      return qo(qo({}, n), {}, ja({}, i, a));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function Ig(e) {
  if (We(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = xt(n, 2), o = r[0], i = r[1];
      return [].concat(Go(t), [o], Go(i));
    }, []).filter(function(t) {
      return Fa(t) || za(t);
    }).join(",");
}
function _g(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Ag(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Fa(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function za(e) {
  return /^.*\.[\w]+$/.test(e);
}
var kg = ["children"], Pg = ["open"], Rg = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Tg = ["refKey", "onChange", "onClick"];
function Ko(e) {
  return jg(e) || Mg(e) || Ga(e) || $g();
}
function $g() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mg(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jg(e) {
  if (Array.isArray(e)) return Jn(e);
}
function $n(e, t) {
  return Vg(e) || Bg(e, t) || Ga(e, t) || Lg();
}
function Lg() {
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
function Bg(e, t) {
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
function Vg(e) {
  if (Array.isArray(e)) return e;
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
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xo(Object(n), !0).forEach(function(r) {
      Zn(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xo(Object(n)).forEach(function(r) {
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
  var n = Fg(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Fg(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Tr = /* @__PURE__ */ ae(function(e, t) {
  var n = e.children, r = qt(e, kg), o = qa(r), i = o.open, a = qt(o, Pg);
  return Za(t, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ pe.createElement(Qa, null, n(de(de({}, a), {}, {
    open: i
  })));
});
Tr.displayName = "Dropzone";
var Wa = {
  disabled: !1,
  getFilesFromEvent: Qm,
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
  children: se.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: se.objectOf(se.arrayOf(se.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: se.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: se.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: se.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: se.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: se.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: se.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: se.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: se.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: se.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: se.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: se.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: se.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: se.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: se.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: se.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: se.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: se.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: se.func,
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
  onDrop: se.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: se.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: se.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: se.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: se.func
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
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = de(de({}, Wa), e), n = t.accept, r = t.disabled, o = t.getFilesFromEvent, i = t.maxSize, a = t.minSize, s = t.multiple, c = t.maxFiles, l = t.onDragEnter, p = t.onDragLeave, d = t.onDragOver, u = t.onDrop, f = t.onDropAccepted, h = t.onDropRejected, b = t.onFileDialogCancel, x = t.onFileDialogOpen, w = t.useFsAccessApi, E = t.autoFocus, N = t.preventDropOnDocument, y = t.noClick, v = t.noKeyboard, D = t.noDrag, A = t.noDragEventsBubbling, M = t.onError, U = t.validator, j = ze(function() {
    return Ig(n);
  }, [n]), X = ze(function() {
    return Cg(n);
  }, [n]), B = ze(function() {
    return typeof x == "function" ? x : Jo;
  }, [x]), H = ze(function() {
    return typeof b == "function" ? b : Jo;
  }, [b]), Y = Q(null), K = Q(null), me = Ja(zg, Qn), ve = $n(me, 2), ue = ve[0], te = ve[1], S = ue.isFocused, P = ue.isFileDialogActive, z = Q(typeof window < "u" && window.isSecureContext && w && Sg()), G = function() {
    !z.current && P && setTimeout(function() {
      if (K.current) {
        var V = K.current.files;
        V.length || (te({
          type: "closeDialog"
        }), H());
      }
    }, 300);
  };
  Ee(function() {
    return window.addEventListener("focus", G, !1), function() {
      window.removeEventListener("focus", G, !1);
    };
  }, [K, P, H, z]);
  var L = Q([]), q = Q([]), W = function(V) {
    Y.current && Y.current.contains(V.target) || (V.preventDefault(), L.current = []);
  };
  Ee(function() {
    return N && (document.addEventListener("dragover", Yo, !1), document.addEventListener("drop", W, !1)), function() {
      N && (document.removeEventListener("dragover", Yo), document.removeEventListener("drop", W));
    };
  }, [Y, N]), Ee(function() {
    var R = function(Re) {
      q.current = [].concat(Ko(q.current), [Re.target]), st(Re) && te({
        isDragGlobal: !0,
        type: "setDragGlobal"
      });
    }, V = function(Re) {
      q.current = q.current.filter(function($e) {
        return $e !== Re.target && $e !== null;
      }), !(q.current.length > 0) && te({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, ge = function() {
      q.current = [], te({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, he = function() {
      q.current = [], te({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    };
    return document.addEventListener("dragenter", R, !1), document.addEventListener("dragleave", V, !1), document.addEventListener("dragend", ge, !1), document.addEventListener("drop", he, !1), function() {
      document.removeEventListener("dragenter", R), document.removeEventListener("dragleave", V), document.removeEventListener("dragend", ge), document.removeEventListener("drop", he);
    };
  }, [Y]), Ee(function() {
    return !r && E && Y.current && Y.current.focus(), function() {
    };
  }, [Y, E, r]);
  var F = ce(function(R) {
    M ? M(R) : console.error(R);
  }, [M]), _ = ce(function(R) {
    R.preventDefault(), R.persist(), It(R), L.current = [].concat(Ko(L.current), [R.target]), st(R) && Promise.resolve(o(R)).then(function(V) {
      if (!(Wt(R) && !A)) {
        var ge = V.length, he = ge > 0 && Eg({
          files: V,
          accept: j,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: c,
          validator: U
        }), we = ge > 0 && !he;
        te({
          isDragAccept: he,
          isDragReject: we,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), l && l(R);
      }
    }).catch(function(V) {
      return F(V);
    });
  }, [o, l, F, A, j, a, i, s, c, U]), k = ce(function(R) {
    R.preventDefault(), R.persist(), It(R);
    var V = st(R);
    if (V && R.dataTransfer)
      try {
        R.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return V && d && d(R), !1;
  }, [d, A]), $ = ce(function(R) {
    R.preventDefault(), R.persist(), It(R);
    var V = L.current.filter(function(he) {
      return Y.current && Y.current.contains(he);
    }), ge = V.indexOf(R.target);
    ge !== -1 && V.splice(ge, 1), L.current = V, !(V.length > 0) && (te({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), st(R) && p && p(R));
  }, [Y, p, A]), ne = ce(function(R, V) {
    var ge = [], he = [];
    R.forEach(function(we) {
      var Re = Ba(we, j), $e = $n(Re, 2), tn = $e[0], nn = $e[1], rn = Va(we, a, i), _t = $n(rn, 2), on = _t[0], an = _t[1], sn = U ? U(we) : null;
      if (tn && on && !sn)
        ge.push(we);
      else {
        var cn = [nn, an];
        sn && (cn = cn.concat(sn)), he.push({
          file: we,
          errors: cn.filter(function(Ka) {
            return Ka;
          })
        });
      }
    }), (!s && ge.length > 1 || s && c >= 1 && ge.length > c) && (ge.forEach(function(we) {
      he.push({
        file: we,
        errors: [yg]
      });
    }), ge.splice(0)), te({
      acceptedFiles: ge,
      fileRejections: he,
      isDragReject: he.length > 0,
      type: "setFiles"
    }), u && u(ge, he, V), he.length > 0 && h && h(he, V), ge.length > 0 && f && f(ge, V);
  }, [te, s, j, a, i, c, u, f, h, U]), C = ce(function(R) {
    R.preventDefault(), R.persist(), It(R), L.current = [], st(R) && Promise.resolve(o(R)).then(function(V) {
      Wt(R) && !A || ne(V, R);
    }).catch(function(V) {
      return F(V);
    }), te({
      type: "reset"
    });
  }, [o, ne, F, A]), fe = ce(function() {
    if (z.current) {
      te({
        type: "openDialog"
      }), B();
      var R = {
        multiple: s,
        types: X
      };
      window.showOpenFilePicker(R).then(function(V) {
        return o(V);
      }).then(function(V) {
        ne(V, null), te({
          type: "closeDialog"
        });
      }).catch(function(V) {
        _g(V) ? (H(V), te({
          type: "closeDialog"
        })) : Ag(V) ? (z.current = !1, K.current ? (K.current.value = null, K.current.click()) : F(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : F(V);
      });
      return;
    }
    K.current && (te({
      type: "openDialog"
    }), B(), K.current.value = null, K.current.click());
  }, [te, B, H, w, ne, F, X, s]), Ve = ce(function(R) {
    !Y.current || !Y.current.isEqualNode(R.target) || (R.key === " " || R.key === "Enter" || R.keyCode === 32 || R.keyCode === 13) && (R.preventDefault(), fe());
  }, [Y, fe]), rt = ce(function() {
    te({
      type: "focus"
    });
  }, []), $r = ce(function() {
    te({
      type: "blur"
    });
  }, []), Mr = ce(function() {
    y || (Og() ? setTimeout(fe, 0) : fe());
  }, [y, fe]), Ke = function(V) {
    return r ? null : V;
  }, en = function(V) {
    return v ? null : Ke(V);
  }, Ct = function(V) {
    return D ? null : Ke(V);
  }, It = function(V) {
    A && V.stopPropagation();
  }, Ua = ze(function() {
    return function() {
      var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, V = R.refKey, ge = V === void 0 ? "ref" : V, he = R.role, we = R.onKeyDown, Re = R.onFocus, $e = R.onBlur, tn = R.onClick, nn = R.onDragEnter, rn = R.onDragOver, _t = R.onDragLeave, on = R.onDrop, an = qt(R, Rg);
      return de(de(Zn({
        onKeyDown: en(Te(we, Ve)),
        onFocus: en(Te(Re, rt)),
        onBlur: en(Te($e, $r)),
        onClick: Ke(Te(tn, Mr)),
        onDragEnter: Ct(Te(nn, _)),
        onDragOver: Ct(Te(rn, k)),
        onDragLeave: Ct(Te(_t, $)),
        onDrop: Ct(Te(on, C)),
        role: typeof he == "string" && he !== "" ? he : "presentation"
      }, ge, Y), !r && !v ? {
        tabIndex: 0
      } : {}), an);
    };
  }, [Y, Ve, rt, $r, Mr, _, k, $, C, v, D, r]), Ha = ce(function(R) {
    R.stopPropagation();
  }, []), Ya = ze(function() {
    return function() {
      var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, V = R.refKey, ge = V === void 0 ? "ref" : V, he = R.onChange, we = R.onClick, Re = qt(R, Tg), $e = Zn({
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
        onChange: Ke(Te(he, C)),
        onClick: Ke(Te(we, Ha)),
        tabIndex: -1
      }, ge, K);
      return de(de({}, $e), Re);
    };
  }, [K, n, s, C, r]);
  return de(de({}, ue), {}, {
    isFocused: S && !r,
    getRootProps: Ua,
    getInputProps: Ya,
    rootRef: Y,
    inputRef: K,
    open: Ke(fe)
  });
}
function zg(e, t) {
  switch (t.type) {
    case "focus":
      return de(de({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return de(de({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return de(de({}, Qn), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return de(de({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return de(de({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return de(de({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "setDragGlobal":
      return de(de({}, e), {}, {
        isDragGlobal: t.isDragGlobal
      });
    case "reset":
      return de({}, Qn);
    default:
      return e;
  }
}
function Jo() {
}
const Gg = (e) => e.startsWith("image/") ? Ls : e.startsWith("video/") ? ac : e.startsWith("audio/") ? Js : e.includes("pdf") || e.includes("document") ? ks : Rs, Zo = (e) => {
  if (e === 0) return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB", "GB"], r = Math.floor(Math.log(e) / Math.log(t));
  return parseFloat((e / Math.pow(t, r)).toFixed(2)) + " " + n[r];
};
function Zg({
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
  const [l, p] = be([]), [d, u] = be([]), f = ce(
    (N, y) => {
      if (N.length > 0) {
        const v = i ? [...l, ...N] : N;
        if (p(v), e(v), c) {
          const D = N.filter((A) => A.type.startsWith("image/")).map((A) => ({
            file: A,
            url: URL.createObjectURL(A)
          }));
          u((A) => i ? [...A, ...D] : D);
        }
      }
      y.length > 0 && t && t(y);
    },
    [l, i, e, t, c]
  ), h = (N) => {
    const y = l.filter((D) => D !== N);
    p(y), e(y);
    const v = d.find((D) => D.file === N);
    v && (URL.revokeObjectURL(v.url), u((D) => D.filter((A) => A.file !== N)));
  }, { getRootProps: b, getInputProps: x, isDragActive: w, isDragReject: E } = qa({
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
        ...b(),
        className: O(
          "flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl cursor-pointer",
          "transition-all duration-200 ease-out",
          "bg-gradient-to-b from-neutral-50 to-white",
          "border-primary/60 hover:border-primary",
          w && !E && "border-primary bg-gradient-to-b from-primary/5 to-accent/5 scale-[1.01]",
          E && "border-red-400 bg-red-50",
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
                w && "scale-110"
              ),
              children: /* @__PURE__ */ m(
                oc,
                {
                  className: O(
                    "w-8 h-8 text-primary",
                    w && "animate-bounce"
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ m("p", { className: "text-lg font-medium text-neutral-700 mb-1", children: w ? E ? "Archivo no permitido" : "Suelta los archivos aquí" : "Arrastra archivos aquí" }),
          /* @__PURE__ */ m("p", { className: "text-sm text-neutral-500 mb-3", children: "o haz clic para seleccionar" }),
          /* @__PURE__ */ I("p", { className: "text-xs text-neutral-400", children: [
            "PNG, JPG hasta ",
            Zo(o)
          ] })
        ]
      }
    ),
    l.length > 0 && /* @__PURE__ */ I("div", { className: "space-y-2", children: [
      /* @__PURE__ */ I("p", { className: "text-sm font-medium text-neutral-700", children: [
        "Archivos seleccionados (",
        l.length,
        ")"
      ] }),
      /* @__PURE__ */ m("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: l.map((N, y) => {
        const v = Gg(N.type), D = d.find((A) => A.file === N);
        return /* @__PURE__ */ I(
          "div",
          {
            className: O(
              "group flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-xl",
              "transition-all duration-200",
              "hover:shadow-md hover:border-primary/30"
            ),
            children: [
              D ? /* @__PURE__ */ m("div", { className: "w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100", children: /* @__PURE__ */ m(
                "img",
                {
                  src: D.url,
                  alt: N.name,
                  className: "w-full h-full object-cover"
                }
              ) }) : /* @__PURE__ */ m(
                "div",
                {
                  className: O(
                    "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
                    "bg-gradient-to-br from-primary/10 to-accent/10"
                  ),
                  children: /* @__PURE__ */ m(v, { className: "w-6 h-6 text-primary" })
                }
              ),
              /* @__PURE__ */ I("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ m("p", { className: "text-sm font-medium text-neutral-800 truncate", children: N.name }),
                /* @__PURE__ */ m("p", { className: "text-xs text-neutral-500", children: Zo(N.size) })
              ] }),
              /* @__PURE__ */ m(
                "button",
                {
                  type: "button",
                  onClick: (A) => {
                    A.stopPropagation(), h(N);
                  },
                  className: O(
                    "p-1.5 rounded-lg opacity-0 group-hover:opacity-100",
                    "text-neutral-400 hover:text-red-500 hover:bg-red-50",
                    "transition-all duration-200"
                  ),
                  children: /* @__PURE__ */ m(yt, { className: "w-4 h-4" })
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
const Wg = {
  default: "bg-neutral-100 text-neutral-700",
  primary: "bg-primary/10 text-primary",
  success: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700"
};
function Qg({ columns: e, onCardMove: t, className: n }) {
  return /* @__PURE__ */ m(Cr, { onDragEnd: (o) => {
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
        /* @__PURE__ */ m(Pr, { droppableId: o.id, children: (i, a) => /* @__PURE__ */ I(
          "div",
          {
            ref: i.innerRef,
            ...i.droppableProps,
            className: O(
              "p-3 min-h-[200px] space-y-3 transition-colors duration-200",
              a.isDraggingOver && "bg-primary/5"
            ),
            children: [
              o.cards.map((s, c) => /* @__PURE__ */ m(_r, { draggableId: s.id, index: c, children: (l, p) => /* @__PURE__ */ I(
                "div",
                {
                  ref: l.innerRef,
                  ...l.draggableProps,
                  className: O(
                    "group bg-white rounded-lg border border-neutral-200 overflow-hidden",
                    "transition-all duration-200",
                    "hover:shadow-md hover:border-primary/30",
                    p.isDragging && "shadow-xl ring-2 ring-primary/30 rotate-2"
                  ),
                  style: {
                    ...l.draggableProps.style
                  },
                  children: [
                    /* @__PURE__ */ I(
                      "div",
                      {
                        ...l.dragHandleProps,
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
                      s.tags && s.tags.length > 0 && /* @__PURE__ */ m("div", { className: "flex flex-wrap gap-1", children: s.tags.map((d, u) => /* @__PURE__ */ m(
                        "span",
                        {
                          className: O(
                            "px-2 py-0.5 text-xs font-medium rounded-full",
                            Wg[d.variant || "default"]
                          ),
                          children: d.label
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
function ev({
  items: e,
  onReorder: t,
  className: n,
  cardClassName: r,
  droppableId: o = "draggable-cards",
  direction: i = "vertical"
}) {
  return /* @__PURE__ */ m(Cr, { onDragEnd: (s) => {
    if (!s.destination) return;
    const c = Array.from(e), [l] = c.splice(s.source.index, 1);
    c.splice(s.destination.index, 0, l), t(c);
  }, children: /* @__PURE__ */ m(Pr, { droppableId: o, direction: i, children: (s) => /* @__PURE__ */ I(
    "div",
    {
      ref: s.innerRef,
      ...s.droppableProps,
      className: O(
        i === "horizontal" ? "flex gap-4" : "space-y-4",
        n
      ),
      children: [
        e.map((c, l) => /* @__PURE__ */ m(_r, { draggableId: c.id, index: l, children: (p, d) => /* @__PURE__ */ I(
          "div",
          {
            ref: p.innerRef,
            ...p.draggableProps,
            className: O(
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
                            d.isDragging && "text-primary"
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
function tv({
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
  Fc as Alert,
  ci as Avatar,
  Mc as Badge,
  Gc as Breadcrumb,
  $t as Button,
  Ic as Card,
  Ac as CardBody,
  Pc as CardFooter,
  _c as CardHeader,
  Oc as Checkbox,
  Zc as ConfirmModal,
  ev as DraggableCard,
  Zg as FileDropzone,
  pi as Header,
  jn as Input,
  Qg as KanbanBoard,
  zc as Layout,
  rl as LoginPage,
  fi as Modal,
  Nc as MultiSelect,
  Xc as Pagination,
  Sc as Radio,
  vc as Select,
  di as Sidebar,
  tv as SingleDraggableCard,
  Jg as SortableList,
  Yc as TabPanel,
  Yg as Table,
  Hc as Tabs,
  Dc as Textarea,
  mi as Toast,
  nl as ToastContainer,
  Kg as ToastProvider,
  O as cn,
  Xg as useToast
};
//# sourceMappingURL=index.js.map
