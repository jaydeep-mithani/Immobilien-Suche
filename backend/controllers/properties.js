const Properties = require("../models/properties");

const searchProperties = async (req, res) => {
  try {
    const {
      pageNumber = 1,
      pageSize = 10,
      location,
      category,
      type,
      priceRange,
      areaRange,
      zimmer,
    } = req.body;

    const filter = {};

    if (location) filter.location = new RegExp(location, "i");
    if (category) filter.category = category;
    if (type) filter.type = type;
    if (zimmer) filter.zimmer = zimmer;
    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split("-").map(Number);
      filter.price = { $gte: minPrice, $lte: maxPrice };
    }
    if (areaRange) {
      const [minArea, maxArea] = areaRange.split("-").map(Number);
      filter.area = { $gte: minArea, $lte: maxArea };
    }

    const properties = await Properties.find(filter)
      .skip((pageNumber - 1) * pageSize)
      .limit(Number(pageSize));

    const totalProperties = await Properties.countDocuments(filter);

    res.json({
      totalProperties,
      properties,
      pageNumber: Number(pageNumber),
      pageSize: Number(pageSize),
      totalPages: Math.ceil(totalProperties / pageSize),
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = searchProperties;

const getLocations = async (req, res) => {
  try {
    const locations = await Properties.distinct("location");
    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching distinct locations");
  }
};

module.exports = getLocations;
