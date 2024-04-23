import { notFound } from 'next/navigation';

const dustbinData = [
    { id: 1, name: 'Dustbin 1', fillPercentage: 65, location: 'Main Street', capacity: '100 Liters', lastEmptied: '2024-04-20' },
    { id: 2, name: 'Dustbin 2', fillPercentage: 85, location: 'Market Place', capacity: '120 Liters', lastEmptied: '2024-04-19' },
    { id: 3, name: 'Dustbin 3', fillPercentage: 45, location: 'City Center', capacity: '150 Liters', lastEmptied: '2024-04-18' },
];

export default function Dustbin({ params }) {
    const { id } = params;

    const dustbin = dustbinData.find((db) => db.id === parseInt(id, 10));

    if (!dustbin) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">{dustbin.name}</h1>
            <p>Fill Level: {dustbin.fillPercentage}%</p>
            <p>Location: {dustbin.location}</p>
            <p>Capacity: {dustbin.capacity}</p>
            <p>Last Emptied: {dustbin.lastEmptied}</p>
        </div>
    );
}
