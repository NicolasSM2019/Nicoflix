
import { createRoot } from 'react-dom/client'
import './index.css'
import PagePerfil from './pages/PagePerfil.jsx'
import PageHome from './pages/PageHome.jsx'
import PageConta from './pages/PageConta.jsx'
import PageGerencia_perfil from './pages/PageGerencia_perfil.jsx'
import PageInfo_halo from './pages/PageInfo_halo.jsx'

import PageSerie from './pages/PageSerie.jsx'
import PageFilmes from './pages/PageFilmes.jsx'
import PageBombando from './pages/PageBombando.jsx'
import PageMinhaLista from './pages/PageMinhaLista.jsx'
import PageNavegarindiomas from './pages/PageNavegarindiomas.jsx'
import PageIniciar from './pages/PageInicar.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PagePerfil />} />
      <Route path='/home' element={<PageHome />} />
      <Route path='/conta' element={<PageConta />} />
      <Route path='/gerenciarperfil' element={<PageGerencia_perfil />} />
      <Route path='/info_halo' element={<PageInfo_halo />} />
      <Route path='/Serie' element={<PageSerie />} />
      <Route path='/Filmes' element={<PageFilmes />} />
      <Route path='/Bombando' element={<PageBombando />} />
      <Route path='/assistir_tela_inicio' element={<PageIniciar />} />

      <Route path='/MinhaLista' element={<PageMinhaLista />} />
      <Route path='/indiomas' element={<PageNavegarindiomas />} />

    </Routes>
  </BrowserRouter>

)
