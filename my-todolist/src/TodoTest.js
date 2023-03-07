import React from 'react';

class TodoTest extends React.Component {
  render() {
    //const todoList = ["图雀", "图雀写作工具", "图雀社区", "图雀文档"];
    if (this.props.content === '图雀') return (
      <li>类组件 {this.props.content}</li>
    )
    else return (
      <li>类组件非图雀 {this.props.content}</li>
    )
  }
}

const todoList = ["图雀", "图雀写作工具", "图雀社区", "图雀文档"];
class StateDemoTest extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      nowTodo: ''
    };

    console.log(this.state);
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ todoList: todoList, nowTodo: 'Hello, 图雀' });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todoList.map((todo, index) => <TodoTest content={todo} key={index} />)}
        </ul>
      </div>
    );
  }
}

export { TodoTest, StateDemoTest };