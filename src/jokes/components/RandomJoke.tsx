import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Box, Button, Paper, Skeleton, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getRandomJoke } from "../api/jokesApi";
import './../../../styles/randomJoke.css';
import { useRecoilState } from "recoil";
import { favoriteJokes } from "../state/favoriteJokes";

interface RandomJokeProps {}

export const RandomJoke: React.FC<RandomJokeProps> = ({}) => {
  const { isLoading, data, refetch } = useQuery({
    ...getRandomJoke(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  //fetch new joke
  const onNewJokeButton = () => {
    refetch();
  };

  //recoil api
  const [jokes, setJokes] = useRecoilState(favoriteJokes);

  const onFavoriteButton = () => {
    //add joke to storage
    if( data?.data.value){
      setJokes( jokes =>  [ ...jokes, { value: String(data?.data.value), creator: 'Chucky'} ]);
    }

    //confirm joke save to user
    window.alert('Joke saved to favorites!');
  };

  return (

    <Box>
      <Paper sx={{ padding: 2, width: 600 }}>
        {isLoading ? (
          <Skeleton sx={{ width: "100%" }} />
        ) : (
          <Typography>{data?.data.value}</Typography>
        )}
      </Paper>
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
          onClick={onNewJokeButton}
          variant="contained"
          endIcon={<AutorenewIcon/>}
        >
          New Joke
        </Button>
        
      </Box>
    </Box>
  );
};
