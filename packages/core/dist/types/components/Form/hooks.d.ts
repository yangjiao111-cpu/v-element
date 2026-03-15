import { MaybeRef } from 'vue';
import { FormItemContext } from './types';

export declare function useFormItem(): {
    form: import('packages/core').FormContext | undefined;
    formItem: FormItemContext | undefined;
};
export declare function useFormDisabled(fallback?: MaybeRef<boolean | void>): import('vue').ComputedRef<boolean>;
interface UseFormItemInputCommonProps extends Record<string, any> {
    id?: string;
}
export declare function useFormItemInputId(props: UseFormItemInputCommonProps, formItemContext?: FormItemContext): {
    inputId: import('vue').Ref<string, string>;
};
export {};
