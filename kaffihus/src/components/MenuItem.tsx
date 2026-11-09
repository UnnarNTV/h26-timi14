type MenuItemProps = {
  name: string;
  description: string;
  price: number;
  isVegan?: boolean;
  emoji?: string;
};

function MenuItem({
  name,
  description,
  price,
  isVegan,
  emoji = "☕",
}: MenuItemProps) {
  return (
    <article className="menu-item">
      <h3>
        {emoji}
        {name}
      </h3>
      {isVegan && <span className="badge">Vegan</span>}
      <p>{description}</p>
      <p className="price">{price} kr.</p>
    </article>
  );
}

export default MenuItem;
