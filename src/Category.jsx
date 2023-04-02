const Category = ({ categories, updateCategory }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            className='btn'
            key={category}
            onClick={() => updateCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Category;
