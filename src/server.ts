import {App} from "./app";
import container from "./container";

const app = new App(container).build();

app.listen(3000, () => {
    console.log('** App is listening on port 3000!');
});
