import Jogo from './Jogo.js';
import Letras from './Letras.js';
import palavras from './palavras.js';
import { useState } from 'react';


export default function App() {
    
    const [palavraDaVez, setPalavraDaVez] = useState("");
    const [palavraExibida, setPalavraExibida] = useState();
    const [arrayLetrasEscolhidas, setArrayLetrasEscolhidas] = useState([]);
    const [contador, setContador] = useState(0);
    const [classePalavra, setClassePalavra] = useState("");

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
        setContador(0);

        const arrayVazio = [];
        setArrayLetrasEscolhidas(arrayVazio); 
        
        let indice = Math.floor(Math.random() * palavras.length);
        let novaPalavra = palavras[indice];
        setPalavraDaVez(novaPalavra);

        setClassePalavra("");

        let arrayPalavraDaVez = novaPalavra.split("");
        let arrayPalavraExibida = arrayPalavraDaVez.map(() => "_" );
        
        setPalavraExibida(arrayPalavraExibida.join(" "));
    }

    function selecionaLetra(letra){
        const letrasEscolhidas = [...arrayLetrasEscolhidas, letra];

        const aumentarContador = !palavraDaVez.includes(letra);

        setArrayLetrasEscolhidas(letrasEscolhidas);
        let arrayPalavraDaVez = palavraDaVez.split("");
        let arrayPalavraExibida = arrayPalavraDaVez.map((char) => {
            if(letrasEscolhidas.includes(char)){
                return char;
            }
            return "_"
        })

        let novaPalavraExibida = arrayPalavraExibida.join(" ");
        setPalavraExibida(novaPalavraExibida);

        let contadorAcrescentado = contador;

        if (aumentarContador) {
            contadorAcrescentado = contador + 1;
            setContador(contadorAcrescentado);
        }
            
        if (!novaPalavraExibida.includes("_")) {
            setClassePalavra("correto");
        } 

        if (contadorAcrescentado === 6) {
            if (novaPalavraExibida.includes("_")) {
                arrayPalavraExibida = arrayPalavraDaVez.map((char) => {
                    return char;
                })

                novaPalavraExibida = arrayPalavraExibida.join("");

                setPalavraExibida(novaPalavraExibida);

                setClassePalavra("errado")
            }
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
                classePalavra={classePalavra}
                setClassePalavra={setClassePalavra}
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