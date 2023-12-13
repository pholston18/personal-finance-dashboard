
const Navigation = () => {
    return (
        <aside className="sidebar">
            <div className="logo">Obsidian Finance</div>
            <nav>
                <ul className="sb-menu">
                    <div className="sb-item-container">
                        <li className="sb-item"><a href="" className="sb-link">Dashboard</a></li>
                        <li className="sb-item"><a href="" className="sb-link">Spending</a></li>
                        <li className="sb-item"><a href="" className="sb-link">Budgets</a></li>
                        <li className="sb-item"><a href="" className="sb-link">Transactions</a></li>
                        <li className="sb-item"><a href="" className="sb-link">Financial Health</a></li>
                        <li className="sb-item"><a href="" className="sb-link">Statistics</a></li>
                    </div>
                </ul>
            </nav>
            <div className="aside-items">
                <div className="sb-item-container">
                    <li className="sb-item"><a href="" className="sb-link">Settings</a></li>
                </div>
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