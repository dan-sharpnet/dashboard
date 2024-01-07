import { useState } from 'react'
import { Box } from '@mui/material'
import './App.css'
import SideNav from './layouts/main/SideNav'

function App() {

  return (
    <>
      <SideNav />
      <Box
          sx={{
            flex: 1,
            pl: '280px', 
          }}
        >
        TEST
      </Box>
    </>
  )
}

export default App
