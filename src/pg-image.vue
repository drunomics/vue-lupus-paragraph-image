<template>
  <div class="paragraph paragraph--image">
    <div class="image">
      <slot :name="$slots.image ? 'image': 'default'" />
      <div class="caption">
        <slot name="caption" />
      </div>
    </div>
    <div class="copyright">
      <slot name="copyright" />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PgImage'
  };
</script>

<style lang="scss" scoped>
.image {
  position: relative;
}

.copyright {
  color: grey;
  font-size: 0.8em;
  font-style: italic;
  text-align: right;
}

.caption {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
  padding: 0.5em 1em;
  font-size: 0.9em;
}
</style>
