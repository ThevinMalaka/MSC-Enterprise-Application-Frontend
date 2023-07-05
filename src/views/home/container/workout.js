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

import { getWorkoutPlanListRequest } from "../actions";
import { getWorkoutPlanList } from "../selectors";
import { SelectWorkoutPlanCard } from "../../../components/dashboard";

const WorkoutView = () => {
  const navigate = useNavigate();
  const workoutPlans = useSelector((state) => getWorkoutPlanList(state));
  const [selectedPlan, setSelectedPlan] = useState(3);

  const dispatch = useDispatch();

  const getWrokoutPlanList = useCallback(
    (info) => {
      dispatch(getWorkoutPlanListRequest(info));
    },
    [dispatch]
  );

  useEffect(() => {
    getWrokoutPlanList();
  }, []);

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
              title="Workout Plans"
              list={workoutPlans}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default WorkoutView;
