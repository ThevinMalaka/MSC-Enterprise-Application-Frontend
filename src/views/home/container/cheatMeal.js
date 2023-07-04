import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from "@mui/material";

const CheatMealPage = () => {
  const [cheatMeal, setCheatMeal] = useState("");
  const [mealType, setMealType] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");
  const [cheatMeals, setCheatMeals] = useState([]);

  const handleCheatMealChange = (event) => {
    setCheatMeal(event.target.value);
  };

  const handleMealTypeChange = (event) => {
    setMealType(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    setCalories(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddCheatMeal = () => {
    if (
      cheatMeal.trim() !== "" &&
      mealType !== "" &&
      calories !== "" &&
      date !== ""
    ) {
      const newCheatMeal = {
        meal: cheatMeal,
        type: mealType,
        calories: calories,
        date: date,
      };
      setCheatMeals([...cheatMeals, newCheatMeal]);
      setCheatMeal("");
      setMealType("");
      setCalories("");
      setDate("");
    }
  };

  return (
    <Container>
      <div>
        <Typography variant="h5" gutterBottom>
          Cheat Meal Tracker
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Add Cheat Meal
                </Typography>
                <TextField
                  label="Enter cheat meal"
                  variant="outlined"
                  value={cheatMeal}
                  style={{ marginRight: 10 }}
                  onChange={handleCheatMealChange}
                />
                <FormControl variant="outlined" style={{ minWidth: 200 }}>
                  <InputLabel id="meal-type-label">Meal Type</InputLabel>
                  <Select
                    labelId="meal-type-label"
                    id="meal-type"
                    value={mealType}
                    style={{ marginRight: 10 }}
                    onChange={handleMealTypeChange}
                    label="Meal Type"
                  >
                    <MenuItem value="Breakfast">Breakfast</MenuItem>
                    <MenuItem value="Lunch">Lunch</MenuItem>
                    <MenuItem value="Dinner">Dinner</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Calories"
                  variant="outlined"
                  value={calories}
                  style={{ marginRight: 10 }}
                  onChange={handleCaloriesChange}
                />
                <TextField
                  label="Date"
                  variant="outlined"
                  style={{ marginRight: 10 }}
                  value={date}
                  onChange={handleDateChange}
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 10, width: 150 }}
                  onClick={handleAddCheatMeal}
                >
                  Add
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Cheat Meal History
                </Typography>
                {cheatMeals.length === 0 ? (
                  <Typography variant="subtitle1" gutterBottom>
                    No cheat meals recorded
                  </Typography>
                ) : (
                  <List>
                    {cheatMeals.map((meal, index) => (
                      <ListItem key={index}>
                        <ListItemText
                          primary={meal.meal}
                          secondary={`Type: ${meal.type}, Calories: ${meal.calories}, Date: ${meal.date}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default CheatMealPage;