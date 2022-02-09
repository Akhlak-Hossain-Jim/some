import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
  

import Drawbar from '../../app/layout/Drawbar';

export default function Navbar() {   
    return(
            <AppBar position="sticky" color={"primary"}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <img src={'open-logo.svg'} alt="logo" className={'open-logo'} />
                    <Box display="flex" justifyContent="flex-end">
                        {/*<Button variant="text">Login</Button>*/}
                        <IconButton
                            size="large"
                            edge="start"
                            color="default"
                            aria-label="menu"
                            title="Login"
                            sx={{ mr: 0, ml: 1 }}>
                            <LockOutlinedIcon />
                        </IconButton>
                        
                        <Drawbar />
                    </Box>
                </Toolbar>
            </AppBar>
    )
}