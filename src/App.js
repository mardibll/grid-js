import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default class App extends Component {
  render() {
    const Colom = class {
      constructor(options) {
        this.options = options;
      }
    };

    const columnd = new Colom({
      search: true,
      columns: ["Name", "Email", "Phone Number"],
      data: [
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Afshin", "afshin@mail.com", "(353) 22 87 8356"],
      ],
    });

    const tableRows = columnd.options.data.map((row, index) => (
      <tr key={index}>
        {row.map((cell, index) => (
          <td key={index}>{cell}</td>
        ))}
      </tr>
    ));
    return (
      <div className="container mt-4">
        <table className="table">
          <thead>
            <tr>
              {columnd.options.columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}
