import BiohackerClassDefaults from "./biohacker/BiohackerClassDefaults.tsx";
import { ClassDefaultTypes } from "./all-class-types/classDefaultTypes.ts";
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