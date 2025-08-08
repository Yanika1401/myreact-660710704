import React from 'react';

// === JSX Examples - มาดูตัวอย่างการใช้ JSX กัน ===

function JSXExamples() {
    // 1. JSX พื้นฐาน - เหมือน HTML แต่อยู่ใน JavaScript
    const greeting = <h1>🍁 Hello! welcome to my React!</h1>;
    
    // 2. ใช้ JavaScript Variables ใน JSX
    const name = 'ญานิกา';
    const age = 20;
    
    // 3. JavaScript Expressions ใน JSX (ใส่ใน {})
    const currentYear = new Date().getFullYear();
    
    // 4. เตรียมข้อมูลสำหรับ render
    const user = {
        firstName: 'ญานิกา',
        lastName: 'มูลพวก',
        age: 20,
        hobbies: ['ฟังเพลง', 'ดูยูทูป', 'อ่านนิยาย']
    };
    
    // 5. Function ที่ return JSX
    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    };
    
    // 6. Conditional Rendering
    const isLoggedIn = true;
    const hasNotification = 3;
    
    return (
        <div className="jsx-examples">
            <h1>ตัวอย่างการใช้ JSX</h1>
            
            {/* === 1. การแสดงผลข้อมูลพื้นฐาน === */}
            <section>
                <h2>📝 การแสดงผลข้อมูล</h2>
                {greeting}
                <p>สวัสดีคุณ {name} อายุ {age} ปี</p>
                <p>ปีนี้คือปี {currentYear}</p>
                <p>ชื่อเต็ม: {formatName(user)}</p>
            </section>
            
            {/* === 2. การใช้ Attributes === */}
            <section>
                <h2>🎨 Attributes ใน JSX</h2>
                {/* ใช้ className แทน class */}
                <div className="card">
                    <p className="text-primary">Silpakorn University</p>
                </div>
                
                {/* camelCase attributes */}
                <button 
                    onClick={() => alert('Yes! Click completed')}
                    onMouseEnter={() => console.log('mouse entry!')}
                >
                    Hover หรือ Click ดู
                </button>
                
                {/* style attribute รับ object */}
                <div style={{
                    backgroundColor: '#FFE4E1',
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '10px'
                }}>
                    <p style={{ color: '#FA8072', fontWeight: 'bold' }}>
                        Inline styles ใช้ object
                    </p>
                </div>
            </section>
            
            {/* === 3. Conditional Rendering === */}
            <section>
                <h2>🔀 Conditional Rendering</h2>
                
                {/* ใช้ ternary operator */}
                <p>
                    สถานะ: {isLoggedIn ? '✅ ล็อกอินแล้ว' : '❌ ยังไม่ได้ล็อกอิน'}
                </p>
                
                {/* ใช้ && operator */}
                {hasNotification > 0 && (
                    <div className="notification">
                        🔔 คุณมี {hasNotification} การแจ้งเตือนใหม่
                    </div>
                )}
                
                {/* ใช้ if-else ผ่าน function */}
                {(() => {
                    if (user.age >= 18) {
                        return <p>✅ {formatName(user)} เป็นผู้ใหญ่แล้ว</p>;
                    } else {
                        return <p>👶 {formatName(user)} ยังเป็นเด็ก</p>;
                    }
                })()}
            </section>
            
            {/* === 4. Lists และ Keys === */}
            <section>
                <h2>📋 การแสดงผล Lists</h2>
                <h3>งานอดิเรกของ {user.firstName}:</h3>
                <ul>
                    {user.hobbies.map((hobby, index) => (
                        <li key={index}>
                            {index + 1}. {hobby}
                        </li>
                    ))}
                </ul>
                
                {/* ตัวอย่างที่ซับซ้อนขึ้น */}
                <div className="product-list">
                    <h3>รายการสินค้า</h3>
                    {[
                        { id: 1, name: 'ชุดสุนัข', price: 520, inStock: true },
                        { id: 2, name: 'ปลอกคอสุนัข', price: 250, inStock: true },
                        { id: 3, name: 'อาหารสุนัข', price: 200, inStock: false }
                    ].map(product => (
                        <div key={product.id} className="product-item">
                            <span>🐶{product.name}</span>
                            <span> - ฿{product.price.toLocaleString()}</span>
                            <span className={product.inStock ? 'in-stock' : 'out-stock'}>
                                {product.inStock ? ' ✅ มีสินค้า' : ' ❌ สินค้าหมด'}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* === 5. Fragment === */}
            <section>
                <h2>🧩 React Fragment</h2>
                <p>ใช้เมื่อไม่ต้องการ wrapper element:</p>
                {/* Fragment แบบเต็ม */}
                <React.Fragment>
                    <h3>📝My bucket list</h3>
                    <p>Learn more language</p>
                </React.Fragment>
                
                {/* Fragment แบบย่อ */}
                <>
                    <h3>🧳Travel list</h3>
                    <p>Go to Japan!!</p>
                </>
            </section>
            
            {/* === 6. การจัดการ Events === */}
            <section>
                <h2>🎯 Event Handling ใน JSX</h2>
                <input 
                    type="text" 
                    placeholder="พิมพ์อะไรก็ได้..."
                    onChange={(e) => console.log('พิมพ์:', e.target.value)}
                />
                
                <select onChange={(e) => alert(`เลือก: ${e.target.value}`)}>
                    <option value="">-- เลือกภาษา --</option>
                    <option value="Thai">Thai</option>
                    <option value="English">English</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Korean">Korean</option>
                    <option value="Chinese">Chinese</option>
                </select>
            </section>

            <section>
                <h2>💬 Comments ใน JSX</h2>
                <p>Comment ใน JSX ต้องอยู่ในเครื่องหมาย curly braces</p>
                {
                    // นี่คือ comments ใน JSX คุณสามารถพิมพ์อะไรก็ได้
                }
                <p>Comment ข้างบนจะไม่แสดงในหน้าเว็บ</p>
            </section>
        </div>
    );
}

export default JSXExamples;
