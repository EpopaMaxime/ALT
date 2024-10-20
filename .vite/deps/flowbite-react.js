import {
  require_jsx_runtime
} from "./chunk-32NEGIXE.js";
import {
  init_index_esm,
  isTabbable,
  tabbable
} from "./chunk-JOBFDHIH.js";
import {
  arrow,
  autoPlacement,
  autoUpdate,
  computePosition,
  flip,
  floor,
  getComputedStyle,
  getNodeName,
  getOverflowAncestors,
  getParentNode,
  getWindow,
  init_floating_ui_dom,
  init_floating_ui_utils,
  init_floating_ui_utils_dom,
  isElement,
  isHTMLElement,
  isLastTraversableNode,
  isShadowRoot,
  offset,
  platform,
  shift
} from "./chunk-RWNBIXJO.js";
import {
  require_react_dom
} from "./chunk-7C7BNZH5.js";
import "./chunk-KTULTRWJ.js";
import {
  require_react
} from "./chunk-65KY755N.js";
import {
  __commonJS,
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/debounce/index.js
var require_debounce = __commonJS({
  "node_modules/debounce/index.js"(exports, module) {
    function debounce2(function_, wait = 100, options = {}) {
      if (typeof function_ !== "function") {
        throw new TypeError(`Expected the first parameter to be a function, got \`${typeof function_}\`.`);
      }
      if (wait < 0) {
        throw new RangeError("`wait` must not be negative.");
      }
      const { immediate } = typeof options === "boolean" ? { immediate: options } : options;
      let storedContext;
      let storedArguments;
      let timeoutId2;
      let timestamp;
      let result;
      function later() {
        const last = Date.now() - timestamp;
        if (last < wait && last >= 0) {
          timeoutId2 = setTimeout(later, wait - last);
        } else {
          timeoutId2 = void 0;
          if (!immediate) {
            const callContext = storedContext;
            const callArguments = storedArguments;
            storedContext = void 0;
            storedArguments = void 0;
            result = function_.apply(callContext, callArguments);
          }
        }
      }
      const debounced = function(...arguments_) {
        if (storedContext && this !== storedContext) {
          throw new Error("Debounced method called with different contexts.");
        }
        storedContext = this;
        storedArguments = arguments_;
        timestamp = Date.now();
        const callNow = immediate && !timeoutId2;
        if (!timeoutId2) {
          timeoutId2 = setTimeout(later, wait);
        }
        if (callNow) {
          const callContext = storedContext;
          const callArguments = storedArguments;
          storedContext = void 0;
          storedArguments = void 0;
          result = function_.apply(callContext, callArguments);
        }
        return result;
      };
      debounced.clear = () => {
        if (!timeoutId2) {
          return;
        }
        clearTimeout(timeoutId2);
        timeoutId2 = void 0;
      };
      debounced.flush = () => {
        if (!timeoutId2) {
          return;
        }
        const callContext = storedContext;
        const callArguments = storedArguments;
        storedContext = void 0;
        storedArguments = void 0;
        result = function_.apply(callContext, callArguments);
        clearTimeout(timeoutId2);
        timeoutId2 = void 0;
      };
      return debounced;
    }
    module.exports.debounce = debounce2;
    module.exports = debounce2;
  }
});

// node_modules/flowbite-react/dist/esm/components/Accordion/Accordion.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);

// node_modules/flowbite-react/node_modules/react-icons/lib/iconBase.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/flowbite-react/node_modules/react-icons/lib/iconContext.mjs
var import_react = __toESM(require_react(), 1);
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/flowbite-react/node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => import_react2.default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => import_react2.default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr: attr2,
      size: size3,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size3 || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr2, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}

// node_modules/flowbite-react/node_modules/react-icons/hi/index.mjs
function HiArrowLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiArrowRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiCalendar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChevronDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChevronLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiChevronRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiMoon(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" }, "child": [] }] })(props);
}
function HiStar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, "child": [] }] })(props);
}
function HiSun(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiX(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clipRule": "evenodd" }, "child": [] }] })(props);
}
function HiOutlineChevronDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19 9l-7 7-7-7" }, "child": [] }] })(props);
}
function HiOutlineChevronLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M15 19l-7-7 7-7" }, "child": [] }] })(props);
}
function HiOutlineChevronRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9 5l7 7-7 7" }, "child": [] }] })(props);
}
function HiOutlineChevronUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M5 15l7-7 7 7" }, "child": [] }] })(props);
}
function HiOutlineX(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M6 18L18 6M6 6l12 12" }, "child": [] }] })(props);
}

