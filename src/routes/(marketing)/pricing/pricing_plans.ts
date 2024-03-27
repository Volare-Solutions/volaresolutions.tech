export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "A plan to test the purchase experience. Try buying this with the test credit card 4242424242424242.",
    price: "$5",
    priceIntervalName: "per month",
    stripe_price_id: "price_1OwvpWGq88MAyKwhh6rc0er1",
    stripe_product_id: "prod_PmUpuBHgXAl3jr",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "A plan to test the upgrade expereince. Try buying this with the test credit card 4242424242424242.",
    price: "$15",
    priceIntervalName: "per month",
    stripe_price_id: "price_1OwvpxGq88MAyKwhzyoiuJpw",
    stripe_product_id: "prod_PmUpEF0t9X9KZ5",
    features: [
      "Everything in Pro",
      "Try the 'upgrade plan' UX",
      "Still actually free!",
    ],
  },
]
