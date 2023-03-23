import { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Api } from "../../../Api/Api";
import { IFormInput, signOnDataType } from "./SignOnInterface";

export const SignOnComponent = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const [data, setData] = useState<signOnDataType>();
  const [isLoading, setLoading] = useState<boolean>();
  const [error, setError] = useState<any>();

  const onSubmit = (params: IFormInput) => {
    
    const service: any ={endpoint:'users', method:'post'};

    const {data, isLoading, error} = Api({service, params})


    alert(isLoading)

  };

 
  return (
    <>
    {
      isLoading
    }
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
          {errors?.name?.type === "required" && <p>This field is required</p>}
          {errors?.name?.type === "maxLength" && (
            <p>First name cannot exceed 20 characters</p>
          )}
          {errors?.name?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
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
            {errors?.email?.type === "required" && (
              <p>This field is required</p>
            )}
            
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
          {errors?.password?.type === "required" && <p>This field is required</p>}
          {errors?.password?.type === "minLength" && (
            <p>Password minLength insuficient</p>
          )}
          {errors?.password?.type === "maxLength" && (
            <p>First name cannot exceed 20 characters</p>
          )}
          
        </div>

        <div className="form-check form-check-info text-left mb-0">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
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
