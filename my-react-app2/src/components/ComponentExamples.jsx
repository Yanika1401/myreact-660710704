import Clock from './Clock';
import Greeting from './Greeting';
import TodoList from './TodoList';
import UserCard from './UserCard';
import Welcome from './Welcome';

function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#667eea',
                marginBottom: '40px'
            }}>
                My React Components
            </h1>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <Welcome />
                <Greeting />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    Component with Logic
                </h2>
                <Clock />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '10px',
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    About Me
                </h2>
                <UserCard />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #FFE4E1',
                borderRadius: '8px',
                backgroundColor: '#FFE4E1'
            }}>
                <TodoList />
            </section>
        </div>
    );
}

export default ComponentExamples;