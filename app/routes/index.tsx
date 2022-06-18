import { Card } from "~/components/cards";

const Index = () => (
  <div className="hero min-h-screen bg-base-100 animation">
    <div className="hero-content text-center">
      <Card
        title={
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary-focus ring-offset-primary ring-offset-2 animation">
              <a href="https://github.com/ronit-sh">
                <img src="https://avatars.githubusercontent.com/u/98030646" alt="Primary" />
              </a>
            </div>
          </div>
        }
        content={
          <>
            <h1 className="text-3xl font-bold text-primary-content animation">
              RONIT KUMAR
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
            <p className="text-lg text-primary-content animation mt-4">
              विद्या ददाति विनयं विनयाद्याति पात्रताम् ।
            </p>
            <p className="text-lg text-primary-content animation">
              Education leads to sensibility, sensibility attains
              character/qualification;
            </p>
            <p className="text-lg text-primary-content animation mt-2">
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
