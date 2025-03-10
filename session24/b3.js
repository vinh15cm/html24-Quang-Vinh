let choice = -1;
let arr = [];
do{
    choice = +prompt(`MENU \n1. Nhập vào mảng \n2. Hiển thị mảng \n3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó \n4. Tính tổng và trung bình cộng của các số dương trong mảng \n5. Đảo ngược mảng \n6. Kiểm tra mảng có đối xứng không \n7. Thoát chương trình \nNhập chức năng`);
    switch(choice){
        case 1:
            let value = prompt('Nhập giá trị vào mảng:');
            if(Number.isInteger(value) || value.trim() === ''){
                alert('Nhập không hợp lệ');
                break;
            }else{
                arr.push(Number(value));
            }
            break;
        case 2:
            alert(arr);
            break;
        case 3:
            if(arr == ''){
                alert('Không tồn tại mảng');
            }else{
                let max = -Infinity;
                let maxIndex = 0;
                arr.forEach((value, valueIndex) => {
                    if(value > max){
                        max = value;
                        maxIndex = valueIndex;
                    }
                })
                alert(`Phần tử lớn nhất là: ${max} \nVị trí index của nó là: ${maxIndex}`);
            }
            break;
        case 4:
            if(arr == ''){
                alert('Không tồn tại mảng');
            }else{
                let total = 0;
                let count = 0;
                arr.forEach(num =>{
                    if(num > 0){
                        count++;
                        total += num;
                    }
                });
                let average = total / count;
                alert(`Tổng của các số dương trong mảng là: ${total} \nTrung bình cộng của các số dương là: ${average.toFixed(3)}`);
            }
            break;
        case 5:
            if(arr == ''){
                alert('Không tồn tại mảng');
            }else{
                let newArr = [...arr];
                newArr.reverse();
                alert(newArr);
            }
            break;
        case 6:
            if(arr == ''){
                alert('Không tồn tại mảng');
            }else{
                let reverseArr = [...arr];
                reverseArr.reverse();
                if(JSON.stringify(arr) === JSON.stringify(reverseArr)){
                    alert(`Mảng đối xứng `);
                }else{
                    alert(`Mảng không đối xứng`);
                }
            }
            break;
        case 7:
            alert('Thoát thành công');
            break;
        default:
            alert('Nhập không hợp lệ');
            break;
    }
}
while(choice != 7);