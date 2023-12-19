import "../styles/dashboard.css"

const Dashboard = () => {
    return (
        <div className="content-container dashboard-content">
            <div className="spending item"><p>Spending</p></div>
            <div className="transactions item"><p>Transactions</p></div>
            <div className="accounts item"><p>Accounts</p></div>
            <div className="upcoming item"><p>Upcoming</p></div>
        </div>
    )
};

export default Dashboard;