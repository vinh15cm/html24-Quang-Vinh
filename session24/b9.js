let str = "";
let choice;

do {
    choice = prompt(`MENU:\n1. Nhập chuỗi\n2. Hiển thị chuỗi\n3. Đếm số lượng chữ cái và số trong chuỗi\n4. Đảo ngược chữ hoa/thường\n5. Trộn chuỗi với chuỗi thứ hai\n6. Sắp xếp từ theo độ dài\n7. Thoát\nLựa chọn của bạn:`);
    
    if (choice === '1') {
        str = prompt("Nhập chuỗi ký tự:");
    } else if (choice === '2') {
        alert("Chuỗi hiện tại: " + str);
    } else if (choice === '3') {
        let letterCount = (str.match(/[a-zA-Z]/g) || []).length;
        let digitCount = (str.match(/[0-9]/g) || []).length;
        alert(`Số chữ cái: ${letterCount}, Số chữ số: ${digitCount}`);
    } else if (choice === '4') {
        let swappedStr = str.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
        alert("Chuỗi sau khi chuyển đổi: " + swappedStr);
    } else if (choice === '5') {
        let str2 = prompt("Nhập chuỗi thứ hai:");
        let mixed = "";
        let maxLength = Math.max(str.length, str2.length);
        for (let i = 0; i < maxLength; i++) {
            if (i < str.length) mixed += str[i];
            if (i < str2.length) mixed += str2[i];
        }
        alert("Chuỗi sau khi trộn: " + mixed);
    } else if (choice === '6') {
        let sortedWords = str.split(/\s+/).sort((a, b) => a.length - b.length).join(" ");
        alert("Chuỗi sau khi sắp xếp theo độ dài từ: " + sortedWords);
    }
} while (choice !== '7');
