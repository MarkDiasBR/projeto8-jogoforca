import { useState } from 'react';

export default function Jogo({palavraDaVez, setPalavraDaVez, 
                              palavraExibida, setPalavraExibida,
                              arrayLetrasEscolhidas, setArrayLetrasEscolhidas,
                              escolherPalavra, atualizarPalavraExibida, selecionaLetra}) {



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