// node_modules/flowbite-react/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var CLASS_PART_SEPARATOR = "-";
function createClassUtils(config) {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  function getClassGroupId(className) {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  var _a;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
}
function createClassMap(config) {
  const {
    theme: theme2,
    prefix
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme2);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme2) {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme2), classPartObject, classGroupId, theme2);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme2);
    });
  });
}
function getPart(classPartObject, path) {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map((classDefinition) => {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  }
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}
var IMPORTANT_MODIFIER = "!";
function createSplitModifiers(config) {
  const separator = config.separator;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  return function splitModifiers(className) {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index3 = 0; index3 < className.length; index3++) {
      let currentCharacter = className[index3];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index3, index3 + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index3));
          modifierStart = index3 + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index3;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
}
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach((modifier) => {
    const isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
}
function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config),
    ...createClassUtils(config)
  };
}
var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  const {
    splitModifiers,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  const classGroupsInConflict = /* @__PURE__ */ new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map((originalClassName) => {
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = splitModifiers(originalClassName);
    let classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName,
      hasPostfixModifier
    };
  }).reverse().filter((parsed) => {
    if (!parsed.isTailwindClass) {
      return true;
    }
    const {
      modifierId,
      classGroupId,
      hasPostfixModifier
    } = parsed;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach((group) => classGroupsInConflict.add(modifierId + group));
    return true;
  }).reverse().map((parsed) => parsed.originalClassName).join(" ");
}
function twJoin() {
  let index3 = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index3 < arguments.length) {
    if (argument = arguments[index3++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
function fromTheme(key) {
  const themeGetter = (theme2) => theme2[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
}
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, "length", isLengthOnly);
}
function isNumber(value) {
  return Boolean(value) && !Number.isNaN(Number(value));
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, "number", isNumber);
}
function isInteger(value) {
  return Boolean(value) && Number.isInteger(Number(value));
}
function isPercent(value) {
  return value.endsWith("%") && isNumber(value.slice(0, -1));
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
var sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, sizeLabels, isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, "position", isNever);
}
var imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
function isArbitraryImage(value) {
  return getIsArbitraryValue(value, imageLabels, isImage);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, "", isShadow);
}
function isAny() {
  return true;
}
function getIsArbitraryValue(value, label, testValue) {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === "string" ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
}
function isNever() {
  return false;
}
function isShadow(value) {
  return shadowRegex.test(value);
}
function isImage(value) {
  return imageRegex.test(value);
}
var validators = Object.defineProperty({
  __proto__: null,
  isAny,
  isArbitraryImage,
  isArbitraryLength,
  isArbitraryNumber,
  isArbitraryPosition,
  isArbitraryShadow,
  isArbitrarySize,
  isArbitraryValue,
  isInteger,
  isLength,
  isNumber,
  isPercent,
  isTshirtSize
}, Symbol.toStringTag, {
  value: "Module"
});
function getDefaultConfig() {
  const colors = fromTheme("colors");
  const spacing = fromTheme("spacing");
  const blur = fromTheme("blur");
  const brightness = fromTheme("brightness");
  const borderColor = fromTheme("borderColor");
  const borderRadius = fromTheme("borderRadius");
  const borderSpacing = fromTheme("borderSpacing");
  const borderWidth = fromTheme("borderWidth");
  const contrast = fromTheme("contrast");
  const grayscale = fromTheme("grayscale");
  const hueRotate = fromTheme("hueRotate");
  const invert = fromTheme("invert");
  const gap = fromTheme("gap");
  const gradientColorStops = fromTheme("gradientColorStops");
  const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  const inset = fromTheme("inset");
  const margin = fromTheme("margin");
  const opacity = fromTheme("opacity");
  const padding = fromTheme("padding");
  const saturate = fromTheme("saturate");
  const scale = fromTheme("scale");
  const sepia = fromTheme("sepia");
  const skew = fromTheme("skew");
  const space = fromTheme("space");
  const translate = fromTheme("translate");
  const getOverscroll = () => ["auto", "contain", "none"];
  const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
  const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
  const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
  const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
  const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const getNumber = () => [isNumber, isArbitraryNumber];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...getAlign(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...getAlign(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...getLineStyles(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...getLineStyles(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var twMerge = createTailwindMerge(getDefaultConfig);

// node_modules/flowbite-react/dist/esm/helpers/is-object.mjs
function isObject(item) {
  return item !== null && typeof item === "object" && item.constructor === Object;
}

// node_modules/flowbite-react/dist/esm/helpers/clone-deep.mjs
function cloneDeep(source) {
  if (!isObject(source)) {
    return source;
  }
  const output = {};
  for (const key in source) {
    output[key] = cloneDeep(source[key]);
  }
  return output;
}

// node_modules/flowbite-react/dist/esm/helpers/merge-deep.mjs
function mergeDeep(target, source) {
  if (isObject(source) && Object.keys(source).length === 0) {
    return cloneDeep({ ...target, ...source });
  }
  const output = { ...target, ...source };
  if (isObject(source) && isObject(target)) {
    for (const key in source) {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        output[key] = mergeDeep(target[key], source[key]);
      } else {
        output[key] = isObject(source[key]) ? cloneDeep(source[key]) : source[key];
      }
    }
  }
  return output;
}

// node_modules/flowbite-react/dist/esm/helpers/create-theme.mjs
function createTheme(input) {
  return input;
}

// node_modules/flowbite-react/dist/esm/components/Accordion/theme.mjs
var accordionTheme = createTheme({
  root: {
    base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
    flush: {
      off: "rounded-lg border",
      on: "border-b"
    }
  },
  content: {
    base: "p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900"
  },
  title: {
    arrow: {
      base: "h-6 w-6 shrink-0",
      open: {
        off: "",
        on: "rotate-180"
      }
    },
    base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
    flush: {
      off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
      on: "bg-transparent dark:bg-transparent"
    },
    heading: "",
    open: {
      off: "",
      on: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/Alert/theme.mjs
var alertTheme = createTheme({
  base: "flex flex-col gap-2 p-4 text-sm",
  borderAccent: "border-t-4",
  closeButton: {
    base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
    icon: "h-5 w-5",
    color: {
      info: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
      failure: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      success: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      warning: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      green: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      yellow: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      blue: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
      cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
      lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
      dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
      indigo: "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
      purple: "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
      teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
      light: "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
    }
  },
  color: {
    info: "border-cyan-500 bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-cyan-800",
    gray: "border-gray-500 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
    failure: "border-red-500 bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
    success: "border-green-500 bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800",
    warning: "border-yellow-500 bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",
    red: "border-red-500 bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
    green: "border-green-500 bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800",
    yellow: "border-yellow-500 bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",
    blue: "border-blue-500 bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800",
    cyan: "border-cyan-500 bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-cyan-800",
    pink: "border-pink-500 bg-pink-100 text-pink-700 dark:bg-pink-200 dark:text-pink-800",
    lime: "border-lime-500 bg-lime-100 text-lime-700 dark:bg-lime-200 dark:text-lime-800",
    dark: "border-gray-600 bg-gray-800 text-gray-200 dark:bg-gray-900 dark:text-gray-300",
    indigo: "border-indigo-500 bg-indigo-100 text-indigo-700 dark:bg-indigo-200 dark:text-indigo-800",
    purple: "border-purple-500 bg-purple-100 text-purple-700 dark:bg-purple-200 dark:text-purple-800",
    teal: "border-teal-500 bg-teal-100 text-teal-700 dark:bg-teal-200 dark:text-teal-800",
    light: "border-gray-400 bg-gray-50 text-gray-600 dark:bg-gray-500 dark:text-gray-200"
  },
  icon: "mr-3 inline h-5 w-5 flex-shrink-0",
  rounded: "rounded-lg",
  wrapper: "flex items-center"
});

// node_modules/flowbite-react/dist/esm/components/Avatar/theme.mjs
var avatarTheme = createTheme({
  root: {
    base: "flex items-center justify-center space-x-4 rounded",
    bordered: "p-1 ring-2",
    rounded: "rounded-full",
    color: {
      dark: "ring-gray-800 dark:ring-gray-800",
      failure: "ring-red-500 dark:ring-red-700",
      gray: "ring-gray-500 dark:ring-gray-400",
      info: "ring-cyan-400 dark:ring-cyan-800",
      light: "ring-gray-300 dark:ring-gray-500",
      purple: "ring-purple-500 dark:ring-purple-600",
      success: "ring-green-500 dark:ring-green-500",
      warning: "ring-yellow-300 dark:ring-yellow-500",
      pink: "ring-pink-500 dark:ring-pink-500"
    },
    img: {
      base: "rounded",
      off: "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
      on: "",
      placeholder: "absolute -bottom-1 h-auto w-auto text-gray-400"
    },
    size: {
      xs: "h-6 w-6",
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-20 w-20",
      xl: "h-36 w-36"
    },
    stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
    statusPosition: {
      "bottom-left": "-bottom-1 -left-1",
      "bottom-center": "-bottom-1",
      "bottom-right": "-bottom-1 -right-1",
      "top-left": "-left-1 -top-1",
      "top-center": "-top-1",
      "top-right": "-right-1 -top-1",
      "center-right": "-right-1",
      center: "",
      "center-left": "-left-1"
    },
    status: {
      away: "bg-yellow-400",
      base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
      busy: "bg-red-400",
      offline: "bg-gray-400",
      online: "bg-green-400"
    },
    initials: {
      text: "font-medium text-gray-600 dark:text-gray-300",
      base: "relative inline-flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-600"
    }
  },
  group: {
    base: "flex -space-x-4"
  },
  groupCounter: {
    base: "relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-white ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500"
  }
});

// node_modules/flowbite-react/dist/esm/components/Badge/theme.mjs
var badgeTheme = createTheme({
  root: {
    base: "flex h-fit items-center gap-1 font-semibold",
    color: {
      info: "bg-cyan-100 text-cyan-800 group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-800 dark:group-hover:bg-cyan-300",
      gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
      failure: "bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300",
      success: "bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300",
      warning: "bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:group-hover:bg-yellow-300",
      indigo: "bg-indigo-100 text-indigo-800 group-hover:bg-indigo-200 dark:bg-indigo-200 dark:text-indigo-900 dark:group-hover:bg-indigo-300",
      purple: "bg-purple-100 text-purple-800 group-hover:bg-purple-200 dark:bg-purple-200 dark:text-purple-900 dark:group-hover:bg-purple-300",
      pink: "bg-pink-100 text-pink-800 group-hover:bg-pink-200 dark:bg-pink-200 dark:text-pink-900 dark:group-hover:bg-pink-300",
      blue: "bg-blue-100 text-blue-800 group-hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-900 dark:group-hover:bg-blue-300",
      cyan: "bg-cyan-100 text-cyan-800 group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-900 dark:group-hover:bg-cyan-300",
      dark: "bg-gray-600 text-gray-100 group-hover:bg-gray-500 dark:bg-gray-900 dark:text-gray-200 dark:group-hover:bg-gray-700",
      light: "bg-gray-200 text-gray-800 group-hover:bg-gray-300 dark:bg-gray-400 dark:text-gray-900 dark:group-hover:bg-gray-500",
      green: "bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300",
      lime: "bg-lime-100 text-lime-800 group-hover:bg-lime-200 dark:bg-lime-200 dark:text-lime-900 dark:group-hover:bg-lime-300",
      red: "bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300",
      teal: "bg-teal-100 text-teal-800 group-hover:bg-teal-200 dark:bg-teal-200 dark:text-teal-900 dark:group-hover:bg-teal-300",
      yellow: "bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:group-hover:bg-yellow-300"
    },
    href: "group",
    size: {
      xs: "p-1 text-xs",
      sm: "p-1.5 text-sm"
    }
  },
  icon: {
    off: "rounded px-2 py-0.5",
    on: "rounded-full p-1.5",
    size: {
      xs: "h-3 w-3",
      sm: "h-3.5 w-3.5"
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/Blockquote/theme.mjs
var blockquoteTheme = createTheme({
  root: {
    base: "text-xl font-semibold italic text-gray-900 dark:text-white"
  }
});

// node_modules/flowbite-react/dist/esm/components/Breadcrumb/theme.mjs
var breadcrumbTheme = createTheme({
  root: {
    base: "",
    list: "flex items-center"
  },
  item: {
    base: "group flex items-center",
    chevron: "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
    href: {
      off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
      on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    },
    icon: "mr-2 h-4 w-4"
  }
});

// node_modules/flowbite-react/dist/esm/components/Button/theme.mjs
var buttonTheme = createTheme({
  base: "group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none",
  fullSized: "w-full",
  color: {
    dark: "border border-transparent bg-gray-800 text-white focus:ring-4 focus:ring-gray-300 enabled:hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-gray-800 dark:enabled:hover:bg-gray-700",
    failure: "border border-transparent bg-red-700 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-800 dark:bg-red-600 dark:focus:ring-red-900 dark:enabled:hover:bg-red-700",
    gray: ":ring-cyan-700 border border-gray-200 bg-white text-gray-900 focus:text-cyan-700 focus:ring-4 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white",
    info: "border border-transparent bg-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700",
    light: "border border-gray-300 bg-white text-gray-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700",
    purple: "border border-transparent bg-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-purple-800 dark:bg-purple-600 dark:focus:ring-purple-900 dark:enabled:hover:bg-purple-700",
    success: "border border-transparent bg-green-700 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-800 dark:bg-green-600 dark:focus:ring-green-800 dark:enabled:hover:bg-green-700",
    warning: "border border-transparent bg-yellow-400 text-white focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-500 dark:focus:ring-yellow-900",
    blue: "border border-transparent bg-blue-700 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    cyan: "border border-cyan-300 bg-white text-cyan-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-100 dark:border-cyan-600 dark:bg-cyan-600 dark:text-white dark:focus:ring-cyan-700 dark:enabled:hover:border-cyan-700 dark:enabled:hover:bg-cyan-700",
    green: "border border-green-300 bg-white text-green-900 focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-100 dark:border-green-600 dark:bg-green-600 dark:text-white dark:focus:ring-green-700 dark:enabled:hover:border-green-700 dark:enabled:hover:bg-green-700",
    indigo: "border border-indigo-300 bg-white text-indigo-900 focus:ring-4 focus:ring-indigo-300 enabled:hover:bg-indigo-100 dark:border-indigo-600 dark:bg-indigo-600 dark:text-white dark:focus:ring-indigo-700 dark:enabled:hover:border-indigo-700 dark:enabled:hover:bg-indigo-700",
    lime: "border border-lime-300 bg-white text-lime-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-lime-100 dark:border-lime-600 dark:bg-lime-600 dark:text-white dark:focus:ring-lime-700 dark:enabled:hover:border-lime-700 dark:enabled:hover:bg-lime-700",
    pink: "border border-pink-300 bg-white text-pink-900 focus:ring-4 focus:ring-pink-300 enabled:hover:bg-pink-100 dark:border-pink-600 dark:bg-pink-600 dark:text-white dark:focus:ring-pink-700 dark:enabled:hover:border-pink-700 dark:enabled:hover:bg-pink-700",
    red: "border border-red-300 bg-white text-red-900 focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-100 dark:border-red-600 dark:bg-red-600 dark:text-white dark:focus:ring-red-700 dark:enabled:hover:border-red-700 dark:enabled:hover:bg-red-700",
    teal: "border border-teal-300 bg-white text-teal-900 focus:ring-4 focus:ring-teal-300 enabled:hover:bg-teal-100 dark:border-teal-600 dark:bg-teal-600 dark:text-white dark:focus:ring-teal-700 dark:enabled:hover:border-teal-700 dark:enabled:hover:bg-teal-700",
    yellow: "border border-yellow-300 bg-white text-yellow-900 focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-100 dark:border-yellow-600 dark:bg-yellow-600 dark:text-white dark:focus:ring-yellow-700 dark:enabled:hover:border-yellow-700 dark:enabled:hover:bg-yellow-700"
  },
  disabled: "cursor-not-allowed opacity-50",
  isProcessing: "cursor-wait",
  spinnerSlot: "absolute top-0 flex h-full items-center",
  spinnerLeftPosition: {
    xs: "left-2",
    sm: "left-3",
    md: "left-4",
    lg: "left-5",
    xl: "left-6"
  },
  gradient: {
    cyan: "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-br dark:focus:ring-cyan-800",
    failure: "bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-gradient-to-br dark:focus:ring-red-800",
    info: "bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-br dark:focus:ring-cyan-800 ",
    lime: "bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 text-gray-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-gradient-to-br dark:focus:ring-lime-800",
    pink: "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white focus:ring-4 focus:ring-pink-300 enabled:hover:bg-gradient-to-br dark:focus:ring-pink-800",
    purple: "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-gradient-to-br dark:focus:ring-purple-800",
    success: "bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-gradient-to-br dark:focus:ring-green-800",
    teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white focus:ring-4 focus:ring-teal-300 enabled:hover:bg-gradient-to-br dark:focus:ring-teal-800"
  },
  gradientDuoTone: {
    cyanToBlue: "bg-gradient-to-r from-cyan-500 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800",
    greenToBlue: "bg-gradient-to-br from-green-400 to-cyan-600 text-white focus:ring-4 focus:ring-green-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-green-800",
    pinkToOrange: "bg-gradient-to-br from-pink-500 to-orange-400 text-white focus:ring-4 focus:ring-pink-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-pink-800",
    purpleToBlue: "bg-gradient-to-br from-purple-600 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800",
    purpleToPink: "bg-gradient-to-r from-purple-500 to-pink-500 text-white focus:ring-4 focus:ring-purple-200 enabled:hover:bg-gradient-to-l dark:focus:ring-purple-800",
    redToYellow: "bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 focus:ring-4 focus:ring-red-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-red-400",
    tealToLime: "bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 focus:ring-4 focus:ring-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 dark:focus:ring-teal-700"
  },
  inner: {
    base: "flex items-stretch transition-all duration-200",
    position: {
      none: "",
      start: "rounded-r-none",
      middle: "rounded-none",
      end: "rounded-l-none"
    },
    outline: "border border-transparent",
    isProcessingPadding: {
      xs: "pl-8",
      sm: "pl-10",
      md: "pl-12",
      lg: "pl-16",
      xl: "pl-20"
    }
  },
  label: "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
  outline: {
    color: {
      gray: "border border-gray-900 dark:border-white",
      default: "border-0",
      light: ""
    },
    off: "",
    on: "flex w-full justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white",
    pill: {
      off: "rounded-md",
      on: "rounded-full"
    }
  },
  pill: {
    off: "rounded-lg",
    on: "rounded-full"
  },
  size: {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
    xl: "px-6 py-3 text-base"
  }
});
var buttonGroupTheme = createTheme({
  base: "inline-flex",
  position: {
    none: "",
    start: "rounded-r-none focus:ring-2",
    middle: "rounded-none border-l-0 pl-0 focus:ring-2",
    end: "rounded-l-none border-l-0 pl-0 focus:ring-2"
  }
});

// node_modules/flowbite-react/dist/esm/components/Card/theme.mjs
var cardTheme = createTheme({
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row"
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700"
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/Carousel/theme.mjs
var carouselTheme = createTheme({
  root: {
    base: "relative h-full w-full",
    leftControl: "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl: "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-white dark:bg-gray-800"
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center"
    }
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x"
  }
});

// node_modules/flowbite-react/dist/esm/components/Checkbox/theme.mjs
var checkboxTheme = createTheme({
  root: {
    base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700",
    color: {
      default: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-gray-800 dark:focus:ring-cyan-600",
      dark: "text-gray-800 focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800",
      failure: "text-red-900 focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900",
      gray: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
      info: "text-cyan-800 focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800",
      light: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
      purple: "text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600",
      success: "text-green-800 focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800",
      warning: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400",
      blue: "text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700",
      cyan: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600",
      green: "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600",
      indigo: "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700",
      lime: "text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700",
      pink: "text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600",
      red: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600",
      teal: "text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600",
      yellow: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400"
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/DarkThemeToggle/theme.mjs
var darkThemeToggleTheme = createTheme({
  root: {
    base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    icon: "h-5 w-5"
  }
});

// node_modules/flowbite-react/dist/esm/components/Datepicker/theme.mjs
var datePickerTheme = createTheme({
  root: {
    base: "relative"
  },
  popup: {
    root: {
      base: "absolute top-10 z-50 block pt-2",
      inline: "relative top-0 z-auto",
      inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"
    },
    header: {
      base: "",
      title: "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
      selectors: {
        base: "mb-2 flex justify-between",
        button: {
          base: "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
          prev: "",
          next: "",
          view: ""
        }
      }
    },
    view: {
      base: "p-1"
    },
    footer: {
      base: "mt-2 flex space-x-2",
      button: {
        base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
        today: "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700",
        clear: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      }
    }
  },
  views: {
    days: {
      header: {
        base: "mb-1 grid grid-cols-7",
        title: "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
      },
      items: {
        base: "grid w-64 grid-cols-7",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    },
    months: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    },
    years: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    },
    decades: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/Drawer/theme.mjs
var drawerTheme = createTheme({
  root: {
    base: "fixed z-40 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800",
    backdrop: "fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80",
    edge: "bottom-16",
    position: {
      top: {
        on: "left-0 right-0 top-0 w-full transform-none",
        off: "left-0 right-0 top-0 w-full -translate-y-full"
      },
      right: {
        on: "right-0 top-0 h-screen w-80 transform-none",
        off: "right-0 top-0 h-screen w-80 translate-x-full"
      },
      bottom: {
        on: "bottom-0 left-0 right-0 w-full transform-none",
        off: "bottom-0 left-0 right-0 w-full translate-y-full"
      },
      left: {
        on: "left-0 top-0 h-screen w-80 transform-none",
        off: "left-0 top-0 h-screen w-80 -translate-x-full"
      }
    }
  },
  header: {
    inner: {
      closeButton: "absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
      closeIcon: "h-4 w-4",
      titleIcon: "me-2.5 h-4 w-4",
      titleText: "mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
    },
    collapsed: {
      on: "hidden",
      off: "block"
    }
  },
  items: {
    base: ""
  }
});

// node_modules/flowbite-react/dist/esm/components/Dropdown/theme.mjs
var dropdownTheme = createTheme({
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-1 focus:outline-none",
  floating: {
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-900 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700"
      },
      placement: "-4px"
    },
    base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
    content: "py-1 text-sm text-gray-700 dark:text-gray-200",
    divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
    header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
    hidden: "invisible opacity-0",
    item: {
      container: "",
      base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      icon: "mr-2 h-4 w-4"
    },
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
    },
    target: "w-fit"
  },
  inlineWrapper: "flex items-center"
});

// node_modules/flowbite-react/dist/esm/components/FileInput/theme.mjs
var fileInputTheme = createTheme({
  root: {
    base: "flex"
  },
  field: {
    base: "relative w-full",
    input: {
      base: "block w-full overflow-hidden rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "sm:text-xs",
        md: "text-sm",
        lg: "sm:text-base"
      },
      colors: {
        gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
      }
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/FloatingLabel/theme.mjs
var floatingLabelTheme = createTheme({
  input: {
    default: {
      filled: {
        sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500",
        md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
      },
      outlined: {
        sm: "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
        md: "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
      },
      standard: {
        sm: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
        md: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
      }
    },
    success: {
      filled: {
        sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-green-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:bg-gray-700 dark:text-white dark:focus:border-green-500",
        md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-green-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:bg-gray-700 dark:text-white dark:focus:border-green-500"
      },
      outlined: {
        sm: "peer block w-full appearance-none rounded-lg border border-green-600 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500",
        md: "peer block w-full appearance-none rounded-lg border border-green-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500"
      },
      standard: {
        sm: "peer block w-full appearance-none border-0 border-b-2 border-green-600 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500",
        md: "peer block w-full appearance-none border-0 border-b-2 border-green-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500"
      }
    },
    error: {
      filled: {
        sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-red-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:bg-gray-700 dark:text-white dark:focus:border-red-500",
        md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-red-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:bg-gray-700 dark:text-white dark:focus:border-red-500"
      },
      outlined: {
        sm: "peer block w-full appearance-none rounded-lg border border-red-600 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500",
        md: "peer block w-full appearance-none rounded-lg border border-red-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500"
      },
      standard: {
        sm: "peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500",
        md: "peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500"
      }
    }
  },
  label: {
    default: {
      filled: {
        sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-gray-500 transition-transform  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
        md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
      },
      outlined: {
        sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500",
        md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
      },
      standard: {
        sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
        md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
      }
    },
    success: {
      filled: {
        sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500",
        md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500"
      },
      outlined: {
        sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500",
        md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500"
      },
      standard: {
        sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-green-500",
        md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-green-500"
      }
    },
    error: {
      filled: {
        sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500",
        md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500"
      },
      outlined: {
        sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500",
        md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500"
      },
      standard: {
        sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500",
        md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500"
      }
    }
  },
  helperText: {
    default: "mt-2 text-xs text-gray-600 dark:text-gray-400",
    success: "mt-2 text-xs text-green-600 dark:text-green-400",
    error: "mt-2 text-xs text-red-600 dark:text-red-400"
  }
});

// node_modules/flowbite-react/dist/esm/components/Footer/theme.mjs
var footerTheme = createTheme({
  root: {
    base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    container: "w-full p-6",
    bgDark: "bg-gray-800"
  },
  groupLink: {
    base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
    link: {
      base: "me-4 last:mr-0 md:mr-6",
      href: "hover:underline"
    },
    col: "flex-col space-y-4"
  },
  icon: {
    base: "text-gray-500 dark:hover:text-white",
    size: "h-5 w-5"
  },
  title: {
    base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
  },
  divider: {
    base: "my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"
  },
  copyright: {
    base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
    href: "ml-1 hover:underline",
    span: "ml-1"
  },
  brand: {
    base: "mb-4 flex items-center sm:mb-0",
    img: "mr-3 h-8",
    span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
  }
});

// node_modules/flowbite-react/dist/esm/components/HelperText/theme.mjs
var helperTextTheme = createTheme({
  root: {
    base: "mt-2 text-sm",
    colors: {
      gray: "text-gray-500 dark:text-gray-400",
      info: "text-cyan-700 dark:text-cyan-800",
      success: "text-green-600 dark:text-green-500",
      failure: "text-red-600 dark:text-red-500",
      warning: "text-yellow-500 dark:text-yellow-600"
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/Kbd/theme.mjs
var kbdTheme = createTheme({
  root: {
    base: "rounded-lg border border-gray-200 bg-gray-100 px-2 py-1.5 text-xs font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100",
    icon: "inline-block"
  }
});

// node_modules/flowbite-react/dist/esm/components/Label/theme.mjs
var labelTheme = createTheme({
  root: {
    base: "text-sm font-medium",
    disabled: "opacity-50",
    colors: {
      default: "text-gray-900 dark:text-white",
      info: "text-cyan-500 dark:text-cyan-600",
      failure: "text-red-700 dark:text-red-500",
      warning: "text-yellow-500 dark:text-yellow-600",
      success: "text-green-700 dark:text-green-500"
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/List/theme.mjs
var listTheme = createTheme({
  root: {
    base: "list-inside space-y-1 text-gray-500 dark:text-gray-400",
    ordered: {
      off: "list-disc",
      on: "list-decimal"
    },
    horizontal: "flex list-none flex-wrap items-center justify-center space-x-4 space-y-0",
    unstyled: "list-none",
    nested: "mt-2 ps-5"
  },
  item: {
    withIcon: {
      off: "",
      on: "flex items-center"
    },
    icon: "me-2 h-3.5 w-3.5 flex-shrink-0"
  }
});

// node_modules/flowbite-react/dist/esm/components/ListGroup/theme.mjs
var listGroupTheme = createTheme({
  root: {
    base: "list-none rounded-lg border border-gray-200 bg-white text-left text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
  },
  item: {
    base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
    link: {
      base: "flex w-full items-center border-b border-gray-200 px-4 py-2 dark:border-gray-600",
      active: {
        off: "hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
        on: "bg-cyan-700 text-white dark:bg-gray-800"
      },
      disabled: {
        off: "",
        on: "cursor-not-allowed bg-gray-100 text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:text-gray-900"
      },
      href: {
        off: "",
        on: ""
      },
      icon: "mr-2 h-4 w-4 fill-current"
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/Navbar/theme.mjs
var navbarTheme = createTheme({
  root: {
    base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
    rounded: {
      on: "rounded",
      off: ""
    },
    bordered: {
      on: "border",
      off: ""
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container"
      }
    }
  },
  brand: {
    base: "flex items-center"
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: ""
    }
  },
  link: {
    base: "block py-2 pl-3 pr-4 md:p-0",
    active: {
      on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
      off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: ""
    }
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    icon: "h-6 w-6 shrink-0"
  }
});

// node_modules/flowbite-react/dist/esm/components/MegaMenu/theme.mjs
var megaMenuTheme = createTheme({
  ...navbarTheme,
  dropdown: {
    base: "",
    toggle: {
      ...dropdownTheme,
      floating: {
        ...dropdownTheme.floating,
        base: twMerge(dropdownTheme.floating.base, "mt-2 block"),
        content: twMerge(dropdownTheme.floating.content, "text-gray-500 dark:text-gray-400"),
        style: {
          ...dropdownTheme.floating.style,
          auto: twMerge(dropdownTheme.floating.style.auto, "text-gray-500 dark:text-gray-400")
        }
      },
      inlineWrapper: twMerge(dropdownTheme.inlineWrapper, "flex w-full items-center justify-between")
    }
  },
  dropdownToggle: {
    base: twMerge(navbarTheme.link.base, navbarTheme.link.active.off, "flex w-full items-center justify-between")
  }
});

// node_modules/flowbite-react/dist/esm/components/Modal/theme.mjs
var modalTheme = createTheme({
  root: {
    base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    show: {
      on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
      off: "hidden"
    },
    sizes: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl"
    },
    positions: {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      center: "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start"
    }
  },
  content: {
    base: "relative h-full w-full p-4 md:h-auto",
    inner: "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700"
  },
  body: {
    base: "flex-1 overflow-auto p-6",
    popup: "pt-0"
  },
  header: {
    base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
    popup: "border-b-0 p-2",
    title: "text-xl font-medium text-gray-900 dark:text-white",
    close: {
      base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
      icon: "h-5 w-5"
    }
  },
  footer: {
    base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
    popup: "border-t"
  }
});

// node_modules/flowbite-react/dist/esm/components/Pagination/theme.mjs
var paginationTheme = createTheme({
  base: "",
  layout: {
    table: {
      base: "text-sm text-gray-700 dark:text-gray-400",
      span: "font-semibold text-gray-900 dark:text-white"
    }
  },
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
    showIcon: "inline-flex",
    previous: {
      base: "ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5"
    },
    next: {
      base: "rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5"
    },
    selector: {
      base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      active: "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      disabled: "cursor-not-allowed opacity-50"
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/Popover/theme.mjs
var popoverTheme = {
  base: "absolute z-20 inline-block w-max max-w-[100vw] bg-white outline-none border border-gray-200 rounded-lg shadow-sm dark:border-gray-600 dark:bg-gray-800",
  content: "z-10 overflow-hidden rounded-[7px]",
  arrow: {
    base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:mix-blend-color",
    placement: "-4px"
  }
};

// node_modules/flowbite-react/dist/esm/components/Progress/theme.mjs
var progressTheme = createTheme({
  base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
  label: "mb-1 flex justify-between font-medium dark:text-white",
  bar: "space-x-2 rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100",
  color: {
    dark: "bg-gray-600 dark:bg-gray-300",
    blue: "bg-blue-600",
    red: "bg-red-600 dark:bg-red-500",
    green: "bg-green-600 dark:bg-green-500",
    yellow: "bg-yellow-400",
    indigo: "bg-indigo-600 dark:bg-indigo-500",
    purple: "bg-purple-600 dark:bg-purple-500",
    cyan: "bg-cyan-600",
    gray: "bg-gray-500",
    lime: "bg-lime-600",
    pink: "bg-pink-500",
    teal: "bg-teal-600"
  },
  size: {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
    xl: "h-6"
  }
});

// node_modules/flowbite-react/dist/esm/components/Radio/theme.mjs
var radioTheme = createTheme({
  root: {
    base: "h-4 w-4 border border-gray-300 text-cyan-600 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600"
  }
});

// node_modules/flowbite-react/dist/esm/components/RangeSlider/theme.mjs
var rangeSliderTheme = createTheme({
  root: {
    base: "flex"
  },
  field: {
    base: "relative w-full",
    input: {
      base: "w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700",
      sizes: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3"
      }
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/Rating/theme.mjs
var ratingTheme = createTheme({
  root: {
    base: "flex items-center"
  },
  star: {
    empty: "text-gray-300 dark:text-gray-500",
    filled: "text-yellow-400",
    sizes: {
      sm: "h-5 w-5",
      md: "h-7 w-7",
      lg: "h-10 w-10"
    }
  }
});
var ratingAdvancedTheme = createTheme({
  base: "flex items-center",
  label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
  progress: {
    base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
    fill: "h-5 rounded bg-yellow-400",
    label: "text-sm font-medium text-cyan-600 dark:text-cyan-500"
  }
});

// node_modules/flowbite-react/dist/esm/components/Select/theme.mjs
var selectTheme = createTheme({
  base: "flex",
  addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    select: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      withIcon: {
        on: "pl-10",
        off: ""
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg"
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: ""
      },
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "p-4 sm:text-base"
      },
      colors: {
        gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
      }
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/Sidebar/theme.mjs
var sidebarTheme = createTheme({
  root: {
    base: "h-full",
    collapsed: {
      on: "w-16",
      off: "w-64"
    },
    inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 px-3 py-4 dark:bg-gray-800"
  },
  collapse: {
    button: "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    icon: {
      base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      open: {
        off: "",
        on: "text-gray-900"
      }
    },
    label: {
      base: "ml-3 flex-1 whitespace-nowrap text-left",
      icon: {
        base: "h-6 w-6 transition delay-0 ease-in-out",
        open: {
          on: "rotate-180",
          off: ""
        }
      }
    },
    list: "space-y-2 py-2"
  },
  cta: {
    base: "mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700",
    color: {
      blue: "bg-cyan-50 dark:bg-cyan-900",
      dark: "bg-dark-50 dark:bg-dark-900",
      failure: "bg-red-50 dark:bg-red-900",
      gray: "bg-alternative-50 dark:bg-alternative-900",
      green: "bg-green-50 dark:bg-green-900",
      light: "bg-light-50 dark:bg-light-900",
      red: "bg-red-50 dark:bg-red-900",
      purple: "bg-purple-50 dark:bg-purple-900",
      success: "bg-green-50 dark:bg-green-900",
      yellow: "bg-yellow-50 dark:bg-yellow-900",
      warning: "bg-yellow-50 dark:bg-yellow-900"
    }
  },
  item: {
    base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    active: "bg-gray-100 dark:bg-gray-700",
    collapsed: {
      insideCollapse: "group w-full pl-8 transition duration-75",
      noIcon: "font-bold"
    },
    content: {
      base: "flex-1 whitespace-nowrap px-3"
    },
    icon: {
      base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      active: "text-gray-700 dark:text-gray-100"
    },
    label: "",
    listItem: ""
  },
  items: {
    base: ""
  },
  itemGroup: {
    base: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
  },
  logo: {
    base: "mb-5 flex items-center pl-2.5",
    collapsed: {
      on: "hidden",
      off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    },
    img: "mr-3 h-6 sm:h-7"
  }
});

// node_modules/flowbite-react/dist/esm/components/Spinner/theme.mjs
var spinnerTheme = createTheme({
  base: "inline animate-spin text-gray-200",
  color: {
    failure: "fill-red-600",
    gray: "fill-gray-600",
    info: "fill-cyan-600",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    success: "fill-green-500",
    warning: "fill-yellow-400"
  },
  light: {
    off: {
      base: "dark:text-gray-600",
      color: {
        failure: "",
        gray: "dark:fill-gray-300",
        info: "",
        pink: "",
        purple: "",
        success: "",
        warning: ""
      }
    },
    on: {
      base: "",
      color: {
        failure: "",
        gray: "",
        info: "",
        pink: "",
        purple: "",
        success: "",
        warning: ""
      }
    }
  },
  size: {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-10 w-10"
  }
});

// node_modules/flowbite-react/dist/esm/components/Table/theme.mjs
var tableTheme = createTheme({
  root: {
    base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
    shadow: "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
    wrapper: "relative"
  },
  body: {
    base: "group/body",
    cell: {
      base: "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"
    }
  },
  head: {
    base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
    cell: {
      base: "bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700"
    }
  },
  row: {
    base: "group/row",
    hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
    striped: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
  }
});

// node_modules/flowbite-react/dist/esm/components/Tabs/theme.mjs
var tabTheme = createTheme({
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    styles: {
      default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
      underline: "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
      pills: "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
      fullWidth: "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400"
    },
    tabitem: {
      base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-cyan-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
      styles: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
          }
        },
        underline: {
          base: "rounded-t-lg",
          active: {
            on: "active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-500",
            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          }
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-cyan-600 text-white",
            off: "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          }
        },
        fullWidth: {
          base: "ml-0 flex w-full rounded-none first:ml-0",
          active: {
            on: "active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
            off: "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          }
        }
      },
      icon: "mr-2 h-5 w-5"
    }
  },
  tabitemcontainer: {
    base: "",
    styles: {
      default: "",
      underline: "",
      pills: "",
      fullWidth: ""
    }
  },
  tabpanel: "py-3"
});

// node_modules/flowbite-react/dist/esm/components/Textarea/theme.mjs
var textareaTheme = createTheme({
  base: "block w-full rounded-lg border text-sm disabled:cursor-not-allowed disabled:opacity-50",
  colors: {
    gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
    warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
    success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
  },
  withShadow: {
    on: "shadow-sm dark:shadow-sm-light",
    off: ""
  }
});

// node_modules/flowbite-react/dist/esm/components/TextInput/theme.mjs
var textInputTheme = createTheme({
  base: "flex",
  addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    rightIcon: {
      base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    input: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "p-4 sm:text-base"
      },
      colors: {
        gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
      },
      withRightIcon: {
        on: "pr-10",
        off: ""
      },
      withIcon: {
        on: "pl-10",
        off: ""
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg"
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: ""
      }
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/Timeline/theme.mjs
var timelineTheme = createTheme({
  root: {
    direction: {
      horizontal: "sm:flex",
      vertical: "relative border-l border-gray-200 dark:border-gray-700"
    }
  },
  item: {
    root: {
      horizontal: "relative mb-6 sm:mb-0",
      vertical: "mb-10 ml-6"
    },
    content: {
      root: {
        base: "mt-3 sm:pr-8"
      },
      body: {
        base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
      },
      time: {
        base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
      },
      title: {
        base: "text-lg font-semibold text-gray-900 dark:text-white"
      }
    },
    point: {
      horizontal: "flex items-center",
      line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
      marker: {
        base: {
          horizontal: "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
          vertical: "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
        },
        icon: {
          base: "h-3 w-3 text-cyan-600 dark:text-cyan-300",
          wrapper: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900"
        }
      },
      vertical: ""
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/Toast/theme.mjs
var toastTheme = createTheme({
  root: {
    base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
    closed: "opacity-0 ease-out"
  },
  toggle: {
    base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
    icon: "h-5 w-5 shrink-0"
  }
});

// node_modules/flowbite-react/dist/esm/components/ToggleSwitch/theme.mjs
var toggleSwitchTheme = createTheme({
  root: {
    base: "group relative flex items-center rounded-lg focus:outline-none",
    active: {
      on: "cursor-pointer",
      off: "cursor-not-allowed opacity-50"
    },
    label: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
  },
  toggle: {
    base: "rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25",
    checked: {
      on: "after:translate-x-full after:border-white",
      off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
      color: {
        blue: "border-cyan-700 bg-cyan-700",
        dark: "bg-dark-700 border-dark-900",
        failure: "border-red-900 bg-red-700",
        gray: "border-gray-600 bg-gray-500",
        green: "border-green-700 bg-green-600",
        light: "bg-light-700 border-light-900",
        red: "border-red-900 bg-red-700",
        purple: "border-purple-900 bg-purple-700",
        success: "border-green-500 bg-green-500",
        yellow: "border-yellow-400 bg-yellow-400",
        warning: "border-yellow-600 bg-yellow-600",
        cyan: "border-cyan-500 bg-cyan-500",
        lime: "border-lime-400 bg-lime-400",
        indigo: "border-indigo-400 bg-indigo-400",
        teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
        info: "border-cyan-600 bg-cyan-600",
        pink: "border-pink-600 bg-pink-600"
      }
    },
    sizes: {
      sm: "h-5 w-9 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4",
      md: "h-6 w-11 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5",
      lg: "h-7 w-14 after:absolute after:left-[4px] after:top-0.5 after:h-6 after:w-6"
    }
  }
});

// node_modules/flowbite-react/dist/esm/components/Tooltip/theme.mjs
var tooltipTheme = createTheme({
  target: "w-fit",
  animation: "transition-opacity",
  arrow: {
    base: "absolute z-10 h-2 w-2 rotate-45",
    style: {
      dark: "bg-gray-900 dark:bg-gray-700",
      light: "bg-white",
      auto: "bg-white dark:bg-gray-700"
    },
    placement: "-4px"
  },
  base: "absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium shadow-sm",
  hidden: "invisible opacity-0",
  style: {
    dark: "bg-gray-900 text-white dark:bg-gray-700",
    light: "border border-gray-200 bg-white text-gray-900",
    auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
  },
  content: "relative z-20"
});

// node_modules/flowbite-react/dist/esm/theme.mjs
var theme = {
  accordion: accordionTheme,
  alert: alertTheme,
  avatar: avatarTheme,
  badge: badgeTheme,
  blockquote: blockquoteTheme,
  breadcrumb: breadcrumbTheme,
  button: buttonTheme,
  buttonGroup: buttonGroupTheme,
  card: cardTheme,
  carousel: carouselTheme,
  checkbox: checkboxTheme,
  datepicker: datePickerTheme,
  darkThemeToggle: darkThemeToggleTheme,
  drawer: drawerTheme,
  dropdown: dropdownTheme,
  fileInput: fileInputTheme,
  floatingLabel: floatingLabelTheme,
  footer: footerTheme,
  helperText: helperTextTheme,
  kbd: kbdTheme,
  label: labelTheme,
  listGroup: listGroupTheme,
  list: listTheme,
  megaMenu: megaMenuTheme,
  modal: modalTheme,
  navbar: navbarTheme,
  pagination: paginationTheme,
  popover: popoverTheme,
  progress: progressTheme,
  radio: radioTheme,
  rangeSlider: rangeSliderTheme,
  rating: ratingTheme,
  ratingAdvanced: ratingAdvancedTheme,
  select: selectTheme,
  textInput: textInputTheme,
  textarea: textareaTheme,
  toggleSwitch: toggleSwitchTheme,
  sidebar: sidebarTheme,
  spinner: spinnerTheme,
  table: tableTheme,
  tabs: tabTheme,
  timeline: timelineTheme,
  toast: toastTheme,
  tooltip: tooltipTheme
};

// node_modules/flowbite-react/dist/esm/theme-store/index.mjs
var store = {
  theme: cloneDeep(theme)
};
function setThemeMode(mode) {
  store.mode = mode;
}
function getThemeMode() {
  return store.mode;
}
function setTheme(theme$1) {
  if (theme$1)
    store.theme = mergeDeep(theme, theme$1);
}
function getTheme() {
  return cloneDeep(store.theme);
}

// node_modules/flowbite-react/dist/esm/components/Accordion/AccordionContent.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Accordion/AccordionPanelContext.mjs
var import_react3 = __toESM(require_react(), 1);
var AccordionPanelContext = (0, import_react3.createContext)(void 0);
function useAccordionContext() {
  const context = (0, import_react3.useContext)(AccordionPanelContext);
  if (!context) {
    throw new Error("useAccordionContext should be used within the AccordionPanelContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Accordion/AccordionContent.mjs
var AccordionContent = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { isOpen } = useAccordionContext();
  const theme2 = mergeDeep(getTheme().accordion.content, customTheme);
  return (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: twMerge(theme2.base, className),
      "data-testid": "flowbite-accordion-content",
      hidden: !isOpen,
      ...props,
      children
    }
  );
};

// node_modules/flowbite-react/dist/esm/components/Accordion/AccordionPanel.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);
var AccordionPanel = ({ children, ...props }) => {
  const { alwaysOpen } = props;
  const [isOpen, setOpen] = (0, import_react4.useState)(props.isOpen);
  const provider = alwaysOpen ? {
    ...props,
    isOpen,
    setOpen: () => setOpen(!isOpen)
  } : props;
  return (0, import_jsx_runtime2.jsx)(AccordionPanelContext.Provider, { value: provider, children });
};

// node_modules/flowbite-react/dist/esm/components/Accordion/AccordionTitle.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var AccordionTitle = ({
  as: Heading = "h2",
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { arrowIcon: ArrowIcon, flush, isOpen, setOpen } = useAccordionContext();
  const onClick = () => typeof setOpen !== "undefined" && setOpen();
  const theme2 = mergeDeep(getTheme().accordion.title, customTheme);
  return (0, import_jsx_runtime3.jsxs)(
    "button",
    {
      className: twMerge(theme2.base, theme2.flush[flush ? "on" : "off"], theme2.open[isOpen ? "on" : "off"], className),
      onClick,
      type: "button",
      ...props,
      children: [
        (0, import_jsx_runtime3.jsx)(Heading, { className: theme2.heading, "data-testid": "flowbite-accordion-heading", children }),
        ArrowIcon && (0, import_jsx_runtime3.jsx)(
          ArrowIcon,
          {
            "aria-hidden": true,
            className: twMerge(theme2.arrow.base, theme2.arrow.open[isOpen ? "on" : "off"]),
            "data-testid": "flowbite-accordion-arrow"
          }
        )
      ]
    }
  );
};

// node_modules/flowbite-react/dist/esm/components/Accordion/Accordion.mjs
var AccordionComponent = ({
  alwaysOpen = false,
  arrowIcon = HiChevronDown,
  children,
  flush = false,
  collapseAll = false,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setOpen] = (0, import_react5.useState)(collapseAll ? -1 : 0);
  const panels = (0, import_react5.useMemo)(
    () => import_react5.Children.map(
      children,
      (child, i) => (0, import_react5.cloneElement)(child, {
        alwaysOpen,
        arrowIcon,
        flush,
        isOpen: isOpen === i,
        setOpen: () => setOpen(isOpen === i ? -1 : i)
      })
    ),
    [alwaysOpen, arrowIcon, children, flush, isOpen]
  );
  const theme2 = mergeDeep(getTheme().accordion.root, customTheme);
  return (0, import_jsx_runtime4.jsx)(
    "div",
    {
      className: twMerge(theme2.base, theme2.flush[flush ? "on" : "off"], className),
      "data-testid": "flowbite-accordion",
      ...props,
      children: panels
    }
  );
};
AccordionComponent.displayName = "Accordion";
AccordionPanel.displayName = "Accordion.Panel";
AccordionTitle.displayName = "Accordion.Title";
AccordionContent.displayName = "Accordion.Content";
var Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent
});

// node_modules/flowbite-react/dist/esm/components/Alert/Alert.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var Alert = ({
  additionalContent,
  children,
  className,
  color = "info",
  icon: Icon,
  onDismiss,
  rounded = true,
  theme: customTheme = {},
  withBorderAccent,
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().alert, customTheme);
  return (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      className: twMerge(
        theme2.base,
        theme2.color[color],
        rounded && theme2.rounded,
        withBorderAccent && theme2.borderAccent,
        className
      ),
      role: "alert",
      ...props,
      children: [
        (0, import_jsx_runtime5.jsxs)("div", { className: theme2.wrapper, "data-testid": "flowbite-alert-wrapper", children: [
          Icon && (0, import_jsx_runtime5.jsx)(Icon, { className: theme2.icon, "data-testid": "flowbite-alert-icon" }),
          (0, import_jsx_runtime5.jsx)("div", { children }),
          typeof onDismiss === "function" && (0, import_jsx_runtime5.jsx)(
            "button",
            {
              "aria-label": "Dismiss",
              className: twMerge(theme2.closeButton.base, theme2.closeButton.color[color]),
              onClick: onDismiss,
              type: "button",
              children: (0, import_jsx_runtime5.jsx)(HiX, { "aria-hidden": true, className: theme2.closeButton.icon })
            }
          )
        ] }),
        additionalContent && (0, import_jsx_runtime5.jsx)("div", { children: additionalContent })
      ]
    }
  );
};
Alert.displayName = "Alert";

// node_modules/flowbite-react/dist/esm/components/Avatar/Avatar.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Avatar/AvatarGroup.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var AvatarGroup = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().avatar.group, customTheme);
  return (0, import_jsx_runtime6.jsx)("div", { "data-testid": "avatar-group-element", className: twMerge(theme2.base, className), ...props, children });
};
AvatarGroup.displayName = "Avatar.Group";

// node_modules/flowbite-react/dist/esm/components/Avatar/AvatarGroupCounter.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var AvatarGroupCounter = ({
  className,
  href,
  theme: customTheme = {},
  total,
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().avatar.groupCounter, customTheme);
  return (0, import_jsx_runtime7.jsxs)("a", { href, className: twMerge(theme2.base, className), ...props, children: [
    "+",
    total
  ] });
};
AvatarGroupCounter.displayName = "Avatar.GroupCounter";

// node_modules/flowbite-react/dist/esm/components/Avatar/Avatar.mjs
var AvatarComponent = ({
  alt = "",
  bordered = false,
  children,
  className,
  color = "light",
  img,
  placeholderInitials = "",
  rounded = false,
  size: size3 = "md",
  stacked = false,
  status,
  statusPosition = "top-left",
  theme: customTheme = {},
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().avatar, customTheme);
  const imgClassName = twMerge(
    theme2.root.img.base,
    bordered && theme2.root.bordered,
    bordered && theme2.root.color[color],
    rounded && theme2.root.rounded,
    stacked && theme2.root.stacked,
    theme2.root.img.on,
    theme2.root.size[size3]
  );
  const imgProps = {
    className: twMerge(imgClassName, theme2.root.img.on),
    "data-testid": "flowbite-avatar-img"
  };
  return (0, import_jsx_runtime8.jsxs)("div", { className: twMerge(theme2.root.base, className), "data-testid": "flowbite-avatar", ...props, children: [
    (0, import_jsx_runtime8.jsxs)("div", { className: "relative", children: [
      img ? typeof img === "string" ? (0, import_jsx_runtime8.jsx)("img", { alt, src: img, ...imgProps }) : img({ alt, ...imgProps }) : placeholderInitials ? (0, import_jsx_runtime8.jsx)(
        "div",
        {
          className: twMerge(
            theme2.root.img.off,
            theme2.root.initials.base,
            stacked && theme2.root.stacked,
            bordered && theme2.root.bordered,
            bordered && theme2.root.color[color],
            theme2.root.size[size3],
            rounded && theme2.root.rounded
          ),
          "data-testid": "flowbite-avatar-initials-placeholder",
          children: (0, import_jsx_runtime8.jsx)("span", { className: twMerge(theme2.root.initials.text), "data-testid": "flowbite-avatar-initials-placeholder-text", children: placeholderInitials })
        }
      ) : (0, import_jsx_runtime8.jsx)("div", { className: twMerge(imgClassName, theme2.root.img.off), "data-testid": "flowbite-avatar-img", children: (0, import_jsx_runtime8.jsx)(
        "svg",
        {
          className: theme2.root.img.placeholder,
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, import_jsx_runtime8.jsx)("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" })
        }
      ) }),
      status && (0, import_jsx_runtime8.jsx)(
        "span",
        {
          "data-testid": "flowbite-avatar-status",
          className: twMerge(
            theme2.root.status.base,
            theme2.root.status[status],
            theme2.root.statusPosition[statusPosition]
          )
        }
      )
    ] }),
    children && (0, import_jsx_runtime8.jsx)("div", { children })
  ] });
};
AvatarComponent.displayName = "Avatar";
var Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarGroupCounter
});

// node_modules/flowbite-react/dist/esm/components/Badge/Badge.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var Badge = ({
  children,
  color = "info",
  href,
  icon: Icon,
  size: size3 = "xs",
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().badge, customTheme);
  const Content = () => (0, import_jsx_runtime9.jsxs)(
    "span",
    {
      className: twMerge(
        theme2.root.base,
        theme2.root.color[color],
        theme2.root.size[size3],
        theme2.icon[Icon ? "on" : "off"],
        className
      ),
      "data-testid": "flowbite-badge",
      ...props,
      children: [
        Icon && (0, import_jsx_runtime9.jsx)(Icon, { "aria-hidden": true, className: theme2.icon.size[size3], "data-testid": "flowbite-badge-icon" }),
        children && (0, import_jsx_runtime9.jsx)("span", { children })
      ]
    }
  );
  return href ? (0, import_jsx_runtime9.jsx)("a", { className: theme2.root.href, href, children: (0, import_jsx_runtime9.jsx)(Content, {}) }) : (0, import_jsx_runtime9.jsx)(Content, {});
};
Badge.displayName = "Badge";

// node_modules/flowbite-react/dist/esm/components/Banner/Banner.mjs
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Banner/BannerCollapseButton.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Button/Button.mjs
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var import_react8 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/esm/components/Spinner/Spinner.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var Spinner = ({
  className,
  color = "info",
  light,
  size: size3 = "md",
  theme: customTheme = {},
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().spinner, customTheme);
  return (0, import_jsx_runtime10.jsx)("span", { role: "status", ...props, children: (0, import_jsx_runtime10.jsxs)(
    "svg",
    {
      fill: "none",
      viewBox: "0 0 100 101",
      className: twMerge(
        theme2.base,
        theme2.color[color],
        theme2.light[light ? "on" : "off"].base,
        theme2.light[light ? "on" : "off"].color[color],
        theme2.size[size3],
        className
      ),
      children: [
        (0, import_jsx_runtime10.jsx)(
          "path",
          {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor"
          }
        ),
        (0, import_jsx_runtime10.jsx)(
          "path",
          {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill"
          }
        )
      ]
    }
  ) });
};
Spinner.displayName = "Spinner";

// node_modules/flowbite-react/dist/esm/components/Button/ButtonBase.mjs
var import_react6 = __toESM(require_react(), 1);
var ButtonBase = (0, import_react6.forwardRef)(
  ({ children, as: Component, href, type = "button", ...props }, ref) => {
    const BaseComponent = Component || (href ? "a" : "button");
    return (0, import_react6.createElement)(BaseComponent, { ref, href, type, ...props }, children);
  }
);
ButtonBase.displayName = "ButtonBaseComponent";

// node_modules/flowbite-react/dist/esm/components/Button/ButtonGroup.mjs
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var import_react7 = __toESM(require_react(), 1);
var processChildren = (children, outline, pill) => {
  return import_react7.Children.map(children, (child, index3) => {
    if ((0, import_react7.isValidElement)(child)) {
      if (child.props.children) {
        return (0, import_react7.cloneElement)(child, {
          ...child.props,
          children: processChildren(child.props.children, outline, pill),
          positionInGroup: determinePosition(index3, import_react7.Children.count(children))
        });
      } else {
        return (0, import_react7.cloneElement)(child, {
          outline,
          pill,
          positionInGroup: determinePosition(index3, import_react7.Children.count(children))
        });
      }
    }
    return child;
  });
};
var determinePosition = (index3, totalChildren) => {
  return index3 === 0 ? "start" : index3 === totalChildren - 1 ? "end" : "middle";
};
var ButtonGroup = ({
  children,
  className,
  outline,
  pill,
  theme: customTheme = {},
  ...props
}) => {
  const items = (0, import_react7.useMemo)(() => processChildren(children, outline, pill), [children, outline, pill]);
  const theme2 = mergeDeep(getTheme().buttonGroup, customTheme);
  return (0, import_jsx_runtime11.jsx)("div", { className: twMerge(theme2.base, className), role: "group", ...props, children: items });
};
ButtonGroup.displayName = "Button.Group";

// node_modules/flowbite-react/dist/esm/components/Button/Button.mjs
var ButtonComponent = (0, import_react8.forwardRef)(
  ({
    children,
    className,
    color = "info",
    disabled,
    fullSized,
    isProcessing = false,
    processingLabel = "Loading...",
    processingSpinner,
    gradientDuoTone,
    gradientMonochrome,
    label,
    outline = false,
    pill = false,
    positionInGroup = "none",
    size: size3 = "md",
    theme: customTheme = {},
    ...props
  }, ref) => {
    const { buttonGroup: groupTheme, button: buttonTheme2 } = getTheme();
    const theme2 = mergeDeep(buttonTheme2, customTheme);
    const theirProps = props;
    return (0, import_jsx_runtime12.jsx)(
      ButtonBase,
      {
        ref,
        disabled,
        className: twMerge(
          theme2.base,
          disabled && theme2.disabled,
          !gradientDuoTone && !gradientMonochrome && theme2.color[color],
          gradientDuoTone && !gradientMonochrome && theme2.gradientDuoTone[gradientDuoTone],
          !gradientDuoTone && gradientMonochrome && theme2.gradient[gradientMonochrome],
          outline && (theme2.outline.color[color] ?? theme2.outline.color.default),
          theme2.pill[pill ? "on" : "off"],
          fullSized && theme2.fullSized,
          groupTheme.position[positionInGroup],
          className
        ),
        ...theirProps,
        children: (0, import_jsx_runtime12.jsx)(
          "span",
          {
            className: twMerge(
              theme2.inner.base,
              theme2.outline[outline ? "on" : "off"],
              theme2.outline.pill[outline && pill ? "on" : "off"],
              theme2.size[size3],
              outline && !theme2.outline.color[color] && theme2.inner.outline,
              isProcessing && theme2.isProcessing,
              isProcessing && theme2.inner.isProcessingPadding[size3],
              theme2.inner.position[positionInGroup]
            ),
            children: (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
              isProcessing && (0, import_jsx_runtime12.jsx)("span", { className: twMerge(theme2.spinnerSlot, theme2.spinnerLeftPosition[size3]), children: processingSpinner || (0, import_jsx_runtime12.jsx)(Spinner, { size: size3 }) }),
              typeof children !== "undefined" ? children : (0, import_jsx_runtime12.jsx)("span", { "data-testid": "flowbite-button-label", className: twMerge(theme2.label), children: isProcessing ? processingLabel : label })
            ] })
          }
        )
      }
    );
  }
);
ButtonComponent.displayName = "Button";
var Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup
});

// node_modules/flowbite-react/dist/esm/components/Banner/BannerCollapseButton.mjs
var BannerCollapseButton = ({ children, ...props }) => {
  const onClick = (event) => {
    const collapseButton = event.target;
    const parentBanner = collapseButton.closest('[role="banner"]');
    parentBanner == null ? void 0 : parentBanner.remove();
  };
  return (0, import_jsx_runtime13.jsx)(Button, { onClick, ...props, children });
};
BannerCollapseButton.displayName = "Banner.CollapseButton";

// node_modules/flowbite-react/dist/esm/components/Banner/Banner.mjs
var BannerComponent = ({ children, ...props }) => {
  return (0, import_jsx_runtime14.jsx)("div", { "data-testid": "flowbite-banner", role: "banner", tabIndex: -1, ...props, children });
};
BannerComponent.displayName = "Banner";
var Banner = Object.assign(BannerComponent, {
  CollapseButton: BannerCollapseButton
});

// node_modules/flowbite-react/dist/esm/components/Blockquote/Blockquote.mjs
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var Blockquote = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().blockquote, customTheme);
  return (0, import_jsx_runtime15.jsx)("blockquote", { className: twMerge(theme2.root.base, className), "data-testid": "flowbite-blockquote", ...props, children });
};
Blockquote.displayName = "Blockquote";

// node_modules/flowbite-react/dist/esm/components/Breadcrumb/Breadcrumb.mjs
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Breadcrumb/BreadcrumbItem.mjs
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var import_react9 = __toESM(require_react(), 1);
var BreadcrumbItem = (0, import_react9.forwardRef)(
  ({ children, className, href, icon: Icon, theme: customTheme = {}, ...props }, ref) => {
    const isLink = typeof href !== "undefined";
    const Component = isLink ? "a" : "span";
    const theme2 = mergeDeep(getTheme().breadcrumb.item, customTheme);
    return (0, import_jsx_runtime16.jsxs)("li", { className: twMerge(theme2.base, className), ...props, children: [
      (0, import_jsx_runtime16.jsx)(HiOutlineChevronRight, { "aria-hidden": true, className: theme2.chevron, "data-testid": "flowbite-breadcrumb-separator" }),
      (0, import_jsx_runtime16.jsxs)(
        Component,
        {
          ref,
          className: theme2.href[isLink ? "on" : "off"],
          "data-testid": "flowbite-breadcrumb-item",
          href,
          children: [
            Icon && (0, import_jsx_runtime16.jsx)(Icon, { "aria-hidden": true, className: theme2.icon }),
            children
          ]
        }
      )
    ] });
  }
);
BreadcrumbItem.displayName = "Breadcrumb.Item";

// node_modules/flowbite-react/dist/esm/components/Breadcrumb/Breadcrumb.mjs
var BreadcrumbComponent = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().breadcrumb.root, customTheme);
  return (0, import_jsx_runtime17.jsx)("nav", { "aria-label": "Breadcrumb", className: twMerge(theme2.base, className), ...props, children: (0, import_jsx_runtime17.jsx)("ol", { className: theme2.list, children }) });
};
BreadcrumbComponent.displayName = "Breadcrumb";
var Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item: BreadcrumbItem
});

// node_modules/flowbite-react/dist/esm/components/Card/Card.mjs
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/helpers/omit.mjs
var omit = (keys) => (obj) => {
  const result = {};
  for (const key in obj) {
    if (keys.includes(key)) {
      continue;
    }
    result[key] = obj[key];
  }
  return result;
};

// node_modules/flowbite-react/dist/esm/components/Card/Card.mjs
var Card = (props) => {
  const { children, className, horizontal, href, theme: customTheme = {} } = props;
  const Component = typeof href === "undefined" ? "div" : "a";
  const theirProps = removeCustomProps(props);
  const theme2 = mergeDeep(getTheme().card, customTheme);
  return (0, import_jsx_runtime18.jsxs)(
    Component,
    {
      "data-testid": "flowbite-card",
      href,
      className: twMerge(
        theme2.root.base,
        theme2.root.horizontal[horizontal ? "on" : "off"],
        href && theme2.root.href,
        className
      ),
      ...theirProps,
      children: [
        (0, import_jsx_runtime18.jsx)(Image, { ...props }),
        (0, import_jsx_runtime18.jsx)("div", { className: theme2.root.children, children })
      ]
    }
  );
};
var Image = ({ theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().card, customTheme);
  if (props.renderImage) {
    return props.renderImage(theme2, props.horizontal ?? false);
  }
  if (props.imgSrc) {
    return (0, import_jsx_runtime18.jsx)(
      "img",
      {
        "data-testid": "flowbite-card-image",
        alt: props.imgAlt ?? "",
        src: props.imgSrc,
        className: twMerge(theme2.img.base, theme2.img.horizontal[props.horizontal ? "on" : "off"])
      }
    );
  }
  return null;
};
var removeCustomProps = omit([
  "renderImage",
  "imgSrc",
  "imgAlt",
  "children",
  "className",
  "horizontal",
  "href",
  "theme"
]);

// node_modules/flowbite-react/dist/esm/components/Carousel/Carousel.mjs
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var import_react11 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/esm/helpers/drag-scroll/index.mjs
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_debounce = __toESM(require_debounce(), 1);
var import_react10 = __toESM(require_react(), 1);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var SCROLL_END_DEBOUNCE = 300;
var LEFT_BUTTON = 0;
var ScrollContainer = class extends import_react10.PureComponent {
  constructor(props) {
    super(props);
    __publicField(this, "container");
    __publicField(this, "scrolling");
    __publicField(this, "started");
    __publicField(this, "pressed");
    __publicField(this, "isMobile", false);
    __publicField(this, "internal");
    __publicField(this, "scrollLeft");
    __publicField(this, "scrollTop");
    __publicField(this, "clientX");
    __publicField(this, "clientY");
    __publicField(this, "onEndScroll", () => {
      this.scrolling = false;
      if (!this.pressed && this.started) {
        this.processEnd();
      }
    });
    __publicField(this, "onScroll", () => {
      const container = this.container.current;
      if (container.scrollLeft !== this.scrollLeft || container.scrollTop !== this.scrollTop) {
        this.scrolling = true;
        this.processScroll();
        this.onEndScroll();
      }
    });
    __publicField(this, "onTouchStart", (e) => {
      const { nativeMobileScroll } = this.props;
      if (this.isDraggable(e.target)) {
        this.internal = true;
        if (nativeMobileScroll && this.scrolling) {
          this.pressed = true;
        } else {
          const touch = e.touches[0];
          this.processClick(touch.clientX, touch.clientY);
          if (!nativeMobileScroll && this.props.stopPropagation) {
            e.stopPropagation();
          }
        }
      }
    });
    __publicField(this, "onTouchEnd", () => {
      const { nativeMobileScroll } = this.props;
      if (this.pressed) {
        if (this.started && (!this.scrolling || !nativeMobileScroll)) {
          this.processEnd();
        } else {
          this.pressed = false;
        }
        this.forceUpdate();
      }
    });
    __publicField(this, "onTouchMove", (e) => {
      const { nativeMobileScroll } = this.props;
      if (this.pressed && (!nativeMobileScroll || !this.isMobile)) {
        const touch = e.touches[0];
        if (touch) {
          this.processMove(touch.clientX, touch.clientY);
        }
        e.preventDefault();
        if (this.props.stopPropagation) {
          e.stopPropagation();
        }
      }
    });
    __publicField(this, "onMouseDown", (e) => {
      var _a, _b;
      if (this.isDraggable(e.target) && this.isScrollable()) {
        this.internal = true;
        if (((_b = (_a = this.props) == null ? void 0 : _a.buttons) == null ? void 0 : _b.indexOf(e.button)) !== -1) {
          this.processClick(e.clientX, e.clientY);
          e.preventDefault();
          if (this.props.stopPropagation) {
            e.stopPropagation();
          }
        }
      }
    });
    __publicField(this, "onMouseMove", (e) => {
      if (this.pressed) {
        this.processMove(e.clientX, e.clientY);
        e.preventDefault();
        if (this.props.stopPropagation) {
          e.stopPropagation();
        }
      }
    });
    __publicField(this, "onMouseUp", (e) => {
      if (this.pressed) {
        if (this.started) {
          this.processEnd();
        } else {
          this.internal = false;
          this.pressed = false;
          this.forceUpdate();
          if (this.props.onClick) {
            this.props.onClick(e);
          }
        }
        e.preventDefault();
        if (this.props.stopPropagation) {
          e.stopPropagation();
        }
      }
    });
    this.container = import_react10.default.createRef();
    this.onEndScroll = (0, import_debounce.default)(this.onEndScroll, SCROLL_END_DEBOUNCE);
    this.scrolling = false;
    this.started = false;
    this.pressed = false;
    this.internal = false;
    this.getRef = this.getRef.bind(this);
  }
  componentDidMount() {
    const { nativeMobileScroll } = this.props;
    const container = this.container.current;
    window.addEventListener("mouseup", this.onMouseUp);
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("touchmove", this.onTouchMove, { passive: false });
    window.addEventListener("touchend", this.onTouchEnd);
    container.addEventListener("touchstart", this.onTouchStart, {
      passive: false
    });
    container.addEventListener("mousedown", this.onMouseDown, {
      passive: false
    });
    if (nativeMobileScroll) {
      this.isMobile = this.isMobileDevice();
      if (this.isMobile) {
        this.forceUpdate();
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("mouseup", this.onMouseUp);
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("touchmove", this.onTouchMove);
    window.removeEventListener("touchend", this.onTouchEnd);
  }
  getElement() {
    return this.container.current;
  }
  isMobileDevice() {
    return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf("IEMobile") !== -1;
  }
  isDraggable(target) {
    const ignoreElements = this.props.ignoreElements;
    if (ignoreElements) {
      const closest = target.closest(ignoreElements);
      return closest === null || closest.contains(this.getElement());
    } else {
      return true;
    }
  }
  isScrollable() {
    const container = this.container.current;
    return container && (container.scrollWidth > container.clientWidth || container.scrollHeight > container.clientHeight);
  }
  processClick(clientX, clientY) {
    const container = this.container.current;
    this.scrollLeft = container == null ? void 0 : container.scrollLeft;
    this.scrollTop = container == null ? void 0 : container.scrollTop;
    this.clientX = clientX;
    this.clientY = clientY;
    this.pressed = true;
  }
  processStart(changeCursor = true) {
    const { onStartScroll } = this.props;
    this.started = true;
    if (changeCursor) {
      document.body.classList.add("cursor-grab");
    }
    if (onStartScroll) {
      onStartScroll({
        external: !this.internal
      });
    }
    this.forceUpdate();
  }
  // Process native scroll (scrollbar, mobile scroll)
  processScroll() {
    if (this.started) {
      const { onScroll } = this.props;
      if (onScroll) {
        onScroll({
          external: !this.internal
        });
      }
    } else {
      this.processStart(false);
    }
  }
  // Process non-native scroll
  processMove(newClientX, newClientY) {
    const { horizontal, vertical, activationDistance, onScroll } = this.props;
    const container = this.container.current;
    if (!this.started) {
      if (horizontal && Math.abs(newClientX - this.clientX) > activationDistance || vertical && Math.abs(newClientY - this.clientY) > activationDistance) {
        this.clientX = newClientX;
        this.clientY = newClientY;
        this.processStart();
      }
    } else {
      if (horizontal) {
        container.scrollLeft -= newClientX - this.clientX;
      }
      if (vertical) {
        container.scrollTop -= newClientY - this.clientY;
      }
      if (onScroll) {
        onScroll({ external: !this.internal });
      }
      this.clientX = newClientX;
      this.clientY = newClientY;
      this.scrollLeft = container.scrollLeft;
      this.scrollTop = container.scrollTop;
    }
  }
  processEnd() {
    const { onEndScroll } = this.props;
    const container = this.container.current;
    if (container && onEndScroll) {
      onEndScroll({
        external: !this.internal
      });
    }
    this.pressed = false;
    this.started = false;
    this.scrolling = false;
    this.internal = false;
    document.body.classList.remove("cursor-grab");
    this.forceUpdate();
  }
  getRef(el) {
    [this.container, this.props.innerRef].forEach((ref) => {
      if (ref) {
        if (typeof ref === "function") {
          ref(el);
        } else {
          ref.current = el;
        }
      }
    });
  }
  render() {
    const { children, draggingClassName, className, style, hideScrollbars } = this.props;
    return (0, import_jsx_runtime19.jsx)(
      "div",
      {
        className: (0, import_classnames.default)(className, this.pressed && draggingClassName, {
          "!scroll-auto [&>*]:pointer-events-none [&>*]:cursor-grab": this.pressed,
          "overflow-auto": this.isMobile,
          "overflow-hidden !overflow-x-hidden [overflow:-moz-scrollbars-none] [scrollbar-width:none]": hideScrollbars,
          "[&::-webkit-scrollbar]:[-webkit-appearance:none !important] [&::-webkit-scrollbar]:!hidden [&::-webkit-scrollbar]:!h-0 [&::-webkit-scrollbar]:!w-0 [&::-webkit-scrollbar]:!bg-transparent": hideScrollbars
        }),
        style,
        ref: this.getRef,
        onScroll: this.onScroll,
        children
      }
    );
  }
};
__publicField(ScrollContainer, "defaultProps", {
  nativeMobileScroll: true,
  hideScrollbars: true,
  activationDistance: 10,
  vertical: true,
  horizontal: true,
  stopPropagation: false,
  style: {},
  buttons: [LEFT_BUTTON]
});

// node_modules/flowbite-react/dist/esm/helpers/is-client.mjs
var isClient = () => {
  return typeof window !== "undefined";
};

// node_modules/flowbite-react/dist/esm/components/Carousel/Carousel.mjs
var Carousel = ({
  children,
  indicators = true,
  leftControl,
  rightControl,
  slide = true,
  draggable = true,
  slideInterval,
  className,
  theme: customTheme = {},
  onSlideChange = null,
  pauseOnHover = false,
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().carousel, customTheme);
  const isDeviceMobile = isClient() && navigator.userAgent.indexOf("IEMobile") !== -1;
  const carouselContainer = (0, import_react11.useRef)(null);
  const [activeItem, setActiveItem] = (0, import_react11.useState)(0);
  const [isDragging, setIsDragging] = (0, import_react11.useState)(false);
  const [isHovering, setIsHovering] = (0, import_react11.useState)(false);
  const didMountRef = (0, import_react11.useRef)(false);
  const items = (0, import_react11.useMemo)(
    () => import_react11.Children.map(
      children,
      (child) => (0, import_react11.cloneElement)(child, {
        className: twMerge(theme2.item.base, child.props.className)
      })
    ),
    [children, theme2.item.base]
  );
  const navigateTo = (0, import_react11.useCallback)(
    (item) => () => {
      if (!items)
        return;
      item = (item + items.length) % items.length;
      if (carouselContainer.current) {
        carouselContainer.current.scrollLeft = carouselContainer.current.clientWidth * item;
      }
      setActiveItem(item);
    },
    [items]
  );
  (0, import_react11.useEffect)(() => {
    if (carouselContainer.current && !isDragging && carouselContainer.current.scrollLeft !== 0) {
      setActiveItem(Math.round(carouselContainer.current.scrollLeft / carouselContainer.current.clientWidth));
    }
  }, [isDragging]);
  (0, import_react11.useEffect)(() => {
    if (slide && !(pauseOnHover && isHovering)) {
      const intervalId = setInterval(() => !isDragging && navigateTo(activeItem + 1)(), slideInterval ?? 3e3);
      return () => clearInterval(intervalId);
    }
  }, [activeItem, isDragging, navigateTo, slide, slideInterval, pauseOnHover, isHovering]);
  (0, import_react11.useEffect)(() => {
    if (didMountRef.current) {
      onSlideChange && onSlideChange(activeItem);
    } else {
      didMountRef.current = true;
    }
  }, [onSlideChange, activeItem]);
  const handleDragging = (dragging) => () => setIsDragging(dragging);
  const setHoveringTrue = (0, import_react11.useCallback)(() => setIsHovering(true), [setIsHovering]);
  const setHoveringFalse = (0, import_react11.useCallback)(() => setIsHovering(false), [setIsHovering]);
  return (0, import_jsx_runtime20.jsxs)(
    "div",
    {
      className: twMerge(theme2.root.base, className),
      "data-testid": "carousel",
      onMouseEnter: setHoveringTrue,
      onMouseLeave: setHoveringFalse,
      onTouchStart: setHoveringTrue,
      onTouchEnd: setHoveringFalse,
      ...props,
      children: [
        (0, import_jsx_runtime20.jsx)(
          ScrollContainer,
          {
            className: twMerge(theme2.scrollContainer.base, (isDeviceMobile || !isDragging) && theme2.scrollContainer.snap),
            draggingClassName: "cursor-grab",
            innerRef: carouselContainer,
            onEndScroll: handleDragging(false),
            onStartScroll: handleDragging(draggable),
            vertical: false,
            horizontal: draggable,
            children: items == null ? void 0 : items.map((item, index3) => (0, import_jsx_runtime20.jsx)(
              "div",
              {
                className: theme2.item.wrapper[draggable ? "on" : "off"],
                "data-active": activeItem === index3,
                "data-testid": "carousel-item",
                children: item
              },
              index3
            ))
          }
        ),
        indicators && (0, import_jsx_runtime20.jsx)("div", { className: theme2.indicators.wrapper, children: items == null ? void 0 : items.map((_, index3) => (0, import_jsx_runtime20.jsx)(
          "button",
          {
            className: twMerge(theme2.indicators.base, theme2.indicators.active[index3 === activeItem ? "on" : "off"]),
            onClick: navigateTo(index3),
            "data-testid": "carousel-indicator",
            "aria-label": `Slide ${index3 + 1}`
          },
          index3
        )) }),
        items && (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
          (0, import_jsx_runtime20.jsx)("div", { className: theme2.root.leftControl, children: (0, import_jsx_runtime20.jsx)(
            "button",
            {
              className: "group",
              "data-testid": "carousel-left-control",
              onClick: navigateTo(activeItem - 1),
              type: "button",
              "aria-label": "Previous slide",
              children: leftControl ? leftControl : (0, import_jsx_runtime20.jsx)(DefaultLeftControl, { theme: customTheme })
            }
          ) }),
          (0, import_jsx_runtime20.jsx)("div", { className: theme2.root.rightControl, children: (0, import_jsx_runtime20.jsx)(
            "button",
            {
              className: "group",
              "data-testid": "carousel-right-control",
              onClick: navigateTo(activeItem + 1),
              type: "button",
              "aria-label": "Next slide",
              children: rightControl ? rightControl : (0, import_jsx_runtime20.jsx)(DefaultRightControl, { theme: customTheme })
            }
          ) })
        ] })
      ]
    }
  );
};
var DefaultLeftControl = ({ theme: customTheme = {} }) => {
  const theme2 = mergeDeep(getTheme().carousel, customTheme);
  return (0, import_jsx_runtime20.jsx)("span", { className: theme2.control.base, children: (0, import_jsx_runtime20.jsx)(HiOutlineChevronLeft, { className: theme2.control.icon }) });
};
var DefaultRightControl = ({ theme: customTheme = {} }) => {
  const theme2 = mergeDeep(getTheme().carousel, customTheme);
  return (0, import_jsx_runtime20.jsx)("span", { className: theme2.control.base, children: (0, import_jsx_runtime20.jsx)(HiOutlineChevronRight, { className: theme2.control.icon }) });
};
Carousel.displayName = "Carousel";

// node_modules/flowbite-react/dist/esm/components/Checkbox/Checkbox.mjs
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var import_react12 = __toESM(require_react(), 1);
var Checkbox = (0, import_react12.forwardRef)(
  ({ className, color = "default", theme: customTheme = {}, ...props }, ref) => {
    const theme2 = mergeDeep(getTheme().checkbox, customTheme);
    return (0, import_jsx_runtime21.jsx)(
      "input",
      {
        ref,
        type: "checkbox",
        className: twMerge(theme2.root.base, theme2.root.color[color], className),
        ...props
      }
    );
  }
);
Checkbox.displayName = "Checkbox";

// node_modules/flowbite-react/dist/esm/components/DarkThemeToggle/DarkThemeToggle.mjs
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/hooks/use-is-mounted.mjs
var import_react13 = __toESM(require_react(), 1);
function useIsMounted() {
  const [mounted, setMounted] = (0, import_react13.useState)(false);
  (0, import_react13.useEffect)(() => setMounted(true), []);
  return mounted;
}

// node_modules/flowbite-react/dist/esm/hooks/use-theme-mode.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/esm/hooks/use-watch-localstorage-value.mjs
var import_react14 = __toESM(require_react(), 1);
var useWatchLocalStorageValue = ({
  key: watchKey,
  onChange
}) => {
  function handleStorageChange({ key, newValue }) {
    if (key === watchKey)
      onChange(newValue);
  }
  (0, import_react14.useEffect)(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
};

// node_modules/flowbite-react/dist/esm/hooks/use-theme-mode.mjs
var DEFAULT_MODE = "light";
var LS_THEME_MODE = "flowbite-theme-mode";
var SYNC_THEME_MODE = "flowbite-theme-mode-sync";
var useThemeMode = () => {
  const [mode, setMode] = (0, import_react15.useState)(getInitialMode(getThemeMode()));
  (0, import_react15.useEffect)(() => {
    setModeInLS(mode);
    setModeInDOM(mode);
  }, []);
  useWatchLocalStorageValue({
    key: LS_THEME_MODE,
    onChange(newValue) {
      if (newValue)
        return handleSetMode(newValue);
    }
  });
  useSyncMode((mode2) => setMode(mode2));
  const handleSetMode = (mode2) => {
    setMode(mode2);
    setModeInLS(mode2);
    setModeInDOM(mode2);
    document.dispatchEvent(new CustomEvent(SYNC_THEME_MODE, { detail: mode2 }));
  };
  const toggleMode = () => {
    let newMode = mode;
    if (newMode === "auto")
      newMode = computeModeValue(newMode);
    newMode = newMode === "dark" ? "light" : "dark";
    handleSetMode(newMode);
  };
  const clearMode = () => {
    const newMode = getThemeMode() ?? DEFAULT_MODE;
    handleSetMode(newMode);
  };
  return { mode, computedMode: computeModeValue(mode), setMode: handleSetMode, toggleMode, clearMode };
};
var useSyncMode = (onChange) => {
  (0, import_react15.useEffect)(() => {
    function handleSync(e) {
      const mode = e.detail;
      onChange(mode);
    }
    document.addEventListener(SYNC_THEME_MODE, handleSync);
    return () => document.removeEventListener(SYNC_THEME_MODE, handleSync);
  }, []);
};
var setModeInLS = (mode) => localStorage.setItem(LS_THEME_MODE, mode);
var setModeInDOM = (mode) => {
  const computedMode = computeModeValue(mode);
  if (computedMode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
var getInitialMode = (defaultMode) => {
  if (!isClient())
    return DEFAULT_MODE;
  const LSMode = localStorage.getItem(LS_THEME_MODE);
  return LSMode ?? defaultMode ?? DEFAULT_MODE;
};
var computeModeValue = (mode) => {
  return mode === "auto" ? prefersColorScheme() : mode;
};
var prefersColorScheme = () => {
  var _a;
  return ((_a = window.matchMedia) == null ? void 0 : _a.call(window, "(prefers-color-scheme: dark)").matches) ? "dark" : "light";
};

// node_modules/flowbite-react/dist/esm/components/DarkThemeToggle/DarkThemeToggle.mjs
var DarkThemeToggle = ({
  className,
  theme: customTheme = {},
  iconDark: IconDark = HiSun,
  iconLight: IconLight = HiMoon,
  ...props
}) => {
  const isMounted = useIsMounted();
  const { computedMode, toggleMode } = useThemeMode();
  const theme2 = mergeDeep(getTheme().darkThemeToggle, customTheme);
  return (0, import_jsx_runtime22.jsxs)(
    "button",
    {
      type: "button",
      "aria-label": "Toggle dark mode",
      "data-testid": "dark-theme-toggle",
      className: twMerge(theme2.root.base, className),
      onClick: toggleMode,
      ...props,
      children: [
        (0, import_jsx_runtime22.jsx)(
          IconDark,
          {
            "aria-label": "Currently dark mode",
            "data-active": isMounted && computedMode === "dark",
            className: twMerge(theme2.root.icon, "hidden dark:block")
          }
        ),
        (0, import_jsx_runtime22.jsx)(
          IconLight,
          {
            "aria-label": "Currently light mode",
            "data-active": isMounted && computedMode === "light",
            className: twMerge(theme2.root.icon, "dark:hidden")
          }
        )
      ]
    }
  );
};
DarkThemeToggle.displayName = "DarkThemeToggle";

// node_modules/flowbite-react/dist/esm/components/Datepicker/Datepicker.mjs
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var import_react18 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/esm/components/TextInput/TextInput.mjs
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var import_react16 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/esm/components/HelperText/HelperText.mjs
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var HelperText = ({
  children,
  className,
  color = "default",
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().helperText, customTheme);
  return (0, import_jsx_runtime23.jsx)("p", { className: twMerge(theme2.root.base, theme2.root.colors[color], className), ...props, children: value ?? children ?? "" });
};
HelperText.displayName = "HelperText";

// node_modules/flowbite-react/dist/esm/components/TextInput/TextInput.mjs
var TextInput = (0, import_react16.forwardRef)(
  ({
    addon,
    className,
    color = "gray",
    helperText,
    icon: Icon,
    rightIcon: RightIcon,
    shadow,
    sizing = "md",
    theme: customTheme = {},
    type = "text",
    ...props
  }, ref) => {
    const theme2 = mergeDeep(getTheme().textInput, customTheme);
    return (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
      (0, import_jsx_runtime24.jsxs)("div", { className: twMerge(theme2.base, className), children: [
        addon && (0, import_jsx_runtime24.jsx)("span", { className: theme2.addon, children: addon }),
        (0, import_jsx_runtime24.jsxs)("div", { className: theme2.field.base, children: [
          Icon && (0, import_jsx_runtime24.jsx)("div", { className: theme2.field.icon.base, children: (0, import_jsx_runtime24.jsx)(Icon, { className: theme2.field.icon.svg }) }),
          RightIcon && (0, import_jsx_runtime24.jsx)("div", { "data-testid": "right-icon", className: theme2.field.rightIcon.base, children: (0, import_jsx_runtime24.jsx)(RightIcon, { className: theme2.field.rightIcon.svg }) }),
          (0, import_jsx_runtime24.jsx)(
            "input",
            {
              className: twMerge(
                theme2.field.input.base,
                theme2.field.input.colors[color],
                theme2.field.input.sizes[sizing],
                theme2.field.input.withIcon[Icon ? "on" : "off"],
                theme2.field.input.withRightIcon[RightIcon ? "on" : "off"],
                theme2.field.input.withAddon[addon ? "on" : "off"],
                theme2.field.input.withShadow[shadow ? "on" : "off"]
              ),
              type,
              ...props,
              ref
            }
          )
        ] })
      ] }),
      helperText && (0, import_jsx_runtime24.jsx)(HelperText, { color, children: helperText })
    ] });
  }
);
TextInput.displayName = "TextInput";

// node_modules/flowbite-react/dist/esm/components/Datepicker/DatepickerContext.mjs
var import_react17 = __toESM(require_react(), 1);
var DatepickerContext = (0, import_react17.createContext)(void 0);
function useDatePickerContext() {
  const context = (0, import_react17.useContext)(DatepickerContext);
  if (!context) {
    throw new Error("useDatePickerContext should be used within the DatePickerContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Datepicker/helpers.mjs
var Views = ((Views2) => {
  Views2[Views2["Days"] = 0] = "Days";
  Views2[Views2["Months"] = 1] = "Months";
  Views2[Views2["Years"] = 2] = "Years";
  Views2[Views2["Decades"] = 3] = "Decades";
  return Views2;
})(Views || {});
var WeekStart = ((WeekStart2) => {
  WeekStart2[WeekStart2["Sunday"] = 0] = "Sunday";
  WeekStart2[WeekStart2["Monday"] = 1] = "Monday";
  WeekStart2[WeekStart2["Tuesday"] = 2] = "Tuesday";
  WeekStart2[WeekStart2["Wednesday"] = 3] = "Wednesday";
  WeekStart2[WeekStart2["Thursday"] = 4] = "Thursday";
  WeekStart2[WeekStart2["Friday"] = 5] = "Friday";
  WeekStart2[WeekStart2["Saturday"] = 6] = "Saturday";
  return WeekStart2;
})(WeekStart || {});
var isDateInRange = (date, minDate, maxDate) => {
  const dateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  if (minDate && maxDate) {
    const minDateTime = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate()).getTime();
    const maxDateTime = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate()).getTime();
    return dateTime >= minDateTime && dateTime <= maxDateTime;
  }
  if (minDate) {
    const minDateTime = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate()).getTime();
    return dateTime >= minDateTime;
  }
  if (maxDate) {
    const maxDateTime = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate()).getTime();
    return dateTime <= maxDateTime;
  }
  return true;
};
var isDateEqual = (date, selectedDate) => {
  date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
  return date.getTime() === selectedDate.getTime();
};
var getFirstDateInRange = (date, minDate, maxDate) => {
  if (!isDateInRange(date, minDate, maxDate)) {
    if (minDate && date < minDate) {
      date = minDate;
    } else if (maxDate && date > maxDate) {
      date = maxDate;
    }
  }
  return date;
};
var getFirstDayOfTheMonth = (date, weekStart) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = firstDayOfMonth.getDay();
  let diff = dayOfWeek - weekStart;
  if (diff < 0) {
    diff += 7;
  }
  return addDays(firstDayOfMonth, -diff);
};
var getWeekDays = (lang, weekStart) => {
  const weekdays = [];
  const date = /* @__PURE__ */ new Date(0);
  date.setDate(date.getDate() - date.getDay() + weekStart);
  const formatter = new Intl.DateTimeFormat(lang, { weekday: "short" });
  for (let i = 0; i < 7; i++) {
    weekdays.push(formatter.format(addDays(date, i)));
  }
  return weekdays;
};
var addDays = (date, amount) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + amount);
  return newDate;
};
var addMonths = (date, amount) => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + amount);
  return newDate;
};
var addYears = (date, amount) => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + amount);
  return newDate;
};
var getFormattedDate = (language, date, options) => {
  let defaultOptions = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  if (options) {
    defaultOptions = options;
  }
  return new Intl.DateTimeFormat(language, defaultOptions).format(date);
};
var startOfYearPeriod = (date, years) => {
  const year = date.getFullYear();
  return Math.floor(year / years) * years;
};
var isDateInDecade = (date, startYear) => {
  const year = date.getFullYear();
  const endYear = startYear + 9;
  return year >= startYear && year <= endYear;
};

// node_modules/flowbite-react/dist/esm/components/Datepicker/Views/Days.mjs
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var DatepickerViewsDays = ({ theme: customTheme = {} }) => {
  const {
    theme: rootTheme,
    weekStart,
    minDate,
    maxDate,
    viewDate,
    selectedDate,
    changeSelectedDate,
    language
  } = useDatePickerContext();
  const theme2 = mergeDeep(rootTheme.views.days, customTheme);
  const weekDays = getWeekDays(language, weekStart);
  const startDate = getFirstDayOfTheMonth(viewDate, weekStart);
  return (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
    (0, import_jsx_runtime25.jsx)("div", { className: theme2.header.base, children: weekDays.map((day, index3) => (0, import_jsx_runtime25.jsx)("span", { className: theme2.header.title, children: day }, index3)) }),
    (0, import_jsx_runtime25.jsx)("div", { className: theme2.items.base, children: [...Array(42)].map((_date, index3) => {
      const currentDate = addDays(startDate, index3);
      const day = getFormattedDate(language, currentDate, { day: "numeric" });
      const isSelected = isDateEqual(selectedDate, currentDate);
      const isDisabled = !isDateInRange(currentDate, minDate, maxDate);
      return (0, import_jsx_runtime25.jsx)(
        "button",
        {
          disabled: isDisabled,
          type: "button",
          className: twMerge(
            theme2.items.item.base,
            isSelected && theme2.items.item.selected,
            isDisabled && theme2.items.item.disabled
          ),
          onClick: () => {
            if (isDisabled)
              return;
            changeSelectedDate(currentDate, true);
          },
          children: day
        },
        index3
      );
    }) })
  ] });
};

// node_modules/flowbite-react/dist/esm/components/Datepicker/Views/Decades.mjs
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var DatepickerViewsDecades = ({ theme: customTheme = {} }) => {
  const { theme: rootTheme, selectedDate, viewDate, setViewDate, setView } = useDatePickerContext();
  const theme2 = mergeDeep(rootTheme.views.decades, customTheme);
  return (0, import_jsx_runtime26.jsx)("div", { className: theme2.items.base, children: [...Array(12)].map((_year, index3) => {
    const first = startOfYearPeriod(viewDate, 100);
    const year = first - 10 + index3 * 10;
    const firstDate = new Date(year, 0, 1);
    const lastDate = addYears(firstDate, 9);
    const isSelected = isDateInDecade(viewDate, year);
    const isDisabled = !isDateInRange(viewDate, firstDate, lastDate);
    return (0, import_jsx_runtime26.jsx)(
      "button",
      {
        disabled: isDisabled,
        type: "button",
        className: twMerge(
          theme2.items.item.base,
          isSelected && theme2.items.item.selected,
          isDisabled && theme2.items.item.disabled
        ),
        onClick: () => {
          if (isDisabled)
            return;
          setViewDate(addYears(viewDate, year - selectedDate.getFullYear()));
          setView(Views.Years);
        },
        children: year
      },
      index3
    );
  }) });
};

// node_modules/flowbite-react/dist/esm/components/Datepicker/Views/Months.mjs
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var DatepickerViewsMonth = ({ theme: customTheme = {} }) => {
  const {
    theme: rootTheme,
    minDate,
    maxDate,
    selectedDate,
    viewDate,
    language,
    setViewDate,
    setView
  } = useDatePickerContext();
  const theme2 = mergeDeep(rootTheme.views.months, customTheme);
  return (0, import_jsx_runtime27.jsx)("div", { className: theme2.items.base, children: [...Array(12)].map((_month, index3) => {
    const newDate = new Date(viewDate.getTime());
    newDate.setMonth(index3);
    const month = getFormattedDate(language, newDate, { month: "short" });
    const isSelected = isDateEqual(selectedDate, newDate);
    const isDisabled = !isDateInRange(newDate, minDate, maxDate);
    return (0, import_jsx_runtime27.jsx)(
      "button",
      {
        disabled: isDisabled,
        type: "button",
        className: twMerge(
          theme2.items.item.base,
          isSelected && theme2.items.item.selected,
          isDisabled && theme2.items.item.disabled
        ),
        onClick: () => {
          if (isDisabled)
            return;
          setViewDate(newDate);
          setView(Views.Days);
        },
        children: month
      },
      index3
    );
  }) });
};

// node_modules/flowbite-react/dist/esm/components/Datepicker/Views/Years.mjs
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var DatepickerViewsYears = ({ theme: customTheme = {} }) => {
  const { theme: rootTheme, selectedDate, minDate, maxDate, viewDate, setViewDate, setView } = useDatePickerContext();
  const theme2 = mergeDeep(rootTheme.views.years, customTheme);
  return (0, import_jsx_runtime28.jsx)("div", { className: theme2.items.base, children: [...Array(12)].map((_year, index3) => {
    const first = startOfYearPeriod(viewDate, 10);
    const year = first - 1 + index3 * 1;
    const newDate = new Date(viewDate.getTime());
    newDate.setFullYear(year);
    const isSelected = isDateEqual(selectedDate, newDate);
    const isDisabled = !isDateInRange(newDate, minDate, maxDate);
    return (0, import_jsx_runtime28.jsx)(
      "button",
      {
        disabled: isDisabled,
        type: "button",
        className: twMerge(
          theme2.items.item.base,
          isSelected && theme2.items.item.selected,
          isDisabled && theme2.items.item.disabled
        ),
        onClick: () => {
          if (isDisabled)
            return;
          setViewDate(newDate);
          setView(Views.Months);
        },
        children: year
      },
      index3
    );
  }) });
};

// node_modules/flowbite-react/dist/esm/components/Datepicker/Datepicker.mjs
var DatepickerRender = ({
  title,
  open,
  inline: inline3 = false,
  autoHide = true,
  // Hide when selected the day
  showClearButton = true,
  labelClearButton = "Clear",
  showTodayButton = true,
  labelTodayButton = "Today",
  defaultDate = /* @__PURE__ */ new Date(),
  minDate,
  maxDate,
  language = "en",
  weekStart = WeekStart.Sunday,
  className,
  theme: customTheme = {},
  onSelectedDateChanged,
  ...props
}, ref) => {
  const theme2 = mergeDeep(getTheme().datepicker, customTheme);
  defaultDate = getFirstDateInRange(defaultDate, minDate, maxDate);
  const [isOpen, setIsOpen] = (0, import_react18.useState)(open);
  const [view, setView] = (0, import_react18.useState)(Views.Days);
  const [selectedDate, setSelectedDate] = (0, import_react18.useState)(defaultDate);
  const [viewDate, setViewDate] = (0, import_react18.useState)(defaultDate);
  const inputRef = (0, import_react18.useRef)(null);
  const datepickerRef = (0, import_react18.useRef)(null);
  const changeSelectedDate = (date, useAutohide) => {
    setSelectedDate(date);
    if (onSelectedDateChanged) {
      onSelectedDateChanged(date);
    }
    if (autoHide && view === Views.Days && useAutohide == true && !inline3) {
      setIsOpen(false);
    }
  };
  const clearDate = () => {
    changeSelectedDate(defaultDate, true);
    if (defaultDate) {
      setViewDate(defaultDate);
    }
  };
  (0, import_react18.useImperativeHandle)(ref, () => ({
    focus() {
      var _a;
      (_a = inputRef.current) == null ? void 0 : _a.focus();
    },
    clear() {
      clearDate();
    }
  }));
  const renderView = (type) => {
    switch (type) {
      case Views.Decades:
        return (0, import_jsx_runtime29.jsx)(DatepickerViewsDecades, { theme: theme2.views.decades });
      case Views.Years:
        return (0, import_jsx_runtime29.jsx)(DatepickerViewsYears, { theme: theme2.views.years });
      case Views.Months:
        return (0, import_jsx_runtime29.jsx)(DatepickerViewsMonth, { theme: theme2.views.months });
      case Views.Days:
      default:
        return (0, import_jsx_runtime29.jsx)(DatepickerViewsDays, { theme: theme2.views.days });
    }
  };
  const getNextView = () => {
    switch (view) {
      case Views.Days:
        return Views.Months;
      case Views.Months:
        return Views.Years;
      case Views.Years:
        return Views.Decades;
    }
    return view;
  };
  const getViewTitle = () => {
    switch (view) {
      case Views.Decades:
        return `${startOfYearPeriod(viewDate, 100)} - ${startOfYearPeriod(viewDate, 100) + 90}`;
      case Views.Years:
        return `${startOfYearPeriod(viewDate, 10)} - ${startOfYearPeriod(viewDate, 10) + 9}`;
      case Views.Months:
        return getFormattedDate(language, viewDate, { year: "numeric" });
      case Views.Days:
      default:
        return getFormattedDate(language, viewDate, { month: "long", year: "numeric" });
    }
  };
  const getViewDatePage = (view2, date, value) => {
    switch (view2) {
      case Views.Days:
        return new Date(addMonths(date, value));
      case Views.Months:
        return new Date(addYears(date, value));
      case Views.Years:
        return new Date(addYears(date, value * 10));
      case Views.Decades:
        return new Date(addYears(date, value * 100));
      default:
        return new Date(addYears(date, value * 10));
    }
  };
  (0, import_react18.useEffect)(() => {
    const handleClickOutside = (event) => {
      var _a, _b;
      const clickedInsideDatepicker = (_a = datepickerRef == null ? void 0 : datepickerRef.current) == null ? void 0 : _a.contains(event.target);
      const clickedInsideInput = (_b = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _b.contains(event.target);
      if (!clickedInsideDatepicker && !clickedInsideInput) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef, datepickerRef, setIsOpen]);
  return (0, import_jsx_runtime29.jsx)(
    DatepickerContext.Provider,
    {
      value: {
        theme: theme2,
        language,
        minDate,
        maxDate,
        weekStart,
        isOpen,
        setIsOpen,
        view,
        setView,
        viewDate,
        setViewDate,
        selectedDate,
        setSelectedDate,
        changeSelectedDate
      },
      children: (0, import_jsx_runtime29.jsxs)("div", { className: twMerge(theme2.root.base, className), children: [
        !inline3 && (0, import_jsx_runtime29.jsx)(
          TextInput,
          {
            theme: theme2.root.input,
            icon: HiCalendar,
            ref: inputRef,
            onFocus: () => {
              if (!isDateEqual(viewDate, selectedDate)) {
                setViewDate(selectedDate);
              }
              setIsOpen(true);
            },
            value: selectedDate && getFormattedDate(language, selectedDate),
            readOnly: true,
            ...props
          }
        ),
        (isOpen || inline3) && (0, import_jsx_runtime29.jsx)("div", { ref: datepickerRef, className: twMerge(theme2.popup.root.base, inline3 && theme2.popup.root.inline), children: (0, import_jsx_runtime29.jsxs)("div", { className: theme2.popup.root.inner, children: [
          (0, import_jsx_runtime29.jsxs)("div", { className: theme2.popup.header.base, children: [
            title && (0, import_jsx_runtime29.jsx)("div", { className: theme2.popup.header.title, children: title }),
            (0, import_jsx_runtime29.jsxs)("div", { className: theme2.popup.header.selectors.base, children: [
              (0, import_jsx_runtime29.jsx)(
                "button",
                {
                  type: "button",
                  className: twMerge(
                    theme2.popup.header.selectors.button.base,
                    theme2.popup.header.selectors.button.prev
                  ),
                  onClick: () => setViewDate(getViewDatePage(view, viewDate, -1)),
                  children: (0, import_jsx_runtime29.jsx)(HiArrowLeft, {})
                }
              ),
              (0, import_jsx_runtime29.jsx)(
                "button",
                {
                  type: "button",
                  className: twMerge(
                    theme2.popup.header.selectors.button.base,
                    theme2.popup.header.selectors.button.view
                  ),
                  onClick: () => setView(getNextView()),
                  children: getViewTitle()
                }
              ),
              (0, import_jsx_runtime29.jsx)(
                "button",
                {
                  type: "button",
                  className: twMerge(
                    theme2.popup.header.selectors.button.base,
                    theme2.popup.header.selectors.button.next
                  ),
                  onClick: () => setViewDate(getViewDatePage(view, viewDate, 1)),
                  children: (0, import_jsx_runtime29.jsx)(HiArrowRight, {})
                }
              )
            ] })
          ] }),
          (0, import_jsx_runtime29.jsx)("div", { className: theme2.popup.view.base, children: renderView(view) }),
          (showClearButton || showTodayButton) && (0, import_jsx_runtime29.jsxs)("div", { className: theme2.popup.footer.base, children: [
            showTodayButton && (0, import_jsx_runtime29.jsx)(
              "button",
              {
                type: "button",
                className: twMerge(theme2.popup.footer.button.base, theme2.popup.footer.button.today),
                onClick: () => {
                  const today = /* @__PURE__ */ new Date();
                  changeSelectedDate(today, true);
                  setViewDate(today);
                },
                children: labelTodayButton
              }
            ),
            showClearButton && (0, import_jsx_runtime29.jsx)(
              "button",
              {
                type: "button",
                className: twMerge(theme2.popup.footer.button.base, theme2.popup.footer.button.clear),
                onClick: () => {
                  changeSelectedDate(defaultDate, true);
                  if (defaultDate) {
                    setViewDate(defaultDate);
                  }
                },
                children: labelClearButton
              }
            )
          ] })
        ] }) })
      ] })
    }
  );
};
var Datepicker = (0, import_react18.forwardRef)(DatepickerRender);
Datepicker.displayName = "Datepicker";

// node_modules/flowbite-react/dist/esm/components/Drawer/Drawer.mjs
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var import_react21 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/esm/components/Drawer/DrawerContext.mjs
var import_react19 = __toESM(require_react(), 1);
var DrawerContext = (0, import_react19.createContext)(void 0);
function useDrawerContext() {
  const context = (0, import_react19.useContext)(DrawerContext);
  if (!context) {
    throw new Error("useDrawerContext should be used within the DrawerContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Drawer/DrawerHeader.mjs
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var import_react20 = __toESM(require_react(), 1);

// node_modules/flowbite-react/node_modules/react-icons/md/index.mjs
function MdHome(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" }, "child": [] }, { "tag": "path", "attr": { "d": "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }, "child": [] }] })(props);
}
function MdClose(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" }, "child": [] }, { "tag": "path", "attr": { "d": "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, "child": [] }] })(props);
}

