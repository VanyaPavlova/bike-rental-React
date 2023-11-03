import { Route, Routes } from "react-router-dom";
import { useState, useContext } from "react";
import { AppBar } from "./components/shared/AppBar";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Manager } from "./pages/Manager";
import { Bikes } from "./pages/Bikes";
import { UserContext } from "./context/UserContext";

function App() {
  const [theme, colorMode] = useMode();
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main className="app">
            <section className="content">
              <AppBar />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/manager" element={<Manager />} />
                <Route path="/bikes" element={<Bikes />} />
              </Routes>
            </section>
          </main>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
