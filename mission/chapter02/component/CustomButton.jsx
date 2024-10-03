import './CustomButton.css';

const CustomButton = (props) =>{
    const { text, func, id, editText} = props;
    if( id === undefined){
            return(
                <button className='inputBtn' onClick={()=>{func()}}>{text}</button>    
            )
    }
    else if( editText === undefined){
        return(
            <button className='cusBtn' onClick={()=>{func(id)}}>{text}</button>
        )
    }
    else{
        return(
            <button className='cusBtn' onClick={()=>{func(id,editText)}}>{text}</button>
        )
    }
}

export default CustomButton;