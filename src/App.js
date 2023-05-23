import React, { useEffect, useRef } from "react";
import { Grid } from "gridjs";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = new Grid({
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

    grid.render(gridRef.current);
    console.log(grid.config.columns);
    return () => {
      grid.destroy();
    };
  }, []);
  return (
    <div id="wrapper" className="container">
      <div className="row">
        <table className="table-responsive border">
          <div ref={gridRef} className="bordered"></div>
        </table>
      </div>
    </div>
  );
};
export default App;
