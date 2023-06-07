import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './pages/Authentication/Authentication'
import Database from './pages/Database/Database'
import Hosting from './pages/Hosting/Hosting'
import Functions from './pages/Functions/Functions'
import MachineLearning from './pages/MachineLearning/MachineLearning'
import Storage from './pages/Storage/Storage'
import { dashboardTheme } from './dashboardTheme'
import { ThemeProvider } from '@mui/material'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="authentication" element={<Authentication />} />
        <Route path="database" element={<Database />} />
        <Route path="functions" element={<Functions />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="machine-learning" element={<MachineLearning />} />
        <Route path="storage" element={<Storage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>,
  </React.StrictMode>,
)
