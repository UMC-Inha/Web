import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import * as S from './LoginPage.style';

const LoginPage = () => {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        email: yup.string().email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!').required('이메일을 입력해주세요.'),
        password: yup.string().required('비밀번호를 입력해주세요.').min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.'),
    });

    const { register, handleSubmit, trigger, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur', // 블러(포커스 아웃) 시에만 검증
        reValidateMode: 'onChange', // 조건 충족 시 실시간 검증
    });

    const onSubmit = async (data) => {
        try {
            
            const response = await axios.post('http://localhost:3000/auth/login', data);
            console.log('로그인 성공', response.data);

            const { accessToken, refreshToken } = response.data;

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            const userInfoResponse = await axios.get('http://localhost:3000/user/me',{
                headers: {Authorization: `Bearer ${accessToken}`}
            });

            const email = userInfoResponse.data.email;
            const nickname = email.split('@')[0];
            localStorage.setItem('nickname', nickname);

            navigate(`/`);
        } catch(error) {
            console.log('로그인 실패', error.response?.data || error.message);
        }
    };

    return (
        <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
            <S.Input 
                type="email" 
                {...register("email", {
                    onBlur: () => trigger('email') // 이메일 입력란을 벗어날 때 검증
                })} 
                placeholder="이메일을 입력해주세요!" 
            />
            <S.ErrorText>{errors.email?.message}</S.ErrorText>

            <S.Input 
                type="password" 
                {...register("password", {
                    onBlur: () => trigger('password') // 비밀번호 입력란을 벗어날 때 검증
                })} 
                placeholder="비밀번호를 입력해주세요!" 
            />
            <S.ErrorText>{errors.password?.message}</S.ErrorText>

            <S.SubmitButton type="submit" disabled={!isValid}>로그인</S.SubmitButton>
        </S.LoginForm>
    );
};

export default LoginPage;
