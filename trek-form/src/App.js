import React from 'react';

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
              {/* TODO */}                   
            </tr>
            ) ;
        }
    }

    class FanList extends React.Component {
      render() {
          var fanRows = null ;  // TODO
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
          return (
                <div>
                   <h1>Fan List.</h1>
                   <fanTable fans={this.props.fans} />
                </div>
          );
      }
    }

    export default FanApp;
