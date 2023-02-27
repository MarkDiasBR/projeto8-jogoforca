import { useState } from 'react';

export default function Jogo({palavraDaVez, setPalavraDaVez, 
                              palavraExibida, setPalavraExibida,
                              arrayLetrasEscolhidas, setArrayLetrasEscolhidas,
                              escolherPalavra, atualizarPalavraExibida, 
                              contador, setContador,
                              classePalavra, setClassePalavra,
                              selecionaLetra}) {



    return (
        <div className="jogo">
            <img data-test="game-image" src={`./assets/img/forca${contador}.png`} />
            <div>
                <button data-test="choose-word" onClick={()=>escolherPalavra()}>Escolher palavra</button>
                <p data-test="word" className={classePalavra}>{palavraExibida}</p>
            </div>
        </div>
    );
}