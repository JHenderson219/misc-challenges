const DATA = [
  {
    "name": "Stout",
    "age": 32,
    "id": 5
  },
  {
    "name": "Cook",
    "age": 29,
    "id": 3
  },
  {
    "name": "Dolores",
    "age": 58,
    "id": 4
  },
  {
    "name": "Robert",
    "age": 65,
    "id": 7
  },
  {
    "name": "Malone",
    "age": 23,
    "id": 6
  },
  {
    "name": "Cathy",
    "age": 24,
    "id": 8
  },
  {
    "name": "Molly",
    "age": 64,
    "id": 1
  },
  {
    "name": "Lillian",
    "age": 24,
    "id": 10
  },
  {
    "name": "Lori",
    "age": 30,
    "id": 2
  },
  {
    "name": "Guthrie",
    "age": 32,
    "id": 9
  }
]


class UserBST {
  constructor(sortKey){
    this.root = null;
    this.sortKey = sortKey;
  }
  push(node, root = this.root) {
    if (root === null) {
      this.root = node;
      return node;
    }
    this._insert(node, root);

    return node;
  }
  find(id, node = this.root) {
    if (node.id === id) {
      return node;
    }
    let found;
    let direction = this._selectDirection(id, node.get(this.sortKey));
    let rootDirection = node[direction];
    if (node[direction] !== null) {
      return this.find(id, node[direction]);
    }
    throw new Error(`Could not find element in tree matching key ${id}`);
  }
  delete(id) {
    let user = this.find(id);
    console.warn('deleting user', user);
    // TODO: actually delete user
  }
  _selectDirection(key, rootKey) {
    let direction;
    if (key >= rootKey) {
      direction = 'right';
    } else {
      direction = 'left';
    }
    return direction;
  }

  _insert(node, root) {
    let direction = this._selectDirection(node.get(this.sortKey), root.get(this.sortKey));
    if (root[direction] !== null) {
      this._insert(node, root[direction]);
    } else {
      root[direction] = node;
    }
  }
}

class UserNode {
  constructor(user) {
    this.name = user.name;
    this.age = user.age;
    this.id = user.id;
    this.left = null;
    this.right = null;
  }
  get(param) {
    return this[param];
  }
}

let userBst = new UserBST('id');
DATA.forEach((user) => {
  userBst.push(new UserNode(user));
});

console.warn(userBst.find(6));