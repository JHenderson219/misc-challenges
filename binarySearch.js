const DATA = [
  {
    "name": "Stout",
    "age": 32,
    "id": "5be8cb6517f0541940fd76ff"
  },
  {
    "name": "Cook",
    "age": 29,
    "id": "5be8cb652afcb1df4c106f15"
  },
  {
    "name": "Dolores",
    "age": 58,
    "id": "5be8cb65e1b31e4c77aa0256"
  },
  {
    "name": "Robert",
    "age": 65,
    "id": "5be8cb65d50a5d9454da2ee4"
  },
  {
    "name": "Malone",
    "age": 23,
    "id": "5be8cb65232b12bab61a57d9"
  },
  {
    "name": "Cathy",
    "age": 24,
    "id": "5be8cb654524ca4c8da37290"
  },
  {
    "name": "Molly",
    "age": 64,
    "id": "5be8cb651bd75ce61d62f502"
  },
  {
    "name": "Lillian",
    "age": 24,
    "id": "5be8cb65827195cc9c71e2f1"
  },
  {
    "name": "Lori",
    "age": 30,
    "id": "5be8cb65bef0e3d9ad1f9c53"
  },
  {
    "name": "Guthrie",
    "age": 32,
    "id": "5be8cb659d265f3bc333e97c"
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

  _insert(node, root) {
    let direction;
    console.warn('inserting', node, 'on', root);
    if (node.get(this.sortParam) >= root.get(this.sortParam)) {
      direction = 'right';
      // if right is null, insert there
      // if node is greater than or equal to right, right.right = node
      // if node is less than right, right.left = node;
    } else {
      direction = 'left';
      // node is less than root
    }
   ;
    
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

let userBst = new UserBST('age');
DATA.forEach((user) => {
  userBst.push(new UserNode(user));
});

console.warn(userBst);