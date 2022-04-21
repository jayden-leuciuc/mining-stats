import React from 'react';

import Pools from '../../components/Pools/Pools.component';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';

function PoolsPage() {
  return (
    <div className='page-container'>
      <Header />
      <Pools />
      <Footer />
    </div>
  );
}
export default PoolsPage;
