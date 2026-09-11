export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  accommodation: string;
  meals?: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  image?: string;
  duration: string;
  durationDays: number;
  summary: string;
  highlights: string[];
  destinations: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  icon: string;
  bg: string;
  badge?: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
}

export const tourPackages: TourPackage[] = [
  {
    id: '7-day-uganda-safari',
    slug: '7-day-uganda-safari',
    title: '7-Day Uganda Safari Vacation',
    image: '/images/Tree-climbing-lions-in-Uganda.webp',
    duration: '7 Days',
    durationDays: 7,
    summary:
      'Experience the best of Uganda on a memorable safari through Murchison Falls, Kibale Forest and Queen Elizabeth National Park.',
    highlights: [
      'Murchison Falls National Park',
      'Kibale Forest',
      'Chimpanzee Experience',
      'Queen Elizabeth National Park',
      'Wildlife Game Drives',
      'Boat Safari',
    ],
    destinations: [
      'Murchison Falls National Park',
      'Kibale National Park',
      'Queen Elizabeth National Park',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Entebbe / Kampala to Murchison Falls',
        description:
          'Begin your Uganda safari journey and travel north towards Murchison Falls National Park.',
        activities: [
          'Scenic drive',
          'Ziwa Rhino Sanctuary option',
          'Arrival at Murchison Falls',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Lunch and dinner',
      },
      {
        day: 2,
        title: 'Murchison Falls Wildlife Safari',
        description:
          'Enjoy an early morning game drive through the northern sector of Murchison Falls National Park.',
        activities: [
          'Morning game drive',
          'Wildlife viewing',
          'Nile boat cruise',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 3,
        title: 'Murchison Falls to Kibale',
        description:
          'Travel through beautiful Ugandan countryside towards Kibale Forest.',
        activities: [
          'Scenic countryside drive',
          'Local communities',
          'Arrival in Kibale',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 4,
        title: 'Chimpanzee Trekking in Kibale',
        description:
          'Explore Kibale Forest National Park on a chimpanzee trekking experience.',
        activities: [
          'Chimpanzee trekking',
          'Forest walk',
          'Primate viewing',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 5,
        title: 'Kibale to Queen Elizabeth National Park',
        description:
          'Continue to Queen Elizabeth National Park with opportunities to enjoy the scenic landscapes of western Uganda.',
        activities: [
          'Scenic drive',
          'Crater lakes',
          'Arrival at Queen Elizabeth',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 6,
        title: 'Queen Elizabeth Wildlife Safari',
        description:
          'Discover the wildlife of Queen Elizabeth National Park during a full safari day.',
        activities: [
          'Morning game drive',
          'Wildlife viewing',
          'Optional boat cruise',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 7,
        title: 'Queen Elizabeth to Entebbe / Kampala',
        description:
          'Enjoy the final scenic drive of your safari as you return to Entebbe or Kampala.',
        activities: [
          'Morning drive',
          'Scenic countryside',
          'Departure',
        ],
        accommodation: 'End of safari',
        meals: 'Breakfast and lunch',
      },
    ],
    inclusions: [
      'Safari transportation',
      'Professional driver-guide',
      'Accommodation as selected',
      'Activities specified in the itinerary',
      'Park entry where applicable',
      'Game drives',
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Personal expenses',
      'Travel insurance',
      'Tips and gratuities',
      'Activities not specified in the itinerary',
    ],
    icon: '🦁',
    bg: 'bg-amber-50',
    badge: 'Most Popular',
    category: 'Wildlife Safari',
    seoTitle:
      '7-Day Uganda Safari Vacation | Murchison, Kibale & Queen Elizabeth',
    seoDescription:
      'Explore Uganda on a 7-day safari covering Murchison Falls, Kibale Forest and Queen Elizabeth National Park with wildlife and chimpanzee experiences.',
  },

  {
    id: '6-day-uganda-safari',
    slug: '6-day-uganda-safari',
    title: '6-Day Uganda Safari',
    image: '/images/Juvenile-Chimp-in-Kibale-National-Park-Uganda.webp',
    duration: '6 Days',
    durationDays: 6,
    summary:
      'Discover Uganda through a combination of wildlife, forest and cultural experiences across some of the country’s remarkable safari destinations.',
    highlights: [
      'Murchison Falls',
      'Kibale Forest',
      'Chimpanzee Trekking',
      'Queen Elizabeth',
      'Game Drives',
      'Nile Experiences',
    ],
    destinations: [
      'Murchison Falls National Park',
      'Kibale National Park',
      'Queen Elizabeth National Park',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Entebbe / Kampala to Murchison Falls',
        description:
          'Depart for Murchison Falls National Park and enjoy the changing landscapes of Uganda along the way.',
        activities: [
          'Scenic drive',
          'Countryside experience',
          'Arrival at Murchison Falls',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Lunch and dinner',
      },
      {
        day: 2,
        title: 'Murchison Falls Safari',
        description:
          'Explore the park with a morning game drive and a boat experience on the Victoria Nile.',
        activities: [
          'Game drive',
          'Wildlife viewing',
          'Boat cruise',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 3,
        title: 'Murchison Falls to Kibale',
        description:
          'Travel towards Kibale Forest through scenic western Uganda.',
        activities: [
          'Scenic drive',
          'Countryside views',
          'Arrival in Kibale',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 4,
        title: 'Chimpanzee Trekking',
        description:
          'Explore Kibale Forest and search for chimpanzees and other forest primates.',
        activities: [
          'Chimpanzee trekking',
          'Forest exploration',
          'Primate viewing',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 5,
        title: 'Kibale to Queen Elizabeth',
        description:
          'Continue towards Queen Elizabeth National Park.',
        activities: [
          'Scenic drive',
          'Crater lake views',
          'Wildlife area exploration',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 6,
        title: 'Queen Elizabeth to Entebbe / Kampala',
        description:
          'Enjoy your final safari drive before returning to Entebbe or Kampala.',
        activities: [
          'Morning game drive',
          'Scenic drive',
          'Departure',
        ],
        accommodation: 'End of safari',
        meals: 'Breakfast and lunch',
      },
    ],
    inclusions: [
      'Safari transportation',
      'Professional driver-guide',
      'Accommodation as selected',
      'Activities specified in the itinerary',
      'Park entry where applicable',
      'Game drives',
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities',
      'Activities not specified in the itinerary',
    ],
    icon: '🐒',
    bg: 'bg-green-50',
    category: 'Wildlife & Chimpanzee Safari',
    seoTitle:
      '6-Day Uganda Safari | Murchison Falls, Kibale & Queen Elizabeth',
    seoDescription:
      'Experience a 6-day Uganda safari with Murchison Falls wildlife, Kibale chimpanzee trekking and Queen Elizabeth National Park.',
  },

  {
    id: '5-day-uganda-safari',
    slug: '5-day-uganda-safari',
    title: '5-Day Uganda Safari',
    image: '/images/murchison-falls2.webp',
    duration: '5 Days',
    durationDays: 5,
    summary:
      'A carefully planned Uganda safari combining wildlife viewing, spectacular landscapes and unforgettable experiences in western Uganda.',
    highlights: [
      'Murchison Falls',
      'Wildlife Game Drives',
      'Boat Cruise',
      'Queen Elizabeth National Park',
      'Uganda Landscapes',
      'Safari Experience',
    ],
    destinations: [
      'Murchison Falls National Park',
      'Queen Elizabeth National Park',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Entebbe / Kampala to Murchison Falls',
        description:
          'Start your safari journey towards Murchison Falls National Park.',
        activities: [
          'Scenic drive',
          'Countryside experience',
          'Arrival at the park',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Lunch and dinner',
      },
      {
        day: 2,
        title: 'Murchison Falls Wildlife Safari',
        description:
          'Enjoy wildlife viewing and explore the Victoria Nile.',
        activities: [
          'Morning game drive',
          'Wildlife viewing',
          'Nile boat cruise',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 3,
        title: 'Murchison Falls to Queen Elizabeth',
        description:
          'Travel south towards Queen Elizabeth National Park.',
        activities: [
          'Scenic drive',
          'Uganda countryside',
          'Arrival at Queen Elizabeth',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 4,
        title: 'Queen Elizabeth Wildlife Safari',
        description:
          'Explore Queen Elizabeth National Park on a wildlife safari.',
        activities: [
          'Game drive',
          'Wildlife viewing',
          'Optional boat cruise',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 5,
        title: 'Queen Elizabeth to Entebbe / Kampala',
        description:
          'Return to Entebbe or Kampala after your Uganda safari experience.',
        activities: [
          'Morning safari drive',
          'Scenic journey',
          'Departure',
        ],
        accommodation: 'End of safari',
        meals: 'Breakfast and lunch',
      },
    ],
    inclusions: [
      'Safari transportation',
      'Professional driver-guide',
      'Accommodation as selected',
      'Activities specified in the itinerary',
      'Park entry where applicable',
      'Game drives',
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities',
      'Activities not specified in the itinerary',
    ],
    icon: '🦓',
    bg: 'bg-yellow-50',
    category: 'Wildlife Safari',
    seoTitle: '5-Day Uganda Safari | Murchison Falls & Queen Elizabeth',
    seoDescription:
      'Enjoy a 5-day Uganda wildlife safari featuring Murchison Falls and Queen Elizabeth National Park with game drives and a Nile boat cruise.',
  },

  {
    id: '4-day-uganda-holiday-safari',
    slug: '4-day-uganda-holiday-safari',
    title: '4-Day Uganda Holiday Safari',
    image: '/images/ziwa-rhino.webp',
    duration: '4 Days',
    durationDays: 4,
    summary:
      'Explore Uganda on a compact safari featuring Ziwa Rhino Sanctuary, Murchison Falls National Park and a return through Kampala.',
    highlights: [
      'Ziwa Rhino Sanctuary',
      'Rhino Tracking',
      'Murchison Falls',
      'Wildlife Game Drive',
      'Nile Boat Cruise',
      'Top of the Falls',
    ],
    destinations: [
      'Ziwa Rhino Sanctuary',
      'Murchison Falls National Park',
      'Kampala',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kampala / Entebbe to Ziwa Rhino Sanctuary',
        description:
          'Begin your safari with a journey north towards Ziwa Rhino Sanctuary.',
        activities: [
          'Scenic drive',
          'Rhino tracking',
          'Nature experience',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Lunch and dinner',
      },
      {
        day: 2,
        title: 'Ziwa Rhino Sanctuary to Murchison Falls',
        description:
          'Continue towards Murchison Falls National Park.',
        activities: [
          'Morning nature experience',
          'Scenic drive',
          'Arrival at Murchison Falls',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 3,
        title: 'Murchison Falls Safari Experience',
        description:
          'Enjoy wildlife viewing and experience the Nile and spectacular Murchison Falls.',
        activities: [
          'Morning game drive',
          'Boat cruise',
          'Top of the Falls',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 4,
        title: 'Murchison Falls to Kampala / Entebbe',
        description:
          'Return south after your Murchison Falls safari.',
        activities: [
          'Morning drive',
          'Scenic journey',
          'Departure',
        ],
        accommodation: 'End of safari',
        meals: 'Breakfast and lunch',
      },
    ],
    inclusions: [
      'Safari transportation',
      'Professional driver-guide',
      'Accommodation as selected',
      'Activities specified in the itinerary',
      'Park entry where applicable',
      'Game drives',
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities',
      'Activities not specified in the itinerary',
    ],
    icon: '🦏',
    bg: 'bg-stone-50',
    category: 'Uganda Holiday Safari',
    seoTitle:
      '4-Day Uganda Holiday Safari | Ziwa Rhino & Murchison Falls',
    seoDescription:
      'Explore Uganda on a 4-day holiday safari featuring Ziwa Rhino Sanctuary, Murchison Falls National Park, wildlife and the Nile.',
  },

  {
    id: '3-day-murchison-falls-safari',
    slug: '3-day-murchison-falls-safari',
    title: '3-Day Murchison Falls Holiday Safari',
    image: '/images/buffalo.webp',
    duration: '3 Days',
    durationDays: 3,
    summary:
      'Experience Murchison Falls National Park with wildlife game drives, a Nile boat cruise, the spectacular Top of the Falls and birdwatching.',
    highlights: [
      'Murchison Falls National Park',
      'Wildlife Game Drive',
      'Nile Boat Cruise',
      'Top of the Falls',
      'Bird Watching',
      'Uganda Wildlife',
    ],
    destinations: [
      'Murchison Falls National Park',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kampala / Entebbe to Murchison Falls',
        description:
          'Travel north towards Murchison Falls National Park and begin your safari experience.',
        activities: [
          'Scenic drive',
          'Countryside experience',
          'Arrival at the park',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Lunch and dinner',
      },
      {
        day: 2,
        title: 'Murchison Falls Wildlife & Nile Safari',
        description:
          'Enjoy a full day of wildlife and river experiences in Murchison Falls National Park.',
        activities: [
          'Morning game drive',
          'Wildlife viewing',
          'Nile boat cruise',
          'Bird watching',
          'Top of the Falls',
        ],
        accommodation: 'Lodge or safari camp',
        meals: 'Breakfast, lunch and dinner',
      },
      {
        day: 3,
        title: 'Murchison Falls to Kampala / Entebbe',
        description:
          'Enjoy a final morning experience before returning to Kampala or Entebbe.',
        activities: [
          'Morning drive',
          'Scenic journey',
          'Departure',
        ],
        accommodation: 'End of safari',
        meals: 'Breakfast and lunch',
      },
    ],
    inclusions: [
      'Safari transportation',
      'Professional driver-guide',
      'Accommodation as selected',
      'Activities specified in the itinerary',
      'Park entry where applicable',
      'Game drives',
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities',
      'Activities not specified in the itinerary',
    ],
    icon: '🐃',
    bg: 'bg-orange-50',
    category: 'Murchison Falls Safari',
    seoTitle:
      '3-Day Murchison Falls Safari | Wildlife, Boat Cruise & Falls',
    seoDescription:
      'Enjoy a 3-day Murchison Falls safari with wildlife game drives, a Nile boat cruise, birdwatching and the spectacular Top of the Falls.',
  },
];export function getPackageBySlug(slug: string): TourPackage | undefined {
  return tourPackages.find((pkg) => pkg.slug === slug);
}