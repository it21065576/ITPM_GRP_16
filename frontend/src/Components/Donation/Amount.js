import axios from "axios";
import React, { useState, useEffect } from "react";
// import "../styles/project_css/navBar.css";
import Image from "../../Images/donar.jpg"
import { lightBlue } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";
import "../../Styles/amount.css";
import Footer from '../Footer';
import Navbar from '../Navbar';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";



export default function Amount() {
       //update delete part
       const [donation, setpoject] = useState([]);
       const [deletedonation, setDeleteProject] = useState(false);
       const [projectToDelete, setprojectToDelete] = useState(null);
       const [projectid, setprojectid] = useState("");
    

    //get all 
   useEffect(() => {
    axios
      .get(`http://localhost:8002/donation/`)






      
      .then((res) => {
        console.log(res.data);
        setpoject(res.data.existingProject);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  function handleDeleteProject(donation) {
    setprojectToDelete(donation);
    setDeleteProject(true);
  }
  const confirmDeletebox = (id) => {
    setDeleteProject(true);
    setprojectid(id);
  };

  //delete 
  async function confirmDeleteProject(val) {
    if ((val = "delete")) {
      try {
        await axios
          .delete(`http://localhost:8002/donation/delete/${projectid}`)
          .then((res) => {
            alert("Deleted Successful");
            window.location.reload();
          });
      } catch (err) {
        alert(err.message);
      }
    }
  }



    return (
      <>
      <div>
      <Navbar />
      </div>
    
    <div className="nav_main_container"> 
     <div className="card-track">
       <center><b><h1 className="tname">Donar Details</h1></b>
       <h6>You can edit your details after click this card.</h6>
       </center>
       {donation.map((a, index) => (
         <div key={index}>
           <div className="sidecard">
             <figure>
               <img
                 src={Image}
                 width={"250px"}
                 height={"300px"}
                 alt="Mountains"
               />
               <figcaption>
                <Link to = {"/view/" + a._id}>
                  <VisibilityIcon sx={{marginTop:-10 ,marginLeft:5, fontSize: 40, color: lightBlue[50] }} />
                </Link>
                 <Link to={"/editForm/" + a._id}>
                   <EditIcon sx={{marginTop:-10 ,marginLeft:5, fontSize: 40, color: lightBlue[50] }} />
                 </Link>
                 <DeleteIcon
                   onClick={() => confirmDeletebox(a._id)}
                   sx={{marginBottom:5.5,marginLeft:7, fontSize: 40, color: lightBlue[50] }}

                 />
               </figcaption>
             </figure>
           </div>
         </div>
       ))}
     </div>
     <Dialog open={deletedonation} onClose={() => setDeleteProject(false)}>
       <DialogTitle>Warning!</DialogTitle>
       <DialogContent>Are you sure you want to delete the project?</DialogContent>
       <DialogActions>
         <Box sx={{ m: 1, position: "relative" }}>
           <Button
             variant="contained"
             onClick={() => confirmDeleteProject("delete")}
             autoFocus
             color="secondary"
           >
             Confirm
           </Button>
         </Box>
       </DialogActions>
     </Dialog>
     <center><a href="/cardDetails">
          <button type="button" className="btn btn-primary">
            NEXT
          </button></a></center>
     
    
   </div>

   <div>
        <Footer/>
    </div>
   
   </>   


            
        
        
    );  

}