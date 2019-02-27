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
  showLoading(content) {
    vue.$toast({
      type: 'loading',
      duration: 0,
      forbidClick: true,
      mask: true,
      message: content || '加载中...'
    });
  },
  hideLoading() {
    vue.$toast.clear();
  },
  toast(content, position = 'middle', duration = 3000, type = 'text') {
    vue.$toast({
      type,
      message: content,
      duration,
      position
    })
  },
  alert(content) {
    vue.$dialog.alert({
      title: '温馨提示',
      message: content
    })
  },
  confirm(content, confirm, cancel) {
    vue.$dialog.confirm({
      title: '温馨提示',
      message: content
    }).then(() => {
      confirm && confirm();
    }).catch(() => {
      cancel && cancel();
    })
  },
}