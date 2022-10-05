import React from 'react'
import Footer from './components/molecules/Nav/Footer';
import Header from './components/molecules/Nav/Header';

const StandardPageLayout = ({children}) => {

  return ( 
    <div>
      <Header />
      <div className='flex flex-col min-h-screen'>
        {children}
      </div>
      <Footer />
    </div>
   );
}
 
export default StandardPageLayout;