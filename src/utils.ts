import { TVDElementRecord } from './types';

export const isString = (entity: unknown): entity is string =>
  Object.is(typeof entity, 'string');
export const isArray = (entity: unknown) => Array.isArray(entity);
export const isSameString = (first: string, second: string) =>
  Object.is(first, second);
export const isSameTags = (first: TVDElementRecord, second: TVDElementRecord) =>
  Object.is(first.tag, second.tag);
