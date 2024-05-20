import React from 'react';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import FetchEmployees from './FetchEmployee';
import UpdateEmployee from './UpdateEmployee';
function Layout() {
  return (
    // <div>
    //   <h4>Welcome to MyApp!!</h4>
    //   <main>
    //     <Outlet />  {/* Placeholder for child routes */}
    //   </main>
    // </div>
    <>

    </>
  );
}




function App() {
  return (
    // <Router>
    //   <Link to="/Home">Home</Link>|
    //   <Link to="/about">About</Link>
    //   <Routes>
    //     <Route path="/" element={<Layout />}> {/* Parent route with layout */}
    //       <Route index element={<Home />} /> {/* Home route for exact path "/" */}
    //       <Route path="about" element={<About />} />
    //     </Route>
    //   </Routes>
    // </Router>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FetchEmployees />} />
          <Route path="/update/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
