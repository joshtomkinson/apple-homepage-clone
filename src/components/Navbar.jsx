import React, {useState} from "react";


const Navbar = () => {
   const [active, setActive] = useState(false)



  return (
   
      <header className={active ? 'active':null}>
        <div className="container">
          {/*------------------ mobile nav list ----------------*/}
          <nav className="nav">
            <ul className="nav-list nav-list-mobile">
              <li className="nav-item">
                <div className="mobile-menu" onClick={()=> setActive(!active)}>
                  <span className="line line-top"></span>
                  <span className="line line-bottom"></span>
                </div>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link nav-link-apple"></a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-bag"></a>
              </li>
            </ul>
            {/*----------- end of nav list mobile------------- */}

            {/*------------- nav list large------------------ */}
            <ul className="nav-list nav-list-larger">
              <li className="nav-item nav-item-hidden">
                <a href="index.html" className="nav-link nav-link-apple"></a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Mac
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  ipad
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Watch
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Tv
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Music
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Support
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link nav-link-search"></a>
              </li>
              <li className="nav-item item-hidden">
                <a href="#" className="nav-link nav-link-bag"></a>
              </li>
            </ul>
            {/*-------------end of  nav list--------------- */}
          </nav>
        </div>
      </header>
    
  );
};

export default Navbar;
