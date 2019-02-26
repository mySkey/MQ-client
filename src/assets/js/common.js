global.common = {
  setStore: function (_k, _v) {
    var v = JSON.stringify(_v);
    sessionStorage.setItem(_k, v);
  },
  getStore: function (_k) {
    var v = sessionStorage.getItem(_k);
    if (v) {
      v = JSON.parse(v);
    }
    return v;
  },
  removeStore: function (_k) {
    sessionStorage.removeItem(_k);
  },
  clearStore: function () {
    sessionStorage.clear();
  },
  setLStore: function (_k, _v) {
    var v = JSON.stringify(_v);
    localStorage.setItem(_k, v);
  },
  getLStore: function (_k) {
    var v = localStorage.getItem(_k);
    if (v) {
      v = JSON.parse(v);
    }
    return v;
  },
  removeLStore: function (_k) {
    localStorage.removeItem(_k);
  },
  clearLStore: function () {
    localStorage.clear();
  },
}