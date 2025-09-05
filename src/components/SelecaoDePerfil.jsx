import './SelecaoDePerfil.css';
import BotaoVazado from './BotaoVazado.jsx';
import Card from './Card.jsx';




function SelecaoDePerfil() {
  return (
    <div className='selecao-perfil'>
      <span className='titulo-selecao'>Quem está assistindo?</span>
      <div className='container-cards'>
        <Card />

      </div>
      <BotaoVazado />
    </div>
  );
}

export default SelecaoDePerfil;