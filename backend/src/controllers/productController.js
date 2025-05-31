const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  console.log('Creating product:', req.body);
  try {
    const { name, description, price, stock, category, images } = req.body;

    const product = new Product({
      name,
      description,
      price,
      stock,
      category,
      images
    });

    await product.save();

    console.log('Product created successfully:', product);
    res.status(201).json({
      message: 'Product created successfully',
      product
    });

  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({
      message: 'Failed to create product',
      error: error.message
    });
  }
};

exports.getProducts = async (req, res) => {
  console.log('Fetching products');
  try {
    const products = await Product.find();
    console.log('Found products:', products);
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      message: 'Failed to fetch products',
      error: error.message
    });
  }
};

exports.updateProduct = async (req, res) => {
  console.log('Updating product:', req.params.id, req.body);
  try {
    const { id } = req.params;
    const updates = req.body;

    const product = await Product.findByIdAndUpdate(id, updates, { new: true });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    console.log('Product updated successfully:', product);
    res.json({
      message: 'Product updated successfully',
      product
    });

  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({
      message: 'Failed to update product',
      error: error.message
    });
  }
};

exports.deleteProduct = async (req, res) => {
  console.log('Deleting product:', req.params.id);
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    console.log('Product deleted successfully:', product);
    res.json({
      message: 'Product deleted successfully',
      product
    });

  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({
      message: 'Failed to delete product',
      error: error.message
    });
  }
};
