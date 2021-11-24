import React from 'react'
import { Typography, Box } from '@mui/material'
import DynamicFormIcon from '@mui/icons-material/DynamicForm'

const Header = () => (
  <Box
    sx={{
      width: '100%',
      padding: '2rem',
      backgroundColor: '#C36A2D',
      color: '#FBFBFB'
    }}
  >
    <Typography variant="h2" sx={{ display: 'flex', alignItems: 'center' }}>
      <DynamicFormIcon sx={{ fontSize: 40, marginRight: '1rem' }} />
      Speranza Forms
    </Typography>
  </Box>
)

export default Header
