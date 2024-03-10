import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const PaymentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  return (
    <div>
      <div className="flex gap-3 items-center text-slate-700 cursor-pointer">
        <ArrowBackIosOutlinedIcon fontSize="25" />
        <p>Your details</p>
      </div>
      <div className="my-4">Step 2 of 2</div>
      <h1 className="text-2xl font-bold">Check and Pay</h1>
      <div className="grid grid-cols-3 mt-4 gap-10">
        <div className="col-span-2">
          <div className="shadow w-3/5 p-4 rounded">
            <h1 className="font-bold text-lg">Card details</h1>
            <div className="flex gap-2 items-center my-3 cursor-pointer">
              <img
                width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                alt="Visa"
              />
              <img
                width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                alt="American Express"
              />
              <img
                width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                alt="Mastercard"
              />
              <img
                width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                alt="PayPal acceptance mark"
              />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              {/* register your input into the hook by invoking the "register" function */}
              <div className="flex flex-col gap-1 my-3">
                <label>
                  CardHolder s name <span className="text-red-700">*</span>
                </label>
                <input
                  className="border p-1 rounded"
                  placeholder="Cardholder's name"
                  {...register("cardHolderName", { required: true })}
                />
                {errors.cardHolderName && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>

              <div className="flex flex-col gap-1 my-3">
                <label>
                  Card Number <span className="text-red-700">*</span>
                </label>
                <input
                  className="border p-1 rounded"
                  //   placeholder="Card Number"
                  //   defaultValue="1234 5678 9012 3457"
                  placeholder="XXXX XXXX XXXX XXXX"
                  {...register("cardNumber", { required: true })}
                />
                {errors.cardNumber && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>

              <div className="flex gap-2">
                <div className="flex flex-col gap-1 my-3 flex-auto">
                  <label>
                    Expiration Date <span className="text-red-700">*</span>
                  </label>
                  <input
                    className="border p-1 rounded"
                    minLength="7"
                    maxLength="7"
                    // defaultValue="01/22"
                    placeholder="MM/YYYY"
                    {...register("expirationDate", { required: true })}
                  />
                  {errors.cardNumber && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
                <div className="flex flex-col gap-1 my-3 flex-auto">
                  <label>
                    CVC <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    className="border p-1 rounded"
                    minLength="3"
                    maxLength="3"
                    placeholder="&#9679;&#9679;&#9679;"
                    defaultValue="&#9679;&#9679;&#9679;"
                    {...register("cvc", { required: true })}
                  />
                  {errors.cardNumber && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>

              {/* <input type="submit" /> */}

              <div className="flex gap-2">
                <>
                  <Stack direction="row" spacing={1} alignItems="center">
                    {/* <Typography>Off</Typography> */}
                    <AntSwitch
                      defaultChecked
                      inputProps={{ "aria-label": "ant design" }}
                    />
                    {/* <Typography>On</Typography> */}
                  </Stack>
                </>
                <p className="text-gray-500">Save card for future purchase</p>
              </div>
            </form>
          </div>

          <div>
            <h4 className="font-bold text-lg mt-8">Cancellation Policy</h4>
            <p className="my-3">
              Cancel for free before Feburary 17 at 2:30 AM GMT +5:30 for a full
              refund
            </p>
            <button className="my-5 cursor-pointer flex justify-center gap-2 p-2 border rounded w-full">
              <LockOutlinedIcon />
              <p>Complete booking</p>
            </button>

            <hr className="my-5" />
            <p>
              Keep in mind that your card issue may charge a foreign transaction
              fee.
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-5 ">
            <div className="">
              <img
                className="rounded-[15px]"
                src="https://imgs.search.brave.com/rCc6amBlwhWzJ2_n7kLRGkljdnRvTfCqTYGAcowXHpY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY3L1Rhal9NYWhh/bF9pbl9JbmRpYV8t/X0tyaXN0aWFuX0Jl/cnRlbC5qcGc"
                alt="taj mahal"
                width={300}
              />
            </div>
            <div>
              <h4 className="font-bold">
                Skip the Line Taj Mahal Guided Tour with optional add-ons
              </h4>
              <p className="mt-2 text-gray-700">Sun, Feb 18 02:30 AM</p>
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <div className="font-bold text-xl flex gap-5 my-3">
              <p>1</p>
              <h1>Ticket+Guide+pick-drop Delhi</h1>
            </div>

            <div className=" my-3 flex justify-between">
              <p>Adult (age 5-99)</p>
              <p>US $140</p>
            </div>

            <div className="font-bold flex justify-between gap-5 my-3">
              <p>Total Price</p>
              <p>US $140</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
