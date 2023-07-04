import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { useParams } from "react-router-dom";
import {
  Typography,
  Checkbox,
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
import { getIsLoggedIn } from "../selectors";
import { WorkoutDayCard } from "../../../components/dashboard";
import Iconify from "../../../components/iconify";
import workoutImage from "../../../assets/images/background/workout-img-1.jpg";

const ActiveWorkoutView = () => {
  // get the workout id from the url
  const { id } = useParams();
  console.log("workoutId", id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedWorkout, setSelectedWorkout] = useState(1);

  const workoutPlan = [
    { id: 1, name: "Exercise 1", sets: 3, reps: 10 },
    { id: 2, name: "Exercise 2", sets: 3, reps: 10 },
    { id: 3, name: "Exercise 3", sets: 3, reps: 10 },
    { id: 4, name: "Exercise 4", sets: 3, reps: 10 },
    { id: 5, name: "Exercise 5", sets: 3, reps: 10 },
    { id: 6, name: "Exercise 6", sets: 3, reps: 10 },
  ];

  useEffect(() => {
    setSelectedWorkout(workoutPlan[0]);
  }, []);

  console.log("selectedWorkout", selectedWorkout);

  const handleNext = () => {
    const currentIndex = workoutPlan.findIndex(
      (workout) => workout.id === selectedWorkout.id
    );

    // If current workout is not the last one, move to the next
    // else, move to the first workout
    if (currentIndex < workoutPlan.length - 1) {
      setSelectedWorkout(workoutPlan[currentIndex + 1]);
    } else {
      setSelectedWorkout(workoutPlan[0]);
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Day {id}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Workout Plan
              </Typography>
              <List>
                {workoutPlan.map((workout, index) => (
                  <ListItem
                    key={index}
                    button
                    style={{
                      backgroundColor:
                        selectedWorkout?.id == workout.id
                          ? "#cfedff"
                          : "#efefef",
                      marginBottom: 5,
                      borderRadius: 5,
                    }}
                    onClick={() => {
                      setSelectedWorkout(workout);
                    }}
                  >
                    <ListItemText>
                      <Typography variant="body2" gutterBottom>
                        {workout.name}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={6}>
                  <Typography variant="h6" gutterBottom>
                    {selectedWorkout?.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Sets: {selectedWorkout?.sets}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Reps: {selectedWorkout?.reps}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Rest: 30 seconds
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Weight: 10kg
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Notes: This is a note
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={6} mt={5}>
                  <LoadingButton
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={() => {
                      navigate(`/app/workout/${id}/start`);
                    }}
                  >
                    Start
                  </LoadingButton>
                  <LoadingButton
                    variant="outlined"
                    color="primary"
                    style={{ marginTop: 20 }}
                    fullWidth
                    size="large"
                    onClick={() => {
                      handleNext();
                    }}
                  >
                    Next
                  </LoadingButton>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ActiveWorkoutView;
