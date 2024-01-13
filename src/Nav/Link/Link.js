import "./Link.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Link = ({ name, url, icon, iconType }) => (
  <a href={url} className={url ? "ActiveLink" : "NonActiveLink"}>
    <li className="Link" key={name}>
      {icon && (
        <FontAwesomeIcon
          icon={[iconType, icon]}
          className={"LinkIcon " + icon}
        />
      )}
      <span className={url ? "LinkText" : "ItemText"}>{name}</span>
    </li>
  </a>
);

export default Link;
