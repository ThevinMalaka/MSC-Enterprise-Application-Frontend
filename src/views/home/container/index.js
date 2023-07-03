import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Container, Typography } from "@mui/material";

import { testAction } from "../actions";
import { getIsLoggedIn } from "../selectors";
import { AppWidgetSummary } from "../../../components/dashboard";

const HomeView = () => {
  const navigate = useNavigate();
  const status = useSelector((state) => getIsLoggedIn(state));

  const dispatch = useDispatch();

  const test = useCallback(
    (info) => {
      dispatch(testAction(info));
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

          <h2
            onClick={() => {
              test("test");
            }}
          >
            Coming Soon
          </h2>

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
