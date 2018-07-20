This is the TypeScript/JavaScript client for the api.infoeducatie.ro

Check the API repository at: https://github.com/infoeducatie/infoeducatie-api

Sample usage:
```typescript
//typescript
import { InfoeducatieApi, Current } from "infoeducatie-api-client";

(async _ => {
    let api = new InfoeducatieApi();
    
    let current: Current = await api.authorize("your-key").getCurrent();
    if(current.is_logged_in) { // check is the current session is logged in
        console.log(current.user.email); // will print the email of the currently logged in user
    } else {
        console.log("Could not authorize against Infoeducatie's API");
    }
})();
```

The client works with javascript as well... but i recommend using it with typescript :)
```javascript
//javascript
let { InfoeducatieApi } = require("infoeducatie-api-client");

(async _ => {
    let api = new InfoeducatieApi();

    let current = await api.authorize("your-key").getCurrent();
    if(current.is_logged_in) { // check is the current session is logged in
        console.log(current.user.email); // will print the email of the currently logged in user
    } else {
        console.log("Could not authorize against Infoeducatie's API");
    }
})();
```


Check the typings for more info on the usage! The DOCs of the API are pretty much missing (except for the API.md) so i had to reverse it using the ruby code :) Hope you enjoy!