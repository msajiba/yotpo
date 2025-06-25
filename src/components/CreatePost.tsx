"use client";

import { createPost } from "../../actions";
import { useRef, useState } from "react";

export default function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    const result = await createPost(formData);
    if (!result.status) {
      console.error(result.message);
      return;
    }
    console.log(result.message);
    setIsOpen(false);
    formRef.current?.reset();
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Create Post
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
            <form ref={formRef} action={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Enter post title"
                required
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
