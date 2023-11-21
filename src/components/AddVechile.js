import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import imgLogo from "../assest/mglogo.svg";
import logo from "../assest/icon.svg";
import commet from "../assest/commet.svg";
import info from "../assest/info.svg"
const AddVechile = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxWidth: "365px",
    bgcolor: "background.paper",
    boxShadow: 24,
    outline: "none",
    height: "100%",
    display: "block",
    overflow: "scroll",
    p: 4,
  };

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  const divider_style = {
    width: "100%",
    border: "solid 1px #d5d8de",
    marginTop: "2rem",
  };
  return (
    <Modal open={true}>
      <Box sx={style}>
        <div className="select-vechile-title"><div>Add Vehicle</div></div>
        <Divider sx={divider_style} />
        <div>
          <div className="card-container">
            <Card sx={{ maxWidth: 390 }}>
              <div className="image-container-select-vechile">
                <img src={commet} alt="Paella dish" />
              </div>

              <CardContent>
                <div className="card-vechile-text">
                  <div>
                    <img src={imgLogo} />
                  </div>
                  <div className="card-tagline">Comet EV</div>
                </div>

                <div className="card-logo-container">
                  <div className="card-logo">
                    <img src={logo} />
                    <div className="card-logo-text">CCS-2</div>
                  </div>

                  <div className="card-logo">
                    <img src={logo} />
                    <div className="card-logo-text">wall</div>
                  </div>

                  <div className="card-logo">
                    <img src={logo} />
                    <div className="card-logo-text">chademo</div>
                  </div>

                  <div className="card-logo">
                    <img src={logo} />
                    <div className="card-logo-text">type-2</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
          
          <div className="vin-number">
            <div>Enter your VIN number</div>
            <div><img src = {info}/></div>
          </div>
          <div className="add-vechile-input"><input typpe = "text" placeholder="Eg. 4Y1SL65"/></div>


          <div className="registration-number">
            <div>Enter registration number (optional)</div>
          </div>
          <div className="add-vechile-input"><input typpe = "text" placeholder="Eg. KA 01 GH 9278"/></div>
      
      <div className="add-vechile-button">
        Next
      </div>
      </Box>
    </Modal>
  );
};

export default AddVechile;
