const FORM_DATA = [
  {
    formName: 'Chapa1',
    description: 'Por uma cidade livre de acidentes1',
    fields: [
      {
        id: 1,
        label: 'Matricula',
        valueType: 'TEXT',
        required: true
      },
      {
        id: 2,
        label: 'Rota',
        valueType: 'TEXT',
        required: true,
        optionSet: {
          id: 1,
          name: 'Rotas',
          options: [
            {
              id: 1,
              label: 'A. Voador/Xipamanine',
              value: 'M'
            },
            {
              id: 2,
              label: 'Museu/P. Combatentes',
              value: 'F'
            },
            {
              id: 3,
              label: 'Museu/Albazine',
              value: 'F'
            },
            {
              id: 4,
              label: 'Museu/Zimpeto',
              value: 'F'
            }
          ]
        }
      },
      {
        id: 3,
        label: 'Data do Incidente',
        valueType: 'DATE_TIME',
        required: true
      },
      {
        id: 4,
        label: 'Tipo de Infração',
        valueType: 'TEXT',
        renderAs: 'checkbox',
        required: true,
        optionSet: {
          id: 2,
          name: 'Tipos de Infrações',
          options: [
            {
              id: 1,
              label: 'Condução sob efeito de alcool',
              value: 'alcool'
            },
            {
              id: 2,
              label: 'Excesso de velocidade',
              value: 'velocidade'
            },
            {
              id: 3,
              label: 'Superlotado',
              value: 'superlotado'
            }
          ]
        }
      },
      {
        id: 4,
        label: 'Limpeza do carro',
        valueType: 'INTEGER',
        renderAs: 'radio',
        required: true,
        optionSet: {
          id: 3,
          name: 'Limpeza',
          options: [
            {
              id: 1,
              label: 'Limpo',
              value: 1
            },
            {
              id: 2,
              label: 'Aceitavel',
              value: 2
            },
            {
              id: 3,
              label: 'Sujo',
              value: 3
            },
            {
              id: 3,
              label: 'Muito Sujo',
              value: 4
            }
          ]
        }
      },
      {
        id: 2,
        label: 'Observacao',
        valueType: 'LONG_TEXT',
        required: false
      }
    ]
  },
  {
    formName: 'Chapa2',
    description: 'Por uma cidade livre de acidentes2',
    fields: [
      {
        id: 1,
        label: 'Matricula',
        valueType: 'TEXT',
        required: true
      },
      {
        id: 2,
        label: 'Rota',
        valueType: 'TEXT',
        required: true,
        optionSet: {
          id: 1,
          name: 'Rotas',
          options: [
            {
              id: 1,
              label: 'A. Voador/Xipamanine',
              value: 'M'
            },
            {
              id: 2,
              label: 'Museu/P. Combatentes',
              value: 'F'
            },
            {
              id: 3,
              label: 'Museu/Albazine',
              value: 'F'
            },
            {
              id: 4,
              label: 'Museu/Zimpeto',
              value: 'F'
            }
          ]
        }
      },
      {
        id: 3,
        label: 'Data do Incidente',
        valueType: 'DATE_TIME',
        required: true
      },
      {
        id: 4,
        label: 'Tipo de Infração',
        valueType: 'TEXT',
        renderAs: 'checkbox',
        required: true,
        optionSet: {
          id: 2,
          name: 'Tipos de Infrações',
          options: [
            {
              id: 1,
              label: 'Condução sob efeito de alcool',
              value: 'alcool'
            },
            {
              id: 2,
              label: 'Excesso de velocidade',
              value: 'velocidade'
            },
            {
              id: 3,
              label: 'Superlotado',
              value: 'superlotado'
            }
          ]
        }
      },
      {
        id: 4,
        label: 'Limpeza do carro',
        valueType: 'INTEGER',
        renderAs: 'radio',
        required: true,
        optionSet: {
          id: 3,
          name: 'Limpeza',
          options: [
            {
              id: 1,
              label: 'Limpo',
              value: 1
            },
            {
              id: 2,
              label: 'Aceitavel',
              value: 2
            },
            {
              id: 3,
              label: 'Sujo',
              value: 3
            },
            {
              id: 3,
              label: 'Muito Sujo',
              value: 4
            }
          ]
        }
      },
      {
        id: 2,
        label: 'Observacao',
        valueType: 'LONG_TEXT',
        required: false
      }
    ]
  },
  {
    formName: 'Chapa3',
    description: 'Por uma cidade livre de acidentes3',
    fields: [
      {
        id: 1,
        label: 'Matricula',
        valueType: 'TEXT',
        required: true
      },
      {
        id: 2,
        label: 'Rota',
        valueType: 'TEXT',
        required: true,
        optionSet: {
          id: 1,
          name: 'Rotas',
          options: [
            {
              id: 1,
              label: 'A. Voador/Xipamanine',
              value: 'M'
            },
            {
              id: 2,
              label: 'Museu/P. Combatentes',
              value: 'F'
            },
            {
              id: 3,
              label: 'Museu/Albazine',
              value: 'F'
            },
            {
              id: 4,
              label: 'Museu/Zimpeto',
              value: 'F'
            }
          ]
        }
      },
      {
        id: 3,
        label: 'Data do Incidente',
        valueType: 'DATE_TIME',
        required: true
      },
      {
        id: 4,
        label: 'Tipo de Infração',
        valueType: 'TEXT',
        renderAs: 'checkbox',
        required: true,
        optionSet: {
          id: 2,
          name: 'Tipos de Infrações',
          options: [
            {
              id: 1,
              label: 'Condução sob efeito de alcool',
              value: 'alcool'
            },
            {
              id: 2,
              label: 'Excesso de velocidade',
              value: 'velocidade'
            },
            {
              id: 3,
              label: 'Superlotado',
              value: 'superlotado'
            }
          ]
        }
      },
      {
        id: 4,
        label: 'Limpeza do carro',
        valueType: 'INTEGER',
        renderAs: 'radio',
        required: true,
        optionSet: {
          id: 3,
          name: 'Limpeza',
          options: [
            {
              id: 1,
              label: 'Limpo',
              value: 1
            },
            {
              id: 2,
              label: 'Aceitavel',
              value: 2
            },
            {
              id: 3,
              label: 'Sujo',
              value: 3
            },
            {
              id: 3,
              label: 'Muito Sujo',
              value: 4
            }
          ]
        }
      },
      {
        id: 2,
        label: 'Observacao',
        valueType: 'LONG_TEXT',
        required: false
      }
    ]
  }
]

export default FORM_DATA
