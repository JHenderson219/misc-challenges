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
  constructor(sortParam){
    this.root = null;
    this.sortParam = sortParam;
  }
  push(node, root = this.root) {
    if (root === null) {
      this.root = node;
      return node;
    }
    this._insert(node, root);

    return node;
  }
  find() {

  }
  delete() {

  }
  _insert(node, root) {
    let direction;
    if (node.get(this.sortParam) >= root.get(this.sortParam)) {
      direction = 'right';
      // if right is null, insert there
      // if node is greater than or equal to right, right.right = node
      // if node is less than right, right.left = node;
    } else {
      direction = 'left';
      // node is less than root
    }
    
    if (root[direction] !== null) {
      this._insert(node,  root[direction]);
    } else {
      root[direction] = node;
    }
    // if left is null, insert there
    // if node is greater than or equal to left, left.right = node
    // if node is less than left, left.left = node;
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

console.warn(userBst);