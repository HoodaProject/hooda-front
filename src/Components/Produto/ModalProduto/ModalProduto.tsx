import FormProduto from '../FormProduto/FormProduto';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalProduto.css'

function ModalProduto() {
    return (
        <>
          <Popup 
          trigger={<button className='border rounded px-4 hover:bg-white hover:text-amber-400'>Novo produto</button>} modal>
            <div>
              <FormProduto />
            </div>
          </Popup>
        </>
      );
    }

export default ModalProduto