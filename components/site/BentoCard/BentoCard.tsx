import Link from "next/link";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { BsArrowRight } from "react-icons/bs";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

type BentoCardProps = {
  name: string;
  background?: ReactNode;
  Icon?: IconType;
  classname?: string;
  description: string;
  href: string;
  cta: string;
};

const BentoGrid = ({ children }: BentoGridProps) => {
  return (
    <div
      className={
        "grid w-full auto-rows-[22rem] grid-cols-4 gap-4"
}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  background,
  Icon,
  classname,
  description,
  href,
  cta,
}: BentoCardProps) => (
  <div
    key={name}
    className={
      `group relative flex flex-col justify-between overflow-hidden rounded-xl bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu data-dark:[border:1px_solid_rgba(255,255,255,.1)] data-dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ${classname}`
}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-foreground transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-foreground">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    <div
      className={
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
}
    >
      <button className="pointer-events-auto bg-white/5 backdrop-blur-sm px-3 py-2 rounded-md text-sm">
        <Link href={href} className="flex items-center">
          {cta}
          <BsArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:data-dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
