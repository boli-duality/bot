## Modules

A custom user module system. Place a `.ts` file with the following template, it will be installed automatically.

```ts
import type { UserModule } from '~/types/modules'

export const install: UserModule = (app) => {
  // do something
}
```
