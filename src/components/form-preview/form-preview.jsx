import React, { useContext } from 'react'
import {
  Button, Card, CardContent, CardActions, Typography
} from '@mui/material'

import { FormsContext } from '../../context/forms/forms.context'

const FormPreview = ({
  title, detail, position, ...otherProps
}) => {
  const { showForm } = useContext(FormsContext)

  const changeForm = () => {
    showForm(position)
  }

  return (
    <Card
      sx={{
        backgroundColor: '#E2C275',
        color: '#FBFBFB',
        borderRadius: '1.2rem',
        padding: '1rem'
      }}
    >
      <CardContent>
        <Typography variant="h3" component="div">
          {title}
        </Typography>
        <Typography sx={{ fontSize: '1.6rem', marginTop: '1rem' }}>{detail}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ fontSize: '1.2rem', padding: '1rem' }} onClick={changeForm}>
          Ver formulário
        </Button>
      </CardActions>
    </Card>
  )
}

export default FormPreview
