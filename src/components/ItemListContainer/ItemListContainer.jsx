const ItemListContainer = ({ greeting }) => {
    return (
        <div className="flex justify-center text-2xl">
            <div >
                {greeting}
            </div>
        </div>
    );
};

export default ItemListContainer;