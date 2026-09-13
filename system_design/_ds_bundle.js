/* @ds-bundle: {"format":4,"namespace":"EFFICAXDesignSystem_edde19","components":[{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"SectionLabel","sourcePath":"components/brand/SectionLabel.jsx"},{"name":"Stat","sourcePath":"components/brand/Stat.jsx"},{"name":"DataTable","sourcePath":"components/content/DataTable.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"5c2f32b03050","components/brand/Logo.jsx":"da74d8b58115","components/brand/SectionLabel.jsx":"4aef66b8ddf2","components/brand/Stat.jsx":"72efb7e3f6bc","components/content/DataTable.jsx":"490f7db897a0","components/content/Quote.jsx":"be53ad2aa8e0","components/content/ServiceCard.jsx":"026f36be72ab","components/core/Badge.jsx":"55acba5c5c7a","components/core/Button.jsx":"282a203b98a5","components/core/Card.jsx":"313f60dfa494","components/core/IconButton.jsx":"7c2b0983a586","components/core/Rule.jsx":"a9f68f615b19","components/core/Tag.jsx":"8b2e86b758f2","components/feedback/Dialog.jsx":"3d415b7aef84","components/feedback/Tooltip.jsx":"8e3ab0a8a7d9","components/forms/Checkbox.jsx":"05b1c9c03b40","components/forms/Input.jsx":"56ff9ab7d60d","components/forms/Radio.jsx":"ea942094aca9","components/forms/Select.jsx":"d84fec07214c","components/forms/Switch.jsx":"0f2127fb475b","components/navigation/Breadcrumb.jsx":"eee83050c4c4","components/navigation/Tabs.jsx":"b8ef44e5062c","ui_kits/proposta/Proposal.jsx":"29da4bdeea33","ui_kits/website/Cases.jsx":"436dfbe03a12","ui_kits/website/Chrome.jsx":"835a8c979fe3","ui_kits/website/Contact.jsx":"4b0f5a280e6a","ui_kits/website/Home.jsx":"00b89d96b313","ui_kits/website/Services.jsx":"ebf80a731e63"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EFFICAXDesignSystem_edde19 = window.EFFICAXDesignSystem_edde19 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.446.0/icons/';

/** Icone Lucide (stroke 2, cantos retos) pintado com currentColor via CSS mask. */
function Icon({
  name,
  size = 18,
  color = 'currentColor',
  strokeWidth,
  style,
  ...rest
}) {
  const url = CDN + name + '.svg';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    role: "img",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      background: color,
      WebkitMaskImage: 'url(' + url + ')',
      maskImage: 'url(' + url + ')',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Assinatura EFFICAX. Sempre use o arquivo — nunca redesenhe o wordmark. */
function Logo({
  variant = 'primary',
  height = 36,
  assetBase = 'assets/',
  style,
  ...rest
}) {
  const src = variant === 'badge' ? assetBase + 'logo-efficax-badge-gray.png' : assetBase + 'logo-efficax-primary.png';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "EFFICAX Assessoria Financeira",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...(variant === 'onDark' ? {
        filter: 'brightness(0) invert(1)'
      } : null),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionLabel({
  children,
  tone = 'brand',
  rule = true,
  style,
  ...rest
}) {
  const colors = {
    brand: 'var(--green-700)',
    muted: 'var(--text-muted)',
    onDark: 'var(--green-400)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 'var(--border-width-accent)',
      background: tone === 'onDark' ? 'var(--green-400)' : 'var(--brand)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: colors[tone]
    }
  }, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/brand/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  prefix,
  suffix,
  label,
  tone = 'default',
  align = 'left',
  style,
  ...rest
}) {
  const c = tone === 'onDark' ? {
    v: '#fff',
    l: 'var(--graphite-300)'
  } : tone === 'brand' ? {
    v: 'var(--green-700)',
    l: 'var(--text-muted)'
  } : {
    v: 'var(--graphite-900)',
    l: 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-h1)',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: c.v,
      fontVariantNumeric: 'tabular-nums'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.55em',
      verticalAlign: '0.35em',
      marginRight: 2
    }
  }, prefix), value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.55em',
      verticalAlign: '0.35em',
      marginLeft: 2
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      font: 'var(--fw-regular) var(--fs-body-sm)/1.45 var(--font-sans)',
      color: c.l,
      maxWidth: '28ch',
      ...(align === 'center' ? {
        marginLeft: 'auto',
        marginRight: 'auto'
      } : null)
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Stat.jsx", error: String((e && e.message) || e) }); }

