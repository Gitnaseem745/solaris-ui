'use client';

import PageNavigator from "@/components/site/PageNavigator/PageNavigator";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 justify-center items-center w-full min-h-[calc(100vh-96px)] relative">
      <h1 className="text-7xl font-bold max-lg:text-5xl max-sm:text-[40px] text-center">
        <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
          Solaris UI
        </span>
        <span className="font-sans text-neutral-100"></span>
      </h1>

      {window.innerWidth >= 640 && (
        <p className="font-sans text-xl text-center w-8/12 max-lg:w-10/12 -mt-10 tracking-wide text-neutral-400">
          Solaris UI is a{" "}
          <span className="font-semibold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
            React component library built with TypeScript and Tailwind CSS
          </span>{" "}
          designed for developers who value efficiency. Quickly select, copy, and paste components into your project to accelerate development seamlessly. :)
        </p>
      )}

      {window.innerWidth < 640 && (
        <p className="font-sans text-xl text-center w-10/12 px-2 tracking-normal -mt-12 text-neutral-400">
          React component library built with TypeScript and Tailwind CSS
        </p>
      )}

      <div className="w-[700px] max-lg:w-[400px] max-sm:w-[200px]">
        <ul className="flex flex-col gap-2">
          <PageNavigator label="Explore Buttons" link="/buttons" />
        </ul>
      </div>
    </div>
  );
}
