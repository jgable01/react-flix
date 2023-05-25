import React from "react";
import img from "../img/jurassic-park.jpg";
import { Container, Box, Typography, Stack, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function Detail() {
  const { movie } = useParams();
  let movieName = movie.toString().toLowerCase();
  movieName = movieName.replace(/ /g, "-");
  movieName = movieName.replace(/:/g, "");
  movieName = movieName.replace(/'/g, "");
  let [movieDetails, setMovieDetails] = useState([]);
  const url = `https://api.andrespecht.dev/movie/${movieName}`;
  console.log(movieName);

  const options = {
    method: "GET",
    mode: "cors",
  };

  async function getMovies() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.statusText} (${response.status})`);
      }
      // Parsing the reponse as JSON
      const data = await response.json();
      // Printing the movies
      setMovieDetails(data.response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Helmet>
        <title>{movie}</title>
      </Helmet>
      ;
      <Container>
        <Box
          sx={{
            height: "100svh",
            width: "100svw",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              src={movieDetails.poster}
              alt="test"
              className="detail-img"
            ></img>
            <Stack
              spacing={2}
              sx={{
                ml: 3,
              }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{
                  mt: 2,
                }}
              >
                {movieDetails.title}
              </Typography>
              <Stack spacing={2} direction={"row"}>
                <Typography variant="h6" component="div">
                  {movieDetails.year}
                </Typography>
                <Typography variant="h6" component="div">
                  {movieDetails.runningTime}
                </Typography>
                <Typography variant="h6" component="div">
                  4k
                </Typography>
              </Stack>
              <Typography variant="h6" component="div">
                {movieDetails.description}
              </Typography>
              <Stack spacing={2} direction={"row"}>
                <Typography variant="h6" component="div">
                  {movieDetails.genre}
                </Typography>
                <Typography variant="h6" component="div">
                  PlaceHolder
                </Typography>
                <Typography variant="h6" component="div">
                  PlaceHolder
                </Typography>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  maxWidth: "135px",
                }}
              >
                Watch now
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Detail;
