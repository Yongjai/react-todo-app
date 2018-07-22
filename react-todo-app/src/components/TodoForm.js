import React, { Component } from 'react';

class TodoForm extends Component {
    state = {
        todo:  '',
        dueDate:'',
    }

    // input에서 변경 이벤트가 발생될 때 처리할 함수
    handelChange = (e) => {
        this.setState({
            // e.target.name은 input의 name을 받는다.
            // 두 개 이상의 input을 관리할 때 유용함.
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        // type="submit" 버튼을 누르면 페이지가 자동 로드가 되는데 이를 방지해준다.
        e.preventDefault();
        // App.js에서 props로 받았던 onCreate를 호출
        this.props.onCreate({
            todo: this.state.todo,
            dueDate: this.state.dueDate,
        });
        this.setState({
            todo: '',
            dueDate: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <input
                name="todo" 
                placeholder="할 일을 입력하세요."
                onChange={this.handelChange}
                value={this.state.todo}
                />
                <input
                 name="dueDate"
                 placeholder="만료 기간을 입력하세요."
                 onChange={this.handelChange}
                 value={this.state.dueDate}
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default TodoForm;