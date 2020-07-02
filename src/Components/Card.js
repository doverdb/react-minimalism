import React from 'react';

const defaultCardProps = {
  cardHeight: 300,
}

const generateDefaultContentProps = (cardHeight) => ({
  style: {
    maxHeight: cardHeight - 50,
    overflow: "scroll",
  },
});

const defaultCardStyle = {
  backgroundColor: "white",
  border: "0px solid #787878",
  borderRadius: 25,
  boxShadow: "0px 6px 20px #787878",
  cardHeight: 300,
}

const defaultTitleProps = {
  fontWeight: "bold",
  color: "#383838",
  letterSpacing: 2,
}

function Card({ children, cardHeight, id, isInitialTop, onClick, title, ...props }) {
  const computedHeight = cardHeight || defaultCardProps.cardHeight;
  const computedStyle = {
    ...defaultCardStyle,
    marginTop: isInitialTop ? 0 : -computedHeight + 50,
    height: computedHeight,
    ...props.style,
  }
  const defaultContentProps = generateDefaultContentProps(computedHeight);
  return (
    <div
      className="card"
      id={id}
      onClick={onClick}
      {...props}
      style={computedStyle}
    >
      <p style={{ ...defaultTitleProps }}>{title}</p>
      <div className="card-content" {...defaultContentProps}>
        {children}
      </div>
    </div>
  );
};

export default Card;
