"use client";
import { AccordionSummaryProps, Box, Grid, styled } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";

export const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  border: `1px solid #1212121A`,

  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor: "#F5F5F5",
  height: "70px",
  "& .MuiAccordionSummary-content": {
    marginLeft: "10px",
  },
}));

export const StyledLaptopGrid = styled(Grid)(() => ({
  "@media (max-width: 900px)": {
    display: "none",
  },
}));

export const StyledMobileGrid = styled(Grid)(() => ({
  "@media (min-width: 900px)": {
    display: "none",
  },
}));

export const BpIcon = styled("span")(({}) => ({
  borderRadius: 3,
  width: 18,
  height: 18,
  marginLeft: "2px",
  border: "1px solid #CBCBCB",
  backgroundColor: "#F8F8F8",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: "#F8F8F8",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
  },
}));
export const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  backgroundColor: "#F8F8F8",
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  marginLeft: "2px",
  "&:before": {
    content: '""',
    display: "block",
    width: 8,
    height: 8,
    margin: "4px",
    left: "2px",
    background: theme.palette.primary.main,
    borderRadius: "2px",
  },
  "input:hover ~ &": {
    backgroundColor: "#F8F8F8",
  },
}));
