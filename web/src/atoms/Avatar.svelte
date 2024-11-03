<script lang="ts">
  import { API_ENDPOINT } from "~/share/env";
  type Props = {
    url?: string;
    width: string;
    height: string;
  };
  // https://medium.com/@abhishekmicosoft/handling-img-fallback-307653b2f30
  const { width, height, url }: Props = $props();
  const src = $derived(API_ENDPOINT + url);
</script>

<object aria-label="avatar of user" data="" type="image/webp" {width} {height}>
  <img
    {src}
    style:width
    style:height
    style:objectFit="cover"
    style:borderRadius="50%"
    style:pointerEvents="none"
    alt=""
  />
</object>
