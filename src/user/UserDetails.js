import React from "react";
import Notification from "../shared/Notification";
export default function UserDetails({ data, error }) {

if(data.length === 0){
    return(
        <>
        {error && <Notification type="error" message="No record found !!" />}
        </>
        
    )
}

  return (
    <div className="mt-5">
      {error && <Notification type="error" message={error} />}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => {
            return (
              <tr key={i + 1}>
                <td>{i + 1}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
