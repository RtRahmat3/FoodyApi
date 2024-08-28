function Card({ data }) {
  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden cursor-pointer py-2 px-2 ">
      <img
        className="w-full h-48 object-cover rounded-md hover:scale-105"
        src={data.strMealThumb}
        alt={data.strMeal}
      />
      <div className="p-4 hover flex items-center flex-col cursor-pointer">
        <h3 className="text-lg font-bold">{data.strMeal}</h3>
        <p className="text-gray-700">{data.strCategory}</p>
      </div>
    </div>
  );
}

export default Card;
