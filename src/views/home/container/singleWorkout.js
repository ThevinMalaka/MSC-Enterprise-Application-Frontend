import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { useParams } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Container,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";

import { workoutPlanEnrollRequest } from "../actions";
import { getLoggedUserData } from "../selectors";
import workoutImage from "../../../assets/images/background/workout-img-1.jpg";

const SingleWorkoutView = () => {
  // get the workout id from the url
  const { id } = useParams();
  console.log("workoutId", id);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => getLoggedUserData(state));

  const enrollWorkoutPlan = useCallback(
    (info) => {
      dispatch(workoutPlanEnrollRequest(info));
    },
    [dispatch]
  );

  // sample data for workout
  const [workout, setWorkout] = useState({
    id: 1,
    name: "Workout 1",
    date: "2021-10-01",
    duration: 60,
    caloriesBurned: 500,
    notes: "This is a note",
    exercises: [
      { id: 1, name: "Exercise 1", sets: 3, reps: 10 },
      { id: 2, name: "Exercise 2", sets: 3, reps: 10 },
      { id: 3, name: "Exercise 3", sets: 3, reps: 10 },
    ],
  });

  return (
    <Container>
      <div>
        <Typography variant="h5" gutterBottom>
          Workout Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  Workout Name: {workout.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Date: {workout.date}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Duration: {workout.duration} minutes
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Calories Burned: {workout.caloriesBurned}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Notes: {workout.notes}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Exercises:
                </Typography>
                <List>
                  {workout.exercises.map((exercise, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={exercise.name}
                        secondary={`Sets: ${exercise.sets}, Reps: ${exercise.reps}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Card>
              <CardContent>
                <img src={workoutImage} alt="workout" width="100%" />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12} lg={12} mt={3}>
                    <LoadingButton
                      fullWidth
                      size="large"
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        enrollWorkoutPlan({
                          workoutPlanId: id,
                          userId: userData.id,
                        });
                      }}
                    >
                      Enroll Now
                    </LoadingButton>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <LoadingButton
                      fullWidth
                      size="large"
                      variant="outlined"
                      color="error"
                      onClick={() => {
                        navigate("/workout");
                      }}
                    >
                      Go back
                    </LoadingButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default SingleWorkoutView;
