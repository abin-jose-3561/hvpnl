import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataDamagetrans } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";


const DamagedTransformer = () => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);



  const columns = [
    { field: "id", headerName: "Name of Circle", flex: 2.5 },
    { field: "TrippingCount", headerName: "Damaged Transformers" , flex:2.5},
    {
      field: "TotalOutageT",
      headerName: "Damage Rate",
      flex: 2.5,
      cellClassName: "name-column--cell",
    },
  ];


return (
    <Box m="20px">
      <Header
        title="DAMAGED TRANSFORMER "
        subtitle="Damaged Transformer  Details"
      />

      <Box
        m="40px 0 50px 130px"
        height="65vh"
        width="100vh"
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

          rows={mockDataDamagetrans}
          columns={columns}
          components={{ Toolbar: GridToolbar }}    

        />

      </Box>
    </Box>
  );

};



export default DamagedTransformer;