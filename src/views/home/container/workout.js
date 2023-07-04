import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";

import { workoutPlanEnrollRequest } from "../actions";
import { getIsLoggedIn } from "../selectors";
import {
  AppWidgetSummary,
  SelectWorkoutPlanCard,
} from "../../../components/dashboard";
import Iconify from "../../../components/iconify";

const WorkoutView = () => {
  const navigate = useNavigate();
  const status = useSelector((state) => getIsLoggedIn(state));
  const [selectedPlan, setSelectedPlan] = useState(3);

  const dispatch = useDispatch();

  const enrollWorkoutPlan = useCallback(
    (info) => {
      dispatch(workoutPlanEnrollRequest(info));
    },
    [dispatch]
  );

  const [weight, setWeight] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const [cheatMeals, setCheatMeals] = useState([]);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  useEffect(() => {
    // Fetch workouts and cheat meals here
    // add sample data to workouts and cheatMeals
    setWorkouts([
      { id: 1, name: "Workout 1" },
      { id: 2, name: "Workout 2" },
      { id: 3, name: "Workout 3" },
    ]);
    setCheatMeals([
      { id: 1, name: "Cheat Meal 1" },
      { id: 2, name: "Cheat Meal 2" },
      { id: 3, name: "Cheat Meal 3" },
    ]);
  }, []);

  const handleAddWorkout = () => {
    // Add workout logic here
    // You can use setWorkouts to update the workouts state
  };

  const handleAddCheatMeal = () => {
    // Add cheat meal logic here
    // You can use setCheatMeals to update the cheatMeals state
  };

  return (
    <Container>
      <div>
        <Typography variant="h5" gutterBottom>
          Workout Page
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <SelectWorkoutPlanCard
              selectedPlan={selectedPlan}
              onItemClick={(id, name) => {
                // setSelectedPlan(id);
                // route to single workout page
                if (id == selectedPlan) {
                  navigate(`/active-workout/${id}`);
                } else {
                  navigate(`/workout/${id}`);
                }
              }}
              style={{ cursor: "pointer" }}
              title="Please Select your workout plan"
              list={[
                {
                  id: 1,
                  name: "Beginner",
                  value: 323234,
                  icon: (
                    <Iconify
                      icon={"arcticons:home-workouts"}
                      color="#54D62C"
                      width={50}
                    />
                  ),
                },
                {
                  id: 2,
                  name: "Intermediate",
                  value: 341212,
                  icon: (
                    <Iconify
                      icon={"arcticons:home-workouts"}
                      color="#54D62C"
                      width={50}
                    />
                  ),
                },
                {
                  id: 3,
                  name: "Advanced",
                  value: 411213,
                  icon: (
                    <Iconify
                      icon={"arcticons:home-workouts"}
                      color="#229A16"
                      width={50}
                    />
                  ),
                },
                {
                  id: 4,
                  name: "Expert",
                  value: 443232,
                  icon: (
                    <Iconify
                      icon={"arcticons:home-workouts"}
                      color="#229A16"
                      width={50}
                    />
                  ),
                },
              ]}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default WorkoutView;
