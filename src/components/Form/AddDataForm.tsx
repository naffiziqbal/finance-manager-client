/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from "react-hook-form";
import { addRecord } from "../../utils/addData";
import toast from "react-hot-toast";
import { useContext } from "react";
import { ContextProvider } from "../../context/UserContext";

type Inputs = {
  name: string;
  creatorId: string;
  category: string;
  description: string;
  type: "income" | "expense";
  amount: number;
};

export default function AddDataForm() {
  const { user } = useContext(ContextProvider);
  const id = user._id;
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const creatorId = id;
    try {
      const res = await addRecord({ ...data, creatorId });
      if (res.success) {
        toast("Record Added Successfully");
        reset();
      }
    } catch (error: any) {
      toast(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-12">
      <div>
        <label htmlFor="name" className="flex flex-col">
          <span>Name Of Record</span>
          <input
            className="max-w-2xl w-full p-2 my-4 ring-violet-600 rounded ring outline-none"
            {...register("name", { required: true })}
          />
        </label>
      </div>
      <div>
        <label htmlFor="category" className="flex flex-col">
          <span>Category</span>
          <input
            className="max-w-2xl w-full p-2 my-4 ring-violet-600 rounded ring outline-none"
            {...register("category", { required: true })}
          />
        </label>
      </div>
      <div>
        <label htmlFor="description" className="flex flex-col">
          <span>Add Descriptions</span>
          <textarea
            cols={20}
            rows={5}
            className="ring ring-violet-600 rounded w-full p-2 my-4 outline-none max-w-2xl"
            {...register("description", { required: true })}
          />
        </label>
      </div>
      <div>
        <label htmlFor="amount" className="flex flex-col">
          <span>Amount</span>
          <input
            className="max-w-2xl w-full p-2 my-4 ring-violet-600 rounded ring outline-none"
            defaultValue={0}
            {...register("amount", { required: true, valueAsNumber: true })}
          />
        </label>
      </div>
      <div>
        <label htmlFor="type" className="flex flex-col">
          <span>Income Or Expense</span>
          <select
            {...register("type", { required: true })}
            className="w-full max-w-2xl p-3 ring ring-violet-600 rounded"
          >
            <option disabled> Select Type</option>
            <option value="income">Income</option>
            <option value="expenses">Expense</option>
          </select>
        </label>
      </div>
      <input
        className="max-w-2xl w-full p-2 my-4 ring-violet-600 bg-violet-600 text-white font-bold hover:bg-violet-700 duration-300 cursor-pointer rounded ring outline-none"
        type="submit"
      />
    </form>
  );
}
