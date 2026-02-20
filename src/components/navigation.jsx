import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
    const location = useLocation()

    const navItems = [
        {name: 'Home', path: '/my_portfolio_v3/'},
        {name: 'Skills', path: '/my_portfolio_v3/skills'},
        {name: 'Projects', path: '/my_portfolio_v3/projects'},
        {name: 'Experiences', path: '/my_portfolio_v3/experiences'},
        {name: 'Contacts', path: '/my_portfolio_v3/contacts'},
    ]

    return (
       <nav className="navbar navbar-expand-lg sticky-top mb-0 border-bottom">
            <div className="container pb-2 pt-2">
                <Link to="/" className="navbar-brand fw-bold">
                    My Portfolio
                </Link>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navItems.map((item) => (
                            <li key={item.path} className="nav-item mx-2">
                                <Link
                                    to={item.path}
                                    className={`nav-link fw-medium ${
                                        location.pathname === item.path ? 'active text-primary' : ''
                                    }`}
                                    style={{
                                        ...(location.pathname === item.path ? { color: '#50aff2' } : {})
                                    }}
                                    aria-current={location.pathname === item.path ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}