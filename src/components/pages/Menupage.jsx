
import FoodMenu from './FoodMenu';
import Layout from '../Layout';

const menuItems = [
    { id: 1, name: 'Burger', description: 'Delicious burger with cheese', price: 9.99 },
    { id: 2, name: 'Pizza', description: 'Classic margherita pizza', price: 12.99 },
    { id: 3, name: 'Salad', description: 'Classic margherita pizza', price: 12.99 },
    { id: 4, name: 'Pizza', description: 'Classic margherita pizza', price: 12.99 },
    { id: 5, name: 'Shrimp', description: 'Classic margherita pizza', price: 12.99 },
    { id: 5, name: 'Sandwich.', description: 'Classic margherita pizza', price: 12.99 },
    { id: 7, name: 'Cheese', description: 'Classic margherita pizza', price: 12.99 },
    { id: 8, name: 'Fish', description: 'Classic margherita pizza', price: 12.99 },
    { id: 8, name: 'Sausages', description: 'Classic margherita pizza', price: 12.99 },
    { id: 10, name: 'Cupcake', description: 'Classic margherita pizza', price: 12.99 },
    { id: 11, name: 'Pizza', description: 'Classic margherita pizza', price: 12.99 },
    { id: 12, name: 'Hamburger', description: 'Classic margherita pizza', price: 12.99 },
    { id: 13, name: 'Spaghetti', description: 'Classic margherita pizza', price: 12.99 },
    // Add more items as needed
];

const App = () => {
    return (
        <Layout>
            <div className="container mx-auto mt-8">
                <h1 className="text-2xl font-bold mb-4">Our Menu</h1>
                <FoodMenu menuItems={menuItems} />
            </div>
        </Layout>

    );
};

export default App;
