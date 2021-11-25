import { createContext, useState } from 'react'

import FORM_DATA from '../../apis/form.data'

export const FormsContext = createContext({
  currentForm: 0,
  form: [],
  showForm: () => {}
})

export const FormsProvider = ({ children }) => {
  const [currentForm, setCurrentForm] = useState(-1)
  const [form, setForm] = useState([...FORM_DATA])

  const showForm = (index) => {
    setCurrentForm(index)
  }

  return (
    <FormsContext.Provider
      value={{
        currentForm,
        form,
        showForm
      }}
    >
      {children}
    </FormsContext.Provider>
  )
}
