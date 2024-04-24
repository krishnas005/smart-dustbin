import Link from 'next/link';
import Image from 'next/image';
import { FaTrash, FaCircle, FaDotCircle } from 'react-icons/fa';

const dustbins = [
  {
    id: 1,
    name: 'Dustbin 1',
    fillPercentage: 65,
    isLidOpen: true, // Lid status
    image: '/images/dustbin.png',
  },
  {
    id: 2,
    name: 'Dustbin 2',
    fillPercentage: 85,
    isLidOpen: false, // Lid status
    image: '/images/dustbin.png',
  },
  {
    id: 3,
    name: 'Dustbin 3',
    fillPercentage: 45,
    isLidOpen: true, // Lid status
    image: '/images/dustbin.png',
  },
  {
    id: 4,
    name: 'Dustbin 4',
    fillPercentage: 50,
    isLidOpen: false, // Lid status
    image: '/images/dustbin.png',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-3xl font-bold text-center mb-8">Connected Devices</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {dustbins.map((dustbin) => (
          <Link legacyBehavior key={dustbin.id} href={`/dustbin/${dustbin.id}`}>
            <a className="block p-6 border border-gray-300 rounded-lg shadow hover:shadow-lg hover:bg-gray-200 transition">
              <div className="flex items-center">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold">{dustbin.name}</h2>
                  <p className="text-sm mt-2 flex items-center">
                    <FaTrash className="mr-2" /> Fill Level: {dustbin.fillPercentage}%
                  </p>
                  <p className="text-sm flex items-center mt-2">
                    {dustbin.isLidOpen ? (
                      <FaDotCircle className="mr-2 text-green-500" /> // Icon for open lid
                    ) : (
                      <FaCircle className="mr-2 text-red-500" /> // Icon for closed lid
                    )}
                    {dustbin.isLidOpen ? 'Lid Open' : 'Lid Closed'}
                  </p>
                </div>
                <div className="flex-shrink-0 w-24 h-24 ml-4">
                  <Image
                    src={dustbin.image}
                    alt={dustbin.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-lg" // Rounded image
                  />
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>

      <div className="fixed bottom-8 left-0 w-full text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-xl text-lg font-bold hover:bg-blue-700 transition">
          Connect Dustbin
        </button>
      </div>
    </div>
  );
}
