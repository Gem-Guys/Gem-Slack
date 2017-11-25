import React from 'react';
import MessageList from './MessageList.jsx';
import DirectMessageList from './DirectMessageList.jsx';
import Input from './Input.jsx';





class Chat extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
       <buttonsInstance/>
        <div className="row">
          <div className="col-sm-3">
            <DirectMessageList data={this.props.data} changeCurrentRoom={this.props.changeCurrentRoom} changeView={this.props.changeView}/>
          </div>
          <div className="col-sm-9">
            <MessageList data={this.props.data}/>
            <Input sendMessage={this.props.sendMessage}/>
          </div>
        </div>
      </div>
    )
    }
}

export default Chat;