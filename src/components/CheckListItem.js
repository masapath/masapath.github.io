import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class CheckListItem extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <div className="CheckList">
        <div className="CheckListItem-title">{title}</div>
        <div className="CheckListItem-description">{description}</div>
        <Checkbox defaultChecked color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
      </div>
    );
  }
}
export default CheckListItem;