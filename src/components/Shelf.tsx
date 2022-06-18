import React from 'react';
import '../styles/Shelf.scss';
import Tile from './Tile';
import useDrag from '../components/Drag';
import wood from '../media/wood.png';

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
        <div className='row'>
            <div className='info'>
                <p className='shelfName'>{name}</p>
                <button className='seeAll'>
                    see all
                </button>
            </div>
            <img src={wood} alt='shelf' className='shelf'/>
            <div className='tiles'>
                {items.map((item) => {
                    return (
                        <div className='tile'> 
                            <Tile name={item.name} location={item.location} date={item.date} time={item.time} restrict={item.restrict} person={item.person} contact={item.contact} category={item.category}/>
                        </div>
                    )
                })}
            </div>
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
