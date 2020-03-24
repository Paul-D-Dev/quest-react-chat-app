import React from 'react';
import Contact from './components/Contact';


const contact1 = {firstName: 'Leona', lastName:'Garett'};
const contact2 = {firstName: 'Glenda', lastName:'Oliver'};
const contact3 = {firstName: 'John', lastName:'Willis'};
function App() {
  return (
    <div className="App">
      <Contact name={contact1} avatar="https://randomuser.me/api/portraits/women/29.jpg" status/>
      <Contact name={contact2} avatar="https://randomuser.me/api/portraits/women/21.jpg" status/>
      <Contact name={contact3} avatar="https://randomuser.me/api/portraits/men/30.jpg"/>
    </div>
  );
}
export default App;
