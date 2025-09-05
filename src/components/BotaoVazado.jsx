import './BotaoVazado.css'
import { Link } from 'react-router-dom';
function BotaoVazado() {
  return (
    <Link className='botao-vazado' to='/gerenciarperfil'>
      <span >
        Gerenciar perfis
      </span>
    </Link>

  );
}

export default BotaoVazado;