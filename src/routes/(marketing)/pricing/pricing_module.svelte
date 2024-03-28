<script lang="ts">
  import { pricingPlans } from "./pricing_plans"

  // Module context
  export let highlightedPlanId: string = ""
  export let callToAction: string
  export let currentPlanId: string = ""
  export let center = true
</script>

<div
  class="flex flex-col lg:flex-row gap-10 {center
    ? 'place-content-center'
    : ''} flex-wrap"
>
  {#each pricingPlans as plan}
    <div
      class="flex-none card card-bordered {plan.id === highlightedPlanId
        ? 'border-primary'
        : 'border-gray-200'} shadow-xl flex-1 flex-grow min-w-[260px] max-w-[310px] p-6"
    >
      <div class="flex flex-col h-full">
        <div class="text-xl font-bold">{plan.name}</div>
        <p class="mt-2 text-sm text-gray-400 leading-relaxed">
          {plan.description}
        </p>
        <div class="mt-auto pt-4 text-sm">
          <strong>Plan Includes:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            {#each plan.features as feature}
              <li class="text-gray-400">{feature}</li>
            {/each}
            <ul></ul>
          </ul>
        </div>
        <div class="pt-8">
          <span class="text-4xl font-bold">{plan.price}</span>
          <span class="text-gray-400">{plan.priceIntervalName}</span>
          <div class="mt-6 pt-4 flex-1 flex flex-row items-center">
            {#if plan.id === currentPlanId}
              <div
                class="btn btn-outline btn-success no-animation w-[80%] mx-auto cursor-default"
              >
                Current Plan
              </div>
            {:else if plan.id === "enterprise"}
              <a href={"/contact_us"} class="btn btn-primary w-[80%] mx-auto">
                {callToAction}
              </a>
            {:else}
              <a
                href={"/account/subscribe/" +
                  (plan?.stripe_price_id ?? "free_plan")}
                class="btn btn-primary w-[80%] mx-auto"
              >
                {callToAction}
              </a>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<h1 class="text-2xl font-bold text-center mt-24">Pricing FAQ</h1>
<div class="flex place-content-center">
  <div class="join join-vertical max-w-xl py-6 mx-auto">
    <div class="collapse collapse-arrow join-item border border-primary">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title text-lg font-medium">
        Are your pricing plans flexible?
      </div>
      <div class="collapse-content">
        <p>
          Absolutely! We understand that every business has unique needs, which
          is why we offer customizable pricing plans. We're always open to
          discuss how we can tailor our services to fit your budget and
          requirements.
        </p>
      </div>
    </div>
    <div class="collapse collapse-arrow join-item border border-primary">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title text-lg font-medium">
        What's included in the website design and hosting package?
      </div>
      <div class="collapse-content">
        <p>
          Our website design and hosting package includes a fully customizable
          CMS, hosting services, and a responsive design. This package is
          perfect for both business and personal portfolio websites.
        </p>
      </div>
    </div>
    <div class="collapse collapse-arrow join-item border border-primary">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title text-lg font-medium">
        Can I upgrade my plan later?
      </div>
      <div class="collapse-content">
        <p>
          Yes, you can upgrade your plan at any time. Our scalable solutions are
          designed to grow with your business. Feel free to reach out to us to
          discuss upgrading your current plan.
        </p>
      </div>
    </div>
    <div class="collapse collapse-arrow join-item border border-primary">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title text-lg font-medium">
        How does the eCommerce solution integrate with Stripe for payments?
      </div>
      <div class="collapse-content">
        <p>
          Our eCommerce solution seamlessly integrates with Stripe for payments,
          including setup and configuration. We provide a secure and streamlined
          checkout experience, supporting various payment methods to cater to
          your customers' preferences.
        </p>
      </div>
    </div>
  </div>
</div>

<svg style="display:none" version="2.0">
  <defs>
    <symbol
      id="checkcircle"
      viewBox="0 0 24 24"
      stroke-width="2"
      fill="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"
      />
    </symbol>
  </defs>
</svg>

<svg style="display:none" version="2.0">
  <defs>
    <symbol id="nocircle" viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,11H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
      />
    </symbol>
  </defs>
</svg>
