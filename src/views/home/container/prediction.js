import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

const PredictionPage = () => {
  const [weight, setWeight] = useState("");
  const [predictionResult, setPredictionResult] = useState(null);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handlePredict = () => {
    // set dummy setPredictionResult
    setPredictionResult(200);
    // Perform fitness prediction logic here
    // You can set the result using setPredictionResult
  };

  return (
    <Container>
      <div>
        <Typography variant="h5" gutterBottom>
          Fitness Prediction
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Weight
                </Typography>
                <TextField
                  label="Enter your weight"
                  variant="outlined"
                  value={weight}
                  onChange={handleWeightChange}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Prediction Result
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {predictionResult
                    ? `Predicted weight after 30 days: ${predictionResult} lbs`
                    : "No prediction yet"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <LoadingButton
              variant="contained"
              color="primary"
              onClick={handlePredict}
              fullWidth
            >
              Predict
            </LoadingButton>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default PredictionPage;
