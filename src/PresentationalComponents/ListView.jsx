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
                <th className="border px-8 py-4" key={index} >{header.display}</th>
              ))}
            </tr>
          }
        </thead>
        <tbody>
          {
            dataItems.length ? dataItems.map((item) => (
              <tr key={item.id}>
                {headers.map((header) => {
                  const value = item[header.key] ? item[header.key].toString() : ''
                  return <td key={header.key + item.id} className="border px-8 py-4">{value}</td>
                })}
              </tr>
            ))
              :
              <tr key={'nodata'}>Nodata</tr>
          }
        </tbody>
      </table>
    </React.Fragment>
  )
}


export default ListView;
