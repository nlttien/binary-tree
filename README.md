# Binary Tree Exercises - JavaScript

Bộ bài tập toàn diện về cây nhị phân (Binary Tree) được viết bằng JavaScript. Thư viện này cung cấp các thuật toán và cấu trúc dữ liệu cơ bản đến nâng cao cho việc học tập và thực hành.

## 📚 Nội dung

### Cấu trúc dữ liệu cơ bản
- **BinaryTreeNode**: Lớp node cơ bản cho cây nhị phân
- **BinarySearchTree**: Cây tìm kiếm nhị phân với các thao tác cơ bản

### Bài tập theo chủ đề

#### 1. Duyệt cây (Tree Traversal) - `exercises/01-tree-traversal.js`
- Duyệt theo thứ tự giữa (Inorder)
- Duyệt theo thứ tự trước (Preorder) 
- Duyệt theo thứ tự sau (Postorder)
- Duyệt theo từng mức (Level-order/BFS)
- Duyệt không đệ quy (Iterative)

#### 2. Tính chất của cây (Tree Properties) - `exercises/02-tree-properties.js`
- Tính chiều cao cây
- Tính độ sâu của node
- Đếm số node và node lá
- Tìm giá trị min/max
- Tính đường kính cây
- So sánh hai cây

#### 3. Kiểm tra tính hợp lệ (Tree Validation) - `exercises/03-tree-validation.js`
- Kiểm tra cây tìm kiếm nhị phân hợp lệ
- Kiểm tra cây cân bằng
- Kiểm tra cây hoàn chỉnh
- Kiểm tra cây hoàn hảo
- Kiểm tra cây đối xứng
- Kiểm tra cây con

#### 4. Đường đi và tổng (Path and Sum) - `exercises/04-path-and-sum.js`
- Tìm tất cả đường đi từ gốc đến lá
- Kiểm tra đường đi có tổng cho trước
- Tìm đường đi có tổng lớn nhất
- Tìm tổ tiên chung gần nhất (LCA)
- Tính khoảng cách giữa hai node

#### 5. Xây dựng cây (Tree Construction) - `exercises/05-tree-construction.js`
- Xây dựng từ duyệt preorder và inorder
- Xây dựng từ duyệt inorder và postorder
- Xây dựng từ duyệt level-order
- Xây dựng BST từ mảng đã sắp xếp
- Xây dựng từ chuỗi ký tự
- Serialize và deserialize

## 🚀 Cài đặt và sử dụng

```bash
# Clone repository
git clone https://github.com/nlttien/binary-tree.git
cd binary-tree

# Chạy demo
npm start

# Chạy tất cả tests
npm test

# Chạy test riêng lẻ
node test/test-basic.js
node test/test-traversal.js
node test/test-properties.js
node test/test-validation.js
node test/test-path-sum.js
node test/test-construction.js
```

## 💡 Ví dụ sử dụng

### Tạo và sử dụng Binary Search Tree

```javascript
const { BinarySearchTree } = require('./index');

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(9);

console.log(bst.inorderTraversal()); // [1, 3, 5, 7, 9]
console.log(bst.search(7)); // true
console.log(bst.height()); // 2
```

### Duyệt cây

```javascript
const { BinaryTreeNode, traversalExercises } = require('./index');

// Tạo cây:    1
//            / \
//           2   3
//          / \
//         4   5

const root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.right = new BinaryTreeNode(3);
root.left.left = new BinaryTreeNode(4);
root.left.right = new BinaryTreeNode(5);

console.log(traversalExercises.inorderTraversal(root));   // [4, 2, 5, 1, 3]
console.log(traversalExercises.preorderTraversal(root));  // [1, 2, 4, 5, 3]
console.log(traversalExercises.postorderTraversal(root)); // [4, 5, 2, 3, 1]
console.log(traversalExercises.levelOrderTraversal(root)); // [1, 2, 3, 4, 5]
```

### Tính chất cây

