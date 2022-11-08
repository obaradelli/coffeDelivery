import { createContext, ReactNode, useEffect, useState } from 'react'

interface AdressContextType {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  changeCep: (value: string) => void
  changeRua: (value: string) => void
  changeNumero: (value: string) => void
  changeComplemento: (value: string) => void
  changeBairro: (value: string) => void
  changeCidade: (value: string) => void
  changeUf: (value: string) => void
  setStorage: () => void
}

interface AdressContextProps {
  children: ReactNode
}

export const AdressContext = createContext({} as AdressContextType)

export const AdressContextProvider = ({ children }: AdressContextProps) => {
  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')

  const changeCep = (value: string) => {
    setCep(value)
  }
  const changeRua = (value: string) => {
    setRua(value)
  }
  const changeNumero = (value: string) => {
    setNumero(value)
  }
  const changeComplemento = (value: string) => {
    setComplemento(value)
  }
  const changeBairro = (value: string) => {
    setBairro(value)
  }
  const changeCidade = (value: string) => {
    setCidade(value)
  }
  const changeUf = (value: string) => {
    setUf(value)
  }

  const setStorage = () => {
    const endereco = {
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
    }

    const jEndereco = JSON.stringify(endereco)
    localStorage.setItem('endereco', jEndereco)
  }

  return (
    <AdressContext.Provider
      value={{
        cep,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        uf,
        changeCep,
        changeRua,
        changeNumero,
        changeComplemento,
        changeBairro,
        changeCidade,
        changeUf,
        setStorage,
      }}
    >
      {children}
    </AdressContext.Provider>
  )
}
