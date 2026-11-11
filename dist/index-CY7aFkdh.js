import { jsxs as v, jsx as i, Fragment as fe } from "react/jsx-runtime";
import Oa, { forwardRef as X, createElement as it, useState as re, useRef as ce, useCallback as U, useMemo as he, useEffect as ue, useId as Jt, useContext as ft, createContext as xt, useLayoutEffect as Ta, useReducer as Ma, useImperativeHandle as za, Fragment as $a } from "react";
import { createPortal as Ra } from "react-dom";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = (...e) => e.filter((t, a, n) => !!t && t.trim() !== "" && n.indexOf(t) === a).join(" ").trim();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fa = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ia = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, n) => n ? n.toUpperCase() : a.toLowerCase()
);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kt = (e) => {
  const t = Ia(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var La = {
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
const qa = (e) => {
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
const Ba = X(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: n,
    className: r = "",
    children: o,
    iconNode: l,
    ...s
  }, p) => it(
    "svg",
    {
      ref: p,
      ...La,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(a) * 24 / Number(t) : a,
      className: Xt("lucide", r),
      ...!o && !qa(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...l.map(([d, c]) => it(d, c)),
      ...Array.isArray(o) ? o : [o]
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
  const a = X(
    ({ className: n, ...r }, o) => it(Ba, {
      ref: o,
      iconNode: t,
      className: Xt(
        `lucide-${Fa(kt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...r
    })
  );
  return a.displayName = kt(e), a;
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wa = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Ha = ee("arrow-down", Wa);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ka = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Ua = ee("arrow-up-down", Ka);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Va = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Ya = ee("arrow-up", Va);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ga = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Ie = ee("check", Ga);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Za = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], De = ee("chevron-down", Za);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qa = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ja = ee("chevron-left", Qa);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xa = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], vt = ee("chevron-right", Xa);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const en = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], tn = ee("chevrons-left", en);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const an = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], nn = ee("chevrons-right", an);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rn = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], ht = ee("circle-alert", rn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const on = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], ea = ee("circle-check-big", on);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ln = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], sn = ee("copy", ln);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cn = [
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
], pn = ee("eye-off", cn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dn = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], un = ee("eye", dn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mn = [
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
], fn = ee("file-text", mn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xn = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], vn = ee("file", xn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hn = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], gn = ee("globe", hn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bn = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], yn = ee("house", bn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], kn = ee("image", wn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], ta = ee("info", Nn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jn = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], En = ee("loader-circle", jn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], _n = ee("lock", Cn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dn = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], An = ee("log-out", Dn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sn = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], Pn = ee("mail", Sn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const On = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], Tn = ee("menu", On);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = [["path", { d: "M5 12h14", key: "1ays0h" }]], zn = ee("minus", Mn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], Rn = ee("music", $n);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], In = ee("search", Fn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ln = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], aa = ee("triangle-alert", Ln);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Bn = ee("upload", qn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], Hn = ee("video", Wn);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], je = ee("x", Kn);
function na(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (a = na(e[t])) && (n && (n += " "), n += a);
  } else for (a in e) e[a] && (n && (n += " "), n += a);
  return n;
}
function Un() {
  for (var e, t, a = 0, n = "", r = arguments.length; a < r; a++) (e = arguments[a]) && (t = na(e)) && (n && (n += " "), n += t);
  return n;
}
function h(...e) {
  return Un(e);
}
const Vn = {
  // v3: the action colour. Pink-to-violet gradient (tenant-overridable token),
  // white text >= 4.6:1 on both ends, soft pink glow.
  primary: "bg-[image:var(--omni-gradient-action)] text-white shadow-[var(--omni-shadow-action)] enabled:hover:brightness-95 focus:ring-accent",
  secondary: "bg-primary-soft text-primary-ink border border-primary-line enabled:hover:bg-[#E7E5F4] focus:ring-primary",
  accept: "bg-success text-white hover:bg-success-dark active:bg-success-dark focus:ring-success",
  danger: "bg-error text-white hover:bg-error-dark active:bg-error-dark focus:ring-error",
  info: "bg-info text-white hover:bg-info-dark active:bg-info-dark focus:ring-info",
  outline: "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary"
}, Yn = "bg-transparent text-neutral-700 hover:bg-primary-soft hover:text-primary-ink active:bg-primary-line focus:ring-primary", Gn = "bg-transparent text-neutral-700 hover:bg-error-soft hover:text-error-dark active:bg-error-soft focus:ring-error", Zn = {
  xs: "px-2.5 py-1 text-2xs gap-1",
  sm: "px-3 py-1.5 text-xs gap-1.5",
  md: "px-4 py-2 text-[13px] leading-5 gap-2",
  lg: "px-5 py-2.5 text-sm gap-2.5"
}, Qn = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20
}, ze = X(
  ({
    variant: e = "primary",
    size: t = "md",
    loading: a = !1,
    ghost: n = !1,
    leftIcon: r,
    rightIcon: o,
    fullWidth: l = !1,
    disabled: s,
    className: p,
    children: d,
    ...c
  }, m) => {
    const g = s || a;
    return /* @__PURE__ */ v(
      "button",
      {
        ref: m,
        disabled: g,
        className: h(
          // Base styles
          "inline-flex items-center justify-center font-semibold rounded-xl",
          // State motion only: colour, shadow and a 1px lift on hover.
          "transition-[background-color,box-shadow,transform,filter,color] duration-150",
          "enabled:hover:-translate-y-px enabled:hover:shadow-[0_3px_10px_#1A124018] motion-reduce:transform-none",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          // Variant styles
          n ? e === "danger" ? Gn : Yn : Vn[e],
          // Size styles
          Zn[t],
          // Full width
          l && "w-full",
          // Disabled state
          g && "opacity-50 cursor-not-allowed",
          p
        ),
        ...c,
        children: [
          a ? /* @__PURE__ */ i(En, { className: "animate-spin", size: Qn[t] }) : r,
          d,
          !a && o
        ]
      }
    );
  }
);
ze.displayName = "Button";
const Jn = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-3.5 py-2 text-[13px] leading-5",
  lg: "px-4 py-2.5 text-sm"
}, Xn = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, ei = {
  sm: "pr-8",
  md: "pr-10",
  lg: "pr-12"
}, rt = X(
  ({
    size: e = "md",
    label: t,
    helperText: a,
    error: n,
    leftIcon: r,
    rightIcon: o,
    fullWidth: l = !1,
    disabled: s,
    className: p,
    id: d,
    ...c
  }, m) => {
    const g = d || `input-${Math.random().toString(36).slice(2, 9)}`, f = !!n;
    return /* @__PURE__ */ v("div", { className: h("flex flex-col gap-1.5", l && "w-full"), children: [
      t && /* @__PURE__ */ i(
        "label",
        {
          htmlFor: g,
          className: "text-xs font-semibold text-neutral-600",
          children: t
        }
      ),
      /* @__PURE__ */ v("div", { className: "relative", children: [
        r && /* @__PURE__ */ i("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: r }),
        /* @__PURE__ */ i(
          "input",
          {
            ref: m,
            id: g,
            disabled: s,
            className: h(
              // Base styles
              "w-full rounded-[10px] border bg-white",
              "transition-colors duration-200",
              "placeholder:text-neutral-500",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              Jn[e],
              // Icon padding
              r && Xn[e],
              o && ei[e],
              // Border color
              f ? "border-error focus:ring-error focus:border-error" : "border-control",
              // Disabled state
              s && "!bg-neutral-100 text-neutral-500 cursor-not-allowed",
              p
            ),
            "aria-invalid": f,
            "aria-describedby": f ? `${g}-error` : a ? `${g}-helper` : void 0,
            ...c
          }
        ),
        o && /* @__PURE__ */ i("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: o })
      ] }),
      f && /* @__PURE__ */ i("p", { id: `${g}-error`, className: "text-xs text-error", children: n }),
      !f && a && /* @__PURE__ */ i("p", { id: `${g}-helper`, className: "text-xs text-neutral-500", children: a })
    ] });
  }
);
rt.displayName = "Input";
const ti = {
  sm: "px-3 py-1.5 text-xs pr-8",
  md: "px-3.5 py-2 text-[13px] leading-5 pr-10",
  lg: "px-4 py-2.5 text-sm pr-12"
}, ai = {
  sm: "pl-8",
  md: "pl-10",
  lg: "pl-12"
}, ni = {
  sm: "min-h-[32px] px-3 py-1 text-xs",
  md: "min-h-[38px] px-3.5 py-1.5 text-[13px]",
  lg: "min-h-[44px] px-4 py-2 text-sm"
}, ii = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, ri = {
  sm: 14,
  md: 16,
  lg: 20
}, ia = X(
  ({
    size: e = "md",
    label: t,
    helperText: a,
    error: n,
    options: r,
    placeholder: o,
    fullWidth: l = !1,
    searchable: s = !1,
    disabled: p,
    leftIcon: d,
    className: c,
    id: m,
    value: g,
    defaultValue: f,
    onChange: E,
    name: A,
    ...M
  }, k) => {
    var H;
    const w = m || `select-${Math.random().toString(36).slice(2, 9)}`, D = !!n, b = g !== void 0, [u, y] = re(
      f !== void 0 ? String(f) : ""
    ), z = b ? String(g ?? "") : u, Z = ((H = r.find((N) => N.value === z)) == null ? void 0 : H.label) ?? "", [q, j] = re(""), [T, Y] = re(!1), [V, I] = re(-1), F = ce(null), Q = ce(null), J = ce(null), te = ce(null), B = U(
      (N) => {
        te.current = N, typeof k == "function" ? k(N) : k && (k.current = N);
      },
      [k]
    ), x = he(() => r.filter(
      (N) => !q || N.label.toLowerCase().includes(q.toLowerCase())
    ), [r, q]), C = U((N) => {
      var P;
      const $ = te.current;
      if (!$) return;
      const ae = (P = Object.getOwnPropertyDescriptor(
        HTMLSelectElement.prototype,
        "value"
      )) == null ? void 0 : P.set;
      ae == null || ae.call($, N), $.dispatchEvent(new Event("change", { bubbles: !0 }));
    }, []), R = U(
      (N) => {
        b || y(N.target.value), E == null || E(N), Y(!1), j(""), I(-1);
      },
      [b, E]
    ), L = U(
      (N) => {
        if (p) return;
        const $ = r.find((ae) => ae.value === N);
        $ != null && $.disabled || C(N);
      },
      [p, r, C]
    ), W = U(
      (N, $) => {
        const ae = x.length;
        if (ae === 0) return -1;
        for (let P = 0; P < ae; P++) {
          const de = (N + $ * (P + 1) + ae) % ae;
          if (!x[de].disabled) return de;
        }
        return -1;
      },
      [x]
    ), G = U(() => x.findIndex((N) => !N.disabled), [x]), _ = U(
      (N) => {
        if (!p)
          switch (N.key) {
            case "ArrowDown": {
              N.preventDefault(), T ? I(($) => W($, 1)) : (Y(!0), I(G()));
              break;
            }
            case "ArrowUp": {
              N.preventDefault(), T && I(($) => W($, -1));
              break;
            }
            case "Enter": {
              if (N.preventDefault(), T && V >= 0 && V < x.length) {
                const $ = x[V];
                $.disabled || L($.value);
              } else T || Y(!0);
              break;
            }
            case "Escape": {
              N.preventDefault(), Y(!1), I(-1);
              break;
            }
          }
      },
      [
        p,
        T,
        V,
        x,
        L,
        W,
        G
      ]
    );
    ue(() => {
      if (!s) return;
      const N = ($) => {
        F.current && !F.current.contains($.target) && (Y(!1), I(-1), j(""));
      };
      return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
    }, [s]), ue(() => {
      var N;
      V >= 0 && J.current && ((N = J.current.querySelectorAll('[role="option"]')[V]) == null || N.scrollIntoView({ block: "nearest" }));
    }, [V]);
    const S = () => {
      var N;
      p || ((N = Q.current) == null || N.focus(), Y(!0));
    };
    return s ? /* @__PURE__ */ v("div", { className: h("flex flex-col gap-1.5", l && "w-full"), children: [
      t && /* @__PURE__ */ i(
        "label",
        {
          htmlFor: `${w}-input`,
          className: "text-xs font-semibold text-neutral-600",
          children: t
        }
      ),
      /* @__PURE__ */ v("div", { ref: F, className: "relative", children: [
        d && /* @__PURE__ */ i("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none z-10", children: d }),
        /* @__PURE__ */ i(
          "div",
          {
            onClick: S,
            className: h(
              // Base styles
              "flex items-center gap-1.5 w-full rounded-[10px] border bg-white cursor-text",
              "transition-colors duration-200",
              // Size styles
              ni[e],
              // Left icon padding
              d && ii[e],
              // Right padding for chevron
              "pr-8",
              // Focus ring (applied when dropdown is open)
              T && !D && "ring-2 ring-primary border-primary",
              T && D && "ring-2 ring-error border-error",
              // Border color
              D ? "border-error" : "border-control",
              // Disabled state
              p && "!bg-neutral-100 text-neutral-500 cursor-not-allowed",
              c
            ),
            "aria-invalid": D,
            "aria-describedby": D ? `${w}-error` : a ? `${w}-helper` : void 0,
            children: /* @__PURE__ */ i(
              "input",
              {
                ref: Q,
                id: `${w}-input`,
                type: "text",
                value: T ? q : Z,
                onChange: (N) => {
                  j(N.target.value), T || Y(!0), I(0);
                },
                onFocus: () => {
                  p || Y(!0);
                },
                onKeyDown: _,
                placeholder: Z || o,
                disabled: p,
                className: h(
                  "flex-1 min-w-[60px] outline-none bg-transparent",
                  "placeholder:text-neutral-500",
                  p && "cursor-not-allowed"
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
        /* @__PURE__ */ i(
          De,
          {
            className: h(
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none transition-transform duration-200",
              T && "rotate-180"
            ),
            size: ri[e]
          }
        ),
        T && /* @__PURE__ */ i(
          "ul",
          {
            ref: J,
            id: `${w}-listbox`,
            role: "listbox",
            className: h(
              "absolute z-50 mt-1 w-full rounded-xl border border-neutral-200 bg-white p-1 shadow-menu",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: x.length === 0 ? /* @__PURE__ */ i("li", { className: "px-3 py-2 text-xs text-neutral-500", children: q ? "No matching options" : "No options available" }) : x.map((N, $) => /* @__PURE__ */ i(
              "li",
              {
                id: `${w}-option-${$}`,
                role: "option",
                "aria-selected": N.value === z,
                "aria-disabled": N.disabled,
                onClick: () => {
                  N.disabled || L(N.value);
                },
                className: h(
                  "rounded-[7px] px-3 py-2 text-[13px] leading-5 transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  N.disabled ? "text-neutral-400 cursor-not-allowed select-none" : h(
                    "cursor-pointer",
                    $ === V ? "bg-primary-soft text-primary-ink font-semibold" : "text-neutral-700 hover:bg-primary-soft"
                  )
                ),
                children: N.label
              },
              N.value
            ))
          }
        ),
        /* @__PURE__ */ v(
          "select",
          {
            ref: B,
            id: w,
            name: A,
            disabled: p,
            ...b ? { value: g } : { defaultValue: f },
            onChange: R,
            className: "sr-only",
            tabIndex: -1,
            "aria-hidden": "true",
            ...M,
            children: [
              o && /* @__PURE__ */ i("option", { value: "", disabled: !0, children: o }),
              r.map((N) => /* @__PURE__ */ i("option", { value: N.value, disabled: N.disabled, children: N.label }, N.value))
            ]
          }
        )
      ] }),
      D && /* @__PURE__ */ i("p", { id: `${w}-error`, className: "text-xs text-error", children: n }),
      !D && a && /* @__PURE__ */ i("p", { id: `${w}-helper`, className: "text-xs text-neutral-500", children: a })
    ] }) : /* @__PURE__ */ v("div", { className: h("flex flex-col gap-1.5", l && "w-full"), children: [
      t && /* @__PURE__ */ i(
        "label",
        {
          htmlFor: w,
          className: "text-xs font-semibold text-neutral-600",
          children: t
        }
      ),
      /* @__PURE__ */ v("div", { className: "relative", children: [
        d && /* @__PURE__ */ i("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none", children: d }),
        /* @__PURE__ */ v(
          "select",
          {
            ref: k,
            id: w,
            name: A,
            disabled: p,
            value: g,
            defaultValue: f,
            onChange: E,
            className: h(
              // Base styles
              "w-full rounded-[10px] border bg-white appearance-none cursor-pointer text-neutral-800",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              // Size styles
              ti[e],
              // Icon padding
              d && ai[e],
              // Border color
              D ? "border-error focus:ring-error focus:border-error" : "border-control",
              // Disabled state
              p && "!bg-neutral-100 text-neutral-500 cursor-not-allowed",
              c
            ),
            "aria-invalid": D,
            "aria-describedby": D ? `${w}-error` : a ? `${w}-helper` : void 0,
            ...M,
            children: [
              o && /* @__PURE__ */ i("option", { value: "", disabled: !0, children: o }),
              r.map((N) => /* @__PURE__ */ i("option", { value: N.value, disabled: N.disabled, children: N.label }, N.value))
            ]
          }
        ),
        /* @__PURE__ */ i(
          De,
          {
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none",
            size: e === "sm" ? 14 : e === "lg" ? 20 : 16
          }
        )
      ] }),
      D && /* @__PURE__ */ i("p", { id: `${w}-error`, className: "text-xs text-error", children: n }),
      !D && a && /* @__PURE__ */ i("p", { id: `${w}-helper`, className: "text-xs text-neutral-500", children: a })
    ] });
  }
);
ia.displayName = "Select";
const oi = {
  sm: "min-h-[32px] px-3 py-1 text-xs",
  md: "min-h-[38px] px-3.5 py-1.5 text-[13px]",
  lg: "min-h-[44px] px-4 py-2 text-sm"
}, li = {
  sm: "px-1.5 py-0.5 text-2xs gap-0.5",
  md: "px-2 py-0.5 text-xs gap-1",
  lg: "px-2.5 py-1 text-xs gap-1"
}, si = {
  sm: "pl-7",
  md: "pl-9",
  lg: "pl-11"
}, ci = {
  sm: 12,
  md: 14,
  lg: 14
}, pi = {
  sm: 14,
  md: 16,
  lg: 20
}, di = { base: "bg-primary-soft text-primary-ink", hover: "hover:bg-primary-line" }, ui = X(
  ({
    options: e,
    value: t,
    defaultValue: a = [],
    onChange: n,
    size: r = "md",
    label: o,
    helperText: l,
    error: s,
    placeholder: p = "Select...",
    fullWidth: d = !1,
    disabled: c = !1,
    maxItems: m,
    searchable: g = !0,
    leftIcon: f,
    className: E,
    id: A
  }, M) => {
    const k = A || `multiselect-${Math.random().toString(36).slice(2, 9)}`, w = !!s, D = t !== void 0, [b, u] = re(a), y = D ? t : b, [z, Z] = re(""), [q, j] = re(!1), [T, Y] = re(-1), V = ce(null), I = ce(null), F = ce(null), Q = U(
      (_) => {
        D || u(_), n == null || n(_);
      },
      [D, n]
    ), J = he(() => e.filter((_) => {
      const S = y.includes(_.value), H = !z || _.label.toLowerCase().includes(z.toLowerCase());
      return !S && H;
    }), [e, y, z]), te = m === void 0 || y.length < m, B = U(
      (_) => {
        var N;
        if (!te || c) return;
        const S = e.find(($) => $.value === _);
        if (S != null && S.disabled) return;
        const H = [...y, _];
        Q(H), Z(""), Y(-1), (N = I.current) == null || N.focus();
      },
      [te, c, e, y, Q]
    ), x = U(
      (_, S) => {
        var N;
        if (S == null || S.stopPropagation(), c) return;
        const H = y.filter(($) => $ !== _);
        Q(H), (N = I.current) == null || N.focus();
      },
      [c, y, Q]
    ), C = U(
      (_, S) => {
        const H = J.length;
        if (H === 0) return -1;
        for (let N = 0; N < H; N++) {
          const $ = (_ + S * (N + 1) + H) % H;
          if (!J[$].disabled) return $;
        }
        return -1;
      },
      [J]
    ), R = U(() => J.findIndex((_) => !_.disabled), [J]), L = U(
      (_) => {
        if (!c)
          switch (_.key) {
            case "ArrowDown": {
              _.preventDefault(), q ? Y((S) => C(S, 1)) : (j(!0), Y(R()));
              break;
            }
            case "ArrowUp": {
              _.preventDefault(), q && Y((S) => C(S, -1));
              break;
            }
            case "Enter": {
              if (_.preventDefault(), q && T >= 0 && T < J.length) {
                const S = J[T];
                S.disabled || B(S.value);
              } else q || j(!0);
              break;
            }
            case "Backspace": {
              if (z === "" && y.length > 0) {
                const S = y[y.length - 1];
                x(S);
              }
              break;
            }
            case "Escape": {
              _.preventDefault(), j(!1), Y(-1);
              break;
            }
          }
      },
      [
        c,
        q,
        T,
        B,
        z,
        y,
        x,
        C,
        R
      ]
    );
    ue(() => {
      const _ = (S) => {
        V.current && !V.current.contains(S.target) && (j(!1), Y(-1), Z(""));
      };
      return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
    }, []), ue(() => {
      var _;
      T >= 0 && F.current && ((_ = F.current.querySelectorAll('[role="option"]')[T]) == null || _.scrollIntoView({ block: "nearest" }));
    }, [T]);
    const W = () => {
      var _;
      c || ((_ = I.current) == null || _.focus(), j(!0));
    }, G = (_) => {
      var S;
      return ((S = e.find((H) => H.value === _)) == null ? void 0 : S.label) ?? _;
    };
    return /* @__PURE__ */ v("div", { ref: M, className: h("flex flex-col gap-1.5", d && "w-full"), children: [
      o && /* @__PURE__ */ i("label", { htmlFor: `${k}-input`, className: "text-xs font-semibold text-neutral-600", children: o }),
      /* @__PURE__ */ v("div", { ref: V, className: "relative", children: [
        f && /* @__PURE__ */ i("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none z-10", children: f }),
        /* @__PURE__ */ v(
          "div",
          {
            onClick: W,
            className: h(
              // Base styles
              "flex flex-wrap items-center gap-1.5 w-full rounded-[10px] border bg-white cursor-text",
              "transition-colors duration-200",
              // Size styles
              oi[r],
              // Left icon padding
              f && si[r],
              // Right padding for chevron
              "pr-8",
              // Focus ring (applied when dropdown is open)
              q && !w && "ring-2 ring-primary border-primary",
              q && w && "ring-2 ring-error border-error",
              // Border color
              w ? "border-error" : "border-control",
              // Disabled state
              c && "!bg-neutral-100 text-neutral-500 cursor-not-allowed",
              E
            ),
            "aria-invalid": w,
            "aria-describedby": w ? `${k}-error` : l ? `${k}-helper` : void 0,
            children: [
              y.map((_) => {
                const S = di;
                return /* @__PURE__ */ v(
                  "span",
                  {
                    className: h(
                      "inline-flex items-center rounded-full font-semibold",
                      "transition-colors duration-150",
                      S.base,
                      !c && S.hover,
                      li[r]
                    ),
                    children: [
                      G(_),
                      !c && /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          onClick: (H) => x(_, H),
                          className: h(
                            "inline-flex items-center justify-center rounded-sm transition-colors",
                            S.hover
                          ),
                          "aria-label": `Remove ${G(_)}`,
                          tabIndex: -1,
                          children: /* @__PURE__ */ i(je, { size: ci[r] })
                        }
                      )
                    ]
                  },
                  _
                );
              }),
              g ? /* @__PURE__ */ i(
                "input",
                {
                  ref: I,
                  id: `${k}-input`,
                  type: "text",
                  value: z,
                  onChange: (_) => {
                    Z(_.target.value), q || j(!0), Y(0);
                  },
                  onFocus: () => {
                    c || j(!0);
                  },
                  onKeyDown: L,
                  placeholder: y.length === 0 ? p : "",
                  disabled: c,
                  className: h(
                    "flex-1 min-w-[60px] outline-none bg-transparent",
                    "placeholder:text-neutral-500",
                    c && "cursor-not-allowed"
                  ),
                  role: "combobox",
                  "aria-expanded": q,
                  "aria-controls": `${k}-listbox`,
                  "aria-activedescendant": T >= 0 ? `${k}-option-${T}` : void 0,
                  "aria-autocomplete": "list",
                  autoComplete: "off"
                }
              ) : /* @__PURE__ */ v(fe, { children: [
                y.length === 0 && /* @__PURE__ */ i("span", { className: "text-neutral-500", children: p }),
                /* @__PURE__ */ i(
                  "input",
                  {
                    ref: I,
                    id: `${k}-input`,
                    className: "absolute opacity-0 w-0 h-0",
                    onFocus: () => {
                      c || j(!0);
                    },
                    onKeyDown: L,
                    disabled: c,
                    tabIndex: 0,
                    role: "combobox",
                    "aria-expanded": q,
                    "aria-controls": `${k}-listbox`,
                    "aria-activedescendant": T >= 0 ? `${k}-option-${T}` : void 0,
                    readOnly: !0
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ i(
          De,
          {
            className: h(
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none transition-transform duration-200",
              q && "rotate-180"
            ),
            size: pi[r]
          }
        ),
        q && /* @__PURE__ */ i(
          "ul",
          {
            ref: F,
            id: `${k}-listbox`,
            role: "listbox",
            "aria-multiselectable": "true",
            className: h(
              "absolute z-50 mt-1 w-full rounded-xl border border-neutral-200 bg-white p-1 shadow-menu",
              "max-h-60 overflow-auto",
              "py-1"
            ),
            children: J.length === 0 ? /* @__PURE__ */ i("li", { className: "px-3 py-2 text-xs text-neutral-500", children: z ? "No matching options" : "No options available" }) : J.map((_, S) => /* @__PURE__ */ i(
              "li",
              {
                id: `${k}-option-${S}`,
                role: "option",
                "aria-selected": y.includes(_.value),
                "aria-disabled": _.disabled || !te,
                onClick: () => {
                  !_.disabled && te && B(_.value);
                },
                className: h(
                  "rounded-[7px] px-3 py-2 text-[13px] leading-5 transition-colors duration-100",
                  // Disabled state (takes precedence over other visual states)
                  _.disabled || !te ? "text-neutral-400 cursor-not-allowed select-none" : h(
                    "cursor-pointer",
                    S === T ? "bg-primary-soft text-primary-ink font-semibold" : "text-neutral-700 hover:bg-primary-soft"
                  )
                ),
                children: _.label
              },
              _.value
            ))
          }
        )
      ] }),
      w && /* @__PURE__ */ i("p", { id: `${k}-error`, className: "text-xs text-error", children: s }),
      !w && l && /* @__PURE__ */ i("p", { id: `${k}-helper`, className: "text-xs text-neutral-500", children: l })
    ] });
  }
);
ui.displayName = "MultiSelect";
const mi = {
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
function fi(e, t) {
  return e.startsWith("bottom") ? { marginTop: t } : e.startsWith("top") ? { marginBottom: t } : e.startsWith("left") ? { marginRight: t } : e.startsWith("right") ? { marginLeft: t } : {};
}
const ra = X(
  ({
    trigger: e,
    children: t,
    placement: a = "bottom-start",
    offset: n = 4,
    disabled: r = !1,
    open: o,
    onOpenChange: l,
    triggerClassName: s,
    contentClassName: p,
    className: d,
    ...c
  }, m) => {
    const g = o !== void 0, [f, E] = re(!1), A = g ? o : f, M = ce(null), k = ce(null), w = ce(null), D = U(
      (Z) => {
        g || E(Z), l == null || l(Z);
      },
      [g, l]
    ), b = U(() => D(!1), [D]), u = U(() => {
      r || D(!A);
    }, [r, A, D]), y = U(
      (Z) => {
        var q;
        Z.key === "Escape" && (Z.preventDefault(), b(), (q = w.current) == null || q.focus()), Z.key === "Tab" && b();
      },
      [b]
    );
    ue(() => {
      const Z = (q) => {
        M.current && !M.current.contains(q.target) && b();
      };
      return document.addEventListener("mousedown", Z), () => document.removeEventListener("mousedown", Z);
    }, [b]);
    const z = `dropdown-${ce(Math.random().toString(36).slice(2, 9)).current}`;
    return /* @__PURE__ */ v(
      "div",
      {
        ref: M,
        className: h("relative inline-flex items-center", d),
        ...c,
        children: [
          /* @__PURE__ */ i(
            "div",
            {
              ref: w,
              role: "button",
              tabIndex: r ? -1 : 0,
              "aria-haspopup": "true",
              "aria-expanded": A,
              "aria-controls": A ? `${z}-panel` : void 0,
              "aria-disabled": r,
              onClick: u,
              onKeyDown: y,
              className: h(
                "inline-flex",
                s,
                r && "opacity-50 cursor-not-allowed pointer-events-none"
              ),
              children: e
            }
          ),
          A && /* @__PURE__ */ i(
            "div",
            {
              ref: (Z) => {
                k.current = Z, typeof m == "function" ? m(Z) : m && (m.current = Z);
              },
              id: `${z}-panel`,
              onKeyDown: y,
              style: fi(a, n),
              className: h(
                "absolute z-50 w-max",
                "rounded-xl border border-neutral-200 bg-white p-1 shadow-menu",
                "animate-fade-in",
                mi[a],
                p
              ),
              children: t
            }
          )
        ]
      }
    );
  }
);
ra.displayName = "Dropdown";
const xi = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-4 py-2.5 text-base"
}, vi = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5"
}, hi = X(
  ({
    card: e,
    items: t,
    onSelect: a,
    trigger: n,
    placement: r = "bottom-start",
    offset: o = 4,
    size: l = "md",
    disabled: s = !1,
    className: p,
    ...d
  }, c) => {
    const [m, g] = re(!1), [f, E] = re(-1), A = ce(null), M = t.filter((j) => !j.disabled), k = U(
      (j, T) => {
        const Y = t.length;
        if (Y === 0) return -1;
        for (let V = 0; V < Y; V++) {
          const I = (j + T * (V + 1) + Y) % Y;
          if (!t[I].disabled) return I;
        }
        return -1;
      },
      [t]
    ), w = U(() => t.findIndex((j) => !j.disabled), [t]), D = U(() => {
      for (let j = t.length - 1; j >= 0; j--)
        if (!t[j].disabled) return j;
      return -1;
    }, [t]), b = U(() => {
      s || M.length === 0 || (g(!0), E(-1));
    }, [s, M.length]), u = U(() => {
      g(!1), E(-1);
    }, []), y = U(
      (j) => {
        var T;
        j.disabled || ((T = j.onClick) == null || T.call(j), a == null || a(j.value), u());
      },
      [a, u]
    ), z = U(
      (j) => {
        j ? b() : u();
      },
      [b, u]
    ), Z = U(
      (j) => {
        if (!s)
          switch (j.key) {
            case "ArrowDown": {
              j.preventDefault(), m ? E(
                (T) => T === -1 ? w() : k(T, 1)
              ) : b();
              break;
            }
            case "ArrowUp": {
              j.preventDefault(), m ? E(
                (T) => T === -1 ? D() : k(T, -1)
              ) : b();
              break;
            }
            case "Enter":
            case " ": {
              if (j.preventDefault(), m && f >= 0 && f < t.length) {
                const T = t[f];
                T.href && !T.disabled && (window.location.href = T.href), y(T);
              } else m || b();
              break;
            }
          }
      },
      [
        s,
        m,
        f,
        t,
        b,
        y,
        k,
        w,
        D
      ]
    );
    ue(() => {
      var j;
      f >= 0 && A.current && ((j = A.current.querySelectorAll('[role="menuitem"]')[f]) == null || j.scrollIntoView({ block: "nearest" }));
    }, [f]);
    const q = (j, T) => {
      const Y = T === f, V = /* @__PURE__ */ v(fe, { children: [
        j.icon && /* @__PURE__ */ i(
          "span",
          {
            className: h(
              "flex-shrink-0",
              vi[l],
              j.danger && !j.disabled ? "text-error" : "text-neutral-400",
              Y && !j.danger && "text-primary"
            ),
            children: j.icon
          }
        ),
        /* @__PURE__ */ i("span", { className: "flex-1 truncate", children: j.label }),
        j.badge && /* @__PURE__ */ i("span", { className: "text-xs text-neutral-500", children: j.badge })
      ] }), I = h(
        "flex items-center gap-2 w-full rounded-[7px] text-[13px]",
        "transition-colors duration-100",
        xi[l],
        j.disabled ? "text-neutral-300 cursor-not-allowed opacity-50" : h(
          "cursor-pointer",
          j.danger ? h("text-error", Y ? "bg-error/10" : "hover:bg-error/10") : h(
            "text-neutral-700",
            Y ? "bg-primary-soft text-primary-ink" : "hover:bg-primary-soft"
          )
        )
      ), F = () => {
        var Q;
        j.disabled || ((Q = j.onClick) == null || Q.call(j), a == null || a(j.value), u());
      };
      return /* @__PURE__ */ v("div", { children: [
        j.dividerBefore && /* @__PURE__ */ i("div", { className: "my-1 border-t border-neutral-200", role: "separator" }),
        j.href && !j.disabled ? /* @__PURE__ */ i(
          "a",
          {
            href: j.href,
            role: "menuitem",
            tabIndex: -1,
            className: I,
            onClick: (Q) => {
              var J;
              (J = j.onClick) == null || J.call(j), a == null || a(j.value), u(), j.onClick && Q.preventDefault();
            },
            onMouseEnter: () => E(T),
            onMouseLeave: () => E(-1),
            "aria-disabled": j.disabled,
            children: V
          }
        ) : /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            role: "menuitem",
            tabIndex: -1,
            className: h(I, "text-left"),
            onClick: F,
            onMouseEnter: () => E(T),
            onMouseLeave: () => E(-1),
            disabled: j.disabled,
            "aria-disabled": j.disabled,
            children: V
          }
        )
      ] }, j.value);
    };
    return /* @__PURE__ */ i(
      ra,
      {
        ref: c,
        trigger: n,
        placement: r,
        offset: o,
        disabled: s,
        open: m,
        onOpenChange: z,
        onKeyDown: Z,
        contentClassName: "min-w-[180px] py-1 px-1 max-h-80 overflow-auto",
        className: p,
        ...d,
        children: /* @__PURE__ */ v("div", { ref: A, role: "menu", "aria-orientation": "vertical", children: [
          e && /* @__PURE__ */ v("div", { children: [
            e,
            /* @__PURE__ */ i("div", { className: "my-1 border-t border-neutral-200", role: "separator" })
          ] }),
          t.map((j, T) => q(j, T))
        ] })
      }
    );
  }
);
hi.displayName = "DropdownMenu";
const gi = X(
  ({
    label: e,
    helperText: t,
    error: a,
    fullWidth: n = !1,
    showCount: r = !1,
    maxLength: o,
    disabled: l,
    className: s,
    id: p,
    value: d,
    ...c
  }, m) => {
    const g = p || `textarea-${Math.random().toString(36).slice(2, 9)}`, f = !!a, E = typeof d == "string" ? d.length : 0;
    return /* @__PURE__ */ v("div", { className: h("flex flex-col gap-1.5", n && "w-full"), children: [
      e && /* @__PURE__ */ i(
        "label",
        {
          htmlFor: g,
          className: "text-xs font-semibold text-neutral-600",
          children: e
        }
      ),
      /* @__PURE__ */ i(
        "textarea",
        {
          ref: m,
          id: g,
          disabled: l,
          maxLength: o,
          value: d,
          className: h(
            // Base styles
            "w-full rounded-[10px] border bg-white px-3.5 py-2.5 text-[13px] leading-5",
            "transition-colors duration-200",
            "placeholder:text-neutral-500",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
            "resize-y min-h-[100px]",
            // Border color
            f ? "border-error focus:ring-error focus:border-error" : "border-control",
            // Disabled state
            l && "!bg-neutral-100 text-neutral-500 cursor-not-allowed",
            s
          ),
          "aria-invalid": f,
          "aria-describedby": f ? `${g}-error` : t ? `${g}-helper` : void 0,
          ...c
        }
      ),
      /* @__PURE__ */ v("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ v("div", { children: [
          f && /* @__PURE__ */ i("p", { id: `${g}-error`, className: "text-xs text-error", children: a }),
          !f && t && /* @__PURE__ */ i("p", { id: `${g}-helper`, className: "text-xs text-neutral-500", children: t })
        ] }),
        r && o && /* @__PURE__ */ v("span", { className: "text-xs text-neutral-500 tabular-nums", children: [
          E,
          "/",
          o
        ] })
      ] })
    ] });
  }
);
gi.displayName = "Textarea";
let Ge = null;
function bi() {
  return Ge || (Ge = Promise.all([
    import("./index-CzjGYfLh.js").then((e) => e.i),
    // prismjs core ships markup/css/clike/javascript — no grammars eagerly imported
    import("./prism-Cui8vAAr.js").then((e) => e.p)
  ]).then(([e, t]) => ({
    Editor: e.default ?? e,
    Prism: t.default ?? t
  }))), Ge;
}
const yi = {
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
}, Nt = /* @__PURE__ */ new Map();
function wi(e, t) {
  if (e.languages[t]) return Promise.resolve();
  const a = yi[t];
  if (!a) return Promise.resolve();
  let n = Nt.get(t);
  return n || (n = a(), Nt.set(t, n)), n;
}
function ki(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const Te = {
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: 13,
  lineHeight: 1.5
}, Ni = X(
  ({
    label: e,
    helperText: t,
    error: a,
    fullWidth: n = !1,
    value: r,
    onValueChange: o,
    language: l = "javascript",
    placeholder: s,
    tabSize: p = 2,
    insertSpaces: d = !0,
    minHeight: c = 120,
    displayOnly: m = !1,
    showLineNumbers: g = !1,
    showCount: f = !1,
    showCopyButton: E = !1,
    disabled: A = !1,
    className: M,
    id: k,
    ...w
  }, D) => {
    const b = Jt(), u = k || `code-editor-${b}`, y = !!a, [z, Z] = re(null), [q, j] = re(null), [T, Y] = re(!1), V = ce(null);
    ue(() => {
      let C = !0;
      return (async () => {
        const R = await bi();
        C && (Z(R), await wi(R.Prism, l), C && j(l));
      })(), () => {
        C = !1;
      };
    }, [l]), ue(
      () => () => {
        V.current && clearTimeout(V.current);
      },
      []
    );
    const I = z == null ? void 0 : z.Prism, F = !!I && q === l, Q = (C) => {
      if (I && F) {
        const R = I.languages[l] ?? I.languages.javascript;
        if (R) return I.highlight(C, R, l);
      }
      return ki(C);
    }, J = () => {
      var C;
      (C = navigator.clipboard) == null || C.writeText(r), Y(!0), V.current && clearTimeout(V.current), V.current = setTimeout(() => Y(!1), 2e3);
    }, te = Math.max(1, r.split(`
`).length), B = y ? `${u}-error` : t ? `${u}-helper` : void 0, x = m || !z ? (
      // Display-only, or fallback before the editor lib resolves.
      m ? /* @__PURE__ */ i(
        "pre",
        {
          className: "m-0 overflow-auto px-4 py-3",
          style: { ...Te, minHeight: c },
          children: /* @__PURE__ */ i("code", { dangerouslySetInnerHTML: { __html: Q(r) } })
        }
      ) : (
        // Editable fallback: a plain textarea so there is no layout shift.
        /* @__PURE__ */ i(
          "textarea",
          {
            id: u,
            value: r,
            disabled: A,
            placeholder: s,
            spellCheck: !1,
            onChange: (C) => o == null ? void 0 : o(C.target.value),
            className: "m-0 w-full resize-none border-0 bg-transparent px-4 py-3 focus:outline-none",
            style: { ...Te, minHeight: c }
          }
        )
      )
    ) : /* @__PURE__ */ i(
      z.Editor,
      {
        value: r,
        onValueChange: (C) => o == null ? void 0 : o(C),
        highlight: Q,
        padding: { top: 12, right: 16, bottom: 12, left: 16 },
        tabSize: p,
        insertSpaces: d,
        textareaId: u,
        disabled: A,
        placeholder: s,
        style: { ...Te, minHeight: c },
        textareaClassName: "focus:outline-none"
      }
    );
    return /* @__PURE__ */ v("div", { className: h("flex flex-col gap-1.5", n && "w-full"), children: [
      e && /* @__PURE__ */ i(
        "label",
        {
          htmlFor: u,
          className: "text-xs font-semibold text-neutral-600",
          children: e
        }
      ),
      /* @__PURE__ */ v("div", { className: "relative", children: [
        E && /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: J,
            "aria-label": T ? "Copied" : "Copy code",
            className: h(
              "absolute right-2 top-2 z-10 rounded-lg p-1.5",
              "bg-white text-neutral-500 border border-neutral-200",
              "transition-colors hover:bg-neutral-100 hover:text-neutral-700",
              "focus:outline-none focus:ring-2 focus:ring-primary"
            ),
            children: T ? /* @__PURE__ */ i(Ie, { size: 16, className: "text-success" }) : /* @__PURE__ */ i(sn, { size: 16 })
          }
        ),
        /* @__PURE__ */ i(
          "div",
          {
            ref: D,
            "aria-invalid": y || void 0,
            "aria-describedby": B,
            className: h(
              "omnitok-code-editor",
              "overflow-hidden rounded-[10px] border bg-white",
              "transition-colors duration-200",
              !m && !A && "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
              y ? "border-error focus-within:border-error focus-within:ring-error/20" : "border-control",
              A && "cursor-not-allowed bg-neutral-100 text-neutral-500",
              M
            ),
            ...w,
            children: /* @__PURE__ */ v("div", { className: "flex", children: [
              g && /* @__PURE__ */ i(
                "div",
                {
                  "aria-hidden": "true",
                  className: "select-none border-r border-neutral-200 bg-neutral-50 py-3 pl-4 pr-3 text-right text-neutral-500 tabular-nums",
                  style: Te,
                  children: Array.from({ length: te }, (C, R) => /* @__PURE__ */ i("div", { children: R + 1 }, R))
                }
              ),
              /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: x })
            ] })
          }
        )
      ] }),
      (y || t || f && !m) && /* @__PURE__ */ v("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ v("div", { children: [
          y && /* @__PURE__ */ i("p", { id: `${u}-error`, className: "text-xs text-error", children: a }),
          !y && t && /* @__PURE__ */ i("p", { id: `${u}-helper`, className: "text-xs text-neutral-500", children: t })
        ] }),
        f && !m && /* @__PURE__ */ v("span", { className: "text-xs text-neutral-500 tabular-nums", children: [
          te,
          " ",
          te === 1 ? "line" : "lines",
          " · ",
          r.length,
          " chars"
        ] })
      ] })
    ] });
  }
);
Ni.displayName = "CodeEditor";
const ji = {
  checked: "peer-checked:bg-primary peer-checked:border-primary",
  ring: "peer-focus:ring-primary"
}, Ei = { checked: "peer-checked:bg-primary", ring: "peer-focus:ring-primary" }, oa = X(
  ({
    label: e,
    description: t,
    error: a,
    indeterminate: n,
    toggle: r = !1,
    onCheckedChange: o,
    disabled: l,
    className: s,
    id: p,
    onChange: d,
    ...c
  }, m) => {
    const g = p || `checkbox-${Math.random().toString(36).slice(2, 9)}`, f = !!a, E = (k) => {
      d == null || d(k), o == null || o(k.target.checked);
    }, A = () => {
      const k = ji;
      return /* @__PURE__ */ i(
        "div",
        {
          className: h(
            "w-[18px] h-[18px] rounded-[5px] border-2 transition-colors",
            "flex items-center justify-center",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "[&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100",
            k.ring,
            k.checked,
            f ? "border-error" : "border-neutral-400 peer-hover:border-primary"
          ),
          children: n ? /* @__PURE__ */ i(zn, { className: "w-3 h-3 text-white transition-opacity" }) : /* @__PURE__ */ i(Ie, { className: "w-3 h-3 text-white transition-opacity" })
        }
      );
    }, M = () => {
      const k = Ei;
      return /* @__PURE__ */ i(
        "div",
        {
          className: h(
            "relative w-11 h-6 rounded-full transition-colors",
            "peer-focus:ring-2 peer-focus:ring-offset-2",
            "peer-checked:[&>div]:translate-x-5",
            k.ring,
            k.checked,
            f ? "bg-error/30" : "bg-neutral-400"
          ),
          children: /* @__PURE__ */ i(
            "div",
            {
              className: h(
                "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white",
                "shadow-sm transition-transform duration-200"
              )
            }
          )
        }
      );
    };
    return /* @__PURE__ */ v("div", { className: h("flex flex-col gap-1", s), children: [
      /* @__PURE__ */ v(
        "label",
        {
          htmlFor: g,
          className: h(
            "flex items-start gap-3 cursor-pointer",
            l && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ v("div", { className: h("relative flex items-center", r ? "justify-start" : "justify-center"), children: [
              /* @__PURE__ */ i(
                "input",
                {
                  ref: m,
                  type: "checkbox",
                  id: g,
                  disabled: l,
                  className: "peer sr-only",
                  "aria-invalid": f,
                  onChange: E,
                  ...c
                }
              ),
              r ? M() : A()
            ] }),
            (e || t) && /* @__PURE__ */ v("div", { className: "flex flex-col", children: [
              e && /* @__PURE__ */ i("span", { className: "text-[13px] font-medium text-neutral-800", children: e }),
              t && /* @__PURE__ */ i("span", { className: "text-xs text-neutral-500", children: t })
            ] })
          ]
        }
      ),
      f && /* @__PURE__ */ i("p", { className: h("text-xs text-error", r ? "ml-14" : "ml-8"), children: a })
    ] });
  }
);
oa.displayName = "Checkbox";
const Ci = X(
  ({ label: e, description: t, error: a, disabled: n, className: r, id: o, ...l }, s) => {
    const p = o || `radio-${Math.random().toString(36).slice(2, 9)}`, d = !!a;
    return /* @__PURE__ */ v("div", { className: h("flex flex-col gap-1", r), children: [
      /* @__PURE__ */ v(
        "label",
        {
          htmlFor: p,
          className: h(
            "flex items-start gap-3 cursor-pointer",
            n && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ v("div", { className: "relative flex items-center justify-center", children: [
              /* @__PURE__ */ i(
                "input",
                {
                  ref: s,
                  type: "radio",
                  id: p,
                  disabled: n,
                  className: "peer sr-only",
                  "aria-invalid": d,
                  ...l
                }
              ),
              /* @__PURE__ */ i(
                "div",
                {
                  className: h(
                    "w-[18px] h-[18px] rounded-full border-2 transition-colors",
                    "flex items-center justify-center",
                    "peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2",
                    "peer-checked:border-primary",
                    d ? "border-error" : "border-neutral-400 peer-hover:border-primary"
                  ),
                  children: /* @__PURE__ */ i("div", { className: "w-2 h-2 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform" })
                }
              )
            ] }),
            (e || t) && /* @__PURE__ */ v("div", { className: "flex flex-col", children: [
              e && /* @__PURE__ */ i("span", { className: "text-[13px] font-medium text-neutral-800", children: e }),
              t && /* @__PURE__ */ i("span", { className: "text-xs text-neutral-500", children: t })
            ] })
          ]
        }
      ),
      d && /* @__PURE__ */ i("p", { className: "text-xs text-error ml-8", children: a })
    ] });
  }
);
Ci.displayName = "Radio";
const _i = {
  default: "bg-white border border-neutral-200 rounded-[14px] shadow-card",
  bordered: "bg-white border border-neutral-300 rounded-[14px]",
  elevated: "bg-white border border-neutral-200 rounded-[14px] shadow-card-hover"
}, Di = X(
  ({ children: e, noPadding: t = !1, hoverable: a = !1, variant: n = "default", className: r, ...o }, l) => /* @__PURE__ */ i(
    "div",
    {
      ref: l,
      className: h(
        _i[n],
        !t && "p-4",
        a && "transition-[box-shadow,border-color] duration-150 hover:shadow-card-hover hover:border-primary/30 cursor-pointer",
        r
      ),
      ...o,
      children: e
    }
  )
);
Di.displayName = "Card";
const Ai = X(
  ({ children: e, action: t, className: a, ...n }, r) => /* @__PURE__ */ v(
    "div",
    {
      ref: r,
      className: h(
        // v3: the header is part of the white card, not a coloured band.
        "flex items-center justify-between gap-3 px-4 py-3 first:rounded-t-[14px]",
        "bg-white text-neutral-800 border-b border-neutral-200",
        a
      ),
      ...n,
      children: [
        /* @__PURE__ */ i("div", { className: "font-display text-[15px] font-extrabold leading-6", children: e }),
        t && /* @__PURE__ */ i("div", { children: t })
      ]
    }
  )
);
Ai.displayName = "CardHeader";
const Si = X(
  ({ children: e, className: t, ...a }, n) => /* @__PURE__ */ i("div", { ref: n, className: h("p-4", t), ...a, children: e })
);
Si.displayName = "CardBody";
const Pi = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
  between: "justify-between"
}, Oi = X(
  ({ children: e, align: t = "right", className: a, ...n }, r) => /* @__PURE__ */ i(
    "div",
    {
      ref: r,
      className: h(
        "flex items-center gap-3 px-4 py-3 bg-[#FAFAFC] border-t border-neutral-200 text-xs text-neutral-600 last:rounded-b-[14px]",
        Pi[t],
        a
      ),
      ...n,
      children: e
    }
  )
);
Oi.displayName = "CardFooter";
const Ti = {
  // v3: tint behind, the dark tone in front (>= 5:1 on every tint).
  primary: "bg-primary-soft text-primary-ink",
  neutral: "bg-neutral-100 text-neutral-700",
  success: "bg-success-soft text-success-dark",
  warning: "bg-warning-soft text-warning-dark",
  error: "bg-error-soft text-error-dark",
  info: "bg-info-soft text-info-dark"
}, Mi = {
  sm: "px-2 py-0.5 text-2xs",
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-3 py-1 text-[13px]"
}, zi = {
  primary: "bg-primary",
  neutral: "bg-neutral-400",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  info: "bg-info"
}, $i = X(
  ({
    children: e,
    variant: t = "primary",
    size: a = "md",
    pill: n = !1,
    dot: r = !1,
    className: o,
    ...l
  }, s) => r ? /* @__PURE__ */ i(
    "span",
    {
      ref: s,
      className: h(
        "inline-block rounded-full",
        a === "sm" && "w-2 h-2",
        a === "md" && "w-2.5 h-2.5",
        a === "lg" && "w-3 h-3",
        zi[t],
        o
      ),
      ...l
    }
  ) : /* @__PURE__ */ i(
    "span",
    {
      ref: s,
      className: h(
        "inline-flex items-center font-semibold tabular-nums",
        n ? "rounded-full" : "rounded-[7px]",
        Ti[t],
        Mi[a],
        o
      ),
      ...l,
      children: e
    }
  )
);
$i.displayName = "Badge";
const jt = {
  xs: "w-6 h-6 text-2xs",
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-xl"
}, Ri = {
  xs: "w-1.5 h-1.5 border",
  sm: "w-2 h-2 border",
  md: "w-2.5 h-2.5 border-2",
  lg: "w-3 h-3 border-2",
  xl: "w-4 h-4 border-2"
}, Fi = {
  online: "bg-success",
  offline: "bg-neutral-400",
  busy: "bg-error",
  away: "bg-warning"
}, Ii = X(
  ({ size: e = "md", src: t, alt: a = "", initials: n, status: r, className: o, ...l }, s) => {
    const p = (d) => d ? d.split(" ").map((c) => c[0]).join("").toUpperCase().slice(0, 2) : "?";
    return /* @__PURE__ */ v("div", { ref: s, className: h("relative inline-block", o), children: [
      t ? /* @__PURE__ */ i(
        "img",
        {
          src: t,
          alt: a,
          className: h(
            "rounded-full object-cover",
            jt[e]
          ),
          ...l
        }
      ) : /* @__PURE__ */ i(
        "div",
        {
          className: h(
            "rounded-full flex items-center justify-center font-semibold",
            // v3: the action gradient (white initials >= 4.6:1 on both ends).
            "bg-[image:var(--omni-gradient-action)] text-white",
            jt[e]
          ),
          children: p(n || a)
        }
      ),
      r && /* @__PURE__ */ i(
        "span",
        {
          className: h(
            "absolute bottom-0 right-0 rounded-full border-white",
            Ri[e],
            Fi[r]
          )
        }
      )
    ] });
  }
);
Ii.displayName = "Avatar";
const Li = {
  // v3: the state's tint, a 1px border of its colour and the dark tone for
  // text; the icon carries the shape (never colour alone).
  info: "bg-info-soft border-info/30 text-info-dark",
  success: "bg-success-soft border-success/30 text-success-dark",
  warning: "bg-warning-soft border-warning/30 text-warning-dark",
  error: "bg-error-soft border-error/30 text-error-dark"
}, qi = {
  info: ta,
  success: ea,
  warning: aa,
  error: ht
}, Bi = X(
  ({
    variant: e = "info",
    title: t,
    children: a,
    dismissible: n = !1,
    onDismiss: r,
    hideIcon: o = !1,
    className: l,
    ...s
  }, p) => {
    const d = qi[e];
    return /* @__PURE__ */ v(
      "div",
      {
        ref: p,
        role: "alert",
        className: h(
          "flex gap-3 px-4 py-3.5 rounded-xl border",
          Li[e],
          l
        ),
        ...s,
        children: [
          !o && /* @__PURE__ */ i(d, { "aria-hidden": "true", className: "flex-shrink-0 w-[18px] h-[18px] mt-0.5" }),
          /* @__PURE__ */ v("div", { className: "flex-1 min-w-0", children: [
            t && // Not a heading: an alert sits inside any outline level.
            /* @__PURE__ */ i("p", { className: "text-xs font-semibold mb-0.5", children: t }),
            /* @__PURE__ */ i("div", { className: "text-[13px] leading-5", children: a })
          ] }),
          n && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: r,
              className: "flex-shrink-0 p-1 rounded hover:bg-black/5 transition-colors",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ i(je, { className: "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
Bi.displayName = "Alert";
const Wi = {
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
}, Hi = /\{(\w+)\}/g;
function Ki(e, t) {
  if (!t) return e;
  const a = { ...e };
  for (const [n, r] of Object.entries(t))
    a[n] = { ...a[n] ?? {}, ...r };
  return a;
}
function Le({
  language: e,
  messagesByLanguage: t,
  fallbackLanguage: a = "en"
}) {
  const n = Ki(Wi, t);
  return {
    language: e,
    messagesByLanguage: n,
    t: (o, l) => {
      const s = n[e] ?? {}, p = n[a] ?? {}, d = s[o] ?? p[o] ?? o;
      return l ? d.replace(Hi, (c, m) => {
        const g = String(m), f = l[g];
        return f == null ? c : String(f);
      }) : d;
    }
  };
}
const Ui = Le({ language: "es" }), la = xt(Ui);
function Ao({
  children: e,
  language: t,
  messages: a,
  fallbackLanguage: n = "es"
}) {
  const r = he(
    () => Le({ language: t, messagesByLanguage: a, fallbackLanguage: n }),
    [t, a, n]
  );
  return /* @__PURE__ */ i(la.Provider, { value: r, children: e });
}
function Ee() {
  return ft(la);
}
const Vi = "flex w-full items-center gap-2.5 rounded-lg px-3 text-left text-[12px] leading-tight text-[var(--omni-sb-text)] transition-colors duration-150 hover:bg-white/[.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40", Yi = "bg-[color-mix(in_srgb,var(--omni-sb-accent)_12.5%,transparent)] text-white font-semibold shadow-[inset_3px_0_0_var(--omni-sb-accent)]", Gi = "relative flex h-4 w-4 flex-shrink-0 items-center justify-center text-[var(--omni-sb-muted)] [&>svg]:h-4 [&>svg]:w-4", Zi = "text-[var(--omni-sb-accent-ink)]";
function Qi({
  item: e,
  collapsed: t,
  active: a,
  expanded: n,
  hasChildren: r,
  onPress: o,
  onAnchorClick: l
}) {
  const s = h(
    Vi,
    t ? "min-h-[38px] justify-center px-0" : "min-h-[36px] py-1.5",
    a && Yi,
    r && !t && "font-semibold"
  ), p = /* @__PURE__ */ v(fe, { children: [
    /* @__PURE__ */ i("span", { className: h(Gi, a && Zi), children: e.icon ?? /* @__PURE__ */ i("span", { className: "h-1.5 w-1.5 rounded-full bg-current opacity-60" }) }),
    !t && /* @__PURE__ */ v(fe, { children: [
      /* @__PURE__ */ i("span", { className: "min-w-0 flex-1 truncate", children: e.label }),
      e.badge != null && e.badge !== "" && /* @__PURE__ */ i("span", { className: "rounded-full bg-[var(--omni-sb-badge)] px-1.5 py-px text-2xs font-bold leading-4 tabular-nums text-white", children: e.badge }),
      e.tag && /* @__PURE__ */ i("span", { className: "rounded border border-white/20 px-1 text-2xs font-semibold uppercase tracking-[.06em] text-[var(--omni-sb-muted)]", children: e.tag }),
      a && !r && /* @__PURE__ */ i("span", { "aria-hidden": "true", className: "h-1 w-1 flex-shrink-0 rounded-full bg-[var(--omni-sb-accent)]" }),
      r && /* @__PURE__ */ i(
        De,
        {
          "aria-hidden": "true",
          className: h("h-3.5 w-3.5 text-[var(--omni-sb-muted)] transition-transform", n && "rotate-180")
        }
      )
    ] }),
    t && r && /* @__PURE__ */ i(vt, { "aria-hidden": "true", className: "absolute right-1.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 text-white/50" })
  ] }), d = {
    id: e.elementId,
    className: h(s, t && "relative"),
    title: t ? e.label : void 0,
    "aria-current": a && !r ? "page" : void 0
  };
  return e.href && !r ? /* @__PURE__ */ i("a", { href: e.href, onClick: l, ...d, children: p }) : /* @__PURE__ */ i("button", { type: "button", onClick: o, "aria-expanded": r ? n : void 0, ...d, children: p });
}
function ot({ item: e, collapsed: t, activeId: a, isExpanded: n, toggle: r, onItemClick: o, onCollapsedChange: l, level: s }) {
  const p = !!e.children && e.children.length > 0, d = e.active || e.id === a, c = p && n(e), m = (E) => {
    var M;
    E.ctrlKey || E.metaKey || E.shiftKey || E.button !== 0 || (E.preventDefault(), o == null || o(e), (M = e.onClick) == null || M.call(e));
  }, g = () => {
    var E, A;
    if (p) {
      t ? (l == null || l(!1), c || r(e)) : r(e), o == null || o(e), (E = e.onClick) == null || E.call(e);
      return;
    }
    o == null || o(e), (A = e.onClick) == null || A.call(e);
  }, f = p && c && !t && /* @__PURE__ */ i("div", { className: h("mt-0.5 space-y-px", e.kind === "section" ? "ml-5 border-l border-white/[.11] pl-1.5" : "ml-4"), children: e.children.map((E) => /* @__PURE__ */ i(
    ot,
    {
      item: E,
      collapsed: t,
      activeId: a,
      isExpanded: n,
      toggle: r,
      onItemClick: o,
      onCollapsedChange: l,
      level: s + 1
    },
    E.id
  )) });
  return e.kind === "section" ? /* @__PURE__ */ v("div", { children: [
    e.dividerBefore && /* @__PURE__ */ i("div", { className: "my-2 border-t border-white/[.11]", role: "separator" }),
    t ? /* @__PURE__ */ i("div", { className: "mx-1.5 my-2 border-t border-white/[.11]", role: "separator", "aria-label": e.label }) : /* @__PURE__ */ v("div", { className: "mx-2.5 mb-1 mt-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[.1em] text-[var(--omni-sb-muted)]", children: [
      /* @__PURE__ */ i("span", { className: "truncate", children: e.label }),
      e.badge != null && e.badge !== "" && /* @__PURE__ */ v("span", { className: "font-medium", children: [
        "· ",
        e.badge
      ] })
    ] }),
    p && /* @__PURE__ */ i("div", { className: h("space-y-px", !t && "ml-5 border-l border-white/[.11] pl-1.5"), children: e.children.map((E) => /* @__PURE__ */ i(
      ot,
      {
        item: E,
        collapsed: t,
        activeId: a,
        isExpanded: n,
        toggle: r,
        onItemClick: o,
        onCollapsedChange: l,
        level: s + 1
      },
      E.id
    )) })
  ] }) : /* @__PURE__ */ v("div", { children: [
    e.dividerBefore && /* @__PURE__ */ i("div", { className: "my-2 border-t border-white/[.11]", role: "separator" }),
    /* @__PURE__ */ i(
      Qi,
      {
        item: e,
        collapsed: t,
        active: d,
        expanded: c,
        hasChildren: p,
        onPress: g,
        onAnchorClick: m
      }
    ),
    f
  ] });
}
function Et({ selector: e, collapsed: t }) {
  const { t: a } = Ee(), { active: n, options: r, onSelect: o } = e, l = r.length > 1 || r.length === 1 && n == null, [s, p] = re(!1), [d, c] = re(""), [m, g] = re(null), f = ce(null), E = ce(null), A = e.searchThreshold ?? 8, M = r.length >= A, k = U(() => {
    var z;
    const y = (z = f.current) == null ? void 0 : z.getBoundingClientRect();
    y && g(t ? { left: y.right + 10, top: y.top, width: 250 } : { left: y.left, top: y.bottom + 6, width: Math.max(y.width, 230) });
  }, [t]);
  Ta(() => {
    s && k();
  }, [s, k]), ue(() => {
    if (!s) return;
    const y = (Z) => {
      var q;
      Z.key === "Escape" && (p(!1), (q = f.current) == null || q.focus());
    }, z = (Z) => {
      var j, T;
      const q = Z.target;
      (j = E.current) != null && j.contains(q) || (T = f.current) != null && T.contains(q) || p(!1);
    };
    return document.addEventListener("keydown", y), document.addEventListener("mousedown", z), window.addEventListener("resize", k), () => {
      document.removeEventListener("keydown", y), document.removeEventListener("mousedown", z), window.removeEventListener("resize", k);
    };
  }, [s, k]), ue(() => {
    s || c("");
  }, [s]);
  const w = he(() => {
    const y = d.trim().toLowerCase();
    return y ? r.filter((z) => z.label.toLowerCase().includes(y)) : r;
  }, [r, d]), D = ((n == null ? void 0 : n.initial) ?? (n == null ? void 0 : n.label) ?? "?").trim().charAt(0).toUpperCase(), b = e.caption ?? a("sidebar.project"), u = (y) => {
    y.disabled || (p(!1), o == null || o(y));
  };
  return /* @__PURE__ */ v("div", { className: h(t ? "my-2" : "mb-1"), children: [
    !t && /* @__PURE__ */ v("div", { className: "mx-2.5 mb-1.5 mt-1 text-[11px] font-semibold uppercase tracking-[.1em] text-[var(--omni-sb-muted)]", children: [
      b,
      r.length > 1 && /* @__PURE__ */ v("span", { className: "font-medium", children: [
        " · ",
        r.length
      ] })
    ] }),
    /* @__PURE__ */ v(
      "button",
      {
        ref: f,
        type: "button",
        disabled: !l,
        "aria-haspopup": "listbox",
        "aria-expanded": s,
        "aria-label": t ? `${b}: ${(n == null ? void 0 : n.label) ?? ""}` : void 0,
        title: t ? n == null ? void 0 : n.label : void 0,
        onClick: () => {
          if (l) {
            if (t) {
              p((y) => !y);
              return;
            }
            p((y) => !y);
          }
        },
        className: h(
          "flex w-full items-center gap-2.5 rounded-[10px] border border-white/[.11] bg-white/[.04] text-left transition-colors",
          t ? "mx-auto h-10 w-10 justify-center p-0" : "px-2.5 py-2",
          l && "hover:border-white/30 hover:bg-white/[.08]",
          s && "border-white/40 bg-white/[.1]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        ),
        children: [
          /* @__PURE__ */ i(
            "span",
            {
              "aria-hidden": "true",
              className: "grid h-7 w-7 flex-shrink-0 place-items-center rounded-md bg-white font-display text-[17px] font-extrabold leading-none text-[#254D9D]",
              children: D
            }
          ),
          !t && /* @__PURE__ */ v(fe, { children: [
            /* @__PURE__ */ v("span", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ i("span", { className: "block truncate text-[12px] font-semibold leading-tight text-white", children: (n == null ? void 0 : n.label) ?? a("sidebar.chooseProject") }),
              (n == null ? void 0 : n.meta) && /* @__PURE__ */ i("span", { className: "block truncate text-[11px] leading-tight text-[var(--omni-sb-muted)]", children: n.meta })
            ] }),
            l && /* @__PURE__ */ i(
              De,
              {
                "aria-hidden": "true",
                className: h("h-4 w-4 flex-shrink-0 text-[var(--omni-sb-muted)] transition-transform", s && "rotate-180")
              }
            )
          ] })
        ]
      }
    ),
    s && m && Ra(
      /* @__PURE__ */ v(
        "div",
        {
          ref: E,
          role: "listbox",
          "aria-label": e.menuTitle ?? a("sidebar.changeProject"),
          "data-dropdown-surface": "list",
          style: { position: "fixed", left: m.left, top: m.top, width: m.width },
          className: "z-[1000] max-h-[60vh] overflow-y-auto rounded-xl border border-[var(--omni-line)] bg-white p-1.5 font-sans text-[12px] text-[var(--omni-text)] shadow-[var(--omni-shadow-menu)]",
          children: [
            /* @__PURE__ */ i("div", { className: "px-2.5 pb-1 pt-1.5 text-2xs font-semibold uppercase tracking-[.1em] text-[var(--omni-muted)]", children: e.menuTitle ?? a("sidebar.changeProject") }),
            M && /* @__PURE__ */ v("label", { className: "mx-1 mb-1.5 flex items-center gap-1.5 rounded-lg border border-[var(--omni-line)] px-2 py-1.5 text-[var(--omni-muted)] focus-within:border-[var(--omni-accent)]", children: [
              /* @__PURE__ */ i(In, { "aria-hidden": "true", className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ i(
                "input",
                {
                  autoFocus: !0,
                  value: d,
                  onChange: (y) => c(y.target.value),
                  placeholder: e.searchPlaceholder ?? a("sidebar.searchProject"),
                  className: "min-w-0 flex-1 bg-transparent text-[12px] text-[var(--omni-text)] outline-none placeholder:text-[var(--omni-muted)]"
                }
              )
            ] }),
            w.length === 0 && /* @__PURE__ */ i("div", { className: "px-2.5 py-2 text-[var(--omni-muted)]", children: e.emptyLabel ?? a("sidebar.noProjects") }),
            w.map((y) => {
              const z = y.id === (n == null ? void 0 : n.id);
              return /* @__PURE__ */ v(
                "button",
                {
                  type: "button",
                  role: "option",
                  "aria-selected": z,
                  disabled: y.disabled,
                  onClick: () => u(y),
                  className: h(
                    "flex w-full items-center gap-2 rounded-[7px] px-2.5 py-2 text-left leading-tight",
                    z ? "bg-[var(--omni-active)] font-semibold text-[var(--omni-accent)]" : "hover:bg-[var(--omni-canvas)]",
                    y.disabled && "cursor-default text-[var(--omni-muted)] hover:bg-transparent"
                  ),
                  children: [
                    /* @__PURE__ */ i("span", { className: "flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center", children: z && /* @__PURE__ */ i(Ie, { "aria-hidden": "true", className: "h-3.5 w-3.5" }) }),
                    /* @__PURE__ */ i("span", { className: "min-w-0 flex-1 truncate", children: y.label }),
                    y.meta && /* @__PURE__ */ i("span", { className: "flex-shrink-0 text-[11px] text-[var(--omni-muted)]", children: y.meta })
                  ]
                },
                y.id
              );
            })
          ]
        }
      ),
      document.body
    )
  ] });
}
function lt(e, t, a) {
  let n = !1;
  for (const r of e)
    r.children && r.children.length > 0 ? lt(r.children, t, a) && (a.push(r.id), n = !0) : (r.id === t || r.active) && (n = !0);
  return n;
}
const sa = X(
  ({
    items: e,
    footer: t,
    footerCollapsed: a,
    collapsed: n = !1,
    onCollapsedChange: r,
    activeId: o,
    onItemClick: l,
    projectSelector: s,
    expandedIds: p,
    onExpandedChange: d,
    className: c,
    ...m
  }, g) => {
    const f = p !== void 0, [E, A] = re(() => {
      const w = [];
      return lt(e, o, w), new Set(w);
    });
    ue(() => {
      if (f) return;
      const w = [];
      lt(e, o, w), w.length !== 0 && A((D) => {
        const b = new Set(D);
        return w.forEach((u) => b.add(u)), b;
      });
    }, [e, o, f]);
    const M = U(
      (w) => f ? p.includes(w.id) : E.has(w.id),
      [f, p, E]
    ), k = U(
      (w) => {
        const D = !M(w);
        if (f) {
          d == null || d(w.id, D);
          return;
        }
        A((b) => {
          const u = new Set(b);
          return D ? u.add(w.id) : u.delete(w.id), u;
        }), d == null || d(w.id, D);
      },
      [f, M, d]
    );
    return /* @__PURE__ */ v(
      "aside",
      {
        ref: g,
        "data-omni-sidebar": "",
        "data-collapsed": n ? "" : void 0,
        className: h(
          "flex flex-shrink-0 flex-col overflow-hidden [background:var(--omni-sb-bg)] font-sans text-[var(--omni-sb-text)]",
          "transition-[width] duration-200",
          "m-3 h-[calc(100%-24px)] rounded-[14px] border border-[var(--omni-navy-line)] shadow-[0_2px_8px_#1A124008]",
          n ? "w-16" : "w-[250px]",
          c
        ),
        ...m,
        children: [
          /* @__PURE__ */ v("nav", { className: h("scrollbar-thin flex-1 overflow-y-auto overflow-x-hidden", n ? "px-2 py-2" : "px-2.5 py-2.5"), children: [
            s && !e.some((w) => w.kind === "project-selector") && /* @__PURE__ */ i(Et, { selector: s, collapsed: n }),
            e.map(
              (w) => w.kind === "project-selector" ? s ? /* @__PURE__ */ i(Et, { selector: s, collapsed: n }, w.id) : null : /* @__PURE__ */ i(
                ot,
                {
                  item: w,
                  collapsed: n,
                  activeId: o,
                  isExpanded: M,
                  toggle: k,
                  onItemClick: l,
                  onCollapsedChange: r,
                  level: 0
                },
                w.id
              )
            )
          ] }),
          n ? a && /* @__PURE__ */ i("div", { className: "border-t border-white/[.11] p-2", children: a }) : t && /* @__PURE__ */ i("div", { className: "border-t border-white/[.11] p-2.5", children: t })
        ]
      }
    );
  }
);
sa.displayName = "Sidebar";
function Ji(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]).join("").toUpperCase();
}
function Ct({ name: e, initials: t, src: a }) {
  return a ? /* @__PURE__ */ i("img", { src: a, alt: "", className: "h-8 w-8 flex-shrink-0 rounded-full object-cover" }) : /* @__PURE__ */ i(
    "span",
    {
      "aria-hidden": "true",
      className: "grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-white/10 text-2xs font-bold text-[#E3DAFA]",
      title: e,
      children: t
    }
  );
}
const Xi = X(
  ({
    name: e,
    detail: t,
    initials: a,
    avatarSrc: n,
    version: r,
    languages: o,
    language: l,
    onLanguageChange: s,
    languageLabel: p,
    onSignOut: d,
    signOutLabel: c,
    collapsed: m = !1,
    children: g,
    className: f,
    ...E
  }, A) => {
    const { t: M } = Ee(), k = a ?? Ji(e);
    return m ? /* @__PURE__ */ v("div", { ref: A, "data-omni-sidebar-account": "", className: h("flex justify-center py-1", f), title: e, ...E, children: [
      /* @__PURE__ */ i(Ct, { name: e, initials: k, src: n }),
      /* @__PURE__ */ i("span", { className: "sr-only", children: e })
    ] }) : /* @__PURE__ */ v("div", { ref: A, "data-omni-sidebar-account": "", className: h("flex flex-col gap-0.5 px-1", f), ...E, children: [
      r && /* @__PURE__ */ i("div", { className: "px-2 pb-1.5", children: /* @__PURE__ */ v("span", { className: "inline-flex items-center rounded-md border border-white/25 bg-white/10 px-2 py-0.5 text-2xs font-bold tracking-wide tabular-nums text-white/90", children: [
        "v",
        r
      ] }) }),
      g,
      o && o.length > 1 && /* @__PURE__ */ v("div", { className: "flex items-center gap-2.5 px-2 py-1", children: [
        /* @__PURE__ */ i(gn, { "aria-hidden": "true", className: "h-4 w-4 flex-shrink-0 text-[var(--omni-sb-muted)]" }),
        /* @__PURE__ */ i(
          "div",
          {
            role: "group",
            "aria-label": p ?? M("sidebar.language"),
            className: "inline-flex overflow-hidden rounded-lg border border-white/30 bg-white/[.04]",
            children: o.map((w) => {
              const D = w.code === l;
              return /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  "aria-pressed": D,
                  onClick: () => s == null ? void 0 : s(w.code),
                  className: h(
                    "border-r border-white/20 px-2.5 py-1 text-2xs font-semibold uppercase tracking-wide transition-colors last:border-r-0",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60",
                    D ? "bg-white text-[var(--omni-navy)]" : "text-[var(--omni-sb-text)] hover:bg-white/10"
                  ),
                  children: w.label ?? w.code.toUpperCase()
                },
                w.code
              );
            })
          }
        )
      ] }),
      d && /* @__PURE__ */ v(
        "button",
        {
          type: "button",
          onClick: d,
          className: "flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-[12px] text-[var(--omni-sb-text)] transition-colors hover:bg-white/[.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
          children: [
            /* @__PURE__ */ i(An, { "aria-hidden": "true", className: "h-4 w-4 text-[var(--omni-sb-muted)]" }),
            /* @__PURE__ */ i("span", { children: c ?? M("sidebar.signOut") })
          ]
        }
      ),
      /* @__PURE__ */ v("div", { className: "mt-1 flex items-center gap-2.5 border-t border-white/[.11] px-2 pt-2.5", children: [
        /* @__PURE__ */ i(Ct, { name: e, initials: k, src: n }),
        /* @__PURE__ */ v("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ i("div", { className: "truncate text-[12px] font-semibold text-white", children: e }),
          t && /* @__PURE__ */ i("div", { className: "truncate text-2xs text-[var(--omni-sb-muted)]", children: t })
        ] })
      ] })
    ] });
  }
);
Xi.displayName = "SidebarAccount";
const er = [
  "M461.823 2.25586C465.977 2.25586 469.344 5.62337 469.344 9.7774V43.4767L491.037 30.4118C494.595 28.2686 499.217 29.4159 501.361 32.9744C503.504 36.5329 502.356 41.155 498.798 43.2982L475.344 57.4237L499.386 75.182C502.728 77.65 503.435 82.3595 500.967 85.7009C498.499 89.0422 493.79 89.7502 490.449 87.2821L469.344 71.6936V81.232C469.344 85.3861 465.977 88.7536 461.823 88.7536C457.669 88.7536 454.301 85.3861 454.301 81.232V9.7774C454.301 5.62337 457.669 2.25586 461.823 2.25586Z",
  "M342.982 69.5385C342.982 65.3844 346.35 62.0169 350.504 62.0169C354.658 62.0169 358.025 65.3844 358.025 69.5385C358.025 74.9499 355.948 79.7446 352.235 83.1311C348.605 86.4418 343.869 88.002 339.11 88.002C328.953 88.002 319.665 80.8565 319.665 69.5385L319.665 33.7817L312.144 33.7817C307.99 33.7817 304.622 30.4143 304.622 26.2602C304.622 22.1061 308.007 18.8038 312.144 18.7386L319.665 18.7386L319.665 9.02577C319.665 4.87173 323.562 1.50423 327.716 1.50423C331.87 1.50423 334.708 4.87174 334.708 9.02577L334.708 18.8038C334.708 18.8038 347.119 18.8038 350.88 18.8038C354.641 18.8038 357.993 22.3736 358.025 26.3253C358.056 30.0868 354.641 33.7817 351.256 33.7817L334.669 33.8469C334.669 33.8469 334.63 66.8702 334.669 69.5385C334.708 72.2067 336.926 73.1057 339.11 72.9589C341.123 72.8235 342.982 71.4546 342.982 69.5385Z",
  "M285.819 18.8047C289.973 18.8047 293.34 22.1722 293.34 26.3262L293.34 78.977C293.34 83.131 289.973 86.4986 285.819 86.4986C281.665 86.4986 278.297 83.131 278.297 78.977L278.297 26.3262C278.297 22.1722 281.665 18.8047 285.819 18.8047Z",
  "M293.34 7.52154C293.34 11.6756 289.973 15.0431 285.819 15.0431C281.665 15.0431 278.297 11.6756 278.297 7.52154C278.297 3.36751 281.665 0 285.819 0C289.973 0 293.34 3.36751 293.34 7.52154Z",
  "M221.66 37.9902C218.992 39.9468 218.125 42.028 218.125 43.6256V79.7288C218.125 83.8828 214.757 87.2503 210.603 87.2503C206.449 87.2503 203.082 83.8828 203.082 79.7288V43.6256C203.082 36.0843 207.265 29.8918 212.764 25.8594C218.267 21.8238 225.506 19.5566 233.168 19.5566C240.83 19.5566 248.068 21.8238 253.571 25.8594C259.07 29.8918 263.254 36.0843 263.254 43.6256V79.7288C263.254 83.8828 259.886 87.2503 255.732 87.2503C251.578 87.2503 248.211 83.8828 248.211 79.7288V43.6256C248.211 42.028 247.343 39.9468 244.675 37.9902C242.012 36.0369 237.968 34.5997 233.168 34.5997C228.368 34.5997 224.324 36.0369 221.66 37.9902Z",
  "M101.315 37.2383C98.6474 39.1949 97.78 41.276 97.78 42.8736V78.977C97.78 83.1311 94.4125 86.4986 90.2585 86.4986C86.1044 86.4986 82.7369 83.1311 82.7369 78.977V42.8736C82.7369 35.3324 86.9209 29.1398 92.4195 25.1074C97.9227 21.0718 105.161 18.8047 112.823 18.8047C120.485 18.8047 127.724 21.0718 133.227 25.1074C133.974 25.6553 134.696 26.2429 135.388 26.8684C136.079 26.2429 136.802 25.6553 137.549 25.1074C143.052 21.0718 150.29 18.8047 157.952 18.8047C165.615 18.8047 172.853 21.0718 178.356 25.1074C183.855 29.1398 188.039 35.3324 188.039 42.8736V78.977C188.039 83.1311 184.671 86.4986 180.517 86.4986C176.363 86.4986 172.995 83.1311 172.995 78.977V42.8736C172.995 41.276 172.128 39.1949 169.46 37.2383C166.796 35.2849 162.752 33.8478 157.952 33.8478C153.152 33.8478 149.108 35.2849 146.445 37.2383C143.777 39.1949 142.909 41.276 142.909 42.8736V78.977C142.909 83.1311 139.542 86.4986 135.388 86.4986C131.234 86.4986 127.866 83.1311 127.866 78.977V42.8736C127.866 41.276 126.999 39.1949 124.331 37.2383C121.667 35.2849 117.623 33.8478 112.823 33.8478C108.023 33.8478 103.979 35.2849 101.315 37.2383Z",
  "M33.8469 72.2074C44.232 72.2074 52.6508 63.7887 52.6508 53.4036C52.6508 43.0185 44.232 34.5997 33.8469 34.5997C23.4619 34.5997 15.0431 43.0185 15.0431 53.4036C15.0431 63.7887 23.4619 72.2074 33.8469 72.2074ZM33.8469 87.2505C52.5401 87.2505 67.6939 72.0967 67.6939 53.4036C67.6939 34.7104 52.5401 19.5566 33.8469 19.5566C15.1538 19.5566 0 34.7104 0 53.4036C0 72.0967 15.1538 87.2505 33.8469 87.2505Z",
  "M406.163 31.8284C391.462 31.8284 384.05 38.91 384.05 52.6503C384.05 66.0164 391.652 73.1765 406.163 73.5729L412.797 73.2002L410.517 84.7943C413.417 82.4323 416.757 79.4775 419.958 76.1097C427.086 68.611 429.382 62.5887 429.382 52.6503C429.382 40.0282 420.865 31.8284 406.163 31.8284ZM369.308 52.2546C369.308 32.4405 385.971 16.5469 406.163 16.5469C426.356 16.5469 443.019 32.3745 443.019 52.2546C443.019 71.078 436.853 76.1497 429.382 84.0091C421.708 92.0832 411.652 97.2378 409.014 99.0234C405.104 101.669 399.987 98.7977 399.987 94.2567L397.687 84.0091C380.644 84.0091 369.308 71.078 369.308 52.2546Z"
];
function ca({ caption: e, className: t }) {
  return /* @__PURE__ */ v("div", { "data-omni-powered-by": "", className: h("flex items-center gap-2 whitespace-nowrap", t), children: [
    /* @__PURE__ */ i("span", { className: "hidden text-[10px] font-medium uppercase tracking-[.12em] text-[#C9C4E6] sm:inline", children: e }),
    /* @__PURE__ */ i("span", { className: "inline-flex items-center rounded-[5px] bg-[#4D4A9D] px-1.5 py-[5px] text-white", children: /* @__PURE__ */ i("svg", { viewBox: "0 0 503 101", role: "img", "aria-label": "omnitok", className: "block h-[13px] w-auto", fill: "currentColor", children: er.map((a) => /* @__PURE__ */ i("path", { fillRule: "evenodd", clipRule: "evenodd", d: a }, a)) }) })
  ] });
}
const pa = X(
  ({ brand: e, brandText: t, label: a, poweredBy: n = !0, poweredByCaption: r, actions: o, onMenuToggle: l, menuLabel: s, className: p, ...d }, c) => {
    const { t: m } = Ee(), g = e != null || t != null && t !== "";
    return /* @__PURE__ */ v(
      "header",
      {
        ref: c,
        "data-omni-brand-header": "",
        className: h(
          "flex h-[42px] flex-shrink-0 items-center gap-3.5 border-b border-[var(--omni-navy-border)] [background:var(--omni-header-bg)] px-4 font-sans text-[#E4DFF3]",
          p
        ),
        ...d,
        children: [
          l && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: l,
              "aria-label": s ?? m("header.toggleMenu"),
              className: "-ml-1.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-md text-[#BEB6D8] transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
              children: /* @__PURE__ */ i(Tn, { className: "h-[18px] w-[18px]", "aria-hidden": "true" })
            }
          ),
          g && /* @__PURE__ */ i("div", { "data-omni-brand": "", className: "flex min-w-0 flex-shrink-0 items-center [&_img]:max-h-6 [&_img]:w-auto [&_img]:max-w-[160px]", children: e ?? /* @__PURE__ */ i("span", { className: "truncate font-display text-[15px] font-bold tracking-[-.01em] text-white", children: t }) }),
          a != null && a !== "" && /* @__PURE__ */ i(
            "div",
            {
              "data-omni-brand-label": "",
              className: h(
                "hidden min-w-0 truncate text-[11px] uppercase tracking-[.06em] text-[#C9C4E6] md:block",
                g && "border-l border-white/[.15] pl-3.5"
              ),
              children: a
            }
          ),
          /* @__PURE__ */ v("div", { className: "ml-auto flex flex-shrink-0 items-center gap-3", children: [
            o,
            n && /* @__PURE__ */ i(ca, { caption: r ?? m("header.poweredBy") })
          ] })
        ]
      }
    );
  }
);
pa.displayName = "BrandHeader";
const _t = "(min-width: 1024px)";
function tr() {
  const [e, t] = re(
    () => typeof window > "u" || typeof window.matchMedia != "function" ? !0 : window.matchMedia(_t).matches
  );
  return ue(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const a = window.matchMedia(_t), n = () => t(a.matches);
    return a.addEventListener("change", n), () => a.removeEventListener("change", n);
  }, []), e;
}
const ar = X(
  ({
    children: e,
    sidebar: t,
    sidebarItems: a = [],
    sidebarFooter: n,
    sidebarFooterCollapsed: r,
    activeSidebarId: o,
    onSidebarItemClick: l,
    projectSelector: s,
    sidebarExpandedIds: p,
    onSidebarExpandedChange: d,
    sidebarCollapsed: c,
    onSidebarCollapsedChange: m,
    brandHeader: g,
    header: f,
    hideSidebar: E = !1,
    hideHeader: A = !1,
    rightPanel: M,
    rightPanelWidth: k = "360px",
    mainClassName: w,
    className: D,
    ...b
  }, u) => {
    const { t: y } = Ee(), [z, Z] = re(!1), q = c ?? z, j = U(
      (B) => {
        c === void 0 && Z(B), m == null || m(B);
      },
      [c, m]
    ), [T, Y] = re(!1), V = tr(), I = !!t, F = !!f;
    ue(() => {
      V && Y(!1);
    }, [V]);
    const Q = () => {
      V ? j(!q) : Y((B) => !B);
    }, J = /* @__PURE__ */ i(
      sa,
      {
        items: a,
        footer: n,
        footerCollapsed: r,
        collapsed: V ? q : !1,
        onCollapsedChange: j,
        activeId: o,
        projectSelector: s,
        expandedIds: p,
        onExpandedChange: d,
        onItemClick: (B) => {
          l == null || l(B), Y(!1);
        }
      }
    ), te = /* @__PURE__ */ v("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
      /* @__PURE__ */ i(
        "main",
        {
          "data-omni-main": "",
          className: h("flex-1 overflow-y-auto", w ?? "p-6", M && "hidden md:block"),
          children: e
        }
      ),
      M && /* @__PURE__ */ i(
        "aside",
        {
          "data-omni-right-panel": "",
          className: h(
            "w-full flex-shrink-0 overflow-y-auto bg-white md:w-[var(--panel-width)]",
            // Docked panel with the left corners rounded (.omni-panel spec).
            "md:my-3 md:rounded-l-[18px] md:border md:border-r-0 md:border-neutral-200 md:shadow-card"
          ),
          style: { "--panel-width": k },
          children: M
        }
      )
    ] });
    return /* @__PURE__ */ v(
      "div",
      {
        ref: u,
        "data-omni-shell": "v3",
        className: h("flex h-screen flex-col bg-[var(--omni-canvas)] font-sans text-[var(--omni-text)]", D),
        ...b,
        children: [
          !A && (F ? f : /* @__PURE__ */ i(pa, { ...g, onMenuToggle: E ? void 0 : Q })),
          /* @__PURE__ */ v("div", { className: "flex min-h-0 flex-1", children: [
            !E && /* @__PURE__ */ v(fe, { children: [
              !I && T && /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  "aria-label": y("layout.closeMenu"),
                  className: "fixed inset-0 z-40 bg-neutral-900/45 lg:hidden",
                  onClick: () => Y(!1)
                }
              ),
              /* @__PURE__ */ i(
                "div",
                {
                  className: h(
                    "z-50 flex-shrink-0 transition-transform duration-300 lg:static lg:z-auto lg:h-full lg:translate-x-0 lg:transform-none",
                    "fixed bottom-0 left-0 top-[42px]",
                    !I && T ? "translate-x-0" : "-translate-x-full",
                    I && "translate-x-0"
                  ),
                  children: I ? t : J
                }
              )
            ] }),
            /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 flex-col", children: te })
          ] })
        ]
      }
    );
  }
);
ar.displayName = "Layout";
const nr = X(
  ({
    items: e,
    showHomeIcon: t = !1,
    separator: a,
    maxItems: n,
    className: r,
    ...o
  }, l) => {
    const s = () => a || /* @__PURE__ */ i(vt, { className: "w-3.5 h-3.5 text-neutral-400 mx-1.5", "aria-hidden": "true" }), p = (m, g, f) => {
      const E = /* @__PURE__ */ v(fe, { children: [
        g === 0 && t && /* @__PURE__ */ i(yn, { className: "w-3.5 h-3.5 mr-1", "aria-hidden": "true" }),
        m.icon && /* @__PURE__ */ i("span", { className: "mr-1", children: m.icon }),
        m.label
      ] }), A = h(
        "inline-flex items-center text-xs",
        f ? "font-semibold text-neutral-800" : "text-neutral-500 hover:text-neutral-800 hover:underline transition-colors"
      );
      return m.href && !f ? /* @__PURE__ */ i("a", { href: m.href, className: A, children: E }) : /* @__PURE__ */ i("span", { className: A, children: E });
    };
    let d = e;
    if (n && e.length > n && n) {
      const m = e.slice(0, 1), g = e.slice(-(n - 2));
      d = [
        ...m,
        { label: "..." },
        ...g
      ];
    }
    return /* @__PURE__ */ i("nav", { ref: l, "aria-label": "Breadcrumb", className: r, ...o, children: /* @__PURE__ */ i("ol", { className: "flex items-center flex-wrap", children: d.map((m, g) => {
      const f = g === d.length - 1;
      return /* @__PURE__ */ v("li", { className: "inline-flex items-center", children: [
        p(m, g, f),
        !f && s()
      ] }, g);
    }) }) });
  }
);
nr.displayName = "Breadcrumb";
const ir = X(
  ({ onClose: e, title: t, description: a, children: n, footer: r, className: o, ...l }, s) => /* @__PURE__ */ v(
    "div",
    {
      ref: s,
      className: h("flex flex-col h-full bg-white animate-slide-in-right motion-reduce:animate-none", o),
      ...l,
      children: [
        /* @__PURE__ */ v("div", { className: "flex items-start justify-between gap-3 px-5 py-4 bg-white border-b border-neutral-200 flex-shrink-0", children: [
          /* @__PURE__ */ v("div", { className: "min-w-0 flex-1", children: [
            t && /* @__PURE__ */ i("h2", { className: "font-display text-[15px] font-extrabold leading-6 text-neutral-800 truncate", children: t }),
            a && /* @__PURE__ */ i("p", { className: "mt-0.5 text-[13px] leading-5 text-neutral-600", children: a })
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: e,
              className: "p-1.5 -mr-1.5 rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 transition-colors flex-shrink-0",
              "aria-label": "Close",
              children: /* @__PURE__ */ i(je, { "aria-hidden": "true", className: "w-[18px] h-[18px]" })
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex-1 overflow-y-auto px-5 py-4 text-[13px] leading-5 text-neutral-700", children: n }),
        r && /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-2 px-5 py-3 border-t border-neutral-200 bg-[#FAFAFC] flex-shrink-0", children: r })
      ]
    }
  )
);
ir.displayName = "SidePanel";
function rr({
  columns: e,
  data: t,
  rowKey: a,
  sortColumn: n,
  sortDirection: r,
  onSort: o,
  onRowClick: l,
  loading: s = !1,
  emptyMessage: p = "No data available",
  striped: d = !1,
  hoverable: c = !0,
  compact: m = !1,
  className: g,
  ...f
}, E) {
  const A = (b, u) => typeof a == "function" ? a(b) : String(b[a] ?? u), M = (b, u, y) => u.render ? u.render(b, y) : u.accessor ? String(b[u.accessor] ?? "") : "", k = (b) => {
    if (!b.sortable || !o) return;
    let u = "asc";
    n === b.key && (r === "asc" ? u = "desc" : r === "desc" && (u = null)), o(b.key, u);
  }, w = (b) => {
    if (!b.sortable) return null;
    const u = n === b.key, y = h(
      "w-3.5 h-3.5 ml-1 flex-shrink-0",
      u ? "text-primary-ink" : "text-neutral-400"
    );
    return u && r === "asc" ? /* @__PURE__ */ i(Ya, { className: y }) : u && r === "desc" ? /* @__PURE__ */ i(Ha, { className: y }) : /* @__PURE__ */ i(Ua, { className: y });
  }, D = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  return /* @__PURE__ */ i("div", { className: "overflow-x-auto", children: /* @__PURE__ */ v(
    "table",
    {
      ref: E,
      className: h("w-full border-collapse", g),
      ...f,
      children: [
        /* @__PURE__ */ i("thead", { className: "bg-white border-b border-neutral-200", children: /* @__PURE__ */ i("tr", { children: e.map((b) => /* @__PURE__ */ i(
          "th",
          {
            className: h(
              "text-2xs font-semibold uppercase tracking-[.06em] text-neutral-500 whitespace-nowrap",
              m ? "px-3 py-2" : "px-4 py-3",
              D[b.align || "left"],
              b.sortable && "cursor-pointer select-none hover:text-neutral-800"
            ),
            style: { width: b.width },
            onClick: () => k(b),
            children: /* @__PURE__ */ v("div", { className: h(
              "flex items-center",
              b.align === "center" && "justify-center",
              b.align === "right" && "justify-end"
            ), children: [
              b.header,
              w(b)
            ] })
          },
          b.key
        )) }) }),
        /* @__PURE__ */ i("tbody", { className: "bg-white divide-y divide-neutral-200", children: s ? /* @__PURE__ */ i("tr", { children: /* @__PURE__ */ i(
          "td",
          {
            colSpan: e.length,
            className: "px-4 py-8 text-center text-neutral-500",
            children: /* @__PURE__ */ v("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ i("div", { "aria-hidden": "true", className: "w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" }),
              "Loading..."
            ] })
          }
        ) }) : t.length === 0 ? /* @__PURE__ */ i("tr", { children: /* @__PURE__ */ i(
          "td",
          {
            colSpan: e.length,
            className: "px-4 py-8 text-center text-neutral-500",
            children: p
          }
        ) }) : t.map((b, u) => /* @__PURE__ */ i(
          "tr",
          {
            className: h(
              "transition-colors",
              d && u % 2 === 1 && "bg-neutral-50",
              c && "hover:bg-neutral-50",
              l && "cursor-pointer"
            ),
            onClick: () => l == null ? void 0 : l(b, u),
            children: e.map((y) => /* @__PURE__ */ i(
              "td",
              {
                className: h(
                  "text-neutral-700 text-[13px] leading-5",
                  m ? "px-3 py-2" : "px-4 py-3",
                  D[y.align || "left"]
                ),
                children: M(b, y, u)
              },
              y.key
            ))
          },
          A(b, u)
        )) })
      ]
    }
  ) });
}
const So = X(rr), da = xt(null), or = {
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
}, lr = {
  sm: "px-3 py-1.5 text-2xs",
  md: "px-[15px] py-2 text-xs",
  lg: "px-5 py-2.5 text-[13px]"
}, sr = X(
  ({
    items: e,
    activeId: t,
    defaultActiveId: a,
    onChange: n,
    variant: r = "default",
    fullWidth: o = !1,
    size: l = "md",
    className: s,
    children: p,
    ...d
  }, c) => {
    var M;
    const [m, g] = re(
      a || ((M = e[0]) == null ? void 0 : M.id) || ""
    ), f = t ?? m, E = or[r], A = (k) => {
      t === void 0 && g(k), n == null || n(k);
    };
    return /* @__PURE__ */ i(da.Provider, { value: { activeId: f }, children: /* @__PURE__ */ v("div", { ref: c, className: s, ...d, children: [
      /* @__PURE__ */ i(
        "div",
        {
          role: "tablist",
          className: h(
            "flex",
            E.list,
            o ? "w-full" : "flex-wrap"
          ),
          children: e.map((k) => /* @__PURE__ */ v(
            "button",
            {
              role: "tab",
              type: "button",
              "aria-selected": f === k.id,
              "aria-controls": `tabpanel-${k.id}`,
              disabled: k.disabled,
              onClick: () => A(k.id),
              className: h(
                "flex items-center justify-center gap-[7px] font-semibold transition-[background-color,border-color,box-shadow,color] duration-150 min-w-0",
                E.tab,
                lr[l],
                f === k.id ? E.active : E.inactive,
                o && "flex-1",
                k.disabled && "opacity-50 cursor-not-allowed"
              ),
              children: [
                r === "default" && f === k.id && /* @__PURE__ */ i(Ie, { "aria-hidden": "true", className: "w-3.5 h-3.5 shrink-0", strokeWidth: 3 }),
                k.icon,
                /* @__PURE__ */ i("span", { className: "truncate", children: k.label }),
                k.badge !== void 0 && /* @__PURE__ */ i(
                  "span",
                  {
                    className: h(
                      "px-1.5 py-0.5 text-2xs font-semibold rounded-full shrink-0 tabular-nums",
                      f === k.id ? "bg-white/20" : "bg-neutral-100 text-neutral-600"
                    ),
                    children: k.badge
                  }
                )
              ]
            },
            k.id
          ))
        }
      ),
      p
    ] }) });
  }
);
sr.displayName = "Tabs";
const cr = X(
  ({ id: e, children: t, className: a, ...n }, r) => {
    const o = ft(da);
    if (!o)
      throw new Error("TabPanel must be used within Tabs");
    return o.activeId !== e ? null : /* @__PURE__ */ i(
      "div",
      {
        ref: r,
        role: "tabpanel",
        id: `tabpanel-${e}`,
        "aria-labelledby": e,
        className: h("pt-4", a),
        ...n,
        children: t
      }
    );
  }
);
cr.displayName = "TabPanel";
const Dt = {
  sm: "h-8 min-w-8 text-xs",
  md: "h-9 min-w-9 text-[13px]",
  lg: "h-10 min-w-10 text-sm"
}, pr = {
  sm: 14,
  md: 16,
  lg: 20
}, dr = X(
  ({
    currentPage: e,
    totalPages: t,
    onChange: a,
    siblingCount: n = 1,
    showFirstLast: r = !0,
    showInfo: o = !1,
    language: l,
    totalItems: s,
    itemsPerPage: p,
    itemsPerPageOptions: d,
    onItemsPerPageChange: c,
    infoPosition: m = "start",
    disabled: g = !1,
    size: f = "md",
    className: E,
    ...A
  }, M) => {
    const k = Ee(), { t: w } = l ? Le({
      language: l,
      messagesByLanguage: k.messagesByLanguage
    }) : k, b = (() => {
      const F = [], J = n * 2 + 3 + 2;
      if (t <= J)
        return Array.from({ length: t }, (R, L) => L + 1);
      const te = Math.max(e - n, 1), B = Math.min(e + n, t), x = te > 2, C = B < t - 1;
      if (!x && C) {
        const R = 1 + 2 * n + 1;
        for (let L = 1; L <= R; L++) F.push(L);
        F.push("ellipsis"), F.push(t);
      } else if (x && !C) {
        F.push(1), F.push("ellipsis");
        const R = t - (2 * n + 1);
        for (let L = R; L <= t; L++) F.push(L);
      } else {
        F.push(1), F.push("ellipsis");
        for (let R = te; R <= B; R++) F.push(R);
        F.push("ellipsis"), F.push(t);
      }
      return F;
    })(), u = pr[f], y = h(
      "flex items-center justify-center rounded-[9px] transition-colors tabular-nums",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      "focus:ring-primary",
      Dt[f],
      g && "opacity-50 cursor-not-allowed"
    ), z = ({ page: F, isActive: Q }) => /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => !g && a(F),
        disabled: g,
        "aria-current": Q ? "page" : void 0,
        className: h(
          y,
          "px-3",
          Q ? "bg-[var(--omni-selected)] text-white font-bold" : "text-neutral-600 hover:bg-primary-soft hover:text-primary-ink"
        ),
        children: F
      }
    ), Z = ({ direction: F, double: Q }) => {
      const J = F === "prev", te = Q ? J ? 1 : t : J ? e - 1 : e + 1, B = g || (J ? e === 1 : e === t), x = Q ? J ? tn : nn : J ? Ja : vt;
      return /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          onClick: () => !B && a(te),
          disabled: B,
          "aria-label": w(Q ? J ? "pagination.firstPage" : "pagination.lastPage" : J ? "pagination.previousPage" : "pagination.nextPage"),
          className: h(
            y,
            B ? "text-neutral-400 cursor-not-allowed" : "text-neutral-600 hover:bg-primary-soft hover:text-primary-ink"
          ),
          children: /* @__PURE__ */ i(x, { size: u })
        }
      );
    }, q = s && p ? (e - 1) * p + 1 : void 0, j = s && p ? Math.min(e * p, s) : void 0, T = o && s !== void 0, Y = Array.isArray(d) && d.length > 0, V = T || Y ? /* @__PURE__ */ v("div", { className: "flex items-center gap-2", children: [
      T && /* @__PURE__ */ i("span", { className: "text-xs text-neutral-500 tabular-nums whitespace-nowrap", children: w("pagination.info", {
        start: q ?? "",
        end: j ?? "",
        total: s
      }) }),
      Y && /* @__PURE__ */ i(
        ia,
        {
          size: f,
          disabled: g,
          "aria-label": w("pagination.itemsPerPage"),
          value: p !== void 0 ? String(p) : void 0,
          options: d.map((F) => ({ value: String(F), label: String(F) })),
          onChange: (F) => c == null ? void 0 : c(Number(F.target.value))
        }
      )
    ] }) : null, I = /* @__PURE__ */ v("div", { className: "flex items-center gap-2", children: [
      r && /* @__PURE__ */ i(Z, { direction: "prev", double: !0 }),
      /* @__PURE__ */ i(Z, { direction: "prev" }),
      /* @__PURE__ */ i("div", { className: "flex items-center gap-1", children: b.map(
        (F, Q) => F === "ellipsis" ? /* @__PURE__ */ i(
          "span",
          {
            className: h("px-2 text-neutral-500", Dt[f]),
            children: "..."
          },
          `ellipsis-${Q}`
        ) : /* @__PURE__ */ i(z, { page: F, isActive: F === e }, F)
      ) }),
      /* @__PURE__ */ i(Z, { direction: "next" }),
      r && /* @__PURE__ */ i(Z, { direction: "next", double: !0 })
    ] });
    return /* @__PURE__ */ i(
      "nav",
      {
        ref: M,
        role: "navigation",
        "aria-label": w("pagination.ariaLabel"),
        className: h(
          "flex items-center gap-2",
          m === "end" && "justify-between w-full",
          E
        ),
        ...A,
        children: m === "end" ? /* @__PURE__ */ v(fe, { children: [
          I,
          V
        ] }) : /* @__PURE__ */ v(fe, { children: [
          V,
          I
        ] })
      }
    );
  }
);
dr.displayName = "Pagination";
const ur = 'a[href], area[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';
function At(e) {
  return Array.from(e.querySelectorAll(ur)).filter(
    (t) => !t.closest("[inert]") && t.getClientRects().length > 0
  );
}
function mr(e, t) {
  const a = ce(null);
  ue(() => {
    if (!e) return;
    const n = t.current;
    if (!n) return;
    a.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const r = requestAnimationFrame(() => {
      if (n.contains(document.activeElement)) return;
      const l = At(n)[0];
      l ? l.focus() : (n.hasAttribute("tabindex") || n.setAttribute("tabindex", "-1"), n.focus());
    }), o = (l) => {
      if (l.key !== "Tab") return;
      const s = At(n);
      if (s.length === 0) {
        l.preventDefault();
        return;
      }
      const p = s[0], d = s[s.length - 1], c = document.activeElement;
      l.shiftKey && (c === p || !n.contains(c)) ? (l.preventDefault(), d.focus()) : !l.shiftKey && (c === d || !n.contains(c)) && (l.preventDefault(), p.focus());
    };
    return document.addEventListener("keydown", o), () => {
      cancelAnimationFrame(r), document.removeEventListener("keydown", o);
      const l = a.current;
      a.current = null, l && l.isConnected && l.focus();
    };
  }, [e, t]);
}
const fr = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-4xl"
}, ua = X(
  ({
    open: e,
    onClose: t,
    title: a,
    description: n,
    children: r,
    footer: o,
    size: l = "md",
    closeOnOverlay: s = !0,
    closeOnEscape: p = !0,
    showCloseButton: d = !0,
    centered: c = !0,
    className: m,
    ...g
  }, f) => {
    const E = ce(null), A = U(
      (w) => {
        E.current = w, typeof f == "function" ? f(w) : f && (f.current = w);
      },
      [f]
    );
    mr(e, E);
    const M = Jt(), k = U(
      (w) => {
        w.key === "Escape" && p && t();
      },
      [p, t]
    );
    return ue(() => (e && (document.addEventListener("keydown", k), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", k), document.body.style.overflow = "";
    }), [e, k]), e ? /* @__PURE__ */ v(
      "div",
      {
        className: "fixed inset-0 z-50 flex overflow-y-auto",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": a ? M : void 0,
        children: [
          /* @__PURE__ */ i(
            "div",
            {
              className: "fixed inset-0 bg-neutral-900/45 animate-fade-in",
              onClick: s ? t : void 0
            }
          ),
          /* @__PURE__ */ i(
            "div",
            {
              className: h(
                "relative flex min-h-full w-full p-4",
                c ? "items-center justify-center" : "items-start justify-center pt-16"
              ),
              children: /* @__PURE__ */ v(
                "div",
                {
                  ref: A,
                  className: h(
                    // v3: radius 18, line border, deep soft shadow; the header is white.
                    "relative w-full bg-white rounded-[18px] border border-neutral-200 shadow-modal",
                    "animate-fade-in",
                    fr[l],
                    m
                  ),
                  onClick: (w) => w.stopPropagation(),
                  ...g,
                  children: [
                    (a || d) && /* @__PURE__ */ v("div", { className: "flex items-start justify-between gap-3 px-5 py-4 bg-white border-b border-neutral-200 rounded-t-[18px]", children: [
                      /* @__PURE__ */ v("div", { className: "min-w-0", children: [
                        a && /* @__PURE__ */ i("h2", { id: M, className: "font-display text-[17px] font-extrabold leading-6 text-neutral-800", children: a }),
                        n && /* @__PURE__ */ i("p", { className: "mt-0.5 text-[13px] leading-5 text-neutral-600", children: n })
                      ] }),
                      d && /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          onClick: t,
                          className: "p-1.5 -mr-1.5 rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 transition-colors",
                          "aria-label": "Close",
                          children: /* @__PURE__ */ i(je, { "aria-hidden": "true", className: "w-[18px] h-[18px]" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ i("div", { className: "px-5 py-4 text-[13px] leading-5 text-neutral-700", children: r }),
                    o && /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-2 px-5 py-3 border-t border-neutral-200 bg-[#FAFAFC] rounded-b-[18px]", children: o })
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
ua.displayName = "Modal";
const xr = ({
  message: e,
  confirmText: t = "Confirm",
  cancelText: a = "Cancel",
  confirmVariant: n = "primary",
  onConfirm: r,
  onClose: o,
  loading: l,
  ...s
}) => /* @__PURE__ */ i(
  ua,
  {
    ...s,
    onClose: o,
    size: "sm",
    footer: /* @__PURE__ */ v(fe, { children: [
      /* @__PURE__ */ i(ze, { variant: "secondary", onClick: o, disabled: l, children: a }),
      /* @__PURE__ */ i(ze, { variant: n, onClick: r, loading: l, children: t })
    ] }),
    children: /* @__PURE__ */ i("p", { className: "text-[13px] leading-5 text-neutral-700", children: e })
  }
);
xr.displayName = "ConfirmModal";
const vr = {
  info: "bg-info text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-error text-white"
}, hr = {
  info: ta,
  success: ea,
  warning: aa,
  error: ht
}, ma = X(
  ({ toast: e, onClose: t, className: a, ...n }, r) => {
    const [o, l] = re(!1), s = hr[e.variant];
    ue(() => {
      if (requestAnimationFrame(() => l(!0)), e.duration !== 0) {
        const d = setTimeout(() => {
          l(!1), setTimeout(() => t(e.id), 200);
        }, e.duration || 5e3);
        return () => clearTimeout(d);
      }
    }, [e, t]);
    const p = () => {
      l(!1), setTimeout(() => t(e.id), 200);
    };
    return /* @__PURE__ */ v(
      "div",
      {
        ref: r,
        role: "alert",
        className: h(
          "flex items-start gap-2.5 px-4 py-3 rounded-xl shadow-menu min-w-[320px] max-w-md",
          "transition-[opacity,transform] duration-200 motion-reduce:transition-none",
          o ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          vr[e.variant],
          a
        ),
        ...n,
        children: [
          /* @__PURE__ */ i(s, { "aria-hidden": "true", className: "flex-shrink-0 w-[18px] h-[18px] mt-px" }),
          /* @__PURE__ */ v("div", { className: "flex-1 min-w-0", children: [
            e.title && /* @__PURE__ */ i("p", { className: "text-xs font-semibold leading-4 mb-0.5", children: e.title }),
            /* @__PURE__ */ i("p", { className: "text-[13px] leading-5", children: e.message })
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: p,
              className: "flex-shrink-0 p-1 -mr-1 rounded-md hover:bg-white/15 transition-colors",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ i(je, { "aria-hidden": "true", className: "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
ma.displayName = "Toast";
const gr = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, br = ({
  position: e = "top-right",
  toasts: t,
  onClose: a
}) => /* @__PURE__ */ i(
  "div",
  {
    className: h(
      "fixed z-50 flex flex-col gap-2",
      gr[e]
    ),
    children: t.map((n) => /* @__PURE__ */ i(ma, { toast: n, onClose: a }, n.id))
  }
), fa = xt(null), Po = ({ children: e, position: t = "top-right" }) => {
  const [a, n] = re([]), r = U((c) => {
    const m = Math.random().toString(36).slice(2, 9);
    return n((g) => [...g, { ...c, id: m }]), m;
  }, []), o = U((c) => {
    n((m) => m.filter((g) => g.id !== c));
  }, []), l = U(
    (c, m) => r({ variant: "success", message: c, title: m }),
    [r]
  ), s = U(
    (c, m) => r({ variant: "error", message: c, title: m }),
    [r]
  ), p = U(
    (c, m) => r({ variant: "warning", message: c, title: m }),
    [r]
  ), d = U(
    (c, m) => r({ variant: "info", message: c, title: m }),
    [r]
  );
  return /* @__PURE__ */ v(fa.Provider, { value: { toasts: a, addToast: r, removeToast: o, success: l, error: s, warning: p, info: d }, children: [
    e,
    /* @__PURE__ */ i(br, { position: t, toasts: a, onClose: o })
  ] });
}, Oo = () => {
  const e = ft(fa);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, yr = X(
  ({
    language: e,
    logo: t,
    logoWide: a,
    splitLogo: n,
    brandText: r,
    heroTitle: o,
    heroDescription: l,
    poweredBy: s = !0,
    onLoginSubmit: p,
    loading: d = !1,
    error: c,
    onForgotPassword: m,
    showRememberMe: g = !0,
    showForgotPassword: f = !0,
    footer: E,
    idPrefix: A,
    className: M,
    ...k
  }, w) => {
    const D = Ee(), { t: b } = e ? Le({
      language: e,
      messagesByLanguage: D.messagesByLanguage
    }) : D, [u, y] = re(""), [z, Z] = re(""), [q, j] = re(!1), [T, Y] = re(!1), V = (B) => A ? `${A}-${B}` : B, I = (B) => {
      B.preventDefault(), p == null || p(u, z);
    }, F = a || t, Q = F ? /* @__PURE__ */ v(fe, { children: [
      /* @__PURE__ */ i("div", { className: "md:hidden", children: t ?? a }),
      /* @__PURE__ */ i("div", { className: "hidden md:block", children: F })
    ] }) : r ? /* @__PURE__ */ i("span", { className: "font-display text-[22px] font-extrabold tracking-[-.02em] text-[var(--omni-ink)]", children: r }) : null, J = /* @__PURE__ */ v("form", { onSubmit: I, className: "flex flex-col gap-5", children: [
      /* @__PURE__ */ v("div", { className: "text-left", children: [
        Q && /* @__PURE__ */ i(
          "div",
          {
            className: h(
              "mb-7 flex [&_img]:max-h-10 [&_img]:w-auto",
              "justify-start lg:hidden"
            ),
            children: Q
          }
        ),
        /* @__PURE__ */ i("h1", { className: "font-display text-[26px] font-extrabold leading-8 tracking-[-.02em] text-[var(--omni-ink)]", children: b("login.title") }),
        /* @__PURE__ */ i("p", { className: "mt-1.5 text-[13px] leading-5 text-neutral-500", children: b("login.subtitle") })
      ] }),
      c && /* @__PURE__ */ v(
        "div",
        {
          role: "alert",
          className: "flex items-start gap-2 rounded-xl border border-error/30 bg-error-soft px-3.5 py-3 text-[13px] leading-5 text-error-dark",
          children: [
            /* @__PURE__ */ i(ht, { "aria-hidden": "true", className: "mt-0.5 h-4 w-4 flex-shrink-0" }),
            /* @__PURE__ */ i("span", { children: c })
          ]
        }
      ),
      /* @__PURE__ */ i(
        rt,
        {
          id: V("email"),
          label: b("login.emailLabel"),
          type: "email",
          autoComplete: "email",
          value: u,
          onChange: (B) => y(B.target.value),
          placeholder: b("login.emailPlaceholder"),
          leftIcon: /* @__PURE__ */ i(Pn, { "aria-hidden": "true", className: "h-4 w-4" }),
          size: "lg",
          required: !0,
          disabled: d
        }
      ),
      /* @__PURE__ */ i(
        rt,
        {
          id: V("password"),
          label: b("login.passwordLabel"),
          type: q ? "text" : "password",
          autoComplete: "current-password",
          value: z,
          onChange: (B) => Z(B.target.value),
          placeholder: b("login.passwordPlaceholder"),
          leftIcon: /* @__PURE__ */ i(_n, { "aria-hidden": "true", className: "h-4 w-4" }),
          size: "lg",
          rightIcon: /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => j(!q),
              "aria-label": b(q ? "login.hidePassword" : "login.showPassword"),
              "aria-pressed": q,
              className: "grid h-7 w-7 place-items-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-800",
              children: q ? /* @__PURE__ */ i(pn, { "aria-hidden": "true", className: "h-4 w-4" }) : /* @__PURE__ */ i(un, { "aria-hidden": "true", className: "h-4 w-4" })
            }
          ),
          required: !0,
          disabled: d
        }
      ),
      (g || f && m) && /* @__PURE__ */ v("div", { className: "-mt-1 flex items-center justify-between gap-3", children: [
        g ? /* @__PURE__ */ i(
          oa,
          {
            label: b("login.rememberMe"),
            checked: T,
            onChange: (B) => Y(B.target.checked)
          }
        ) : /* @__PURE__ */ i("span", {}),
        f && m && /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: m,
            className: "text-xs font-semibold text-primary-ink underline-offset-2 hover:underline",
            children: b("login.forgotPassword")
          }
        )
      ] }),
      /* @__PURE__ */ i(ze, { type: "submit", variant: "primary", size: "lg", fullWidth: !0, loading: d, className: "mt-1", children: b("login.submit") }),
      E && /* @__PURE__ */ i("div", { className: "text-center text-xs text-neutral-500", children: E })
    ] }), te = n || a || t || (r ? /* @__PURE__ */ i("span", { className: "font-display text-[26px] font-extrabold tracking-[-.02em] text-white", children: r }) : null);
    return /* @__PURE__ */ v("div", { ref: w, "data-omni-login": "split", className: h("flex min-h-screen bg-white font-sans", M), ...k, children: [
      /* @__PURE__ */ v("aside", { className: "relative hidden w-[44%] max-w-[640px] flex-col justify-between overflow-hidden p-10 text-white [background:var(--omni-sb-bg)] lg:flex xl:p-14", children: [
        /* @__PURE__ */ i("div", { className: "flex min-h-10 items-center [&_img]:max-h-14 [&_img]:w-auto", children: te }),
        /* @__PURE__ */ v("div", { className: "max-w-[440px]", children: [
          /* @__PURE__ */ i("span", { "aria-hidden": "true", className: "mb-6 block h-1 w-12 rounded-full bg-[var(--omni-sb-accent)]" }),
          /* @__PURE__ */ i("h2", { className: "font-display text-[34px] font-extrabold leading-[1.15] tracking-[-.02em] text-white", children: o ?? b("login.split.heroTitle") }),
          /* @__PURE__ */ i("p", { className: "mt-4 text-[15px] leading-6 text-[#C9C4E6]", children: l ?? b("login.split.heroDescription") })
        ] }),
        /* @__PURE__ */ v("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ i("span", { className: "text-2xs text-[var(--omni-sb-muted)]", children: b("login.split.copyright", { year: (/* @__PURE__ */ new Date()).getFullYear() }) }),
          s && /* @__PURE__ */ i(ca, { caption: b("header.poweredBy") })
        ] })
      ] }),
      /* @__PURE__ */ i("main", { className: "flex flex-1 items-center justify-center px-6 py-12 sm:px-10", children: /* @__PURE__ */ i("div", { className: "w-full max-w-[380px]", children: J }) })
    ] });
  }
);
yr.displayName = "LoginPage";
var To = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var st = { exports: {} }, Me = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function kr() {
  if (St) return ne;
  St = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, M = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function D(u) {
    if (typeof u == "object" && u !== null) {
      var y = u.$$typeof;
      switch (y) {
        case t:
          switch (u = u.type, u) {
            case p:
            case d:
            case n:
            case o:
            case r:
            case m:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case c:
                case E:
                case f:
                case l:
                  return u;
                default:
                  return y;
              }
          }
        case a:
          return y;
      }
    }
  }
  function b(u) {
    return D(u) === d;
  }
  return ne.AsyncMode = p, ne.ConcurrentMode = d, ne.ContextConsumer = s, ne.ContextProvider = l, ne.Element = t, ne.ForwardRef = c, ne.Fragment = n, ne.Lazy = E, ne.Memo = f, ne.Portal = a, ne.Profiler = o, ne.StrictMode = r, ne.Suspense = m, ne.isAsyncMode = function(u) {
    return b(u) || D(u) === p;
  }, ne.isConcurrentMode = b, ne.isContextConsumer = function(u) {
    return D(u) === s;
  }, ne.isContextProvider = function(u) {
    return D(u) === l;
  }, ne.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === t;
  }, ne.isForwardRef = function(u) {
    return D(u) === c;
  }, ne.isFragment = function(u) {
    return D(u) === n;
  }, ne.isLazy = function(u) {
    return D(u) === E;
  }, ne.isMemo = function(u) {
    return D(u) === f;
  }, ne.isPortal = function(u) {
    return D(u) === a;
  }, ne.isProfiler = function(u) {
    return D(u) === o;
  }, ne.isStrictMode = function(u) {
    return D(u) === r;
  }, ne.isSuspense = function(u) {
    return D(u) === m;
  }, ne.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === d || u === o || u === r || u === m || u === g || typeof u == "object" && u !== null && (u.$$typeof === E || u.$$typeof === f || u.$$typeof === l || u.$$typeof === s || u.$$typeof === c || u.$$typeof === M || u.$$typeof === k || u.$$typeof === w || u.$$typeof === A);
  }, ne.typeOf = D, ne;
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
var Pt;
function Nr() {
  return Pt || (Pt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, M = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function D(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === n || P === d || P === o || P === r || P === m || P === g || typeof P == "object" && P !== null && (P.$$typeof === E || P.$$typeof === f || P.$$typeof === l || P.$$typeof === s || P.$$typeof === c || P.$$typeof === M || P.$$typeof === k || P.$$typeof === w || P.$$typeof === A);
    }
    function b(P) {
      if (typeof P == "object" && P !== null) {
        var de = P.$$typeof;
        switch (de) {
          case t:
            var be = P.type;
            switch (be) {
              case p:
              case d:
              case n:
              case o:
              case r:
              case m:
                return be;
              default:
                var Ce = be && be.$$typeof;
                switch (Ce) {
                  case s:
                  case c:
                  case E:
                  case f:
                  case l:
                    return Ce;
                  default:
                    return de;
                }
            }
          case a:
            return de;
        }
      }
    }
    var u = p, y = d, z = s, Z = l, q = t, j = c, T = n, Y = E, V = f, I = a, F = o, Q = r, J = m, te = !1;
    function B(P) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(P) || b(P) === p;
    }
    function x(P) {
      return b(P) === d;
    }
    function C(P) {
      return b(P) === s;
    }
    function R(P) {
      return b(P) === l;
    }
    function L(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function W(P) {
      return b(P) === c;
    }
    function G(P) {
      return b(P) === n;
    }
    function _(P) {
      return b(P) === E;
    }
    function S(P) {
      return b(P) === f;
    }
    function H(P) {
      return b(P) === a;
    }
    function N(P) {
      return b(P) === o;
    }
    function $(P) {
      return b(P) === r;
    }
    function ae(P) {
      return b(P) === m;
    }
    ie.AsyncMode = u, ie.ConcurrentMode = y, ie.ContextConsumer = z, ie.ContextProvider = Z, ie.Element = q, ie.ForwardRef = j, ie.Fragment = T, ie.Lazy = Y, ie.Memo = V, ie.Portal = I, ie.Profiler = F, ie.StrictMode = Q, ie.Suspense = J, ie.isAsyncMode = B, ie.isConcurrentMode = x, ie.isContextConsumer = C, ie.isContextProvider = R, ie.isElement = L, ie.isForwardRef = W, ie.isFragment = G, ie.isLazy = _, ie.isMemo = S, ie.isPortal = H, ie.isProfiler = N, ie.isStrictMode = $, ie.isSuspense = ae, ie.isValidElementType = D, ie.typeOf = b;
  }()), ie;
}
var Ot;
function xa() {
  return Ot || (Ot = 1, process.env.NODE_ENV === "production" ? Me.exports = kr() : Me.exports = Nr()), Me.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ze, Tt;
function jr() {
  if (Tt) return Ze;
  Tt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function r() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var l = {}, s = 0; s < 10; s++)
        l["_" + String.fromCharCode(s)] = s;
      var p = Object.getOwnPropertyNames(l).map(function(c) {
        return l[c];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        d[c] = c;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ze = r() ? Object.assign : function(o, l) {
    for (var s, p = n(o), d, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var m in s)
        t.call(s, m) && (p[m] = s[m]);
      if (e) {
        d = e(s);
        for (var g = 0; g < d.length; g++)
          a.call(s, d[g]) && (p[d[g]] = s[d[g]]);
      }
    }
    return p;
  }, Ze;
}
var Qe, Mt;
function gt() {
  if (Mt) return Qe;
  Mt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qe = e, Qe;
}
var Je, zt;
function va() {
  return zt || (zt = 1, Je = Function.call.bind(Object.prototype.hasOwnProperty)), Je;
}
var Xe, $t;
function Er() {
  if ($t) return Xe;
  $t = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = gt(), a = {}, n = va();
    e = function(o) {
      var l = "Warning: " + o;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function r(o, l, s, p, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in o)
        if (n(o, c)) {
          var m;
          try {
            if (typeof o[c] != "function") {
              var g = Error(
                (p || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = o[c](l, c, p, s, null, t);
          } catch (E) {
            m = E;
          }
          if (m && !(m instanceof Error) && e(
            (p || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in a)) {
            a[m.message] = !0;
            var f = d ? d() : "";
            e(
              "Failed " + s + " type: " + m.message + (f ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (a = {});
  }, Xe = r, Xe;
}
var et, Rt;
function Cr() {
  if (Rt) return et;
  Rt = 1;
  var e = xa(), t = jr(), a = gt(), n = va(), r = Er(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var p = "Warning: " + s;
    typeof console < "u" && console.error(p);
    try {
      throw new Error(p);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return et = function(s, p) {
    var d = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function m(x) {
      var C = x && (d && x[d] || x[c]);
      if (typeof C == "function")
        return C;
    }
    var g = "<<anonymous>>", f = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: w(),
      arrayOf: D,
      element: b(),
      elementType: u(),
      instanceOf: y,
      node: j(),
      objectOf: Z,
      oneOf: z,
      oneOfType: q,
      shape: Y,
      exact: V
    };
    function E(x, C) {
      return x === C ? x !== 0 || 1 / x === 1 / C : x !== x && C !== C;
    }
    function A(x, C) {
      this.message = x, this.data = C && typeof C == "object" ? C : {}, this.stack = "";
    }
    A.prototype = Error.prototype;
    function M(x) {
      if (process.env.NODE_ENV !== "production")
        var C = {}, R = 0;
      function L(G, _, S, H, N, $, ae) {
        if (H = H || g, $ = $ || S, ae !== a) {
          if (p) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var de = H + ":" + S;
            !C[de] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), C[de] = !0, R++);
          }
        }
        return _[S] == null ? G ? _[S] === null ? new A("The " + N + " `" + $ + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new A("The " + N + " `" + $ + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : x(_, S, H, N, $);
      }
      var W = L.bind(null, !1);
      return W.isRequired = L.bind(null, !0), W;
    }
    function k(x) {
      function C(R, L, W, G, _, S) {
        var H = R[L], N = Q(H);
        if (N !== x) {
          var $ = J(H);
          return new A(
            "Invalid " + G + " `" + _ + "` of type " + ("`" + $ + "` supplied to `" + W + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return M(C);
    }
    function w() {
      return M(l);
    }
    function D(x) {
      function C(R, L, W, G, _) {
        if (typeof x != "function")
          return new A("Property `" + _ + "` of component `" + W + "` has invalid PropType notation inside arrayOf.");
        var S = R[L];
        if (!Array.isArray(S)) {
          var H = Q(S);
          return new A("Invalid " + G + " `" + _ + "` of type " + ("`" + H + "` supplied to `" + W + "`, expected an array."));
        }
        for (var N = 0; N < S.length; N++) {
          var $ = x(S, N, W, G, _ + "[" + N + "]", a);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return M(C);
    }
    function b() {
      function x(C, R, L, W, G) {
        var _ = C[R];
        if (!s(_)) {
          var S = Q(_);
          return new A("Invalid " + W + " `" + G + "` of type " + ("`" + S + "` supplied to `" + L + "`, expected a single ReactElement."));
        }
        return null;
      }
      return M(x);
    }
    function u() {
      function x(C, R, L, W, G) {
        var _ = C[R];
        if (!e.isValidElementType(_)) {
          var S = Q(_);
          return new A("Invalid " + W + " `" + G + "` of type " + ("`" + S + "` supplied to `" + L + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return M(x);
    }
    function y(x) {
      function C(R, L, W, G, _) {
        if (!(R[L] instanceof x)) {
          var S = x.name || g, H = B(R[L]);
          return new A("Invalid " + G + " `" + _ + "` of type " + ("`" + H + "` supplied to `" + W + "`, expected ") + ("instance of `" + S + "`."));
        }
        return null;
      }
      return M(C);
    }
    function z(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), l;
      function C(R, L, W, G, _) {
        for (var S = R[L], H = 0; H < x.length; H++)
          if (E(S, x[H]))
            return null;
        var N = JSON.stringify(x, function(ae, P) {
          var de = J(P);
          return de === "symbol" ? String(P) : P;
        });
        return new A("Invalid " + G + " `" + _ + "` of value `" + String(S) + "` " + ("supplied to `" + W + "`, expected one of " + N + "."));
      }
      return M(C);
    }
    function Z(x) {
      function C(R, L, W, G, _) {
        if (typeof x != "function")
          return new A("Property `" + _ + "` of component `" + W + "` has invalid PropType notation inside objectOf.");
        var S = R[L], H = Q(S);
        if (H !== "object")
          return new A("Invalid " + G + " `" + _ + "` of type " + ("`" + H + "` supplied to `" + W + "`, expected an object."));
        for (var N in S)
          if (n(S, N)) {
            var $ = x(S, N, W, G, _ + "." + N, a);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return M(C);
    }
    function q(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var C = 0; C < x.length; C++) {
        var R = x[C];
        if (typeof R != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(R) + " at index " + C + "."
          ), l;
      }
      function L(W, G, _, S, H) {
        for (var N = [], $ = 0; $ < x.length; $++) {
          var ae = x[$], P = ae(W, G, _, S, H, a);
          if (P == null)
            return null;
          P.data && n(P.data, "expectedType") && N.push(P.data.expectedType);
        }
        var de = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new A("Invalid " + S + " `" + H + "` supplied to " + ("`" + _ + "`" + de + "."));
      }
      return M(L);
    }
    function j() {
      function x(C, R, L, W, G) {
        return I(C[R]) ? null : new A("Invalid " + W + " `" + G + "` supplied to " + ("`" + L + "`, expected a ReactNode."));
      }
      return M(x);
    }
    function T(x, C, R, L, W) {
      return new A(
        (x || "React class") + ": " + C + " type `" + R + "." + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + W + "`."
      );
    }
    function Y(x) {
      function C(R, L, W, G, _) {
        var S = R[L], H = Q(S);
        if (H !== "object")
          return new A("Invalid " + G + " `" + _ + "` of type `" + H + "` " + ("supplied to `" + W + "`, expected `object`."));
        for (var N in x) {
          var $ = x[N];
          if (typeof $ != "function")
            return T(W, G, _, N, J($));
          var ae = $(S, N, W, G, _ + "." + N, a);
          if (ae)
            return ae;
        }
        return null;
      }
      return M(C);
    }
    function V(x) {
      function C(R, L, W, G, _) {
        var S = R[L], H = Q(S);
        if (H !== "object")
          return new A("Invalid " + G + " `" + _ + "` of type `" + H + "` " + ("supplied to `" + W + "`, expected `object`."));
        var N = t({}, R[L], x);
        for (var $ in N) {
          var ae = x[$];
          if (n(x, $) && typeof ae != "function")
            return T(W, G, _, $, J(ae));
          if (!ae)
            return new A(
              "Invalid " + G + " `" + _ + "` key `" + $ + "` supplied to `" + W + "`.\nBad object: " + JSON.stringify(R[L], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var P = ae(S, $, W, G, _ + "." + $, a);
          if (P)
            return P;
        }
        return null;
      }
      return M(C);
    }
    function I(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(I);
          if (x === null || s(x))
            return !0;
          var C = m(x);
          if (C) {
            var R = C.call(x), L;
            if (C !== x.entries) {
              for (; !(L = R.next()).done; )
                if (!I(L.value))
                  return !1;
            } else
              for (; !(L = R.next()).done; ) {
                var W = L.value;
                if (W && !I(W[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function F(x, C) {
      return x === "symbol" ? !0 : C ? C["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && C instanceof Symbol : !1;
    }
    function Q(x) {
      var C = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : F(C, x) ? "symbol" : C;
    }
    function J(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var C = Q(x);
      if (C === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return C;
    }
    function te(x) {
      var C = J(x);
      switch (C) {
        case "array":
        case "object":
          return "an " + C;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + C;
        default:
          return C;
      }
    }
    function B(x) {
      return !x.constructor || !x.constructor.name ? g : x.constructor.name;
    }
    return f.checkPropTypes = r, f.resetWarningCache = r.resetWarningCache, f.PropTypes = f, f;
  }, et;
}
var tt, Ft;
function _r() {
  if (Ft) return tt;
  Ft = 1;
  var e = gt();
  function t() {
  }
  function a() {
  }
  return a.resetWarningCache = t, tt = function() {
    function n(l, s, p, d, c, m) {
      if (m !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function r() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: r,
      element: n,
      elementType: n,
      instanceOf: r,
      node: n,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: a,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, tt;
}
if (process.env.NODE_ENV !== "production") {
  var Dr = xa(), Ar = !0;
  st.exports = Cr()(Dr.isElement, Ar);
} else
  st.exports = _r()();
var Sr = st.exports;
const oe = /* @__PURE__ */ wr(Sr);
function we(e, t, a, n) {
  function r(o) {
    return o instanceof a ? o : new a(function(l) {
      l(o);
    });
  }
  return new (a || (a = Promise))(function(o, l) {
    function s(c) {
      try {
        d(n.next(c));
      } catch (m) {
        l(m);
      }
    }
    function p(c) {
      try {
        d(n.throw(c));
      } catch (m) {
        l(m);
      }
    }
    function d(c) {
      c.done ? o(c.value) : r(c.value).then(s, p);
    }
    d((n = n.apply(e, t || [])).next());
  });
}
const Pr = /* @__PURE__ */ new Map([
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
function Ne(e, t, a) {
  const n = Or(e), { webkitRelativePath: r } = e, o = typeof t == "string" ? t : typeof r == "string" && r.length > 0 ? r : `./${e.name}`;
  return typeof n.path != "string" && It(n, "path", o), It(n, "relativePath", o), n;
}
function Or(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const n = t.split(".").pop().toLowerCase(), r = Pr.get(n);
    r && Object.defineProperty(e, "type", {
      value: r,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function It(e, t, a) {
  Object.defineProperty(e, t, {
    value: a,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const Tr = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function Mr(e) {
  return we(this, void 0, void 0, function* () {
    return $e(e) && zr(e.dataTransfer) ? Ir(e.dataTransfer, e.type) : $r(e) ? Rr(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? Fr(e) : [];
  });
}
function zr(e) {
  return $e(e);
}
function $r(e) {
  return $e(e) && $e(e.target);
}
function $e(e) {
  return typeof e == "object" && e !== null;
}
function Rr(e) {
  return ct(e.target.files).map((t) => Ne(t));
}
function Fr(e) {
  return we(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((a) => a.getFile()))).map((a) => Ne(a));
  });
}
function Ir(e, t) {
  return we(this, void 0, void 0, function* () {
    if (e.items) {
      const a = ct(e.items).filter((r) => r.kind === "file");
      if (t !== "drop")
        return a;
      const n = yield Promise.all(a.map(Lr));
      return Lt(ha(n));
    }
    return Lt(ct(e.files).map((a) => Ne(a)));
  });
}
function Lt(e) {
  return e.filter((t) => Tr.indexOf(t.name) === -1);
}
function ct(e) {
  if (e === null)
    return [];
  const t = [];
  for (let a = 0; a < e.length; a++) {
    const n = e[a];
    t.push(n);
  }
  return t;
}
function Lr(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return qt(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? ga(t) : qt(e, t);
}
function ha(e) {
  return e.reduce((t, a) => [
    ...t,
    ...Array.isArray(a) ? ha(a) : [a]
  ], []);
}
function qt(e, t) {
  return we(this, void 0, void 0, function* () {
    var a;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const o = yield e.getAsFileSystemHandle();
      if (o === null)
        throw new Error(`${e} is not a File`);
      if (o !== void 0) {
        const l = yield o.getFile();
        return l.handle = o, Ne(l);
      }
    }
    const n = e.getAsFile();
    if (!n)
      throw new Error(`${e} is not a File`);
    return Ne(n, (a = t == null ? void 0 : t.fullPath) !== null && a !== void 0 ? a : void 0);
  });
}
function qr(e) {
  return we(this, void 0, void 0, function* () {
    return e.isDirectory ? ga(e) : Br(e);
  });
}
function ga(e) {
  const t = e.createReader();
  return new Promise((a, n) => {
    const r = [];
    function o() {
      t.readEntries((l) => we(this, void 0, void 0, function* () {
        if (l.length) {
          const s = Promise.all(l.map(qr));
          r.push(s), o();
        } else
          try {
            const s = yield Promise.all(r);
            a(s);
          } catch (s) {
            n(s);
          }
      }), (l) => {
        n(l);
      });
    }
    o();
  });
}
function Br(e) {
  return we(this, void 0, void 0, function* () {
    return new Promise((t, a) => {
      e.file((n) => {
        const r = Ne(n, e.fullPath);
        t(r);
      }, (n) => {
        a(n);
      });
    });
  });
}
var at = function(e, t) {
  if (e && t) {
    var a = Array.isArray(t) ? t : t.split(",");
    if (a.length === 0)
      return !0;
    var n = e.name || "", r = (e.type || "").toLowerCase(), o = r.replace(/\/.*$/, "");
    return a.some(function(l) {
      var s = l.trim().toLowerCase();
      return s.charAt(0) === "." ? n.toLowerCase().endsWith(s) : s.endsWith("/*") ? o === s.replace(/\/.*$/, "") : r === s;
    });
  }
  return !0;
};
function Bt(e) {
  return Kr(e) || Hr(e) || ya(e) || Wr();
}
function Wr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hr(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Kr(e) {
  if (Array.isArray(e)) return pt(e);
}
function Wt(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function Ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wt(Object(a), !0).forEach(function(n) {
      ba(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Wt(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function ba(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
function Ae(e, t) {
  return Yr(e) || Vr(e, t) || ya(e, t) || Ur();
}
function Ur() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ya(e, t) {
  if (e) {
    if (typeof e == "string") return pt(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return pt(e, t);
  }
}
function pt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++)
    n[a] = e[a];
  return n;
}
function Vr(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n = [], r = !0, o = !1, l, s;
    try {
      for (a = a.call(e); !(r = (l = a.next()).done) && (n.push(l.value), !(t && n.length === t)); r = !0)
        ;
    } catch (p) {
      o = !0, s = p;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (o) throw s;
      }
    }
    return n;
  }
}
function Yr(e) {
  if (Array.isArray(e)) return e;
}
var Gr = typeof at == "function" ? at : at.default, Zr = "file-invalid-type", Qr = "file-too-large", Jr = "file-too-small", Xr = "too-many-files", eo = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", a = t.split(","), n = a.length > 1 ? "one of ".concat(a.join(", ")) : a[0];
  return {
    code: Zr,
    message: "File type must be ".concat(n)
  };
}, Kt = function(t) {
  return {
    code: Qr,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Ut = function(t) {
  return {
    code: Jr,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, to = {
  code: Xr,
  message: "Too many files"
};
function ao(e) {
  return e.type === "" && typeof e.getAsFile == "function";
}
function wa(e, t) {
  var a = e.type === "application/x-moz-file" || Gr(e, t) || ao(e);
  return [a, a ? null : eo(t)];
}
function ka(e, t, a) {
  if (ye(e.size))
    if (ye(t) && ye(a)) {
      if (e.size > a) return [!1, Kt(a)];
      if (e.size < t) return [!1, Ut(t)];
    } else {
      if (ye(t) && e.size < t) return [!1, Ut(t)];
      if (ye(a) && e.size > a) return [!1, Kt(a)];
    }
  return [!0, null];
}
function ye(e) {
  return e != null;
}
function no(e) {
  var t = e.files, a = e.accept, n = e.minSize, r = e.maxSize, o = e.multiple, l = e.maxFiles, s = e.validator;
  return !o && t.length > 1 || o && l >= 1 && t.length > l ? !1 : t.every(function(p) {
    var d = wa(p, a), c = Ae(d, 1), m = c[0], g = ka(p, n, r), f = Ae(g, 1), E = f[0], A = s ? s(p) : null;
    return m && E && !A;
  });
}
function Re(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function _e(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Vt(e) {
  e.preventDefault();
}
function io(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function ro(e) {
  return e.indexOf("Edge/") !== -1;
}
function oo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return io(e) || ro(e);
}
function ve() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return function(n) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
      o[l - 1] = arguments[l];
    return t.some(function(s) {
      return !Re(n) && s && s.apply(void 0, [n].concat(o)), Re(n);
    });
  };
}
function lo() {
  return "showOpenFilePicker" in window;
}
function so(e) {
  if (ye(e)) {
    var t = Object.entries(e).filter(function(a) {
      var n = Ae(a, 2), r = n[0], o = n[1], l = !0;
      return Na(r) || (console.warn('Skipped "'.concat(r, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), l = !1), (!Array.isArray(o) || !o.every(ja)) && (console.warn('Skipped "'.concat(r, '" because an invalid file extension was provided.')), l = !1), l;
    }).reduce(function(a, n) {
      var r = Ae(n, 2), o = r[0], l = r[1];
      return Ht(Ht({}, a), {}, ba({}, o, l));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function co(e) {
  if (ye(e))
    return Object.entries(e).reduce(function(t, a) {
      var n = Ae(a, 2), r = n[0], o = n[1];
      return [].concat(Bt(t), [r], Bt(o));
    }, []).filter(function(t) {
      return Na(t) || ja(t);
    }).join(",");
}
function po(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function uo(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Na(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function ja(e) {
  return /^.*\.[\w]+$/.test(e);
}
var mo = ["children"], fo = ["open"], xo = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], vo = ["refKey", "onChange", "onClick"];
function Yt(e) {
  return bo(e) || go(e) || Ea(e) || ho();
}
function ho() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function go(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function bo(e) {
  if (Array.isArray(e)) return dt(e);
}
function nt(e, t) {
  return ko(e) || wo(e, t) || Ea(e, t) || yo();
}
function yo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ea(e, t) {
  if (e) {
    if (typeof e == "string") return dt(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return dt(e, t);
  }
}
function dt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++)
    n[a] = e[a];
  return n;
}
function wo(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n = [], r = !0, o = !1, l, s;
    try {
      for (a = a.call(e); !(r = (l = a.next()).done) && (n.push(l.value), !(t && n.length === t)); r = !0)
        ;
    } catch (p) {
      o = !0, s = p;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (o) throw s;
      }
    }
    return n;
  }
}
function ko(e) {
  if (Array.isArray(e)) return e;
}
function Gt(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gt(Object(a), !0).forEach(function(n) {
      ut(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Gt(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function ut(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
function Fe(e, t) {
  if (e == null) return {};
  var a = No(e, t), n, r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
  }
  return a;
}
function No(e, t) {
  if (e == null) return {};
  var a = {}, n = Object.keys(e), r, o;
  for (o = 0; o < n.length; o++)
    r = n[o], !(t.indexOf(r) >= 0) && (a[r] = e[r]);
  return a;
}
var bt = /* @__PURE__ */ X(function(e, t) {
  var a = e.children, n = Fe(e, mo), r = _a(n), o = r.open, l = Fe(r, fo);
  return za(t, function() {
    return {
      open: o
    };
  }, [o]), /* @__PURE__ */ Oa.createElement($a, null, a(le(le({}, l), {}, {
    open: o
  })));
});
bt.displayName = "Dropzone";
var Ca = {
  disabled: !1,
  getFilesFromEvent: Mr,
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
bt.defaultProps = Ca;
bt.propTypes = {
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
  children: oe.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: oe.objectOf(oe.arrayOf(oe.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: oe.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: oe.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: oe.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: oe.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: oe.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: oe.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: oe.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: oe.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: oe.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: oe.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: oe.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: oe.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: oe.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: oe.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: oe.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: oe.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: oe.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: oe.func,
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
  onDrop: oe.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: oe.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: oe.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: oe.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: oe.func
};
var mt = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  isDragGlobal: !1,
  acceptedFiles: [],
  fileRejections: []
};
function _a() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = le(le({}, Ca), e), a = t.accept, n = t.disabled, r = t.getFilesFromEvent, o = t.maxSize, l = t.minSize, s = t.multiple, p = t.maxFiles, d = t.onDragEnter, c = t.onDragLeave, m = t.onDragOver, g = t.onDrop, f = t.onDropAccepted, E = t.onDropRejected, A = t.onFileDialogCancel, M = t.onFileDialogOpen, k = t.useFsAccessApi, w = t.autoFocus, D = t.preventDropOnDocument, b = t.noClick, u = t.noKeyboard, y = t.noDrag, z = t.noDragEventsBubbling, Z = t.onError, q = t.validator, j = he(function() {
    return co(a);
  }, [a]), T = he(function() {
    return so(a);
  }, [a]), Y = he(function() {
    return typeof M == "function" ? M : Zt;
  }, [M]), V = he(function() {
    return typeof A == "function" ? A : Zt;
  }, [A]), I = ce(null), F = ce(null), Q = Ma(jo, mt), J = nt(Q, 2), te = J[0], B = J[1], x = te.isFocused, C = te.isFileDialogActive, R = ce(typeof window < "u" && window.isSecureContext && k && lo()), L = function() {
    !R.current && C && setTimeout(function() {
      if (F.current) {
        var K = F.current.files;
        K.length || (B({
          type: "closeDialog"
        }), V());
      }
    }, 300);
  };
  ue(function() {
    return window.addEventListener("focus", L, !1), function() {
      window.removeEventListener("focus", L, !1);
    };
  }, [F, C, V, R]);
  var W = ce([]), G = ce([]), _ = function(K) {
    I.current && I.current.contains(K.target) || (K.preventDefault(), W.current = []);
  };
  ue(function() {
    return D && (document.addEventListener("dragover", Vt, !1), document.addEventListener("drop", _, !1)), function() {
      D && (document.removeEventListener("dragover", Vt), document.removeEventListener("drop", _));
    };
  }, [I, D]), ue(function() {
    var O = function(xe) {
      G.current = [].concat(Yt(G.current), [xe.target]), _e(xe) && B({
        isDragGlobal: !0,
        type: "setDragGlobal"
      });
    }, K = function(xe) {
      G.current = G.current.filter(function(ge) {
        return ge !== xe.target && ge !== null;
      }), !(G.current.length > 0) && B({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, se = function() {
      G.current = [], B({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    }, pe = function() {
      G.current = [], B({
        isDragGlobal: !1,
        type: "setDragGlobal"
      });
    };
    return document.addEventListener("dragenter", O, !1), document.addEventListener("dragleave", K, !1), document.addEventListener("dragend", se, !1), document.addEventListener("drop", pe, !1), function() {
      document.removeEventListener("dragenter", O), document.removeEventListener("dragleave", K), document.removeEventListener("dragend", se), document.removeEventListener("drop", pe);
    };
  }, [I]), ue(function() {
    return !n && w && I.current && I.current.focus(), function() {
    };
  }, [I, w, n]);
  var S = U(function(O) {
    Z ? Z(O) : console.error(O);
  }, [Z]), H = U(function(O) {
    O.preventDefault(), O.persist(), Pe(O), W.current = [].concat(Yt(W.current), [O.target]), _e(O) && Promise.resolve(r(O)).then(function(K) {
      if (!(Re(O) && !z)) {
        var se = K.length, pe = se > 0 && no({
          files: K,
          accept: j,
          minSize: l,
          maxSize: o,
          multiple: s,
          maxFiles: p,
          validator: q
        }), me = se > 0 && !pe;
        B({
          isDragAccept: pe,
          isDragReject: me,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), d && d(O);
      }
    }).catch(function(K) {
      return S(K);
    });
  }, [r, d, S, z, j, l, o, s, p, q]), N = U(function(O) {
    O.preventDefault(), O.persist(), Pe(O);
    var K = _e(O);
    if (K && O.dataTransfer)
      try {
        O.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return K && m && m(O), !1;
  }, [m, z]), $ = U(function(O) {
    O.preventDefault(), O.persist(), Pe(O);
    var K = W.current.filter(function(pe) {
      return I.current && I.current.contains(pe);
    }), se = K.indexOf(O.target);
    se !== -1 && K.splice(se, 1), W.current = K, !(K.length > 0) && (B({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), _e(O) && c && c(O));
  }, [I, c, z]), ae = U(function(O, K) {
    var se = [], pe = [];
    O.forEach(function(me) {
      var xe = wa(me, j), ge = nt(xe, 2), Be = ge[0], We = ge[1], He = ka(me, l, o), Oe = nt(He, 2), Ke = Oe[0], Ue = Oe[1], Ve = q ? q(me) : null;
      if (Be && Ke && !Ve)
        se.push(me);
      else {
        var Ye = [We, Ue];
        Ve && (Ye = Ye.concat(Ve)), pe.push({
          file: me,
          errors: Ye.filter(function(Pa) {
            return Pa;
          })
        });
      }
    }), (!s && se.length > 1 || s && p >= 1 && se.length > p) && (se.forEach(function(me) {
      pe.push({
        file: me,
        errors: [to]
      });
    }), se.splice(0)), B({
      acceptedFiles: se,
      fileRejections: pe,
      isDragReject: pe.length > 0,
      type: "setFiles"
    }), g && g(se, pe, K), pe.length > 0 && E && E(pe, K), se.length > 0 && f && f(se, K);
  }, [B, s, j, l, o, p, g, f, E, q]), P = U(function(O) {
    O.preventDefault(), O.persist(), Pe(O), W.current = [], _e(O) && Promise.resolve(r(O)).then(function(K) {
      Re(O) && !z || ae(K, O);
    }).catch(function(K) {
      return S(K);
    }), B({
      type: "reset"
    });
  }, [r, ae, S, z]), de = U(function() {
    if (R.current) {
      B({
        type: "openDialog"
      }), Y();
      var O = {
        multiple: s,
        types: T
      };
      window.showOpenFilePicker(O).then(function(K) {
        return r(K);
      }).then(function(K) {
        ae(K, null), B({
          type: "closeDialog"
        });
      }).catch(function(K) {
        po(K) ? (V(K), B({
          type: "closeDialog"
        })) : uo(K) ? (R.current = !1, F.current ? (F.current.value = null, F.current.click()) : S(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : S(K);
      });
      return;
    }
    F.current && (B({
      type: "openDialog"
    }), Y(), F.current.value = null, F.current.click());
  }, [B, Y, V, k, ae, S, T, s]), be = U(function(O) {
    !I.current || !I.current.isEqualNode(O.target) || (O.key === " " || O.key === "Enter" || O.keyCode === 32 || O.keyCode === 13) && (O.preventDefault(), de());
  }, [I, de]), Ce = U(function() {
    B({
      type: "focus"
    });
  }, []), yt = U(function() {
    B({
      type: "blur"
    });
  }, []), wt = U(function() {
    b || (oo() ? setTimeout(de, 0) : de());
  }, [b, de]), ke = function(K) {
    return n ? null : K;
  }, qe = function(K) {
    return u ? null : ke(K);
  }, Se = function(K) {
    return y ? null : ke(K);
  }, Pe = function(K) {
    z && K.stopPropagation();
  }, Da = he(function() {
    return function() {
      var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, K = O.refKey, se = K === void 0 ? "ref" : K, pe = O.role, me = O.onKeyDown, xe = O.onFocus, ge = O.onBlur, Be = O.onClick, We = O.onDragEnter, He = O.onDragOver, Oe = O.onDragLeave, Ke = O.onDrop, Ue = Fe(O, xo);
      return le(le(ut({
        onKeyDown: qe(ve(me, be)),
        onFocus: qe(ve(xe, Ce)),
        onBlur: qe(ve(ge, yt)),
        onClick: ke(ve(Be, wt)),
        onDragEnter: Se(ve(We, H)),
        onDragOver: Se(ve(He, N)),
        onDragLeave: Se(ve(Oe, $)),
        onDrop: Se(ve(Ke, P)),
        role: typeof pe == "string" && pe !== "" ? pe : "presentation"
      }, se, I), !n && !u ? {
        tabIndex: 0
      } : {}), Ue);
    };
  }, [I, be, Ce, yt, wt, H, N, $, P, u, y, n]), Aa = U(function(O) {
    O.stopPropagation();
  }, []), Sa = he(function() {
    return function() {
      var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, K = O.refKey, se = K === void 0 ? "ref" : K, pe = O.onChange, me = O.onClick, xe = Fe(O, vo), ge = ut({
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
        onChange: ke(ve(pe, P)),
        onClick: ke(ve(me, Aa)),
        tabIndex: -1
      }, se, F);
      return le(le({}, ge), xe);
    };
  }, [F, a, s, P, n]);
  return le(le({}, te), {}, {
    isFocused: x && !n,
    getRootProps: Da,
    getInputProps: Sa,
    rootRef: I,
    inputRef: F,
    open: ke(de)
  });
}
function jo(e, t) {
  switch (t.type) {
    case "focus":
      return le(le({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return le(le({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return le(le({}, mt), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return le(le({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return le(le({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return le(le({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "setDragGlobal":
      return le(le({}, e), {}, {
        isDragGlobal: t.isDragGlobal
      });
    case "reset":
      return le({}, mt);
    default:
      return e;
  }
}
function Zt() {
}
const Eo = (e) => e.startsWith("image/") ? kn : e.startsWith("video/") ? Hn : e.startsWith("audio/") ? Rn : e.includes("pdf") || e.includes("document") ? fn : vn, Qt = (e) => {
  if (e === 0) return "0 Bytes";
  const t = 1024, a = ["Bytes", "KB", "MB", "GB"], n = Math.floor(Math.log(e) / Math.log(t));
  return parseFloat((e / Math.pow(t, n)).toFixed(2)) + " " + a[n];
};
function Mo({
  onFilesAccepted: e,
  onFilesRejected: t,
  accept: a = { "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"] },
  maxFiles: n = 5,
  maxSize: r = 5 * 1024 * 1024,
  // 5MB
  multiple: o = !0,
  disabled: l = !1,
  className: s,
  showPreview: p = !0
}) {
  const [d, c] = re([]), [m, g] = re([]), f = U(
    (D, b) => {
      if (D.length > 0) {
        const u = o ? [...d, ...D] : D;
        if (c(u), e(u), p) {
          const y = D.filter((z) => z.type.startsWith("image/")).map((z) => ({
            file: z,
            url: URL.createObjectURL(z)
          }));
          g((z) => o ? [...z, ...y] : y);
        }
      }
      b.length > 0 && t && t(b);
    },
    [d, o, e, t, p]
  ), E = (D) => {
    const b = d.filter((y) => y !== D);
    c(b), e(b);
    const u = m.find((y) => y.file === D);
    u && (URL.revokeObjectURL(u.url), g((y) => y.filter((z) => z.file !== D)));
  }, { getRootProps: A, getInputProps: M, isDragActive: k, isDragReject: w } = _a({
    onDrop: f,
    accept: a,
    maxFiles: n,
    maxSize: r,
    multiple: o,
    disabled: l
  });
  return /* @__PURE__ */ v("div", { className: h("space-y-4", s), children: [
    /* @__PURE__ */ v(
      "div",
      {
        ...A(),
        className: h(
          "flex flex-col items-center justify-center px-6 py-8 border border-dashed rounded-[14px] cursor-pointer text-center",
          "transition-colors duration-150 ease-out",
          "bg-[#FAF9FD]",
          "border-[#B9B3D6] hover:border-primary hover:bg-primary-soft",
          k && !w && "border-primary bg-primary-soft",
          w && "border-error bg-error-soft",
          l && "opacity-50 cursor-not-allowed"
        ),
        children: [
          /* @__PURE__ */ i("input", { ...M() }),
          /* @__PURE__ */ i(
            "div",
            {
              className: h(
                "w-12 h-12 mb-3 rounded-xl flex items-center justify-center",
                "bg-primary-soft",
                "transition-colors duration-150",
                k && "bg-white"
              ),
              children: /* @__PURE__ */ i(
                Bn,
                {
                  className: h(
                    "w-6 h-6 text-primary-ink",
                    k && "motion-safe:animate-bounce"
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ i("p", { className: "font-display text-[15px] font-extrabold text-neutral-800 mb-0.5", children: k ? w ? "Archivo no permitido" : "Suelta los archivos aquí" : "Arrastra archivos aquí" }),
          /* @__PURE__ */ i("p", { className: "text-[13px] text-neutral-600 mb-2", children: "o haz clic para seleccionar" }),
          /* @__PURE__ */ v("p", { className: "text-2xs text-neutral-500", children: [
            "PNG, JPG hasta ",
            Qt(r)
          ] })
        ]
      }
    ),
    d.length > 0 && /* @__PURE__ */ v("div", { className: "space-y-2", children: [
      /* @__PURE__ */ v("p", { className: "text-xs font-semibold text-neutral-600", children: [
        "Archivos seleccionados (",
        d.length,
        ")"
      ] }),
      /* @__PURE__ */ i("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: d.map((D, b) => {
        const u = Eo(D.type), y = m.find((z) => z.file === D);
        return /* @__PURE__ */ v(
          "div",
          {
            className: h(
              "group flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-xl shadow-card",
              "transition-all duration-200",
              "hover:shadow-card-hover hover:border-primary-line"
            ),
            children: [
              y ? /* @__PURE__ */ i("div", { className: "w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100", children: /* @__PURE__ */ i(
                "img",
                {
                  src: y.url,
                  alt: D.name,
                  className: "w-full h-full object-cover"
                }
              ) }) : /* @__PURE__ */ i(
                "div",
                {
                  className: h(
                    "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
                    "bg-primary-soft"
                  ),
                  children: /* @__PURE__ */ i(u, { "aria-hidden": "true", className: "w-5 h-5 text-primary-ink" })
                }
              ),
              /* @__PURE__ */ v("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ i("p", { className: "text-[13px] font-semibold text-neutral-800 truncate", children: D.name }),
                /* @__PURE__ */ i("p", { className: "text-xs text-neutral-500", children: Qt(D.size) })
              ] }),
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  onClick: (z) => {
                    z.stopPropagation(), E(D);
                  },
                  className: h(
                    "p-1.5 rounded-lg opacity-0 group-hover:opacity-100 focus-visible:opacity-100",
                    "text-neutral-500 hover:text-error-dark hover:bg-error-soft",
                    "transition-all duration-200"
                  ),
                  children: /* @__PURE__ */ i(je, { "aria-hidden": "true", className: "w-4 h-4" })
                }
              )
            ]
          },
          `${D.name}-${b}`
        );
      }) })
    ] })
  ] });
}
export {
  Bi as A,
  $i as B,
  Di as C,
  ra as D,
  Le as E,
  Mo as F,
  Wi as G,
  mr as H,
  Ao as I,
  Ee as J,
  Oo as K,
  ar as L,
  ua as M,
  dr as P,
  Ci as R,
  ia as S,
  cr as T,
  Ii as a,
  pa as b,
  To as c,
  nr as d,
  ze as e,
  Si as f,
  wr as g,
  Oi as h,
  Ai as i,
  oa as j,
  Ni as k,
  xr as l,
  hi as m,
  rt as n,
  yr as o,
  ui as p,
  ir as q,
  sa as r,
  Xi as s,
  So as t,
  sr as u,
  gi as v,
  ma as w,
  br as x,
  Po as y,
  h as z
};
//# sourceMappingURL=index-CY7aFkdh.js.map
