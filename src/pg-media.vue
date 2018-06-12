<template>
  <div :class="paragraphClass">
    <slot
      v-if="isImage"
      name="image">
      <img
        :src="dataImgSrc"
        class="paragraph__image">
    </slot>
    <slot/>
  </div>
</template>
<script>
  export default {
    name: 'PgMedia',
    props: {
      type: { type: String, default: () => '' },
      dataImgSrc: { type: String, default: () => '' },
    },
    computed: {
      isImage() {
        return this.type === 'image';
      },
      paragraphClass() {
        return `paragraph paragraph--${this.type} paragraph--media`;
      },
    },
  };
</script>
