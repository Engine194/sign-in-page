import { useEffect, useState } from "react";
import { validateEmail, validatePassword } from "@/utils/formValidate";

const initFieldState = {
  value: "",
  error: "",
};

export const useSignUpLvl4 = function (props) {
  const [formState, setFormState] = useState({
    email: initFieldState,
    password: initFieldState,
  });
  const [storeConfig, setStoreConfig] = useState();

  const triggerValidateEmail = function (value) {
    const errorMsg = validateEmail(value);
    setFormState(function (prev) {
      return {
        ...prev,
        email: {
          ...prev.email,
          error: errorMsg,
        },
      };
    });
    return errorMsg;
  };

  const triggerValidatePassword = function (value) {
    const errorMsg = validatePassword(value);
    setFormState(function (prev) {
      return {
        ...prev,
        password: {
          ...prev.password,
          error: errorMsg,
        },
      };
    });
    return errorMsg;
  };

  const onChangeEmail = function (event) {
    const value = event.target.value;
    setFormState(function (prev) {
      return {
        ...prev,
        email: {
          value,
          error: "",
        },
      };
    });
  };

  const onChangePassword = function (event) {
    const value = event.target.value;
    setFormState(function (prev) {
      return {
        ...prev,
        password: {
          value,
          error: "",
        },
      };
    });
  };

  const onBlurEmail = function (event) {
    triggerValidateEmail(event.target.value);
  };

  const onBlurPassword = function (event) {
    triggerValidatePassword(event.target.value);
  };

  const onSubmit = function (event) {
    event.preventDefault();
    console.log("formState...", formState);
    const errors = [
      triggerValidateEmail(formState.email.value),
      triggerValidatePassword(formState.password.value),
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

  useEffect(() => {
    const getStoreConfig = async function () {
      try {
        const response = await fetch(`${location.origin}/api/sign-in`).then(
          (res) => res.json()
        );
        if (response) {
          setStoreConfig(response.storeConfig);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getStoreConfig();
  }, []);

  return {
    formState,
    storeConfig,
    handlers: {
      onChangeEmail,
      onChangePassword,
      onBlurEmail,
      onBlurPassword,
      onSubmit,
    },
  };
};
