import Jogo from './Jogo.js';
import Letras from './Letras.js';
import palavras from './palavras.js';
import { useState } from 'react';


function App() {
    
    const [palavraDaVez, setPalavraDaVez] = useState("");
    const [palavraExibida, setPalavraExibida] = useState();
    const [arrayLetrasEscolhidas, setArrayLetrasEscolhidas] = useState([]);

    function atualizarPalavraExibida() {
        let arrayPalavraDaVez = palavraDaVez.split("");
        console.log(arrayPalavraDaVez)
        let arrayPalavraExibida = arrayPalavraDaVez.map((letra)=>{
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
        let arrayPalavraExibida = arrayPalavraDaVez.map((letra) => {
            if (arrayLetrasEscolhidas.includes(letra)) {
                return letra;
            } else {
                return "_";
            }
        });
        
        setPalavraExibida(arrayPalavraExibida.join(" "));
    }


    function selecionaLetra(letra) {

        if (!arrayLetrasEscolhidas.includes(letra)) {
            setArrayLetrasEscolhidas([...arrayLetrasEscolhidas,letra])
            
        }
    }
    
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
                selecionaLetra={selecionaLetra}
            />
        </div>
    );
}

export default App;