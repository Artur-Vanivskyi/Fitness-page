import React from "react";
import{ Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

function BodyPart() {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
        
    }}
    >
        <img src={Icon} alt="icon" styles={{width: "40px", height: "40px"}}/>
    </Stack>
  )
}

export default BodyPart;
