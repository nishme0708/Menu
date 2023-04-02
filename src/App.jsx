import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';
import Category from './Category';

const ALL = 'all';
const allCategories = [ALL, ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [category, setCategory] = useState(ALL);
  const handleCategory = (category) => {
    setCategory(category);
    if (category == ALL) {
      setMenuItems(menu);
    } else {
      setMenuItems(menu.filter((menuItem) => menuItem.category == category));
    }
  };
  console.log(menuItems);
  return (
    <main>
      <section className='menu'>
        <Title text={'Our Menu'}></Title>
        <Category
          categories={allCategories}
          updateCategory={handleCategory}
        ></Category>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
};
export default App;
