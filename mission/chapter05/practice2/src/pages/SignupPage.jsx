import * as S from './SignupPage.style';
import useForm from '../hooks/useForm';
import {validateSignup} from '../../utils/validate';

const SignupPage = () => {
    const signup = useForm({
        initialValue: { email: '', password: '', passwordConfirm: '' },
        validate: validateSignup
    });

    const onSubmit = (event) => {
        event.preventDefault();
        if (!signup.errors.email && !signup.errors.password && !signup.errors.passwordConfirm) {
            console.log('폼 데이터 제출');
            console.log(signup.values);
        }
    };

    return (
        <S.SignupForm onSubmit={onSubmit}>
            <S.Input 
                error={signup.touched.email && signup.errors.email}
                type="email" 
                placeholder="이메일을 입력해주세요!"
                {...signup.getTextInputProps('email')}
            />
            {signup.touched.email && signup.errors.email && <S.ErrorText>{signup.errors.email}</S.ErrorText>}


            <S.Input
                error={signup.touched.password && signup.errors.password} 
                type="password" 
                placeholder="비밀번호를 입력해주세요!"
                {...signup.getTextInputProps('password')}
            />
            {signup.touched.password && signup.errors.password && <S.ErrorText>{signup.errors.password}</S.ErrorText>}


            <S.Input
                error={signup.touched.passwordConfirm && signup.errors.passwordConfirm}
                type="password" 
                placeholder="비밀번호를 입력해주세요!"
                {...signup.getTextInputProps('passwordConfirm')}
            />
            {signup.touched.passwordConfirm && signup.errors.passwordConfirm && <S.ErrorText>{signup.errors.passwordConfirm}</S.ErrorText>}

            <S.SubmitButton type="submit" disabled={!!signup.errors.email || !!signup.errors.password || !!signup.errors.passwordConfirm}>회원가입</S.SubmitButton>
        </S.SignupForm>
    );
};

export default SignupPage;
