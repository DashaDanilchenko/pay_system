import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="container">
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="cards">Cards</NavLink>
            <NavLink to="contrAgents">Contr Agents</NavLink>
            <NavLink to="history">History</NavLink>
        </nav>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout