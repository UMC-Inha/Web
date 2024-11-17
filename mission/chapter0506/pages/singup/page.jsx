import { useRegisterForm } from "../../hooks/useRegisterForm"
import ReactHookForm from "../../components/reactHookForm/loginForm"
import {
    Container
} from "./styled/styled"    
import InputComponent from "../../components/input/Input";

export default function Login() {
    const { handleSubmit, errors, onSubmit, control } = useRegisterForm();
    const emailError = errors.email;
    const passwordError = errors.password;
    const passwordCheckError = errors.passwordCheck;
    
    const isDisabled = errors.email || errors.password || errors.passwordCheck;
    return (
        <Container>
            <h2>회원가입</h2>
            <ReactHookForm handleSubmit={handleSubmit(onSubmit)}>
                <InputComponent 
                    control={control} 
                    name="email" 
                    placeholder="이메일을 입력해주세요" 
                    type="email" 
                />
                {emailError &&<p style={{color: 'red'}}>{emailError?.message}</p>}

                <InputComponent 
                    control={control} 
                    name="password" 
                    placeholder="비밀번호를 입력해주세요" 
                    type="password" 
                />
                {passwordError &&<p style={{color: 'red'}}>{passwordError?.message}</p>}

                <InputComponent 
                    control={control} 
                    name="passwordCheck" 
                    placeholder="비밀번호를 다시 입력해주세요" 
                    type="password"
                />
                {passwordCheckError &&<p style={{color: 'red'}}>{passwordCheckError?.message}</p>}
                
                <button disabled={isDisabled} type="submit">로그인</button>
            </ReactHookForm>
        </Container>
    )
}