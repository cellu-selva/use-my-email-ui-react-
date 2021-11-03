import React, { useState } from "react";
import { getProp } from '../Utils/functional-util';
import DeleteConfirmationModal from "./Delete";
const ListView = (props) => {
  const {
    headers = [],
    dataItems = [],
    onRowClick = () => { },
    deleteCallback,
    ChildComponent,
  } = props;

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showCreateEditModal, setShowCreateEditModal] = useState(false);
  const [childData, setChildData] = useState({});
  let template = "";
  switch (true) {
    case showDeleteModal:
      template = (
        <DeleteConfirmationModal toggleDeleteModal={setShowDeleteModal} deleteCallback={(e) => {
          setShowDeleteModal(false);
          deleteCallback(childData.id);
        }} />
      )
      break;
    case showViewModal:
      template = (
        <ChildComponent
          closeModal={setShowViewModal}
          readOnly={true}
          childData={childData} />
      )
      break;
    case showCreateEditModal:
      template = <ChildComponent
        closeModal={setShowCreateEditModal}
        readOnly={false}
        childData={childData}
      />
      break;
    default:
      template = (
        <React.Fragment>
          <button onClick={(e) => {
            setChildData({});
            setShowCreateEditModal(true);
          }}>Create</button>
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
                dataItems.length
                  ? dataItems.map((item) => (
                    <tr key={item.id}>
                      {
                        headers.map((header) => {
                          let value
                          if (header.key.indexOf('.') > -1) {
                            value = getProp(item, `${header.key}`, '');
                          } else {
                            value = item[header.key] ? item[header.key].toString() : '';
                          }

                          switch (header.type) {
                            case 'date':
                              value = value ? new Date(value).toLocaleDateString() : ''
                              break;
                            default:
                          }
                          return (
                            header.key !== 'actions'
                              ?
                              <td
                                key={header.key + item.id}
                                className="border px-8 py-4"
                                onClick={(e) => {
                                  onRowClick(e, item);
                                }}
                              >{value}</td>
                              :
                              <td
                                key={header.key + item.id}
                                className="border px-8 py-4"
                              >
                                {
                                  <button onClick={(e) => {
                                    setChildData(item);
                                    setShowCreateEditModal(false);
                                    setShowViewModal(true);
                                    // viewCallback();
                                  }}>view</button>
                                }
                                {
                                  <button onClick={(e) => {
                                    setChildData(item);
                                    setShowCreateEditModal(true);
                                    setShowViewModal(false);
                                    // editCallback();
                                  }}>edit</button>
                                }
                                {
                                  deleteCallback &&
                                  <button onClick={(e) => {
                                    setChildData(item)
                                    setShowDeleteModal(true);
                                  }}>delete</button>
                                }

                              </td>
                          )
                        })
                      }
                    </tr>
                  ))
                  :
                  <tr key={'nodata'}>
                    <td>Nodata</td>
                  </tr>
              }
            </tbody>
          </table>
        </React.Fragment>

      )
  }
  return template;
}


export default ListView;
