import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        { title: 'react-calendarの使い方を理解する' },
        { title: 'inputの情報を配列内に追加' },
        { title: '追加したデータの表示' }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
  }
  　addTodo() {
    // 追加
    this.state.todo.push({
      title: this.refs.newText.value
    });
    // 保存
    this.setState({
      todo : this.state.todo
    });
    // 初期化
    this.refs.newText.value='';
  }

  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        {/*mapでtodoの個数だけtitleを表示 iはmapのindex番号を試しにいれているだけ*/}
        <ul>{this.state.todo.map( (todo, i) => {
          return <li><input type="button" value="☓" /> {todo.title}</li>
        })}</ul>
        <input type="text" /><input type="button" value="追加" />
      </div>
    );
  }
}

export default App;
