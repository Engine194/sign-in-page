import { useState } from "react";
import Error from "@/components/Error";
import { validateEmail, validatePassword } from "@/utils/formValidate";

const SignInLvl1 = function (props) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const triggerValidateEmail = function (value) {
    const errorMsg = validateEmail(value);
    setEmail(function (prev) {
      return {
        ...prev,
        error: errorMsg,
      };
    });
    return errorMsg;
  };

  const triggerValidatePassword = function (value) {
    const errorMsg = validatePassword(value);
    setPassword(function (prev) {
      return {
        ...prev,
        error: errorMsg,
      };
    });
    return errorMsg;
  };

  const onChangeEmail = function (event) {
    const value = event.target.value;
    setEmail({ value, error: "" });
  };

  const onChangePassword = function (event) {
    const value = event.target.value;
    setPassword({ value, error: "" });
  };

  const onBlurEmail = function (event) {
    triggerValidateEmail(event.target.value);
  };

  const onBlurPassword = function (event) {
    triggerValidatePassword(event.target.value);
  };

  const onSubmit = function (event) {
    event.preventDefault();
    console.log('email...', email);
    console.log('password...', password);
    const errors = [
      triggerValidateEmail(email.value),
      triggerValidatePassword(password.value),
    ];

    if (
      errors.filter(function (error) {
        return !!error;
      }).length <= 0
    ) {
      // Submit form
      console.log("submitting form...");
    }
  };

  const getInputClass = function (error) {
    const inputClassName =
      "w-full border-[#696969] border-[1px] outline-none px-[16px] py-[12px] text-[22px] text-[#696969]";
    return `${inputClassName} ${error ? "border-[#e71919]" : ""}`;
  };

  return (
    <div className="h-screen w-full bg-white">
      <div className="pt-[40px] pb-[20px]">
        <h1 className="text-[#102C66] text-[34px] font-bold text-center">
          WELCOME TO KOAN PARTNER STORE
        </h1>
      </div>
      <div className="mx-auto max-w-[930px] bg-[#fafafa] text-center">
        <form className="py-[50px] max-w-[380px] mx-auto" method="POST">
          <div className="flex flex-col gap-y-[20px] w-full">
            <div className="flex-1">
              <input
                className={getInputClass(email.error)}
                type="text"
                name="email"
                value={email.value}
                onChange={onChangeEmail}
                placeholder="Registered Email *"
                onBlur={onBlurEmail}
              />
              <Error error={email.error} />
            </div>
            <div className="flex-1">
              <input
                className={getInputClass(password.error)}
                type="password"
                name="password"
                value={password.value}
                onChange={onChangePassword}
                placeholder="Password *"
                onBlur={onBlurPassword}
              />
              <Error error={password.error} />
            </div>
          </div>
          <div className="mt-[30px] flex flex-col gap-y-[18px]">
            <button
              className="w-full px-[16px] py-[5px] uppercase bg-[#102C66] text-white text-[28px] font-bold text-center"
              onClick={onSubmit}
            >
              Sign In
            </button>
            <button className="border-none outline-none text-center text-[20px] text-[#696969]">
              Forgot Your Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInLvl1;
