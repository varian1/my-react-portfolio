import React from "react";
// import { useStyles } from "./Sections.styles";
import { Box } from "@mui/system";
import styles from "./section.styles";

export default function Section({ bg, ...props }) {
  // const classes = useStyles();
  const background = bg ? styles.background : styles.noBackground;
  console.log(styles.background);

  return <Box sx={background}>{props.children}</Box>;
}
