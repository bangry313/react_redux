const TodoListBox = ({ todoArray }) => {
    // console.log(todoArray);
    const style = {
        width: '300px',
        margin: '10px auto',
        color: 'blue',
        background: 'gold',
        border: '1px solid red'
    };

    return (
        <div style={style}>
            <ul>
                {
                    todoArray.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoListBox;