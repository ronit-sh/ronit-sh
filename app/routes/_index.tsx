import type { MetaFunction } from "@remix-run/cloudflare";
import { Card } from "~/components/cards";

export const meta: MetaFunction = () => {
  return [
    { title: "Ronit Kumar" },
    { name: "description", content: "Dreamer" },
  ];
};

const Index = () => (
  <div className="hero min-h-screen bg-base-100 animation">
    <div className="hero-content text-center">
      <Card
        title={
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary-focus ring-offset-primary ring-offset-2 animation">
              <a href="https://github.com/ronit-sh">
                <img
                  src="https://github.com/ronit-sh.png"
                  alt="Github"
                />
              </a>
            </div>
          </div>
        }
        content={
          <>
            <h1 className="text-3xl font-bold text-primary-content animation">
              <a href="https://github.com/ronit-sh">RONIT KUMAR</a>
            </h1>
            <p className="text-primary-content animation">
              Director,
              <a
                href="https://siva.sh"
                className="font-bold animation link link-hover text-primary-content text-xl ml-2"
              >
                SivaShakti FutureTech
              </a>
            </p>
            <p className="text-2xl text-primary-content animation mt-6">
              विद्या ददाति विनयं विनयाद्याति पात्रताम् ।
            </p>
            <p className="text-lg text-primary-content animation">
              Education leads to sensibility, sensibility attains
              character/qualification;
            </p>
            <p className="text-2xl text-primary-content animation mt-4">
              पात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम् ॥
            </p>
            <p className="text-lg text-primary-content animation">
              from that comes wealth and from wealth (one does) good deeds, from
              that (comes) joy.
            </p>
          </>
        }
      />
    </div>
  </div>
);

export default Index;
