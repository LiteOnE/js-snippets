const getCookie = (name) => {
  let cookies = {};
  document.cookie.split(/\s*;\s*/).forEach(s => {let kv = s.split(/\s*=\s*/); cookies[kv[0]] = kv[1];});
  return cookies[name];
}
