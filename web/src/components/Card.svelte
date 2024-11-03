<script lang="ts">
  import type { User, UserID } from "../common/types";
  import CardFront from "./Card/CardFront.svelte";
  import CardBack from "./Card/CardBack.svelte";

  type CardProps = {
    displayedUser: User;
    comparisonUserId?: UserID;
    onFlip?: (isBack: boolean) => void;
  };

  const { displayedUser, comparisonUserId, onFlip }: CardProps = $props();
  let isDisplayingBack = $state(false);
  function rotate() {
    isDisplayingBack = !isDisplayingBack;
    if (onFlip) onFlip(isDisplayingBack);
  }
  let card: HTMLDivElement | null = $state(null);
  const wipeOut = $derived(() => {
    if (!card) return;
    card.style.transition = "none";
    isDisplayingBack = false;
    requestAnimationFrame(() => {
      if (card) {
        card.style.transition = "transform 600ms";
      }
    });
  });
</script>

<button
  style="
        perspective: 1000px;
        width: min(40dvh, 87.5vw);
        height: 70dvh;
        position: relative;
      "
  onclick={rotate}
>
  <div
    id="card"
    bind:this={card}
    style="
          position: absolute;
          width: 100%;
          height: 100%;
          transformStyle: preserve-3d;
          transition: transform 600ms;
        "
    style:transform={isDisplayingBack ? "rotateY(180deg)" : "rotateY(0deg)"}
  >
    <div
      style="
            position: absolute;
            width: 100%;
            height: 100%;
            backfaceVisibility: hidden;
            "
    >
      <CardFront {displayedUser} />
    </div>
    <div
      style="
            position: absolute;
            width: 100%;
            height: 100%;
            backfaceVisibility: hidden;
            transform: rotateY(180deg);
            "
    >
      <CardBack {displayedUser} {comparisonUserId} />
    </div>
  </div>
</button>
); }
