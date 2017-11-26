import React from 'react';
import DirectMessage from './DirectMessage.jsx';

class DirectMessageList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div  className="dm-div">
        <div className="gem-slack">GEM SLACK</div>
        <div>{this.props.data.username}</div>
       <div onClick={() => this.props.changeView('newDirectMessage')} className="direct-message-title">Direct Messages</div>
       <ul className="list-unstyled">
         {
           this.props.data.myRooms.map(room => {
             return <DirectMessage room={room} changeCurrentRoom={this.props.changeCurrentRoom}/>
           })
         }
       </ul>
      </div>
    )
  }
}

export default DirectMessageList;