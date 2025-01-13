
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

interface ComponentDataProps {
    id: string;
    name: string;
    description: string;
    dependencies?: string;
    installation?: string;
    usage?: string;
    props: Props[];
    examples?: Example[];
    Component: React.FC<any>;
  }

  type Section = {
    name: string;
    Component: React.FC<any>;
    props: {
        code?: string;
        language?: string;
        props?: Props[];
        examples?: Example[];

    };
};
