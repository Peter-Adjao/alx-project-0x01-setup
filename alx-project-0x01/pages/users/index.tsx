import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
    users: UserProps[]; // Returned array of users
}

const Users: React.FC<UsersPageProps> = ({ users }) => { 
    return (
        <div className="container mx-auto p-6">
            <h1 className="tet-3xl font-bold mb-6 text-center">Users</h1>
            {users.map((user)  => (
                <UserCard key={user.id} {...user}/>

            ))}
        </div>
    );

};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return {
        props: {
            users,
        },
    };
}

export default Users;