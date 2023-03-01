import './Link.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Link = ({name, url, icon, iconType}) =>
  <li className='Link' key={name}>
    {name && <a href={url} className={url ? 'ActiveLink' : 'NonActiveLink'}>
      {icon &&<FontAwesomeIcon icon={[iconType, icon]} className={'LinkIcon ' + icon}/>} 
      <span className={url ? 'LinkText' : 'ItemText'}>{name}</span>
    </a>}
  </li>

export default Link;