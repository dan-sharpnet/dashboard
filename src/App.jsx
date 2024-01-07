import { useState } from 'react'
import { Box, Card, Grid } from '@mui/material'
import './App.css'
import SideNav from './layouts/main/SideNav'
import { useTheme } from '@emotion/react'

function App() {
  const theme = useTheme()

  return (
    <>
      <SideNav />
      <Box
          sx={{
            flex: 1,
            pl: '280px', 
          }}
        >
          <Grid container>
            <Grid item xs={4}>
            <Card
              sx={{
                p: 3,
              }}
            >
              Test
            </Card>
            </Grid>
          </Grid>
      </Box>
    </>
  )
}

export default App