// node_modules/flowbite-react/dist/esm/components/Drawer/DrawerHeader.mjs
var DrawerHeader = ({
  children,
  className,
  closeIcon: CloseIcon = MdClose,
  theme: customTheme = {},
  title,
  titleIcon: TitleIcon = MdHome,
  ...props
}) => {
  const id = (0, import_react20.useId)();
  const { id: mainDivId, isOpen, onClose, theme: rootTheme } = useDrawerContext();
  const theme2 = mergeDeep(rootTheme.header, customTheme);
  return (0, import_jsx_runtime30.jsxs)("div", { className, ...props, children: [
    (0, import_jsx_runtime30.jsxs)("h5", { className: theme2.inner.titleText, id: mainDivId, children: [
      (0, import_jsx_runtime30.jsx)(TitleIcon, { "aria-hidden": true, className: theme2.inner.titleIcon }),
      title
    ] }),
    (0, import_jsx_runtime30.jsxs)("button", { onClick: onClose, "data-testid": "close-drawer", className: theme2.inner.closeButton, children: [
      (0, import_jsx_runtime30.jsx)(CloseIcon, { "aria-hidden": true, className: theme2.inner.closeIcon }),
      (0, import_jsx_runtime30.jsx)("span", { className: "sr-only", children: "Close menu" })
    ] }),
    (0, import_jsx_runtime30.jsx)("span", { className: theme2.collapsed[isOpen ? "on" : "off"], id: `flowbite-drawer-header-${id}`, children })
  ] });
};
DrawerHeader.displayName = "Drawer.Header";

