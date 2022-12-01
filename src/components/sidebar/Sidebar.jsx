import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link">
              <li className="sidebarListItem">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          {/* <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i> */}
          <a className='sidebarIcon linkto2 facebook' href="https://www.facebook.com/" target="blank"><i className="ti-facebook"></i></a>
          <a className='sidebarIcon linkto2 instagram' href="https://www.instagram.com/" target="blank"><i className="ti-instagram"></i></a>
          <a className='sidebarIcon linkto2 youtube' href="https://www.youtube.com/" target="blank"><i className="ti-youtube"></i></a>
          <a className='sidebarIcon linkto2 pinterest' href="https://www.pinterest.com/" target="blank"><i className="ti-pinterest"></i></a>
          <a className='sidebarIcon linkto2 twitter' href="https://twitter.com/" target="blank"><i className="ti-twitter"></i></a>
          <a className='sidebarIcon linkto2 linkedin' href="https://www.linkedin.com/" target="blank"><i className="ti-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
}