// components/content/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  caption,
  dense = false,
  style,
  ...rest
}) {
  const pad = dense ? '9px 12px' : '13px 16px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      overflowX: 'auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)'
    }
  }, rest), caption && /*#__PURE__*/React.createElement("caption", {
    style: {
      captionSide: 'top',
      textAlign: 'left',
      font: 'var(--fw-regular) var(--fs-caption)/1.5 var(--font-sans)',
      color: 'var(--text-muted)',
      paddingBottom: 'var(--space-3)'
    }
  }, caption), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => {
    const k = c.key || c;
    const l = c.label || c;
    const num = c.align === 'right';
    return /*#__PURE__*/React.createElement("th", {
      key: k,
      scope: "col",
      style: {
        textAlign: num ? 'right' : 'left',
        padding: pad,
        font: 'var(--fw-semibold) var(--fs-label)/1.3 var(--font-label)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        borderBottom: '1px solid var(--border-default)',
        whiteSpace: 'nowrap'
      }
    }, l);
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: i % 2 ? 'var(--graphite-25)' : 'transparent'
    }
  }, columns.map(c => {
    const k = c.key || c;
    const num = c.align === 'right';
    return /*#__PURE__*/React.createElement("td", {
      key: k,
      style: {
        padding: pad,
        textAlign: num ? 'right' : 'left',
        borderBottom: '1px solid var(--border-subtle)',
        fontFamily: num ? 'var(--font-mono)' : 'var(--font-sans)',
        fontVariantNumeric: 'tabular-nums',
        fontSize: num ? 'var(--fs-body-sm)' : 'var(--fs-body-sm)',
        color: 'var(--graphite-800)'
      }
    }, r[k]);
  }))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  children,
  author,
  role,
  tone = 'default',
  style,
  ...rest
}) {
  const dark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 'var(--border-width-rule)',
      background: dark ? 'var(--green-400)' : 'var(--brand)'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      lineHeight: 1.45,
      fontWeight: 'var(--fw-regular)',
      color: dark ? '#fff' : 'var(--text-strong)',
      maxWidth: '46ch'
    }
  }, children), (author || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-sans)',
      color: dark ? 'var(--graphite-300)' : 'var(--text-muted)'
    }
  }, author && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-semibold)',
      color: dark ? '#fff' : 'var(--graphite-800)'
    }
  }, author), author && role && /*#__PURE__*/React.createElement("span", null, " \xB7 "), role));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  brand: {
    background: 'var(--brand-soft)',
    color: 'var(--green-800)',
    border: '1px solid var(--green-200)'
  },
  neutral: {
    background: 'var(--graphite-50)',
    color: 'var(--graphite-700)',
    border: '1px solid var(--border-default)'
  },
  positive: {
    background: 'var(--positive-50)',
    color: 'var(--positive-500)',
    border: '1px solid rgba(47,143,78,.25)'
  },
  attention: {
    background: 'var(--attention-50)',
    color: 'var(--attention-500)',
    border: '1px solid rgba(192,138,0,.25)'
  },
  negative: {
    background: 'var(--negative-50)',
    color: 'var(--negative-500)',
    border: '1px solid rgba(178,60,46,.25)'
  },
  dark: {
    background: 'var(--graphite-800)',
    color: '#fff',
    border: '1px solid var(--graphite-800)'
  }
};
function Badge({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      font: 'var(--fw-semibold) var(--fs-label)/1.2 var(--font-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      padding: '5px 9px 4px',
      borderRadius: 'var(--radius-xs)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--fw-semibold)',
  letterSpacing: '.01em',
  borderRadius: 'var(--radius-control)',
  border: '1px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  transition: 'var(--transition-control)',
  textDecoration: 'none',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    fontSize: 'var(--fs-body-sm)',
    padding: '7px 14px',
    lineHeight: 1.3
  },
  md: {
    fontSize: 'var(--fs-body-sm)',
    padding: '11px 20px',
    lineHeight: 1.3
  },
  lg: {
    fontSize: 'var(--fs-body)',
    padding: '14px 28px',
    lineHeight: 1.3
  }
};
const variants = {
  primary: {
    background: 'var(--brand)',
    color: 'var(--text-on-brand)',
    borderColor: 'var(--brand)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--graphite-800)',
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-brand)',
    borderColor: 'transparent',
    padding: '11px 8px'
  },
  onDark: {
    background: 'var(--brand)',
    color: 'var(--graphite-900)',
    borderColor: 'var(--brand)'
  }
};
const hovers = {
  primary: {
    background: 'var(--green-600)',
    borderColor: 'var(--green-600)'
  },
  secondary: {
    borderColor: 'var(--graphite-800)',
    background: 'var(--graphite-25)'
  },
  ghost: {
    color: 'var(--green-800)',
    background: 'var(--brand-soft)'
  },
  onDark: {
    background: 'var(--green-400)',
    borderColor: 'var(--green-400)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  href,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(press && !disabled ? {
      transform: 'translateY(1px)'
    } : null),
    ...(fullWidth ? {
      width: '100%'
    } : null),
    ...(disabled ? {
      opacity: .42,
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'default',
  padding = 'var(--space-6)',
  href,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-none)'
    },
    raised: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    dark: {
      background: 'var(--surface-dark)',
      border: '1px solid var(--graphite-700)',
      color: 'var(--graphite-100)'
    },
    outlineBrand: {
      background: 'var(--surface-card)',
      border: '1px solid var(--green-200)',
      boxShadow: 'none'
    }
  };
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      borderRadius: 'var(--radius-card)',
      padding,
      textDecoration: 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard)',
      ...variants[variant],
      ...(href && hover ? {
        boxShadow: 'var(--shadow-md)',
        borderColor: 'var(--border-default)',
        transform: 'translateY(-2px)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceCard({
  icon = 'trending-up',
  title,
  description,
  items = [],
  href,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    href: href,
    variant: "default",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      height: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--brand-soft)',
      color: 'var(--green-700)',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-strong)',
      margin: 0,
      lineHeight: 1.3
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--fw-regular) var(--fs-body-sm)/1.62 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, description), items.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 'auto 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      paddingTop: 'var(--space-2)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'flex-start',
      font: 'var(--fw-regular) var(--fs-caption)/1.5 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'var(--brand)',
      marginTop: 7,
      flex: 'none'
    }
  }), i))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 28,
  md: 36,
  lg: 44
};
function IconButton({
  name,
  label,
  variant = 'secondary',
  size = 'md',
  disabled,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  const tones = {
    secondary: {
      background: 'transparent',
      border: '1px solid var(--border-default)',
      color: 'var(--graphite-700)'
    },
    ghost: {
      background: 'transparent',
      border: '1px solid transparent',
      color: 'var(--graphite-500)'
    },
    solid: {
      background: 'var(--brand)',
      border: '1px solid var(--brand)',
      color: '#fff'
    }
  };
  const hov = {
    secondary: {
      borderColor: 'var(--graphite-800)',
      color: 'var(--graphite-900)'
    },
    ghost: {
      color: 'var(--graphite-900)',
      background: 'var(--graphite-50)'
    },
    solid: {
      background: 'var(--green-600)',
      borderColor: 'var(--green-600)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      ...tones[variant],
      ...(hover && !disabled ? hov[variant] : null),
      ...(disabled ? {
        opacity: .42
      } : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size === 'sm' ? 14 : size === 'lg' ? 20 : 16
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Rule({
  variant = 'hairline',
  width,
  style,
  ...rest
}) {
  const variants = {
    hairline: {
      height: 1,
      background: 'var(--rule-hairline)',
      width: width || '100%'
    },
    brand: {
      height: 'var(--border-width-rule)',
      background: 'var(--brand)',
      width: width || '56px'
    },
    onDark: {
      height: 1,
      background: 'var(--border-on-dark)',
      width: width || '100%'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: {
      border: 0,
      flex: 'none',
      ...variants[variant],
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    disabled: !interactive,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      background: active ? 'var(--graphite-800)' : hover && interactive ? 'var(--graphite-50)' : 'transparent',
      color: active ? '#fff' : 'var(--graphite-600)',
      border: '1px solid ' + (active ? 'var(--graphite-800)' : 'var(--border-default)'),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  description,
  footer,
  width = 520,
  onClose,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-5)',
      zIndex: 60,
      backdropFilter: 'blur(2px)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-lg)',
      width: '100%',
      maxWidth: width,
      padding: 'var(--space-6)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      color: 'var(--text-strong)',
      margin: 0,
      lineHeight: 1.2
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      font: 'var(--fw-regular) var(--fs-body-sm)/1.6 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Fechar",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  content,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      background: 'var(--graphite-800)',
      color: '#fff',
      padding: '6px 10px',
      borderRadius: 'var(--radius-xs)',
      font: 'var(--fw-regular) var(--fs-caption)/1.35 var(--font-sans)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 40
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  disabled,
  onChange,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = e => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      marginTop: 2,
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (on ? 'var(--brand)' : 'var(--border-strong)'),
      background: on ? 'var(--brand)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      transition: 'var(--transition-control)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.45 var(--font-sans)',
      color: 'var(--graphite-800)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--fw-regular) var(--fs-caption)/1.45 var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const control = (focus, error, disabled) => ({
  width: '100%',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--fs-body)',
  color: 'var(--graphite-900)',
  background: disabled ? 'var(--graphite-50)' : '#fff',
  padding: '11px 13px',
  border: '1px solid ' + (error ? 'var(--negative-500)' : focus ? 'var(--green-500)' : 'var(--border-default)'),
  borderRadius: 'var(--radius-control)',
  outline: 'none',
  boxShadow: focus ? 'var(--shadow-focus)' : 'none',
  transition: 'var(--transition-control)',
  cursor: disabled ? 'not-allowed' : 'auto'
});
function FieldShell({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--fw-semibold) var(--fs-body-sm)/1.3 var(--font-sans)',
      color: 'var(--graphite-800)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)',
      marginLeft: 3
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.45 var(--font-sans)',
      color: error ? 'var(--negative-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
function Input({
  label,
  hint,
  error,
  required,
  disabled,
  id,
  multiline = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement(FieldShell, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: uid,
    style: style
  }, /*#__PURE__*/React.createElement(Tag, _extends({
    id: uid,
    rows: multiline ? rows : undefined,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...control(focus, error, disabled),
      ...(multiline ? {
        resize: 'vertical',
        lineHeight: 1.55
      } : null)
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  name,
  value,
  checked,
  disabled,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      marginTop: 2,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (checked ? 'var(--brand)' : 'var(--border-strong)'),
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--brand)'
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.45 var(--font-sans)',
      color: 'var(--graphite-800)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--fw-regular) var(--fs-caption)/1.45 var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const control = (focus, error, disabled) => ({
  width: '100%',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--fs-body)',
  color: 'var(--graphite-900)',
  background: disabled ? 'var(--graphite-50)' : '#fff',
  padding: '11px 13px',
  border: '1px solid ' + (error ? 'var(--negative-500)' : focus ? 'var(--green-500)' : 'var(--border-default)'),
  borderRadius: 'var(--radius-control)',
  outline: 'none',
  boxShadow: focus ? 'var(--shadow-focus)' : 'none',
  transition: 'var(--transition-control)',
  cursor: disabled ? 'not-allowed' : 'auto'
});
function FieldShell({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--fw-semibold) var(--fs-body-sm)/1.3 var(--font-sans)',
      color: 'var(--graphite-800)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)',
      marginLeft: 3
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.45 var(--font-sans)',
      color: error ? 'var(--negative-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
function Select({
  label,
  hint,
  error,
  required,
  disabled,
  id,
  options = [],
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement(FieldShell, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: uid,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    disabled: disabled,
    required: required,
    defaultValue: placeholder ? '' : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...control(focus, error, disabled),
      appearance: 'none',
      paddingRight: 38,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--graphite-500)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = e => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 22,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: 2,
      background: on ? 'var(--brand)' : 'var(--graphite-300)',
      transition: 'background-color var(--dur-fast) var(--ease-standard)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-pill)',
      background: '#fff',
      boxShadow: 'var(--shadow-xs)',
      transform: on ? 'translateX(16px)' : 'translateX(0)',
      transition: 'transform var(--dur-fast) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.3 var(--font-sans)',
      color: 'var(--graphite-800)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Trilha",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    const l = it.label || it;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: l
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--fw-medium) var(--fs-caption)/1.3 var(--font-sans)',
        color: 'var(--graphite-700)'
      }
    }, l) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      style: {
        font: 'var(--fw-regular) var(--fs-caption)/1.3 var(--font-sans)',
        color: 'var(--text-muted)',
        borderBottom: 0
      }
    }, l), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 12,
      style: {
        color: 'var(--graphite-300)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  tone = 'default',
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultValue || items[0] && (items[0].value || items[0]));
  const active = value !== undefined ? value : inner;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  const dark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid ' + (dark ? 'var(--border-on-dark)' : 'var(--border-subtle)'),
      ...style
    }
  }, rest), items.map(it => {
    const v = it.value || it;
    const l = it.label || it;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        background: 'none',
        border: 0,
        borderBottom: '2px solid ' + (on ? 'var(--brand)' : 'transparent'),
        padding: '0 0 12px',
        marginBottom: -1,
        cursor: 'pointer',
        font: (on ? 'var(--fw-semibold)' : 'var(--fw-regular)') + ' var(--fs-body-sm)/1.3 var(--font-sans)',
        color: on ? dark ? '#fff' : 'var(--graphite-900)' : dark ? 'var(--graphite-300)' : 'var(--text-muted)',
        transition: 'var(--transition-control)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/proposta/Proposal.jsx
try { (() => {
const {
  Logo,
  SectionLabel,
  Badge,
  DataTable,
  Stat,
  Rule,
  Icon,
  Card,
  Quote
} = window.EFFICAXDesignSystem_edde19;
function Page({
  n,
  children,
  tone = 'light'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: dark ? {
      background: 'var(--surface-dark)'
    } : null
  }, children, /*#__PURE__*/React.createElement("div", {
    className: "pfoot",
    style: dark ? {
      borderColor: 'var(--border-on-dark)',
      color: 'var(--graphite-400)'
    } : null
  }, /*#__PURE__*/React.createElement("span", null, "EFFICAX Assessoria Financeira \xB7 Confidencial"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, n)));
}
function H2({
  children
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      marginTop: 'var(--space-4)',
      maxWidth: '26ch'
    }
  }, children);
}
function Body({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      font: '400 var(--fs-body)/1.68 var(--font-sans)',
      color: 'var(--text-body)',
      maxWidth: '66ch',
      ...style
    }
  }, children);
}
function Proposal() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Page, {
    n: "1 / 4",
    tone: "dark"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "onDark",
    height: 34,
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 3,
      background: 'var(--brand)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--green-400)',
      marginTop: 'var(--space-5)'
    }
  }, "Proposta comercial"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--fs-display-2)',
      lineHeight: 1.08,
      letterSpacing: 'var(--ls-display)',
      color: '#fff',
      maxWidth: '22ch'
    }
  }, "Assessoria em M&A para a venda de participacao minoritaria"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      font: '400 var(--fs-body-lg)/1.6 var(--font-sans)',
      color: 'var(--graphite-300)',
      maxWidth: '46ch'
    }
  }, "Preparada para a diretoria da Industria Alfa S.A."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'flex',
      gap: 'var(--space-8)'
    }
  }, [['Documento', 'PRP-2026-014'], ['Data', '30/06/2026'], ['Validade', '30 dias']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--graphite-400)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--fs-body)/1.4 var(--font-mono)',
      color: '#fff',
      marginTop: 6
    }
  }, v)))))), /*#__PURE__*/React.createElement(Page, {
    n: "2 / 4"
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Contexto"), /*#__PURE__*/React.createElement(H2, null, "O que entendemos do momento da empresa."), /*#__PURE__*/React.createElement(Body, null, "A Industria Alfa avalia a entrada de um socio financeiro para sustentar a expansao da unidade de Sorocaba. O time financeiro atual fecha o mes em 27 dias e nao possui material de apresentacao para investidores. A decisao precisa ser tomada no segundo semestre."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Escopo")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, [['01', 'Preparacao', 'Revisao de dois anos de numeros, ajuste de EBITDA e construcao do teaser e do memorando de informacoes.'], ['02', 'Mercado', 'Mapeamento de compradores e fundos com tese compativel, abordagem sob sigilo e coordenacao das reunioes.'], ['03', 'Due diligence', 'Organizacao do data room, resposta a listas de perguntas e acompanhamento dos assessores juridicos.'], ['04', 'Fechamento', 'Negociacao de preco, estrutura de pagamento e acordo de acionistas ate a assinatura.']].map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: '48px 1fr',
      gap: 'var(--space-4)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--fs-body)/1 var(--font-mono)',
      color: 'var(--green-700)'
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--fs-h4)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      font: '400 var(--fs-body-sm)/1.62 var(--font-sans)',
      color: 'var(--text-muted)',
      maxWidth: '62ch'
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "M&A"), /*#__PURE__*/React.createElement(Badge, null, "Sell-side"), /*#__PURE__*/React.createElement(Badge, {
    tone: "dark"
  }, "Confidencial"))), /*#__PURE__*/React.createElement(Page, {
    n: "3 / 4"
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Base numerica"), /*#__PURE__*/React.createElement(H2, null, "Os numeros que sustentam a conversa."), /*#__PURE__*/React.createElement(Body, null, "Dados fornecidos pela companhia, ajustados por eventos nao recorrentes. Todos os valores em R$ mil."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    caption: "Demonstrativo resumido \u2014 2022 a 2024 (R$ mil)",
    columns: [{
      key: 'l',
      label: 'Linha'
    }, {
      key: 'a',
      label: '2022',
      align: 'right'
    }, {
      key: 'b',
      label: '2023',
      align: 'right'
    }, {
      key: 'c',
      label: '2024',
      align: 'right'
    }, {
      key: 'v',
      label: 'CAGR',
      align: 'right'
    }],
    rows: [{
      l: 'Receita liquida',
      a: '31.480',
      b: '38.940',
      c: '48.210',
      v: '+23,8%'
    }, {
      l: 'Custo dos produtos',
      a: '19.740',
      b: '23.860',
      c: '28.410',
      v: '+20,0%'
    }, {
      l: 'EBITDA ajustado',
      a: '3.910',
      b: '5.120',
      c: '7.880',
      v: '+42,0%'
    }, {
      l: 'Margem EBITDA',
      a: '12,4%',
      b: '13,1%',
      c: '16,3%',
      v: '+3,9 p.p.'
    }, {
      l: 'Divida liquida',
      a: '14.100',
      b: '12.400',
      c: '9.150',
      v: '-19,4%'
    }, {
      l: 'Divida liquida / EBITDA',
      a: '3,6x',
      b: '2,4x',
      c: '1,2x',
      v: '-2,4x'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    prefix: "R$",
    value: "48.210",
    label: "receita liquida 2024 (R$ mil)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "16,3",
    suffix: "%",
    label: "margem EBITDA ajustada",
    tone: "brand"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1,2",
    suffix: "x",
    label: "divida liquida sobre EBITDA"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Faixa indicativa de valor"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 16,
      height: 150
    }
  }, [['5,0x', '39.400', 56], ['6,0x', '47.280', 80], ['7,0x', '55.160', 104], ['8,0x', '63.040', 128]].map(([m, v, h], i) => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--fs-caption)/1.4 var(--font-mono)',
      color: 'var(--graphite-800)',
      marginBottom: 6
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      background: 'var(--chart-' + (i + 1) + ')'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 var(--fs-caption)/1.4 var(--font-mono)',
      color: 'var(--text-muted)',
      paddingTop: 6
    }
  }, m, " EBITDA")))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      font: '400 var(--fs-caption)/1.6 var(--font-sans)',
      color: 'var(--text-subtle)'
    }
  }, "Faixa calculada sobre o EBITDA ajustado de 2024. Multiplos observados em transacoes comparaveis do setor nos ultimos 24 meses."))), /*#__PURE__*/React.createElement(Page, {
    n: "4 / 4"
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Investimento"), /*#__PURE__*/React.createElement(H2, null, "Honorarios e cronograma."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'i',
      label: 'Item'
    }, {
      key: 'f',
      label: 'Formato'
    }, {
      key: 'v',
      label: 'Valor',
      align: 'right'
    }],
    rows: [{
      i: 'Retainer mensal',
      f: '12 meses',
      v: 'R$ 28.000'
    }, {
      i: 'Success fee',
      f: '% sobre o valor da transacao',
      v: '1,8%'
    }, {
      i: 'Despesas reembolsaveis',
      f: 'mediante aprovacao previa',
      v: 'ate R$ 15.000'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Cronograma"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 2
    }
  }, [['Preparacao', 'M1–M3'], ['Mercado', 'M3–M6'], ['Due diligence', 'M6–M9'], ['Fechamento', 'M9–M12']].map(([t, p], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: i % 2 ? 'var(--graphite-50)' : 'var(--brand-soft)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-body-sm)/1.3 var(--font-sans)',
      color: 'var(--graphite-900)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--fs-caption)/1.4 var(--font-mono)',
      color: 'var(--green-700)',
      marginTop: 4
    }
  }, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Time alocado"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      font: '400 var(--fs-body-sm)/1.5 var(--font-sans)',
      color: 'var(--graphite-800)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "2 socios responsaveis pelo mandato"), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("span", null, "1 analista dedicado em tempo integral"), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("span", null, "Reuniao semanal de status com a diretoria"))), /*#__PURE__*/React.createElement(Card, {
    variant: "outlineBrand",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Proximo passo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      font: '400 var(--fs-body-sm)/1.62 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, "Assinatura do mandato e envio da lista de documentos para a fase de preparacao."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-default)',
      height: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 var(--fs-caption)/1.4 var(--font-sans)',
      color: 'var(--text-subtle)'
    }
  }, "Diretoria \u2014 Industria Alfa S.A.")))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-7) 0 0',
      font: '400 var(--fs-caption)/1.6 var(--font-sans)',
      color: 'var(--text-subtle)',
      maxWidth: '70ch'
    }
  }, "Documento ilustrativo do design system. Empresa, numeros, honorarios e datas sao ficticios e servem apenas para demonstrar a formatacao de propostas e relatorios da EFFICAX.")));
}
window.Proposal = Proposal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/proposta/Proposal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Cases.jsx
try { (() => {
const {
  Tag,
  Card,
  Badge,
  Stat,
  SectionLabel,
  Button,
  Icon,
  Quote
} = window.EFFICAXDesignSystem_edde19;
const CASES = [{
  setor: 'Industria',
  servico: 'M&A',
  titulo: 'Venda de participacao minoritaria para fundo de private equity',
  resumo: 'Preparacao de dois anos de numeros, materiais e negociacao com seis interessados.',
  metrica: ['R$', '92', 'mi', 'valor da transacao']
}, {
  setor: 'Distribuicao',
  servico: 'Controladoria',
  titulo: 'Fechamento contabil de 27 para 9 dias',
  resumo: 'Reorganizacao da rotina financeira e painel gerencial mensal para o conselho.',
  metrica: ['', '-18', 'dias', 'no prazo de fechamento']
}, {
  setor: 'Servicos',
  servico: 'Funding',
  titulo: 'Troca de divida curta por linha de longo prazo',
  resumo: 'Renegociacao com tres bancos e alongamento do perfil da divida.',
  metrica: ['', '-3,4', 'p.p.', 'no custo medio da divida']
}, {
  setor: 'Agro',
  servico: 'Valuation',
  titulo: 'Laudo para entrada de novo socio',
  resumo: 'Fluxo de caixa descontado com premissas revisadas junto ao time comercial.',
  metrica: ['R$', '210', 'mi', 'valor de referencia']
}, {
  setor: 'Saude',
  servico: 'Novos negocios',
  titulo: 'Viabilidade de duas novas unidades',
  resumo: 'Estudo de retorno comparando expansao propria e franquia.',
  metrica: ['', '22', '%', 'TIR do cenario aprovado']
}, {
  setor: 'Tecnologia',
  servico: 'M&A',
  titulo: 'Aquisicao de concorrente regional',
  resumo: 'Tese de consolidacao, abordagem do alvo e coordenacao da due diligence.',
  metrica: ['', '4', 'meses', 'da abordagem ao closing']
}];
function CasesPage({
  go
}) {
  const {
    Section
  } = window;
  const [filtro, setFiltro] = React.useState('Todos');
  const filtros = ['Todos', 'M&A', 'Controladoria', 'Funding', 'Valuation', 'Novos negocios'];
  const lista = filtro === 'Todos' ? CASES : CASES.filter(c => c.servico === filtro);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) 0 var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Casos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--fs-h1)',
      maxWidth: '24ch'
    }
  }, "Mandatos concluidos, sem nome de cliente."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      font: '400 var(--fs-body-lg)/1.62 var(--font-sans)',
      color: 'var(--text-body)',
      maxWidth: '56ch'
    }
  }, "Os numeros sao reais; os nomes ficam em sigilo. Podemos detalhar cada caso em uma conversa."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, filtros.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    active: t === filtro,
    onClick: () => setFiltro(t)
  }, t))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y-compact) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, lista.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.titulo,
    href: "#",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, c.servico), /*#__PURE__*/React.createElement(Badge, null, c.setor)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1.3
    }
  }, c.titulo), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 var(--fs-body-sm)/1.62 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, c.resumo), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    prefix: c.metrica[0],
    value: c.metrica[1],
    suffix: c.metrica[2],
    label: c.metrica[3],
    style: {
      transform: 'scale(.8)',
      transformOrigin: 'left'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      marginTop: 'var(--space-8)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    author: "Rafael Nunes",
    role: "Socio \xB7 Distribuidora Beta"
  }, "Entramos na negociacao sabendo exatamente quanto a empresa valia e por que."), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--fs-h4)'
    }
  }, "Quer o detalhe de um caso?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      font: '400 var(--fs-body-sm)/1.6 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Enviamos o material sob acordo de confidencialidade.")), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('contato'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Solicitar")))));
}
window.CasesPage = CasesPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Cases.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Logo,
  Button,
  Icon,
  SectionLabel,
  Rule
} = window.EFFICAXDesignSystem_edde19;
const NAV = [['home', 'Inicio'], ['servicos', 'Servicos'], ['casos', 'Casos'], ['contato', 'Contato']];
function SiteHeader({
  page,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 78
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      borderBottom: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 34,
    assetBase: "../../assets/"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, NAV.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(k);
    },
    style: {
      borderBottom: '2px solid ' + (page === k ? 'var(--brand)' : 'transparent'),
      paddingBottom: 3,
      font: (page === k ? 'var(--fw-semibold)' : 'var(--fw-regular)') + ' var(--fs-body-sm)/1.3 var(--font-sans)',
      color: page === k ? 'var(--graphite-900)' : 'var(--text-muted)'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go('contato')
  }, "Agendar diagnostico"))));
}
function SiteFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--graphite-300)',
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-6)',
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "onDark",
    height: 30,
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      font: '400 var(--fs-body-sm)/1.7 var(--font-sans)',
      color: 'var(--graphite-300)',
      maxWidth: '34ch'
    }
  }, "Assessoria financeira para empresas de pequeno e medio porte. M&A, controladoria, funding, valuation e analise de novos negocios.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--green-400)',
      marginBottom: 'var(--space-4)'
    }
  }, "Servicos"), ['M&A', 'Controladoria', 'Funding', 'Valuation', 'Novos negocios'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('servicos');
    },
    style: {
      display: 'block',
      color: 'var(--graphite-300)',
      borderBottom: 0,
      font: '400 var(--fs-body-sm)/2.1 var(--font-sans)'
    }
  }, s))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--green-400)',
      marginBottom: 'var(--space-4)'
    }
  }, "Contato"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      font: '400 var(--fs-body-sm)/1.5 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15
  }), "contato@efficax.com.br"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15
  }), "+55 11 0000-0000"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 15
  }), "/company/efficax")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-on-dark)',
      display: 'flex',
      justifyContent: 'space-between',
      font: '400 var(--fs-caption)/1.5 var(--font-sans)',
      color: 'var(--graphite-400)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 EFFICAX Assessoria Financeira"), /*#__PURE__*/React.createElement("span", null, "Sao Paulo \xB7 SP"))));
}
function PhotoSlot({
  height = 320,
  label = 'Espaco reservado para foto — a marca ainda nao forneceu imagens',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: 'var(--graphite-50)',
      border: '1px dashed var(--border-default)',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      padding: 'var(--space-5)',
      font: '400 var(--fs-caption)/1.5 var(--font-sans)',
      color: 'var(--text-subtle)',
      ...style
    }
  }, label);
}
function Section({
  label,
  title,
  intro,
  children,
  tone = 'page',
  compact = false
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: tone === 'sunken' ? 'var(--surface-sunken)' : dark ? 'var(--surface-dark)' : 'var(--surface-page)',
      padding: (compact ? 'var(--section-y-compact)' : 'var(--section-y)') + ' 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, label && /*#__PURE__*/React.createElement(SectionLabel, {
    tone: dark ? 'onDark' : 'brand'
  }, label), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--fs-h2)',
      maxWidth: '24ch',
      color: dark ? '#fff' : 'var(--text-strong)'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      font: '400 var(--fs-body-lg)/1.62 var(--font-sans)',
      color: dark ? 'var(--graphite-300)' : 'var(--text-body)',
      maxWidth: '58ch'
    }
  }, intro), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, children)));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  PhotoSlot,
  Section,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  Input,
  Select,
  Checkbox,
  Radio,
  Button,
  Card,
  SectionLabel,
  Icon,
  Dialog,
  Rule
} = window.EFFICAXDesignSystem_edde19;
function ContactPage({
  go
}) {
  const [etapa, setEtapa] = React.useState('avaliando');
  const [enviado, setEnviado] = React.useState(false);
  const [erro, setErro] = React.useState('');
  const [email, setEmail] = React.useState('');
  const submit = e => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) {
      setErro('Informe um e-mail valido.');
      return;
    }
    setErro('');
    setEnviado(true);
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) 0 var(--section-y-compact)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr .8fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Contato"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--fs-h1)',
      maxWidth: '22ch'
    }
  }, "Agende um diagnostico de 45 minutos."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      font: '400 var(--fs-body-lg)/1.62 var(--font-sans)',
      color: 'var(--text-body)',
      maxWidth: '52ch'
    }
  }, "Conte o momento da empresa. Respondemos em ate 1 dia util com um horario e a lista do que precisamos ver."), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      marginTop: 'var(--space-7)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    placeholder: "Como podemos te chamar?",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Razao social ou nome fantasia"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail corporativo",
    type: "email",
    placeholder: "nome@empresa.com.br",
    required: true,
    value: email,
    error: erro,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Faturamento anual",
    placeholder: "Selecione",
    options: ['Ate R$ 10 mi', 'R$ 10–50 mi', 'R$ 50–200 mi', 'Acima de R$ 200 mi']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-body-sm)/1.3 var(--font-sans)',
      color: 'var(--graphite-800)',
      marginBottom: 'var(--space-3)'
    }
  }, "Em que momento voce esta?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)'
    }
  }, [['avaliando', 'Avaliando uma venda ou compra'], ['captando', 'Captando recursos'], ['organizando', 'Organizando o financeiro'], ['analisando', 'Analisando um novo negocio']].map(([v, l]) => /*#__PURE__*/React.createElement(Radio, {
    key: v,
    name: "etapa",
    value: v,
    label: l,
    checked: etapa === v,
    onChange: () => setEtapa(v)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Contexto",
    multiline: true,
    rows: 4,
    hint: "Opcional \u2014 o que esta em aberto hoje?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    defaultChecked: true,
    label: "Autorizo o contato por e-mail e telefone",
    description: "Sem newsletter automatica."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg"
  }, "Enviar"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 var(--fs-caption)/1.5 var(--font-sans)',
      color: 'var(--text-subtle)'
    }
  }, "Resposta em ate 1 dia util.")))), /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    style: {
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Escritorio"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      font: '400 var(--fs-body-sm)/1.6 var(--font-sans)',
      color: 'var(--graphite-800)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    style: {
      color: 'var(--brand)'
    }
  }), "Sao Paulo \xB7 SP"), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16,
    style: {
      color: 'var(--brand)'
    }
  }), "contato@efficax.com.br"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    style: {
      color: 'var(--brand)'
    }
  }), "+55 11 0000-0000"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16,
    style: {
      color: 'var(--brand)'
    }
  }), "Seg a sex, 9h\u201318h")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      padding: 'var(--space-4)',
      background: 'var(--brand-soft)',
      borderRadius: 'var(--radius-xs)',
      font: '400 var(--fs-caption)/1.6 var(--font-sans)',
      color: 'var(--green-800)'
    }
  }, "Dados de contato sao exemplos \u2014 substituir pelos reais da EFFICAX.")))), /*#__PURE__*/React.createElement(Dialog, {
    open: enviado,
    title: "Recebemos seu contato",
    description: "Um assessor responde em ate 1 dia util com um horario.",
    onClose: () => setEnviado(false),
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setEnviado(false);
        go('home');
      }
    }, "Voltar ao inicio")
  }));
}
window.ContactPage = ContactPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Stat,
  ServiceCard,
  Quote,
  SectionLabel,
  Rule,
  Card,
  Icon,
  Badge
} = window.EFFICAXDesignSystem_edde19;
function HomePage({
  go
}) {
  const {
    PhotoSlot,
    Section
  } = window;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)',
      color: '#fff',
      padding: 'var(--space-9) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onDark"
  }, "Assessoria financeira"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--fs-display-2)',
      lineHeight: 1.08,
      letterSpacing: 'var(--ls-display)',
      color: '#fff',
      maxWidth: '20ch'
    }
  }, "Decisoes financeiras com base em numeros, nao em intuicao."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      font: '400 var(--fs-body-lg)/1.62 var(--font-sans)',
      color: 'var(--graphite-300)',
      maxWidth: '50ch'
    }
  }, "Trabalhamos ao lado de empresas de pequeno e medio porte em M&A, controladoria, funding, valuation e analise de novos negocios."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: () => go('contato')
  }, "Agendar diagnostico"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go('servicos'),
    style: {
      borderColor: 'var(--border-on-dark)',
      color: '#fff'
    }
  }, "Ver servicos"))), /*#__PURE__*/React.createElement(PhotoSlot, {
    height: 340,
    style: {
      background: 'var(--graphite-700)',
      borderColor: 'var(--border-on-dark)',
      color: 'var(--graphite-400)'
    },
    label: "Espaco reservado para foto do time ou do escritorio"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--border-subtle)',
      padding: 'var(--space-7) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    prefix: "R$",
    value: "1,2",
    suffix: "bi",
    label: "em transacoes assessoradas"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "140",
    suffix: "+",
    label: "mandatos concluidos"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "18",
    suffix: "anos",
    label: "de atuacao no mercado"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "9",
    suffix: "setores",
    label: "atendidos com recorrencia"
  }))), /*#__PURE__*/React.createElement(Section, {
    label: "Servicos",
    title: "Uma frente para cada decisao.",
    intro: "Cada servico entra em um momento diferente da empresa \u2014 da rotina financeira ate a mesa de negociacao."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "handshake",
    title: "M&A",
    description: "Conducao de compra e venda, da tese ao fechamento.",
    items: ['Preparacao da empresa', 'Mapeamento de compradores', 'Negociacao e closing'],
    href: "#"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "calculator",
    title: "Controladoria",
    description: "Rotina financeira organizada e numeros confiaveis.",
    items: ['Fechamento mensal', 'Orcamento e forecast', 'Indicadores gerenciais'],
    href: "#"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "landmark",
    title: "Funding",
    description: "Estrutura de capital adequada ao plano da empresa.",
    items: ['Credito bancario e mercado', 'Relacionamento com investidores', 'Modelagem de cenarios'],
    href: "#"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "trending-up",
    title: "Valuation",
    description: "Quanto vale a empresa e o que sustenta esse numero.",
    items: ['Fluxo de caixa descontado', 'Multiplos comparaveis', 'Laudos para negociacao'],
    href: "#"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "search-check",
    title: "Novos negocios",
    description: "Analise de viabilidade antes do investimento.",
    items: ['Estudo de retorno', 'Analise de risco', 'Plano de implantacao'],
    href: "#"
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "dark",
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onDark"
  }, "Diagnostico"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--fs-h3)',
      color: '#fff',
      lineHeight: 1.3
    }
  }, "45 minutos sobre os numeros da sua empresa.")), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    onClick: () => go('contato'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Agendar")))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    label: "Como trabalhamos",
    title: "Quatro etapas, sem surpresa no meio do caminho.",
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-5)'
    }
  }, [['01', 'Diagnostico', 'Entendemos o caixa, a estrutura e a decisao em aberto.'], ['02', 'Plano', 'Definimos escopo, prazo e o numero que precisa melhorar.'], ['03', 'Execucao', 'Atuamos junto ao time financeiro, com reuniao semanal.'], ['04', 'Entrega', 'Relatorio, laudo ou transacao fechada — com o proximo passo claro.']].map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      borderTop: 'var(--border-width-rule) solid var(--brand)',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--fs-body-sm)/1 var(--font-mono)',
      color: 'var(--green-700)'
    }
  }, n), /*#__PURE__*/React.createElement("h4", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--fs-h4)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-2)',
      font: '400 var(--fs-body-sm)/1.62 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, d))))), /*#__PURE__*/React.createElement(Section, {
    label: "Clientes",
    title: "O que muda depois.",
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    author: "Marina Alves",
    role: "CFO \xB7 Industria Alfa"
  }, "A EFFICAX organizou nosso caixa antes da rodada. Fechamos em quatro meses."), /*#__PURE__*/React.createElement(Quote, {
    author: "Rafael Nunes",
    role: "Socio \xB7 Distribuidora Beta"
  }, "Entramos na negociacao sabendo exatamente quanto a empresa valia e por que."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-brand)',
      padding: 'var(--space-8) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      color: '#fff',
      maxWidth: '28ch'
    }
  }, "Vamos olhar os seus numeros juntos."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      font: '400 var(--fs-body)/1.6 var(--font-sans)',
      color: 'rgba(255,255,255,.92)'
    }
  }, "Resposta em ate 1 dia util.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('contato'),
    style: {
      background: 'var(--graphite-900)',
      borderColor: 'var(--graphite-900)',
      color: '#fff'
    }
  }, "Agendar diagnostico"))));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
