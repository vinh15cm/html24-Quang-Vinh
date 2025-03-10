let arr = [];
let choice;
do{
alert(`==============MENU===================
    1, nhap mang
    2,hien thi mang
    3,tim phan tu lon nhat va nho nhat trong mang
    4,tinh tong cac phan tu trong mang
    5,tim so lan xuat hien cua 1 phan tu trong mang
    6, sap xep mang tang dan
    7,thoat chuong trinh
    ==========================================
    `);
    choice = +prompt("moi ban chon chuc nang");
    switch(choice){
        case 1:
            let n = +prompt(" nhap so phan tu cua mang :");
            arr = [];
            for(let i = 0; i < n; i++){
                arr[i] = +prompt("nhap phan tu thu " + (i+1));
            }
            break;
        case 2:
            console.log("mang hien tai :"+ arr.join(","));
            break;
        case 3:
            let max = arr[0];
            let min = arr[0];
            for(let i = 1; i < arr.length; i++){
                if(arr[i] > max){
                    max = arr[i];
                }
                if(arr[i] < min){
                    min = arr[i];
                }
            }
            console.log("phan tu lon nhat trong mang la :"+ max);
            console.log("phan tu nho nhat trong mang la :"+ min);
            break;
        case 4:
            let numArr = arr.map(Number);
            let sum = 0;
             for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
}

console.log("Tổng các phần tử trong mảng là: " + sum);
            break;

        case 5:
            let x = +prompt("nhap phan tu can tim :");
            let count =0;
            for (let i =0;i<arr.length;i++){
                if(arr[i]==x){
                    count++;
                }
            }
            console.log(`phan tu ${ x } xuat hien ${ count } lan`);
            break;
        case 6:
            arr.sort((a,b)=>a-b);
            console.log("mang sau khi sap xep la :"+ arr.join(","));
            break;
        case 7:
            console.log("Thoát chương trình...");
         process.exit();

        default:
                console.log("ban chon chuc nang khong hop le!");
    }
    

}while(choice !==0)