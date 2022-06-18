import type { ReactNode } from "react";

export const Card = (props: { title: ReactNode; content: ReactNode }) => {
  return (
    <div className="card bordered w-fit glass items-center justify-center bg-primary animation hover:bg-primary/60 focus:bg-primary/60">
      <div className="card-title pt-8">{props.title}</div>
      <div className="card-body items-center text-center justify-center">
        {props.content}
      </div>
    </div>
  );
};
