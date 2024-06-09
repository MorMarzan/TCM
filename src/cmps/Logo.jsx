import { useNavigate } from "react-router-dom"
import logo from '/images/favicon.png'

export function Logo() {

    const navigate = useNavigate()

    return (
        <div className="logo">
            <img src={logo}></img>
            <h1 onClick={() => navigate('/')}>Taking Care of Myself</h1>
        </div>
    )
}
