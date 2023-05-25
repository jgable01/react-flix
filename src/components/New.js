import React from "react";
import { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Alert,
  AlertTitle,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";

function New(props) {
  const [open, setOpen] = useState(props.openState);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const filmName = "Name";
  const filmYear = "Year";
  const filmGenre = "Genre";
  const filmDescription = "Description";

  const onsubmit = (data) => {
    if (
      data.filmName &&
      data.filmYear &&
      data.filmGenre &&
      data.filmDescription
    ) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      handleClose();
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const handleClose = (time) => {
    setOpen(false);
    setTimeout(() => {
      props.handleClose();
    }, 2000);
  };

  return (
    <section>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onsubmit)}>
          <DialogTitle>Add New</DialogTitle>
          <DialogContent>
            <DialogContentText>Add a New Movie</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="film-name"
              label="Film Name"
              fullWidth
              onChange={(e) => filmName(e.target.value)}
              useRef={filmName}
              {...register("filmName", { required: true })}
            />
            <TextField
              autoFocus
              margin="dense"
              id="film-year"
              label="Film Year"
              fullWidth
              onChange={(e) => filmYear(e.target.value)}
              useRef={filmYear}
              {...register("filmYear", { required: true })}
            />
            <TextField
              autoFocus
              margin="dense"
              id="film-genre"
              label="Film Genre"
              fullWidth
              onChange={(e) => filmGenre(e.target.value)}
              useRef={filmGenre}
              {...register("filmGenre", { required: true })}
            />
            <TextField
              autoFocus
              margin="dense"
              id="film-description"
              label="Film Description"
              fullWidth
              onChange={(e) => filmDescription(e.target.value)}
              useRef={filmDescription}
              {...register("filmDescription", { required: true })}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              Add Film
            </Button>
          </DialogActions>
        </form>
        {errors.filmName?.type === "required" && (
          <Alert severity="error">
            <strong>Missing Film Name</strong>
          </Alert>
        )}
        {errors.filmYear?.type === "required" && (
          <Alert severity="error">
            <strong>Missing Film Year</strong>
          </Alert>
        )}
        {errors.filmGenre?.type === "required" && (
          <Alert severity="error">
            <strong>Missing Film Genre</strong>
          </Alert>
        )}
        {errors.filmDescription?.type === "required" && (
          <Alert severity="error">
            <strong>Missing Film Description</strong>
          </Alert>
        )}
      </Dialog>
      <Snackbar open={success} autoHideDuration={3000}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          You have successfully logged in!
        </Alert>
      </Snackbar>
    </section>
  );
}

export default New;
