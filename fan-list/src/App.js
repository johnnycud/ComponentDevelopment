import React from 'react'
import api from './test/stubAPI'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import buttons from './config/buttonsConfig'

    class FanForm extends React.Component {
      render() {
        return (
          <tr>
            <td>
            <input type="text" className="form-control" />
            </td>
            <td>
            <input type="text" className="form-control"/>
            </td>
            <td>
            <input type="text" className="form-control" />
            </td>
            <td>
            <input type="button" className="btn btn-primary" value="Insert"/>
            </td>
          </tr>
          )
      }
    }

    class Fan extends React.Component {
      state = {
        status : '',
        name: this.props.fan.name,
        fan_name: this.props.fan.fan_name,
        phone_number: this.props.fan.phone_number
      };
      handleEdit = () =>  this.setState({ status : 'change'} );
      
      handleSave = (e) => {
        e.preventDefault();
        let name = this.state.name.trim();
        let fan_name = this.state.fan_name.trim();
        let phone_number = this.state.phone_number.trim();
        if (!name || !fan_name || !phone_number) {
          return;
        }
        this.setState({status : ''} )
        this.props.updateHandler(this.props.contact.phone_number,
                 name,fan_name,phone_number);
      };                    
      
      handleCancel = function() {
          this.setState({ status : '', 
             name: this.props.fan.name,
             fan_name: this.props.fan.fan_name,
             phone_number: this.props.fan.phone_number} ) ;
      }.bind(this);    // Alternative to arrow function
      
      handleNameChange = (e) =>  this.setState({name: e.target.value});
      
      handleFan_nameChange = (e) => this.setState({fan_name: e.target.value});
      
      handlePhoneNumChange = (e) =>  this.setState({phone_number: e.target.value});
      render() {

        let activeButtons = buttons.normal ;
        let leftButtonHandler = this.handleChange ;
        let rightButtonHandler = null ;
        let fields = [
                <td key={'name'} >{this.state.name}</td>,
                 <td key={'fan_name'}>{this.state.fan_name}</td>,
                 <td key={'phone_number'}>{this.state.phone_number}</td>
              ] ;
          
              if (this.state.status === 'change' ) {
                activeButtons = buttons.change ;
                leftButtonHandler = this.handleSave;
                rightButtonHandler = this.handleCancel ;
                fields = [
                   <td key={'name'}><input type="text" className="form-control"
                      value={this.state.name}
                      onChange={this.handleNameChange} /> </td>,
                   <td key={'fan_name'}><input type="text" className="form-control"
                      value={this.state.address}
                      onChange={this.handleFan_nameChange} /> </td>,
                   <td key={'phone_number'}><input type="text" className="form-control"
                      value={this.state.phone_number}
                      onChange={this.handlePhoneNumChange} /> </td>,
                ] ; 
              } 

          return (
            <tr >

                {fields}
                  <td>
                    <input type="button" className={'btn ' + activeButtons.leftButtonColor} 
                        value={activeButtons.leftButtonVal}
                            onClick={leftButtonHandler} />
                  </td>
                  <td>
                    <input type="button" className={'btn ' + activeButtons.rightButtonColor} 
                       value={activeButtons.rightButtonVal} 
                           onClick={rightButtonHandler} />
                  </td>
                              
           </tr>
            ) ;
        }
    }

    class FanList extends React.Component {
      render() {
        let fanRows =   this.props.fans.map( (c) => {
          return <fan key={c.phone_number} fan={c} 
                updateHandler={this.props.updateHandler} /> ; // CHANGE 
          });
          return (
              <tbody >
                  {fanRows}
                  <Fan />
              </tbody>
            ) ;
        }
    }

    class FanTable extends React.Component {
      render() {
          return (
            <table className="table table-bordered">
                <thead>
                  <tr>
                  <th>Name</th>
                  <th>Fan-name</th>
                  <th>Phone Number</th>
                  <th></th>
                  <th></th>
                  </tr>
                </thead>
                  <FanList fans={this.props.fans} 
                      updateHandler={this.props.updateHandler}/>
            </table>
            );
      }
    }

    class FanApp extends React.Component {

      updateContact = (key, n, f, p) => {
        api.update(key,n,f,p); 
        this.setState({});                          
      };

      render() {
        var fans = api.getAll() ;
        return (
            <div>
                <h1>Fan List.</h1>
                <FanTable fans={fans}
                    updateHandler={this.updateContact}/>
            </div>
          );
      }
    }

    export default FanApp;
