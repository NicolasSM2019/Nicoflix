import './Card.css'
import Fotoperfil1 from '../assets/Perfil.jpg'
import Fotoperfil2 from '../assets/perfil_et.jpeg'
import Fotoperfil3 from '../assets/perfil_robo.jpeg'
import Fotoperfil4 from '../assets/perfil_serio.png'
import { CgMathPlus } from "react-icons/cg";

import { Link } from 'react-router-dom';

function Card() {
  return (
    <div className='card_Principal_pai'>
      <Link className='card_principal' to='/home'>
        <img className='foto-perfil-card' src={Fotoperfil1} />
        <span className='nome-usuario'>Nicolas</span>
      </Link>

      <Link className='card_principal' to='/home'>
        <img className='foto-perfil-card' src={Fotoperfil2} />
        <span className='nome-usuario'>Infantil</span>
      </Link>

      <Link className='card_principal' to='/home'>
        <img className='foto-perfil-card' src={Fotoperfil3} />
        <span className='nome-usuario'>toto</span>
      </Link>

      <Link className='card_principal' to='/home'>
        <img src={Fotoperfil4} className='foto-perfil-card' />
        <span className='nome-usuario'>William</span>
      </Link>


      <div className='card_principal  '>
        <Link className='adicionar_perfil_card_principal' to=''>
          <CgMathPlus />
        </Link>
        <span className='nome-usuario'> Adicionar Perfil</span>
      </div>

    </div>
  );
}

export default Card;