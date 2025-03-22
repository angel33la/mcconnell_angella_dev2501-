//Parent/Smart Hooks Component: Dashboard.js
function Dashboard() {
        return (
            <section style={styles.container}>
                <h1>Dashboard</h1>
                <p>This is the dashboard page</p>
                <p>There are many like it, but this one is mine.</p>
            </section>
        );
    }

    export default Dashboard;

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '99vh',
            paddingLeft: '2%'
        }
    }