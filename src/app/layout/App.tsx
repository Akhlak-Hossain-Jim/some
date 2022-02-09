import { CssBaseline, ThemeProvider, Container, Fab } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';

import { Otheme } from './Otheme';
import Navbar from './Navbar';
import Incorporation from "../../modules/incorp/Incorporation";

function App() {
  return (
    <ThemeProvider theme={Otheme}>
      <CssBaseline />
        <Navbar />
        <Container>
          <Incorporation />
          <Fab color="primary" aria-label="add">
            <ChatIcon />
          </Fab>
        </Container>
      </ThemeProvider>
  );
}

export default App;
