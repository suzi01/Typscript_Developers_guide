"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
const HTMLReport_1 = require("./ReportTargets/HTMLReport");
class Summary {
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HTMLReport_1.HtmlReport);
    }
    constructor(analyzer, outPutTarget) {
        this.analyzer = analyzer;
        this.outPutTarget = outPutTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outPutTarget.print(output);
    }
}
exports.Summary = Summary;
// new Summary(new WinsAnalysis(), new ConsoleReport());
