import { FaHandshake } from "react-icons/fa";
export const metadata = {
  title: "TimeLine Page | Keen-keeper",
};

const TimeLinePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>
      <div className="mb-4">
        <select className="select select-bordered w-60">
          <option disabled selected>
            Filter timeline
          </option>
          <option>All</option>
          <option>Meetups</option>
          <option>Events</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">
        
        <div className="text-yellow-500 text-xl">
          <FaHandshake />
        </div>

        <div>
          <p className="text-gray-800">
            <span className="font-semibold">Meetup</span> with Tom Baker
          </p>
          <p className="text-sm text-gray-500">March 29, 2026</p>
        </div>

      </div>
    </div>
  );
};

export default TimeLinePage;