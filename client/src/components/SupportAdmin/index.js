import React from 'react';

import { ChatEngine } from 'react-chat-engine'

const SupportAdmin = () => {
  return (
  
    <ChatEngine 
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
      userName='Program Support'
      userSecret='Hamsheena!3'
      height='calc(100vh - 12px)'
    />
  );
}

export default SupportAdmin;