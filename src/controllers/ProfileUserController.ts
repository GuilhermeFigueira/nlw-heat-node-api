import { Request, Response } from "express";
import { Get3LastMessagesService } from "../services/GetLast3MessagesService";
import { ProfileUserService } from "../services/ProfileUserService";

class ProfileUserContoller {
	async handle(request: Request, response: Response) {
		const { user_id } = request;

		const service = new ProfileUserService();

		const result = await service.execute(user_id);

		return response.json(result);
	}
}

export { ProfileUserContoller };
