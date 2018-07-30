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

## Properties
You can pass the following props:

- `type` ( string )
  Type of media. Allowed values:
  - `image`
- `data-img-source` ( string )
  Image source.
- `field-copyright` ( string )
  The image's copyright.
- `field-caption` ( string )
  The image's caption.

## Example
```
<pg-image
  data-img-src="/path/to/image"
  field-copyright="(c)drunomics GmbH"
  field-caption="Beautiful image!"
>
```
