import STYLE from "./style";
import { useForm } from "react-hook-form";
import { emailSchema, passwordSchema, passwordCheckSchema } from "../../3_Shared/validation/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import authSignUp from "./api/authSignUp";
import * as Input from "../../3_Shared/ui/Input/";
const SignUpPage = () => {
  const yupSchema = emailSchema.concat(passwordSchema.concat(passwordCheckSchema));
  // prettier-ignore
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "onChange", resolver: yupResolver(yupSchema),
  });

  const onSubmit = async (data) => {
    const signUpResult = await authSignUp(data);
    console.log(signUpResult);
  };
  
  return (
    <STYLE.SignUpForm onSubmit={handleSubmit(onSubmit)}>
      <h1>회원가입</h1>
      <Input.Container>
        <Input.Label>email</Input.Label>
        <Input.DefaultInput
          type="email"
          {...register("email")}
          placeholder="이메일을 입력해주세요"
        />
        <Input.InputErrMsg>{errors.email?.message}</Input.InputErrMsg>
      </Input.Container>

      <Input.Container>
        <Input.Label>password</Input.Label>
        <Input.DefaultInput
          type={"password"}
          {...register("password")}
          placeholder="비밀번호를 입력해주세요"
        />
        <Input.InputErrMsg>{errors.password?.message}</Input.InputErrMsg>
      </Input.Container>

      <Input.Container>
        <Input.Label>confirm password</Input.Label>
        <Input.DefaultInput
          type={"password"}
          {...register("passwordCheck")}
          placeholder="비밀번호를 다시 입력해주세요"
        />
        <Input.InputErrMsg>{errors.passwordCheck?.message}</Input.InputErrMsg>
      </Input.Container>
      <Input.SubmitInput type="submit" value={"로그인"} disabled={!isValid}/>
    </STYLE.SignUpForm>
  );
};

export default SignUpPage;
