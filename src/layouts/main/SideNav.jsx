import React from 'react';
import { Drawer, Stack, Typography, Box, ButtonBase } from '@mui/material';
import { useTheme } from '@emotion/react';
// import { useDispatch } from 'react-redux';
import BarChartIcon from '@mui/icons-material/BarChart';
import TodayIcon from '@mui/icons-material/Today';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GroupsIcon from '@mui/icons-material/Groups';

const SideNavButton = ({ children, icon, onClick }) => (
  <ButtonBase
    sx={{
      alignItems: 'center',
      borderRadius: 1,
      display: 'flex',
      justifyContent: 'flex-start',
      pl: '16px',
      pr: '16px',
      py: '10px',
      textAlign: 'left',
      width: '100%',
      fontSize: '16px',
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
      },
    }}
    onClick={onClick}
  >
    {icon && React.isValidElement(icon) && (
      <span style={{ marginRight: '8px', fontSize: 'small' }}>{icon}</span>
    )}    <Typography>{children}</Typography>
  </ButtonBase>
);

function SideNav() {
  const theme = useTheme();
//   const dispatch = useDispatch();

  const handleClick = (menuItem) => {
    // dispatch(selectMenuItem(menuItem));
  };

  return (
    <Drawer
      anchor="left"
      open={true}
      variant="permanent"
      hideBackdrop={true}
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.primary.main,
          width: 280,
          zIndex: 1,
        },
      }}
    >
      <Box
        component="nav"
        sx={{
          flexGrow: 1,
          px: 2,
          py: 3,
        }}
      >
        <Stack
          component="ul"
          spacing={0.5}
          sx={{
            p: 0,
            m: 0,
          }}
        >
          <Box>
            <Typography variant="overline" >
              Sauron | Beep Beep Boop Boop
            </Typography>
          </Box>
          <SideNavButton icon={<BarChartIcon />} onClick={() => handleClick('dashboard')}>
            Dashboard
          </SideNavButton>
          <SideNavButton icon={<TodayIcon />} onClick={() => handleClick('yearlyScoreboard')}>
            2023 Launch List
          </SideNavButton>
          <SideNavButton icon={<GroupsIcon />} onClick={() => handleClick('dreamTeam')}>
            Dream Team
          </SideNavButton>
          <SideNavButton icon={<FormatListBulletedIcon />} onClick={() => handleClick('dreamTeam')}>
            Web Design Queue
          </SideNavButton>
        </Stack>
      </Box>
    </Drawer>
  );
}

export default SideNav;