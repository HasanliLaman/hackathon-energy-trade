import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import StyleSignUpForm from "./style";
import { toast } from "react-toastify";
import { signUpSchema } from "../../schemas";
import { signup } from "../../server";
import ImgTop from "../../assets/images/homepage-header.svg";
import ImgBottom from "../../assets/images/homepage-footer.svg";

library.add(faSpinner);

const SignUpForm = () => {
  const navigate = useNavigate();

  const { data, isPending, mutate } = useMutation({
    mutationFn: signup,
    onError: () => toast.error("Something went wrong!"),
    onSuccess: () => {
      navigate("/signin");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const submitHandler = async function (formData) {
    mutate(formData);

    if (data)
      reset({
        email: "",
        password: "",
        ssn: "",
        confirmPassword: "",
      });
  };

  return (
    <StyleSignUpForm>
      <img src={ImgTop} />
      <h2>Sign Up</h2>
      <h3>Join Us Today! Create Your Account to Get Started</h3>
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
            {...register("ssn")}
            id="ssn"
            placeholder="SSN"
            name="ssn"
            type="text"
          />
          {errors.ssn?.message && (
            <p className="error-message">{errors.ssn?.message}</p>
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
        <div className="form-group">
          <input
            {...register("confirmPassword")}
            id="confirmPassword"
            placeholder="Confirm password"
            name="confirmPassword"
            type={"password"}
          />

          {errors.confirmPassword?.message && (
            <p className="error-message">{errors.confirmPassword?.message}</p>
          )}
        </div>
        <button>
          <p>Sign up</p>
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
        You already have an account? <Link to="/signin">Sign in</Link>
      </p>
      <img src={ImgBottom} />
    </StyleSignUpForm>
  );
};

export default SignUpForm;
