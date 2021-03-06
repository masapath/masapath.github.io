import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import CheckboxListItem from "./CheckboxListItem";
import List from '@material-ui/core/List';
import TextFieldListItem from "./TextFieldListItem";
import { Button } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Router> */}
          <h1>点呼アプリ</h1>
          <List className="sample">
            <CheckboxListItem title="点呼項目１" description="車体点検を実施しました。"/>
            <CheckboxListItem title="点呼項目２" description="検温を実施しました。"/>
            <CheckboxListItem title="点呼項目３" description="アルコール検知器で酒気確認を実施しました。"/>
            <CheckboxListItem title="点呼項目４" description="体調に問題ないことを確認しました。"/>
            <CheckboxListItem title="点呼項目５" description="日常点検を実施しました。"/>
            <CheckboxListItem title="点呼項目６" description="前日の運行距離規定内であることを確認しました。"/>
            <TextFieldListItem title="点呼項目７" description="そのほか特記事項があれば入力してください。"/>
            <Button variant="contained" color="primary">カメラ起動</Button>
            ※まだ起動しない
          </List>
        {/* </Router> */}
      </div>
    );
  }
}

export default App;