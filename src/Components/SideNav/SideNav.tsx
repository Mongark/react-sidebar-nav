import "./SideNav.css";

import SideNavData from "./SideNavData";

export default function SideNav() {
  return(
    <div className="SideNav">
      <ul className="SideNavList">
        {SideNavData.map((item, index) => {
          return(
            <li
              className="SideNavItem row"
              id={window.location.pathname == item.link ? "active" : ""}
              key={index}
              >
              <div id="icon">
                {item.icon}
              </div>
              <div id="name">
                {item.name}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
