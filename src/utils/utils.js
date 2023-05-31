const TOKEN_KEY = 'USER_LOGIN'

export const checkLogin =()=> {
  const userToken = localStorage.getItem(TOKEN_KEY)
  if (!userToken) {
    window.location.replaceState(null, null, '#/login')
  }
}
