
import React, { Component } from 'react'



export default class Conversor extends Component {

//onde vai armazenar o valor
    constructor(props){
        super(props);

        this.state = {
            moedaA_valor:"",
            moedaB_valor:0, 
        }

        this.converter = this.converter.bind(this); 
    }

//metodo que converte valor da moeda A em moeda B 

    converter(){
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=5b0ec84ece7daa60ab3c`
        
        fetch(url)
        .then(res=>{
            return res.json() 
        })
        .then(json=> {
            let cotacao = json[de_para];
            let moedaB_valor =( parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
            this.setState({ moedaB_valor })
        })
    }

//parte visual e com suas funcionalidades 
    render() {
        return (
            <div className="App">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )
    }
}