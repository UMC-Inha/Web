import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import * as S from './SignupPage.style';

const SignupPage = () => {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        email: yup
            .string()
            .email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!')
            .required('이메일을 반드시 입력해주세요.'),
        password: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .min(8, '비밀번호는 8자 이상이어야 합니다.')
            .max(16, '비밀번호는 16자 이하여야 합니다.'),
        passwordCheck: yup
            .string()
            .required('비밀번호 검증 또한 필수 입력요소입니다.')
            .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
    });

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        reValidateMode: 'onChange'
    });

    const onSubmit = async (data) => {
        try{
            const response = await axios.post('http://localhost:3000/auth/register', data);
            console.log('회원가입 성공: ', response.data);
            reset();
            navigate(`/login`);
        } catch(error) {
            console.log('회원가입 오류: ', error.response?.data || error.message);
        }
    };

    return (
        <S.SignupForm onSubmit={handleSubmit(onSubmit)}>         
            <S.Input 
                type="email" 
                placeholder="이메일을 입력해주세요!"
                {...register("email")}
            />
            {errors.email && <S.ErrorText>{errors.email.message}</S.ErrorText>}

            <S.Input 
                type="password" 
                placeholder="비밀번호를 입력해주세요!"
                {...register("password")}
            />
            {errors.password && <S.ErrorText>{errors.password.message}</S.ErrorText>}

            <S.Input 
                type="password" 
                placeholder="비밀번호를 다시 입력해주세요!"
                {...register("passwordCheck")}
            />
            {errors.passwordCheck && <S.ErrorText>{errors.passwordCheck.message}</S.ErrorText>}

            <S.SubmitButton type="submit" disabled={!isValid}>제출</S.SubmitButton>
        </S.SignupForm>
    );
};

export default SignupPage;
