import React, { useState } from 'react';

const TabBar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabTitles = ['Home', 'Skill', 'Contact'];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tap">
        {tabTitles.map((title, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
          >
            {title}
          </div>
        ))}
      </div>
      <div className='word'>
        {/* Content for the active tab */}
        {activeTab === 0 && 
        <div className='real-word'>Welcome Home<br/>
        <div className='message'>하고싶은 말</div>
        </div>}


        {activeTab === 1 && 
        <div className='real-word1'>Deep Copy, Shallow Copy 에 대해서<br/><br/><br/>
        얕은 복사는 객체의 참조값(주소 값)을 복사하고, 깊은 복사는 객체의 실제 값을 복사한다.<br/>
       <div className='space-btween'>
       <div className='copy1'>
        원시 타입의 깊은 복사<br/>
        let a = '원본 데이터';<br/>
        let b = a;<br/><br/>

        a = '수정 데이터';<br/><br/>

        console.log(a); // '수정 데이터'<br/>
        console.log(b); // '원본 데이터'<br/>

        </div>
        <div className='copy2'>
        참조 타입의 얕은 복사<br/>
        let a = {'{name: "원본 데이터"};'};<br/>
        let b = a;<br/><br/>

        a.name = '수정 데이터';<br/><br/>

        console.log(a); // '수정 데이터'<br/>
        console.log(b); // '수정 데이터'<br/>

        </div>
        </div>
        </div>
        }


        {activeTab === 2 && <div className='real-word'>kimys9295@gmail.com</div>}
      </div>
    </div>
  );
};

export default TabBar;