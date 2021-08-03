function listToTree(list, parentAccessor, accessor) {
  const map = {};
  const roots = [];

  list.forEach((currentValue, index) => {
    map[currentValue[accessor]] = index;
    list[index].children = [];
  });

  list.forEach(currentValue => (!!currentValue[parentAccessor] ? list[map[currentValue[parentAccessor]]].children.push(currentValue) : roots.push(currentValue)));

  return roots;
}

//Usage example
listToTree(list, 'parentId', 'id');
