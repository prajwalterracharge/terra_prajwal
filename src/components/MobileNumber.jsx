import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import chargeLogo from "../assest/charge.svg";
import photos from "../assest/google.svg";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
const MobileNumber = () => {
  const [state, setState] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxWidth: "290px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const styleChild = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxWidth: "290px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: '15px 15px 0 0',
    height:"28.9rem",
    marginTop:"1.98rem"
  };
  return (
    <div>
      <Modal open={true} className="modal-background">
        <Box sx={style}>
          <div className="enter-mobile-text">Enter your mobile number</div>
          {state && (
            <Modal open={true} className="modal-background">
              <Box sx={styleChild}>
                <div className = "close-button">
                   <div> Country Code</div>
                   <div onClick={()=>setState(false)}><CloseIcon/></div>
                </div>
                <div className="search-input">
                   <div className="search-icon-setting"><SearchIcon /></div> 
                  <input type="text" />
                </div>

                <div>
                   
                    

                </div>
              </Box>
            </Modal>
          )}
          <div className="confirm-mobile-text">
            Please confirm your country code and enter your <br />
            mobile number
          </div>

          <div className="mobile-container">
            <div className="country-input" onClick={()=>setState(true)}>
              <input type="text"></input>
            </div>
            <div className="mobile-input">
              <input type="text" placeholder="Mobile Number"></input>
            </div>
          </div>

          <div className="continue-button-container">
            <button className="button-continue-style">
              <span>Continue</span>
            </button>
          </div>

          <div class="or-container">
            <h5>OR</h5>
            <div class="line"></div>
          </div>

          <div className="continue-google-container">
            <button>
              <div style={{ width: "8%", marginRight: "7px" }}>
                <img src={photos} />
              </div>
              <div>Continue with Google</div>
            </button>
          </div>

          <div className="container-logo-terms">
            <div>
              <div className="terms-condition">
                By proceeding you agree to our <span>Terms & conditions</span>
                <br />
                and Privacy Policy
              </div>
            </div>

            <div className="terra-logo-container">
              <div className="terra-logo">
                TERRA C
                <span>
                  <img src={chargeLogo} />
                </span>
                ARGE
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MobileNumber;
