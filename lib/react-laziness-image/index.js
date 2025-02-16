var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/react-laziness-image/index.tsx
var react_laziness_image_exports = {};
__export(react_laziness_image_exports, {
  default: () => react_laziness_image_default
});
module.exports = __toCommonJS(react_laziness_image_exports);
var import_react = __toESM(require("react"));
var import_lazy = require("../_utils/lazy");
var ReactLazyImagePro = (props) => {
  const {
    useLazy = true,
    className,
    style,
    src,
    defaultSrc,
    ...resProps
  } = props;
  (0, import_react.useEffect)(() => {
    (0, import_lazy.observeInit)();
  }, []);
  const srcProps = {
    style,
    className,
    onError: (e) => {
      if (defaultSrc) {
        e.currentTarget.src = defaultSrc;
      }
    },
    ...resProps
  };
  Object.assign(srcProps, {
    [useLazy ? "data-src" : "src"]: src
  });
  return /* @__PURE__ */ import_react.default.createElement("img", { ...srcProps });
};
var react_laziness_image_default = ReactLazyImagePro;
