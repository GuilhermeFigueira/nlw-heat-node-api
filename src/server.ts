import { serverHttp } from "./App";

serverHttp.listen(3333, () =>
	console.log("Server is running on http://localhost:3333")
);
