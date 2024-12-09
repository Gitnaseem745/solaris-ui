import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full h-screen">
        <h1 className="text-7xl font-semibold max-lg:text-5xl max-sm:text-3xl text-center">
            <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                Solaris </span>
            UI Coming Soon...
        </h1>
        <Button label="Coming Soon..." />
    </div>
  );
}
