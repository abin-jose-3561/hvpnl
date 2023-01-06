import {Box} from "@mui/material";
import Header from "../../components/Header";
import SubBar from "../../components/SubBar";
import PieChart from "../../components/PieChart";

const SubstationDash =()=>{
    return <Box m="20px">
        <Box display="flex" justifyContent="space-between" align>
        <Header title = " SUBSTATION DASHBOARD" subtitle ="Substation Details" />
        </Box>
        <Box mt='-40' display="grid"

        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="440px"
        gap="20px">
            <Box 
            gridColumn="span 6"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <SubBar/>
                </Box> 
                <Box 
            gridColumn="span 6"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <PieChart/>
                </Box>
      </Box>

        </Box>
};
export default SubstationDash;