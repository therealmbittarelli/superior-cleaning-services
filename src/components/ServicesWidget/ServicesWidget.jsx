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

// Data
import data from '../../data/our-services.json';

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

  const generateImage = () => {
    if (selectedService === 'commercial') {
      return <img src="/uploads/commercial.webp" alt="" className="service-image" />
    }

    return <img src="/uploads/residential.webp" alt="" className="service-image" />
  }

  const generateServiceDescription = (selectedService) => {
    let jsx = [];

    for (let i = 0; i < data[selectedService].length; i++) {
      jsx.push(
        <li key={`${selectedService}-${i}`} className="service-description-item">
          {data[selectedService][i]}
        </li>
      )
    }

    return jsx;
  }

  const generateServiceButtons = () => {
    let jsx = [];

    for (let service of SERVICES) {
      let isSelected = selectedService === service ? true : false;
      jsx.push(
        <li key={service} id="service-buttons-list-item">
          <button
            type="button"
            id={service}
            onClick={() => setSelectedService(service)}
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
      {/* <h2>{data.heading}</h2> */}
      <p id="services-subheading">{data.subheading}</p>
      <div className="content-wrapper">
        <ul id="service-buttons-list">
          {generateServiceButtons()}
        </ul>

        <div id="service-copy">
          {generateImage()}

          <ul className="service-description-list">
            {generateServiceDescription(selectedService)}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default ServicesWidget;