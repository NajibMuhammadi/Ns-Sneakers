import CategoryFooter from '../catergoryFooter/CategoryFooter'
import CompanyFooter from '../companyFooter/CompanyFooter'
import ProductFooter from '../productFooter/ProductFooter'
import './footer.css'

function Footer({isEditProfilePage}) {
    return (
        !isEditProfilePage && (
            <div className='footer'>
                <div className='footer__content'>
                    <ProductFooter />
                    <CompanyFooter />
                    <CategoryFooter />
                </div>
            </div>
        )
    );
}

export default Footer
