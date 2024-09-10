import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { Link } from "react-router-dom";
import { useGetMeQuery } from "../../redux/features/auth/authApi";
import { TUser } from "../../redux/features/auth/authSlice";
import { BarLoader } from "../../utils/Loading";

function Profile() {
  const { data, isLoading } = useGetMeQuery(undefined);
  const user: TUser = data?.data;
  if (isLoading) {
    return (
      <div className="text-center text-white">
        <BarLoader />
      </div>
    );
  }

  return (
    <CardContainer className="inter-var" containerClassName="w-full">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-2xl font-bold text-white">
          {user?.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
          {user?.email}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={user?.picture || "https://via.placeholder.com/1000"}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={user?.name}
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-30 text-white"
        >
          Name : {user?.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
          Phone: {user?.number}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
          Address: {user?.address}
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            to="/updateInfo"
            className="px-4 py-2 rounded-xl bg-black   text-white text-xs font-bold"
          >
            Edit Profile
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default Profile;
