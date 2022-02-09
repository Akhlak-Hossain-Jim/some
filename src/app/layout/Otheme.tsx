import { createTheme } from "@mui/material/styles";

const Otheme = createTheme({
    palette: {
      primary: {
        main: "#F5BD1F",
        contrastText: "#6a0dad"
      }
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                // The props to change the default for.
                //disableRipple: true, // No more ripple!
            },
        },
        MuiButton: {
            styleOverrides: {
                // text buttons
                text: {
                    color: "black"
                }
            }
        },
        MuiFab : {
            styleOverrides: {
               circular: {
                    color: "black",
                    position: "absolute",
                    bottom: 70,
                    right: 70,
               }
            }
        }
    }
  });

export { Otheme };