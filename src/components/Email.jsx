import React from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import photos from "../assest/email.svg";

const Email = ()=>{
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
        <div>
          <Modal open={true}>
      <Box sx={style}>
        <div className='name-container'>
        <div className='name-text'>
        Enter your email address 
        </div>
        <div className='image-name'><img src = {photos}/></div>
        </div>

        <div className='mobile-verification-number'>Email address required for business invoicing</div>
       
       <div className='enter-name'>
        <input type='text' placeholder='Enter email address'/>
       </div>

       <div className='button-container-name'> 
       <button>Next</button>
       </div>
      </Box>
    </Modal>
        </div>
    )
}

export default Email