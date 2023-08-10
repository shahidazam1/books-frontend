import { alpha, createTheme, ThemeOptions } from "@mui/material/styles";

const themeColors = {
  primary: "#1E19F5",
};

const colors = {
  primary: {
    main: themeColors.primary,
    light: alpha(themeColors.primary, 0.5),
    lighter: alpha(themeColors.primary, 0.1),
  },
};

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      dark: "#1E19F5",
      main: colors.primary.main,
      light: colors.primary.light,
    },

    background: {
      default: "#ffffff",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontFamily: "poppins_regular",
          fontSize: "14px",
          borderRadius: "5px",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          backgroundColor: "#F5F5F5",
          borderRadius: "5px",
          "& .MuiFilledInput-root": {
            background: "#FFFFFF",
          },
          "& .MuiFilledInput-root:hover": {
            background: "#FFFFFF",
            "@media (hover: none)": {
              background: "#FFFFFF",
            },
          },
          "& .MuiFilledInput-root.Mui-focused": {
            background: "#FFFFFF",
          },
          fontFamily: "poppins_medium",
          variant: "filled",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          fontFamily: "poppins_light",
          color: "#151515",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "poppins_light",
          color: "#151515",
          opacity: "70%",
          fontSize: "12px",
        },
        shrink: ({ ownerState }) => ({
          ...(ownerState.shrink && {
            fontSize: "0.9rem !important",
            // top: "-1 !important",
          }),
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        formControl: {
          fontFamily: "poppins_regular",
          color: "#151515",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "poppins_regular",
          color: "#151515",
          fontSize: "13px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: "0px 2px 10px #0000001A",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 5px 20px #0000001A",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 5px 20px #0000001A",
          borderRadius: "8px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: "poppins_regular",
          color: "#151515",
          fontSize: "11px",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          fontFamily: "poppins_regular",
          color: "#151515",
        },
        option: {
          fontFamily: "poppins_regular",
          color: "#151515",
          fontSize: "12px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#151515",
          fontFamily: "poppins_regular",
        },
        h1: {
          color: "#151515",
          fontFamily: "poppins_bold",
        },
        h2: {
          color: "#151515",
          fontFamily: "poppins_bold",
        },
        h3: {
          color: "#151515",
          fontFamily: "poppins_bold",
        },
        h4: {
          color: "#151515",
          fontFamily: "poppins_bold",
          fontSize: "38px",
        },
        h5: {
          color: "#151515",
          fontFamily: "poppins_semibold",
          fontSize: "20px",
        },
        h6: {
          color: "#151515",
          fontFamily: "poppins_semibold",
          fontSize: "14px",
        },
        subtitle1: {
          color: "#151515",
          fontFamily: "poppins_semibold",
          fontSize: "22px",
        },
        subtitle2: {
          color: "#151515",
          fontFamily: "poppins_semibold",
          fontSize: "15px",
        },
        body1: {
          color: "#151515",
          fontFamily: "poppins_medium",
          fontSize: "15px",
        },
        body2: {
          color: "#151515",
          fontFamily: "poppins_medium",
          opacity: "85%",
          fontSize: "12px",
        },
        caption: {
          color: "#151515",
          fontFamily: "poppins_regular",
          fontSize: "10px",
          opacity: "65%",
        },
      },
    },
  },
});
