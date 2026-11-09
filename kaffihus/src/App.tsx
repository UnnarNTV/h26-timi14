import "./App.css";
import Header from "./components/Header.tsx";
import MenuItem from "./components/MenuItem.tsx";
import MenuSection from "./components/MenuSection.tsx";
import Footer from "./components/Footer.tsx";

const drinks = [
  { id: 1, name: "Coffee", description: "Regular Joe", price: 500 },
  {
    id: 2,
    name: "Latte",
    description: "Coffee with milk",
    price: 790,
    emoji: "🥐",
  },
  {
    id: 3,
    name: "Cappuchino",
    description: "Also coffee with milk but reversed",
    price: 750,
  },
  {
    id: 4,
    name: "Chai Late",
    description: "Delicious and sweet",
    price: 1200,
    emoji: "🥐",
    isVegan: true,
  },
  {
    id: 5,
    name: "Pumpkin spice latte",
    description: "Hot diggity, a great treat for the tastebuds!",
    price: 1230,
    emoji: "🥐",
    isVegan: true,
  },
];

const food = [
  {
    id: 1,
    name: "Skyr cake",
    description: "Made with Icelandic skyr",
    price: 1250,
    isVegan: true,
  },
  {
    id: 2,
    name: "Croissant",
    description: "Classic and tasty",
    price: 555,
    emoji: "🥐",
  },
  {
    id: 3,
    name: "NY Cheese cake",
    description: "Straight outta the 'hood",
    price: 1270,
  },
  {
    id: 4,
    name: "Carrot cake",
    description: "Delicious and sweet",
    price: 1350,
    emoji: "🥐",
    isVegan: true,
  },
];

function App() {
  return (
    <>
      <Header
        name="Hananú"
        slogan="The best goddamn coffee in all the country!"
      />
      <main>
        <MenuSection title="Drykkir">
          {drinks.map((drink) => (
            <MenuItem
              key={drink.id}
              name={drink.name}
              description={drink.description}
              price={drink.price}
              isVegan={drink.isVegan}
              emoji={drink.emoji}
            />
          ))}
        </MenuSection>
        <MenuSection title="Matur">
          {food.map((food) => (
            <MenuItem
              key={food.id}
              name={food.name}
              description={food.description}
              price={food.price}
              isVegan={food.isVegan}
              emoji={food.emoji}
            />
          ))}
        </MenuSection>
      </main>
      <Footer
        address="Skólavörðustígur 21, 101 Reykjavík"
        openingHours="9:00 - 19:00"
      />
    </>
  );
}

export default App;
