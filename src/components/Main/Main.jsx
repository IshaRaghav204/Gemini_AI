import  { useEffect,useContext,useRef} from 'react';
import SpeechToText from "../SpeechToText";
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';
import Tooltip from '@mui/material/Tooltip';


const Main = () => {
      
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  const { isListening, transcript, startListening, stopListening } = SpeechToText({continuous:true , setInput})
  const inputRef = useRef(null);


  
  const handleMicClick = () => {
    if (isListening) {
      stopListening();
      //setInput(transcript);

    } else {
        setInput(' ');
      startListening();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default Enter behavior
      if (input || transcript) {
        onSent();  // Send the question when Enter is pressed
        setInput(' ');  // Clear input after sending
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.selectionStart = inputRef.current.value.length; // Move caret to end
      inputRef.current.selectionEnd = inputRef.current.value.length; 
      
    }
    }, [isListening,transcript]);
    
  
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <Tooltip title="User profile">
        <img src={assets.user_icon} alt="" />
        </Tooltip>
      </div>
      <div className="main-container">
        {!showResult
          ? <>
            <div className="greet">
              <p><span>Hello, Dev.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => setInput("Suggest beautiful places to visit on upcoming trip")}>
                <p>Suggest beautiful places to visit on upcoming trip</p>
                <Tooltip title="Explore places">
                <img src={assets.compass_icon} alt="" />
                </Tooltip>
              </div>
              <div className="card" onClick={() => setInput("Briefly summarize this concept: urban planning")}>
                <p>Briefly summarize this concept: urban planning</p>
                <Tooltip title="Urban planning">
                <img src={assets.bulb_icon} alt="" />
                </Tooltip>
              </div>
              <div className="card" onClick={() => setInput("Brainstorm team bonding activities for our retreat")}>
                <p>Brainstorm team bonding activities for our retreat</p>
                <Tooltip title="Team bonding">
                <img src={assets.message_icon} alt="" />
                </Tooltip>
              </div>
              <div className="card" onClick={() => setInput("Improve the readability of the following code")}>
                <p>Improve the readability of the following code</p>
                <Tooltip title="Improve Code">
                <img src={assets.code_icon} alt="" />
                </Tooltip>
              </div>
            </div>
          </>
          : <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
                ? <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>
          </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input
            ref={inputRef}
              onChange={(e) => setInput(e.target.value)}
              value={input|| transcript}
              type="text"
              placeholder='Enter a prompt here'
              onKeyDown={handleKeyDown}
            />
            <div>
            <Tooltip title={isListening ? 'Stop Listening' : 'Start Listening'}>
                <img
                  src={assets.mic_icon}
                  alt="Mic"
                  onClick={handleMicClick}
                  className={isListening ? 'mic_icon listening' : 'mic_icon'}
                  style={{ cursor: 'pointer' }}
                />
                </Tooltip>
                {(input || transcript) && !isListening && (
                <Tooltip title="Send">
                  <img onClick={() => {
                    onSent();
                    setInput(' ');

                  }} src={assets.send_icon} alt="Send" />
                </Tooltip>
              )}
                
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};


export default Main;
