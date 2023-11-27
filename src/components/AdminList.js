// src/components/AdminList.js
import React, { useState, useEffect } from 'react';

const AdminList = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    // Fetching the list of admins using fetch with credentials
    fetch('/admins', {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => setAdmins(data))
      .catch(error => console.error('Error fetching admins:', error));
  }, []);

  return (
    <div>
      <h1>Admin List</h1>
      <ul>
        {admins.map(admin => (
          <li key={admin.id}>{admin.name} - {admin.email} - {admin.role}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminList;
