import Header from "../../components/Header";
import { Box, Grid } from "@mui/material";
import BarChart from "../../components/BarChart";


const TripAnalytics = () => {
  return <Box m="20px">
   <Header title="TRIP BREAKDOWN ANALYTICS" subtitle="Analytics for Trip Breakdown" />
      <Box height="75vh">
          <BarChart/>
      </Box>
</Box>
}

export default TripAnalytics;