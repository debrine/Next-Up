import BiohackerClassDefaults from "./biohacker/BiohackerClassDefaults.ts";
import { ClassDefaultTypes } from "../type-files/classDefaultTypes.type.ts";
import EnvoyClassDefaults from "./envoy/EnvoyClassDefaults";

export let classList: {
    className: string,
    classDefaults: ClassDefaultTypes
}[]= [
    {
        className: 'Biohacker',
        classDefaults: BiohackerClassDefaults
    },
    {
        className: 'Envoy',
        classDefaults: EnvoyClassDefaults
    }
]