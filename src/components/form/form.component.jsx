import React, { useContext, useState } from 'react'
import { nanoid } from 'nanoid'
import {
  Box,
  Checkbox,
  FormControl,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from '@mui/material'

import RadioCheckbox from '../radio-checkbox/radio-checkbox'

import { FormsContext } from '../../context/forms/forms.context'

const Form = () => {
  const { currentForm, form } = useContext(FormsContext)

  const { formName, description, fields } = form[currentForm]

  const [rota, setRota] = useState('')
  const [data, setData] = useState('')

  const handleChange = (event) => {
    const { value, id } = event.target
    setRota(event.target.value)

    if (id === 'rota') {
      setRota(value)
    } else {
      setData(value)
    }
  }

  return (
    <Box>
      <Typography variant="h3" component="div">
        {formName}
      </Typography>
      <Typography sx={{ fontSize: '1.6rem', marginTop: '1rem' }}>{description}</Typography>
      {fields.map((field) => {
        const {
          label, optionSet, renderAs, required, valueType
        } = field

        if (optionSet) {
          if (renderAs) {
            return (
              <FormControl component="fieldset">
                <FormLabel component="legend">{label}</FormLabel>
                {renderAs === 'checkbox' ? (
                  <FormGroup row>
                    {optionSet.options.map((option) => (
                      <RadioCheckbox
                        key={nanoid()}
                        control={<Checkbox />}
                        label={option.label}
                        required={required}
                      />
                    ))}
                  </FormGroup>
                ) : (
                  <RadioGroup row>
                    {optionSet.options.map((option) => (
                      <RadioCheckbox
                        key={nanoid()}
                        control={<Radio />}
                        label={option.value}
                        value={option.label}
                        required={required}
                      />
                    ))}
                  </RadioGroup>
                )}
              </FormControl>
            )
          }
          return (
            <FormControl fullWidth>
              <InputLabel id="lblRota">{label}</InputLabel>
              <Select
                labelId="lblRota"
                id="rota"
                value={rota}
                label={label}
                onChange={handleChange}
              >
                {optionSet.options.map((option) => (
                  <MenuItem key={nanoid()} value={option.value} required={required}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )
        }

        if (valueType === 'TEXT') {
          return <TextField required label={label} />
        }

        if (valueType === 'DATE_TIME') {
          return (
            <TextField
              label={label}
              id="data"
              value={data}
              onChange={handleChange}
              type="datetime-local"
              InputLabelProps={{
                shrink: true
              }}
            />
          )
        }

        return <TextField label={label} row={4} multiline />
      })}
    </Box>
  )
}

export default Form
