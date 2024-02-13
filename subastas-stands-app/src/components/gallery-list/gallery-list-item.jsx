import { Link } from "react-router-dom";
function ListItem({ item }) {

    return (            
        
        <div className=" shadow-md border rounded-lg">
            <Link to={item.href} target="_blank">
                <div className="w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 shadow-md border rounded-lg">
                <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover object-top group-hover:opacity-75"
                />
                </div>
            </Link>
        </div>
    )
}

export default ListItem;