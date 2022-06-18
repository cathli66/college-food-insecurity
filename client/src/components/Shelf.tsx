import React from 'react';
import '../styles/Shelf.scss';
import Tile from './Tile';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import useDrag from '../components/Drag'

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
type item = {
    name: string, 
    location: string, 
    date: string, 
    time: string, 
    restrict: string[], 
    person: string, 
    contact: string, 
    category: string
}


const Shelf = (
    {name, items} :
    {name: string; items: item[]}
) => {
    return (
        <div>
            <p className='shelfName'>{name}</p>

            <img src='../media/wood.png' alt='shelf'/>
            
        </div>
    )
}

export default Shelf

// const elemPrefix = "test";
// const getId = (index: number) => `${elemPrefix}${index}`;

// const getItems = () =>
//   Array(20)
//     .fill(0)
//     .map((_, ind) => ({ id: getId(ind) }));

// function App() {
//   const [items] = React.useState(getItems);

//   // NOTE: for drag by mouse
//   const { dragStart, dragStop, dragMove, dragging } = useDrag();
//   const handleDrag = ({ scrollContainer }: scrollVisibilityApiType) => (
//     ev: React.MouseEvent
//   ) =>
//     dragMove(ev, (posDiff) => {
//       if (scrollContainer.current) {
//         scrollContainer.current.scrollLeft += posDiff;
//       }
//     });

//   const [selected, setSelected] = React.useState<string>("");
//   const handleItemClick = (itemId: string) => () => {
//     if (dragging) {
//       return false;
//     }
//     setSelected(selected !== itemId ? itemId : "");
//   };

//   return (
//     <>
//       <Header />
//       <div className="example" style={{ paddingTop: "100px" }}>
//         <div onMouseLeave={dragStop}>
//           <ScrollMenu
//             // LeftArrow={LeftArrow}
//             // RightArrow={RightArrow}
//             // onWheel={onWheel}
//             onMouseDown={() => dragStart}
//             onMouseUp={() => dragStop}
//             onMouseMove={handleDrag}
//           >
//             {items.map(({ id }) => (
//               <Card
//                 title={id}
//                 itemId={id} // NOTE: itemId is required for track items
//                 key={id}
//                 onClick={handleItemClick(id)}
//                 selected={id === selected}
//               />
//             ))}
//           </ScrollMenu>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// }