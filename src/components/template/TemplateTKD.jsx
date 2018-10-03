import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import { Menu, Container, Responsive, Button , Divider, Image , Sidebar } from 'semantic-ui-react';
import FooterTKD from './FooterTKD';
const icon = "imgs/mylogo2.png";

export default class TemplateTKD extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    const { visible } = this.state

    return (
      <div>
        {/* slider */}
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          />
          <Sidebar.Pusher dimmed={visible}>
            {/* totalMenu */}
            {/* mobile */}
            <Responsive {...Responsive.onlyMobile}>     
            <Menu secondary>
              <Menu.Item compact><Button icon='bars' compact onClick={this.handleButtonClick}/></Menu.Item>
              <Menu.Item><Image src={icon} className="small" alt=""/></Menu.Item>
            </Menu>
            </Responsive>
            {/* desktop */}
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Container>        
              <Menu secondary>
                <Menu.Item><Image src={icon} className="small" alt=""/></Menu.Item>
                <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                <Menu.Item name='AboutUS' active={activeItem === 'AboutUS'} onClick={this.handleItemClick} />
                <Menu.Item name='Product' active={activeItem === 'Product'} onClick={this.handleItemClick} />
                <Menu.Menu position='right'>
                  <Menu.Item name='Register' active={activeItem === 'Register'} onClick={this.handleItemClick} />
                  <Menu.Item name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick} />
                </Menu.Menu>
              </Menu>
            </Container>
            </Responsive>
            {/* totalMenu */}
            {/* content */}
            <Divider fitted/>
            <Divider hidden/>
            <Container>
              {this.props.children}
              <Divider hidden/>
              <Divider fitted/>
            </Container>
            <FooterTKD/>
            {/* content */}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}