export type TVDTag = string;

export type TVDElement = TVDElementRecord | string | undefined;

export interface TVDPropRecord {
  [key: string]: any;
}

export type TVDElementRecord = {
  tag: TVDTag;
  props: TVDPropRecord;
  children: TVDElement[];
};

export type TRDElement = HTMLElement;

export type PatchAttributeCallback = (el: TRDElement) => HTMLElement;
