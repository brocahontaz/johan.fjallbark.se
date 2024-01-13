import "./Nav.css";
import Link from "./Link";

const Links = [
  {
    name: "Home",
    url: "/",
    icon: "home",
    iconType: "fas",
  },
  {
    name: "About",
    url: "/",
    icon: "user",
    iconType: "fas",
  },
  {
    name: "CV",
    url: "/",
    icon: "scroll",
    iconType: "fas",
  },
  {
    name: "Projects",
    url: "/",
    icon: "project-diagram",
    iconType: "fas",
  },
  {
    name: "Contact",
    url: "/",
    icon: "address-card",
    iconType: "fas",
  },
];

const Nav = () => (
  <div className="Nav">
    <div className="Wrapper">
      <ul>
      {Links.map((item) => (
          <Link
            name={item.name}
            url={item.url}
            icon={item.icon}
            iconType={item.iconType}
            key={item.name}
          />
        ))}
      </ul>
    </div>
  </div>
);

export default Nav;