// node_modules/flowbite-react/dist/esm/components/Drawer/DrawerItems.mjs
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var DrawerItems = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useDrawerContext();
  const theme2 = mergeDeep(rootTheme.items, customTheme);
  return (0, import_jsx_runtime31.jsx)("div", { "data-testid": "flowbite-drawer-items", className: twMerge(theme2.base, className), ...props, children });
};
DrawerItems.displayName = "Drawer.Items";

// node_modules/flowbite-react/dist/esm/components/Drawer/Drawer.mjs
var DrawerComponent = ({
  backdrop = true,
  children,
  className,
  edge = false,
  position = "left",
  onClose,
  open: isOpen = false,
  theme: customTheme = {},
  ...props
}) => {
  const id = (0, import_react21.useId)();
  const theme2 = mergeDeep(getTheme().drawer, customTheme);
  (0, import_react21.useEffect)(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isOpen && onClose) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [onClose, isOpen]);
  return (0, import_jsx_runtime32.jsxs)(DrawerContext.Provider, { value: { theme: theme2, onClose, isOpen, id }, children: [
    (0, import_jsx_runtime32.jsx)(
      "div",
      {
        "aria-modal": true,
        "aria-describedby": `drawer-dialog-${id}`,
        role: "dialog",
        tabIndex: -1,
        "data-testid": "flowbite-drawer",
        className: twMerge(
          theme2.root.base,
          theme2.root.position[position][isOpen ? "on" : "off"],
          edge && !isOpen && theme2.root.edge,
          className
        ),
        ...props,
        children
      }
    ),
    isOpen && backdrop && (0, import_jsx_runtime32.jsx)("div", { onClick: () => onClose(), className: theme2.root.backdrop })
  ] });
};
DrawerComponent.displayName = "Drawer";
var Drawer = Object.assign(DrawerComponent, {
  Header: DrawerHeader,
  Items: DrawerItems
});

// node_modules/flowbite-react/dist/esm/components/Dropdown/Dropdown.mjs
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var React5 = __toESM(require_react(), 1);
var import_react23 = __toESM(require_react(), 1);

// node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
init_floating_ui_utils_dom();
function activeElement(doc) {
  let activeElement2 = doc.activeElement;
  while (((_activeElement = activeElement2) == null || (_activeElement = _activeElement.shadowRoot) == null ? void 0 : _activeElement.activeElement) != null) {
    var _activeElement;
    activeElement2 = activeElement2.shadowRoot.activeElement;
  }
  return activeElement2;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }
  if (isAndroid() && event.pointerType) {
    return event.type === "click" && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  if (isJSDOM()) return false;
  return !isAndroid() && event.width === 0 && event.height === 0 || isAndroid() && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "touch";
}
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
function isAndroid() {
  const re = /android/i;
  return re.test(getPlatform()) || re.test(getUserAgent());
}
function isMac() {
  return getPlatform().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function isJSDOM() {
  return getUserAgent().includes("jsdom/");
}
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  if (!strict) {
    values.push("", void 0);
  }
  return values.includes(pointerType);
}
function isReactEvent(event) {
  return "nativeEvent" in event;
}
function isRootElement(element) {
  return element.matches("html,body");
}
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const e = event;
  return e.target != null && node.contains(e.target);
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
function isTypeableCombobox(element) {
  if (!element) return false;
  return element.getAttribute("role") === "combobox" && isTypeableElement(element);
}

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
init_floating_ui_utils();

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
init_floating_ui_dom();
init_floating_ui_dom();
var React4 = __toESM(require_react(), 1);
var import_react22 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var index = typeof document !== "undefined" ? import_react22.useLayoutEffect : import_react22.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React4.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React4.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React4.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React4.useState(null);
  const [_floating, _setFloating] = React4.useState(null);
  const setReference = React4.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React4.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React4.useRef(null);
  const floatingRef = React4.useRef(null);
  const dataRef = React4.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React4.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React4.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React4.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React4.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React4.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React4.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset2 = (options, deps) => ({
  ...offset(options),
  options: [options, deps]
});
var shift2 = (options, deps) => ({
  ...shift(options),
  options: [options, deps]
});
var flip2 = (options, deps) => ({
  ...flip(options),
  options: [options, deps]
});
var autoPlacement2 = (options, deps) => ({
  ...autoPlacement(options),
  options: [options, deps]
});
var arrow2 = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
init_floating_ui_utils_dom();
init_index_esm();
var import_react_dom3 = __toESM(require_react_dom(), 1);
function useMergeRefs(refs) {
  return React5.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }, refs);
}
var useInsertionEffect = React5["useInsertionEffect".toString()];
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React5.useRef(() => {
    if (true) {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React5.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index3, cols, prevRow) {
  return Math.floor(index3 / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index3) {
  return index3 < 0 || index3 >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  const isDisabledIndex = disabledIndices ? (index4) => disabledIndices.includes(index4) : (index4) => {
    const element = list[index4];
    return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
  };
  let index3 = startingIndex;
  do {
    index3 += decrement ? -amount : amount;
  } while (index3 >= 0 && index3 <= list.length - 1 && isDisabledIndex(index3));
  return index3;
}
function getGridNavigatedIndex(elementsRef, _ref) {
  let {
    event,
    orientation,
    loop,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent: stop = false
  } = _ref;
  let nextIndex = prevIndex;
  if (event.key === ARROW_UP) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = maxIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: nextIndex,
        amount: cols,
        decrement: true,
        disabledIndices
      });
      if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
        const col = prevIndex % cols;
        const maxCol = maxIndex % cols;
        const offset3 = maxIndex - (maxCol - col);
        if (maxCol === col) {
          nextIndex = maxIndex;
        } else {
          nextIndex = maxCol > col ? offset3 : offset3 - cols;
        }
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (event.key === ARROW_DOWN) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = minIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices
      });
      if (loop && prevIndex + cols > maxIndex) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex % cols - cols,
          amount: cols,
          disabledIndices
        });
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (orientation === "both") {
    const prevRow = floor(prevIndex / cols);
    if (event.key === ARROW_RIGHT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === ARROW_LEFT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices,
          decrement: true
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      if (loop && lastRow) {
        nextIndex = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}
function buildCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach((_ref2, index3) => {
    let {
      width,
      height
    } = _ref2;
    if (width > cols) {
      if (true) {
        throw new Error("[Floating UI]: Invalid grid - item width at index " + index3 + " is greater than grid columns");
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          targetCells.push(startIndex + i + j * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every((cell) => cellMap[cell] == null)) {
        targetCells.forEach((cell) => {
          cellMap[cell] = index3;
        });
        itemPlaced = true;
      } else {
        startIndex++;
      }
    }
  });
  return [...cellMap];
}
function getCellIndexOfCorner(index3, sizes, cellMap, cols, corner) {
  if (index3 === -1) return -1;
  const firstCellIndex = cellMap.indexOf(index3);
  switch (corner) {
    case "tl":
      return firstCellIndex;
    case "tr":
      return firstCellIndex + sizes[index3].width - 1;
    case "bl":
      return firstCellIndex + (sizes[index3].height - 1) * cols;
    case "br":
      return cellMap.lastIndexOf(index3);
  }
}
function getCellIndices(indices, cellMap) {
  return cellMap.flatMap((index3, cellIndex) => indices.includes(index3) ? [cellIndex] : []);
}
var rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = () => el == null ? void 0 : el.focus({
    preventScroll
  });
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}
var index2 = typeof document !== "undefined" ? import_react23.useLayoutEffect : import_react23.useEffect;
function sortByDocumentPosition(a, b) {
  const position = a.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1.entries()) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
var FloatingListContext = React5.createContext({
  register: () => {
  },
  unregister: () => {
  },
  map: /* @__PURE__ */ new Map(),
  elementsRef: {
    current: []
  }
});
function FloatingList(_ref) {
  let {
    children,
    elementsRef,
    labelsRef
  } = _ref;
  const [map, setMap] = React5.useState(() => /* @__PURE__ */ new Map());
  const register = React5.useCallback((node) => {
    setMap((prevMap) => new Map(prevMap).set(node, null));
  }, []);
  const unregister = React5.useCallback((node) => {
    setMap((prevMap) => {
      const map2 = new Map(prevMap);
      map2.delete(node);
      return map2;
    });
  }, []);
  index2(() => {
    const newMap = new Map(map);
    const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
    nodes.forEach((node, index3) => {
      newMap.set(node, index3);
    });
    if (!areMapsEqual(map, newMap)) {
      setMap(newMap);
    }
  }, [map]);
  return React5.createElement(FloatingListContext.Provider, {
    value: React5.useMemo(() => ({
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }), [register, unregister, map, elementsRef, labelsRef])
  }, children);
}
function useListItem(_temp) {
  let {
    label
  } = _temp === void 0 ? {} : _temp;
  const [index$1, setIndex] = React5.useState(null);
  const componentRef = React5.useRef(null);
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = React5.useContext(FloatingListContext);
  const ref = React5.useCallback((node) => {
    componentRef.current = node;
    if (index$1 !== null) {
      elementsRef.current[index$1] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== void 0;
        labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index$1, elementsRef, labelsRef, label]);
  index2(() => {
    const node = componentRef.current;
    if (node) {
      register(node);
      return () => {
        unregister(node);
      };
    }
  }, [register, unregister]);
  index2(() => {
    const index3 = componentRef.current ? map.get(componentRef.current) : null;
    if (index3 != null) {
      setIndex(index3);
    }
  }, [map]);
  return React5.useMemo(() => ({
    ref,
    index: index$1 == null ? -1 : index$1
  }), [index$1, ref]);
}
function renderJsx(render, computedProps) {
  if (typeof render === "function") {
    return render(computedProps);
  }
  if (render) {
    return React5.cloneElement(render, computedProps);
  }
  return React5.createElement("div", computedProps);
}
var CompositeContext = React5.createContext({
  activeIndex: 0,
  onNavigate: () => {
  }
});
var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
var verticalKeys = [ARROW_UP, ARROW_DOWN];
var allKeys = [...horizontalKeys, ...verticalKeys];
var Composite = React5.forwardRef(function Composite2(_ref, forwardedRef) {
  let {
    render,
    orientation = "both",
    loop = true,
    cols = 1,
    disabledIndices = [],
    activeIndex: externalActiveIndex,
    onNavigate: externalSetActiveIndex,
    itemSizes,
    dense = false,
    ...props
  } = _ref;
  const [internalActiveIndex, internalSetActiveIndex] = React5.useState(0);
  const activeIndex = externalActiveIndex != null ? externalActiveIndex : internalActiveIndex;
  const onNavigate = useEffectEvent(externalSetActiveIndex != null ? externalSetActiveIndex : internalSetActiveIndex);
  const elementsRef = React5.useRef([]);
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const contextValue = React5.useMemo(() => ({
    activeIndex,
    onNavigate
  }), [activeIndex, onNavigate]);
  const isGrid = cols > 1;
  function handleKeyDown(event) {
    if (!allKeys.includes(event.key)) return;
    let nextIndex = activeIndex;
    if (isGrid) {
      const sizes = itemSizes || Array.from({
        length: elementsRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex((index3) => index3 != null && !disabledIndices.includes(index3));
      const maxGridIndex = cellMap.reduce((foundIndex, index3, cellIndex) => index3 != null && !(disabledIndices != null && disabledIndices.includes(index3)) ? cellIndex : foundIndex, -1);
      nextIndex = cellMap[getGridNavigatedIndex({
        current: cellMap.map((itemIndex) => itemIndex ? elementsRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...disabledIndices, void 0], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(
          activeIndex,
          sizes,
          cellMap,
          cols,
          // use a corner matching the edge closest to the direction we're
          // moving in so we don't end up in the same item. Prefer
          // top/left over bottom/right.
          event.key === ARROW_DOWN ? "bl" : event.key === ARROW_RIGHT ? "tr" : "tl"
        )
      })];
    }
    const minIndex = getMinIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxIndex(elementsRef, disabledIndices);
    const toEndKeys = {
      horizontal: [ARROW_RIGHT],
      vertical: [ARROW_DOWN],
      both: [ARROW_RIGHT, ARROW_DOWN]
    }[orientation];
    const toStartKeys = {
      horizontal: [ARROW_LEFT],
      vertical: [ARROW_UP],
      both: [ARROW_LEFT, ARROW_UP]
    }[orientation];
    const preventedKeys = isGrid ? allKeys : {
      horizontal: horizontalKeys,
      vertical: verticalKeys,
      both: allKeys
    }[orientation];
    if (nextIndex === activeIndex && [...toEndKeys, ...toStartKeys].includes(event.key)) {
      if (loop && nextIndex === maxIndex && toEndKeys.includes(event.key)) {
        nextIndex = minIndex;
      } else if (loop && nextIndex === minIndex && toStartKeys.includes(event.key)) {
        nextIndex = maxIndex;
      } else {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: nextIndex,
          decrement: toStartKeys.includes(event.key),
          disabledIndices
        });
      }
    }
    if (nextIndex !== activeIndex && !isIndexOutOfBounds(elementsRef, nextIndex)) {
      event.stopPropagation();
      if (preventedKeys.includes(event.key)) {
        event.preventDefault();
      }
      onNavigate(nextIndex);
      queueMicrotask(() => {
        enqueueFocus(elementsRef.current[nextIndex]);
      });
    }
  }
  const computedProps = {
    ...props,
    ...renderElementProps,
    ref: forwardedRef,
    "aria-orientation": orientation === "both" ? void 0 : orientation,
    onKeyDown(e) {
      props.onKeyDown == null || props.onKeyDown(e);
      renderElementProps.onKeyDown == null || renderElementProps.onKeyDown(e);
      handleKeyDown(e);
    }
  };
  return React5.createElement(CompositeContext.Provider, {
    value: contextValue
  }, React5.createElement(FloatingList, {
    elementsRef
  }, renderJsx(render, computedProps)));
});
var CompositeItem = React5.forwardRef(function CompositeItem2(_ref2, forwardedRef) {
  let {
    render,
    ...props
  } = _ref2;
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const {
    activeIndex,
    onNavigate
  } = React5.useContext(CompositeContext);
  const {
    ref,
    index: index3
  } = useListItem();
  const mergedRef = useMergeRefs([ref, forwardedRef, renderElementProps.ref]);
  const isActive = activeIndex === index3;
  const computedProps = {
    ...props,
    ...renderElementProps,
    ref: mergedRef,
    tabIndex: isActive ? 0 : -1,
    "data-active": isActive ? "" : void 0,
    onFocus(e) {
      props.onFocus == null || props.onFocus(e);
      renderElementProps.onFocus == null || renderElementProps.onFocus(e);
      onNavigate(index3);
    }
  };
  return renderJsx(render, computedProps);
});
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var serverHandoffComplete = false;
var count = 0;
var genId = () => "floating-ui-" + count++;
function useFloatingId() {
  const [id, setId] = React5.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React5.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
var useReactId = React5["useId".toString()];
var useId3 = useReactId || useFloatingId;
var FloatingArrow = React5.forwardRef(function FloatingArrow2(_ref, ref) {
  let {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow: arrow3
      }
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d,
    style: {
      transform,
      ...restStyle
    } = {},
    ...rest
  } = _ref;
  if (true) {
    if (!ref) {
      console.warn("Floating UI: The `ref` prop is required for the `FloatingArrow`", "component.");
    }
  }
  const clipPathId = useId3();
  if (!floating) {
    return null;
  }
  strokeWidth *= 2;
  const halfStrokeWidth = strokeWidth / 2;
  const svgX = width / 2 * (tipRadius / -8 + 1);
  const svgY = height / 2 * tipRadius / 4;
  const [side, alignment] = placement.split("-");
  const isRTL = platform.isRTL(floating);
  const isCustomShape = !!d;
  const isVerticalSide = side === "top" || side === "bottom";
  const yOffsetProp = staticOffset && alignment === "end" ? "bottom" : "top";
  let xOffsetProp = staticOffset && alignment === "end" ? "right" : "left";
  if (staticOffset && isRTL) {
    xOffsetProp = alignment === "end" ? "left" : "right";
  }
  const arrowX = (arrow3 == null ? void 0 : arrow3.x) != null ? staticOffset || arrow3.x : "";
  const arrowY = (arrow3 == null ? void 0 : arrow3.y) != null ? staticOffset || arrow3.y : "";
  const dValue = d || // biome-ignore lint/style/useTemplate: readability
  "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
  const rotation = {
    top: isCustomShape ? "rotate(180deg)" : "",
    left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: isCustomShape ? "" : "rotate(180deg)",
    right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
  }[side];
  return React5.createElement("svg", _extends2({}, rest, {
    "aria-hidden": true,
    ref,
    width: isCustomShape ? width : width + strokeWidth,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [xOffsetProp]: arrowX,
      [yOffsetProp]: arrowY,
      [side]: isVerticalSide || isCustomShape ? "100%" : "calc(100% - " + strokeWidth / 2 + "px)",
      transform: "" + rotation + (transform != null ? transform : ""),
      ...restStyle
    }
  }), strokeWidth > 0 && React5.createElement("path", {
    clipPath: "url(#" + clipPathId + ")",
    fill: "none",
    stroke,
    strokeWidth: strokeWidth + (d ? 0 : 1),
    d: dValue
  }), React5.createElement("path", {
    stroke: strokeWidth && !d ? rest.fill : "none",
    d: dValue
  }), React5.createElement("clipPath", {
    id: clipPathId
  }, React5.createElement("rect", {
    x: -halfStrokeWidth,
    y: halfStrokeWidth * (isCustomShape ? -1 : 1),
    width: width + strokeWidth,
    height: width
  })));
});
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l) => l !== listener)) || []);
    }
  };
}
var FloatingNodeContext = React5.createContext(null);
var FloatingTreeContext = React5.createContext(null);
var useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React5.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
var useFloatingTree = () => React5.useContext(FloatingTreeContext);
function createAttribute(name) {
  return "data-floating-ui-" + name;
}
function useLatestRef2(value) {
  const ref = (0, import_react23.useRef)(value);
  index2(() => {
    ref.current = value;
  });
  return ref;
}
var safePolygonIdentifier = createAttribute("safe-polygon");
function getDelay(value, prop, pointerType) {
  if (pointerType && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === "number") {
    return value;
  }
  return value == null ? void 0 : value[prop];
}
function useHover(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    elements: {
      domReference,
      floating
    },
    refs
  } = context;
  const {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = props;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = useLatestRef2(handleClose);
  const delayRef = useLatestRef2(delay);
  const pointerTypeRef = React5.useRef();
  const timeoutRef = React5.useRef();
  const handlerRef = React5.useRef();
  const restTimeoutRef = React5.useRef();
  const blockMouseMoveRef = React5.useRef(true);
  const performedPointerEventsMutationRef = React5.useRef(false);
  const unbindMouseMoveRef = React5.useRef(() => {
  });
  const isHoverOpen = React5.useCallback(() => {
    var _dataRef$current$open;
    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
  }, [dataRef]);
  React5.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onOpenChange2(_ref) {
      let {
        open: open2
      } = _ref;
      if (!open2) {
        clearTimeout(timeoutRef.current);
        clearTimeout(restTimeoutRef.current);
        blockMouseMoveRef.current = true;
      }
    }
    events.on("openchange", onOpenChange2);
    return () => {
      events.off("openchange", onOpenChange2);
    };
  }, [enabled, events]);
  React5.useEffect(() => {
    if (!enabled || !handleCloseRef.current || !open) {
      return;
    }
    function onLeave(event) {
      if (isHoverOpen()) {
        onOpenChange(false, event, "hover");
      }
    }
    const html = getDocument(floating).documentElement;
    html.addEventListener("mouseleave", onLeave);
    return () => {
      html.removeEventListener("mouseleave", onLeave);
    };
  }, [floating, open, onOpenChange, enabled, handleCloseRef, isHoverOpen]);
  const closeWithDelay = React5.useCallback(function(event, runElseBranch, reason) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }
    if (reason === void 0) {
      reason = "hover";
    }
    const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
    if (closeDelay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => onOpenChange(false, event, reason), closeDelay);
    } else if (runElseBranch) {
      clearTimeout(timeoutRef.current);
      onOpenChange(false, event, reason);
    }
  }, [delayRef, onOpenChange]);
  const cleanupMouseMoveHandler = React5.useCallback(() => {
    unbindMouseMoveRef.current();
    handlerRef.current = void 0;
  }, []);
  const clearPointerEvents = React5.useCallback(() => {
    if (performedPointerEventsMutationRef.current) {
      const body = getDocument(refs.floating.current).body;
      body.style.pointerEvents = "";
      body.removeAttribute(safePolygonIdentifier);
      performedPointerEventsMutationRef.current = false;
    }
  }, [refs]);
  React5.useEffect(() => {
    if (!enabled) {
      return;
    }
    function isClickLikeOpenEvent() {
      return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
    }
    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;
      if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMs > 0 && getDelay(delayRef.current, "open") === 0) {
        return;
      }
      const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
      if (openDelay) {
        timeoutRef.current = setTimeout(() => {
          onOpenChange(true, event, "hover");
        }, openDelay);
      } else {
        onOpenChange(true, event, "hover");
      }
    }
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      unbindMouseMoveRef.current();
      const doc = getDocument(floating);
      clearTimeout(restTimeoutRef.current);
      if (handleCloseRef.current) {
        if (!open) {
          clearTimeout(timeoutRef.current);
        }
        handlerRef.current = handleCloseRef.current({
          ...context,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            closeWithDelay(event, true, "safe-polygon");
          }
        });
        const handler = handlerRef.current;
        doc.addEventListener("mousemove", handler);
        unbindMouseMoveRef.current = () => {
          doc.removeEventListener("mousemove", handler);
        };
        return;
      }
      const shouldClose = pointerTypeRef.current === "touch" ? !contains(floating, event.relatedTarget) : true;
      if (shouldClose) {
        closeWithDelay(event);
      }
    }
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      handleCloseRef.current == null || handleCloseRef.current({
        ...context,
        tree,
        x: event.clientX,
        y: event.clientY,
        onClose() {
          clearPointerEvents();
          cleanupMouseMoveHandler();
          closeWithDelay(event);
        }
      })(event);
    }
    if (isElement(domReference)) {
      const ref = domReference;
      open && ref.addEventListener("mouseleave", onScrollMouseLeave);
      floating == null || floating.addEventListener("mouseleave", onScrollMouseLeave);
      move && ref.addEventListener("mousemove", onMouseEnter, {
        once: true
      });
      ref.addEventListener("mouseenter", onMouseEnter);
      ref.addEventListener("mouseleave", onMouseLeave);
      return () => {
        open && ref.removeEventListener("mouseleave", onScrollMouseLeave);
        floating == null || floating.removeEventListener("mouseleave", onScrollMouseLeave);
        move && ref.removeEventListener("mousemove", onMouseEnter);
        ref.removeEventListener("mouseenter", onMouseEnter);
        ref.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, [domReference, floating, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, tree, delayRef, handleCloseRef, dataRef]);
  index2(() => {
    var _handleCloseRef$curre;
    if (!enabled) {
      return;
    }
    if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
      const body = getDocument(floating).body;
      body.setAttribute(safePolygonIdentifier, "");
      body.style.pointerEvents = "none";
      performedPointerEventsMutationRef.current = true;
      if (isElement(domReference) && floating) {
        var _tree$nodesRef$curren;
        const ref = domReference;
        const parentFloating = tree == null || (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null || (_tree$nodesRef$curren = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren.elements.floating;
        if (parentFloating) {
          parentFloating.style.pointerEvents = "";
        }
        ref.style.pointerEvents = "auto";
        floating.style.pointerEvents = "auto";
        return () => {
          ref.style.pointerEvents = "";
          floating.style.pointerEvents = "";
        };
      }
    }
  }, [enabled, open, parentId, floating, domReference, tree, handleCloseRef, isHoverOpen]);
  index2(() => {
    if (!open) {
      pointerTypeRef.current = void 0;
      cleanupMouseMoveHandler();
      clearPointerEvents();
    }
  }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
  React5.useEffect(() => {
    return () => {
      cleanupMouseMoveHandler();
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      clearPointerEvents();
    };
  }, [enabled, domReference, cleanupMouseMoveHandler, clearPointerEvents]);
  return React5.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    return {
      reference: {
        onPointerDown: setPointerRef,
        onPointerEnter: setPointerRef,
        onMouseMove(event) {
          if (open || restMs === 0) {
            return;
          }
          clearTimeout(restTimeoutRef.current);
          restTimeoutRef.current = setTimeout(() => {
            if (!blockMouseMoveRef.current) {
              onOpenChange(true, event.nativeEvent, "hover");
            }
          }, restMs);
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(timeoutRef.current);
        },
        onMouseLeave(event) {
          closeWithDelay(event.nativeEvent, false);
        }
      }
    };
  }, [enabled, restMs, open, onOpenChange, closeWithDelay]);
}
var FloatingDelayGroupContext = React5.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: false
});
function getAncestors(nodes, id) {
  var _nodes$find;
  let allAncestors = [];
  let currentParentId = (_nodes$find = nodes.find((node) => node.id === id)) == null ? void 0 : _nodes$find.parentId;
  while (currentParentId) {
    const currentNode = nodes.find((node) => node.id === currentParentId);
    currentParentId = currentNode == null ? void 0 : currentNode.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}
function getChildren(nodes, id) {
  let allChildren = nodes.filter((node) => {
    var _node$context;
    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  });
  let currentChildren = allChildren;
  while (currentChildren.length) {
    currentChildren = nodes.filter((node) => {
      var _currentChildren;
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n) => {
        var _node$context2;
        return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    });
    allChildren = allChildren.concat(currentChildren);
  }
  return allChildren;
}
function getDeepestNode(nodes, id) {
  let deepestNodeId;
  let maxDepth = -1;
  function findDeepest(nodeId, depth) {
    if (depth > maxDepth) {
      deepestNodeId = nodeId;
      maxDepth = depth;
    }
    const children = getChildren(nodes, nodeId);
    children.forEach((child) => {
      findDeepest(child.id, depth + 1);
    });
  }
  findDeepest(id, 0);
  return nodes.find((node) => node.id === deepestNodeId);
}
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledElementsSet = /* @__PURE__ */ new WeakSet();
var markerMap = {};
var lockCount = 0;
var supportsInert = () => typeof HTMLElement !== "undefined" && "inert" in HTMLElement.prototype;
var unwrapHost = (node) => node && (node.host || unwrapHost(node.parentNode));
var correctElements = (parent, targets) => targets.map((target) => {
  if (parent.contains(target)) {
    return target;
  }
  const correctedTarget = unwrapHost(target);
  if (parent.contains(correctedTarget)) {
    return correctedTarget;
  }
  return null;
}).filter((x) => x != null);
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert) {
  const markerName = "data-floating-ui-inert";
  const controlAttribute = inert ? "inert" : ariaHidden ? "aria-hidden" : null;
  const avoidElements = correctElements(body, uncorrectedAvoidElements);
  const elementsToKeep = /* @__PURE__ */ new Set();
  const elementsToStop = new Set(avoidElements);
  const hiddenElements = [];
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  const markerCounter = markerMap[markerName];
  avoidElements.forEach(keep);
  deep(body);
  elementsToKeep.clear();
  function keep(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    el.parentNode && keep(el.parentNode);
  }
  function deep(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, (node) => {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        const attr2 = controlAttribute ? node.getAttribute(controlAttribute) : null;
        const alreadyHidden = attr2 !== null && attr2 !== "false";
        const counterValue = (counterMap.get(node) || 0) + 1;
        const markerValue = (markerCounter.get(node) || 0) + 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        hiddenElements.push(node);
        if (counterValue === 1 && alreadyHidden) {
          uncontrolledElementsSet.add(node);
        }
        if (markerValue === 1) {
          node.setAttribute(markerName, "");
        }
        if (!alreadyHidden && controlAttribute) {
          node.setAttribute(controlAttribute, "true");
        }
      }
    });
  }
  lockCount++;
  return () => {
    hiddenElements.forEach((element) => {
      const counterValue = (counterMap.get(element) || 0) - 1;
      const markerValue = (markerCounter.get(element) || 0) - 1;
      counterMap.set(element, counterValue);
      markerCounter.set(element, markerValue);
      if (!counterValue) {
        if (!uncontrolledElementsSet.has(element) && controlAttribute) {
          element.removeAttribute(controlAttribute);
        }
        uncontrolledElementsSet.delete(element);
      }
      if (!markerValue) {
        element.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledElementsSet = /* @__PURE__ */ new WeakSet();
      markerMap = {};
    }
  };
}
function markOthers(avoidElements, ariaHidden, inert) {
  if (ariaHidden === void 0) {
    ariaHidden = false;
  }
  if (inert === void 0) {
    inert = false;
  }
  const body = getDocument(avoidElements[0]).body;
  return applyAttributeToOthers(avoidElements.concat(Array.from(body.querySelectorAll("[aria-live]"))), body, ariaHidden, inert);
}
var getTabbableOptions = () => ({
  getShadowRoot: true,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function getTabbableIn(container, direction) {
  const allTabbable = tabbable(container, getTabbableOptions());
  if (direction === "prev") {
    allTabbable.reverse();
  }
  const activeIndex = allTabbable.indexOf(activeElement(getDocument(container)));
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
function getNextTabbable() {
  return getTabbableIn(document.body, "next");
}
function getPreviousTabbable() {
  return getTabbableIn(document.body, "prev");
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = tabbable(container, getTabbableOptions());
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
function enableFocusInside(container) {
  const elements = container.querySelectorAll("[data-tabindex]");
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}
var HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
var timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    event.target;
    clearTimeout(timeoutId);
  }
}
var FocusGuard = React5.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React5.useState();
  index2(() => {
    if (isSafari()) {
      setRole("button");
    }
    document.addEventListener("keydown", setActiveElementOnTab);
    return () => {
      document.removeEventListener("keydown", setActiveElementOnTab);
    };
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    "aria-hidden": role ? void 0 : true,
    [createAttribute("focus-guard")]: "",
    style: HIDDEN_STYLES
  };
  return React5.createElement("span", _extends2({}, props, restProps));
});
var PortalContext = React5.createContext(null);
var attr = createAttribute("portal");
function useFloatingPortalNode(_temp) {
  let {
    id,
    root
  } = _temp === void 0 ? {} : _temp;
  const [portalNode, setPortalNode] = React5.useState(null);
  const uniqueId = useId3();
  const portalContext = usePortalContext();
  const portalNodeRef = React5.useRef(null);
  index2(() => {
    return () => {
      portalNode == null || portalNode.remove();
      queueMicrotask(() => {
        portalNodeRef.current = null;
      });
    };
  }, [portalNode]);
  index2(() => {
    if (portalNodeRef.current) return;
    const existingIdRoot = id ? document.getElementById(id) : null;
    if (!existingIdRoot) return;
    const subRoot = document.createElement("div");
    subRoot.id = uniqueId;
    subRoot.setAttribute(attr, "");
    existingIdRoot.appendChild(subRoot);
    portalNodeRef.current = subRoot;
    setPortalNode(subRoot);
  }, [id, uniqueId]);
  index2(() => {
    if (portalNodeRef.current) return;
    let container = root || (portalContext == null ? void 0 : portalContext.portalNode);
    if (container && !isElement(container)) container = container.current;
    container = container || document.body;
    let idWrapper = null;
    if (id) {
      idWrapper = document.createElement("div");
      idWrapper.id = id;
      container.appendChild(idWrapper);
    }
    const subRoot = document.createElement("div");
    subRoot.id = uniqueId;
    subRoot.setAttribute(attr, "");
    container = idWrapper || container;
    container.appendChild(subRoot);
    portalNodeRef.current = subRoot;
    setPortalNode(subRoot);
  }, [id, root, uniqueId, portalContext]);
  return portalNode;
}
function FloatingPortal(_ref) {
  let {
    children,
    id,
    root = null,
    preserveTabOrder = true
  } = _ref;
  const portalNode = useFloatingPortalNode({
    id,
    root
  });
  const [focusManagerState, setFocusManagerState] = React5.useState(null);
  const beforeOutsideRef = React5.useRef(null);
  const afterOutsideRef = React5.useRef(null);
  const beforeInsideRef = React5.useRef(null);
  const afterInsideRef = React5.useRef(null);
  const shouldRenderGuards = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!focusManagerState && // Guards are only for non-modal focus management.
    !focusManagerState.modal && // Don't render if unmount is transitioning.
    focusManagerState.open && preserveTabOrder && !!(root || portalNode)
  );
  React5.useEffect(() => {
    if (!portalNode || !preserveTabOrder || focusManagerState != null && focusManagerState.modal) {
      return;
    }
    function onFocus(event) {
      if (portalNode && isOutsideEvent(event)) {
        const focusing = event.type === "focusin";
        const manageFocus = focusing ? enableFocusInside : disableFocusInside;
        manageFocus(portalNode);
      }
    }
    portalNode.addEventListener("focusin", onFocus, true);
    portalNode.addEventListener("focusout", onFocus, true);
    return () => {
      portalNode.removeEventListener("focusin", onFocus, true);
      portalNode.removeEventListener("focusout", onFocus, true);
    };
  }, [portalNode, preserveTabOrder, focusManagerState == null ? void 0 : focusManagerState.modal]);
  return React5.createElement(PortalContext.Provider, {
    value: React5.useMemo(() => ({
      preserveTabOrder,
      beforeOutsideRef,
      afterOutsideRef,
      beforeInsideRef,
      afterInsideRef,
      portalNode,
      setFocusManagerState
    }), [preserveTabOrder, portalNode])
  }, shouldRenderGuards && portalNode && React5.createElement(FocusGuard, {
    "data-type": "outside",
    ref: beforeOutsideRef,
    onFocus: (event) => {
      if (isOutsideEvent(event, portalNode)) {
        var _beforeInsideRef$curr;
        (_beforeInsideRef$curr = beforeInsideRef.current) == null || _beforeInsideRef$curr.focus();
      } else {
        const prevTabbable = getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        prevTabbable == null || prevTabbable.focus();
      }
    }
  }), shouldRenderGuards && portalNode && React5.createElement("span", {
    "aria-owns": portalNode.id,
    style: HIDDEN_STYLES
  }), portalNode && (0, import_react_dom3.createPortal)(children, portalNode), shouldRenderGuards && portalNode && React5.createElement(FocusGuard, {
    "data-type": "outside",
    ref: afterOutsideRef,
    onFocus: (event) => {
      if (isOutsideEvent(event, portalNode)) {
        var _afterInsideRef$curre;
        (_afterInsideRef$curre = afterInsideRef.current) == null || _afterInsideRef$curre.focus();
      } else {
        const nextTabbable = getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        nextTabbable == null || nextTabbable.focus();
        (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false, event.nativeEvent));
      }
    }
  }));
}
var usePortalContext = () => React5.useContext(PortalContext);
var LIST_LIMIT = 20;
var previouslyFocusedElements = [];
function addPreviouslyFocusedElement(element) {
  previouslyFocusedElements = previouslyFocusedElements.filter((el) => el.isConnected);
  let tabbableEl = element;
  if (!tabbableEl || getNodeName(tabbableEl) === "body") return;
  if (!isTabbable(tabbableEl, getTabbableOptions())) {
    const tabbableChild = tabbable(tabbableEl, getTabbableOptions())[0];
    if (!tabbableChild) return;
    tabbableEl = tabbableChild;
  }
  previouslyFocusedElements.push(tabbableEl);
  if (previouslyFocusedElements.length > LIST_LIMIT) {
    previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
  }
}
function getPreviouslyFocusedElement() {
  return previouslyFocusedElements.slice().reverse().find((el) => el.isConnected);
}
var VisuallyHiddenDismiss = React5.forwardRef(function VisuallyHiddenDismiss2(props, ref) {
  return React5.createElement("button", _extends2({}, props, {
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
});
function FloatingFocusManager(props) {
  const {
    context,
    children,
    disabled = false,
    order = ["content"],
    guards: _guards = true,
    initialFocus = 0,
    returnFocus = true,
    modal = true,
    visuallyHiddenDismiss = false,
    closeOnFocusOut = true
  } = props;
  const {
    open,
    refs,
    nodeId,
    onOpenChange,
    events,
    dataRef,
    elements: {
      domReference,
      floating
    }
  } = context;
  const ignoreInitialFocus = typeof initialFocus === "number" && initialFocus < 0;
  const isUntrappedTypeableCombobox = isTypeableCombobox(domReference) && ignoreInitialFocus;
  const guards = supportsInert() ? _guards : true;
  const orderRef = useLatestRef2(order);
  const initialFocusRef = useLatestRef2(initialFocus);
  const returnFocusRef = useLatestRef2(returnFocus);
  const tree = useFloatingTree();
  const portalContext = usePortalContext();
  const startDismissButtonRef = React5.useRef(null);
  const endDismissButtonRef = React5.useRef(null);
  const preventReturnFocusRef = React5.useRef(false);
  const isPointerDownRef = React5.useRef(false);
  const isInsidePortal = portalContext != null;
  const getTabbableContent = React5.useCallback(function(container) {
    if (container === void 0) {
      container = floating;
    }
    return container ? tabbable(container, getTabbableOptions()) : [];
  }, [floating]);
  const getTabbableElements = React5.useCallback((container) => {
    const content = getTabbableContent(container);
    return orderRef.current.map((type) => {
      if (domReference && type === "reference") {
        return domReference;
      }
      if (floating && type === "floating") {
        return floating;
      }
      return content;
    }).filter(Boolean).flat();
  }, [domReference, floating, orderRef, getTabbableContent]);
  React5.useEffect(() => {
    if (disabled || !modal) return;
    function onKeyDown(event) {
      if (event.key === "Tab") {
        if (contains(floating, activeElement(getDocument(floating))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
          stopEvent(event);
        }
        const els = getTabbableElements();
        const target = getTarget(event);
        if (orderRef.current[0] === "reference" && target === domReference) {
          stopEvent(event);
          if (event.shiftKey) {
            enqueueFocus(els[els.length - 1]);
          } else {
            enqueueFocus(els[1]);
          }
        }
        if (orderRef.current[1] === "floating" && target === floating && event.shiftKey) {
          stopEvent(event);
          enqueueFocus(els[0]);
        }
      }
    }
    const doc = getDocument(floating);
    doc.addEventListener("keydown", onKeyDown);
    return () => {
      doc.removeEventListener("keydown", onKeyDown);
    };
  }, [disabled, domReference, floating, modal, orderRef, isUntrappedTypeableCombobox, getTabbableContent, getTabbableElements]);
  React5.useEffect(() => {
    if (disabled || !closeOnFocusOut) return;
    function handlePointerDown() {
      isPointerDownRef.current = true;
      setTimeout(() => {
        isPointerDownRef.current = false;
      });
    }
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      queueMicrotask(() => {
        const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || relatedTarget != null && relatedTarget.hasAttribute(createAttribute("focus-guard")) || tree && (getChildren(tree.nodesRef.current, nodeId).find((node) => {
          var _node$context, _node$context2;
          return contains((_node$context = node.context) == null ? void 0 : _node$context.elements.floating, relatedTarget) || contains((_node$context2 = node.context) == null ? void 0 : _node$context2.elements.domReference, relatedTarget);
        }) || getAncestors(tree.nodesRef.current, nodeId).find((node) => {
          var _node$context3, _node$context4;
          return ((_node$context3 = node.context) == null ? void 0 : _node$context3.elements.floating) === relatedTarget || ((_node$context4 = node.context) == null ? void 0 : _node$context4.elements.domReference) === relatedTarget;
        })));
        if (relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        relatedTarget !== getPreviouslyFocusedElement()) {
          preventReturnFocusRef.current = true;
          onOpenChange(false, event);
        }
      });
    }
    if (floating && isHTMLElement(domReference)) {
      domReference.addEventListener("focusout", handleFocusOutside);
      domReference.addEventListener("pointerdown", handlePointerDown);
      !modal && floating.addEventListener("focusout", handleFocusOutside);
      return () => {
        domReference.removeEventListener("focusout", handleFocusOutside);
        domReference.removeEventListener("pointerdown", handlePointerDown);
        !modal && floating.removeEventListener("focusout", handleFocusOutside);
      };
    }
  }, [disabled, domReference, floating, modal, nodeId, tree, portalContext, onOpenChange, closeOnFocusOut]);
  React5.useEffect(() => {
    var _portalContext$portal;
    if (disabled) return;
    const portalNodes = Array.from((portalContext == null || (_portalContext$portal = portalContext.portalNode) == null ? void 0 : _portalContext$portal.querySelectorAll("[" + createAttribute("portal") + "]")) || []);
    if (floating) {
      const insideElements = [floating, ...portalNodes, startDismissButtonRef.current, endDismissButtonRef.current, orderRef.current.includes("reference") || isUntrappedTypeableCombobox ? domReference : null].filter((x) => x != null);
      const cleanup = modal || isUntrappedTypeableCombobox ? markOthers(insideElements, guards, !guards) : markOthers(insideElements);
      return () => {
        cleanup();
      };
    }
  }, [disabled, domReference, floating, modal, orderRef, portalContext, isUntrappedTypeableCombobox, guards]);
  index2(() => {
    if (disabled || !floating) return;
    const doc = getDocument(floating);
    const previouslyFocusedElement = activeElement(doc);
    queueMicrotask(() => {
      const focusableElements = getTabbableElements(floating);
      const initialFocusValue = initialFocusRef.current;
      const elToFocus = (typeof initialFocusValue === "number" ? focusableElements[initialFocusValue] : initialFocusValue.current) || floating;
      const focusAlreadyInsideFloatingEl = contains(floating, previouslyFocusedElement);
      if (!ignoreInitialFocus && !focusAlreadyInsideFloatingEl && open) {
        enqueueFocus(elToFocus, {
          preventScroll: elToFocus === floating
        });
      }
    });
  }, [disabled, open, floating, ignoreInitialFocus, getTabbableElements, initialFocusRef]);
  index2(() => {
    if (disabled || !floating) return;
    let preventReturnFocusScroll = false;
    const doc = getDocument(floating);
    const previouslyFocusedElement = activeElement(doc);
    const contextData = dataRef.current;
    addPreviouslyFocusedElement(previouslyFocusedElement);
    function onOpenChange2(_ref) {
      let {
        reason,
        event,
        nested
      } = _ref;
      if (reason === "escape-key" && refs.domReference.current) {
        addPreviouslyFocusedElement(refs.domReference.current);
      }
      if (reason === "hover" && event.type === "mouseleave") {
        preventReturnFocusRef.current = true;
      }
      if (reason !== "outside-press") return;
      if (nested) {
        preventReturnFocusRef.current = false;
        preventReturnFocusScroll = true;
      } else {
        preventReturnFocusRef.current = !(isVirtualClick(event) || isVirtualPointerEvent(event));
      }
    }
    events.on("openchange", onOpenChange2);
    return () => {
      events.off("openchange", onOpenChange2);
      const activeEl = activeElement(doc);
      const isFocusInsideFloatingTree = contains(floating, activeEl) || tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
        var _node$context5;
        return contains((_node$context5 = node.context) == null ? void 0 : _node$context5.elements.floating, activeEl);
      });
      const shouldFocusReference = isFocusInsideFloatingTree || contextData.openEvent && ["click", "mousedown"].includes(contextData.openEvent.type);
      if (shouldFocusReference && refs.domReference.current) {
        addPreviouslyFocusedElement(refs.domReference.current);
      }
      const returnElement = getPreviouslyFocusedElement();
      if (returnFocusRef.current && !preventReturnFocusRef.current && isHTMLElement(returnElement) && // If the focus moved somewhere else after mount, avoid returning focus
      // since it likely entered a different element which should be
      // respected: https://github.com/floating-ui/floating-ui/issues/2607
      (returnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
        enqueueFocus(returnElement, {
          // When dismissing nested floating elements, by the time the rAF has
          // executed, the menus will all have been unmounted. When they try
          // to get focused, the calls get ignored — leaving the root
          // reference focused as desired.
          cancelPrevious: false,
          preventScroll: preventReturnFocusScroll
        });
      }
    };
  }, [disabled, floating, returnFocusRef, dataRef, refs, events, tree, nodeId]);
  index2(() => {
    if (disabled || !portalContext) return;
    portalContext.setFocusManagerState({
      modal,
      closeOnFocusOut,
      open,
      onOpenChange,
      refs
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [disabled, portalContext, modal, open, onOpenChange, refs, closeOnFocusOut]);
  index2(() => {
    if (disabled || !floating || typeof MutationObserver !== "function" || ignoreInitialFocus) {
      return;
    }
    const handleMutation = () => {
      const tabIndex = floating.getAttribute("tabindex");
      if (orderRef.current.includes("floating") || activeElement(getDocument(floating)) !== refs.domReference.current && getTabbableContent().length === 0) {
        if (tabIndex !== "0") {
          floating.setAttribute("tabindex", "0");
        }
      } else if (tabIndex !== "-1") {
        floating.setAttribute("tabindex", "-1");
      }
    };
    handleMutation();
    const observer = new MutationObserver(handleMutation);
    observer.observe(floating, {
      childList: true,
      subtree: true,
      attributes: true
    });
    return () => {
      observer.disconnect();
    };
  }, [disabled, floating, refs, orderRef, getTabbableContent, ignoreInitialFocus]);
  function renderDismissButton(location) {
    if (disabled || !visuallyHiddenDismiss || !modal) {
      return null;
    }
    return React5.createElement(VisuallyHiddenDismiss, {
      ref: location === "start" ? startDismissButtonRef : endDismissButtonRef,
      onClick: (event) => onOpenChange(false, event.nativeEvent)
    }, typeof visuallyHiddenDismiss === "string" ? visuallyHiddenDismiss : "Dismiss");
  }
  const shouldRenderGuards = !disabled && guards && (isInsidePortal || modal);
  return React5.createElement(React5.Fragment, null, shouldRenderGuards && React5.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.beforeInsideRef,
    onFocus: (event) => {
      if (modal) {
        const els = getTabbableElements();
        enqueueFocus(order[0] === "reference" ? els[0] : els[els.length - 1]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = false;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const nextTabbable = getNextTabbable() || domReference;
          nextTabbable == null || nextTabbable.focus();
        } else {
          var _portalContext$before;
          (_portalContext$before = portalContext.beforeOutsideRef.current) == null || _portalContext$before.focus();
        }
      }
    }
  }), !isUntrappedTypeableCombobox && renderDismissButton("start"), children, renderDismissButton("end"), shouldRenderGuards && React5.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.afterInsideRef,
    onFocus: (event) => {
      if (modal) {
        enqueueFocus(getTabbableElements()[0]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        if (closeOnFocusOut) {
          preventReturnFocusRef.current = true;
        }
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const prevTabbable = getPreviousTabbable() || domReference;
          prevTabbable == null || prevTabbable.focus();
        } else {
          var _portalContext$afterO;
          (_portalContext$afterO = portalContext.afterOutsideRef.current) == null || _portalContext$afterO.focus();
        }
      }
    }
  }));
}
var activeLocks = /* @__PURE__ */ new Set();
var FloatingOverlay = React5.forwardRef(function FloatingOverlay2(_ref, ref) {
  let {
    lockScroll = false,
    ...rest
  } = _ref;
  const lockId = useId3();
  index2(() => {
    if (!lockScroll) return;
    activeLocks.add(lockId);
    const isIOS = /iP(hone|ad|od)|iOS/.test(getPlatform());
    const bodyStyle = document.body.style;
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.pageXOffset;
    const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.pageYOffset;
    bodyStyle.overflow = "hidden";
    if (scrollbarWidth) {
      bodyStyle[paddingProp] = scrollbarWidth + "px";
    }
    if (isIOS) {
      var _window$visualViewpor, _window$visualViewpor2;
      const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
      const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
      Object.assign(bodyStyle, {
        position: "fixed",
        top: -(scrollY - Math.floor(offsetTop)) + "px",
        left: -(scrollX - Math.floor(offsetLeft)) + "px",
        right: "0"
      });
    }
    return () => {
      activeLocks.delete(lockId);
      if (activeLocks.size === 0) {
        Object.assign(bodyStyle, {
          overflow: "",
          [paddingProp]: ""
        });
        if (isIOS) {
          Object.assign(bodyStyle, {
            position: "",
            top: "",
            left: "",
            right: ""
          });
          window.scrollTo(scrollX, scrollY);
        }
      }
    };
  }, [lockId, lockScroll]);
  return React5.createElement("div", _extends2({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});
function isButtonTarget(event) {
  return isHTMLElement(event.target) && event.target.tagName === "BUTTON";
}
function isSpaceIgnored(element) {
  return isTypeableElement(element);
}
function useClick(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    elements: {
      domReference
    }
  } = context;
  const {
    enabled = true,
    event: eventOption = "click",
    toggle = true,
    ignoreMouse = false,
    keyboardHandlers = true
  } = props;
  const pointerTypeRef = React5.useRef();
  const didKeyDownRef = React5.useRef(false);
  return React5.useMemo(() => {
    if (!enabled) return {};
    return {
      reference: {
        onPointerDown(event) {
          pointerTypeRef.current = event.pointerType;
        },
        onMouseDown(event) {
          if (event.button !== 0) {
            return;
          }
          if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
            return;
          }
          if (eventOption === "click") {
            return;
          }
          if (open && toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "mousedown" : true)) {
            onOpenChange(false, event.nativeEvent, "click");
          } else {
            event.preventDefault();
            onOpenChange(true, event.nativeEvent, "click");
          }
        },
        onClick(event) {
          if (eventOption === "mousedown" && pointerTypeRef.current) {
            pointerTypeRef.current = void 0;
            return;
          }
          if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
            return;
          }
          if (open && toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "click" : true)) {
            onOpenChange(false, event.nativeEvent, "click");
          } else {
            onOpenChange(true, event.nativeEvent, "click");
          }
        },
        onKeyDown(event) {
          pointerTypeRef.current = void 0;
          if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event)) {
            return;
          }
          if (event.key === " " && !isSpaceIgnored(domReference)) {
            event.preventDefault();
            didKeyDownRef.current = true;
          }
          if (event.key === "Enter") {
            if (open && toggle) {
              onOpenChange(false, event.nativeEvent, "click");
            } else {
              onOpenChange(true, event.nativeEvent, "click");
            }
          }
        },
        onKeyUp(event) {
          if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event) || isSpaceIgnored(domReference)) {
            return;
          }
          if (event.key === " " && didKeyDownRef.current) {
            didKeyDownRef.current = false;
            if (open && toggle) {
              onOpenChange(false, event.nativeEvent, "click");
            } else {
              onOpenChange(true, event.nativeEvent, "click");
            }
          }
        }
      }
    };
  }, [enabled, dataRef, eventOption, ignoreMouse, keyboardHandlers, domReference, toggle, open, onOpenChange]);
}
var bubbleHandlerKeys = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
};
var captureHandlerKeys = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
};
var normalizeProp = (normalizable) => {
  var _normalizable$escapeK, _normalizable$outside;
  return {
    escapeKey: typeof normalizable === "boolean" ? normalizable : (_normalizable$escapeK = normalizable == null ? void 0 : normalizable.escapeKey) != null ? _normalizable$escapeK : false,
    outsidePress: typeof normalizable === "boolean" ? normalizable : (_normalizable$outside = normalizable == null ? void 0 : normalizable.outsidePress) != null ? _normalizable$outside : true
  };
};
function useDismiss(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    nodeId,
    elements: {
      reference,
      domReference,
      floating
    },
    dataRef
  } = context;
  const {
    enabled = true,
    escapeKey = true,
    outsidePress: unstable_outsidePress = true,
    outsidePressEvent = "pointerdown",
    referencePress = false,
    referencePressEvent = "pointerdown",
    ancestorScroll = false,
    bubbles,
    capture
  } = props;
  const tree = useFloatingTree();
  const outsidePressFn = useEffectEvent(typeof unstable_outsidePress === "function" ? unstable_outsidePress : () => false);
  const outsidePress = typeof unstable_outsidePress === "function" ? outsidePressFn : unstable_outsidePress;
  const insideReactTreeRef = React5.useRef(false);
  const endedOrStartedInsideRef = React5.useRef(false);
  const {
    escapeKey: escapeKeyBubbles,
    outsidePress: outsidePressBubbles
  } = normalizeProp(bubbles);
  const {
    escapeKey: escapeKeyCapture,
    outsidePress: outsidePressCapture
  } = normalizeProp(capture);
  const closeOnEscapeKeyDown = useEffectEvent((event) => {
    if (!open || !enabled || !escapeKey || event.key !== "Escape") {
      return;
    }
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (!escapeKeyBubbles) {
      event.stopPropagation();
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach((child) => {
          var _child$context;
          if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
            shouldDismiss = false;
            return;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
    }
    onOpenChange(false, isReactEvent(event) ? event.nativeEvent : event, "escape-key");
  });
  const closeOnEscapeKeyDownCapture = useEffectEvent((event) => {
    var _getTarget2;
    const callback = () => {
      var _getTarget;
      closeOnEscapeKeyDown(event);
      (_getTarget = getTarget(event)) == null || _getTarget.removeEventListener("keydown", callback);
    };
    (_getTarget2 = getTarget(event)) == null || _getTarget2.addEventListener("keydown", callback);
  });
  const closeOnPressOutside = useEffectEvent((event) => {
    const insideReactTree = insideReactTreeRef.current;
    insideReactTreeRef.current = false;
    const endedOrStartedInside = endedOrStartedInsideRef.current;
    endedOrStartedInsideRef.current = false;
    if (outsidePressEvent === "click" && endedOrStartedInside) {
      return;
    }
    if (insideReactTree) {
      return;
    }
    if (typeof outsidePress === "function" && !outsidePress(event)) {
      return;
    }
    const target = getTarget(event);
    const inertSelector = "[" + createAttribute("inert") + "]";
    const markers = getDocument(floating).querySelectorAll(inertSelector);
    let targetRootAncestor = isElement(target) ? target : null;
    while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
      const nextParent = getParentNode(targetRootAncestor);
      if (isLastTraversableNode(nextParent) || !isElement(nextParent)) {
        break;
      }
      targetRootAncestor = nextParent;
    }
    if (markers.length && isElement(target) && !isRootElement(target) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !contains(target, floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(markers).every((marker) => !contains(targetRootAncestor, marker))) {
      return;
    }
    if (isHTMLElement(target) && floating) {
      const canScrollX = target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
      const canScrollY = target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
      let xCond = canScrollY && event.offsetX > target.clientWidth;
      if (canScrollY) {
        const isRTL = getComputedStyle(target).direction === "rtl";
        if (isRTL) {
          xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
        }
      }
      if (xCond || canScrollX && event.offsetY > target.clientHeight) {
        return;
      }
    }
    const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
      var _node$context;
      return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
    });
    if (isEventTargetWithin(event, floating) || isEventTargetWithin(event, domReference) || targetIsInsideChildren) {
      return;
    }
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (children.length > 0) {
      let shouldDismiss = true;
      children.forEach((child) => {
        var _child$context2;
        if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
          shouldDismiss = false;
          return;
        }
      });
      if (!shouldDismiss) {
        return;
      }
    }
    onOpenChange(false, event, "outside-press");
  });
  const closeOnPressOutsideCapture = useEffectEvent((event) => {
    var _getTarget4;
    const callback = () => {
      var _getTarget3;
      closeOnPressOutside(event);
      (_getTarget3 = getTarget(event)) == null || _getTarget3.removeEventListener(outsidePressEvent, callback);
    };
    (_getTarget4 = getTarget(event)) == null || _getTarget4.addEventListener(outsidePressEvent, callback);
  });
  React5.useEffect(() => {
    if (!open || !enabled) {
      return;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    function onScroll(event) {
      onOpenChange(false, event, "ancestor-scroll");
    }
    const doc = getDocument(floating);
    escapeKey && doc.addEventListener("keydown", escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
    outsidePress && doc.addEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
    let ancestors = [];
    if (ancestorScroll) {
      if (isElement(domReference)) {
        ancestors = getOverflowAncestors(domReference);
      }
      if (isElement(floating)) {
        ancestors = ancestors.concat(getOverflowAncestors(floating));
      }
      if (!isElement(reference) && reference && reference.contextElement) {
        ancestors = ancestors.concat(getOverflowAncestors(reference.contextElement));
      }
    }
    ancestors = ancestors.filter((ancestor) => {
      var _doc$defaultView;
      return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
    });
    ancestors.forEach((ancestor) => {
      ancestor.addEventListener("scroll", onScroll, {
        passive: true
      });
    });
    return () => {
      escapeKey && doc.removeEventListener("keydown", escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
      outsidePress && doc.removeEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
      ancestors.forEach((ancestor) => {
        ancestor.removeEventListener("scroll", onScroll);
      });
    };
  }, [dataRef, floating, domReference, reference, escapeKey, outsidePress, outsidePressEvent, open, onOpenChange, ancestorScroll, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, escapeKeyCapture, closeOnEscapeKeyDownCapture, closeOnPressOutside, outsidePressCapture, closeOnPressOutsideCapture]);
  React5.useEffect(() => {
    insideReactTreeRef.current = false;
  }, [outsidePress, outsidePressEvent]);
  return React5.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onKeyDown: closeOnEscapeKeyDown,
        [bubbleHandlerKeys[referencePressEvent]]: (event) => {
          if (referencePress) {
            onOpenChange(false, event.nativeEvent, "reference-press");
          }
        }
      },
      floating: {
        onKeyDown: closeOnEscapeKeyDown,
        onMouseDown() {
          endedOrStartedInsideRef.current = true;
        },
        onMouseUp() {
          endedOrStartedInsideRef.current = true;
        },
        [captureHandlerKeys[outsidePressEvent]]: () => {
          insideReactTreeRef.current = true;
        }
      }
    };
  }, [enabled, referencePress, outsidePressEvent, referencePressEvent, onOpenChange, closeOnEscapeKeyDown]);
}
var devMessageSet;
if (true) {
  devMessageSet = /* @__PURE__ */ new Set();
}
function useFloating2(options) {
  var _options$elements2;
  if (options === void 0) {
    options = {};
  }
  const {
    open = false,
    onOpenChange: unstable_onOpenChange,
    nodeId
  } = options;
  if (true) {
    var _options$elements;
    const err = "Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";
    if ((_options$elements = options.elements) != null && _options$elements.reference && !isElement(options.elements.reference)) {
      var _devMessageSet;
      if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(err))) {
        var _devMessageSet2;
        (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(err);
        console.error(err);
      }
    }
  }
  const [_domReference, setDomReference] = React5.useState(null);
  const domReference = ((_options$elements2 = options.elements) == null ? void 0 : _options$elements2.reference) || _domReference;
  const position = useFloating(options);
  const tree = useFloatingTree();
  const nested = useFloatingParentNodeId() != null;
  const onOpenChange = useEffectEvent((open2, event, reason) => {
    if (open2) {
      dataRef.current.openEvent = event;
    }
    events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    });
    unstable_onOpenChange == null || unstable_onOpenChange(open2, event, reason);
  });
  const domReferenceRef = React5.useRef(null);
  const dataRef = React5.useRef({});
  const events = React5.useState(() => createPubSub())[0];
  const floatingId = useId3();
  const setPositionReference = React5.useCallback((node) => {
    const positionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    position.refs.setReference(positionReference);
  }, [position.refs]);
  const setReference = React5.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React5.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React5.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React5.useMemo(() => ({
    ...position,
    refs,
    elements,
    dataRef,
    nodeId,
    floatingId,
    events,
    open,
    onOpenChange
  }), [position, nodeId, floatingId, events, open, onOpenChange, refs, elements]);
  index2(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React5.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
function useFocus(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    events,
    refs,
    elements: {
      domReference
    }
  } = context;
  const {
    enabled = true,
    visibleOnly = true
  } = props;
  const blockFocusRef = React5.useRef(false);
  const timeoutRef = React5.useRef();
  const keyboardModalityRef = React5.useRef(true);
  React5.useEffect(() => {
    if (!enabled) {
      return;
    }
    const win = getWindow(domReference);
    function onBlur() {
      if (!open && isHTMLElement(domReference) && domReference === activeElement(getDocument(domReference))) {
        blockFocusRef.current = true;
      }
    }
    function onKeyDown() {
      keyboardModalityRef.current = true;
    }
    win.addEventListener("blur", onBlur);
    win.addEventListener("keydown", onKeyDown, true);
    return () => {
      win.removeEventListener("blur", onBlur);
      win.removeEventListener("keydown", onKeyDown, true);
    };
  }, [domReference, open, enabled]);
  React5.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onOpenChange2(_ref) {
      let {
        reason
      } = _ref;
      if (reason === "reference-press" || reason === "escape-key") {
        blockFocusRef.current = true;
      }
    }
    events.on("openchange", onOpenChange2);
    return () => {
      events.off("openchange", onOpenChange2);
    };
  }, [events, enabled]);
  React5.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return React5.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onPointerDown(event) {
          if (isVirtualPointerEvent(event.nativeEvent)) return;
          keyboardModalityRef.current = false;
        },
        onMouseLeave() {
          blockFocusRef.current = false;
        },
        onFocus(event) {
          if (blockFocusRef.current) return;
          const target = getTarget(event.nativeEvent);
          if (visibleOnly && isElement(target)) {
            try {
              if (isSafari() && isMac()) throw Error();
              if (!target.matches(":focus-visible")) return;
            } catch (e) {
              if (!keyboardModalityRef.current && !isTypeableElement(target)) {
                return;
              }
            }
          }
          onOpenChange(true, event.nativeEvent, "focus");
        },
        onBlur(event) {
          blockFocusRef.current = false;
          const relatedTarget = event.relatedTarget;
          const movedToFocusGuard = isElement(relatedTarget) && relatedTarget.hasAttribute(createAttribute("focus-guard")) && relatedTarget.getAttribute("data-type") === "outside";
          timeoutRef.current = window.setTimeout(() => {
            const activeEl = activeElement(domReference ? domReference.ownerDocument : document);
            if (!relatedTarget && activeEl === domReference) return;
            if (contains(refs.floating.current, activeEl) || contains(domReference, activeEl) || movedToFocusGuard) {
              return;
            }
            onOpenChange(false, event.nativeEvent, "focus");
          });
        }
      }
    };
  }, [enabled, visibleOnly, domReference, refs, onOpenChange]);
}
var ACTIVE_KEY = "active";
var SELECTED_KEY = "selected";
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  const isItem = elementKey === "item";
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...elementKey === "floating" && {
      tabIndex: -1
    },
    ...domUserProps,
    ...propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const deps = propsList;
  const getReferenceProps = React5.useCallback((userProps) => mergeProps(userProps, propsList, "reference"), deps);
  const getFloatingProps = React5.useCallback((userProps) => mergeProps(userProps, propsList, "floating"), deps);
  const getItemProps = React5.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    propsList.map((key) => key == null ? void 0 : key.item)
  );
  return React5.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
