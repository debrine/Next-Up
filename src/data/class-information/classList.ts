import BiohackerClassDefaults from "./biohacker/BiohackerClassDefaults.ts";
import EnvoyClassDefaults from "./envoy/EnvoyClassDefaults";
import EvolutionistClassDefaults from "./evolutionist/EvolutionistClassDefaults.ts";

export let classList: { [key:string]: ClassListTypes}= {
    'Biohacker':{
        className: 'Biohacker',
        classDescription: 'You\'re fascinated by science in all its many facets. You understand that the fundamentals of biology, chemistry, physics, and other disciplines can help you exploit your enemies\' weaknesses and bolster your allies. You might be studious and methodical about your research, pushing your mind to the limit in search of discovery, or you might be a daring experimenter, improvising concoctions and stumbling upon grand revelations. Either way, you use your knowledge of several fields of scientific study to aid your allies, whether in the thick of battle or in crafting a perfect plan.',
        classDefaults: BiohackerClassDefaults
    },
    'Envoy':{
        className: 'Envoy',
        classDescription: 'You make your way in the universe with a charming smile, quick wit, and keen sense of self-preservation, and excel at getting others to do what you want. You might be a trickster, hustler, or con artist, or you might serve as an actor, ambassador, or businessperson, paving the way for negotiation through kind words or the occasional dirty trick. You are often the group\'s strategist, using your quick wit and tactical acumen to push your friends to greater heights. You may also be skilled in diplomacy, serving as the face for a starship crew, talking your way into restricted systems or gaining audiences with local politicians or warlords.',
        classDefaults: EnvoyClassDefaults
    },
    'Evolutionist':{
        className: 'Evolutionist',
        classDescription: '',
        classDefaults: EvolutionistClassDefaults
    }
}