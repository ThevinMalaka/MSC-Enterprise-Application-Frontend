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
                  variant="h4"
                  gutterBottom
                  style={{ marginBottom: 20 }}
                >
                  Prediction Result
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Date: 2023-07-05 - Weight: 80 kg
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Date: 2023-07-06 - Weight: 79.5 kg
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Date: 2023-07-07 - Weight: 79 kg
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Date: 2023-07-08 - Weight: 78.5 kg
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Date: 2023-07-09 - Weight: 78 kg
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
