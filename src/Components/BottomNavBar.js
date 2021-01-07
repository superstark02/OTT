import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { theme } from '../Theme/Theme';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: "fixed",
    bottom: '0',
    paddingTop:'5px',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    boxShadow: "0px -10px 10px rgba(0,0,0,0.5)",
  },
  action: {
      color: 'grey'
  },
  selected: {
    color: "red"
 }
});

export default function BottomNavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation showLabels value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction className={classes.action} label="Recents" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction className={classes.action} label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction className={classes.action} label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction className={classes.selected} label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
