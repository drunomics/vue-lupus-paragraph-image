<template>
  <div class="paragraph paragraph--image">
    <div class="image">
      <slot :name="$slots.image ? 'image': 'default'" />
      <div
        v-if="$slots.copyright"
        class="copyright-wrapper"
      >
        <div class="copyright">
          <slot name="copyright" />
        </div>
      </div>
    </div>
    <div
      v-if="$slots.caption"
      class="caption"
    >
      <slot name="caption" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'PgImage'
}
</script>
