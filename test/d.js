/* eslint-disable no-param-reassign */
// { name: '', id: 0, children: [] }

/**
 * @return {Array} name 数组
 */
function fn(json, id) {
  // 兼容数组
  if (Array.isArray(json)) {
    json = {
      children: json,
    };
  }
  // 找到了，返回 [json.name]
  if (json.id === id) {
    return [json.name];
  }
  // 没找到，没有 children，返回 []
  if (!json.children) {
    return [];
  }
  // 在 children 中找
  const target = json.children.find((item) => item.id === id);
  if (target) {
    // children 中找到了
    return [json.name, target.name];
  }
  const result = [];
  // children 中没找到，递归遍历 children item
  for (let i = 0; i < json.children.length; i += 1) {
    const itemResult = fn(json.children[i], id);
    if (itemResult.length) {
      // 如果在 item 中找到了，再把 json.name、itemResult push 到 result 中
      result.push(json.name, ...itemResult);
      break;
    }
  }
  return result;
}

const a = [
  {
    name: 'A',
    id: 1,
    children: [
      {
        name: 'B',
        id: 2,
        children: [
          {
            name: 'C',
            id: 3,
          },
          {
            name: 'D',
            id: 4,
            children: [
              {
                name: 'I',
                id: 11,
              },
              {
                name: 'K',
                id: 12,
              },
            ],
          },
        ],
      },
      {
        name: 'E',
        id: 5,
        children: [
          {
            name: 'F',
            id: 6,
          },
        ],
      },
    ],
  },
  {
    name: 'H',
    id: 8,
  },
];
console.log(fn(a, 3));
