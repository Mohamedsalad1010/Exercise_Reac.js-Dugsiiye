function UserList ({users}) {
    return (
    <div>
 <h2>User List Table</h2>
       {
        users.length > 0 ? 
      <table  border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>role</th>
            </tr>
        </thead>
        <tbody>
            {
              users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  
                </tr>
              )
            )  
            }
            </tbody>
       </table> : "no user  found"
       
       }

    </div>
    )
}

export default UserList