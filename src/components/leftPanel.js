import React from "react";
import { Row, Col } from "antd";

class LeftPanel extends React.Component {
  render() {
    const { chat, active } = this.props;
    const { name, time, messages, image, id } = chat;


    return (
      <div className="leftpanel-section" style={active === id ? { backgroundColor: "#AEACAC" } : null}>
        <Row align="middle">
          <Col sm={24} md={8} lg={4}>
            <img className="leftpanel-image" height={32} width={32} src={image} alt={"avatar"} />
          </Col>

          <Col sm={24} md={16} lg={20}>
            <Row type={"flex"} justify="space-between">
              <Col xs={0} md={16} lg={20}>
                <div className="leftpanel-name">
                  {name}
                </div>
              </Col>
              <Col xs={0} sm={0} md={0} lg={4}>
                <div className="leftpanel-time">
                  {time}
                </div>
              </Col>

            </Row>
            <Row>
              <Col xs={0} sm={24}>
                <div className={"leftpanel-message"}>
                  {messages[Object.keys(messages).sort().pop()].text}
                </div>
              </Col>


            </Row>

          </Col>
        </Row>
      </div>

    )
  }
}

export default LeftPanel