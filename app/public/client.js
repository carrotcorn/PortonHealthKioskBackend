class Backend {
  constructor (base) {
    if (base.endsWith('/')) {
      base = base.substr(0, base.length - 1)
    }
    this.base = base
  }

  async call (method, path, body) {
    const csrf = await window.fetch(this.base + '/csrf').then(x => x.json()).then(x => x.result)
    return window.fetch(this.base + path, {
      credentials: 'include',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'x-csrf-token': csrf
      },
      method,
      body
    }).then(x => x.status === 204 ? null : x.json())
  }

  async get (path, body) {
    return this.call('get', path, body)
  }

  async post (path, body) {
    return this.call('post', path, body)
  }

  async put (path, body) {
    return this.call('put', path, body)
  }
}
