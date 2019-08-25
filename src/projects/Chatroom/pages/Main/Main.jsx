import React from 'react';
import { useState } from 'react';
import styles from './Main.module.sass';

// import 'emoji-mart/css/emoji-mart.css';
// import { Picker } from 'emoji-mart';

import PreSelect from '../../layout/PreSelect/PreSelect';
import Lobby from '../../layout/Lobby/Lobby';

const Main = () => {
  document.title = 'VS Code 聊天室';
  const [chatType, setChatType] = useState('');
  const [chatRoomType, setChatRoomType] = useState('1to1');
  const [selfName, setSelfName] = useState('bcjohn');

  return (
    <div className={styles.main}>
      {chatRoomType ? (
        <Lobby selfName={selfName} />
      ) : (
        <PreSelect
          chatType={chatType}
          setChatType={setChatType}
          chatRoomType={chatRoomType}
          setChatRoomType={setChatRoomType}
          selfName={selfName}
          setSelfName={setSelfName}
        />
      )}
    </div>
  );
};

export default Main;
