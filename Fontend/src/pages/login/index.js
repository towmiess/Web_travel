import { login } from "../../services/userServices";
import { setCookie } from "../../heaper/cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";
import Swal from 'sweetalert2'
import "./login.scss";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    const option = {
      username: username,
      password: password
    }
    const response = await login(option);

    if (response.length > 0) {
      const admin = response[0].admin;
      setCookie("id", response[0].id, 1);
      setCookie("token", response[0].token, 1);
      dispatch(checkLogin(true));
      Swal.fire({
        icon: "success",
        title: "Login Successfull!",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        if (admin) {
          navigate("/admin/tourmana");
        } else {
          navigate("/");
        }
      }, 1000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Incorrect login information!",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  return (
    <>
      <div className="container-login">
        <div className="login-form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="title">Sign In</div>
            <div className="label">Username</div>
            <input className="input" type="username" placeholder="Nhập tên đăng nhập" />
            <div className="label">Password</div>
            <input className="input" type="password" placeholder="Nhập mật khẩu" />
            <a href="/changepass" >Change password</a>
            <button className="btn-login" type="submit">
              Sign in
            </button>
          </form>
          <div className="content-right">
            <div className="title-content">Welcome to login</div>
            <div className="question">Don't have account?</div>
            <button className="navigate"><a href="/register">Sign Up</a></button>
          </div>
        </div>
      </div>
    </>

  )
}
export default Login;