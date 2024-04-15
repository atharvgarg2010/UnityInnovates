import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import LogIn from './Components/Login';
import User from './Components/User';
import NotesState from './Context/Note/NotesState';
import Home from './Components/Home';
import Sdgs from './Components/Sdgs';
import Category from './Components/Category';
import Allposts from './Components/Allposts';
import Fullpost from './Components/Fullpost';
import About from './Components/About.jsx';
import NewPost from './Components/NewPost.jsx';
// import * as coreui from '@coreui/coreui-icons'



function App() {
  // window.coreui = coreui
  return (
    <>
      <>
        <NotesState>
          <Router>
            <Navbar />
            {/* <br/> */}
            <Routes>
              <Route path='/about' element={
                <>
                  <Home />
                  <About/>
                </>
              } />
              <Route path='/Gallery' element={
                <>
                  {/* <Gallery /> */}
                  <Home />

                </>
              } />
              <Route path='/contact' element={
                <>
                  {/* <JoinUs /> */}
                  <Home />

                </>
              } />
              <Route path='/' element={
                <>
            <Home />

                <Sdgs/>
                <Category/>
                <Allposts/>
                </>
              } />
              <Route path='/SignIn' element={
                <>
            <Home />

                  <SignUp></SignUp>
                </>
              } />
              <Route path='/login' element={
                <>
            <Home />

                  <LogIn></LogIn>
                </>
              } />
              <Route path='/user' element={
                <>
            <Home />

                  <User></User>
                </>
              } />
              <Route path='/postall' element={
                <>
                  <Fullpost/>
                </>
              } />
              <Route path='/newpost' element={
                <>
                  <Home/>
                  <NewPost/>
                </>
              } />

            </Routes>
            {/* <Footer/> */}
          </Router>
        </NotesState>
      </>
    </>
  );
}

export default App;
