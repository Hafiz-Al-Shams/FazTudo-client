import { closestCenter, closestCorners, DndContext } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import DroppableContainer from "./DroppableContainer";
import SortableItem from "./SortableItem";



const Test = () => {
    // State: Contains multiple lists (columns)
    const [containers, setContainers] = useState({
        "To-Do": ["Task 1", "Task 2"],
        "In Progress": ["Task 3"],
        "Done": ["Task 4", "Task 5"]
    });

    // Handles when drag ends
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over) return; // If dropped outside, do nothing

        const activeId = active.id; // Dragged item
        const overId = over.id; // Dropped onto this item/container

        let sourceContainer, destinationContainer;

        // Find source & destination containers
        Object.entries(containers).forEach(([key, items]) => {
            if (items.includes(activeId)) sourceContainer = key;
            if (items.includes(overId) || key === overId) destinationContainer = key;
        });

        // Case 1: Reordering inside the same container
        if (sourceContainer === destinationContainer) {
            const newItems = [...containers[sourceContainer]];
            const oldIndex = newItems.indexOf(activeId);
            const newIndex = newItems.indexOf(overId);

            newItems.splice(oldIndex, 1);
            newItems.splice(newIndex, 0, activeId);

            setContainers({ ...containers, [sourceContainer]: newItems });
        }

        // Case 2: Moving to another container
        else if (sourceContainer && destinationContainer) {
            const sourceItems = [...containers[sourceContainer]];
            const destinationItems = [...containers[destinationContainer]];

            // Remove from old container
            sourceItems.splice(sourceItems.indexOf(activeId), 1);

            // Add to new container
            destinationItems.splice(destinationItems.indexOf(overId) + 1, 0, activeId);

            setContainers({
                ...containers,
                [sourceContainer]: sourceItems,
                [destinationContainer]: destinationItems,
            });
        }
    };

    return (
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
            <div className="grid grid-cols-3 gap-4">
                {Object.entries(containers).map(([title, items]) => (
                    <DroppableContainer key={title} title={title}>
                        <SortableContext items={items} strategy={verticalListSortingStrategy}>
                            {items.map((item) => (
                                <SortableItem key={item} id={item} />
                            ))}
                        </SortableContext>
                    </DroppableContainer>
                ))}
            </div>
        </DndContext>
    );
};

export default Test;