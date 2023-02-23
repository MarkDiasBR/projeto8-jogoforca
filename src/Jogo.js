import palavras from './palavras.js';

export default function Jogo() {
    return (
        <div className="jogo">
            <img src="./assets/img/forca0.png" alt="" srcset="" />
            <div>
                <button>Escolher palavra</button>
                <p>{palavras[0]}</p>
            </div>
        </div>
    );
}