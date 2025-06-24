import { useNavigate } from "react-router-dom";
import { generateToken } from "../../heaper/genarateToken";
import { register } from "../../services/userServices";
import Swal from 'sweetalert2'
import "./register.scss";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    const repassword = e.target[2].value;

    if (password !== repassword) {
      Swal.fire({
        icon: "error",
        title: "Incorrect re-entered password!",
        showConfirmButton: false,
        timer: 1500
      });
    }

    const option = {
      username: username,
      password: password,
      token: generateToken()
    }
    const response = await register(option);
    if (response) {
      Swal.fire({
        icon: "success",
        title: "Register Successfull!",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Email already exists!",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  return (
    <>
      <div className="container-register">
        <div className="login-form-register">
          <form className="form-register" onSubmit={handleSubmit}>
            <div className="title-register">Register</div>
            <div className="label-register">Username</div>
            <input className="input-register" type="username" placeholder="Nhập tên đăng nhập" />
            <div className="label-register">Password</div>
            <input className="input-register" type="password" placeholder="Nhập mật khẩu" />
            <div className="label-register">Re-enter Password</div>
            <input className="input-register" type="password" placeholder="Nhập lại mật khẩu" />
            <button className="btn-register" type="submit">
              Register
            </button>
          </form>
          <div className="content-right-register">
            <div className="title-content-register">Welcome to sign up</div>
            <div className="question-register">Have an account?</div>
            <button className="navigate-register"><a href="/login">Sign In</a></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Register;