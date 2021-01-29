var dataTypeValid = {
  /** ************************************** 数据类型校验相关 *************************************************/
  isBoolean(value) {
    return typeof value === "boolean";
  },
  isString(value) {
    return typeof value === "string" || value instanceof String;
  },
  isNumber(value) {
    return typeof value === "number" && isFinite(value);
  },
  isArray(value) {
    return Object.prototype.toString.call(value) === "[object Array]";
  },
  isFunction(value) {
    return typeof value === "function";
  },
  isObject(value) {
    return (
      Boolean(value) &&
      typeof value === "object" &&
      value.constructor === Object
    );
  },
  isNull(value) {
    return value === null;
  },
  isUndefined(value) {
    return typeof value === "undefined";
  },
  isEmpty(value) {
    return value === "";
  },
  isRegExp(value) {
    return (
      Boolean(value) &&
      typeof value === "object" &&
      value.constructor === RegExp
    );
  },
};
