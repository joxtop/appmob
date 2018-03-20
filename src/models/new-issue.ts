export class NewIssue {
  description: string;
  imageUrl: string;
  location: {
    coordinates: [number, number],
    type: string
  };
  tags: string[];
  issueTypeHref: string;
}