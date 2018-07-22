import React, { Component } from 'react';
import TodoInfo from './TodoInfo';

class TodoInfoList extends Component {
    
    static defaultProps = {
        data: []
    }

    render() {
        const { data, onRemove, onUpdate} = this.props;
        // if (!data) return null;
        const list = data.map(
            // key를 넣는 이유는 컴포넌트를 여러개 렌더링할 때 고유값을 넣어 업데이트 성능을 최적화 시켜준다.
            // 만약 key가 없다면 배열의 index가 key값이 되고 콘솔창에 워닝이 뜬다.
            // 또한 index가 key가 되면 삭제 기능을 넣게 되었을 때, 문제가 생긴다.
            info => (
              <TodoInfo
                onRemove={onRemove}
                onUpdate={onUpdate}
                info={info}
                key={info.id}
              />
            )
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default TodoInfoList;