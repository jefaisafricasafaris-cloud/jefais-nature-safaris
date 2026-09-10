import ParkPage from '../park-page/ParkPage';

export const metadata = {
  title: 'Bwindi Impenetrable National Park | Je Fais Nature Safaris',
  description:
    'Explore Bwindi Impenetrable National Park in Uganda, home to mountain gorillas and unforgettable gorilla trekking experiences.',
};

export default function BwindiPage() {
  return (
    <ParkPage
      name="Bwindi Impenetrable National Park"
      region="Southwestern Uganda"
      highlight="Mountain gorilla trekking"
      description="UNESCO World Heritage Site and home to mountain gorillas. Bwindi is one of Uganda's premier destinations for gorilla trekking, forest walks, birding and community experiences."
      activities={[
        'Gorilla trekking',
        'Forest walks',
        'Birding',
        'Community visits',
      ]}
      image="/images/65162.webp"
      imageAlt="Bwindi Impenetrable National Park Uganda mountain gorilla trekking forest"
    />
  );
}