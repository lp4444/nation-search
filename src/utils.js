const paginate = (nations) => {
  const itemsPerPage = 25;
  const numberOfPages = Math.ceil(nations.length / itemsPerPage);

  const newNations = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return nations.slice(start, start + itemsPerPage);
  });
  return newNations;
};

export default paginate;
