<script lang="ts">
  import type { Snippet } from "svelte";
  const { children }: { children: Snippet } = $props();

  import "../tailwind.css"
</script>

{@render children()}
