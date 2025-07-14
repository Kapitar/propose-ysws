"use client";

import Button from "@/components/Button";
import Notification from "@/components/Notification";
import { useState } from "react";

export default function ProposePage() {
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setLoading(true);
    try {
      const response = await fetch('/api/ysws', {
        method: 'POST',
        body: formData
      });
      const data = await response.json()

      console.log(data);
      if (!data.success) {
        setErrorMessage(data.error || "Failed to submit proposal");
        setShowErrorNotification(true);
      } else {
        setShowSuccessNotification(true); 
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again later.");
      setShowErrorNotification(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto">
      <Notification tracker={showSuccessNotification} type="success">You successfully submitted the YSWS Idea</Notification>
      <Notification tracker={showErrorNotification} type="error">{errorMessage}</Notification>

      <h1 className="text-7xl font-bold mt-8">Propose Your Idea</h1>
      <p className="mt-4 text-xl">
        Share your innovative ideas with the community and get feedback!
      </p>
      <form onSubmit={handleSubmit} className="mt-6 gap-y-4 flex flex-col">
        <div className="ysws-name">
          <label className="text-xl" htmlFor="name">
            YSWS Program Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg text-xl"
            placeholder="Awesome YSWS Program"
            name="name"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div className="YS">
            <label className="text-xl" htmlFor="YS">
              What will participants build? (YS)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg text-xl"
              placeholder="PCB"
              name="YS"
              required
            />
          </div>

          <div className="WS">
            <label className="text-xl" htmlFor="WS">
              What will they get? (WS)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg text-xl"
              placeholder="$10 to buy components"
              name="WS"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div className="websiteURL">
            <label className="text-xl" htmlFor="websiteURL">
              YSWS Website Link (optional)
            </label>
            <input
              type="url"
              className="w-full px-4 py-2 border rounded-lg text-xl"
              placeholder="my-ysws.vercel.app"
              name="websiteURL"
            />
          </div>

          <div className="demoURL">
            <label className="text-xl" htmlFor="demoURL">
              Demo (optional)
            </label>
            <input
              type="url"
              className="w-full px-4 py-2 border rounded-lg text-xl"
              placeholder="my-ysws.vercel.app"
              name="demoURL"
            />
          </div>
        </div>

        <div className="description">
          <label className="text-xl" htmlFor="description">
            Describe your idea!
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg text-xl"
            rows={4}
            placeholder="My program is about this and this, and it is so awesome because..."
            name="description"
            required
          ></textarea>
        </div>

        <Button type="submit" color="red">
          {loading ? "Submitting..." : "Submit the Idea"}
        </Button>
      </form>
    </div>
  );
}
