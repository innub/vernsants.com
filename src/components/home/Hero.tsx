import { Button } from "@components/shared/Button";
import { SearchAutoComplete } from "@components/shared/SearchAutoComplete";
import { FC } from "react";

export const Hero: FC = () => {
  return (
    <section
      className="w-screen h-screen relative grid grid-rows-2"
      style={{ height: "calc(100vh - 5rem)", minHeight: "500px" }}
    >
      <div
        style={{ marginTop: "15vh" }}
        className="flex flex-col gap-16 items-center"
      >
        <h1 className="text-secondary text-3xl lg:text-4xl xl:text-6xl font-medium text-center">
          Shop <span className="text-highlight">Vern's</span> Unique Collection
          of Ants
        </h1>
        <div className="w-3/4 sm:w-96 h-14">
          <SearchAutoComplete />
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center self-end mb-28">
        <Button bgColor="highlight" link="/shop" customDim="w-32 sm:w-52 h-12">
          <h1 className="text-primary font-medium text-lg">Shop Now</h1>
        </Button>
        <Button
          bgColor="secondary-light"
          link="#featured-sales"
          customDim="w-60 sm:w-80 sm:w-96 h-12"
        >
          <h1 className="text-secondary font-medium text-sm  sm:text-lg whitespace-nowrap">
            Check out <span className="text-highlight">Vern's</span> Hotest
            Sales
          </h1>
        </Button>
      </div>
    </section>
  );
};