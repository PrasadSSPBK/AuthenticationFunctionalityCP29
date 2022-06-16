import Header from '../Header'
import LogoutButton from '../LogoutButton'

import './index.css'

const Home = () => (
  <div className="container">
    <Header />
    <h1 className="head">Home Route</h1>
    <LogoutButton />
  </div>
)

export default Home
