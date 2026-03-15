import { Ref } from 'vue';

interface UseFocusControllerOptions {
    afterFocus?(): void;
    beforeBlur?(event: FocusEvent): boolean | void;
    afterBlur?(): void;
}
export declare function useFocusController<T extends HTMLElement | {
    focus(): void;
}>(target: Ref<T | void>, { afterFocus, beforeBlur, afterBlur }?: UseFocusControllerOptions): {
    wrapperRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    isFocused: Ref<boolean, boolean>;
    handleFocus: (event: FocusEvent) => void;
    handleBlur: (event: FocusEvent) => void;
};
export default useFocusController;
