import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "../utils/logger";
import { Get, Query, Route, Tags } from "tsoa";


@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {
    /**
     * Endopoint to retreive a Message "Hello Name" in JSON
     * @param {string | undefined} name Name of usuer to be greeted
     * @returns { BasicResponse }Promise of BasicResponse
     */

    @Get("/")
    public async getMessage(@Query()name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get Request')

        return {
            message: 'Hello ' + (name || 'anonimo')
        }
    }

}
