import React,{useState} from "react"
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import photos from "../assest/tick.svg";
import OtpInput from 'react-otp-input';



const OTP = ()=>{   
  const [otp, setOtp] = useState('');
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        maxWidth: "353px",
        bgcolor: "background.paper",
        boxShadow: 24,
        outline:"none",
        p: 4,
      };
    return(
        <Modal open={true}>
        <Box sx = {style}>
        <div className="title-container">
       <div className="mobile-verification-title">Mobile verification</div>
       <div className="image-container"><img src={photos}/></div>
       </div>
       <div className="mobile-verification-number">Enter the 6 digit code we've sent to 9683929287 for <br/> verification</div>
        
       <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      containerStyle={'otp-container'}
      inputType="tel"
      inputStyle={'input-style'}
      renderInput={(props) => <input {...props} />}
    />

    <div>
        <div className="resend-code">Resend code in <span className="timer">(0:58)</span></div>
    </div>
        </Box>
        </Modal>
    )
}

export default OTP 