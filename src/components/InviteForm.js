import React from 'react';
import Button from '../components/Button';

class InviteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      name: '',
      email: '',
      completeText: '',
      completeColor: '',
    };
    this.request = this.request.bind(this);
    this.complete = this.complete.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderComplete = this.renderComplete.bind(this);
  }

  complete(success) {
    let completeColor = '#dd637e';
    let completeText = 'Error Making Request';
    if (success) {
      completeColor = '#42c8c5';
      completeText = 'Request Received';
    }
    this.setState({ complete: true, completeColor, completeText });
  }

  request(e) {
    e.preventDefault();
    const email = this.state.email;
    const name = this.state.name;
    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    fetch('/invites/backend/add.php', {
      method: 'POST',
      body: formData,
      mode: 'cors',
    })
      .then(res => {
        if (res.status === 200) this.complete(true);
        else this.complete(false);
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderComplete() {
    return (
      <Button
        primary
        style={{
          backgroundColor: this.state.completeColor,
          transform: 'none',
          cursor: 'default',
          boxShadow: 'none',
        }}
      >
        {this.state.completeText}
      </Button>
    );
  }

  handleChange(field, e) {
    const newState = {};
    newState[field] = e.target.value;
    this.setState(newState);
  }

  renderForm() {
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          <input
            onChange={this.handleChange.bind(this, 'name')}
            key={'name'}
            style={{ marginRight: 20 }}
            value={this.state.name}
            type="text"
            placeholder="School"
          />
          <input
            onChange={this.handleChange.bind(this, 'email')}
            key={'email'}
            type="text"
            value={this.state.email}
            placeholder="Email"
          />
        </div>
        <Button
          onClick={this.request}
          style={{
            display: 'inline-block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          primary
        >
          Request Invite
        </Button>
      </form>
    );
  }

  render() {
    if (this.state.complete) {
      return this.renderComplete();
    } else {
      return this.renderForm();
    }
  }
}

export default InviteForm;
