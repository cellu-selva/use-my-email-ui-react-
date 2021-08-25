import React from "react";

const ListView = (props) => {
  const {
    headers = [],
    dataItems = [],
    style = "",
  } = props;
  return (
    <React.Fragment>
      <table className="shadow-lg bg-white">
        <thead>
          {
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="">{header.display}</th>
              ))}
            </tr>
          }
        </thead>
        <tbody>
          {
            dataItems.map((item) => (
              <tr key={item.id}>
                {headers.map((header) => (
                  <td key={header.key + item.id} className="border px-8 py-4">{item[header.key] || ''}</td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </React.Fragment>
  )
}


export default ListView;
