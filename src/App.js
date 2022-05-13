import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import RootView from './views'
import LogInView from './views/LogIn'

export default function App() {
  const [auth, setAuth] = useState(false);

  const onSubmit = () => {
    setAuth(true)
  }

  return (
    <React.Fragment>
      {!auth ?
        <Routes>
          <Route path="/Login" element={<LogInView onSubmit={onSubmit} />} />
          <Route path="*" element={<Navigate to='/Login' replace />} />
        </Routes> :
        <Routes>
          <Route path="/*" element={<RootView />} />
        </Routes>
      }

    </React.Fragment>
  )
}