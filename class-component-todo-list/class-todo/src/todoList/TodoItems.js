import React from "react";

export class TodoItems extends React.Component{
constructor(props) {
    super(props);
}

    render() {
        return(
            <div>
                {this.props.todos.map((todo)=>{
                    return (
                        <div key={todo.id} className='list'>
                            <input type='checkbox' checked={todo.isChecked} onChange={()=>{this.props.onChangeCheckbox(todo.id)}}/>
                            <span>{todo.text}</span>
                            <button onClick={()=>{this.props.onDeleteBtn(todo.id)}}>X</button>
                        </div>

                    )
                })}


                <button onClick={()=>{this.props.onClearAll()}}>Clear All</button>
            </div>

        )}

}