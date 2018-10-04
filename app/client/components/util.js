
export const data = {
    setUserToken: (token) => {
      userToken = token
    }

export const logout () {
  data.setUserToken(null)
  window.localStorage.clear()
  this.setState({
    currentUser: null
  })
}