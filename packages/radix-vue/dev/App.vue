<script setup lang="ts">
import {
  ScrollAreaRoot,
  ScrollAreaViewPort,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
} from "../src/ScrollArea";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);
</script>

<template>
  <ScrollAreaRoot class="ScrollAreaRoot" type="always">
    <ScrollAreaViewPort class="ScrollAreaViewport">
      <div style="padding: 15px 20px">
        <div class="Text">Tags</div>
        <div v-for="tag in tags" :key="tag" class="Tag">
          {{ tag }}
        </div>
      </div>
    </ScrollAreaViewPort>
    <ScrollAreaScrollbar class="ScrollAreaScrollbar" orientation="vertical">
      <ScrollAreaThumb class="ScrollAreaThumb" />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar class="ScrollAreaScrollbar" orientation="horizontal">
      <ScrollAreaThumb class="ScrollAreaThumb" />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
</template>

<style>
.ScrollAreaRoot {
  width: 200px;
  height: 225px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 10px var(--black-a7);
  background-color: white;
  --scrollbar-size: 10px;
}

.ScrollAreaViewport {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.ScrollAreaScrollbar {
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;
  padding: 2px;
  background: #0000001d;
  transition: background 160ms ease-out;
}
.ScrollAreaScrollbar:hover {
  background: var(--black-a8);
}
.ScrollAreaScrollbar[data-orientation="vertical"] {
  width: var(--scrollbar-size);
}
.ScrollAreaScrollbar[data-orientation="horizontal"] {
  flex-direction: column;
  height: var(--scrollbar-size);
}

.ScrollAreaThumb {
  flex: 1;
  background: lightgray;
  border-radius: var(--scrollbar-size);
  position: relative;
}
/* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
.ScrollAreaThumb::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  min-width: 44px;
  min-height: 44px;
}

.ScrollAreaCorner {
  background: var(--black-a8);
}

.Text {
  color: var(--violet-11);
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
}

.Tag {
  color: var(--mauve-12);
  font-size: 13px;
  line-height: 18px;
  margin-top: 10px;
  border-top: 1px solid var(--mauve-6);
  padding-top: 10px;
}
</style>
