import Jogo from './Jogo.js';
import Letras from './Letras.js';
import palavras from './palavras.js';
import { useState } from 'react';


export default function App() {
    
    const [palavraDaVez, setPalavraDaVez] = useState("");
    const [palavraExibida, setPalavraExibida] = useState();
    const [arrayLetrasEscolhidas, setArrayLetrasEscolhidas] = useState([]);
    const [contador, setContador] = useState(0);

    function atualizarPalavraExibida() {

        let novaPalavra = palavraDaVez;

        let arrayPalavraDaVez = novaPalavra.split("");
        let arrayPalavraExibida = arrayPalavraDaVez.map((letra) => {
            if (arrayLetrasEscolhidas.includes(letra)) {
                return letra;
            } else {
                return "_";
            }
        });

        setPalavraExibida(arrayPalavraExibida.join(" "));
    }

    function escolherPalavra() {
        
        let indice = Math.floor(Math.random() * palavras.length);
        let novaPalavra = palavras[indice];
        setPalavraDaVez(novaPalavra);

        let arrayPalavraDaVez = novaPalavra.split("");
        let arrayPalavraExibida = arrayPalavraDaVez.map(() => "_" );
        
        setPalavraExibida(arrayPalavraExibida.join(" "));
    }

    function selecionaLetra(letra){
        const letrasEscolhidas = [...arrayLetrasEscolhidas, letra];
        setArrayLetrasEscolhidas(letrasEscolhidas);
        let arrayPalavraDaVez = palavraDaVez.split("");
        let arrayPalavraExibida = arrayPalavraDaVez.map((char) => {
            if(letrasEscolhidas.includes(char)){
                return char;
            }
            return "_"
        })

        setPalavraExibida(arrayPalavraExibida.join(" "));

        setContador(contador + 1);

        if (contador > 5) {
            alert("cabou")
        }
    }

/*
    function selecionaLetra(letra) {

        setArrayLetrasEscolhidas([...arrayLetrasEscolhidas, letra]);
        
        let arrayPalavraDaVez = palavraDaVez.split("");
        let arrayPalavraExibida = arrayPalavraDaVez.map((char) => {
            if (arrayLetrasEscolhidas.includes(char) ) {
                return char;
            } else {
                return "_";
            }
        });

        setPalavraExibida(arrayPalavraExibida.join(" "));

    }
    
    */
    return (
        <div className="App">
            <Jogo 
                palavraDaVez={palavraDaVez}
                setPalavraDaVez={setPalavraDaVez} 
                palavraExibida={palavraExibida}
                setPalavraExibida={setPalavraExibida}
                arrayLetrasEscolhidas={arrayLetrasEscolhidas}
                setArrayLetrasEscolhidas={setArrayLetrasEscolhidas}
                escolherPalavra={escolherPalavra}
                atualizarPalavraExibida={atualizarPalavraExibida}
                contador={contador}
                setContador={setContador}
                selecionaLetra={selecionaLetra}
            />
            <Letras
                palavraDaVez={palavraDaVez}
                setPalavraDaVez={setPalavraDaVez} 
                palavraExibida={palavraExibida}
                setPalavraExibida={setPalavraExibida}
                arrayLetrasEscolhidas={arrayLetrasEscolhidas}
                setArrayLetrasEscolhidas={setArrayLetrasEscolhidas}
                escolherPalavra={escolherPalavra}
                atualizarPalavraExibida={atualizarPalavraExibida}
                contador={contador}
                setContador={setContador}
                selecionaLetra={selecionaLetra}
            />
        </div>
    );
}