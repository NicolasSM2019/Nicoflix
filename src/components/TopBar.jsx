import './TopBar.css';
import logo from '../assets/nicoflix_sem_fundo.png';
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <div className='top-bar'>

        <img className='logo' src={logo} />
  
        <Link className='parte12' to = '/home'>
        <span className='link' >Início</span>
          </Link>
        <Link className='parte12' to='/serie'>    
        <span className='link' >Séries</span>

        </Link>
          <Link className='parte12' to='/Filmes'>  
        <span className='link'>Filmes</span>

          </Link>
          <Link className='parte12' to = '/Bombando'>  
        <span className='link'>Bombando</span>

          </Link>
          <Link className='parte12' to='/MinhaLista'>  
        <span className='link'>Minha Lista</span>

          </Link>
          <Link className='parte12' to='/indiomas'>  
        <span className='link'>Navegar por idiomas</span>
          </Link>

        <Link className='parte22' to='/conta'>
        <FaRegUser className='image' />
        <span>Conta</span>
      </Link>
    </div>
  );
}

export default TopBar;
