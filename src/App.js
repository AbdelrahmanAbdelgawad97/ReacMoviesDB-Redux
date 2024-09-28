import './App.css';
import NavBar from './Components/NavBar'
import MovieList from './Components/MovieList'
import { Container } from 'react-bootstrap';
import MovieDetails from './Components/MovieDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <div className="">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MovieList />}/>
            <Route path='/movie/:id' element={<MovieDetails />}/>
            
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
