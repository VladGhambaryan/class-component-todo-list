import './App.css';
import React from "react";
import {TodoInput} from "./todoList/TodoInput";
export class App extends React.Component {
constructor() {
    super();

}


render() {


    return(

        <div className ='App'>
            <div className='container'>
            <TodoInput/>

            </div>
        </div>
    )
}

}


