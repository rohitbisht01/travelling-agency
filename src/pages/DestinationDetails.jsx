import BreadCrumb from "../components/ui/BreadCrumb";
import StarIcon from "@mui/icons-material/Star";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import QuestionsAsked from "../components/QuestionsAsked";
import DatePicker from "../components/DatePicker";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ImageSlider from "../components/ui/ImageSlider";

const Included = [
  "monument entrance fees",
  "Our Guide will check your social media worth photots",
  "Our Guide will check your worth photots",
  "Lorem ipsum dolor sit amet consectetur",
  "pick up & frop lorem",
  "Air-conditon vehicle",
  "int provident maiores enim sapiente consequuntur minima ",
];

const NotIncluded = [
  "Food & Alcoholic Beverages",
  "quis repudiandae voluptate. Aperiam nihil ",
];

const additionalInformation = [
  "lorem Lorem ipsum dolor sit amet consectetur",
  "ipsum dolor sit amet consectetur",
  "sit amet consectetur",
  "lorem Lorem ipsum dolor ",
  "quis repudiandae voluptate. Aperiam nihil ",
];

const timerOptions = [
  "02:30 AM",
  "09:45 AM",
  "12:00 PM",
  "03:15 PM",
  "06:30 PM",
  "08:00 PM",
  "10:30 PM",
  "11:45 PM",
  "01:00 AM",
];

const DestinationDetails = () => {
  return (
    <div>
      <BreadCrumb />
      <div>
        <div className="font-bold mt-5 mb-4 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quidem.
        </div>
        <ImageSlider />
        <div className="grid grid-cols-6 gap-10">
          <div className="col-start-1 col-span-4">
            <div className="flex gap-3 mt-2 mb-2">
              <div>
                <StarIcon style={{ color: "gold", fontSize: 30 }} />
              </div>
              <div>
                <div>
                  <span className="font-bold">4.8 / 5 Exceptional</span> (13
                  reviews)
                </div>
                <div className="text-blue-600 cursor-pointer">
                  See all reviews
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div>
                <EventAvailableIcon style={{ color: "green" }} />
              </div>
              <div className="text-green-700 font-bold">
                Free cancellation available
              </div>
            </div>

            <div className="mt-[80px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              nihil quas vel facere, nam praesentium expedita magnam cumque, sed
              quis repudiandae voluptate. Aperiam nihil culpa fuga minus ea
              cumque tempore veniam aut ipsum nisi velit dolores, eaque
              consequuntur saepe facere facilis sed beatae, et recusandae
              incidunt. Error minima, suscipit veniam esse sapiente iste,
              quaerat unde nobis quod quasi blanditiis repellat officia
              laboriosam tempora. Ex sequi maxime labore laborum, numquam ipsam
              sint provident maiores enim sapiente consequuntur minima dolorum
              obcaecati eveniet facilis non nihil voluptas in recusandae eos
              harum totam perspiciatis officiis nesciunt. Exercitationem quod
              ullam beatae soluta consequuntur enim quis nihil nam magnam?
              Quibusdam mollitia totam sunt expedita, fugit id aut perspiciatis.
              Porro obcaecati cumque beatae itaque autem non maiores pariatur
              odio facilis earum, quis rem id dolor. Minus unde odit quod ex,
              quo autem earum magnam. Autem maxime sunt, eveniet omnis
              dignissimos molestiae sint tenetur obcaecati et similique! Ipsam
              ipsa eligendi nam beatae dicta atque, nisi nobis placeat at.
              Asperiores maxime sint amet, molestiae esse voluptates fugit harum
              nisi neque eum praesentium dolor nobis. Voluptatem consequatur
              maxime ipsa autem officia eaque quibusdam
              <p className="mt-4">
                Note: eveniet odit deserunt? Doloremque saepe excepturi itaque
                odio iusto ab nobis! Tempora vitae dolore provident id
                consequatur!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <div>
                <h3 className="font-bold text-xl mb-4">What&apos;s Included</h3>
                {Included.map((ele, index) => {
                  return (
                    <div key={index} className="flex gap-3 my-4">
                      <CheckIcon color="success" />
                      <p>{ele}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">
                  What&apos;s Not Included
                </h3>
                {NotIncluded.map((ele, index) => {
                  return (
                    <div key={index} className="flex gap-3  my-4">
                      <ClearIcon color="warning" />
                      <p>{ele}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-bold text-xl">Additional Information</h3>
              {additionalInformation.map((ele, index) => {
                return (
                  <div key={index} className="my-4">
                    {ele}
                  </div>
                );
              })}
              <p className="text-blue-500 cursor-pointer">Show more</p>
            </div>

            <div className="mt-10">
              <h3 className="font-bold text-xl mb-4">Itinary Information</h3>
              <div className="flex gap-2 my-4">
                <AccessTimeOutlinedIcon />
                <p className="font-bold">Duration: 3 hours - 10 hours</p>
              </div>
              <div className="flex gap-2 my-4">
                <LocationOnOutlinedIcon />
                <p className="font-bold">Stop at: Tajmahal, Agra</p>
              </div>

              <div className="ml-8">
                <div className="flex items-center gap-4">
                  <CheckIcon style={{ color: "green" }} />
                  <span className="text-green-600">
                    Admission ticket included
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  voluptatem ullam suscipit deserunt expedita, quia eos maxime
                  eaque ducimus laboriosam voluptate harum sit. Culpa odio vitae
                  illum laborum cum mollitia!
                </p>
                <p className="text-blue-500 cursor-pointer mt-3">Read more</p>
                <div className="flex gap-2 my-4 text-slate-500">
                  <AccessTimeOutlinedIcon />
                  <p>3 hours</p>
                </div>
              </div>
            </div>

            <div className="my-10">
              <h3 className="font-bold text-xl my-4">
                Frequently asked questions
              </h3>
              <QuestionsAsked />
            </div>
          </div>
          <div className="col-start-5 col-span-2">
            <h3 className="font-bold text-xl">Tickets and prices</h3>
            <h4 className="font-bold text-sm my-4">
              Search ticket availability by date
            </h4>
            <DatePicker />

            <div>
              <h4 className="font-bold mt-6 mb-2">Select Time</h4>
              <div className="grid grid-cols-3 gap-2">
                {timerOptions.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="border-2 flex justify-center rounded-2xl py-1 px-2 text-sm border-slate-300 cursor-pointer"
                    >
                      {ele}
                    </div>
                  );
                })}
              </div>
              <div className="text-blue-600 flex gap-2 cursor-pointer my-4 text-sm">
                <KeyboardArrowDownOutlinedIcon fontSize="small" />
                <p>Show more</p>
              </div>
            </div>

            <div className="border-2 border-black p-3">
              <h4 className="font-bold">Ticker+Guide+pick-drop Delhi</h4>
              <div>
                <div className="flex gap-2 items-center py-2">
                  <InfoOutlinedIcon />
                  <div>
                    Ypur current selection is within 24 hours of the start time
                  </div>
                </div>
                <div className="flex gap-2 items-center py-2">
                  <DiscountOutlinedIcon />
                  <div>Group discounts available</div>
                </div>
                <div className="flex gap-2 items-center py-2">
                  <CheckCircleOutlineOutlinedIcon />
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <p className="text-blue-500 cursor-pointer">See details</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <div>
                  <span className="text-sm text-slate-500">From</span>
                  <p className="font-bold">US$124</p>
                </div>

                <div
                  className="border-2 px-3 flex items-center rounded text-blue-500 border-blue-400"
                  style={{ height: 40 }}
                >
                  Select
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
