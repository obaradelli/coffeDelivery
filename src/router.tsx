import { Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout/index'
import { Sucess } from './pages/Sucess/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route element={<Header />}>
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sucess" element={<Sucess />} />
      </Route>
    </Routes>
  )
}
