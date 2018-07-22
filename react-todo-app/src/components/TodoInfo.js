import React, { Component } from 'react';

class TodoInfo extends Component {

    state = {
        editing: false,
        todo: "",
        dueDate: "",
    };

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleUpdate = () => {
        const { info, onUpdate } = this.props;
        if (this.state.editing) {
            onUpdate(info.id, {
                todo: this.state.todo,
                dueDate: this.state.dueDate,
            });
        } else {
            this.setState({
                todo: info.todo,
                dueDate: info.dueDate,
            });
        }
        this.setState({
            editing: !this.state.editing
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { todo, dueDate } = this.props.info;
        const { editing } = this.state;

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        }

        return (
           <div style={style}>
           { editing ? (
               <div>
                   <div>
                       <input 
                        name="todo"
                        onChange={this.handleChange}
                        value={this.state.todo}
                       />
                   </div>
                   <div>
                       <input 
                        name="dueDate"
                        onChange={this.handleChange}
                        value={this.state.dueDate}
                       />
                   </div>      
               </div>
           ) : (
               <div>
                   <div>
                       <b>{todo}</b>
                   </div>
                   <div>{dueDate}</div>
               </div>      
           )}
           <button onClick={this.handleRemove}>삭제</button>
           <button onClick={this.handleUpdate}>{editing ? "적용" : "수정"}</button>
           </div>
        );
    }
}

export default TodoInfo;