var isPreventScrollSupported = false;
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case "vertical":
      return vertical;
    case "horizontal":
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key === " " || key === "";
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  return doSwitch(orientation, vertical, horizontal);
}
function useListNavigation(context, props) {
  const {
    open,
    onOpenChange,
    refs,
    elements: {
      domReference,
      floating
    }
  } = context;
  const {
    listRef,
    activeIndex,
    onNavigate: unstable_onNavigate = () => {
    },
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loop = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = "auto",
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = void 0,
    orientation = "vertical",
    cols = 1,
    scrollItemIntoView = true,
    virtualItemRef,
    itemSizes,
    dense = false
  } = props;
  if (true) {
    if (allowEscape) {
      if (!loop) {
        console.warn(["Floating UI: `useListNavigation` looping must be enabled to allow", "escaping."].join(" "));
      }
      if (!virtual) {
        console.warn(["Floating UI: `useListNavigation` must be virtual to allow", "escaping."].join(" "));
      }
    }
    if (orientation === "vertical" && cols > 1) {
      console.warn(["Floating UI: In grid list navigation mode (`cols` > 1), the", '`orientation` should be either "horizontal" or "both".'].join(" "));
    }
  }
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();
  const onNavigate = useEffectEvent(unstable_onNavigate);
  const focusItemOnOpenRef = React5.useRef(focusItemOnOpen);
  const indexRef = React5.useRef(selectedIndex != null ? selectedIndex : -1);
  const keyRef = React5.useRef(null);
  const isPointerModalityRef = React5.useRef(true);
  const previousOnNavigateRef = React5.useRef(onNavigate);
  const previousMountedRef = React5.useRef(!!floating);
  const forceSyncFocus = React5.useRef(false);
  const forceScrollIntoViewRef = React5.useRef(false);
  const disabledIndicesRef = useLatestRef2(disabledIndices);
  const latestOpenRef = useLatestRef2(open);
  const scrollItemIntoViewRef = useLatestRef2(scrollItemIntoView);
  const [activeId, setActiveId] = React5.useState();
  const [virtualId, setVirtualId] = React5.useState();
  const focusItem = useEffectEvent(function(listRef2, indexRef2, forceScrollIntoView) {
    if (forceScrollIntoView === void 0) {
      forceScrollIntoView = false;
    }
    const item2 = listRef2.current[indexRef2.current];
    if (!item2) return;
    if (virtual) {
      setActiveId(item2.id);
      tree == null || tree.events.emit("virtualfocus", item2);
      if (virtualItemRef) {
        virtualItemRef.current = item2;
      }
    } else {
      enqueueFocus(item2, {
        preventScroll: true,
        // Mac Safari does not move the virtual cursor unless the focus call
        // is sync. However, for the very first focus call, we need to wait
        // for the position to be ready in order to prevent unwanted
        // scrolling. This means the virtual cursor will not move to the first
        // item when first opening the floating element, but will on
        // subsequent calls. `preventScroll` is supported in modern Safari,
        // so we can use that instead.
        // iOS Safari must be async or the first item will not be focused.
        sync: isMac() && isSafari() ? isPreventScrollSupported || forceSyncFocus.current : false
      });
    }
    requestAnimationFrame(() => {
      const scrollIntoViewOptions = scrollItemIntoViewRef.current;
      const shouldScrollIntoView = scrollIntoViewOptions && item2 && (forceScrollIntoView || !isPointerModalityRef.current);
      if (shouldScrollIntoView) {
        item2.scrollIntoView == null || item2.scrollIntoView(typeof scrollIntoViewOptions === "boolean" ? {
          block: "nearest",
          inline: "nearest"
        } : scrollIntoViewOptions);
      }
    });
  });
  index2(() => {
    document.createElement("div").focus({
      get preventScroll() {
        isPreventScrollSupported = true;
        return false;
      }
    });
  }, []);
  index2(() => {
    if (!enabled) {
      return;
    }
    if (open && floating) {
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        forceScrollIntoViewRef.current = true;
        indexRef.current = selectedIndex;
        onNavigate(selectedIndex);
      }
    } else if (previousMountedRef.current) {
      indexRef.current = -1;
      previousOnNavigateRef.current(null);
    }
  }, [enabled, open, floating, selectedIndex, onNavigate]);
  index2(() => {
    if (!enabled) {
      return;
    }
    if (open && floating) {
      if (activeIndex == null) {
        forceSyncFocus.current = false;
        if (selectedIndex != null) {
          return;
        }
        if (previousMountedRef.current) {
          indexRef.current = -1;
          focusItem(listRef, indexRef);
        }
        if (!previousMountedRef.current && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
          let runs = 0;
          const waitForListPopulated = () => {
            if (listRef.current[0] == null) {
              if (runs < 2) {
                const scheduler = runs ? requestAnimationFrame : queueMicrotask;
                scheduler(waitForListPopulated);
              }
              runs++;
            } else {
              indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
              keyRef.current = null;
              onNavigate(indexRef.current);
            }
          };
          waitForListPopulated();
        }
      } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
        indexRef.current = activeIndex;
        focusItem(listRef, indexRef, forceScrollIntoViewRef.current);
        forceScrollIntoViewRef.current = false;
      }
    }
  }, [enabled, open, floating, activeIndex, selectedIndex, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]);
  index2(() => {
    var _nodes$find;
    if (!enabled || floating || !tree || virtual || !previousMountedRef.current) {
      return;
    }
    const nodes = tree.nodesRef.current;
    const parent = (_nodes$find = nodes.find((node) => node.id === parentId)) == null || (_nodes$find = _nodes$find.context) == null ? void 0 : _nodes$find.elements.floating;
    const activeEl = activeElement(getDocument(floating));
    const treeContainsActiveEl = nodes.some((node) => node.context && contains(node.context.elements.floating, activeEl));
    if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
      parent.focus({
        preventScroll: true
      });
    }
  }, [enabled, floating, tree, parentId, virtual]);
  index2(() => {
    if (!enabled || !tree || !virtual || parentId) return;
    function handleVirtualFocus(item2) {
      setVirtualId(item2.id);
      if (virtualItemRef) {
        virtualItemRef.current = item2;
      }
    }
    tree.events.on("virtualfocus", handleVirtualFocus);
    return () => {
      tree.events.off("virtualfocus", handleVirtualFocus);
    };
  }, [enabled, tree, virtual, parentId, virtualItemRef]);
  index2(() => {
    previousOnNavigateRef.current = onNavigate;
    previousMountedRef.current = !!floating;
  });
  index2(() => {
    if (!open) {
      keyRef.current = null;
    }
  }, [open]);
  const hasActiveIndex = activeIndex != null;
  const item = React5.useMemo(() => {
    function syncCurrentTarget(currentTarget) {
      if (!open) return;
      const index3 = listRef.current.indexOf(currentTarget);
      if (index3 !== -1) {
        onNavigate(index3);
      }
    }
    const props2 = {
      onFocus(_ref) {
        let {
          currentTarget
        } = _ref;
        syncCurrentTarget(currentTarget);
      },
      onClick: (_ref2) => {
        let {
          currentTarget
        } = _ref2;
        return currentTarget.focus({
          preventScroll: true
        });
      },
      // Safari
      ...focusItemOnHover && {
        onMouseMove(_ref3) {
          let {
            currentTarget
          } = _ref3;
          syncCurrentTarget(currentTarget);
        },
        onPointerLeave(_ref4) {
          let {
            pointerType
          } = _ref4;
          if (!isPointerModalityRef.current || pointerType === "touch") {
            return;
          }
          indexRef.current = -1;
          focusItem(listRef, indexRef);
          onNavigate(null);
          if (!virtual) {
            enqueueFocus(refs.floating.current, {
              preventScroll: true
            });
          }
        }
      }
    };
    return props2;
  }, [open, refs, focusItem, focusItemOnHover, listRef, onNavigate, virtual]);
  return React5.useMemo(() => {
    if (!enabled) {
      return {};
    }
    const disabledIndices2 = disabledIndicesRef.current;
    function onKeyDown(event) {
      isPointerModalityRef.current = false;
      forceSyncFocus.current = true;
      if (!latestOpenRef.current && event.currentTarget === refs.floating.current) {
        return;
      }
      if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
        stopEvent(event);
        onOpenChange(false, event.nativeEvent, "list-navigation");
        if (isHTMLElement(domReference) && !virtual) {
          domReference.focus();
        }
        return;
      }
      const currentIndex = indexRef.current;
      const minIndex = getMinIndex(listRef, disabledIndices2);
      const maxIndex = getMaxIndex(listRef, disabledIndices2);
      if (event.key === "Home") {
        stopEvent(event);
        indexRef.current = minIndex;
        onNavigate(indexRef.current);
      }
      if (event.key === "End") {
        stopEvent(event);
        indexRef.current = maxIndex;
        onNavigate(indexRef.current);
      }
      if (cols > 1) {
        const sizes = itemSizes || Array.from({
          length: listRef.current.length
        }, () => ({
          width: 1,
          height: 1
        }));
        const cellMap = buildCellMap(sizes, cols, dense);
        const minGridIndex = cellMap.findIndex((index3) => index3 != null && !(disabledIndices2 != null && disabledIndices2.includes(index3)));
        const maxGridIndex = cellMap.reduce((foundIndex, index3, cellIndex) => index3 != null && !(disabledIndices2 != null && disabledIndices2.includes(index3)) ? cellIndex : foundIndex, -1);
        indexRef.current = cellMap[getGridNavigatedIndex({
          current: cellMap.map((itemIndex) => itemIndex != null ? listRef.current[itemIndex] : null)
        }, {
          event,
          orientation,
          loop,
          cols,
          // treat undefined (empty grid spaces) as disabled indices so we
          // don't end up in them
          disabledIndices: getCellIndices([...disabledIndices2 || [], void 0], cellMap),
          minIndex: minGridIndex,
          maxIndex: maxGridIndex,
          prevIndex: getCellIndexOfCorner(
            indexRef.current,
            sizes,
            cellMap,
            cols,
            // use a corner matching the edge closest to the direction
            // we're moving in so we don't end up in the same item. Prefer
            // top/left over bottom/right.
            event.key === ARROW_DOWN ? "bl" : event.key === ARROW_RIGHT ? "tr" : "tl"
          ),
          stopEvent: true
        })];
        onNavigate(indexRef.current);
        if (orientation === "both") {
          return;
        }
      }
      if (isMainOrientationKey(event.key, orientation)) {
        stopEvent(event);
        if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
          indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
          onNavigate(indexRef.current);
          return;
        }
        if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
          if (loop) {
            indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices: disabledIndices2
            });
          } else {
            indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices: disabledIndices2
            }));
          }
        } else {
          if (loop) {
            indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices: disabledIndices2
            });
          } else {
            indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices: disabledIndices2
            }));
          }
        }
        if (isIndexOutOfBounds(listRef, indexRef.current)) {
          onNavigate(null);
        } else {
          onNavigate(indexRef.current);
        }
      }
    }
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    function checkVirtualPointer(event) {
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    const ariaActiveDescendantProp = virtual && open && hasActiveIndex && {
      "aria-activedescendant": virtualId || activeId
    };
    const activeItem = listRef.current.find((item2) => (item2 == null ? void 0 : item2.id) === activeId);
    return {
      reference: {
        ...ariaActiveDescendantProp,
        onKeyDown(event) {
          isPointerModalityRef.current = false;
          const isArrowKey = event.key.indexOf("Arrow") === 0;
          const isCrossOpenKey = isCrossOrientationOpenKey(event.key, orientation, rtl);
          const isCrossCloseKey = isCrossOrientationCloseKey(event.key, orientation, rtl);
          const isMainKey = isMainOrientationKey(event.key, orientation);
          const isNavigationKey = (nested ? isCrossOpenKey : isMainKey) || event.key === "Enter" || event.key.trim() === "";
          if (virtual && open) {
            const rootNode = tree == null ? void 0 : tree.nodesRef.current.find((node) => node.parentId == null);
            const deepestNode = tree && rootNode ? getDeepestNode(tree.nodesRef.current, rootNode.id) : null;
            if (isArrowKey && deepestNode && virtualItemRef) {
              const eventObject = new KeyboardEvent("keydown", {
                key: event.key,
                bubbles: true
              });
              if (isCrossOpenKey || isCrossCloseKey) {
                var _deepestNode$context, _deepestNode$context2;
                const isCurrentTarget = ((_deepestNode$context = deepestNode.context) == null ? void 0 : _deepestNode$context.elements.domReference) === event.currentTarget;
                const dispatchItem = isCrossCloseKey && !isCurrentTarget ? (_deepestNode$context2 = deepestNode.context) == null ? void 0 : _deepestNode$context2.elements.domReference : isCrossOpenKey ? activeItem : null;
                if (dispatchItem) {
                  stopEvent(event);
                  dispatchItem.dispatchEvent(eventObject);
                  setVirtualId(void 0);
                }
              }
              if (isMainKey && deepestNode.context) {
                if (deepestNode.context.open && deepestNode.parentId && event.currentTarget !== deepestNode.context.elements.domReference) {
                  var _deepestNode$context$;
                  stopEvent(event);
                  (_deepestNode$context$ = deepestNode.context.elements.domReference) == null || _deepestNode$context$.dispatchEvent(eventObject);
                  return;
                }
              }
            }
            return onKeyDown(event);
          }
          if (!open && !openOnArrowKeyDown && isArrowKey) {
            return;
          }
          if (isNavigationKey) {
            keyRef.current = nested && isMainKey ? null : event.key;
          }
          if (nested) {
            if (isCrossOpenKey) {
              stopEvent(event);
              if (open) {
                indexRef.current = getMinIndex(listRef, disabledIndices2);
                onNavigate(indexRef.current);
              } else {
                onOpenChange(true, event.nativeEvent, "list-navigation");
              }
            }
            return;
          }
          if (isMainKey) {
            if (selectedIndex != null) {
              indexRef.current = selectedIndex;
            }
            stopEvent(event);
            if (!open && openOnArrowKeyDown) {
              onOpenChange(true, event.nativeEvent, "list-navigation");
            } else {
              onKeyDown(event);
            }
            if (open) {
              onNavigate(indexRef.current);
            }
          }
        },
        onFocus() {
          if (open) {
            onNavigate(null);
          }
        },
        onPointerDown: checkVirtualPointer,
        onMouseDown: checkVirtualMouse,
        onClick: checkVirtualMouse
      },
      floating: {
        "aria-orientation": orientation === "both" ? void 0 : orientation,
        ...!isTypeableCombobox(domReference) && ariaActiveDescendantProp,
        onKeyDown,
        onPointerMove() {
          isPointerModalityRef.current = true;
        }
      },
      item
    };
  }, [domReference, refs, activeId, virtualId, disabledIndicesRef, latestOpenRef, listRef, enabled, orientation, rtl, virtual, open, hasActiveIndex, nested, selectedIndex, openOnArrowKeyDown, allowEscape, cols, loop, focusItemOnOpen, onNavigate, onOpenChange, item, tree, virtualItemRef, itemSizes, dense]);
}
var componentRoleToAriaRoleMap = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", false]]);
function useRole(context, props) {
  var _componentRoleToAriaR;
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    floatingId
  } = context;
  const {
    enabled = true,
    role = "dialog"
  } = props;
  const ariaRole = (_componentRoleToAriaR = componentRoleToAriaRoleMap.get(role)) != null ? _componentRoleToAriaR : role;
  const referenceId = useId3();
  const parentId = useFloatingParentNodeId();
  const isNested = parentId != null;
  return React5.useMemo(() => {
    if (!enabled) return {};
    const floatingProps = {
      id: floatingId,
      ...ariaRole && {
        role: ariaRole
      }
    };
    if (ariaRole === "tooltip" || role === "label") {
      return {
        reference: {
          ["aria-" + (role === "label" ? "labelledby" : "describedby")]: open ? floatingId : void 0
        },
        floating: floatingProps
      };
    }
    return {
      reference: {
        "aria-expanded": open ? "true" : "false",
        "aria-haspopup": ariaRole === "alertdialog" ? "dialog" : ariaRole,
        "aria-controls": open ? floatingId : void 0,
        ...ariaRole === "listbox" && {
          role: "combobox"
        },
        ...ariaRole === "menu" && {
          id: referenceId
        },
        ...ariaRole === "menu" && isNested && {
          role: "menuitem"
        },
        ...role === "select" && {
          "aria-autocomplete": "none"
        },
        ...role === "combobox" && {
          "aria-autocomplete": "list"
        }
      },
      floating: {
        ...floatingProps,
        ...ariaRole === "menu" && {
          "aria-labelledby": referenceId
        }
      },
      item(_ref) {
        let {
          active,
          selected
        } = _ref;
        const commonProps = {
          role: "option",
          ...active && {
            id: floatingId + "-option"
          }
        };
        switch (role) {
          case "select":
            return {
              ...commonProps,
              "aria-selected": active && selected
            };
          case "combobox": {
            return {
              ...commonProps,
              ...active && {
                "aria-selected": true
              }
            };
          }
        }
        return {};
      }
    };
  }, [enabled, role, ariaRole, open, floatingId, referenceId, isNested]);
}
function useTypeahead(context, props) {
  var _ref;
  const {
    open,
    dataRef
  } = context;
  const {
    listRef,
    activeIndex,
    onMatch: unstable_onMatch,
    onTypingChange: unstable_onTypingChange,
    enabled = true,
    findMatch = null,
    resetMs = 750,
    ignoreKeys = [],
    selectedIndex = null
  } = props;
  const timeoutIdRef = React5.useRef();
  const stringRef = React5.useRef("");
  const prevIndexRef = React5.useRef((_ref = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref : -1);
  const matchIndexRef = React5.useRef(null);
  const onMatch = useEffectEvent(unstable_onMatch);
  const onTypingChange = useEffectEvent(unstable_onTypingChange);
  const findMatchRef = useLatestRef2(findMatch);
  const ignoreKeysRef = useLatestRef2(ignoreKeys);
  index2(() => {
    if (open) {
      clearTimeout(timeoutIdRef.current);
      matchIndexRef.current = null;
      stringRef.current = "";
    }
  }, [open]);
  index2(() => {
    if (open && stringRef.current === "") {
      var _ref2;
      prevIndexRef.current = (_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1;
    }
  }, [open, selectedIndex, activeIndex]);
  return React5.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function setTypingChange(value) {
      if (value) {
        if (!dataRef.current.typing) {
          dataRef.current.typing = value;
          onTypingChange(value);
        }
      } else {
        if (dataRef.current.typing) {
          dataRef.current.typing = value;
          onTypingChange(value);
        }
      }
    }
    function getMatchingIndex(list, orderedList, string) {
      const str = findMatchRef.current ? findMatchRef.current(orderedList, string) : orderedList.find((text) => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(string.toLocaleLowerCase())) === 0);
      return str ? list.indexOf(str) : -1;
    }
    function onKeyDown(event) {
      const listContent = listRef.current;
      if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
        if (getMatchingIndex(listContent, listContent, stringRef.current) === -1) {
          setTypingChange(false);
        } else if (event.key === " ") {
          stopEvent(event);
        }
      }
      if (listContent == null || ignoreKeysRef.current.includes(event.key) || // Character key.
      event.key.length !== 1 || // Modifier key.
      event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      if (open && event.key !== " ") {
        stopEvent(event);
        setTypingChange(true);
      }
      const allowRapidSuccessionOfFirstLetter = listContent.every((text) => {
        var _text$, _text$2;
        return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
      });
      if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
        stringRef.current = "";
        prevIndexRef.current = matchIndexRef.current;
      }
      stringRef.current += event.key;
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(() => {
        stringRef.current = "";
        prevIndexRef.current = matchIndexRef.current;
        setTypingChange(false);
      }, resetMs);
      const prevIndex = prevIndexRef.current;
      const index3 = getMatchingIndex(listContent, [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)], stringRef.current);
      if (index3 !== -1) {
        onMatch(index3);
        matchIndexRef.current = index3;
      } else if (event.key !== " ") {
        stringRef.current = "";
        setTypingChange(false);
      }
    }
    return {
      reference: {
        onKeyDown
      },
      floating: {
        onKeyDown,
        onKeyUp(event) {
          if (event.key === " ") {
            setTypingChange(false);
          }
        }
      }
    };
  }, [enabled, open, dataRef, listRef, resetMs, ignoreKeysRef, findMatchRef, onMatch, onTypingChange]);
}
function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let isInside2 = false;
  const length = polygon.length;
  for (let i = 0, j = length - 1; i < length; j = i++) {
    const [xi, yi] = polygon[i] || [0, 0];
    const [xj, yj] = polygon[j] || [0, 0];
    const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) {
      isInside2 = !isInside2;
    }
  }
  return isInside2;
}
function isInside(point, rect) {
  return point[0] >= rect.x && point[0] <= rect.x + rect.width && point[1] >= rect.y && point[1] <= rect.y + rect.height;
}
function safePolygon(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    buffer = 0.5,
    blockPointerEvents = false,
    requireIntent = true
  } = options;
  let timeoutId2;
  let hasLanded = false;
  let lastX = null;
  let lastY = null;
  let lastCursorTime = performance.now();
  function getCursorSpeed(x, y) {
    const currentTime = performance.now();
    const elapsedTime = currentTime - lastCursorTime;
    if (lastX === null || lastY === null || elapsedTime === 0) {
      lastX = x;
      lastY = y;
      lastCursorTime = currentTime;
      return null;
    }
    const deltaX = x - lastX;
    const deltaY = y - lastY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const speed = distance / elapsedTime;
    lastX = x;
    lastY = y;
    lastCursorTime = currentTime;
    return speed;
  }
  const fn = (_ref) => {
    let {
      x,
      y,
      placement,
      elements,
      onClose,
      nodeId,
      tree
    } = _ref;
    return function onMouseMove(event) {
      function close() {
        clearTimeout(timeoutId2);
        onClose();
      }
      clearTimeout(timeoutId2);
      if (!elements.domReference || !elements.floating || placement == null || x == null || y == null) {
        return;
      }
      const {
        clientX,
        clientY
      } = event;
      const clientPoint = [clientX, clientY];
      const target = getTarget(event);
      const isLeave = event.type === "mouseleave";
      const isOverFloatingEl = contains(elements.floating, target);
      const isOverReferenceEl = contains(elements.domReference, target);
      const refRect = elements.domReference.getBoundingClientRect();
      const rect = elements.floating.getBoundingClientRect();
      const side = placement.split("-")[0];
      const cursorLeaveFromRight = x > rect.right - rect.width / 2;
      const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
      const isOverReferenceRect = isInside(clientPoint, refRect);
      const isFloatingWider = rect.width > refRect.width;
      const isFloatingTaller = rect.height > refRect.height;
      const left = (isFloatingWider ? refRect : rect).left;
      const right = (isFloatingWider ? refRect : rect).right;
      const top = (isFloatingTaller ? refRect : rect).top;
      const bottom = (isFloatingTaller ? refRect : rect).bottom;
      if (isOverFloatingEl) {
        hasLanded = true;
        if (!isLeave) {
          return;
        }
      }
      if (isOverReferenceEl) {
        hasLanded = false;
      }
      if (isOverReferenceEl && !isLeave) {
        hasLanded = true;
        return;
      }
      if (isLeave && isElement(event.relatedTarget) && contains(elements.floating, event.relatedTarget)) {
        return;
      }
      if (tree && getChildren(tree.nodesRef.current, nodeId).some((_ref2) => {
        let {
          context
        } = _ref2;
        return context == null ? void 0 : context.open;
      })) {
        return;
      }
      if (side === "top" && y >= refRect.bottom - 1 || side === "bottom" && y <= refRect.top + 1 || side === "left" && x >= refRect.right - 1 || side === "right" && x <= refRect.left + 1) {
        return close();
      }
      let rectPoly = [];
      switch (side) {
        case "top":
          rectPoly = [[left, refRect.top + 1], [left, rect.bottom - 1], [right, rect.bottom - 1], [right, refRect.top + 1]];
          break;
        case "bottom":
          rectPoly = [[left, rect.top + 1], [left, refRect.bottom - 1], [right, refRect.bottom - 1], [right, rect.top + 1]];
          break;
        case "left":
          rectPoly = [[rect.right - 1, bottom], [rect.right - 1, top], [refRect.left + 1, top], [refRect.left + 1, bottom]];
          break;
        case "right":
          rectPoly = [[refRect.right - 1, bottom], [refRect.right - 1, top], [rect.left + 1, top], [rect.left + 1, bottom]];
          break;
      }
      function getPolygon(_ref3) {
        let [x2, y2] = _ref3;
        switch (side) {
          case "top": {
            const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
            const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
            const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
          case "bottom": {
            const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
            const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
            const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
          case "left": {
            const cursorPointOne = [x2 + buffer + 1, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const cursorPointTwo = [x2 + buffer + 1, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const commonPoints = [[cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]];
            return [...commonPoints, cursorPointOne, cursorPointTwo];
          }
          case "right": {
            const cursorPointOne = [x2 - buffer, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const cursorPointTwo = [x2 - buffer, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const commonPoints = [[cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
        }
      }
      if (isPointInPolygon([clientX, clientY], rectPoly)) {
        return;
      }
      if (hasLanded && !isOverReferenceRect) {
        return close();
      }
      if (!isLeave && requireIntent) {
        const cursorSpeed = getCursorSpeed(event.clientX, event.clientY);
        const cursorSpeedThreshold = 0.1;
        if (cursorSpeed !== null && cursorSpeed < cursorSpeedThreshold) {
          return close();
        }
      }
      if (!isPointInPolygon([clientX, clientY], getPolygon([x, y]))) {
        close();
      } else if (!hasLanded && requireIntent) {
        timeoutId2 = window.setTimeout(close, 40);
      }
    };
  };
  fn.__options = {
    blockPointerEvents
  };
  return fn;
}

// node_modules/flowbite-react/dist/esm/components/Dropdown/Dropdown.mjs
var import_react30 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/esm/components/Floating/helpers.mjs
var getMiddleware = ({
  arrowRef,
  placement
}) => {
  const middleware = [];
  middleware.push(offset2(8));
  middleware.push(placement === "auto" ? autoPlacement2() : flip2());
  middleware.push(shift2({ padding: 8 }));
  if (arrowRef == null ? void 0 : arrowRef.current) {
    middleware.push(arrow2({ element: arrowRef.current }));
  }
  return middleware;
};
var getPlacement = ({ placement }) => {
  return placement === "auto" ? void 0 : placement;
};
var getArrowPlacement = ({ placement }) => {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[placement.split("-")[0]];
};

// node_modules/flowbite-react/dist/esm/hooks/use-floating.mjs
var useBaseFLoating = ({
  open,
  arrowRef,
  placement = "top",
  setOpen
}) => {
  return useFloating2({
    placement: getPlacement({ placement }),
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: getMiddleware({ placement, arrowRef })
  });
};
var useFloatingInteractions = ({
  context,
  trigger,
  role = "tooltip",
  interactions = []
}) => {
  return useInteractions([
    useClick(context, { enabled: trigger === "click" }),
    useHover(context, {
      enabled: trigger === "hover",
      handleClose: safePolygon()
    }),
    useDismiss(context),
    useRole(context, { role }),
    ...interactions
  ]);
};

// node_modules/flowbite-react/dist/esm/components/Dropdown/DropdownContext.mjs
var import_react26 = __toESM(require_react(), 1);
var DropdownContext = (0, import_react26.createContext)(void 0);
function useDropdownContext() {
  const context = (0, import_react26.useContext)(DropdownContext);
  if (!context) {
    throw new Error("useDropdownContext should be used within the DropdownContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Dropdown/DropdownDivider.mjs
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var DropdownDivider = ({ className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useDropdownContext();
  const theme2 = customTheme.divider ?? rootTheme.floating.divider;
  return (0, import_jsx_runtime33.jsx)("div", { className: twMerge(theme2, className), ...props });
};

// node_modules/flowbite-react/dist/esm/components/Dropdown/DropdownHeader.mjs
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var DropdownHeader = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useDropdownContext();
  const theme2 = customTheme.header ?? rootTheme.floating.header;
  return (0, import_jsx_runtime34.jsxs)(import_jsx_runtime34.Fragment, { children: [
    (0, import_jsx_runtime34.jsx)("div", { className: twMerge(theme2, className), ...props, children }),
    (0, import_jsx_runtime34.jsx)(DropdownDivider, {})
  ] });
};

// node_modules/flowbite-react/dist/esm/components/Dropdown/DropdownItem.mjs
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var import_react28 = __toESM(require_react(), 1);
var DropdownItem = (0, import_react28.forwardRef)(
  ({ children, className, icon: Icon, onClick, theme: customTheme = {}, ...props }, forwardedRef) => {
    const { ref: listItemRef, index: index3 } = useListItem({ label: typeof children === "string" ? children : void 0 });
    const ref = useMergeRefs([forwardedRef, listItemRef]);
    const { theme: rootTheme, activeIndex, dismissOnClick, getItemProps, handleSelect } = useDropdownContext();
    const isActive = activeIndex === index3;
    const theme2 = mergeDeep(rootTheme.floating.item, customTheme);
    const theirProps = props;
    return (0, import_jsx_runtime35.jsx)("li", { role: "menuitem", className: theme2.container, children: (0, import_jsx_runtime35.jsxs)(
      ButtonBase,
      {
        ref,
        className: twMerge(theme2.base, className),
        ...theirProps,
        ...getItemProps({
          onClick: () => {
            onClick == null ? void 0 : onClick();
            dismissOnClick && handleSelect(null);
          }
        }),
        tabIndex: isActive ? 0 : -1,
        children: [
          Icon && (0, import_jsx_runtime35.jsx)(Icon, { className: theme2.icon }),
          children
        ]
      }
    ) });
  }
);
DropdownItem.displayName = "DropdownItem";

// node_modules/flowbite-react/dist/esm/components/Dropdown/Dropdown.mjs
var icons = {
  top: HiOutlineChevronUp,
  right: HiOutlineChevronRight,
  bottom: HiOutlineChevronDown,
  left: HiOutlineChevronLeft
};
var Trigger = ({
  refs,
  children,
  inline: inline3,
  theme: theme2,
  disabled,
  setButtonWidth,
  getReferenceProps,
  renderTrigger,
  ...buttonProps
}) => {
  const ref = refs.reference;
  const a11yProps = getReferenceProps();
  (0, import_react30.useEffect)(() => {
    if (ref.current) {
      setButtonWidth == null ? void 0 : setButtonWidth(ref.current.clientWidth);
    }
  }, [ref, setButtonWidth]);
  if (renderTrigger) {
    const triggerElement = renderTrigger(theme2);
    return (0, import_react30.cloneElement)(triggerElement, { ref: refs.setReference, disabled, ...a11yProps, ...triggerElement.props });
  }
  return inline3 ? (0, import_jsx_runtime36.jsx)("button", { type: "button", ref: refs.setReference, className: theme2 == null ? void 0 : theme2.inlineWrapper, disabled, ...a11yProps, children }) : (0, import_jsx_runtime36.jsx)(Button, { ...buttonProps, disabled, type: "button", ref: refs.setReference, ...a11yProps, children });
};
var DropdownComponent = ({
  children,
  className,
  dismissOnClick = true,
  theme: customTheme = {},
  renderTrigger,
  ...props
}) => {
  const [open, setOpen] = (0, import_react30.useState)(false);
  const [activeIndex, setActiveIndex] = (0, import_react30.useState)(null);
  const [selectedIndex, setSelectedIndex] = (0, import_react30.useState)(null);
  const [buttonWidth, setButtonWidth] = (0, import_react30.useState)(void 0);
  const elementsRef = (0, import_react30.useRef)([]);
  const labelsRef = (0, import_react30.useRef)([]);
  const theme2 = mergeDeep(getTheme().dropdown, customTheme);
  const theirProps = props;
  const dataTestId = props["data-testid"] || "flowbite-dropdown-target";
  const {
    placement = props.inline ? "bottom-start" : "bottom",
    trigger = "click",
    label,
    inline: inline3,
    arrowIcon = true,
    ...buttonProps
  } = theirProps;
  const handleSelect = (0, import_react30.useCallback)((index3) => {
    setSelectedIndex(index3);
    setOpen(false);
  }, []);
  const handleTypeaheadMatch = (0, import_react30.useCallback)(
    (index3) => {
      if (open) {
        setActiveIndex(index3);
      } else {
        handleSelect(index3);
      }
    },
    [open, handleSelect]
  );
  const { context, floatingStyles, refs } = useBaseFLoating({
    open,
    setOpen,
    placement
  });
  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch
  });
  const { getReferenceProps, getFloatingProps, getItemProps } = useFloatingInteractions({
    context,
    role: "menu",
    trigger,
    interactions: [listNav, typeahead]
  });
  const Icon = (0, import_react30.useMemo)(() => {
    const [p] = placement.split("-");
    return icons[p] ?? HiOutlineChevronDown;
  }, [placement]);
  return (0, import_jsx_runtime36.jsxs)(DropdownContext.Provider, { value: { theme: theme2, activeIndex, dismissOnClick, getItemProps, handleSelect }, children: [
    (0, import_jsx_runtime36.jsxs)(
      Trigger,
      {
        ...buttonProps,
        refs,
        inline: inline3,
        theme: theme2,
        "data-testid": dataTestId,
        className: twMerge(theme2.floating.target, buttonProps.className),
        setButtonWidth,
        getReferenceProps,
        renderTrigger,
        children: [
          label,
          arrowIcon && (0, import_jsx_runtime36.jsx)(Icon, { className: theme2.arrowIcon })
        ]
      }
    ),
    open && (0, import_jsx_runtime36.jsx)(FloatingFocusManager, { context, modal: false, children: (0, import_jsx_runtime36.jsx)(
      "div",
      {
        ref: refs.setFloating,
        style: { ...floatingStyles, minWidth: buttonWidth },
        "data-testid": "flowbite-dropdown",
        "aria-expanded": open,
        ...getFloatingProps({
          className: twMerge(
            theme2.floating.base,
            theme2.floating.animation,
            "duration-100",
            !open && theme2.floating.hidden,
            theme2.floating.style.auto,
            className
          )
        }),
        children: (0, import_jsx_runtime36.jsx)(FloatingList, { elementsRef, labelsRef, children: (0, import_jsx_runtime36.jsx)("ul", { className: theme2.content, tabIndex: -1, children }) })
      }
    ) })
  ] });
};
DropdownComponent.displayName = "Dropdown";
DropdownHeader.displayName = "Dropdown.Header";
DropdownDivider.displayName = "Dropdown.Divider";
var Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItem,
  Header: DropdownHeader,
  Divider: DropdownDivider
});

// node_modules/flowbite-react/dist/esm/components/FileInput/FileInput.mjs
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var import_react31 = __toESM(require_react(), 1);
var FileInput = (0, import_react31.forwardRef)(
  ({ className, color = "gray", helperText, sizing = "md", theme: customTheme = {}, ...props }, ref) => {
    const theme2 = mergeDeep(getTheme().fileInput, customTheme);
    return (0, import_jsx_runtime37.jsxs)(import_jsx_runtime37.Fragment, { children: [
      (0, import_jsx_runtime37.jsx)("div", { className: twMerge(theme2.root.base, className), children: (0, import_jsx_runtime37.jsx)("div", { className: theme2.field.base, children: (0, import_jsx_runtime37.jsx)(
        "input",
        {
          className: twMerge(
            theme2.field.input.base,
            theme2.field.input.colors[color],
            theme2.field.input.sizes[sizing]
          ),
          ...props,
          type: "file",
          ref
        }
      ) }) }),
      helperText && (0, import_jsx_runtime37.jsx)(HelperText, { color, children: helperText })
    ] });
  }
);
FileInput.displayName = "FileInput";

// node_modules/flowbite-react/dist/esm/components/FloatingLabel/FloatingLabel.mjs
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var import_react32 = __toESM(require_react(), 1);
var FloatingLabel = (0, import_react32.forwardRef)(
  ({
    label,
    helperText,
    color = "default",
    sizing = "md",
    variant,
    disabled = false,
    theme: customTheme = {},
    className,
    ...props
  }, ref) => {
    const randomId = (0, import_react32.useId)();
    const theme2 = mergeDeep(getTheme().floatingLabel, customTheme);
    return (0, import_jsx_runtime38.jsxs)("div", { children: [
      (0, import_jsx_runtime38.jsxs)("div", { className: twMerge("relative", variant === "standard" ? "z-0" : ""), children: [
        (0, import_jsx_runtime38.jsx)(
          "input",
          {
            type: "text",
            id: props.id ? props.id : "floatingLabel" + randomId,
            "aria-describedby": "outlined_success_help",
            className: twMerge(theme2.input[color][variant][sizing], className),
            placeholder: " ",
            "data-testid": "floating-label",
            disabled,
            ...props,
            ref
          }
        ),
        (0, import_jsx_runtime38.jsx)(
          "label",
          {
            htmlFor: props.id ? props.id : "floatingLabel" + randomId,
            className: twMerge(theme2.label[color][variant][sizing], className),
            children: label
          }
        )
      ] }),
      (0, import_jsx_runtime38.jsx)("p", { id: "outlined_helper_text" + randomId, className: twMerge(theme2.helperText[color], className), children: helperText })
    ] });
  }
);
FloatingLabel.displayName = "FloatingLabel";

// node_modules/flowbite-react/dist/esm/components/Flowbite/Flowbite.mjs
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/theme-store/init/index.mjs
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/theme-store/init/client.mjs
function ThemeClientInit({ theme: theme2 }) {
  setTheme(theme2);
  return null;
}

// node_modules/flowbite-react/dist/esm/theme-store/init/mode.mjs
function ThemeModeInit({ mode }) {
  if (mode)
    setThemeMode(mode);
  useThemeMode();
  return null;
}

// node_modules/flowbite-react/dist/esm/theme-store/init/server.mjs
function ThemeServerInit({ theme: theme2 }) {
  setTheme(theme2);
  return null;
}

// node_modules/flowbite-react/dist/esm/theme-store/init/index.mjs
function ThemeInit({ mode, theme: theme2 }) {
  return (0, import_jsx_runtime39.jsxs)(import_jsx_runtime39.Fragment, { children: [
    (0, import_jsx_runtime39.jsx)(ThemeModeInit, { mode }),
    (0, import_jsx_runtime39.jsx)(ThemeServerInit, { theme: theme2 }),
    (0, import_jsx_runtime39.jsx)(ThemeClientInit, { theme: theme2 })
  ] });
}

// node_modules/flowbite-react/dist/esm/components/Flowbite/Flowbite.mjs
var Flowbite = ({ children, theme: theme2 }) => {
  return (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
    (0, import_jsx_runtime40.jsx)(ThemeInit, { mode: theme2 == null ? void 0 : theme2.mode, theme: theme2 == null ? void 0 : theme2.theme }),
    children
  ] });
};
Flowbite.displayName = "Flowbite";

// node_modules/flowbite-react/dist/esm/components/Footer/Footer.mjs
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Footer/FooterBrand.mjs
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var FooterBrand = ({
  alt,
  className,
  children,
  href,
  name,
  src,
  theme: customTheme = {},
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().footer.brand, customTheme);
  return (0, import_jsx_runtime41.jsx)("div", { children: href ? (0, import_jsx_runtime41.jsxs)("a", { "data-testid": "flowbite-footer-brand", href, className: twMerge(theme2.base, className), ...props, children: [
    (0, import_jsx_runtime41.jsx)("img", { alt, src, className: theme2.img }),
    (0, import_jsx_runtime41.jsx)("span", { "data-testid": "flowbite-footer-brand-span", className: theme2.span, children: name }),
    children
  ] }) : (0, import_jsx_runtime41.jsx)(
    "img",
    {
      alt,
      "data-testid": "flowbite-footer-brand",
      src,
      className: twMerge(theme2.img, className),
      ...props
    }
  ) });
};

// node_modules/flowbite-react/dist/esm/components/Footer/FooterCopyright.mjs
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var FooterCopyright = ({
  by,
  className,
  href,
  theme: customTheme = {},
  year,
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().footer.copyright, customTheme);
  return (0, import_jsx_runtime42.jsxs)("div", { "data-testid": "flowbite-footer-copyright", className: twMerge(theme2.base, className), ...props, children: [
    "© ",
    year,
    href ? (0, import_jsx_runtime42.jsx)("a", { href, className: theme2.href, children: by }) : (0, import_jsx_runtime42.jsx)("span", { "data-testid": "flowbite-footer-copyright-span", className: theme2.span, children: by })
  ] });
};

// node_modules/flowbite-react/dist/esm/components/Footer/FooterDivider.mjs
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
var FooterDivider = ({ className, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().footer.divider, customTheme);
  return (0, import_jsx_runtime43.jsx)("hr", { "data-testid": "footer-divider", className: twMerge(theme2.base, className), ...props });
};

// node_modules/flowbite-react/dist/esm/components/Footer/FooterIcon.mjs
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var FooterIcon = ({
  ariaLabel,
  className,
  href,
  icon: Icon,
  theme: customTheme = {},
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().footer.icon, customTheme);
  return (0, import_jsx_runtime44.jsx)("div", { children: href ? (0, import_jsx_runtime44.jsx)(
    "a",
    {
      "aria-label": ariaLabel,
      "data-testid": "flowbite-footer-icon",
      href,
      className: twMerge(theme2.base, className),
      ...props,
      children: (0, import_jsx_runtime44.jsx)(Icon, { className: theme2.size })
    }
  ) : (0, import_jsx_runtime44.jsx)(Icon, { "data-testid": "flowbite-footer-icon", className: theme2.size, ...props }) });
};

// node_modules/flowbite-react/dist/esm/components/Footer/FooterLink.mjs
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
var FooterLink = ({
  as: Component = "a",
  children,
  className,
  href,
  theme: customTheme = {},
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().footer.groupLink.link, customTheme);
  return (0, import_jsx_runtime45.jsx)("li", { className: twMerge(theme2.base, className), children: (0, import_jsx_runtime45.jsx)(Component, { href, className: theme2.href, ...props, children }) });
};

// node_modules/flowbite-react/dist/esm/components/Footer/FooterLinkGroup.mjs
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var FooterLinkGroup = ({
  children,
  className,
  col = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().footer.groupLink, customTheme);
  return (0, import_jsx_runtime46.jsx)("ul", { "data-testid": "footer-groupLink", className: twMerge(theme2.base, col && theme2.col, className), ...props, children });
};

// node_modules/flowbite-react/dist/esm/components/Footer/FooterTitle.mjs
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var FooterTitle = ({
  as: Component = "h2",
  className,
  theme: customTheme = {},
  title,
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().footer.title, customTheme);
  return (0, import_jsx_runtime47.jsx)(Component, { "data-testid": "flowbite-footer-title", className: twMerge(theme2.base, className), ...props, children: title });
};

// node_modules/flowbite-react/dist/esm/components/Footer/Footer.mjs
var FooterComponent = ({
  bgDark = false,
  children,
  className,
  container = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().footer, customTheme);
  return (0, import_jsx_runtime48.jsx)(
    "footer",
    {
      "data-testid": "flowbite-footer",
      className: twMerge(theme2.root.base, bgDark && theme2.root.bgDark, container && theme2.root.container, className),
      ...props,
      children
    }
  );
};
FooterComponent.displayName = "Footer";
FooterCopyright.displayName = "Footer.Copyright";
FooterLink.displayName = "Footer.Link";
FooterBrand.displayName = "Footer.Brand";
FooterLinkGroup.displayName = "Footer.LinkGroup";
FooterIcon.displayName = "Footer.Icon";
FooterTitle.displayName = "Footer.Title";
FooterDivider.displayName = "Footer.Divider";
var Footer = Object.assign(FooterComponent, {
  Copyright: FooterCopyright,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Brand: FooterBrand,
  Icon: FooterIcon,
  Title: FooterTitle,
  Divider: FooterDivider
});

// node_modules/flowbite-react/dist/esm/components/Kbd/Kbd.mjs
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var Kbd = ({ children, className, icon: Icon, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().kbd, customTheme);
  return (0, import_jsx_runtime49.jsxs)("span", { className: twMerge(theme2.root.base, className), "data-testid": "flowbite-kbd", ...props, children: [
    Icon && (0, import_jsx_runtime49.jsx)(Icon, { className: theme2.root.icon, "data-testid": "flowbite-kbd-icon" }),
    children
  ] });
};
Kbd.displayName = "Kbd";

// node_modules/flowbite-react/dist/esm/components/Label/Label.mjs
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
var Label = ({
  children,
  className,
  color = "default",
  disabled = false,
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().label, customTheme);
  return (0, import_jsx_runtime50.jsx)(
    "label",
    {
      className: twMerge(theme2.root.base, theme2.root.colors[color], disabled && theme2.root.disabled, className),
      "data-testid": "flowbite-label",
      ...props,
      children: value ?? children ?? ""
    }
  );
};
Label.displayName = "Label";

// node_modules/flowbite-react/dist/esm/components/List/List.mjs
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/List/ListItem.mjs
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
var ListItem = ({ children, className, icon: Icon, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().list.item, customTheme);
  return (0, import_jsx_runtime51.jsxs)("li", { className: twMerge(theme2.withIcon[Icon ? "on" : "off"], className), ...props, children: [
    Icon && (0, import_jsx_runtime51.jsx)(Icon, { className: twMerge(theme2.icon) }),
    children
  ] });
};

// node_modules/flowbite-react/dist/esm/components/List/List.mjs
var ListComponent = ({
  children,
  className,
  unstyled,
  nested,
  ordered,
  horizontal,
  theme: customTheme = {},
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().list, customTheme);
  const Component = ordered ? "ol" : "ul";
  return (0, import_jsx_runtime52.jsx)(
    Component,
    {
      className: twMerge(
        theme2.root.base,
        theme2.root.ordered[ordered ? "on" : "off"],
        unstyled && theme2.root.unstyled,
        nested && theme2.root.nested,
        horizontal && theme2.root.horizontal,
        className
      ),
      ...props,
      children
    }
  );
};
ListComponent.displayName = "List";
ListItem.displayName = "List.Item";
var List = Object.assign(ListComponent, { Item: ListItem });

// node_modules/flowbite-react/dist/esm/components/ListGroup/ListGroup.mjs
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/ListGroup/ListGroupItem.mjs
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var ListGroupItem = ({
  active: isActive,
  children,
  className,
  href,
  icon: Icon,
  onClick,
  theme: customTheme = {},
  disabled,
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().listGroup.item, customTheme);
  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "button";
  return (0, import_jsx_runtime53.jsx)("li", { className: twMerge(theme2.base, className), children: (0, import_jsx_runtime53.jsxs)(
    Component,
    {
      href,
      onClick,
      type: isLink ? void 0 : "button",
      disabled,
      className: twMerge(
        theme2.link.active[isActive ? "on" : "off"],
        theme2.link.disabled[disabled ? "on" : "off"],
        theme2.link.base,
        theme2.link.href[isLink ? "on" : "off"]
      ),
      ...props,
      children: [
        Icon && (0, import_jsx_runtime53.jsx)(Icon, { "aria-hidden": true, "data-testid": "flowbite-list-group-item-icon", className: theme2.link.icon }),
        children
      ]
    }
  ) });
};

// node_modules/flowbite-react/dist/esm/components/ListGroup/ListGroup.mjs
var ListGroupComponent = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().listGroup, customTheme);
  return (0, import_jsx_runtime54.jsx)("ul", { className: twMerge(theme2.root.base, className), ...props, children });
};
ListGroupComponent.displayName = "ListGroup";
ListGroupItem.displayName = "ListGroup.Item";
var ListGroup = Object.assign(ListGroupComponent, {
  Item: ListGroupItem
});

// node_modules/flowbite-react/dist/esm/components/MegaMenu/MegaMenu.mjs
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Navbar/Navbar.mjs
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var import_react34 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/esm/components/Navbar/NavbarBrand.mjs
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Navbar/NavbarContext.mjs
var import_react33 = __toESM(require_react(), 1);
var NavbarContext = (0, import_react33.createContext)(void 0);
function useNavbarContext() {
  const context = (0, import_react33.useContext)(NavbarContext);
  if (!context) {
    throw new Error("useNavBarContext should be used within the NavbarContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Navbar/NavbarBrand.mjs
var NavbarBrand = ({
  as: Component = "a",
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme } = useNavbarContext();
  const theme2 = mergeDeep(rootTheme.brand, customTheme);
  return (0, import_jsx_runtime55.jsx)(Component, { className: twMerge(theme2.base, className), ...props, children });
};

// node_modules/flowbite-react/dist/esm/components/Navbar/NavbarCollapse.mjs
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var NavbarCollapse = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, isOpen } = useNavbarContext();
  const theme2 = mergeDeep(rootTheme.collapse, customTheme);
  return (0, import_jsx_runtime56.jsx)(
    "div",
    {
      "data-testid": "flowbite-navbar-collapse",
      className: twMerge(theme2.base, theme2.hidden[!isOpen ? "on" : "off"], className),
      ...props,
      children: (0, import_jsx_runtime56.jsx)("ul", { className: theme2.list, children })
    }
  );
};

// node_modules/flowbite-react/dist/esm/components/Navbar/NavbarLink.mjs
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var NavbarLink = ({
  active,
  as: Component = "a",
  disabled,
  children,
  className,
  theme: customTheme = {},
  onClick,
  ...props
}) => {
  const { theme: rootTheme, setIsOpen } = useNavbarContext();
  const theme2 = mergeDeep(rootTheme.link, customTheme);
  const handleClick = (event) => {
    setIsOpen(false);
    onClick == null ? void 0 : onClick(event);
  };
  return (0, import_jsx_runtime57.jsx)("li", { children: (0, import_jsx_runtime57.jsx)(
    Component,
    {
      className: twMerge(
        theme2.base,
        active && theme2.active.on,
        !active && !disabled && theme2.active.off,
        theme2.disabled[disabled ? "on" : "off"],
        className
      ),
      onClick: handleClick,
      ...props,
      children
    }
  ) });
};

// node_modules/flowbite-react/dist/esm/components/Navbar/NavbarToggle.mjs
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/node_modules/react-icons/fa/index.mjs
function FaBars(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" }, "child": [] }] })(props);
}

// node_modules/flowbite-react/dist/esm/components/Navbar/NavbarToggle.mjs
var NavbarToggle = ({
  barIcon: BarIcon = FaBars,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, isOpen, setIsOpen } = useNavbarContext();
  const theme2 = mergeDeep(rootTheme.toggle, customTheme);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (0, import_jsx_runtime58.jsxs)(
    "button",
    {
      "data-testid": "flowbite-navbar-toggle",
      onClick: handleClick,
      className: twMerge(theme2.base, className),
      ...props,
      children: [
        (0, import_jsx_runtime58.jsx)("span", { className: "sr-only", children: "Open main menu" }),
        (0, import_jsx_runtime58.jsx)(BarIcon, { "aria-hidden": true, className: theme2.icon })
      ]
    }
  );
};

// node_modules/flowbite-react/dist/esm/components/Navbar/Navbar.mjs
var NavbarComponent = ({
  border,
  children,
  className,
  fluid = false,
  menuOpen,
  rounded,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setIsOpen] = (0, import_react34.useState)(menuOpen);
  const theme2 = mergeDeep(getTheme().navbar, customTheme);
  return (0, import_jsx_runtime59.jsx)(NavbarContext.Provider, { value: { theme: theme2, isOpen, setIsOpen }, children: (0, import_jsx_runtime59.jsx)(
    "nav",
    {
      className: twMerge(
        theme2.root.base,
        theme2.root.bordered[border ? "on" : "off"],
        theme2.root.rounded[rounded ? "on" : "off"],
        className
      ),
      ...props,
      children: (0, import_jsx_runtime59.jsx)("div", { className: twMerge(theme2.root.inner.base, theme2.root.inner.fluid[fluid ? "on" : "off"]), children })
    }
  ) });
};
NavbarComponent.displayName = "Navbar";
NavbarBrand.displayName = "Navbar.Brand";
NavbarCollapse.displayName = "Navbar.Collapse";
NavbarLink.displayName = "Navbar.Link";
NavbarToggle.displayName = "Navbar.Toggle";
var Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle
});

// node_modules/flowbite-react/dist/esm/components/MegaMenu/MegaMenuDropdown.mjs
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var import_react35 = __toESM(require_react(), 1);
var MegaMenuDropdown = ({
  children,
  className,
  theme: customTheme = {},
  toggle,
  ...props
}) => {
  const [labelledBy, setLabelledBy] = (0, import_react35.useState)(void 0);
  const theme2 = mergeDeep(getTheme().megaMenu.dropdown, customTheme);
  if (toggle) {
    return (0, import_jsx_runtime60.jsx)(
      Dropdown,
      {
        inline: true,
        label: toggle,
        placement: "bottom",
        theme: theme2.toggle,
        className: twMerge(theme2.base, className),
        children
      }
    );
  }
  const id = (0, import_react35.useId)();
  const ref = (0, import_react35.useRef)(null);
  (0, import_react35.useEffect)(() => {
    var _a;
    const findToggle = function() {
      var _a2;
      const megaMenu = (_a2 = ref.current) == null ? void 0 : _a2.closest("nav");
      return megaMenu == null ? void 0 : megaMenu.querySelector('[aria-haspopup="menu"]');
    };
    setLabelledBy((_a = findToggle()) == null ? void 0 : _a.id);
  }, []);
  return (0, import_jsx_runtime60.jsx)(
    "div",
    {
      "aria-labelledby": labelledBy,
      id,
      ref,
      role: "menu",
      className: twMerge(theme2.base, className),
      ...props,
      children
    }
  );
};
MegaMenuDropdown.displayName = "MegaMenu.Dropdown";

// node_modules/flowbite-react/dist/esm/components/MegaMenu/MegaMenuDropdownToggle.mjs
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var import_react36 = __toESM(require_react(), 1);
var MegaMenuDropdownToggle = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const id = (0, import_react36.useId)();
  const ref = (0, import_react36.useRef)(null);
  const [controls, setControls] = (0, import_react36.useState)(void 0);
  const [isExpanded, setExpanded] = (0, import_react36.useState)(void 0);
  const theme2 = mergeDeep(getTheme().megaMenu.dropdownToggle, customTheme);
  const findDropdown = function() {
    var _a;
    const megaMenu = (_a = ref.current) == null ? void 0 : _a.closest("nav");
    return megaMenu == null ? void 0 : megaMenu.querySelector('[role="menu"]');
  };
  const onClick = function() {
    var _a;
    (_a = findDropdown()) == null ? void 0 : _a.classList.toggle("hidden");
    setExpanded(!isExpanded);
  };
  (0, import_react36.useEffect)(() => {
    const dropdown = findDropdown();
    const isDropdownHidden = dropdown == null ? void 0 : dropdown.classList.contains("hidden");
    setControls(dropdown == null ? void 0 : dropdown.id);
    setExpanded(!isDropdownHidden);
  }, []);
  return (0, import_jsx_runtime61.jsx)(
    "button",
    {
      "aria-controls": controls,
      "aria-expanded": isExpanded,
      "aria-haspopup": "menu",
      id,
      onClick,
      ref,
      className: twMerge(theme2.base, className),
      ...props,
      children
    }
  );
};
MegaMenuDropdownToggle.displayName = "MegaMenu.DropdownToggle";

// node_modules/flowbite-react/dist/esm/components/MegaMenu/MegaMenu.mjs
var MegaMenuComponent = ({ children, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().megaMenu, customTheme);
  return (0, import_jsx_runtime62.jsx)(Navbar, { fluid: true, theme: theme2, ...props, children });
};
var MegaMenu = Object.assign(MegaMenuComponent, {
  Dropdown: MegaMenuDropdown,
  DropdownToggle: MegaMenuDropdownToggle
});
MegaMenuComponent.displayName = "MegaMenu";

// node_modules/flowbite-react/dist/esm/components/Modal/Modal.mjs
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
var import_react40 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/esm/components/Modal/ModalBody.mjs
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Modal/ModalContext.mjs
var import_react37 = __toESM(require_react(), 1);
var ModalContext = (0, import_react37.createContext)(void 0);
function useModalContext() {
  const context = (0, import_react37.useContext)(ModalContext);
  if (!context) {
    throw new Error("useModalContext should be used within the ModalContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Modal/ModalBody.mjs
var ModalBody = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, popup } = useModalContext();
  const theme2 = mergeDeep(rootTheme.body, customTheme);
  return (0, import_jsx_runtime63.jsx)("div", { className: twMerge(theme2.base, popup && [theme2.popup], className), ...props, children });
};

// node_modules/flowbite-react/dist/esm/components/Modal/ModalFooter.mjs
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
var ModalFooter = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, popup } = useModalContext();
  const theme2 = mergeDeep(rootTheme.footer, customTheme);
  return (0, import_jsx_runtime64.jsx)("div", { className: twMerge(theme2.base, !popup && theme2.popup, className), ...props, children });
};

