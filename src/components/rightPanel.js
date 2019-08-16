import React from "react";
import { Row, Input, Icon } from "antd";
import MessageDisplay from "./messageDisplay";

class RightPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ""
    }
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  onSubmit() {
    const { onSend, data } = this.props;
    const { message } = this.state;
    if (message !== "") {
      onSend(data.id, message)
      this.setState({ message: "" })
    }
  }

  render() {
    const { data } = this.props;
    const { message } = this.state;
    const { image, name, messages } = data;

    return (
      <div>
        <Row type="flex" align="middle" className="rightpanel-header">
          <img className="rightpanel-image" height={32} width={32} src={image} alt={"avatar"} />
          <div className="rightpanel-header-name">
            {name}
          </div>
        </Row>
        <div className="rightpanel-message">
          {
            Object.keys(messages).map((index, key) =>
              <MessageDisplay message={messages[index]} key={key} avatar={image} />
            )
          }
          <div style={{ float: "left", clear: "both" }}
            ref={(el) => { this.messagesEnd = el; }}>
          </div>
        </div>
        <Row align="bottom" type="flex" justify="center">
          <Input
            className="rightpanel-input"
            value={message}
            onChange={(e) => this.setState({ message: e.target.value })}
            onPressEnter={() => this.onSubmit()}
            prefix={<Icon type="edit" className="rightpanel-text-icon" />}
            suffix={<Icon type="right-circle" theme="filled" onClick={() => this.onSubmit()} className="rightpanel-text-send" />}
          />
        </Row>
      </div>
    )
  }
}

export default RightPanel;