import './MenuLateral.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { GoCreditCard } from "react-icons/go";
import { BsShieldCheck } from "react-icons/bs";
import { LuMonitorSmartphone } from "react-icons/lu";
import { TbRobotFace } from "react-icons/tb";
import { Link } from 'react-router-dom';



function MenuLateral() {
  return (
    <div className='papai'>

      <Link className='d1 ' to='/home'>
        <FaArrowLeftLong />
        <span>Voltar á Netflix </span>
      </Link>
      <Link className='d2'>
        <GoHomeFill />
        <span> Virsão geral </span>
      </Link>

      <Link className='d3'>
        <GoCreditCard />
        <span>Assinatura</span>
      </Link>

      <Link className='d4'>
        <BsShieldCheck />
        <span>Segurança</span>
      </Link>

      <Link className='d5'>
        <LuMonitorSmartphone />
        <span>Aparelhos</span>
      </Link>

      <Link className='d6 ' to='/gerenciarperfil'>
        <TbRobotFace />
        <span>Perfis</span>
      </Link>

    </div>
  );

}

export default MenuLateral;