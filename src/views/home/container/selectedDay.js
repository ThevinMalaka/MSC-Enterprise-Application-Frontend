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

const ActiveWorkoutView = () => {
  // get the workout id from the url
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedWorkout, setSelectedWorkout] = useState(1);
  const [startedWorkoutList, setStartedWorkoutList] = useState([]);
  const [completedWorkoutStartAndEndTime, setCompletedWorkoutStartAndEndTime] =
    useState([]);

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

  const checkIfWorkoutStarted = (workout) => {
    return startedWorkoutList.includes(workout.id);
  };

  const handleStartTime = (workout) => {
    // push start time to the array with workout id
    setCompletedWorkoutStartAndEndTime([
      ...completedWorkoutStartAndEndTime,
      { id: workout.id, startTime: new Date() },
    ]);
  };

  const handleEndTime = (workout) => {
    // Update the end time of the workout object find by id
    const workoutIndex = completedWorkoutStartAndEndTime.findIndex(
      (workoutObj) => workoutObj.id === workout.id
    );

    const workoutObj = completedWorkoutStartAndEndTime[workoutIndex];
    workoutObj.endTime = new Date();

    // Update the workout object in the array
    const updatedWorkoutList = completedWorkoutStartAndEndTime.map(
      (workoutObj) => {
        if (workoutObj.id === workout.id) {
          return workoutObj;
        } else {
          return workoutObj;
        }
      }
    );

    setCompletedWorkoutStartAndEndTime(updatedWorkoutList);
  };

  const returnStartTime = (workout) => {
    const workoutObj = completedWorkoutStartAndEndTime.find(
      (workoutObj) => workoutObj.id === workout.id
    );
    if (!workoutObj) return;

    // return it as string
    return `| Start - ${workoutObj.startTime.getHours()}:${workoutObj.startTime.getMinutes()}`;
  };

  const returnEndTime = (workout) => {
    const workoutObj = completedWorkoutStartAndEndTime.find(
      (workoutObj) => workoutObj.id === workout.id
    );
    if (!workoutObj) return;
    if (!workoutObj.endTime) return;

    // return it as string
    return ` End - ${workoutObj.endTime.getHours()}:${workoutObj.endTime.getMinutes()}`;
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Day {id} Workout Plan
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
                    // onClick={() => {
                    //   // setSelectedWorkout(workout);
                    // }}
                  >
                    <ListItemText>
                      <Typography variant="body2" gutterBottom>
                        {workout.name} {returnStartTime(workout)}
                        {returnEndTime(workout)}
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
                  {workoutPlan.length === startedWorkoutList.length ? (
                    <LoadingButton
                      variant="contained"
                      color="error"
                      style={{ marginTop: 20 }}
                      fullWidth
                      size="large"
                      onClick={() => {
                        navigate("/workout");
                        handleEndTime(selectedWorkout);
                      }}
                    >
                      End
                    </LoadingButton>
                  ) : (
                    <>
                      {checkIfWorkoutStarted(selectedWorkout) ? (
                        <LoadingButton
                          variant="contained"
                          color="success"
                          style={{ marginTop: 20 }}
                          fullWidth
                          size="large"
                          onClick={() => {
                            handleNext();
                            handleEndTime(selectedWorkout);
                          }}
                        >
                          Next
                        </LoadingButton>
                      ) : (
                        <LoadingButton
                          variant="contained"
                          style={{ marginTop: 20 }}
                          color="primary"
                          fullWidth
                          size="large"
                          onClick={() => {
                            setStartedWorkoutList([
                              ...startedWorkoutList,
                              selectedWorkout.id,
                            ]);
                            handleStartTime(selectedWorkout);
                          }}
                        >
                          Start
                        </LoadingButton>
                      )}
                    </>
                  )}
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