// node_modules/flowbite-react/dist/esm/components/Modal/ModalHeader.mjs
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var import_react38 = __toESM(require_react(), 1);
var ModalHeader = ({
  as: Component = "h3",
  children,
  className,
  theme: customTheme = {},
  id,
  ...props
}) => {
  const innerHeaderId = (0, import_react38.useId)();
  const headerId = id || innerHeaderId;
  const { theme: rootTheme, popup, onClose, setHeaderId } = useModalContext();
  const theme2 = mergeDeep(rootTheme.header, customTheme);
  (0, import_react38.useLayoutEffect)(() => {
    setHeaderId(headerId);
    return () => setHeaderId(void 0);
  }, [headerId, setHeaderId]);
  return (0, import_jsx_runtime65.jsxs)("div", { className: twMerge(theme2.base, popup && theme2.popup, className), ...props, children: [
    (0, import_jsx_runtime65.jsx)(Component, { id: headerId, className: theme2.title, children }),
    (0, import_jsx_runtime65.jsx)("button", { "aria-label": "Close", className: theme2.close.base, type: "button", onClick: onClose, children: (0, import_jsx_runtime65.jsx)(HiOutlineX, { "aria-hidden": true, className: theme2.close.icon }) })
  ] });
};

// node_modules/flowbite-react/dist/esm/components/Modal/Modal.mjs
var ModalComponent = (0, import_react40.forwardRef)(
  ({
    children,
    className,
    dismissible = false,
    onClose,
    popup,
    position = "center",
    root,
    show,
    size: size3 = "2xl",
    theme: customTheme = {},
    initialFocus,
    ...props
  }, theirRef) => {
    const [headerId, setHeaderId] = (0, import_react40.useState)(void 0);
    const theme2 = mergeDeep(getTheme().modal, customTheme);
    const { context } = useFloating2({
      open: show,
      onOpenChange: () => onClose && onClose()
    });
    const ref = useMergeRefs([context.refs.setFloating, theirRef]);
    const click = useClick(context);
    const dismiss = useDismiss(context, { outsidePressEvent: "mousedown", enabled: dismissible });
    const role = useRole(context);
    const { getFloatingProps } = useInteractions([click, dismiss, role]);
    if (!show) {
      return null;
    }
    return (0, import_jsx_runtime66.jsx)(ModalContext.Provider, { value: { theme: theme2, popup, onClose, setHeaderId }, children: (0, import_jsx_runtime66.jsx)(FloatingPortal, { root, children: (0, import_jsx_runtime66.jsx)(
      FloatingOverlay,
      {
        lockScroll: true,
        "data-testid": "modal-overlay",
        className: twMerge(
          theme2.root.base,
          theme2.root.positions[position],
          show ? theme2.root.show.on : theme2.root.show.off,
          className
        ),
        ...props,
        children: (0, import_jsx_runtime66.jsx)(FloatingFocusManager, { context, initialFocus, children: (0, import_jsx_runtime66.jsx)(
          "div",
          {
            ref,
            ...getFloatingProps(props),
            "aria-labelledby": headerId,
            className: twMerge(theme2.content.base, theme2.root.sizes[size3]),
            children: (0, import_jsx_runtime66.jsx)("div", { className: theme2.content.inner, children })
          }
        ) })
      }
    ) }) });
  }
);
ModalComponent.displayName = "Modal";
ModalHeader.displayName = "Modal.Header";
ModalBody.displayName = "Modal.Body";
ModalFooter.displayName = "Modal.Footer";
var Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter
});

