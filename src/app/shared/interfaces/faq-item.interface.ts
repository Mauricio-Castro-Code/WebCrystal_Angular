export interface FaqItem {
  readonly question: string;
  readonly intro?: string;
  readonly bullets?: readonly string[];
  readonly outro?: string;
}
