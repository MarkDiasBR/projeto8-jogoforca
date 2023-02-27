import alfabeto from './alfabeto.js';

export default function Letras({palavraDaVez, setPalavraDaVez, 
                                palavraExibida, setPalavraExibida,
                                arrayLetrasEscolhidas, setArrayLetrasEscolhidas,
                                escolherPalavra, atualizarPalavraExibida, 
                                contador, setContador,
                                disabledBotoes, selecionaLetra}) {

    return (
        <div className="letras">
            <div>
                <button onClick={()=>(console.log(arrayLetrasEscolhidas))}>arr
                LetEsc</button>
                <button onClick={()=>(console.log(palavraDaVez))}>pal
                DaVez</button>
                <button onClick={()=>(console.log(palavraExibida))}>pal
                Exib</button>
                <button onClick={()=>console.log(disabledBotoes)}>{disabledBotoes}</button>
                {
                alfabeto
                    .filter((letra,indice,alfabetoArray) => indice < 13)
                    .map(letra=>(
                    <button
                        data-test="letter"
                        onClick={()=>selecionaLetra(letra)}
                        className={`${arrayLetrasEscolhidas.includes(letra) && "selecionado"}`}
                        disabled={arrayLetrasEscolhidas.includes(letra) || disabledBotoes}
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
                        data-test="letter"
                        onClick={()=>selecionaLetra(letra)}
                        className={`${arrayLetrasEscolhidas.includes(letra) && "selecionado"}`}
                        disabled={arrayLetrasEscolhidas.includes(letra) || disabledBotoes}                    
                    >
                        {letra.toUpperCase()}
                    </button>))
                }
            </div>
        </div>
    );
}