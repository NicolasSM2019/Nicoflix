import './TituloPrincipal.css'

import { SiNetflix } from "react-icons/si";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { PiSpeakerHighLight } from "react-icons/pi";
import { TbRating12Plus } from "react-icons/tb";
import { Link } from 'react-router-dom';


function TituloPrincipal() {
  return (
    <div className='titulo-principal'>
      <div className='n'>
        <SiNetflix />
        <span className='pequeno'>SÉRIE</span>
      </div>

      <div className='titulo'>
        <span className='linha1'>HALO</span>
        <span className='linha2'>  </span>
      </div>

      <div className='resto'>
        <Link className='play' to='/assistir_tela_inicio'>
          <FaPlay className='emoji' />
          <span> Assistir </span>
        </Link>

        <Link className='informacao' to='/info_halo'>
          <IoMdInformationCircleOutline className='emoji' />
          <span>Mais informaçoẽs</span>
        </Link>

        <div className='som'>
          <PiSpeakerHighLight />
        </div>

        <div className='idade'>
          <TbRating12Plus />
        </div>
      </div>
    </div>
  );
}
export default TituloPrincipal;
