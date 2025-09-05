import './TopBarPagamento.css'
import logo from '../assets/nicoflix_sem_fundo.png';
import iconeReact from '../assets/Perfil.jpg'
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';

function TopBarPagamento() {
  return (

    <div className='top_bar_pagar'>

      <img className='logo' src={logo} />

        <Link>  
        <img className='foto-perfil' src={iconeReact} />
        <IoMdArrowDropdown className='seta' />
        </Link>
      </div>

    
    
  );
}

export default TopBarPagamento;
