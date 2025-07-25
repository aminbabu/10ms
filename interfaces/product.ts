export interface IMedia {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

export interface ICheckList {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface IDefaultMeta {
  content: string;
  type: string;
  value: string;
}

export interface ISchema {
  meta_name: string;
  meta_value: string;
  type: string;
}

export interface SEO {
  defaultMeta: Array<IDefaultMeta>;
  description: string;
  keywords: Array<string>;
  schema: Array<ISchema>;
  title: string;
}

export interface ICTAText {
  name: string;
  value: string;
}

export interface ISection {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[];
}

export interface IProduct {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  media: Array<IMedia>;
  checklist: Array<ICheckList>;
  seo: SEO;
  cta_text: ICTAText;
  sections: Array<ISection>;
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}

export interface IInstructor {
  slug: string;
  name: string;
  description: string;
  short_description: string;
  image: IMedia;
  has_instructor_page: boolean;
}

export interface ISummaryItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface IBenefit {
  id: string;
  text: string;
  icon: string;
  color: string;
}

export interface IFeature {
  id: string;
  title: string;
  checklist: Array<string>;
  file_type: string;
  file_url: string;
  video_thumbnail: string;
}
