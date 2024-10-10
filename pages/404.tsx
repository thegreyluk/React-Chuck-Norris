//MUI
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

import Link from "next/link";
import Image from "next/image";
import './../styles/404.css';

export default function NotFound() {
  return (
    <div className="containerMain">

      <Typography sx={{ fontSize: "90px", fontWeight: "bold", paddingBottom: "7vh", color: "black" }} variant="h1">404 - Page Not Found</Typography>

      <div className="containerGifs">

        <p className="textGameover">Game Over</p>
        <div className="containerCombinedGifs">
          <Image
            className="imageGhost"
            src="/../public/404/ghost.gif"
            alt="A ghost from pacman"
            width={0}     //reassigned in css file
            height={0} />

          <Image
            className="imagePacman"
            src="/../public/404/pacman.gif"
            alt="Pac man player"
            width={0}     //reassigned in css file
            height={0} />
        </div>

        <p className="text">I&apos;m sorry. You visited a website even Chuck Norris can&apos;t display.
          <br></br>
          He can not to <b>EVERY</b>thing 😂.</p>

        <Link className="link" href="/">Go back home </Link>
      </div>


    </div>
  );
}
