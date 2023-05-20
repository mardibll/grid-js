import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef } from "react";
import { Grid } from "gridjs";
import { Table } from "react-bootstrap";

function App() {
  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  const wrapperRef = useRef(null);
  const grid = new Grid({
    columns: ["Name", "Email", "Phone Number"],
    search: true,
    className: "table",
    style: Table,

    language: {
      search: {
        placeholder: "🔍 ketik kata kunci...",
      },
    },
    data: [
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ],
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div ref={wrapperRef} style={{ width: "40%" }} />
    </div>
  );
}

export default App;
