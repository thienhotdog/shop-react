import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { signup } from '../../api/authAPI';
import { signup } from "../../api/authApi";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const onSubmit = async (user, e) => {
    try {
     await signup(user);
      setSuccess(true);
      e.target.reset();
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="col-6 mx-auto mt-2">
      <h2> Đăng ký tài khoản</h2>
      <hr />
      {error && <div className="alert alert-danger">{error}</div>}
      {success && (
        <div className="alert alert-success">
          Bạn đã đăng ký thành công. Click <Link to="/signin">vào đây</Link> để
          login
        </div>
      )}
      <form action="" onSubmit={handleSubmit(onSubmit)} className="">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" {...register("email")} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password")}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Signup;
