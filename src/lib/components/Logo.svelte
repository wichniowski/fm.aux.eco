<script lang="ts">
  import { isPlaying } from "../store";
</script>

<svg
  class={$isPlaying ? "playing" : ""}
  version="1.1"
  id="Ebene_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  width="85px"
  height="85px"
  viewBox="0 0 85 85"
  enable-background="new 0 0 85 85"
  xml:space="preserve"
>
  <g>
    <circle class="level-1 band-1" cx="4.25" cy="80.75" r="4.25" />
    <circle class="level-1 band-2" cx="19.55" cy="80.75" r="4.25" />
    <circle class="level-1 band-3" cx="34.85" cy="80.75" r="4.25" />
    <circle class="level-1 band-4" cx="50.15" cy="80.75" r="4.25" />
    <circle class="level-1 band-5" cx="65.45" cy="80.75" r="4.25" />
    <circle class="level-1 band-6" cx="80.75" cy="80.75" r="4.25" />
    <circle class="level-2 band-1" cx="4.25" cy="65.45" r="4.25" />
    <circle class="level-2 band-2" cx="19.55" cy="65.45" r="4.25" />
    <circle class="level-2 band-3" cx="34.85" cy="65.45" r="4.25" />
    <circle class="level-2 band-4" cx="50.15" cy="65.45" r="4.25" />
    <circle class="level-2 band-5" cx="65.45" cy="65.45" r="4.25" />
    <circle class="level-2 band-6" cx="80.75" cy="65.45" r="4.25" />
    <circle class="level-3 band-1" cx="4.25" cy="50.15" r="4.25" />
    <circle class="level-3 band-2" cx="19.55" cy="50.15" r="4.25" />
    <circle class="level-3 band-3" cx="34.85" cy="50.15" r="4.25" />
    <circle class="level-3 band-4" cx="50.15" cy="50.15" r="4.25" />
    <circle class="level-3 band-5" cx="65.45" cy="50.15" r="4.25" />
    <circle class="level-3 band-6" cx="80.75" cy="50.15" r="4.25" />
    <circle class="level-4 band-1" cx="4.25" cy="34.85" r="4.25" />
    <circle class="level-4 band-2" cx="19.55" cy="34.85" r="4.25" />
    <circle class="level-4 band-3" cx="34.85" cy="34.85" r="4.25" />
    <circle class="level-4 band-4" cx="50.15" cy="34.85" r="4.25" />
    <circle class="level-4 band-5" cx="65.45" cy="34.85" r="4.25" />
    <circle class="level-4 band-6" cx="80.75" cy="34.85" r="4.25" />
    <circle class="level-5 band-1" cx="4.25" cy="19.55" r="4.25" />
    <circle class="level-5 band-2" cx="19.55" cy="19.55" r="4.25" />
    <circle class="level-5 band-3" cx="34.85" cy="19.55" r="4.25" />
    <circle class="level-5 band-4" cx="50.15" cy="19.55" r="4.25" />
    <circle class="level-5 band-5" cx="65.45" cy="19.55" r="4.25" />
    <circle class="level-5 band-6" cx="80.75" cy="19.55" r="4.25" />
    <circle class="level-6 band-1" cx="4.25" cy="4.25" r="4.25" />
    <circle class="level-6 band-2" cx="19.55" cy="4.25" r="4.25" />
    <circle class="level-6 band-3" cx="34.85" cy="4.25" r="4.25" />
    <circle class="level-6 band-4" cx="50.15" cy="4.25" r="4.25" />
    <circle class="level-6 band-5" cx="65.45" cy="4.25" r="4.25" />
    <circle class="level-6 band-6" cx="80.75" cy="4.25" r="4.25" />
  </g>
</svg>

<style>
  @keyframes levels {
    0% {
      fill: var(--decorative-base);
    }
    50% {
      fill: var(--essential-primary);
    }
    10% {
      fill: var(--decorative-base);
    }
  }

  circle {
    fill: var(--text-base);
  }

  .playing .level-4.band-3,
  .playing .level-4.band-4,
  .playing .level-3.band-3,
  .playing .level-3.band-4 {
    animation: levels ease-in-out 3s infinite;
  }

  .playing .level-4.band-5,
  .playing .level-3.band-5,
  .playing .level-4.band-2,
  .playing .level-3.band-2,
  .playing .level-5.band-3,
  .playing .level-5.band-4,
  .playing .level-2.band-3,
  .playing .level-2.band-4 {
    animation: levels ease-in-out 3s 1s infinite;
  }

  .playing .level-1.band-2,
  .playing .level-1.band-3,
  .playing .level-1.band-4,
  .playing .level-1.band-5,
  .playing .level-6.band-2,
  .playing .level-6.band-3,
  .playing .level-6.band-4,
  .playing .level-6.band-5,
  .playing .level-2.band-1,
  .playing .level-3.band-1,
  .playing .level-4.band-1,
  .playing .level-5.band-1,
  .playing .level-2.band-6,
  .playing .level-3.band-6,
  .playing .level-4.band-6,
  .playing .level-5.band-6 {
    animation: levels ease-in-out 3s 2s infinite;
  }
</style>
