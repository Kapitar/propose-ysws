import Button from "@/components/Button";

export default function ProposePage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-7xl font-bold mt-8">Propose Your Idea</h1>
      <p className="mt-4 text-xl">
        Share your innovative ideas with the community and get feedback!
      </p>
      <form className="mt-6 gap-y-4 flex flex-col">
        <div className="ysws-name">
          <label className="text-xl" htmlFor="ysws-name">
            YSWS Program Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg text-xl"
            placeholder="Awesome YSWS Program"
            name="ysws-name"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div className="ysws-ys">
            <label className="text-xl" htmlFor="ysws-name">
              What will participants build? (YS)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg text-xl"
              placeholder="PCB"
              name="ysws-ys"
              required
            />
          </div>

          <div className="ysws-ws">
            <label className="text-xl" htmlFor="ysws-name">
              What will they get? (WS)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg text-xl"
              placeholder="$10 to buy components"
              name="ysws-ws"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div className="ysws-website">
            <label className="text-xl" htmlFor="ysws-website">
              YSWS Website Link (optional)
            </label>
            <input
              type="url"
              className="w-full px-4 py-2 border rounded-lg text-xl"
              placeholder="my-ysws.vercel.app"
              name="ysws-website"
              required
            />
          </div>

          <div className="ysws-demo">
            <label className="text-xl" htmlFor="ysws-website">
              Demo (optional)
            </label>
            <input
              type="url"
              className="w-full px-4 py-2 border rounded-lg text-xl"
              placeholder="my-ysws.vercel.app"
              name="ysws-demo"
              required
            />
          </div>
        </div>

        <div className="ysws-description">
          <label className="text-xl" htmlFor="ysws-description">
            Describe your idea!
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg text-xl"
            rows={4}
            placeholder="My program is about this and this, and it is so awesome because..."
            name="ysws-description"
            required
          ></textarea>
        </div>

        <Button color="red">Submit the Idea</Button>
      </form>
    </div>
  );
}
