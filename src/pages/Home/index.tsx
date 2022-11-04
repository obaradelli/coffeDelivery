import React from 'react'
import { Header } from '../../components/Header'
import { CoffeeList } from './components/CoffeeList'
import { Intro } from './components/Intro'

export function Home() {
  return (
    <>
      <Header />
      <Intro />
      <CoffeeList />
    </>
  )
}
