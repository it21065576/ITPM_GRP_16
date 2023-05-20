import axios from "axios";
import React, { useState, useEffect } from "react";
// import "../styles/project_css/navBar.css";
import Image from "../../Images/download.jpg"
import { lightBlue } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import "../../Styles/amount.css";
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



    return (<div className="nav_main_container">

      

     
     <div className="card-track">
       <h3 className="tname">Project</h3>
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
    
   </div>
   
        


            
        
        
    );  

}