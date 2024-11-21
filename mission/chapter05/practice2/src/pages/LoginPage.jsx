import * as S from './LoginPage.style';
import useForm from '../hooks/useForm';
import {validateLogin} from '../../utils/validate';

const LoginPage = () => {
    const login = useForm({
        initialValue: { email: '', password: '' },
        validate: validateLogin
    });

    const onSubmit = (event) => {
        event.preventDefault();
        if (!login.errors.email && !login.errors.password) {
            console.log('폼 데이터 제출');
            console.log(login.values);
        }
    };

    return (
        <S.LoginForm onSubmit={onSubmit}>
            <S.Input 
                error={login.touched.email && login.errors.email}
                type="email" 
                placeholder="이메일을 입력해주세요!"
                {...login.getTextInputProps('email')} // value, onChange, onBlur를 한번에 전달하는 방법
            />
            {login.touched.email && login.errors.email && <S.ErrorText>{login.errors.email}</S.ErrorText>}

            <S.Input 
                error={login.touched.password && login.errors.password}
                type="password" 
                placeholder="비밀번호를 입력해주세요!"
                {...login.getTextInputProps('password')}
            />
            {login.touched.password && login.errors.password && <S.ErrorText>{login.errors.password}</S.ErrorText>}

            <S.SubmitButton type="submit" disabled={!!login.errors.email || !!login.errors.password}>로그인</S.SubmitButton>
        </S.LoginForm>
    );
};

export default LoginPage;
