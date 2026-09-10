import ParkPage from '../park-page/ParkPage';

export const metadata = {
  title: 'Kidepo Valley National Park | Je Fais Nature Safaris',
  description:
    'Explore Kidepo Valley National Park in northeastern Uganda, a remote wilderness destination with spectacular landscapes and wildlife.',
};

export default function KidepoPage() {
  return (
    <ParkPage
      name="Kidepo Valley National Park"
      region="Northeastern Uganda"
      highlight="Remote wilderness & diverse wildlife"
      description="One of Uganda's most remote and spectacular national parks, Kidepo Valley offers an off-the-beaten-path safari experience with diverse wildlife and vast open landscapes."
      activities={[
        'Game drives',
        'Cultural visits',
        'Birding',
        'Walking safaris',
      ]}
      image="/images/map_image_64.webp"
      imageAlt="Kidepo Valley National Park Uganda remote wilderness safari landscape"
    />
  );
}