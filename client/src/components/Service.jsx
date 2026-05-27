import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GrievanceStatus = () => {

  const [array, setArray] = useState([]);

  const getlist = (d) => {
    let Gdata = [];

    for (let i = 0; i < d.length; i++) {
      for (let j = 0; j < d[i].grievances.length; j++) {
        if (d[i].grievances[j].dept === "Service Provider") {
          Gdata.push(d[i].grievances[j]);
        }
      }
    }
    return Gdata;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/grievancelist", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include"
        });

        if (res.status !== 200) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        console.log(data);

        const filteredData = getlist(data);
        setArray(filteredData);

      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <>
      <table className="Gtable table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Names</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Grievance</th>
            <th>Status</th>
            <th>Feedback</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {array.map((cval) => (
            <tr key={cval._id}>
              <td>{cval._id}</td>
              <td>{cval.name}</td>
              <td>{cval.email}</td>
              <td>{cval.phone}</td>
              <td>{cval.dept}</td>
              <td>{cval.grievance}</td>
              <td>{cval.status}</td>
              <td>{cval.feedback}</td>
              <td>{cval.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/aAbBcC/updatedocs" className="btn btn-outline-primary mx-4 mb-1 update">
        Update Documents
      </Link>

      <Link to="/login" className="btn btn-outline-warning mx-4 mb-1 update">
        Logout as Admin
      </Link>

      <br /><br />
      <p className="small mx-4" style={{ fontStyle: "italic" }}>
        Note: Copy the grievance ID to update.
      </p>
    </>
  );
};

export default GrievanceStatus;