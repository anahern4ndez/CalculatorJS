import React, { Component } from 'react'

import Number from './Number.jsx'
import Display from './Display.jsx'
import Operation from './Operation.jsx'
import '../styles/style.css'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      op1: '',
      op2: '',
      currentOperation: null,
      display: '',
    }
    this.createButtons = this.createButtons.bind(this)
  }

  onNumberClick(value) {
    const { display, currentOperation, op2 } = this.state
    if (display.length < 9 && currentOperation === null) {
      this.setState((state) => ({
        display: state.display.concat(value),
        op1: state.op1.concat(value),
      }))
    } else if (currentOperation !== null && op2 === '') {
      this.setState(() => ({
        display: ''.concat(value),
        op2: ''.concat(value),
      }))
    } else if (display.length < 9 && currentOperation !== null && op2 !== '') {
      this.setState((state) => ({
        display: state.display.concat(value),
        op2: state.op2.concat(value),
      }))
    }
  }

  onOperationClick(type) {
    const {
      display, currentOperation, op1, op2,
    } = this.state
    if (type === 'C') {
      this.setState(() => ({
        display: '',
        op1: '',
        op2: '',
        currentOperation: null,
      }))
    } else if (type === '+/-') {
      if (display.length < 9) {
        const number = parseFloat(display) * -1
        if (op1 !== '' && op2 === '') {
          this.setState(() => ({
            display: number,
            op1: number.toString(),
          }))
        } else if (op1 !== '' && op2 !== '') {
          this.setState(() => ({
            display: number,
            op2: number.toString(),
          }))
        }
      }
    } else if (type === '%') {
      const number = parseFloat(display) * 0.01
      if (op1 !== '' && op2 === '') {
        this.setState(() => ({
          display: number,
          op1: number.toString(),
        }))
      } else if (op1 !== '' && op2 !== '') {
        this.setState(() => ({
          display: number,
          op2: number.toString(),
        }))
      }
    } else if (type === '.' && display.length <= 9) {
      if (op1 !== '' && op2 === '') {
        this.setState((state) => ({
          display: state.display.concat('.'),
          op1: state.op1.concat('.'),
        }))
      } else if (op1 !== '' && op2 !== '') {
        this.setState((state) => ({
          display: state.display.concat('.'),
          op2: state.op2.concat('.'),
        }))
      }
    } else if (type === '=') {
      if (currentOperation !== null && op2 !== '') {
        this.calculate()
      }
    } else {
      if (currentOperation !== null && op2 !== '') {
        this.calculate()
      }
      this.setState(() => ({
        currentOperation: type,
      }))
    }
  }

  createButtons() {
    const buttons = []

    const operations = ['C', '+/-', '%', '÷', 'x', '-', '+', '=', '.']
    for (let i = 0; i < 9; i++) {
      buttons.push(
        <Operation
          value={operations[i]}
          key={i}
          handleClick={this.onOperationClick.bind(this, operations[i])}
        />,
      )
    }
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
    for (let index = 0; index < 10; index++) {
      buttons.push(
        <Number
          key={index + 9}
          nvalue={numbers[index]}
          handleClick={this.onNumberClick.bind(this, numbers[index])}
        />,
      )
    }
    return buttons
  }

  calculate() {
    const { currentOperation, op1, op2 } = this.state
    let result = 0
    const n1 = parseFloat(op1, 10)
    const n2 = parseFloat(op2, 10)
    const op = currentOperation
    if (op === '+') {
      result = n1 + n2
    } else if (op === 'x') {
      result = n1 * n2
    } else if (op === '÷') {
      result = n1 / n2
    } else if (op === '-') {
      result = n1 - n2
    }
    // validacion en caso de decimales
    if (result.toString().length > 9) {
      result = (result.toString()).substring(0, 9)
      result = parseFloat(result)
    }
    if (result <= 999999999) {
      this.setState(() => ({
        display: result.toString(),
        op1: result.toString(),
        op2: '',
      }))
    }
    if (result > 999999999 || result < 0) {
      this.setState(() => ({
        display: 'ERROR',
        op1: '',
        op2: '',
        currentOperation: null,
      }))
    }
  }

  render() {
    const { display } = this.state
    return (
      <div id="calc">
        <Display text={display} />
        {this.createButtons()}
      </div>
    )
  }
}

export default Calculator
