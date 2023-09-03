import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import { CategoryService } from "../services/categoryService";

export default function Categories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .getCategory()
      .then((result) => setCategory(result.data.data));
  });

  return (
    <div>
      <Menu pointing vertical>
        {category.map((category) => (
          <Menu.Item key={category.categoryId}>
            {category.categoryName}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
