import gsap from "gsap";
import React, { useEffect, useState } from 'react';

const defaultCardHolderProps = {
  display: "flex",
  flexDirection: "column",
  left: 400,
  position: "absolute", 
  textAlign: "center",
  top: 100,
  cardWidth: 250,
};

const lastElement = (arr) => arr[arr.length - 1];

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const unit = 50;

function CardHolder({ children, cardHeight, cardWidth, ...props }) {
  const [cardOrder, setCardOrder] = useState(range(0, children.length - 1))
  const [topIndex, setTopIndex] = useState(children.length - 1);

  useEffect(() => {
    if (lastElement(cardOrder) === topIndex) return;
    document.getElementById(`c-${topIndex}`).style.zIndex = 999;
    setTimeout(() => {
      let haveSeenTopIndex = false;
      cardOrder.forEach((e) => {
        if (e === topIndex) {
          gsap.to(`#c-${topIndex}`, 1, {y: (children.length - 1 - topIndex) * unit}); 
          haveSeenTopIndex = true;
        }
        else if (haveSeenTopIndex) {
          const targetPosition = cardOrder.indexOf(e) - 1;
          const initialPosition = e;
          const stepDelta = targetPosition - initialPosition;
          const newOffset = unit * stepDelta;
          gsap.to(`#c-${e}`, 1, {y: newOffset});
        }
      })
    }, 300)
    const newOrder = [...cardOrder.filter(c => c !== topIndex), topIndex];
    newOrder.forEach((e, i) => {
      document.getElementById(`c-${e}`).style.zIndex = i;
    })
    setCardOrder(newOrder);
  }, [cardOrder, children, topIndex])

  const computedWidth = cardWidth || defaultCardHolderProps.cardWidth

  return (
    <div style={{ ...defaultCardHolderProps, width: computedWidth, ...props}}>
      {children.map((Card, i) => (
        React.cloneElement(
          Card,
          {
            id: `c-${i}`,
            key: `${i}`,
            cardHeight: cardHeight,
            onClick: () => setTopIndex(i),
            isInitialTop: i === 0,
          },
        )
      ))}
    </div>
  );
};

export default CardHolder;
