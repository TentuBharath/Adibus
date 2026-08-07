export type Testimonial = {
  name: string;
  location: string;
  project: string;
  quote: string;
  rating: number;
};

// Placeholder testimonials in the client's voice, styled after Google review
// cards. Swap in real client quotes once collected.
export const testimonials: Testimonial[] = [
  {
    name: "Ramesh & Lakshmi Varma",
    location: "Visakhapatnam",
    project: "Independent House Interior",
    quote:
      "What stood out was the transparency — every cost was itemized upfront, and there wasn't a single surprise change order through the whole project. The site supervisor was on-site daily, which we didn't expect.",
    rating: 5,
  },
  {
    name: "Priya Chandrasekhar",
    location: "Hyderabad",
    project: "Apartment Interior",
    quote:
      "The 3D walkthroughs meant we knew exactly what we were getting before a single wall was touched. Handover was on the date we were promised at the start, not a revised one.",
    rating: 5,
  },
  {
    name: "Arvind Rao",
    location: "Bangalore",
    project: "Corporate Office Fit-Out",
    quote:
      "AdiBab's managed design, procurement and site work as one team, so we never had to chase between separate vendors. The finish quality on the joinery in particular was well above what we'd seen from other contractors.",
    rating: 5,
  },
];
