import { Form } from "./Form";

interface Props {
  id?: string;
}

export function ContactMe({ id }: Props) {
  return (
    <div
      id={id}
      className="container max-w-screen-md my-12 py-12 md:my-20 md:py-20"
    >
      <h2 className="text-4xl font-bold mb-12">Contact Me</h2>

      <div className="">
        <Form />
      </div>
    </div>
  );
}
