# vue-lupus-paragraph-image
Vue image paragraph component.

## Install

via npm:
`npm install https://github.com/drunomics/vue-lupus-paragraph-image.git`


import it:

```
import PgImage from 'vue-lupus-paragraph-image';

Vue.component('pg-image', PgImage);
```

## Slots
You can use the following slots

- `image` ( default )
  Should contain a <lupus-image>
- `caption` ( optional )
  Image caption.
- `copyright` ( optional )
  Image copyright.

## Example
```
<pg-image>
  <lupus-image
    width="200" height="300"
    :src="..."
    slot="image"
  >
    <img :src="...">
  </lupus-image>
  <span slot="copyright">Lorem Ipsum.</span>
  <span slot="caption">Lorem Ipsum.</span>
</pg-image>
```
