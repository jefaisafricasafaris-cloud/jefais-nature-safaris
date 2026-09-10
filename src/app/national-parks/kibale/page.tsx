import ParkPage from '../park-page/ParkPage';

export const metadata = {
  title: 'Kibale National Park | Je Fais Nature Safaris',
  description:
    'Explore Kibale National Park in Uganda, renowned for chimpanzee trekking and its incredible diversity of primates.',
};

export default function KibalePage() {
  return (
    <ParkPage
      name="Kibale National Park"
      region="Western Uganda"
      highlight="Chimpanzee trekking"
      description="Kibale National Park is renowned for its primate diversity and chimpanzee trekking experiences. Visitors can also enjoy forest walks and explore the nearby Bigodi Wetland Sanctuary."
      activities={[
        'Chimpanzee trekking',
        'Primate walks',
        'Bigodi Wetland Sanctuary',
        'Birding',
      ]}
      image="/images/chimpanzee-kibale-q80.webp"
      imageAlt="Kibale National Park chimpanzee trekking Uganda primate forest"
    />
  );
}