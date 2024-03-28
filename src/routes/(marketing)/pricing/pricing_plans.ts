export const defaultPlanId = "basic";

export const pricingPlans = [
  {
    id: "basic",
    name: "Portfolio Website",
    description:
      "A fully customizable CMS portfolio website for businesses or personal use, including design and hosting.",
    price: "$499",
    priceIntervalName: "one-time",
    stripe_price_id: "your_stripe_price_id_for_basic",
    stripe_product_id: "your_stripe_product_id_for_basic",
    features: [
      "Custom website design",
      "Hosting with CMS integration",
      "Full content management system",
      "Responsive design for all devices",
    ],
  },
  {
    id: "ecommerce",
    name: "Ecommerce Solution",
    description:
      "A comprehensive eCommerce solution with CMS, Stripe payments setup, design, hosting, and more.",
    price: "$999",
    priceIntervalName: "one-time",
    stripe_price_id: "your_stripe_price_id_for_ecommerce",
    stripe_product_id: "your_stripe_product_id_for_ecommerce",
    features: [
      "Stripe setup for payments",
      "Custom eCommerce website design",
      "Hosting with CMS integration",
      "Data storage and email services",
      "Image hosting",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Solutions",
    description:
      "Advanced IT solutions for enterprise needs, including full network setup and custom development.",
    price: "Custom",
    priceIntervalName: "Contact for pricing",
    stripe_price_id: "your_stripe_price_id_for_enterprise",
    stripe_product_id: "your_stripe_product_id_for_enterprise",
    features: [
      "Full network setup and management",
      "Custom IT infrastructure development",
      "High security and data protection",
      "Scalable data storage solutions",
      "24/7 technical support",
    ],
  },
];
