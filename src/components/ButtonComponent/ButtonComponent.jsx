
import Button from 'react-bootstrap/Button';

const ButtonComponent = ({label, bsButtonType, onClickFunction}) =>{

    return(
        <Button variant={bsButtonType} onClick={onClickFunction}>Click me {label}</Button>
    )
};

export default ButtonComponent;
