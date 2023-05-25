import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Snackbar } from "@mui/material";
import axios from "axios";
import New from "./New";
import { set } from "react-hook-form";

function Catalog() {
  const navigate = useNavigate();
  const [openState, setOpenState] = useState(false);
  const [moviesList, setMovies] = useState([]);
  const url = "https://api.andrespecht.dev/movies";

  const options = {
    method: "GET",
    mode: "cors",
  };

  async function getMovies() {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`${response.statusText} (${response.status})`);
      }
      // Parsing the reponse as JSON
      const data = await response.json();
      // Printing the movies
      return data.response;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    displayMovies();
  }, []);

  function handleClick(e) {
    moviesList.forEach((movie) => {
      if (movie.title === e.target.alt) {
        navigate(`/detail/${movie.title}`);
      }
    });
  }

  function handleAdd() {
    setOpenState(true);
  }

  function handleClose() {
    setOpenState(false);
  }

  async function displayMovies() {
    let movies = await getMovies();
    movies = Object.values(movies);
    movies.forEach((movie, index) => {
      movies[index] = movie;
    });
    setMovies(movies);
  }

  return (
    <div>
      {openState ? <New openState={openState} handleClose={handleClose} /> : null}
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              mr: 2,
            }}
          >
            Sort
          </Button>
          <Button variant="outlined" onClick={handleAdd}>
            Add
          </Button>
        </Box>
        <h1>Catalog</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {moviesList.map((movie) => (
            <Grid item xs={2} sm={4} key={movie.id}>
              <img
                src={movie.poster}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "auto",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
                className="movie-poster"
                genre={movie.genre}
                runningTime={movie.runningTime}
                onClick={handleClick}
              />
              <h3 onClick={handleClick} className="movie-title">
                {movie.title}
              </h3>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Catalog;
