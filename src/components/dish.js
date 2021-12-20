import React, { Component,Fragment }  from "react";
import Button from '@mui/material/Button';


export class Flag extends Component{
    render(){
        return( 
            <div>
                <h1>Banderas</h1>
            </div>
        )
    }
}

export class Ingredient extends Component{
    render(){
        return(
        <Fragment>
            <h4>Ingredientes</h4>
            <h4>Ingredientes2</h4>
        </Fragment>
        )
    }
}

class Dish
 extends Component{
    
    contarPlatillos(platillos){
        return platillos.length
    }

   
    render(){
        return (
            <div className="Dish">
                numero de platillos:
                <h1>{this.contarPlatillos(this.props.platillos)} </h1>
                <h1> Platillos de pescado</h1>
                <h2>{this.props.platillo}</h2>
                <h3>{this.props.numero}</h3>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Ingredient></Ingredient>
            </div>
        )
    }
}
export default Dish
;