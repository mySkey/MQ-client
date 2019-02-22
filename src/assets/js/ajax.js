global.ajax = {
  get(url, data) {
    return this.getData(url, data, 'get')
  },
  post(url, data) {
    return this.getData(url, data, 'post')
  },
  getData(url, data='', method = 'get') {
    return new Promise((resolve, reject) => {
      method = method.toUpperCase()
      let xhr = new XMLHttpRequest()
      if (method == 'GET' && data){
        url += '?'
        for(let i in data){
          url += (i + '=' + data[i] + '&')
        }
        url = url.slice(0, url.length - 1)
      }
      xhr.open(method, url, true)
      method = 'GET' ? xhr.send() : xhr.send(data);
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          try {
            var response = JSON.parse(xhr.responseText);
            resolve(response);
          } catch (e) {
            reject(e);
          }
        }
      }
    })
  }
}