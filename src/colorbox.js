import React,{Component} from "react";
import data from "./colorsarray";
import {chooseColor, filterColor} from "./helpers";

class ColorComponent extends Component{
    constructor(props) {
        super(props);
        this.state= {
            styleobject: {
                display: "inline-block",
                height: "200px",
                width: "200px",
                background: chooseColor(data)
            }
        }
    }
    ChangeColor=()=> {
        this.setState((prevstate) => {
            console.log(this.state.styleobject)
                return {
                    styleobject: {
                        display: "inline-block",
                        height: "200px",
                        width: "200px",
                        background:chooseColor(filterColor(data,prevstate.styleobject.backgound))
                    }
                }
            }
        )
    }

    HandleClick=()=>{
        this.ChangeColor();
    }

    render() {
        return(

        <div style={this.state.styleobject} onClick={this.HandleClick}> </div>
        )
    }
}

export default ColorComponent;
