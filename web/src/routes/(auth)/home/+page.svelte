<script lang="ts">
  import CloseIcon from "~/icons/Cross.svg.svelte";
  import FavoriteIcon from "~/icons/Heart.svg.svelte";
  import request from "~/api/request";

  import { useMyID, useRecommended } from "~/api/user.svelte";
  import Card from "~/components/Card.svelte";
  // TODO: fix this
  import DraggableCard from "~/components/Card.svelte";
  import FullScreenCircularProgress from "~/atoms/Loading.svelte";
  import type { Snippet } from "svelte";
  const recommended = useRecommended();
  $inspect("at page", recommended.data);
  let nth = 0;
  const displayedUser = $derived(recommended.data?.[nth]);
  const nextUser = $derived(recommended.data?.[nth + 1]);
  let clickedButton = $state(""); // ?
  const {
    state: { data: myId },
  } = useMyID();
  function reject() {
    nth++;
  }
  function accept() {
    if (displayedUser?.id) request.send(displayedUser.id);
    nth++;
  }

  function onClickCross() {
    clickedButton = "cross";
    // ANIMATION START: { x: [0, -1000], transition: { duration: 0.5, times: [0, 1], delay: 0.2 } }
    // ANIMATION THEN
    reject();
    clickedButton = "";
    // ANIMATION SET { x: 0 }
  }

  function onClickHeart() {
    clickedButton = "heart";
    // ANIMATION START: { x: [0, 1000], transition: { duration: 0.5, times: [0, 1], delay: 0.2 } }
    // ANIMATION THEN
    accept();
    clickedButton = "";
    // ANIMATION SET { x: 0 };
  }
</script>

{#snippet RoundButton(onclick: () => void, icon: Snippet)}
  <div>
    <button
      {onclick}
      style="
  border-radius: 50%;
  width: 7dvh;
  height: 7dvh;
  box-shadow: shadows[10];
  background-color: white;"
    >
      {icon}
    </button>
  </div>
{/snippet}

{#if recommended.data == null}
  <FullScreenCircularProgress />;
{:else if recommended.error}
  <div>Something went wrong: {recommended.error.message}</div>
{/if}

<div
  style="
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      "
>
  {#if displayedUser}
    <div
      style="
          display: flex;
          flex-direction: columx;
          justify-content: space-evenlx;
          align-items: centex;
          height: 100x;
          "
    >
      <div style="position: relative;">
        {#if nextUser}
          <div
            style="
                  position: absolute;
                  top: 0;
                  left: 0;
                  zIndex: -1;
                "
          >
            <Card displayedUser={nextUser} />
          </div>
          )
        {/if}
        <DraggableCard
          {displayedUser}
          comparisonUserId={myId ? myId : undefined}
        />
        <!-- onSwipeLeft={reject}
                clickedButton={clickedButton}
                onSwipeRight={accept} -->
      </div>
      <div
        style="
              display: flex;
              flexDirection: row;
              alignItems: center;
              justifyContent: space-around;
              width: min(100%, 46dvh);
              marginBottom: 10px;
            "
      >
        {#snippet CloseIconSnippet()}
          <CloseIcon />
        {/snippet}
        {#snippet FavoriteIconSnippet()}
          <FavoriteIcon />
        {/snippet}
        {@render RoundButton(onClickCross, CloseIconSnippet)}
        {@render RoundButton(onClickHeart, FavoriteIconSnippet)}
      </div>
    </div>
  {:else}
    <FullScreenCircularProgress />
  {/if}
</div>
