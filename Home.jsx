import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

const meals = {
  Breakfast: [
    { name: "Avocado Toast with Poached Eggs", img: "breakfast1.jpg", calories: 380, time: "15 min" },
    { name: "Greek Yogurt Bowl", img: "breakfast2.jpg", calories: 290, time: "5 min" },
    { name: "Overnight Oats", img: "breakfast3.jpg", calories: 340, time: "8 min" },
    { name: "Smoothie Bowl", img: "breakfast4.jpg", calories: 310, time: "10 min" },
    { name: "Banana Pancakes", img: "breakfast5.jpg", calories: 360, time: "12 min" },
    { name: "Chia Pudding", img: "breakfast6.jpg", calories: 280, time: "10 min" }
  ],
  Lunch: [
    { name: "Quinoa Buddha Bowl", img: "lunch1.jpg", calories: 420, time: "20 min" },
    { name: "Mediterranean Salad", img: "lunch2.jpg", calories: 380, time: "15 min" },
    { name: "Grilled Chicken Wrap", img: "lunch3.jpg", calories: 450, time: "25 min" },
    { name: "Poke Bowl", img: "lunch4.jpg", calories: 400, time: "18 min" },
    { name: "Veggie Burrito", img: "lunch5.jpg", calories: 390, time: "20 min" },
    { name: "Teriyaki Tofu Bowl", img: "lunch6.jpg", calories: 370, time: "22 min" }
  ],
  Dinner: [
    { name: "Salmon with Roasted Vegetables", img: "dinner1.jpg", calories: 520, time: "30 min" },
    { name: "Vegetarian Stir-Fry", img: "dinner2.jpg", calories: 380, time: "25 min" },
    { name: "Grilled Steak with Sweet Potato", img: "dinner3.jpg", calories: 580, time: "35 min" },
    { name: "Herb-Roasted Chicken", img: "dinner4.jpg", calories: 490, time: "45 min" },
    { name: "Pasta Primavera", img: "dinner5.jpg", calories: 400, time: "28 min" },
    { name: "Mushroom Risotto", img: "dinner6.jpg", calories: 410, time: "30 min" }
  ]
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-center">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Nutritious & Delicious</h1>
      <p className="text-md md:text-lg text-gray-600 mb-8">
        Explore our curated selection of healthy meals for every time of day.
      </p>

      {/* Display Breakfast, Lunch, and Dinner separately */}
      {Object.entries(meals).map(([category, mealList]) => (
        <MealSection key={category} category={category} meals={mealList} />
      ))}
    </div>
  );
}

function MealSection({ category, meals }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-12">
      {/* Category Title */}
      <h2 className="text-2xl font-bold text-green-600 mb-4">{category}</h2>

      {/* Scroll Buttons */}
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition z-10"
          onClick={scrollLeft}
        >
          <FaArrowLeft />
        </button>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-6"
          style={{ scrollBehavior: "smooth" }}
        >
          {meals.map((meal, index) => (
            <div
              key={index}
              className="w-64 min-w-[250px] bg-white shadow-md rounded-xl overflow-hidden snap-center"
            >
              <img src={meal.img} alt={meal.name} className="w-full h-32 sm:h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-sm sm:text-lg font-semibold">{meal.name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">{meal.calories} cal • {meal.time}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition z-10"
          onClick={scrollRight}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
