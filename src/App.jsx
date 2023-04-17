// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from 'react'
import Sidebar from "./components/Sidebar/Sidebar"
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import BatchItem from './pages/Batch/BatchItem'
import Esp from './pages/Esp/Esp'
import PicItem from './pages/Pics/PicItem'
import Upload from './pages/Upload/Upload'
import DataState from './states/DataState'
import Alert from './components/common/Alert/Alert'

function App() {

  return (
    <>
      <DataState>
      <Sidebar />
      {/* <Alert/> */}
      <Routes>
        <Route path='/' element={<Sidebar />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/batches' element={<BatchItem />} />
          <Route path='/esps' element={<Esp />} />
          <Route path='/pics' element={<PicItem />} />
          <Route path='/upload' element={<Upload />} />
        </Route>
      </Routes>
      </DataState>
    </>)
}

export default App
