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
        <Grid container spacing={2} style={{ marginTop: 60 }}>
          <Grid item xs={12} md={12} lg={3}></Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Card>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ marginBottom: 20 }}
                >
                  Prediction Result
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Date: 2021-10-10 - Weight: 80 kg
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Date: 2021-10-10 - Weight: 80 kg
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Date: 2021-10-10 - Weight: 80 kg
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Date: 2021-10-10 - Weight: 80 kg
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default PredictionPage;
