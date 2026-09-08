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
    duration: '7 Days',
    durationDays: 7,
    summary:
      'Explore Murchison Falls, Kibale Forest and Queen Elizabeth National Park through wildlife encounters, chimpanzee trekking and boat safaris across the Pearl of Africa.',
    highlights: [
      'Wildlife Game Drives',
      'Boat Safari on the Nile',
      'Chimpanzee Trekking',
      'Bigodi Wetland Sanctuary',
      'Kazinga Channel Cruise',
      'Murchison Falls',
      'Kibale Forest',
      'Queen Elizabeth National Park',
      'Crater Lakes',
      'Kasenyi Plains',
    ],
    destinations: [
      'Murchison Falls National Park',
      'Kibale Forest National Park',
      'Queen Elizabeth National Park',
    ],
    badge: 'Most Popular',
    category: 'Wildlife',
    seoTitle: '7-Day Uganda Safari | Murchison Falls, Kibale & Queen Elizabeth | Je Fais Nature Safaris',
    seoDescription:
      'Discover Uganda on a 7-day safari covering Murchison Falls, Kibale Forest chimpanzee trekking and Queen Elizabeth National Park. Request a custom quote from Je Fais Nature Safaris.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Transfer to Murchison Falls National Park',
        description:
          'Upon arrival at Entebbe International Airport, you will be met by your Je Fais Nature Safaris driver/guide and transferred to Murchison Falls National Park. The drive takes approximately 4–5 hours, passing through the lush Ugandan countryside. En route, you may stop at Ziwa Rhino Sanctuary for an optional rhino tracking experience. Arrive at your lodge in the evening, settle in and enjoy dinner.',
        activities: [
          'Airport pickup and welcome briefing',
          'Scenic drive through Uganda countryside',
          'Optional stopover at Ziwa Rhino Sanctuary',
          'Arrival at Murchison Falls area lodge',
        ],
        accommodation: 'Lodge/camp at Murchison Falls National Park',
        meals: 'Dinner',
      },
      {
        day: 2,
        title: 'Game Drive and Boat Safari in Murchison Falls',
        description:
          'Rise early for a morning game drive in Murchison Falls National Park — one of Uganda\'s largest and most spectacular parks. The park is home to lions, elephants, giraffes, buffaloes, Uganda kob, waterbuck and much more. In the afternoon, embark on a thrilling boat safari along the Nile River to the base of the magnificent Murchison Falls, where the entire Nile forces itself through a narrow 7-metre gorge. Watch hippos, crocodiles and a remarkable variety of birdlife along the riverbanks.',
        activities: [
          'Morning game drive on the northern bank',
          'Afternoon boat safari to the base of Murchison Falls',
          'Hippo and crocodile watching',
          'Birdwatching along the Nile',
          'Optional hike to the top of Murchison Falls',
        ],
        accommodation: 'Lodge/camp at Murchison Falls National Park',
        meals: 'Breakfast, Lunch, Dinner',
      },
      {
        day: 3,
        title: 'Transfer to Kibale Forest National Park',
        description:
          'After breakfast, depart Murchison Falls and drive south towards Kibale Forest National Park. The journey takes approximately 5–6 hours through Fort Portal town, passing through tea plantations and the scenic Rwenzori foothills. Arrive at Kibale in the afternoon, check in to your accommodation and prepare for the following day\'s chimpanzee trekking experience.',
        activities: [
          'Scenic drive through Fort Portal and tea country',
          'Views of the Rwenzori Mountains',
          'Afternoon arrival and lodge check-in',
          'Evening briefing on chimpanzee trekking',
        ],
        accommodation: 'Lodge/camp near Kibale Forest National Park',
        meals: 'Breakfast, Dinner',
      },
      {
        day: 4,
        title: 'Chimpanzee Trekking in Kibale Forest',
        description:
          'Today is dedicated to chimpanzee trekking in Kibale Forest National Park — home to the highest density of primates in Africa and one of the best places in the world to track habituated chimpanzees. After a morning briefing, set off with your ranger guide into the forest in search of chimpanzees. You will also encounter red-tailed monkeys, grey-cheeked mangabeys, L\'Hoest\'s monkeys and a rich variety of forest birds. In the afternoon, visit the Bigodi Wetland Sanctuary for a guided nature walk through papyrus swamps and forest, spotting more primates and over 200 bird species.',
        activities: [
          'Morning chimpanzee trekking in Kibale Forest',
          'Primate encounters — red-tailed monkeys, mangabeys',
          'Afternoon guided walk at Bigodi Wetland Sanctuary',
          'Birdwatching — over 200 species recorded',
          'Community interaction at Bigodi village',
        ],
        accommodation: 'Lodge/camp near Kibale Forest National Park',
        meals: 'Breakfast, Lunch, Dinner',
      },
      {
        day: 5,
        title: 'Transfer to Queen Elizabeth National Park',
        description:
          'After breakfast, depart Kibale Forest and drive south to Queen Elizabeth National Park. En route, stop to enjoy the spectacular Crater Lakes region — a landscape of volcanic craters filled with water, offering breathtaking panoramic views. Arrive at Queen Elizabeth National Park in the afternoon and check in to your lodge on the Mweya Peninsula, overlooking the Kazinga Channel.',
        activities: [
          'Scenic drive through the Crater Lakes region',
          'Panoramic viewpoints over volcanic crater lakes',
          'Arrival at Mweya Peninsula, Queen Elizabeth NP',
          'Afternoon at leisure or optional game drive',
        ],
        accommodation: 'Lodge/camp at Queen Elizabeth National Park (Mweya area)',
        meals: 'Breakfast, Dinner',
      },
      {
        day: 6,
        title: 'Game Drive and Boat Safari in Queen Elizabeth',
        description:
          'Spend a full day exploring Queen Elizabeth National Park — Uganda\'s most visited park, famous for its tree-climbing lions in the Ishasha sector, large herds of buffalo and elephant, and the remarkable Kazinga Channel. Begin with a morning game drive across the Kasenyi Plains, searching for lions, leopards, elephants, buffaloes, Uganda kob and topi. In the afternoon, enjoy a boat safari along the Kazinga Channel — a natural waterway connecting Lake Edward and Lake George — where hippos, crocodiles, elephants and hundreds of bird species gather along the banks.',
        activities: [
          'Morning game drive on the Kasenyi Plains',
          'Search for lions, elephants, buffaloes, leopards',
          'Afternoon boat safari on the Kazinga Channel',
          'Hippo, crocodile and elephant watching from the water',
          'Exceptional birdwatching — over 600 species in the park',
        ],
        accommodation: 'Lodge/camp at Queen Elizabeth National Park',
        meals: 'Breakfast, Lunch, Dinner',
      },
      {
        day: 7,
        title: 'Transfer to Entebbe and Departure',
        description:
          'After a final breakfast at your lodge, depart Queen Elizabeth National Park and drive back to Entebbe for your international departure. The journey takes approximately 5–6 hours. Your driver/guide will ensure you arrive at Entebbe International Airport in good time for your flight. Depart Uganda with unforgettable memories of the Pearl of Africa.',
        activities: [
          'Final breakfast at lodge',
          'Scenic drive back to Entebbe',
          'Airport drop-off and departure',
        ],
        accommodation: 'N/A — departure day',
        meals: 'Breakfast',
      },
    ],
    inclusions: [
      'Airport transfers (arrival and departure)',
      'All accommodation as per itinerary',
      'Meals as indicated in the itinerary',
      '4x4 safari vehicle with pop-up roof',
      'English-speaking professional driver/guide',
      'All game drives as per itinerary',
      'Boat safari at Murchison Falls',
      'Boat safari on the Kazinga Channel',
      'Chimpanzee trekking permit (Kibale Forest)',
      'Guided nature walk at Bigodi Wetland Sanctuary',
      'All national park entrance fees',
      'Bottled drinking water throughout the safari',
    ],
    exclusions: [
      'International flights',
      'Uganda visa fees',
      'Travel insurance',
      'Alcoholic beverages',
      'Personal expenses and shopping',
      'Tips and gratuities for guides and lodge staff',
      'Optional activities not listed in the itinerary',
      'Gorilla trekking permit (available on request)',
      'Personal items and medication',
    ],
    icon: '🌿',
    bg: 'bg-green-800',
  },
  {
    id: '6-day-uganda-safari',
    slug: '6-day-uganda-safari',
    title: '6-Day Uganda Safari',
    duration: '6 Days',
    durationDays: 6,
    summary:
      'A comprehensive Uganda safari covering Murchison Falls, Kibale Forest chimpanzee trekking and Queen Elizabeth National Park, with a final game drive before returning to Entebbe.',
    highlights: [
      'Wildlife Game Drives',
      'Boat Safari on the Nile',
      'Chimpanzee Trekking',
      'Bigodi Wetland Sanctuary',
      'Kazinga Channel Cruise',
      'Murchison Falls',
      'Kibale Forest',
      'Queen Elizabeth National Park',
    ],
    destinations: [
      'Murchison Falls National Park',
      'Kibale Forest National Park',
      'Queen Elizabeth National Park',
    ],
    badge: undefined,
    category: 'Wildlife',
    seoTitle: '6-Day Uganda Safari | Murchison Falls, Kibale & Queen Elizabeth | Je Fais Nature Safaris',
    seoDescription:
      'Experience a 6-day Uganda safari through Murchison Falls, Kibale Forest and Queen Elizabeth National Park. Request your personalized quote from Je Fais Nature Safaris.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Transfer to Murchison Falls National Park',
        description:
          'Upon arrival at Entebbe International Airport, you will be met by your Je Fais Nature Safaris driver/guide and transferred to Murchison Falls National Park. The drive takes approximately 4–5 hours through the Ugandan countryside. Arrive at your lodge in the evening, settle in and enjoy dinner.',
        activities: [
          'Airport pickup and welcome briefing',
          'Scenic drive through Uganda countryside',
          'Arrival at Murchison Falls area lodge',
        ],
        accommodation: 'Lodge/camp at Murchison Falls National Park',
        meals: 'Dinner',
      },
      {
        day: 2,
        title: 'Game Drive and Boat Safari in Murchison Falls',
        description:
          'Rise early for a morning game drive in Murchison Falls National Park. The park is home to lions, elephants, giraffes, buffaloes, Uganda kob and waterbuck. In the afternoon, enjoy a boat safari along the Nile River to the base of the magnificent Murchison Falls, watching hippos, crocodiles and abundant birdlife along the riverbanks.',
        activities: [
          'Morning game drive on the northern bank',
          'Afternoon boat safari to the base of Murchison Falls',
          'Hippo and crocodile watching',
          'Birdwatching along the Nile',
        ],
        accommodation: 'Lodge/camp at Murchison Falls National Park',
        meals: 'Breakfast, Lunch, Dinner',
      },
      {
        day: 3,
        title: 'Transfer to Kibale Forest National Park',
        description:
          'After breakfast, depart Murchison Falls and drive south towards Kibale Forest National Park. The journey passes through Fort Portal town and the scenic Rwenzori foothills. Arrive at Kibale in the afternoon, check in to your accommodation and prepare for the following day\'s chimpanzee trekking.',
        activities: [
          'Scenic drive through Fort Portal and tea country',
          'Views of the Rwenzori Mountains',
          'Afternoon arrival and lodge check-in',
          'Evening briefing on chimpanzee trekking',
        ],
        accommodation: 'Lodge/camp near Kibale Forest National Park',
        meals: 'Breakfast, Dinner',
      },
      {
        day: 4,
        title: 'Chimpanzee Trekking in Kibale Forest',
        description:
          'Today is dedicated to chimpanzee trekking in Kibale Forest National Park. After a morning briefing, set off with your ranger guide into the forest in search of habituated chimpanzees. In the afternoon, visit the Bigodi Wetland Sanctuary for a guided nature walk through papyrus swamps and forest.',
        activities: [
          'Morning chimpanzee trekking in Kibale Forest',
          'Primate encounters — red-tailed monkeys, mangabeys',
          'Afternoon guided walk at Bigodi Wetland Sanctuary',
          'Birdwatching along the wetland trail',
        ],
        accommodation: 'Lodge/camp near Kibale Forest National Park',
        meals: 'Breakfast, Lunch, Dinner',
      },
      {
        day: 5,
        title: 'Transfer to Queen Elizabeth National Park',
        description:
          'After breakfast, depart Kibale Forest and drive south to Queen Elizabeth National Park. En route, enjoy the spectacular Crater Lakes region. Arrive at Queen Elizabeth National Park in the afternoon and check in to your lodge.',
        activities: [
          'Scenic drive through the Crater Lakes region',
          'Panoramic viewpoints over volcanic crater lakes',
          'Arrival at Queen Elizabeth National Park',
          'Afternoon at leisure',
        ],
        accommodation: 'Lodge/camp at Queen Elizabeth National Park',
        meals: 'Breakfast, Dinner',
      },
      {
        day: 6,
        title: 'Game Drive and Transfer to Entebbe',
        description:
          'Rise early for a final morning game drive in Queen Elizabeth National Park across the Kasenyi Plains, searching for lions, elephants, buffaloes and Uganda kob. After the game drive, depart for Entebbe. The journey takes approximately 5–6 hours. Your driver/guide will ensure you arrive at Entebbe International Airport in good time for your departure.',
        activities: [
          'Early morning game drive on the Kasenyi Plains',
          'Search for lions, elephants, buffaloes',
          'Departure drive to Entebbe',
          'Airport drop-off',
        ],
        accommodation: 'N/A — departure day',
        meals: 'Breakfast',
      },
    ],
    inclusions: [
      'Airport transfers (arrival and departure)',
      'All accommodation as per itinerary',
      'Meals as indicated in the itinerary',
      '4x4 safari vehicle with pop-up roof',
      'English-speaking professional driver/guide',
      'All game drives as per itinerary',
      'Boat safari at Murchison Falls',
      'Chimpanzee trekking permit (Kibale Forest)',
      'Guided nature walk at Bigodi Wetland Sanctuary',
      'All national park entrance fees',
      'Bottled drinking water throughout the safari',
    ],
    exclusions: [
      'International flights',
      'Uganda visa fees',
      'Travel insurance',
      'Alcoholic beverages',
      'Personal expenses and shopping',
      'Tips and gratuities for guides and lodge staff',
      'Optional activities not listed in the itinerary',
      'Personal items and medication',
    ],
    icon: '🐘',
    bg: 'bg-emerald-800',
  },
  {
    id: '5-day-uganda-safari',
    slug: '5-day-uganda-safari',
    title: '5-Day Uganda Safari',
    duration: '5 Days',
    durationDays: 5,
    summary:
      'A focused Uganda safari combining the spectacular Murchison Falls with chimpanzee trekking in Kibale Forest — perfect for travellers with limited time who want an authentic wildlife experience.',
    highlights: [
      'Wildlife Game Drives',
      'Boat Safari on the Nile',
      'Chimpanzee Trekking',
      'Murchison Falls',
      'Kibale Forest',
      'Birdwatching',
      'Nature Walks',
    ],
    destinations: [
      'Murchison Falls National Park',
      'Kibale Forest National Park',
    ],
    badge: undefined,
    category: 'Wildlife',
    seoTitle: '5-Day Uganda Safari | Murchison Falls & Kibale Chimpanzee Trekking | Je Fais Nature Safaris',
    seoDescription:
      'Explore Murchison Falls and Kibale Forest on a 5-day Uganda safari with chimpanzee trekking and boat safaris. Request your personalized quote from Je Fais Nature Safaris.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Transfer to Murchison Falls National Park',
        description:
          'Upon arrival at Entebbe International Airport, you will be met by your Je Fais Nature Safaris driver/guide and transferred to Murchison Falls National Park. The drive takes approximately 4–5 hours through the Ugandan countryside. Arrive at your lodge in the evening, settle in and enjoy dinner.',
        activities: [
          'Airport pickup and welcome briefing',
          'Scenic drive through Uganda countryside',
          'Arrival at Murchison Falls area lodge',
        ],
        accommodation: 'Lodge/camp at Murchison Falls National Park',
        meals: 'Dinner',
      },
      {
        day: 2,
        title: 'Game Drive and Boat Safari in Murchison Falls',
        description:
          'Rise early for a morning game drive in Murchison Falls National Park. The park is home to lions, elephants, giraffes, buffaloes, Uganda kob and waterbuck. In the afternoon, enjoy a boat safari along the Nile River to the base of the magnificent Murchison Falls, watching hippos, crocodiles and abundant birdlife.',
        activities: [
          'Morning game drive on the northern bank',
          'Afternoon boat safari to the base of Murchison Falls',
          'Hippo and crocodile watching',
          'Birdwatching along the Nile',
          'Optional hike to the top of Murchison Falls',
        ],
        accommodation: 'Lodge/camp at Murchison Falls National Park',
        meals: 'Breakfast, Lunch, Dinner',
      },
      {
        day: 3,
        title: 'Transfer to Kibale Forest National Park',
        description:
          'After breakfast, depart Murchison Falls and drive south towards Kibale Forest National Park. The journey passes through Fort Portal town and the scenic Rwenzori foothills. Arrive at Kibale in the afternoon, check in to your accommodation and prepare for the following day\'s chimpanzee trekking.',
        activities: [
          'Scenic drive through Fort Portal and tea country',
          'Views of the Rwenzori Mountains',
          'Afternoon arrival and lodge check-in',
          'Evening briefing on chimpanzee trekking',
        ],
        accommodation: 'Lodge/camp near Kibale Forest National Park',
        meals: 'Breakfast, Dinner',
      },
      {
        day: 4,
        title: 'Chimpanzee Trekking in Kibale Forest',
        description:
          'Today is dedicated to chimpanzee trekking in Kibale Forest National Park — home to the highest density of primates in Africa. After a morning briefing, set off with your ranger guide into the forest in search of habituated chimpanzees. You will also encounter red-tailed monkeys, grey-cheeked mangabeys and a rich variety of forest birds.',
        activities: [
          'Morning chimpanzee trekking in Kibale Forest',
          'Primate encounters — red-tailed monkeys, mangabeys',
          'Forest birdwatching',
          'Afternoon at leisure or optional nature walk',
        ],
        accommodation: 'Lodge/camp near Kibale Forest National Park',
        meals: 'Breakfast, Lunch, Dinner',
      },
      {
        day: 5,
        title: 'Transfer to Entebbe and Departure',
        description:
          'After a final breakfast at your lodge, depart Kibale Forest and drive back to Entebbe for your international departure. The journey takes approximately 4–5 hours. Your driver/guide will ensure you arrive at Entebbe International Airport in good time for your flight.',
        activities: [
          'Final breakfast at lodge',
          'Scenic drive back to Entebbe',
          'Airport drop-off and departure',
        ],
        accommodation: 'N/A — departure day',
        meals: 'Breakfast',
      },
    ],
    inclusions: [
      'Airport transfers (arrival and departure)',
      'All accommodation as per itinerary',
      'Meals as indicated in the itinerary',
      '4x4 safari vehicle with pop-up roof',
      'English-speaking professional driver/guide',
      'All game drives as per itinerary',
      'Boat safari at Murchison Falls',
      'Chimpanzee trekking permit (Kibale Forest)',
      'All national park entrance fees',
      'Bottled drinking water throughout the safari',
    ],
    exclusions: [
      'International flights',
      'Uganda visa fees',
      'Travel insurance',
      'Alcoholic beverages',
      'Personal expenses and shopping',
      'Tips and gratuities for guides and lodge staff',
      'Optional activities not listed in the itinerary',
      'Personal items and medication',
    ],
    icon: '🦁',
    bg: 'bg-amber-800',
  },
  {
    id: '4-day-uganda-holiday-safari',
    slug: '4-day-uganda-holiday-safari',
    title: '4-Day Uganda Holiday Safari',
    duration: '4 Days',
    durationDays: 4,
    summary:
      'A memorable Uganda holiday combining Ziwa Rhino Sanctuary, Murchison Falls National Park game drives and boat cruise, and a Kampala city tour before departure from Entebbe.',
    highlights: [
      'Ziwa Rhino Sanctuary',
      'Wildlife Game Drives',
      'Boat Cruise on the Nile',
      'Murchison Falls',
      'Kampala City Tour',
      'Birdwatching',
      'Scenic Uganda Landscapes',
    ],
    destinations: [
      'Ziwa Rhino Sanctuary',
      'Murchison Falls National Park',
      'Kampala',
    ],
    badge: undefined,
    category: 'Wildlife',
    seoTitle: '4-Day Uganda Holiday Safari | Murchison Falls & Kampala City Tour | Je Fais Nature Safaris',
    seoDescription:
      'Discover Ziwa Rhino Sanctuary, Murchison Falls and Kampala on a 4-day Uganda holiday safari. Request your personalized quote from Je Fais Nature Safaris.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival at Entebbe — Ziwa Rhino Sanctuary — Murchison Falls National Park',
        description:
          'Upon arrival at Entebbe International Airport, you will be met by your Je Fais Nature Safaris driver/guide. Depart for Murchison Falls National Park with a stopover at Ziwa Rhino Sanctuary — the only place in Uganda where you can track the endangered white rhino on foot. After the rhino tracking experience, continue the drive to Murchison Falls National Park and arrive at your lodge in the evening.',
        activities: [
          'Airport pickup and welcome briefing',
          'Rhino tracking on foot at Ziwa Rhino Sanctuary',
          'Scenic drive through Uganda countryside',
          'Arrival at Murchison Falls area lodge',
        ],
        accommodation: 'Lodge/camp at Murchison Falls National Park',
        meals: 'Dinner',
      },
      {
        day: 2,
        title: 'Game Drive and Boat Cruise in Murchison Falls',
        description:
          'Rise early for a morning game drive in Murchison Falls National Park, searching for lions, elephants, giraffes, buffaloes, Uganda kob and waterbuck on the northern bank of the Nile. In the afternoon, enjoy a boat cruise along the Nile River to the base of the spectacular Murchison Falls, where the entire Nile forces itself through a narrow 7-metre gorge. Watch hippos, crocodiles and a remarkable variety of birdlife along the riverbanks.',
        activities: [
          'Morning game drive on the northern bank',
          'Afternoon boat cruise to the base of Murchison Falls',
          'Hippo and crocodile watching',
          'Birdwatching along the Nile',
          'Optional hike to the top of Murchison Falls',
        ],
        accommodation: 'Lodge/camp at Murchison Falls National Park',
        meals: 'Breakfast, Lunch, Dinner',
      },
      {
        day: 3,
        title: 'Morning Game Drive and Transfer to Kampala',
        description:
          'Rise early for a final morning game drive in Murchison Falls National Park before departing for Kampala. The drive to Kampala takes approximately 4–5 hours. Arrive in Kampala in the afternoon and check in to your hotel. Enjoy the evening at leisure, exploring the vibrant Ugandan capital.',
        activities: [
          'Early morning game drive',
          'Departure drive to Kampala',
          'Afternoon arrival in Kampala',
          'Evening at leisure in the city',
        ],
        accommodation: 'Hotel in Kampala',
        meals: 'Breakfast',
      },
      {
        day: 4,
        title: 'Kampala City Tour and Transfer to Entebbe Airport',
        description:
          'Spend the morning on a guided Kampala city tour, visiting key landmarks including the Kasubi Tombs (a UNESCO World Heritage Site), the Uganda Museum, Owino Market, the Bahai Temple and the Namugongo Martyrs Shrine. After the city tour, transfer to Entebbe International Airport for your departure flight. Depart Uganda with wonderful memories of the Pearl of Africa.',
        activities: [
          'Guided Kampala city tour',
          'Visit Kasubi Tombs (UNESCO World Heritage Site)',
          'Uganda Museum visit',
          'Owino Market exploration',
          'Transfer to Entebbe Airport',
        ],
        accommodation: 'N/A — departure day',
        meals: 'Breakfast',
      },
    ],
    inclusions: [
      'Airport transfers (arrival and departure)',
      'All accommodation as per itinerary',
      'Meals as indicated in the itinerary',
      '4x4 safari vehicle with pop-up roof',
      'English-speaking professional driver/guide',
      'All game drives as per itinerary',
      'Boat cruise at Murchison Falls',
      'Rhino tracking at Ziwa Rhino Sanctuary',
      'Kampala city tour',
      'All national park entrance fees',
      'Bottled drinking water throughout the safari',
    ],
    exclusions: [
      'International flights',
      'Uganda visa fees',
      'Travel insurance',
      'Alcoholic beverages',
      'Personal expenses and shopping',
      'Tips and gratuities for guides and lodge staff',
      'Optional activities not listed in the itinerary',
      'Personal items and medication',
    ],
    icon: '🦏',
    bg: 'bg-stone-700',
  },
  {
    id: '3-day-murchison-falls-safari',
    slug: '3-day-murchison-falls-safari',
    title: '3-Day Murchison Falls Holiday Safari',
    duration: '3 Days',
    durationDays: 3,
    summary:
      'A short but spectacular safari to Murchison Falls National Park, including Ziwa Rhino Sanctuary, wildlife game drives, a boat cruise on the Nile and optional hike to the top of the falls.',
    highlights: [
      'Ziwa Rhino Sanctuary',
      'Wildlife Game Drives',
      'Boat Cruise on the Nile',
      'Murchison Falls',
      'Birdwatching',
      'Optional Falls Hike',
      'Safari Lodge Accommodation',
    ],
    destinations: [
      'Ziwa Rhino Sanctuary',
      'Murchison Falls National Park',
    ],
    badge: 'Short Safari',
    category: 'Wildlife',
    seoTitle: '3-Day Murchison Falls Safari | Ziwa Rhino & Nile Boat Cruise | Je Fais Nature Safaris',
    seoDescription:
      'Experience Murchison Falls National Park on a 3-day safari with rhino tracking at Ziwa, game drives and a Nile boat cruise. Request your quote from Je Fais Nature Safaris.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Transfer to Murchison Falls National Park via Ziwa Rhino Sanctuary',
        description:
          'Upon arrival at Entebbe International Airport, you will be met by your Je Fais Nature Safaris driver/guide. Depart for Murchison Falls National Park with a stopover at Ziwa Rhino Sanctuary — the only place in Uganda where you can track the endangered white rhino on foot with a ranger guide. After the rhino tracking experience, continue the drive to Murchison Falls National Park and arrive at your lodge in the evening.',
        activities: [
          'Airport pickup and welcome briefing',
          'Rhino tracking on foot at Ziwa Rhino Sanctuary',
          'Scenic drive through Uganda countryside',
          'Arrival at Murchison Falls area lodge',
        ],
        accommodation: 'Safari lodge/camp at Murchison Falls National Park',
        meals: 'Dinner',
      },
      {
        day: 2,
        title: 'Game Drive and Boat Cruise on the Nile',
        description:
          'Rise early for a morning game drive in Murchison Falls National Park on the northern bank of the Nile. The park is home to lions, elephants, giraffes, buffaloes, Uganda kob, waterbuck, oribi and a remarkable variety of birdlife. In the afternoon, embark on a boat cruise along the Nile River to the base of the spectacular Murchison Falls, where the entire Nile forces itself through a narrow 7-metre gorge. Watch hippos, crocodiles and abundant birdlife along the riverbanks. An optional hike to the top of the falls is available for those who wish to see the falls from above.',
        activities: [
          'Morning game drive on the northern bank',
          'Afternoon boat cruise to the base of Murchison Falls',
          'Hippo and crocodile watching',
          'Birdwatching along the Nile',
          'Optional hike to the top of Murchison Falls',
        ],
        accommodation: 'Safari lodge/camp at Murchison Falls National Park',
        meals: 'Breakfast, Lunch, Dinner',
      },
      {
        day: 3,
        title: 'Morning Game Drive and Return to Entebbe',
        description:
          'Rise early for a final morning game drive in Murchison Falls National Park before departing for Entebbe. The drive back to Entebbe takes approximately 4–5 hours. Your driver/guide will ensure you arrive at Entebbe International Airport in good time for your departure flight. Depart Uganda with wonderful memories of Murchison Falls.',
        activities: [
          'Early morning game drive',
          'Final wildlife viewing in the park',
          'Departure drive to Entebbe',
          'Airport drop-off',
        ],
        accommodation: 'N/A — departure day',
        meals: 'Breakfast',
      },
    ],
    inclusions: [
      'Airport transfers (arrival and departure)',
      'All accommodation as per itinerary',
      'Meals as indicated in the itinerary',
      '4x4 safari vehicle with pop-up roof',
      'English-speaking professional driver/guide',
      'All game drives as per itinerary',
      'Boat cruise on the Nile at Murchison Falls',
      'Rhino tracking at Ziwa Rhino Sanctuary',
      'All national park entrance fees',
      'Bottled drinking water throughout the safari',
    ],
    exclusions: [
      'International flights',
      'Uganda visa fees',
      'Travel insurance',
      'Alcoholic beverages',
      'Personal expenses and shopping',
      'Tips and gratuities for guides and lodge staff',
      'Optional hike to the top of Murchison Falls',
      'Personal items and medication',
    ],
    icon: '🌊',
    bg: 'bg-blue-800',
  },
];

export function getPackageBySlug(slug: string): TourPackage | undefined {
  return tourPackages.find((p) => p.slug === slug);
}

