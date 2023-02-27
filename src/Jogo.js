import { useState } from 'react';

export default function Jogo({palavraDaVez, setPalavraDaVez, 
                              palavraExibida, setPalavraExibida,
                              arrayLetrasEscolhidas, setArrayLetrasEscolhidas,
                              escolherPalavra, atualizarPalavraExibida, 
                              contador, setContador,
                              selecionaLetra}) {



    return (
        <div className="jogo">
            <img src={`./assets/img/forca${contador}.png`} />
            <div>
                <button onClick={()=>escolherPalavra()}>Escolher palavra</button>
                <p>{palavraExibida}</p>
            </div>
        </div>
    );
}