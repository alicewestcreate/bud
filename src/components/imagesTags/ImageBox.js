import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";

const ImageBox = ({ alt, imagePath, parent }) => {
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

  const parentValues = {
    questions: {
      src: currentImage,
      width: "150%",
      height: "150%",

    },
    results: {
      src: imagePath,
      width: "100%",
      height: "100%",

    },
  };

  const parentObject = parentValues[parent] || {};
  const { src, width, height} = parentObject;

  return (
    <Box
      component="img"
      src = {src}
      alt={alt}
      sx={{
        objectFit: "cover",
        width,
        height,
        maxWidth: "none",
        maxHeight: "none",
        objectPosition: "center",
      }}
    />
  );
};

export default ImageBox;
