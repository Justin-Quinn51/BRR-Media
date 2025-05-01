import { useState, useEffect } from "react";

export default function TicketTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchTableData = async () => {
      const response = await fetch("../../tickets.json");
      const ticketData = await response.json();
      setTableData(ticketData);
    };
    fetchTableData();
  }),
    [];

  return (
    <div>
      <table className="border table-auto min-w-full">
        <caption>Ticket Information</caption>

        <thead>
          <tr>
            <th scope="column">ID</th>
            <th scope="column">User</th>
            <th scope="column">Issue</th>
            <th scope="column">Description</th>
            <th scope="column">Status</th>
            <th scope="column">Created</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((item) => {
            <tr key={item.id}>
              <td scope="row">{item.id}</td>
              <td scope="row">{item.user}</td>
              <td>{item.issue}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
              <td>{item.created}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}
