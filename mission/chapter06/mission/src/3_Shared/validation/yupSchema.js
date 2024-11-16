import * as yup from "yup";

export const emailSchema = yup.object({
  email: yup
    .string()
    .matches(
      /^[^\u3131-\u3163\uac00-\ud7a3]*$/,
      "email에 한글을 사용할 수 없습니다."
    ) // 한글 입력 차단
    .email("유효한 이메일을 입력하세요.") // 이메일 형식 유효성 검사 메시지
    .min(6, "이메일은 최소 6자 이상이어야 합니다.") // 최소 길이 제한
    .max(24, "이메일은 최대 24자까지 가능합니다.") // 최대 길이 제한
    .required("이메일은 필수 입력 사항입니다."), // 필수 입력 메시지
});
export const idSchema = yup.object({
  id: yup
    .string()
    .matches(/^[a-zA-Z0-9]*$/, "아이디는 영어와 숫자만 포함해야 합니다.") // 영어 및 숫자만 허용
    .matches(
      /^[^\u3131-\u3163\uac00-\ud7a3]*$/,
      "아이디에 한글을 사용할 수 없습니다."
    ) // 한글 입력 차단
    .min(6, "아이디는 최소 6자 이상이어야 합니다.") // 최소 길이 제한
    .max(20, "아이디는 최대 20자까지 가능합니다.") // 최대 길이 제한
    .required("아이디는 필수 입력 사항입니다."), // 필수 입력 메시지
});
export const passwordSchema = yup.object({
  password: yup
    .string()
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.") // 최소 길이 제한
    .max(16, "비밀번호는 최대 16자까지 가능합니다.") // 최대 길이 제한
    .required("비밀번호는 필수 입력 사항입니다."), // 필수 입력 메시지
});
export const passwordCheckSchema = yup.object({
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password'), null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 확인은 필수 입력 항목입니다."),
})
