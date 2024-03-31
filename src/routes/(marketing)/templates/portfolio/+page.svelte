<script lang="ts">
  import { onMount } from "svelte"
  import { Palette, Globe, BookOpen, Smartphone } from "lucide-svelte"

  let activeTab = "Mobile"

  let now = new Date()
  let firstOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1)

  let displayDateRange = `${firstOfCurrentMonth.toLocaleDateString("en-US", { month: "long", day: "numeric" })} - ${now.toLocaleDateString("en-US", { month: "long", day: "numeric" })}`

  const ecommerceFeatures = [
    { icon: Palette, text: "Custom website design" },
    { icon: Globe, text: "Reliable and secure hosting" },
    { icon: BookOpen, text: "Fully manageable CMS" },
    { icon: Smartphone, text: "Responsive design for all devices" },
  ]

  function switchTab(tab: string) {
    activeTab = tab
  }

  onMount(() => {
    // Initialization actions if needed
  })
</script>

<svelte:head>
  <title>Portfolio Features</title>
</svelte:head>
<div
  class="flex flex-col md:flex-row justify-between max-w-[1000px] mx-auto mt-4 md:mt-20 p-4 md:p-0"
>
  <div class="flex items-center justify-center mb-10 md:mb-0">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
      >
        Portfolio Features
      </div>
    </div>
  </div>
  <div class="flex flex-col space-y-8 m-4">
    {#each ecommerceFeatures as feature}
      <p class="flex items-center">
        <svelte:component this={feature.icon} class="text-secondary mr-4" />
        {feature.text}
      </p>
    {/each}
  </div>
</div>

<div
  class="flex flex-col items-center justify-center max-w-[1000px] mx-auto m-20"
>
  <div class="stats stats-horizontal shadow">
    <div class="stat space-y-2">
      <div class="stat-title">Business Sites</div>
      <div class="stat-value">3</div>
      <div class="stat-desc">{displayDateRange}</div>
    </div>

    <div class="stat space-y-2">
      <div class="stat-title">Personal Sites</div>
      <div class="stat-value">2</div>
      <div class="stat-desc">{displayDateRange}</div>
    </div>

    <div class="stat space-y-2">
      <div class="stat-title">Templates</div>
      <div class="stat-value">2</div>
      <div class="stat-desc">Fully Customizable</div>
    </div>
  </div>
</div>

<div class="flex justify-center max-w-[1000px] mx-auto m-12">
  <div role="tablist" class="tabs tabs-boxed">
    <a
      role="tab"
      class="tab {activeTab === 'Mobile' ? 'tab-active' : ''}"
      on:click={() => switchTab("Mobile")}>Mobile</a
    >
    <a
      role="tab"
      class="tab {activeTab === 'Desktop' ? 'tab-active' : ''}"
      on:click={() => switchTab("Desktop")}>Desktop</a
    >
  </div>
</div>

<div class="flex flex-col items-center justify-center m-4 sm:m-20">
  {#if activeTab === "Desktop"}
    <div
      class="mockup-browser border bg-base-300 w-full sm:max-w-[1000px] mx-auto h-[600px]"
    >
      <div class="mockup-browser-toolbar">
        <div class="input text-xs sm:text-base">https://graysoncrozier.com</div>
      </div>
      <iframe
        src="https://graysoncrozier.com"
        style="width: 100%; height: 100%;"
      ></iframe>
    </div>
  {/if}

  {#if activeTab === "Mobile"}
    <div class="mockup-phone border bg-base-300 mx-2 sm:mx-0">
      <div class="camera"></div>
      <div class="display">
        <div class="artboard artboard-demo phone-1 text-xs sm:text-base">
          <iframe
            src="https://graysoncrozier.com"
            style="width: 100%; height: 100%;"
          ></iframe>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .tab-active {
    color: var(--secondary);
  }
</style>
