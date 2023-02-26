import alfabeto from './alfabeto.js';

export default function Letras() {
    return (
        <div className="letras">
            <div>
                {
                alfabeto
                    .filter((letra,indice,alfabetoArray) => indice < 13)
                    .map(letra=><button>{letra.toUpperCase()}</button>)
                }
            </div>
            <div>
                {
                alfabeto
                    .filter((letra,indice,alfabetoArray) => indice >= 13)
                    .map(letra=><button>{letra.toUpperCase()}</button>)
                }
            </div>
        </div>
    );
}