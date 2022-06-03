import React from "react";
import { mockUserData } from "../MockData";
import { useState } from "react";
import { useEffect } from "react";

const Table = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(mockUserData);
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl my-2 font-mono font-bold text-center tracking-widest">
        User Details
      </h1>
      <div className="container">
        <table className="table-auto mx-auto text-center">
          <thead className="text-center">
            <tr>
              <th className="bg-blue-100 border border-slate-400 px-8 py-4">
                id
              </th>
              <th className="bg-blue-100 border border-slate-400 px-8 py-4">
                First Name
              </th>
              <th className="bg-blue-100 border border-slate-400 px-8 py-4">
                Last Name
              </th>
              <th className="bg-blue-100 border border-slate-400 px-8 py-4">
                Email
              </th>
              <th className="bg-blue-100 border border-slate-400 px-8 py-4">
                Institution
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((user) => (
              <tr key={user.id} className="text-center border-slate-500">
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.first_name}</td>
                <td className="border p-2">{user.last_name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.institution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
