
import React, { useEffect, useMemo, useState } from "react";
import { Link, useFormAction, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Row } from "react-bootstrap";

import { Api } from "../../../../Api/Api";
import { services } from "../../../../Api/services";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignInFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.any()
})

export const SignInForm = () => {
    const { register, handleSubmit, watch,
        formState: { errors }, } = useForm({
            resolver: zodResolver(SignInFormSchema)
        })
    const navigate = useNavigate()

    const { resolve, data, loading, error }: any = Api({ service: services.auth.singIn });

    const onSubmit = (form: any) => resolve({ form })
    useEffect(() => {
        debugger
        if (data?.id) {
            //TODO: Find a way to use a storage beside localstorage
            localStorage.setItem('data', JSON.stringify(data))
            //TODO: fix on the backend the authorization key name use 'authorization' beside 'apikey'
            localStorage.setItem('authorization', data?.apikey)
            navigate('/dashboard/profile');
        }
    }, [data])
    return (
        <form role="form" onSubmit={handleSubmit(onSubmit)} >
            <label>Email Address{JSON.stringify(data)}</label>
            <div className="mb-3">
                <Form.Control placeholder="Enter your email address" autoComplete="off" type="email" {...register("email")} />
                {errors.email && <ErrorMessage message={errors.email?.message} />}
            </div>
            <label>Password</label>
            <div className="mb-3">
                <Form.Control placeholder="Enter your email password" autoComplete="off" type="password" {...register("password")} />
                {errors.password && <ErrorMessage message={errors.password?.message} />}
            </div>
            <div className="d-flex align-items-center">
                <div className="form-check form-check-info text-left mb-0">
                    <Form.Check type="checkbox" id="flexCheckDefault"{...register("rememberMe")} />
                    <label
                        className="font-weight-normal text-dark mb-0"
                        htmlFor="flexCheckDefault"
                    >
                        Remember for 14 days
                    </label>
                </div>
                <a
                    href="javascript:;"
                    className="text-xs font-weight-bold ms-auto"
                >
                    Forgot password
                </a>
            </div>
            <div className="text-center">
                <Button disabled={loading} type="submit" className="btn btn-dark w-100 mt-4 mb-3">
                    Sign in
                </Button>
                <Button
                    type="button"
                    className="btn btn-white btn-icon w-100 mb-3"
                >
                    <span className="btn-inner--icon me-1">

                    </span>
                    <span className="btn-inner--text">Sign in with Google</span>
                </Button>
            </div>
        </form>
    )
}

const ErrorMessage = ({ message }: any) => <div style={{ color: '#F00', fontSize: '10px' }}>{message}</div>