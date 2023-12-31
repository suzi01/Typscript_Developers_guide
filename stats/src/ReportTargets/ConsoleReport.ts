import { outPutTarget} from "../Summary";

export class ConsoleReport implements outPutTarget {
    print(report:string):void {
        console.log(report)
    }
}