import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)(({ theme, variant = "contained", type = "tag"}) => {
  const backgroundColor =
    variant === "contained"
      ? theme.palette.primary.main
      : variant === "outlined"
      ? "transparent"
      : undefined;
    
    const color = 
    variant === "contained"
    ? theme.palette.neutrals.white
    : variant === "outlined"
    ? theme.palette.neutrals.black
    : undefined;

    const border = 
    variant === "contained"
    ? undefined
    : variant === "outlined"
    ? "1px solid" + theme.palette.neutrals.black
    : undefined;


    const boxShadow = variant === "contained"
    ? theme.shadows[2]
    : variant === "outlined"
    ? `inset 0 0 0 2px" ${theme.palette.neutrals.black}`
    : `inset 0 0 0 2px ${theme.palette.primary.main}`;

    const padding = 
    type === "tag"
    ? "3px 15px"
    : "10px 20px"

    const margin = 
    type === "tag"
    ? "3px"
    : undefined

   const fontWeight = 
   type === "tag"
   ? "400"
   : undefined


  return {
    backgroundColor,
    color,
    border,
    padding,
    margin,
    fontWeight,
    textTransform: "lowercase",
    borderRadius: 50,
    boxShadow,
    "&:hover": {
      backgroundColor:
        variant === "contained" ? theme.palette.secondary.main : undefined,
    },
  };
});

export default CustomButton;
