import starIcon from "../assets/images/icon-star.svg";

type ratingProps = {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  isSubmitted: boolean;
  setisSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

type ratingType = number[];

const rating: ratingType = [1, 2, 3, 4, 5];

const Rating = ({
  selected,
  setSelected,
  isSubmitted,
  setisSubmitted,
}: ratingProps) => {
  const handleSelect = (n: number) => {
    setSelected(n);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selected != 0) {
      setisSubmitted(true);
    }
  };

  return (
    <>
      {!isSubmitted && (
        <div className="max-w-[90%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[32%] xl:max-w-[24%] bg-DarkBlue p-6 rounded-2xl flex flex-col gap-4 font-default text-default">
          <div className="w-12 aspect-square p-1 grid place-items-center rounded-full bg-slate-700">
            <img src={starIcon} alt="star icon" />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-white">How did we do?</h1>
            <p className="text-MediumGrey">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-full flex items-center justify-between">
              {rating.map((n) => (
                <div key={n}>
                  <label
                    htmlFor={n.toString()}
                    className={`w-12 aspect-square rounded-full grid place-items-center text-white items-center justify-center cursor-pointer ${
                      n === selected
                        ? "bg-Orange hover:bg-Orange"
                        : "bg-slate-700 hover:bg-LightGrey"
                    } transition-all`}
                    onClick={() => handleSelect(n)}
                  >
                    {n}
                  </label>
                  <input
                    type="radio"
                    name="rating"
                    id={n.toString()}
                    className="sr-only"
                  />
                </div>
              ))}
            </div>

            <input
              type="submit"
              value="submit"
              className="uppercase bg-Orange text-white font-bold tracking-widest w-full py-2 rounded-3xl cursor-pointer hover:bg-white hover:text-Orange transition-all"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Rating;
