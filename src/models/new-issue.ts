import { IssueType } from "./issue-type";

export class NewIssue {
    location: {
      latitude: number,
      longitude: number
    };
    description: string;
    tags: string[];
    imageURL: string;
    issueType: string;
  }