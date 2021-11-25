/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react'
import { Box } from '@mui/material'

import FormPreview from '../form-preview/form-preview'

import FormsContext from '../../context/forms/forms.context'

const FormOverview = () => {
  const forms = useContext(FormsContext)

  return (
    <Box
      margin="3.2rem auto"
      display="grid"
      gridTemplateColumns="repeat(auto-fit, 40rem)"
      gap={2}
      justifyContent="center"
    >
      {forms.map(({ formName, description, ...otherProps }, index) => (
        <FormPreview key={index} title={formName} detail={description} {...otherProps} />
      ))}
    </Box>
  )
}

export default FormOverview
