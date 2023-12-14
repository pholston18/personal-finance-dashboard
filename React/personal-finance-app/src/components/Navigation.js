
const Navigation = () => {
    return (
        <aside className="sidebar">
            <div className="sb-top-section">
            <div className="logo"><h1>Obsidian Finance</h1></div>
            <nav>
                <ul className="sb-menu">
                        <li className="sb-item"><a href="" className="sb-link">Dashboard</a></li>
                        <li className="sb-item"><a href="" className="sb-link">Spending</a></li>
                        <li className="sb-item"><a href="" className="sb-link">Budgets</a></li>
                        <li className="sb-item"><a href="" className="sb-link">Transactions</a></li>
                        <li className="sb-item"><a href="" className="sb-link">Financial Health</a></li>
                        <li className="sb-item"><a href="" className="sb-link">Statistics</a></li>
                </ul>
            </nav>
            </div>
            <div className="sb-bottom-section">
                <ul className="sb-menu">
                    <li className="sb-item"><a href="" className="sb-link">Settings</a></li>
                </ul>
                <div className="sb-quote">
                    <p>"Being rich is having money; being wealthy is having time."</p>
                    <span>Margaret Bonanno</span>
                </div>
            </div>
        </aside>
    )
};

const NavigationItem = ({icon, name, link}) => {}

export default Navigation;