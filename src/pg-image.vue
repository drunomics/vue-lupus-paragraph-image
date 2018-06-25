<template>
  <div class="paragraph paragraph--image">
    <div
      class="paragraph-image__wrapper"
      v-if="hasImage"
    >
      <img
        :src="dataImgSrc"
        class="paragraph-image__image"
      >
      <div
        class="paragraph-image__copyright"
        v-if="hasCopyright"
      >
        {{ fieldCopyright }}
      </div>
      <div
        class="paragraph-image__caption"
        v-if="hasCaption"
      >
        {{ fieldCaption }}
      </div>
    </div>
    <slot/>
  </div>
</template>
<script>
  export default {
    name: 'PgImage',
    props: {
      dataImgSrc: { type: String, default: () => '' },
      fieldCopyright: { type: String, default: () => '' },
      fieldCaption: { type: String, default: () => '' },
    },
    computed: {
      hasCopyright() {
        return this.fieldCopyright !== '';
      },
      hasCaption() {
        return this.fieldCaption !== '';
      },
      hasImage() {
        return this.dataImgSrc !== '';
      },
    }
  };
</script>
