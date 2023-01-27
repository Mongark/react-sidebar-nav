import "./SideNav.css";

import SideNavData from "./SideNavData";

export function SideNav() {
  return(
    <div className="SideNav">
      <ul className="SideNavList">
        {SideNavData.map((item, index) => {
          return(
            <li
              className="SideNavItem"
              key={index}
              onClick={() => (window.location.pathname = item.link)}
              >
              <div>
                {item.icon}
              </div>
              <div>
                {item.name}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
