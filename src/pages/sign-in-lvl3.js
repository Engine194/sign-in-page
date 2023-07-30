import { useSignUpLvl3 } from "@/hooks/SignUpLvl3/useSignUpLvl3";
import Error from "@/components/Error";

const SignInLvl3 = function (props) {
  const talonProps = useSignUpLvl3();
  const { formState, handlers } = talonProps;
  const {
    onBlurEmail,
    onChangeEmail,
    onBlurPassword,
    onChangePassword,
    onSubmit,
  } = handlers;

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
                className={getInputClass(formState.email.error)}
                type="text"
                name="email"
                value={formState.email.value}
                onChange={onChangeEmail}
                placeholder="Registered Email *"
                onBlur={onBlurEmail}
              />
              <Error error={formState.email.error} />
            </div>
            <div className="flex-1">
              <input
                className={getInputClass(formState.password.error)}
                type="password"
                name="password"
                value={formState.password.value}
                onChange={onChangePassword}
                placeholder="Password *"
                onBlur={onBlurPassword}
              />
              <Error error={formState.password.error} />
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

export default SignInLvl3;
