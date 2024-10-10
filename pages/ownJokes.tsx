import ChucksAppBar from "../src/app/components/ChucksAppBar";

//MUI
import { Box, Typography } from "@mui/material";
//MUI Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

//Recoil
import { useRecoilState } from "recoil";
import { ownJokes } from "../src/jokes/state/ownJokes";

export default function OwnJoke() {

    const [ownJokesList, setOwnJokesList] = useRecoilState(ownJokes);

    return (
        <>
            <ChucksAppBar />

            <Box sx={{
                background: "orange",
                padding: "5vh 10vb",
                margin: "10vh 10vb",
                borderRadius: "15px",
            }}
            >

                <Box>
                    <Typography sx={{ alignSel: "start", paddingBottom: "5vh" }} variant="h1">Own Jokes</Typography>
                </Box>

                {/* own joke section */}
                <Table
                    sx={{
                        minWidth: 650,
                    }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ border: "1px solid black", }}>Number</TableCell>
                            <TableCell sx={{ border: "1px solid black", }}>Joke</TableCell>
                            <TableCell sx={{ border: "1px solid black", }}>Creator</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ownJokesList.map((joke, index) => (
                            <TableRow key={"row" + index}>
                                <TableCell key={"number" + index} sx={{ border: "1px solid lightgray", }}>{index + 1}</TableCell>
                                <TableCell key={"joke" + index} sx={{ border: "1px solid lightgray", }}>{joke.value}</TableCell>
                                <TableCell key={"creator" + index} sx={{ border: "1px solid lightgray", }}>{joke.creator}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell sx={{ border: "1px solid lightgray", }}></TableCell>
                            <TableCell sx={{ border: "1px solid lightgray", }}></TableCell>
                            <TableCell sx={{ border: "1px solid lightgray", }}></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </Box >

        </>
    );
}
