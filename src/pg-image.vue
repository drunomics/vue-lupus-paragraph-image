<template>
  <div :class="paragraphClass">
    <slot
      v-if="isImage"
      name="field_image">
      <div class="paragraph-image__wrapper">
        <img
          :src="dataImgSrc"
          class="paragraph-image__image"
        >
        <div class="paragraph-image__copyright">
          {{ fieldCopyright }}
        </div>
        <div class="paragraph-image__caption">
          {{ fieldCaption }}
        </div>
      </div>
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
      fieldCopyright: { type: String, default: () => '' },
      fieldCaption: { type: String, default: () => '' },
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
