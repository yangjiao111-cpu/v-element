import { Ref, ComputedRef } from 'vue';
import { SelectOptionProps, SelectStates } from './types';

interface KeyMapParams {
    isDropdownVisible: Ref<boolean>;
    highlightedLine: ComputedRef<SelectOptionProps | void>;
    hasData: ComputedRef<boolean>;
    lastIndex: ComputedRef<number>;
    selectStates: SelectStates;
    controlVisible(visible: boolean): void;
    handleSelect(option: SelectOptionProps): void;
}
export default function useKeyMap({ isDropdownVisible, controlVisible, selectStates, highlightedLine, handleSelect, hasData, lastIndex, }: KeyMapParams): Map<string, Function>;
export {};
