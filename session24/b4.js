let matrix = [];
let choice;

do {
    choice = prompt(`MENU:\n1. Nhập mảng 2 chiều\n2. Hiển thị mảng 2 chiều\n3. Tính tổng các phần tử\n4. Tìm phần tử lớn nhất và chỉ số\n5. Tính trung bình cộng của một hàng\n6. Đảo ngược các hàng\n7. Thoát\nLựa chọn của bạn:`);
    
    if (choice === '1') {
        let rows = parseInt(prompt("Nhập số hàng của mảng:"));
        let cols = parseInt(prompt("Nhập số cột của mảng:"));
        matrix = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                row.push(parseInt(prompt(`Nhập phần tử tại (${i}, ${j}):`)));
            }
            matrix.push(row);
        }
    } else if (choice === '2') {
        alert("Mảng 2 chiều:\n" + matrix.map(row => row.join(" ")).join("\n"));
    } else if (choice === '3') {
        let sum = 0;
        for (let row of matrix) {
            for (let num of row) {
                sum += num;
            }
        }
        alert("Tổng các phần tử: " + sum);
    } else if (choice === '4') {
        let max = -Infinity;
        let maxPos = "";
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] > max) {
                    max = matrix[i][j];
                    maxPos = `(${i}, ${j})`;
                }
            }
        }
        alert(`Phần tử lớn nhất: ${max} tại vị trí ${maxPos}`);
    } else if (choice === '5') {
        let rowIndex = parseInt(prompt("Nhập chỉ số hàng muốn tính trung bình:"));
        if (rowIndex >= 0 && rowIndex < matrix.length) {
            let sum = matrix[rowIndex].reduce((a, b) => a + b, 0);
            let avg = sum / matrix[rowIndex].length;
            alert(`Trung bình cộng hàng ${rowIndex}: ${avg}`);
        } else {
            alert("Chỉ số hàng không hợp lệ!");
        }
    } else if (choice === '6') {
        matrix.reverse();
        alert("Mảng sau khi đảo ngược hàng:\n" + matrix.map(row => row.join(" ")).join("\n"));
    }
} while (choice !== '7');
