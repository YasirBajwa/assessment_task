import React from 'react';
import './index.css';
import SideGallery from './components/SideGallery/SideGallery';
import Form from './components/Form/form';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <div className='container'>
        <SideGallery/>
        <Form/>
      </div>
      <div>
      <Footer/>

      </div>
    </div>
  )
}

export default App