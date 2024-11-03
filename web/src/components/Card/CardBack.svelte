<script lang="ts">
  import type { User } from "~/common/types";

  type Props = {
    displayedUser: User;
    comparisonUserId?: number;
  };
  const { displayedUser, comparisonUserId }: Props = $props();
  displayedUser;
  comparisonUserId;
  // TODO: make this
</script>

hello, card back here

<!--

const CardBack = ({ displayedUser, comparisonUserId }: CardProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F7FCFF",
        border: "2px solid #3596C6",
        padding: "10px",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
          {displayedUser?.name}
        </p>
      </div>
      <NonEditableCoursesTable
        userId={displayedUser.id}
        comparisonUserId={comparisonUserId}
      />
      <div>
        <ThreeSixtyIcon
          style={{ fontSize: "3.08dvh", display: "block", margin: "auto" }}
        />
      </div>
    </div>
  );
};
-->
