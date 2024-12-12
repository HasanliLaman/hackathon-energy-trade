/* eslint-disable react/prop-types */
import StyleNewForm from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { offerSchema } from "../../../schemas";
import { addOffer } from "../../../server";

const NewForm = ({ setOpenModel, refetch }) => {
  const { data, isPending, mutate } = useMutation({
    mutationFn: addOffer,
    onError: () => toast.error("Something went wrong!"),
    onSuccess: () => {
      toast.success("Offer is posted!");
      setOpenModel(false);
      refetch();
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(offerSchema),
  });

  const submitHandler = async function (formData) {
    mutate(formData);

    if (data)
      reset({
        type: "",
        address: "",
        amount: 0,
        price: 0,
      });
  };

  return (
    <StyleNewForm className="relative z-10" role="dialog">
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="main bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <h2>Add new offer</h2>
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                  <input
                    {...register("address")}
                    id="address"
                    placeholder="Address"
                    name="address"
                    type="text"
                  />
                  {errors.address?.message && (
                    <p className="error-message">{errors.address?.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <select {...register("type")} name="type" id="type">
                    <option value="">Type</option>
                    <option value="solar">Solar</option>
                    <option value="water">Water</option>
                    <option value="wind">Wind</option>
                  </select>
                  {errors.type?.message && (
                    <p className="error-message">{errors.type?.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <input
                    {...register("amount")}
                    id="amount"
                    placeholder="Amount"
                    name="amount"
                    type="number"
                    min={0}
                  />
                  {errors.amount?.message && (
                    <p className="error-message">{errors.amount?.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <input
                    {...register("price")}
                    id="price"
                    placeholder="Price"
                    name="price"
                    type="number"
                    min={0}
                  />
                  {errors.price?.message && (
                    <p className="error-message">{errors.price?.message}</p>
                  )}
                </div>
                <div className="buttons">
                  <button
                    onClick={() => setOpenModel(false)}
                    className="cancelBtn"
                  >
                    <p>Cancel</p>
                  </button>
                  <button>
                    <p>Add</p>
                    {isPending && (
                      <FontAwesomeIcon
                        icon={faSpinner}
                        spin
                        style={{
                          color: "#333",
                          fontSize: "18px",
                        }}
                      />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </StyleNewForm>
  );
};

export default NewForm;
