import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export default function CheckboxListItem(props) {
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
    <ListItem key={0} role={undefined} dense button onClick={handleToggle(0)}>
      <ListItemText 
        edge="start"
        id={0} 
        primary={props.title}
        secondary={props.description}
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
  );
}
