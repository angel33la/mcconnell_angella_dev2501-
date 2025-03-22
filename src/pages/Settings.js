//Parent/Smart Hooks Component: Settings.js
function Settings() {
    return (
        <section style={styles.container}>
            <h1>Settings</h1>
            <p>This is the dashboard page</p>
            <p>There are many like it, but this one is mine.</p>
        </section>
    );
}

export default Settings;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
        paddingLeft: '2%'
    }
}