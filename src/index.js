import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const introduction = <p> This is my first react program. I am excited to learn all about react.</p>
// const table = (
//   <table>
//     <tr>
//       <th>Name</th>
//       <th>Field of specialization</th>
//     </tr>
//     <tr>
//       <td>Marcus Aurelius</td>
//       <td>Stoicism</td>
//     </tr>
//     <tr>
//       <td>Fredrick Neitzche</td>
//       <td>Existentialism</td>
//     </tr>
//   </table>
// )

// const myElement = (
//   <>
//     <p>Paragraph 1</p>
//     <p>Paragraph 2</p>
//   </>
// )
// let x = 65;

// const anotherElement = <h1 className='myclass'>{(x) < 10 ? '{ x } is less than 10' :'is greater or equal to 10'}</h1>;


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
root.render(
 
  // anotherElement
  // <Car color='black' />
  <Garage />
);

// root.render(myElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
