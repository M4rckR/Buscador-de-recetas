import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IndexPage } from './views/IndexPage';
import { FavoritosPage } from './views/FavoritosPage';
import { Layout } from './layouts/Layout';


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<IndexPage />} index/>
            <Route path='/favoritos' element={<FavoritosPage />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
