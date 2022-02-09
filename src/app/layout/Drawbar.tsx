import React, {Fragment, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { IconButton } from '@mui/material';

type Anchor = 'right';

export default function Drawerbar() {

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key='Profile'>
          <Box
            sx={{  
              display: "flex",
              justifyContent: "flex-end"
              }}>
            <img src='user.jpeg' width="150" height="150" alt='sample'/>
          </Box> 
        </ListItem>
        <Divider />
        <ListItem button key='Mailroom'>
            <ListItemIcon>
               <MailRoundedIcon />
            </ListItemIcon>
            <ListItemText primary='Mailroom' />
          </ListItem>
        <ListItem button key='Settings'>
            <ListItemIcon>
               <SettingsRoundedIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key='Logout'>
            <ListItemIcon>
              <LogoutRoundedIcon />
            </ListItemIcon>
            <ListItemText primary='Logout'/>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}
                            size="large"
                            edge="start"
                            color="default"
                            aria-label="menu"
                            title="Open"
                            sx={{ mr: 3, ml: 0 }}>
                            <MenuIcon />
                        </IconButton>
          {/*<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>*/}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}