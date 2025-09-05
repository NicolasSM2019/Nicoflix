import "./PageGerencia_perfil.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CgMathPlus } from "react-icons/cg";
import { Link } from "react-router-dom";

import Fotoperfil1 from '../assets/Perfil.jpg';
import Fotoperfil2 from '../assets/perfil_et.jpeg';
import Fotoperfil3 from '../assets/perfil_robo.jpeg';
import Fotoperfil4 from '../assets/perfil_serio.png';

function PageGerencia_perfil() {
    return (
        <div className="pagina-gerenciar-perfis">

            <div className="perfis-container">

                <Link className='card-perfil' to=''>
                    <img className='imagem-perfil' src={Fotoperfil1} alt="Perfil Nicolas" />
                    <span className="nome-perfil">Nicolas</span>
                </Link>

                <Link className='card-perfil' to=''>
                    <img className='imagem-perfil' src={Fotoperfil2} alt="Perfil Infantil" />
                    <span className="nome-perfil">Infantil</span>
                </Link>

                <Link className='card-perfil' to=''>
                    <img className='imagem-perfil' src={Fotoperfil3} alt="Perfil Toto" />
                    <span className="nome-perfil">toto</span>
                </Link>

                <Link className='card-perfil' to=''>
                    <img className='imagem-perfil' src={Fotoperfil4} alt="Perfil William" />
                    <span className="nome-perfil">William</span>
                </Link>

                <Link className='card-perfil card-adicionar' to=''>
                    <div className="icone-adicionar-container">
                        <CgMathPlus />
                    </div>
                    <span className="nome-perfil">Adicionar Perfil</span>
                </Link>
            </div>

            <div className="botao-voltar-container">
                <Link className='botao-voltar' to='/'>
                    <FaArrowLeftLong className="seta-voltar" />
                    <span>Voltar Para o Início</span>
                </Link>
            </div>
        </div>
    );
}

export default PageGerencia_perfil;