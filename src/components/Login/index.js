import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  const userDetails = {username: 'rahul', password: 'rahul@2021'}

  const onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  const onClickLogin = async () => {
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      onSuccess(data.jwt_token)
    }

    // console.log(response)
    // console.log(data)
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="container">
      <h1 className="head">Please Login</h1>
      <button type="button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
