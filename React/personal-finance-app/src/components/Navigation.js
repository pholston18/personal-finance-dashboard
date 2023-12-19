import "../styles/navigation.css"

const Navigation = () => {
    return (
        <aside className="sidebar">
            <div className="sb-top-section">
            <div className="logo"><h1>Obsidian Finance</h1></div>
            <hr />
            <nav>
                <ul className="sb-menu">
                        <li><a href="./" className="sb-link">Dashboard</a></li>
                        <li><a href="./spending" className="sb-link">Spending</a></li>
                        <li><a href="./budgets" className="sb-link">Budgets</a></li>
                        <li><a href="./transactions" className="sb-link">Transactions</a></li>
                        <li><a href="./financial-health" className="sb-link">Financial Health</a></li>
                        <li><a href="./statistics" className="sb-link">Statistics</a></li>
                </ul>
            </nav>
            </div>
            <div className="sb-bottom-section">
                <ul className="sb-menu">
                    <li><a href="./settings" className="sb-link">Settings</a></li>
                </ul>
                <hr />
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