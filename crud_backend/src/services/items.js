let items = [];
let nextId = 1;

/**
 * Simple in-memory items service.
 * Note: Data is reset on server restart. For persistence, integrate a database.
 */
class ItemsService {
  // PUBLIC_INTERFACE
  /**
   * Create a new item from provided data.
   * Ensures each item has a unique numeric id.
   * @param {object} data - Arbitrary JSON object describing the item.
   * @returns {object} The created item including an auto-generated id.
   */
  create(data) {
    const item = {
      id: nextId++,
      ...data,
    };
    items.push(item);
    return item;
  }

  // PUBLIC_INTERFACE
  /**
   * Retrieve all stored items.
   * @returns {object[]} Array of items.
   */
  list() {
    return items;
  }
}

module.exports = new ItemsService();
