import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HardwareSummary.styles.scss';

const apiURL = 'https://api.minerstat.com/v2/hardware';
function HardwareSummary() {
  const [hardwareData, setHardwareData] = useState([]);
  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setHardwareData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Top hardware</h1>
      {
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Brand</th>
            </tr>
          </thead>
          <tbody>
            {hardwareData.map((hardware) => {
              return (
                <tr>
                  <td>{hardware.name}</td>
                  <td>{hardware.type}</td>
                  <td>{hardware.brand}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      }
      ) }
    </>
  );
}

export default HardwareSummary;
