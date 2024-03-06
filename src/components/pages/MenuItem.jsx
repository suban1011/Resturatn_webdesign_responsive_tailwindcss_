
// eslint-disable-next-line react/prop-types
const MenuItem = ({ name, description, price }) => {
    return (
        <div className="border p-4 my-2">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="text-sm text-gray-700 mt-2">${price}</p>
        </div>
    );
};

export default MenuItem;
