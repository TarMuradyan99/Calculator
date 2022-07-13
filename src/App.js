import React,{Component} from "react";
import classes from "./Ui/Global.module.css"
import Wrapper from "./Ui/Wrapper/Wrapper";
import Card from "./Ui/Card/Card"
import List from "./Components/List/List";
import Listitem from "./Components/Listitem/Listitem";
import Button from "./Components/Button/Button";

class App extends Component{
  constructor(props){
    super(props)
    this.state={
     number: ''
      
    }

   
  }
resultElement = (el)=>{
  console.log(el.target.innerHTML);
    this.setState({
      number: this.state.number + el.target.innerHTML
    })
}

resultInput = () => {
  this.setState({
    number: eval(this.state.number)
  })
}
resultDelete = ( )=>{
  this.setState(
    {number: ``}
  )
}
resultClear = (el)=>{
  this.setState({
    number: this.state.number.substring(0,this.state.number.length-1)
    
  })
}

  
  render(){
    return(
      <Wrapper>
        <Card className={classes.boxcalc}>
          <List className={classes.resultbox}>
            <Listitem  className={classes.result}>{this.state.number}</Listitem>
          </List>
          <Card className={classes.mathworks}>
            <Card className={classes.numberboxes}>
            <Button onClick={this.resultElement} className={classes.number}>1</Button>
            <Button onClick={this.resultElement} className={classes.number}>2</Button>
            <Button onClick={this.resultElement} className={classes.number}>3</Button>
            <Button onClick={this.resultElement} className={classes.number}>4</Button>
            <Button onClick={this.resultElement} className={classes.number}>5</Button>
            <Button onClick={this.resultElement} className={classes.number}>6</Button>
            <Button onClick={this.resultElement} className={classes.number}>7</Button>
            <Button onClick={this.resultElement} className={classes.number}>8</Button>
            <Button onClick={this.resultElement} className={classes.number}>9</Button>
            <Button onClick={this.resultElement} className={classes.number}>0</Button>
            <Button onClick={this.resultElement} className={classes.number}>00</Button>
            <Button onClick={this.resultElement} className={classes.number}>.</Button>
            </Card>
            <Card className = {classes.countmembers}>
            <Button onClick={this.resultElement} className={classes.countplus}>+</Button>
            <Button onClick={this.resultElement} className={classes.countminus}>-</Button>
            <Button onClick={this.resultElement} className={classes.countmulty}>*</Button>
            <Button onClick={this.resultElement} className={classes.countdivide}>/</Button>
            <Button onClick={this.resultInput} className={classes.countdivide}>=</Button>
            <Button onClick={this.resultDelete} className={classes.countdivide}>CC</Button>
            <Button onClick={this.resultClear} className={classes.countdivide}>DEL</Button>
            </Card>
          </Card>
        </Card>
      </Wrapper>
    )
  }
}
export default App