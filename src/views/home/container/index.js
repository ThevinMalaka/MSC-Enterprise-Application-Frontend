import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Container, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { workoutPlanEnrollRequest } from "../actions";
import { getIsLoggedIn } from "../selectors";
import {
  AppWidgetSummary,
  SelectWorkoutPlanCard,
} from "../../../components/dashboard";
import Iconify from "../../../components/iconify";

const HomeView = () => {
  const navigate = useNavigate();
  const status = useSelector((state) => getIsLoggedIn(state));
  const [selectedPlan, setSelectedPlan] = useState();

  const dispatch = useDispatch();

  const enrollWorkoutPlan = useCallback(
    (info) => {
      dispatch(workoutPlanEnrollRequest(info));
    },
    [dispatch]
  );

  return (
    <>
      <Container>
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 5 }}>
            Hi, Welcome back
          </Typography>
        </Container>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <Grid item xs={12} md={12} lg={12}>
              <SelectWorkoutPlanCard
                selectedPlan={selectedPlan}
                onItemClick={(id, name) => {
                  setSelectedPlan(id);
                  console.log("clicked on:", name, id);
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
            <Grid item xs={12} md={12} lg={12} p={3}>
              {/* Add enroll now button here */}
              <LoadingButton
                fullWidth
                size="large"
                variant="contained"
                loading={false}
                onClick={() => {
                  enrollWorkoutPlan(selectedPlan);
                }}
              >
                Enroll Now
              </LoadingButton>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <SelectWorkoutPlanCard
              onItemClick={(id, name) => {
                console.log("clicked on:", name, id);
              }}
              title="Traffic by Site"
              list={[
                {
                  name: "FaceBook",
                  value: 323234,
                  icon: (
                    <Iconify
                      icon={"eva:facebook-fill"}
                      color="#1877F2"
                      width={32}
                    />
                  ),
                },
                {
                  name: "Google",
                  value: 341212,
                  icon: (
                    <Iconify
                      icon={"eva:google-fill"}
                      color="#DF3E30"
                      width={32}
                    />
                  ),
                },
                {
                  name: "Linkedin",
                  value: 411213,
                  icon: (
                    <Iconify
                      icon={"eva:linkedin-fill"}
                      color="#006097"
                      width={32}
                    />
                  ),
                },
                {
                  name: "Twitter",
                  value: 443232,
                  icon: (
                    <Iconify
                      icon={"eva:twitter-fill"}
                      color="#1C9CEA"
                      width={32}
                    />
                  ),
                },
              ]}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: 40, marginBottom: 50 }}>
          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary
              title="Workout Hours"
              total={714000}
              icon={"ant-design:clock-circle-filled"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary
              title="Calories Burned"
              total={1352831}
              color="error"
              icon={"ant-design:fire-filled"}
            />
          </Grid>

          {/* <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Steps Taken"
              total={1723315}
              color="warning"
              icon={""}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Bugs Fixed"
              total={234}
              color="error"
              icon={"ant-design:bug-filled"}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
};

export default HomeView;
