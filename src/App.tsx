import { AppRouter } from 'pages/AppRouter'
import { Link, BrowserRouter } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='login'>Login</Link>
        </li>
        <li>
          <Link to='register'>Register</Link>
        </li>
        <li>
          <Link to='reset-password'>Reset Password</Link>
        </li>
        <li>
          <Link to='forgot-password'>Forgot Password</Link>
        </li>
        <li>
          <Link to='account/profile'>Profile</Link>
        </li>
        <li>
          <Link to='account/security'>Security</Link>
        </li>
        <li>
          <Link to='account/notifications'>Notifications</Link>
        </li>
        <li>
          <Link to='account/messages'>Messages</Link>
        </li>
        <li>
          <Link to='listing/all'>Listing</Link>
        </li>
        <li>
          <Link to='listing/latest'>Latest Houses</Link>
        </li>
        <li>
          <Link to='listing/big-houses'>Big Houses</Link>
        </li>
        <li>
          <Link to='listing/small-houses'>Small Houses</Link>
        </li>
      </ul>
    </nav>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>ASSIST Internship 2022</h1>

        <Navigation />

        <AppRouter />
      </div>
    </BrowserRouter>
  )
}

export default App
