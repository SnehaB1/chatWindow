import React from "react";
import { connect } from "react-redux";
import { Row, Col, Input, Icon } from "antd";
import { LeftPanel, RightPanel } from "../../components";
import "../style.css";
import { updateStore } from "../../actions";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      activeChat: this.props.activeChat
    }
  }

  updateState = (id, message) => {
    const { updateStore, activeChat } = this.props;

    Object.keys(activeChat).map((index) => {
      if (activeChat[index].id === id) {
        const temp = activeChat[index];
        temp.messages.push({ "author": "me", "text": message });
        return updateStore(temp)
      }
      return false
    })
  }

  componentDidMount() {
    this.updateState();
  }

  handleSearch(text) {
    const { activeChat } = this.props;

    var matches = {}
    Object.keys(activeChat).map((key) => {
      for (var i = 0; i < Object.keys(activeChat).length; i++) {

        if (activeChat[key].name.toLowerCase().indexOf(text) > -1) {
          return matches[Object.keys(matches).length] = activeChat[key]
        }
      }
    })
    // console.log(matches[0].id)
    if (Object.keys(matches).length === 0) this.setState({ activeChat: activeChat, active: 0 })
    else this.setState({ activeChat: matches });

  }

  render() {
    // const { activeChat } = this.props;
    const { active, activeChat } = this.state;

    return (
      <Row>
        <Col span={6}>
          <div className="leftpanel-container">
            <div className="leftpanel-search-container">
              <Input
                placeholder="Search"
                className="leftpanel-search"
                onChange={(e) => this.handleSearch(e.target.value)}
                prefix={<Icon type="search" style={{ color: '#A6A6A9' }} />}
              />
            </div>
            <div className="leftpanel-outer">
              {
                activeChat && Object.keys(activeChat).map((index) =>
                  <div onClick={() => this.setState({ active: activeChat[index].id })} key={activeChat[index].id}>
                    <LeftPanel chat={activeChat[index]} key={activeChat[index].id} active={active} />
                  </div>
                )

              }
            </div>
          </div>

        </Col>
        <Col span={18}>
          <div>
            <RightPanel data={activeChat[active]} onSend={this.updateState} />
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  const { activeChat } = state;

  return {
    activeChat
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStore: (data) => dispatch(updateStore(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
