import React, {useState} from 'react';
import { Button, Popup } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
// import 'reactjs-popup/dist/index.css';
import MapComponent from './MapComponent';


const EmployeeTable = ({ employeeData, onEmployeeSelect, onDelete }) => {

  const [showpop, setShowPop] = useState(false);

  function popupmap(){
    return(
      <Popup style={{height:"300px", width:"400px"}} open trigger={<button className='popup-btn' />} position="right center">
                    <MapComponent latitude={latitude} longitude={longitude} />
                </Popup>
    )
  }

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleClick=(event)=>{
    var city = event.target.value;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=cb9771dde18842f09fafde8f78f53e47`)
        .then(response => response.json())
        .then(data => {
          setLatitude(data.results[0].geometry.lat);
          setLongitude(data.results[0].geometry.lng);
          setShowPop(!showpop);
        })
        .catch(error => console.log(error)
    );
    
   
  }
  return (
    <>
    
    <table className='employee-table'> 
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Address{showpop==true? popupmap() : null}</th>
          <th>Age</th>
          <th>Department</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employeeData.map(employee => (
          <tr key={employee._id}>
            <td>{employee._id}</td>
            <td>{employee.name}</td>
            <td>
                
               <button className='address-btn'
                  onClick={handleClick}
                  value={employee.address}>
                  {employee.address}
                </button>   
            </td>
            <td>{employee.age}</td>
            <td>{employee.department}</td>
            <td>{employee.empstatus}</td>
            <td>
              <button className='btn btn-outline-success' onClick={() => { onEmployeeSelect(employee) }}> Edit </button>
              <button className='btn btn-outline-danger' onClick={() => onDelete(employee._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
    
    
    </>
    
    
  );
};

export default EmployeeTable;

{/* <LocationMap lat={latitude} lng={longitude} /> */}


// const [open, setOpen] = useState[false];
//   const onClickHandle = () => {
//     setOpen(true);
//   };
    // <table className='employee-table'>
    // //   {open && <CityToLatLong />} 





//<Popup trigger={<button>Click</button>} position="right center"> const [city, setCity] = useState('');
// const [latitude, setLatitude] = useState('');
// const [longitude, setLongitude] = useState('');



// const handleSubmit = async (event) => {
//   event.preventDefault();

//   setCity(event.target.value);

//   const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=cb9771dde18842f09fafde8f78f53e47`);
//   const data = await response.json();
//   console.log(data)

//   if (data.results.length > 0) {
//     setLatitude(null);
//     setLongitude(null);
//     setLatitude(data.results[0].geometry.lat);
//     setLongitude(data.results[0].geometry.lng);
//     console.log(latitude);
//     console.log(longitude)
    
//   } else {
//     alert(`Could not find coordinates for "${city}"`);
//   }
  
// }






// event.preventDefault(); // prevent the default form submit behavior

// const [cityName, setCityName] = useState(''); // initialize cityName state
// const [latitude, setLatitude] = useState('');
// const [longitude, setLongitude] = useState('');

// const apiKey = 'bf4ba2caea8cebb141d561fe1e15179e'; // API key

// // get the value of the input field by its name attribute
// const city = event.target.elements.city.value;

// // call the API with the city name
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
//   .then(response => response.json())
//   .then(data => {
//     // extract the latitude and longitude from the API response
//     const lat = data.coord.lat;
//     const lon = data.coord.lon;

//     // update the state with the latitude and longitude
//     setCityName(city);
//     setLatitude(lat);
//     setLongitude(lon);
//     console.log(latitude, longitude)
//   });




// const [city, setCity] = useState('');
// const [latitude, setLatitude] = useState('');
// const [longitude, setLongitude] = useState('');



// const handleSubmit = async (event) => {
//   event.preventDefault();

//   setLatitude(null);
//   setLongitude(null);

//   setCity(event.target.value);

//   const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=cb9771dde18842f09fafde8f78f53e47`);
//   const data = await response.json();
//   console.log(data)

//   if (data.results.length > 0) {

//     setLatitude(data.results[0].geometry.lat);
//     setLongitude(data.results[0].geometry.lng);   
    
//   } else {
//     alert(`Could not find coordinates for "${city}"`);
//   }
  
// }