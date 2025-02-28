import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ id }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="bg-white p-3 rounded-md shadow-md mt-2">
            {id}
        </div>
    );
};

export default SortableItem;
