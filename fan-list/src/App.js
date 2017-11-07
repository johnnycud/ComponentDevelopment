import React from 'react';
import api from './test/stubAPI' 

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
      render() {
          return (
            <tr >
              <td>
                 { this.props.fan.name }
              </td>
              <td>
                 {this.props.fan.fan-name }
              </td>
              <td>
                   {this.props.fan.phone_number}
              </td>
              <td>
                 <input type="button" className="btn btn-primary" value="Change"/>
              </td>  
              <td>
                 <input type="button" className="btn btn-danger" value="Erase"/>
              </td>                      
          </tr>
            ) ;
        }
    }

    class FanList extends React.Component {
      render() {
          var fanRows = this.props.fans.map(
            function(c) {
                 return <Fan key={c.phone_number} fan={c} />
            });
          return (
              <tbody >
                  {fanRows}
                  <fanForm />
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
                  <FanList fans={this.props.fans} />
            </table>
            );
      }
    }

    class FanApp extends React.Component {
      render() {
        var fans = api.getAll() ;
          return (
                <div>
                   <h1>Fan List.</h1>
                   <fanTable fans={this.props.fans} />
                </div>
          );
      }
    }

    export default FanApp;
