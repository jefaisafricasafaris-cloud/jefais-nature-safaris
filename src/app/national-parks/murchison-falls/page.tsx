import ParkPage from '../park-page/ParkPage';

export const metadata = {
  title: 'Murchison Falls National Park | Je Fais Nature Safaris',
  description:
    'Explore Murchison Falls National Park in Uganda with game drives, Nile boat cruises and spectacular Murchison Falls.',
};

export default function MurchisonFallsPage() {
  return (
    <ParkPage
      name="Murchison Falls National Park"
      region="Northwestern Uganda"
      highlight="Nile boat cruise & Murchison Falls"
      description="Uganda's largest national park, where the Nile forces itself through a narrow gorge to create the spectacular Murchison Falls. The park offers excellent game drives, boat safaris and birding."
      activities={[
        'Boat cruise to the falls',
        'Game drives',
        'Nile delta birding',
        'Rhino tracking at Ziwa',
      ]}
      image="/images/map_image_19.webp"
      imageAlt="Murchison Falls National Park Nile River boat cruise Uganda safari"
    />
  );
}