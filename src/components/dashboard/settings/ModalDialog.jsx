import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Settings.css';
import {connect} from "react-redux";
import { uploadPhoto, showPhoto, settingsInput } from "../../../action/settingsActions";

import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import avatar from '../../../assets/img/avatar.png';

class ModalDialog extends Component {
    constructor(props) {
        super(props);

    }
    _crop(){
        // image in dataUrl
       //console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
      }

      componentWillMount() {
        this.props.settingsInput(this.props.user.image,"image");
      }

    render() {
        if(!this.props.show) {
            return null;
        }
        const { image } = this.props.state;
        console.log(image);

      return (
        <div className="backdrop">
        <div className="modal">
          {this.props.children}
          <Cropper
            ref='cropper'
            src={` https://${image}`}
            // src={ avatar }
            style={{height: 400, width: '100%'}}
            // Cropper.js options
            aspectRatio={4 / 4}
            guides={false}
            crop={this._crop.bind(this)} /> 
            <div className="footer">
                <button onClick={this.props.onClose}>
                Close
                </button>
            </div>
        </div>
      </div>
      );
    }
}

ModalDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

const mapStateToProps=(state)=>{
    return{
        state:state.settingsReducer.settings,
        user:state.reducer.user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        settingsInput:(val,nameInput)=>{
            dispatch(settingsInput(val,nameInput))
        },
        uploadPhoto:(photo)=>{
            dispatch(uploadPhoto(photo))
        },
        showPhoto:(photo)=>{
            dispatch(showPhoto(photo))
        }
    }
  }
  export default connect (mapStateToProps, mapDispatchToProps)(ModalDialog)