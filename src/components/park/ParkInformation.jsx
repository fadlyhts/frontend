import ParkList from './ParkList';

function ParkInformation() {
  return (
    <div className="space-y-8">
      <div className="bg-green-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-green-900 mb-4">About Jakarta Parks</h2>
        <p className="text-gray-700">
          Discover the beautiful parks spread across Jakarta. These green spaces offer recreation, relaxation, and a
          breath of fresh air in the bustling city.
        </p>
      </div>
      <ParkList />
    </div>
  );
}

export default ParkInformation;
