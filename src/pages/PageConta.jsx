import ContaPagamento from "../components/ContaPagamento";
import MenuLateral from "../components/MenuLateral"
import TopBarPagamento from "../components/TopBarPagamento"
import './PageConta.css'
function PageConta() {

    return (
        <div>
            <div className="home">
                <TopBarPagamento />
                <MenuLateral />
                <ContaPagamento />
            </div>
        </div>
    );
}
export default PageConta;