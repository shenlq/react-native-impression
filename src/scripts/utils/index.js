
// 是否String
export const isString = string => {
    return Object.prototype.toString.call(string) === '[object String]';
};
