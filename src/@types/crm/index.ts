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
  social_media_links: {
    facebook?: string;
    x?: string;
    linkedin?: string;
    instagram?: string;
    tiktok?: string;
    snapchat?: string;
    website?: string;
  };
  source: Tag[];
  opportunity: string;
  created_at: string;
  updated_at: string;
  category: null | string;
}
