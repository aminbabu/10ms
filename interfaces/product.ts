export interface Data {
  slug: string;
  id: number;
  title: string;
  description: string; // HTML string
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}

export interface Medium {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface Seo {
  defaultMeta: Meta[];
  description: string;
  keywords: string[];
  schema: Schema[];
  title: string;
}

export interface Meta {
  content: string;
  type: string;
  value: string;
}

export interface Schema {
  meta_name: string;
  meta_value: string;
  type: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: SectionValue[];
}

export interface SectionValue {
  id?: string;
  title?: string;
  description?: string;
  icon?: string;
  subtitle?: string;
  background_color?: string;
  background_img?: string;
  checklist_text_color?: string;
  end_at?: string;
  start_at?: string;
  template?: string;
  text?: string;
  has_instructor_page?: boolean;
  image?: string;
  name?: string;
  short_description?: string;
  slug?: string;
  background?: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta?: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description_color?: string;
  thumbnail?: string;
  title_color?: string;
  top_left_icon_img?: string;
  color?: string;
  profile_image?: string;
  testimonial?: string;
  thumb?: string;
  video_type?: string;
  video_url?: string;
  checklist?: string[];
  file_type?: string;
  file_url?: string;
  video_thumbnail?: string;
}
