import { useContext, useState } from "react";
import { ContextProvider } from "../../context/UserContext";
import UpdateProfileForm from "../Form/UpdateProfileForm";
import CategorySection from "./CategorySection/CategorySection";

const Profile = () => {
  const { user } = useContext(ContextProvider);
  console.log(user);

  const [activeForm, setActiveForm] = useState(false);

  return (
    <div className="max-w-4xl">
      <div>
        <div className="flex md:flex-row flex-col justify-between items-center py-3">
          <figure className="max-w-sm my-6">
            <img src={user?.photoURL} className="rounded-full" alt="" />
          </figure>
          <div>
            {!activeForm ? (
              <button
                onClick={() => setActiveForm(!activeForm)}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg"
              >
                Edit Profile
              </button>
            ) : (
              <button
                onClick={() => setActiveForm(!activeForm)}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
        <hr />
        {!activeForm ? (
          <div className="mt-12">
            <p className="text-2xl font-bold">{user?.displayName}</p>
            <p className="text-xl font-semibold">{user?.email}</p>
          </div>
        ) : (
          <UpdateProfileForm setActiveForm={setActiveForm} />
        )}
      </div>
      <hr />

      <div>
        <CategorySection />
      </div>
    </div>
  );
};

export default Profile;
