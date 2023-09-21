import React, { useState } from 'react';
import axios from 'axios';

const Assistant = ({ apiKey }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAsk = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci/completions',
        {
          prompt: `Translate the following English text to French: "${input}"`,
          max_tokens: 50,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error('OpenAI API error:', error);
    }
  };

  return (
    <>x
    <div>
      <input
        type="text"
        placeholder="Ask a question or comment..."
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleAsk}>Ask</button>
      <div>Assistant's Response: {response}</div>
    </div>
    </>
  );
};

export default Assistant;
