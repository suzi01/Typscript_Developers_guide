import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./ReportTargets/HTMLReport";

export interface Analyzer {
    run(matches: MatchData[]):string;
}

export interface outPutTarget{
    print(report:string):void;
}

export class Summary{

    static winsAnalysisWithHtmlReport(team:string):Summary{
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport
        );
    }

    constructor(
        public analyzer: Analyzer, 
        public outPutTarget:outPutTarget)
    {}

    buildAndPrintReport(matches: MatchData[]): void{
        const output = this.analyzer.run(matches);
        this.outPutTarget.print(output);
    }
}

// new Summary(new WinsAnalysis(), new ConsoleReport());