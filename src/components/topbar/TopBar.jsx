import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import "../../themify-icons/themify-icons.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:8000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        {/* <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i> */}
        <a className='topIcon linkto facebook' href="https://www.facebook.com/" target="blank"><i className="ti-facebook"></i></a>
        <a className='topIcon linkto instagram' href="https://www.instagram.com/" target="blank"><i className="ti-instagram"></i></a>
        <a className='topIcon linkto youtube' href="https://www.youtube.com/" target="blank"><i className="ti-youtube"></i></a>
        <a className='topIcon linkto pinterest' href="https://www.pinterest.com/" target="blank"><i className="ti-pinterest"></i></a>
        <a className='topIcon linkto twitter' href="https://twitter.com/" target="blank"><i className="ti-twitter"></i></a>
        <a className='topIcon linkto linkedin' href="https://www.linkedin.com/" target="blank"><i className="ti-linkedin"></i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
