<script lang="ts">
  import { WebsiteName } from "./../../config"
  import { onMount } from "svelte"

  const features = [
    //     {
    //       name: "Digital Marketing",
    //       link: "/digital-marketing",
    //       description:
    //         "Enhance your online presence with our digital marketing services, including email marketing, SEO, and social media strategies.",
    //       svgContent: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //   <path stroke-width="2" d="M12 8v4m0 0v4m0-4h-4m4 0h4"></path>
    //   <path stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
    // </svg>
    // `,
    //     },
    {
      name: "Ecommerce Solutions",
      link: "/templates/ecommerce",
      description:
        "Launch your online store with our fully customizable ecommerce templates.",
      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-width="2" d="M3 3h7l1 5h8l2 9H5"></path>
  <circle cx="7" cy="20" r="2" stroke-width="2"></circle>
  <circle cx="17" cy="20" r="2" stroke-width="2"></circle>
</svg>
`,
    },
    {
      name: "Portfolio Templates",
      link: "/templates/portfolio",
      description: "Showcase your work with our dynamic portfolio templates.",
      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke-width="2"></rect>
  <path stroke-width="2" d="M2 3h20v4H2z"></path>
</svg>
`,
    },
    {
      name: "Template Gallery",
      link: "/templates",
      description:
        "Explore a variety of customizable website templates, each comes complete with an admin portal for full content management.",
      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <rect x="3" y="3" width="7" height="7" stroke-width="2" rx="1"></rect>
  <rect x="14" y="3" width="7" height="7" stroke-width="2" rx="1"></rect>
  <rect x="14" y="14" width="7" height="7" stroke-width="2" rx="1"></rect>
  <rect x="3" y="14" width="7" height="7" stroke-width="2" rx="1"></rect>
</svg>
`,
    },
  ]

  let words = ["Web Development.", "IT Infrastructure.", "Digital Marketing."]
  let wordIndex = 0
  let letterIndex = words[0].length
  let isDeleting = true
  let text = words[0]

  const typeWriter = () => {
    const currentWord = words[wordIndex % words.length]
    if (isDeleting) {
      text = currentWord.substring(0, letterIndex - 1)
      letterIndex--
    } else {
      text = currentWord.substring(0, letterIndex + 1)
      letterIndex++
    }

    if (!isDeleting && letterIndex === currentWord.length) {
      setTimeout(() => {
        isDeleting = true
      }, 2000)
    } else if (isDeleting && letterIndex === 0) {
      wordIndex++
      isDeleting = false
      text = "\u00A0" // add a non-breaking space when the text is fully deleted
    }

    setTimeout(typeWriter, isDeleting ? 100 : 150)
  }

  onMount(() => {
    setTimeout(typeWriter, 2000) // wait 3 seconds before starting the typewriter effect
  })
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content="{WebsiteName} Home Page" />
</svelte:head>

<div class="hero min-h-[60vh] mt-24">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl">
      <div
        class="text-4xl md:text-6xl font-bold px-2"
        style="line-height: 1.2;"
      >
        Powering Digital Transformation with <br />
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px] typewriter"
        >
          {text}
        </span>
      </div>
      <div class="mt-6 md:mt-10 text-sm md:text-lg">
        Built with cutting-edge technologies to deliver the best solutions.
      </div>
      <div class="mt-6 md:mt-2">
        <a href="https://github.com/Volare-Solutions/">
          <button class="btn btn-outline btn-primary btn-sm px-6 mt-3 mx-2"
            >★ us on Github</button
          >
        </a>
        <a href="/pricing">
          <button class="btn btn-primary btn-sm px-6">Get Started</button>
        </a>
      </div>
    </div>
  </div>
</div>
<div class="min-h-[60vh]">
  <div class="pt-20 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
      >
        Explore our Services
      </div>
      <div class="mt-6 text-xl font-bold">
        And try them out with
        <a href="/templates">
          <span
            class="underline decoration-secondary decoration-[3px] md:decoration-[4px]"
          >
            fully functional demos.
          </span>
        </a>
      </div>
    </div>

    <div
      class="flex gap-6 mt-12 max-w-[1064px] mx-auto place-content-center flex-wrap"
    >
      {#each features as feature}
        <div
          class="card bg-neutral w-[270px] min-h-[300px] flex-none shadow-xl"
        >
          <div class="card-body items-center text-center p-[24px] pt-[32px]">
            <div>
              <svg
                width="50px"
                height="50px"
                class="mb-2 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                {@html feature.svgContent}
              </svg>
            </div>
            <h2 class="card-title">
              {feature.name}
            </h2>
            <p class="text-sm">
              {feature.description}
            </p>
            {#if feature.link}
              <a href={feature.link} class="pb-4">
                <button
                  class="btn btn-xs btn-outline rounded-full btn-primary min-w-[100px]"
                  >Try It</button
                >
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="hero min-h-[60vh] mt-12">
  <div class="hero-content text-center pb-16 pt-4 px-4">
    <div class="max-w-lg">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mt-4"
      >
        See Them in Action
      </div>
      <div
        class="flex flex-col lg:flex-row mt-8 gap-6 place-content-center content-center"
      >
        <div class="hidden md:block">
          <a href="https://tpgstudios.art" target="_blank" class="link">
            <div class="mockup-browser border">
              <div class="mockup-browser-toolbar">
                <div class="input" style="background:#eee;">
                  https://tpgstudios.art
                </div>
              </div>
              <div class="flex justify-center">
                <img
                  alt="Screenshot of sculpta.art homepage"
                  class="aspect-[16/9]"
                  src="/images/tpg-studios.png"
                />
              </div>
            </div>
          </a>
        </div>
        <div class="md:hidden">
          <a href="https://tpgstudios.art" target="_blank" class="link">
            <div class="card shadow-xl border overflow-hidden">
              <img
                alt="Screenshot of sculpta.art homepage"
                class="aspect-[16/9]"
                src="/images/tpg-studios.png"
              />
            </div></a
          >
        </div>
        <div class="min-w-[270px] lg:min-w-[420px] flex mt-6 lg:mt-0">
          <div class="my-auto">
            <div class="px-4 text-lg md:text-xl">
              <a href="https://tpgstudios.art" class="" target="_blank">
                An e-commerce platform offering
                <span class="font-bold whitespace-nowrap"
                  >seamless shopping experiences</span
                >,
                <span class="underline decoration-secondary decoration-[3px]"
                  >real-time updates</span
                >, and secure payments.
              </a>
            </div>
            <div class="px-4 mt-6 text-lg md:text-xl">
              Our <a
                href="https://tpgstudios.art"
                class="link font-bold"
                target="_blank">webpage</a
              >
              is the best example of an e-commerce platform with style and real content.
            </div>
            <div class="mt-4 text-large">
              <a href="https://tpgstudios.art" target="_blank">
                <button class="btn btn-primary btn-wide mt-3"
                  >See it in Action</button
                >
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row mt-8 gap-6 place-content-center content-center"
      >
        <div class="hidden md:block">
          <a href="https://graysoncrozier.com" target="_blank" class="link">
            <div class="mockup-browser border">
              <div class="mockup-browser-toolbar">
                <div class="input" style="background:#eee;">
                  https://graysoncrozier.com
                </div>
              </div>
              <div class="flex justify-center">
                <img
                  alt="Screenshot of sculpta.art homepage"
                  class="aspect-[16/9]"
                  src="/images/portfolio.png"
                />
              </div>
            </div>
          </a>
        </div>
        <div class="md:hidden">
          <a href="https://graysoncrozier.com" target="_blank" class="link">
            <div class="card shadow-xl border overflow-hidden">
              <img
                alt="Screenshot of sculpta.art homepage"
                class="aspect-[16/9]"
                src="/images/portfolio.png"
              />
            </div></a
          >
        </div>
        <div class="min-w-[270px] lg:min-w-[420px] flex mt-6 lg:mt-0">
          <div class="my-auto">
            <div class="px-4 text-lg md:text-xl">
              <a href="https://graysoncrozier.com" class="" target="_blank">
                Presenting a professional, <span
                  class="underline decoration-secondary decoration-[3px]"
                  >fully-customizable</span
                > resume template designed to showcase the skills, experience, and
                achievements of businesses and individuals.
              </a>
            </div>
            <div class="px-4 mt-6 text-lg md:text-xl">
              Visit our <a
                href="https://graysoncrozier.com"
                class="link font-bold"
                target="_blank">webpage</a
              > to explore this template and see how it can be tailored to your unique
              career journey.
            </div>
            <div class="mt-4 text-large">
              <a href="https://graysoncrozier.com" target="_blank">
                <button class="btn btn-primary btn-wide mt-3"
                  >See it in Action</button
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .typewriter {
    border-right: 0.15em solid black;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typewriter 4s steps(30, end),
      blink-caret 1.5s step-end infinite;
  }

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: pink;
    }
  }
</style>
