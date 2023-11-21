import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import imgLogo from "../assest/mglogo.svg";
import logo from "../assest/icon.svg";
import commet from "../assest/commet.svg";
import charging from "../assest/charging.svg"
import menu from "../assest/menu.svg";
import direction from "../assest/direction.svg"
import SearchIcon from '@mui/icons-material/Search';
const AvailableStation = () => {
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


  const divider_style = {
    width: "100%",
    border: "solid 1px #d5d8de",
    marginTop: "2rem",
  };
  return (
    <Modal open={true}>
      <Box sx={style}>
      <SearchIcon className="search-icon-available"/>
        <div className="available-station">
          <div className="burger-menu"><img src= {menu} alt = "menu"/></div>
          <div><input type="text" className="available-station-input" placeholder ="Address, city, zip"/></div>
        </div>
       
        <Divider sx={divider_style} />

        <div className="station-tag-line">Available stations</div>
        <div>
          <div className="card-container">
            <Card sx={{ maxWidth: 390,marginTop:"1rem" }}>
                <div className="km-station">2.2 km</div>
                <div className="direction-container"><img src={direction} /></div>
              <div className="image-container-choose-station">
                <img src={charging} alt="station" />
              </div>

              <CardContent>
                <div className="charging-station-text">
                 Solar Motors, JP Nagar
                </div>
                <div className="charging-station-subtext">
                    17th main road, 5th cross,JP Nagar
                </div>

               <div className="avaiable-station-logo-container">
                <div className="div-logo">
                <div><img src={logo} className="card-image-setting"/></div>
                <div><img src={logo}  className="card-image-setting"/></div>
                <div className="online-status">Online</div>
                </div>

                <div className="closes-by">
                Closes by 11:59 PM
                </div>
                </div>
              
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 390,marginTop:"1rem" }}>
                <div className="km-station">2.2 km</div>
                <div className="direction-container"><img src={direction} /></div>
              <div className="image-container-choose-station">
                <img src={charging} alt="station" />
              </div>

              <CardContent>
                <div className="charging-station-text">
                 Solar Motors, JP Nagar
                </div>
                <div className="charging-station-subtext">
                    17th main road, 5th cross,JP Nagar
                </div>

               <div className="avaiable-station-logo-container">
                <div className="div-logo">
                <div><img src={logo} className="card-image-setting"/></div>
                <div><img src={logo}  className="card-image-setting"/></div>
                <div className="online-status">Online</div>
                </div>

                <div className="closes-by">
                Closes by 11:59 PM
                </div>
                </div>
              
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 390,marginTop:"1rem" }}>
                <div className="km-station">2.2 km</div>
                <div className="direction-container"><img src={direction} /></div>
              <div className="image-container-choose-station">
                <img src={charging} alt="station" />
              </div>

              <CardContent>
                <div className="charging-station-text">
                 Solar Motors, JP Nagar
                </div>
                <div className="charging-station-subtext">
                    17th main road, 5th cross,JP Nagar
                </div>

               <div className="avaiable-station-logo-container">
                <div className="div-logo">
                <div><img src={logo} className="card-image-setting"/></div>
                <div><img src={logo}  className="card-image-setting"/></div>
                <div className="online-status">Online</div>
                </div>

                <div className="closes-by">
                Closes by 11:59 PM
                </div>
                </div>
              
              </CardContent>
            </Card>
          </div>
        </div>

      </Box>
    </Modal>
  );
};

export default AvailableStation;
