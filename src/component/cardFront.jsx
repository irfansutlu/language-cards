const CardFront = (items) => {
  const { img, name } = items;
  return (
    <>
      <img src={img} />
      <br />
      <h2>{name.toUpperCase()}</h2>
    </>
  );
};

export default CardFront;
