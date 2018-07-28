import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoInfoList from './components/TodoInfoList';

class App extends Component {

  // id를 state로 관리하지 않는 이유는 id는 렌더링되는 정보가 아니기 때문이다.
  id = 0;

  // App.js가 onCreate를 props로 TodoFrom.js에 전달해 데이터들을 받아왔으니  
  // 이를 배열을 이용해서 저장해준다. 
  state = {
    information: [],
  }

  handleCreate = (data) => {
    /* 
      react에서는 불변성을 항상 유지해줘야 합니다.
      어떤 값을 수정하게 되면 무조건 setState를 사용해줘야 합니다.
      또한 어떤 배열이나 객체 내부의 값을 바꾸게 될 때는, 기존의 객체나 배열을 수정하지 않고
      기존의 객체나 배열을 기반으로 새로운 객체나 배열을 만들어 값을 주입해줘야 합니다.  
      추가적으로 setState를 사용하는 이유는 값이 바뀌면 re-rendering을 무조건 하기 위함이다.
    */
      this.setState({
        // 기존에 있던 배열을 수정하지 않고 새로운 배열을 만들어 data를 넣어주고 이 배열을 기존의 배열 자리에 넣어준다.
        // Object.assign을 이용해서 빈 객체{}를 만들고 그 빈 객체에 data 값과 id를 넣어준다.
        information: this.state.information.concat(Object.assign({}, data, {
          id: this.id++
        }))
      });
    }
    
    handleRemove = (id) => {
      const { information } = this.state;
      this.setState({
        information: information.filter(info => info.id !==id)
      })
    }

    handleUpdate = (id, data) => {
      const { information } = this.state;
      this.setState({
        information: information.map(
          info => {
            if (info.id === id) {
              return {
                id,
                ...data,
              };
            }
            return info;
          }
        )
      })
    }
   
    render() {
      return (    
      <div> 
       <TodoForm onCreate={this.handleCreate} />
       <TodoInfoList 
        data={this.state.information}
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}
        />
      </div>
      );  
    }
}

export default App;
