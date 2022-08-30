import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";


const Categories = observer(() => {
    const {blogs} = useContext(Context);
    return (
        <div className="categories">
            <h1>Категории</h1>
            {blogs.categories.map(({id, title}) =>
                <button 
                    key={id}
                    onClick={() => blogs.setSelectedCategory(title)}
                    style={title === blogs._selectedCategory ? {color: "#007BFF"} : {color: "#000"}}
                    
                >
                    {title}
                </button>
            )}
        </div>
    );
});


export default Categories;