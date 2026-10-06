import { lazy, Suspense} from 'react';

const Home =lazy(()=> import('./Pages/Home/Home'))
import './App.css'
import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import Movies from './Pages/Movies/Movies';
function App() {



  return (
    <>
      <Suspense fallback={<div>is loading</div>}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path='movies' element={<Movies/> } />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App
