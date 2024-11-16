export const idRegex = /^[a-zA-Z0-9]{6,20}$/;
export const idRegexMsg = "영어와 숫자만 사용하여 6~20 글자로 입력해주세요."
export const pwRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{6,20}$/;
export const pwRegexMsg = "영어, 숫자, 특수기호 를 포함하여 6~20 글자로 입력해주세요."
export const hpRegex = /^010-\d{4}-\d{4}/;
export const nameRegex = /^[가-힣a-zA-Z]{2,20}$/;