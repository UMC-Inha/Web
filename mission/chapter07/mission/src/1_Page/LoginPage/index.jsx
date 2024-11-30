import STYLE from "./style";
import authLogin from "./api/authLogin";
import { useForm } from "react-hook-form";
import {
  emailSchema,
  passwordSchema,
} from "../../3_Shared/validation/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Input from "../../3_Shared/ui/Input/";
import { handleNavigation } from "../../3_Shared/model/handleNavigate";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const yupSchema = emailSchema.concat(passwordSchema);
  // prettier-ignore
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "onChange", resolver: yupResolver(yupSchema),
  });

  const onSubmit = async (data) => {
    const loginResult = await authLogin(data);
    handleNavigation(navigate, "/");
    console.log(loginResult);
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
