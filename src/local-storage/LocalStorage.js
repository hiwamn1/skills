export function getFronLocalStorage(key) {
  return JSON.parse(window.localStorage.getItem(key));
}
export function setInLocalStorage(key, data) {
  return window.localStorage.setItem(key, JSON.stringify(data));
}
export function removeFromLocalStorage(key) {
  return window.localStorage.removeItem(key);
}

export function getToken(tokenKey) {
  const result = window.localStorage.getItem(tokenKey);
  if (result) 
  return result;
  return null;
}
