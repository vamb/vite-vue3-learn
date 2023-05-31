const TOKEN_KEY = 'USER_LOGIN'

export const hashPush = (params) => {
  if (params && params['url']) {
    window.history.pushState(null, params['title'] || null, params['url'].startsWith('#')? params['url']: '#' + params['url'])
    window.location.reload()
  }
}

export const checkLogin =()=> {
  const userToken = localStorage.getItem(TOKEN_KEY)
  if (!userToken) {
    hashPush({title: 'Page - Login', url: '#/login'})
  }
}

export const userLogin = (values) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(values))
  hashPush({title: 'Page - Home', url: '#/'})
}
