let products = []; // Aquí puedes usar una base de datos real

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.createProduct = (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Producto no encontrado');
  }
};

exports.updateProduct = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    Object.assign(product, req.body);
    res.json(product);
  } else {
    res.status(404).send('Producto no encontrado');
  }
};

exports.deleteProduct = (req, res) => {
  products = products.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).send();
};

