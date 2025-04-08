
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
    Component: React.FC<any>;
}

type Section = {
    name: string;
    Component: React.FC<any>;
    props: {
        code?: string;
        language?: string;
        props?: ComponentProps[];
        examples?: Example[];
        componentName?: string;
        lineNumbers?: boolean;
        theme?: string;
    };
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
