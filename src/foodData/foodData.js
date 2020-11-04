import lunch1 from '../images/lunch/lunch1.png';
import lunch2 from '../images/lunch/lunch2.png';
import lunch3 from '../images/lunch/lunch3.png';
import lunch4 from '../images/lunch/lunch4.png';
import lunch5 from '../images/lunch/lunch5.png';
import lunch6 from '../images/lunch/lunch6.png';
import breakfast1 from '../images/Breakfast/breakfast1.png';
import breakfast2 from '../images/Breakfast/breakfast2.png';
import breakfast3 from '../images/Breakfast/breakfast3.png';
import breakfast4 from '../images/Breakfast/breakfast4.png';
import breakfast5 from '../images/Breakfast/breakfast5.png';
import breakfast6 from '../images/Breakfast/breakfast6.png';
import dinner1 from '../images/Dinner/dinner1.png';
import dinner2 from '../images/Dinner/dinner2.png';
import dinner3 from '../images/Dinner/dinner3.png';
import dinner4 from '../images/Dinner/dinner4.png';
import dinner5 from '../images/Dinner/dinner5.png';
import dinner6 from '../images/Dinner/dinner6.png';
const foodData = [
    { foodId: '1', id: '1', title: 'Love what you eat', name: "Healthy Meal Plan", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 6.99, img: lunch1, 'type': 'lunch' },
    { foodId: '1', id: '2', title: 'Love what you eat', name: "Fried Chicken Bento", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 6.99, img: lunch2, 'type': 'lunch' },
    { foodId: '1', id: '3', title: 'Love what you eat', name: "Tarragon-Rubbled-Salmon", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 6.99, img: lunch3, 'type': 'lunch' },
    { foodId: '1', id: '4', title: 'Love what you eat', name: "Indian Lunch", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 6.99, img: lunch4, 'type': 'lunch' },
    { foodId: '1', id: '5', title: 'Love what you eat', name: "Breaf Steak", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 6.99, img: lunch5, 'type': 'lunch' },
    { foodId: '1', id: '6', title: 'Love what you eat', name: "Honey Soy Glazzed Salmon With Pappers", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 6.99, img: lunch6, 'type': 'lunch' },

    { foodId: '2', id: '7', title: 'Love what you eat', name: "Bagel and cream cheese", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 6.99, img: breakfast1, 'type': 'breakfast' },
    { foodId: '2', id: '8', title: 'Love what you eat', name: "Breakfast Sandwitch", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 6.99, img: breakfast2, 'type': 'breakfast' },
    { foodId: '2', id: '9', title: 'Love what you eat', name: "Bucked Chicken", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 6.99, img: breakfast3, 'type': 'breakfast' },
    { foodId: '2', id: '10', title: 'Love what you eat', name: "Eggs Benedicts", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 6.99, img: breakfast4, 'type': 'breakfast' },
    { foodId: '2', id: '11', title: 'Love what you eat', name: "Toast Coissant Fried egg", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 6.99, img: breakfast5, 'type': 'breakfast' },
    { foodId: '2', id: '12', title: 'Love what you eat', name: "Full Breakfast fried egg Toast Brunch", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 6.99, img: breakfast6, 'type': 'breakfast' },

    { foodId: '3', id: '13', title: 'Love what you eat', name: "Salmon with graphfruit and Lentil Salad", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 9.99, img: dinner1, 'type': 'dinner' },
    { foodId: '3', id: '14', title: 'Love what you eat', name: "Lamony Salmon Piccata", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 10.99, img: dinner2, 'type': 'dinner' },
    { foodId: '3', id: '15', title: 'Love what you eat', name: "Pork Tenderloin With Quinoa Pilaf", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 12.99, img: dinner3, 'type': 'dinner' },
    { foodId: '3', id: '16', title: 'Love what you eat', name: "Frencch fries with cheese", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 8.99, img: dinner4, 'type': 'dinner' },
    { foodId: '3', id: '17', title: 'Love what you eat', name: "Gurlic Butter Busked Salmon", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 6.99, img: dinner5, 'type': 'dinner' },
    { foodId: '3', id: '18', title: 'Love what you eat', name: "Busket Chicken", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto inventore temporibus id! Cupiditate iusto repellat assumenda! Fuga rerum earum possimus atque perspiciatis nihil optio repudiandae!", price: 6.99, img: dinner6, 'type': 'dinner' },
]

export default foodData;