// node_modules/flowbite-react/dist/esm/components/Pagination/Pagination.mjs
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Pagination/helpers.mjs
var range = (start, end) => {
  if (start >= end) {
    return [];
  }
  return [...Array(end - start + 1).keys()].map((key) => key + start);
};

// node_modules/flowbite-react/dist/esm/components/Pagination/PaginationButton.mjs
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
var PaginationButton = ({
  active,
  children,
  className,
  onClick,
  theme: customTheme = {},
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().pagination, customTheme);
  return (0, import_jsx_runtime67.jsx)(
    "button",
    {
      type: "button",
      className: twMerge(active && theme2.pages.selector.active, className),
      onClick,
      ...props,
      children
    }
  );
};
PaginationButton.displayName = "Pagination.Button";
var PaginationNavigation = ({
  children,
  className,
  onClick,
  theme: customTheme = {},
  disabled = false,
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().pagination, customTheme);
  return (0, import_jsx_runtime67.jsx)(
    "button",
    {
      type: "button",
      className: twMerge(disabled && theme2.pages.selector.disabled, className),
      disabled,
      onClick,
      ...props,
      children
    }
  );
};
PaginationNavigation.displayName = "Pagination.Navigation";

// node_modules/flowbite-react/dist/esm/components/Pagination/Pagination.mjs
var PaginationComponent = ({
  className,
  currentPage,
  layout = "pagination",
  nextLabel = "Next",
  onPageChange,
  previousLabel = "Previous",
  renderPaginationButton = (props2) => (0, import_jsx_runtime68.jsx)(PaginationButton, { ...props2 }),
  showIcons: showIcon = false,
  theme: customTheme = {},
  totalPages,
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().pagination, customTheme);
  const lastPage = Math.min(Math.max(layout === "pagination" ? currentPage + 2 : currentPage + 4, 5), totalPages);
  const firstPage = Math.max(1, lastPage - 4);
  const goToNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };
  const goToPreviousPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };
  return (0, import_jsx_runtime68.jsxs)("nav", { className: twMerge(theme2.base, className), ...props, children: [
    layout === "table" && (0, import_jsx_runtime68.jsxs)("div", { className: theme2.layout.table.base, children: [
      "Showing ",
      (0, import_jsx_runtime68.jsx)("span", { className: theme2.layout.table.span, children: firstPage }),
      " to ",
      (0, import_jsx_runtime68.jsx)("span", { className: theme2.layout.table.span, children: lastPage }),
      " of ",
      (0, import_jsx_runtime68.jsx)("span", { className: theme2.layout.table.span, children: totalPages }),
      " Entries"
    ] }),
    (0, import_jsx_runtime68.jsxs)("ul", { className: theme2.pages.base, children: [
      (0, import_jsx_runtime68.jsx)("li", { children: (0, import_jsx_runtime68.jsxs)(
        PaginationNavigation,
        {
          className: twMerge(theme2.pages.previous.base, showIcon && theme2.pages.showIcon),
          onClick: goToPreviousPage,
          disabled: currentPage === 1,
          children: [
            showIcon && (0, import_jsx_runtime68.jsx)(HiChevronLeft, { "aria-hidden": true, className: theme2.pages.previous.icon }),
            previousLabel
          ]
        }
      ) }),
      layout === "pagination" && range(firstPage, lastPage).map((page) => (0, import_jsx_runtime68.jsx)("li", { "aria-current": page === currentPage ? "page" : void 0, children: renderPaginationButton({
        className: twMerge(theme2.pages.selector.base, currentPage === page && theme2.pages.selector.active),
        active: page === currentPage,
        onClick: () => onPageChange(page),
        children: page
      }) }, page)),
      (0, import_jsx_runtime68.jsx)("li", { children: (0, import_jsx_runtime68.jsxs)(
        PaginationNavigation,
        {
          className: twMerge(theme2.pages.next.base, showIcon && theme2.pages.showIcon),
          onClick: goToNextPage,
          disabled: currentPage === totalPages,
          children: [
            nextLabel,
            showIcon && (0, import_jsx_runtime68.jsx)(HiChevronRight, { "aria-hidden": true, className: theme2.pages.next.icon })
          ]
        }
      ) })
    ] })
  ] });
};
PaginationComponent.displayName = "Pagination";
var Pagination = Object.assign(PaginationComponent, {
  Button: PaginationButton
});

