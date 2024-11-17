import { Input } from "./styled/styled";
import { useController } from "react-hook-form";

export default function InputComponent({
    control,
    name,
    ...props
}){
    const {
        field
    } = useController({
        name,
        control
    });

    return(
        <>
            <Input {...field} {...props}/>
        </>
    )
}