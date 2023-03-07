import React from "react";

class ButtonTest extends React.Component {
  render() {

    function handleClick() {
      console.log('按钮被点击了');
    };

    return (<button onClick={handleClick}>按钮</button>);
  };
}

export default ButtonTest;