import { createContext, ReactNode, useEffect, useState } from 'react'

export interface AdressProps {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
}

interface AdressContextType {
  adress: AdressProps
  setEndereco: (endereco: AdressProps) => void
  setValue: (nome: string, value: string) => void
  clearAddress: () => void
}

interface AdressContextProps {
  children: ReactNode
}

const COFFEE_ADRESS_IN_STORAGE_KEY = 'coffeDelivery:endereco'

export const AdressContext = createContext({} as AdressContextType)

export const AdressContextProvider = ({ children }: AdressContextProps) => {
  const [adress, setAdress] = useState<AdressProps>(() => {
    const storadCartAdress = localStorage.getItem(COFFEE_ADRESS_IN_STORAGE_KEY)
    if (storadCartAdress) {
      return JSON.parse(storadCartAdress)
    }
    return {} as AdressProps
  })

  const setEndereco = (endereco: AdressProps) => {
    setAdress(endereco)
  }

  function setValue(nome: string, value: string) {
    setAdress((prevState) => {
      return { ...prevState, [`${nome}`]: value }
    })
  }

  function clearAddress() {
    setAdress({} as AdressProps)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ADRESS_IN_STORAGE_KEY, JSON.stringify(adress))
  }, [adress])

  return (
    <AdressContext.Provider
      value={{ adress, setEndereco, setValue, clearAddress }}
    >
      {children}
    </AdressContext.Provider>
  )
}
