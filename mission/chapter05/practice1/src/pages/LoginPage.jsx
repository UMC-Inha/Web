import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './LoginPage.style';

const LoginPage = () => {
    const schema = yup.object().shape({
        email: yup.string().email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!').required('이메일을 입력해주세요.'),
        password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required('비밀번호를 입력해주세요.'),
    });

    const { register, handleSubmit, trigger, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur', // 블러(포커스 아웃) 시에만 검증
        reValidateMode: 'onChange', // 조건 충족 시 실시간 검증
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출');
        console.log(data);
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
