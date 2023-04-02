import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((item) => {
    return    <MenuItem key={item.id} {...item}></MenuItem>;
      })}
    </div>
  );
};
export default Menu;
