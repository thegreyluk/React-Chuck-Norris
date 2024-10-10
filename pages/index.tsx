//MUI
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import Container from "@mui/material/Container";
import ChucksAppBar from "../src/app/components/ChucksAppBar";
import { RandomJoke } from "../src/jokes/components/RandomJoke";
import { OwnJokeComp } from "../src/jokes/components/OwnJokeComp"
import { VideoCameraBackOutlined } from "@mui/icons-material";
import "../styles/startPage.css";

//Nextjs
import Image from "next/image";

//animation
import { keyframes } from '@emotion/react'

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform:translateY(-60px);
  }
`;

function handleScrollDown() {

  let elementScrollTo = document.querySelector('.down_arrow');


  if (elementScrollTo !== null) {

    elementScrollTo.scrollIntoView({ behavior: 'smooth' });
  }

}


export default function Home() {

  return (
    <>
      <ChucksAppBar />

      <Box     //Chuck Norris Greeting
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          // background: "#a3d3e2",
        }}>
        <Image
          src="/../public/chuck_norris_person.png"
          width={370}
          height={600}
          quality={100}
          alt="All mighty chuck norris"
        />
        <Box    //Dialog Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "end",
            marginLeft: "10vb",
            marginBottom: "20vb",
          }}
        >
          <Box className="triangle"
            sx={{
              display: "flex",
              width: 0,
              height: 0,
              marginBottom: "3vh",
              borderTop: "40px solid transparent",
              borderBottom: "40px solid transparent",
              borderRight: "40px solid white",
            }}></Box>
          <Box className="whitebox"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "60vb",
              height: "15vh",
              background: "white",
              borderRadius: "15px",
              padding: "50px",
            }}>
            <Typography variant="body1">
              Hey its me Chuck Norris :D.<br></br><br></br>
              I&apos;m happy that you made it to my <b>personal joke website</b>! <br></br><br></br>
              If you wanna hear a funny joke. <Link onClick={handleScrollDown}>Just ask me</Link>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box     //Scroll Down Arrow
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "25vh",
          background: "#98e4eb",
        }}>


        <IconButton
          aria-label=""
          className="down_arrow"
          onClick={handleScrollDown}
          sx={{
            animation: `${float} 3s ease-in-out infinite`,
            marginTop: "10vh"
          }}>
          <ExpandMoreIcon
            sx={{
              fontSize: "100px",
            }}>
            {/* <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" /> */}
          </ExpandMoreIcon>
        </IconButton>

      </Box>

      <Container maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}>

        <Box className="boxRandomChuckJoke"
          sx={{
            paddingTop: "5vh",
            paddingBottom: "10vh",
            marginTop: "10vh",
          }}>
          <Typography sx={{ paddingBottom: "4vh", color: "white" }} variant="h1">Chuck&apos;s Jokes</Typography>
          <RandomJoke />
        </Box>

        <Box className="boxOwnJokes"
          sx={{
            paddingTop: "5vh",
            paddingBottom: "10vh",
          }}>
          <Typography sx={{ paddingBottom: "4vh", color: "white" }} variant="h1">Own Jokes</Typography>
          <OwnJokeComp />
        </Box>

      </Container>
    </>
  );
}
