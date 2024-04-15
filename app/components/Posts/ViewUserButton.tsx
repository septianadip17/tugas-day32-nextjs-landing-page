"use client";

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => alert(`user id: ${userId}`);
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
      >
        User ID
      </button>
    </>
  );
};

export default ViewUserButton;
