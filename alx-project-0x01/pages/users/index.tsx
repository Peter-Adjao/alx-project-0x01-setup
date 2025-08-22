import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div>
    <Header />
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Users</h1>
      {posts.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
</div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
