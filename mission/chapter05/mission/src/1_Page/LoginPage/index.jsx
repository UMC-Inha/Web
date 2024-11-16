import STYLE from "./style";
import { useForm } from "react-hook-form";
import {
  emailSchema,
  passwordSchema,
} from "../../3_Shared/validation/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Input from "../../3_Shared/ui/Input/";
const LoginPage = () => {
  const yupSchema = emailSchema.concat(passwordSchema);
  // prettier-ignore
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "onChange", resolver: yupResolver(yupSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <STYLE.LoginForm onSubmit={handleSubmit(onSubmit)}>
      <h1>로그인</h1>
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
      <Input.SubmitInput type="submit" value={"로그인"} disabled={!isValid} />
    </STYLE.LoginForm>
  );
};

export default LoginPage;
