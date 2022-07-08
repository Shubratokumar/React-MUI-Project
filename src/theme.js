import { createTheme } from "@mui/material";
import { green, orange, purple } from '@mui/material/colors';

export const theme = createTheme ({
    palette:{
        primary:{
            main: "#1760a5",
            light: "skyblue"
        },
        secondary:{
            main: orange[500],
        },
        otherColor:{
            main: purple[500],
            light: green[600]
        }
    
    } 
})