import './LinkBar.css'
import Link from './Link'

const Links = [
  {
    name: 'Malmö',
    icon: 'map-marker-alt',
    iconType: 'fas'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/johan-fj%C3%A4llbark-03ab40161/',
    icon: 'linkedin',
    iconType: 'fab'
  },
  {
    name: 'Github',
    url: 'https://github.com/brocahontaz',
    icon: 'github',
    iconType: 'fab'
  },
  {
    name: 'johan@fjallbark.se',
    url: 'mailto:johan@fjallbark.se',
    icon: 'envelope',
    iconType: 'fas'
  },
  {
    name: 'Johan Fjällbark, 2023',
    icon: 'copyright',
    iconType: 'fas'
  }
]

const LinkBar = () =>
  <div className='LinkBar'>
    <div className='Wrapper'>
      <ul>
        {Links.map(item =>(
          <Link name={item.name} url={item.url} icon={item.icon} iconType={item.iconType} key={item.name}/>
        ))}
      </ul>
    </div>
  </div>

export default LinkBar