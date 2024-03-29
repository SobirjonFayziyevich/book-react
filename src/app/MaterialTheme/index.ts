
// @ts-ignore
import { createTheme } from "@mui/material/styles";
// @ts-ignore
import { common } from "@mui/material/colors";
import shadow from "./shadow";
import typography from "./typography";

/**
 * LIGHT THEME (DEFAULT)
 */
const light = {
    palette: {
        type: "light",
        background: {
            default: "#f4f6f8",
            paper: common.white,
        },
        primary: {
            contrastText: "#ffffff",
            main: "#1976d2",
        },
        secondary: {      // pagedagi new, price, likes, views larni rangini uzgartirib beradi.
            // main: "#c40909",
            main: "#FF7A00;",  
        },
        text: {
            primary: "#172b4d",
            secondary: "#6b778c",
            dark: common.black,
        },
    },
    components: {   // containerga rang berilgan section.
        MuiContainer: {
            styleOverrides: {
                root: {
                    height: "100%", // butun containerni balandligi.
                    // background: "#c40909",
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                html: { height: "100%" },
                body: { background: "#f4f6f8", height: "100%", minHeight: "100%" },
            },
        },
    },
    shadow,
    typography,
};

// A custom theme for this app => mijozlarning applicationing razmeriga qarab uzgarsin
let theme = createTheme(light);
theme = createTheme(theme, {
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthLg: {
                    [theme.breakpoints.up("lg")]: {  // lg=> large format degani
                        maxWidth: "1320px",
                    },
                },
            },
        },
    },
});
export default theme;
