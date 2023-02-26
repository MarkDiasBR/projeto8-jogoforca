import palavras from './palavras.js';
import { useState } from 'react';





export default function Jogo() {

    const [palavraDaVez, setPalavraDaVez] = useState("");
    const [palavraExibida, setPalavraExibida] = useState("");
    const [arrayLetrasEscolhidas, setLetrasEscolhidas] = useState([""]);

    function escolherPalavra() {
        let indice = Math.floor( Math.random() * palavras.length );
        let novaPalavra = palavras[indice];

        setPalavraDaVez(novaPalavra);
        
        atualizarPalavraExibida();
    }

    function atualizarPalavraExibida() {
        let arrayPalavraDaVez = palavraDaVez.split("");
        let arrayPalavraExibida = arrayPalavraDaVez.map((letra)=>{
            if (arrayLetrasEscolhidas.includes(letra)) {
                return letra;
            } else {
                return "_";
            }
        });

        setPalavraExibida(arrayPalavraExibida.join(" "));
    }

    function selecionaLetra() {
        
    }

    return (
        <div className="jogo">
            <img src="./assets/img/forca0.png" alt="" srcset="" />
            <div>
                <button onClick={()=>escolherPalavra()}>Escolher palavra</button>
                <p>{palavraExibida}</p>
            </div>
        </div>
    );
}