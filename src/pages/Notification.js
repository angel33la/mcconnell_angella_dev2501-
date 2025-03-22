//Parent/Smart Hooks Component: Notification.js
function Notification() {
    return (
        <section style={styles.container}>
            <h1>Notification</h1>
            <p>This is the dashboard page</p>
            <p>There are many like it, but this one is mine.</p>
        </section>
    );
}

export default Notification;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
        paddingLeft: '2%'
    }
}