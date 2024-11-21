import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './SignupPage.style';

const SignupPage = () => {
    const schema = yup.object().shape({
        fullName: yup
            .string()
            .required('이름을 반드시 입력해주세요.'),
        gender: yup
            .string()
            .oneOf(['male', 'female'], '성별을 선택해주세요.')
            .required('성별을 반드시 선택해주세요.'),
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

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        reValidateMode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log('회원가입 데이터 제출:', data);
    };

    return (
        <S.SignupForm onSubmit={handleSubmit(onSubmit)}>
            <S.Input 
                type="text" 
                placeholder="이름을 입력해주세요!"
                {...register("fullName")}
            />
            {errors.fullName && <S.ErrorText>{errors.fullName.message}</S.ErrorText>}

            <S.GenderContainer>
                <S.Label>
                    <S.Input
                        type="radio"
                        value="male"
                        {...register('gender')}
                    />
                    남성
                    
                </S.Label>
                <S.Label>
                    <S.Input
                        type="radio"
                        value="female"
                        {...register('gender')}
                    />
                    여성
                    
                </S.Label>
            </S.GenderContainer>
            {errors.gender && <S.ErrorText>{errors.gender.message}</S.ErrorText>}

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
