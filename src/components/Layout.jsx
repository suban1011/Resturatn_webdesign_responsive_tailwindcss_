
import Header from './Header'
import Footer from './Footer'
import Testimonals from './Testimonals'
import PopularCategory from './PopularCategory'
import SpecialDishes from './SpecialDishes'
import Services from './Services'
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <PopularCategory />

            <SpecialDishes />
            <Services />
            <Testimonals />
            <Footer />
        </>
    )
}

export default Layout
