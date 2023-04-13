import React from "react";
import { Box } from "@mui/material";

import Feature from "./Feature";
import { light, pruning, bearing, appeal, blooming } from "../../components/Features/CopyChanges";

import LightModeIcon from "@mui/icons-material/LightMode"; // Sunshine
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined"; // Pruning
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom'; // Bearing
import AttractionsIcon from '@mui/icons-material/Attractions'; // Appeal
import GrassIcon from '@mui/icons-material/Grass'; // Family
import SpaIcon from '@mui/icons-material/Spa'; // Blooming Season

const Features = ({ plantIndex }) => {
  return (
    <Box sx={{ width: "90vw" }}>
        <Feature
        icon={<AttractionsIcon sx={{ px: 2 }} />}
        heading={"Attraction"}
        copy={appeal(plantIndex)}
      ></Feature>
      <Feature
        icon={<ContentCutOutlinedIcon sx={{ px: 2 }} />}
        heading={"Hair Cut"}
        copy={pruning(plantIndex)}
      ></Feature>
      <Feature
        icon={<LightModeIcon sx={{ px: 2 }} />}
        heading={"Sunshine"}
        copy={light(plantIndex)}
      ></Feature>
        <Feature
        icon={<HourglassBottomIcon sx={{ px: 2 }} />}
        heading={"Bearing"}
        copy={bearing(plantIndex)}
      ></Feature>
        <Feature
        icon={<GrassIcon sx={{ px: 2 }} />}
        heading={"Family"}
        copy={`Im from the ${plantIndex["Family"]} family`}
      ></Feature>
        <Feature
        icon={<SpaIcon sx={{ px: 2 }} />}
        heading={"My Special Moment"}
        copy={blooming(plantIndex)}
      ></Feature>

    </Box>
  );
};

export default Features;
