import React from 'react';

interface Props {
  name: string;
  onClick?: () => void;
  style: React.CSSProperties;
}

function Button(props: Props) {
  const { style, onClick, name } = props;

  return (
    <button onClick={onClick} style={style}>
      {name}
    </button>
  );
}

export default Button;
