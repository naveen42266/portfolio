import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navbar.scss';
// import Switch from "react-switch";
import logo from "assets/images/naav.png"
const Navbar = () => {
  // const [checked, setChecked] = useState(true);

  return (
    <nav className='navbar'>
      <div className='navbar__left'>
        <Link to='/' className='navbar__link'>
          {/* <img alt='logo' src=' https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-qcybs&psig=AOvVaw3pwGQAVGWGiFdScyW0kFHY&ust=1702041071299000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCg9Z6z_YIDFQAAAAAdAAAAABAL' className='navbar__img' /> */}
          {/* <img alt='logo' src='src/assets/images/naav.png' className='navbar__img' /> */}
          <img alt='logo' src={logo} className='navbar__img' />

        </Link>
        {/* <Switch
        checked={checked}
        onChange={() => { setChecked(!checked) }}
        offColor="#baaa80"
        onColor="#353535"
        className="react-switch mx-auto"
        width={90}
        height={40}
        uncheckedIcon={
          <span
            className="iconify"
            data-icon="twemoji:owl"
            data-inline="false"
            style={{
              display: "block",
              height: "100%",
              fontSize: 25,
              textAlign: "end",
              marginLeft: "20px",
              color: "#353239",
            }}
          ></span>
        }
        checkedIcon={
          <span
            className="iconify"
            data-icon="noto-v1:sun-with-face"
            data-inline="false"
            style={{
              display: "block",
              height: "100%",
              fontSize: 25,
              textAlign: "end",
              marginLeft: "10px",
              color: "#353239",
            }}
          ></span>
        }
        id="icon-switch"
      /> */}
      </div>
      <div className='navbar__right'>
        <ul className='navbar__list'>
          <li className='navbar__items'>
            <HashLink to='/#about' className='navbar__itemsLink'>
              <span className='navbar__itemsLinkNumeric'>01.</span>
              About
            </HashLink>
          </li>
          <li className='navbar__items'>
            <HashLink to='/#projects' className='navbar__itemsLink'>
              <span className='navbar__itemsLinkNumeric'>02.</span>
              Projects
            </HashLink>
          </li>
          <li className='navbar__items'>
            <HashLink to='/#work' className='navbar__itemsLink'>
              <span className='navbar__itemsLinkNumeric'>03.</span>
              Work
            </HashLink>
          </li>
          <li className='navbar__items'>
            <NavLink to='/contact' className='navbar__itemsLink'>
              <span className='navbar__itemsLinkNumeric'>04.</span>
              Contact
            </NavLink>
          </li>
        </ul>
        <a href='https://drive.google.com/file/d/105WUqEqb81xrkyXLHHO0tE3SMu6yYv4v/view?usp=sharing' target='_blank' rel='noreferrer' className='navbar__button'>Resume</a>
      </div>
    </nav>
  )

}

export default Navbar;
