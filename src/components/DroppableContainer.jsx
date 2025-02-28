import { useDroppable } from "@dnd-kit/core";

const DroppableContainer = ({ title, children }) => {
    const { setNodeRef } = useDroppable({ id: title });

    return (
        <div ref={setNodeRef} className="bg-gray-200 p-4 rounded-lg min-h-[200px]">
            <h2 className="text-lg font-bold">{title}</h2>
            {children}
        </div>
    );
};

export default DroppableContainer;
