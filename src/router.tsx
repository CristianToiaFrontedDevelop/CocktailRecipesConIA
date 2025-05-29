import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import IndexPage from "./pages/IndexPage"
import RecipesWitchAI from "./pages/RecipesWitchAI"
const Favoritespage = lazy(() => import("./pages/Favoritespage"))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={
            <Suspense fallback="Cargando...">
              <IndexPage/>
            </Suspense>            
            } index />

          <Route path="/favoritos" element={
            <Suspense fallback="Cargando...">
              <Favoritespage/>
            </Suspense>
          } />

           <Route path="/ia" element={
            <Suspense fallback="Cargando...">
              <RecipesWitchAI/>
            </Suspense>
          } />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
