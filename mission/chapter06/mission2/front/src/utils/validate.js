const emailPattern = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
function validateUser(values) {
    const errors = {
        email: '',
        password: '',
    }

    if(emailPattern.test(values.email) === false) {
        errors.email = '올바른 이메일 형식이 아닙니다. 다시 확인해주세요!';
    }

    if(values.password && values.password.length < 8) {
        errors.password = '비밀번호는 8자 이상이어야 합니다.';
    }

    if(values.password && values.password.length > 16) {
        errors.password = '비밀번호는 16자 이하여야 합니다.';
    }

    return errors;
}

export function validateLogin(values) {
    return validateUser(values);
}

export function validateSignup(values) {
    const errors = validateUser(values);

    if(values.password !== values.passwordConfirm) {
        errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
    }

    return errors;
}