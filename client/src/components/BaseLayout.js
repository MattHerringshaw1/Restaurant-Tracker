
import Footer from './Footer'
// import NavScrollExample from './MenuBootstrap'
import '../styles/stylesheet.css'
import Menu from './Menu'

function BaseLayout(props) {
    return (
        <div>
                <Menu />
                {props.children}
                <Footer />
        </div>
    )
}


export default BaseLayout