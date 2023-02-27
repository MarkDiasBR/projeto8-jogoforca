import alfabeto from './alfabeto.js';

export default function Letras({palavraDaVez, setPalavraDaVez, 
                                palavraExibida, setPalavraExibida,
                                arrayLetrasEscolhidas, setArrayLetrasEscolhidas,
                                escolherPalavra, atualizarPalavraExibida, 
                                contador, setContador,
                                selecionaLetra}) {

    return (
        <div className="letras">
            <div>
                <button onClick={()=>(console.log(arrayLetrasEscolhidas))}>arr
                LetEsc</button>
                <button onClick={()=>(console.log(palavraDaVez))}>pal
                DaVez</button>
                <button onClick={()=>(console.log(palavraExibida))}>pal
                Exib</button>
                <button onClick={()=>(console.log(contador))}>{contador}</button>
                {
                alfabeto
                    .filter((letra,indice,alfabetoArray) => indice < 13)
                    .map(letra=>(
                    <button
                        onClick={()=>selecionaLetra(letra)}
                        className={`${arrayLetrasEscolhidas.includes(letra) && "selecionado"}`}
                        disabled={arrayLetrasEscolhidas.includes(letra)}
                    >
                        {letra.toUpperCase()}
                    </button>))
                }
            </div>
            <div>
                {
                alfabeto
                    .filter((letra,indice,alfabetoArray) => indice >= 13)
                    .map(letra=>(
                    <button
                        onClick={()=>selecionaLetra(letra)}
                        className={`${arrayLetrasEscolhidas.includes(letra) && "selecionado"}`}
                        disabled={arrayLetrasEscolhidas.includes(letra)}                    
                    >
                        {letra.toUpperCase()}
                    </button>))
                }
            </div>
        </div>
    );
}