<template>
  <div class="paragraph paragraph--image">
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
  };
</script>
