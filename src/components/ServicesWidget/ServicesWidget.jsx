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
      return <img src="/" alt="" />
    }

    return <img src="/" alt="" />
  }

  return (
    <section>
      {generateImage()}

      <div>
        <ul>
          <li>
            <button type="button" onClick={() => setSelectedService('residential')}>
              Residential
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setSelectedService('residential')}>
              Commercial
            </button>
          </li>
        </ul>

      </div>
    </section>
  );
}

export default ServicesWidget;