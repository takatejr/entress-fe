import { APP } from "./app";
import { PORT } from "./utils/const";

const server = APP.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
