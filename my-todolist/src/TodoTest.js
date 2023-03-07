import React from 'react';

class TodoTest extends React.Component {
  render() {
    const todoList = ["图雀", "图雀写作工具", "图雀社区", "图雀文档"];
    return (
      <ul>
        <li>类组件 {this.props.content} - {todoList[0]}</li>
      </ul>
    )
  }
}

class StateDemoTest extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todoList: ["图雀", "图雀写作工具", "图雀社区", "图雀文档"]
    };
  }

  render() {
    return (
      <ul>
        <li>{this.state.todoList[0]}</li>
        <li>{this.state.todoList[1]}</li>
        <li>{this.state.todoList[2]}</li>
        <li>{this.state.todoList[3]}</li>
      </ul>
    );
  }
}

export {TodoTest, StateDemoTest};