import { useLoginForm } from "../../hooks/useLoginForm"
import ReactHookForm from "../../components/reactHookForm/loginForm"
import {
    Container
} from "./styled/styled"
import InputComponent from "../../components/input/Input";

export default function Login() {
    const { handleSubmit, errors, onSubmit, control } = useLoginForm();
    const emailError = errors.email;
    const passwordError = errors.password;

    return (
        <Container>
            <h2>로그인</h2>
            <ReactHookForm handleSubmit={handleSubmit(onSubmit)}>
                <InputComponent name="email" control={control} placeholder="이메일을 입력해주세요" type="email" />
                {emailError &&<p style={{color: 'red'}}>{emailError?.message}</p>}

                <InputComponent name="password" control={control} placeholder="비밀번호를 입력해주세요" type="password" />
               {passwordError &&<p style={{color: 'red'}}>{passwordError?.message}</p>}

                <button disabled={passwordError||emailError} type="submit">로그인</button>
            </ReactHookForm>
        </Container>
    )
}