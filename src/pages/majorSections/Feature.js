import React from 'react';
import FeatureHeading from '../../components/copy/FeatureHeading';
import FeatureCopy from '../../components/copy/FeatureCopy';
import { Grid } from "@mui/material";


const Feature = ({icon, heading, copy }) => {
    return (
        <>
        <Grid container alignItems="center" sx={{ pt: 3 }}>
          <Grid item>
            {icon}
          </Grid>
          <Grid item>
            <FeatureHeading heading={heading}></FeatureHeading>
          </Grid>
        </Grid>
        <FeatureCopy copy={copy}></FeatureCopy>
      </>
    );
}









export default Feature;