const {
  Tabs,
  Breadcrumb,
  SectionLabel,
  DataTable,
  Button,
  Card,
  Icon,
  Badge,
  Rule
} = window.EFFICAXDesignSystem_edde19;
const SERVICES = {
  'M&A': {
    icon: 'handshake',
    claim: 'Conduzimos a transacao do primeiro estudo ate a assinatura.',
    entregas: ['Preparacao da empresa e materiais (teaser, memorando)', 'Mapeamento e abordagem de compradores ou alvos', 'Coordenacao de due diligence', 'Negociacao de precos e condicoes'],
    prazo: '6 a 12 meses',
    time: '2 socios + 1 analista'
  },
  'Controladoria': {
    icon: 'calculator',
    claim: 'Colocamos a rotina financeira em ordem e mantemos assim.',
    entregas: ['Fechamento mensal em ate 10 dias uteis', 'Orcamento anual e forecast trimestral', 'Painel de indicadores gerenciais', 'Rotina de conciliacao e controles'],
    prazo: 'Contrato recorrente',
    time: '1 gerente + 1 analista'
  },
  'Funding': {
    icon: 'landmark',
    claim: 'Estruturamos capital na medida do plano, sem encarecer a operacao.',
    entregas: ['Diagnostico da estrutura de capital', 'Negociacao com bancos e fundos', 'Modelagem de cenarios de servico da divida', 'Acompanhamento de covenants'],
    prazo: '3 a 6 meses',
    time: '1 socio + 1 analista'
  },
  'Valuation': {
    icon: 'trending-up',
    claim: 'Um numero defensavel, com as premissas abertas.',
    entregas: ['Fluxo de caixa descontado', 'Multiplos de mercado comparaveis', 'Analise de sensibilidade', 'Laudo para negociacao ou societario'],
    prazo: '4 a 8 semanas',
    time: '1 socio + 1 analista'
  },
  'Novos negocios': {
    icon: 'search-check',
    claim: 'Analise de viabilidade antes de comprometer capital.',
    entregas: ['Estudo de retorno (TIR, payback)', 'Analise de riscos e cenarios', 'Estrutura de investimento', 'Plano de implantacao'],
    prazo: '6 a 10 semanas',
    time: '1 socio + 1 analista'
  }
};
function ServicesPage({
  go
}) {
  const {
    Section
  } = window;
  const [tab, setTab] = React.useState('M&A');
  const s = SERVICES[tab];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--border-subtle)',
      padding: 'var(--space-6) 0 var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Inicio',
      href: '#'
    }, 'Servicos']
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--fs-h1)',
      maxWidth: '26ch'
    }
  }, "Cinco frentes, uma logica: decidir com numero."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(SERVICES),
    value: tab,
    onChange: setTab
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y-compact) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr .6fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      display: 'grid',
      placeItems: 'center',
      background: 'var(--brand-soft)',
      color: 'var(--green-700)',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)'
    }
  }, tab)), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      font: '400 var(--fs-body-lg)/1.62 var(--font-sans)',
      color: 'var(--text-body)',
      maxWidth: '58ch'
    }
  }, s.claim), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Entregaveis")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 'var(--space-4) 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      maxWidth: '62ch'
    }
  }, s.entregas.map(e => /*#__PURE__*/React.createElement("li", {
    key: e,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      font: '400 var(--fs-body)/1.6 var(--font-sans)',
      color: 'var(--text-body)',
      borderBottom: '1px solid var(--border-subtle)',
      paddingBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    style: {
      color: 'var(--brand)',
      marginTop: 4
    }
  }), e))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    caption: "Exemplo de impacto \u2014 cliente do setor industrial, valores em R$ mil",
    columns: [{
      key: 'l',
      label: 'Linha'
    }, {
      key: 'a',
      label: 'Antes',
      align: 'right'
    }, {
      key: 'b',
      label: 'Depois',
      align: 'right'
    }, {
      key: 'v',
      label: 'Var.',
      align: 'right'
    }],
    rows: [{
      l: 'Receita liquida',
      a: '38.940',
      b: '48.210',
      v: '+23,8%'
    }, {
      l: 'EBITDA ajustado',
      a: '5.120',
      b: '7.880',
      v: '+53,9%'
    }, {
      l: 'Divida liquida',
      a: '12.400',
      b: '9.150',
      v: '-26,2%'
    }, {
      l: 'Prazo de fechamento contabil',
      a: '27 dias',
      b: '9 dias',
      v: '-18 dias'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "raised"
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Formato"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Prazo tipico"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--fs-h4)/1.3 var(--font-mono)',
      color: 'var(--graphite-900)',
      marginTop: 4
    }
  }, s.prazo)), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Time alocado"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 var(--fs-body-sm)/1.5 var(--font-sans)',
      color: 'var(--graphite-800)',
      marginTop: 4
    }
  }, s.time)))), /*#__PURE__*/React.createElement(Card, {
    variant: "dark"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff',
      fontSize: 'var(--fs-h4)'
    }
  }, "Nao sabe por onde comecar?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 var(--space-5)',
      font: '400 var(--fs-body-sm)/1.6 var(--font-sans)',
      color: 'var(--graphite-300)'
    }
  }, "O diagnostico aponta a frente mais urgente."), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    fullWidth: true,
    onClick: () => go('contato')
  }, "Agendar"))))));
}
window.ServicesPage = ServicesPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
