import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Container, Typography } from "@mui/material";

import { updateTokenToReducer } from "../../login/actions";
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

  const updateToken = useCallback(
    (info) => {
      dispatch(updateTokenToReducer(info));
    },
    [dispatch]
  );

  useEffect(() => {
    updateToken();
  }, []);

  const mealPlan = [
    {
      id: 1,
      items: [
        {
          id: 1,
          name: "Meal 1",
          servingSize: "1 cup",
        },
        {
          id: 2,
          name: "Meal 2",
          servingSize: "1 cup",
        },
        {
          id: 3,
          name: "Meal 3",
          servingSize: "1 cup",
        },
      ],
    },
  ];

  return (
    <>
      <Container>
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 5 }}>
            Hi, Welcome back
          </Typography>
        </Container>

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

          {/* <Grid item xs={12} md={12} lg={12}>
            <div>
              <Typography variant="h5" gutterBottom>
                Selected Meal Plan
              </Typography>
              <Grid container spacing={2}>
                {mealPlan.map((meal, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          Meal {index + 1}
                        </Typography>
                        <List>
                          {meal.items.map((item, itemIndex) => (
                            <ListItem key={itemIndex}>
                              <ListItemText
                                primary={item.name}
                                secondary={`Serving Size: ${item.servingSize}`}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
};

export default HomeView;
