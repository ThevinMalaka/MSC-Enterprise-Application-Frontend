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
import {
  AppWidgetSummary,
  SelectWorkoutPlanCard,
} from "../../../components/dashboard";
import Iconify from "../../../components/iconify";
import workoutImage from "../../../assets/images/background/workout-img-1.jpg";

const ActiveWorkoutView = () => {
  // get the workout id from the url
  const { id } = useParams();
  console.log("workoutId", id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  // sample data for workout plan
  const [workoutPlan, setWorkoutPlan] = useState([
    "Workout 1",
    "Workout 2",
    "Workout 3",
    "Workout 4",
    "Workout 5",
    "Workout 6",
    "Workout 7",
    "Workout 8",
    "Workout 9",
    "Workout 10",
  ]);

  const [completedWorkouts, setCompletedWorkouts] = useState([]);
  const today = new Date().getDay(); // Get current day (0-6, where Sunday is 0)

  const handleCompleteWorkout = (day) => {
    setCompletedWorkouts([...completedWorkouts, day]);
  };

  return (
    <Container>
      <div>
        <Typography variant="h5" gutterBottom>
          Active Workout Details
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
                <div>
                  <Typography variant="h5" gutterBottom>
                    Selected Workout Plan
                  </Typography>
                  <List>
                    {workoutPlan.map((workout, index) => (
                      <ListItem key={index}>
                        <Checkbox
                          checked={completedWorkouts.includes(index)}
                          disabled={index > today}
                          onChange={() => handleCompleteWorkout(index)}
                        />
                        <ListItemText
                          primary={`Day ${index + 1}`}
                          secondary={workout}
                        />
                        {index === today && (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleCompleteWorkout(index)}
                          >
                            Complete
                          </Button>
                        )}
                      </ListItem>
                    ))}
                  </List>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ActiveWorkoutView;