// node_modules/flowbite-react/dist/esm/components/Popover/Popover.mjs
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
var import_react42 = __toESM(require_react(), 1);
function Popover({
  children,
  content,
  theme: customTheme = {},
  arrow: arrow3 = true,
  trigger = "click",
  initialOpen,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  placement: theirPlacement = "bottom",
  ...props
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = (0, import_react42.useState)(Boolean(initialOpen));
  const arrowRef = (0, import_react42.useRef)(null);
  const theme2 = mergeDeep(getTheme().popover, customTheme);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;
  const floatingProps = useBaseFLoating({
    open,
    placement: theirPlacement,
    arrowRef,
    setOpen
  });
  const {
    floatingStyles,
    context,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    refs
  } = floatingProps;
  const { getFloatingProps, getReferenceProps } = useFloatingInteractions({
    context,
    role: "dialog",
    trigger
  });
  const childrenRef = children.ref;
  const ref = useMergeRefs([context.refs.setReference, childrenRef]);
  if (!(0, import_react42.isValidElement)(children)) {
    throw Error("Invalid target element");
  }
  const target = (0, import_react42.useMemo)(() => {
    return (0, import_react42.cloneElement)(
      children,
      getReferenceProps({
        ref,
        "data-testid": "flowbite-popover-target",
        ...children == null ? void 0 : children.props
      })
    );
  }, [children, ref, getReferenceProps]);
  return (0, import_jsx_runtime69.jsxs)(import_jsx_runtime69.Fragment, { children: [
    target,
    open && (0, import_jsx_runtime69.jsx)(FloatingFocusManager, { context, modal: true, children: (0, import_jsx_runtime69.jsx)(
      "div",
      {
        className: theme2.base,
        ref: refs.setFloating,
        "data-testid": "flowbite-popover",
        ...props,
        style: floatingStyles,
        ...getFloatingProps(),
        children: (0, import_jsx_runtime69.jsxs)("div", { className: "relative", children: [
          arrow3 && (0, import_jsx_runtime69.jsx)(
            "div",
            {
              className: theme2.arrow.base,
              "data-testid": "flowbite-popover-arrow",
              ref: arrowRef,
              style: {
                top: arrowY ?? " ",
                left: arrowX ?? " ",
                right: " ",
                bottom: " ",
                [getArrowPlacement({ placement })]: theme2.arrow.placement
              },
              children: " "
            }
          ),
          (0, import_jsx_runtime69.jsx)("div", { className: theme2.content, children: content })
        ] })
      }
    ) })
  ] });
}

// node_modules/flowbite-react/dist/esm/components/Progress/Progress.mjs
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
var import_react43 = __toESM(require_react(), 1);
var Progress = ({
  className,
  color = "cyan",
  labelProgress = false,
  labelText = false,
  progress,
  progressLabelPosition = "inside",
  size: size3 = "md",
  textLabel = "progressbar",
  textLabelPosition = "inside",
  theme: customTheme = {},
  ...props
}) => {
  const id = (0, import_react43.useId)();
  const theme2 = mergeDeep(getTheme().progress, customTheme);
  return (0, import_jsx_runtime70.jsx)(import_jsx_runtime70.Fragment, { children: (0, import_jsx_runtime70.jsxs)("div", { id, "aria-label": textLabel, "aria-valuenow": progress, role: "progressbar", ...props, children: [
    (textLabel && labelText && textLabelPosition === "outside" || progress > 0 && labelProgress && progressLabelPosition === "outside") && (0, import_jsx_runtime70.jsxs)("div", { className: theme2.label, "data-testid": "flowbite-progress-outer-label-container", children: [
      textLabel && labelText && textLabelPosition === "outside" && (0, import_jsx_runtime70.jsx)("span", { "data-testid": "flowbite-progress-outer-text-label", children: textLabel }),
      labelProgress && progressLabelPosition === "outside" && (0, import_jsx_runtime70.jsxs)("span", { "data-testid": "flowbite-progress-outer-progress-label", children: [
        progress,
        "%"
      ] })
    ] }),
    (0, import_jsx_runtime70.jsx)("div", { className: twMerge(theme2.base, theme2.size[size3], className), children: (0, import_jsx_runtime70.jsxs)("div", { style: { width: `${progress}%` }, className: twMerge(theme2.bar, theme2.color[color], theme2.size[size3]), children: [
      textLabel && labelText && textLabelPosition === "inside" && (0, import_jsx_runtime70.jsx)("span", { "data-testid": "flowbite-progress-inner-text-label", children: textLabel }),
      progress > 0 && labelProgress && progressLabelPosition === "inside" && (0, import_jsx_runtime70.jsxs)("span", { "data-testid": "flowbite-progress-inner-progress-label", children: [
        progress,
        "%"
      ] })
    ] }) })
  ] }) });
};
Progress.displayName = "Progress";

// node_modules/flowbite-react/dist/esm/components/Radio/Radio.mjs
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
var import_react44 = __toESM(require_react(), 1);
var Radio = (0, import_react44.forwardRef)(
  ({ className, theme: customTheme = {}, ...props }, ref) => {
    const theme2 = mergeDeep(getTheme().radio, customTheme);
    return (0, import_jsx_runtime71.jsx)("input", { ref, type: "radio", className: twMerge(theme2.root.base, className), ...props });
  }
);
Radio.displayName = "Radio";

// node_modules/flowbite-react/dist/esm/components/RangeSlider/RangeSlider.mjs
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var import_react45 = __toESM(require_react(), 1);
var RangeSlider = (0, import_react45.forwardRef)(
  ({ className, sizing = "md", theme: customTheme = {}, ...props }, ref) => {
    const theme2 = mergeDeep(getTheme().rangeSlider, customTheme);
    return (0, import_jsx_runtime72.jsx)(import_jsx_runtime72.Fragment, { children: (0, import_jsx_runtime72.jsx)("div", { "data-testid": "flowbite-range-slider", className: twMerge(theme2.root.base, className), children: (0, import_jsx_runtime72.jsx)("div", { className: theme2.field.base, children: (0, import_jsx_runtime72.jsx)(
      "input",
      {
        ref,
        type: "range",
        className: twMerge(theme2.field.input.base, theme2.field.input.sizes[sizing]),
        ...props
      }
    ) }) }) });
  }
);
RangeSlider.displayName = "RangeSlider";

// node_modules/flowbite-react/dist/esm/components/Rating/Rating.mjs
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Rating/RatingAdvanced.mjs
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
var RatingAdvanced = ({
  children,
  className,
  percentFilled = 0,
  theme: customTheme = {},
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().ratingAdvanced, customTheme);
  return (0, import_jsx_runtime73.jsxs)("div", { className: twMerge(theme2.base, className), ...props, children: [
    (0, import_jsx_runtime73.jsx)("span", { className: theme2.label, children }),
    (0, import_jsx_runtime73.jsx)("div", { className: theme2.progress.base, children: (0, import_jsx_runtime73.jsx)(
      "div",
      {
        className: theme2.progress.fill,
        "data-testid": "flowbite-rating-fill",
        style: { width: `${percentFilled}%` }
      }
    ) }),
    (0, import_jsx_runtime73.jsx)("span", { className: theme2.progress.label, children: `${percentFilled}%` })
  ] });
};

// node_modules/flowbite-react/dist/esm/components/Rating/RatingContext.mjs
var import_react46 = __toESM(require_react(), 1);
var RatingContext = (0, import_react46.createContext)(void 0);
function useRatingContext() {
  const context = (0, import_react46.useContext)(RatingContext);
  if (!context) {
    throw new Error("useRatingContext should be used within the RatingContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Rating/RatingStar.mjs
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
var RatingStar = ({
  className,
  filled = true,
  starIcon: Icon = HiStar,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, size: size3 = "sm" } = useRatingContext();
  const theme2 = mergeDeep(rootTheme.star, customTheme);
  return (0, import_jsx_runtime74.jsx)(
    Icon,
    {
      "data-testid": "flowbite-rating-star",
      className: twMerge(theme2.sizes[size3], theme2[filled ? "filled" : "empty"], className),
      ...props
    }
  );
};

// node_modules/flowbite-react/dist/esm/components/Rating/Rating.mjs
var RatingComponent = ({ children, className, size: size3 = "sm", theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().rating, customTheme);
  return (0, import_jsx_runtime75.jsx)(RatingContext.Provider, { value: { theme: theme2, size: size3 }, children: (0, import_jsx_runtime75.jsx)("div", { className: twMerge(theme2.root.base, className), ...props, children }) });
};
RatingComponent.displayName = "Rating";
RatingStar.displayName = "Rating.Star";
RatingAdvanced.displayName = "Rating.Advanced";
var Rating = Object.assign(RatingComponent, {
  Star: RatingStar,
  Advanced: RatingAdvanced
});

// node_modules/flowbite-react/dist/esm/components/Select/Select.mjs
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
var import_react47 = __toESM(require_react(), 1);
var Select = (0, import_react47.forwardRef)(
  ({
    addon,
    children,
    className,
    color = "gray",
    helperText,
    icon: Icon,
    shadow,
    sizing = "md",
    theme: customTheme = {},
    ...props
  }, ref) => {
    const theme2 = mergeDeep(getTheme().select, customTheme);
    return (0, import_jsx_runtime76.jsxs)("div", { className: twMerge(theme2.base, className), children: [
      addon && (0, import_jsx_runtime76.jsx)("span", { className: theme2.addon, children: addon }),
      (0, import_jsx_runtime76.jsxs)("div", { className: theme2.field.base, children: [
        Icon && (0, import_jsx_runtime76.jsx)("div", { className: theme2.field.icon.base, children: (0, import_jsx_runtime76.jsx)(Icon, { className: theme2.field.icon.svg }) }),
        (0, import_jsx_runtime76.jsx)(
          "select",
          {
            className: twMerge(
              theme2.field.select.base,
              theme2.field.select.colors[color],
              theme2.field.select.sizes[sizing],
              theme2.field.select.withIcon[Icon ? "on" : "off"],
              theme2.field.select.withAddon[addon ? "on" : "off"],
              theme2.field.select.withShadow[shadow ? "on" : "off"]
            ),
            ...props,
            ref,
            children
          }
        ),
        helperText && (0, import_jsx_runtime76.jsx)(HelperText, { color, children: helperText })
      ] })
    ] });
  }
);
Select.displayName = "Select";

// node_modules/flowbite-react/dist/esm/components/Sidebar/Sidebar.mjs
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Sidebar/SidebarCollapse.mjs
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
var import_react52 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/esm/components/Tooltip/Tooltip.mjs
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Floating/Floating.mjs
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
var import_react49 = __toESM(require_react(), 1);
var Floating = ({
  animation = "duration-300",
  arrow: arrow3 = true,
  children,
  className,
  content,
  placement = "top",
  style = "dark",
  theme: theme2,
  trigger = "hover",
  minWidth,
  ...props
}) => {
  const arrowRef = (0, import_react49.useRef)(null);
  const [open, setOpen] = (0, import_react49.useState)(false);
  const floatingProperties = useBaseFLoating({
    open,
    placement,
    arrowRef,
    setOpen
  });
  const {
    context,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    refs,
    strategy,
    update,
    x,
    y
  } = floatingProperties;
  const focus = useFocus(context);
  const { getFloatingProps, getReferenceProps } = useFloatingInteractions({
    context,
    role: "tooltip",
    trigger,
    interactions: [focus]
  });
  (0, import_react49.useEffect)(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [open, refs.floating, refs.reference, update]);
  return (0, import_jsx_runtime77.jsxs)(import_jsx_runtime77.Fragment, { children: [
    (0, import_jsx_runtime77.jsx)(
      "div",
      {
        ref: refs.setReference,
        className: theme2.target,
        "data-testid": "flowbite-tooltip-target",
        ...getReferenceProps(),
        children
      }
    ),
    (0, import_jsx_runtime77.jsxs)(
      "div",
      {
        ref: refs.setFloating,
        "data-testid": "flowbite-tooltip",
        ...getFloatingProps({
          className: twMerge(
            theme2.base,
            animation && `${theme2.animation} ${animation}`,
            !open && theme2.hidden,
            theme2.style[style],
            className
          ),
          style: {
            position: strategy,
            top: y ?? " ",
            left: x ?? " ",
            minWidth
          },
          ...props
        }),
        children: [
          (0, import_jsx_runtime77.jsx)("div", { className: theme2.content, children: content }),
          arrow3 && (0, import_jsx_runtime77.jsx)(
            "div",
            {
              className: twMerge(
                theme2.arrow.base,
                style === "dark" && theme2.arrow.style.dark,
                style === "light" && theme2.arrow.style.light,
                style === "auto" && theme2.arrow.style.auto
              ),
              "data-testid": "flowbite-tooltip-arrow",
              ref: arrowRef,
              style: {
                top: arrowY ?? " ",
                left: arrowX ?? " ",
                right: " ",
                bottom: " ",
                [getArrowPlacement({ placement: floatingProperties.placement })]: theme2.arrow.placement
              },
              children: " "
            }
          )
        ]
      }
    )
  ] });
};

// node_modules/flowbite-react/dist/esm/components/Tooltip/Tooltip.mjs
var Tooltip = ({
  animation = "duration-300",
  arrow: arrow3 = true,
  children,
  className,
  content,
  placement = "top",
  style = "dark",
  theme: customTheme = {},
  trigger = "hover",
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().tooltip, customTheme);
  return (0, import_jsx_runtime78.jsx)(
    Floating,
    {
      animation,
      arrow: arrow3,
      content,
      placement,
      style,
      theme: theme2,
      trigger,
      className,
      ...props,
      children
    }
  );
};
Tooltip.displayName = "Tooltip";

// node_modules/flowbite-react/dist/esm/components/Sidebar/SidebarContext.mjs
var import_react50 = __toESM(require_react(), 1);
var SidebarContext = (0, import_react50.createContext)(void 0);
function useSidebarContext() {
  const context = (0, import_react50.useContext)(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext should be used within the SidebarContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Sidebar/SidebarItemContext.mjs
var import_react51 = __toESM(require_react(), 1);
var SidebarItemContext = (0, import_react51.createContext)(void 0);
function useSidebarItemContext() {
  const context = (0, import_react51.useContext)(SidebarItemContext);
  if (!context) {
    throw new Error("useSidebarItemContext should be used within the SidebarItemContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Sidebar/SidebarCollapse.mjs
var SidebarCollapse = ({
  children,
  className,
  icon: Icon,
  label,
  chevronIcon: ChevronIcon = HiChevronDown,
  renderChevronIcon,
  open = false,
  theme: customTheme = {},
  ...props
}) => {
  const id = (0, import_react52.useId)();
  const [isOpen, setOpen] = (0, import_react52.useState)(open);
  const { theme: rootTheme, isCollapsed } = useSidebarContext();
  const theme2 = mergeDeep(rootTheme.collapse, customTheme);
  (0, import_react52.useEffect)(() => setOpen(open), [open]);
  const Wrapper = ({ children: children2 }) => (0, import_jsx_runtime79.jsx)("li", { children: isCollapsed && !isOpen ? (0, import_jsx_runtime79.jsx)(Tooltip, { content: label, placement: "right", children: children2 }) : children2 });
  return (0, import_jsx_runtime79.jsxs)(Wrapper, { children: [
    (0, import_jsx_runtime79.jsxs)(
      "button",
      {
        id: `flowbite-sidebar-collapse-${id}`,
        onClick: () => setOpen(!isOpen),
        title: label,
        type: "button",
        className: twMerge(theme2.button, className),
        ...props,
        children: [
          Icon && (0, import_jsx_runtime79.jsx)(
            Icon,
            {
              "aria-hidden": true,
              "data-testid": "flowbite-sidebar-collapse-icon",
              className: twMerge(theme2.icon.base, theme2.icon.open[isOpen ? "on" : "off"])
            }
          ),
          isCollapsed ? (0, import_jsx_runtime79.jsx)("span", { className: "sr-only", children: label }) : (0, import_jsx_runtime79.jsxs)(import_jsx_runtime79.Fragment, { children: [
            (0, import_jsx_runtime79.jsx)("span", { "data-testid": "flowbite-sidebar-collapse-label", className: theme2.label.base, children: label }),
            renderChevronIcon ? renderChevronIcon(theme2, isOpen) : (0, import_jsx_runtime79.jsx)(
              ChevronIcon,
              {
                "aria-hidden": true,
                className: twMerge(theme2.label.icon.base, theme2.label.icon.open[isOpen ? "on" : "off"])
              }
            )
          ] })
        ]
      }
    ),
    (0, import_jsx_runtime79.jsx)("ul", { "aria-labelledby": `flowbite-sidebar-collapse-${id}`, hidden: !isOpen, className: theme2.list, children: (0, import_jsx_runtime79.jsx)(SidebarItemContext.Provider, { value: { isInsideCollapse: true }, children }) })
  ] });
};
SidebarCollapse.displayName = "Sidebar.Collapse";

// node_modules/flowbite-react/dist/esm/components/Sidebar/SidebarCTA.mjs
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
var SidebarCTA = ({
  children,
  color = "info",
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, isCollapsed } = useSidebarContext();
  const theme2 = mergeDeep(rootTheme.cta, customTheme);
  return (0, import_jsx_runtime80.jsx)(
    "div",
    {
      "data-testid": "sidebar-cta",
      hidden: isCollapsed,
      className: twMerge(theme2.base, theme2.color[color], className),
      ...props,
      children
    }
  );
};
SidebarCTA.displayName = "Sidebar.CTA";

// node_modules/flowbite-react/dist/esm/components/Sidebar/SidebarItem.mjs
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
var import_react53 = __toESM(require_react(), 1);
var ListItem2 = ({ id, theme: theme2, isCollapsed, tooltipChildren, children: wrapperChildren, ...props }) => (0, import_jsx_runtime81.jsx)("li", { ...props, children: isCollapsed ? (0, import_jsx_runtime81.jsx)(
  Tooltip,
  {
    content: (0, import_jsx_runtime81.jsx)(Children4, { id, theme: theme2, children: tooltipChildren }),
    placement: "right",
    children: wrapperChildren
  }
) : wrapperChildren });
var Children4 = ({ id, theme: theme2, children }) => {
  return (0, import_jsx_runtime81.jsx)(
    "span",
    {
      "data-testid": "flowbite-sidebar-item-content",
      id: `flowbite-sidebar-item-${id}`,
      className: twMerge(theme2.content.base),
      children
    }
  );
};
var SidebarItem = (0, import_react53.forwardRef)(
  ({
    active: isActive,
    as: Component = "a",
    children,
    className,
    icon: Icon,
    label,
    labelColor = "info",
    theme: customTheme = {},
    ...props
  }, ref) => {
    var _a, _b, _c, _d;
    const id = (0, import_react53.useId)();
    const { theme: rootTheme, isCollapsed } = useSidebarContext();
    const { isInsideCollapse } = useSidebarItemContext();
    const theme2 = mergeDeep(rootTheme.item, customTheme);
    return (0, import_jsx_runtime81.jsx)(ListItem2, { theme: theme2, className: theme2.listItem, id, isCollapsed, tooltipChildren: children, children: (0, import_jsx_runtime81.jsxs)(
      Component,
      {
        "aria-labelledby": `flowbite-sidebar-item-${id}`,
        ref,
        className: twMerge(
          theme2.base,
          isActive && theme2.active,
          !isCollapsed && isInsideCollapse && ((_a = theme2.collapsed) == null ? void 0 : _a.insideCollapse),
          className
        ),
        ...props,
        children: [
          Icon && (0, import_jsx_runtime81.jsx)(
            Icon,
            {
              "aria-hidden": true,
              "data-testid": "flowbite-sidebar-item-icon",
              className: twMerge((_b = theme2.icon) == null ? void 0 : _b.base, isActive && ((_c = theme2.icon) == null ? void 0 : _c.active))
            }
          ),
          isCollapsed && !Icon && (0, import_jsx_runtime81.jsx)("span", { className: (_d = theme2.collapsed) == null ? void 0 : _d.noIcon, children: children.charAt(0).toLocaleUpperCase() ?? "?" }),
          !isCollapsed && (0, import_jsx_runtime81.jsx)(Children4, { id, theme: theme2, children }),
          !isCollapsed && label && (0, import_jsx_runtime81.jsx)(Badge, { color: labelColor, "data-testid": "flowbite-sidebar-label", hidden: isCollapsed, className: theme2.label, children: label })
        ]
      }
    ) });
  }
);
SidebarItem.displayName = "Sidebar.Item";

// node_modules/flowbite-react/dist/esm/components/Sidebar/SidebarItemGroup.mjs
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
var SidebarItemGroup = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme } = useSidebarContext();
  const theme2 = mergeDeep(rootTheme.itemGroup, customTheme);
  return (0, import_jsx_runtime82.jsx)("ul", { "data-testid": "flowbite-sidebar-item-group", className: twMerge(theme2.base, className), ...props, children: (0, import_jsx_runtime82.jsx)(SidebarItemContext.Provider, { value: { isInsideCollapse: false }, children }) });
};
SidebarItemGroup.displayName = "Sidebar.ItemGroup";

// node_modules/flowbite-react/dist/esm/components/Sidebar/SidebarItems.mjs
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
var SidebarItems = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useSidebarContext();
  const theme2 = mergeDeep(rootTheme.items, customTheme);
  return (0, import_jsx_runtime83.jsx)("div", { className: twMerge(theme2.base, className), "data-testid": "flowbite-sidebar-items", ...props, children });
};
SidebarItems.displayName = "Sidebar.Items";

// node_modules/flowbite-react/dist/esm/components/Sidebar/SidebarLogo.mjs
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
var import_react54 = __toESM(require_react(), 1);
var SidebarLogo = ({
  children,
  className,
  href,
  img,
  imgAlt = "",
  theme: customTheme = {},
  ...props
}) => {
  const id = (0, import_react54.useId)();
  const { theme: rootTheme, isCollapsed } = useSidebarContext();
  const theme2 = mergeDeep(rootTheme.logo, customTheme);
  return (0, import_jsx_runtime84.jsxs)(
    "a",
    {
      "aria-labelledby": `flowbite-sidebar-logo-${id}`,
      href,
      className: twMerge(theme2.base, className),
      ...props,
      children: [
        (0, import_jsx_runtime84.jsx)("img", { alt: imgAlt, src: img, className: theme2.img }),
        (0, import_jsx_runtime84.jsx)("span", { className: theme2.collapsed[isCollapsed ? "on" : "off"], id: `flowbite-sidebar-logo-${id}`, children })
      ]
    }
  );
};
SidebarLogo.displayName = "Sidebar.Logo";

// node_modules/flowbite-react/dist/esm/components/Sidebar/Sidebar.mjs
var SidebarComponent = ({
  children,
  as: Component = "nav",
  collapseBehavior = "collapse",
  collapsed: isCollapsed = false,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().sidebar, customTheme);
  return (0, import_jsx_runtime85.jsx)(SidebarContext.Provider, { value: { theme: theme2, isCollapsed }, children: (0, import_jsx_runtime85.jsx)(
    Component,
    {
      "aria-label": "Sidebar",
      hidden: isCollapsed && collapseBehavior === "hide",
      className: twMerge(theme2.root.base, theme2.root.collapsed[isCollapsed ? "on" : "off"], className),
      ...props,
      children: (0, import_jsx_runtime85.jsx)("div", { className: theme2.root.inner, children })
    }
  ) });
};
SidebarComponent.displayName = "Sidebar";
var Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo
});

// node_modules/flowbite-react/dist/esm/components/Table/Table.mjs
var import_jsx_runtime91 = __toESM(require_jsx_runtime(), 1);
var import_react63 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/esm/components/Table/TableBody.mjs
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
var import_react57 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/esm/components/Table/TableBodyContext.mjs
var import_react55 = __toESM(require_react(), 1);
var TableBodyContext = (0, import_react55.createContext)(void 0);
function useTableBodyContext() {
  const context = (0, import_react55.useContext)(TableBodyContext);
  if (!context) {
    throw new Error("useTableBodyContext should be used within the TableBodyContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Table/TableContext.mjs
var import_react56 = __toESM(require_react(), 1);
var TableContext = (0, import_react56.createContext)(void 0);
function useTableContext() {
  const context = (0, import_react56.useContext)(TableContext);
  if (!context) {
    throw new Error("useTableContext should be used within the TableContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Table/TableBody.mjs
var TableBody = (0, import_react57.forwardRef)(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme } = useTableContext();
    const theme2 = mergeDeep(rootTheme.body, customTheme);
    return (0, import_jsx_runtime86.jsx)(TableBodyContext.Provider, { value: { theme: theme2 }, children: (0, import_jsx_runtime86.jsx)("tbody", { className: twMerge(theme2.base, className), ref, ...props, children }) });
  }
);
TableBody.displayName = "Table.Body";

// node_modules/flowbite-react/dist/esm/components/Table/TableCell.mjs
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
var import_react58 = __toESM(require_react(), 1);
var TableCell = (0, import_react58.forwardRef)(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: bodyTheme } = useTableBodyContext();
    const theme2 = mergeDeep(bodyTheme.cell, customTheme);
    return (0, import_jsx_runtime87.jsx)("td", { className: twMerge(theme2.base, className), ref, ...props, children });
  }
);
TableCell.displayName = "Table.Cell";

// node_modules/flowbite-react/dist/esm/components/Table/TableHead.mjs
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
var import_react60 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/esm/components/Table/TableHeadContext.mjs
var import_react59 = __toESM(require_react(), 1);
var TableHeadContext = (0, import_react59.createContext)(void 0);
function useTableHeadContext() {
  const context = (0, import_react59.useContext)(TableHeadContext);
  if (!context) {
    throw new Error("useTableHeadContext should be used within the TableHeadContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Table/TableHead.mjs
var TableHead = (0, import_react60.forwardRef)(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme } = useTableContext();
    const theme2 = mergeDeep(rootTheme.head, customTheme);
    return (0, import_jsx_runtime88.jsx)(TableHeadContext.Provider, { value: { theme: theme2 }, children: (0, import_jsx_runtime88.jsx)("thead", { className: twMerge(theme2.base, className), ref, ...props, children: (0, import_jsx_runtime88.jsx)("tr", { children }) }) });
  }
);
TableHead.displayName = "Table.Head";

// node_modules/flowbite-react/dist/esm/components/Table/TableHeadCell.mjs
var import_jsx_runtime89 = __toESM(require_jsx_runtime(), 1);
var import_react61 = __toESM(require_react(), 1);
var TableHeadCell = (0, import_react61.forwardRef)(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: headTheme } = useTableHeadContext();
    const theme2 = mergeDeep(headTheme.cell, customTheme);
    return (0, import_jsx_runtime89.jsx)("th", { className: twMerge(theme2.base, className), ref, ...props, children });
  }
);
TableHeadCell.displayName = "Table.HeadCell";

// node_modules/flowbite-react/dist/esm/components/Table/TableRow.mjs
var import_jsx_runtime90 = __toESM(require_jsx_runtime(), 1);
var import_react62 = __toESM(require_react(), 1);
var TableRow = (0, import_react62.forwardRef)(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme, hoverable, striped } = useTableContext();
    const theme2 = mergeDeep(rootTheme.row, customTheme);
    return (0, import_jsx_runtime90.jsx)(
      "tr",
      {
        ref,
        "data-testid": "table-row-element",
        className: twMerge(theme2.base, striped && theme2.striped, hoverable && theme2.hovered, className),
        ...props,
        children
      }
    );
  }
);
TableRow.displayName = "Table.Row";

// node_modules/flowbite-react/dist/esm/components/Table/Table.mjs
var TableComponent = (0, import_react63.forwardRef)(
  ({ children, className, striped, hoverable, theme: customTheme = {}, ...props }, ref) => {
    const theme2 = mergeDeep(getTheme().table, customTheme);
    return (0, import_jsx_runtime91.jsx)("div", { "data-testid": "table-element", className: twMerge(theme2.root.wrapper), children: (0, import_jsx_runtime91.jsxs)(TableContext.Provider, { value: { theme: theme2, striped, hoverable }, children: [
      (0, import_jsx_runtime91.jsx)("div", { className: twMerge(theme2.root.shadow, className) }),
      (0, import_jsx_runtime91.jsx)("table", { className: twMerge(theme2.root.base, className), ...props, ref, children })
    ] }) });
  }
);
TableComponent.displayName = "Table";
var Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell
});

// node_modules/flowbite-react/dist/esm/components/Tabs/TabItem.mjs
var import_jsx_runtime92 = __toESM(require_jsx_runtime(), 1);
var TabItem = ({ children, className }) => (0, import_jsx_runtime92.jsx)("div", { className, children });
TabItem.displayName = "Tabs.Item";

// node_modules/flowbite-react/dist/esm/components/Tabs/Tabs.mjs
var import_jsx_runtime93 = __toESM(require_jsx_runtime(), 1);
var import_react64 = __toESM(require_react(), 1);
var TabsComponent = (0, import_react64.forwardRef)(
  ({ children, className, onActiveTabChange, style = "default", theme: customTheme = {}, ...props }, ref) => {
    const theme2 = mergeDeep(getTheme().tabs, customTheme);
    const id = (0, import_react64.useId)();
    const tabs = (0, import_react64.useMemo)(
      () => import_react64.Children.map(
        import_react64.Children.toArray(children),
        ({ props: props2 }) => props2
      ),
      [children]
    );
    const tabRefs = (0, import_react64.useRef)([]);
    const [activeTab, setActiveTab] = (0, import_react64.useState)(
      Math.max(
        0,
        tabs.findIndex((tab) => tab.active)
      )
    );
    const [focusedTab, setFocusedTab] = (0, import_react64.useState)(-1);
    const setActiveTabWithCallback = (activeTab2) => {
      setActiveTab(activeTab2);
      if (onActiveTabChange)
        onActiveTabChange(activeTab2);
    };
    const handleClick = ({ target }) => {
      setActiveTabWithCallback(target);
      setFocusedTab(target);
    };
    const handleKeyboard = ({ event, target }) => {
      if (event.key === "ArrowLeft") {
        setFocusedTab(Math.max(0, focusedTab - 1));
      }
      if (event.key === "ArrowRight") {
        setFocusedTab(Math.min(tabs.length - 1, focusedTab + 1));
      }
      if (event.key === "Enter") {
        setActiveTabWithCallback(target);
        setFocusedTab(target);
      }
    };
    const tabItemStyle = theme2.tablist.tabitem.styles[style];
    const tabItemContainerStyle = theme2.tabitemcontainer.styles[style];
    (0, import_react64.useEffect)(() => {
      var _a;
      (_a = tabRefs.current[focusedTab]) == null ? void 0 : _a.focus();
    }, [focusedTab]);
    (0, import_react64.useImperativeHandle)(ref, () => ({
      setActiveTab: setActiveTabWithCallback
    }));
    return (0, import_jsx_runtime93.jsxs)("div", { className: twMerge(theme2.base, className), children: [
      (0, import_jsx_runtime93.jsx)(
        "div",
        {
          "aria-label": "Tabs",
          role: "tablist",
          className: twMerge(theme2.tablist.base, theme2.tablist.styles[style], className),
          ...props,
          children: tabs.map((tab, index3) => (0, import_jsx_runtime93.jsxs)(
            "button",
            {
              type: "button",
              "aria-controls": `${id}-tabpanel-${index3}`,
              "aria-selected": index3 === activeTab,
              className: twMerge(
                theme2.tablist.tabitem.base,
                tabItemStyle.base,
                index3 === activeTab && tabItemStyle.active.on,
                index3 !== activeTab && !tab.disabled && tabItemStyle.active.off
              ),
              disabled: tab.disabled,
              id: `${id}-tab-${index3}`,
              onClick: () => handleClick({ target: index3 }),
              onKeyDown: (event) => handleKeyboard({ event, target: index3 }),
              ref: (element) => tabRefs.current[index3] = element,
              role: "tab",
              tabIndex: index3 === focusedTab ? 0 : -1,
              style: { zIndex: index3 === focusedTab ? 2 : 1 },
              children: [
                tab.icon && (0, import_jsx_runtime93.jsx)(tab.icon, { className: theme2.tablist.tabitem.icon }),
                tab.title
              ]
            },
            index3
          ))
        }
      ),
      (0, import_jsx_runtime93.jsx)("div", { className: twMerge(theme2.tabitemcontainer.base, tabItemContainerStyle), children: tabs.map((tab, index3) => (0, import_jsx_runtime93.jsx)(
        "div",
        {
          "aria-labelledby": `${id}-tab-${index3}`,
          className: theme2.tabpanel,
          hidden: index3 !== activeTab,
          id: `${id}-tabpanel-${index3}`,
          role: "tabpanel",
          tabIndex: 0,
          children: tab.children
        },
        index3
      )) })
    ] });
  }
);
TabsComponent.displayName = "Tabs";
var Tabs = Object.assign(TabsComponent, {
  Item: TabItem
});

// node_modules/flowbite-react/dist/esm/components/Textarea/Textarea.mjs
var import_jsx_runtime94 = __toESM(require_jsx_runtime(), 1);
var import_react65 = __toESM(require_react(), 1);
var Textarea = (0, import_react65.forwardRef)(
  ({ className, color = "gray", helperText, shadow, theme: customTheme = {}, ...props }, ref) => {
    const theme2 = mergeDeep(getTheme().textarea, customTheme);
    return (0, import_jsx_runtime94.jsxs)(import_jsx_runtime94.Fragment, { children: [
      (0, import_jsx_runtime94.jsx)(
        "textarea",
        {
          ref,
          className: twMerge(theme2.base, theme2.colors[color], theme2.withShadow[shadow ? "on" : "off"], className),
          ...props
        }
      ),
      helperText && (0, import_jsx_runtime94.jsx)(HelperText, { color, children: helperText })
    ] });
  }
);
Textarea.displayName = "Textarea";

// node_modules/flowbite-react/dist/esm/components/ThemeModeScript/ThemeModeScript.mjs
var import_jsx_runtime95 = __toESM(require_jsx_runtime(), 1);
var ThemeModeScript = ({ mode, ...others }) => {
  return (0, import_jsx_runtime95.jsx)(
    "script",
    {
      ...others,
      "data-flowbite-theme-mode-script": true,
      dangerouslySetInnerHTML: {
        __html: getScript({ mode, defaultMode: "light", localStorageKey: "flowbite-theme-mode" })
      }
    }
  );
};
function getScript({
  mode,
  defaultMode,
  localStorageKey
}) {
  return `
    try {
      const mode = window.localStorage.getItem("${localStorageKey}") ?? "${mode}" ?? "${defaultMode}";
      const computedMode =
        mode === "auto" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : mode;

      if (computedMode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {}
  `;
}

// node_modules/flowbite-react/dist/esm/components/Timeline/Timeline.mjs
var import_jsx_runtime102 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Timeline/TimelineBody.mjs
var import_jsx_runtime96 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Timeline/TimelineContentContext.mjs
var import_react66 = __toESM(require_react(), 1);
var TimelineContentContext = (0, import_react66.createContext)(void 0);
function useTimelineContentContext() {
  const context = (0, import_react66.useContext)(TimelineContentContext);
  if (!context) {
    throw new Error("useTimelineContentContext should be used within the TimelineContentContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Timeline/TimelineBody.mjs
var TimelineBody = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: contentTheme } = useTimelineContentContext();
  const theme2 = mergeDeep(contentTheme.body, customTheme);
  return (0, import_jsx_runtime96.jsx)("div", { className: twMerge(theme2.base, className), ...props, children });
};

// node_modules/flowbite-react/dist/esm/components/Timeline/TimelineContent.mjs
var import_jsx_runtime97 = __toESM(require_jsx_runtime(), 1);

// node_modules/flowbite-react/dist/esm/components/Timeline/TimelineContext.mjs
var import_react67 = __toESM(require_react(), 1);
var TimelineContext = (0, import_react67.createContext)(void 0);
function useTimelineContext() {
  const context = (0, import_react67.useContext)(TimelineContext);
  if (!context) {
    throw new Error("useTimelineContext should be used within the TimelineContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Timeline/TimelineItemContext.mjs
var import_react68 = __toESM(require_react(), 1);
var TimelineItemContext = (0, import_react68.createContext)(void 0);
function useTimelineItemContext() {
  const context = (0, import_react68.useContext)(TimelineItemContext);
  if (!context) {
    throw new Error("useTimelineItemContext should be used within the TimelineItemContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Timeline/TimelineContent.mjs
var TimelineContent = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { horizontal } = useTimelineContext();
  const { theme: itemTheme } = useTimelineItemContext();
  const theme2 = mergeDeep(itemTheme.content, customTheme);
  return (0, import_jsx_runtime97.jsx)(TimelineContentContext.Provider, { value: { theme: theme2 }, children: (0, import_jsx_runtime97.jsx)("div", { "data-testid": "timeline-content", className: twMerge(horizontal && theme2.root.base, className), ...props, children }) });
};

// node_modules/flowbite-react/dist/esm/components/Timeline/TimelineItem.mjs
var import_jsx_runtime98 = __toESM(require_jsx_runtime(), 1);
var TimelineItem = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, horizontal } = useTimelineContext();
  const theme2 = mergeDeep(rootTheme.item, customTheme);
  return (0, import_jsx_runtime98.jsx)(TimelineItemContext.Provider, { value: { theme: theme2 }, children: (0, import_jsx_runtime98.jsx)(
    "li",
    {
      "data-testid": "timeline-item",
      className: twMerge(horizontal && theme2.root.horizontal, !horizontal && theme2.root.vertical, className),
      ...props,
      children
    }
  ) });
};

// node_modules/flowbite-react/dist/esm/components/Timeline/TimelinePoint.mjs
var import_jsx_runtime99 = __toESM(require_jsx_runtime(), 1);
var TimelinePoint = ({
  children,
  className,
  icon: Icon,
  theme: customTheme = {},
  ...props
}) => {
  const { horizontal } = useTimelineContext();
  const { theme: itemTheme } = useTimelineItemContext();
  const theme2 = mergeDeep(itemTheme.point, customTheme);
  return (0, import_jsx_runtime99.jsxs)(
    "div",
    {
      "data-testid": "timeline-point",
      className: twMerge(horizontal && theme2.horizontal, !horizontal && theme2.vertical, className),
      ...props,
      children: [
        children,
        Icon ? (0, import_jsx_runtime99.jsx)("span", { className: twMerge(theme2.marker.icon.wrapper), children: (0, import_jsx_runtime99.jsx)(Icon, { "aria-hidden": true, className: twMerge(theme2.marker.icon.base) }) }) : (0, import_jsx_runtime99.jsx)(
          "div",
          {
            className: twMerge(horizontal && theme2.marker.base.horizontal, !horizontal && theme2.marker.base.vertical)
          }
        ),
        horizontal && (0, import_jsx_runtime99.jsx)("div", { className: twMerge(theme2.line) })
      ]
    }
  );
};

// node_modules/flowbite-react/dist/esm/components/Timeline/TimelineTime.mjs
var import_jsx_runtime100 = __toESM(require_jsx_runtime(), 1);
var TimelineTime = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: contentTheme } = useTimelineContentContext();
  const theme2 = mergeDeep(contentTheme.time, customTheme);
  return (0, import_jsx_runtime100.jsx)("time", { className: twMerge(theme2.base, className), ...props, children });
};

// node_modules/flowbite-react/dist/esm/components/Timeline/TimelineTitle.mjs
var import_jsx_runtime101 = __toESM(require_jsx_runtime(), 1);
var TimelineTitle = ({
  as: Tag = "h3",
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: contentTheme } = useTimelineContentContext();
  const theme2 = mergeDeep(contentTheme.title, customTheme);
  return (0, import_jsx_runtime101.jsx)(Tag, { className: twMerge(theme2.base, className), ...props, children });
};

// node_modules/flowbite-react/dist/esm/components/Timeline/Timeline.mjs
var TimelineComponent = ({
  children,
  className,
  horizontal,
  theme: customTheme = {},
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().timeline, customTheme);
  return (0, import_jsx_runtime102.jsx)(TimelineContext.Provider, { value: { theme: theme2, horizontal }, children: (0, import_jsx_runtime102.jsx)(
    "ol",
    {
      "data-testid": "timeline-component",
      className: twMerge(
        horizontal && theme2.root.direction.horizontal,
        !horizontal && theme2.root.direction.vertical,
        className
      ),
      ...props,
      children
    }
  ) });
};
TimelineComponent.displayName = "Timeline";
TimelineItem.displayName = "Timeline.Item";
TimelinePoint.displayName = "Timeline.Point";
TimelineContent.displayName = "Timeline.Content";
TimelineTime.displayName = "Timeline.Time";
TimelineTitle.displayName = "Timeline.Title";
TimelineBody.displayName = "Timeline.Body";
var Timeline = Object.assign(TimelineComponent, {
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
  Time: TimelineTime,
  Title: TimelineTitle,
  Body: TimelineBody
});

// node_modules/flowbite-react/dist/esm/components/Toast/Toast.mjs
var import_jsx_runtime104 = __toESM(require_jsx_runtime(), 1);
var import_react70 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/esm/components/Toast/ToastContext.mjs
var import_react69 = __toESM(require_react(), 1);
var ToastContext = (0, import_react69.createContext)(void 0);
function useToastContext() {
  const context = (0, import_react69.useContext)(ToastContext);
  if (!context) {
    throw new Error("useToastContext should be used within the ToastContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/dist/esm/components/Toast/ToastToggle.mjs
var import_jsx_runtime103 = __toESM(require_jsx_runtime(), 1);
var ToastToggle = ({
  className,
  onClick,
  theme: customTheme = {},
  xIcon: XIcon = HiX,
  onDismiss,
  ...props
}) => {
  const { theme: rootTheme, duration, isClosed, isRemoved, setIsClosed, setIsRemoved } = useToastContext();
  const theme2 = mergeDeep(rootTheme.toggle, customTheme);
  const handleClick = (e) => {
    if (onClick)
      onClick(e);
    if (onDismiss) {
      onDismiss();
      return;
    }
    setIsClosed(!isClosed);
    setTimeout(() => setIsRemoved(!isRemoved), duration);
  };
  return (0, import_jsx_runtime103.jsx)(
    "button",
    {
      "aria-label": "Close",
      onClick: handleClick,
      type: "button",
      className: twMerge(theme2.base, className),
      ...props,
      children: (0, import_jsx_runtime103.jsx)(XIcon, { "aria-hidden": true, className: theme2.icon })
    }
  );
};

// node_modules/flowbite-react/dist/esm/components/Toast/Toast.mjs
var durationClasses = {
  75: "duration-75",
  100: "duration-100",
  150: "duration-150",
  200: "duration-200",
  300: "duration-300",
  500: "duration-500",
  700: "duration-700",
  1e3: "duration-1000"
};
var ToastComponent = ({ children, className, duration = 300, theme: customTheme = {}, ...props }) => {
  const [isClosed, setIsClosed] = (0, import_react70.useState)(false);
  const [isRemoved, setIsRemoved] = (0, import_react70.useState)(false);
  const theme2 = mergeDeep(getTheme().toast, customTheme);
  if (isRemoved) {
    return null;
  }
  return (0, import_jsx_runtime104.jsx)(ToastContext.Provider, { value: { theme: theme2, duration, isClosed, isRemoved, setIsClosed, setIsRemoved }, children: (0, import_jsx_runtime104.jsx)(
    "div",
    {
      "data-testid": "flowbite-toast",
      role: "alert",
      className: twMerge(theme2.root.base, durationClasses[duration], isClosed && theme2.root.closed, className),
      ...props,
      children
    }
  ) });
};
ToastComponent.displayName = "Toast";
ToastToggle.displayName = "Toast.Toggle";
var Toast = Object.assign(ToastComponent, {
  Toggle: ToastToggle
});

// node_modules/flowbite-react/dist/esm/components/ToggleSwitch/ToggleSwitch.mjs
var import_jsx_runtime105 = __toESM(require_jsx_runtime(), 1);
var import_react71 = __toESM(require_react(), 1);
var ToggleSwitch = (0, import_react71.forwardRef)(
  ({
    checked,
    className,
    color = "blue",
    sizing = "md",
    disabled,
    label,
    name,
    onChange,
    theme: customTheme = {},
    ...props
  }, ref) => {
    const id = (0, import_react71.useId)();
    const theme2 = mergeDeep(getTheme().toggleSwitch, customTheme);
    const toggle = () => onChange(!checked);
    const handleClick = () => {
      toggle();
    };
    const handleOnKeyDown = (event) => {
      if (event.code == "Enter") {
        event.preventDefault();
      }
    };
    return (0, import_jsx_runtime105.jsxs)(import_jsx_runtime105.Fragment, { children: [
      name && checked ? (0, import_jsx_runtime105.jsx)("input", { ref, checked, hidden: true, name, readOnly: true, type: "checkbox", className: "sr-only" }) : null,
      (0, import_jsx_runtime105.jsxs)(
        "button",
        {
          "aria-checked": checked,
          "aria-labelledby": `${id}-flowbite-toggleswitch-label`,
          disabled,
          id: `${id}-flowbite-toggleswitch`,
          onClick: handleClick,
          onKeyDown: handleOnKeyDown,
          role: "switch",
          tabIndex: 0,
          type: "button",
          className: twMerge(theme2.root.base, theme2.root.active[disabled ? "off" : "on"], className),
          ...props,
          children: [
            (0, import_jsx_runtime105.jsx)(
              "div",
              {
                "data-testid": "flowbite-toggleswitch-toggle",
                className: twMerge(
                  theme2.toggle.base,
                  theme2.toggle.checked[checked ? "on" : "off"],
                  checked && theme2.toggle.checked.color[color],
                  theme2.toggle.sizes[sizing]
                )
              }
            ),
            (label == null ? void 0 : label.length) ? (0, import_jsx_runtime105.jsx)(
              "span",
              {
                "data-testid": "flowbite-toggleswitch-label",
                id: `${id}-flowbite-toggleswitch-label`,
                className: theme2.root.label,
                children: label
              }
            ) : null
          ]
        }
      )
    ] });
  }
);
ToggleSwitch.displayName = "ToggleSwitch";
export {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Alert,
  Avatar,
  AvatarGroup,
  AvatarGroupCounter,
  Badge,
  Banner,
  BannerCollapseButton,
  Blockquote,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  Carousel,
  Checkbox,
  DarkThemeToggle,
  Datepicker,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  FileInput,
  FloatingLabel,
  Flowbite,
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  HelperText,
  Kbd,
  Label,
  List,
  ListGroup,
  ListGroupItem,
  ListItem,
  MegaMenu,
  MegaMenuDropdown,
  MegaMenuDropdownToggle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Pagination,
  PaginationButton,
  Popover,
  Progress,
  Radio,
  RangeSlider,
  Rating,
  RatingAdvanced,
  RatingStar,
  Select,
  Sidebar,
  SidebarCTA,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
  Spinner,
  TabItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Tabs,
  TextInput,
  Textarea,
  ThemeModeScript,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
  Toast,
  ToastToggle,
  ToggleSwitch,
  Tooltip,
  WeekStart,
  createTheme,
  getTheme,
  getThemeMode,
  theme,
  useThemeMode
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=flowbite-react.js.map
