import { Container } from '@mui/material'

import Header from './components/header/header.component'
import FormOverview from './components/form-overview/form-overview'

import { FormsProvider } from './context/forms/forms.context'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="xl">
        <FormsProvider>
          <FormOverview />
        </FormsProvider>
      </Container>
    </div>
  )
}

export default App
