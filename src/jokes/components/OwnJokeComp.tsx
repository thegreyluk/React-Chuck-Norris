import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Container, Box, Button, Paper, Skeleton, Typography, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getRandomJoke } from "../api/jokesApi";
import './../../../styles/ownJoke.css';
import { useRecoilState } from "recoil";
import { favoriteJokes } from "../state/favoriteJokes";
import { ownJokes } from "../state/ownJokes";
import { OwnJoke } from "../model/Joke";

interface RandomJokeProps { }

export const OwnJokeComp: React.FC<RandomJokeProps> = ({ }) => {

    //recoil api
    const [favoriteJokesList, setFavoriteJokesList] = useRecoilState(favoriteJokes);
    const [ownJokesList, setOwnJokesList] = useRecoilState(ownJokes);

    //text field input
    let textFieldContent: string = '';
    const handleChange = (event: any) => {
        textFieldContent = event.target == null ? '' : event.target.value;
    };

    //save own joke
    const onSaveJokeButton = () => {
        if (textFieldContent !== '') {
            setOwnJokesList(jokes => [...jokes, { value: textFieldContent, creator: 'Lukas' }]);
        }

        //confirm joke save to user
        window.alert('Joke saved to own jokes!');
    };

    //add joke to favorites
    const onFavoriteButton = () => {
        if (textFieldContent !== '') {
            setFavoriteJokesList(jokes => [...jokes, { value: textFieldContent, creator: 'Lukas' }]);
        }

        //confirm joke save to user
        alert('Joke saved to favorites!');
    };

    return (
        <>
            <Box>
                {/* content box */}
                <TextField
                    id="outlined-basic"
                    label="Own Joke"
                    variant="outlined"
                    onChange={handleChange}
                    className="input"
                />

                {/* button box */}
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "row-reverse",
                        marginTop: 2,
                    }}
                >

                    {/* save joke to favorites */}
                    <Button
                        className="buttonFavorites"
                        variant="contained"
                        onClick={onFavoriteButton}
                    >
                        save to favorites ⭐
                    </Button>

                    {/* new random joke */}
                    <Button
                        onClick={onSaveJokeButton}
                        variant="contained"
                    >
                        save to own jokes
                    </Button>

                </Box>
            </Box>
        </>
    );
};
