
import Menu from './Menu'

function BaseLayout(props) {
    return (
        <>
            <Menu />
            {props.children}
        </>
    )
}


export default BaseLayout