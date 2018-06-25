# vue-lupus-paragraph-image
Vue image paragraph component.



## Install

via npm:
`npm install https://github.com/drunomics/vue-lupus-paragraph-image.git`


import it:

```
import { PgImage } from 'vue-lupus-paragraph-image';

Vue.component('pg-image', PgImage);
```
## Options
You can pass options via props:

```
<pg-media
  type="{{ type }}"
  data-img-src="/path/to/image"
>
```

- `type` ( string )
  Type of media. Allowed values:
  - `image`
- `imgSrc` ( string )
  Image source.
