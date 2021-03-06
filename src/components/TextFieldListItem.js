import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export default function TextFieldListItem(props) {
  return (
    <ListItem key={0} role={undefined} dense>
      <ListItemText 
        edge="start"
        id={0} 
        primary={props.title}
        secondary={props.description}
        />
      <TextField
        edge="end"
        color="primary"
        tabIndex={-1}
        inputProps={{ 'aria-labelledby': 0 }}
      />
    </ListItem>
  );
}
