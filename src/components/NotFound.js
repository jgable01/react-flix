import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

function NotFound() {
  return (
    <div>
      <Container>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
          height: 'calc(100vh - 69px)'
        }}>
        <Typography variant="h2" component="div" sx={
          {
            mb: 2
          }
        }>
          404 - Page not found
        </Typography>
        <Button variant="contained" href="/">Go Home</Button>
        </Box>
      </Container>
    </div>
  )
}

export default NotFound