import React, { Component } from "react";

import Number from "./Number.jsx";
import Display from "./Display.jsx";
import Operation from "./Operation.jsx";
import  "../styles/style.css";

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            op1: "0",
            op2: "0",
            currentOperation: null,
            display: "",
        }
        this.createButtons = this.createButtons.bind(this);
    }

    createButtons(){
        const buttons = []
        
        const operations = ["C", "+/-", "%", "÷", "x", "-", "+", "=", "."]
        for (let i = 0; i < 9; i++) {
            buttons.push(<Operation value={operations[i]} number={i} key={i} handleClick={this.onOperationClick.bind(this, operations[i])}/>)
        }
        const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
        for (let index = 0; index < 10; index++) {
            buttons.push(<Number key={index+9} orderNum={index} nvalue={numbers[index]} handleClick={this.onNumberClick.bind(this, numbers[index])}/>)    
        }
        return buttons
    }

    onNumberClick(value){
        if(this.state.display.length < 9 && this.state.currentOperation === null){
            this.setState(state => ({
                display: state.display.concat(value),
                op1: state.op1.concat(value)
            }))
        }
        else if (this.state.currentOperation !== null && this.state.op2 === "0"){
            this.setState(state => ({
                display: "".concat(value),
                op2: "".concat(value)
            }))
        }else if (this.state.display.length < 9 && this.state.currentOperation !== null && this.state.op2 !== "0"){
            this.setState(state => ({
                display: state.display.concat(value),
                op2: state.op2.concat(value)
            }))
        }
    }
    onOperationClick(type){
        
        if(type === "C"){
            this.setState( state => ({
                display: "",
                op1: "0",
                op2: "0",
                currentOperation: null
            }))
        }
        else if(type === "+/-" && this.state.display.length < 9){
            let number = parseFloat(this.state.display) * -1
            if (this.state.op1 !== "0" && this.state.op2 === "0"){
                this.setState( state => ({
                    display: number,
                    op1: number.toString()
                }))
                //console.log('1, co '+ this.state.currentOperation + ' n1 '+ this.state.op1 + ' n2 ' + this.state.op2)
            }
            else if (this.state.op1 !== "0" && this.state.op2 !== "0"){
                this.setState( state => ({
                    display: number,
                    op2: number.toString()
                }))
                //console.log('2, co '+ this.state.currentOperation + ' n1 '+ this.state.op1 + ' n2 ' + this.state.op2)
            }
        }
        else if(type === "%"){
            let number = parseFloat(this.state.display) * 0.01
            if (this.state.op1 !== "0" && this.state.op2 === "0"){
                this.setState( state => ({
                    display: number,
                    op1: number.toString()
                }))
            }
            else if (this.state.op1 !== "0" && this.state.op2 !== "0"){
                this.setState( state => ({
                    display: number,
                    op2: number.toString()
                }))
            }
        }
        else if(type === "." && this.state.display.length < 9){
            if (this.state.op1 !== "0" && this.state.op2 === "0"){
                this.setState( state => ({
                    display: state.display.concat("."),
                    op1: state.op1.concat(".")
                }))
            }
            else if (this.state.op1 !== "0" && this.state.op2 !== "0"){
                this.setState( state => ({
                    display: state.display.concat("."),
                    op2: state.op2.concat(".")
                }))
            }
        }
        else{
            if (this.state.currentOperation !== null && this.state.op2 !== "0") {
                this.calculate()
            }
            this.setState(state=> ({
                currentOperation: type,
            }))
        }
    }
    calculate(){
        let result = 0 
        const n1 = parseFloat(this.state.op1, 10)
        const n2 = parseFloat(this.state.op2, 10)
        const op = this.state.currentOperation
        //console.log("n1 " + n1 + " n2 " + n2 + " op " + op)
        if(op === "+"){
            result = n1+n2
        }
        else if(op === "x"){
            result = n1*n2
        }
        else if(op === "÷"){
            result = n1/n2
            if(result.toString().length >9){
                result = (result.toString()).substring(0,9)
                result = parseFloat(result)
            }
        }
        else if(op === "-"){
            result = n1-n2
        }
        if(result <= 999999999){
            this.setState( state => ({
                display: result.toString(),
                op1: result.toString(),
                op2: "0"
            }))
        }
        if (result > 999999999 || result < 0){
            this.setState( state => ({
                display: "ERROR",
                op1: "0",
                op2: "0",
                currentOperation: null
            }))
        }

    }
    render(){
        return (
            <div id="calc">
                <Display text={this.state.display}/>
                {this.createButtons()}
            </div>
        );
    }
}

export default Calculator;
