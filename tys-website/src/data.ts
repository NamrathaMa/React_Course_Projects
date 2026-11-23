export const navLinks = [
  "About",
  "Programs",
  "Schedule",
  "Workshops",
  "Journal",
  "Contact",
];

export const introSection = {
  name: "Traditional Yoga Studio",
  location: "Bellandur",
  city: "Bengaluru",
  heading: "Where age is just a number, and the energy is ",
  highlighted: "forever young.",
  subtext:
    "Yoga built around one simple idea: every body is unique. Personal programs in the studio and live online, guided by Dharmendra Soni since 2009.",
};

export const ribbonText = [
  "Breathe",
  "Stretch",
  "Flexibility",
  "Restore",
  "Balance",
  "Calm",
  "Smile",
  "Every body is unique",
  "Prana",
  "Strength",
  "Inner peace",
];

export const pillarSection = {
  title: "The TYS Approach",
  description:
    "A fit body, a calm mind and clear emotions come down to three basics.",
};

export const pillars = [
  {
    title: "Breath",
    sanskrit: "prana",
    description:
      "More oxygen to organs and brain: healthy organs, a calm mind, and wiser choices.",
    icon: "breath",
  },
  {
    title: "Water",
    sanskrit: "jal",
    description:
      "Not just how much, but how and when: a lighter body and naturally glowing skin.",
    icon: "water",
  },
  {
    title: "Food",
    sanskrit: "ahara",
    description:
      "What and when we eat shapes us: the right food for a healthy mind and body.",
    icon: "food",
  },
] as const;

export const programSection = {
  label: "Programs",
  heading: "Find the program that fits you.",
  text: "Not sure where to start? A free 15-minute consultation will point you to the right one.",
};

export const programs = [
  {
    title: "Fitness / Hatha Yoga",
    description: "Strength, flexibility and energy, every day.",
    icon: "fitness",
  },
  {
    title: "Weightloss Yoga",
    description: "Better sleep, emotions and well-being, too.",
    icon: "weightloss",
    badge: "Most joined",
  },
  {
    title: "Lifestyle Yoga",
    description: "Simple daily routines for lasting health.",
    icon: "lifestyle",
  },
  {
    title: "Therapy Yoga",
    description: "Personal practice for specific health concerns.",
    icon: "therapy",
  },
  {
    title: "Prenatal Yoga",
    description: "Gentle and safe through every trimester.",
    icon: "prenatal",
  },
  {
    title: "Corporate Yoga",
    description: "Less stress, sharper thinking, happier teams.",
    icon: "corporate",
  },
] as const;

export const scheduleSection = {
  label: "Before you scroll on",
  heading: "Take one slow breath with us.",
  description:
    "Follow the circle: in as it grows, out as it softens. That calm you feel is where every TYS class begins.",
  btnTxt: "See the full schedule",
  schedule: [
    {
      range: "Mon - Fri  ·  Morning",
      timings: ["6:30 AM", "7:30 AM", "10:00 AM"],
    },
    { range: "Mon - Fri  ·  Evening", timings: ["4:30 PM", "7:00 PM"] },
    { range: "Saturday", timings: ["8:00 AM"] },
  ],
};
export const footerSection = {
  address:
    "Sobha Lakeview Club House, Green Glen Layout, Bellandur, Bengaluru 560103",
  columns: [
    {
      heading: "Studio",
      links: [
        { label: "About TYS", href: "#" },
        { label: "Dharmendra Soni", href: "#" },
        { label: "Our teachers", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      heading: "Practice",
      links: [
        { label: "Schedule", href: "#" },
        { label: "Workshops", href: "#" },
        { label: "Virtual classes", href: "#" },
        { label: "Refer a friend", href: "#" },
      ],
    },
    {
      heading: "Contact",
      links: [
        { label: "+91 97399 09466", href: "tel:+919739909466" },
        {
          label: "Instagram",
          href: "https://www.instagram.com/traditionalyogastudio/",
        },
        {
          label: "YouTube",
          href: "https://www.youtube.com/@traditionalyogastudio4467",
        },
        {
          label: "Facebook",
          href: "https://www.facebook.com/traditionalyogastudio/",
        },
      ],
    },
  ],
  copyright: "© Traditional Yoga Studio",
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
};
