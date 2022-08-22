import numeral from "numeral";
import React from "react";
import "./Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      <table>
        <tbody>
          {countries.map(({ country, cases, countryInfo }, index) => (
            <tr key={index}>
              <div className="table_flagContainer">
                <img
                  className="table_flag"
                  src={countryInfo.flag}
                  alt="flags"
                />
                <td>{country}</td>
              </div>
              <td>
                <strong>{numeral(cases).format("0,0")}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
