import { notFound } from 'next/navigation';
import Image from 'next/image';
import { FaRecycle, FaTrash, FaCalendarAlt, FaCubes, FaTrashAlt } from 'react-icons/fa';

// Updated dustbin data to include 'lidStatus' and two image sources
const dustbinData = [
    {
        id: 1,
        name: 'Dustbin 1',
        fillPercentage: 65,
        capacity: 100,
        lastEmptied: '2024-04-20',
        lidStatus: 'open', // Lid status added
        imageOpen: '/images/iconImage.png', // Image for open lid
        imageClosed: '/images/iconImage.png', // Image for closed lid
    },
    {
        id: 2,
        name: 'Dustbin 2',
        fillPercentage: 85,
        capacity: 120,
        lastEmptied: '2024-04-19',
        lidStatus: 'closed',
        imageOpen: '/images/iconImage.png',
        imageClosed: '/images/iconImage.png',
    },
    {
        id: 3,
        name: 'Dustbin 3',
        fillPercentage: 45,
        capacity: 150,
        lastEmptied: '2024-04-18',
        lidStatus: 'open',
        imageOpen: '/images/iconImage.png',
        imageClosed: '/images/iconImage.png',
    },
    {
        id: 4,
        name: 'Dustbin 4',
        fillPercentage: 60,
        capacity: 150,
        lastEmptied: '2024-04-15',
        lidStatus: 'closed',
        imageOpen: '/images/iconImage.png',
        imageClosed: '/images/iconImage.png',
    },
];

export default function Dustbin({ params }) {
    const { id } = params;
    const dustbin = dustbinData.find((db) => db.id === parseInt(id, 10));

    if (!dustbin) {
        notFound();
    }

    const remainingCapacity = dustbin.capacity - (dustbin.fillPercentage / 100) * dustbin.capacity;
    const estimatedDaysToFill = Math.round(remainingCapacity / (dustbin.fillPercentage * 0.01));

    // Choose the appropriate image based on the lid status
    const imageSrc = dustbin.lidStatus === 'open' ? dustbin.imageOpen : dustbin.imageClosed;

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center">
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
                <div className="flex-1">
                    <h1 className="text-2xl font-bold mb-4">{dustbin.name}</h1>
                    <p className="flex items-center mb-2">
                        <FaRecycle className="mr-2 text-green-500" /> Fill Level: {dustbin.fillPercentage}%
                    </p>
                    <p className="flex items-center mb-2">
                        <FaCubes className="mr-2 text-purple-500" /> Capacity: {dustbin.capacity} Liters
                    </p>
                    <p className="flex items-center mb-2">
                        <FaCalendarAlt className="mr-2 text-orange-500" /> Last Emptied: {dustbin.lastEmptied}
                    </p>
                    <p className="flex items-center mb-2">
                        <FaTrashAlt className="mr-2 text-blue-500" /> Lid Status: {dustbin.lidStatus}
                    </p>
                    <p>Estimated Days to Full Capacity: {estimatedDaysToFill} days</p>
                </div>

                <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 mt-4 md:mt-0 md:ml-4 flex items-center justify-center">
                    <Image
                        src={imageSrc} // Use the appropriate image based on lid status
                        alt={dustbin.name}
                        width={600}
                        height={700}
                        className="w-full h-full object-cover rounded"
                    />
                </div>
            </div>
        </div>
    );
}
