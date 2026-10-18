export type CurrencyCode = "USD" | "EUR" | "GBP" | string;

export type UserRole = "creator" | "curator" | "admin";

export type SubmissionStage =
  | "submitted"
  | "heard"
  | "rated"
  | "crated"
  | "opportunity"
  | "proof";

export type SubmissionState =
  | "active"
  | "completed"
  | "expired"
  | "refunded"
  | "cancelled";

export type OpportunityType =
  | "radio"
  | "interview"
  | "playlist"
  | "social_story"
  | "social_post"
  | "media_feature"
  | "event_consideration"
  | "performance"
  | "introduction"
  | "request_more_music"
  | "custom";

export type OpportunityStatus =
  | "offered"
  | "accepted"
  | "declined"
  | "scheduled"
  | "fulfilled"
  | "expired"
  | "cancelled";

export type ProofVerificationStatus =
  | "pending"
  | "verified"
  | "rejected";

export type AiDisclosure =
  | "human_created"
  | "ai_assisted"
  | "ai_generated_virtual_artist";

export interface Creator {
  id: string;
  displayName: string;
  location?: string;
  bio?: string;
  genres: string[];
  socialLinks: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

export interface CuratorReach {
  social?: number;
  playlist?: number;
  radio?: number;
  newsletter?: number;
  podcast?: number;
  liveAudience?: number;
  other?: number;
}

export interface CuratorReputation {
  crateCred?: number;
  responseRate?: number;
  completionRate?: number;
  opportunityFulfillmentRate?: number;
  averageResponseHours?: number;
  reviewCount?: number;
}

export interface Curator {
  id: string;
  displayName: string;
  professionalRole: string;
  organization?: string;
  country?: string;
  genres: string[];
  similarArtists?: string[];
  opportunityTypes: OpportunityType[];
  verified: boolean;
  level?: number;
  reach: CuratorReach;
  reputation: CuratorReputation;
  submissionPriceMinor: number;
  currency: CurrencyCode;
  acceptingSubmissions: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Track {
  id: string;
  creatorId: string;
  title: string;
  artworkUrl?: string;
  audioUrl?: string;
  durationSeconds?: number;
  releaseDate?: string;
  genres: string[];
  moods?: string[];
  similarArtists?: string[];
  streamingLinks: Record<string, string>;
  credits?: string[];
  aiDisclosure?: AiDisclosure;
  createdAt: string;
  updatedAt: string;
}

export interface Submission {
  id: string;
  creatorId: string;
  curatorId: string;
  trackId: string;
  stage: SubmissionStage;
  state: SubmissionState;
  priceMinor: number;
  curatorPayoutMinor?: number;
  platformFeeMinor?: number;
  currency: CurrencyCode;
  submittedAt: string;
  deadlineAt?: string;
  heardAt?: string;
  completedAt?: string;
}

export interface Review {
  id: string;
  submissionId: string;
  curatorId: string;
  writtenFeedback: string;
  rating?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Crate {
  id: string;
  submissionId: string;
  curatorId: string;
  trackId: string;
  createdAt: string;
  removedAt?: string;
}

export interface Opportunity {
  id: string;
  submissionId: string;
  curatorId: string;
  creatorId: string;
  trackId: string;
  type: OpportunityType;
  status: OpportunityStatus;
  title?: string;
  notes?: string;
  promisedAt: string;
  dueAt?: string;
  fulfilledAt?: string;
}

export interface ProofEvent {
  id: string;
  opportunityId?: string;
  submissionId: string;
  creatorId: string;
  curatorId?: string;
  trackId: string;
  type: string;
  description: string;
  evidenceUrl?: string;
  occurredAt: string;
  verificationStatus: ProofVerificationStatus;
  verifiedAt?: string;
}

export type LedgerEntryType =
  | "charge"
  | "platform_fee"
  | "curator_earning"
  | "refund"
  | "credit"
  | "payout"
  | "adjustment";

export interface LedgerEntry {
  id: string;
  userId?: string;
  submissionId?: string;
  type: LedgerEntryType;
  amountMinor: number;
  currency: CurrencyCode;
  createdAt: string;
  metadata?: Record<string, string | number | boolean | null>;
}
