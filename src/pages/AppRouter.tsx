import { Routes, Route } from 'react-router-dom'

// auth
import { LoginPage } from 'features/auth/pages/LoginPage'
import { RegisterPage } from 'features/auth/pages/RegisterPage'
import { ForgotPasswordPage } from 'features/auth/pages/ForgotPasswordPage'
import { ResetPasswordPage } from 'features/auth/pages/ResetPasswordPage'

// account
import { ProfilePage } from 'features/account/pages/ProfilePage'
import { SecurityPage } from 'features/account/pages/SecurityPage'
import { NotificationsPage } from 'features/account/pages/NotificationsPage'
import { MessagesPage } from 'features/account/pages/MessagesPage'

// listing
import { ListingPage } from 'features/listing/pages/ListingPage'
import { LatestHousesPage } from 'features/listing/pages/LatestHousesPage'
import { BigHousesPage } from 'features/listing/pages/BigHousesPage'
import { SmallHousesPage } from 'features/listing/pages/SmallHousesPage'

enum Page {
  login = '/login',
  register = '/register',
  resetPassword = '/reset-password',
  forgotPassword = '/forgot-password',
  profile = '/account/profile',
  security = '/account/security',
  notifications = '/account/notifications',
  messages = '/account/messages',
  listing = 'listing/all',
  listingLatest = 'listing/latest',
  listingBigHouses = 'listing/big-houses',
  listingSmallHouses = 'listing/small-houses',
  other = '*',
}

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Page.other} element={<LoginPage />} />
      <Route path={Page.login} element={<LoginPage />} />
      <Route path={Page.register} element={<RegisterPage />} />
      <Route path={Page.resetPassword} element={<ResetPasswordPage />} />
      <Route path={Page.forgotPassword} element={<ForgotPasswordPage />} />
      <Route path={Page.profile} element={<ProfilePage />} />
      <Route path={Page.security} element={<SecurityPage />} />
      <Route path={Page.notifications} element={<NotificationsPage />} />
      <Route path={Page.messages} element={<MessagesPage />} />
      <Route path={Page.listing} element={<ListingPage />} />
      <Route path={Page.listingLatest} element={<LatestHousesPage />} />
      <Route path={Page.listingBigHouses} element={<BigHousesPage />} />
      <Route path={Page.listingSmallHouses} element={<SmallHousesPage />} />
    </Routes>
  )
}
