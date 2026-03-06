import type { InjectionKey } from "vue";
import type { CollapseContext } from './types'

export const COLLPASE_CTX_KEY: InjectionKey<CollapseContext> = Symbol("collapseContext")