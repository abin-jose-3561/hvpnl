import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockData } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";


const TrippingBreakdown = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  

  const columns = [
    { field: "id", headerName: "Circle", flex: 0.5 },
    { field: "TrippingCount", headerName: "Total Tripping count" , flex:1.5},
    {
      field: "TotalOutageT",
      headerName: "Total Outage due to Tripping (hrs)",
      flex: 2.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "TotalBreakdownCount",
      headerName: "Total Breakdown Count",
      flex:1.5,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "TotalOutageB",
      headerName: "Total Outage Due to Breakdown (hrs)",
      flex: 2.5,
    },
    {
      field: "TC",
      headerName: "Total Count",
      flex: 1,
    },
    {
      field: "TH",
      headerName: "Total Hrs",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header
        title="TRIPPING BREAKDOWN"
        subtitle="Trip Breakdown Details"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
    
  );
};

export default TrippingBreakdown;