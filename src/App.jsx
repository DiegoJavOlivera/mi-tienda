
import { useState } from 'react';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count + 1)
    }

    const decrementar = () =>{
        setCount(count - 1)
    }
    console.log(count)
    
    return (
        <div>
            <NavBarComponent/>
            {/* <ButtonComponent label="Boton principal" bsButtonType="primary"/>
            <br />
            <ButtonComponent label="Boton secundario" bsButtonType="secondary"/>
            <br />
            <ButtonComponent label="Boton terciario" bsButtonType="outline-info"/> */}
            <div>
                <h1>Contador</h1>
                <h2>{count}</h2>
                <ButtonComponent label="Incrementar" bsButtonType="primary" onClickFunction={incrementar}/>
                <ButtonComponent label="Decrementar" bsButtonType="danger" onClickFunction={decrementar}/>
            </div>
        </div>
    )
}

export default App
