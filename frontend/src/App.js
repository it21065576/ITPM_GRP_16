import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import ServiceDetails from "./Components/Service/ServiceDetails";
import AddService from "./Components/Service/AddService";
import ServiceDash from "./Components/Service/ServiceDash";
import ServiceHome from "./Components/Service/ServiceHome";
import EditService  from './Components/Service/EditService'; 
import ServiceReport from"./Components/Service/ServiceReport";

 

// const App = () => {
  function App() {
 return (
   <div>
     {/* <Navbar /> */}
     <Routes>

       <Route path="/serviceDetails/:id" element={<ServiceDetails/>}/>
       <Route path="/addService" element={<AddService/>}/>
       <Route path="/serviceDash" element={<ServiceDash/>}/>
       <Route path="/" element={<ServiceHome/>}/>
       <Route path="/editService/:id" element={<EditService/>}/>
       <Route path="/serviceReport" element={<ServiceReport/>}/> 
       {/* <Route path="/service/:id" component={ServiceDetails} /> */}


       
     </Routes>
   </div>
 );
};
 
export default App;