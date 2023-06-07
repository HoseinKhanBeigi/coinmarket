//hooks-helpers.js
export function numberFormat(num, options) {
  let temp = 2;
  if (num < 1 && num > 0.0001) {
    temp = 4;
  }
  if (num < 0.0001) {
    temp = 8;
  }
  let defaultOptions = {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: temp,
    minimumFractionDigits: 2,
    notation: 'standard',
    compactDisplay: 'long',
  };
  return new Intl.NumberFormat('en-US', {
    ...defaultOptions,
    ...options,
  }).format(num);
}

// export function appendSearchParams(obj) {
//   const sp = new Map();
//   Object.entries(obj).forEach(([key, value]) => {
//     if (Array.isArray(key)) {
//       sp.delete(key);
//       value.forEach((v) => sp.append(key, v));
//     } else if (value === undefined) {
//       sp.delete(key);
//     } else {
//       sp.set(key, value);
//     }
//   });
//   return sp;
// }
