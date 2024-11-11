import './Sidebar.css';
import { assets } from '../../assets/assets';
import { useContext, useState } from 'react';
import { Context } from '../../context/context';
import Tooltip from '@mui/material/Tooltip';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className='sidebar'>
      <div className="top">
        <Tooltip title={extended ? "Collapse" : "Expand"}>
          <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
        </Tooltip>

        <div onClick={() => newChat()} className="new-chat">
          <Tooltip title="New Chat">
            <img src={assets.plus_icon} alt="" />
          </Tooltip>
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div key={index} onClick={() => loadPrompt(item)} className="recent-entry">
                  <Tooltip title={item}>
                    <img src={assets.message_icon} alt="" />
                  </Tooltip>
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <Tooltip title="Help">
            <img src={assets.question_icon} alt="Help" />
          </Tooltip>
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <Tooltip title="Activity">
            <img src={assets.history_icon} alt="Activity" />
          </Tooltip>
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <Tooltip title="Settings">
            <img src={assets.setting_icon} alt="Settings" />
          </Tooltip>
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
