import { Box, IconButton, Button, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export const AppBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      p={2}
      sx={{ borderBottom: 1, color: colors.grey[700] }}
    >
      <Box display="flex">
        {currentUser ? (
          <>
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton>
            <Button component={Link} to="/login" color="secondary" disabled>
              {currentUser?.name}
            </Button>
          </>
        ) : (
          <Button component={Link} olor="secondary" disabled>
            You have to log in
          </Button>
        )}
        {currentUser && (
          <Button
            component={Link}
            to="/login"
            onClick={logout}
            color="secondary"
          >
            Logout
          </Button>
        )}
      </Box>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton>
    </Box>
  );
};
