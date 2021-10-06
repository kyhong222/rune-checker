import * as React from "react";
import { Box, Container, Grid, Link } from "@mui/material";

export default function Footer(props) {
  const boxSx = {
    // top: "auto",
    mt: 3,
    mx: 0,
    // mb: 0,
    pt: 1.5,
    display: "flex",
    position: "sticky",
    width: "100%",
    bottom: 0,
    // py: 1.5,
    backgroundColor: "rgba(224,224,224,0.8)",

    // pb: "100px",
  };
  // const typographySx = { mx: 5, py: 0 };
  const contents = {
    Contact: "kyhong222@naver.com",
    Github: "https://github.com/kyhong222/rune-checker",
    "UI Resources": "material-ui",
  };
  const contentGenerator = () => {
    return (
      <Grid container spacing={1}>
        <Grid item xs={4} borderBottom={1}>
          Contact
        </Grid>
        <Grid item xs={4} borderBottom={1}>
          Github
        </Grid>
        <Grid item xs={4} borderBottom={1}>
          UI Resources
        </Grid>
        <Grid item xs={4}>
          {contents.Contact}
        </Grid>
        <Grid item xs={4}>
          <Link color="inherit" href={contents.Github}>
            {contents.Github}
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link color="inherit" href="https://mui.com/">
            {contents["UI Resources"]}
          </Link>
        </Grid>
      </Grid>
    );
  };

  return (
    <footer>
      <Box sx={boxSx}>
        <Container maxWidth="md">{contentGenerator()}</Container>
      </Box>
    </footer>
  );
}
