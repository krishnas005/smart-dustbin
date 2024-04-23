import Link from 'next/link';
import Image from 'next/image';

const dustbins = [
  {
    id: 1,
    name: 'Dustbin 1',
    fillPercentage: 65,
    location: 'Main Street',
    image: '/images/dustbin.png',
  },
  {
    id: 2,
    name: 'Dustbin 2',
    fillPercentage: 85,
    location: 'Market Place',
    image: '/images/dustbin.png',
  },
  {
    id: 3,
    name: 'Dustbin 3',
    fillPercentage: 45,
    location: 'City Center',
    image: '/images/dustbin.png',
  },
  {
    id: 4,
    name: 'Dustbin 4',
    fillPercentage: 50,
    location: 'DLF Mall',
    image: '/images/dustbin.png',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-2xl font-bold text-center mb-6">Connected Devices</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {dustbins.map((dustbin) => (
          <Link legacyBehavior key={dustbin.id} href={`/dustbin/${dustbin.id}`}>
            <a className="block p-6 py-6 border border-gray-300 rounded shadow-lg hover:bg-gray-100 transition">
              <div className="flex items-center">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{dustbin.name}</h2>
                  <p className="text-sm mt-2">Fill Level: {dustbin.fillPercentage}%</p>
                  <p className="text-sm">Location: {dustbin.location}</p>
                </div>
                <div className="flex-shrink-0 w-24 h-24 ml-4">
                  <Image
                    src={dustbin.image}
                    alt={dustbin.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>

      <div className="fixed bottom-8 left-0 w-full text-center">
        <Link legacyBehavior href="/connect-dustbin">
          <a className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-2xl text-lg font-bold hover:bg-blue-600 transition">
            Connect Dustbin
          </a>
        </Link>
      </div>
    </div>
  );
}
