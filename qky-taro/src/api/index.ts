import { ripple } from './ripple';
import defs from './api';
export type apitype = typeof defs;
export const api = ({ ripple } as unknown) as apitype;
