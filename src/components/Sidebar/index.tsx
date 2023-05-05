import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { ReactComponent as HistoryIcon } from 'assets/icons/history.svg';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import { ReactComponent as SalaryIcon } from 'assets/icons/salary.svg';

import './styles.css'
import { useNavigate } from 'react-router-dom';

const drawerWidth = 200;

const handleHistoryClick = (navigate: (path: string) => void) => () => navigate('/history')
const handleHomeClick = (navigate: (path: string) => void) => () => navigate('/')
const handleSalaryClick = (navigate: (path: string) => void) => () => navigate('/salary')
  

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#1E1E1E',
            color: '#fff',
          },
        }}
        variant="persistent"
        anchor="left"
        open
      >
        <List>
          <ListItem disablePadding onClick={handleHomeClick(navigate)}>
            <ListItemButton>
              <ListItemIcon>
                  <HomeIcon className='icon' />
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={handleHistoryClick(navigate)}>
            <ListItemButton>
              <ListItemIcon>
                  <HistoryIcon className='icon' />
              </ListItemIcon>
              <ListItemText primary={'History'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={handleSalaryClick(navigate)}>
            <ListItemButton>
              <ListItemIcon>
                  <SalaryIcon className='icon' />
              </ListItemIcon>
              <ListItemText primary={'Salary Table'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar