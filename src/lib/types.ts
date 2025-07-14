export interface YSWSProposal {
  name: string;
  YS: string;
  WS: string;
  description: string;
  demoURL?: string;
  websiteURL?: string;
}

export interface User {
  name: string;
  slackId: string;
  email: string;
  photo: string
}