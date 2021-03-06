import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxList(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      <ListItem key={0} role={undefined} dense button onClick={handleToggle(0)}>
        <ListItemText 
          edge="start"
          id={0} 
          primary={`${props.title} 1`}
          />
        <ListItemIcon>
          <Checkbox
            edge="end"
            color="primary"
            checked={checked.indexOf(0) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': 0 }}
          />
        </ListItemIcon>
      </ListItem>
      <ListItem key={1} role={undefined} dense button onClick={handleToggle(1)}>
        <ListItemText 
          edge="start"
          id={1} 
          primary={props.title} 
          />
        <ListItemIcon>
          <Checkbox
            edge="end"
            color="primary"
            checked={checked.indexOf(1) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': 1 }}
          />
        </ListItemIcon>
      </ListItem>
      <ListItem key={2} role={undefined} dense button onClick={handleToggle(2)}>
        <ListItemText 
          edge="start"
          id={2} 
          primary={props.title} 
          />
        <ListItemIcon>
          <Checkbox
            edge="end"
            color="primary"
            checked={checked.indexOf(2) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': 2 }}
          />
        </ListItemIcon>
      </ListItem>
    </List>
  );
}
