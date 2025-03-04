import {lazy, Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IndexPage } from './views/IndexPage';
import { Layout } from './layouts/Layout';



const FavoritosPage = lazy(() => import('./views/FavoritosPage'));

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<IndexPage />} index/>
            <Route path='/favoritos' element={
              <Suspense fallback="Cargando...">
                <FavoritosPage />
              </Suspense>
            }/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
