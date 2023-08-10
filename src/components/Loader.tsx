import "@/styles/loader.css";
import { Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <span className="loader"></span>
    </Box>
  );
};

export default Loader;
