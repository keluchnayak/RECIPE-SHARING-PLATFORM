import React, { useState } from "react";
import "./ManageUsers.css";
import { Button, Table, Form } from "react-bootstrap";
import { FaTrash, FaCheck, FaTimes, FaSearch } from "react-icons/fa";

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "Pending" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Approved" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", status: "Rejected" },
  ]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApprove = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: "Approved" } : user
      )
    );
  };

  const handleReject = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: "Rejected" } : user
      )
    );
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="manage-users-container">
      <h2>Manage Users</h2>
      <div className="search-bar">
        <Form.Control
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>

      <Table striped bordered hover className="users-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>
                <Button
                  variant="success"
                  className="action-btn"
                  onClick={() => handleApprove(user.id)}
                >
                  <FaCheck />
                </Button>
                <Button
                  variant="danger"
                  className="action-btn"
                  onClick={() => handleReject(user.id)}
                >
                  <FaTimes />
                </Button>
                <Button
                  variant="dark"
                  className="action-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageUsers;
