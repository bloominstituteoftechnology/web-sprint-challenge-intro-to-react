import { Link } from 'react-router-dom';


const PageNav = ({dashboard, socialspread, academy, business, entertainment, news, health, leisure}) => {
    return (
        <div className="main-nav-container">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/characters">Characters</Link></li>
                <li><Link to="/planets">Planets</Link></li>
                <li><Link to="/films">Films</Link></li>
                <li><Link to="/species">Species</Link></li>
                <li><Link to="/vehicles">Vehicles</Link></li>
                <li><Link to="/starships">Starships</Link></li>
            </ul>
        </div>
    )
}

export default PageNav