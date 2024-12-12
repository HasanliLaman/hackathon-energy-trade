import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import StyleSignInForm from "./style";
import { toast } from "react-toastify";
import { logInSchema } from "../../schemas";
import { login } from "../../server";
import { AuthContext } from "../../context/AuthContext";
import ImgTop from "../../assets/images/homepage-header.svg";
import ImgBottom from "../../assets/images/homepage-footer.svg";

library.add(faSpinner);

const SignInForm = () => {
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data, isPending, mutate } = useMutation({
    mutationFn: login,
    onError: () => toast.error("Email or password is wrong!"),
    onSuccess: ({ data }) => {
      logInUser(data.token, data.user);
      navigate("/profile");
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(logInSchema),
  });

  const submitHandler = async function (formData) {
    mutate(formData);

    if (data)
      reset({
        email: "",
        password: "",
      });
  };

  return (
    <StyleSignInForm>
      <img src={ImgTop} />
      <h2>Sign In</h2>
      <h3>Welcome Back! Access Your Account to Continue</h3>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-group">
          <input
            {...register("email")}
            id="email"
            placeholder="Email"
            name="email"
            type="email"
          />
          {errors.email?.message && (
            <p className="error-message">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-group">
          <input
            {...register("password")}
            id="password"
            placeholder="Password"
            name="password"
            type={"password"}
          />

          {errors.password?.message && (
            <p className="error-message">{errors.password?.message}</p>
          )}
        </div>
        <button>
          <p>Sign In</p>
          {isPending && (
            <FontAwesomeIcon
              icon="fa-spinner"
              spin
              style={{
                color: "#333",
                fontSize: "18px",
              }}
            />
          )}
        </button>
      </form>
      <p className="no-account">
        You don&apos;t have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <img src={ImgBottom} />
    </StyleSignInForm>
  );
};

export default SignInForm;
