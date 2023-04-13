import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";

const ImageBox = ({ alt, imagePath, parent = "questions" }) => {

  const [currentImage, setImage] = useState();

  useEffect(
    () => {
      if (parent === "questions") {
        async function fetchImage(imagePath) {
          const imageFetched = await import(`../../images/${imagePath}`);
          const imageUrl = imageFetched.default;
          setImage(imageUrl);
        }
        fetchImage(imagePath);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [imagePath]
  );

  const src =
    parent === "questions"
      ? currentImage
      : parent === "results"
      ? imagePath
      : undefined;

    // const src =
    // parent === "questions"
    //   ? currentImage
    //   : parent === "results"
    //   ? imagePath
    //   : undefined;
  
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        objectFit: "cover",
        width: "95vw",
        height: "100%",
        verticalAlign: "bottom",
      }}
    />
  );
};

export default ImageBox;
