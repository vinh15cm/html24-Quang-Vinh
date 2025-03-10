let arr = [];
let choice;
do {
   alert(`
    ================MENU===============
    1, nhap mang so nguyen
    2, hien thi mang
    3, tim cac phan tu chan va le
    4, tinh trung binh cong cua mang
    5,xoa phan tu tai vi tri chi dinh
    6,tim phan tu lon thu hai trong mang
    7,thoat chuong trinh
    ==========================================
    `)
    choice = +prompt("moi ban chon chuc nang");
    switch (choice){
        case 1:
            let n = +prompt("moi ban nhap so phan tu cua mang :");
            for (let i =0; i < n ; i++){
                arr[i] = +prompt("nhap phan tu thu"+(i+1));
            }
            break;
        case 2:
            console.log("mang hien tai :"+arr.join(", "));
            break;
        case 3:
            let even =0 ;
            let odd =0;
            for (let i=0; i<arr.length; i++){
                if (arr[i]%2 ===0){
                    even ++
                }else{
                    odd ++
                }
            }
            console.log(`mang co tat ca ${even} so chan`);
                console.log(`mang co tat ca ${odd} so le `);
                break;
        case 4:
            let sum =0;
            for (let i=0; i < arr.length; i++){
                sum += arr[i];
            }
            console.log("trung binh cong cua mang la:" +sum/arr.length);
            break;
        case 5:
            let index = +prompt("moi ban nhap vi tri can xoa :");
            if(index-1 >= 0 && index-1 < arr.length){
                arr.splice(index-1 , 1);
            }
            else{
                console.log("vi tri khong hop le");
            }
            break;
        case 6:
            arr.sort((a,b)=>a-b);
            console.log("so lon thu hai cua mang la :" + arr[arr.length-2]);
            break;
            case 7:
            console.log("Thoát chương trình...");
         process.exit();

        default:
                console.log("ban chon chuc nang khong hop le!");
    }
}while(choice !== 0)