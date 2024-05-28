/* eslint-disable @redwoodjs/unsupported-route-components */

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import HomePage from './pages/HomePage/HomePage'
import './index.css'
import LoginPageContainer from './pages/LoginPage/login-container'
import SignupPage from './pages/SignUpPage/signup-page'

const Routes = ({ setLoggedInUser }) => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Companies" titleTo="companies" buttonLabel="New Company" buttonTo="newCompany">
        <Route path="/companies/new" page={CompanyNewCompanyPage} name="newCompany" />
        <Route path="/companies/{id}/edit" page={CompanyEditCompanyPage} name="editCompany" />
        <Route path="/companies/{id}" page={CompanyCompanyPage} name="company" />
        <Route path="/companies" page={CompanyCompaniesPage} name="companies" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/login" page={() => <LoginPageContainer setLoggedInUser={setLoggedInUser} />} name="login" />

      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
