import React, { Component } from "react";

import Number from "./Number.jsx";
import Display from "./Display.jsx";
import Operation from "./Operation.jsx";

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            storedDisplay: "0",
            currentOperation: null,
            display: "",
        }
        this.createButtons = this.createButtons.bind(this);
    }

    createButtons(){
        const buttons = []
        for (let index = 0; index < 10; index++) {
            buttons.push(<Number key={index} nvalue={index} handleClick={this.onNumberClick.bind(this, index)}/>)    
        }
        const operations = ["+", "-", "/", "*", "-", "%"]
        for (let i = 0; i < 5; i++) {
            buttons.push(<Operation value={operations[i]} key={i+10} handleClick={this.onOperationClick.bind(this, operations[i])}/>)
        }
        return buttons
    }

    onNumberClick(value){
        //const newText = display.concat(value)
        if(this.state.display.length < 9){
            this.setState(state => ({
                display: state.display.concat(value)
            }))
        }
    }
    onOperationClick(type){
        /*if(type === "+"){
            result = n1+n2
        }
        else if(type === "*"){
            result = n1*n2
        }
        else if(type === "/"){
            result = n1/n2
        }
        else if(type === "-"){
            result = n1-n2
        }*/
        if (this.state.currentOperation !== null && this.state.storedDisplay !== "0") {
            this.calculate()
        }
        this.setState(state=> ({
            storedDisplay: state.display,
            //display: "0",
            currentOperation: type
        }))
    }
    calculate(){
        let result = 0 
        const n1 = parseFloat(this.state.storedDisplay, 10)
        const n2 = parseFloat(this.state.display,10)
        const op = this.state.currentOperation
        if(op === "+"){
            result = n1+n2
        }
        else if(op === "*"){
            result = n1*n2
        }
        else if(op === "/"){
            result = n1/n2
        }
        else if(op === "-"){
            result = n1-n2
        }
        this.setState( state => ({
            storedResult: state.display,
            display: result.toString()
        }))

    }
    render(){
        /*let displayText = ""
        this.state.display.forEach(element => {
            displayText.concat(element)
        });
        console.log(displayText)*/
        return (
            <div id="calc">
                <Display text={this.state.display}/>
                {this.createButtons()}
            </div>
        );
    }
}

export default Calculator;
