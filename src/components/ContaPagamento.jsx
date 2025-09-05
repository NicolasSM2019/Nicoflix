import './ContaPagamento.css'
import { SiMastercard } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

function ContaPagamento() {
  return (
    <div className='pai'>
      <div className='move'>
        <span className='conta'>Conta</span>
        <span className='detalhe'>Detalhe da Assinatura </span>
      </div>
      <div className='pai2'>
        <div className='assinatura'>
          <span>Assinante desde julho de 2015</span>
        </div>
        <div className='dados'>
          <span className='plano'>Plano  Padrão</span>
          <span className='data'>Proximo pagamento : 31 de janeiro de 2025</span>
        </div>
        <div className='cartao'>
          <SiMastercard className='master' /> <span className='ponto'>••••</span> <span className='ponto' >••••</span> <span className='ponto'>••••</span> <span className='ponto'>2777</span>
        </div>
        <Link className='fim'>
          <span>Gerenciar assinatura</span> <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
}
export default ContaPagamento;
