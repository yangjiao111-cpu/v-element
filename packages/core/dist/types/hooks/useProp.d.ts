import { ComputedRef } from 'vue';

export default function useProp<T>(propName: string): ComputedRef<T | void>;
