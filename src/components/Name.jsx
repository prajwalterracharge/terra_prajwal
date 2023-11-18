import React from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import photos from "../assest/hi.svg";
const Name = ()=>{
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        maxWidth: "353px",
        bgcolor: "background.paper",
        boxShadow: 24,
        outline: "none",
        p: 4,
      };

    return(
        <Modal open={true}>
      <Box sx={style}>
        <div className='name-container'>
        <div className='name-text'>
        Hi, What's your name ?
        </div>
        <div className='image-name'><img src = {photos}/></div>
        </div>
       
       <div className='enter-name'>
        <input type='text' placeholder='Enter full name'/>
       </div>

       <div className='button-container-name'> 
       <button>Next</button>
       </div>
      </Box>
    </Modal>
    )
}

export default Name
