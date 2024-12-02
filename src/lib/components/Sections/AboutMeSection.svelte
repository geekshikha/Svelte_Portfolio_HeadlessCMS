<script lang="ts">
  import { SectionHeadline, Button, Experience } from "$components";
  import image from "$assets/my-photo.jpeg";
  import { goto } from "$app/navigation";
  import type { SanityWorkExperience } from "$lib/types/sanity";

  interface AboutMeProps {
    workExperience: SanityWorkExperience[];
  }

  let { workExperience }: AboutMeProps = $props();

  function onclick() {
    goto("/#contact-form");
  }
</script>

<section class="about-me mt-l">
  <SectionHeadline sectionName={"about-me"}>About Me</SectionHeadline>
  <div class="mt-m content-container default-margin">
    <img class="image" src={image} alt="" />
    <div class="text">
      <p>
        Hey, I'm Shikha an enthusistic person specializing in web development.
      </p>
      <p>
        With three years of hands-on experience tackling real-world coding
        challenges and meeting diverse client needs, I've built a deep
        understanding of the tech landscape. My goal is to translate complex
        concepts into actionable skills that you can apply right away.
      </p>
      <Button className="mt-m" {onclick}>Tell me about your project</Button>
    </div>
  </div>
  <Experience {workExperience} />
</section>

<style>
  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .image {
    width: 42%;
    border-radius: 20px;
    object-fit: cover;
  }

  .text {
    width: 55%;
    text-align: left;
  }
</style>
