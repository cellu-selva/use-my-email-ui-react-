import React from "react";
import { getProp } from '../Utils/functional-util';
const ListView = (props) => {
  const {
    headers = [],
    dataItems = [],
    style = "",
    onRowClick,
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
                  let value
                  if (header.key.indexOf('.') > -1) {
                    value = getProp(item, `${header.key}`, '');
                  } else {
                    value = item[header.key] ? item[header.key].toString() : '';
                  }
                  return <td
                    key={header.key + item.id}
                    className="border px-8 py-4"
                    onClick={(e) => {
                      onRowClick(e, item);
                    }}
                  >{value}</td>
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
