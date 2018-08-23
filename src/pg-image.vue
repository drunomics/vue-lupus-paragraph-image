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
        {{ dataFieldCopyright }}
      </div>
      <div
        class="paragraph-image__caption"
        v-if="hasCaption"
      >
        {{ dataFieldCaption }}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PgImage',
    props: {
      dataImgSrc: { type: String, default: () => '' },
      dataFieldCopyright: { type: String, default: () => '' },
      dataFieldCaption: { type: String, default: () => '' },
    },
    computed: {
      hasCopyright() {
        return this.dataFieldCopyright !== '';
      },
      hasCaption() {
        return this.dataFieldCaption !== '';
      },
      hasImage() {
        return this.dataImgSrc !== '';
      },
    }
  };
</script>
