/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react'
import { Box } from '@mui/material'

import FormPreview from '../form-preview/form-preview'
import Form from '../form/form.component'

import { FormsContext } from '../../context/forms/forms.context'

const FormOverview = () => {
  const { currentForm, form } = useContext(FormsContext)

  return (
    <Box margin="3.2rem auto">
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(20rem, 1fr))"
        gap={2}
        justifyContent="center"
      >
        {form.map(({ formName, description, ...otherProps }, index) => (
          <FormPreview
            key={index}
            title={formName}
            detail={description}
            position={index}
            {...otherProps}
          />
        ))}
      </Box>

      {currentForm > -1 && <Form />}
    </Box>
  )
}

export default FormOverview
