import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import TextField from 'material-ui/TextField';
import API from '../../API/API'

export default class LoginWindow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      submitDisabled: true,
    };
    this.username = "";
    this.password = "";
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkSubmitButton(){
    if(this.username != "" && this.password != ""){
      this.setState({submitDisabled: false})
    }
    else {
      this.setState({submitDisabled: true})
    }

  }

  handleSubmit(){
    /*API.login(this.username,this.password).then(response => {
        if(response.respone = "true"){
          this.props.autenticate();
          this.props.handleClose();
        }
    });*/
    this.props.autenticate();
    this.props.handleClose();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={this.state.submitDisabled}
        onClick={this.handleSubmit}
      />,
    ];
    return (
      <div>
        <Dialog
          title={"Login"}
          actions={actions}
          modal={true}
          open={this.props.open}
        >
        <TextField
          hintText="Username"
          floatingLabelText="Username"
          onChange={(e) => {
            this.username = e.target.value
            this.checkSubmitButton();
          }}/>
          <br />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          onChange={(e) => {
            this.password = e.target.value;
            this.checkSubmitButton();
          }}
        />
        </Dialog>
      </div>
    );
  }
}
