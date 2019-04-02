import { classgroup } from './classgroup';
import defs from './api';
export type apitype = typeof defs;
export const api = { classgroup } as unknown as apitype;
