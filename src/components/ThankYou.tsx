import thankyou from "../assets/images/illustration-thank-you.svg";

type thankyouProps = {
  selected: number;
  isSubmitted: boolean;
};

const ThankYou = ({ selected, isSubmitted }: thankyouProps) => {
  return (
    <>
      {isSubmitted && (
        <div className="max-w-[90%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[32%] xl:max-w-[24%] bg-DarkBlue px-6 py-8 rounded-2xl flex flex-col items-center gap-6 font-default text-default">
          <div>
            <img src={thankyou} alt="thank you" />
          </div>

          <p className="text-Orange bg-slate-700 py-1 px-4 rounded-3xl">
            You selected {selected} out of 5
          </p>

          <div className="text-center">
            <h1 className="text-white text-3xl font-bold">Thank you!</h1>
            <p className="text-MediumGrey">
              We appreciated you taking the time to give a rating. If you need
              more support, don't hesitate to get in touch!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ThankYou;
