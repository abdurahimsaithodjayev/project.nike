import React from 'react'
import HeaderNav from './HeaderNav'
import HeaderBox from './HeaderBox'
import Products from './Products'
import QualityBox from './QualityBox'
import AboutUs from './AboutUs'
import SpecialOffer from './SpecialOffer'
import CustomerSay from './CustomerSay'
import SingUp from './SingUp'
import Footer from './Footer'
function Layout() {
  return (
    <div>
       <header>
        <nav>
            <HeaderNav />
        </nav>
      
       </header>
<main>
  <HeaderBox />
  <Products />
  <QualityBox />
  <AboutUs />
  <SpecialOffer />
  <CustomerSay />
  <SingUp />
  <Footer />
</main>
      
    </div>
  )
}

export default Layout
