import './Logo.css';

const Logo = () =>
  <div className='Logo'>
    <div className='Wrapper'>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	       xmlSpace="preserve">
        <defs>
          <pattern id="water" width=".25" height="1.0" patternContentUnits="objectBoundingBox">
            <path fill="#FFF" d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"/>
          </pattern>

          <text id="text" transform="translate(0,150)" fontFamily="'Open Sans'" fontSize="150px" fontWeight="800" fill="rebeccapurple">J. Fjällbark</text>
          <text id="subtext" transform="translate(650,180)" fontFamily="'Open Sans'" fontSize="20px" fontWeight="400">Full-stack DevOps</text>

          <mask id="text-mask">
            <use x="0" y="0" xlinkHref="#text" opacity="1" fill="#ffffff"/>
          </mask>

          <g id="eff">
            <use x="0" y="0" xlinkHref="#text" fill="#a2a3a5"/>
            <rect id="wave-1" className="water-fill" mask="url(#text-mask)" fill="url(#water)" x="-300" y="80" width="1200" height="60%" opacity="0.3">
              <animate attributeType="xml" attributeName="x" from="-300" to="0" repeatCount="indefinite" dur="2s"/>
            </rect>
            <rect id="wave-2" className="water-fill" mask="url(#text-mask)" fill="url(#water)" y="75" width="1600" height="60%" opacity="0.3">
              <animate attributeType="xml" attributeName="x" from="-400" to="0" repeatCount="indefinite" dur="3s"/>
            </rect>
            <rect id="wave-3" className="water-fill" mask="url(#text-mask)" fill="url(#water)" y="85" width="2000" height="60%" opacity="0.3">
              <animate attributeType="xml" attributeName="x" from="-500" to="0" repeatCount="indefinite" dur="1.4s"/>
            </rect>
            <rect id="wave-4" className="water-fill" mask="url(#text-mask)" fill="url(#water)" y="85" width="2400" height="60%" opacity="0.3">
              <animate attributeType="xml" attributeName="x" from="-600" to="0" repeatCount="indefinite" dur="2s"/>
            </rect>
            <use x="0" y="0" xlinkHref="#subtext" fill="#a2a3a5"/>
          </g>
        </defs>

	      <use xlinkHref="#eff" opacity="0.9"/>
      </svg>
    </div>
  </div>

export default Logo;
