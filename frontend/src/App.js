import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chart from './components/Chart';
import EmployeeDashboard from './components/Dashboard';
import Footer from './components/Footer';
import SearchBar from './components/SearchComponent';
import MapComponent from './components/MapComponent';


const App = () => {

  return (
    <Router>
      <nav className="navbar">
        <span className="navbar-brand mb-0 h1"> <h1>Employee Management System</h1></span>
      </nav>
      <div className='container'>

        <div className='row'>

          <div className='col-lg-6 col-md-12 col-sm-12 card card-left'>
            <Routes>
              <Route path="/" element={<Chart />} />
            </Routes>
          </div>

          <div className='col-lg col-md col-sm card card-right' >
            <Routes>
              <Route path="/" element={<EmployeeDashboard className="EmployeeDashboard" />} exact />
            </Routes>
          </div> 

        </div>

        

        <div className='row'>

          <div className='col-lg col-md col-sm' >
            <Routes>
              <Route path="/" element={<SearchBar />} exact />
            </Routes>
          </div>
          
        </div>

      </div>
      
      
      <footer>
        <Routes>
          <Route path="/" element={<Footer />} exact />
        </Routes>
      </footer>

    </Router>
  );
};

export default App;




{/* <div>
<LocationMap lat={40.730610} lng={-73.935242} />
</div> */}