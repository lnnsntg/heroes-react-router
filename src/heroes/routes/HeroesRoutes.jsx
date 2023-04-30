import { Routes, Route, Navigate } from 'react-router-dom'
import { DcPage, MarvelPage } from '../pages'
import { Navbar } from '../../ui'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='marvel' element={<MarvelPage />}></Route>
        <Route path='dc' element={<DcPage />}></Route>
        <Route path='/' element={<Navigate to='/marvel' />}></Route>
      </Routes>
    </>
  )
}
