import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import imagev1 from "../assest/v1.svg";
import imagev2 from "../assest/v2.svg";
import imagev3 from "../assest/v3.svg";
import imagev4 from "../assest/v4.svg";
import tata from "../assest/tata.svg";
import mahindra from "../assest/mahindra.svg";
import imgLogo from "../assest/mglogo.svg"
import logo from "../assest/icon.svg"
import mg from "../assest/mg.svg";
import volvo from "../assest/volvo.svg";
import commet from "../assest/commet.svg";
import Slider from "react-slick";
const SelectVechile = () => {
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
        <div className="select-vechile-title">Select Vehicle</div>
        <Divider sx={divider_style} />
        <div className="vechile-title">Select vehicle type</div>

        <div className="image-container-vechile">
          <Grid container spacing={2}>
            <Grid item={3}>
              <img src={imagev1} />
            </Grid>
            <Grid item={3}>
              <img src={imagev2} />
            </Grid>
            <Grid item={3}>
              <img src={imagev3} />
            </Grid>
            <Grid item={3}>
              <img src={imagev4} />
            </Grid>
          </Grid>
        </div>

        <div>
          <div className="vechile-title">Choose your vehicle</div>
          <div className="vehicle-search-box">
            <div className="search-icon">
              <SearchIcon />
            </div>
            <input
              className="input-style-select-vechile"
              type="text"
              placeholder="Search"
            />
          </div>

          <div className="slider-container">
            <Slider {...settings}>
              <div className="all-text-slider">
                <div>All</div></div>
              <img src={tata} alt="tata" className="slider-image" />
              <img src={mahindra} alt="tata" className="slider-image" />
              <img src={mg} alt="tata" className="slider-image" />
              <img src={volvo} alt="tata" className="slider-image" />
              <img src={volvo} alt="tata" className="slider-image" />
             
            </Slider>
          </div>

          <div className="card-container">
          <Card sx={{ maxWidth: 390 }}>
          <div className="image-container-select-vechile">
          <img src ={commet}
        alt="Paella dish"
      />
      </div>
      
      <CardContent>
        <div className="card-vechile-text">
          <div><img src = {imgLogo}/></div>
          <div className="card-tagline">Comet EV</div>
        </div>
        
        <div className="card-logo-container">
        <div className="card-logo">
          <img src = {logo}/>
          <div className="card-logo-text">CCS-2</div>
        </div>

        <div className="card-logo">
          <img src = {logo}/>
          <div className="card-logo-text">wall</div>
        </div>

        <div className="card-logo">
          <img src = {logo}/>
          <div className="card-logo-text">chademo</div>
        </div>

        <div className="card-logo">
          <img src = {logo}/>
          <div className="card-logo-text">type-2</div>
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

export default SelectVechile;
