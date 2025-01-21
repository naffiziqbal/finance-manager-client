import { useContext, useState } from "react";
import { ContextProvider } from "../../../context/UserContext";
import { addCategory } from "../../../utils/addCategory";

export default function CategorySection() {
  const [modalOpen, setModalOpen] = useState(false);
  const { user } = useContext(ContextProvider);

  console.log(user);

  const handleAddCategory = async (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;

    const data = await addCategory({ name, user: user?._id });

    if (data?._id) {
      closeModal();
    }

    console.log(data);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-row justify-between items-center relative">
      <h1>Category Section</h1>
      <button onClick={openModal}>Add category</button>

      {modalOpen && (
        <div className="min-w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md ">
          <span className="absolute top-2 right-3" onClick={closeModal}>
            X
          </span>
          <form
            onSubmit={handleAddCategory}
            className="mb-4 flex flex-col justify-between h-full  min-h-40"
          >
            <div className=" flex flex-col">
              <label htmlFor="name" className="mb-6">
                Category Name
              </label>
              <input className="border h-12 p-3" type="text" id="name" />
            </div>
            <input
              type="submit"
              className="bg-purple-800 text-white text-lg py-3 rounded-md"
            />
          </form>
        </div>
      )}
    </div>
  );
}
