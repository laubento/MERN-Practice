import { NameAndDate } from "./types";
import { IGoodByeController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class GoodByeController implements IGoodByeController {

    public async getMessage(date:Date, name?: string): Promise<NameAndDate> {
        LogSuccess('[/api/goodBye] Get Request')

        return{
            message: "GoodBye " + (name || 'anonimo'),
            date: date
        }
    }

}
