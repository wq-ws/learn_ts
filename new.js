// 一个深拷贝函数
function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
