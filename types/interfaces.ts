
interface Props {
    name: string;
    type: string;
    default?: string;
    description: string;
}

interface Example {
    name: string;
    code: string;
}

interface CodePre { 
    code: string; 
    language: string; 
    componentName?: string; 
}

interface ComponentType {
    id: string;
    name: string;
    description: string;
    dependencies?: string;
    props?: ComponentProps[];
    new?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component: React.ComponentType<any>;
}

type Section = {
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component: React.ComponentType<any>;
    props: Record<string, unknown>;
};

interface ComponentProps {
    name: string;
    props: {
        name: string; 
        type: string; 
        required?: boolean; 
        default: string; 
        description: string;
    }[];
}
