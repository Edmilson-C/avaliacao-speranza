import React from 'react'
import {
  Button, Card, CardContent, CardActions, Typography
} from '@mui/material'

const FormPreview = () => (
  <Card
    sx={{
      backgroundColor: '#E2C275', color: '#FBFBFB', borderRadius: '1.2rem', padding: '1rem'
    }}
  >
    <CardContent>
      <Typography variant="h3" component="div">
        Form name
      </Typography>
      <Typography sx={{ fontSize: '1.6rem', marginTop: '1rem' }}>Form Description</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" sx={{ fontSize: '1.2rem', padding: '1rem' }}>
        Ver formulário
      </Button>
    </CardActions>
  </Card>
)

export default FormPreview
