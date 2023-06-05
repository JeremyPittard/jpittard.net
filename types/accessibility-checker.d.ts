export interface pa11yResponse {
  documentTitle: string;
  pageUrl: string;
  issues: Array<pa11yIssues>;
}

export interface pa11yIssues {
  code: string;
  type: string;
  typeCode: number;
  message: string;
  context: string;
  selector: string;
  runner: string;
  rennerExtras: {};
}
