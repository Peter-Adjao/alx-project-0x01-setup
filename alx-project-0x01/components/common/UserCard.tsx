import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company,

}) => {
    return (
        <div className= "max-w-xl mxx-auto my-6 p-6 bg-pink-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-500">@{username}</p>
            </div>

            <div className="text-gray-700 space-y-2">
                <p><span className="font-semibold">Email</span>{email}</p>
                <p><span className="font-semibold">Phone</span>{phone}</p>
                <p><span className="font-semibold">Website</span>{website}</p>
                <p>
                    <span className="font-semmibold">Address:</span>{""}
                    {address.street}, {address.city}
                </p>
                <p>
                    <span className="font-semmibold">Company:</span>{""}
                    {company.name} -<em>{company.catchPhrase}</em>
                </p>
            </div>  

            <div className="mt-4 text-sm text-gray-500">User ID: {id}</div>
        </div>
    );
};

export default UserCard;