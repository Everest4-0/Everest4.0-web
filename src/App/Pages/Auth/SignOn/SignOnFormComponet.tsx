import { useForm } from "react-hook-form";
import { Api } from "../../../Api/Api";
import { services } from "../../../Api/services";
import { IFormInput, signOnDataType } from "./SignOnInterface";

export const SignOnComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const service: any = services.auth.signOn;

  const { resolve, data, isLoading, error } = Api({ service });

  const onSubmit = (params: IFormInput) => {
    console.log(params);
    resolve({ form: params });
  };

  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
      <pre>{JSON.stringify(error)}</pre>
      <form role="form" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            aria-label="Name"
            aria-describedby="name-addon"
            {...register("name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.name && <ErrorMessage message={errors.name?.message} />}
        </div>

        <label>Email Address</label>
        <div className="mb-3">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address"
              aria-label="Email"
              aria-describedby="email-addon"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && <ErrorMessage message={errors.email?.message} />}
          </div>
        </div>

        <label>Password</label>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Create a password"
            aria-label="Password"
            aria-describedby="password-addon"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 16,
            })}
          />
          {errors.password && (
            <ErrorMessage message={errors.password?.message} />
          )}
        </div>

        <div className="form-check form-check-info text-left mb-0">
          <input
            className="checkbox"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            {...register("rememberMe")}
          />
          <label
            className="font-weight-normal text-dark mb-0"
            htmlFor="flexCheckDefault"
          >
            I agree the{" "}
            <a href="javascript:;" className="text-dark font-weight-bold">
              Terms and Conditions
            </a>
            .
          </label>
          {errors.rememberMe && (
            <ErrorMessage message={errors.rememberMe?.message} />
          )}
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-dark w-100 mt-4 mb-3">
            Sign up
          </button>

          <button type="button" className="btn btn-white btn-icon w-100 mb-3">
            <span className="btn-inner--icon me-1">
              <img
                className="w-5"
                src="../assets/img/logos/google-logo.svg"
                alt="google-logo"
              />
            </span>
            <span className="btn-inner--text">Sign up with Google</span>
          </button>
        </div>
      </form>
    </>
  );
};

const ErrorMessage = ({ message }: any) => (
  <div style={{ color: "#F00", fontSize: "10px" }}>{message}</div>
);
