const TOKEN_KEY = 'USER_LOGIN'

export const checkLogin =()=> {
  const userToken = localStorage.getItem(TOKEN_KEY)
  if (!userToken) {
    window.history.pushState(null, 'Page - Login', '#/login')
    window.location.reload()
  }
}

export const userLogin = (values) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(values))
  window.history.pushState(null, 'Page - Home', '#/')
  window.location.reload()
}
