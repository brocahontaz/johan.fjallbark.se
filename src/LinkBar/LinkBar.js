import './LinkBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LinkBar = () =>
  <div className='LinkBar'>
    <div className='Wrapper'>
      <ul>
        <li><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> Malmö</li>
        <li><FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn</li>
        <li><FontAwesomeIcon icon={['fab', 'github']} /> Github</li>
        <li><FontAwesomeIcon icon={['fas', 'envelope']} /> johan@fjallbark.se</li>
        <li><FontAwesomeIcon icon={['fas', 'copyright']} /> Johan Fjällbark, 2023</li>
      </ul>
    </div>
  </div>

export default LinkBar