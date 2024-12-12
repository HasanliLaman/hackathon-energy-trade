/* eslint-disable react/prop-types */
import StyleAddBid from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { bidSchema } from "../../../schemas";
import { useState } from "react";
// import { addBid } from "../../server";

const AddBid = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bidSchema),
  });

  return (
    <>
      <button onClick={() => setOpen(true)} className="offerBtn">
        Offer price
      </button>
      {open && (
        <StyleAddBid className="relative z-10" role="dialog">
          <div
            className="fixed inset-0 bg-gray-500/75 transition-opacity"
            aria-hidden="true"
          ></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="main bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <h2>Offer new price</h2>
                  <form>
                    <div className="form-group">
                      <input
                        {...register("newPrice")}
                        id="newPrice"
                        placeholder="Price"
                        name="newPrice"
                        type="number"
                        min={0}
                      />
                      {errors.newPrice?.message && (
                        <p className="error-message">
                          {errors.newPrice?.message}
                        </p>
                      )}
                    </div>

                    <div className="buttons">
                      <button
                        onClick={() => setOpen(false)}
                        className="cancelBtn"
                      >
                        <p>Cancel</p>
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                          toast.success(
                            "Submitted! Offer owner will be notified."
                          );
                        }}
                      >
                        <p>Submit</p>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </StyleAddBid>
      )}
    </>
  );
};

export default AddBid;
