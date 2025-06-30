import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="container mx-auto mt-48">
      <h1 className="text-5xl font-bold">Propose YSWS Idea!</h1>
      <p className="mt-8 w-1/2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga minima
        sint sit in, sapiente a qui ea ullam asperiores amet saepe, veniam vero.
        Modi recusandae exercitationem laboriosam voluptatibus quos culpa!
      </p>
      <div className="flex gap-x-5 mt-3">
        <Button href="/" color="green">
          Propose
        </Button>
        <Button href="/" color="blue">
          View ideas
        </Button>
      </div>
    </div>
  );
}
