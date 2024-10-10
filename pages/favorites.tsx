import ChucksAppBar from "../src/app/components/ChucksAppBar";
import Image from 'next/image';

//MUI
import { Typography, Container, Box } from "@mui/material";
//MUI Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//Recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { favoriteJokes } from '../src/jokes/state/favoriteJokes';
import { favoriteCats } from "../src/randomCatPic/state/favoriteCats";

import '../styles/favorites.css'

export default function Favorites() {

    const [jokeList, setJokeList] = useRecoilState(favoriteJokes);  //JokeList Recoil
    const [catList, setCatList] = useRecoilState(favoriteCats);     //CatList Recoil

    catList.map((cat) => {
        console.log(cat.tags);
    });

    return (
        <>
            <ChucksAppBar />

            <Box
                sx={{
                    background: "#ebefb7",
                    padding: "5vh 10vb",
                    margin: "10vh 10vb",
                    borderRadius: "15px",
                    paddingBottom: "15vh",
                }}>

                <Box className="containerTop">
                    <Typography
                        variant="h1"
                        sx={{
                            alignSelf: "start",
                            color: "black",
                            fontWeight: "300",
                            marginBottom: "6vh",
                        }}
                    >
                        Favorites
                    </Typography>
                </Box>

                {/*  joke section */}
                <Box className="containerJokes">
                    <Typography variant="h2">Jokes</Typography>
                    <Table //className="table"
                        area-label="simple table"
                        sx={{
                            border: '2px solid black',
                            alignSelf: 'center',
                            marginBottom: "10vh",
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell className="cellTop">Number</TableCell>
                                <TableCell className="cellTop">Creator</TableCell>
                                <TableCell className="cellTop">Joke</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {jokeList.map((joke, index) => (
                                <TableRow key={index}
                                    sx={{}}
                                >
                                    <TableCell className="cell" key={"number" + index}>{index + 1}</TableCell>
                                    <TableCell className="cell" key={"creator" + index}>{joke.creator}</TableCell>
                                    <TableCell className="cell" key={"joke" + index}>{joke.value}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell className="cell"></TableCell>
                                <TableCell className="cell"></TableCell>
                                <TableCell className="cell"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>

                {/* cat section */}
                <Box className="containerCats">
                    <Typography variant="h2">Cats</Typography>
                    <Table className="table"
                        sx={{
                            border: '2px solid black',
                            padding: '5px 2vb',
                            alignSelf: 'center',
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell className="cellTop">Number</TableCell>
                                <TableCell className="cellTop">Cat</TableCell>
                                <TableCell className="cellTop">Tags</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {catList.map((cat, index) => (
                                <TableRow key={index + 'x'}>
                                    <TableCell className="cell" key={"number" + index}>{index + 1}</TableCell>
                                    <TableCell className="cell" key={"cat" + index}>
                                        <Image
                                            className="image"
                                            src={cat !== null ? `https://cataas.com/cat/${cat._id}` : 'https://cataas.com/cat/'}
                                            alt="cat"
                                            width={100}
                                            height={100} />
                                    </TableCell>
                                    <TableCell className="cell" key={"tags" + index}>{cat.tags?.length ? cat.tags : 'none'}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell className="cell"></TableCell>
                                <TableCell className="cell"></TableCell>
                                <TableCell className="cell"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
            </Box >
        </>
    );
}