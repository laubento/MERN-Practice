import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "../utils/logger";
import { Get, Query, Route, Tags } from "tsoa";


@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {
    /**
     * Endopoint to retreive a Message "Hello Name" in JSON
     * @param name Name of usuer to be greeted
     * @returns Promise of BasicResponse
     */

    @Get("/")
    public async getMessage(name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get Request')

        return {
            message: 'Hello ' + (name || 'anonimo')
        }
    }

}
