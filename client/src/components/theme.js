import { createContext,useState,useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { color } from "@mui/system";



//color design token
export const tokens= (mode)=>({
  ...(mode === 'dark' ? {grey: {
    100: "#d3dfea",
    200: "#a7bfd5",
    300: "#7ba0bf",
    400: "#4f80aa",
    500: "#236095",
    600: "#1c4d77",
    700: "#153a59",
    800: "#0e263c",
    900: "#07131e"
},
primary: {
    100: "#ffffff",
    200: "#a1a4ab",
    300: "#727681",
    400: "#434957",
    500: "#141b2d",
    600: "#101624",
    700: "#0c101b",
    800: "#080b12",
    900: "#040509"
},
greenAccent: {
    100: "#dbf5ee",
    200: "#b7ebde",
    300: "#94e2cd",
    400: "#70d8bd",
    500: "#4cceac",
    600: "#3da58a",
    700: "#2e7c67",
    800: "#1e5245",
    900: "#0f2922"
},
redAccent: {
    100: "#f8dcdb",
    200: "#f1b9b7",
    300: "#e99592",
    400: "#e2726e",
    500: "#db4f4a",
    600: "#af3f3b",
    700: "#832f2c",
    800: "#58201e",
    900: "#2c100f"
},
blueAccent: {
    100: "#e1e2fe",
    200: "#c3c6fd",
    300: "#a4a9fc",
    400: "#868dfb",
    500: "#6870fa",
    600: "#535ac8",
    700: "#3e4396",
    800: "#2a2d64",
    900: "#151632"
}}:
{
    grey: {
        100: "#07131e",
        200: "#0e263c",
        300: "#153a59",
        400: "#1c4d77",
        500: "#236095",
        600: "#4f80aa",
        700: "#7ba0bf",
        800: "#a7bfd5",
        900: "#d3dfea",
    },
    primary: {
        100: "#040509",
        200: "#080b12",
        300: "#0c101b",
        400: "lightgrey",
        500: "#141b2d",
        600: "#101624",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
    },
    greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
    },
    redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
    },
    blueAccent: {
        100: "#151632",
        200: "#2a2d64",
        300: "#3e4396",
        400: "#535ac8",
        500: "#6870fa",
        600: "#868dfb",
        700: "#a4a9fc",
        800: "#c3c6fd",
        900: "#e1e2fe",
    }
})
})


//mui theme setting
export const themeSettings = (mode)=>{
    const colors = tokens(mode)

return {
    palette:{
        mode:mode,
        ...(mode === 'dark' ?{
            primary:{
                main: colors.primary[100],
            },
            secondary:{
                main: colors.greenAccent[500],
            },
            neutral:{
                dark:colors.grey[700],
                main:colors.grey[500],
                light: colors.grey[100]
            },
            background:{
                default: "rgb(0,150,150)",
            }
        }:{
            primary:{
                main: colors.primary[500],
            },
            secondary:{
                main: colors.greenAccent[500],
            },
            neutral:{
                dark:colors.grey[700],
                main:colors.grey[500],
                light: colors.grey[100]
            },
            background:{
                default: "#ffffff",
            }
        })
    },
    typography:{
        fontFamily: ["Source Sans Pro","sans-serif"].join(","),
        fontSize:12,
        h1:{
            fontFamily: ["Source Sans Pro","sans-serif"].join(","),
            fontSize:44,
        },
        h2:{
            fontFamily: ["Source Sans Pro","sans-serif"].join(","),
            fontSize:34,
        },
        h3:{
            fontFamily: ["Source Sans Pro","sans-serif"].join(","),
            fontSize:26,
        },
        h4:{
            fontFamily: ["Source Sans Pro","sans-serif"].join(","),
            fontSize:24,
        },
        h5:{
            fontFamily: ["Source Sans Pro","sans-serif"].join(","),
            fontSize:20,
        },
        h6:{
            fontFamily: ["Source Sans Pro","sans-serif"].join(","),
            fontSize:16,
        },
    }
  }
}


//context for color mode
export const ColorMOdeContext = createContext({
    toggleColorMOde:()=>{}
});



export const useMode = ()=>{
    const[mode,setMode] = useState("light");

    const colorMode = useMemo(()=>({
        toggleColorMOde:()=>
        setMode((prev)=>(prev === "dark" ? "light":"dark"))
    }),
    []
    );

    const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode])

    return [theme,colorMode]
}