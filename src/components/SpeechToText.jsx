import { useEffect, useRef, useState } from 'react';

const SpeechToText = ({ setInput, continuous = true, lang = 'en-US', interimResults = true }) => {
  const [isListening, setIsListening] = useState(false);
  //const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      console.error('Web speech API is not supported.');
      return;
    }

    recognitionRef.current = new window.webkitSpeechRecognition();
    const recognition = recognitionRef.current;
    recognition.interimResults = interimResults // || true ;
    recognition.lang = lang || 'en-US';
    recognition.continuous = continuous //|| true;

    recognition.onresult = (event) => {
      let text = '';
      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setInput(text);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [continuous,lang,interimResults,setInput]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      //setInput(' ');
    }
  };

  return { isListening, startListening, stopListening };
};

export default SpeechToText;
