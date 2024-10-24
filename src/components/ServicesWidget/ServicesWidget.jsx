/**
 * Superior Cleaning Services
 *
 * @module /src/components/ServicesWidget/ServicesWidget.jsx
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// Libraries
import { useEffect, useState } from 'react';

// CSS
import './ServicesWidget.css';

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const SERVICES = ['residential', 'commercial'];

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
/**
 * @component ServicesWidget
 * @description The site's ServicesWidget component.
 *
 */

const ServicesWidget = () => {

  const [ selectedService, setSelectedService] = useState('residential');


  const residentialServiceCopy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const commercialServiceCopy = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";

  let serviceCopy = residentialServiceCopy
  const generateImage = () => {
    if (selectedService === 'commercial') {
      return <img src="/uploads/towels.webp" alt="" className="service-image" />
    }

    return <img src="/uploads/white-bathroom.webp" alt="" className="service-image" />
  }

  const generateServiceDescription = () => {
    if (selectedService === 'commercial') {
      return <p className="service-description">{commercialServiceCopy}</p>
    }

    return <p className="service-description">{residentialServiceCopy}</p>
  }

  const handleClick = (service) => {

    setSelectedService(service);
  };

  const generateServiceButtons = () => {
    let jsx = [];

    for (let service of SERVICES) {
      let isSelected = selectedService === service ? true : false;
      jsx.push(
        <li key={service} id="service-buttons-list-item">
          <button
            type="button"
            id={service}
            onClick={() => handleClick(service)}
            className={isSelected ? 'selected' : ''}
            aria-current={isSelected ?
              true :
              false
            }
          >
            {service}
          </button>
        </li>
      );
    }

    return jsx;
  }

  return (
    <section id="our-services">
      <h2>Our Services</h2>
      <div className="content-wrapper">
        {generateImage()}

        <div id="service-copy">
          <ul id="service-buttons-list">
            {generateServiceButtons()}
          </ul>

          {generateServiceDescription()}
        </div>

      </div>
    </section>
  );
}

export default ServicesWidget;