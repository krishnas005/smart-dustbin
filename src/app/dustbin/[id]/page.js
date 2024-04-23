import { notFound } from 'next/navigation';
import Image from 'next/image';
import { FaMapMarkerAlt, FaRecycle, FaTrash } from 'react-icons/fa'; // Importing additional icons

const dustbinData = [
    {
        id: 1,
        name: 'Dustbin 1',
        fillPercentage: 65,
        location: 'Main Street',
        capacity: 100, // Capacity in liters
        lastEmptied: '2024-04-20',
        image: '/images/iconImage.png', // Add image path
    },
    {
        id: 2,
        name: 'Dustbin 2',
        fillPercentage: 85,
        location: 'Market Place',
        capacity: 120, // Capacity in liters
        lastEmptied: '2024-04-19',
        image: '/images/iconImage.png', // Add image path
    },
    {
        id: 3,
        name: 'Dustbin 3',
        fillPercentage: 45,
        location: 'City Center',
        capacity: 150, // Capacity in liters
        lastEmptied: '2024-04-18',
        image: '/images/iconImage.png', // Add image path
    },
    {
        id: 4,
        name: 'Dustbin 4',
        fillPercentage: 60,
        location: 'DLF Mall',
        capacity: 150, // Capacity in liters
        lastEmptied: '2024-04-15',
        image: '/images/iconImage.png', // Add image path
    },
];

export default function Dustbin({ params }) {
    const { id } = params;
    const dustbin = dustbinData.find((db) => db.id === parseInt(id, 10));

    if (!dustbin) {
        notFound();
    }

    // Calculate remaining capacity and estimated days to fill
    const remainingCapacity = dustbin.capacity - (dustbin.fillPercentage / 100) * dustbin.capacity;
    const estimatedDaysToFill = Math.round(remainingCapacity / (dustbin.fillPercentage * 0.01));

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center"> {/* Adjusted for small screens */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center"> {/* Responsive container */}
                {/* Left Section: Text Information */}
                <div className="flex-1 text-center md:text-left"> {/* Text alignment adjusted */}
                    <h1 className="text-2xl font-bold mb-4">{dustbin.name}</h1>
                    <p className="flex justify-center md:justify-start items-center mb-2"> {/* Icons align properly */}
                        <FaRecycle className="mr-2 text-green-500" /> Fill Level: {dustbin.fillPercentage}%
                    </p>
                    <p className="flex justify-center md:justify-start items-center mb-2"> {/* Adjust for smaller screens */}
                        <FaMapMarkerAlt className="mr-2 text-red-500" /> Location: {dustbin.location}
                    </p>
                    <p>Capacity: {dustbin.capacity} Liters</p>
                    <p>Last Emptied: {dustbin.lastEmptied}</p>
                    <p className="flex justify-center md:justify-start items-center"> {/* Responsive icon alignment */}
                        <FaTrash className="mr-2 text-blue-500" /> Remaining Capacity: {remainingCapacity.toFixed(2)} Liters
                    </p>
                    <p>Estimated Days to Full Capacity: {estimatedDaysToFill} days</p>
                </div>

                {/* Right Section: Dustbin Image */}
                <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 mt-4 md:mt-0 md:ml-4"> {/* Responsive image size */}
                    <img
                        src={dustbin.image}
                        alt={dustbin.name}
                        className="w-full h-full object-cover rounded"
                    />
                </div>
            </div>
        </div>
    );
}
