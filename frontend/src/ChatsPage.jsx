import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

import PropTypes from "prop-types";
const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
    <PrettyChatWindow
      projectId="ac3cc447-0ea9-4e0c-a6e1-09ad72da5155"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100%' }}
    />
    </div>
  );
};

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

// projectId=ac3cc447-0ea9-4e0c-a6e1-09ad72da5155
// username={props.user.username}
// secret={props.user.secret}
export default ChatsPage;
