export const cyrillic = /^[а-яё -]+$/i;
export const latin = /^[a-zA-Z]+$/;
export const ruslat = /^([а-яё\s]+|[a-z\s]+)$/iu;
export const email = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
export const date = /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/;
export const paspSeries = /^[0-9]{4}$/;
export const paspNo = /^[0-9]{6}$/;

export function todayOrLater(date) {
  return new Date() >= new Date(date);
}

export function validate(valToCheck, rules) {
  let result = [];
  rules.forEach(rule => {
    if (typeof rule === "function") {
      result.push(rule(valToCheck));
    } else {
      result.push(rule.test(valToCheck));
    }
  });
  return !result.includes(false);
}
