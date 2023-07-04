// @mui
import PropTypes from "prop-types";
import {
  Box,
  Card,
  Paper,
  Typography,
  CardHeader,
  CardContent,
} from "@mui/material";

// ----------------------------------------------------------------------

SelectWorkoutPlanCard.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default function SelectWorkoutPlanCard({
  title,
  subheader,
  list,
  onItemClick,
  selectedPlan,
  ...other
}) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <CardContent>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {list.map((site) => (
            <Paper
              key={site.name}
              variant="outlined"
              sx={{
                py: 2.5,
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: site.id === selectedPlan ? "#e8e8e8" : "white",
              }}
              onClick={() => onItemClick(site.id, site.name)}
            >
              <Box sx={{ mb: 0.5 }}>{site.icon}</Box>

              {/* <Typography variant="h6">{site.value}</Typography> */}

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {site.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
