import React, { Component } from 'react';
import SettingsProfile from './settingsProfile/SettingsProfile';
import SettingsPassword from './settingsPassword/SettingsPassword';
import ModalDialog from '../settings/ModalDialog';


export default class Settings extends Component {
constructor(props) {
    super(props);

    this.state = {
        isOpen: false
      }

    this.toggleModal=this.toggleModal.bind(this);
}
    
    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      
    render() {
        
      return (
        <div className="settings">
            <SettingsProfile toggleModal={ this.toggleModal }/>
            <SettingsPassword />
            <ModalDialog 
                show={this.state.isOpen}
                onClose={this.toggleModal}>
            </ModalDialog>
        </div>
      );
    }
}