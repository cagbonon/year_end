import React from 'react'
import PropTypes from 'prop-types'
import "./message_history.css";

export const Message_comp = ({msg}) => {
    if (!msg)  return null;
    console.log(msg);
  return msg.map((row, i) => 
  <div key={i} className="message-history mt-3">
  <div className="send font-weight-bold text-secondary">
      <div className="sender">{row.sender}</div>
      <div className="date">{row.date}</div>
  </div>
  <div className="message">{row.message}</div>
</div>)
};

Message_comp.propTypes = {
    msg: PropTypes.array.isRequired,
} 