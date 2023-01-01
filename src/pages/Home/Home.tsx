import FilterRedis from "./Components/FilterRedis";
import PopularPostBanner from "./Components/PopularPostBanner";
import SingleRedit from "./Components/SingleRedit";

const Home = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[65%] space-y-5">
        <PopularPostBanner />
        <FilterRedis />
        <SingleRedit />
        <SingleRedit />
        <SingleRedit />
      </div>
      <div>
        <p>Second Column</p>
      </div>
    </div>
  );
};

export default Home;
