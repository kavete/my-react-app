import Car from './Car.js';

function Garage() {
    const carInfo = {
      name: 'Ford', model: 'Mustang'
    };
    return(
      <>
        <h1> Who lives in my garage?</h1>
        <Car brand= { carInfo} />
      </>
    );
  }

  export default Garage;