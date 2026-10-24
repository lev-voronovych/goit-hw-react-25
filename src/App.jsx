import { lazy, Suspense} from 'react';
import { Route, Routes } from "react-router";

const Layout =lazy(()=> import('./components/Layout/Layout'))
const Home = lazy(() => import('./Pages/Home/Home'))
const Movies = lazy(()=> import('./Pages/Movies/Movies'))
const Movie = lazy(() => import('./components/Movie/Movie'))
const Cast = lazy(() => import('./components/Cast/Cast'))
const Reviews = lazy(() => import('./components/Reviews/Reviews'))

import './App.css'


function App() {
  return (
    <>
      <Suspense fallback={<div>is loading</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<Movie />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App
