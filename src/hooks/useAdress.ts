import { useContext } from 'react'
import { AdressContext } from '../contexts/AdressContext'

export function useAdress() {
  const context = useContext(AdressContext)
  return context
}
