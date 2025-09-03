
// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="/86a250d94f5899122bb8e85ede565161.jpg" 
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            border: '2px solid #667eea'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#667eea', margin: '10px 0' }}>
        Yanika Moonpuak
    </h3>
);

const UserBio = () => (
    <div>
        <p style={{ color: '#666', fontSize: '14px' }}>
            ญานิกา มูลพวก
        </p>
        <p style={{ color: '#666', fontSize: '14px' }}>
            คณะวิทยาศาสตร์
        </p>
        <p style={{ color: '#666', fontSize: '14px' }}>
            สาขาเทคโนโลยีสารสนเทศ
        </p>
        <p style={{ color: '#666', fontSize: '14px' }}>
            ありがとう
        </p>
  </div>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#CfE0EB',
            maxWidth: '300px',
            margin: '10px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;
