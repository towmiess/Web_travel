import { useEffect } from "react";
import { deleteAllCookies } from "../../heaper/cookie";
import { checkLogin } from "../../actions/login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    deleteAllCookies();
    dispatch(checkLogin(false));
    navigate("/");
  }, [dispatch, navigate])

  return (
    <>
    </>
  )
}
export default Logout;