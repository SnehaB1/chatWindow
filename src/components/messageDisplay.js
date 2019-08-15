import React from "react";
import { Row, Col } from "antd";

class MessageDisplay extends React.Component {
  render() {
    const { message, avatar } = this.props;
    const { text, author } = message;
    return (
      <div>
        {
          author === "me"
            ?
            <Row type="flex" align="bottom" justify="end">

              <Col className="rightpanel-msg-container">
                <div className={"talk-bubble-me tri-right btm-right"}>
                  <div className="talktext">
                    <p>{text}</p>
                  </div>
                </div>
              </Col>

              <Col>
                <img className="rightpanel-image-me" height={32} width={32} src={require("../images/avatar4.png")} alt={"avatar"} />
              </Col>
            </Row>
            :
            <Row type="flex" align="top">
              <Col>
                <img className="rightpanel-image " height={32} width={32} src={avatar} alt={"avatar"} />
              </Col>
              <Col className="rightpanel-msg-container">
                <div className={"talk-bubble tri-right left-top"}>
                  <div className="talktext">
                    <p>{text}</p>
                  </div>
                </div>

              </Col>
            </Row>
        }


      </div>
    )
  }
}

export default MessageDisplay