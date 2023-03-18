import React from 'react';
const Traffic = () => {
  return (
    <div style={{ height: '100%', width: '100%', paddingTop: 40 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 40,

          paddingRight: 40,
          height: 30,
        }}
      >
        <h1 style={{ height: '100%' }}>Routes list</h1>
        <button
          style={{
            background: '#FFF',
            height: '100%',
            width: 100,
            borderRadius: 10,
          }}
        >
          Filter
        </button>
      </div>
      <div style={{height: "50%", marginTop: 40, padding: 10, background: "#FFF", marginLeft: 50, marginRight: 50, borderRadius: 20, }}>
          <div style={{height: 30, width: "100%", borderRadius: 20, border: "1px solid #E2E2EA", display:"flex", flexDirection:"column", justifyContent: "center",}}>
            <h1 style={{fontSize: 14, marginLeft: 20}}>Search by route id</h1>
          </div>
          <table style={{width:"100%"}}>
            <tr>
              <td>
                {"   "}
              </td>
              <td>
                Route ID
              </td>
              <td>
                Start adress
              </td>
              <td>
                End adress
              </td>
              <td>
                Workload index
              </td>
              <td>
                Usage index
              </td>
              <td>
                Start date
              </td>
              <td>
                End date
              </td>
            </tr>
          </table>
      </div>
    </div>
  );
};

export default Traffic;
