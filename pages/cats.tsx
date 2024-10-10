import React, { useState, useEffect } from 'react';
import Image from "next/image";
import ChucksAppBar from '../src/app/components/ChucksAppBar';

//MUI
import { Typography, Container, Button } from "@mui/material";
import Box from "@mui/material/Box";


//Recoil
import { useRecoilState } from 'recoil';
import { favoriteCats } from '../src/randomCatPic/state/favoriteCats';
import { currentCat } from '../src/randomCatPic/state/currentCat';
import { alreadyFavorited } from '../src/randomCatPic/state/alreadyFavorited';
import { CatPic } from './../src/randomCatPic/model/CatPic';

//CSS
import '../styles/cats.css';
import { Height } from '@mui/icons-material';

export default function Cats() {

    //Recoil
    const [isAlreadyFavorited, setIsAlreadyFavorited] = useRecoilState(alreadyFavorited);
    const [currentCatData, setCurrentCatData] = useRecoilState(currentCat);  //New random cat JSON
    const [catList, setCatList] = useRecoilState(favoriteCats);   //Already stored cats

    const saveCatToFavorites = () => {
        if (currentCatData !== undefined) {
            //Check previous saved favorite cats    
            let alreadySaved = false;
            catList.forEach((cat) => {
                alreadySaved = (cat._id === currentCatData._id ? true : alreadySaved);
            });

            if (alreadySaved) {
                window.alert('Cat already added :(')
            } else {
                //Change to unsafe button
                setIsAlreadyFavorited(true);

                //Save to recoil storage
                setCatList(cats => [...cats, currentCatData]);
                window.alert('Cat saved to favorites!');

                console.log(currentCatData)
            }
        }
    }

    const unsaveCatFromFavorites = () => {
        if (currentCatData !== undefined) {
            let newCatList: CatPic[] = [];
            catList.forEach((cat) => {
                if (cat._id !== currentCatData._id) {
                    newCatList.push(cat);
                }
            });
            setCatList(newCatList);
            setIsAlreadyFavorited(false);
        }
    }

    //Fetch a new cat from cataas.com API
    const newRandomCat = async function () {
        const urlJSON = "https://cataas.com/cat?json=true";
        try {
            const response = await fetch(urlJSON);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const data: CatPic = await response.json();
            setCurrentCatData(data);

            //change to save to favorites button
            setIsAlreadyFavorited(false);

        } catch (error) {
            let errorMessage = error instanceof Error ? error.message : '';
            console.error(errorMessage);
        }
    }

    React.useEffect(() => {
        if (currentCatData?._id == null) {
            newRandomCat();
        }
    }, []);

    return (
        <>
            <ChucksAppBar />

            <Box sx={{
                background: "lightcoral",
                padding: "5vh 10vb",
                margin: "10vh 10vb",
                borderRadius: "15px",
            }}>

                <Box >
                    <Typography variant="h1" sx={{ alignSelf: "start" }}>Cute Cats</Typography>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "5vh",
                }}>
                    <Image
                        className="image"
                        src={currentCatData !== undefined ? `https://cataas.com/cat/${currentCatData._id}` : 'https://cataas.com/cat/'}
                        alt="cat"
                        width={200}
                        height={200}
                    />
                </Box>

                <Box className="containerButton"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "4vh 10vb",
                    }}>
                    <Button onClick={newRandomCat} variant="contained" sx={{ marginRight: "2vb" }} >new random cat</Button>
                    <Button className={isAlreadyFavorited ? 'hide' : ''} variant="contained" onClick={saveCatToFavorites}>save to favorites ⭐</Button>
                    <Button className={isAlreadyFavorited ? '' : 'hide'} variant="contained" onClick={unsaveCatFromFavorites}>unsave</Button>
                </Box>

            </Box >

        </>
    );

}