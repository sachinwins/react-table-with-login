import React, { useState, useEffect} from 'react';
import UserData from './UserData';

function Table() {
  console.log("Table");
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const API_URL = 'https://reqres.in/api/users';

  const handlePagination = (currentPage) => {
    console.log("currentPage = ", currentPage);
    if (1 <= currentPage <= totalPages) {
      setCurrentPage(currentPage);
    }
  }

  useEffect(() => {
    console.log("Table useEffect");
    fetch(API_URL+`?page=${currentPage}`)
    .then(res => res.json())
    .then(res => {setUsers(res.data); setTotalPages(res.total_pages)})
    .catch( err => console.log(err));
  }, [currentPage]);

  return (
    <>
    <table> 
      <thead>
      <tr>
        <th>ID</th>
        <th> First Name </th>
        <th> Last Name </th>
        <th> Email </th>
      </tr>
      </thead>
      <UserData users={users} />
    </table>
     <button  disabled={currentPage === 1} onClick={() => handlePagination(currentPage - 1)}> Prev </button> <button  disabled={ currentPage >= totalPages} onClick={() => handlePagination(currentPage + 1)}> Next </button>
    </>
  );
}

export default Table;


