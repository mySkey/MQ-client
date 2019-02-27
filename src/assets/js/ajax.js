export let api_url = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'http://mq.22family.com';
export let ajax = {
  async get(url, data) {
    return new Promise((resolve, reject) => {
      vue.$axios({
        url: api_url + '/api/' + url,
        method: 'get',
        params: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Token': common.getLStore('token') || ''
        }
      }).then((res) => {
        if(res.code == 402){
          this.$router.replace('/login')
        }
        return resolve(res.data);
      });
    }).catch((err) => {
      return err;
    });
  },
  async post(url, data) {
    return new Promise((resolve, reject) => {
      vue.$axios({
        url: api_url + '/api/' + url,
        method: 'post',
        data: data,
        transformRequest: [function (data) {
          let ret = ''
          for (let i in data) {
            ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
          }
          return ret;
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Token': common.getLStore('token') || ''
        }
      }).then((res) => {
        return resolve(res.data);
      });
    }).catch((err) => {
      return err;
    });
  }
};

