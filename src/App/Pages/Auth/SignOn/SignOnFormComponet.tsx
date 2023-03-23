import { Api } from "../../../Api/Api";
import { services } from "../../../Api/services";
import { IFormInput, signOnDataType } from "./SignOnInterface";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Row } from "react-bootstrap";
import { z } from "zod";
import { useEffect } from "react";

const signOnFormSchema = z.object({
  username: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8),
  rememberMe: z.boolean(),
});

export const SignOnComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signOnFormSchema),
  });


  const { resolve, data, isloading, error }: any = Api({
    service: services.auth.signOn,
  });

  const onSubmit = (form: any) => {
    resolve({ form });
  };

  useEffect(() => {
    if (!error && data) {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("authorization", JSON.stringify(data.user.apikey));
    }
  }, [data]);

  return (
    <>
      {
        error ? <>
        {
          
          Object.keys(error).map((key, index) => 
            (
              <ServerErrorMessage message={error[key][0]}/>
            )
          )
        }
        </> : <></>
      }

      <form role="form" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>

        <Form.Control
          placeholder="Enter your username"
          autoComplete="off"
          type="text"
          {...register("username")}
        />
        {errors.username && <ErrorMessage message={errors.username?.message} />}

        <label>Email Address</label>
        <Form.Control
          placeholder="Enter your email address"
          autoComplete="off"
          type="email"
          {...register("email")}
        />
        {errors.email && <ErrorMessage message={errors.email?.message} />}

        <label>Password</label>
        <div className="mb-3">
          <Form.Control
            placeholder="Enter your email password"
            autoComplete="off"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <ErrorMessage message={errors.password?.message} />
          )}
        </div>
        <div className="d-flex align-items-center">
          <div className="form-check form-check-info text-left mb-0">
            <Form.Check
              type="checkbox"
              id="flexCheckDefault"
              {...register("rememberMe")}
            />
            <label
              className="font-weight-normal text-dark mb-0"
              htmlFor="flexCheckDefault"
            >
              Terms and Conditions
            </label>
          </div>
        </div>
        {errors.rememberMe && (
          <ErrorMessage message={errors.rememberMe?.message} />
        )}
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

const ServerErrorMessage = ({ message }: any) => (
  <div className="text text-center" style={{ color: "#F00", fontSize: "15px" }}>{message}</div>
);
