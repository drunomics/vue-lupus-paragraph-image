<template>
  <div :class="paragraphClass">
    <slot
      v-if="isImage"
      name="field_image">
      <img
        :src="dataImgSrc"
        class="paragraph__image">
    </slot>
    <slot/>
  </div>
</template>
<script>
  export default {
    name: 'PgImage',
    props: {
      type: { type: String, default: () => 'image' },
      dataImgSrc: { type: String, default: () => '' },
    },
    computed: {
      isImage() {
        return this.type === 'image';
      },
      paragraphClass() {
        return `paragraph paragraph--${this.type}`;
      },
    },
  };
</script>
