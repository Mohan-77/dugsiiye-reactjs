
const UserList = () => {

    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
    ];

    return (
        <div>
            <h2>User List</h2>
            {
            /* User list content will go here */
            users.length > 0 ? (
                <ul>
                    {
                    users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                    }
                </ul>
            ) : (
                <p>No users found</p>
            )
            }
        </div>
    );
};

export default UserList;