/** @typedef {typeof __propDef.props}  TooltipProps */
/** @typedef {typeof __propDef.events}  TooltipEvents */
/** @typedef {typeof __propDef.slots}  TooltipSlots */
export default class Tooltip extends SvelteComponentTyped<{
    [x: string]: any;
    tip?: string;
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    active?: boolean;
    color?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    'custom-tip': {};
}> {
}
export type TooltipProps = typeof __propDef.props;
export type TooltipEvents = typeof __propDef.events;
export type TooltipSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        tip?: string;
        top?: boolean;
        right?: boolean;
        bottom?: boolean;
        left?: boolean;
        active?: boolean;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        'custom-tip': {};
    };
};
export {};
