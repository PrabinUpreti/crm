import { Tag } from "emblor";

export interface IContact {
  uuid: string;
  organization: number;
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  street: string;
  country: string;
  phone: string;
  company_name: string;
  company_position?: null | string;
  next_comms_date?: null | string;
  background_field: string;
  social_media_links: { type: string; url: string }[];
  source: string[];
  opportunity: string;
  created_at: string;
  updated_at: string;
  category: null | string;
}
