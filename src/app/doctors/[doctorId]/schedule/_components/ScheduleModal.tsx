import React from "react";

interface ScheduleModalProps {
  control: () => void;
  open: boolean;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ control, open }) => {
  // If the modal is not open, do not render anything
  if (!open) return null;

  // Handle close action
  const handleClose = () => {
    control(); // Call the control function to close the modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-lg font-semibold mb-4">Add New Slot</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="start-time"
              className="block text-sm font-medium text-gray-700"
            >
              Start Time
            </label>
            <input
              type="time"
              id="start-time"
              name="start-time"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="end-time"
              className="block text-sm font-medium text-gray-700"
            >
              End Time
            </label>
            <input
              type="time"
              id="end-time"
              name="end-time"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={handleClose}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save Slot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleModal;
