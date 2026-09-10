import ParkPage from '../park-page/ParkPage';

export const metadata = {
  title: 'Lake Mburo National Park | Je Fais Nature Safaris',
  description:
    'Explore Lake Mburo National Park in Uganda, known for zebra, impala, walking safaris, boat trips and beautiful landscapes.',
};

export default function LakeMburoPage() {
  return (
    <ParkPage
      name="Lake Mburo National Park"
      region="Western Uganda"
      highlight="Zebra, impala & walking safaris"
      description="Lake Mburo offers an intimate safari experience with zebra, impala, topi and other wildlife. Visitors can enjoy game drives, walking safaris and boat experiences."
      activities={[
        'Game drives',
        'Walking safaris',
        'Boat safari',
        'Night game drives',
        'Horse riding',
      ]}
      image="/images/map_image_28.webp"
      imageAlt="Lake Mburo National Park Uganda zebra impala walking safari"
    />
  );
}