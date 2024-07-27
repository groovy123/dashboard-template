import { NavLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Link from '@mui/material/Link';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListNumbered from '@mui/icons-material/FormatListNumbered';
import Chat from '@mui/icons-material/Chat';
import EditNote from '@mui/icons-material/EditNote';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Email from '@mui/icons-material/Email';

import { ConstValues as CV } from "./ConstValues";
import AssignmentIcon from '@mui/icons-material/Assignment';

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: CV.drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

type Param = {
    isOpen: boolean,
    toggleDrawer: () => void,
}

export default function KeiDrawer({ isOpen, toggleDrawer, }: Param) {

    return (
        <Drawer variant="permanent" open={isOpen}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <ListSubheader component="div" inset>
                    Uma
                </ListSubheader>
            <List component="nav">
                <ListItemButton component={NavLink} to="/">
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <Link href="/" color="inherit" underline='none'>Dashboard</Link>
                </ListItemButton>
                <ListItemButton component={NavLink} to="/kaime">
                    <ListItemIcon>
                        <ShoppingCart />
                    </ListItemIcon>
                    <ListItemText>買い目</ListItemText>
                </ListItemButton>
                <ListItemButton component={NavLink} to="/syutsubahyo">
                    <ListItemIcon>
                        <EditNote />
                    </ListItemIcon>
                    <ListItemText>出馬表</ListItemText>
                </ListItemButton>
                <ListItemButton component={NavLink} to="/kisyulist">
                    <ListItemIcon>
                        <FormatListNumbered />
                    </ListItemIcon>
                    <ListItemText>騎手リスト</ListItemText>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <Chat />
                    </ListItemIcon>
                    <ListItemText primary="Chat" />
                </ListItemButton>

                <Divider sx={{ my: 1 }} />

                <ListSubheader component="div" inset>
                    Other
                </ListSubheader>

                <ListItemButton component={NavLink} to="/about">
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText>About</ListItemText>
                </ListItemButton>
                <ListItemButton component={NavLink} to="/mail">
                    <ListItemIcon>
                        <Email />
                    </ListItemIcon>
                    <ListItemText>お問い合わせ</ListItemText>
                </ListItemButton>

            </List>
        </Drawer>
    );
}
