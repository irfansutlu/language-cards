const CardBack = (items) => {
  const { name, options } = items;
  return (
    <>
      <ul>
        {options.map((li) => {
          return <li>{li}</li>;
        })}
      </ul>
    </>
  );
};

export default CardBack;
