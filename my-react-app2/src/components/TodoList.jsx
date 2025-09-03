
const TodoList = () => {
  // กำหนดข้อมูลเป็น 1 อาทิตย์
  const weekTodos = [
    {
      day: 'Sunday',
      color: '#FF9999',
      tasks: [
        { id: 1, text: 'ส่งการบ้าน XAI-pneumonia.ipynb', completed: true },
        { id: 2, text: 'ซักผ้า', completed: true },
      ],
    },
    {
      day: 'Monday',
      color: '#FCF695',
      tasks: [
        { id: 3, text: 'ทำงาน react', completed: true },
        { id: 4, text: 'ทบทวน ROS2', completed: true },
        { id: 5, text: 'ออกกำลังกาย', completed: false },
      ],
    },
    {
      day: 'Tuesday',
      color: '#FFC2D1',
      tasks: [
        { id: 6, text: 'ส่งงาน ROS2', completed: true },
        { id: 7, text: 'ทำงาน react', completed: false },
      ],
    },
    {
      day: 'Wednesday',
      color: '#BEE3BA',
      tasks: [
        { id: 8, text: 'ส่งงาน my-react-app', completed: true },
        { id: 9, text: 'ทบทวนการใช้ go', completed: false },
        { id: 10, text: 'ออกกำลังกาย', completed: true },
      ],
    },
    {
      day: 'Thursday',
      color: '#FFD1AD',
      tasks: [
        { id: 11, text: 'ศึกษาเกี่ยวกับ project befe', completed: false },
        { id: 12, text: 'ทบทวน ROS2', completed: false },
      ],
    },
    {
      day: 'Friday',
      color: '#C0E4F6',
      tasks: [
        { id: 13, text: 'ออกกำลังกาย', completed: false },
        { id: 14, text: 'ทบทวน frontend', completed: false },
        { id: 15, text: 'ฝึกเขียน react app', completed: false },
      ],
    },
    {
      day: 'Saturday',
      color: '#E7DCFC',
      tasks: [
        { id: 16, text: 'อ่านหนังสือเตรียมสอบ AI', completed: false },
        { id: 17, text: 'ออกกำลังกาย', completed: false },
      ],
    },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px' }}>
      <h2>📅 Todo List </h2>

      {weekTodos.map((dayItem, index) => {
        const completedCount = dayItem.tasks.filter((t) => t.completed).length;
        const totalCount = dayItem.tasks.length;
        const percentage = Math.round((completedCount / totalCount) * 100);

        return (
          <div
            key={index}
            style={{
              marginBottom: '30px',
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              backgroundColor: dayItem.color,
            }}
          >
            <h3>{dayItem.day}</h3>

            {/* Progress Bar */}
            <div
              style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '20px',
                padding: '3px',
                margin: '10px 0',
              }}
            >
              <div
                style={{
                  backgroundColor: '#4caf50',
                  width: `${percentage}%`,
                  textAlign: 'center',
                  borderRadius: '17px',
                  padding: '5px 0',
                  color: 'white',
                  fontWeight: 'bold',
                  transition: 'width 0.3s ease',
                }}
              >
                {percentage}%
              </div>
            </div>

            {/* Tasks */}
            {dayItem.tasks.map((todo) => (
              <div
                key={todo.id}
                style={{
                  padding: '10px',
                  margin: '6px 0',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                }}
              >
                <span style={{ marginRight: '10px', fontSize: '18px' }}>
                  {todo.completed ? '✅' : '⬜'}
                </span>
                <span
                  style={{
                    flex: 1,
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#666' : '#333',
                  }}
                >
                  {todo.text}
                </span>
              </div>
            ))}

            {/* Summary */}
            <div
              style={{
                marginTop: '10px',
                textAlign: 'center',
                padding: '10px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold',
              }}
            >
              ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} งาน
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;