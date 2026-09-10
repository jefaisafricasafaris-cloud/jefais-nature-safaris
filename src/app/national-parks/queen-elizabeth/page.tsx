import ParkPage from '../park-page/ParkPage';

export const metadata = {
  title: 'Queen Elizabeth National Park | Je Fais Nature Safaris',
  description:
    'Explore Queen Elizabeth National Park in Uganda, famous for wildlife, tree-climbing lions and Kazinga Channel boat safaris.',
};

export default function QueenElizabethPage() {
  return (
    <ParkPage
      name="Queen Elizabeth National Park"
      region="Western Uganda"
      highlight="Tree-climbing lions & boat safaris"
      description="Uganda's most visited national park, famous for tree-climbing lions, the Kazinga Channel boat safari and diverse ecosystems ranging from savannah to forest."
      activities={[
        'Game drives',
        'Boat safari',
        'Chimp trekking',
        'Birding',
      ]}
      image="/images/map_image_33.webp"
      imageAlt="Tree-climbing lion in Queen Elizabeth National Park Uganda wildlife safari"
    />
  );
}