```javascript
const { propertiesExercises } = require('./index');

console.log(propertiesExercises.height(root));     // 2
console.log(propertiesExercises.countNodes(root)); // 5
console.log(propertiesExercises.countLeaves(root)); // 3
console.log(propertiesExercises.findMin(root));    // 1
console.log(propertiesExercises.findMax(root));    // 5
```

### Kiểm tra tính hợp lệ

```javascript
const { validationExercises } = require('./index');

console.log(validationExercises.isValidBST(root));   // Kiểm tra BST hợp lệ
console.log(validationExercises.isBalanced(root));   // Kiểm tra cây cân bằng
console.log(validationExercises.isComplete(root));   // Kiểm tra cây hoàn chỉnh
console.log(validationExercises.isSymmetric(root));  // Kiểm tra cây đối xứng
```

### Tìm đường đi và tổng

```javascript
const { pathSumExercises } = require('./index');

console.log(pathSumExercises.findAllPaths(root));        // Tất cả đường đi gốc-lá
console.log(pathSumExercises.hasPathSum(root, 7));       // Có đường đi tổng = 7?
console.log(pathSumExercises.maxPathSum(root));          // Tổng đường đi lớn nhất
```

### Xây dựng cây

```javascript
const { constructionExercises } = require('./index');

// Từ mảng đã sắp xếp
const sortedArray = [1, 2, 3, 4, 5, 6, 7];
const balancedBST = constructionExercises.buildBSTFromSortedArray(sortedArray);

// Từ preorder và inorder
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
const tree = constructionExercises.buildTreeFromPreorderInorder(preorder, inorder);

// Từ chuỗi
const treeFromString = constructionExercises.buildTreeFromString("1(2(4)(5))(3()(6))");
```

## 🧪 Kiểm thử

Dự án bao gồm bộ test toàn diện với hơn 80 test cases:

- **test-basic.js**: Test các lớp cơ bản
- **test-traversal.js**: Test các thuật toán duyệt cây
- **test-properties.js**: Test tính chất cây
- **test-validation.js**: Test kiểm tra tính hợp lệ
- **test-path-sum.js**: Test đường đi và tổng
- **test-construction.js**: Test xây dựng cây

## 📁 Cấu trúc thư mục

```
binary-tree/
├── src/                          # Mã nguồn chính
│   ├── binary-tree-node.js       # Lớp node cơ bản
│   └── binary-search-tree.js     # Cây tìm kiếm nhị phân
├── exercises/                    # Bài tập theo chủ đề
│   ├── 01-tree-traversal.js      # Duyệt cây
│   ├── 02-tree-properties.js     # Tính chất cây
│   ├── 03-tree-validation.js     # Kiểm tra tính hợp lệ
│   ├── 04-path-and-sum.js        # Đường đi và tổng
│   └── 05-tree-construction.js   # Xây dựng cây
├── test/                         # Bộ test
│   ├── test-utils.js             # Tiện ích test
│   ├── test-basic.js             # Test cơ bản
│   ├── test-traversal.js         # Test duyệt cây
│   ├── test-properties.js        # Test tính chất
│   ├── test-validation.js        # Test kiểm tra
│   ├── test-path-sum.js          # Test đường đi
│   ├── test-construction.js      # Test xây dựng
│   └── test-all.js               # Chạy tất cả test
├── index.js                      # File chính
├── package.json                  # Cấu hình npm
└── README.md                     # Tài liệu này
```

## 🎯 Mục tiêu học tập

Thư viện này giúp bạn:

1. **Hiểu cấu trúc dữ liệu cây**: Node, BST, các loại cây đặc biệt
2. **Thuật toán duyệt**: DFS (inorder, preorder, postorder), BFS
3. **Thuật toán tìm kiếm**: Tìm kiếm, kiểm tra tính hợp lệ
4. **Thuật toán đường đi**: LCA, khoảng cách, tổng đường đi
5. **Xây dựng cây**: Từ nhiều dạng dữ liệu khác nhau
6. **Tối ưu hóa**: Cây cân bằng, phức tạp thời gian và không gian

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request để:
- Thêm bài tập mới
- Cải thiện thuật toán
- Sửa lỗi
- Cải thiện tài liệu

## 📜 Giấy phép

ISC License