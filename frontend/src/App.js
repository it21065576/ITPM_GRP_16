import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
// import Navbar from "./Components/Service/create";
// import RecordList from "./Components/Service/recordList";
// import Edit from "./Components/Service/edit";
// import Create from "./Components/Service/create";

// import ServiceDetails from "./Components/Service/ServiceDetails";
// import AddService from "./Components/Service/AddService";
// import ServiceDash from "./Components/Service/ServiceDash";

import DonatePage from "./Components/Donation/DonatePage";
// import AddBasket from "./Components/Donation/AddBasket";
import AddForm from "./Components/Donation/AddForm";
import CardDetails from "./Components/Donation/CardDetails";
import EditForm from "./Components/Donation/EditForm";
import Amount from "./Components/Donation/Amount";
import View from "./Components/Donation/View";

 
const App = () => {
 return (
   <div>
     {/* <Navbar /> */}
     <Routes>
       {/* <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} /> */}
       <Route path="/" element={<DonatePage/>}/>
       {/* <Route path="/add" element={<AddBasket/>}/> */}
       <Route path="/addForm" element={<AddForm/>}/>
       <Route path="/cardDetails" element={<CardDetails/>}/>
       <Route path="/editForm/:id" element={<EditForm/>}/>
       <Route path="/amount" element={<Amount/>}/>
       <Route path="/view/:id" element={<View/>}/>

       {/* <Route path="/sdetails" element={<ServiceDetails/>}/>
       <Route path="/addService" element={<AddService/>}/>
       <Route path="/serviceDash" element={<ServiceDash/>}/> */}
     </Routes>
   </div>
 );
};
 
export default App;