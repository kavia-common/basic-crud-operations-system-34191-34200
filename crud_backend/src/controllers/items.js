const itemsService = require('../services/items');

class ItemsController {
  /**
   * Handle POST /items
   * Accepts JSON body and stores it as a new item.
   */
  // PUBLIC_INTERFACE
  create(req, res) {
    try {
      const payload = req.body;
      if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
        return res.status(400).json({
          status: 'error',
          message: 'Invalid payload: expected a JSON object',
        });
      }
      const item = itemsService.create(payload);
      return res.status(201).json({
        status: 'created',
        data: item,
      });
    } catch (err) {
      // Delegate to the global error handler
      return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
      });
    }
  }

  /**
   * Handle GET /items
   * Returns an array of all stored items.
   */
  // PUBLIC_INTERFACE
  list(req, res) {
    const list = itemsService.list();
    return res.status(200).json({
      status: 'ok',
      data: list,
      count: list.length,
    });
  }
}

module.exports = new ItemsController();
