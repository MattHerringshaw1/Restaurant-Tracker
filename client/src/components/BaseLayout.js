
import Footer from './Footer'
import Menu from './Menu'
import '../styles/stylesheet.css'

function BaseLayout(props) {
    return (
        <div>
            <div>
                <Menu />
            </div>
                {props.children}
            <div className='footer' >
                <Footer />
            </div>
        </div>
    )
}


export default BaseLayout