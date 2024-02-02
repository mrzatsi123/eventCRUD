// Interface definition for the Event object
export interface Event {
  image :any;
  name: string;
  description: string;
  startDate : any;
  startTime : any;
  category: string;
  type: string;
  insideUniversity? : boolean;
  state?: string;
  place?: string;
  locationLink?: string;
  locationDesciption?: string;
  appName?: string;
  appLink?: string;
}
