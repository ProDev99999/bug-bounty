import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';


import LogInPage from '@pages/auth/LogInPage';
import SignUpPage from '@pages/auth/SignUpPage';

import HomePage from '@pages/HomePage'
import Dashboard from '@pages/Dashboard'

import TestComponent from './test.component';
import ContactUsPage from "@pages/ContactUsPage";
// import { useSelector } from 'react-redux'


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#F5F5F5',
  }
}))

function App(props) {
  const classes = useStyles(props)
  // const userData = useSelector(state => state.user)

  return (
    <Router>
      <div className={clsx(classes.root, "App flex flex-col items-center")}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact_us" element={<ContactUsPage />} />


          <Route path="/test" element={<TestComponent />} />

          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
