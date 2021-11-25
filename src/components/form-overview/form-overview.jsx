/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react'
import { Box } from '@mui/material'

import FormPreview from '../form-preview/form-preview'

import FormsContext from '../../context/forms/forms.context'

const FormOverview = () => {
  const forms = useContext(FormsContext)

  return (
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, 40rem)" gap={2}>
      {forms.map(({ formName, description, ...otherProps }, index) => (
        <FormPreview key={index} title={formName} detail={description} {...otherProps} />
      ))}
    </Box>
  )
}

export default FormOverview
