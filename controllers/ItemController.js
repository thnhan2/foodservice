const Item = require("../models/Item");
const domain = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://food-delivery-api-v1.herokuapp.com";

// Get all items
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get single item by ID
const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new item
const createItem = async (req, res) => {
  try {
    const newItem = new Item({
      name: {
        en: req.body.name.en || "",
        vn: req.body.name.vn || "",
      },
      categoryId: req.body.categoryId,
      active: req.body.active || true,
      price: req.body.price,
      description: {
        en: req.body.description.en || "",
        vn: req.body.description.vn || "",
      },
      unit: {
        en: req.body.unit.en || "",
        vn: req.body.unit.vn || "",
      },
      imageUrl: ""
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const uploadItemImage = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    if (req.file) {
        const protocol = req.protocol;
const host = req.get('host');
const baseUrl = `${protocol}://${host}`;

// Bây giờ bạn có thể sử dụng baseUrl khi cần thiết
const imageUrl = `${baseUrl}\\${req.file.path}`;
    //     const baseurl = req.baseUrl;
    //   const urlpath   = baseurl +"\\" + req.file.path;
    //   item.imageUrl = urlpath.replace(/\\+/g, '\\');
      item.imageUrl = imageUrl;

    }
    console.log(item)
    const savedItem = await item.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an existing item
const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete an item
const deleteItem = async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Export controller actions
module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  uploadItemImage,
  deleteItem,
};
