import { database } from "../services/watermelon";

export const logCategoryTable = async () => {
    const categories = await database.collections.get('categories');
    
    // Query all records from the 'categories' table
    const categoryRecords = await categories.query().fetch();
  
    // Log the contents of the table
    console.log('Categories Table:', categoryRecords.map(record => record._raw));
};
  