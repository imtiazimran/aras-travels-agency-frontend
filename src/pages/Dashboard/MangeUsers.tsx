import { useGetUsersQuery } from "../../redux/features/auth/authApi";
import { BarLoader } from "../../utils/Loading";
import { TUser } from "../../redux/features/auth/authSlice";

const MangeUsers = () => {
  const { data, isLoading } = useGetUsersQuery(undefined);

  return (
    <div className="h-screen w-full flex flex-col p-4">
      {isLoading ? (
        <div className="flex items-center justify-center flex-grow">
          <BarLoader />
        </div>
      ) : (
        <div className="overflow-x-auto flex-grow">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-4 py-2">Photo</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Number</th>
                <th className="px-4 py-2">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-center">
              {data?.data?.map((user: TUser) => (
                <tr key={user._id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">
                    <img
                      className="w-12 h-12 mx-auto rounded-full"
                      src={user.picture}
                      alt={user.name}
                    />
                  </td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.number}</td>
                  <td className="px-4 py-2">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MangeUsers;
