const CategorySchema = require('../models/Category');

// create a new category
const create = async (req, res) => {
    const { name } = req.body;
    const category = new CategorySchema({ name });
    try {
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get all categories
const getAll = async (req, res) => {
    try {
        const categories = await CategorySchema.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get a category by id
const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await CategorySchema.findById(id);
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// update a category by id
const updateById = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const category = await CategorySchema.findByIdAndUpdate
            (id, { name }, { new: true });
        res.status(200).json(category);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// delete a category by id
const deleteById = async (req, res) => {
    const { id } = req.params;
    try {
        await CategorySchema.findByIdAndDelete(id);
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById
}
