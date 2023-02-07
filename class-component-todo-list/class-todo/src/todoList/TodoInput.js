import React from "react";
import {TodoItems} from "./TodoItems";

export class TodoInput extends React.Component{
    constructor(props) {
        super(props);
        this.state =  {
            todos:[],
            inputValue:'',
        }
        this.inputOnChange=this.inputOnChange.bind(this)
        this.onAddBtn=this.onAddBtn.bind(this)
        this.onChangeCheckbox=this.onChangeCheckbox.bind(this)
        this.onDeleteBtn=this.onDeleteBtn.bind(this)
        this.onClearCheckeds=this.onClearCheckeds.bind(this)




    }

    onClearCheckeds(){
        const newTodo =this.state.todos.filter(item=>!item.isChecked)
        this.setState({

            todos:newTodo
        })
    }



    onDeleteBtn(id){
        const newTodos = this.state.todos.filter((item)=>item.id !== id)
        this.setState({

            todos:newTodos
        })


    }

    inputOnChange(e){
        this.setState({
           
            inputValue:e.target.value
           
        })
    }
    onAddBtn(e){
        e.preventDefault()
        this.setState({
            inputValue:'',
            todos:[...this.state.todos,{id:Math.random(),text:this.state.inputValue,isChecked:false}]
        })

    }


    onChangeCheckbox(id){
        const newTodos = this.state.todos.map(item=>{
            if(item.id===id){
                return {
                    ...item,
                    isChecked:!item.isChecked
                }
            }else{
                return item
            }
        })
        this.setState({
            ...this.state,
            todos: newTodos,

        })
    }

    render() {

        return(
            <>
            <div>
                <form>
            <input type='text' value={this.state.inputValue} onChange={this.inputOnChange} 
            />
                <button onClick={this.onAddBtn}>Add</button>
                </form>
            </div>
            <TodoItems todos={this.state.todos} onChangeCheckbox={this.onChangeCheckbox} onDeleteBtn={this.onDeleteBtn} onClearCheckeds={this.onClearCheckeds}/>

                <span>Todos:{this.state.todos.length}</span>

            </>
        )
    }

}