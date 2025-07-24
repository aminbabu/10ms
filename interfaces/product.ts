export interface Media {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

export interface CheckList {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface DefaultMeta {
  content: string;
  type: string;
  value: string;
}

export interface Schema {
  meta_name: string;
  meta_value: string;
  type: string;
}

export interface SEO {
  defaultMeta: Array<DefaultMeta>;
  description: string;
  keywords: Array<string>;
  schema: Array<Schema>;
  title: string;
}

export interface CTAText {
  name: string;
  value: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[];
}

export interface Product {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  media: Array<Media>;
  checklist: Array<CheckList>;
  seo: SEO;
  cta_text: CTAText;
  sections: Array<Section>;
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}
