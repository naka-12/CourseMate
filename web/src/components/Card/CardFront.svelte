<script lang="ts">
  import Avatar from "~/atoms/Avatar.svelte";
  import type { User } from "~/common/types";

  const { displayedUser }: { displayedUser: User } = $props();
</script>

<div
  style="
    display: flex;
    flex-direction: column;
    background-color: #F7FCFF;
    border: 2px solid #3596C6;
    padding: 20px 20px 10px 20px;
    height: 100%;
    gap: 2dvh;
    overflow: hidden;
    justifyContent: space-between;
  "
>
  <div
    style="
      display: grid;
      gridTemplateColumns: 1fr 1fr 1fr;
      align-items: center;
      height: 30%;
      "
  >
    <Avatar url={displayedUser.pictureUrl} width="10dvh" height="10dvh" />
    <div
      style="
        display: flex;
        grid-column: 2 / 4;
        marginLeft: 1dvh;
        justifyContent: center;
        "
    >
      <span
        style="
          font-size: 3.4vh;
          fontWeight: bold;
          margin: 0 auto;
          "
      >
        {displayedUser.name}
      </span>
    </div>
  </div>
  <div
    style="
      display: grid;
      gridTemplateColumns: 1fr 5fr;
      align-items: center;
      gap: 1.5dvh;
      "
  >
    <span
      class="badge badge-lg"
      style="
        grid-column: 1 / 2;
      "
    >
      学部
    </span>
    <p
      style="
        margin: 0px;
        font-size: 3dvh;
      "
    >
      {displayedUser.faculty}
    </p>
  </div>
  <div
    style="
      display: grid;
      gridTemplateColumns: 1fr 5fr;
      align-items: center;
      gap: 1.5dvh;
    "
  >
    <span class="badge badge-lg">学科</span>
    <p
      style={displayedUser.department.length <= 7
        ? ` margin: 0px;
            font-size: 3dvh;
            overflow: hidden;
            whiteSpace: nowrap;
            textOverflow: ellipsis; `
        : ` margin: 0px;
            font-size: 1.76dvh;
            overflow: hidden;
            whiteSpace: nowrap;
            textOverflow: ellipsis; `}
    >
      {displayedUser.department}
    </p>
  </div>
  <div
    style="
      display: grid;
      gridTemplateColumns: 1fr 5fr;
      align-items: center;
      gap: 1.5dvh;
    "
  >
    <span class="badge badge-lg">性別</span>
    <p style="margin: 0px; font-size: 3dvh;">{displayedUser.gender}</p>
  </div>
  <div
    style="
      display: grid;
      gridTemplateColumns: 1fr 5fr;
      align-items: center;
      gap: 1.5dvh;
    "
  >
    <span class="badge badge-lg">学年</span>
    <p style="margin: 0px; font-size: 3dvh;">{displayedUser.grade}</p>
  </div>
  <div
    style="
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 5fr;
      gap: 1.5dvh;
      max-height: 32%;
    "
  >
    <!-- max-height: WebKitLineClamp のフォールバックとして -->
    <span
      class="badge badge-lg"
      style="
        font-size: 0.45rem;
      "
    >
      自己紹介
    </span>
    <p
      style="
        margin: 0px;
        font-size: 1.76dvh;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp;: 8,
        line-clamp: 8,
        text-overflow: ellipsis;
      "
    >
      {displayedUser.intro}
    </p>
  </div>
  <!-- <ThreeSixtyIcon style="font-size: 3.08dvh; display: block; margin: auto;" /> -->
</div>
