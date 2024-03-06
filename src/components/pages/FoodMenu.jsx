
import MenuItem from './MenuItem';

const FoodMenu = ({ menuItems }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {menuItems.map((item) => (
                <MenuItem key={item.id} {...item} />
            ))}
        </div>
    );
};

export default FoodMenu;
